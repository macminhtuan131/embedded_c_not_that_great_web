(() => {
  const esc=window.Visualizers.esc;
  const hex=(value,width=2)=>"0x"+value.toString(16).toUpperCase().padStart(width,"0");
  const bytes=values=>values.length?values.map(value=>hex(value)).join(" "):"Không có byte";
  const entries=(values,format)=>Object.entries(values??{}).map(([key,value])=>format(key,value)).join(" · ");
  const level=value=>value?"HIGH":"LOW";
  const waveDetails=test=>test.edges?
    `${test.edges.pin}: ${test.edges.period} chu kỳ CPU giữa hai cạnh, ít nhất ${test.edges.min} cạnh`:
    test.pwm?`${test.pwm.pin}: chu kỳ ${test.pwm.period}, mức HIGH khoảng ${test.pwm.high} chu kỳ CPU`:"";
  const label=(test,index)=>`Ca ${index+1}${test.label?" · "+test.label:""}`;
  const signalRows=(test,result,predict)=>{
    const rows=[
      ["Mức chân lúc reset",entries(test.pins,(pin,v)=>pin+" = "+level(v))],
      ["Thay đổi sau reset",test.events?.map(([at,pin,v])=>pin+" = "+level(v)+" ở chu kỳ "+at).join(" · ")],
      ["USART0 RX · PD0",test.rx?.length?bytes(test.rx):""],
      ["ADC0 · PC0",test.adc===undefined?"":test.adc.toLocaleString("vi-VN")+" V / AVcc "+(test.avcc??5)+" V"],
      ["SPI nhận · PB4",test.spi?bytes(test.spi):""],
      ["TWI · PC4 / PC5",test.twi?`Thiết bị ${hex(test.twiAddress??0x48)}, trả ${bytes(test.twi)}`:
        test.twiSent?"Không có thiết bị phản hồi":""],
      ["EEPROM lúc reset",entries(test.eeprom,(addr,v)=>"["+addr+"] = "+hex(v))]
    ];
    const checks=[
      ["USART0 TX · PD1",test.tx?bytes(test.tx):"",result&&bytes(result.tx)],
      ["Thanh ghi",entries(test.regs,(reg,v)=>reg+" = "+hex(v)),result&&entries(test.regs,reg=>reg+" = "+hex(result.registers[reg]))],
      ["EEPROM sau khi chạy",entries(test.eepromCheck,(addr,v)=>"["+addr+"] = "+hex(v)),result&&entries(result.saved,(addr,v)=>"["+addr+"] = "+hex(v))],
      ["Byte ghi SPDR",test.spiSent?bytes(test.spiSent):"",result&&bytes(result.sent)],
      ["Địa chỉ TWI trên dây",test.twiSent?bytes(test.twiSent):"",result&&bytes(result.twiAddress)],
      ["Tín hiệu theo thời gian",waveDetails(test),result?.measurement?[
        result.measurement.pin,
        (result.measurement.interval??"—")+" chu kỳ giữa "+(test.pwm?"hai cạnh lên":"hai cạnh"),
        result.measurement.high===undefined?"":(result.measurement.high??"—")+" chu kỳ ở mức HIGH"
      ].filter(Boolean).join(" · "):"—"]
    ];
    return `<dl class="avr-signals">${rows.filter(([,v])=>v).map(([key,value])=>`<div><dt>${esc(key)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl>
      <div class="table-wrap"><table class="avr-table"><thead><tr><th>Đầu ra</th><th>Kỳ vọng</th>${result?"<th>Đo được</th>":""}</tr></thead>
      <tbody>${checks.filter(([,v])=>v).map(([key,expected,actual])=>`<tr><th scope="row">${esc(key)}</th><td>${predict&&!result?"—":esc(expected)}</td>${result?"<td>"+esc(actual)+"</td>":""}</tr>`).join("")}</tbody></table></div>`;
  };

  function pinsTable(registers,port) {
    const row=(prefix,label)=>`<tr><th scope="row">${label}</th>${bits.map(bit=>{
      const value=registers[prefix+port]>>bit&1;
      return `<td class="${value?"avr-one":""}">${value}</td>`;
    }).join("")}</tr>`;
    const bits=port==="C"?[5,4,3,2,1,0]:[7,6,5,4,3,2,1,0];
    return `<div class="table-wrap"><table class="avr-table avr-pin-table">
      <thead><tr><th scope="col">Cổng ${port}</th>${bits.map(bit=>`<th scope="col">P${port}${bit}</th>`).join("")}</tr></thead>
      <tbody>${row("DDR","DDR"+port)}${row("PORT","PORT"+port)}${row("PIN","PIN"+port)}</tbody></table></div>`;
  }


  function wiring(lab) {
    const unique=values=>[...new Set(values)];
    const tests=lab.cases;
    const has=field=>tests.some(test=>Object.hasOwn(test,field));
    const registers=unique([
      ...tests.flatMap(test=>Object.keys(test.regs??{})),
      ...(has("tx")?["UDR0","UCSR0A","UCSR0B","UCSR0C"]:[]),
      ...(has("adc")?["ADMUX","ADCSRA","ADCL","ADCH"]:[]),
      ...(has("spi")?["SPDR","SPCR","SPSR"]:[]),
      ...(has("twi")?["TWDR","TWCR","TWSR","TWBR"]:[]),
      ...(has("eepromCheck")?["EEAR","EEDR","EECR"]:[])
    ]);
    const inputPins=unique(tests.flatMap(test=>[
      ...Object.keys(test.pins??{}),...(test.events??[]).map(event=>event[1])
    ])).sort();
    if(tests.some(test=>test.rx?.length)) inputPins.push("PD0/RXD");
    if(has("adc")) inputPins.push("PC0/ADC0");
    if(has("spi")) inputPins.push("PB4/MISO");
    if(has("twi")) inputPins.push("PC4/SDA · PC5/SCL");
    if(has("eeprom")) inputPins.push("EEPROM đã nạp");
    const endpoints={
      ...(has("spi")?{PB2:"PB2/SS",PB3:"PB3/MOSI",PB5:"PB5/SCK"}:{}),
      ...(has("tx")?{PD1:"PD1/TXD"}:{}),
      ...(has("pwm")?{PD6:"PD6/OC0A"}:{}),
      ...(tests.some(test=>test.edges?.pin==="PB1")?{PB1:"PB1/OC1A"}:{})
    };
    const outPins=unique([
      ...(window.AvrOutputPins?.[lab.id]??[]).map(pin=>endpoints[pin]??pin),
      ...(has("tx")?["PD1/TXD"]:[]),
      ...(has("twi")?["PC4/SDA · PC5/SCL"]:[]),
      ...(has("eepromCheck")?["EEPROM"]:[])
    ]);
    const field=(label,pins,about)=>`<div><dt>${label}</dt>
      ${pins.length?`<dd class="avr-mono">${esc(pins.join(" · "))}</dd>`:""}
      ${about?`<dd>${esc(about)}</dd>`:""}</div>`;
    return `<dl class="avr-wiring">
      ${field("Đầu vào",inputPins,lab.input)}${field("Đầu ra",outPins,lab.output)}
      ${field("Thanh ghi",registers,lab.registers)}</dl>`;
  }
  function download(filename,data) {
    const link=document.createElement("a");
    link.href=URL.createObjectURL(new Blob([data],{type:"text/plain;charset=utf-8"}));
    link.download=filename;
    link.click();
    setTimeout(()=>URL.revokeObjectURL(link.href),1000);
  }
  function render(root,id,options={}) {
    const lab=window.AvrLabs.labs[id];
    const reference=window.AvrImages[id];
    root.innerHTML=`<section class="panel avr-panel">
      <header class="avr-head"><div><span class="eyebrow">ATMEGA328P · 16 MHz</span><h2>Bàn thực hành AVR</h2></div>
        <span class="badge">AVR8js</span></header>
      ${options.example?`<p class="avr-example">${esc(lab.title)}</p>`:""}
      <div class="avr-controls"><label>Ca kiểm tra<select data-avr="case">${lab.cases.map((test,index)=>`<option value="${index}">${esc(label(test,index))}</option>`).join("")}</select></label>
      <div data-avr="signals"></div>
      <div class="avr-buttons"><button class="btn primary" data-avr="sample">Chạy HEX mẫu</button><button class="btn secondary" data-avr="all">Chạy tất cả ca</button>
      <label class="btn secondary avr-upload">Nạp HEX của bạn<input type="file" accept=".hex,text/plain" data-avr="file"></label></div>
      <div data-avr="result" role="status" aria-live="polite"></div>
      <p class="avr-note">Mỗi ca reset chip và cấp đầu vào riêng. USART, SPI và TWI mô phỏng dữ liệu ở mức byte. Với PWM, phép đo độ rộng chấp nhận sai số một nhịp Timer0 (4 µs).</p></div>
      <details class="avr-details"><summary>Soạn và tải mã C khởi đầu</summary><label class="avr-sr" for="avr-editor">Mã C khởi đầu</label>
      <textarea id="avr-editor" data-avr="editor" spellcheck="false"></textarea>
      <div class="avr-buttons"><button class="btn secondary" data-avr="c">Tải main.c</button><button class="btn secondary" data-avr="hex">Tải HEX mẫu</button></div>
      <p class="avr-note">Biên dịch mã đã sửa bằng avr-gcc rồi nạp tệp Intel HEX. Chạy HEX mẫu dùng firmware tham khảo đã biên dịch.</p>
      <pre class="snippet"><code>avr-gcc -std=gnu11 -Os -mmcu=atmega328p -DF_CPU=16000000UL main.c -o main.elf
avr-objcopy -O ihex -R .eeprom main.elf main.hex</code></pre></details>
      <details class="avr-details"><summary>Xem lời giải C bare-metal</summary><pre class="snippet"><code>${esc(lab.solution)}</code></pre><button class="btn secondary" data-avr="answer">Tải mã lời giải</button></details>
      </section>`;
    const find=key=>root.querySelector(`[data-avr="${key}"]`);
    const selector=find("case"), signals=find("signals"), status=find("result"), editor=find("editor"), file=find("file");
    editor.value=options.draft??lab.starter;
    let firmware=reference, source="HEX mẫu", results=new Map(), busy=false;
    const draw=()=>{
      const test=lab.cases[Number(selector.value)];
      const result=results.get(Number(selector.value));
      signals.innerHTML=signalRows(test,result,options.predict);
      if(!result) {
        status.innerHTML=`<p class="avr-status">${esc(source)} sẵn sàng. Chọn ca rồi chạy mô phỏng.</p>`;
        return;
      }
      const total=[...results.values()].filter(item=>item.ok).length;
      status.innerHTML=`<p class="avr-status ${result.ok?"avr-pass":"avr-fail"}"><strong>${result.ok?"Ca đạt":"Ca chưa đạt"}.</strong> ${total}/${results.size} ca đã chạy đạt · ${esc(source)}</p>
        ${result.failures.length?`<ul class="avr-errors">${result.failures.map(error=>`<li>${esc(error)}</li>`).join("")}</ul>`:""}
        <details class="avr-registers"><summary>Ảnh chụp PORT B, C, D và UART</summary><div class="table-wrap"><table class="avr-table"><thead><tr><th>Cổng</th><th>DDRx</th><th>PORTx</th><th>PINx</th></tr></thead>
        <tbody>${["B","C","D"].map(port=>`<tr><th scope="row">${port}</th>${["DDR","PORT","PIN"].map(prefix=>`<td>${hex(result.registers[prefix+port])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
        <div class="avr-pins">${["B","C","D"].map(port=>pinsTable(result.registers,port)).join("")}</div>
        <p>DDR: 0 là input, 1 là output. PORT là chốt. PIN là mức đọc ở thời điểm chụp. Chức năng USART và timer có thể điều khiển chân thay cho chốt PORT. Với bo 16 MHz dùng thạch anh và nút reset, PB6/PB7 và PC6 dành cho các chức năng đó.</p>
        <p>USART0 TX · ${esc(bytes(result.tx))}</p>
        <p>ASCII · <code>${esc(result.tx.map(b=>b>=32&&b<=126?String.fromCharCode(b):"·").join("")||"—")}</code></p>
        <p>Đã mô phỏng đến chu kỳ ${result.cycles.toLocaleString("vi-VN")}.</p></details>`;
    };
    const buttons=["sample","all"].map(find);
    async function run(all=false) {
      if(busy) return;
      busy=true;
      for(const button of buttons) button.disabled=true;
      file.disabled=true;
      status.innerHTML='<p class="avr-status">Đang mô phỏng firmware AVR…</p>';
      await new Promise(resolve=>setTimeout(resolve,0));
      try {
        const flash=window.AvrEngine.parseHex(firmware);
        const indices=all?lab.cases.keys():[Number(selector.value)];
        for(const index of indices) results.set(index,window.AvrEngine.execute(flash,lab.cases[index]));
        draw();
        if(source!=="HEX mẫu"&&results.size===lab.cases.length&&[...results.values()].every(result=>result.ok)) options.onPass?.();
      } catch(error) {
        status.innerHTML=`<p class="avr-status avr-fail">${esc(error.message)}</p>`;
      } finally {
        busy=false;
        for(const button of buttons) button.disabled=false;
        file.disabled=false;
      }
    }
    selector.addEventListener("change",draw);
    find("sample").addEventListener("click",()=>{
      if(source!=="HEX mẫu") {firmware=reference;source="HEX mẫu";results.clear();}
      run();
    });
    find("all").addEventListener("click",()=>run(true));
    file.addEventListener("change",async()=>{
      const selected=file.files[0];
      if(!selected) return;
      try {
        if(selected.size>220000) throw Error("Tệp HEX vượt giới hạn 220 KB.");
        const data=await selected.text();
        window.AvrEngine.parseHex(data);
        firmware=data;
        source="HEX đã nạp · "+selected.name;
        results.clear();
        await run(true);
      } catch(error) {
        status.innerHTML=`<p class="avr-status avr-fail">${esc(error.message)}</p>`;
      } finally { file.value=""; }
    });
    editor.addEventListener("input",()=>options.onDraft?.(editor.value));
    find("c").addEventListener("click",()=>download("main.c",editor.value));
    find("hex").addEventListener("click",()=>download(id+".hex",reference));
    find("answer").addEventListener("click",()=>download(id+".c",lab.solution));
    draw();
  }
  window.AvrBench={render,wiring};
})();

