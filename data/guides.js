(() => {
  const base = window.EmbeddedCourse.references.ewC;
  const guides = [];
  const add = (id,moduleId,title,summary,slug,sections) => {
    guides.push({id,moduleId,title,summary,source:base+"/"+slug,sections,guide:true});
  };

  add("bat-dau",null,"Bắt đầu trên ATmega328P","Xác định đầu vào, đầu ra và thanh ghi rồi chạy firmware đầu tiên.","embedded-c", [
    ["Đọc sơ đồ theo tên chân của chip","Với Arduino Uno R3, PD2 là D2, PB5 là D13 và PC0 là A0. Khi dùng chip rời, tra chân theo gói trên datasheet. Giữ chung GND. Nếu dùng LED rời, mắc thêm điện trở hạn dòng."],
    ["Đọc nút tác động mức thấp","DDRD2 bằng 0 để chân PD2 là input. Đặt PORTD2 lên 1 để bật kéo lên. Đọc PIND2 để biết mức thực tế: nhấn nối GND cho 0, nhả cho 1. Chốt PORTD2 tiếp tục bằng 1 ở cả hai tình huống."],
    ["Cấu hình chân LED và kiểm","Đặt DDRB5 để lái PB5. Dự đoán PORTB5 trước mỗi ca, chọn Chạy HEX mẫu và đọc bảng. Mở ảnh chụp từng bit để theo dõi vai trò của từng thanh ghi."],
    ["Sửa firmware","Mở phần Soạn và tải mã C để lấy main.c. Biên dịch bằng avr-gcc với -mmcu=atmega328p. Tạo tệp Intel HEX bằng avr-objcopy, sau đó nạp qua Nạp HEX của bạn. Cùng tệp HEX có thể dùng để nạp Flash trên bo phù hợp."]
  ]);
  add("so-hoc","m1_arith","Tràn số, số nhớ và chuyển kiểu","Giải thích giá trị trước và sau khi lưu vào kiểu hẹp.", "arithmetic-edge-cases", [
    ["Tính rộng, lưu hẹp","Hai byte 200 và 100 có tổng 300. Giữ tổng trong uint16_t rồi chuyển sang uint8_t. Kết quả còn 44 vì đổi sang kiểu không dấu rộng 8 bit lấy giá trị theo modulo 256.",
      `uint16_t sum = (uint16_t)a + b;
uint8_t low = (uint8_t)sum;
bool carry = sum > UINT8_MAX;`],
    ["Tách số nhớ khỏi cờ CPU","Biến carry ở ví dụ cho biết tổng có vượt 255 hay không. Muốn quan sát SREG.C trên AVR, hãy xem lệnh máy cụ thể và dừng ngay sau lệnh đó. C không quy định trạng thái cờ CPU ở một dòng chương trình."],
    ["So sánh và phép trừ","Với hai số không dấu a, b, điều kiện a < b cho biết a - b cần mượn theo số học. Khi một biến có dấu và biến kia không dấu, hãy kiểm quy tắc chuyển kiểu hoặc chuyển sang kiểu rộng hơn đủ chứa cả hai. Tràn trong phép toán có dấu là hành vi không xác định."],
    ["Tự kiểm","Thử tổng 255, 256 và 510. Với a = 3, b = 5, tính a - b trước rồi dự đoán giá trị sau khi chuyển sang uint8_t. Kết quả là 254."]
  ]);
  add("toan-tu-bit","m2_bitwise","Đặt, xóa, đảo và đọc bit","Tạo mặt nạ cho một vị trí và giữ các bit còn lại.", "bitwise-operations", [
    ["Đánh số từ phải sang trái","Bit ngoài cùng bên phải là bit 0. Với k từ 0 đến 7, 1U << k tạo mặt nạ chỉ có bit k bằng 1. Ví dụ k = 5 cho 0x20. Kiểm chỉ số trước khi dịch nếu nó đến từ đầu vào."],
    ["Bốn thao tác","OR đặt bit, AND với mặt nạ đảo xóa bit, XOR đảo bit. Đọc bit bằng phép AND rồi so kết quả với 0. Dùng từng lệnh dưới đây riêng lẻ khi kiểm một thao tác.",
      `uint8_t mask = (uint8_t)(1U << k);
reg |= mask;
reg &= (uint8_t)~mask;
reg ^= mask;
bool on = (reg & mask) != 0U;`],
    ["Áp dụng vào thanh ghi","Với biến mô phỏng reg = 0x05 và k = 5, phép đặt cho 0x25. Trên thanh ghi thật, xác minh bit được phép đọc và ghi. Một số cờ xóa bằng cách ghi 1 và cần xử lý theo datasheet."],
    ["Tự kiểm","Đặt bit 7 của 0x01, rồi đọc lại bit 0. Kết quả lần lượt là 0x81 và bit 0 vẫn còn bằng 1. Thử thao tác tương tự trong mô phỏng bit."]
  ]);
  add("truong-bit","m3_bitfield","Đọc và thay một trường bit","Trích xuất hoặc thay nhóm bit mà vẫn giữ phần còn lại.", "bit-field-operation", [
    ["Chọn vị trí và độ rộng","Giả sử trường chiếm bit 4, 5 và 6. Trường có 3 bit nên giá trị hợp lệ từ 0 đến 7. Mặt nạ chưa dịch là 0x07. Mặt nạ đã dịch cho vị trí thật là 0x70."],
    ["Đọc và ghi theo thứ tự","Đọc bằng cách dịch phải 4 rồi AND với 0x07. Khi ghi, kiểm miền của next, xóa trường cũ rồi OR giá trị mới đã dịch. Mã dưới đây giả sử next <= 7.",
      `uint8_t old = (uint8_t)((reg >> 4) & 0x07U);
reg = (uint8_t)((reg & (uint8_t)~0x70U) | (next << 4));`],
    ["Tự kiểm trên dữ liệu","Từ reg = 0xA5, đọc được giá trị 2. Thay trường bằng 3 sẽ cho 0xB5. Thử ghi 0 để kiểm các bit cũ đã thực sự bị xóa. Với trường có độ rộng biến đổi, kiểm rằng tổng vị trí và độ rộng vẫn nằm trong kiểu trước khi dịch."]
  ]);
  add("xoay-dem-bit","m4_bitrot","Xoay bit, đảo thứ tự và đếm bit 1","Quan sát bit đi đâu khi dịch hoặc xoay và kiểm trường hợp rìa.", "bitwise-rotation-counting", [
    ["Dịch và xoay","Khi dịch trái một byte rồi bỏ phần vượt 8 bit, bit cao mất đi. Khi xoay trái một vị trí, đưa bit cao về bit thấp. Với 0x81, dịch trái thành 0x02, còn xoay trái thành 0x03.",
      `uint8_t rotated = (uint8_t)((byte << 1) | (byte >> 7));`],
    ["Đếm và kiểm tra lũy thừa","Đếm bit 1 bằng cách duyệt 8 vị trí hoặc lặp x &= x - 1U khi x khác 0. Phép đó bỏ bit 1 thấp nhất. Số không dấu là lũy thừa của 2 khi khác 0 và chỉ có một bit 1."],
    ["Đảo thứ tự bit","Bắt đầu kết quả bằng 0, lần lượt đọc bit thấp của nguồn, đưa vào kết quả đã dịch trái rồi dịch nguồn phải. Thử 0x12. Sau tám lượt, kết quả là 0x48. Đảo thứ tự bit và đổi thứ tự byte là hai thao tác áp dụng ở các cấp khác nhau."]
  ]);
  add("xu-ly-mang","m5_array","Mảng mẫu, checksum và cửa sổ trượt","Xử lý mảng có chiều dài rõ ràng trong bộ nhớ hạn chế.", "array-manipulation", [
    ["Hợp đồng của mảng","Khi truyền mảng cho hàm, truyền địa chỉ đầu cùng số phần tử. Kiểm n = 0 trước khi truy cập a[0] hoặc tạo con trỏ cuối. Với đảo tại chỗ, hoán đổi các cặp đầu và cuối rồi tiến về giữa."],
    ["Tích lũy và kiểm toàn vẹn","Checksum cộng các byte rồi lấy byte thấp. Nó phát hiện một số lỗi và có thể bỏ sót hai thay đổi bù nhau. Khi tính tổng mẫu ADC, chọn kiểu chứa được số mẫu nhân với giá trị lớn nhất. Ví dụ 16 mẫu 10 bit có tổng tối đa 16 × 1023 = 16368."],
    ["Cửa sổ trượt","Khi đã có tổng của cửa sổ đầy, bỏ mẫu cũ rồi thêm mẫu mới. Với [2, 3, 7] tổng là 12. Nếu bỏ 2 và thêm 6, tổng mới là 16. Quy định riêng cách xử lý khi chưa đủ mẫu và thử điểm bộ đệm quấn về đầu."]
  ]);
  add("con-tro","m6_pointer","Con trỏ, tham số đầu ra và callback","Đọc địa chỉ đúng kiểu và điều phối hành vi qua con trỏ hàm.", "pointer", [
    ["Địa chỉ và đối tượng","&x lấy địa chỉ của x. *p truy cập đối tượng p trỏ tới nếu nó hợp lệ và còn sống. p + 1 tiến một phần tử cùng kiểu. Con trỏ ngay sau cuối mảng làm mốc dừng và không được dereference."],
    ["Đổi đối tượng hoặc đổi con trỏ","Hàm nhận uint8_t * có thể sửa byte qua *p. Hàm nhận uint8_t ** có thể sửa con trỏ của bên gọi qua *p. Dùng void * khi giao diện nhận địa chỉ của nhiều kiểu, rồi chuyển sang kiểu đối tượng phù hợp trước khi đọc."],
    ["Bảng callback","Khai báo kiểu hàm rõ ràng. Trước khi dùng một mã lệnh để chọn hàm, kiểm nó nhỏ hơn số phần tử và kiểm phần tử được gọi khác NULL khi bảng có thể để trống.",
      `typedef void (*handler_t)(void);
if (command < handler_count && handlers[command] != NULL) {
    handlers[command]();
}`],
    ["Tự kiểm","Viết bảng cho ba mã lệnh. Thử mã 0, mã cuối và mã bằng đúng số phần tử. Đảm bảo trường hợp cuối đi theo nhánh báo lệnh không hợp lệ."]
  ]);
  add("ban-ghi","m7_struct","Struct, căn chỉnh và gói tin","Gom các trường liên quan và chỉ rõ dữ liệu nào được truyền đi.", "structures", [
    ["Bản ghi trong RAM","Dùng struct để giữ cùng lúc thời điểm, giá trị và mã trạng thái của một mẫu. Dùng dấu chấm với biến và dấu -> với con trỏ. Tên trường nêu rõ đơn vị như time_ms và value_mv."],
    ["Đo bố trí của đích","sizeof có thể lớn hơn tổng kích thước trường vì căn chỉnh. Dùng sizeof và offsetof từ <stddef.h> khi kiểm bản build. Vị trí các bit-field còn phụ thuộc compiler và ABI. Đọc và ghi thanh ghi thật bằng mặt nạ đã đối chiếu datasheet."],
    ["Đóng gói có chủ đích","Nếu giao thức yêu cầu hai byte điện áp theo thứ tự cao trước, ghi từng byte. Với 0x073F, đầu ra là 07 rồi 3F. Kiểm chiều dài trước khi giải mã, gồm cả trường hợp chỉ nhận được một trong hai byte."]
  ]);
  add("union","m8_union","Union, nhãn dữ liệu và thứ tự byte","Dùng vùng nhớ chung và nhận diện khi mã phụ thuộc nền tảng.", "unions", [
    ["Một vùng nhớ chung","Các thành viên của union chia sẻ vùng lưu trữ. Dùng enum để ghi kiểu dữ liệu hiện có khi đối tượng có thể chứa nhiều loại. Chỉ đọc thành viên tương ứng theo hợp đồng của chương trình.",
      `enum message_kind { BYTE_CODE, SAMPLE };
struct message {
    enum message_kind kind;
    union { uint8_t code; uint16_t adc; } data;
};`],
    ["Quan sát biểu diễn trên đích","Nếu khảo sát một union gồm số 32 bit và mảng bốn byte, đối chiếu kết quả với thứ tự byte của công cụ đang dùng. Khi định nghĩa khung truyền, dịch và lấy mặt nạ theo thứ tự byte đã thỏa thuận."],
    ["Bài thử","Ghi giá trị 0x11223344, dự đoán byte đầu ở hệ little-endian và big-endian. Hai giá trị là 0x44 và 0x11. Với số float, thống nhất định dạng và thứ tự byte trước khi gửi qua UART."]
  ]);
  add("bo-dem-vong","m9_ringbuf","FIFO, bộ đệm vòng và ngăn xếp","Theo dõi chỉ số đầu cuối và hành vi khi bộ đệm đầy.", "circular-buffer", [
    ["Chọn FIFO hay LIFO","UART nhận byte theo thứ tự, nên FIFO lấy byte cũ nhất trước. Ngăn xếp LIFO lấy giá trị mới nhất. Cả hai có thể dùng mảng kích thước cố định để dễ tính chi phí RAM."],
    ["Hai chỉ số và một ô chừa","head là vị trí ghi tiếp, tail là vị trí đọc tiếp. Với quy ước chừa một ô, head == tail là rỗng, còn next(head) == tail là đầy. Mảng 8 ô lưu tối đa 7 phần tử. Kiểm rằng capacity lớn hơn 1."],
    ["Chia trách nhiệm với ISR","Xác định bên ghi và bên đọc. Bên ghi phải điền dữ liệu trước khi công bố head. Kiểm khả năng đọc hay ghi nguyên tử của từng chỉ số và cơ chế đồng bộ trên đích. volatile không tự thiết lập cơ chế đồng bộ."],
    ["Tự kiểm","Ghi đủ bộ đệm, thử ghi thêm, đọc hai phần tử rồi ghi hai giá trị mới. Đọc hết và so với thứ tự ghi để kiểm cả lúc quấn chỉ số."]
  ]);
  add("chuoi-uart","m10_string","Chuỗi, ký tự và dòng lệnh UART","Nhận dữ liệu theo từng byte và xử lý giới hạn bộ đệm.", "strings-and-character-handling", [
    ["Chuỗi phải có byte kết thúc","Chuỗi C dùng byte 0 để đánh dấu kết thúc. char buf[8] chứa tối đa bảy byte nội dung cùng byte kết thúc. strlen đếm số byte nội dung. Số byte và số ký tự hiển thị có thể khác với UTF-8."],
    ["Tách khâu nhận và phân tích","ISR nhận byte có thể đưa dữ liệu vào hàng đợi. Trong vòng lặp chính, ghép tới ký tự xuống dòng. Khi quá dài, quy định bỏ hết phần dư đến cuối dòng để đầu vào kế tiếp bắt đầu sạch. Chấp nhận LF hoặc CRLF theo hợp đồng."],
    ["Kiểm giá trị trước khi đổi kiểu","Với lệnh SET 128, xác nhận từ khóa, dấu phân cách và chuỗi số. Dùng strtol với con trỏ cuối và kiểm miền, hoặc viết bộ phân tích có kiểm tràn trước khi nhân 10 rồi cộng chữ số."],
    ["Tự kiểm","Thử dòng rỗng, số vượt miền, dòng đúng vừa khít bộ đệm và hai lệnh liền nhau. Sau một dòng quá dài, gửi lại một lệnh hợp lệ và kiểm chương trình vẫn nhận đúng."]
  ]);
  add("ma-hoa","m11_convert","Đổi hệ, mã hóa và thứ tự byte","Nêu rõ khác biệt giữa giá trị số, chuỗi hiển thị và các byte trên bus.", "data-conversion-and-encoding", [
    ["Một giá trị, ba cách nhìn","18, 0x12 và 00010010 cùng biểu diễn giá trị byte 18. Hai ký tự ASCII '1' và '2' lại là hai byte văn bản. Quy định đầu ra cần số nhị phân hay văn bản trước khi thiết kế hàm."],
    ["Ghép khung nhị phân","Trong khung big-endian, byte cao của số 16 bit đến trước. Kiểm có đủ hai byte trước khi dịch và ghép. ADC và cảm biến khác có thể quy định thứ tự đọc thanh ghi riêng.",
      `uint16_t value = (uint16_t)(((uint16_t)hi << 8) | lo);`],
    ["Chuyển thành văn bản","Lấy từng chữ số hex bằng cách dịch phải số bit phù hợp rồi AND với 0x0F. Tra bảng 0123456789ABCDEF. Muốn in bốn ký tự hex và dùng như chuỗi C, cần bộ đệm năm byte."],
    ["Tự kiểm","Thử 0, 0x000F, 0x00FF và 0xFFFF. Kiểm việc giữ số 0 ở đầu khi hợp đồng yêu cầu đúng bốn chữ số."]
  ]);
  add("tim-kiem","m12_sort","Tìm kiếm và sắp xếp trên MCU","Chọn cách làm theo dữ liệu, thời gian và bộ nhớ cho phép.", "searching-and-sorting", [
    ["Tìm tuyến tính","Duyệt từ đầu đến cuối và trả chỉ số đầu tiên khớp. Cách này hoạt động với mảng chưa sắp. Kiểm mảng rỗng và quy định giá trị báo không tìm thấy."],
    ["Tìm nhị phân","Chỉ dùng khi mảng đã có thứ tự theo cùng tiêu chí so sánh. Với cận nửa mở [lo, hi), lấy mid = lo + (hi - lo) / 2. Nếu giá trị giữa nhỏ hơn đích thì tăng lo đến mid + 1, nếu lớn hơn thì giảm hi về mid."],
    ["Sắp xếp và chi phí","Với mảng nhỏ hoặc gần có thứ tự, insertion sort có thể dễ triển khai và không cần mảng phụ. Trên MCU, ngoài số phép so sánh, xem số lần ghi, dung lượng làm việc và thời gian tệ nhất. Khi chỉ cần phần tử lớn nhất, một lượt duyệt là đủ."],
    ["Tự kiểm","Thử mảng rỗng, một phần tử, hai giá trị trùng nhau và mảng sắp giảm. Nếu yêu cầu tìm phần tử trùng xuất hiện đầu tiên, quy định điều đó riêng trong hàm tìm nhị phân."]
  ]);

  window.EmbeddedCourse.guides = guides;
})();

