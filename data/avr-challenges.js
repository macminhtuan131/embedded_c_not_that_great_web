(() => {
  const {serial,gpio,mix,analog,S,A,G,pin}=window.AvrLabs;
  const id=n=>"avr-"+n;
  const U=(n,title,task,cases,body,defs)=>serial(id(n),title,task,cases,body,defs);
  const H=(n,title,task,cases,body,defs)=>gpio(id(n),title,task,cases,body,defs);
  const M=(n,title,task,cases,body,defs)=>mix(id(n),title,task,cases,body,defs);
  U(1,"Cộng hai byte UART và gửi byte nhớ","PD0 nhận a, b. Tính tổng rộng 16 bit rồi phát byte thấp và số nhớ ra PD1.",[S([200,100],[44,1]),S([150,105],[255,0])],
    `    uint8_t a=receive(), b=receive();
    uint16_t sum=(uint16_t)a+b;
    send((uint8_t)sum);
    send(sum>255U);`);
  U(2,"Trừ bộ đếm xung 8 bit qua USART0","PD0 nhận hai ảnh chụp bộ đếm; gửi kết quả modulo và cờ mượn a < b. Hai đầu ra là byte dữ liệu phần mềm.",[S([3,5],[254,1]),S([9,4],[5,0])],
    `    uint8_t a=receive(), b=receive();
    send((uint8_t)(a-b));
    send(a<b);`);
  U(3,"So mẫu có dấu với ngưỡng không dấu trên AVR","PD0 nhận một mẫu int16_t dạng hai byte và uint16_t ngưỡng cao trước. Phát 1 nếu mẫu về mặt toán học nhỏ hơn ngưỡng. Kiểm mẫu âm.",[S([255,255,0,1],[1]),S([0,9,0,1],[0])],
    `    int16_t sample=(int16_t)receive16();
    uint16_t threshold=receive16();
    send(sample<0 || (uint16_t)sample<threshold);`);
  M(4,"Hiệu chỉnh mẫu PC0/ADC0 bằng offset nhận từ USART0","Đọc mã ADC0 và offset int16_t nhận qua PD0, giới hạn tổng vào 0..1023 và gửi qua PD1.",[
    {...S([255,0],[0,0]),adc:1},{...S([2,0],[3,255]),adc:4}],
    `    uart_init();
    adc_init();
    int16_t offset=(int16_t)receive16();
    int32_t corrected=(int32_t)read_adc()+offset;
    if (corrected<0) corrected=0;
    if (corrected>1023) corrected=1023;
    send16((uint16_t)corrected);`);
  H(7,"Bật hoặc xóa PORTB5 mà giữ PB0","PC0 chọn mức của PB5. PB0 luôn sáng. Cấu hình DDRB rồi viết mặt nạ giữ PB0.",
    [G({PC0:false},{PORTB:1,DDRB:33}),G({PC0:true},{PORTB:33,DDRB:33})],
    `    DDRB |= 0x21U;
    PORTB |= 1U;
    if (PINC & _BV(PINC0)) PORTB |= _BV(PORTB5);
    else PORTB &= (uint8_t)~_BV(PORTB5);`);
  H(8,"Đảo LED bằng PORTB hoặc PINB","PC0 chọn cách đảo, PD2 cho phép đảo khi ở mức cao. Bật PB0 trước khi thử để kiểm bảo toàn bit. Cả hai cách phải cho cùng kết quả.",
    [G({PC0:false,PD2:true},{PORTB:33}),G({PC0:true,PD2:true},{PORTB:33}),G({PC0:true,PD2:false},{PORTB:1})],
    `    DDRB |= 0x21U;
    PORTB |= 1U;
    if (PIND & _BV(PIND2)) {
        if (PINC & _BV(PINC0)) PINB = _BV(PINB5);
        else PORTB ^= _BV(PORTB5);
    }`);
  H(9,"Đọc nút từ PIN​D2 và phản hồi lên PB5","Nút PD2 tác động mức thấp với kéo lên. Chỉ bật LED khi bit đọc từ PIND bằng 0.",
    [G(pin(2,false),{PORTD:4,PORTB:32}),G(pin(2,true),{PORTD:4,PORTB:0})],
    `    PORTD |= _BV(PORTD2);
    DDRB |= _BV(DDB5);
    if (!(PIND & _BV(PIND2))) PORTB |= _BV(PORTB5);`);
  M(10,"Đặt EIMSK.INT0 và quan sát LED khi có cạnh xuống","PD2 là INT0. Bật đúng bit trong EIMSK, chọn cạnh xuống trong EICRA. ISR đặt PB5. Thử ca không có cạnh và ca có cạnh.",
    [G(pin(2,true),{EIMSK:1,PORTB:0}),{...G(pin(2,true),{EIMSK:1,PORTB:32}),events:[[3500,"PD2",false]]}],
    `    DDRB |= _BV(DDB5);
    PORTD |= _BV(PORTD2);
    EICRA |= _BV(ISC01);
    EIFR = _BV(INTF0);
    EIMSK |= _BV(INT0);
    sei();`,`ISR(INT0_vect) { PORTB |= _BV(PORTB5); }`);
  M(11,"Xóa ADEN khi PD2 yêu cầu dừng lấy mẫu","PC0 là ADC0. Đọc và gửi mẫu trước. Khi PD2 ở mức thấp, xóa ADEN; ghi 0 ở ADIF trong phép ghi để tránh xác nhận cờ theo cơ chế W1C.",
    [{...A(2.5,[2,0]),pins:pin(2,false),regs:{ADCSRA:23}},
     {...A(2.5,[2,0]),pins:pin(2,true),regs:{ADCSRA:151}}],
    `    uart_init();
    adc_init();
    PORTD |= _BV(PORTD2);
    send16(read_adc());
    if (!(PIND & _BV(PIND2))) ADCSRA &= (uint8_t)~(_BV(ADEN)|_BV(ADIF));`);
  H(12,"Đảo chốt PORTD6 theo mức PC0","Đặt PD6 và PD1 làm GPIO output trực tiếp trong lab này. Giữ PD1 sáng. Chỉ đảo PD6 khi PC0 mức cao.",
    [G({PC0:true},{DDRD:66,PORTD:66}),G({PC0:false},{DDRD:66,PORTD:2})],
    `    DDRD |= _BV(DDD1) | _BV(DDD6);
    PORTD |= _BV(PORTD1);
    if (PINC & _BV(PINC0)) PORTD ^= _BV(PORTD6);`);
  U(13,"Kiểm UDRE0 trước khi ghi UDR0","Nhận hai byte qua USART0. Chờ UDRE0 trước mỗi lần ghi UDR0. Gửi byte thứ hai trước, rồi byte thứ nhất.",
    [S([1,2],[2,1]),S([85,170],[170,85])],
    `    uint8_t a=receive(), b=receive();
    while (!(UCSR0A & _BV(UDRE0))) {}
    UDR0=b;
    while (!(UCSR0A & _BV(UDRE0))) {}
    UDR0=a;`);
  U(14,"Đặt nhiều bit trong từ cấu hình từ USART0","PD0 nhận từ 32 bit và mặt nạ 32 bit, đều cao trước. OR chúng rồi phát từ mới qua PD1. Từ này là dữ liệu SRAM.",
    [S([0,0,0,5,128,0,0,32],[128,0,0,37]),S([255,0,0,0,0,0,0,1],[255,0,0,1])],
    `    uint32_t value=receive32(), mask=receive32();
    send32(value|mask);`);
  U(15,"Cờ sự kiện UART: chỉ giữ bit 1 cao nhất","Nhận một byte cờ phần mềm từ PD0, phát byte chỉ có bit cao nhất còn lại, hoặc 0. Đây là quy tắc ưu tiên của ứng dụng.",
    [S([0],[0]),S([37],[32]),S([255],[128])],
    `    uint8_t value=receive(), result=0;
    for (uint8_t mask=0x80U; mask; mask>>=1) {
        if (value & mask) { result=mask; break; }
    }
    send(result);`);
  H(16,"Macro đặt hướng và mức ở DDRB/PORTB","Viết macro SET_BIT và CLR_BIT có ngoặc quanh các đối số. Cấu hình PB3, dùng PC0 để chọn đặt hoặc xóa chốt. Kiểm PB0 vẫn sáng.",
    [G({PC0:true},{DDRB:9,PORTB:9}),G({PC0:false},{DDRB:9,PORTB:1})],
    `    SET_BIT(DDRB,DDB0);
    SET_BIT(DDRB,DDB3);
    SET_BIT(PORTB,PORTB0);
    if (PINC & _BV(PINC0)) SET_BIT(PORTB,PORTB3);
    else CLR_BIT(PORTB,PORTB3);`,
    `#define SET_BIT(reg,bit) ((reg) |= (uint8_t)(1U << (bit)))
#define CLR_BIT(reg,bit) ((reg) &= (uint8_t)~(1U << (bit)))`);
  U(17,"Chụp SREG sau ADD rồi tách cờ Z và C","PD0 nhận hai byte. Dùng ADD AVR rồi ngay lập tức đọc SREG. Gửi byte thấp, Z và C qua USART0.",
    [S([255,1],[0,1,1]),S([3,2],[5,0,0])],
    `    uint8_t a=receive(), b=receive(), flags;
    __asm__ volatile("add %0,%2\\n\\tin %1,__SREG__" : "+&r"(a), "=&r"(flags) : "r"(b) : "cc");
    send(a);
    send((flags>>SREG_Z)&1U);
    send((flags>>SREG_C)&1U);`);
  U(18,"Gói UART: chèn bit 0 xen kẽ từ byte đầu vào","Nhận byte từ UDR0. Đặt bit nguồn i vào vị trí 2i của từ 16 bit. Gửi byte cao rồi thấp.",
    [S([5],[0,17]),S([255],[85,85])],
    `    uint8_t value=receive();
    uint16_t result=0;
    for (uint8_t i=0; i<8; ++i) result|=(uint16_t)((value>>i)&1U)<<(2U*i);
    send16(result);`);
  H(19,"Thay CS02:0 trong TCCR0B bằng mặt nạ","Dựng TCCR0B có WGM02 bật. PC0 chọn mã CS 3 hoặc 2. Chỉ thay ba bit CS, giữ bit WGM02. Kiểm TCCR0B và dùng PD6 làm tín hiệu báo cấu hình.",
    [G({PC0:true},{TCCR0B:11,PORTD:64}),G({PC0:false},{TCCR0B:10,PORTD:64})],
    `    TCCR0B = _BV(WGM02);
    uint8_t mode=(PINC & _BV(PINC0)) ? 3U : 2U;
    TCCR0B=(TCCR0B & (uint8_t)~0x07U) | mode;
    DDRD |= _BV(DDD6);
    PORTD |= _BV(PORTD6);`);
  U(23,"Trích nibble: đẩy hai nửa byte lên PC0..PC3","Nhận byte LCD qua PD0, xuất nibble cao rồi thấp ra PORTC và gửi lại mỗi giá trị qua PD1 để kiểm. Lab kiểm bus dữ liệu 4 bit, xung E cần driver LCD khi đấu thật.",
    [{...S([0xA5],[0x0A,0x05]),regs:{DDRC:15,PORTC:5}},S([0xF0],[15,0])],
    `    DDRC |= 0x0FU;
    uint8_t value=receive();
    PORTC=(PORTC & 0xF0U) | (value>>4);
    send(PORTC&15U);
    PORTC=(PORTC & 0xF0U) | (value&15U);
    send(PORTC&15U);`);
  H(24,"Thay trường MUX của ADMUX theo PC0","PC0 mức cao chọn ADC3, mức thấp chọn ADC0. Chọn AVcc bằng REFS0 và giữ ADLAR bằng 0. Dùng PB5 báo chọn ADC3.",
    [G({PC0:true},{ADMUX:67,PORTB:32}),G({PC0:false},{ADMUX:64,PORTB:0})],
    `    DDRB |= _BV(DDB5);
    uint8_t channel=(PINC & _BV(PINC0)) ? 3U : 0U;
    ADMUX=(ADMUX & (uint8_t)~0x0FU) | _BV(REFS0) | channel;
    if (channel) PORTB |= _BV(PORTB5);`);
  U(25,"Lấy trường 5 bit từ gói telemetry UART","Nhận từ 32 bit cao trước. Phát bit 10..14 đã đưa về bit 0.",
    [S([0,1,163,64],[8]),S([0,0,124,0],[31])],
    `    send((uint8_t)((receive32()>>10)&31UL));`);
  U(26,"Xóa trường bit 16..23 trước khi phát UART","Nhận một từ 32 bit qua PD0, xóa đúng byte thứ hai theo thứ tự truyền rồi phát lại.",
    [S([0,255,18,52],[0,0,18,52]),S([255,255,255,255],[255,0,255,255])],
    `    send32(receive32() & ~0x00FF0000UL);`);
  U(27,"Thay trường bit 4..7 của gói UART","Nhận một từ 32 bit và giá trị thay thế. Xóa trường cũ rồi chèn bốn bit thấp của giá trị mới.",
    [S([0,0,18,52,11],[0,0,18,180]),S([0,0,0,255,0],[0,0,0,15])],
    `    uint32_t word=receive32();
    uint8_t value=receive()&15U;
    send32((word & ~0xF0UL) | ((uint32_t)value<<4));`);
  U(28,"Giữ các bit chẵn trong từ nhận từ USART0","Dùng mặt nạ giữ vị trí 0,2,…30 rồi phát lại bốn byte.",
    [S([0,0,0,245],[0,0,0,85]),S([255,255,255,255],[85,85,85,85])],
    `    send32(receive32() & 0x55555555UL);`);
  M(29,"UBRR0: chọn bộ chia baud bằng PD2","Clock 16 MHz và U2X0 = 0. PD2 nhấn chọn 9600, thả chọn 19200. Ghi UBRR0H/L và phát ký tự U để đo bit tại PD1.",
    [{...S([],[85]),pins:pin(2,false),regs:{UBRR0H:0,UBRR0L:103}},
     {...S([],[85]),pins:pin(2,true),regs:{UBRR0H:0,UBRR0L:51}}],
    `    uart_init();
    PORTD |= _BV(PORTD2);
    uint32_t baud=(PIND & _BV(PIND2)) ? 19200UL : 9600UL;
    UBRR0=(uint16_t)(16000000UL/(16UL*baud)-1UL);
    send('U');`);
  U(30,"Đóng gói lệnh và payload vào UDR0","PD0 nhận hai nibble, byte đầu là lệnh, byte sau là payload. Phát một byte có lệnh ở bốn bit cao.",
    [S([10,5],[165]),S([1,15],[31])],
    `    uint8_t command=receive() & 15U, payload=receive() & 15U;
    send((uint8_t)((command<<4)|payload));`);
  U(31,"Gói cấu hình và áp dụng duty lên OCR1A","Nhận mode, prescaler và duty 10 bit trên UART. Dựng gói 16 bit gồm mode ở bit 13..15, prescaler ở 10..12 và duty ở 0..9. Ghi riêng duty vào OCR1A và phát gói.",
    [{...S([5,3,2,0],[174,0]),regs:{OCR1AH:2,OCR1AL:0}},{...S([0,0,0,25],[0,25]),regs:{OCR1AL:25}}],
    `    uint8_t mode=receive() & 7U, prescaler=receive() & 7U;
    uint16_t duty=receive16() & 1023U;
    OCR1A=duty;
    send16(((uint16_t)mode<<13)|((uint16_t)prescaler<<10)|duty);`);
  U(32,"Tăng trường đếm trong gói UART","Trường bộ đếm gồm bit 8..11. Tăng theo modulo 16 rồi ghi lại, giữ nguyên các trường còn lại.",
    [S([0,0,1,0],[0,0,2,0]),S([0,5,175,205],[0,5,160,205])],
    `    uint32_t value=receive32();
    uint32_t count=((value>>8)+1UL)&15UL;
    send32((value & ~0x0F00UL) | (count<<8));`);
  analog(id(33),"Đọc trường 10 bit ADCL/ADCH thật","Đọc PC0 qua ADC0 căn phải, đọc ADCL trước ADCH rồi gửi đúng mã 10 bit qua PD1.",
    [A(5,[3,255]),A(2.5,[2,0])],
    `    send16(read_adc() & 1023U);`);
  U(36,"Đếm bit 1 trong byte USART0","Tính số bit 1 của byte RX rồi gửi số đếm để dùng ở tầng phần mềm kiểm parity.",
    [S([165],[4]),S([255],[8])],
    `    uint8_t value=receive(), count=0;
    while (value) { value &= value-1U; ++count; }
    send(count);`);
  H(37,"Xoay mẫu chạy LED trên PD4..PD7","Đọc bốn switch từ PC0..PC3, xoay trái đúng một vị trí trong bốn bit, rồi đưa lên PD4..PD7. Giữ PD2 ở mức cao để minh họa chân khác được bảo toàn.",
    [G({PC0:true,PC3:true},{DDRD:240,PORTD:52}),G({PC3:true},{DDRD:240,PORTD:20})],
    `    uint8_t value=PINC&15U;
    uint8_t rotated=((value<<1)|(value>>3))&15U;
    PORTD |= _BV(PORTD2);
    DDRD |= 0xF0U;
    PORTD=(PORTD & 0x0FU)|(rotated<<4);`);
  U(38,"Xoay phải từ UART 32 bit đúng một vị trí","Chuỗi nhận bốn byte cao trước, xoay bit thấp nhất lên bit 31 rồi phát lại.",
    [S([0,0,0,1],[128,0,0,0]),S([128,0,0,2],[64,0,0,1])],
    `    uint32_t value=receive32();
    send32((value>>1)|(value<<31));`);
  U(39,"Đồng bộ pha của mẫu byte từ USART0","Nhận pattern và target. Tìm số lần xoay trái nhỏ nhất để trùng, hoặc trả FF nếu không trùng.",
    [S([129,3],[1]),S([0,1],[255])],
    `    uint8_t value=receive(), target=receive();
    for (uint8_t i=0; i<8; ++i) {
        if (value==target) { send(i); return 0; }
        value=(uint8_t)((value<<1)|(value>>7));
    }
    send(UINT8_MAX);`);
  U(40,"PROGMEM: tra số bit 1 từng nibble của UDR0","Nhận byte, tra hai nibble trong bảng Flash bằng pgm_read_byte, cộng và phát kết quả.",
    [S([165],[4]),S([255],[8])],
    `    uint8_t value=receive();
    send(pgm_read_byte(&counts[value&15U])+pgm_read_byte(&counts[value>>4]));`,
    `#include <avr/pgmspace.h>
static const uint8_t counts[16] PROGMEM={0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4};`);
  U(41,"Kiểm dung lượng vòng UART là lũy thừa 2","PD0 nhận dung lượng, trả 1 khi là lũy thừa 2 khác 0. Chỉ khi đó mới có thể dùng n−1 để quấn vòng.",
    [S([0],[0]),S([16],[1]),S([12],[0])],
    `    uint8_t n=receive();
    send(n!=0 && (n&(n-1U))==0);`);
  M(42,"Đảo byte SPI đến rồi gửi kết quả qua UART","PB2/SS chọn thiết bị, PB3/MOSI gửi 0xFF, PB4/MISO nhận một byte. Đảo thứ tự của tám bit bằng C rồi phát qua PD1. Kiểm SPDR và MOSI.",
    [{...S([],[0x48]),spi:[0x12],spiSent:[255]},{...S([],[0x80]),spi:[0x01],spiSent:[255]}],
    `    uart_init();
    PORTB |= _BV(PORTB2);
    DDRB |= _BV(DDB2)|_BV(DDB3)|_BV(DDB5);
    SPCR = _BV(SPE)|_BV(MSTR);
    PORTB &= (uint8_t)~_BV(PORTB2);
    SPDR=0xFF;
    while (!(SPSR & _BV(SPIF))) {}
    uint8_t value=SPDR, reversed=0;
    PORTB |= _BV(PORTB2);
    for (uint8_t i=0; i<8; ++i) { reversed=(reversed<<1)|(value&1U); value>>=1; }
    send(reversed);`);
  U(43,"Nén vị trí chẵn trong dữ liệu UART","Nhận từ 16 bit cao trước, lấy bit 0,2,…14 và chép vào bit 0..7 của byte trả.",
    [S([0,17],[5]),S([85,85],[255])],
    `    uint16_t source=receive16();
    uint8_t dest=0;
    for (uint8_t i=0; i<8; ++i) dest|=((source>>(2U*i))&1U)<<i;
    send(dest);`);

  window.AvrChallengeHelpers={U,H,M};
})();

