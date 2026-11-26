(() => {
  const {add} = window.EmbeddedCourse;
  add("records","struct","Bản ghi với struct và typedef","Gom dữ liệu có liên quan, dùng mảng bản ghi và cập nhật qua con trỏ.",
    [
      ["Một bản ghi gồm nhiều trường", "Một mẫu cảm biến cần giá trị và thời điểm. struct cho phép các trường có kiểu khác nhau. Dùng dấu chấm với đối tượng và -> với con trỏ. typedef đặt bí danh để người đọc nhận ra kiểu dùng trong giao diện.",
        `typedef struct {
    uint32_t time_ms;
    uint16_t millivolts;
} Sample;

void calibrate(Sample *s, uint16_t corrected) {
    s->millivolts = corrected;
}`],
      ["Mảng và cấu trúc lồng", "Sample log[16] giữ 16 bản ghi. log[0].time_ms chọn một trường. Bạn có thể đặt một struct như DeviceId trong struct Sample nếu nhiều bản ghi cùng chia sẻ cách biểu diễn định danh. Đổi tên trường để nói rõ đơn vị."],
      ["Padding và giao thức", "Trình biên dịch có thể chèn byte đệm giữa hoặc cuối các trường để đáp ứng căn chỉnh. sizeof(Sample) vì thế có thể lớn hơn tổng kích cỡ trường. Đừng ghi nguyên struct lên đường truyền. Đóng gói từng trường theo thứ tự byte của giao thức."]
    ]);
  add("records","union-enum","Union, enum và trường bit","Biểu diễn các khả năng bằng trạng thái và tránh phụ thuộc vào bố trí bit.",
    [
      ["Chọn theo nhãn", "enum đặt tên cho giá trị nguyên như IDLE và READY. union cho các thành viên dùng chung vùng lưu trữ. Khi ghép chúng, tag cho biết thành viên nào đã được ghi và được phép đọc theo hợp đồng của ứng dụng.",
        `typedef enum { MESSAGE_WORD, MESSAGE_CODE } MessageKind;
typedef struct {
    MessageKind kind;
    union { uint16_t word; uint8_t code; } data;
} Message;`],
      ["Bit-field và thứ tự byte", "C cho phép khai báo trường có số bit giới hạn, nhưng compiler và ABI quyết định cách bố trí. Khi tài liệu giao thức chỉ rõ trường ở bit 4–6, dùng dịch và mặt nạ trên số nguyên. Với byte trên đường truyền, xác định byte cao hay thấp trước."],
      ["Máy trạng thái nhỏ", "Bắt đầu bằng enum trạng thái và switch theo trạng thái hiện tại. Ví dụ nút BẮT ĐẦU đưa IDLE sang RUNNING. Sự kiện hết thời gian đưa RUNNING về IDLE. Viết bảng chuyển để quy định cả sự kiện không hợp lệ."]
    ]);
  add("records","buffers","Bộ đệm vòng và cấu trúc ngăn xếp","Thiết kế hàng đợi có sức chứa cố định và quy định cách xử lý khi đầy.",
    [
      ["FIFO và LIFO", "Hàng đợi FIFO đọc theo thứ tự ghi, phù hợp với byte UART. Ngăn xếp LIFO lấy phần tử gần nhất trước, hữu ích cho bài kiểm tra dấu ngoặc. Mảng cố định giúp biết trước số byte cần dùng."],
      ["Bất biến của vòng", "Nếu head chỉ vị trí ghi tiếp và tail chỉ vị trí đọc tiếp, head == tail là rỗng. Chọn quy ước chừa một ô để phân biệt đầy: next(head) == tail. Mảng 8 ô khi đó lưu được tối đa 7 phần tử. Hàm next có thể dùng (i + 1U) % capacity với capacity > 0.",
        `unsigned next = (head + 1U) % CAPACITY;
if (next == tail) {
    return false; /* Chính sách: từ chối phần tử mới. */
}
items[head] = byte;
head = next;`],
      ["Bài phụ", "Ghi đủ sức chứa rồi thử ghi thêm một byte. Đọc một phần tử để tạo chỗ trống, ghi một phần tử mới khiến head quấn về đầu rồi đọc hết. Theo dõi thứ tự đọc để phát hiện lỗi sai chỉ số."]
    ]);
  add("heap","allocation","malloc, calloc, realloc và free","Cấp phát mảng động, giữ quyền sở hữu và xử lý lỗi trước khi dùng con trỏ.",
    [
      ["Xin bộ nhớ từ heap", "malloc nhận số byte, giá trị ban đầu chưa xác định. calloc nhận số phần tử và kích thước mỗi phần tử, rồi khởi tạo các byte bằng 0. Kiểm con trỏ NULL trước khi sử dụng. Trước phép nhân n * sizeof *samples, kiểm n <= SIZE_MAX / sizeof *samples.",
        `if (n == 0 || n > SIZE_MAX / sizeof(int)) return 1;
int *samples = calloc(n, sizeof *samples);
if (samples == NULL) return 1;
/* Dùng samples[0..n-1]. */
free(samples);`],
      ["Đổi kích thước", "Với kích thước mới khác 0, lưu kết quả realloc vào con trỏ tạm. Nếu nhận NULL, khối cũ vẫn tồn tại. Nếu thành công, dùng con trỏ mới và xem mọi bí danh tới khối cũ hết hiệu lực. Dùng free riêng khi muốn giải phóng."],
      ["Rò rỉ và con trỏ treo", "Rò rỉ xảy ra khi khối chưa giải phóng nhưng mất con trỏ sở hữu. Con trỏ treo còn giá trị địa chỉ sau khi khối đã giải phóng. Đặt biến sở hữu về NULL khi còn dùng tiếp biến đó, đồng thời quản lý mọi bí danh đã cấp."]
    ]);
  add("heap","memory-budget","Ngân sách RAM và lựa chọn cấp phát","So sánh vùng tĩnh, stack, heap và pool theo sức chứa lẫn thời gian thực thi.",
    [
      ["Bắt đầu từ ngân sách", "Giả sử chương trình dành tối đa 2048 byte cho các bộ đệm. Một bộ đệm 256 byte đã dùng 12,5% ngân sách. Khi dùng mảng bản ghi, nhân số phần tử với sizeof của cả bản ghi để tính luôn byte đệm. Sau đó cộng chi phí của các bộ đệm có thể tồn tại đồng thời."],
      ["Giới hạn thời gian và phân mảnh", "Nhiều lần cấp phát và giải phóng các kích thước khác nhau có thể tạo khoảng trống nhỏ rời rạc. Dự án có deadline thường chọn bộ đệm tĩnh hoặc pool kích thước cố định vì biết trước giới hạn. Nếu cần heap, quy định lúc được cấp phát, kích thước tối đa và cách báo lỗi."],
      ["Bài phụ", "Chọn dung lượng cho hàng đợi 32 mẫu, mỗi mẫu có 4 byte thời điểm và 2 byte giá trị. Tính ngân sách dựa trên sizeof kiểu thật trên công cụ đích. Thử ghi thêm khi bộ đệm đầy và xác nhận chương trình báo đúng chính sách."]
    ]);
  add("files","text-files","Tệp văn bản và nhật ký","Mở đúng chế độ, kiểm thao tác đọc ghi và ghi ra định dạng dễ phục hồi.",
    [
      ["Ba chế độ thường dùng", "fopen(path, \"r\") đọc tệp đã có. \"w\" tạo mới hoặc cắt tệp cũ. \"a\" thêm vào cuối. fopen trả NULL nếu lỗi. fclose giải phóng tài nguyên và có thể báo lỗi ghi đệm. Kiểm số phần tử hoặc mã trả về của mỗi thao tác quan trọng.",
        `FILE *log = fopen("sensor.log", "a");
if (log == NULL) return 1;
int wrote = fprintf(log, "%lu,%u\\n", time_ms, value);
int closed = fclose(log);
if (wrote < 0 || closed != 0) return 1;`],
      ["Đọc từng bản ghi", "fscanf trả số trường đọc thành công. Nếu đọc chuỗi qua %s, đặt độ rộng tối đa phù hợp mảng. Khi gặp dòng lỗi, đọc theo dòng với fgets rồi phân tích riêng giúp báo số dòng và tránh đứng mãi ở dữ liệu không hợp lệ."],
      ["Nơi thực hành", "Chạy ví dụ trên máy tính trong một thư mục thử bằng gcc main.c -o app. Chạy hai lần, kiểm hai dòng được nối. Thử đọc tệp không tồn tại, tệp rỗng và tệp có một dòng sai. File API trên MCU phụ thuộc hệ thống tệp, thiết bị lưu trữ và thư viện."]
    ]);
  add("files","binary-files","Tệp nhị phân và tuần tự hóa","Ghi byte có định dạng rõ ràng rồi đọc lại có kiểm tra.",
    [
      ["Đếm byte đọc được", "Dùng rb hoặc wb cho dữ liệu nhị phân. fwrite và fread trả số phần tử hoàn thành. Chọn kích thước phần tử 1 nếu muốn so trực tiếp với số byte. Dùng feof và ferror sau khi đọc ngắn để chẩn đoán.",
        `uint8_t bytes[2] = {
    (uint8_t)(value >> 8), (uint8_t)value
}; /* Định dạng hai byte, byte cao trước. */
if (fwrite(bytes, 1, sizeof bytes, file) != sizeof bytes) {
    /* Báo lỗi ghi ở đây. */
}`],
      ["Tự định nghĩa định dạng", "Một tệp cấu hình nên có chữ ký, phiên bản và trường độ dài. Kiểm độ dài trước khi đọc. Đóng gói từng byte theo hợp đồng để tránh phụ thuộc padding và thứ tự byte của CPU."],
      ["Dữ liệu bền trên vi điều khiển", "EEPROM có giới hạn số lần ghi và không tự cung cấp FILE *. Nếu cấu hình phải chịu mất điện giữa lúc ghi, dùng hai vùng có số phiên bản và kiểm tra toàn vẹn. Chỉ chọn bản mới khi đã xác minh ghi xong."]
    ]);
  add("bits","binary","Nhị phân và thập lục phân","Chuyển đổi một byte giữa cách viết 10, 2 và 16 rồi đọc theo vị trí bit.",
    [
      ["Vị trí là trọng số", "Bit ngoài cùng bên phải là bit 0, trọng số 1. Bit 5 có trọng số 32. Byte 0010 0101 bằng 32 + 4 + 1 = 37. Chia thành nhóm bốn để đổi sang hệ 16: 0010 là 2, 0101 là 5, nên viết 0x25."],
      ["Cùng giá trị, cách viết khác", "C có thể viết 37 hoặc 0x25. Trong C17 chuẩn, hãy dùng hệ 10 hoặc hệ 16 trong mã. Một số trình biên dịch hỗ trợ tiền tố 0b như phần mở rộng. Hậu tố U tạo hằng không dấu ở các giá trị nhỏ, hữu ích khi dịch bit. Chọn kiểu đủ rộng để tránh mất bit.",
        `uint8_t value = 0x25U;
uint8_t bit5 = (uint8_t)((value >> 5) & 1U);`],
      ["Bài phụ", "Đổi 0xA6 sang nhị phân rồi tính theo trọng số. Kết quả là 1010 0110, tức 166. Trong bộ mô phỏng bit, chọn đúng các vị trí 7, 5, 2 và 1 để kiểm."]
    ]);
  add("bits","masks","Mặt nạ, dịch và xoay bit","Dùng AND, OR, XOR, NOT để đọc và sửa đúng phần của một byte.",
    [
      ["Bốn phép cơ bản", "OR với mặt nạ đặt các bit mặt nạ bằng 1. AND với mặt nạ giữ các vị trí có 1. AND với mặt nạ đảo xóa các vị trí cần xóa. XOR đảo bit nơi mặt nạ có 1. ~ đảo tất cả các bit trong kiểu sau nâng kiểu.",
        `uint8_t mask = (uint8_t)(1U << 3);
reg |= mask;
reg &= (uint8_t)~mask;
reg ^= mask;`],
      ["Trích xuất rồi thay trường", "Muốn đọc bit 4–6, dịch phải 4 rồi AND với 0x07. Muốn ghi, xóa trường cũ bằng mặt nạ đảo, dịch giá trị mới vào đúng vị trí và OR. Kiểm giá trị mới có vừa 3 bit trước khi ghi nếu hợp đồng yêu cầu báo lỗi."],
      ["Xoay và đếm bit", "Dịch bỏ bit ra khỏi chiều rộng đích. Xoay đưa bit đó sang đầu kia. Khi xoay một byte sang trái một vị trí, kết hợp (value << 1) với (value >> 7) rồi lưu vào uint8_t. Số bước dịch phải nhỏ hơn bề rộng kiểu của toán hạng sau nâng kiểu. Thử đếm bit 1 bằng cách kiểm từng vị trí."]
    ]);
  add("bits","encoding","Thứ tự byte, checksum và khung dữ liệu","Đóng gói rõ byte nào đến trước và phát hiện khung truyền quá ngắn.",
    [
      ["Tách byte bằng dịch", "0x1234 có byte cao 0x12 và byte thấp 0x34. Giao thức big-endian truyền 0x12 trước. Khi ghép, chuyển byte cao sang kiểu đủ rộng rồi mới dịch, ví dụ ((uint16_t)hi << 8) | lo cho byte không dấu.",
        `uint16_t read_be16(const uint8_t bytes[2]) {
    return (uint16_t)(((uint16_t)bytes[0] << 8) | bytes[1]);
}`],
      ["Giao diện khi nhận gói", "Kiểm bộ đệm có ít nhất hai byte trước khi gọi hàm mẫu. Khung có thể gồm loại, độ dài, dữ liệu và checksum. Từ chối độ dài vượt dữ liệu thật hoặc giới hạn bộ đệm. Chuẩn hóa thứ tự byte trong tài liệu giao thức."],
      ["Kiểm tra toàn vẹn", "Checksum cộng các byte rồi lấy modulo phát hiện được một số lỗi, nhưng hai thay đổi bù nhau có thể qua. CRC theo đa thức và quy ước đã chọn phát hiện tốt hơn các mẫu lỗi nhất định. Cả checksum và CRC dùng để phát hiện lỗi dữ liệu, không xác thực nguồn."]
    ]);
  add("bare","mcu","Từ chương trình C đến firmware","Nhìn đường đi từ reset đến main và phân biệt AVR với Cortex-M.",
    [
      ["Sau khi reset", "MCU bắt đầu ở điểm vào mà kiến trúc quy định. Mã khởi động cùng runtime thiết lập môi trường, khởi tạo .data và .bss, rồi gọi main. Linker script đặt các vùng vào Flash hoặc SRAM. Xem file map hoặc disassembly để nối tên hàm với địa chỉ thực."],
      ["Flash, SRAM và thanh ghi", "Flash chứa chương trình và dữ liệu chỉ đọc tùy công cụ. SRAM giữ dữ liệu đang chạy. ATmega328P có 2048 byte SRAM, nên bộ đệm 256 byte dùng 12,5% SRAM trước khi tính các biến khác và ngăn xếp của chương trình lẫn ISR. Thanh ghi CPU giữ toán hạng và trạng thái. Thanh ghi ngoại vi dùng để giao tiếp với phần cứng. Trên Cortex-M, bảng vector chứa giá trị stack ban đầu và địa chỉ các trình xử lý. NVIC quản lý các nguồn ngắt."],
      ["Siêu vòng lặp", "Một firmware đơn giản khởi tạo một lần rồi luân phiên đọc sự kiện, cập nhật trạng thái và điều khiển đầu ra. Mỗi lần gọi nên có thời gian hữu hạn để nhiệm vụ khác vẫn được phục vụ.",
        `int main(void) {
    board_init();
    for (;;) {
        read_inputs();
        update_state();
        write_outputs();
    }
}`]
    ]);
  add("bare","gpio","GPIO, địa chỉ thanh ghi và LED","Đọc sơ đồ chân, chọn hướng GPIO và thay đổi đúng bit.",
    [
      ["Từ sơ đồ đến thanh ghi", "Với ví dụ Arduino Uno dùng ATmega328P, LED tích hợp thường nối tới PB5. Kiểm sơ đồ board thực tế. DDRB chọn hướng. Khi chân là output, PORTB đặt mức logic. PINB dùng để đọc trạng thái chân, và AVR này có hành vi đặc biệt khi ghi 1 vào PINB để đảo chốt PORTB.",
        `#include <avr/io.h>
int main(void) {
    DDRB |= _BV(DDB5);
    PORTB |= _BV(PORTB5);
    for (;;) {}
}`],
      ["Input và điện trở kéo lên", "Chuyển bit DDR về 0 để làm ngõ vào. Nếu dùng nút nối xuống GND, bật pull-up theo datasheet và đọc 0 khi nhấn. Với LED rời, chọn điện trở hạn dòng và nối chung GND. Mức điện áp cần tương thích với board."],
      ["Đọc–sửa–ghi cần ngữ nghĩa đúng", "OR phù hợp với thanh ghi đọc–ghi thông thường khi muốn giữ các bit khác. Với cờ kiểu ghi 1 để xóa, ghi đúng mặt nạ cho cờ cần xóa nếu datasheet quy định. Không suy từ tên thanh ghi. Kiểm cả việc ISR có thể đổi thanh ghi giữa lúc đọc và lúc ghi."]
    ]);
  add("bare","avr-port-mapping","ATmega328P: PC0 và PD2 điều khiển LED PB5","Chọn đúng thanh ghi của từng cổng khi nối hai đầu vào và một đèn.",
    [
      ["Sơ đồ tín hiệu", "Nối nút RUN từ PC0 xuống GND và nút INHIBIT từ PD2 xuống GND. Bật điện trở kéo lên cho cả hai nút. LED nối PB5 qua điện trở hạn dòng theo kiểu mức cao làm sáng. Trên Uno R3, PC0 tương ứng A0, PD2 tương ứng D2 và PB5 tương ứng D13. Các tên A0, D2 và D13 là nhãn của bo."],
      ["Cấu hình từng cổng", "Xóa bit 0 của DDRC rồi đặt bit 0 của PORTC để PC0 thành đầu vào có kéo lên. Làm tương tự với bit 2 của DDRD và PORTD. Đặt bit 5 của DDRB để PB5 thành đầu ra. Giả định PUD bằng 0 và chân đang dùng chức năng GPIO."],
      ["Đọc đầu vào và ghi đầu ra", "Đọc bit 0 của PINC và bit 2 của PIND. Nút nhấn cho 0, nút nhả cho 1. LED chỉ sáng khi RUN được nhấn và INHIBIT được nhả. Ghi kết quả vào bit 5 của PORTB và giữ toàn bộ bit còn lại."],
      ["Dự đoán trước khi chạy", "Với PINC = 0xFE và PIND = 0xFF, RUN đang nhấn còn INHIBIT đang nhả. Nếu PORTB ban đầu là 0x01, kết quả là 0x21. Nếu PIND chuyển thành 0xFB, INHIBIT đang nhấn và PORTB trở về 0x01."]
    ]);
  add("bare","avr-pinb-toggle","ATmega328P: đảo riêng PB5 bằng PINB","Tính byte ghi vào PINB và kết quả của chốt PORTB.",
    [
      ["Đọc và ghi PINB có ý nghĩa khác nhau", "Đọc PINB cho trạng thái chân được lấy mẫu. Ghi 1 vào bit n của PINB yêu cầu phần cứng đảo bit n trong chốt PORTB. Ghi 0 vào một bit không làm đổi chốt tương ứng."],
      ["Chọn đúng hình thức ghi", "Để đảo riêng PB5, byte ghi phải là 0x20. Khi mô phỏng, tính chốt sau ghi bằng PORTB XOR byte ghi. Trên firmware, ghi PINB = _BV(PINB5). Tránh dùng PINB |= mask vì biểu thức có thể đọc và ghi lại cả các bit khác đang ở mức 1."],
      ["Tự kiểm", "Với chốt ban đầu 0xA5, ghi 0x20 cho kết quả 0x85. Với chốt ban đầu 0x05, cùng thao tác cho 0x25. Với DDRB5 bằng 0, thay đổi PORTB5 tác động đến yêu cầu kéo lên của đầu vào thay vì điều khiển chân như đầu ra."]
    ]);
  add("bare","avr-pcint-groups","ATmega328P: chọn nhóm ngắt đổi mức cho PB0, PC1, PD4","Ánh xạ chân sang PCMSK, PCICR và vector tương ứng.",
    [
      ["Ánh xạ ba cổng", "PB0 là PCINT0, dùng bit 0 của PCMSK0 và nhóm PCIE0. PC1 là PCINT9, dùng bit 1 của PCMSK1 và nhóm PCIE1. PD4 là PCINT20, dùng bit 4 của PCMSK2 và nhóm PCIE2. Ba vector của avr-libc lần lượt là PCINT0_vect, PCINT1_vect và PCINT2_vect."],
      ["Bật theo từng yêu cầu", "Đặt mặt nạ của chân trong PCMSK trước, sau đó bật nhóm tương ứng trong PCICR. Nếu nền ứng dụng đã bật chân khác, dùng OR để giữ chúng. Đề luyện chỉ kiểm chọn mặt nạ và nhóm."],
      ["Đem lên bo", "Trong firmware thật, cấu hình hướng chân và mức nghỉ. Nếu cần bỏ cờ pending trước khi bật ngắt, ghi đúng mặt nạ vào PCIFR theo cơ chế ghi 1 để xóa. Cài ISR và bật ngắt toàn cục khi đã sẵn sàng. Trong ISR, đọc PINx và so với mẫu trước nếu cần xác định chân nào đổi và cạnh nào xảy ra."]
    ]);
  add("bare","volatile","volatile, truy cập nguyên tử và quy ước mã","Tách việc trình biên dịch phải truy cập biến khỏi tính nhất quán giữa ISR và main.",
    [
      ["Điều volatile diễn đạt", "Khi đối tượng đại diện cho thanh ghi ngoại vi hoặc giá trị có thể đổi ngoài luồng C đang đọc, volatile yêu cầu trình biên dịch giữ các truy cập quan sát được theo quy tắc của triển khai. Nó không cung cấp khóa, nguyên tử hay giao thức chia sẻ bộ nhớ."],
      ["Một giá trị cần nhiều lần đọc", "Trên AVR 8 bit, bộ đếm 16 bit có thể được đọc thành hai byte. ISR có thể cập nhật ở giữa hai lần đọc, làm giá trị ghép sai. Dùng khối nguyên tử ngắn hoặc cơ chế phù hợp với vi điều khiển để sao chép snapshot.",
        `uint16_t snapshot;
ATOMIC_BLOCK(ATOMIC_RESTORESTATE) {
    snapshot = ticks;
}
/* Phân tích snapshot sau khi khôi phục trạng thái ngắt. */`],
      ["Quy ước có thể kiểm chứng", "Đặt tên theo đơn vị, nêu giả định clock và cỡ dữ liệu, tránh implicit conversion gây mất bit. Cách tiếp cận MISRA C nhấn mạnh kiểu rõ ràng, hành vi xác định và chẩn đoán tự động. Tuân thủ thực tế cần chọn bộ quy tắc, kiểm bằng công cụ và ghi lý do khi có ngoại lệ."]
    ]);
  add("bare","drivers","Tách driver, lớp bo mạch và ứng dụng","Đặt ranh giới để thuật toán kiểm được trên máy tính và driver kiểm được trên board.",
    [
      ["Ai biết gì?", "Lớp bo mạch nắm chân và clock. Driver triển khai giao thức ngoại vi như ADC hay UART. Ứng dụng biết nhiệm vụ cần đọc mẫu hoặc gửi bản ghi. Giữ địa chỉ thanh ghi trong driver để đổi linh kiện không phải sửa logic chính."],
      ["Giao diện và timeout", "Một uart_read có thể trả cặp trạng thái và byte. Phân biệt rỗng với lỗi khung. Chờ thiết bị có giới hạn và trả trạng thái lỗi khi hết hạn. Xác định ai được gọi hàm từ ISR, dữ liệu nào do bên gọi cấp và dung lượng tối đa."],
      ["Bài phụ", "Đặt hàm chuyển đổi ADC thành mV ở mô-đun C thuần. Dùng các mẫu 0, giữa thang và sát cực đại trên máy tính. Sau đó gắn driver và kiểm bằng hai điện áp tham chiếu đo được."]
    ]);

  add("peripherals","timer","Timer, bộ chia clock và PWM","Tính khoảng thời gian theo tick rồi phân biệt sự kiện so khớp với điều khiển độ rộng xung.",
    [
      ["Tính một cấu hình có thật", "Với clock 16 MHz và prescaler 64, timer đếm 250 kHz, mỗi tick là 4 µs. Timer chạy từ 0 đến 249 trong chế độ CTC sẽ tạo một sự kiện mỗi 250 tick, tức 1 ms. Chọn độ rộng timer đủ chứa giá trị và đọc cách cập nhật OCR."],
      ["Từ LED nháy đến duty cycle", "PWM giữ tần số theo chu kỳ đếm và thay đổi phần thời gian xung ở mức cao. Duty 25% nghĩa là mức cao chiếm một phần tư chu kỳ. Công thức đếm và biên 0%/100% tùy chế độ PWM và kiểu đầu ra. Hãy dùng logic analyzer để đo chu kỳ và độ rộng xung."],
      ["Chờ không chặn", "Lưu mốc thời gian và so (uint32_t)(now - last) >= period. Với bộ đếm không dấu, phép trừ modulo xử lý được một lần quấn nếu thời gian đã qua nhỏ hơn chu kỳ toàn bộ bộ đếm. Tránh gọi hàm delay dài khi còn nhiệm vụ khác."]
    ]);
  add("peripherals","adc","ADC, điện áp tham chiếu và nhiễu","Đọc mẫu analog và tách độ phân giải khỏi độ chính xác đo.",
    [
      ["Mã ADC là gì?", "ADC 10 bit có 1024 mã, từ 0 đến 1023. Kích thước bước lý tưởng xấp xỉ Vref/1024. Dùng đúng tham chiếu điện áp và giới hạn chân analog. Cực đại đầu ra không chứng minh đầu vào chính xác bằng Vref, vì bước lượng tử và bão hòa."],
      ["Đọc kết quả theo datasheet", "Chọn kênh và tham chiếu, bật ADC, bắt đầu chuyển đổi rồi đợi hoàn thành có giới hạn. Trên ATmega328P khi cần đọc cả cặp thanh ghi kết quả, đọc ADCL trước ADCH theo cơ chế khóa cặp thanh ghi. Nếu đổi kênh hoặc tham chiếu, kiểm yêu cầu ổn định trước khi dùng mẫu."],
      ["Lọc và hiệu chuẩn", "Trung bình nhiều mẫu có thể giảm nhiễu ngẫu nhiên, nhưng làm tín hiệu phản hồi chậm hơn. Dùng bộ tích lũy đủ rộng. So với đồng hồ đo ở các điểm chuẩn và nêu rõ đơn vị mV trong biến đầu ra."]
    ]);
  add("peripherals","uart","UART và nhật ký nối tiếp","Cấu hình hai đầu giống nhau rồi kiểm byte, lỗi và hàng đợi nhận.",
    [
      ["Một khung UART", "Hai đầu thống nhất baud, số bit dữ liệu, parity và stop bit. 8N1 là 8 bit dữ liệu, không parity và một stop bit. UART bất đồng bộ dùng start bit để đồng bộ từng khung. Nối TX với RX, nối chung GND, và kiểm mức tín hiệu."],
      ["Baud và độ lệch", "Với chế độ bất đồng bộ thường và clock 16 MHz, UBRR bằng 103 cho tốc độ khoảng 9615 bps, lệch khoảng 0,16% so với 9600. Công thức UBRR phụ thuộc U2X và clock thật. Kiểm firmware và thiết bị nhận cùng cấu hình."],
      ["Từ polling sang ISR", "Thử gửi một byte 'U' (0x55) để quan sát bit luân phiên trên máy phân tích. Khi dùng ISR nhận, đọc trạng thái lỗi theo thứ tự datasheet và đưa byte vào hàng đợi. ISR ghi dữ liệu trước khi cập nhật head, còn main đọc dữ liệu rồi cập nhật tail. Kiểm bề rộng truy cập và quy tắc đồng bộ trên đích, sau đó phân tích lệnh trong main."]
    ]);
  add("peripherals","buses","SPI, I²C và CAN","Chọn đúng bus và đọc dữ liệu dựa trên quan hệ clock, địa chỉ hoặc ID.",
    [
      ["SPI", "Thiết bị điều khiển cung cấp SCK và chọn thiết bị qua CS. MOSI và MISO là hai hướng dữ liệu. Đối chiếu CPOL, CPHA, thứ tự bit, tần số tối đa và thời gian giữ CS. Với thanh ghi đọc, một số thiết bị cần gửi byte giả để tạo clock nhận dữ liệu."],
      ["I²C hay TWI trên AVR", "SDA và SCL cần điện trở kéo lên phù hợp vì các thiết bị thường chỉ chủ động kéo xuống mức thấp. Kiểm địa chỉ 7 bit và bit hướng đọc/ghi. Phân biệt ACK, NACK và timeout. Nhiều cảm biến dùng START lặp lại giữa ghi địa chỉ thanh ghi và đọc dữ liệu."],
      ["CAN", "CAN dùng ID để phân loại khung và phân thắng thua khi hai nút truyền. ID nhỏ hơn thường có ưu tiên cao hơn trong nhóm khung cùng định dạng vì bit ưu thế thắng. Cần bộ điều khiển CAN, transceiver và kết thúc đường truyền phù hợp. ATmega328P cần thêm bộ điều khiển CAN bên ngoài để tham gia bus."]
    ]);
  add("peripherals","interrupts","Ngắt, watchdog và chế độ ngủ","Xử lý sự kiện ngắn trong ISR và lập kế hoạch phục hồi khi firmware treo.",
    [
      ["Đường đi của ngắt", "Ngoại vi đặt cờ sự kiện, mặt nạ cho phép ngắt quyết định nguồn được bật, và CPU chỉ rẽ vào trình xử lý khi điều kiện ngắt thỏa. Cách xác nhận hoặc xóa cờ phụ thuộc nguồn. ISR nên ghi lại sự kiện, di chuyển dữ liệu ít nhất cần thiết rồi trả về."],
      ["Debounce và quyền cập nhật", "Nút cơ có thể đổi mức nhiều lần trong một lần bấm. Một cách lọc là lấy mẫu định kỳ và chỉ công nhận mức mới sau N mẫu giống nhau. Nếu ISR và vòng lặp chia sẻ bộ đếm hoặc cờ, nêu rõ quyền ghi và dùng đọc snapshot thích hợp."],
      ["Watchdog và nguồn điện", "Watchdog có thể reset khi phần mềm không báo nó còn hoạt động. Chỉ nạp lại sau khi các nhiệm vụ quan trọng có tiến triển. Lưu hoặc đọc nguyên nhân reset để chẩn đoán. Khi dùng sleep, chọn chế độ sao cho đúng nguồn đánh thức vẫn hoạt động."]
    ]);

  add("realtime","scheduling","Deadline, lập lịch và RTOS","Phân biệt đúng hạn với chạy nhanh và biết khi nào cần kernel.",
    [
      ["Thời gian là phần của yêu cầu", "Một điều khiển phải chạy mỗi 10 ms có thể đạt tốc độ trung bình tốt mà vẫn sai khi một chu kỳ trễ. Deadline là hạn phải xong. Jitter là dao động so với mốc kỳ vọng. Với deadline cứng, việc lỡ hạn được xem là lỗi hệ thống."],
      ["Cooperative và preemptive", "Superloop hoặc lịch hợp tác cho mỗi tác vụ chạy đến khi tự nhường quyền. Kernel có quyền ngắt tác vụ có thể ngắt tác vụ đang chạy để cấp CPU cho tác vụ sẵn sàng có ưu tiên cao hơn. Context switch lưu và khôi phục trạng thái CPU, và mỗi tác vụ thường có stack riêng."],
      ["Bài tính thời gian", "Tác vụ A chạy tối đa 1 ms mỗi 5 ms, B chạy tối đa 2 ms mỗi 10 ms. Tải danh nghĩa là 40%. Để kết luận đúng deadline còn phải tính ISR, overhead, thứ tự ưu tiên và thời gian chờ tài nguyên. Đo trường hợp tải cao bằng xung GPIO và máy phân tích."]
    ]);
  add("realtime","coordination","Tác vụ, hàng đợi và mutex","Chọn cơ chế trao đổi phù hợp và nhận diện đảo ưu tiên.",
    [
      ["Một mẫu đi qua hệ thống", "Tác vụ lấy mẫu có thể đẩy bản ghi vào hàng đợi. Tác vụ xử lý nhận và tính toán. Hàng đợi có sức chứa hữu hạn, nên quyết định từ đầu: bỏ mẫu mới, bỏ mẫu cũ, đợi có chỗ hay báo lỗi. Với ISR, dùng API được kernel cho phép và không đợi vô hạn."],
      ["Mutex, semaphore và ưu tiên", "Mutex bảo vệ tài nguyên có chủ sở hữu và thường do chính tác vụ giữ nó nhả. Semaphore biểu diễn tín hiệu hoặc số lượng tài nguyên sẵn có. Nếu tác vụ ưu tiên thấp giữ khóa mà tác vụ cao cần, tác vụ trung gian có thể làm thời gian chờ dài hơn. Kế thừa ưu tiên, khi được kernel hỗ trợ, giảm một số trường hợp."],
      ["Thí nghiệm", "Vẽ dòng thời gian khi hai tác vụ cùng gửi UART. Tách hàng đợi gửi khỏi driver UART và cho một tác vụ sở hữu thiết bị. Kiểm khi hàng đợi đầy và khi tác vụ xử lý ngừng tạm thời."]
    ]);
  add("realtime","state-machines","Máy trạng thái và kiến trúc hướng sự kiện","Viết hàm chuyển trạng thái có thể kiểm, rồi ghép vào vòng lặp hoặc tác vụ RTOS.",
    [
      ["Trạng thái giữ bối cảnh", "Một báo động có thể ở NORMAL, PENDING hoặc ALARM. Mẫu vượt ngưỡng đưa NORMAL sang PENDING. Chỉ khi vượt đủ thời gian mới chuyển ALARM. Khi trạng thái cần thêm dữ liệu như thời điểm vượt ngưỡng, giữ nó cạnh enum trong một struct."],
      ["Mỗi sự kiện xử lý nhanh", "Hàm xử lý nhận trạng thái hiện tại và sự kiện, trả hoặc ghi trạng thái mới cùng hành động. Viết bảng chuyển cho mỗi cặp quan trọng. Đẩy sự kiện từ nguồn vào hàng đợi hữu hạn và xử lý đến hết mỗi sự kiện trước sự kiện kế tiếp. Active object thường sở hữu trạng thái và hàng đợi của chính nó."],
      ["Khi dự án lớn lên", "Giữ một giao diện C rõ gồm init, dispatch và lấy kết quả. Có thể dùng callback khi nhiều driver cùng ký hợp đồng. Tách phần chạy với POSIX, Cortex-M hoặc AVR khỏi mô hình sự kiện để dùng cùng bộ kiểm thử trên máy tính."]
    ]);
  add("debug","debugging","Breakpoint, watch và chẩn đoán lỗi","Tái tạo lỗi trước rồi chọn công cụ quan sát phù hợp.",
    [
      ["Tái tạo và khoanh vùng", "Ghi đầu vào, kết quả kỳ vọng và kết quả quan sát. Tìm điều kiện nhỏ nhất tái tạo lỗi. Đặt breakpoint trước chỗ trạng thái đổi sai, xem biến qua Watch, bước qua lệnh gọi hoặc bước vào hàm. Bản tối ưu có thể bỏ biến hoặc đổi thứ tự lệnh so với nguồn."],
      ["Lỗi bộ nhớ và treo", "Segmentation fault là một biểu hiện có thể gặp trên máy tính khi truy cập sai. Trên MCU, cùng lỗi có thể phá dữ liệu, treo hoặc reset. Kiểm chỉ số mảng, con trỏ NULL, vòng đời và dung lượng chuỗi. Với vòng lặp treo, dừng CPU để xem chương trình đang chờ cờ nào và kiểm điều kiện thoát."],
      ["Quan sát thời gian thật", "printf hoặc UART log có thể làm chậm đường chạy và thay đổi timing. Dùng trace có bộ đệm, bộ đếm hoặc xung GPIO ở đầu cuối đoạn cần đo. Đo độ trễ ngắt từ cạnh tín hiệu đến cạnh đầu tiên do ISR tạo, dưới tải xấu nhất mà bài kiểm thử xác định."]
    ]);
  add("debug","testing","Kiểm thử, assertion và tài liệu hóa","Viết điều kiện kiểm được và phân tầng kiểm thử theo phần mềm với phần cứng.",
    [
      ["Từ hợp đồng đến ca kiểm", "Với hàm đổi mV, kiểm giá trị đầu, cuối, giữa và một trường hợp sai đầu vào. Với driver, kiểm đường thành công, timeout, lỗi và khởi động lại. Unit test trên máy tính kiểm logic thuần. Kiểm tích hợp trên board xác nhận chân, thứ tự thanh ghi và thời gian."],
      ["Assertion và xử lý lỗi", "Assertion làm nổi bật giả định nội bộ bị vi phạm. Ở bản build có NDEBUG, assert có thể bị loại. Đừng đặt thao tác có tác dụng phụ trong assert. Dữ liệu người dùng và lỗi bên ngoài luôn cần đường xử lý lỗi thông thường."],
      ["Ghi tài liệu ngay cạnh giao diện", "Một chú thích hàm hữu ích nêu đơn vị, miền giá trị, tính hợp lệ của con trỏ, vùng nhớ do ai sở hữu và liệu hàm gọi được từ ISR. Doxygen có thể tạo tham chiếu từ mô tả này. Trace và phiên bản build giúp đối chiếu kết quả với firmware đã nạp."]
    ]);
  add("debug","interview","Ôn phỏng vấn bằng lập luận và ví dụ","Luyện giải thích một lỗi C, một quyết định phần cứng và một kết quả đo.",
    [
      ["Câu hỏi về C", "Hãy giải thích sizeof a trong phạm vi mảng và trong tham số hàm. Cho ví dụ sizeof đo hai thứ khác nhau. Sau đó phân biệt const, static và volatile, và nói rõ vì sao volatile không đủ để đọc an toàn bộ đếm hai byte trên AVR."],
      ["Câu hỏi về hệ thống", "Thiết kế nhận UART khi dữ liệu đến liên tục. Nêu baud và dung lượng bộ đệm, mô tả điều kiện đầy, ai cập nhật head và tail, rồi trình bày cách kiểm khi CPU bận. Dùng số byte theo thời gian và độ trễ đo được để bảo vệ quyết định."],
      ["Bài tự đánh giá", "Chọn một dự án đã làm. Trình bày yêu cầu, sơ đồ khối, một lỗi từng tái tạo được, phép đo xác minh và điều bạn sẽ đổi khi chuyển sang Cortex-M. Viết README ngắn với cách build, chân kết nối và cách chạy các bài kiểm."]
    ]);
})();

