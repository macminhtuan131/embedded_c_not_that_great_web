(() => {
  const {U,M}=window.AvrChallengeHelpers;
  const {S,A}=window.AvrLabs;
  M(121,"Tra địa chỉ TWI của cảm biến và kiểm ACK","Nhận địa chỉ 7 bit qua PD0. Tìm trong danh sách thiết bị, gửi địa chỉ lên bus PC4/SDA và PC5/SCL nếu tìm thấy. Trả chỉ số qua PD1 khi có ACK, hoặc FF nếu địa chỉ lạ hay không có ACK.",
    [{...S([0x48],[1]),twi:[0],twiSent:[0x90]},{...S([0x48],[255]),twiSent:[0x90]},{...S([0x30],[255]),twiSent:[]}],
    `    uart_init();
    const uint8_t table[]={0x3C,0x48,0x68,0x76};
    uint8_t address=receive(), index=0;
    while(index<sizeof table && table[index]!=address) ++index;
    if(index==sizeof table) { send(UINT8_MAX); return 0; }
    TWBR=72;
    TWCR=_BV(TWINT)|_BV(TWEN)|_BV(TWSTA);
    while(!(TWCR&_BV(TWINT))) {}
    TWDR=address<<1;
    TWCR=_BV(TWINT)|_BV(TWEN);
    while(!(TWCR&_BV(TWINT))) {}
    uint8_t status=TWSR&0xF8;
    TWCR=_BV(TWINT)|_BV(TWEN)|_BV(TWSTO);
    send(status==0x18?index:UINT8_MAX);`);
  M(122,"Tra khoảng nhiệt độ trong Flash bằng mẫu ADC0","Đọc PC0 bằng ADC rồi tìm điểm đầu tiên lớn hơn hoặc bằng mẫu trong bảng đã sắp xếp. Bảng nằm trong Flash; báo chỉ số qua PD1, hoặc FF nếu vượt ngưỡng cuối.",
    [A(0.5,[0]),A(2.5,[3]),A(4.9,[255])],
    `    uart_init(); adc_init();
    uint16_t sample=read_adc();
    uint8_t lo=0, hi=6;
    while(lo<hi) {
        uint8_t mid=lo+(hi-lo)/2U;
        if(pgm_read_word(&threshold[mid])<sample) lo=mid+1U;
        else hi=mid;
    }
    send(lo<6U?lo:UINT8_MAX);`,
    `#include <avr/pgmspace.h>
static const uint16_t threshold[] PROGMEM={150,280,420,590,760,910};`);
  M(123,"Cập nhật min và max của cảm biến trên PC0","Đọc một mẫu mới từ ADC0 rồi lấy hai mẫu 16 bit cũ qua USART0, byte cao trước. Phát lại min rồi max, mỗi số hai byte.",
    [{...S([0,100,2,88],[0,100,2,88]),adc:2.5},{...S([0,100,2,88],[0,100,3,51]),adc:4}],
    `    uart_init(); adc_init();
    uint16_t min=read_adc(), max=min;
    for(uint8_t i=0;i<2U;++i) {
        uint16_t value=receive16();
        if(value<min) min=value;
        if(value>max) max=value;
    }
    send16(min); send16(max);`);
  U(124,"Lọc trung vị 5 mẫu 10 bit nhận qua USART0","Nhận năm mẫu từ bo đo, mỗi mẫu hai byte cao trước. Chèn dần mỗi mẫu vào dãy tăng dần trong SRAM rồi trả mẫu thứ ba lên PD1.",
    [S([2,0,3,255,1,252,2,3,1,254],[2,0]),S([0,5,0,4,0,3,0,2,0,1],[0,3])],
    `    uint16_t samples[5];
    for(uint8_t i=0;i<5U;++i) {
        uint16_t sample=receive16();
        uint8_t j=i;
        while(j>0 && samples[j-1U]>sample) { samples[j]=samples[j-1U]; --j; }
        samples[j]=sample;
    }
    send16(samples[2]);`);
  U(125,"Xếp bốn mức ưu tiên nhận qua PD0","Nhận bốn byte ưu tiên, chọn giá trị lớn nhất của phần chưa xử lý cho từng vị trí. Phát bốn giá trị từ cao xuống thấp qua PD1.",
    [S([2,7,1,5],[7,5,2,1]),S([0,255,8,255],[255,255,8,0])],
    `    uint8_t values[4];
    for(uint8_t i=0;i<4U;++i) values[i]=receive();
    for(uint8_t i=0;i<4U;++i) {
        uint8_t best=i;
        for(uint8_t j=i+1U;j<4U;++j) if(values[j]>values[best]) best=j;
        uint8_t value=values[best];
        values[best]=values[i];
        values[i]=value;
        send(value);
    }`);
  U(126,"Trả thứ hạng k của năm byte đo qua UART","Nhận k trong khoảng 1–5 rồi năm byte mẫu. Trả phần tử nhỏ thứ k rồi lớn thứ k. Giá trị bằng nhau chiếm các thứ hạng riêng. Nếu k sai, trả FF FF.",
    [S([2,40,10,50,20,30],[20,40]),S([1,6,6,8,3,2],[2,8]),S([0,1,2,3,4,5],[255,255])],
    `    uint8_t k=receive(), values[5];
    for(uint8_t i=0;i<5U;++i) {
        uint8_t value=receive(), j=i;
        while(j>0 && values[j-1]>value) { values[j]=values[j-1]; --j; }
        values[j]=value;
    }
    if(k==0||k>5) { send(UINT8_MAX); send(UINT8_MAX); return 0; }
    send(values[k-1U]); send(values[5U-k]);`);
  U(127,"Giữ ba mẫu lớn nhất trong luồng USART0","Nhận sáu byte mẫu và cập nhật ba giá trị lớn nhất sau mỗi byte. Giữ cả mẫu trùng. Phát ba byte giảm dần qua PD1.",
    [S([15,82,40,95,67,88],[95,88,82]),S([1,6,6,0,0,5],[6,6,5])],
    `    uint8_t top[3]={0};
    for(uint8_t i=0;i<6U;++i) {
        uint8_t value=receive();
        for(uint8_t j=0;j<3U;++j) {
            if(value>=top[j]) { uint8_t previous=top[j]; top[j]=value; value=previous; }
        }
    }
    for(uint8_t i=0;i<3U;++i) send(top[i]);`);
})();

