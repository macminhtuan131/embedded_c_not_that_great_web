(() => {
  const {U,M}=window.AvrChallengeHelpers;
  const {S,G}=window.AvrLabs;
  const word=`typedef union { uint32_t word; uint8_t bytes[4]; } Word;`;
  U(84,"Đọc biểu diễn little-endian của từ nhận trên USART0","Nhận từ 32 bit theo thứ tự cao trước, lưu vào union rồi phát byte theo thứ tự địa chỉ SRAM từ thấp đến cao. Kiểm bố trí của avr-gcc.",
    [S([17,34,51,68],[68,51,34,17]),S([0,0,0,1],[1,0,0,0])],
    `    Word d={.word=receive32()};
    for(uint8_t i=0;i<4;++i) send(d.bytes[i]);`,word);
  U(85,"Thay byte SRAM trong union, gửi lại qua UDR0","Nhận bốn byte cao trước và giá trị mới cho bytes[2] của union AVR little-endian. Phát lại từ 32 bit theo thứ tự truyền ban đầu.",
    [S([0,17,34,51,255],[0,255,34,51]),S([1,2,3,4,0],[1,0,3,4])],
    `    Word data={.word=receive32()};
    data.bytes[2]=receive();
    send32(data.word);`,word);
  U(86,"Khung UART: chọn kiểu payload bằng nhãn union","RX nhận loại 0 có một byte cờ, loại 1 có hai byte mẫu. Lưu vào union kết hợp struct và phát A5, loại, payload. Loại sai gửi FF.",
    [S([0,5],[165,0,5]),S([1,2,165],[165,1,2,165]),S([8],[255])],
    `    Packet packet;
    packet.type=receive();
    if(packet.type>1) send(UINT8_MAX);
    else {
        if(packet.type==0) packet.payload.flags=receive();
        else packet.payload.sample=receive16();
        send(0xA5); send(packet.type);
        if(packet.type==0) send(packet.payload.flags);
        else send16(packet.payload.sample);
    }`,
    `typedef struct { uint8_t type; union { uint8_t flags; uint16_t sample; } payload; } Packet;`);
  M(87,"Đọc ADCL rồi ADCH và kiểm layout union trên AVR","Nhận mã từ PC0, thiết lập ADLAR=0. Đọc ADCL trước ADCH, lưu byte theo thứ tự little-endian trong union. Gửi mã ở dạng cao trước để so với giao thức UART.",
    [{...S([],[2,0]),adc:2.5},{...S([],[0,204]),adc:1}],
    `    uart_init(); adc_init();
    ADCSRA |= _BV(ADSC);
    while(ADCSRA & _BV(ADSC)) {}
    union { uint16_t value; uint8_t bytes[2]; } result;
    result.bytes[0]=ADCL;
    result.bytes[1]=ADCH;
    send16(result.value & 0x03FFU);`);
  U(88,"Gửi mẫu float 32 bit từ AVR qua UART","PD0 nhận một byte số nguyên biểu diễn độ C. Chuyển sang float, gửi bốn byte little-endian của avr-gcc. Thỏa thuận với bên nhận về IEEE-754 binary32.",
    [S([1],[0,0,128,63]),S([24],[0,0,192,65])],
    `    union { float value; uint8_t bytes[4]; } result={.value=(float)receive()};
    for(uint8_t i=0;i<4;++i) send(result.bytes[i]);`,
    `_Static_assert(sizeof(float)==4,"Lab requires binary32 float");`);
  U(91,"Ghi FIFO từ ISR nhận USART0","ISR USART_RX đọc UDR0 và đưa vào FIFO bốn ô, chừa một ô. Giữ ba byte đầu. Main chờ bốn lần RX, tắt ngắt nhận rồi phát các byte hợp lệ theo thứ tự.",
    [S([1,2,3,4],[1,2,3]),S([10,20,30,40],[10,20,30])],
    `    UCSR0B |= _BV(RXCIE0);
    sei();
    while(seen<4U) {}
    UCSR0B &= (uint8_t)~_BV(RXCIE0);
    for(uint8_t tail=0;tail<head;++tail) send(buffer[tail]);`,
    `static volatile uint8_t buffer[4], head, seen;
ISR(USART_RX_vect) {
    uint8_t byte=UDR0;
    uint8_t next=(head+1U)&3U;
    if(next!=0) { buffer[head]=byte; head=next; }
    ++seen;
}`);
  U(92,"Main lấy byte cũ nhất khỏi FIFO UART","Nhận ba byte vào vị trí quấn vòng của đệm, sau đó main lấy từng phần tử UDR0 theo FIFO rồi gửi. Chỉ tăng tail sau khi lấy byte.",
    [S([1,2,3],[1,2,3]),S([79,75,10],[79,75,10])],
    `    uint8_t buf[4], head=3,tail=3;
    for(uint8_t i=0;i<3;++i) { buf[head]=receive(); head=(head+1U)&3U; }
    while(tail!=head) { send(buf[tail]); tail=(tail+1U)&3U; }`);
  U(93,"Peek FIFO USART0 qua vị trí quấn mà giữ tail","Đặt ba byte nhận qua RX vào đệm ở chỉ số 3,0,1. Phát hai byte đầu theo peek rồi phát lại ba byte theo pop. Hai lượt đầu ra cho thấy tail giữ nguyên qua peek.",
    [S([65,84,10],[65,84,65,84,10]),S([2,3,5],[2,3,2,3,5])],
    `    uint8_t a[4],tail=3;
    a[3]=receive(); a[0]=receive(); a[1]=receive();
    for(uint8_t i=0;i<2;++i) send(a[(tail+i)&3U]);
    while(tail!=2U) { send(a[tail]); tail=(tail+1U)&3U; }`);
  U(94,"Ngăn xếp phần mềm trong SRAM: push/pop qua USART0","PD0 nhận ba byte rồi đẩy vào ngăn xếp tĩnh. Phát kết quả pop về PD1 theo thứ tự LIFO.",
    [S([2,4,8],[8,4,2]),S([0,10,0],[0,10,0])],
    `    uint8_t stack[3],top=0;
    while(top<sizeof stack) stack[top++]=receive();
    while(top) send(stack[--top]);`);
  U(96,"my_strlen cho dòng UDR0 kết thúc NUL","Nhận tối đa bảy byte ASCII và byte 0 từ USART0. Tạo chuỗi SRAM rồi đếm bằng con trỏ trước khi phát chiều dài.",
    [S([65,86,82,0],[3]),S([0],[0])],
    `    char line[8];
    uint8_t i=0;
    while(i<sizeof line-1U) { if((line[i++]=(char)receive())==0) break; }
    line[i]=0;
    const char *p=line;
    while(*p) ++p;
    send((uint8_t)(p-line));`);
  U(97,"Sao chép có chặn dung lượng rồi phát chuỗi qua UART","RX nhận chuỗi ASCII kết thúc byte 0, tối đa bảy ký tự. Sao chép vào đệm bốn ô và luôn kết thúc bằng NUL. Phát cả byte NUL để kiểm.",
    [S([65,66,67,68,0],[65,66,67,0]),S([0],[0])],
    `    char src[8],dest[4];
    uint8_t n=0;
    while(n<7U) { if((src[n++]=(char)receive())==0) break; }
    src[n]=0;
    uint8_t i=0;
    while(i<sizeof dest-1U && src[i]) { dest[i]=src[i]; ++i; }
    dest[i]=0;
    for(uint8_t k=0;k<=i;++k) send((uint8_t)dest[k]);`);
  U(98,"So lệnh AT trên USART0","Nhận hai ký tự đã phân khung. So với A và T. Phát 1 khi khớp, 0 khi không khớp, dùng byte unsigned.",
    [S([65,84],[1]),S([65,88],[0]),S([84,65],[0])],
    `    uint8_t command[2];
    for(uint8_t i=0;i<2;++i) command[i]=receive();
    const uint8_t target[]={'A','T'};
    int diff=0;
    for(uint8_t i=0;i<2;++i) {
        diff=(int)command[i]-target[i]; if(diff) break;
    }
    send(diff==0);`);
  U(99,"Đảo chuỗi ASCII nhận từ PD0 tại chỗ","Nhận ba ký tự, tạo chuỗi C trong SRAM, đảo phần nội dung và phát ký tự mới theo thứ tự.",
    [S([65,66,67],[67,66,65]),S([49,50,51],[51,50,49])],
    `    char text[4];
    for(uint8_t i=0;i<3;++i) text[i]=(char)receive();
    text[3]=0;
    char tmp=text[0]; text[0]=text[2]; text[2]=tmp;
    for(const char *p=text;*p;++p) send((uint8_t)*p);`);
  U(100,"Loại ký tự trùng bằng bitset SRAM 16 byte","Nhận bốn byte ASCII 1..127. Giữ lần xuất hiện đầu trong đệm, phát chuỗi rút gọn. Không dùng bảng 128 byte.",
    [S([65,65,66,65],[65,66]),S([97,98,99,100],[97,98,99,100])],
    `    uint8_t text[4],seen[16]={0},n=0;
    for(uint8_t i=0;i<4;++i) text[i]=receive();
    for(uint8_t i=0;i<4;++i) {
        uint8_t c=text[i];
        if(c<128U) {
            uint8_t mask=1U<<(c&7U);
            if(!(seen[c>>3]&mask)) { seen[c>>3]|=mask; text[n++]=c; }
        }
    }
    for(uint8_t i=0;i<n;++i) send(text[i]);`);
  U(101,"Phân loại ký tự của gói UART","Nhận bốn byte ASCII. Phát số lượng chữ, số và ký hiệu. Xét đúng phạm vi 'A'..'Z', 'a'..'z' và '0'..'9'.",
    [S([65,57,32,122],[2,1,1]),S([48,49,50,51],[0,4,0])],
    `    uint8_t letters=0,digits=0,other=0;
    for(uint8_t i=0;i<4;++i) {
        uint8_t c=receive();
        if((c>='A'&&c<='Z')||(c>='a'&&c<='z')) ++letters;
        else if(c>='0'&&c<='9') ++digits;
        else ++other;
    }
    send(letters); send(digits); send(other);`);
  U(102,"Chuẩn hóa byte lệnh USART0 bằng bit 5","Nếu byte nhận thuộc A..Z, đặt bit 5 để thành chữ thường. Giữ nguyên dấu câu và chữ đã thường. Phát byte kết quả.",
    [S([65],[97]),S([64],[64]),S([122],[122])],
    `    uint8_t c=receive();
    if(c>='A' && c<='Z') c|=0x20U;
    send(c);`);
  U(103,"Nhận ba tham số CSV cho firmware qua RXD","Nhận ba số ASCII 0..255 phân cách bằng dấu phẩy và kết thúc LF. Chỉ ghi mảng SRAM khi từng giá trị vừa miền. Trả ba byte, hoặc FF nếu sai.",
    [S([49,44,50,44,51,10],[1,2,3]),S([50,53,54,44,48,44,49,10],[255])],
    `    uint8_t out[3], fields=0, digits=0, bad=0, c;
    uint16_t value=0;
    do {
        c=receive();
        if(c>='0'&&c<='9'&&value<=255U) { value=value*10U+(c-'0'); digits=1; }
        else if(c==','||c=='\\n') {
            if(fields>=3U||!digits||value>255U) bad=1;
            else out[fields++]=value;
            digits=0; value=0;
        } else bad=1;
    } while(c!='\\n');
    if(bad||fields!=3U) send(UINT8_MAX);
    else for(uint8_t i=0;i<3;++i) send(out[i]);`);
  U(104,"Đọc tham số int16_t qua USART0, kiểm tràn trước khi tích lũy","PD0 nhận dấu tùy chọn '-' và chữ số đến LF. Phát giá trị int16_t ở dạng hai byte cao trước, FF FF khi lỗi (trùng biểu diễn −1 trong lab này).",
    [S([45,52,53,48,10],[254,62]),S([51,50,55,54,56,10],[255,255])],
    `    uint8_t c=receive(), negative=c=='-', digit=0, bad=0;
    if(negative) c=receive();
    uint16_t limit=negative?32768U:32767U, value=0;
    while(c!='\\n') {
        if(c<'0'||c>'9'||value>(limit-(c-'0'))/10U) bad=1;
        else { value=value*10U+(c-'0'); digit=1; }
        c=receive();
    }
    send16(bad||!digit?UINT16_MAX:negative?(uint16_t)(0U-value):value);`);
  U(105,"Phân biệt dòng UART thuần số hoặc thuần chữ","Đọc đến LF. Phát 1 nếu toàn chữ số, 2 nếu toàn chữ cái ASCII, 0 nếu trộn, có dấu câu hoặc rỗng.",
    [S([50,48,50,54,10],[1]),S([65,86,82,10],[2]),S([65,57,10],[0]),S([10],[0])],
    `    uint8_t all_number=1,all_alpha=1,seen=0,c;
    while((c=receive())!='\\n') {
        seen=1; all_number &= c>='0'&&c<='9';
        all_alpha &= (c>='a'&&c<='z')||(c>='A'&&c<='Z');
    }
    send(!seen?0:all_number?1:all_alpha?2:0);`);
  U(106,"Giải giá trị nhiệt dạng dd.dd từ UART sang centi-độ","Nhận đúng năm ký tự theo mẫu dd.dd. Tích lũy bốn chữ số, trả uint16_t centi-độ qua PD1 hoặc FF FF nếu sai định dạng.",
    [S([50,52,46,55,53],[9,171]),S([48,49,46,48,53],[0,105]),S([48,49,88,48,53],[255,255])],
    `    uint16_t value=0;
    uint8_t bad=0;
    for(uint8_t i=0;i<5;++i) {
        uint8_t c=receive();
        if(i==2) bad|=c!='.';
        else if(c>='0'&&c<='9') value=value*10U+(c-'0');
        else bad=1;
    }
    send16(bad?UINT16_MAX:value);`);
  U(107,"Tokenizer trong SRAM nhận lệnh phân cách bằng dấu phẩy","Nhận năm byte ASCII từ USART0. Đổi dấu phẩy thành NUL ngay trong bộ đệm. Phát chuỗi byte mới, kể cả các trường rỗng.",
    [S([65,44,66,44,67],[65,0,66,0,67]),S([44,44,65,66,44],[0,0,65,66,0])],
    `    uint8_t buffer[5];
    for(uint8_t i=0;i<5;++i) buffer[i]=receive();
    for(uint8_t i=0;i<5;++i) {
        if(buffer[i]==',') buffer[i]=0;
        send(buffer[i]);
    }`);
  U(108,"Tách UTC và tọa độ từ đoạn đầu khung GPGGA qua USART0","Driver nhận đoạn đầu từ $GPGGA,utc,latitude,N/S,longitude,E/W và kết thúc bằng LF. Tách các trường theo dấu phẩy, phát riêng UTC, vĩ độ, kinh độ và hướng, mỗi trường phân cách bằng NUL. Đây là bài tách trường; khung NMEA đầy đủ còn cần xác thực checksum trước khi dùng.",
    [S([..."\u0024GPGGA,123519,4807.038,N,01131.000,E\n"].map(c=>c.charCodeAt(0)),[..."123519\0"+"4807.038\0N\0"+"01131.000\0E\0"].map(c=>c.charCodeAt(0))),
     S([..."\u0024GPGGA,000001,,S,,W\n"].map(c=>c.charCodeAt(0)),[..."000001\0\0S\0\0W\0"].map(c=>c.charCodeAt(0)))],
    `    uint8_t line[48],len=0,field=0,c;
    while((c=receive())!='\\n') { if(len<sizeof line) line[len++]=c; }
    for(uint8_t i=0;i<len;++i) {
        c=line[i];
        if(c==',') { if(field>=1U&&field<=5U) send(0); ++field; }
        else if(field>=1U&&field<=5U) send(c);
    }
    if(field==5U) send(0);`);
  U(109,"Lệnh UART điều khiển PB5 và PWM OC0A tại PD6","Lệnh một byte '1' bật LED, '0' tắt, 'P' đọc byte duty tiếp theo rồi ghi OCR0A, 'S' trả trạng thái. Mỗi lệnh hợp lệ phát chốt PB5 và OCR0A. Lệnh lạ trả FF.",
    [{...S([49],[32,0]),regs:{PORTB:32}},{...S([80,128],[0,128]),regs:{OCR0A:128,TCCR0A:131}},S([88],[255])],
    `    DDRB|=_BV(DDB5); DDRD|=_BV(DDD6);
    TCCR0A=_BV(COM0A1)|_BV(WGM01)|_BV(WGM00);
    TCCR0B=_BV(CS01)|_BV(CS00);
    switch(receive()){
    case '1': PORTB|=_BV(PORTB5); break;
    case '0': PORTB&=(uint8_t)~_BV(PORTB5); break;
    case 'P': OCR0A=receive(); break;
    case 'S': break;
    default: send(UINT8_MAX); return 0;
    }
    send(PORTB&_BV(PORTB5)); send(OCR0A);`);
  M(112,"Ghép hai byte SPI và xuất thứ tự byte-đảo qua UART","ATmega328P là SPI master, đọc hai byte cao trước bằng SPDR. Sau đó phát byte thấp trước qua USART0. PB2 điều khiển SS, PB3 phát, PB4 nhận, PB5 cấp clock.",
    [{...S([],[52,18]),spi:[18,52],spiSent:[255,255]},{...S([],[255,0]),spi:[0,255],spiSent:[255,255]}],
    `    uart_init();
    PORTB|=_BV(PORTB2);
    DDRB|=_BV(DDB2)|_BV(DDB3)|_BV(DDB5);
    SPCR=_BV(SPE)|_BV(MSTR);
    PORTB&=(uint8_t)~_BV(PORTB2);
    uint8_t high=transfer(), low=transfer();
    PORTB|=_BV(PORTB2);
    send(low); send(high);`,
    `static uint8_t transfer(void) { SPDR=0xFF; while(!(SPSR&_BV(SPIF))){} return SPDR; }`);
  M(113,"In nhị phân ảnh chụp PINC qua PD1","Đọc bốn switch PC0..PC3. Phát tám chữ số ASCII, bốn bit cao bằng 0, theo thứ tự từ bit 7 xuống bit 0.",
    [{...S([],[48,48,48,48,48,49,48,49]),pins:{PC2:true,PC0:true}},
     {...S([],[48,48,48,48,49,48,48,48]),pins:{PC3:true}}],
    `    uart_init();
    uint8_t value=PINC&15U;
    for(uint8_t mask=128;mask;mask>>=1) send((value&mask)?'1':'0');`);
  U(114,"Chọn cơ số 2 hoặc 16 cho byte đo nhận từ UART","Nhận cơ số 2 hoặc 16 rồi một giá trị. Phát chữ số ASCII không có số 0 đầu, riêng 0 in một ký tự '0'. Dùng chia lấy dư.",
    [S([2,5],[49,48,49]),S([16,47],[50,70]),S([2,0],[48])],
    `    uint8_t base=receive(),value=receive(),n=0;
    char digits[8];
    if(base!=2U&&base!=16U) { send('?'); return 0; }
    do { uint8_t d=value%base; digits[n++]=d<10?'0'+d:'A'+d-10; value/=base; } while(value);
    while(n) send((uint8_t)digits[--n]);`);
  U(115,"Định dạng int16_t thành thập phân qua USART0","Nhận hai byte của số có dấu, phát chữ số thập phân. Xử lý đúng -32768 bằng trị tuyệt đối trong kiểu rộng.",
    [S([128,0],[45,51,50,55,54,56]),S([0,0],[48]),S([0,255],[50,53,53])],
    `    int16_t value=(int16_t)receive16();
    uint16_t magnitude=value<0?(uint16_t)-(int32_t)value:(uint16_t)value;
    char text[5];
    uint8_t n=0;
    if(value<0) send('-');
    do { text[n++]='0'+magnitude%10U; magnitude/=10U; } while(magnitude);
    while(n) send((uint8_t)text[--n]);`);
  U(116,"Đọc chuỗi 0/1 qua USART0 thành byte cấu hình","Nhận đúng sáu ký tự nhị phân, dịch và OR từng bit, gửi byte thô qua PD1 hoặc FF nếu ký tự sai.",
    [S([49,48,49,49,48,49],[45]),S([49,48,88,49,48,49],[255])],
    `    uint8_t result=0,bad=0;
    for(uint8_t i=0;i<6;++i) {
        uint8_t c=receive();
        if(c!='0'&&c!='1') bad=1;
        result=(result<<1)|(c=='1');
    }
    send(bad?UINT8_MAX:result);`);
  U(117,"Giải chuỗi 0xHH từ UART thành giá trị số","Nhận bốn ký tự ASCII, kiểm tiền tố 0x và hai chữ số hệ 16. Gửi một byte kết quả hoặc FF khi lỗi.",
    [S([48,120,50,70],[47]),S([48,120,97,53],[165]),S([48,120,71,48],[255])],
    `    uint8_t zero=receive(), x=receive(), a=nibble(receive()), b=nibble(receive());
    send(zero=='0'&&x=='x'&&a<16U&&b<16U?(uint8_t)((a<<4)|b):UINT8_MAX);`,
    `static uint8_t nibble(uint8_t c) {
    if(c>='0'&&c<='9') return c-'0';
    if(c>='A'&&c<='F') return c-'A'+10;
    if(c>='a'&&c<='f') return c-'a'+10;
    return UINT8_MAX;
}`);
  U(118,"Định dạng số nhận UART thành bốn chữ số hex","RX nhận hai byte cao trước. Phát bốn nibble dạng ASCII viết hoa, giữ số 0 đầu để đọc ảnh chụp 16 bit.",
    [S([3,165],[48,51,65,53]),S([0,15],[48,48,48,70])],
    `    uint16_t value=receive16();
    for(int8_t shift=12;shift>=0;shift-=4) {
        uint8_t d=(value>>shift)&15U;
        send(d<10?'0'+d:'A'+d-10);
    }`);
})();

