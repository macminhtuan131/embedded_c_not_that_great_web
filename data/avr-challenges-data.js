(() => {
  const {U,H,M}=window.AvrChallengeHelpers;
  const {S,A,G,pin}=window.AvrLabs;
  U(46,"Checksum khung nhận từ USART0","Nhận ba byte dữ liệu rồi một byte checksum. So với tổng modulo 256, phát 1 khi khớp, 0 khi sai.",
    [S([1,2,3,6],[1]),S([255,2,0,2],[0])],
    `    uint8_t sum=0;
    for (uint8_t i=0;i<3;++i) sum+=receive();
    send(sum==receive());`);
  U(47,"Đảo tại chỗ bốn byte nhận UART trong SRAM","Điền bộ đệm bốn byte từ UDR0. Hoán đổi đối xứng rồi gửi, dùng đúng một ô tạm.",
    [S([1,2,3,4],[4,3,2,1]),S([9,0,7,5],[5,7,0,9])],
    `    uint8_t a[4];
    for (uint8_t i=0;i<4;++i) a[i]=receive();
    for (uint8_t i=0;i<2;++i) {
        uint8_t t=a[i]; a[i]=a[3-i]; a[3-i]=t;
    }
    for (uint8_t i=0;i<4;++i) send(a[i]);`);
  U(48,"Xoay mảng mẫu UART bằng ba lần đảo","Nhận bốn mẫu và byte K. Xoay trái K modulo 4 bằng đảo đoạn đầu, đoạn cuối, rồi cả mảng. Phát lại.",
    [S([1,2,3,4,1],[2,3,4,1]),S([1,2,3,4,6],[3,4,1,2])],
    `    uint8_t a[4];
    for (uint8_t i=0;i<4;++i) a[i]=receive();
    uint8_t k=receive()%4U;
    reverse(a,0,k);
    reverse(a,k,4);
    reverse(a,0,4);
    for (uint8_t i=0;i<4;++i) send(a[i]);`,
    `static void reverse(uint8_t *a, uint8_t lo, uint8_t hi) {
    while (hi>lo && hi-lo>1) {
        --hi;
        uint8_t t=a[lo]; a[lo]=a[hi]; a[hi]=t;
        ++lo;
    }
}`);
  U(49,"Tìm ID trùng trong cấu hình thiết bị nhận qua UART","Nhận bốn ID miền 0..3 vào AVR. Trả ID đầu tiên bị lặp, FF nếu không lặp hoặc dữ liệu ngoài miền. Đây là ID ứng dụng, tách khỏi địa chỉ TWI.",
    [S([0,1,2,1],[1]),S([3,0,1,2],[255]),S([1,9,2,3],[255])],
    `    uint8_t known=0, duplicate=UINT8_MAX, invalid=0;
    for (uint8_t i=0;i<4;++i) {
        uint8_t value=receive();
        if (value>=4U) { invalid=1; continue; }
        uint8_t bit=1U<<value;
        if ((known&bit) && duplicate==UINT8_MAX) duplicate=value;
        known|=bit;
    }
    send(invalid?UINT8_MAX:duplicate);`);
  M(50,"Cửa sổ trượt: đưa mẫu PC0 mới vào tổng đang có","USART0 nhận tổng cũ và mẫu cũ cao trước. Đọc ADC0, trừ mẫu cũ, cộng mã mới rồi phát tổng mới. Giả định tổng chứa mẫu cũ và kết quả vừa uint16_t.",
    [{...S([0,100,0,20],[2,80]),adc:2.5},{...S([0,50,0,10],[0,40]),adc:0}],
    `    uart_init(); adc_init();
    uint16_t sum=receive16(), oldest=receive16();
    send16((uint16_t)(sum-oldest+read_adc()));`);
  M(51,"Tuần tự hóa mẫu ADC0 thành khung USART0","Đọc nhãn cảm biến qua PD0 và mã ADC0 qua PC0. Tạo mảng TX ba byte gồm nhãn, byte cao và byte thấp rồi phát qua PD1.",
    [{...S([7],[7,2,0]),adc:2.5},{...S([3],[3,0,204]),adc:1}],
    `    uart_init(); adc_init();
    uint8_t label=receive();
    uint16_t sample=read_adc();
    uint8_t tx[3]={label,(uint8_t)(sample>>8),(uint8_t)sample};
    for (uint8_t i=0;i<sizeof tx;++i) send(tx[i]);`);
  U(54,"Hoán đổi hai tham số UART qua địa chỉ SRAM","PD0 nhận hai byte tham số. Truyền hai địa chỉ vào hàm swap, phát giá trị mới qua PD1.",
    [S([2,9],[9,2]),S([5,5],[5,5])],
    `    uint8_t a=receive(), b=receive();
    swap(&a,&b);
    send(a); send(b);`,
    `static void swap(uint8_t *a,uint8_t *b) { uint8_t t=*a; *a=*b; *b=t; }`);
  U(55,"Duyệt con trỏ SRAM và cộng mẫu chẵn","Nhận bốn byte từ UDR0, duyệt mảng con trỏ, cộng riêng giá trị chẵn rồi gửi tổng 16 bit.",
    [S([1,2,3,4],[0,6]),S([254,254,1,1],[1,252])],
    `    uint8_t a[4];
    for(uint8_t i=0;i<4;++i) a[i]=receive();
    uint16_t sum=0;
    for(const uint8_t *p=a;p!=a+4;++p) if((*p&1U)==0) sum+=*p;
    send16(sum);`);
  U(56,"Đảo bộ đệm nhận bằng hai con trỏ","Nhận bốn byte vào SRAM. Dùng con trỏ ở đầu và cuối, đổi rồi tiến về giữa. Phát lại theo thứ tự mới.",
    [S([1,2,3,4],[4,3,2,1]),S([4,4,1,0],[0,1,4,4])],
    `    uint8_t a[4];
    for(uint8_t *p=a;p!=a+4;++p) *p=receive();
    for(uint8_t *lo=a,*hi=a+3;lo<hi;++lo,--hi) { uint8_t t=*lo; *lo=*hi; *hi=t; }
    for(const uint8_t *p=a;p!=a+4;++p) send(*p);`);
  M(57,"Tìm đỉnh ADC bằng pointer walk","Nhận hai mã mẫu 16 bit qua USART0 và đo mẫu thứ ba từ PC0. Lưu cả ba vào SRAM rồi duyệt bằng con trỏ. Gửi mã lớn nhất.",
    [{...S([0,10,0,50],[2,0]),adc:2.5},{...S([0,32,3,255],[3,255]),adc:1}],
    `    uart_init(); adc_init();
    uint16_t a[3];
    a[0]=receive16(); a[1]=receive16(); a[2]=read_adc();
    uint16_t max=a[0];
    for(const uint16_t *p=a+1;p!=a+3;++p) if(*p>max) max=*p;
    send16(max);`);
  U(58,"Tổng byte nhận từ USART0 qua con trỏ","Nhận bốn byte vào mảng SRAM. Cộng với uint16_t khi duyệt bằng địa chỉ, gửi kết quả cao trước.",
    [S([50,100,80,70],[1,44]),S([255,255,255,255],[3,252])],
    `    uint8_t a[4];
    for(uint8_t *p=a;p!=a+4;++p) *p=receive();
    uint16_t sum=0;
    for(const uint8_t *p=a;p!=a+4;++p) sum+=*p;
    send16(sum);`);
  U(59,"Con trỏ kép chọn đệm giao dịch USART0","Nhận mã 0 hoặc 1 và hai byte A, B. Đổi con trỏ active bằng uint8_t ** rồi gửi byte từ đệm đã chọn.",
    [S([0,18,52],[18]),S([1,18,52],[52])],
    `    uint8_t command=receive(), a=receive(), b=receive(), *active=&a;
    select_buffer(&active,command?&b:&a);
    send(*active);`,
    `static void select_buffer(uint8_t **active,uint8_t *next) { *active=next; }`);
  U(60,"Đổi hai con trỏ nhận/xử lý USART0","Nhận một byte vào mỗi đệm. Hoán đổi địa chỉ của hai con trỏ, rồi truyền hai byte theo thứ tự mới. Dữ liệu trong đệm giữ nguyên.",
    [S([18,52],[52,18]),S([7,1],[1,7])],
    `    uint8_t a=receive(), b=receive(), *rx=&a,*work=&b;
    uint8_t *temp=rx; rx=work; work=temp;
    send(*rx); send(*work);`);
  U(61,"Cộng hai trường uint16_t trong SRAM qua void *","Nhận hai trường 16 bit từ PD0. Hàm nhận hai con trỏ void theo hợp đồng trỏ vào uint16_t. Tính uint32_t rồi phát bốn byte.",
    [S([0,10,0,20],[0,0,0,30]),S([255,255,0,1],[0,1,0,0])],
    `    uint16_t a=receive16(), b=receive16();
    send32(add_fields(&a,&b));`,
    `static uint32_t add_fields(const void *a,const void *b) {
    return (uint32_t)*(const uint16_t *)a+*(const uint16_t *)b;
}`);
  U(62,"Điều phối lệnh USART0 bằng bảng con trỏ hàm","Mã 0 tắt PB0, mã 1 bật PB0, mã lạ trả FF. Dùng bảng hàm và kiểm phạm vi trước khi gọi. Trả chốt PB0.",
    [{...S([1],[1]),regs:{PORTB:1}},S([0],[0]),S([2],[255])],
    `    DDRB |= _BV(DDB0);
    void (*const handler[])(void)={led_off,led_on};
    uint8_t command=receive();
    if(command<2) { handler[command](); send(PORTB & 1U); }
    else send(UINT8_MAX);`,
    `static void led_off(void) { PORTB &= (uint8_t)~_BV(PORTB0); }
static void led_on(void) { PORTB |= _BV(PORTB0); }`);
  U(63,"FSM qua UART: RUN và FAULT trên PB1/PB2","Nhận hai sự kiện. Sự kiện 1 đưa IDLE sang RUN, sự kiện 2 đưa RUN sang FAULT. Dùng con trỏ hàm. RUN bật PB1, FAULT tắt PB1 và bật PB2. Phát chốt cuối.",
    [{...S([1,2],[4]),regs:{PORTB:4}},S([1,0],[2]),S([2,1],[2])],
    `    DDRB |= 6U;
    State active=idle;
    for(uint8_t i=0;i<2;++i) active(&active,receive());
    send(PORTB & 6U);`,
    `typedef void (*Handler)(void *,uint8_t);
typedef Handler State;
static void fault(void *next,uint8_t event) { (void)next; (void)event; }
static void run(void *next,uint8_t event) {
    if(event==2U) { PORTB=(PORTB&~2U)|4U; *(State *)next=fault; }
}
static void idle(void *next,uint8_t event) {
    if(event==1U) { PORTB|=2U; *(State *)next=run; }
}`);
  U(64,"Sao chép khung USART0 giữa hai vùng SRAM","Nhận bốn byte, sao chép sang vùng đích không chồng lấp bằng con trỏ uint8_t, rồi gửi đệm đích.",
    [S([0,1,2,3],[0,1,2,3]),S([255,0,85,170],[255,0,85,170])],
    `    uint8_t in[4],out[4];
    for(uint8_t i=0;i<4;++i) in[i]=receive();
    copy_bytes(out,in,4);
    for(uint8_t i=0;i<4;++i) send(out[i]);`,
    `static void copy_bytes(uint8_t *dst,const uint8_t *src,uint8_t n) { while(n--) *dst++=*src++; }`);
  U(65,"Quét cửa sổ ba mẫu tăng liên tiếp trong đệm UART","Nhận năm mã mẫu. Phát chỉ số bắt đầu của bộ ba tăng nghiêm ngặt đầu tiên, FF nếu không có.",
    [S([9,1,2,3,2],[1]),S([1,1,2,2,3],[255])],
    `    uint8_t a[5], index=UINT8_MAX;
    for(uint8_t i=0;i<5;++i) a[i]=receive();
    for(uint8_t i=0;i<3;++i) if(a[i]<a[i+1] && a[i+1]<a[i+2]) { index=i; break; }
    send(index);`);
  U(66,"Nhận và kiểm byte đồng bộ luân phiên USART0","PD0 nhận một byte. Phát 1 nếu có dạng 0x55 hoặc 0xAA, tức các bit liền kề luôn khác, nếu không phát 0.",
    [S([85],[1]),S([170],[1]),S([163],[0])],
    `    uint8_t value=receive();
    send(((value^(value>>1))&127U)==127U);`);
  M(67,"Callback cho sự kiện INT0 và lệnh UART","Nhận một lệnh UART. Một cạnh xuống tại PD2 đặt cờ. Main dùng hai callback để báo riêng nút trên PB0 và lệnh trên PB1 rồi phát chốt.",
    [{...S([1],[3]),pins:pin(2,true),events:[[3500,"PD2",false]]},S([1],[2]),S([0],[0])],
    `    uart_init();
    DDRB |= 3U;
    PORTD |= _BV(PORTD2);
    EICRA = _BV(ISC01); EIFR = _BV(INTF0); EIMSK = _BV(INT0);
    sei();
    uint8_t command=receive();
    void (*const notify[])(void)={on_button,on_command};
    if (pressed) notify[0]();
    if (command==1) notify[1]();
    send(PORTB & 3U);`,
    `static volatile uint8_t pressed;
ISR(INT0_vect) { pressed=1; }
static void on_button(void) { PORTB|=1U; }
static void on_command(void) { PORTB|=2U; }`);
  H(68,"MMIO: ghi địa chỉ dữ liệu 0x25 của PORTB","Nút PC0 chọn mức cho PB5. Truy cập PORTB bằng volatile uint8_t * ở 0x25, cấu hình DDRB trước. Kiểm chốt và mức chân.",
    [G({PC0:true},{PORTB:32,DDRB:32,PINB:32}),G({PC0:false},{PORTB:0,DDRB:32,PINB:0})],
    `    volatile uint8_t *port=(volatile uint8_t *)0x25U;
    DDRB |= _BV(DDB5);
    if(PINC & _BV(PINC0)) *port |= _BV(PORTB5);
    else *port &= (uint8_t)~_BV(PORTB5);`);
  U(73,"Chuyển cấu hình struct sang OCR0A và TCCR0B","USART0 nhận duty và mã chia clock. Ghi trường duty vào OCR0A và ba bit clock vào TCCR0B, giữ WGM02 đặt trước. Gửi hai ảnh chụp thanh ghi.",
    [{...S([42,3],[42,11]),regs:{OCR0A:42,TCCR0B:11}},S([20,2],[20,10])],
    `    Setup setup;
    setup.duty=receive(); setup.clock=receive();
    const Setup *p=&setup;
    TCCR0B=_BV(WGM02);
    OCR0A=p->duty;
    TCCR0B=(TCCR0B & (uint8_t)~7U)|(p->clock&7U);
    send(OCR0A); send(TCCR0B);`,
    `typedef struct { uint8_t duty; uint8_t clock:3; } Setup;`);
  U(74,"Even parity: chuẩn bị byte UART và bật UPM01","Nhận byte từ USART0, tính bit parity chẵn bằng XOR và gửi giá trị bit để kiểm. Đồng thời bật UPM01 để phần cứng phát parity chẵn. Mô phỏng kiểm thanh ghi cấu hình và byte dữ liệu.",
    [{...S([7],[1]),regs:{UCSR0C:38}},S([3],[0])],
    `    uint8_t value=receive(), parity=0;
    UCSR0C |= _BV(UPM01);
    for(uint8_t i=0;i<8;++i) parity^=(value>>i)&1U;
    send(parity);`);
  U(75,"Kiểm kích thước và offset bản ghi AVR khi biên dịch","Kiểm bằng _Static_assert rằng bản ghi byte + uint16_t có 3 byte trên avr-gcc với mặc định AVR. Nhận mã và trường 16 bit cao trước. Gửi từng trường ra UART rồi gửi sizeof.",
    [S([1,18,52],[1,18,52,3]),S([7,0,9],[7,0,9,3])],
    `    Frame f;
    f.kind=receive(); f.sample=receive16();
    send(f.kind); send16(f.sample); send(sizeof f);`,
    `#include <stddef.h>
typedef struct { uint8_t kind; uint16_t sample; } Frame;
_Static_assert(sizeof(Frame)==3 && offsetof(Frame,sample)==1,"Unexpected AVR layout");`);
  U(76,"Quan sát padding khi lưu bản ghi trong SRAM AVR","Nhận một byte nhãn và uint32_t high-first. Gửi sizeof, offset của trường 32 bit và giá trị qua USART0. Chỉ dựa vào kết quả đo của avr-gcc đang dùng.",
    [S([1,0,0,0,3],[5,1,0,0,0,3]),S([4,18,52,86,120],[5,1,18,52,86,120])],
    `    Frame f;
    f.label=receive(); f.count=receive32();
    send(sizeof f); send(offsetof(Frame,count)); send32(f.count);`,
    `#include <stddef.h>
typedef struct { uint8_t label; uint32_t count; } Frame;`);
  U(77,"Giải khung UART thành struct mẫu cảm biến","RX nhận id, byte cao/thấp của mẫu và byte kiểm XOR. Kiểm checksum trước khi ghi vào struct và trả hai byte mẫu. Trả FF nếu sai.",
    [S([7,2,0,5],[2,0]),S([7,2,0,0],[255])],
    `    uint8_t id=receive(), hi=receive(), lo=receive(), check=receive();
    if ((id^hi^lo)==check) {
        Frame f={id,((uint16_t)hi<<8)|lo}; send16(f.value);
    } else send(UINT8_MAX);`,
    `typedef struct { uint8_t id; uint16_t value; } Frame;`);
  H(78,"Đọc bố trí PINC/DDRC/PORTC và ghi chân PB2","Dùng struct để biểu diễn ba byte ảnh chụp cổng C. Nối nút PC0 xuống GND có kéo lên. Dùng bit đọc trong snapshot để bật PB2. Truy cập thanh ghi thật bằng tên trong avr/io.h.",
    [G({PC0:false},{PORTC:1,PORTB:4}),G({PC0:true},{PORTC:1,PORTB:0})],
    `    PORTC |= _BV(PORTC0); DDRB |= _BV(DDB2);
    Snapshot c={PINC,DDRC,PORTC};
    if (!(c.input & _BV(PINC0))) PORTB |= _BV(PORTB2);`,
    `typedef struct { uint8_t input,direction,latch; } Snapshot;`);
  M(79,"Lọc bản ghi ADC0 theo ngưỡng từ USART0","Nhận một ngưỡng 16 bit và một mẫu lưu trước từ UDR0. Đo mẫu mới từ PC0. Mỗi mẫu có id 0 hoặc 1. Phát id của bản ghi đạt ngưỡng và byte FF kết thúc.",
    [{...S([1,0,0,200],[1,255]),adc:2.5},{...S([0,5,0,6],[0,255]),adc:0}],
    `    uart_init(); adc_init();
    uint16_t threshold=receive16();
    Sample frames[2];
    frames[0]=(Sample){0,receive16()};
    frames[1]=(Sample){1,read_adc()};
    for (uint8_t i=0;i<2;++i) if(frames[i].value>=threshold) send(frames[i].id);
    send(UINT8_MAX);`,
    `typedef struct { uint8_t id; uint16_t value; } Sample;`);
  U(83,"Giải byte cấu hình union và áp mặt nạ vào UCSR0B","Nhận cờ USART mong muốn. Đọc bản sao qua union trên avr-gcc, chỉ cho phép thay UDRIE0, giữ RXEN0 và TXEN0. Phát ảnh chụp trạng thái rồi tắt UDRIE0 trong lab polling.",
    [S([0],[24]),S([32],[56]),S([255],[56])],
    `    Control desired={.raw=receive()};
    if(desired.bits.data_irq) UCSR0B|=_BV(UDRIE0);
    else UCSR0B&=(uint8_t)~_BV(UDRIE0);
    uint8_t snapshot=UCSR0B;
    UCSR0B&=(uint8_t)~_BV(UDRIE0);
    send(snapshot);`,
    `typedef union { uint8_t raw; struct { unsigned reserved:5; unsigned data_irq:1; } bits; } Control;`);
})();

