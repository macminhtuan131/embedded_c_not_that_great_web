(() => {
  const {add} = window.EmbeddedCourse;
  add("files","file-workshop","Thực hành lưu và đọc một bản ghi","Dùng chế độ nhị phân để kiểm tra từng byte và phát hiện tệp đọc ngắn.",
    [
      ["Chuẩn bị ở máy tính", "Tạo tệp main.c trong thư mục thực hành rỗng. Chép mẫu rồi chạy gcc -std=c17 -Wall -Wextra main.c -o app. Trên Windows có thể chạy .\\app.exe. Chương trình tạo mới reading.bin hoặc ghi đè nếu đã có tệp cùng tên.",
        `#include <stdio.h>

int main(void) {
    const unsigned char bytes[] = {0x12, 0x34};
    FILE *file = fopen("reading.bin", "wb");
    if (file == NULL) return 1;

    size_t written = fwrite(bytes, 1, sizeof bytes, file);
    int closed = fclose(file);
    if (written != sizeof bytes || closed != 0) return 1;

    unsigned char readback[2];
    file = fopen("reading.bin", "rb");
    if (file == NULL) return 1;
    size_t received = fread(readback, 1, sizeof readback, file);
    closed = fclose(file);
    if (received != sizeof readback || closed != 0) return 1;

    unsigned value = ((unsigned)readback[0] << 8) | readback[1];
    printf("%04X\\n", value);
    return 0;
}`],
      ["Đọc từng thao tác", "fwrite nhận kích thước một phần tử là 1, nên written đếm byte. Đóng tệp trước khi mở để đọc. fread có thể trả 0 hoặc 1 nếu tệp thiếu dữ liệu. Chỉ ghép byte sau khi đã nhận đủ hai byte. Kết quả mong đợi là 1234."],
      ["Bài phụ", "Tách ghi và đọc thành hai hàm. Chạy chỉ bước đọc sau khi tạo tệp rỗng hoặc tệp chỉ có một byte. Quan sát mã lỗi rồi thêm thông báo để người dùng phân biệt lỗi mở tệp và lỗi đọc thiếu."]
    ]);
  add("bare","avr-workshop","Thực hành AVR từ build đến quan sát chân","Biên dịch bài LED, kiểm thanh ghi trong debugger và xác minh tín hiệu trên phần cứng.",
    [
      ["Xác nhận board và clock", "Mở datasheet, sơ đồ chân và sơ đồ bo. Tìm chân nối LED tích hợp hoặc dùng LED ngoài có điện trở hạn dòng. Chọn đúng biến thể ATmega328P trong dự án. Cài F_CPU phù hợp với clock đã cấu hình nếu hàm hoặc công thức sử dụng macro này. Chỉ thay F_CPU không đổi tốc độ phần cứng."],
      ["Biên dịch và xem mã máy", "Chép chương trình từ bài GPIO, build rồi mở cửa sổ xem disassembly nếu debugger hỗ trợ. Dừng trước dòng đặt DDRB. Bước tiếp và đọc bit 5 của DDRB, rồi đọc bit 5 của PORTB sau thao tác đặt mức. Không suy từ số dòng C rằng thao tác chỉ có một lệnh máy."],
      ["Đo trên board thật", "Nạp đúng tệp .hex bằng công cụ phù hợp board. Quan sát LED hoặc đo chân và GND. Nếu không sáng, kiểm nguồn, chân, cực LED, hướng GPIO và chức năng ngoại vi có đang chiếm chân hay không. Thử bật rồi tắt, xác nhận bit khác được giữ nguyên."]
    ],"avr");
  add("bare","cortex-startup","Cortex-M, vector ngắt và startup","Dùng dự án mẫu để quan sát cùng các khái niệm trên kiến trúc khác.",
    [
      ["Tìm các tệp liên quan", "Chọn ví dụ Quantum Leaps cho đúng board, chẳng hạn STM32 NUCLEO-C031C6. Xem tệp startup, linker script và header của chip. Tìm Reset_Handler rồi theo dõi nó tới mã khởi tạo runtime và main. Một số công cụ chia công việc giữa startup và thư viện C."],
      ["Vector và bố trí bộ nhớ", "Đầu bảng vector Cortex-M là giá trị stack ban đầu. Mục kế là địa chỉ Reset_Handler. Các mục khác trỏ tới xử lý ngoại lệ và ngắt. CPU dùng linker và startup do dự án cung cấp để biết vị trí thực. MMIO vẫn là ý tưởng đọc ghi địa chỉ ngoại vi, nhưng địa chỉ và ngữ nghĩa thanh ghi khác AVR."],
      ["Thí nghiệm đọc debugger", "Dùng breakpoint tại Reset_Handler và main. Quan sát SP, PC rồi xác nhận .data đã có giá trị khởi tạo và một biến tĩnh chưa khởi tạo đang bằng 0. Sau đó bật ngắt theo tài liệu của board, quan sát trình xử lý được gọi mà không cần gọi trực tiếp từ main."]
    ]);
  add("peripherals","uart-workshop","Lab gửi UART bằng thanh ghi AVR","Gửi một chuỗi ngắn và so sánh cấu hình phần mềm với khung đo được.",
    [
      ["Giả định trước khi chạy", "Ví dụ dùng ATmega328P với clock thật 16 MHz, UART bất đồng bộ 9600 baud, 8N1. Nối TX từ board tới RX của bộ chuyển USB–UART có mức logic tương thích, nối GND. Nếu phần cứng đã có bộ chuyển tích hợp, dùng cổng nối tiếp tương ứng.",
        `#include <avr/io.h>
#include <stdint.h>

static void uart_init(void) {
    UCSR0A = 0;               /* U2X0 = 0, tốc độ thường. */
    UBRR0H = 0;
    UBRR0L = 103;
    UCSR0B = _BV(TXEN0);
    UCSR0C = _BV(UCSZ01) | _BV(UCSZ00);
}

static void uart_put(uint8_t byte) {
    while (!(UCSR0A & _BV(UDRE0))) {}
    UDR0 = byte;
}

int main(void) {
    uart_init();
    uart_put('U');
    uart_put('\\r');
    uart_put('\\n');
    for (;;) {}
}`],
      ["Ý nghĩa của các bước", "U2X0 bằng 0 dùng bộ chia theo chế độ thường. UBRR0 chọn tốc độ và TXEN0 bật đường truyền. Hai bit UCSZ chọn tám bit dữ liệu. UDRE0 cho biết bộ đệm dữ liệu có chỗ ghi. Nếu dự án phải hoạt động trong giới hạn thời gian, thay vòng chờ mẫu bằng trạng thái bận hoặc timeout."],
      ["Đối chiếu ca thực hành", "Mở cổng nối tiếp ở 9600 8N1 trước khi reset. Kỳ vọng một dòng có chữ U. Logic analyzer sẽ thấy bit đầu khoảng 104 µs. Đổi phía nhận sang baud sai để quan sát ký tự lỗi, rồi đưa về giá trị đúng. Để kiểm thêm, gửi byte 0x00 và 0xFF và so sánh độ rộng mức trong khung."]
    ],"avr");
  add("peripherals","pwm-lab","Lab PWM điều chỉnh độ sáng LED","Cấu hình Timer0 trên ATmega328P rồi đo tần số và phần thời gian xung ở mức cao.",
    [
      ["Đề bài thực hành", "Tạo xung PWM tại OC0A (PD6, thường là D6 trên Arduino Uno dùng ATmega328P). Gắn LED ngoài với điện trở hạn dòng hoặc đo chân bằng máy phân tích logic. Ví dụ biên dịch dưới dạng chương trình AVR C độc lập, dùng clock 16 MHz. Trong dự án Arduino dùng Timer0 cho hàm thời gian, đổi cấu hình Timer0 sẽ ảnh hưởng millis và delay.",
        `#include <avr/io.h>

int main(void) {
    DDRD |= _BV(DDD6);
    TCCR0B = 0;
    TCCR0A = _BV(COM0A1) | _BV(WGM01) | _BV(WGM00);
    OCR0A = 63;
    TCCR0B = _BV(CS01) | _BV(CS00);
    for (;;) {}
}`],
      ["Từng nhóm dòng làm gì?", "DDRD đặt PD6 ở chế độ đầu ra. TCCR0B bằng 0 để dừng timer khi cấu hình. Hai bit WGM chọn Fast PWM đếm từ 0 tới 255. COM0A1 chọn dạng không đảo. OCR0A đặt ngưỡng 63. Hai bit CS cuối cùng bắt đầu đếm với bộ chia 64."],
      ["Kiểm tra ba mức", "Tính tần số 16 MHz / (64 × 256), xấp xỉ 976,6 Hz. Nạp lần lượt OCR0A bằng 63, 127 và 191 rồi đo phần mức cao xấp xỉ 25%, 50% và 75%. Tần số dự kiến giữ nguyên ở cả ba lần. Với mức đầu và cuối thang, hãy đọc các trường hợp đặc biệt của chế độ PWM trong datasheet."]
    ],"avr");
  add("peripherals","eeprom-lab","Lab lưu cấu hình bằng EEPROM","Đọc chế độ sau reset, lưu khi có thay đổi và kiểm giá trị mặc định.",
    [
      ["Chọn một byte lưu trữ", "Dành một byte EEPROM để lưu hai chế độ 0 và 1. Lúc khởi động, chương trình đọc byte này, kiểm miền rồi lấy mặc định 0 nếu byte chưa hợp lệ. Đối với AVR, khai báo EEMEM đặt đối tượng vào vùng EEPROM. Dùng hàm trong <avr/eeprom.h> để đọc và cập nhật.",
        `#include <avr/eeprom.h>
#include <stdint.h>

static uint8_t EEMEM saved_mode;

uint8_t load_mode(void) {
    uint8_t stored = eeprom_read_byte(&saved_mode);
    return stored <= 1U ? stored : 0U;
}

void save_mode(uint8_t mode) {
    if (mode <= 1U) {
        eeprom_update_byte(&saved_mode, mode);
    }
}`],
      ["Khi nào nên gọi hàm ghi?", "Gọi save_mode khi nhận lệnh lưu hợp lệ hoặc khi nút đã qua lọc dội tạo một sự kiện xác nhận. eeprom_update_byte đọc trước và chỉ ghi nếu khác. EEPROM có tuổi thọ ghi hữu hạn, vì vậy tránh gọi thao tác ghi mỗi vòng lặp hoặc mỗi mẫu cảm biến."],
      ["Kiểm sau khi khởi động lại", "Trong dự án AVR, tạo main gọi load_mode và đưa kết quả ra LED hoặc biến Watch. Thử EEPROM ở trạng thái chưa có giá trị hợp lệ, sau đó gọi save_mode(1U) một lần theo lệnh và reset mà không nạp lại chip. Kỳ vọng chế độ mặc định ở lần đầu và giá trị 1 sau khi lưu. Với cấu hình nhiều byte cần chịu mất điện, dùng cơ chế xác nhận bản ghi và khôi phục bản cũ."]
    ],"avr");
  add("peripherals","dac-notes","Bài bổ trợ về DAC và đầu ra analog","Phân biệt điện áp do DAC tạo với mức trung bình của PWM qua bộ lọc.",
    [
      ["Mã số thành điện áp", "DAC chuyển một mã số thành mức analog. DAC 8 bit nhận 256 mã, từ 0 đến 255. Với mô hình lý tưởng có bước 3,3 V / 256, mã 128 cho khoảng 1,65 V. Đọc datasheet để biết cách từng DAC tính toàn thang, độ chính xác và thời gian đầu ra ổn định sau khi đổi mã."],
      ["Chọn cách làm trên AVR", "ATmega328P không có DAC điện áp đa mức tích hợp. Có thể dùng DAC rời qua SPI hoặc lấy trung bình PWM qua mạch lọc thông thấp. Chân PWM vẫn chuyển giữa hai mức. Sau bộ lọc, điện áp có thể còn gợn và cần thời gian để ổn định. Giá trị phụ thuộc tần số PWM, bộ lọc và tải."],
      ["Thử tính trước khi đo", "Giả sử PWM chuyển giữa xấp xỉ 0 V và 5 V, mức cao chiếm 25%, 50% và 75%. Giá trị trung bình lý tưởng lần lượt là 1,25 V, 2,5 V và 3,75 V. Nếu dùng dao động ký, quan sát cả dạng xung trước bộ lọc lẫn độ gợn sau bộ lọc. Nếu dùng DAC rời, so điện áp của ba mã với công thức trong datasheet của linh kiện đó."]
    ]);
  add("realtime","rtos-workshop","Lab RTOS với hai tác vụ và một hàng đợi","Chạy một mô hình producer–consumer và đo khi dữ liệu đến nhanh hơn tốc độ xử lý.",
    [
      ["Môi trường", "Chọn dự án RTOS đã chạy được cho board Cortex-M trong khóa Quantum Leaps hoặc dùng dự án mẫu của SDK và RTOS dành cho board đó. Bắt đầu từ ví dụ có tick hoạt động. Dùng API lịch và hàng đợi đúng với kernel của bạn."],
      ["Lắp hai tác vụ", "Tác vụ tạo mẫu chạy theo mốc tuyệt đối mỗi 10 ms và gửi cặp {số thứ tự, tick} vào hàng đợi có 8 ô. Tác vụ xử lý nhận và đo độ chênh tick tại thời điểm bắt đầu. Khi đầy, tăng bộ đếm mất mẫu và bỏ mẫu mới. Quy định rõ bộ đếm được đọc ở đâu và cách đọc an toàn."],
      ["Thí nghiệm trước và sau khi tăng tải", "Chạy với xử lý tốn dưới 10 ms, kiểm thứ tự và độ trễ. Tạo tải để xử lý mỗi mẫu lâu hơn 10 ms. Hàng đợi cuối cùng sẽ đầy. Ghi số mẫu bị bỏ, độ trễ lớn nhất quan sát được và lí do thay đổi ưu tiên không thể tăng năng lực CPU."],
      ["Nghiệm thu", "Có bảng so sánh hai cấu hình, đầu ra bao gồm số thứ tự và tick. Giải thích độ trễ từ lúc tạo đến lúc xử lý khác với thời gian CPU thực thi. Nếu lấy tín hiệu từ ISR, dùng biến thể API dành cho ISR và kiểm điều kiện nhường CPU từ tài liệu kernel."]
    ]);
})();

