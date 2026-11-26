(() => {
  const modules = [
    ["c", "Nhập môn lập trình C", "Từ chương trình đầu tiên đến kiểu dữ liệu và nhập xuất.", "terminal"],
    ["flow", "Toán tử và điều khiển", "Tính toán, rẽ nhánh và lặp với điều kiện rõ ràng.", "branch"],
    ["functions", "Hàm và tổ chức mã", "Chia chương trình thành hàm, tệp và mô-đun.", "code"],
    ["arrays", "Mảng và chuỗi", "Xử lý dãy số, ma trận và dữ liệu văn bản.", "stack"],
    ["pointers", "Con trỏ và bộ nhớ", "Đọc địa chỉ, truyền con trỏ, hiểu stack và heap.", "link"],
    ["records", "Struct, union và enum", "Mô hình hóa bản ghi, gói tin và trạng thái.", "layers"],
    ["heap", "Cấp phát động", "Quản lý vòng đời dữ liệu và xử lý hết bộ nhớ.", "box"],
    ["files", "Đọc và ghi tệp", "Lưu cấu hình, nhật ký và định dạng nhị phân trên máy tính.", "file"],
    ["bits", "Bit và thanh ghi", "Đọc nhị phân, tạo mặt nạ và thay đổi đúng trường bit.", "grid"],
    ["bare", "Lập trình bare-metal", "Từ mã C đến thanh ghi, GPIO và kiến trúc firmware.", "cpu"],
    ["peripherals", "Vi điều khiển và ngoại vi", "Timer, PWM, ADC, UART, SPI, I²C, CAN và ngắt.", "radio"],
    ["realtime", "Thời gian thực và RTOS", "Lập lịch, hàng đợi, xử lý sự kiện và đo độ trễ.", "clock"],
    ["debug", "Debug, kiểm thử và phỏng vấn", "Tìm nguyên nhân lỗi và giải thích các quyết định thiết kế.", "target"]
  ].map(([id,title,desc,icon],i) => ({id,title,desc,icon,number:i+1,track:i<8?"chuan-bi":"nhung"}));
  const tracks = [
    {id:"chuan-bi", title:"C nền tảng cho lập trình nhúng", shortTitle:"Chuẩn bị với C", number:1, icon:"terminal", color:"indigo",
      desc:"Viết và kiểm thử C trên máy tính. Học từ biến, vòng lặp và hàm đến con trỏ, bộ nhớ và tệp.",
      topics:["C cơ bản", "Con trỏ và bộ nhớ", "Cấu trúc dữ liệu"], start:"hello"},
    {id:"nhung", title:"Lập trình C nhúng", shortTitle:"C nhúng", number:2, icon:"cpu", color:"cyan",
      desc:"Áp dụng C để xử lý bit, điều khiển ngoại vi và xây dựng firmware trên ATmega328P.",
      topics:["Bit và thanh ghi", "Ngoại vi và ngắt", "RTOS và debug"], start:"binary"}
  ];
  const lessons = [];
  const add = (module,id,title,summary,sections,lab) => lessons.push({module,id,title,summary,sections,lab});
  window.EmbeddedCourse = {modules, tracks, lessons, add, exercises:{}, projects:[]};

  add("c","hello","Chương trình C đầu tiên","Chạy một chương trình nhỏ và lần theo từng phần từ tệp nguồn đến dòng kết quả.",
    [
      ["Thiết bị nhúng là gì?", "Máy giặt có bo mạch nhận tín hiệu từ nút bấm, quyết định chương trình giặt rồi điều khiển van hoặc động cơ. Bo mạch, cảm biến và mạch công suất là phần cứng. Firmware là phần mềm chạy trên vi điều khiển để kết nối các bước đó. Ở bài đầu, ta dùng cửa sổ kết quả làm nơi quan sát chương trình, sau đó mới thay bằng chân GPIO hay cổng nối tiếp."],
      ["Đọc chương trình từ trên xuống", "Dòng #include <stdio.h> đưa khai báo của puts vào chương trình. Trong môi trường C trên máy tính, chương trình bắt đầu ở main. (void) trong khai báo này nghĩa là hàm không nhận đối số. Hai dấu ngoặc nhọn bao phần thân. Dấu chấm phẩy kết thúc lệnh gọi hàm và lệnh return.",
        `#include <stdio.h>

int main(void)
{
    puts("Xin chao, Embedded C!");
    return 0;
}`],
      ["Từ văn bản đến chương trình", "Bộ tiền xử lý xử lý #include và macro. Trình biên dịch dịch mã sang dạng thấp hơn, trình hợp dịch tạo tệp đối tượng, rồi trình liên kết nối các tệp đối tượng và thư viện. puts ghi chuỗi vào đầu ra chuẩn và thêm ký tự xuống dòng. return 0 báo rằng main kết thúc thành công trong môi trường chạy của bài này."],
      ["Tự thử và quan sát", "Đổi nội dung trong dấu nháy kép. Chạy lại và so sánh hai kết quả. Sau đó thử bỏ dấu chấm phẩy sau puts. Trình biên dịch có thể báo ở dòng tiếp theo vì đó là nơi nó nhận ra câu lệnh trước chưa kết thúc."]
    ]);
  add("c","types","Biến, hằng và kiểu dữ liệu","Chọn kiểu dựa trên miền giá trị và phân biệt giá trị với cách biểu diễn.",
    [
      ["Một biến có tên, kiểu và giá trị", "int samples = 12; khai báo tên samples, dùng kiểu int và cho giá trị ban đầu là 12. Từ khóa như int, return và const có ý nghĩa riêng. Tên biến phân biệt hoa thường, nên sample và Sample là hai tên khác nhau."],
      ["Số nguyên có dấu và không dấu", "Kiểu có dấu biểu diễn được giá trị âm. Kiểu không dấu phù hợp với byte và mặt nạ. Số bit của int phụ thuộc nền tảng. Khi đúng 8 hoặc 16 bit là một phần của hợp đồng, hãy dùng uint8_t hoặc uint16_t từ <stdint.h> nếu nền tảng cung cấp kiểu đó. Dùng sizeof để đo số byte C trên môi trường hiện tại.",
        `#include <stdint.h>
const uint16_t limit = 1023;
uint16_t sample = 512;
float voltage = 2.5f;`],
      ["Hằng và biểu diễn gần đúng", "const làm đối tượng chỉ đọc qua tên đó trong C. Nó không bảo đảm dữ liệu nằm trong Flash. Số thực dấu phẩy động có thể làm tròn. Giá trị tiền, độ dài và mẫu ADC thường dễ quản lý hơn nếu ghi rõ đơn vị và dùng số nguyên khi đủ chính xác."],
    ]);
  add("c","io","Nhập xuất, ASCII và định dạng","Dùng scanf và printf đúng kiểu rồi thấy sự khác biệt giữa ký tự và giá trị số.",
    [
      ["Đầu vào và đầu ra chuẩn", "Ở bài chạy trong trình duyệt, mỗi ca kiểm thử cấp một chuỗi làm đầu vào chuẩn và đọc kết quả từ đầu ra chuẩn. scanf trả về số giá trị đã gán thành công. Nếu kỳ vọng một số nguyên, chỉ xử lý tiếp khi hàm trả về 1.",
        `int celsius;
if (scanf("%d", &celsius) != 1) {
    return 1;
}
printf("%d\\n", celsius);`],
      ["Khớp định dạng với đối số", "Với printf, %d dùng cho int, %u cho unsigned int, %s cho chuỗi kết thúc bằng byte 0, và %zu cho size_t. Với scanf, %d cần int *, còn %f cần float *. Ký hiệu & ở ví dụ lấy địa chỉ biến để scanf ghi kết quả. Với dữ liệu ngoài, fgets cộng strtol dễ kiểm giới hạn hơn scanf đọc số."],
      ["Ký tự và escape", "Trên hệ ASCII, '0' có mã 48. Nếu đã kiểm tra c là chữ số, c - '0' cho giá trị số. Ký tự \\n biểu diễn xuống dòng. Khi phân tích dữ liệu UART, hãy xác định rõ giao thức kết thúc dòng bằng LF hay CRLF."]
    ]);
  add("c","build","Biên dịch, header và công cụ","Quan sát lỗi cú pháp, lỗi liên kết và cách chọn công cụ cho đúng đích chạy.",
    [
      ["Môi trường C trên máy tính", "Các bài chạy web biên dịch C sang WebAssembly để kiểm tra thuật toán, đọc đầu vào và in kết quả. Bạn cũng có thể lưu một ví dụ thành main.c rồi biên dịch bằng gcc -std=c17 -Wall -Wextra main.c -o app. Trên Windows, mở PowerShell ở thư mục đó và chạy .\\app.exe. Các bài biên dịch cho vi điều khiển nằm ở phần C nhúng."],
      ["Tệp nguồn và header", "Tệp .c thường chứa định nghĩa và thân hàm. Tệp .h thường công bố kiểu, macro và nguyên mẫu hàm. Dòng #include chèn nội dung header ở bước tiền xử lý. Dùng include guard để một header có thể đi qua nhiều đường include mà chỉ được xử lý một lần trong mỗi đơn vị biên dịch.",
        `#ifndef SENSOR_H
#define SENSOR_H
#include <stdint.h>
uint16_t sensor_read(void);
#endif`],
      ["Phân biệt hai lỗi phổ biến", "Thiếu dấu ); là lỗi cú pháp. Có khai báo sensor_read nhưng không liên kết tệp định nghĩa thường ra lỗi undefined reference. Khi có nhiều lỗi, sửa lỗi đầu tiên rồi biên dịch lại. Bật cảnh báo như -Wall và -Wextra khi thực hành ở máy tính."]
    ]);

  add("flow","operators","Toán tử và thứ tự tính","Tính biểu thức số nguyên, so sánh giá trị và viết điều kiện dễ kiểm tra.",
    [
      ["Phép nguyên, phép chia và phần dư", "5 / 2 trả 2 vì hai toán hạng là số nguyên. 5.0 / 2 trả 2.5 vì phép chia dấu phẩy động được thực hiện. Phép % dùng với số nguyên. Luôn xử lý mẫu số 0 trước khi chia hoặc lấy phần dư.",
        `int odd = (value % 2 != 0);
int inside = (value >= 1 && value <= 100);`],
      ["Gán, so sánh và logic", "= gán, == so sánh, != kiểm tra khác. && và || có đánh giá ngắn mạch, vì thế trong p != NULL && *p > 0, vế phải chỉ chạy khi p khác NULL. a += 1 cập nhật a. ++i cho giá trị mới, i++ cho giá trị cũ. Khi chỉ muốn tăng, đặt ++i trên một dòng riêng."],
      ["Trình tự đọc biểu thức", "Nhân và chia ưu tiên cao hơn cộng trừ. So sánh thường ưu tiên cao hơn logic. Dùng ngoặc nhóm để người đọc thấy chủ đích. Tránh thay đổi cùng một biến nhiều lần trong biểu thức như i++ + i++; C không xác định được cách xử lý đó."]
    ]);
  add("flow","branches","Rẽ nhánh với if và switch","Viết điều kiện loại trừ nhau và kiểm các giá trị sát ngưỡng.",
    [
      ["Nếu đúng, nếu sai", "if kiểm tra một biểu thức. Khác 0 được xem là đúng. else chạy khi điều kiện sai. Khi các điều kiện cùng kiểm một thang điểm, xếp từ ngưỡng cao xuống thấp để nhánh đầu tiên bắt đúng nhóm.",
        `if (score >= 90) {
    puts("A");
} else if (score >= 75) {
    puts("B");
} else {
    puts("C");
}`],
      ["Lồng nhánh và chọn theo mã", "Dùng if lồng nhau khi điều kiện thứ hai chỉ có nghĩa sau điều kiện thứ nhất. switch phù hợp khi chọn theo giá trị nguyên hoặc enum. Một case thường kết thúc bằng break để tránh rơi xuống case kế tiếp. default xử lý mã lệnh lạ. Toán tử ?: hữu ích để chọn một trong hai giá trị đơn giản."],
      ["Ca kiểm thử tại biên", "Với ngưỡng 75, kiểm 74, 75 và 76. Với giới hạn 0 đến 100, kiểm cả -1 và 101. Các giá trị này phân biệt rõ lỗi dùng > thay cho >=."]
    ]);
  add("flow","loops","Vòng lặp, đếm và điều kiện dừng","Dùng for, while và do-while để xử lý chuỗi bước hữu hạn.",
    [
      ["Chọn vòng lặp", "Dùng for nếu biết trước số lượt. Dùng while khi kiểm điều kiện trước mỗi lượt. Dùng do-while nếu thân vòng cần chạy ít nhất một lần, chẳng hạn in thực đơn trước khi đọc lựa chọn. break thoát vòng gần nhất, continue chuyển sang lần lặp tiếp theo.",
        `for (int i = 0; i < 4; ++i) {
    printf("%d\\n", i);
}`],
      ["Dừng đúng lúc", "Đoạn trên in 0, 1, 2 và 3. Thử tự chỉ ra giá trị đầu tiên khiến điều kiện sai. Khi lồng vòng lặp để in bảng cửu chương, vòng ngoài chọn hàng và vòng trong chạy đầy đủ cho mỗi hàng."],
      ["Từ bài nhỏ đến thuật toán", "Kiểm số nguyên tố bằng cách thử các ước từ 2 trong khi d <= n / d, với n >= 2. Điều kiện này tránh phép nhân d * d có thể tràn. Với Fibonacci, giữ hai số gần nhất và kiểm giới hạn trước khi cộng. Với firmware, while (1) có chủ đích khi mỗi lượt xử lý xong nhanh và không chặn công việc khác."]
    ]);
  add("flow","arithmetic","Tràn số và chuyển kiểu","Tách phép tính, chuyển kiểu và cờ CPU để tránh suy luận sai.",
    [
      ["Tổng và kết quả sau khi lưu", "Với hai byte a = 200 và b = 100, tổng toán học là 300. Khi lưu vào uint8_t, kết quả là 44 vì chuyển sang kiểu không dấu theo modulo 256. Phép toán trên số nguyên nhỏ có thể được nâng lên int trước khi cộng. Tràn trong phép tính số nguyên có dấu là hành vi không xác định.",
        `uint16_t sum = (uint16_t)a + b;
uint8_t low = (uint8_t)sum;
bool carry = sum > UINT8_MAX;`],
      ["So sánh khi một giá trị có thể âm", "Các quy tắc chuyển kiểu phụ thuộc miền biểu diễn của từng kiểu. So sánh int và unsigned int cùng độ rộng có thể đổi số âm thành giá trị không dấu lớn. Đọc kiểu trước khi so sánh, kiểm âm riêng, hoặc chuyển cả hai sang kiểu rộng hơn đủ chứa toàn bộ hai miền."],
      ["Kiểm tra ngay trước và sau giới hạn", "Hãy thử 150 + 105 để có tổng 255 rồi thử 255 + 1 để có tổng 256. Byte thấp lần lượt là 255 và 0. Biến carry có giá trị 0 rồi 1. Kiểm thêm 0 + 0 để thấy byte thấp bằng 0 vẫn có thể xuất hiện khi phép cộng không sinh số nhớ."]
    ]);

  add("functions","functions","Khai báo, định nghĩa và gọi hàm","Đóng gói một phép tính, đặt tên cho đầu vào và trả kết quả.",
    [
      ["Ba việc khác nhau", "Khai báo cho trình biên dịch biết tên, kiểu trả về và kiểu tham số. Định nghĩa bổ sung phần thân. Lời gọi truyền các đối số cụ thể và có thể dùng kết quả trả về.",
        `int max2(int a, int b);
int max2(int a, int b) {
    return a >= b ? a : b;
}
/* Bên trong main: int peak = max2(4, 9); */`],
      ["C truyền theo giá trị", "Hai tham số a và b là bản sao. Gán a trong hàm không đổi biến đã truyền vào. Muốn cập nhật một đối tượng của bên gọi, truyền địa chỉ và ghi qua con trỏ. Bản thân địa chỉ vẫn được truyền theo giá trị."],
      ["Giao diện và hợp đồng", "Một hàm đổi nhiệt độ nên tên rõ đơn vị. Một hàm chia cho hai số cần quy định cách báo mẫu số 0. Quy ước thường dùng là mã trạng thái trả về cùng con trỏ đầu ra. Tách phần tính toán khỏi nhập xuất giúp thử bằng nhiều bộ dữ liệu."]
    ]);
  add("functions","storage","Phạm vi, vòng đời và liên kết","Phân biệt tên thấy được ở đâu, dữ liệu tồn tại bao lâu và liên kết qua tệp thế nào.",
    [
      ["Biến cục bộ và đối tượng tĩnh", "Biến tự động thông thường trong khối được tạo khi vào khối. Biến static trong hàm giữ giá trị giữa các lần gọi, nhưng tên vẫn chỉ thấy trong phạm vi khai báo. auto trong C17 là từ khóa chỉ lớp lưu trữ tự động, thường được bỏ qua.",
        `unsigned next_id(void) {
    static unsigned id = 0;
    return ++id;
}`],
      ["Chia mã qua nhiều tệp", "static ở phạm vi tệp làm tên hàm hoặc biến có liên kết nội bộ. extern thường khai báo một đối tượng đã được định nghĩa ở tệp khác. Header đặt khai báo extern, một tệp .c cung cấp định nghĩa. register chỉ là gợi ý cho hệ thống dịch trong C17 và ngăn dùng & trên biến đó."],
      ["Tiền xử lý và macro", "#define không hiểu kiểu. Macro như SQUARE(x) phải đặt ngoặc nhưng SQUARE(i++) vẫn tăng i nhiều lần nếu x xuất hiện hai lần. Ưu tiên hàm static inline cho phép tính có kiểu rõ. Dùng #if cho cấu hình biên dịch đã xác định."]
    ]);
  add("functions","recursion","Đệ quy và ngăn xếp lời gọi","Theo dõi điều kiện dừng và tính chi phí của nhiều lần gọi lồng nhau.",
    [
      ["Mỗi lần gọi có dữ liệu riêng", "Hàm đệ quy gọi lại chính nó với dữ liệu tiến gần trường hợp cơ sở. Với giai thừa, 0! = 1 là cơ sở. factorial(3) cần kết quả factorial(2), rồi 1 và 0. Các lời gọi trả về theo thứ tự ngược.",
        `/* Miền hợp lệ: 0..12 */
uint32_t factorial(unsigned n) {
    if (n == 0U) {
        return 1;
    }
    return n * factorial(n - 1U);
}`],
      ["Giới hạn trên MCU", "Đừng giả định trình biên dịch tối ưu được đệ quy. Mỗi mức có thể dùng stack cho địa chỉ quay về, biến và thanh ghi được lưu. Trên thiết bị RAM nhỏ, vòng lặp thường dễ lập ngân sách bộ nhớ hơn."],
      ["Thử hai giới hạn", "Kiểm n = 0 để xác nhận cơ sở và n = 12 để kiểm biên miền của mẫu. Nếu hàm xuất hiện trong giao diện nhận dữ liệu tùy ý, kiểm n trước khi gọi."]
    ]);

  add("arrays","arrays","Mảng một chiều và tìm phần tử","Duyệt mảng theo chiều dài và phân biệt chỉ số với giá trị.",
    [
      ["Đọc từng ô", "Mảng gồm các phần tử cùng kiểu nằm liên tiếp. Với int reading[4], chỉ số hợp lệ là 0 đến 3. Phần tử thứ tư là reading[3]. Chỉ số 4 ra ngoài mảng dù đôi khi chương trình có vẻ vẫn chạy.",
        `int reading[] = {5, 2, 9, 0};
size_t n = sizeof reading / sizeof reading[0];
for (size_t i = 0; i < n; ++i) {
    printf("%d\\n", reading[i]);
}`],
      ["Khi đưa mảng vào hàm", "Tham số int a[] được điều chỉnh thành int *a. sizeof a khi đó đo con trỏ. Gửi chiều dài bằng tham số riêng. Nếu hàm chỉ đọc, dùng const int *a."],
      ["Thuật toán và ca rỗng", "Tìm tuyến tính đọc lần lượt và phù hợp dữ liệu chưa sắp. Muốn tìm cực đại, chỉ khởi tạo từ a[0] sau khi chắc n > 0. Tìm nhị phân cần mảng có thứ tự và cận nhất quán. Khi dùng mảng vòng hoặc cửa sổ trượt, kiểm cả lúc quấn về đầu."]
    ]);
  add("arrays","matrices","Mảng hai chiều và ma trận","Đọc chỉ số hàng–cột rồi viết vòng lặp lồng xử lý từng ô.",
    [
      ["Hàng và cột", "int m[2][3] có 2 hàng và 3 cột. m[1][2] là ô cuối. C bố trí các phần tử theo hàng, từ trái sang phải, rồi sang hàng tiếp. Khi gọi hàm với mảng hai chiều có kích thước cố định, kiểu tham số phải giữ số cột để bước từ hàng này sang hàng khác.",
        `int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
for (size_t r = 0; r < 2; ++r) {
    for (size_t c = 0; c < 3; ++c) {
        printf("%d ", m[r][c]);
    }
    puts("");
}`],
      ["Cộng và nhân ma trận", "Cộng khi kích thước trùng nhau, mỗi ô kết quả bằng tổng hai ô cùng tọa độ. Khi nhân A kích thước R×K với B kích thước K×C, mỗi ô kết quả là tổng A[r][k] * B[k][c] theo k. Kiểm cả loại tích lũy vì tích và tổng có thể rộng hơn kiểu của từng ô."],
      ["Bài phụ", "Tính tay tích hàng [1, 2] và cột [3, 4]. Kết quả 11 là một ca đơn giản để kiểm vòng bên trong. Thử ma trận đơn vị để kiểm lại chỉ số."]
    ]);
  add("arrays","strings","Chuỗi, ký tự và tham số dòng lệnh","Giữ đủ chỗ cho ký tự kết thúc và xử lý văn bản có giới hạn.",
    [
      ["Byte kết thúc", "Chuỗi C kết thúc bằng '\\0'. char text[] = \"AVR\" tạo bốn byte gồm A, V, R và 0. strlen đếm ba byte nội dung. sizeof text đo cả bốn byte khi text vẫn là mảng ở phạm vi đó. Chuỗi UTF-8 có thể dùng nhiều byte cho một ký tự hiển thị."],
      ["Nhập rồi phân tích", "fgets nhận dung lượng bộ đệm và có thể giữ ký tự xuống dòng. Dùng strchr để tìm ký tự phân cách, hoặc strtol với con trỏ cuối và kiểm miền giá trị để đổi số. snprintf nhận sức chứa và trả độ dài lẽ ra được ghi, nhờ đó có thể phát hiện bị cắt.",
        `char line[24];
if (fgets(line, sizeof line, stdin) != NULL) {
    line[strcspn(line, "\\n")] = '\\0';
    puts(line);
}`],
      ["argc và argv trên máy tính", "main(int argc, char *argv[]) nhận số đối số và danh sách chuỗi. Kiểm argc trước khi đọc argv[1]. Với firmware bare-metal, thông số thường đến từ cấu hình Flash, EEPROM hoặc lệnh UART. Hãy thử một chuỗi rỗng, chuỗi vừa sức chứa và chuỗi vượt sức chứa."]
    ]);

  add("pointers","pointers","Địa chỉ, con trỏ và dereference","Phân biệt đối tượng, địa chỉ của nó và dữ liệu đọc qua địa chỉ.",
    [
      ["Đọc ba dòng mẫu", "x là đối tượng chứa 10. &x lấy địa chỉ của x. p giữ địa chỉ đó. *p truy cập đối tượng mà p đang trỏ tới, nên gán *p = 20 cũng đổi x.",
        `int x = 10;
int *p = &x;
*p = 20;
printf("%d\\n", x); /* 20 */`],
      ["Con trỏ hợp lệ", "Chỉ dereference con trỏ tới đối tượng còn sống và có kiểu phù hợp. NULL biểu diễn con trỏ rỗng và không được dereference. Con trỏ cục bộ chưa khởi tạo không tự trở thành NULL. Khi trả con trỏ từ hàm, đừng trả địa chỉ của biến tự động trong hàm."],
      ["Bài phụ", "Vẽ hai ô x và p. Ghi 10 trong x và một địa chỉ tượng trưng trong p. Sau lệnh *p = 20, sửa duy nhất ô x. So sánh với p = &y, lệnh đó đổi địa chỉ giữ trong ô p."]
    ]);
  add("pointers","pointer-arrays","Số học con trỏ và bộ nhớ","Duyệt cùng một mảng bằng địa chỉ rồi tìm hiểu tuổi thọ của dữ liệu.",
    [
      ["Di chuyển theo phần tử", "p + 1 trỏ tới phần tử kế tiếp cùng kiểu, không phải lúc nào cũng sang đúng một byte. Có thể tạo con trỏ ngay sau cuối mảng để làm mốc dừng. Không được dereference mốc đó. Hiệu hai con trỏ có nghĩa trong cùng một mảng hoặc mốc sau cuối.",
        `int values[] = {10, 20, 30};
for (const int *p = values; p != values + 3; ++p) {
    printf("%d\\n", *p);
}`],
      ["Vùng nhớ điển hình", "Mã và hằng thường có vùng riêng. .data chứa dữ liệu tĩnh được khởi tạo khác 0, .bss thường giữ dữ liệu tĩnh mặc định 0. Stack phục vụ lời gọi hàm. Heap dành cho cấp phát động nếu runtime cung cấp. Dùng tệp map để xem bố trí cụ thể của bản build."],
      ["Sao chép byte", "memcpy phù hợp vùng nguồn và đích không chồng lấp. memmove dùng được khi hai vùng chồng lấp. Cả hai yêu cầu kích thước sao chép nằm trong những vùng hợp lệ."]
    ]);
  add("pointers","advanced-pointers","Con trỏ kép, void* và con trỏ hàm","Truyền địa chỉ của một con trỏ và chọn hành vi qua callback.",
    [
      ["Tầng gián tiếp bổ sung", "Với int *p, kiểu của &p là int **. Hàm nhận int ** có thể đổi p ở bên gọi, chẳng hạn gán con trỏ mới qua *out. Hãy kiểm hợp đồng đầu vào và quy định ai sở hữu đối tượng mới."],
      ["Con trỏ tổng quát", "void * giữ địa chỉ đối tượng mà không mang kiểu truy cập. C cho phép chuyển qua lại với con trỏ đối tượng. Để đọc, phải dùng kiểu đích phù hợp. C chuẩn không định nghĩa số học trên void * và không bảo đảm chuyển được con trỏ hàm sang void *."],
      ["Callback có chữ ký rõ", "Con trỏ hàm lưu địa chỉ một hàm với kiểu trả về và danh sách tham số nhất định. Dùng typedef để đọc khai báo dễ hơn. Trong bảng điều phối lệnh, kiểm chỉ số trước khi gọi.",
        `typedef int (*operation_t)(int, int);
int apply(operation_t op, int a, int b) {
    return op(a, b); /* Điều kiện trước: op hợp lệ */
}`]
    ]);
})();

