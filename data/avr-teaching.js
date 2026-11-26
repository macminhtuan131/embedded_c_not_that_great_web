(() => {
  const course=window.EmbeddedCourse;
  const notes={
    hello:"Sau reset, mã khởi động AVR gọi int main(void). Từ khóa void ở đây cho biết main không nhận đối số. Vòng lặp for (;;) chạy mãi để ATmega328P tiếp tục theo dõi nút. Trước khi đọc, giữ bit DDD2 bằng 0 và đặt PORTD2 để bật kéo lên. Khi nhả nút, PIND2 đọc 1. Khi nút nối xuống GND, PIND2 đọc 0 và firmware bật bit PORTB5. DDRB5 phải bằng 1 để chốt PORTB5 lái được chân. Với LED rời mắc từ PB5 xuống GND, đặt điện trở hạn dòng nối tiếp.",
    types:"ADC có 1024 mã từ 0 đến 1023. uint8_t giữ được 0–255, còn uint16_t giữ trọn kết quả 10 bit. ADCL giữ 8 bit thấp. Khi đọc ADC căn phải, lấy ADCL trước để giữ cặp kết quả ổn định đến lúc đọc ADCH. Ở khung 02 00, byte đầu có giá trị 2 và kết quả sau khi ghép là 512. Dùng const để đánh dấu một đối tượng chỉ đọc qua tên đó trong C. Muốn đặt bảng tra trong Flash, học PROGMEM ở bài 122.",
    io:"Giao tiếp UART gửi từng byte. Ký tự '1' là byte 0x31, trong khi số nguyên 1 có byte thấp 0x01. Cờ RXC0 báo bộ nhận có dữ liệu. Cờ UDRE0 báo bộ đệm phát nhận được byte tiếp theo. Việc đọc và việc ghi cùng dùng tên UDR0 nhưng đi vào hai đường dữ liệu khác nhau. Nối PD0 với TX của USB–UART, PD1 với RX và nối chung GND.",
    build:"Mã nguồn có phần tiền xử lý, biên dịch, hợp dịch và liên kết. -mmcu=atmega328p chọn kiến trúc, định nghĩa chip và mã khởi động. Header avr/io.h dựa vào lựa chọn đó để ánh xạ PINC và DDRB tới đúng vị trí. Intel HEX chứa địa chỉ và byte nạp vào Flash, mỗi dòng có checksum. Hàm chạy mô phỏng bắt đầu từ vector reset tại địa chỉ 0.",
    operators:"Phép & giữ riêng bit cần xem. ! biến giá trị 0 thành đúng, phù hợp với nút tác động mức thấp. && chỉ cho qua nếu cả điều kiện cho phép và điều kiện an toàn đều đúng. Đọc PINC và PIND vào biến khi cần dùng cùng một ảnh chụp nhiều lần. Tạo bảng chân trị bốn hàng trước khi chạy.",
    branches:"Trong switch, mỗi case chọn một mặt nạ GPIO. break ngăn chạy sang case kế tiếp. Đặt nhánh default về trạng thái an toàn khi thiết bị nhận mã lạ. Xóa hai bit đầu ra trước khi OR giá trị mới để giữ các chân ngoài PB0/PB1.",
    loops:"Bit 0 ở ngoài cùng bên phải. Dịch mẫu sang phải i vị trí rồi lấy & 1 để kiểm bit i. Vòng for cần đúng tám lượt, i từ 0 đến 7. Sau vòng lặp, bộ đếm nằm trong miền 0–8 và vừa một byte TX.",
    arithmetic:"Hai giá trị 8 bit có tổng lớn nhất 510, nên giữ kết quả bằng uint16_t. Byte thấp là phần dư theo 256. Dịch phải 8 bit cho số nhớ. Với 0xFF + 0x01, hai byte trả là 00 01. Muốn biết cờ C của CPU, cần dừng ngay sau lệnh máy liên quan trong debugger.",
    functions:"Tách việc đọc ADC khỏi điều kiện báo động. Hàm phân loại có tham số uint16_t và trả một giá trị có thể dùng chung cho cả GPIO và TX. Kiểm mã ngay dưới và ngay trên ngưỡng để phát hiện nhầm > với >=. Giữ thao tác đọc thanh ghi trong driver để hàm phân loại dễ kiểm.",
    storage:"Biến tự động trong hàm có vòng đời đến khi hàm thoát. Biến static cục bộ còn giữ giá trị giữa hai lệnh USART0. Sau reset, mã khởi động khôi phục dữ liệu khởi tạo của chương trình. Muốn giữ cấu hình sau mất nguồn, dùng EEPROM và có quy tắc tiết kiệm số lần ghi.",
    recursion:"Mỗi tầng gọi có thể cần địa chỉ trở về, thanh ghi được lưu và biến tạm trên stack. AVR chỉ có 2 KiB SRAM dùng chung cho stack và dữ liệu. Chặn n trước khi đệ quy. Điểm dừng n == 0 trả 0, mỗi tầng cộng n vào kết quả của tầng sau.",
    arrays:"Mảng bốn mẫu chiếm bốn byte SRAM. Chỉ số đúng là 0 đến 3. Nếu tìm thấy nhiều lần, dừng ở lần đầu, nhờ thế giá trị trả lời luôn nhất quán. FF được chọn làm mã không tìm thấy vì nằm ngoài miền chỉ số.",
    matrices:"C lưu các hàng liên tiếp trong SRAM. Hai ô chéo của mảng 2×2 là [0][0] và [1][1]. Hai mẫu 255 có tổng 510 nên còn cần byte cao. Hợp đồng UART mô tả thứ tự truyền độc lập với cách AVR sắp các byte của số nguyên trong bộ nhớ.",
    strings:"Bộ đệm tám byte chứa tối đa bảy ký tự và một NUL. LF dùng làm mốc nhận, không phải NUL. Khi vượt sức chứa, tiếp tục đọc đến LF để đồng bộ lại khung. Việc kiểm biên trước khi ghi bảo vệ stack và dữ liệu cạnh bộ đệm.",
    pointers:"&a lấy địa chỉ đối tượng a. *p đọc hoặc ghi giá trị tại địa chỉ p. Truyền hai địa chỉ giúp hàm sửa được hai mẫu gốc trong main. Dùng một biến tạm trước khi ghi đè mẫu thứ nhất, rồi xác nhận thứ tự trên PD1.",
    "pointer-arrays":"Con trỏ tăng theo kích thước của phần tử. Có thể tạo và so sánh con trỏ ngay sau phần tử cuối. Chỉ dereference khi con trỏ còn trỏ vào phần tử. Tổng lớn nhất của bốn byte là 1020, nên dùng uint16_t.",
    "advanced-pointers":"Hàm nhận uint8_t ** cập nhật đối tượng con trỏ của bên gọi. Sau khi kiểm mã lựa chọn, gọi callback có chữ ký khớp để phát byte. Khi con trỏ trỏ vào bộ đệm SRAM, phải giữ bộ đệm tồn tại đến lúc callback đọc nó.",
    struct:"Struct đặt ID và số đo dưới hai tên rõ ràng. Con trỏ struct dùng -> để đọc trường. Truyền từng byte theo đặc tả khung giúp tránh phụ thuộc kích thước và phần đệm mà compiler có thể chèn trong struct.",
    "union-enum":"Nhãn quyết định thành viên union nào dùng để đọc và ghi. Enum đặt tên cho các nhãn hợp lệ. Đọc nhãn trước, nhận đủ số byte theo nhãn rồi lưu vào thành viên tương ứng. Bố trí SRAM của union khác với quy ước truyền byte cao trước của khung.",
    buffers:"FIFO dùng chỉ số đọc và ghi. Hai chỉ số bằng nhau là rỗng. Khi vị trí kế tiếp của đầu ghi trùng đầu đọc thì đầy. Bộ đệm ba ô chừa một ô, do đó chỉ chứa hai byte. Ca tràn cho thấy byte mới có thể bị từ chối mà thứ tự cũ vẫn được giữ.",
    allocation:"calloc trả vùng nhớ đã điền 0 hoặc con trỏ rỗng. Giới hạn n trước khi cấp phát và kiểm kết quả trước khi dereference. free đúng một lần sau khi phát hết dữ liệu. AVR dùng chung SRAM cho heap và stack nên cấp phát biến thiên liên tục có thể gây phân mảnh.",
    "memory-budget":"Mảng static không khởi tạo tường minh nằm trong .bss ở bản build thông thường. avr-size cho biết kích thước .data, .bss và mã. Tính riêng stack vì nó tăng lúc chạy. Điều kiện n <= 8 cần kiểm trước lúc ghi vào mảng.",
    "text-files":"Thiết bị thu log nhận chuỗi byte từ PD1. Giao thức xác định tiền tố V=, một chữ số ASCII và LF kết thúc. Điểm bắt đầu và điểm kết thúc mẫu phải rõ ràng để phía thu tách dòng hoặc ghi nhật ký.",
    "binary-files":"Mỗi khung gồm chữ ký A5, byte cao, byte thấp và checksum XOR. XOR phát hiện nhiều lỗi đơn giản nhưng có thể bỏ sót hai thay đổi triệt tiêu lẫn nhau. Tách mã số, thứ tự byte và cách hiển thị hệ hex khi kiểm.",
    binary:"Một chữ số hệ 16 biểu diễn bốn bit. 0x25 là 0010 0101. Mặt nạ 0x07 giữ ba bit thấp. Thay đúng ba bit trong PORTB để không làm đổi chốt của các chân khác.",
    masks:"DDRC để PC0 và PC1 là input, bật bit tương ứng ở PORTC để kéo lên. Đảo ý nghĩa active-low rồi dịch các bit đến vị trí đầu ra. Xóa phần mặt nạ ở PORTB trước khi OR hai bit mới, nhờ vậy PB5 vẫn giữ trạng thái.",
    encoding:"Một giá trị có thể truyền qua nhiều byte. Giao thức ở đây quy định byte cao trước rồi byte thấp, tiếp theo là XOR. ADC0 cho tối đa 10 bit nên phần byte cao chỉ dùng hai bit. Đối chiếu từng byte trong bảng UART TX.",
    mcu:"Reset đưa chip về vector khởi động. Mã khởi động thiết lập stack và chuẩn bị SRAM rồi mới gọi main. GPIO khởi đầu ở chế độ input. Trước khi xuất mức, quyết định giá trị chốt PORT và hướng DDR để tránh xung không mong muốn.",
    gpio:"DDRx chọn hướng. PORTx với chân input điều khiển kéo lên. PORTx với chân output là chốt xuất. PINx đọc mức logic tại chân. Kiểm cả ba trong kết quả để phân biệt cấu hình, lệnh xuất và mức quan sát.",
    "avr-port-mapping":"PB5, PC0 và PD2 là tên cổng và bit của chip, khác số in trên bo. Trên Arduino Uno R3, ba chân tương ứng D13, A0 và D2. Reset và các chân thạch anh có cấu hình riêng, tra sơ đồ khi dùng chip rời hoặc gói chân khác.",
    "avr-pinb-toggle":"ATmega328P có tính năng ghi 1 vào PINxn để đảo chốt PORTxn. Gán trực tiếp một mặt nạ để chỉ tác động PB5. Cách đọc–sửa–ghi như PINB |= mask có thể lấy thêm bit đang ở mức 1 rồi vô tình đảo các chốt tương ứng.",
    "avr-pcint-groups":"PCICR bật nhóm, PCMSKx chọn thành viên. Chân thuộc cùng một nhóm dùng chung vector, nên nếu cần biết chính xác chân nào đổi, đọc PINx rồi XOR với ảnh chụp trước. PCINT khác INT0 ở cách chọn nhóm và kiểu kích hoạt.",
    volatile:"volatile cho compiler biết giá trị có thể thay đổi ngoài luồng đang chạy. Một giá trị uint16_t cần nhiều truy cập trên CPU 8 bit. Chép ảnh bộ đếm trong ATOMIC_BLOCK, rồi phát UART ngoài khối nguyên tử để thời gian tắt ngắt ngắn.",
    drivers:"Driver chờ cờ phần cứng và trả mẫu theo đơn vị công bố. Logic ứng dụng chọn ngưỡng. Hàm GPIO cập nhật đúng mặt nạ PB5. Kiểm đồng thời mẫu TX và PORTB giúp tách lỗi đo khỏi lỗi quyết định hoặc đấu chân.",
    timer:"Ở CTC, Timer1 đếm từ 0 đến OCR1A. Với prescaler 64 tại 16 MHz, một nhịp timer là 4 µs. Khoảng cách cạnh của OC1A bằng (OCR1A+1) × 4 µs. Nếu OC1A đảo mỗi lần so khớp, cả chu kỳ cao–thấp dài gấp đôi.",
    adc:"ADC dùng AVcc làm tham chiếu trong bài này. Xấp xỉ độ phân giải là 5000/1024 mV trên mỗi bước. Nhân bằng uint32_t trước khi chia để tránh tràn và giữ độ chính xác. Kết quả thật còn phụ thuộc tham chiếu và mạch nguồn tín hiệu.",
    uart:"Baud ở chế độ thường là F_CPU/(16 × (UBRR0+1)). Giá trị 103 cho khoảng 9615 baud tại 16 MHz. 8N1 nghĩa là tám bit dữ liệu, không parity và một bit dừng. Giao diện USB–UART cần cấu hình trùng.",
    buses:"SPI master phát clock, quản lý SS và nhận đồng thời khi ghi SPDR. TWI dùng hai đường kéo lên, có START, địa chỉ 7 bit với bit R/W, ACK/NACK và STOP. Dùng TWSR với mặt nạ 0xF8 để lấy trạng thái thay vì lẫn bit prescaler.",
    interrupts:"Cạnh xuống phù hợp nút kéo lên. Vector INT0 chạy khi nguồn ngắt và cờ I chung được bật. ISR nên ngắn và chỉ đặt cờ. Vòng chính xử lý GPIO, chống dội hoặc phát dữ liệu nếu cần thời gian lâu hơn.",
    scheduling:"Timer0 tạo mốc, còn vòng chính quyết định tác vụ nào tới hạn. Tác vụ chặn chờ UART quá lâu sẽ làm trễ những tác vụ khác. Dùng phép trừ unsigned để so khoảng thời gian khi bộ đếm vòng lại. Quan sát khoảng cách cạnh thay vì chỉ xem chốt cuối.",
    coordination:"Bộ nhận và bộ xử lý có thể làm việc theo hai bước riêng. FIFO giữ thứ tự lệnh đến. Mô tả rõ hành vi khi đầy và kiểm trạng thái PB5 sau lệnh cuối. Khi producer là ISR, đảm bảo thao tác dùng chung có kích thước phù hợp hoặc bảo vệ nguyên tử.",
    "state-machines":"Mỗi trạng thái có mã đầu ra rõ ràng. Tính biên một lần và ghi đồng thời hai bit trong một phép cập nhật chốt. Nếu cần chống rung quanh ngưỡng, tách ngưỡng đi lên và đi xuống rồi giữ trạng thái giữa các lần lấy mẫu.",
    debugging:"Nếu LED sai, kiểm DDRB trước rồi PORTB và PINB. Trên đầu vào kéo lên, PORTD có thể bằng 1 dù PIND bằng 0 khi nhấn. Kiểm điểm dừng và giả lập cả hai mức để xác định lỗi nằm ở hướng, mặt nạ hay dây nối.",
    testing:"Kiểm giá trị cuối hợp lệ và giá trị đầu không hợp lệ. Nếu dịch theo chỉ số lấy từ UART, kiểm chỉ số trước phép dịch. Đo cả mặt nạ được gửi và chốt GPIO để tránh tình trạng UART đúng nhưng tác động nhầm chân.",
    interview:"Lập bảng chân trị từ mức thực tế tại PC1 và PD3. Chuyển riêng từng chân sang ý nghĩa nhấn hoặc nhả. Từ đó xác định PB0 báo từng tín hiệu còn PB5 báo điều kiện kết hợp. Khi mô tả một lỗi, chỉ đúng thanh ghi giúp kiểm giả thuyết.",
    "file-workshop":"ATmega328P dùng EEPROM để giữ byte khi tắt nguồn. Thư viện avr/eeprom truy cập EEPROM qua EEAR, EEDR và EECR. Hàm update tránh ghi lại byte đã có cùng giá trị. Trong dự án nhiều bản ghi, thêm chữ ký hoặc checksum để nhận biết ghi dở.",
    "avr-workshop":"Tải mã C, biên dịch đúng thiết bị, đổi một chân rồi kiểm lại. File HEX phải bắt đầu ở vùng Flash ứng dụng và có checksum hợp lệ. Kết quả đạt cần đúng cả mức chân lẫn thanh ghi, vì trình biên dịch không thể phát hiện nhầm chân vật lý.",
    "cortex-startup":"Thông thường mã startup avr-gcc chép dữ liệu khởi tạo từ Flash sang .data trong SRAM và đặt .bss về 0 trước main. Tạo map bằng -Wl,-Map=main.map để xem vùng nhớ. Đầu ra TX kiểm cả biến có giá trị khởi tạo và biến mặc định bằng 0.",
    "uart-workshop":"Ký tự U (0x55) cho mẫu bit xen kẽ dễ đo tốc độ ở TXD. CR là 0x0D, LF là 0x0A. Trình terminal có thể hiển thị chúng khác nhau, nên kiểm byte thô trước khi kết luận thiếu ký tự.",
    "pwm-lab":"Fast PWM của Timer0 đếm 0–255 nên chu kỳ là 256 × 4 µs. Ở chế độ không đảo, hai mức OCR0A = 63 và 191 cho duty gần 25% và 75%. PD6 cần là output để thấy xung OC0A. Đo độ rộng mức HIGH trên xung thật nếu cần độ chính xác theo nhịp timer.",
    "eeprom-lab":"Chỉ ghi cấu hình hợp lệ. Ca gửi mã lạ cần chuẩn bị một giá trị EEPROM khác và xác nhận nó giữ nguyên. Việc xem PB5 cùng dữ liệu đọc lại giúp phát hiện sửa sai cả cờ logic lẫn địa chỉ lưu.",
    "dac-notes":"Mức tại PD6 chuyển giữa LOW và HIGH. Bộ lọc thông thấp làm mượt PWM và cho điện áp trung bình phụ thuộc duty. Chọn hằng số thời gian theo độ gợn và tốc độ đáp ứng. Mô phỏng ở đây đo cạnh số, còn điện áp sau lọc cần đồng hồ hoặc oscilloscope.",
    "rtos-workshop":"Lịch hợp tác chạy một tác vụ tới khi nó trả về, còn ngắt hoặc cờ timer giữ mốc. Tác vụ xuất chạy sau mỗi hai tick nên mẫu có thể phải chờ một tick, tùy thời điểm lấy. Thử hai pha khác nhau để thấy độ trễ ngoài giá trị cuối."
  };
  const quizLabs={5:1,6:3,20:7,21:16,22:17,34:33,35:31,44:37,45:40,52:47,53:50,69:55,70:59,71:62,72:68,80:73,81:76,82:78,89:84,90:87,95:91,110:96,111:109,119:112,120:118,128:124};
  const guideLabs={
    "m1_arith": "arithmetic",
    "m2_bitwise": "masks",
    "m3_bitfield": "avr-31",
    "m4_bitrot": "avr-37",
    "m5_array": "avr-48",
    "m6_pointer": "avr-63",
    "m7_struct": "avr-77",
    "m8_union": "avr-87",
    "m9_ringbuf": "avr-92",
    "m10_string": "avr-100",
    "m11_convert": "avr-112",
    "m12_sort": "avr-122"
  };
  window.AvrTeaching={notes,quizLabs,guideLabs};
  for(const track of course.tracks) {
    if(track.id==="chuan-bi") Object.assign(track,{
      title:"C nền tảng qua I/O AVR",shortTitle:"Nền tảng C qua AVR",
      desc:"Học biến, hàm, mảng, con trỏ và bộ nhớ ngay trên ATmega328P. Mỗi bài nhận tín hiệu qua GPIO, ADC hoặc USART0 rồi xuất kết quả.",
      topics:["GPIO B/C/D","Dữ liệu từ UART","SRAM và EEPROM"]
    });
    else Object.assign(track,{
      title:"Firmware bare-metal ATmega328P",shortTitle:"Firmware AVR",
      desc:"Viết firmware trực tiếp qua thanh ghi và đo kết quả trên GPIO, timer, ADC, USART, SPI, TWI và EEPROM.",
      topics:["Thanh ghi và ngắt","Ngoại vi AVR","Lập lịch và debug"]
    });
  }
  const updates={
    c:["C cơ bản qua chân AVR","Từ nút PD2 và LED PB5 tới ADC0 và bảng mã UART."],
    files:["Nhật ký UART và EEPROM","Đóng gói dữ liệu đo và lưu cấu hình trên ATmega328P."],
    peripherals:["Ngoại vi ATmega328P","GPIO, ADC, Timer, PWM, USART0, SPI, TWI và EEPROM."],
    realtime:["Lập lịch bare-metal","Tạo tick, chạy tác vụ, xếp hàng và đo độ trễ trên chân AVR."]
  };
  for(const module of course.modules) if(updates[module.id]) [module.title,module.desc]=updates[module.id];
  course.projects.push(
    {id:"calculator",icon:"terminal",level:"Bắt đầu",title:"Bộ điều khiển LED qua UART",summary:"Nhận lệnh ở PD0, điều khiển PB0/PB1 và phản hồi ở PD1.",lab:"branches",needs:["io","branches","functions"],
     steps:["Cấu hình USART0 9600 8N1 và nối GND chung.", "Đặt PB0 và PB1 làm output. Quy định mã 1, 2, 0 và mã lỗi.", "Viết hàm xử lý lệnh tách khỏi hàm đọc UDR0. Dùng vòng lặp để nhận lệnh kế tiếp."],
     checks:["Mã 1 chỉ bật PB0. Mã 2 chỉ bật PB1. Mã 0 tắt cả hai.", "Sau mã không hợp lệ, PD1 báo FF và chip vẫn nhận được mã 1."]},
    {id:"students",icon:"file",level:"Trung cấp",title:"Lưu chế độ đo trong EEPROM",summary:"Nhận cấu hình qua PD0, xác nhận qua PD1 và báo chế độ bằng PB5.",lab:"eeprom-lab",needs:["struct","file-workshop","eeprom-lab"],
     steps:["Quy ước hai chế độ và khóa phạm vi lệnh.", "Lưu chữ ký và byte chế độ trong EEPROM. Đọc lại khi reset.", "Khôi phục LED từ cấu hình hợp lệ. Khi chữ ký sai, chọn chế độ 0."],
     checks:["Sau lệnh 1, PB5 bật và PD1 phát 01.", "Mã không hợp lệ giữ nguyên EEPROM. Sau ngắt nguồn thật, PB5 khôi phục từ cấu hình đã lưu."]},
    {id:"register",icon:"grid",level:"Trung cấp",title:"Khóa liên động ba cổng",summary:"Đọc PC0 và PD2, xuất PB5, kiểm đủ DDR, PIN và PORT.",lab:"avr-port-mapping",needs:["binary","masks","gpio"],
     steps:["Nối hai nút mức thấp với PC0 (cho phép) và PD2 (khóa).", "Bật kéo lên qua PORTC và PORTD rồi dùng PINC và PIND tính trạng thái.", "Lập bảng chân trị và cập nhật riêng PB5."],
     checks:["Chỉ một tổ hợp bật PB5.", "Các chốt khác trên PORTB giữ nguyên và cả hai đầu vào vẫn có kéo lên."]},
    {id:"logger",icon:"radio",level:"Nâng cao",title:"Đo ADC0, xuất PWM và ghi log",summary:"PC0 lấy mẫu, PD6 phát PWM và PD1 báo mẫu đo theo kỳ.",lab:"dac-notes",needs:["timer","adc","uart","pwm-lab"],
     steps:["Cấu hình ADC0, USART0 và Timer0 Fast PWM.", "Dùng Timer1 tạo mốc lấy mẫu. Ghép mã thô và checksum vào khung UART.", "Nạp OCR0A bằng tám bit cao, ghi lại chu kỳ và độ rộng xung PD6."],
     checks:["Điện áp 1,25 V và 3,75 V cho duty gần 25% và 75%.", "Bộ thu PD1 ghép được đúng mẫu và checksum. Chu kỳ đo gần 1,024 ms."]},
    {id:"capstone",icon:"cpu",level:"Nâng cao",title:"Bộ giám sát cảm biến bare-metal",summary:"Timer0 tạo tick, ADC0 theo dõi cảm biến và INT0 nhận nút xác nhận.",lab:"rtos-workshop",needs:["interrupts","scheduling","state-machines","rtos-workshop"],
     steps:["Lập lịch đo PC0 mỗi 10 ms và báo qua PD1 mỗi 100 ms.", "Dùng ngắt PD2 để ghi sự kiện xác nhận. Xử lý sự kiện và điều khiển PB5 trong main.", "Dùng hai ngưỡng báo động và thoát báo động. Dành PB1 để đo thời gian thực thi."],
     checks:["Giá trị quanh ngưỡng không làm PB5 rung liên tục.", "Xung trên PB1 cho thấy thời hạn vẫn đạt khi nhận ngắt và gửi UART.", "UART báo nguyên nhân báo động và thời điểm xác nhận."]}
  );
})();

