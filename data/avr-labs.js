(() => {
  const labs = {};
  const hex = value => "0x" + value.toString(16).toUpperCase().padStart(2,"0");
  const button = { "PD2": false };
  const uart = `static inline void uart_init(void) {
    DDRD = (DDRD & (uint8_t)~_BV(DDD0)) | _BV(DDD1);
    UBRR0 = 103U;                 /* 16 MHz, U2X0 = 0, khoảng 9600 baud */
    UCSR0A = 0;
    UCSR0B = _BV(RXEN0) | _BV(TXEN0);
    UCSR0C = _BV(UCSZ01) | _BV(UCSZ00);
}
static inline uint8_t receive(void) {
    while (!(UCSR0A & _BV(RXC0))) {}
    return UDR0;
}
static inline void send(uint8_t value) {
    while (!(UCSR0A & _BV(UDRE0))) {}
    UDR0 = value;
}
static inline void send16(uint16_t value) {
    send((uint8_t)(value >> 8));
    send((uint8_t)value);
}
static inline void send32(uint32_t value) {
    send16((uint16_t)(value >> 16));
    send16((uint16_t)value);
}
static inline uint16_t receive16(void) {
    uint16_t high = receive();
    return (uint16_t)((high << 8) | receive());
}
static inline uint32_t receive32(void) {
    uint32_t high = receive16();
    return (high << 16) | receive16();
}`;
  const adc = `static inline void adc_init(void) {
    DDRC &= (uint8_t)~_BV(DDC0);
    PORTC &= (uint8_t)~_BV(PORTC0);
    DIDR0 |= _BV(ADC0D);
    ADMUX = _BV(REFS0);           /* AVcc, ADC0, căn phải */
    ADCSRA = _BV(ADEN) | _BV(ADPS2) | _BV(ADPS1) | _BV(ADPS0);
}
static inline uint16_t read_adc(void) {
    ADCSRA |= _BV(ADSC);
    while (ADCSRA & _BV(ADSC)) {}
    uint8_t low = ADCL;
    uint8_t high = ADCH;
    return ((uint16_t)high << 8) | low;
}`;
  const modes = {
    serial: [
      "PD0/RXD nhận byte thô từ TX của bộ USB–UART. Nối chung GND và dùng mức logic phù hợp.",
      "PD1/TXD gửi byte thô về RX của bộ USB–UART. Xem dữ liệu theo hệ hex.",
      "UBRR0, UCSR0A/B/C, UDR0. RXC0 báo có byte, UDRE0 báo có chỗ ghi, cấu hình 9600 8N1 tại 16 MHz.",
      "uart_init();"
    ],
    adc: [
      "PC0/ADC0 nhận điện áp từ 0 đến AVcc. Mô phỏng dùng AVcc = 5 V.",
      "PD1/TXD gửi byte kết quả. Nối RX của bộ USB–UART và GND chung khi đo trên bo.",
      "ADMUX chọn ADC0 và AVcc. ADCSRA khởi động lấy mẫu. Đọc ADCL trước ADCH. USART0 phát kết quả.",
      "uart_init();\n    adc_init();"
    ],
    gpio: [
      "Nối nút xuống GND khi đề dùng kéo lên nội. Kiểm mức logic ở PINx.",
      "Quan sát chân output qua LED có điện trở hạn dòng hoặc logic analyzer và xem chốt PORTx.",
      "DDRx chọn hướng, PINx đọc mức chân, PORTx chọn mức output hoặc bật kéo lên cho input.",
      ""
    ],
    mixed: ["","","",""]
  };

  function add(id, mode, title, task, cases, body, declarations = "") {
    const [input, output, registers, init] = modes[mode];
    const usesUart = mode === "serial" || mode === "adc" || /\b(?:uart_init|receive|send(?:16|32)?)\(/.test(body);
    const usesAdc = mode === "adc" || /\b(?:adc_init|read_adc)\(/.test(body);
    const includes = "#include <avr/io.h>\n#include <avr/interrupt.h>\n#include <stdint.h>\n";
    const support = [usesUart ? uart : "",usesAdc ? adc : "",declarations].filter(Boolean).join("\n\n");
    const program = logic => includes + "\n" + (support ? support+"\n\n" : "") +
      "int main(void) {\n" + (init ? "    "+init+"\n\n" : "") + logic + "\n    for (;;) {}\n}\n";
    labs[id] = {
      id,title,task,input,output,registers,cases,
      starter:program("    /* TODO: cấu hình, đọc đầu vào, xử lý và xuất kết quả theo đề. */"),
      solution:program(body)
    };
  }
  const S = (rx, tx, label = "") => ({rx,tx,label});
  const A = (v, tx, label = "") => ({adc:v,tx,label});
  const G = (pins, regs, label = "") => ({pins,regs,label});
  const pin = (index, active) => ({["PD"+index]:active});
  function mix(id,title,task,cases,body,declarations) { add(id,"mixed",title,task,cases,body,declarations); }
  function serial(id,title,task,cases,body,declarations) { add(id,"serial",title,task,cases,body,declarations); }
  function gpio(id,title,task,cases,body,declarations) { add(id,"gpio",title,task,cases,body,declarations); }
  function analog(id,title,task,cases,body,declarations) { add(id,"adc",title,task,cases,body,declarations); }

  gpio("hello","Chương trình C đầu tiên: nút PD2 và LED PB5",
    "Viết main và vòng lặp vô hạn. Xóa DDRD2, bật PORTD2 để kéo lên nút nối GND. Đặt DDRB5 làm output. Đọc PIND2 và cho LED PB5 sáng khi nút nhấn. Chỉ sửa các bit liên quan.",
    [G(pin(2,false),{DDRD:0,PORTD:4,PIND:0,DDRB:32,PORTB:32,PINB:32},"PD2 nối GND"),
     G(pin(2,true),{DDRD:0,PORTD:4,PIND:4,DDRB:32,PORTB:0,PINB:0},"PD2 mức cao")],
    `    DDRD &= (uint8_t)~_BV(DDD2);
    PORTD |= _BV(PORTD2);
    DDRB |= _BV(DDB5);
    for (;;) {
        if ((PIND & _BV(PIND2)) == 0) {
            PORTB |= _BV(PORTB5);
        } else {
            PORTB &= (uint8_t)~_BV(PORTB5);
        }
    }`);
  analog("types","Kiểu dữ liệu: giữ đủ 10 bit từ ADC0","Đọc PC0 vào uint16_t. Gửi đúng hai byte từ PD1, cao trước. Thử hai điện áp cho kết quả nằm hai phía của 255, rồi giải thích vì sao uint8_t làm mất dữ liệu.",
    [A(1,[0,204]),A(2.5,[2,0])],`    uint16_t sample = read_adc();
    const uint16_t mask = 0x03FFU;
    send16(sample & mask);`);
  serial("io","Nhập xuất: ký tự điều khiển LED qua USART0","Đọc ký tự ASCII '0' hoặc '1' từ UDR0. Đặt PB5 làm output, bật LED khi nhận '1'. Gửi lại ký tự đã nhận qua PD1 để kiểm lệnh.",
    [{...S([49],[49]),regs:{DDRB:32,PORTB:32}},{...S([48],[48]),regs:{DDRB:32,PORTB:0}}],
    `    DDRB |= _BV(DDB5);
    uint8_t command = receive();
    if (command == '1') {
        PORTB |= _BV(PORTB5);
    } else {
        PORTB &= (uint8_t)~_BV(PORTB5);
    }
    send(command);`);
  gpio("build","Biên dịch và header: kiểm chân PC0 trước khi điều khiển PB0","Dùng avr/io.h để lấy tên chính xác của PINC và DDRB. Nút PC0 nối xuống GND. Xuất điều kiện nhấn ra PB0. Build cho đúng -mmcu=atmega328p và xem DDRB, PINC, PORTB.",
    [G({PC0:false},{DDRB:1,PORTC:1,PORTB:1}),G({PC0:true},{DDRB:1,PORTC:1,PORTB:0})],
    `    DDRC &= (uint8_t)~_BV(DDC0);
    PORTC |= _BV(PORTC0);
    DDRB |= _BV(DDB0);
    if (!(PINC & _BV(PINC0))) PORTB |= _BV(PORTB0);`);
  mix("operators","Toán tử: khóa liên động giữa PC0 và PD2","Hai nút tác động mức thấp ở PC0 và PD2. Bật PB5 khi PC0 nhấn và PD2 nhả. Viết điều kiện bằng &&, so sánh và mặt nạ.",
    [G({PC0:false,PD2:true},{PORTB:32}),G({PC0:false,PD2:false},{PORTB:0}),G({PC0:true,PD2:true},{PORTB:0})],
    `    PORTC |= _BV(PORTC0);
    PORTD |= _BV(PORTD2);
    DDRB |= _BV(DDB5);
    if (!(PINC & _BV(PINC0)) && (PIND & _BV(PIND2))) PORTB |= _BV(PORTB5);`);
  serial("branches","Rẽ nhánh: chọn chân báo hiệu theo mã UART","Dùng switch. Byte 1 bật PB0, byte 2 bật PB1, mã khác tắt cả hai. Gửi chốt thấp hai bit qua PD1. Phân biệt break và default khi đổi mã.",
    [{...S([1],[1]),regs:{PORTB:1}},{...S([2],[2]),regs:{PORTB:2}},S([7],[0])],
    `    DDRB |= _BV(DDB0) | _BV(DDB1);
    uint8_t mask = 0;
    switch (receive()) {
    case 1: mask = _BV(PORTB0); break;
    case 2: mask = _BV(PORTB1); break;
    default: break;
    }
    PORTB = (PORTB & (uint8_t)~3U) | mask;
    send(PORTB & 3U);`);
  serial("loops","Vòng lặp: đếm số bit 1 trong byte nhận qua PD0","Nhận một byte từ UDR0. Duyệt bit 0 đến 7 bằng for, đếm bao nhiêu bit 1 rồi gửi số đếm qua PD1. Kiểm cả byte không có bit 1.",
    [S([0],[0]),S([165],[4]),S([255],[8])],
    `    uint8_t value = receive();
    uint8_t count = 0;
    for (uint8_t bit = 0; bit < 8; ++bit) {
        if (value & (1U << bit)) ++count;
    }
    send(count);`);
  serial("arithmetic","Tràn số: xuất byte thấp và số nhớ qua USART0","Đọc hai byte từ PD0. Cộng vào kiểu rộng hơn rồi gửi byte thấp và số nhớ (0 hoặc 1) qua PD1. Không suy ra cờ SREG tại một dòng C tùy ý.",
    [S([200,100],[44,1]),S([200,55],[255,0])],
    `    uint8_t a = receive();
    uint8_t b = receive();
    uint16_t sum = (uint16_t)a + b;
    send((uint8_t)sum);
    send(sum > UINT8_MAX);`);
  analog("functions","Hàm: đổi mẫu ADC0 thành mức cảnh báo","Viết hàm nhận một mã ADC và trả 1 khi mã từ 512. main đọc ADC0, gọi hàm, bật PB5 khi đạt ngưỡng rồi gửi kết quả ra PD1.",
    [{...A(1,[0]),regs:{PORTB:0}},{...A(2.5,[1]),regs:{PORTB:32}}],
    `    DDRB |= _BV(DDB5);
    uint8_t alarm = is_alarm(read_adc());
    if (alarm) PORTB |= _BV(PORTB5);
    send(alarm);`,
    `static uint8_t is_alarm(uint16_t sample) {
    return sample >= 512U;
}`);
  serial("storage","Vòng đời biến: đếm hai lệnh nhận trên PD0","Tạo hàm đếm lần gọi bằng biến static cục bộ có khởi tạo 0. Với hai lệnh liên tiếp, trả 1 và 2 ra PD1. Thử đổi static thành biến tự động và quan sát.",
    [S([65,66],[1,2]),S([0,0],[1,2])],
    `    (void)receive();
    send(next_count());
    (void)receive();
    send(next_count());`,
    `static uint8_t next_count(void) {
    static uint8_t count;
    return ++count;
}`);
  serial("recursion","Đệ quy có giới hạn SRAM: tổng từ n về 0","Nhận n từ USART0. Chỉ gọi đệ quy khi n <= 8. Gửi tổng 1..n, gửi FF nếu ngoài miền. Giải thích khi nào lời gọi ngừng và vì sao cần giới hạn độ sâu trên SRAM 2 KiB.",
    [S([0],[0]),S([5],[15]),S([9],[255])],
    `    uint8_t n = receive();
    send(n <= 8U ? sum_to(n) : UINT8_MAX);`,
    `static uint8_t sum_to(uint8_t n) {
    if (n == 0) return 0;
    return n + sum_to(n - 1U);
}`);
  serial("arrays","Mảng SRAM: tìm mẫu trong bốn byte từ UART","Nạp bốn mẫu liên tiếp từ UDR0 vào mảng. Tiếp theo nhận byte đích. Gửi vị trí đầu tiên tìm thấy, hoặc FF.",
    [S([2,7,7,9,7],[1]),S([0,1,2,3,5],[255])],
    `    uint8_t samples[4];
    for (uint8_t i=0; i<4; ++i) samples[i]=receive();
    uint8_t needle=receive();
    uint8_t index=UINT8_MAX;
    for (uint8_t i=0; i<4; ++i) {
        if (samples[i]==needle) { index=i; break; }
    }
    send(index);`);
  serial("matrices","Mảng hai chiều: tính tổng hai điểm chéo của ma trận 2×2","Nhận bốn byte mẫu từ USART0 theo thứ tự hàng, lưu thành hai hàng trong SRAM. Tính tổng hai ô chéo và phát số 16 bit cao trước. Thử hai giá trị 255 trên đường chéo.",
    [S([1,2,3,4],[0,5]),S([255,10,11,255],[1,254])],
    `    uint8_t frame[2][2];
    for (uint8_t row=0; row<2; ++row) {
        for (uint8_t col=0; col<2; ++col) frame[row][col]=receive();
    }
    send16((uint16_t)frame[0][0]+frame[1][1]);`);
  serial("strings","Chuỗi SRAM: đếm lệnh UART kết thúc bằng LF","Nhận dòng ASCII kết thúc bằng LF. Bộ đệm có 8 ô, giữ tối đa 7 ký tự, chừa ô cho NUL. Đọc hết dòng kể cả khi vượt sức chứa và gửi FF khi quá dài, nếu hợp lệ trả số ký tự.",
    [S([65,84,10],[2]),S([10],[0]),S([65,66,67,68,69,70,71,72,10],[255])],
    `    char line[8];
    uint8_t used=0, overflow=0, ch;
    while ((ch=receive())!='\\n') {
        if (used<sizeof line-1U) line[used++]=(char)ch;
        else overflow=1;
    }
    line[used]='\\0';
    uint8_t count=0;
    while (line[count]!='\\0') ++count;
    send(overflow?UINT8_MAX:count);`);
  serial("pointers","Con trỏ: hoán đổi hai mẫu trong SRAM rồi gửi UART","Đọc hai byte từ PD0 vào hai biến. Hàm nhận địa chỉ của chúng và hoán đổi qua toán tử *. Gửi thứ tự mới qua PD1.",
    [S([4,9],[9,4]),S([255,0],[0,255])],
    `    uint8_t a=receive(), b=receive();
    swap(&a,&b);
    send(a);
    send(b);`,
    `static void swap(uint8_t *a, uint8_t *b) {
    uint8_t saved=*a;
    *a=*b;
    *b=saved;
}`);
  serial("pointer-arrays","Số học con trỏ: cộng bốn mẫu UART trong SRAM","Nhận bốn byte vào một mảng. Duyệt bằng con trỏ đến mốc sau cuối, dùng tổng uint16_t và gửi hai byte qua PD1.",
    [S([1,2,3,4],[0,10]),S([255,255,0,1],[1,255])],
    `    uint8_t samples[4];
    for (uint8_t i=0; i<4; ++i) samples[i]=receive();
    uint16_t sum=0;
    for (const uint8_t *p=samples; p!=samples+4; ++p) sum+=*p;
    send16(sum);`);
  serial("advanced-pointers","Con trỏ kép và callback: chọn bộ đệm nhận USART0","Lệnh 0 chọn mẫu từ đệm A, 1 từ đệm B. Hàm nhận địa chỉ của con trỏ active để đổi bộ đệm. Dùng callback để phát byte sau khi kiểm phạm vi lệnh.",
    [S([0,8,9],[8]),S([1,8,9],[9]),S([2,8,9],[255])],
    `    uint8_t command=receive(), a=receive(), b=receive();
    uint8_t *active=&a;
    select_buffer(&active, command==0 ? &a : &b);
    void (*transmit)(uint8_t)=send;
    transmit(command<2U ? *active : UINT8_MAX);`,
    `static void select_buffer(uint8_t **active, uint8_t *next) {
    *active=next;
}`);
  serial("struct","Struct: tìm bản ghi có mẫu cao hơn qua UART","Mỗi khung gồm id và mã ADC 8 bit đã thu gọn. Nhận hai bản ghi vào SRAM, so sánh qua con trỏ struct rồi phát id mẫu cao hơn, ưu tiên bản ghi đầu nếu bằng.",
    [S([10,3,11,7],[11]),S([10,3,11,3],[10])],
    `    Sample a,b;
    a.id=receive(); a.adc=receive();
    b.id=receive(); b.adc=receive();
    const Sample *peak=b.adc>a.adc ? &b : &a;
    send(peak->id);`,
    `typedef struct { uint8_t id; uint8_t adc; } Sample;`);
  serial("union-enum","Union có nhãn: giải mã lệnh AVR từ UDR0","Nhận nhãn 0 hoặc 1. Nhãn 0 đọc một byte cờ chân, nhãn 1 đọc hai byte ADC cao trước. Lưu qua thành viên union tương ứng và gửi lại. Với nhãn lạ gửi FF.",
    [S([0,32],[32]),S([1,2,165],[2,165]),S([8],[255])],
    `    enum Kind kind=(enum Kind)receive();
    union Payload payload;
    switch (kind) {
    case PIN_FLAGS: payload.flags=receive(); send(payload.flags); break;
    case ADC_SAMPLE: payload.adc=receive16(); send16(payload.adc); break;
    default: send(UINT8_MAX); break;
    }`,
    `enum Kind { PIN_FLAGS, ADC_SAMPLE };
union Payload { uint8_t flags; uint16_t adc; };`);
  serial("buffers","FIFO UART trong SRAM: đầy, đọc rồi quấn vòng","Nhận bốn byte. FIFO có ba ô và chừa một ô. Chèn hai byte đầu, từ chối byte thứ ba khi đầy. Gửi byte cũ nhất, chèn byte thứ tư rồi phát phần còn lại đúng thứ tự.",
    [S([10,20,30,40],[10,20,40]),S([4,2,9,1],[4,2,1])],
    `    push(receive());
    push(receive());
    push(receive());
    send(pop());
    push(receive());
    while (head!=tail) send(pop());`,
    `static uint8_t data[3], head, tail;
static void push(uint8_t value) {
    uint8_t next=(head+1U)%3U;
    if (next!=tail) { data[head]=value; head=next; }
}
static uint8_t pop(void) {
    uint8_t value=data[tail];
    tail=(tail+1U)%3U;
    return value;
}`);
  serial("allocation","Cấp phát động có chặn dung lượng trên SRAM AVR","Đọc n từ USART0. Chỉ cấp từ 1 đến 8 byte với calloc, đọc đủ n byte, giữ trong đệm, phát lại theo thứ tự ngược và free. Trả FF nếu n ngoài miền hoặc cấp phát thất bại. Thực hiện trong main.",
    [S([3,1,2,3],[3,2,1]),S([0],[255]),S([9],[255])],
    `    uint8_t n=receive();
    uint8_t *buffer=(n!=0 && n<=8U) ? calloc(n,sizeof *buffer) : 0;
    if (buffer) {
        for (uint8_t i=0; i<n; ++i) buffer[i]=receive();
        while (n) send(buffer[--n]);
        free(buffer);
    } else send(UINT8_MAX);`,
    `#include <stdlib.h>`);
  serial("memory-budget","Ngân sách SRAM: bộ đệm tĩnh với giới hạn 8 byte","Nhận số byte n qua USART0. Nếu n > 8, trả FF ngay. Còn lại lưu vào đệm tĩnh, XOR các byte và trả checksum. Tính chi phí đệm từ báo cáo .bss.",
    [S([3,1,3,4],[6]),S([0],[0]),S([9],[255])],
    `    uint8_t n=receive();
    if (n>sizeof buffer) send(UINT8_MAX);
    else {
        for (uint8_t i=0; i<n; ++i) buffer[i]=receive();
        uint8_t check=0;
        for (uint8_t i=0; i<n; ++i) check^=buffer[i];
        send(check);
    }`,
    `static uint8_t buffer[8];`);
  serial("text-files","Nhật ký AVR: gửi số đo ra USART0","Nhận một chữ số ASCII từ PD0, phát bản ghi theo mẫu V=3 rồi LF. Thiết bị nhận có thể ghi thành tệp nhật ký, firmware chỉ gửi các byte qua UDR0.",
    [S([51],[86,61,51,10]),S([57],[86,61,57,10])],
    `    uint8_t digit=receive();
    send('V');
    send('=');
    send(digit);
    send('\\n');`);
  serial("binary-files","Bản ghi nhị phân AVR: số đo và checksum trên UART","Nhận hai byte cao/thấp từ USART0. Phát chữ ký A5, hai byte theo thứ tự cũ và checksum XOR của hai byte. Một trình ghi trên máy có thể lưu nguyên các byte.",
    [S([18,52],[165,18,52,38]),S([0,255],[165,0,255,255])],
    `    uint16_t sample=receive16();
    send(0xA5);
    send16(sample);
    send((uint8_t)((sample>>8)^sample));`);
  serial("binary","Nhị phân và hex: giải mã lệnh LED ở cổng B","Nhận byte qua PD0. Đưa ba bit thấp ra PB0, PB1, PB2, và gửi chốt ba bit qua PD1. Ví dụ 0x25 cho 0x05, PB2 và PB0 bật.",
    [{...S([0x25],[5]),regs:{DDRB:7,PORTB:5}},{...S([0xFA],[2]),regs:{DDRB:7,PORTB:2}}],
    `    DDRB |= 0x07U;
    uint8_t command=receive()&0x07U;
    PORTB=(PORTB & (uint8_t)~0x07U)|command;
    send(PORTB&0x07U);`);
  gpio("masks","Mặt nạ: đọc PC0, PC1 và cập nhật PORTB","Cho hai nút nối GND tại PC0, PC1. Bật kéo lên. Nếu chỉ PC0 nhấn, PB0 sáng. Nếu chỉ PC1 nhấn, PB1 sáng. Hai nút có thể bật hai LED cùng lúc, giữ chốt PB5 đặt sẵn.",
    [G({PC0:false,PC1:true},{PORTB:33}),G({PC0:true,PC1:false},{PORTB:34}),G({PC0:false,PC1:false},{PORTB:35})],
    `    DDRB |= 0x23U;
    PORTB |= _BV(PORTB5);
    PORTC |= 3U;
    uint8_t pressed=(uint8_t)~PINC & 3U;
    PORTB=(PORTB & (uint8_t)~3U)|pressed;`);
  analog("encoding","Đóng gói ADC0: thứ tự byte và checksum","PC0 cho một mẫu ADC. Gửi byte cao, byte thấp và checksum XOR của hai byte qua USART0. Dự đoán với mẫu 0x0200.",
    [A(2.5,[2,0,2]),A(1,[0,204,204])],
    `    uint16_t sample=read_adc();
    send16(sample);
    send((uint8_t)((sample>>8)^sample));`);
  window.AvrLabs = {labs,add,S,A,G,button,pin,hex,serial,analog,gpio,mix};
})();

