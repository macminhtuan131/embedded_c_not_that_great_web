(() => {
  const clockHz=16000000;
  const addresses={
    PINB:0x23,DDRB:0x24,PORTB:0x25,PINC:0x26,DDRC:0x27,PORTC:0x28,PIND:0x29,DDRD:0x2A,PORTD:0x2B,
    TIFR0:0x35,PCIFR:0x3B,EIFR:0x3C,EIMSK:0x3D,EECR:0x3F,EEDR:0x40,EEARL:0x41,
    TCCR0A:0x44,TCCR0B:0x45,TCNT0:0x46,OCR0A:0x47,OCR0B:0x48,
    SPCR:0x4C,SPSR:0x4D,SPDR:0x4E,MCUSR:0x54,SREG:0x5F,WDTCSR:0x60,
    PCICR:0x68,EICRA:0x69,PCMSK0:0x6B,PCMSK1:0x6C,PCMSK2:0x6D,
    ADCL:0x78,ADCH:0x79,ADCSRA:0x7A,ADMUX:0x7C,DIDR0:0x7E,
    TCCR1A:0x80,TCCR1B:0x81,OCR1AL:0x88,OCR1AH:0x89,
    TWBR:0xB8,TWSR:0xB9,TWDR:0xBB,TWCR:0xBC,UCSR0A:0xC0,UCSR0B:0xC1,UCSR0C:0xC2,UBRR0L:0xC4,UBRR0H:0xC5,UDR0:0xC6
  };
  const registerOrder=["DDRB","PORTB","PINB","DDRC","PORTC","PINC","DDRD","PORTD","PIND"];
  const parseHex=text=>{
    if(typeof text!=="string" || text.length>220000) throw Error("Tệp HEX quá lớn.");
    const bytes=new Uint8Array(32768).fill(255);
    let base=0, loaded=0, ended=false, reset=false;
    for(const line of text.trim().split(/\r?\n/)) {
      if(!line.trim()) continue;
      if(ended || !/^:(?:[\da-f]{2}){5,}$/i.test(line)) throw Error("Bản ghi Intel HEX không hợp lệ.");
      const record=line.slice(1).match(/../g).map(part=>parseInt(part,16));
      const [length,high,low,type]=record;
      if(record.length!==length+5 || (record.reduce((sum,byte)=>sum+byte,0)&255)!==0) throw Error("Độ dài hoặc checksum HEX sai.");
      if(type===0) {
        const offset=base+(high<<8)+low;
        if(offset+length>bytes.length) throw Error("Dữ liệu nằm ngoài 32 KiB Flash của ATmega328P.");
        if(offset===0 && length>=2) reset=true;
        bytes.set(record.slice(4,4+length),offset);
        loaded+=length;
      } else if(type===1 && length===0) ended=true;
      else if((type===2 || type===4) && length===2) base=((record[4]<<8)+record[5])*(type===2?16:65536);
      else if(!([3,5].includes(type) && length===4)) throw Error("Loại bản ghi HEX không được hỗ trợ.");
    }
    if(!ended || !loaded || !reset) throw Error("Cần tệp HEX có điểm reset tại địa chỉ 0 và bản ghi kết thúc.");
    const flash=new Uint16Array(bytes.length/2);
    for(let i=0;i<flash.length;i++) flash[i]=bytes[2*i] | bytes[2*i+1]<<8;
    return flash;
  };
  function execute(flash,test) {
    const {
      CPU,avrInstruction,AVRIOPort,portBConfig,portCConfig,portDConfig,AVRUSART,usart0Config,
      AVRADC,adcConfig,AVRTimer,timer0Config,timer1Config,timer2Config,AVRSPI,spiConfig,
      AVRTWI,twiConfig,AVREEPROM,EEPROMMemoryBackend,AVRWatchdog,watchdogConfig,AVRClock,clockConfig
    }=globalThis.AVR8;
    const cpu=new CPU(flash,2048);
    const ports={
      B:new AVRIOPort(cpu,portBConfig),C:new AVRIOPort(cpu,portCConfig),D:new AVRIOPort(cpu,portDConfig)
    };
    for(const config of [timer0Config,timer1Config,timer2Config]) new AVRTimer(cpu,config);
    const clock=new AVRClock(cpu,clockHz,clockConfig);
    new AVRWatchdog(cpu,watchdogConfig,clock);
    const serial=new AVRUSART(cpu,usart0Config,clockHz);
    const tx=[];
    let txCount=0;
    serial.onByteTransmit=byte=>{txCount++;if(tx.length<128) tx.push(byte);};
    const adc=new AVRADC(cpu,adcConfig);
    // ADIF is write-one-to-clear on ATmega328P. AVR8js stores the written bit.
    const writeAdcsra=cpu.writeHooks[adcConfig.ADCSRA];
    cpu.writeHooks[adcConfig.ADCSRA]=(value,previous)=>{
      const adif=0x10;
      const next=(value&~adif)|(previous&~value&adif);
      if(value&adif) cpu.clearInterrupt(adc.ADC);
      writeAdcsra(next,previous);
      return true;
    };
    adc.avcc=test.avcc??5;
    adc.channelValues[0]=test.adc??0;
    const eeprom=new EEPROMMemoryBackend(1024);
    for(const [addr,value] of Object.entries(test.eeprom??{})) eeprom.memory[addr]=value;
    new AVREEPROM(cpu,eeprom);
    const spi=new AVRSPI(cpu,spiConfig,clockHz), sent=[];
    spi.onByte=value=>{
      const index=sent.length;
      if(sent.length<128)sent.push(value);
      cpu.addClockEvent(()=>spi.completeTransfer(test.spi?.[index]??255),spi.transferCycles);
    };
    const twi=new AVRTWI(cpu,twiConfig,clockHz);
    let twiIndex=0;
    const twiAddress=[];
    twi.eventHandler={
      start:()=>twi.completeStart(),
      stop:()=>twi.completeStop(),
      connectToSlave:(addr,write)=>{
        if(twiAddress.length<128)twiAddress.push((addr<<1)|Number(!write));
        twi.completeConnect(Boolean(test.twi) && addr===(test.twiAddress??0x48));
      },
      writeByte:()=>twi.completeWrite(true),
      readByte:()=>twi.completeRead(test.twi?.[twiIndex++]??255)
    };
    const traces={};
    const watch=new Set(["PB0","PB1","PB2","PB5","PD6",test.edges?.pin,test.pwm?.pin].filter(Boolean));
    for(const [name,port] of Object.entries(ports)) {
      const pins=[...watch].filter(pin=>pin[1]===name);
      port.addListener((level,previous)=>{
        for(const pin of pins) {
          const mask=1<<Number(pin[2]);
          if((cpu.data[addresses["DDR"+name]]&mask) && ((level^previous)&mask)) {
            const trace=traces[pin]??=[];
            if(trace.length<128) trace.push({cycle:cpu.cycles,high:Boolean(level&mask)});
          }
        }
      });
    }
    const drive=(pin,level)=>ports[pin[1]].setPin(Number(pin[2]),level);
    for(const [pin,level] of Object.entries(test.pins??{})) drive(pin,level);
    let event=0, rxIndex=0, nextRx=6000, error="";
    const rx=test.rx??[], events=test.events??[];
    const cycles=test.cycles??Math.max(22000,(rx.length+(test.tx?.length??0))*18000+20000);
    try {
      while(cpu.cycles<cycles) {
        if(cpu.pc<0 || cpu.pc>=flash.length) { error="PC ra ngoài Flash."; break; }
        while(events[event] && events[event][0]<=cpu.cycles) {
          const [,pin,level]=events[event++];
          drive(pin,level);
        }
        if(rxIndex<rx.length && cpu.cycles>=nextRx && serial.rxEnable && !serial.rxBusy) {
          if(serial.writeByte(rx[rxIndex])) { rxIndex++; nextRx=cpu.cycles+18000; }
        }
        avrInstruction(cpu);
        cpu.tick();
      }
    } catch(e) {error=e.message;}
    const registers=Object.fromEntries(Object.keys(addresses).map(name=>[name,cpu.data[addresses[name]]]));
    const saved=Object.fromEntries(Object.keys(test.eepromCheck??{}).map(addr=>[addr,eeprom.memory[addr]]));
    const failures=[];
    const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
    if(error) failures.push(error);
    if(test.tx && (txCount!==test.tx.length || !eq(tx,test.tx))) failures.push("Byte USART0 khác kỳ vọng.");
    for(const [reg,value] of Object.entries(test.regs??{})) {
      if(!(reg in addresses)) throw Error("Thanh ghi chưa được ánh xạ: "+reg);
      if(registers[reg]!==value) failures.push(reg+" khác kỳ vọng.");
    }
    for(const [addr,value] of Object.entries(test.eepromCheck??{})) if(saved[addr]!==value) failures.push("EEPROM["+addr+"] khác kỳ vọng.");
    if(test.spiSent && !eq(sent,test.spiSent)) failures.push("Byte ghi SPDR khác kỳ vọng.");
    if(test.twiSent && !eq(twiAddress,test.twiSent)) failures.push("Địa chỉ TWI khác kỳ vọng.");
    let measurement;
    if(test.edges) {
      const {pin,min,period,tolerance}=test.edges;
      const trace=traces[pin]??[];
      const tail=trace.slice(-2);
      const duration=tail.length===2?tail[1].cycle-tail[0].cycle:null;
      measurement={pin,interval:duration};
      if(trace.length<min || duration===null || Math.abs(duration-period)>tolerance) failures.push("Sai số cạnh hoặc khoảng cách cạnh trên "+pin+".");
    }
    if(test.pwm) {
      const {pin,period,high}=test.pwm;
      const trace=(traces[pin]??[]).slice(-6);
      const rise=trace.findIndex((edge,index)=>edge.high && index+2<trace.length);
      const interval=rise<0?null:trace[rise+2].cycle-trace[rise].cycle;
      const width=rise<0?null:trace[rise+1].cycle-trace[rise].cycle;
      measurement={pin,interval,high:width};
      if(interval===null || Math.abs(interval-period)>4 || Math.abs(width-high)>64) failures.push("Chu kỳ hoặc độ rộng xung PWM sai trên "+pin+".");
    }
    return {ok:failures.length===0,failures,registers,tx,saved,sent,twiAddress,traces,measurement,cycles:cpu.cycles};
  }
  globalThis.AvrEngine={parseHex,execute,registerOrder};
})();

