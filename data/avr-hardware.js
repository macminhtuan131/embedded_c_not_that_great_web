(() => {
  const {labs,S,A,G,pin,mix,serial,analog,gpio} = window.AvrLabs;
  const wantEdge = (pin, min, period, tolerance=8) => ({pin,min,period,tolerance});
  const timer0 = `static void timer0_init(void) {
    TCCR0A = _BV(WGM01);
    OCR0A = 249;
    TIFR0 = _BV(OCF0A);
    TCCR0B = _BV(CS01) | _BV(CS00);
}
static void wait_tick(void) {
    while (!(TIFR0 & _BV(OCF0A))) {}
    TIFR0 = _BV(OCF0A);
}`;
  const buttonLed = `    DDRD &= (uint8_t)~_BV(DDD2);
    PORTD |= _BV(PORTD2);
    DDRB |= _BV(DDB5);
    if (!(PIND & _BV(PIND2))) PORTB |= _BV(PORTB5);`;
  const buttonCases = [G(pin(2,false),{DDRB:32,PORTD:4,PORTB:32}),G(pin(2,true),{DDRB:32,PORTD:4,PORTB:0})];
  mix("mcu","Reset và khởi tạo firmware: kiểm thanh ghi trước và sau main",
    "Nút PD2 nối GND. Sau reset, cấu hình kéo lên và hướng PB5 trong main. Đặt điểm dừng ở main để xem DDRB ban đầu, sau đó chạy đến vòng lặp và đối chiếu giá trị. Đổi hai ca nút nhấn/thả.",
    buttonCases,buttonLed);
  gpio("gpio","GPIO AVR: đầu vào PD2, đầu ra PB5","Bật kéo lên ở PD2, lấy trạng thái từ PIND2 và phản ánh lên PB5 theo kiểu nút mức thấp, LED mức cao. Chụp DDRB, PORTD và PORTB. Xác định vì sao đọc PORTD không cho trạng thái đang nhấn.",
    buttonCases,buttonLed);
  gpio("avr-port-mapping","ATmega328P: PC0 và PD2 điều khiển LED PB5","PC0 là RUN, PD2 là INHIBIT. Cả hai tác động mức thấp. Bật kéo lên và cho LED PB5 sáng chỉ khi RUN nhấn và INHIBIT nhả. Kiểm hướng của cả ba cổng.",
    [G({PC0:false,PD2:true},{DDRB:32,DDRC:0,DDRD:0,PORTC:1,PORTD:4,PORTB:32}),
     G({PC0:false,PD2:false},{PORTB:0}),G({PC0:true,PD2:true},{PORTB:0})],
    `    DDRB |= _BV(DDB5);
    DDRC &= (uint8_t)~_BV(DDC0);
    DDRD &= (uint8_t)~_BV(DDD2);
    PORTC |= _BV(PORTC0);
    PORTD |= _BV(PORTD2);
    if (!(PINC & _BV(PINC0)) && (PIND & _BV(PIND2))) PORTB |= _BV(PORTB5);`);
  gpio("avr-pinb-toggle","Ghi 1 vào PINB: đảo PB5, giữ PB0","Đặt PB0 và PB5 làm đầu ra. Bật PB0. Khi PD2 ở mức thấp, ghi đúng một mặt nạ vào PINB để đảo PB5. Kiểm PB0 vẫn bằng 1 ở cả hai tình huống.",
    [G(pin(2,false),{DDRB:33,PORTB:33}),G(pin(2,true),{DDRB:33,PORTB:1})],
    `    DDRB |= _BV(DDB0) | _BV(DDB5);
    PORTB |= _BV(PORTB0);
    PORTD |= _BV(PORTD2);
    if (!(PIND & _BV(PIND2))) PINB = _BV(PINB5);`);
  mix("avr-pcint-groups","Ngắt PCINT của ba cổng và LED báo nhóm","Cấu hình PCINT0 trên PB0, PCINT9 trên PC1, PCINT20 trên PD4. Mỗi vector bật một LED riêng ở PB1, PB2 hoặc PB3. Dùng ca có riêng một chân đổi hoặc hai chân đổi, kiểm PCMSK0/1/2 và PCICR.",
    [
      {...G({PB0:true,PC1:true,PD4:true},{PCMSK0:1,PCMSK1:2,PCMSK2:16,PCICR:7,PORTB:3}),events:[[3000,"PB0",false]]},
      {...G({PB0:true,PC1:true,PD4:true},{PORTB:5}),events:[[3000,"PC1",false]]},
      {...G({PB0:true,PC1:true,PD4:true},{PORTB:13}),events:[[3000,"PD4",false],[6500,"PC1",false]]}
    ],
    `    DDRB |= 0x0EU;
    PORTB |= _BV(PORTB0);
    PORTC |= _BV(PORTC1);
    PORTD |= _BV(PORTD4);
    PCMSK0 |= _BV(PCINT0);
    PCMSK1 |= _BV(PCINT9);
    PCMSK2 |= _BV(PCINT20);
    PCIFR = _BV(PCIF0) | _BV(PCIF1) | _BV(PCIF2);
    PCICR |= _BV(PCIE0) | _BV(PCIE1) | _BV(PCIE2);
    sei();`,
    `ISR(PCINT0_vect) { PORTB |= _BV(PORTB1); }
ISR(PCINT1_vect) { PORTB |= _BV(PORTB2); }
ISR(PCINT2_vect) { PORTB |= _BV(PORTB3); }`);
  mix("volatile","volatile và ảnh chụp nguyên tử từ ISR INT0","Một cạnh xuống ở PD2/INT0 làm tăng bộ đếm uint16_t trong ISR. Khi nhận '?' qua USART0, chép nhất quán bộ đếm trong ATOMIC_BLOCK rồi gửi hai byte qua PD1. Thử không có xung và có hai xung.",
    [S([63],[0,0]),{...S([63],[0,2]),pins:{PD2:true},events:[[2000,"PD2",false],[2400,"PD2",true],[4000,"PD2",false],[4400,"PD2",true]]}],
    `    uart_init();
    PORTD |= _BV(PORTD2);
    EICRA = _BV(ISC01);
    EIFR = _BV(INTF0);
    EIMSK = _BV(INT0);
    sei();
    (void)receive();
    uint16_t snapshot;
    ATOMIC_BLOCK(ATOMIC_RESTORESTATE) { snapshot = pulses; }
    send16(snapshot);`,
    `#include <util/atomic.h>
static volatile uint16_t pulses;
ISR(INT0_vect) { ++pulses; }`);
  analog("drivers","Tách driver ADC0 khỏi quy tắc điều khiển LED","Driver trả mã 10 bit sau khi đọc ADCL, ADCH. Logic ứng dụng so với 600 rồi điều khiển PB5 qua hàm output riêng. Trả mã mẫu ra USART0 để kiểm hai phần độc lập.",
    [{...A(1,[0,204]),regs:{PORTB:0}},{...A(4,[3,51]),regs:{PORTB:32}}],
    `    DDRB |= _BV(DDB5);
    uint16_t sample = read_adc();
    led_set(sample >= 600U);
    send16(sample);`,
    `static void led_set(uint8_t on) {
    if (on) PORTB |= _BV(PORTB5);
    else PORTB &= (uint8_t)~_BV(PORTB5);
}`);
  mix("timer","Timer1 CTC: chia clock và đo cạnh OC1A trên PB1","PD2 chọn OCR1A = 249 khi nhấn hoặc 499 khi nhả. Cấu hình Timer1 CTC, bộ chia 64, đảo OC1A mỗi lần so khớp. Quan sát cạnh PB1. Hai cạnh liên tiếp cách 1 hoặc 2 ms.",
    [{...G(pin(2,false),{OCR1AL:249,OCR1AH:0,TCCR1B:11}),edges:wantEdge("PB1",3,16000),cycles:85000},
     {...G(pin(2,true),{OCR1AL:243,OCR1AH:1,TCCR1B:11}),edges:wantEdge("PB1",3,32000),cycles:140000}],
    `    PORTD |= _BV(PORTD2);
    DDRB |= _BV(DDB1);
    OCR1A = (PIND & _BV(PIND2)) ? 499U : 249U;
    TCCR1A = _BV(COM1A0);
    TCCR1B = _BV(WGM12) | _BV(CS11) | _BV(CS10);`);
  analog("adc","ADC0: đo điện áp PC0, chuyển mã 10 bit sang mV","Chọn ADC0 ở ADMUX, AVcc 5 V và prescaler 128. Đọc đủ cặp thanh ghi rồi tính code × 5000 / 1024 bằng uint32_t. Gửi mV thành hai byte cao trước.",
    [A(0,[0,0]),A(2.5,[9,196]),A(5,[19,131])],
    `    uint16_t sample=read_adc();
    uint16_t mv=(uint32_t)sample * 5000UL / 1024UL;
    send16(mv);`);
  serial("uart","USART0 9600 8N1: nhận, phản hồi và kiểm UBRR0","Nhận một byte từ RXD/PD0. Trả byte đó XOR 0x20 qua TXD/PD1. Kiểm UBRR0L = 103, cấu hình RX/TX và không nhầm RXC0 với UDRE0.",
    [{...S([65],[97]),regs:{UBRR0L:103,UCSR0B:24,UCSR0C:6}},S([90],[122])],
    `    uint8_t received=receive();
    send(received ^ 0x20U);`);
  mix("buses","SPI và TWI trên ATmega328P: hai cách đọc cảm biến","PD2 chọn SPI khi nhấn, TWI khi nhả. Với SPI, PB2 chọn chip, PB3 MOSI, PB4 MISO, PB5 SCK. Gửi lệnh 0xA0, đọc byte trả về và gửi nó qua USART0. Với TWI, PC4/SDA và PC5/SCL cần kéo lên ngoài, gửi địa chỉ đọc 0x48, nhận một byte rồi NACK và STOP. Mô phỏng thiết bị ACK ở 0x48.",
    [{...S([],[0x42]),pins:{PD2:false},spi:[0x42],regs:{SPCR:80}},
     {...S([],[0x63]),pins:{PD2:true},twi:[0x63],regs:{TWBR:72}}],
    `    uart_init();
    PORTD |= _BV(PORTD2);
    if (!(PIND & _BV(PIND2))) {
        PORTB |= _BV(PORTB2);
        DDRB |= _BV(DDB2) | _BV(DDB3) | _BV(DDB5);
        SPCR = _BV(SPE) | _BV(MSTR);
        PORTB &= (uint8_t)~_BV(PORTB2);
        SPDR = 0xA0;
        while (!(SPSR & _BV(SPIF))) {}
        uint8_t value = SPDR;
        PORTB |= _BV(PORTB2);
        send(value);
    } else {
        TWSR = 0;
        TWBR = 72;                       /* 100 kHz tại 16 MHz */
        TWCR = _BV(TWINT)|_BV(TWSTA)|_BV(TWEN);
        wait_twi();
        TWDR = (0x48U << 1) | 1U;
        TWCR = _BV(TWINT)|_BV(TWEN);
        wait_twi();
        uint8_t value = 0xFF;
        if ((TWSR & 0xF8U) == 0x40U) {
            TWCR = _BV(TWINT)|_BV(TWEN);    /* Đọc byte cuối, trả NACK */
            wait_twi();
            if ((TWSR & 0xF8U) == 0x58U) value = TWDR;
        }
        TWCR = _BV(TWINT)|_BV(TWEN)|_BV(TWSTO);
        send(value);
    }`,
    `static void wait_twi(void) {
    while (!(TWCR & _BV(TWINT))) {}
}`);
  mix("interrupts","INT0: ghi sự kiện ở ISR và đổi PB5 trong main","PD2 dùng pull-up và INT0 theo cạnh xuống. ISR chỉ đặt cờ. Main thấy cờ thì đảo LED PB5 một lần. Quan sát khi PD2 giữ mức cao và khi có một cạnh xuống. Với nút cơ thực tế, lọc dội theo thời gian.",
    [G({PD2:true},{PORTB:0,EIMSK:1}),{...G({PD2:true},{PORTB:32,EIMSK:1}),events:[[4000,"PD2",false]]}],
    `    DDRB |= _BV(DDB5);
    PORTD |= _BV(PORTD2);
    EICRA = _BV(ISC01);
    EIFR = _BV(INTF0);
    EIMSK = _BV(INT0);
    sei();
    while (!event) {}
    PINB = _BV(PINB5);`,
    `static volatile uint8_t event;
ISR(INT0_vect) { event = 1; }`);
  mix("scheduling","Lập lịch hợp tác AVR: Timer0 chốt mốc, PD2 chọn kỳ","Timer0 tạo tick 1 ms. PD2 chọn chu kỳ 2 tick khi nhấn hoặc 3 tick khi nhả. Cứ đến hạn, main đảo PB5. Dự đoán khoảng cách giữa hai cạnh và đối chiếu. Tách tác vụ xử lý khỏi việc tạo tick.",
    [{...G(pin(2,false),{OCR0A:249}),edges:wantEdge("PB5",2,32000,30),cycles:110000},
     {...G(pin(2,true),{OCR0A:249}),edges:wantEdge("PB5",2,48000,30),cycles:150000}],
    `    PORTD |= _BV(PORTD2);
    DDRB |= _BV(DDB5);
    uint8_t period=(PIND & _BV(PIND2)) ? 3U : 2U;
    timer0_init();
    uint8_t now=0, last=0;
    for (;;) {
        wait_tick();
        ++now;
        if ((uint8_t)(now-last)>=period) {
            last=now;
            PINB = _BV(PINB5);
        }
    }`,timer0);
  serial("coordination","Điều phối hai tác vụ: đệm yêu cầu USART0 và LED kết quả","Hai byte nhận trên PD0 là hai yêu cầu. Tác vụ nhận gán vào hai ô FIFO. Tác vụ tiêu thụ đọc theo thứ tự, mỗi giá trị 1 bật LED PB5, các giá trị khác tắt, và gửi trạng thái chốt lên PD1.",
    [{...S([1,0],[32,0]),regs:{PORTB:0}},{...S([0,1],[0,32]),regs:{PORTB:32}}],
    `    DDRB |= _BV(DDB5);
    uint8_t queue[2];
    for (uint8_t i=0; i<2; ++i) queue[i]=receive();
    for (uint8_t i=0; i<2; ++i) {
        if (queue[i]==1U) PORTB |= _BV(PORTB5);
        else PORTB &= (uint8_t)~_BV(PORTB5);
        send(PORTB & _BV(PORTB5));
    }`);
  analog("state-machines","Máy trạng thái: phân loại mẫu ADC0 và xuất hai chân PB0/PB1","Đọc PC0/ADC0. Mã dưới 256 là BÌNH THƯỜNG (0), từ 256 đến dưới 768 là CẢNH BÁO (1), từ 768 là BÁO ĐỘNG (2). Ghi trạng thái vào hai bit thấp của PORTB và gửi cùng mã qua PD1.",
    [{...A(1,[0]),regs:{PORTB:0}},{...A(2.5,[1]),regs:{PORTB:1}},{...A(4,[2]),regs:{PORTB:2}}],
    `    DDRB |= 3U;
    uint16_t sample=read_adc();
    enum State state=sample<256U ? NORMAL : sample<768U ? WARN : ALARM;
    PORTB=(PORTB & (uint8_t)~3U) | (uint8_t)state;
    send((uint8_t)state);`,
    `enum State { NORMAL, WARN, ALARM };`);
  gpio("debugging","Debug GPIO: tách chiều chân, mức đầu vào và chốt","Nút PD4 nối xuống GND. Khi nhấn, bật PB0 và giữ PB5 đặt trước. Đặt breakpoint sau khi đọc PIND, xem tại sao DDRD4, PORTD4 và PIND4 biểu đạt ba điều khác nhau.",
    [G({PD4:false},{DDRB:33,PORTB:33,PORTD:16}),G({PD4:true},{DDRB:33,PORTB:32,PORTD:16})],
    `    PORTD |= _BV(PORTD4);
    DDRB |= _BV(DDB0) | _BV(DDB5);
    PORTB |= _BV(PORTB5);
    uint8_t input=PIND;
    if (!(input & _BV(PIND4))) PORTB |= _BV(PORTB0);`);
  serial("testing","Kiểm thử firmware: giới hạn chỉ số điều khiển PB0, PB1, PB2","Nhận mã chân từ PD0. Chỉ chấp nhận 0..2. Với mã hợp lệ, bật đúng một LED trên PORTB và gửi mặt nạ; với mã sai, trả FF và giữ tất cả LED tắt. Thử mã cuối hợp lệ và ngay sau cuối.",
    [{...S([0],[1]),regs:{PORTB:1}},{...S([2],[4]),regs:{PORTB:4}},{...S([3],[255]),regs:{PORTB:0}}],
    `    DDRB |= 7U;
    uint8_t pin=receive();
    if (pin<3U) {
        uint8_t mask=(uint8_t)(1U<<pin);
        PORTB=(PORTB & (uint8_t)~7U) | mask;
        send(mask);
    } else send(UINT8_MAX);`);
  gpio("interview","Bài tổng hợp AVR: biến yêu cầu chân thành bảng chân trị","PC1 cho phép, PD3 là nút hành động. Cả hai nối GND khi nhấn. PB5 chỉ sáng khi hai nút cùng nhấn. PB0 báo riêng nút PC1. Trình bày các địa chỉ thanh ghi sẽ xem và dự đoán PORTB trước khi chạy.",
    [G({PC1:false,PD3:false},{PORTB:33}),G({PC1:false,PD3:true},{PORTB:1}),G({PC1:true,PD3:false},{PORTB:0}),G({PC1:true,PD3:true},{PORTB:0})],
    `    PORTC |= _BV(PORTC1);
    PORTD |= _BV(PORTD3);
    DDRB |= _BV(DDB5) | _BV(DDB0);
    uint8_t armed=(PINC & _BV(PINC1))==0;
    uint8_t action=(PIND & _BV(PIND3))==0;
    if (armed) PORTB |= _BV(PORTB0);
    if (armed && action) PORTB |= _BV(PORTB5);`);
  serial("file-workshop","Thực hành AVR: lưu một bản ghi EEPROM rồi phát UART","Nhận mã chế độ và giá trị qua PD0. Lưu hai byte vào EEPROM ở địa chỉ 0 và 1. Đọc lại rồi gửi qua PD1. Quan sát EEPROM trong trình mô phỏng. Với lưu trữ qua nhiều lần chạy, thử trên bo thật.",
    [{...S([1,64],[1,64]),eepromCheck:{0:1,1:64},cycles:270000},
     {...S([3,16],[3,16]),eepromCheck:{0:3,1:16},cycles:270000}],
    `    uint8_t mode=receive(), value=receive();
    eeprom_update_byte((uint8_t *)0,mode);
    eeprom_update_byte((uint8_t *)1,value);
    send(eeprom_read_byte((const uint8_t *)0));
    send(eeprom_read_byte((const uint8_t *)1));`,
    `#include <avr/eeprom.h>`);
  gpio("avr-workshop","Thực hành build HEX AVR: PC2 → PB2","Kiểm PC2 ở sơ đồ chân bo, nối nút xuống GND. Biên dịch HEX, thử hai mức PC2 rồi xem PB2. Đổi số chân trong lời giải thành PB1, biên dịch và nạp thử để thấy ca kiểm báo sai ở đúng thanh ghi.",
    [G({PC2:false},{DDRB:4,PORTC:4,PORTB:4}),G({PC2:true},{DDRB:4,PORTC:4,PORTB:0})],
    `    PORTC |= _BV(PORTC2);
    DDRB |= _BV(DDB2);
    if (!(PINC & _BV(PINC2))) PORTB |= _BV(PORTB2);`);
  serial("cortex-startup","Mã khởi động AVR: kiểm .data và .bss sau reset","Một biến static khởi tạo 0x35 và một biến static không ghi khởi tạo nằm trong SRAM. Nhận một byte trên PD0, cộng byte đó vào biến có khởi tạo rồi gửi cả hai biến. Xem sự khác nhau giữa .data và .bss trong tệp map của avr-gcc.",
    [S([0],[53,0]),S([3],[56,0])],
    `    initialized+=receive();
    send(initialized);
    send(zeroed);`,
    `static volatile uint8_t initialized=0x35;
static volatile uint8_t zeroed;`);
  mix("uart-workshop","Lab USART0: đo chuỗi U/CR/LF từ mẫu nút PD2","PD2 nối GND. Khi nhấn, gửi U rồi CR/LF qua PD1. Khi thả, gửi I rồi CR/LF. Quan sát byte thô và so với cổng nối tiếp thật ở 9600 8N1.",
    [{...S([],[85,13,10]),pins:{PD2:false}}, {...S([],[73,13,10]),pins:{PD2:true}}],
    `    uart_init();
    PORTD |= _BV(PORTD2);
    send((PIND & _BV(PIND2)) ? 'I':'U');
    send('\\r');
    send('\\n');`);
  mix("pwm-lab","Lab PWM: PD2 chọn duty, OC0A xuất tại PD6","Đặt PD6/OC0A làm output. Timer0 Fast PWM TOP 255 ở bộ chia 64. PD2 nhấn chọn OCR0A = 63, thả chọn 191. Kiểm OCR0A và quan sát độ rộng xung thực tế trên PD6. Chu kỳ khoảng 1,024 ms.",
    [{...G(pin(2,false),{OCR0A:63,TCCR0A:131}),pwm:{pin:"PD6",period:16384,high:4096},cycles:70000},
     {...G(pin(2,true),{OCR0A:191,TCCR0A:131}),pwm:{pin:"PD6",period:16384,high:12288},cycles:70000}],
    `    PORTD |= _BV(PORTD2);
    DDRD |= _BV(DDD6);
    OCR0A = (PIND & _BV(PIND2)) ? 191 : 63;
    TCCR0A = _BV(COM0A1) | _BV(WGM01) | _BV(WGM00);
    TCCR0B = _BV(CS01) | _BV(CS00);`);
  serial("eeprom-lab","Lab EEPROM: ghi cấu hình và đọc lại qua PD1","Nhận lệnh chế độ 0 hoặc 1. Ghi EEPROM tại địa chỉ 4 bằng eeprom_update_byte, đọc lại, xuất qua UART và bật PB5 khi giá trị 1. Với lệnh ngoài miền trả FF và giữ EEPROM.",
    [{...S([1],[1]),regs:{PORTB:32},eepromCheck:{4:1},cycles:170000},
     {...S([7],[255]),regs:{PORTB:0},eepromCheck:{4:255}}],
    `    DDRB |= _BV(DDB5);
    uint8_t mode=receive();
    if (mode<=1) {
        eeprom_update_byte((uint8_t *)4,mode);
        uint8_t stored=eeprom_read_byte((const uint8_t *)4);
        if (stored==1) PORTB |= _BV(PORTB5);
        send(stored);
    } else send(UINT8_MAX);`,
    `#include <avr/eeprom.h>`);
  mix("dac-notes","Đầu ra tương tự từ PWM: ADC0 điều khiển OCR0A","ATmega328P không có DAC điện áp tích hợp. Đọc ADC0, lấy tám bit cao làm OCR0A, xuất PWM tại PD6. Với 1,25 V và 3,75 V, xem duty xấp xỉ 25% và 75%. Khi lắp thật, thêm lọc thấp và đo điện áp trung bình bằng đồng hồ.",
    [{...G({}, {OCR0A:64}),adc:1.25,pwm:{pin:"PD6",period:16384,high:4160},cycles:75000},
     {...G({}, {OCR0A:192}),adc:3.75,pwm:{pin:"PD6",period:16384,high:12352},cycles:75000}],
    `    adc_init();
    DDRD |= _BV(DDD6);
    OCR0A=(uint8_t)(read_adc()>>2);
    TCCR0A=_BV(COM0A1) | _BV(WGM01) | _BV(WGM00);
    TCCR0B=_BV(CS01) | _BV(CS00);`);
  mix("rtos-workshop","Lab bare-metal: hai tác vụ theo tick của Timer0","Timer0 tạo mốc 1 ms. Main gọi tác vụ lấy mẫu nút PD2 ở mỗi tick và tác vụ xuất LED PB5 sau mỗi hai tick. Chạy bốn tick rồi phát trạng thái LED qua UART. Giải thích độ trễ tối đa do tác vụ xuất chạy chậm hơn tác vụ đọc.",
    [{...S([],[1]),pins:{PD2:false},regs:{PORTB:32},cycles:90000},{...S([],[0]),pins:{PD2:true},regs:{PORTB:0},cycles:90000}],
    `    uart_init();
    PORTD |= _BV(PORTD2);
    DDRB |= _BV(DDB5);
    timer0_init();
    uint8_t pressed=0;
    for (uint8_t tick=1; tick<=4; ++tick) {
        wait_tick();
        pressed=(PIND & _BV(PIND2))==0;
        if (tick%2U==0) {
            if (pressed) PORTB |= _BV(PORTB5);
            else PORTB &= (uint8_t)~_BV(PORTB5);
        }
    }
    send(pressed);`,timer0);

  // Protocols with timed external changes list their physical pins in the case.
  labs.volatile.cases[0].pins={PD2:true};
})();

