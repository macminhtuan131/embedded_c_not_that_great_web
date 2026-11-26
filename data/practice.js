(() => {
  const {exercises, projects} = window.EmbeddedCourse;
  const core = "#include <stdio.h>\n#include <stdint.h>\n#include <stddef.h>\n#include <stdbool.h>\n";
  const add = (id, task, template, answer, cases, hints, includes = "") => {
    exercises[id] = {
      task,
      starter: core + includes + "\n" + template.replace("IMPLEMENT", "/* Viết phần xử lý ở đây. */"),
      solution: core + includes + "\n" + template.replace("IMPLEMENT", answer).replaceAll(" /* Mặc định để bạn sửa. */", ""),
      cases, hints
    };
  };
  const hello = {
    task:"Sửa lời gọi puts để chương trình in đúng một dòng Xin chao, Embedded C! Bạn có thể chạy mã ban đầu để xem sự khác biệt.",
    starter:'#include <stdio.h>\n\nint main(void)\n{\n    // Thay nội dung trong dấu nháy kép.\n    puts("Xin chao!");\n    return 0;\n}\n',
    solution:'#include <stdio.h>\n\nint main(void)\n{\n    puts("Xin chao, Embedded C!");\n    return 0;\n}\n',
    cases:[["Lời chào","","Xin chao, Embedded C!"]],
    hints:["Giữ nguyên puts, hai dấu ngoặc đơn và dấu chấm phẩy.", "Đặt đúng nội dung Xin chao, Embedded C! trong hai dấu nháy kép."]
  };
  exercises.hello = hello;

  add("types","Khai báo một hằng số nguyên không dấu 16 bit có tên limit và giá trị 1023. In giá trị thập phân. Giữ nguyên phép in đã cho.",
    `int main(void) {
    uint16_t limit = 0; /* Sửa khai báo này. */
    IMPLEMENT
    printf("%u\\n", (unsigned)limit);
    return 0;
}`, "", [["Mẫu ADC cực đại","","1023"]],["Thêm const trước kiểu uint16_t.", "Giá trị 1023 vừa kiểu uint16_t."]);
  exercises.types.solution = exercises.types.solution.replace("uint16_t limit = 0; /* Sửa khai báo này. */","const uint16_t limit = 1023;").replace("\n    \n","\n");

  add("io","Đọc số Celsius nguyên từ -100 đến 100 và in Fahrenheit theo công thức C × 9 / 5 + 32. Phép chia nguyên trong C làm tròn về 0.",
    `int main(void) {
    int c;
    if (scanf("%d", &c) != 1) return 1;
    int fahrenheit = 0;
    IMPLEMENT
    printf("%d\\n", fahrenheit);
    return 0;
}`, "fahrenheit = c * 9 / 5 + 32;", [["Nước đóng băng","0","32"],["Nước sôi","100","212"],["Nhiệt độ âm","-40","-40"],["Có phần lẻ","1","33"]],
    ["Nhân c với 9 trước khi chia cho 5.","Đừng viết 9 / 5 * c vì 9 / 5 tính trước thành 1."]);
  add("operators","Đọc x và in LE nếu x lẻ, CHAN nếu x chẵn. Miền đầu vào từ -1000 đến 1000.",
    `int main(void) {
    int x;
    if (scanf("%d", &x) != 1) return 1;
    bool odd = false;
    IMPLEMENT
    puts(odd ? "LE" : "CHAN");
    return 0;
}`, "odd = x % 2 != 0;", [["Số dương","7","LE"],["Số âm","-3","LE"],["Số không","0","CHAN"],["Số chẵn âm","-10","CHAN"]],
    ["Lấy phần dư khi chia cho 2.","Với số âm, giá trị dư có thể là -1. Kiểm khác 0."]);
  add("branches","In A nếu điểm từ 90 đến 100, B nếu từ 75 đến 89, C nếu từ 0 đến 74, và LOI nếu ngoài miền 0–100.",
    `int main(void) {
    int score;
    if (scanf("%d", &score) != 1) return 1;
    const char *rank = "C";
    IMPLEMENT
    puts(rank);
    return 0;
}`, `if (score < 0 || score > 100) rank = "LOI";
    else if (score >= 90) rank = "A";
    else if (score >= 75) rank = "B";`,
    [["Biên A","90","A"],["Sát biên","89","B"],["Biên B","75","B"],["Nhóm C","74","C"],["Ngoài miền","101","LOI"],["Số âm","-1","LOI"]],
    ["Loại điểm ngoài miền trước khi xếp loại.","Kiểm mốc 90 trước mốc 75."]);
  add("loops","Đọc n từ 0 đến 1000. Dùng vòng lặp để tính tổng từ 1 đến n. Nếu n = 0, in 0.",
    `int main(void) {
    int n;
    if (scanf("%d", &n) != 1) return 1;
    long total = 0;
    IMPLEMENT
    printf("%ld\\n", total);
    return 0;
}`, `for (int i = 1; i <= n; ++i) {
        total += i;
    }`, [["Rỗng","0","0"],["Một lượt","1","1"],["Năm lượt","5","15"],["Giới hạn","1000","500500"]],
    ["Bắt đầu đếm từ 1 và dùng điều kiện gồm cả n.","Biến total tích lũy qua các lượt, nên đặt ngoài vòng lặp."]);
  add("arithmetic","Đọc hai byte không dấu và in phần thấp 8 bit, một khoảng trắng, rồi cờ nhớ 0 hoặc 1.",
    `int main(void) {
    unsigned a, b;
    if (scanf("%u%u", &a, &b) != 2) return 1;
    uint8_t low = 0;
    unsigned carry = 0;
    IMPLEMENT
    printf("%u %u\\n", (unsigned)low, carry);
    return 0;
}`, `uint16_t sum = (uint16_t)a + (uint16_t)b;
    low = (uint8_t)sum;
    carry = sum > UINT8_MAX;`, [["Tổng 300","200 100","44 1"],["Tổng 255","150 105","255 0"],["Tổng 256","255 1","0 1"],["Cả hai bằng 0","0 0","0 0"]],
    ["Giữ tổng trong uint16_t trước khi lấy byte thấp.","256 là tổng nhỏ nhất làm cờ nhớ bằng 1."]);
  add("functions","Viết hàm clamp để trả giá trị trong khoảng đóng [lo, hi]. Dữ liệu bảo đảm lo <= hi.",
    `static int clamp(int value, int lo, int hi) {
    IMPLEMENT
    return value;
}

int main(void) {
    int value, lo, hi;
    if (scanf("%d%d%d", &value, &lo, &hi) != 3) return 1;
    printf("%d\\n", clamp(value, lo, hi));
    return 0;
}`, `if (value < lo) return lo;
    if (value > hi) return hi;`, [["Dưới giới hạn","-1 0 10","0"],["Trong miền","5 0 10","5"],["Trên giới hạn","20 0 10","10"],["Miền một điểm","-2 7 7","7"]],
    ["Xử lý hai trường hợp nằm ngoài trước.","Nếu cả hai so sánh đều sai, giữ nguyên value."]);
  add("recursion","Viết hàm giai thừa bằng đệ quy. Chương trình nhận n trong miền 0 đến 12.",
    `static unsigned long factorial(unsigned n) {
    IMPLEMENT
    return 1;
}

int main(void) {
    unsigned n;
    if (scanf("%u", &n) != 1) return 1;
    printf("%lu\\n", factorial(n));
    return 0;
}`, "if (n > 0U) return n * factorial(n - 1U);",
    [["Trường hợp cơ sở","0","1"],["Một","1","1"],["Nhiều mức","5","120"],["Cận trên","12","479001600"]],
    ["Trường hợp n bằng 0 có đáp án 1.","Thay n bằng n - 1 trong lời gọi kế tiếp."]);
  add("arrays","Tìm vị trí xuất hiện đầu tiên của needle, đánh số từ 0. Trả -1 khi không có. n nằm từ 0 đến 8.",
    `static int find(const int *a, int n, int needle) {
    IMPLEMENT
    return -1;
}

int main(void) {
    int n, needle, a[8];
    if (scanf("%d%d", &n, &needle) != 2 || n < 0 || n > 8) return 1;
    for (int i = 0; i < n; ++i) {
        if (scanf("%d", &a[i]) != 1) return 1;
    }
    printf("%d\\n", find(a, n, needle));
    return 0;
}`, `for (int i = 0; i < n; ++i) {
        if (a[i] == needle) return i;
    }`,
    [["Có giá trị lặp","5 7 2 7 3 7 8","1"],["Mảng rỗng","0 8","-1"],["Không thấy","3 4 1 2 3","-1"],["Phần tử đầu","2 -2 -2 3","0"]],
    ["Duyệt từ chỉ số 0.","Trả chỉ số ngay khi gặp giá trị cần tìm."]);
  add("matrices","Tính tổng các ô trên đường chéo chính của ma trận vuông 2 × 2. Đầu vào có bốn số theo thứ tự từng hàng, mỗi số trong khoảng -100 đến 100.",
    `int main(void) {
    int m[2][2];
    for (size_t r = 0; r < 2; ++r) {
        for (size_t c = 0; c < 2; ++c) {
            if (scanf("%d", &m[r][c]) != 1) return 1;
        }
    }
    int sum = 0;
    IMPLEMENT
    printf("%d\\n", sum);
    return 0;
}`, "for (size_t i = 0; i < 2; ++i) sum += m[i][i];",
    [["Dãy tăng","1 2 3 4","5"],["Ngoài đường chéo","0 9 8 0","0"],["Số âm","-1 4 9 -2","-3"]],
    ["Ô đầu tiên có chỉ số [0][0].","Trên đường chéo chính, hàng và cột bằng nhau."]);
  add("strings","Tự đếm số byte trước ký tự kết thúc của chuỗi ASCII. Kết quả bỏ qua ký tự xuống dòng được loại sẵn.",
    `int main(void) {
    char line[64] = {0};
    if (fgets(line, sizeof line, stdin) != NULL) {
        line[strcspn(line, "\\n")] = '\\0';
    }
    size_t count = 0;
    IMPLEMENT
    printf("%zu\\n", count);
    return 0;
}`, "while (line[count] != '\\0') ++count;",
    [["Chuỗi ngắn","AVR","3"],["Có khoảng trắng","hello world","11"],["Chuỗi rỗng","","0"]],
    ["Bắt đầu ở phần tử 0.","Dừng trước khi đếm byte '\\0'."], "#include <string.h>\n");
  add("pointers","Viết swap để hoán đổi hai biến mà a và b trỏ tới. Hai con trỏ luôn hợp lệ.",
    `static void swap(int *a, int *b) {
    IMPLEMENT
}

int main(void) {
    int x, y;
    if (scanf("%d%d", &x, &y) != 2) return 1;
    swap(&x, &y);
    printf("%d %d\\n", x, y);
    return 0;
}`, `int saved = *a;
    *a = *b;
    *b = saved;`, [["Khác nhau","4 9","9 4"],["Số âm","-3 0","0 -3"],["Trùng nhau","7 7","7 7"]],
    ["Lưu *a vào biến tạm trước khi ghi đè.","Gán qua *a và *b để cập nhật biến bên gọi."]);
  add("struct","Mỗi mẫu có nhãn id và điện áp mV. Đọc hai mẫu, in id mẫu có mV lớn hơn. Khi bằng nhau, chọn mẫu đầu.",
    `typedef struct {
    int id;
    int mv;
} Sample;

static int peak_id(const Sample *a, const Sample *b) {
    IMPLEMENT
    return a->id;
}

int main(void) {
    Sample first, second;
    if (scanf("%d%d%d%d", &first.id, &first.mv, &second.id, &second.mv) != 4) return 1;
    printf("%d\\n", peak_id(&first, &second));
    return 0;
}`, "if (b->mv > a->mv) return b->id;", [["Mẫu đầu cao hơn","10 300 11 200","10"],["Mẫu sau cao hơn","10 300 11 600","11"],["Cùng mV","19 500 20 500","19"]],
    ["Dùng -> để đọc trường qua con trỏ.","Xử lý trường hợp mV của b lớn hơn một cách nghiêm ngặt."]);
  add("buffers","Hoàn thành thao tác thêm vào FIFO dung lượng sử dụng 3. Chương trình báo từ chối (D) khi đầy, rồi đọc các phần tử theo thứ tự.",
    `enum { CAP = 4 };
static int data[CAP];
static unsigned head, tail;

static bool push(int value) {
    IMPLEMENT
    return false;
}

int main(void) {
    int n, value;
    if (scanf("%d", &n) != 1) return 1;
    while (n-- > 0) {
        if (scanf("%d", &value) != 1) return 1;
        if (!push(value)) puts("D");
    }
    while (tail != head) {
        printf("%d\\n", data[tail]);
        tail = (tail + 1U) % CAP;
    }
    return 0;
}`, `unsigned next = (head + 1U) % CAP;
    if (next == tail) return false;
    data[head] = value;
    head = next;
    return true;`, [["Rỗng","0",""],["Một byte","1 9","9"],["Vừa đầy","3 8 6 5","8\n6\n5"],["Tràn","5 1 2 3 4 5","D\nD\n1\n2\n3"]],
    ["Tính vị trí head tiếp theo trước khi ghi.","Nếu next trùng tail, giữ nguyên head và báo false."]);
  exercises.buffers.solution = exercises.buffers.solution.replace("return true;\n    return false;", "return true;");
  add("allocation","Cấp phát n số nguyên bằng calloc, cộng n giá trị nhập, rồi giải phóng. Nếu cấp phát thất bại, chương trình cần trả mã khác 0.",
    `int main(void) {
    size_t n;
    if (scanf("%zu", &n) != 1 || n == 0 || n > 32) return 1;
    int *values = NULL;
    IMPLEMENT
    int sum = 0;
    for (size_t i = 0; i < n; ++i) {
        int value;
        if (scanf("%d", &value) != 1) {
            free(values);
            return 1;
        }
        if (values) values[i] = value;
    }
    if (values) {
        for (size_t i = 0; i < n; ++i) sum += values[i];
    }
    printf("%d\\n", sum);
    free(values);
    return 0;
}`, `values = calloc(n, sizeof *values);
    if (values == NULL) return 1;`, [["Một phần tử","1 19","19"],["Có số âm","4 9 3 -4 12","20"],["Tổng bằng không","2 -9 9","0"]],
    ["calloc nhận số phần tử rồi kích thước mỗi phần tử.","Xử lý NULL ngay sau cấp phát."], "#include <stdlib.h>\n");
  add("encoding","Ghép hai byte thành số 16 bit theo thứ tự byte cao trước, rồi in hệ 16 gồm bốn chữ số viết hoa.",
    `int main(void) {
    unsigned hi, lo;
    if (scanf("%u%u", &hi, &lo) != 2) return 1;
    uint16_t value = 0;
    IMPLEMENT
    printf("%04X\\n", (unsigned)value);
    return 0;
}`, "value = (uint16_t)(((uint16_t)hi << 8) | lo);",
    [["Hai byte khác nhau","18 52","1234"],["Byte cao bằng 0","0 255","00FF"],["Đầy bit","255 255","FFFF"]],
    ["Dịch byte cao sang trái 8 bit.","OR với byte thấp."]);
  add("masks","Đặt bit có chỉ số bit trong reg, giữ các bit còn lại. bit nằm trong 0–7. In giá trị cuối ở hệ 16.",
    `int main(void) {
    unsigned reg, bit;
    if (scanf("%u%u", &reg, &bit) != 2) return 1;
    IMPLEMENT
    printf("%02X\\n", reg);
    return 0;
}`, "reg |= 1U << bit;", [["Bit giữa","5 5","25"],["Bit cuối","0 7","80"],["Đã bật","255 0","FF"]],
    ["Tạo mặt nạ từ 1U dịch trái.","OR chỉ đặt bit đã chọn, giữ nguyên các vị trí khác."]);
  add("gpio","Mô phỏng thanh ghi hướng và đầu ra. Khi on bằng 1, đặt đường GPIO bit 5 làm đầu ra mức cao. Khi on bằng 0, vẫn đặt hướng nhưng xóa bit mức. Giữ mọi bit khác.",
    `int main(void) {
    unsigned ddr, port, on;
    if (scanf("%u%u%u", &ddr, &port, &on) != 3) return 1;
    IMPLEMENT
    printf("%02X %02X\\n", ddr, port);
    return 0;
}`, `unsigned mask = 1U << 5;
    ddr |= mask;
    if (on) port |= mask;
    else port &= ~mask;`, [["Bật từ đầu","0 0 1","20 20"],["Tắt bit 5","5 255 0","25 DF"],["Giữ bit khác","255 4 1","FF 24"]],
    ["Hướng luôn dùng OR với mặt nạ bit 5.","Mức thấp cần AND với mặt nạ đảo."]);
  add("timer","Số đếm tick đi từ 0 đến top. Với mỗi tick dài us micro giây, in khoảng thời gian giữa hai sự kiện so khớp CTC. top từ 0 đến 65535, us từ 1 đến 100.",
    `int main(void) {
    unsigned top, us;
    if (scanf("%u%u", &top, &us) != 2) return 1;
    unsigned long period = 0;
    IMPLEMENT
    printf("%lu\\n", period);
    return 0;
}`, "period = ((unsigned long)top + 1UL) * us;",
    [["CTC mỗi ms","249 4","1000"],["Một tick","0 4","4"],["Timer 16 bit đầy thang","65535 100","6553600"]],
    ["Bộ đếm bao gồm cả tick số 0.","Mở rộng kiểu trước khi cộng một tick."]);
  add("adc","Đổi mã ADC 0–1023 thành giá trị mV ước lượng bằng code × vref / 1024. vref từ 1000 đến 5000 mV. Làm tròn xuống theo phép chia nguyên.",
    `int main(void) {
    unsigned code, vref;
    if (scanf("%u%u", &code, &vref) != 2) return 1;
    unsigned long mv = 0;
    IMPLEMENT
    printf("%lu\\n", mv);
    return 0;
}`, "mv = (unsigned long)code * vref / 1024UL;",
    [["Bằng 0","0 5000","0"],["Giữa thang","512 5000","2500"],["Gần cực đại","1023 3300","3296"]],
    ["Dùng kiểu đủ rộng trước khi nhân.","Chia cho số lượng mức 1024."]);
  add("scheduling","Mô phỏng bộ đếm tick uint32_t. In CHAY nếu thời gian modulo giữa then và now lớn hơn hoặc bằng period, ngược lại in DOI. Khoảng thực đã qua nhỏ hơn một chu kỳ bộ đếm.",
    `#include <inttypes.h>
int main(void) {
    uint32_t then, now, period;
    if (scanf("%" SCNu32 " %" SCNu32 " %" SCNu32, &then, &now, &period) != 3) return 1;
    bool due = false;
    IMPLEMENT
    puts(due ? "CHAY" : "DOI");
    return 0;
}`, "due = (uint32_t)(now - then) >= period;",
    [["Chưa đủ","100 104 5","DOI"],["Đúng hạn","100 105 5","CHAY"],["Qua điểm quấn","4294967293 2 5","CHAY"],["Qua điểm quấn, còn sớm","4294967293 1 5","DOI"]],
    ["Lấy now trừ then trong số không dấu 32 bit.","Chỉ so sánh khoảng thời gian, không so trực tiếp thứ tự now và then."]);
  add("state-machines","Theo dõi trạng thái cảnh báo. Mẫu từ 70 trở lên đưa BINH_THUONG sang CHO. Hai mẫu cao liên tiếp đưa CHO sang BAO_DONG. Mọi mẫu thấp đưa về BINH_THUONG.",
    `typedef enum { NORMAL, PENDING, ALARM } State;

static State update(State current, int sample) {
    IMPLEMENT
    return current;
}

int main(void) {
    State current = NORMAL;
    int sample;
    while (scanf("%d", &sample) == 1) current = update(current, sample);
    const char *labels[] = {"BINH_THUONG", "CHO", "BAO_DONG"};
    puts(labels[current]);
    return 0;
}`, `if (sample < 70) return NORMAL;
    if (current == NORMAL) return PENDING;
    if (current == PENDING) return ALARM;`,
    [["Một mẫu cao","70","CHO"],["Hai mẫu cao","70 71","BAO_DONG"],["Đặt lại","74 80 69","BINH_THUONG"],["Mẫu không liên tiếp","75 60 80","CHO"]],
    ["Kiểm mẫu thấp đầu tiên để đặt lại ở mọi trạng thái.","Hai trạng thái đầu có bước chuyển khi tiếp tục nhận mẫu cao."]);
  add("testing","Hoàn thành hàm tìm phần tử theo chỉ số. Chỉ đọc khi 0 <= index < length. In LOI nếu index không hợp lệ.",
    `static bool read_at(const int *arr, int length, int index, int *value) {
    IMPLEMENT
    return false;
}

int main(void) {
    const int data[] = {21, 45, 89};
    int index, value;
    if (scanf("%d", &index) != 1) return 1;
    if (read_at(data, 3, index, &value)) printf("%d\\n", value);
    else puts("LOI");
    return 0;
}`, `if (index >= 0 && index < length) {
        *value = arr[index];
        return true;
    }`,
    [["Phần tử đầu","0","21"],["Phần tử cuối","2","89"],["Ngay sau cuối","3","LOI"],["Số âm","-1","LOI"]],
    ["Chỉ truy cập mảng sau khi cả hai cận được xác nhận.","Ghi kết quả qua con trỏ value rồi trả true."]);

  projects.push(
    {id:"calculator",icon:"terminal",level:"Bắt đầu",title:"Máy tính và đổi nhiệt độ",summary:"Tách xử lý nhập xuất khỏi logic tính toán để mỗi phép toán có thể kiểm độc lập.",needs:["io","branches","functions"],steps:["Tạo thực đơn lặp gồm cộng, trừ, nhân, chia và đổi Celsius sang Fahrenheit. Viết riêng hàm cho mỗi phép tính.", "Đọc một dòng bằng fgets rồi phân tích. Báo mã lệnh lạ, dòng rỗng và giá trị vượt miền theo cách nhất quán.", "Quy định phép chia dùng số nguyên hay số thực. Trả trạng thái lỗi khi chia cho 0. Đưa logic thuần vào calc.c với calc.h.", "Kiểm từng hàm với giá trị thường, giá trị âm và giới hạn đã công bố. Kiểm nhập lại sau một dòng sai."], checks:["Đổi 0 °C thành 32 °F và -40 °C thành -40 °F.", "Chia 7 cho 0 trả lỗi và vòng lặp vẫn chờ lệnh tiếp.", "Chạy lệnh thoát và chương trình trả mã 0."]},
    {id:"students",icon:"file",level:"Trung cấp",title:"Danh sách học viên và lưu tệp",summary:"Dùng struct, mảng và tệp để tạo một chương trình quản lý có thể khôi phục dữ liệu.",needs:["struct","allocation","text-files","binary-files"],steps:["Dùng struct Student lưu mã, tên có sức chứa cố định và điểm. Định nghĩa rõ miền điểm, mã duy nhất và giới hạn chiều dài tên.", "Thêm, tìm theo mã và liệt kê. Bắt đầu với mảng cố định. Thử mở rộng bằng realloc với biến tạm và kiểm giới hạn phép nhân.", "Chọn CSV với quy tắc trường rõ ràng hoặc nhị phân có chữ ký và phiên bản. Đọc lại từng bản ghi, từ chối dữ liệu sai trước khi ghi vào bộ nhớ.", "Chạy bản build trên máy tính. Viết tệp mới, xác nhận đóng thành công, rồi mới thay bản cũ nếu cần lưu an toàn."],checks:["Mã trùng trả lỗi rõ ràng.", "Tệp rỗng cho danh sách rỗng. Dòng hỏng không gây ghi quá sức chứa.", "Thêm ba bản ghi, khởi động lại và đọc đúng điểm của cả ba."]},
    {id:"register",icon:"grid",level:"Trung cấp",title:"Mô phỏng thanh ghi điều khiển",summary:"Viết API đặt bit, xóa cờ và thay trường cấu hình rồi xác nhận ở từng biên.",needs:["binary","masks","gpio"],steps:["Tạo kiểu uint8_t cho thanh ghi hướng và đầu ra. Viết API cấu hình từng chân. Từ chối chỉ số ngoài 0–7.", "Chia thanh ghi điều khiển thành trường 3 bit và các bit độc lập. Ghi giá trị mới bằng xóa trường cũ rồi OR.", "Mô phỏng cờ ghi 1 để xóa bằng một hàm tách biệt. So sánh kết quả ghi một mặt nạ với cách đọc–sửa–ghi.", "Soạn bảng đầu vào và chạy với giá trị biên. Lưu ảnh hoặc bản ghi trạng thái trước và sau khi thay đổi."],checks:["Chuyển bit 5 sang output giữ nguyên bit 0 và 2.", "Thay trường 3 bit bằng 0 và 7, từ chối 8.", "Xóa một cờ mà hai cờ còn lại vẫn được giữ."]},
    {id:"logger",icon:"radio",level:"Nâng cao",title:"Máy ghi mẫu qua UART",summary:"Lấy mẫu ADC theo định kỳ và truyền kết quả bằng một giao thức có quy ước.",needs:["timer","adc","uart","buffers","interrupts"],steps:["Chọn board ATmega328P và kiểm clock thật. Cấu hình Timer CTC sinh tick cùng UART 9600 8N1. Đo chu kỳ tick và một byte 0x55.", "Dùng tick để kích hoạt lấy mẫu theo kỳ. Chuyển mã ADC sang mV trong mô-đun C thuần. Dùng tham chiếu xác định và ghi rõ công thức.", "Thiết kế khung ASCII tối đa 32 byte hoặc gói nhị phân có độ dài và checksum. Nhận byte qua FIFO. Nêu chính sách khi đầy và báo số byte mất.", "Đưa log về máy tính, thử mẫu biên, đổi baud sai và ngắt đầu vào. Ghi lại kết quả đo cùng phiên bản phần mềm."],checks:["Đo tick gần giá trị tính và giải thích dung sai clock.", "Bộ đệm giữ đúng thứ tự qua điểm quấn. Khi đầy, có bộ đếm lỗi.", "Mất tín hiệu đầu vào không khóa vòng lặp chính."]},
    {id:"capstone",icon:"cpu",level:"Nâng cao",title:"Bộ giám sát cảm biến theo deadline",summary:"Ghép driver, lịch, máy trạng thái và kiểm thử thành một firmware có bằng chứng vận hành.",needs:["drivers","scheduling","coordination","state-machines","testing"],steps:["Đặt mục tiêu lấy mẫu 10 ms, cập nhật trạng thái 20 ms và gửi báo cáo 100 ms. Công bố chính sách khi trễ hoặc mất mẫu.", "Viết logic NORMAL/PENDING/ALARM với hysteresis, lỗi cảm biến và lệnh xóa cảnh báo. Kiểm bảng chuyển trên máy tính trước.", "Triển khai lịch hợp tác trên AVR hoặc dùng RTOS trên board Cortex-M phù hợp. Khi dùng RTOS, ưu tiên và stack mỗi tác vụ cần có lý do. ISR chỉ phát sự kiện theo API đích.", "Dùng xung GPIO hoặc trace đo jitter, thời gian ISR và độ trễ khi UART tải cao. Ghi nguyên nhân reset và chiến lược watchdog. Nộp sơ đồ, cách build và bảng kiểm."],checks:["Một mẫu cao chưa phát cảnh báo, mẫu cao bền đủ điều kiện mới đổi trạng thái.", "Báo mất mẫu và phục hồi theo quy định.", "Kết quả đo dưới tải xác nhận deadline hoặc chỉ ra chính xác trường hợp vi phạm."]}
  );
})();

