// Full ATmega328P Embedded C Curriculum v5 (Rich 13 Quick Guides + Problem-First + Line-by-Line Visualizer)
window.COURSE = {
  "modules": [
    {
      "id": "m1_arith",
      "phase": "Giai đoạn 1 · Nền tảng C & Kiến trúc ATmega328P",
      "code": "01",
      "name": "Arithmetic Edge Cases (Tràn số & SREG AVR)",
      "ewName": "Arithmetic Edge Cases",
      "brochureMap": "Brochure M1, M2, M10 (Kiểu dữ liệu, Toán tử, Bẫy 16-bit int trên AVR)",
      "desc": "Đưa lên đầu lộ trình vì ATmega328P là vi điều khiển 8-bit (kiểu int chỉ rộng 16-bit). Hiểu tràn số, cờ Carry trong SREG và bẫy signed/unsigned giúp tránh bug phần cứng từ gốc."
    },
    {
      "id": "m2_bitwise",
      "phase": "Giai đoạn 2 · Làm chủ Thanh ghi & Bit-Level ATmega328P",
      "code": "02",
      "name": "Bitwise Operations (Thao tác Bit trên GPIO/SREG)",
      "ewName": "Bitwise Operations",
      "brochureMap": "Brochure M9, M10, M11 (Bitwise, MMIO, GPIO DDRx/PORTx/PINx)",
      "desc": "Nền tảng điều khiển phần cứng trực tiếp trên thanh ghi 8-bit DDRB/PORTB/PINB và SREG của ATmega328P mà không làm hỏng các bit lân cận."
    },
    {
      "id": "m3_bitfield",
      "phase": "Giai đoạn 2 · Làm chủ Thanh ghi & Bit-Level ATmega328P",
      "code": "03",
      "name": "Bit Field Operations (Trường Bit Timer/UART/ADC)",
      "ewName": "Bit Field Operations",
      "brochureMap": "Brochure M9, M11 (Cấu hình ngoại vi UBRR0, TCCR0A/B, ADMUX)",
      "desc": "Trích xuất, xóa, thay thế và đóng gói nhiều trường bit cấu hình (Prescaler, Baud Rate, ADC Channel) trong thanh ghi 8-bit, 16-bit và gói 32-bit."
    },
    {
      "id": "m4_bitrot",
      "phase": "Giai đoạn 2 · Làm chủ Thanh ghi & Bit-Level ATmega328P",
      "code": "04",
      "name": "Bitwise Rotation & Counting (Xoay & Đếm Bit)",
      "ewName": "Bitwise Rotation and Counting",
      "brochureMap": "Brochure M9, M11 (SPI LSB/MSB, Đảo bit, Kiểm tra Parity/Power-of-2)",
      "desc": "Kỹ thuật xoay thanh ghi vòng (ROL/ROR), đảo thứ tự bit cho truyền thông SPI, đếm bit 1 (popcount) và kiểm tra lũy thừa bậc 2 tối ưu kích thước buffer."
    },
    {
      "id": "m5_array",
      "phase": "Giai đoạn 3 · Bộ nhớ SRAM, Con trỏ & Kiến trúc Dữ liệu",
      "code": "05",
      "name": "Array Manipulation (Mảng & Bộ lọc Cảm biến SRAM)",
      "ewName": "Array Manipulation",
      "brochureMap": "Brochure M4 (Mảng 1D/2D, Bộ đệm gói tin & Lọc nhiễu ADC)",
      "desc": "Xử lý mảng tại chỗ (in-place) tiết kiệm 2 KB SRAM của ATmega328P: kiểm tra Checksum khung truyền, cửa sổ trượt lọc nhiễu ADC, tuần tự hóa buffer."
    },
    {
      "id": "m6_pointer",
      "phase": "Giai đoạn 3 · Bộ nhớ SRAM, Con trỏ & Kiến trúc Dữ liệu",
      "code": "06",
      "name": "Pointer & Function Dispatch (Con trỏ, MMIO & FSM)",
      "ewName": "Pointer",
      "brochureMap": "Brochure M3, M5, M10, M12 (Con trỏ, MMIO, Bảng hàm & Lập lịch RTOS)",
      "desc": "Con trỏ địa chỉ SRAM/I/O (0x0020–0x08FF), con trỏ kép, void*, và đặc biệt là Function Pointer Dispatch Table / State Machine cho lập lịch tác vụ trên AVR."
    },
    {
      "id": "m7_struct",
      "phase": "Giai đoạn 4 · Ánh xạ Thanh ghi & Gói tin Ngoại vi",
      "code": "07",
      "name": "Structures (Struct, Bitfield & Gói tin Cảm biến)",
      "ewName": "Structures",
      "brochureMap": "Brochure M6, M10, M11 (Struct, Padding AVR 8-bit, UART Frame)",
      "desc": "Tổ chức dữ liệu cảm biến, phủ Struct Bitfield lên thanh ghi ATmega328P và hiểu tại sao AVR 8-bit không có padding 4-byte như ARM 32-bit."
    },
    {
      "id": "m8_union",
      "phase": "Giai đoạn 4 · Ánh xạ Thanh ghi & Gói tin Ngoại vi",
      "code": "08",
      "name": "Unions (Overlay Thanh ghi, Giải mã ADC & Float UART)",
      "ewName": "Unions",
      "brochureMap": "Brochure M6, M11 (Union + Bitfield, Truyền Float/32-bit qua Byte Stream)",
      "desc": "Truy cập cùng một vùng nhớ vừa theo toàn thanh ghi (raw byte) vừa theo từng bitfield, hoặc tách float/uint32_t thành byte truyền qua USART0."
    },
    {
      "id": "m9_ringbuf",
      "phase": "Giai đoạn 5 · Bộ đệm Ngắt (ISR), Chuỗi UART & Xử lý Dữ liệu",
      "code": "09",
      "name": "Circular Buffers & Stack (Bộ đệm vòng UART thay malloc)",
      "ewName": "Circular Buffers and Stack",
      "brochureMap": "Brochure M7 (Static Ring Buffer thay Dynamic malloc!) & M11 (ISR RX)",
      "desc": "Thay thế cấp phát động malloc/free nguy hiểm trên 2 KB SRAM bằng bộ đệm vòng lock-free chia sẻ giữa ngắt USART_RX_vect và main(), cùng cấu trúc Stack."
    },
    {
      "id": "m10_string",
      "phase": "Giai đoạn 5 · Bộ đệm Ngắt (ISR), Chuỗi UART & Xử lý Dữ liệu",
      "code": "10",
      "name": "Strings & Character Handling (Parser AT/Shell & NMEA GPS)",
      "ewName": "Strings and Character Handling",
      "brochureMap": "Brochure M4, M8, M13 (Chuỗi không dùng malloc, Shell CLI & GPS Parser)",
      "desc": "Tự viết strlen/strcpy/strcmp/atoi siêu nhẹ tiết kiệm Flash, xây dựng bộ phân tích lệnh Shell qua UART và giải mã chuỗi tọa độ GPS NMEA."
    },
    {
      "id": "m11_convert",
      "phase": "Giai đoạn 6 · Thuật toán Nhúng, Mã hóa & Gỡ lỗi/Phỏng vấn",
      "code": "11",
      "name": "Data Conversion & Encoding (Endianness & Không dùng sprintf)",
      "ewName": "Data Conversion and Encoding",
      "brochureMap": "Brochure M8, M13 (In debug UART không tốn 2 KB Flash cho printf/sprintf)",
      "desc": "Chuyển đổi Little/Big Endian (AVR↔Mạng/SPI) và tự viết bộ chuyển đổi Nhị phân/Thập phân/Hex siêu gọn thay thế sprintf/strtol."
    },
    {
      "id": "m12_sort",
      "phase": "Giai đoạn 6 · Thuật toán Nhúng, Mã hóa & Gỡ lỗi/Phỏng vấn",
      "code": "12",
      "name": "Searching & Sorting (Bảng tra NTC PROGMEM & Lọc Trung vị)",
      "ewName": "Searching and Sorting",
      "brochureMap": "Brochure M4, M13 (Tìm kiếm nhị phân LUT & Lọc nhiễu xung Median Filter)",
      "desc": "Tìm kiếm nhị phân trên bảng tra nhiệt độ NTC lưu trong Flash PROGMEM, sắp xếp tại chỗ làm bộ lọc trung vị (Median Filter) loại nhiễu gai ADC."
    }
  ],
  "lessons": [
    {
      "id": 1,
      "type": "task",
      "ewTitle": "Carry Flag in 8-bit Addition",
      "title": "Cờ nhớ Carry (SREG.C) khi cộng 8-bit trên AVR",
      "moduleId": "m1_arith",
      "brochureRef": "Brochure M2 & M11 (ALU & SREG)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SREG",
        "SRAM"
      ],
      "summary": "Phát hiện tràn 8-bit (cờ Carry) bằng uint16_t khi cộng hai thanh ghi uint8_t trên ATmega328P.",
      "filename": "avr_carry_8bit.c",
      "lines": [
        {
          "code": "#include <stdint.h>",
          "phase": "SETUP",
          "explain": "Nạp thư viện kiểu nguyên cố định kích thước chuẩn C99. Trên ATmega328P (8-bit AVR), luôn dùng uint8_t/uint16_t thay cho int để kiểm soát chính xác độ rộng thanh ghi.",
          "cards": [
            [
              "MCU",
              "ATmega328P (8-bit)",
              "blue"
            ],
            [
              "SRAM",
              "2 KB (0x0100)",
              "purple"
            ],
            [
              "int size",
              "16-bit (2 byte)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "SREG (0x3F)",
            "val": 0,
            "prev": 0,
            "mask": 1,
            "labels": [
              "I",
              "T",
              "H",
              "S",
              "V",
              "N",
              "Z",
              "C"
            ],
            "note": "Bit 0 của SREG là cờ Carry (C)"
          }
        },
        {
          "code": "uint8_t a = 200, b = 100;",
          "phase": "SETUP",
          "explain": "Khởi tạo hai biến không dấu 8 bit. a nhận 200 (0xC8) và b nhận 100 (0x64). Trình biên dịch chọn cách giữ các giá trị khi build.",
          "cards": [
            [
              "a",
              "200 (0xC8)",
              "blue"
            ],
            [
              "b",
              "100 (0x64)",
              "blue"
            ],
            [
              "Max uint8_t",
              "255 (0xFF)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "a = 0xC8 (200)",
            "val": 200,
            "prev": 0,
            "mask": 255,
            "labels": [
              "b7",
              "b6",
              "b5",
              "b4",
              "b3",
              "b2",
              "b1",
              "b0"
            ],
            "note": "Giá trị 200 trong thanh ghi 8-bit"
          }
        },
        {
          "code": "uint16_t sum = (uint16_t)a + b;",
          "phase": "EXECUTION",
          "explain": "Phép cộng cho 300 (0x012C), vừa kiểu uint16_t. Chuyển toán hạng trước khi tính là thói quen hữu ích khi kiểu trung gian có thể quá nhỏ.",
          "cards": [
            [
              "sum (16-bit)",
              "300 (0x012C)",
              "green"
            ],
            [
              "Byte thấp",
              "44 (0x2C)",
              "amber"
            ],
            [
              "Bit 8 (Carry)",
              "1",
              "rose"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "sum (uint16_t)",
            "val": 300,
            "prev": 200,
            "mask": 256,
            "labels": [],
            "note": "Bit 8 = 1 cho biết phép cộng 8-bit đã sinh cờ nhớ Carry",
            "op": "ALU ADD (+)"
          }
        },
        {
          "code": "uint8_t result = (uint8_t)sum;",
          "phase": "EXECUTION",
          "explain": "Cắt lấy 8 bit thấp (300 mod 256 = 44 = 0x2C). Đây chính là giá trị mà lệnh ADD 8-bit của AVR ghi vào thanh ghi đích.",
          "cards": [
            [
              "result",
              "44 (0x2C)",
              "amber"
            ],
            [
              "Tràn 8-bit?",
              "CÓ (300 > 255)",
              "rose"
            ],
            [
              "SREG.C",
              "1",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "result (8-bit)",
            "val": 44,
            "prev": 200,
            "mask": 255,
            "labels": [
              "b7",
              "b6",
              "b5",
              "b4",
              "b3",
              "b2",
              "b1",
              "b0"
            ],
            "note": "Kết quả wrap-around về 44 (0x2C)"
          }
        },
        {
          "code": "uint8_t carry = (sum > 0xFF) ? 1 : 0;",
          "phase": "OUTPUT",
          "explain": "Kiểm tra tổng lớn hơn 255 để tính cờ nhớ của phép cộng 8 bit. Trình biên dịch có thể chọn nhiều mã máy khác nhau, nên hãy xem đúng lệnh ADD nếu cần quan sát SREG.C.",
          "cards": [
            [
              "carry",
              "1",
              "green"
            ],
            [
              "result",
              "44 (0x2C)",
              "blue"
            ],
            [
              "SREG.C",
              "SET (1)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "SREG (C=1)",
            "val": 1,
            "prev": 0,
            "mask": 1,
            "labels": [
              "I",
              "T",
              "H",
              "S",
              "V",
              "N",
              "Z",
              "C"
            ],
            "note": "Cờ Carry (bit 0) được bật lên 1"
          }
        }
      ],
      "remember": "Trong C trên AVR, để phát hiện cờ nhớ Carry khi cộng 2 số uint8_t, hãy nâng lên uint16_t trước rồi kiểm tra (sum > 0xFF) hoặc (uint8_t)(a + b) < a.",
      "pitfall": "Nếu viết uint8_t s = a + b; rồi kiểm tra (s > 255) thì biểu thức luôn SAI (trình biên dịch avr-gcc tối ưu xóa luôn nhánh if) vì uint8_t tối đa chỉ là 255!",
      "tests": [
        "+ a=200, b=100 → sum=300, result=44 (0x2C), carry=1",
        "+ a=150, b=105 → sum=255, result=255 (0xFF), carry=0",
        "~ Trong Microchip Studio (F11), xem cửa sổ Processor Status để thấy cờ C trong SREG bật màu đỏ."
      ],
      "problem": {
        "scenario": "Bộ đếm xung PD2 lưu hai phần tăng trong SRAM. Tính byte thấp và số nhớ để cộng tiếp byte cao. Đối chiếu SREG.C ngay sau lệnh ADD nếu kiểm bằng disassembly.\n\nBạn có hai số đếm xung 8 bit a và b. Viết hàm cộng hai số uint8_t, trả byte thấp qua con trỏ result và trả 1 nếu tổng lớn hơn 255, ngược lại trả 0. Ví dụ 200 + 100 cho byte thấp 44. Con trỏ đầu ra được giả định hợp lệ.",
        "prototype": "uint8_t add_u8_carry(uint8_t a, uint8_t b, uint8_t *result)",
        "workedExample": [
          "Bước 1: Khởi tạo hai biến 8-bit không dấu (0. (a (R24)=200 (0xC8), b (R25)=100 (0x64))",
          "Bước 2: Ép kiểu lên 16-bit trước khi cộng! Tổng 200 + 100 = 300 (0x012C). (sum (16-bit)=300 (0x012C), Byte thấp=44 (0x2C))",
          "Bước 3: Cắt lấy 8 bit thấp (300 mod 256 = 44 = 0x2C). (result=44 (0x2C), Tràn 8-bit?=CÓ (300 > 255))"
        ],
        "testRows": [
          [
            "Case 1 (Tràn)",
            "a = 200 (0xC8), b = 100 (0x64)",
            "*result = 44 (0x2C), carry = 1 (SREG.C=1)"
          ],
          [
            "Case 2 (Vừa khít)",
            "a = 150, b = 105",
            "*result = 255 (0xFF), carry = 0"
          ],
          [
            "Case 3 (Tràn tối đa)",
            "a = 255, b = 1",
            "*result = 0 (0x00), carry = 1"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SREG, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Dùng điểm dừng sau các lời gọi để kiểm r1 = 44, c1 = 1, r2 = 255 và c2 = 0. Nếu muốn quan sát SREG.C, xem disassembly và dừng ngay sau đúng lệnh cộng 8 bit.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 001: Cờ nhớ Carry (SREG.C) khi cộng 8-bit trên AVR\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: uint8_t add_u8_carry(uint8_t a, uint8_t b, uint8_t *result)\n * ============================================================ */\n\nuint8_t add_u8_carry(uint8_t a, uint8_t b, uint8_t *result) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    uint8_t low1, low2;\n    volatile uint8_t r1, c1, r2, c2;\n    c1 = add_u8_carry(200, 100, &low1);\n    c2 = add_u8_carry(150, 105, &low2);\n\n    r1 = low1;\n    r2 = low2;\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trong C trên AVR, để phát hiện cờ nhớ Carry khi cộng 2 số uint8_t, hãy nâng lên uint16_t trước rồi kiểm tra (sum > 0xFF) hoặc (uint8_t)(a + b) < a.",
        "hint2": "Nếu viết uint8_t s = a + b; rồi kiểm tra (s > 255) thì biểu thức luôn SAI (trình biên dịch avr-gcc tối ưu xóa luôn nhánh if) vì uint8_t tối đa chỉ là 255!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "SREG (0x3F)",
          "val": 0,
          "prev": 0,
          "mask": 1,
          "labels": [
            "I",
            "T",
            "H",
            "S",
            "V",
            "N",
            "Z",
            "C"
          ],
          "note": "Bit 0 của SREG là cờ Carry (C)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "SREG (C=1)",
          "val": 1,
          "prev": 0,
          "mask": 1,
          "labels": [
            "I",
            "T",
            "H",
            "S",
            "V",
            "N",
            "Z",
            "C"
          ],
          "note": "Cờ Carry (bit 0) được bật lên 1"
        }
      }
    },
    {
      "id": 2,
      "type": "task",
      "ewTitle": "Detect Underflow in Unsigned Subtraction",
      "title": "Phát hiện Underflow (mượn bit) khi trừ số không dấu",
      "moduleId": "m1_arith",
      "brochureRef": "Brochure M2 & M10 (An toàn số học)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SREG"
      ],
      "summary": "Kiểm tra tràn âm (unsigned underflow) trước khi trừ hai biến uint8_t, tránh lỗi vòng ngược về 255 trên Timer/Counter.",
      "filename": "avr_underflow.c",
      "lines": [
        {
          "code": "uint8_t ticks = 10, elapsed = 25;",
          "phase": "SETUP",
          "explain": "Giả sử thanh ghi đếm TCNT0 hiện tại là 10, nhưng ta trừ đi 25. Với kiểu không dấu (unsigned), kết quả không thể âm.",
          "cards": [
            [
              "ticks",
              "10 (0x0A)",
              "blue"
            ],
            [
              "elapsed",
              "25 (0x19)",
              "amber"
            ],
            [
              "Kiểu dữ liệu",
              "uint8_t",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "ticks (0x0A)",
            "val": 10,
            "prev": 0,
            "mask": 255,
            "labels": [],
            "note": "Giá trị ban đầu 10"
          }
        },
        {
          "code": "uint8_t underflow = (ticks < elapsed);",
          "phase": "LOGIC",
          "explain": "Luôn kiểm tra điều kiện (a < b) TRƯỚC khi thực hiện phép trừ! Ở đây 10 < 25 là đúng (1) → chắc chắn xảy ra underflow (mượn bit, cờ SREG.C = 1 trên AVR).",
          "cards": [
            [
              "ticks < elapsed",
              "TRUE (1)",
              "rose"
            ],
            [
              "underflow",
              "1",
              "rose"
            ],
            [
              "SREG.C (Borrow)",
              "1",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "SREG (C=1, N=1)",
            "val": 5,
            "prev": 0,
            "mask": 5,
            "labels": [
              "I",
              "T",
              "H",
              "S",
              "V",
              "N",
              "Z",
              "C"
            ],
            "note": "Phép trừ mượn bit làm bật cờ C và N"
          }
        },
        {
          "code": "uint8_t diff = ticks - elapsed;",
          "phase": "EXECUTION",
          "explain": "Phép trừ không dấu bị cuộn tròn modulo 256: (10 - 25) mod 256 = 241 (0xF1). Nếu không kiểm tra underflow, vòng lặp while(diff > 0) sẽ chạy tới 241 lần!",
          "cards": [
            [
              "diff (wrap)",
              "241 (0xF1)",
              "rose"
            ],
            [
              "Mong đợi",
              "0 (clamped)",
              "green"
            ],
            [
              "Nguyên nhân",
              "Modulo 256",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "diff = 0xF1 (241)",
            "val": 241,
            "prev": 10,
            "mask": 255,
            "labels": [],
            "note": "Underflow làm giá trị nhảy vọt lên 241"
          }
        },
        {
          "code": "uint8_t safe_diff = underflow ? 0 : diff;",
          "phase": "OUTPUT",
          "explain": "Áp dụng kỹ thuật Saturating Arithmetic (bão hòa về 0) thay vì để wrap-around. Rất quan trọng khi tính thời gian còn lại hoặc xung PWM.",
          "cards": [
            [
              "safe_diff",
              "0 (0x00)",
              "green"
            ],
            [
              "underflow",
              "1 (đã chặn)",
              "green"
            ],
            [
              "An toàn MISRA",
              "Đạt",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "safe_diff = 0x00",
            "val": 0,
            "prev": 241,
            "mask": 255,
            "labels": [],
            "note": "Giá trị được bão hòa an toàn về 0"
          }
        }
      ],
      "remember": "Không bao giờ viết vòng lặp ngược `for(uint8_t i = n; i >= 0; i--)` vì khi i=0 giảm đi 1 sẽ underflow thành 255 → vòng lặp vô tận!",
      "pitfall": "Bẫy kinh điển trên ATmega328P: trừ hai mốc thời gian TCNT0 khi Timer vừa tràn (wrap) lại CẦN tận dụng phép trừ không dấu `(uint8_t)(now - prev)` để ra đúng khoảng thời gian!",
      "tests": [
        "+ ticks=10, elapsed=25 → underflow=1, raw diff=241, safe_diff=0",
        "+ ticks=50, elapsed=20 → underflow=0, safe_diff=30",
        "~ Với Timer wrap-around: (uint8_t)(5 - 250) = 11 ticks chính xác!"
      ],
      "problem": {
        "scenario": "Vòng đọc PD2 dùng bộ đếm tick 8 bit. Tách kết quả phép trừ theo modulo khỏi tín hiệu a < b báo cần mượn.\n\nTrong bộ đếm thời gian timeout cho cảm biến siêu âm HC-SR04 trên ATmega328P, bạn cần trừ thời gian đã trôi qua `elapsed` khỏi quỹ thời gian còn lại `ticks` (cả hai đều là `uint8_t`). Nếu `elapsed > ticks`, phép trừ không dấu sẽ bị underflow nhảy vọt lên gần 255 khiến hệ thống bị treo chờ quá lâu. Hãy viết hàm trừ bão hòa (saturating subtract): nếu underflow thì trả về `0` và báo cờ `*underflow = 1`.",
        "prototype": "uint8_t sub_u8_safe(uint8_t ticks, uint8_t elapsed, uint8_t *underflow)",
        "workedExample": [
          "Bước 1: Giả sử thanh ghi đếm TCNT0 hiện tại là 10, nhưng ta trừ đi 25. (ticks=10 (0x0A), elapsed=25 (0x19))",
          "Bước 2: Luôn kiểm tra điều kiện (a < b) TRƯỚC khi thực hiện phép trừ! Ở đây 10 < 25 là đúng (1) → chắc chắn xảy ra underflow (mượn bit, cờ SREG. (ticks < elapsed=TRUE (1), underflow=1)",
          "Bước 3: Phép trừ không dấu bị cuộn tròn modulo 256: (10 - 25) mod 256 = 241 (0xF1). (diff (wrap)=241 (0xF1), Mong đợi=0 (clamped))"
        ],
        "testRows": [
          [
            "Case 1 (Underflow)",
            "ticks = 10, elapsed = 25",
            "return = 0, *underflow = 1 (raw wrap = 241)"
          ],
          [
            "Case 2 (Bình thường)",
            "ticks = 50, elapsed = 20",
            "return = 30, *underflow = 0"
          ],
          [
            "Case 3 (Bằng nhau)",
            "ticks = 15, elapsed = 15",
            "return = 0, *underflow = 0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SREG), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Soi cửa sổ Watch trong Microchip Studio: `d1 == 0`, `u1 == 1` (chặn được wrap 241); `d2 == 30`, `u2 == 0`.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 002: Phát hiện Underflow (mượn bit) khi trừ số không dấu\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: uint8_t sub_u8_safe(uint8_t ticks, uint8_t elapsed, uint8_t *underflow)\n * ============================================================ */\n\nuint8_t sub_u8_safe(uint8_t ticks, uint8_t elapsed, uint8_t *underflow) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    uint8_t under1, under2;\n    volatile uint8_t u1, d1, u2, d2;\n    d1 = sub_u8_safe(10, 25, &under1);\n    d2 = sub_u8_safe(50, 20, &under2);\n\n    u1 = under1;\n    u2 = under2;\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Không bao giờ viết vòng lặp ngược `for(uint8_t i = n; i >= 0; i--)` vì khi i=0 giảm đi 1 sẽ underflow thành 255 → vòng lặp vô tận!",
        "hint2": "Bẫy kinh điển trên ATmega328P: trừ hai mốc thời gian TCNT0 khi Timer vừa tràn (wrap) lại CẦN tận dụng phép trừ không dấu `(uint8_t)(now - prev)` để ra đúng khoảng thời gian!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "ticks (0x0A)",
          "val": 10,
          "prev": 0,
          "mask": 255,
          "labels": [],
          "note": "Giá trị ban đầu 10"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "safe_diff = 0x00",
          "val": 0,
          "prev": 241,
          "mask": 255,
          "labels": [],
          "note": "Giá trị được bão hòa an toàn về 0"
        }
      }
    },
    {
      "id": 3,
      "type": "task",
      "ewTitle": "Identify Trap in Signed vs Unsigned Comparison",
      "title": "Bẫy so sánh Signed với Unsigned (Usual Arithmetic Conversions)",
      "moduleId": "m1_arith",
      "brochureRef": "Brochure M2 & M10 (MISRA C Rule 10.4)",
      "level": "Cơ bản",
      "duration": "7 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SREG"
      ],
      "summary": "Giải mã tại sao (-1 > 1U) lại trả về ĐÚNG trong C trên ATmega328P do quy tắc ép kiểu ngầm định lên unsigned int (16-bit).",
      "filename": "avr_signed_trap.c",
      "lines": [
        {
          "code": "int16_t temp_c = -1;",
          "phase": "SETUP",
          "explain": "Biến nhiệt độ có dấu 16-bit mang giá trị -1. Trong biểu diễn bù 2 (Two's Complement), -1 là 0xFFFF (toàn bộ 16 bit đều là 1).",
          "cards": [
            [
              "temp_c",
              "-1 (signed)",
              "blue"
            ],
            [
              "Hex bù 2",
              "0xFFFF",
              "purple"
            ],
            [
              "Độ rộng",
              "16-bit",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "temp_c = -1 (0xFFFF)",
            "val": 65535,
            "prev": 0,
            "mask": 32768,
            "labels": [],
            "note": "MSB (bit 15) = 1 biểu thị số âm trong bù 2"
          }
        },
        {
          "code": "uint16_t threshold = 10U;",
          "phase": "SETUP",
          "explain": "Ngưỡng cảnh báo là số không dấu 16-bit: 10 (0x000A).",
          "cards": [
            [
              "threshold",
              "10 (unsigned)",
              "blue"
            ],
            [
              "Hex",
              "0x000A",
              "purple"
            ],
            [
              "Kỳ vọng",
              "-1 < 10",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "threshold = 10 (0x000A)",
            "val": 10,
            "prev": 0,
            "mask": 15,
            "labels": [],
            "note": "Giá trị ngưỡng 10"
          }
        },
        {
          "code": "uint8_t bug = (temp_c > threshold);",
          "phase": "EXECUTION",
          "explain": "BẪY C99! Khi so sánh int16_t với uint16_t, trình biên dịch avr-gcc tự động ép temp_c (-1 = 0xFFFF) thành uint16_t = 65535! Vì 65535 > 10 nên bug = 1 (SAI logic hoàn toàn)!",
          "cards": [
            [
              "temp_c ép kiểu",
              "65535 (0xFFFF)",
              "rose"
            ],
            [
              "65535 > 10",
              "TRUE (BUG!)",
              "rose"
            ],
            [
              "MISRA C",
              "Vi phạm 10.4",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "Ép ngầm: 65535 > 10!",
            "val": 65535,
            "prev": 10,
            "mask": 65535,
            "labels": [],
            "note": "0xFFFF hiểu là unsigned = 65535 > 10!"
          }
        },
        {
          "code": "uint8_t safe = (temp_c >= 0) && ((uint16_t)temp_c > threshold);",
          "phase": "OUTPUT",
          "explain": "Cách sửa chuẩn MISRA C: kiểm tra số có dấu >= 0 trước, sau đó mới ép kiểu tường minh sang uint16_t để so sánh cùng kiểu dữ liệu.",
          "cards": [
            [
              "temp_c >= 0",
              "FALSE (0)",
              "green"
            ],
            [
              "safe",
              "0 (ĐÚNG!)",
              "green"
            ],
            [
              "Short-circuit",
              "Dừng sớm",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Kết quả: safe = 0",
            "val": 0,
            "prev": 1,
            "mask": 1,
            "labels": [],
            "note": "So sánh an toàn trả về FALSE (0)"
          }
        }
      ],
      "remember": "Trong C, khi trộn signed và unsigned cùng độ rộng (int16_t vs uint16_t trên AVR), số signed âm sẽ bị ép thành số unsigned khổng lồ (0xFFFF = 65535).",
      "pitfall": "Trên ATmega328P, kiểu int chỉ có 16-bit (không phải 32-bit như PC/STM32). Bật cờ `-Wall -Wextra -Wsign-compare` trong avr-gcc để bắt lỗi này lúc biên dịch!",
      "tests": [
        "+ temp_c = -1, threshold = 10U → (temp_c > threshold) = 1 (Bẫy!)",
        "+ Cách sửa: (temp_c >= 0) && ((uint16_t)temp_c > threshold) → 0",
        "- Đặc biệt nguy hiểm khi tính sai số PID motor (error âm so với deadband unsigned)."
      ],
      "problem": {
        "scenario": "Mẫu ADC0 đã hiệu chuẩn có thể âm dù ngưỡng cảnh báo là số không dấu. Kiểm mẫu âm trước khi so sánh trên avr-gcc có int 16 bit.\n\nCảm biến nhiệt độ DS18B20 trả về nhiệt độ có dấu `int16_t temp_c` (có thể âm vào mùa đông hoặc trong kho lạnh, ví dụ `-1°C`), trong khi ngưỡng bật quạt làm mát lưu dạng không dấu `uint16_t threshold = 10U`. Nếu viết trực tiếp `if (temp_c > threshold)`, quạt lại BẬT ở `-1°C` do bẫy ép kiểu ngầm của C! Hãy viết hàm so sánh an toàn chuẩn MISRA C để quạt chỉ bật khi `temp_c` thực sự lớn hơn `threshold`.",
        "prototype": "uint8_t is_over_temp(int16_t temp_c, uint16_t threshold)",
        "workedExample": [
          "Bước 1: Biến nhiệt độ có dấu 16-bit mang giá trị -1. (temp_c=-1 (signed), Hex bù 2=0xFFFF)",
          "Bước 2: Ngưỡng cảnh báo là số không dấu 16-bit: 10 (0x000A). (threshold=10 (unsigned), Hex=0x000A)",
          "Bước 3: BẪY C99! Khi so sánh int16_t với uint16_t, trình biên dịch avr-gcc tự động ép temp_c (-1 = 0xFFFF) thành uint16_t = 65535! Vì 65535 > 10 nên bug = 1 (SAI logic hoàn toàn)!. (temp_c ép kiểu=65535 (0xFFFF), 65535 > 10=TRUE (BUG!))"
        ],
        "testRows": [
          [
            "Case 1 (Nhiệt độ âm)",
            "temp_c = -1, threshold = 10U",
            "return = 0 (KHÔNG bật quạt!)"
          ],
          [
            "Case 2 (Quá nhiệt)",
            "temp_c = 35, threshold = 30U",
            "return = 1 (Bật quạt)"
          ],
          [
            "Case 3 (Âm sâu)",
            "temp_c = -32768, threshold = 0U",
            "return = 0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SREG), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Kiểm tra Watch: `fan1 == 0`, `fan2 == 1`. Thử so sánh với biểu thức lỗi `(-1 > 10U)` để thấy avr-gcc đánh giá nó bằng 1!",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 003: Bẫy so sánh Signed với Unsigned (Usual Arithmetic Conversions)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: uint8_t is_over_temp(int16_t temp_c, uint16_t threshold)\n * ============================================================ */\n\nuint8_t is_over_temp(int16_t temp_c, uint16_t threshold) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    volatile uint8_t fan1 = is_over_temp(-1, 10U);\n    volatile uint8_t fan2 = is_over_temp(35, 30U);\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trong C, khi trộn signed và unsigned cùng độ rộng (int16_t vs uint16_t trên AVR), số signed âm sẽ bị ép thành số unsigned khổng lồ (0xFFFF = 65535).",
        "hint2": "Trên ATmega328P, kiểu int chỉ có 16-bit (không phải 32-bit như PC/STM32). Bật cờ `-Wall -Wextra -Wsign-compare` trong avr-gcc để bắt lỗi này lúc biên dịch!",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "temp_c = -1 (0xFFFF)",
          "val": 65535,
          "prev": 0,
          "mask": 32768,
          "labels": [],
          "note": "MSB (bit 15) = 1 biểu thị số âm trong bù 2"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Kết quả: safe = 0",
          "val": 0,
          "prev": 1,
          "mask": 1,
          "labels": [],
          "note": "So sánh an toàn trả về FALSE (0)"
        }
      }
    },
    {
      "id": 4,
      "type": "task",
      "ewTitle": "Add Signed and Unsigned Integers Safely",
      "title": "Cộng an toàn số Signed và Unsigned (Hiệu chỉnh Offset ADC)",
      "moduleId": "m1_arith",
      "brochureRef": "Brochure M2 & M10 (Xử lý Offset cảm biến)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "ADC",
        "SRAM"
      ],
      "summary": "Cộng một giá trị hiệu chỉnh có dấu (calibration offset, int16_t) vào kết quả đọc ADC không dấu (uint16_t) mà không bị tràn hay lật dấu.",
      "filename": "avr_safe_add.c",
      "lines": [
        {
          "code": "uint16_t adc_raw = 5; int16_t offset = -12;",
          "phase": "SETUP",
          "explain": "Đọc ADC 10-bit (0..1023) được 5, cần cộng offset hiệu chỉnh zero = -12. Nếu cộng trực tiếp bằng kiểu 16-bit không dấu sẽ bị wrap lên 65529!",
          "cards": [
            [
              "adc_raw",
              "5 (uint16_t)",
              "blue"
            ],
            [
              "offset",
              "-12 (int16_t)",
              "amber"
            ],
            [
              "Kết quả thật",
              "-7 → clamp 0",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "adc_raw = 5",
            "val": 5,
            "prev": 0,
            "mask": 1023,
            "labels": [],
            "note": "Giá trị ADC 10-bit (0..1023)"
          }
        },
        {
          "code": "int32_t acc = (int32_t)adc_raw + (int32_t)offset;",
          "phase": "EXECUTION",
          "explain": "Nâng cả hai toán hạng lên kiểu có dấu rộng hơn (int32_t) trước khi cộng để đảm bảo không bao giờ mất dấu hay tràn số trung gian: 5 + (-12) = -7.",
          "cards": [
            [
              "acc (int32_t)",
              "-7",
              "amber"
            ],
            [
              "Tràn trung gian?",
              "Không",
              "green"
            ],
            [
              "Tốn thanh ghi",
              "4 byte (R22..R25)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "acc = -7 (0xFFF9)",
            "val": 65529,
            "prev": 5,
            "mask": 32768,
            "labels": [],
            "note": "Tổng có dấu chính xác là -7"
          }
        },
        {
          "code": "uint16_t adc_cal = (acc < 0) ? 0 : (acc > 1023 ? 1023 : (uint16_t)acc);",
          "phase": "OUTPUT",
          "explain": "Kẹp (clamp) kết quả vào dải hợp lệ [0, 1023] của bộ ADC 10-bit ATmega328P trước khi ép kiểu ngược về uint16_t.",
          "cards": [
            [
              "adc_cal",
              "0 (0x0000)",
              "green"
            ],
            [
              "Dải hợp lệ",
              "0 .. 1023",
              "blue"
            ],
            [
              "An toàn",
              "100%",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "adc_cal = 0 (Clamped)",
            "val": 0,
            "prev": 65529,
            "mask": 1023,
            "labels": [],
            "note": "Kẹp an toàn về 0 thay vì wrap thành 65529"
          }
        }
      ],
      "remember": "Khi cộng số có dấu và không dấu, luôn nâng lên kiểu có dấu rộng hơn (int32_t) rồi kẹp biên (clamp) trước khi ép về kiểu đích.",
      "pitfall": "Trên AVR 8-bit, phép toán int32_t tốn nhiều chu kỳ CPU hơn int16_t; nếu biết chắc adc_raw <= 1023 và offset trong [-500, 500], có thể dùng int16_t để tiết kiệm chu kỳ.",
      "tests": [
        "+ adc_raw=5, offset=-12 → acc=-7 → adc_cal=0",
        "+ adc_raw=1020, offset=+15 → acc=1035 → adc_cal=1023",
        "+ adc_raw=512, offset=-12 → acc=500 → adc_cal=500"
      ],
      "problem": {
        "scenario": "Đọc mã 10 bit ở PC0/ADC0. Cộng offset bằng kiểu đủ rộng rồi giới hạn kết quả về 0 đến 1023.\n\nBộ ADC 10-bit của ATmega328P đọc cảm biến áp suất trả về `uint16_t adc_raw` (0..1023). Khi hiệu chuẩn điểm 0 (zero calibration), bạn cần cộng thêm hệ số bù có dấu `int16_t offset` (ví dụ `-12` hoặc `+15`). Hãy viết hàm cộng an toàn và kẹp (clamp) kết quả trong đúng dải `[0, 1023]` để không bao giờ bị tràn âm lên `65529` hoặc vượt quá `1023`.",
        "prototype": "uint16_t adc_apply_offset(uint16_t adc_raw, int16_t offset)",
        "workedExample": [
          "Bước 1: Đọc ADC 10-bit (0. (adc_raw=5 (uint16_t), offset=-12 (int16_t))",
          "Bước 2: Nâng cả hai toán hạng lên kiểu có dấu rộng hơn (int32_t) trước khi cộng để đảm bảo không bao giờ mất dấu hay tràn số trung gian: 5 + (-12) = -7. (acc (int32_t)=-7, Tràn trung gian?=Không)",
          "Bước 3: Kẹp (clamp) kết quả vào dải hợp lệ [0, 1023] của bộ ADC 10-bit ATmega328P trước khi ép kiểu ngược về uint16_t. (adc_cal=0 (0x0000), Dải hợp lệ=0 .. 1023)"
        ],
        "testRows": [
          [
            "Case 1 (Kẹp đáy 0)",
            "adc_raw = 5, offset = -12",
            "return = 0 (không wrap thành 65529)"
          ],
          [
            "Case 2 (Kẹp đỉnh 1023)",
            "adc_raw = 1020, offset = +15",
            "return = 1023"
          ],
          [
            "Case 3 (Bình thường)",
            "adc_raw = 512, offset = -12",
            "return = 500"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, ADC, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Kiểm tra Watch: `a1 == 0`, `a2 == 1023`, `a3 == 500`.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 004: Cộng an toàn số Signed và Unsigned (Hiệu chỉnh Offset ADC)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: uint16_t adc_apply_offset(uint16_t adc_raw, int16_t offset)\n * ============================================================ */\n\nuint16_t adc_apply_offset(uint16_t adc_raw, int16_t offset) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    volatile uint16_t a1 = adc_apply_offset(5, -12);\n    volatile uint16_t a2 = adc_apply_offset(1020, 15);\n    volatile uint16_t a3 = adc_apply_offset(512, -12);\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Khi cộng số có dấu và không dấu, luôn nâng lên kiểu có dấu rộng hơn (int32_t) rồi kẹp biên (clamp) trước khi ép về kiểu đích.",
        "hint2": "Trên AVR 8-bit, phép toán int32_t tốn nhiều chu kỳ CPU hơn int16_t; nếu biết chắc adc_raw <= 1023 và offset trong [-500, 500], có thể dùng int16_t để tiết kiệm chu kỳ.",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "adc_raw = 5",
          "val": 5,
          "prev": 0,
          "mask": 1023,
          "labels": [],
          "note": "Giá trị ADC 10-bit (0..1023)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "adc_cal = 0 (Clamped)",
          "val": 0,
          "prev": 65529,
          "mask": 1023,
          "labels": [],
          "note": "Kẹp an toàn về 0 thay vì wrap thành 65529"
        }
      }
    },
    {
      "id": 5,
      "type": "quiz",
      "ewTitle": "Arithmetic Edge Cases-I",
      "title": "Quiz: Tràn số 8-bit/16-bit & Cờ SREG AVR",
      "moduleId": "m1_arith",
      "brochureRef": "Brochure M1 & M2 (Kiểm tra nền tảng)",
      "level": "Nền tảng",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SREG"
      ],
      "summary": "Kiểm tra khả năng dự đoán tràn số uint8_t, kích thước kiểu int trên ATmega328P và cờ Carry.",
      "questions": [
        {
          "q": "Trên ATmega328P (avr-gcc), kích thước của kiểu `int` mặc định là bao nhiêu byte và giá trị tối đa là bao nhiêu?",
          "opts": [
            "4 byte (2,147,483,647)",
            "2 byte (32,767)",
            "1 byte (127)",
            "2 byte (65,535)"
          ],
          "ans": 1,
          "exp": "Với cấu hình avr-gcc thông thường, int có 16 bit, miền -32768 đến 32767. Khi chuyển 40000 sang int có dấu 16 bit, kết quả phụ thuộc triển khai."
        },
        {
          "q": "Cho `uint8_t a = 250; a += 10;`. Giá trị của `a` sau phép cộng là bao nhiêu?",
          "opts": [
            "260",
            "255",
            "4",
            "-6"
          ],
          "ans": 2,
          "exp": "250 + 10 cho 260 sau khi nâng kiểu. Khi gán về uint8_t, kết quả chuyển theo modulo 256 và bằng 4. C không quy định cờ CPU nào còn được giữ."
        },
        {
          "q": "Cho `uint8_t x = 3; x -= 5;`. Giá trị của `x` là bao nhiêu?",
          "opts": [
            "-2",
            "0",
            "254",
            "253"
          ],
          "ans": 2,
          "exp": "Unsigned underflow: (3 - 5) mod 256 = 254 (0xFE)."
        },
        {
          "q": "ADD cộng 0xFF với 0x01. Byte thấp bằng bao nhiêu?",
          "opts": [
            "0x00",
            "0xFF",
            "0x01"
          ],
          "ans": 0,
          "exp": "Tổng 256 cho byte thấp bằng 0."
        }
      ],
      "remember": "Luôn dùng kiểu cố định kích thước trong `<stdint.h>` (`uint8_t`, `int16_t`, `uint32_t`) khi lập trình ATmega328P.",
      "pitfall": "Đừng bao giờ giả định `int` là 32-bit như trên PC hoặc STM32!",
      "avrContext": "Dùng độ rộng kiểu trên ATmega328P để dự đoán giá trị byte lưu trong SRAM. Xem cờ C riêng tại lệnh ADD trong debugger."
    },
    {
      "id": 6,
      "type": "quiz",
      "ewTitle": "Arithmetic Edge Cases-II",
      "title": "Quiz: Bẫy Signed/Unsigned & Integer Promotion",
      "moduleId": "m1_arith",
      "brochureRef": "Brochure M2 & M10 (MISRA C)",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SREG"
      ],
      "summary": "Kiểm tra bẫy so sánh signed-unsigned, dịch bit số có dấu và vòng lặp ngược không dấu.",
      "questions": [
        {
          "q": "Kết quả của biểu thức `(-5 < 5U)` trên ATmega328P là gì?",
          "opts": [
            "1 (Đúng)",
            "0 (Sai)",
            "Lỗi biên dịch",
            "Undefined Behavior"
          ],
          "ans": 1,
          "exp": "Vì `-5` (int 16-bit) bị ép ngầm định sang `unsigned int` thành 65531 (0xFFFB). So sánh 65531 < 5 trả về 0 (Sai)!"
        },
        {
          "q": "Đoạn code `for (uint8_t i = 10; i >= 0; i--) { ... }` sẽ gặp lỗi gì trên ATmega328P?",
          "opts": [
            "Chạy đúng 11 lần",
            "Chạy 10 lần",
            "Vòng lặp vô tận (Infinite Loop)",
            "Lỗi tràn Stack"
          ],
          "ans": 2,
          "exp": "Vì `uint8_t` không bao giờ âm nên điều kiện `i >= 0` luôn ĐÚNG! Khi i=0, i-- trở thành 255 và lặp mãi mãi."
        },
        {
          "q": "Vì sao nên viết `(1U << 15)` thay vì `(1 << 15)` trên ATmega328P?",
          "opts": [
            "Để chạy nhanh hơn",
            "Vì `1` là `int` 16-bit có dấu, dịch vào bit dấu (bit 15) gây Undefined Behavior",
            "Vì avr-gcc không hỗ trợ `1 << 15`",
            "Để dùng thanh ghi 32-bit"
          ],
          "ans": 1,
          "exp": "Trên AVR, hằng số `1` mặc định là signed 16-bit `int`. Dịch trái vào bit 15 (sign bit) là Undefined Behavior theo chuẩn C99; hậu tố `U` ép nó thành unsigned."
        },
        {
          "q": "Với avr-gcc có int 16 bit, int16_t -1 so sánh nhỏ hơn uint16_t 1 cho gì?",
          "opts": [
            "Đúng",
            "Sai",
            "Lỗi cú pháp"
          ],
          "ans": 1,
          "exp": "-1 chuyển sang uint16_t thành 65535."
        }
      ],
      "remember": "Hậu tố `U` (như `1U << 7`, `1UL << 20`) là bắt buộc trên AVR để tránh Integer Promotion lỗi 16-bit.",
      "pitfall": "Rất nhiều sinh viên viết `1 << 16` trên ATmega328P và nhận về kết quả 0 vì `1` chỉ có 16-bit! Phải viết `1UL << 16`.",
      "avrContext": "Một bộ lọc ADC có mẫu sai lệch âm và một ngưỡng không dấu. Xác định kiểu của biểu thức trước khi kết luận."
    },
    {
      "id": 7,
      "type": "task",
      "ewTitle": "Set or Clear a Specific Bit in a Register",
      "title": "Bật hoặc Xóa một Bit cụ thể trong thanh ghi PORTB",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M11 (GPIO)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Điều khiển chân LED PB5 (chân 13 trên Arduino Uno / ATmega328P) bằng toán tử |= và &= ~ mà không ảnh hưởng các chân PB0..PB4.",
      "filename": "avr_set_clear_bit.c",
      "lines": [
        {
          "code": "#include <avr/io.h>",
          "phase": "SETUP",
          "explain": "Nạp định nghĩa thanh ghi phần cứng của ATmega328P (DDRB tại 0x24, PORTB tại 0x25, PINB tại 0x23, macro PB5 = 5).",
          "cards": [
            [
              "DDRB",
              "0x24",
              "purple"
            ],
            [
              "PORTB",
              "0x25",
              "purple"
            ],
            [
              "PB5",
              "Bit 5 (LED)",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB (0x25)",
            "val": 5,
            "prev": 5,
            "mask": 0,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Giả sử PB0 và PB2 đang là 1 (0x05)"
          }
        },
        {
          "code": "DDRB |= (1U << PB5);",
          "phase": "REGISTER",
          "explain": "Cấu hình chân PB5 làm ngõ ra (Output) bằng cách bật bit 5 trong thanh ghi hướng DDRB. avr-gcc dịch dòng này thành đúng 1 lệnh Assembly `SBI 0x04, 5` (2 chu kỳ xung)!",
          "cards": [
            [
              "Mask",
              "0x20 (0010_0000)",
              "amber"
            ],
            [
              "DDRB",
              "0x20",
              "green"
            ],
            [
              "ASM",
              "SBI 0x04, 5",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "DDRB (0x24)",
            "val": 32,
            "prev": 0,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Bit 5 (PB5) = 1 → Chế độ Output",
            "op": "OR (|=)"
          }
        },
        {
          "code": "uint8_t mode = 1; // 1=Set, 0=Clear",
          "phase": "SETUP",
          "explain": "Biến điều khiển quyết định bật đèn (mode=1) hay tắt đèn (mode=0) trên chân PB5.",
          "cards": [
            [
              "mode",
              "1 (SET)",
              "blue"
            ],
            [
              "PORTB hiện tại",
              "0x05",
              "amber"
            ],
            [
              "Bit mục tiêu",
              "PB5 (bit 5)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB trước khi ghi",
            "val": 5,
            "prev": 5,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Chuẩn bị tác động vào bit 5, giữ nguyên PB0 & PB2"
          }
        },
        {
          "code": "if (mode) PORTB |= (1U << PB5);",
          "phase": "BITWISE",
          "explain": "Phép OR bit với mặt nạ (1U << 5) = 0b00100000. Bit 5 lên 1 (LED sáng 5V), các bit 0..4 và 6..7 giữ nguyên giá trị cũ (0x05 | 0x20 = 0x25).",
          "cards": [
            [
              "PORTB cũ",
              "0x05",
              "blue"
            ],
            [
              "PORTB mới",
              "0x25",
              "green"
            ],
            [
              "PB5",
              "HIGH (5V)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB = 0x25 (SET PB5)",
            "val": 37,
            "prev": 5,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "PB5 bật lên 1, PB0 và PB2 không bị mất!",
            "op": "OR (|=)"
          }
        },
        {
          "code": "else PORTB &= ~(1U << PB5);",
          "phase": "BITWISE",
          "explain": "Nếu mode=0, mặt nạ đảo ~(1U << 5) = 0b11011111 (0xDF). Phép AND kéo riêng bit 5 về 0 (LED tắt 0V), giữ nguyên toàn bộ 7 bit còn lại.",
          "cards": [
            [
              "Mask đảo",
              "0xDF (1101_1111)",
              "amber"
            ],
            [
              "Lệnh ASM",
              "CBI 0x05, 5",
              "purple"
            ],
            [
              "Nhánh else",
              "Bỏ qua khi mode=1",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Minh họa Clear: 0x05",
            "val": 5,
            "prev": 37,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Nếu mode=0, PORTB trở về 0x05",
            "op": "AND NOT (&= ~)"
          }
        }
      ],
      "remember": "Set bit dùng `reg |= (1U << n)`, Clear bit dùng `reg &= ~(1U << n)`. Trên vùng I/O thấp của ATmega328P (0x00..0x1F), avr-gcc tự tối ưu thành lệnh nguyên tử `SBI`/`CBI`!",
      "pitfall": "Tuyệt đối tránh viết `PORTB = (1U << PB5);` vì nó sẽ ghi đè 0 vào tất cả 7 chân còn lại của Port B!",
      "tests": [
        "+ PORTB=0x05, mode=1, n=5 → PORTB=0x25",
        "+ PORTB=0x25, mode=0, n=5 → PORTB=0x05",
        "~ Không bao giờ làm thay đổi trạng thái các chân PB0..PB4."
      ],
      "problem": {
        "scenario": "PB5 điều khiển LED. Giả định DDRB5 đã bật. Chỉ đổi chốt PORTB ở vị trí được yêu cầu và giữ các đầu ra PORTB còn lại.\n\nTrên bo mạch ATmega328P (Arduino Uno), chân PB5 nối LED báo trạng thái, còn chân PB0 và PB2 đang nối 2 relay đang BẬT (`PORTB = 0x05`). Hãy viết hàm `portb_set_pin(uint8_t pin, uint8_t state)` để bật (`state=1`) hoặc tắt (`state=0`) riêng chân `pin` được chỉ định mà TUYỆT ĐỐI không làm tắt 2 relay ở PB0 và PB2.",
        "prototype": "void portb_set_pin(uint8_t pin, uint8_t state)",
        "workedExample": [
          "Bước 1: Cấu hình chân PB5 làm ngõ ra (Output) bằng cách bật bit 5 trong thanh ghi hướng DDRB. (Mask=0x20 (0010_0000), DDRB=0x20)",
          "Bước 2: Biến điều khiển quyết định bật đèn (mode=1) hay tắt đèn (mode=0) trên chân PB5. (mode=1 (SET), PORTB hiện tại=0x05)",
          "Bước 3: Phép OR bit với mặt nạ (1U << 5) = 0b00100000. (PORTB cũ=0x05, PORTB mới=0x25)"
        ],
        "testRows": [
          [
            "Case 1 (Bật PB5)",
            "PORTB = 0x05, pin = PB5 (5), state = 1",
            "DDRB.5 = 1, PORTB = 0x25 (PB0, PB2 vẫn = 1)"
          ],
          [
            "Case 2 (Tắt PB5)",
            "PORTB = 0x25, pin = PB5 (5), state = 0",
            "PORTB = 0x05 (PB0, PB2 vẫn = 1)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → PORTB. Bấm F11 từng bước để thấy bit 5 đổi màu đỏ từ 0→1→0 trong khi bit 0 và bit 2 đứng yên.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 007: Bật hoặc Xóa một Bit cụ thể trong thanh ghi PORTB\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void portb_set_pin(uint8_t pin, uint8_t state)\n * ============================================================ */\n\nvoid portb_set_pin(uint8_t pin, uint8_t state) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    DDRB = 0x25; PORTB = 0x05; // Giả lập PB0, PB2 đang bật\n    portb_set_pin(PB5, 1);     // Kỳ vọng PORTB = 0x25\n    portb_set_pin(PB5, 0);     // Kỳ vọng PORTB = 0x05\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Set bit dùng `reg |= (1U << n)`, Clear bit dùng `reg &= ~(1U << n)`. Trên vùng I/O thấp của ATmega328P (0x00..0x1F), avr-gcc tự tối ưu thành lệnh nguyên tử `SBI`/`CBI`!",
        "hint2": "Tuyệt đối tránh viết `PORTB = (1U << PB5);` vì nó sẽ ghi đè 0 vào tất cả 7 chân còn lại của Port B!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PORTB (0x25)",
          "val": 5,
          "prev": 5,
          "mask": 0,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "Giả sử PB0 và PB2 đang là 1 (0x05)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Minh họa Clear: 0x05",
          "val": 5,
          "prev": 37,
          "mask": 32,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "Nếu mode=0, PORTB trở về 0x05",
          "op": "AND NOT (&= ~)"
        }
      }
    },
    {
      "id": 8,
      "type": "task",
      "ewTitle": "Bit Toggle",
      "title": "Đảo trạng thái Bit (Nhấp nháy LED trên PB5 / PINB)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M11 (GPIO Toggle)",
      "level": "Nền tảng",
      "duration": "5 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Đảo bit bằng toán tử XOR (`^=`) và giới thiệu tính năng phần cứng đặc biệt của ATmega328P: ghi 1 vào thanh ghi `PINB` để toggle trong 1 lệnh!",
      "filename": "avr_bit_toggle.c",
      "lines": [
        {
          "code": "DDRB |= (1U << PB5);",
          "phase": "SETUP",
          "explain": "Đặt chân PB5 làm ngõ ra (Output).",
          "cards": [
            [
              "DDRB",
              "0x20",
              "blue"
            ],
            [
              "PORTB",
              "0x00",
              "blue"
            ],
            [
              "Mục tiêu",
              "Đảo PB5",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB (ban đầu)",
            "val": 0,
            "prev": 0,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "PB5 đang ở mức LOW (0)",
            "op": "OR (|=)"
          }
        },
        {
          "code": "PORTB ^= (1U << PB5);",
          "phase": "BITWISE",
          "explain": "Toán tử XOR với 1 làm đảo bit (0→1, 1→0); XOR với 0 giữ nguyên bit. Lần 1: 0x00 ^ 0x20 = 0x20 (LED sáng).",
          "cards": [
            [
              "PORTB",
              "0x20",
              "green"
            ],
            [
              "PB5",
              "0 → 1 (ON)",
              "green"
            ],
            [
              "Chu kỳ RMW",
              "3 lệnh (IN/EOR/OUT)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB sau XOR lần 1",
            "val": 32,
            "prev": 0,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "PB5 đảo từ 0 lên 1",
            "op": "XOR (^=)"
          }
        },
        {
          "code": "PORTB ^= (1U << PB5);",
          "phase": "BITWISE",
          "explain": "Lần 2: 0x20 ^ 0x20 = 0x00 (LED tắt). Lưu ý phép `^=` trên PORTB là chuỗi Read-Modify-Write nên có thể bị ngắt ISR chen ngang.",
          "cards": [
            [
              "PORTB",
              "0x00",
              "amber"
            ],
            [
              "PB5",
              "1 → 0 (OFF)",
              "amber"
            ],
            [
              "Cảnh báo ISR",
              "RMW không nguyên tử",
              "rose"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB sau XOR lần 2",
            "val": 0,
            "prev": 32,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "PB5 đảo từ 1 về 0",
            "op": "XOR (^=)"
          }
        },
        {
          "code": "PINB = (1U << PB5); // Mẹo phần cứng ATmega328P!",
          "phase": "REGISTER",
          "explain": "ĐẶC SẢN ATmega328P (Datasheet mục 14.2.2): Ghi logic 1 vào bit của thanh ghi nhập PINx sẽ tự động đảo (toggle) bit tương ứng ở PORTx chỉ trong 1 lệnh duy nhất, hoàn toàn an toàn với ngắt (atomic)!",
          "cards": [
            [
              "PORTB",
              "0x20 (Đảo!)",
              "green"
            ],
            [
              "An toàn ISR",
              "Atomic 1 lệnh",
              "green"
            ],
            [
              "Datasheet",
              "Mục 14.2.2",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB (nhờ ghi PINB)",
            "val": 32,
            "prev": 0,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Ghi 1 vào PINB5 tự động toggle PORTB5!",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Dùng `PORTB ^= (1U << PB5)` cho mọi MCU, hoặc dùng `PINB = (1U << PB5)` trên ATmega328P để đảo chân nguyên tử không cần tắt ngắt.",
      "pitfall": "Chỉ dùng `PINB = (1U << PB5)` (dấu `=`), KHÔNG dùng `PINB |= (1U << PB5)` vì phép OR sẽ đọc lại các chân đang HIGH và vô tình đảo hết chúng!",
      "tests": [
        "+ 0x00 ^ 0x20 = 0x20; 0x20 ^ 0x20 = 0x00",
        "+ Ghi PINB = (1U << PB5) đảo PB5 chỉ tốn 1 chu kỳ xung."
      ],
      "problem": {
        "scenario": "Với PB5 làm đầu ra, so sánh đảo bằng đọc–sửa–ghi PORTB và ghi mặt nạ vào PINB. Đo LED hoặc xem chốt PORTB sau mỗi lần.\n\nViết hai hàm đảo bit PB5 trên ATmega328P. Hàm thứ nhất dùng XOR trên PORTB. Hàm thứ hai dùng tính năng ghi 1 vào bit tương ứng của PINB. PB5 thường nối với LED D13 trên Arduino Uno dùng ATmega328P. Hãy kiểm sơ đồ board.",
        "prototype": "void toggle_pb5_xor(void); void toggle_pb5_hw(void);",
        "workedExample": [
          "Bước 1: Đặt chân PB5 làm ngõ ra (Output). (DDRB=0x20, PORTB=0x00)",
          "Bước 2: Toán tử XOR với 1 làm đảo bit (0→1, 1→0); XOR với 0 giữ nguyên bit. (PORTB=0x20, PB5=0 → 1 (ON))",
          "Bước 3: Lần 2: 0x20 ^ 0x20 = 0x00 (LED tắt). (PORTB=0x00, PB5=1 → 0 (OFF))"
        ],
        "testRows": [
          [
            "Lần 1 (XOR)",
            "PORTB = 0x00 → toggle_pb5_xor()",
            "PORTB = 0x20 (PB5 = HIGH)"
          ],
          [
            "Lần 2 (HW PINB)",
            "PORTB = 0x20 → toggle_pb5_hw()",
            "PORTB = 0x00 (PB5 = LOW, 1 lệnh SBI/OUT)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở I/O View → PORTB và Disassembly View (Alt+8): so sánh số lệnh máy giữa cách XOR (IN/EOR/OUT) và cách ghi `PINB = (1U << PB5)`.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 008: Đảo trạng thái Bit (Nhấp nháy LED trên PB5 / PINB)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void toggle_pb5_xor(void); void toggle_pb5_hw(void);\n * ============================================================ */\n\nvoid toggle_pb5_xor(void) {\n    // TODO: Đảo bit PB5 bằng XOR.\n}\n\nvoid toggle_pb5_hw(void) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    DDRB |= (1U << PB5); PORTB = 0x00;\n    toggle_pb5_xor(); // PORTB = 0x20\n    toggle_pb5_hw();  // PORTB = 0x00\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Dùng `PORTB ^= (1U << PB5)` cho mọi MCU, hoặc dùng `PINB = (1U << PB5)` trên ATmega328P để đảo chân nguyên tử không cần tắt ngắt.",
        "hint2": "Chỉ dùng `PINB = (1U << PB5)` (dấu `=`), KHÔNG dùng `PINB |= (1U << PB5)` vì phép OR sẽ đọc lại các chân đang HIGH và vô tình đảo hết chúng!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PORTB (ban đầu)",
          "val": 0,
          "prev": 0,
          "mask": 32,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "PB5 đang ở mức LOW (0)",
          "op": "OR (|=)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PORTB (nhờ ghi PINB)",
          "val": 32,
          "prev": 0,
          "mask": 32,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "Ghi 1 vào PINB5 tự động toggle PORTB5!",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 9,
      "type": "task",
      "ewTitle": "Check if K-th Bit is Set",
      "title": "Kiểm tra Bit thứ K (Đọc nút nhấn Pull-up trên PIND)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M11 (Đọc nút nhấn GPIO)",
      "level": "Nền tảng",
      "duration": "5 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Đọc trạng thái chân ngõ vào số trên thanh ghi PIND (ví dụ nút nhấn nối chân PD2 / INT0 có điện trở kéo lên nội bộ).",
      "filename": "avr_check_kth_bit.c",
      "lines": [
        {
          "code": "DDRD &= ~(1U << PD2); PORTD |= (1U << PD2);",
          "phase": "SETUP",
          "explain": "Đặt PD2 làm Input (DDRD.2 = 0) và bật điện trở kéo lên nội bộ Pull-up (PORTD.2 = 1). Khi chưa nhấn, PIND.2 = 1; khi nhấn nối GND, PIND.2 = 0.",
          "cards": [
            [
              "PD2 Mode",
              "INPUT_PULLUP",
              "blue"
            ],
            [
              "Chưa nhấn",
              "PIND.2 = 1",
              "green"
            ],
            [
              "Đang nhấn",
              "PIND.2 = 0",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PIND (0x29)",
            "val": 4,
            "prev": 0,
            "mask": 4,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "Điện trở Pull-up kéo PD2 lên mức HIGH (1)",
            "op": "OR (|=)"
          }
        },
        {
          "code": "uint8_t k = 2; uint8_t reg = PIND;",
          "phase": "REGISTER",
          "explain": "Đọc toàn bộ 8 chân của Port D từ thanh ghi PIND (địa chỉ I/O 0x29) vào biến tạm `reg` (giả sử PIND = 0x04).",
          "cards": [
            [
              "reg (PIND)",
              "0x04 (0000_0100)",
              "blue"
            ],
            [
              "k",
              "2 (PD2)",
              "purple"
            ],
            [
              "Địa chỉ PIND",
              "0x29",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "reg = PIND (0x04)",
            "val": 4,
            "prev": 4,
            "mask": 4,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "Bit 2 đang bằng 1"
          }
        },
        {
          "code": "uint8_t is_high = (reg & (1U << k)) ? 1 : 0;",
          "phase": "BITWISE",
          "explain": "Phép AND lọc đúng bit thứ k: 0x04 & 0x04 = 0x04 (khác 0 → TRUE). Toán tử `?:` chuẩn hóa kết quả về đúng 0 hoặc 1.",
          "cards": [
            [
              "reg & mask",
              "0x04 (≠ 0)",
              "green"
            ],
            [
              "is_high",
              "1",
              "green"
            ],
            [
              "Trạng thái nút",
              "Chưa nhấn",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Mask = (1U << 2)",
            "val": 4,
            "prev": 4,
            "mask": 4,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "Bit 2 khớp mặt nạ → trả về 1",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Đọc trạng thái chân vật lý luôn đọc từ thanh ghi `PINx` (KHÔNG đọc từ `PORTx`), và chuẩn hóa bằng `(PINx & (1U << k)) != 0`.",
      "pitfall": "Lỗi rất hay gặp: viết `if ((PIND & (1U << PD2)) == 1)` sẽ LUÔN SAI vì kết quả phép AND là `4` (0b100), không phải `1`!",
      "tests": [
        "+ PIND=0x04, k=2 → (PIND & 0x04) = 4 → is_high = 1",
        "+ PIND=0x00 (nhấn nút), k=2 → is_high = 0"
      ],
      "problem": {
        "scenario": "PD2 nối nút xuống GND và có pull-up. Đọc PIND ở vị trí yêu cầu. Bit đọc bằng 0 khi nút PD2 được nhấn.\n\nNút nhấn khẩn cấp (E-Stop) được nối vào chân PD2 (INT0) với điện trở kéo lên nội bộ (`INPUT_PULLUP`: chưa nhấn = HIGH, nhấn nối GND = LOW). Hãy viết hàm đọc chân thứ `k` của thanh ghi `PIND` và trả về đúng `1` (HIGH) hoặc `0` (LOW).",
        "prototype": "uint8_t read_pind_bit(uint8_t k)",
        "workedExample": [
          "Bước 1: Đặt PD2 làm Input (DDRD. (PD2 Mode=INPUT_PULLUP, Chưa nhấn=PIND.2 = 1)",
          "Bước 2: Đọc toàn bộ 8 chân của Port D từ thanh ghi PIND (địa chỉ I/O 0x29) vào biến tạm `reg` (giả sử PIND = 0x04). (reg (PIND)=0x04 (0000_0100), k=2 (PD2))",
          "Bước 3: Phép AND lọc đúng bit thứ k: 0x04 & 0x04 = 0x04 (khác 0 → TRUE). (reg & mask=0x04 (≠ 0), is_high=1)"
        ],
        "testRows": [
          [
            "Case 1 (Chưa nhấn)",
            "PIND = 0x04 (bit 2 = 1), k = 2",
            "return = 1"
          ],
          [
            "Case 2 (Đang nhấn)",
            "PIND = 0x00 (bit 2 = 0), k = 2",
            "return = 0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Trong Microchip Studio Simulator, mở I/O View → PORTD, click chuột tích/bỏ tích ô bit 2 của `PIND` trước khi bấm F11 qua hàm `read_pind_bit(PD2)` để kiểm chứng cả 2 trường hợp!",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 009: Kiểm tra Bit thứ K (Đọc nút nhấn Pull-up trên PIND)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: uint8_t read_pind_bit(uint8_t k)\n * ============================================================ */\n\nuint8_t read_pind_bit(uint8_t k) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    DDRD &= ~(1U << PD2); PORTD |= (1U << PD2);\n    volatile uint8_t btn = read_pind_bit(PD2);\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Đọc trạng thái chân vật lý luôn đọc từ thanh ghi `PINx` (KHÔNG đọc từ `PORTx`), và chuẩn hóa bằng `(PINx & (1U << k)) != 0`.",
        "hint2": "Lỗi rất hay gặp: viết `if ((PIND & (1U << PD2)) == 1)` sẽ LUÔN SAI vì kết quả phép AND là `4` (0b100), không phải `1`!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PIND (0x29)",
          "val": 4,
          "prev": 0,
          "mask": 4,
          "labels": [
            "PD7",
            "PD6",
            "PD5",
            "PD4",
            "PD3",
            "PD2",
            "PD1",
            "PD0"
          ],
          "note": "Điện trở Pull-up kéo PD2 lên mức HIGH (1)",
          "op": "OR (|=)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Mask = (1U << 2)",
          "val": 4,
          "prev": 4,
          "mask": 4,
          "labels": [
            "PD7",
            "PD6",
            "PD5",
            "PD4",
            "PD3",
            "PD2",
            "PD1",
            "PD0"
          ],
          "note": "Bit 2 khớp mặt nạ → trả về 1",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 10,
      "type": "task",
      "ewTitle": "Set the Bit in an 8-bit Register",
      "title": "Bật Bit trong thanh ghi 8-bit (Bật Ngắt ngoài INT0 trong EIMSK)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M11 (Interrupt)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "GPIO",
        "INT"
      ],
      "summary": "Bật bit INT0 (bit 0) trong thanh ghi mặt nạ ngắt ngoài EIMSK (0x3D) của ATmega328P.",
      "filename": "avr_set_bit8.c",
      "lines": [
        {
          "code": "uint8_t reg = EIMSK; // giả sử 0x00",
          "phase": "SETUP",
          "explain": "Đọc giá trị hiện tại của thanh ghi EIMSK (External Interrupt Mask Register, địa chỉ 0x3D).",
          "cards": [
            [
              "EIMSK",
              "0x00",
              "blue"
            ],
            [
              "INT0",
              "Bit 0",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "EIMSK (0x3D)",
            "val": 0,
            "prev": 0,
            "mask": 1,
            "labels": [
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              "INT1",
              "INT0"
            ],
            "note": "Cả INT0 và INT1 đang tắt"
          }
        },
        {
          "code": "uint8_t pos = INT0; // pos = 0",
          "phase": "SETUP",
          "explain": "Xác định vị trí bit cần bật: hằng số INT0 trong <avr/io.h> có giá trị 0.",
          "cards": [
            [
              "pos",
              "0",
              "amber"
            ],
            [
              "1U << pos",
              "0x01",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Mask (1U << 0)",
            "val": 1,
            "prev": 0,
            "mask": 1,
            "labels": [
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              "INT1",
              "INT0"
            ],
            "note": "Mặt nạ 0b0000_0001"
          }
        },
        {
          "code": "reg |= (uint8_t)(1U << pos);",
          "phase": "BITWISE",
          "explain": "Dùng toán tử OR để bật riêng bit INT0 lên 1, giữ nguyên trạng thái của INT1.",
          "cards": [
            [
              "reg mới",
              "0x01",
              "green"
            ],
            [
              "INT0",
              "ENABLED",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "EIMSK = 0x01",
            "val": 1,
            "prev": 0,
            "mask": 1,
            "labels": [
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              "INT1",
              "INT0"
            ],
            "note": "Ngắt ngoài INT0 đã được kích hoạt",
            "op": "OR (|=)"
          }
        },
        {
          "code": "EIMSK = reg;",
          "phase": "OUTPUT",
          "explain": "Ghi ngược lại vào thanh ghi phần cứng EIMSK.",
          "cards": [
            [
              "EIMSK",
              "0x01",
              "green"
            ],
            [
              "Sẵn sàng",
              "Cần thêm sei()",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "EIMSK (0x3D)",
            "val": 1,
            "prev": 0,
            "mask": 1,
            "labels": [
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              "INT1",
              "INT0"
            ],
            "note": "Hoàn tất bật bit trên thanh ghi 8-bit"
          }
        }
      ],
      "remember": "Ép kiểu `(uint8_t)(1U << pos)` giúp tuân thủ MISRA C và tránh cảnh báo Integer Promotion.",
      "pitfall": "Bật INT0 trong EIMSK vẫn cần gọi `sei()` (bật bit I trong SREG) thì ngắt mới chạy.",
      "tests": [
        "+ EIMSK=0x00, pos=0 → 0x01",
        "+ EIMSK=0x02, pos=0 → 0x03 (giữ nguyên INT1)"
      ],
      "problem": {
        "scenario": "Nút PD2 dùng INT0. Bật riêng bit INT0 của EIMSK. Cách chọn cạnh nằm ở EICRA và không thuộc thao tác mặt nạ này.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Bật bit INT0 (bit 0) trong thanh ghi mặt nạ ngắt ngoài EIMSK (0x3D) của ATmega328P.",
        "prototype": "void set_bit8_solve(void)",
        "workedExample": [
          "Bước 1: Đọc giá trị hiện tại của thanh ghi EIMSK (External Interrupt Mask Register, địa chỉ 0x3D). (EIMSK=0x00, INT0=Bit 0)",
          "Bước 2: Xác định vị trí bit cần bật: hằng số INT0 trong <avr/io. (pos=0, 1U << pos=0x01)",
          "Bước 3: Dùng toán tử OR để bật riêng bit INT0 lên 1, giữ nguyên trạng thái của INT1. (reg mới=0x01, INT0=ENABLED)"
        ],
        "testRows": [
          [
            "Case 1",
            "EIMSK=0x00, pos=0",
            "0x01"
          ],
          [
            "Case 2",
            "EIMSK=0x02, pos=0",
            "0x03 (giữ nguyên INT1)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO, INT), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → Port B/C/D. Đặt Breakpoint (F9) ở `while(1)`, nhấn F5 (hoặc F10/F11 từng dòng) để thấy bit DDRx/PORTx/PINx đổi màu đỏ.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 010: Bật Bit trong thanh ghi 8-bit (Bật Ngắt ngoài INT0 trong EIMSK)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void set_bit8_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t reg = EIMSK; // giả sử 0x00\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Ép kiểu `(uint8_t)(1U << pos)` giúp tuân thủ MISRA C và tránh cảnh báo Integer Promotion.",
        "hint2": "Bật INT0 trong EIMSK vẫn cần gọi `sei()` (bật bit I trong SREG) thì ngắt mới chạy.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "EIMSK (0x3D)",
          "val": 0,
          "prev": 0,
          "mask": 1,
          "labels": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "INT1",
            "INT0"
          ],
          "note": "Cả INT0 và INT1 đang tắt"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "EIMSK (0x3D)",
          "val": 1,
          "prev": 0,
          "mask": 1,
          "labels": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "INT1",
            "INT0"
          ],
          "note": "Hoàn tất bật bit trên thanh ghi 8-bit"
        }
      }
    },
    {
      "id": 11,
      "type": "task",
      "ewTitle": "Clear the Bit in an 8-bit Register",
      "title": "Xóa Bit trong thanh ghi 8-bit (Tắt ADC ADEN trong ADCSRA)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M11 (ADC)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "ADC"
      ],
      "summary": "Tắt bộ chuyển đổi ADC bằng cách xóa bit ADEN (bit 7) trong thanh ghi ADCSRA để tiết kiệm dòng điện trước khi vào chế độ Sleep.",
      "filename": "avr_clear_bit8.c",
      "lines": [
        {
          "code": "uint8_t reg = 0x87; // ADCSRA: ADEN=1, Prescaler=128",
          "phase": "SETUP",
          "explain": "Thanh ghi ADCSRA đang có ADEN=1 (bit 7) và ADPS2:0=111 (chia tần 128 cho thạch anh 16MHz → 125kHz).",
          "cards": [
            [
              "ADCSRA",
              "0x87",
              "blue"
            ],
            [
              "ADEN",
              "Bit 7 = 1",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "ADCSRA (0x7A)",
            "val": 135,
            "prev": 135,
            "mask": 128,
            "labels": [
              "ADEN",
              "ADSC",
              "ADATE",
              "ADIF",
              "ADIE",
              "ADPS2",
              "ADPS1",
              "ADPS0"
            ],
            "note": "ADC đang bật với prescaler 128"
          }
        },
        {
          "code": "uint8_t mask = (uint8_t)~(1U << ADEN);",
          "phase": "BITWISE",
          "explain": "Tạo mặt nạ đảo: ~(1U << 7) = 0x7F (0b0111_1111). Riêng bit 7 bằng 0, 7 bit còn lại bằng 1.",
          "cards": [
            [
              "mask",
              "0x7F",
              "purple"
            ],
            [
              "Bit 7",
              "0 (sẽ xóa)",
              "rose"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Mask = 0x7F",
            "val": 127,
            "prev": 128,
            "mask": 128,
            "labels": [
              "ADEN",
              "ADSC",
              "ADATE",
              "ADIF",
              "ADIE",
              "ADPS2",
              "ADPS1",
              "ADPS0"
            ],
            "note": "Mặt nạ giữ lại 7 bit thấp",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "reg &= mask; // kết quả 0x07",
          "phase": "OUTPUT",
          "explain": "Phép AND xóa bit ADEN về 0 (tắt mạch analog ADC tiết kiệm ~200µA), vẫn giữ nguyên cấu hình chia tần 128 (0x07).",
          "cards": [
            [
              "ADCSRA mới",
              "0x07",
              "green"
            ],
            [
              "ADEN",
              "0 (OFF)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "ADCSRA = 0x07",
            "val": 7,
            "prev": 135,
            "mask": 128,
            "labels": [
              "ADEN",
              "ADSC",
              "ADATE",
              "ADIF",
              "ADIE",
              "ADPS2",
              "ADPS1",
              "ADPS0"
            ],
            "note": "ADC đã tắt, Prescaler 128 vẫn giữ nguyên"
          }
        }
      ],
      "remember": "Xóa bit luôn dùng mẫu `reg &= (uint8_t)~(1U << bit)`.",
      "pitfall": "Lưu ý: trong ATmega328P, các cờ ngắt (như ADIF, TIFR0) lại được xóa bằng cách GHI 1 vào cờ đó (`ADCSRA |= (1U << ADIF)`), KHÔNG dùng `&= ~`!",
      "tests": [
        "+ 0x87 & ~0x80 = 0x07",
        "+ Tiết kiệm dòng khi gọi sleep_mode()"
      ],
      "problem": {
        "scenario": "Sau khi lấy mẫu PC0, mô phỏng bỏ bit ADEN trong ADCSRA. Với thanh ghi thật, chú ý ADIF là cờ ghi 1 để xóa khi đọc–sửa–ghi.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Tắt bộ chuyển đổi ADC bằng cách xóa bit ADEN (bit 7) trong thanh ghi ADCSRA để tiết kiệm dòng điện trước khi vào chế độ Sleep.",
        "prototype": "void clear_bit8_solve(void)",
        "workedExample": [
          "Bước 1: Thanh ghi ADCSRA đang có ADEN=1 (bit 7) và ADPS2:0=111 (chia tần 128 cho thạch anh 16MHz → 125kHz). (ADCSRA=0x87, ADEN=Bit 7 = 1)",
          "Bước 2: Tạo mặt nạ đảo: ~(1U << 7) = 0x7F (0b0111_1111). (mask=0x7F, Bit 7=0 (sẽ xóa))",
          "Bước 3: Phép AND xóa bit ADEN về 0 (tắt mạch analog ADC tiết kiệm ~200µA), vẫn giữ nguyên cấu hình chia tần 128 (0x07). (ADCSRA mới=0x07, ADEN=0 (OFF))"
        ],
        "testRows": [
          [
            "Case 1",
            "ADCSRA = 0x87, ADEN = Bit 7 = 1, mask = 0x7F",
            "0x87 & ~0x80 = 0x07"
          ],
          [
            "Case 2",
            "ADCSRA = 0x87, ADEN = Bit 7 = 1, mask = 0x7F",
            "Tiết kiệm dòng khi gọi sleep_mode()"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, ADC), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 011: Xóa Bit trong thanh ghi 8-bit (Tắt ADC ADEN trong ADCSRA)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void clear_bit8_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t reg = 0x87; // ADCSRA: ADEN=1, Prescaler=128\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Xóa bit luôn dùng mẫu `reg &= (uint8_t)~(1U << bit)`.",
        "hint2": "Lưu ý: trong ATmega328P, các cờ ngắt (như ADIF, TIFR0) lại được xóa bằng cách GHI 1 vào cờ đó (`ADCSRA |= (1U << ADIF)`), KHÔNG dùng `&= ~`!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "ADCSRA (0x7A)",
          "val": 135,
          "prev": 135,
          "mask": 128,
          "labels": [
            "ADEN",
            "ADSC",
            "ADATE",
            "ADIF",
            "ADIE",
            "ADPS2",
            "ADPS1",
            "ADPS0"
          ],
          "note": "ADC đang bật với prescaler 128"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "ADCSRA = 0x07",
          "val": 7,
          "prev": 135,
          "mask": 128,
          "labels": [
            "ADEN",
            "ADSC",
            "ADATE",
            "ADIF",
            "ADIE",
            "ADPS2",
            "ADPS1",
            "ADPS0"
          ],
          "note": "ADC đã tắt, Prescaler 128 vẫn giữ nguyên"
        }
      }
    },
    {
      "id": 12,
      "type": "task",
      "ewTitle": "Toggle the Bit in an 8-bit Register",
      "title": "Đảo Bit trong thanh ghi 8-bit (Đảo tín hiệu chân PD6)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M11 (GPIO)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Đảo trạng thái bit thứ n trong thanh ghi 8-bit bằng toán tử XOR (`^=`).",
      "filename": "avr_toggle_bit8.c",
      "lines": [
        {
          "code": "uint8_t reg = 0x42; // PD6=1, PD1=1",
          "phase": "SETUP",
          "explain": "Giá trị ban đầu của thanh ghi PORTD là 0x42 (0b0100_0010).",
          "cards": [
            [
              "reg",
              "0x42",
              "blue"
            ],
            [
              "PD6",
              "1",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTD = 0x42",
            "val": 66,
            "prev": 66,
            "mask": 64,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "PD6 đang ở mức 1"
          }
        },
        {
          "code": "reg ^= (uint8_t)(1U << 6);",
          "phase": "BITWISE",
          "explain": "XOR với 0x40 làm bit 6 đổi từ 1 thành 0, bit 1 giữ nguyên là 1 → 0x02.",
          "cards": [
            [
              "reg mới",
              "0x02",
              "green"
            ],
            [
              "PD6",
              "1 → 0",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTD = 0x02",
            "val": 2,
            "prev": 66,
            "mask": 64,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "PD6 đã đảo về 0, PD1 vẫn là 1",
            "op": "XOR (^=)"
          }
        },
        {
          "code": "reg ^= (uint8_t)(1U << 6);",
          "phase": "OUTPUT",
          "explain": "Gọi XOR thêm lần nữa, bit 6 quay lại 1 → 0x42 (tạo xung vuông đều đặn).",
          "cards": [
            [
              "reg mới",
              "0x42",
              "green"
            ],
            [
              "PD6",
              "0 → 1",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTD = 0x42",
            "val": 66,
            "prev": 2,
            "mask": 64,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "PD6 đảo lại thành 1",
            "op": "XOR (^=)"
          }
        }
      ],
      "remember": "XOR với 1 để đảo bit, XOR với 0 để giữ nguyên bit.",
      "pitfall": "Tránh dùng `^=` trên thanh ghi có bit Read-Only hoặc bit xóa-khi-ghi-1 (như TIFR0).",
      "tests": [
        "+ 0x42 ^ 0x40 = 0x02",
        "+ 0x02 ^ 0x40 = 0x42"
      ],
      "problem": {
        "scenario": "PD6 đang ở chế độ GPIO với DDRD6 bằng 1. Đảo chốt PORTD6, giữ các bit khác. Xác nhận bộ PWM không chiếm chân.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Đảo trạng thái bit thứ n trong thanh ghi 8-bit bằng toán tử XOR (`^=`).",
        "prototype": "void toggle_bit8_solve(void)",
        "workedExample": [
          "Bước 1: Giá trị ban đầu của thanh ghi PORTD là 0x42 (0b0100_0010). (reg=0x42, PD6=1)",
          "Bước 2: XOR với 0x40 làm bit 6 đổi từ 1 thành 0, bit 1 giữ nguyên là 1 → 0x02. (reg mới=0x02, PD6=1 → 0)",
          "Bước 3: Gọi XOR thêm lần nữa, bit 6 quay lại 1 → 0x42 (tạo xung vuông đều đặn). (reg mới=0x42, PD6=0 → 1)"
        ],
        "testRows": [
          [
            "Case 1",
            "reg = 0x42, PD6 = 1, reg mới = 0x02",
            "0x42 ^ 0x40 = 0x02"
          ],
          [
            "Case 2",
            "reg = 0x42, PD6 = 1, reg mới = 0x02",
            "0x02 ^ 0x40 = 0x42"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → Port B/C/D. Đặt Breakpoint (F9) ở `while(1)`, nhấn F5 (hoặc F10/F11 từng dòng) để thấy bit DDRx/PORTx/PINx đổi màu đỏ.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 012: Đảo Bit trong thanh ghi 8-bit (Đảo tín hiệu chân PD6)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void toggle_bit8_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t reg = 0x42; // PD6=1, PD1=1\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "XOR với 1 để đảo bit, XOR với 0 để giữ nguyên bit.",
        "hint2": "Tránh dùng `^=` trên thanh ghi có bit Read-Only hoặc bit xóa-khi-ghi-1 (như TIFR0).",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PORTD = 0x42",
          "val": 66,
          "prev": 66,
          "mask": 64,
          "labels": [
            "PD7",
            "PD6",
            "PD5",
            "PD4",
            "PD3",
            "PD2",
            "PD1",
            "PD0"
          ],
          "note": "PD6 đang ở mức 1"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PORTD = 0x42",
          "val": 66,
          "prev": 2,
          "mask": 64,
          "labels": [
            "PD7",
            "PD6",
            "PD5",
            "PD4",
            "PD3",
            "PD2",
            "PD1",
            "PD0"
          ],
          "note": "PD6 đảo lại thành 1",
          "op": "XOR (^=)"
        }
      }
    },
    {
      "id": 13,
      "type": "task",
      "ewTitle": "Is the Bit Set",
      "title": "Kiểm tra Bit có đang bật (Chờ cờ UDRE0 của UART)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M11 (USART0)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "USART"
      ],
      "summary": "Kiểm tra cờ UDRE0 (bit 5 của UCSR0A) để biết bộ đệm phát UART đã trống hay chưa trước khi ghi ký tự vào UDR0.",
      "filename": "avr_is_bit_set.c",
      "lines": [
        {
          "code": "uint8_t status = UCSR0A; // giả sử 0x20",
          "phase": "REGISTER",
          "explain": "Đọc thanh ghi trạng thái UCSR0A (0xC0). Khi bộ đệm phát trống, phần cứng tự bật bit 5 (UDRE0).",
          "cards": [
            [
              "UCSR0A",
              "0x20",
              "blue"
            ],
            [
              "UDRE0",
              "Bit 5",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "UCSR0A (0xC0)",
            "val": 32,
            "prev": 0,
            "mask": 32,
            "labels": [
              "RXC0",
              "TXC0",
              "UDRE0",
              "FE0",
              "DOR0",
              "UPE0",
              "U2X0",
              "MPCM0"
            ],
            "note": "Phần cứng bật UDRE0=1 báo sẵn sàng nhận byte mới"
          }
        },
        {
          "code": "uint8_t ready = (status >> UDRE0) & 1U;",
          "phase": "BITWISE",
          "explain": "Dịch phải 5 vị trí rồi AND với 1U để trích xuất chính xác giá trị 0 hoặc 1.",
          "cards": [
            [
              "status >> 5",
              "0x01",
              "amber"
            ],
            [
              "ready",
              "1 (TRUE)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "ready = 0x01",
            "val": 1,
            "prev": 32,
            "mask": 1,
            "labels": [],
            "note": "Bit UDRE0 đã được dịch về bit 0",
            "op": "SHIFT RIGHT (>>)"
          }
        },
        {
          "code": "if (ready) UDR0 = 'A';",
          "phase": "OUTPUT",
          "explain": "Vì ready == 1, ta ghi ký tự 'A' (0x41) vào thanh ghi dữ liệu UDR0 để truyền ra chân TXD (PD1).",
          "cards": [
            [
              "UDR0",
              "'A' (0x41)",
              "green"
            ],
            [
              "Chân TXD",
              "PD1",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "UDR0 = 'A' (0x41)",
            "val": 65,
            "prev": 0,
            "mask": 255,
            "labels": [],
            "note": "Byte 0x41 được nạp vào thanh ghi phát UART"
          }
        }
      ],
      "remember": "Cả hai cách `(reg >> n) & 1U` và `(reg & (1U << n)) != 0` đều trả về đúng 0 hoặc 1.",
      "pitfall": "Trong vòng lặp polling `while (!(UCSR0A & (1U << UDRE0)));`, thanh ghi UCSR0A đã có từ khóa `volatile` trong `<avr/io.h>` nên compiler không tối ưu sai.",
      "tests": [
        "+ UCSR0A=0x20 → ready=1 → gửi 'A'",
        "+ UCSR0A=0x00 → ready=0 → tiếp tục chờ"
      ],
      "problem": {
        "scenario": "Trước khi ghi UDR0, đọc UDRE0 trong UCSR0A. UDRE0 báo bộ đệm ghi còn chỗ, còn TXC0 báo khung đã truyền xong.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Kiểm tra cờ UDRE0 (bit 5 của UCSR0A) để biết bộ đệm phát UART đã trống hay chưa trước khi ghi ký tự vào UDR0.",
        "prototype": "void is_bit_set_solve(void)",
        "workedExample": [
          "Bước 1: Đọc thanh ghi trạng thái UCSR0A (0xC0). (UCSR0A=0x20, UDRE0=Bit 5)",
          "Bước 2: Dịch phải 5 vị trí rồi AND với 1U để trích xuất chính xác giá trị 0 hoặc 1. (status >> 5=0x01, ready=1 (TRUE))",
          "Bước 3: Vì ready == 1, ta ghi ký tự 'A' (0x41) vào thanh ghi dữ liệu UDR0 để truyền ra chân TXD (PD1). (UDR0='A' (0x41), Chân TXD=PD1)"
        ],
        "testRows": [
          [
            "Case 1",
            "UCSR0A=0x20",
            "ready=1 → gửi 'A'"
          ],
          [
            "Case 2",
            "UCSR0A=0x00",
            "ready=0 → tiếp tục chờ"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 013: Kiểm tra Bit có đang bật (Chờ cờ UDRE0 của UART)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void is_bit_set_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t status = UCSR0A; // giả sử 0x20\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Cả hai cách `(reg >> n) & 1U` và `(reg & (1U << n)) != 0` đều trả về đúng 0 hoặc 1.",
        "hint2": "Trong vòng lặp polling `while (!(UCSR0A & (1U << UDRE0)));`, thanh ghi UCSR0A đã có từ khóa `volatile` trong `<avr/io.h>` nên compiler không tối ưu sai.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "UCSR0A (0xC0)",
          "val": 32,
          "prev": 0,
          "mask": 32,
          "labels": [
            "RXC0",
            "TXC0",
            "UDRE0",
            "FE0",
            "DOR0",
            "UPE0",
            "U2X0",
            "MPCM0"
          ],
          "note": "Phần cứng bật UDRE0=1 báo sẵn sàng nhận byte mới"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "UDR0 = 'A' (0x41)",
          "val": 65,
          "prev": 0,
          "mask": 255,
          "labels": [],
          "note": "Byte 0x41 được nạp vào thanh ghi phát UART"
        }
      }
    },
    {
      "id": 14,
      "type": "task",
      "ewTitle": "Set Specific Bits in a 32-bit Register",
      "title": "Bật nhiều Bit trong thanh ghi / gói cấu hình 32-bit",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M10 (Hậu tố UL trên AVR)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Thao tác trên biến trạng thái 32-bit (uint32_t) trên ATmega328P — nhấn mạnh tầm quan trọng bắt buộc của hậu tố `1UL << n`!",
      "filename": "avr_set_bit32.c",
      "lines": [
        {
          "code": "uint32_t flags = 0x00000000UL;",
          "phase": "SETUP",
          "explain": "Trên AVR 8-bit, biến uint32_t chiếm 4 byte liên tiếp trong SRAM (hoặc 4 thanh ghi R22..R25).",
          "cards": [
            [
              "flags",
              "0x00000000",
              "blue"
            ],
            [
              "Kích thước",
              "4 byte (32-bit)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "flags (16-bit cao: 31..16)",
            "val": 0,
            "prev": 0,
            "mask": 128,
            "labels": [],
            "note": "Hiển thị nửa cao bit 31..16"
          }
        },
        {
          "code": "flags |= (1UL << 23) | (1UL << 3);",
          "phase": "BITWISE",
          "explain": "PHẢI dùng `1UL` (unsigned long 32-bit)! Nếu viết `(1 << 23)` trên ATmega328P, vì `1` chỉ 16-bit nên dịch 23 lần sẽ bị tràn mất sạch ra 0!",
          "cards": [
            [
              "1UL << 23",
              "0x00800000",
              "green"
            ],
            [
              "1UL << 3",
              "0x00000008",
              "green"
            ],
            [
              "flags mới",
              "0x00800008",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "flags[31:16] = 0x0080",
            "val": 128,
            "prev": 0,
            "mask": 128,
            "labels": [],
            "note": "Bit 23 (vị trí 7 của nửa cao) bật lên 1 nhờ 1UL",
            "op": "OR (|=)"
          }
        }
      ],
      "remember": "Trên ATmega328P (int = 16-bit), MỌI phép dịch bit >= 16 đều BẮT BUỘC phải dùng `1UL << n`!",
      "pitfall": "Lỗi số 1 khi chuyển code STM32 sang ATmega328P: `(1 << 20)` chạy đúng trên ARM 32-bit nhưng ra 0 trên AVR 8-bit!",
      "tests": [
        "+ (1UL << 23) | (1UL << 3) = 0x00800008",
        "- (1 << 23) trên avr-gcc → cảnh báo left shift count >= width of type!"
      ],
      "problem": {
        "scenario": "Dùng từ cấu hình 32 bit trong SRAM để lưu các cờ cần áp dụng lần lượt cho PORTB/C/D. Chỉ đặt các bit được yêu cầu trong từ phần mềm.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Thao tác trên biến trạng thái 32-bit (uint32_t) trên ATmega328P — nhấn mạnh tầm quan trọng bắt buộc của hậu tố `1UL << n`!",
        "prototype": "void set_bit32_solve(void)",
        "workedExample": [
          "Bước 1: Trên AVR 8-bit, biến uint32_t chiếm 4 byte liên tiếp trong SRAM (hoặc 4 thanh ghi R22. (flags=0x00000000, Kích thước=4 byte (32-bit))",
          "Bước 2: PHẢI dùng `1UL` (unsigned long 32-bit)! Nếu viết `(1 << 23)` trên ATmega328P, vì `1` chỉ 16-bit nên dịch 23 lần sẽ bị tràn mất sạch ra 0!. (1UL << 23=0x00800000, 1UL << 3=0x00000008)"
        ],
        "testRows": [
          [
            "Case 1",
            "flags = 0x00000000, Kích thước = 4 byte (32-bit), 1UL << 23 = 0x00800000",
            "(1UL << 23) | (1UL << 3) = 0x00800008"
          ],
          [
            "Case 2",
            "(1 << 23) trên avr-gcc",
            "cảnh báo left shift count >= width of type!"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 014: Bật nhiều Bit trong thanh ghi / gói cấu hình 32-bit\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void set_bit32_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint32_t flags = 0x00000000UL;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trên ATmega328P (int = 16-bit), MỌI phép dịch bit >= 16 đều BẮT BUỘC phải dùng `1UL << n`!",
        "hint2": "Lỗi số 1 khi chuyển code STM32 sang ATmega328P: `(1 << 20)` chạy đúng trên ARM 32-bit nhưng ra 0 trên AVR 8-bit!",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "flags (16-bit cao: 31..16)",
          "val": 0,
          "prev": 0,
          "mask": 128,
          "labels": [],
          "note": "Hiển thị nửa cao bit 31..16"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "flags[31:16] = 0x0080",
          "val": 128,
          "prev": 0,
          "mask": 128,
          "labels": [],
          "note": "Bit 23 (vị trí 7 của nửa cao) bật lên 1 nhờ 1UL",
          "op": "OR (|=)"
        }
      }
    },
    {
      "id": 15,
      "type": "task",
      "ewTitle": "Keep Only the Highest Set Bit",
      "title": "Chỉ giữ lại Bit 1 cao nhất (Tìm ngắt ưu tiên cao nhất)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M12 (Ưu tiên tác vụ)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Từ một thanh ghi 8-bit chứa nhiều cờ ngắt/tác vụ đang chờ (pending mask), chỉ giữ lại bit 1 có trọng số cao nhất (MSB).",
      "filename": "avr_highest_bit.c",
      "lines": [
        {
          "code": "uint8_t x = 0b00101100; // 0x2C (bit 5,3,2 bật)",
          "phase": "SETUP",
          "explain": "Giả sử có 3 sự kiện cùng chờ ở bit 5, 3, 2. Ta muốn chọn sự kiện ưu tiên cao nhất (bit 5 = 0x20).",
          "cards": [
            [
              "x ban đầu",
              "0x2C",
              "blue"
            ],
            [
              "MSB đang bật",
              "Bit 5 (0x20)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "x = 0x2C",
            "val": 44,
            "prev": 44,
            "mask": 32,
            "labels": [],
            "note": "Các bit 5, 3, 2 đang là 1"
          }
        },
        {
          "code": "x |= (x >> 1); x |= (x >> 2); x |= (x >> 4);",
          "phase": "BITWISE",
          "explain": "Kỹ thuật lan truyền bit (Bit Smearing) không cần vòng lặp: mọi bit nằm bên phải MSB đều được lấp đầy thành 1 → 0b0011_1111 (0x3F).",
          "cards": [
            [
              "Sau smearing",
              "0x3F",
              "amber"
            ],
            [
              "Chu kỳ CPU",
              "Cố định O(1)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "x sau smearing = 0x3F",
            "val": 63,
            "prev": 44,
            "mask": 63,
            "labels": [],
            "note": "Tất cả bit từ 5 xuống 0 đều thành 1",
            "op": "OR (|=)"
          }
        },
        {
          "code": "uint8_t msb = x - (x >> 1);",
          "phase": "OUTPUT",
          "explain": "Lấy 0x3F - 0x1F = 0x20 (0b0010_0000). Chỉ còn duy nhất bit 1 cao nhất! Chạy thời gian hằng số O(1), rất hợp lập lịch Real-time.",
          "cards": [
            [
              "msb",
              "0x20 (Bit 5)",
              "green"
            ],
            [
              "Tác vụ chọn",
              "Task #5",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "msb = 0x20",
            "val": 32,
            "prev": 63,
            "mask": 32,
            "labels": [],
            "note": "Duy nhất bit 5 còn lại!",
            "op": "SHIFT RIGHT (>>)"
          }
        }
      ],
      "remember": "Thuật toán Bit Smearing chạy thời gian hằng số O(1) — rất tốt cho hệ thống thời gian thực (deterministic latency).",
      "pitfall": "Nếu x = 0 thì kết quả msb = 0 (không có tác vụ nào chờ).",
      "tests": [
        "+ x=0x2C → 0x3F → 0x20",
        "+ x=0x81 → 0xFF → 0x80",
        "+ x=0x00 → 0x00"
      ],
      "problem": {
        "scenario": "Dùng từ cờ sự kiện phần mềm, chẳng hạn bộ đệm UART, nút PD2 và timer. Tìm bit cao nhất theo quy ước của ứng dụng. Ưu tiên ngắt thật theo bảng vector.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Từ một thanh ghi 8-bit chứa nhiều cờ ngắt/tác vụ đang chờ (pending mask), chỉ giữ lại bit 1 có trọng số cao nhất (MSB).",
        "prototype": "void highest_bit_solve(void)",
        "workedExample": [
          "Bước 1: Giả sử có 3 sự kiện cùng chờ ở bit 5, 3, 2. (x ban đầu=0x2C, MSB đang bật=Bit 5 (0x20))",
          "Bước 2: Kỹ thuật lan truyền bit (Bit Smearing) không cần vòng lặp: mọi bit nằm bên phải MSB đều được lấp đầy thành 1 → 0b0011_1111 (0x3F). (Sau smearing=0x3F, Chu kỳ CPU=Cố định O(1))",
          "Bước 3: Lấy 0x3F - 0x1F = 0x20 (0b0010_0000). (msb=0x20 (Bit 5), Tác vụ chọn=Task #5)"
        ],
        "testRows": [
          [
            "Case 1",
            "x=0x2C",
            "0x3F → 0x20"
          ],
          [
            "Case 2",
            "x=0x81",
            "0xFF → 0x80"
          ],
          [
            "Case 3",
            "x=0x00",
            "0x00"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 015: Chỉ giữ lại Bit 1 cao nhất (Tìm ngắt ưu tiên cao nhất)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void highest_bit_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t x = 0b00101100; // 0x2C (bit 5,3,2 bật)\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Thuật toán Bit Smearing chạy thời gian hằng số O(1) — rất tốt cho hệ thống thời gian thực (deterministic latency).",
        "hint2": "Nếu x = 0 thì kết quả msb = 0 (không có tác vụ nào chờ).",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "x = 0x2C",
          "val": 44,
          "prev": 44,
          "mask": 32,
          "labels": [],
          "note": "Các bit 5, 3, 2 đang là 1"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "msb = 0x20",
          "val": 32,
          "prev": 63,
          "mask": 32,
          "labels": [],
          "note": "Duy nhất bit 5 còn lại!",
          "op": "SHIFT RIGHT (>>)"
        }
      }
    },
    {
      "id": 16,
      "type": "task",
      "ewTitle": "Bit Operations using Macros",
      "title": "Viết Macro chuẩn hóa thao tác Bit (`SET_BIT`, `CLR_BIT`, `TOG_BIT`)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M1 & M10 (Coding Standards)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Xây dựng bộ macro dùng lại được trên toàn bộ dự án ATmega328P với ngoặc đơn bảo vệ toán hạng chuẩn MISRA C.",
      "filename": "avr_bit_macros.c",
      "lines": [
        {
          "code": "#define SET_BIT(REG, BIT)  ((REG) |= (uint8_t)(1U << (BIT)))",
          "phase": "SETUP",
          "explain": "Macro bật bit: BẮT BUỘC bọc ngoặc đơn quanh `REG`, `BIT` và toàn bộ biểu thức để tránh lỗi thứ tự ưu tiên toán tử khi truyền biểu thức như `BIT = i + 1`.",
          "cards": [
            [
              "Macro",
              "SET_BIT",
              "purple"
            ],
            [
              "An toàn ngoặc",
              "Đạt chuẩn",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "DDRB = 0x00",
            "val": 0,
            "prev": 0,
            "mask": 8,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Chuẩn bị gọi SET_BIT(DDRB, PB3)",
            "op": "OR (|=)"
          }
        },
        {
          "code": "#define CLR_BIT(REG, BIT)  ((REG) &= (uint8_t)~(1U << (BIT)))",
          "phase": "SETUP",
          "explain": "Macro xóa bit an toàn cho thanh ghi 8-bit AVR.",
          "cards": [
            [
              "Macro",
              "CLR_BIT",
              "purple"
            ],
            [
              "Mặt nạ",
              "~(1U << BIT)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB = 0x08",
            "val": 8,
            "prev": 0,
            "mask": 8,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Sẵn sàng xóa bit PB3",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "#define READ_BIT(REG, BIT) (((REG) >> (BIT)) & 1U)",
          "phase": "SETUP",
          "explain": "Macro đọc bit luôn trả về đúng 0 hoặc 1.",
          "cards": [
            [
              "Macro",
              "READ_BIT",
              "purple"
            ],
            [
              "Trả về",
              "0 hoặc 1",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PINB",
            "val": 8,
            "prev": 8,
            "mask": 8,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Đọc bit PB3",
            "op": "SHIFT RIGHT (>>)"
          }
        },
        {
          "code": "SET_BIT(DDRB, PB3); SET_BIT(PORTB, PB3);",
          "phase": "OUTPUT",
          "explain": "Bộ tiền xử lý (Preprocessor) thay thế trực tiếp thành `((DDRB) |= (uint8_t)(1U << (3)))` → avr-gcc sinh đúng lệnh `SBI`!",
          "cards": [
            [
              "DDRB",
              "0x08",
              "green"
            ],
            [
              "PORTB",
              "0x08",
              "green"
            ],
            [
              "Overhead",
              "0 byte Flash",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTB = 0x08",
            "val": 8,
            "prev": 0,
            "mask": 8,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Chân PB3 (OC2A / MOSI) bật HIGH"
          }
        }
      ],
      "remember": "Trong `<avr/sfr_defs.h>`, AVR-Libc cũng cung cấp sẵn `_BV(bit)` tương đương `(1 << (bit))`.",
      "pitfall": "Không bao giờ truyền biểu thức có tác dụng phụ như `SET_BIT(PORTB, i++)` vào macro vì đối số có thể bị tính nhiều lần!",
      "tests": [
        "+ SET_BIT(DDRB, 3) → 0x08",
        "+ CLR_BIT(PORTB, 3) → 0x00"
      ],
      "problem": {
        "scenario": "Áp dụng macro với DDRB và PORTB để đặt PB3. Kiểm ngoặc quanh đối số và chỉ dùng thao tác đọc–sửa–ghi trên thanh ghi có ngữ nghĩa phù hợp.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Xây dựng bộ macro dùng lại được trên toàn bộ dự án ATmega328P với ngoặc đơn bảo vệ toán hạng chuẩn MISRA C.",
        "prototype": "void bit_macros_solve(void)",
        "workedExample": [
          "Bước 1: Macro bật bit: BẮT BUỘC bọc ngoặc đơn quanh `REG`, `BIT` và toàn bộ biểu thức để tránh lỗi thứ tự ưu tiên toán tử khi truyền biểu thức như `BIT = i + 1`. (Macro=SET_BIT, An toàn ngoặc=Đạt chuẩn)",
          "Bước 2: Macro xóa bit an toàn cho thanh ghi 8-bit AVR. (Macro=CLR_BIT, Mặt nạ=~(1U << BIT))",
          "Bước 3: Macro đọc bit luôn trả về đúng 0 hoặc 1. (Macro=READ_BIT, Trả về=0 hoặc 1)"
        ],
        "testRows": [
          [
            "Case 1",
            "SET_BIT(DDRB, 3)",
            "0x08"
          ],
          [
            "Case 2",
            "CLR_BIT(PORTB, 3)",
            "0x00"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → Port B/C/D. Đặt Breakpoint (F9) ở `while(1)`, nhấn F5 (hoặc F10/F11 từng dòng) để thấy bit DDRx/PORTx/PINx đổi màu đỏ.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 016: Viết Macro chuẩn hóa thao tác Bit (`SET_BIT`, `CLR_BIT`, `TOG_BIT`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void bit_macros_solve(void)\n * ============================================================ */\n\nint main(void) {\n    // Thử macro SET_BIT với DDRB và PORTB, bit PB3.\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trong `<avr/sfr_defs.h>`, AVR-Libc cũng cung cấp sẵn `_BV(bit)` tương đương `(1 << (bit))`.",
        "hint2": "Không bao giờ truyền biểu thức có tác dụng phụ như `SET_BIT(PORTB, i++)` vào macro vì đối số có thể bị tính nhiều lần!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "DDRB = 0x00",
          "val": 0,
          "prev": 0,
          "mask": 8,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "Chuẩn bị gọi SET_BIT(DDRB, PB3)",
          "op": "OR (|=)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PORTB = 0x08",
          "val": 8,
          "prev": 0,
          "mask": 8,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "Chân PB3 (OC2A / MOSI) bật HIGH"
        }
      }
    },
    {
      "id": 17,
      "type": "task",
      "ewTitle": "Decode Status Register into Human-Readable Flags",
      "title": "Giải mã thanh ghi trạng thái SREG (8 cờ I, T, H, S, V, N, Z, C)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M11 (CPU Registers)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SREG"
      ],
      "summary": "Giải mã từng bit của thanh ghi SREG (0x3F) trên ATmega328P để in ra cửa sổ UART Debug tên các cờ đang bật.",
      "filename": "avr_decode_sreg.c",
      "lines": [
        {
          "code": "uint8_t sreg = SREG; // giả sử 0x83 (I=1, Z=1, C=1)",
          "phase": "REGISTER",
          "explain": "Đọc thanh ghi trạng thái CPU SREG (địa chỉ I/O 0x3F). Giá trị 0x83 = 0b1000_0011 nghĩa là Global Interrupt (I), Zero (Z) và Carry (C) đang bật.",
          "cards": [
            [
              "SREG",
              "0x83",
              "blue"
            ],
            [
              "Các cờ bật",
              "I, Z, C",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "SREG = 0x83",
            "val": 131,
            "prev": 0,
            "mask": 131,
            "labels": [
              "I",
              "T",
              "H",
              "S",
              "V",
              "N",
              "Z",
              "C"
            ],
            "note": "Bit 7 (I), Bit 1 (Z), Bit 0 (C) đang bật"
          }
        },
        {
          "code": "const char flag_names[8] = {'C','Z','N','V','S','H','T','I'};",
          "phase": "SETUP",
          "explain": "Bảng ánh xạ chỉ số bit (0..7) sang ký hiệu cờ chuẩn trong Datasheet ATmega328P.",
          "cards": [
            [
              "Bit 0",
              "'C' (Carry)",
              "amber"
            ],
            [
              "Bit 1",
              "'Z' (Zero)",
              "amber"
            ],
            [
              "Bit 7",
              "'I' (Interrupt)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Ánh xạ bit → tên cờ",
            "val": 131,
            "prev": 131,
            "mask": 131,
            "labels": [
              "I",
              "T",
              "H",
              "S",
              "V",
              "N",
              "Z",
              "C"
            ],
            "note": "Duyệt i từ 0 đến 7"
          }
        },
        {
          "code": "for (uint8_t i = 0; i < 8; i++) if (sreg & (1U << i)) uart_putc(flag_names[i]);",
          "phase": "OUTPUT",
          "explain": "Duyệt qua từng bit từ 0 đến 7, nếu bit thứ i bằng 1 thì gửi tên cờ qua USART0 → đầu ra: \"CZI\".",
          "cards": [
            [
              "UART Output",
              "\"CZI\"",
              "green"
            ],
            [
              "Vòng lặp",
              "8 lần",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Kết quả giải mã: C, Z, I",
            "val": 131,
            "prev": 131,
            "mask": 131,
            "labels": [
              "I",
              "T",
              "H",
              "S",
              "V",
              "N",
              "Z",
              "C"
            ],
            "note": "Đã giải mã chính xác 3 cờ đang bật",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Trên ATmega328P, trước khi vào đoạn găng (critical section) ta thường lưu `uint8_t sreg = SREG; cli(); ... SREG = sreg;`.",
      "pitfall": "Đọc/ghi SREG trong C đã được `<avr/io.h>` định nghĩa sẵn là thanh ghi volatile.",
      "tests": [
        "+ SREG=0x83 → C, Z, I",
        "+ SREG=0x84 → N, I"
      ],
      "problem": {
        "scenario": "Chụp một byte SREG vào SRAM để debugger quan sát. Giải từng bit thành tên cờ. Giá trị cờ phụ thuộc lệnh máy tại điểm chụp.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Giải mã từng bit của thanh ghi SREG (0x3F) trên ATmega328P để in ra cửa sổ UART Debug tên các cờ đang bật.",
        "prototype": "void decode_sreg_solve(void)",
        "workedExample": [
          "Bước 1: Đọc thanh ghi trạng thái CPU SREG (địa chỉ I/O 0x3F). (SREG=0x83, Các cờ bật=I, Z, C)",
          "Bước 2: Bảng ánh xạ chỉ số bit (0. (Bit 0='C' (Carry), Bit 1='Z' (Zero))",
          "Bước 3: Duyệt qua từng bit từ 0 đến 7, nếu bit thứ i bằng 1 thì gửi tên cờ qua USART0 → đầu ra: \"CZI\". (UART Output=\"CZI\", Vòng lặp=8 lần)"
        ],
        "testRows": [
          [
            "Case 1",
            "SREG=0x83",
            "C, Z, I"
          ],
          [
            "Case 2",
            "SREG=0x84",
            "N, I"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SREG), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → Processor Status (8 cờ SREG) và Watch 1 (bật Hexadecimal Display). Đặt F9 ở `while(1)` rồi bấm F5.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 017: Giải mã thanh ghi trạng thái SREG (8 cờ I, T, H, S, V, N, Z, C)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void decode_sreg_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t sreg = SREG; // giả sử 0x83 (I=1, Z=1, C=1)\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trên ATmega328P, trước khi vào đoạn găng (critical section) ta thường lưu `uint8_t sreg = SREG; cli(); ... SREG = sreg;`.",
        "hint2": "Đọc/ghi SREG trong C đã được `<avr/io.h>` định nghĩa sẵn là thanh ghi volatile.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "SREG = 0x83",
          "val": 131,
          "prev": 0,
          "mask": 131,
          "labels": [
            "I",
            "T",
            "H",
            "S",
            "V",
            "N",
            "Z",
            "C"
          ],
          "note": "Bit 7 (I), Bit 1 (Z), Bit 0 (C) đang bật"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Kết quả giải mã: C, Z, I",
          "val": 131,
          "prev": 131,
          "mask": 131,
          "labels": [
            "I",
            "T",
            "H",
            "S",
            "V",
            "N",
            "Z",
            "C"
          ],
          "note": "Đã giải mã chính xác 3 cờ đang bật",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 18,
      "type": "task",
      "ewTitle": "Bit Spreading Interleave Bits with Zeros",
      "title": "Chèn bit 0 xen kẽ (Bit Spreading / Morton Code 8-bit → 16-bit)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 (Bit Manipulation)",
      "level": "Nâng cao",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Tách 8 bit của một byte `0babcdefgh` thành 16-bit có bit 0 xen kẽ `0b0a0b0c0d0e0f0g0h` (dùng trong mã hóa tín hiệu Manchester / đồ họa OLED).",
      "filename": "avr_bit_spread.c",
      "lines": [
        {
          "code": "uint16_t x = 0x000D; // 0b1101 (4 bit thấp)",
          "phase": "SETUP",
          "explain": "Nạp dữ liệu vào uint16_t để có đủ không gian giãn rộng gấp đôi số bit.",
          "cards": [
            [
              "x ban đầu",
              "0x000D (1101)",
              "blue"
            ],
            [
              "Mục tiêu",
              "0x0055 (0101_0101)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "x = 0x000D",
            "val": 13,
            "prev": 0,
            "mask": 15,
            "labels": [],
            "note": "4 bit đầu vào: 1 1 0 1"
          }
        },
        {
          "code": "x = (x | (x << 4)) & 0x0F0F;",
          "phase": "BITWISE",
          "explain": "Bước 1: tách hai nhóm 4 bit cách nhau 4 vị trí rồi lọc bằng mặt nạ 0x0F0F.",
          "cards": [
            [
              "x bước 1",
              "0x000D",
              "amber"
            ],
            [
              "Mask",
              "0x0F0F",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "Bước 1: & 0x0F0F",
            "val": 13,
            "prev": 13,
            "mask": 3855,
            "labels": [],
            "note": "Giãn nhóm 4 bit",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "x = (x | (x << 2)) & 0x3333;",
          "phase": "BITWISE",
          "explain": "Bước 2: tách từng cặp 2 bit → 0b0011_0001 (0x0031).",
          "cards": [
            [
              "x bước 2",
              "0x0031",
              "amber"
            ],
            [
              "Mask",
              "0x3333",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "Bước 2: 0x0031",
            "val": 49,
            "prev": 13,
            "mask": 13107,
            "labels": [],
            "note": "Tách cặp 2 bit: 11 00 01",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "x = (x | (x << 1)) & 0x5555;",
          "phase": "OUTPUT",
          "explain": "Bước 3: tách từng bit đơn và lọc các vị trí chẵn bằng 0x5555 → 0x0051 (0b0101_0001)!",
          "cards": [
            [
              "Kết quả",
              "0x0051",
              "green"
            ],
            [
              "Nhị phân",
              "0101_0001",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "Kết quả = 0x0051",
            "val": 81,
            "prev": 49,
            "mask": 21845,
            "labels": [],
            "note": "Bit 1,1,0,1 đã giãn thành 01 01 00 01",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Kỹ thuật Divide-and-Conquer giãn bit chỉ tốn 3 phép dịch thay vì vòng lặp 8 lần, cực nhanh trên AVR không có Barrel Shifter.",
      "pitfall": "Trên AVR, mỗi lệnh dịch bit `LSL` chỉ dịch 1 bit/chu kỳ, nên dịch 4 lần có thể được avr-gcc tối ưu thành lệnh `SWAP` (đổi nibble trong 1 chu kỳ!).",
      "tests": [
        "+ 0x0D (1101) → 0x51 (01010001)",
        "+ 0xFF → 0x5555"
      ],
      "problem": {
        "scenario": "Đóng gói mẫu 8 bit trước khi gửi từ USART0. Gắn bit nguồn vào các vị trí chẵn của từ 16 bit đã quy ước trong giao thức.\n\nKhi lập trình bare-metal cho ATmega328P, bạn phải điều khiển chính xác từng bit của thanh ghi ngoại vi (8-bit/32-bit) mà không làm nhiễu các chân/cờ lân cận. Bài toán thực tế: Tách 8 bit của một byte `0babcdefgh` thành 16-bit có bit 0 xen kẽ `0b0a0b0c0d0e0f0g0h` (dùng trong mã hóa tín hiệu Manchester / đồ họa OLED).",
        "prototype": "void bit_spread_solve(void)",
        "workedExample": [
          "Bước 1: Nạp dữ liệu vào uint16_t để có đủ không gian giãn rộng gấp đôi số bit. (x ban đầu=0x000D (1101), Mục tiêu=0x0055 (0101_0101))",
          "Bước 2: Bước 1: tách hai nhóm 4 bit cách nhau 4 vị trí rồi lọc bằng mặt nạ 0x0F0F. (x bước 1=0x000D, Mask=0x0F0F)",
          "Bước 3: Bước 2: tách từng cặp 2 bit → 0b0011_0001 (0x0031). (x bước 2=0x0031, Mask=0x3333)"
        ],
        "testRows": [
          [
            "Case 1",
            "0x0D (1101)",
            "0x51 (01010001)"
          ],
          [
            "Case 2",
            "0xFF",
            "0x5555"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 018: Chèn bit 0 xen kẽ (Bit Spreading / Morton Code 8-bit → 16-bit)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void bit_spread_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t x = 0x000D; // 0b1101 (4 bit thấp)\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Kỹ thuật Divide-and-Conquer giãn bit chỉ tốn 3 phép dịch thay vì vòng lặp 8 lần, cực nhanh trên AVR không có Barrel Shifter.",
        "hint2": "Trên AVR, mỗi lệnh dịch bit `LSL` chỉ dịch 1 bit/chu kỳ, nên dịch 4 lần có thể được avr-gcc tối ưu thành lệnh `SWAP` (đổi nibble trong 1 chu kỳ!).",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "x = 0x000D",
          "val": 13,
          "prev": 0,
          "mask": 15,
          "labels": [],
          "note": "4 bit đầu vào: 1 1 0 1"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "Kết quả = 0x0051",
          "val": 81,
          "prev": 49,
          "mask": 21845,
          "labels": [],
          "note": "Bit 1,1,0,1 đã giãn thành 01 01 00 01",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 19,
      "type": "task",
      "ewTitle": "Macro-Based Register Config Helper",
      "title": "Macro cấu hình thanh ghi đa trường (Timer0 TCCR0A/B)",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M10 & M11 (Timer/PWM)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "TIMER"
      ],
      "summary": "Dùng macro `MODIFY_REG(REG, MASK, VAL)` để cấu hình cùng lúc nhiều bit trong thanh ghi TCCR0B (chọn Prescaler Timer0) chỉ trong 1 lần ghi.",
      "filename": "avr_reg_helper.c",
      "lines": [
        {
          "code": "#define MODIFY_REG(REG, MASK, VAL) ((REG) = ((REG) & ~(MASK)) | ((VAL) & (MASK)))",
          "phase": "SETUP",
          "explain": "Macro chuẩn công nghiệp (giống HAL/CMSIS): xóa sạch vùng bit trong MASK rồi OR giá trị mới VAL vào, đảm bảo VAL không tràn ra ngoài MASK.",
          "cards": [
            [
              "Macro",
              "MODIFY_REG",
              "purple"
            ],
            [
              "An toàn",
              "Bảo vệ bởi MASK",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "TCCR0B (0x45)",
            "val": 1,
            "prev": 1,
            "mask": 7,
            "labels": [
              "FOC0A",
              "FOC0B",
              "-",
              "-",
              "WGM02",
              "CS02",
              "CS01",
              "CS00"
            ],
            "note": "Đang là Prescaler = 1 (CS02:0 = 001)"
          }
        },
        {
          "code": "#define T0_CS_MASK 0x07U",
          "phase": "SETUP",
          "explain": "3 bit thấp CS02..CS00 (0b0000_0111 = 0x07) điều khiển bộ chia tần Clock của Timer0.",
          "cards": [
            [
              "T0_CS_MASK",
              "0x07",
              "amber"
            ],
            [
              "CS02:0 = 011",
              "Chia 64",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "T0_CS_MASK = 0x07",
            "val": 7,
            "prev": 1,
            "mask": 7,
            "labels": [
              "FOC0A",
              "FOC0B",
              "-",
              "-",
              "WGM02",
              "CS02",
              "CS01",
              "CS00"
            ],
            "note": "Vùng 3 bit Prescaler"
          }
        },
        {
          "code": "MODIFY_REG(TCCR0B, T0_CS_MASK, 0x03U);",
          "phase": "OUTPUT",
          "explain": "Xóa CS02:0 cũ (001 → 000) và ghi mới 011 (Prescaler = 64 → 16MHz/64 = 250kHz) mà không đụng tới WGM02!",
          "cards": [
            [
              "TCCR0B mới",
              "0x03",
              "green"
            ],
            [
              "Tần số Timer0",
              "250 kHz",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "TCCR0B = 0x03 (Chia 64)",
            "val": 3,
            "prev": 1,
            "mask": 7,
            "labels": [
              "FOC0A",
              "FOC0B",
              "-",
              "-",
              "WGM02",
              "CS02",
              "CS01",
              "CS00"
            ],
            "note": "Đã chuyển Prescaler sang 64 an toàn"
          }
        }
      ],
      "remember": "`MODIFY_REG` giúp tránh trạng thái trung gian sai (glitch) nếu ta tách riêng thành 2 dòng ghi thanh ghi xóa rồi mới bật.",
      "pitfall": "Luôn viết `((VAL) & (MASK))` để đề phòng người gọi truyền VAL lớn hơn số bit cho phép.",
      "tests": [
        "+ TCCR0B=0x09 (WGM02=1, CS=1) → MODIFY_REG(...,0x07,0x03) → 0x0B (WGM02 vẫn = 1)"
      ],
      "problem": {
        "scenario": "Thay các bit CS02:0 của TCCR0B bằng cấu hình prescaler mới. Giữ WGM02. Tính trên bản sao trước khi cân nhắc ghi thanh ghi thật.\n\nViết macro MODIFY_REG(REG, MASK, VAL) để cập nhật trường bộ chia Timer0. Thử với biến mô phỏng timer_control trước. Nếu chuyển sang thanh ghi thật, đọc datasheet về các bit FOC0A/FOC0B và kiểm truy cập từ ISR.",
        "prototype": "void reg_helper_solve(void)",
        "workedExample": [
          "Bước 1: Macro chuẩn công nghiệp (giống HAL/CMSIS): xóa sạch vùng bit trong MASK rồi OR giá trị mới VAL vào, đảm bảo VAL không tràn ra ngoài MASK. (Macro=MODIFY_REG, An toàn=Bảo vệ bởi MASK)",
          "Bước 2: 3 bit thấp CS02. (T0_CS_MASK=0x07, CS02:0 = 011=Chia 64)",
          "Bước 3: Xóa CS02:0 cũ (001 → 000) và ghi mới 011 (Prescaler = 64 → 16MHz/64 = 250kHz) mà không đụng tới WGM02!. (TCCR0B mới=0x03, Tần số Timer0=250 kHz)"
        ],
        "testRows": [
          [
            "Case 1",
            "TCCR0B=0x09 (WGM02=1, CS=1)",
            "MODIFY_REG(...,0x07,0x03) → 0x0B (WGM02 vẫn = 1)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, TIMER), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 19 · ATmega328P */\nint main(void) {\n    uint8_t timer_control = 0x09U;\n    const uint8_t prescaler_mask = 0x07U;\n    const uint8_t prescaler = 0x03U;\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "`MODIFY_REG` giúp tránh trạng thái trung gian sai (glitch) nếu ta tách riêng thành 2 dòng ghi thanh ghi xóa rồi mới bật.",
        "hint2": "Luôn viết `((VAL) & (MASK))` để đề phòng người gọi truyền VAL lớn hơn số bit cho phép.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "TCCR0B (0x45)",
          "val": 1,
          "prev": 1,
          "mask": 7,
          "labels": [
            "FOC0A",
            "FOC0B",
            "-",
            "-",
            "WGM02",
            "CS02",
            "CS01",
            "CS00"
          ],
          "note": "Đang là Prescaler = 1 (CS02:0 = 001)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "TCCR0B = 0x03 (Chia 64)",
          "val": 3,
          "prev": 1,
          "mask": 7,
          "labels": [
            "FOC0A",
            "FOC0B",
            "-",
            "-",
            "WGM02",
            "CS02",
            "CS01",
            "CS00"
          ],
          "note": "Đã chuyển Prescaler sang 64 an toàn"
        }
      }
    },
    {
      "id": 20,
      "type": "quiz",
      "ewTitle": "Bitwise Operations-I",
      "title": "Quiz: Toán tử Bitwise cơ bản trên ATmega328P",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9",
      "level": "Nền tảng",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Ôn tập toán tử |, &, ^, ~ trên thanh ghi DDRB/PORTB.",
      "questions": [
        {
          "q": "Muốn bật riêng bit 4 của `PORTD` mà không thay đổi các bit khác, ta viết lệnh nào?",
          "opts": [
            "PORTD = (1U << 4);",
            "PORTD |= (1U << 4);",
            "PORTD &= (1U << 4);",
            "PORTD ^= (1U << 4);"
          ],
          "ans": 1,
          "exp": "Toán tử `|=` bật bit mục tiêu lên 1 và giữ nguyên 7 bit còn lại."
        },
        {
          "q": "Giá trị của `0xA5 & 0x0F` là bao nhiêu?",
          "opts": [
            "0xA0",
            "0x05",
            "0xAF",
            "0x50"
          ],
          "ans": 1,
          "exp": "0x0F (0000_1111) giữ nguyên 4 bit thấp (0x5) và xóa 4 bit cao về 0 → 0x05."
        },
        {
          "q": "Lệnh nào trên ATmega328P đảo trạng thái chân PB5 nguyên tử (atomic) chỉ trong 1 lệnh ghi?",
          "opts": [
            "PORTB = (1U << PB5);",
            "PINB = (1U << PB5);",
            "DDRB ^= (1U << PB5);",
            "PINB |= (1U << PB5);"
          ],
          "ans": 1,
          "exp": "Datasheet ATmega328P quy định ghi 1 vào bit tương ứng của thanh ghi PINx sẽ tự động đảo bit ở PORTx."
        },
        {
          "q": "PORTB = 0x05. Đặt riêng PB5 cho kết quả gì?",
          "opts": [
            "0x05",
            "0x20",
            "0x25"
          ],
          "ans": 2,
          "exp": "OR với 0x20 giữ PB0 và PB2."
        }
      ],
      "remember": "Ghi nhớ bộ tứ: Set `|=`, Clear `&= ~`, Toggle `^=`, Check `&`.",
      "pitfall": "Không bao giờ dùng `PINB |= ...` khi muốn dùng tính năng hardware toggle!",
      "avrContext": "Hình dung từng đầu ra trên PORTB: việc đặt, xóa và đảo cần giữ các chân không thuộc mặt nạ."
    },
    {
      "id": 21,
      "type": "quiz",
      "ewTitle": "Bitwise Operations-II",
      "title": "Quiz: Mặt nạ Bit, Macro & Độ ưu tiên toán tử",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M10",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Kiểm tra bẫy độ ưu tiên toán tử và lỗi thiếu ngoặc trong Macro.",
      "questions": [
        {
          "q": "Biểu thức `if (PIND & (1U << 2) == 0)` gặp lỗi gì trong C?",
          "opts": [
            "Không có lỗi",
            "Toán tử `==` ưu tiên CAO HƠN `&`, nên nó tính `(1U << 2) == 0` trước!",
            "Toán tử `&` ưu tiên cao hơn `<<`",
            "Lỗi kiểu dữ liệu"
          ],
          "ans": 1,
          "exp": "Trong C, `==` ưu tiên cao hơn `&`! Biểu thức trên thành `PIND & 0` luôn bằng 0. Phải viết `if ((PIND & (1U << 2)) == 0)`."
        },
        {
          "q": "Kết quả của `~(uint8_t)0x0F` khi ép về `uint8_t` là gì?",
          "opts": [
            "0xF0",
            "0x0F",
            "0xFF",
            "0x00"
          ],
          "ans": 0,
          "exp": "Đảo từng bit của 0000_1111 cho ra 1111_0000 (0xF0)."
        },
        {
          "q": "Nếu `DDRB = 0xFF` và `PORTB = 0x55`, sau `PORTB ^= 0xFF` giá trị `PORTB` là?",
          "opts": [
            "0x55",
            "0xFF",
            "0xAA",
            "0x00"
          ],
          "ans": 2,
          "exp": "XOR với 0xFF đảo toàn bộ 8 bit: 0101_0101 → 1010_1010 (0xAA)."
        },
        {
          "q": "Muốn đặt PD6 làm đầu ra mà giữ hướng các chân khác, chọn lệnh nào?",
          "opts": [
            "DDRD |= (1U << 6)",
            "DDRD = (1U << 6)",
            "PORTD |= (1U << 6)"
          ],
          "ans": 0,
          "exp": "DDRD chọn hướng và OR giữ bit khác."
        }
      ],
      "remember": "Luôn đặt ngoặc đơn quanh phép toán bitwise khi kết hợp với `==` hoặc `!=`.",
      "pitfall": "Toán tử so sánh (`==`, `!=`) có độ ưu tiên cao hơn toán tử bitwise (`&`, `^`, `|`)!",
      "avrContext": "Trước khi áp dụng macro lên DDRB/PORTB, khai triển nó ra để kiểm thứ tự tính và số lần đánh giá đối số."
    },
    {
      "id": 22,
      "type": "quiz",
      "ewTitle": "Bitwise Operations-III",
      "title": "Quiz: Kỹ thuật Bit nâng cao trên AVR",
      "moduleId": "m2_bitwise",
      "brochureRef": "Brochure M9 & M10",
      "level": "Trung bình",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SREG"
      ],
      "summary": "Kiểm tra hiểu biết về xóa cờ ngắt AVR, 1UL và Bit Smearing.",
      "questions": [
        {
          "q": "Trên ATmega328P, muốn xóa cờ tràn Timer0 (`TOV0` trong thanh ghi `TIFR0`), ta phải viết lệnh nào?",
          "opts": [
            "TIFR0 &= ~(1U << TOV0);",
            "TIFR0 |= (1U << TOV0);",
            "TIFR0 = (1U << TOV0);",
            "TIFR0 ^= (1U << TOV0);"
          ],
          "ans": 2,
          "exp": "Cờ ngắt trên AVR xóa bằng cách ghi logic 1 (write-1-to-clear). Dùng `TIFR0 = (1U << TOV0);` để chỉ xóa đúng TOV0 mà không vô tình xóa các cờ khác đang bằng 1!"
        },
        {
          "q": "Trên ATmega328P, giá trị của `(1 << 16)` là bao nhiêu?",
          "opts": [
            "65536",
            "0 (Undefined Behavior vì int chỉ 16-bit)",
            "1",
            "32768"
          ],
          "ans": 1,
          "exp": "Hằng số `1` là `int` 16-bit trên AVR. Phải viết `(1UL << 16)` để có giá trị 65536."
        },
        {
          "q": "Biểu thức `x & (x - 1)` có tác dụng gì?",
          "opts": [
            "Bật bit 0 thấp nhất",
            "Xóa bit 1 thấp nhất (Lowest Set Bit)",
            "Đảo tất cả các bit",
            "Nhân đôi x"
          ],
          "ans": 1,
          "exp": "`x & (x - 1)` xóa đi bit 1 nằm ngoài cùng bên phải (Brian Kernighan's trick)."
        },
        {
          "q": "SREG = 0x82 thì cờ nào bật?",
          "opts": [
            "I và C",
            "I và Z",
            "T và N"
          ],
          "ans": 1,
          "exp": "I ở bit 7, Z ở bit 1."
        }
      ],
      "remember": "Với thanh ghi cờ ngắt AVR (TIFR0, EIFR, ADIF): ghi trực tiếp `TIFR0 = (1U << TOV0);` chứ không dùng `|=`!",
      "pitfall": "Dùng `|=` trên TIFR0 sẽ đọc lại các cờ khác đang là 1 và ghi 1 lại vào chúng → vô tình xóa mất các cờ ngắt khác!",
      "avrContext": "Đọc một ảnh chụp thanh ghi AVR. Tách thông tin vị trí bit khỏi giá trị thập phân để kiểm phép biến đổi."
    },
    {
      "id": 23,
      "type": "task",
      "ewTitle": "Extract the Nibble from an 8-bit Register",
      "title": "Trích xuất Nibble cao/thấp (Giao tiếp LCD 16x2 chế độ 4-bit)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9 & M11 (LCD/GPIO)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Tách 4 bit cao (high nibble) và 4 bit thấp (low nibble) của một ký tự ASCII để gửi ra chân PD4..PD7 của LCD 16x2.",
      "filename": "avr_nibble.c",
      "lines": [
        {
          "code": "uint8_t ch = 'A'; // 0x41 = 0100_0001",
          "phase": "SETUP",
          "explain": "Ký tự 'A' có mã ASCII 0x41: nibble cao = 0x4 (0100), nibble thấp = 0x1 (0001).",
          "cards": [
            [
              "ch",
              "0x41 ('A')",
              "blue"
            ],
            [
              "High Nibble",
              "0x4",
              "purple"
            ],
            [
              "Low Nibble",
              "0x1",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "ch = 0x41",
            "val": 65,
            "prev": 0,
            "mask": 240,
            "labels": [],
            "note": "4 bit cao = 0100, 4 bit thấp = 0001"
          }
        },
        {
          "code": "uint8_t hi = (ch >> 4) & 0x0FU;",
          "phase": "BITWISE",
          "explain": "Dịch phải 4 bit (avr-gcc tối ưu thành lệnh `SWAP` + `ANDI 0x0F`, chỉ 2 chu kỳ!) để lấy 0x04.",
          "cards": [
            [
              "hi",
              "0x04",
              "green"
            ],
            [
              "ASM AVR",
              "SWAP + ANDI",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "hi = 0x04",
            "val": 4,
            "prev": 65,
            "mask": 15,
            "labels": [],
            "note": "Nibble cao đưa về vị trí 3..0",
            "op": "SHIFT RIGHT (>>)"
          }
        },
        {
          "code": "uint8_t lo = ch & 0x0FU;",
          "phase": "OUTPUT",
          "explain": "AND với 0x0F giữ lại đúng 4 bit thấp → 0x01.",
          "cards": [
            [
              "lo",
              "0x01",
              "green"
            ],
            [
              "Sẵn sàng LCD",
              "Gửi hi trước, lo sau",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "lo = 0x01",
            "val": 1,
            "prev": 65,
            "mask": 15,
            "labels": [],
            "note": "Nibble thấp = 0x01"
          }
        }
      ],
      "remember": "Nibble cao: `(x >> 4) & 0x0F`, Nibble thấp: `x & 0x0F`.",
      "pitfall": "Khi xuất ra PORTD[7:4], nhớ xóa 4 bit cao cũ trước: `PORTD = (PORTD & 0x0F) | (ch & 0xF0);`.",
      "tests": [
        "+ 0x41 → hi=0x04, lo=0x01",
        "+ 0xF3 → hi=0x0F, lo=0x03"
      ],
      "problem": {
        "scenario": "LCD 4 bit nhận hai nửa của một byte. Chuẩn bị nibble cao trước, rồi nibble thấp để driver ánh xạ lên các chân dữ liệu.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Tách 4 bit cao (high nibble) và 4 bit thấp (low nibble) của một ký tự ASCII để gửi ra chân PD4..PD7 của LCD 16x2.",
        "prototype": "void nibble_solve(void)",
        "workedExample": [
          "Bước 1: Ký tự 'A' có mã ASCII 0x41: nibble cao = 0x4 (0100), nibble thấp = 0x1 (0001). (ch=0x41 ('A'), High Nibble=0x4)",
          "Bước 2: Dịch phải 4 bit (avr-gcc tối ưu thành lệnh `SWAP` + `ANDI 0x0F`, chỉ 2 chu kỳ!) để lấy 0x04. (hi=0x04, ASM AVR=SWAP + ANDI)",
          "Bước 3: AND với 0x0F giữ lại đúng 4 bit thấp → 0x01. (lo=0x01, Sẵn sàng LCD=Gửi hi trước, lo sau)"
        ],
        "testRows": [
          [
            "Case 1",
            "0x41",
            "hi=0x04, lo=0x01"
          ],
          [
            "Case 2",
            "0xF3",
            "hi=0x0F, lo=0x03"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → Port B/C/D. Đặt Breakpoint (F9) ở `while(1)`, nhấn F5 (hoặc F10/F11 từng dòng) để thấy bit DDRx/PORTx/PINx đổi màu đỏ.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 023: Trích xuất Nibble cao/thấp (Giao tiếp LCD 16x2 chế độ 4-bit)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void nibble_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t ch = 'A'; // 0x41 = 0100_0001\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Nibble cao: `(x >> 4) & 0x0F`, Nibble thấp: `x & 0x0F`.",
        "hint2": "Khi xuất ra PORTD[7:4], nhớ xóa 4 bit cao cũ trước: `PORTD = (PORTD & 0x0F) | (ch & 0xF0);`.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "ch = 0x41",
          "val": 65,
          "prev": 0,
          "mask": 240,
          "labels": [],
          "note": "4 bit cao = 0100, 4 bit thấp = 0001"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "lo = 0x01",
          "val": 1,
          "prev": 65,
          "mask": 15,
          "labels": [],
          "note": "Nibble thấp = 0x01"
        }
      }
    },
    {
      "id": 24,
      "type": "task",
      "ewTitle": "Set Multiple Bits in 8-bit Register",
      "title": "Bật đồng thời nhiều Bit (Cấu hình kênh ADC trong ADMUX)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9 & M11 (ADC)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "ADC"
      ],
      "summary": "Bật đồng thời điện áp tham chiếu AVcc (REFS0=1) và chọn kênh ADC3 (MUX1=1, MUX0=1) trong thanh ghi ADMUX.",
      "filename": "avr_set_multibits.c",
      "lines": [
        {
          "code": "uint8_t admux = 0x00;",
          "phase": "SETUP",
          "explain": "Thanh ghi ADMUX (0x7C) điều khiển điện áp tham chiếu (REFS1:0) và kênh đầu vào analog (MUX3:0).",
          "cards": [
            [
              "ADMUX",
              "0x00",
              "blue"
            ],
            [
              "Kênh mục tiêu",
              "ADC3 + AVcc",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "ADMUX (0x7C)",
            "val": 0,
            "prev": 0,
            "mask": 67,
            "labels": [
              "REFS1",
              "REFS0",
              "ADLAR",
              "-",
              "MUX3",
              "MUX2",
              "MUX1",
              "MUX0"
            ],
            "note": "ADMUX ban đầu = 0x00"
          }
        },
        {
          "code": "admux |= (1U << REFS0) | (1U << MUX1) | (1U << MUX0);",
          "phase": "OUTPUT",
          "explain": "Gộp mặt nạ 0x40 | 0x02 | 0x01 = 0x43 để bật cả 3 bit trong 1 phép gán duy nhất.",
          "cards": [
            [
              "ADMUX mới",
              "0x43",
              "green"
            ],
            [
              "Vref",
              "AVcc (5V)",
              "green"
            ],
            [
              "Kênh",
              "ADC3 (PC3)",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "ADMUX = 0x43",
            "val": 67,
            "prev": 0,
            "mask": 67,
            "labels": [
              "REFS1",
              "REFS0",
              "ADLAR",
              "-",
              "MUX3",
              "MUX2",
              "MUX1",
              "MUX0"
            ],
            "note": "REFS0=1 và MUX1:0=11 đã bật",
            "op": "OR (|=)"
          }
        }
      ],
      "remember": "Gộp nhiều mặt nạ bằng toán tử `|` rồi OR một lần vào thanh ghi phần cứng.",
      "pitfall": "Khi chuyển từ kênh ADC3 sang ADC1, phải xóa sạch 4 bit MUX3:0 trước (`ADMUX = (ADMUX & 0xF0) | 1;`), nếu chỉ dùng `|=` sẽ bị trộn kênh!",
      "tests": [
        "+ REFS0(6) | MUX1(1) | MUX0(0) = 0x43"
      ],
      "problem": {
        "scenario": "Thử trên bản sao ADMUX. Xác định trường REFS và MUX cho tham chiếu AVcc và ADC3. Khi đổi kênh cũ, xóa nhóm MUX trước khi đặt giá trị mới.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Bật đồng thời điện áp tham chiếu AVcc (REFS0=1) và chọn kênh ADC3 (MUX1=1, MUX0=1) trong thanh ghi ADMUX.",
        "prototype": "void set_multibits_solve(void)",
        "workedExample": [
          "Bước 1: Thanh ghi ADMUX (0x7C) điều khiển điện áp tham chiếu (REFS1:0) và kênh đầu vào analog (MUX3:0). (ADMUX=0x00, Kênh mục tiêu=ADC3 + AVcc)",
          "Bước 2: Gộp mặt nạ 0x40 | 0x02 | 0x01 = 0x43 để bật cả 3 bit trong 1 phép gán duy nhất. (ADMUX mới=0x43, Vref=AVcc (5V))"
        ],
        "testRows": [
          [
            "Case 1",
            "ADMUX = 0x00, Kênh mục tiêu = ADC3 + AVcc, ADMUX mới = 0x43",
            "REFS0(6) | MUX1(1) | MUX0(0) = 0x43"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, ADC), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 024: Bật đồng thời nhiều Bit (Cấu hình kênh ADC trong ADMUX)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void set_multibits_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t admux = 0x00;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Gộp nhiều mặt nạ bằng toán tử `|` rồi OR một lần vào thanh ghi phần cứng.",
        "hint2": "Khi chuyển từ kênh ADC3 sang ADC1, phải xóa sạch 4 bit MUX3:0 trước (`ADMUX = (ADMUX & 0xF0) | 1;`), nếu chỉ dùng `|=` sẽ bị trộn kênh!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "ADMUX (0x7C)",
          "val": 0,
          "prev": 0,
          "mask": 67,
          "labels": [
            "REFS1",
            "REFS0",
            "ADLAR",
            "-",
            "MUX3",
            "MUX2",
            "MUX1",
            "MUX0"
          ],
          "note": "ADMUX ban đầu = 0x00"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "ADMUX = 0x43",
          "val": 67,
          "prev": 0,
          "mask": 67,
          "labels": [
            "REFS1",
            "REFS0",
            "ADLAR",
            "-",
            "MUX3",
            "MUX2",
            "MUX1",
            "MUX0"
          ],
          "note": "REFS0=1 và MUX1:0=11 đã bật",
          "op": "OR (|=)"
        }
      }
    },
    {
      "id": 25,
      "type": "task",
      "ewTitle": "Extract a Bit Field from a 32-bit Register",
      "title": "Trích xuất Trường Bit từ khung dữ liệu 32-bit (Gói Telemetry)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9 (Bit Masking)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Trích xuất trường 5-bit bắt đầu từ vị trí bit 12 trong một gói trạng thái 32-bit bằng `(reg >> pos) & ((1UL << len) - 1)`.",
      "filename": "avr_extract_bf32.c",
      "lines": [
        {
          "code": "uint32_t pkt = 0x0001A340UL;",
          "phase": "SETUP",
          "explain": "Gói dữ liệu 32-bit nhận qua SPI/UART từ cảm biến. Cần lấy 5 bit tại vị trí 12..16.",
          "cards": [
            [
              "pkt",
              "0x0001A340",
              "blue"
            ],
            [
              "pos / len",
              "12 / 5 bit",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "pkt[15:0] = 0xA340",
            "val": 41792,
            "prev": 0,
            "mask": 61440,
            "labels": [],
            "note": "Trường cần lấy nằm ở bit 12..16"
          }
        },
        {
          "code": "uint32_t mask = (1UL << 5) - 1UL; // 0x1F",
          "phase": "BITWISE",
          "explain": "Công thức tạo mặt nạ gồm `len` bit 1 liên tiếp: `(1UL << 5) - 1 = 31 (0x1F = 0b11111)`.",
          "cards": [
            [
              "mask",
              "0x1F (5 bit 1)",
              "amber"
            ],
            [
              "Hậu tố",
              "1UL (32-bit)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "mask = 0x1F",
            "val": 31,
            "prev": 0,
            "mask": 31,
            "labels": [],
            "note": "5 bit 1 liên tiếp",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "uint8_t field = (uint8_t)((pkt >> 12) & mask);",
          "phase": "OUTPUT",
          "explain": "Dịch phải 12 bit được 0x001A, AND với 0x1F cho kết quả 0x1A (26).",
          "cards": [
            [
              "pkt >> 12",
              "0x001A",
              "amber"
            ],
            [
              "field",
              "26 (0x1A)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "field = 0x1A (26)",
            "val": 26,
            "prev": 0,
            "mask": 31,
            "labels": [],
            "note": "Đã trích xuất chính xác 5 bit = 26",
            "op": "SHIFT RIGHT (>>)"
          }
        }
      ],
      "remember": "Công thức tổng quát trích trường bit: `(reg >> pos) & ((1UL << len) - 1)`.",
      "pitfall": "Với len = 32, `(1UL << 32)` là Undefined Behavior! Hãy dùng `~0UL` cho trường hợp 32 bit.",
      "tests": [
        "+ pkt=0x0001A340, pos=12, len=5 → 0x1A (26)"
      ],
      "problem": {
        "scenario": "USART0 nhận một khung phần mềm 32 bit. Trích trường dữ liệu theo vị trí trong đề, sau khi đã ghép byte theo giao thức.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Trích xuất trường 5-bit bắt đầu từ vị trí bit 12 trong một gói trạng thái 32-bit bằng `(reg >> pos) & ((1UL << len) - 1)`.",
        "prototype": "void extract_bf32_solve(void)",
        "workedExample": [
          "Bước 1: Gói dữ liệu 32-bit nhận qua SPI/UART từ cảm biến. (pkt=0x0001A340, pos / len=12 / 5 bit)",
          "Bước 2: Công thức tạo mặt nạ gồm `len` bit 1 liên tiếp: `(1UL << 5) - 1 = 31 (0x1F = 0b11111)`. (mask=0x1F (5 bit 1), Hậu tố=1UL (32-bit))",
          "Bước 3: Dịch phải 12 bit được 0x001A, AND với 0x1F cho kết quả 0x1A (26). (pkt >> 12=0x001A, field=26 (0x1A))"
        ],
        "testRows": [
          [
            "Case 1",
            "pkt=0x0001A340, pos=12, len=5",
            "0x1A (26)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 025: Trích xuất Trường Bit từ khung dữ liệu 32-bit (Gói Telemetry)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void extract_bf32_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint32_t pkt = 0x0001A340UL;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Công thức tổng quát trích trường bit: `(reg >> pos) & ((1UL << len) - 1)`.",
        "hint2": "Với len = 32, `(1UL << 32)` là Undefined Behavior! Hãy dùng `~0UL` cho trường hợp 32 bit.",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "pkt[15:0] = 0xA340",
          "val": 41792,
          "prev": 0,
          "mask": 61440,
          "labels": [],
          "note": "Trường cần lấy nằm ở bit 12..16"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "field = 0x1A (26)",
          "val": 26,
          "prev": 0,
          "mask": 31,
          "labels": [],
          "note": "Đã trích xuất chính xác 5 bit = 26",
          "op": "SHIFT RIGHT (>>)"
        }
      }
    },
    {
      "id": 26,
      "type": "task",
      "ewTitle": "Clear Specific Bits in a 32-bit Register",
      "title": "Xóa một Trường Bit liên tiếp trong từ 32-bit",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Xóa sạch `len` bit kể từ vị trí `pos` trong biến `uint32_t` mà không ảnh hưởng các trường lân cận.",
      "filename": "avr_clear_bf32.c",
      "lines": [
        {
          "code": "uint32_t reg = 0x00FF1234UL;",
          "phase": "SETUP",
          "explain": "Cần xóa 4 bit tại vị trí 8..11 (nibble đang mang giá trị 0x2).",
          "cards": [
            [
              "reg cũ",
              "0x00FF1234",
              "blue"
            ],
            [
              "Vùng xóa",
              "bit 8..11",
              "rose"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "reg[15:0] = 0x1234",
            "val": 4660,
            "prev": 4660,
            "mask": 3840,
            "labels": [],
            "note": "Nibble bit 8..11 đang là 0x2"
          }
        },
        {
          "code": "uint32_t mask = ((1UL << 4) - 1UL) << 8; // 0x0F00",
          "phase": "BITWISE",
          "explain": "Tạo mặt nạ 4 bit 1 (0xF) rồi dịch trái 8 vị trí → 0x00000F00.",
          "cards": [
            [
              "mask",
              "0x00000F00",
              "amber"
            ],
            [
              "~mask",
              "0xFFFFF0FF",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "mask = 0x0F00",
            "val": 3840,
            "prev": 0,
            "mask": 3840,
            "labels": [],
            "note": "Mặt nạ khoanh vùng bit 8..11",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "reg &= ~mask; // 0x00FF1034",
          "phase": "OUTPUT",
          "explain": "AND với `~mask` xóa riêng nibble 8..11 về 0, các bit khác giữ nguyên: 0x00FF1034.",
          "cards": [
            [
              "reg mới",
              "0x00FF1034",
              "green"
            ],
            [
              "Bit 8..11",
              "0x0",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "reg[15:0] = 0x1034",
            "val": 4148,
            "prev": 4660,
            "mask": 3840,
            "labels": [],
            "note": "Nibble 8..11 đã về 0",
            "op": "AND NOT (&= ~)"
          }
        }
      ],
      "remember": "Xóa trường bit: `reg &= ~(((1UL << len) - 1UL) << pos)`.",
      "pitfall": "Quên dịch trái `<< pos` sẽ xóa nhầm các bit thấp 0..len-1!",
      "tests": [
        "+ 0x00FF1234 clear(pos=8, len=4) → 0x00FF1034"
      ],
      "problem": {
        "scenario": "Trong bản chụp cấu hình 32 bit lưu SRAM, xóa riêng trường chưa dùng trước khi gửi UART. Không ghi trực tiếp từ 32 bit vào thanh ghi AVR.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Xóa sạch `len` bit kể từ vị trí `pos` trong biến `uint32_t` mà không ảnh hưởng các trường lân cận.",
        "prototype": "void clear_bf32_solve(void)",
        "workedExample": [
          "Bước 1: Cần xóa 4 bit tại vị trí 8. (reg cũ=0x00FF1234, Vùng xóa=bit 8..11)",
          "Bước 2: Tạo mặt nạ 4 bit 1 (0xF) rồi dịch trái 8 vị trí → 0x00000F00. (mask=0x00000F00, ~mask=0xFFFFF0FF)",
          "Bước 3: AND với `~mask` xóa riêng nibble 8. (reg mới=0x00FF1034, Bit 8..11=0x0)"
        ],
        "testRows": [
          [
            "Case 1",
            "0x00FF1234 clear(pos=8, len=4)",
            "0x00FF1034"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 026: Xóa một Trường Bit liên tiếp trong từ 32-bit\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void clear_bf32_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint32_t reg = 0x00FF1234UL;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Xóa trường bit: `reg &= ~(((1UL << len) - 1UL) << pos)`.",
        "hint2": "Quên dịch trái `<< pos` sẽ xóa nhầm các bit thấp 0..len-1!",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "reg[15:0] = 0x1234",
          "val": 4660,
          "prev": 4660,
          "mask": 3840,
          "labels": [],
          "note": "Nibble bit 8..11 đang là 0x2"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "reg[15:0] = 0x1034",
          "val": 4148,
          "prev": 4660,
          "mask": 3840,
          "labels": [],
          "note": "Nibble 8..11 đã về 0",
          "op": "AND NOT (&= ~)"
        }
      }
    },
    {
      "id": 27,
      "type": "task",
      "ewTitle": "Replace Bit Field in a 32-bit Register",
      "title": "Thay thế Trường Bit (Clear-then-Set an toàn)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9 & M10",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Ghi giá trị mới `val` vào một trường bit bất kỳ mà không để giá trị cũ trộn lẫn với giá trị mới.",
      "filename": "avr_replace_bf32.c",
      "lines": [
        {
          "code": "uint32_t reg = 0x00001234UL; uint32_t val = 0x0BUL;",
          "phase": "SETUP",
          "explain": "Muốn thay nibble tại bit 8..11 (đang là 0x2) bằng giá trị mới 0xB (1011).",
          "cards": [
            [
              "reg cũ",
              "0x1234",
              "blue"
            ],
            [
              "val mới",
              "0xB",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "reg = 0x1234",
            "val": 4660,
            "prev": 4660,
            "mask": 3840,
            "labels": [],
            "note": "Vùng bit 8..11 đang là 0x2"
          }
        },
        {
          "code": "uint32_t mask = 0x0FUL << 8;",
          "phase": "BITWISE",
          "explain": "Mặt nạ vùng cần thay thế là 0x0F00.",
          "cards": [
            [
              "mask",
              "0x0F00",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "mask = 0x0F00",
            "val": 3840,
            "prev": 0,
            "mask": 3840,
            "labels": [],
            "note": "Khoanh vùng 4 bit",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "reg = (reg & ~mask) | ((val << 8) & mask);",
          "phase": "OUTPUT",
          "explain": "Bước 1 xóa cũ (`reg & ~mask` = 0x1034), Bước 2 lọc và chèn mới (`0x0B00`) → 0x1B34!",
          "cards": [
            [
              "reg mới",
              "0x00001B34",
              "green"
            ],
            [
              "Bit 8..11",
              "0x2 → 0xB",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "reg = 0x1B34",
            "val": 6964,
            "prev": 4660,
            "mask": 3840,
            "labels": [],
            "note": "Đã thay thế sạch sẽ thành 0xB",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Luôn xóa trường cũ trước khi OR giá trị mới; tuyệt đối không chỉ dùng `|=` để thay thế trường bit!",
      "pitfall": "Nếu quên `& mask` quanh `(val << pos)` mà `val` bị quá dải (vd 0x1B), nó sẽ ghi đè hỏng bit 12!",
      "tests": [
        "+ 0x1234 replace(pos=8,len=4,val=0xB) → 0x1B34"
      ],
      "problem": {
        "scenario": "Thay một trường trong bản cấu hình lưu SRAM. Chọn ca mà bit cũ bằng 1 và bit mới bằng 0 để phát hiện cách làm chỉ dùng OR.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Ghi giá trị mới `val` vào một trường bit bất kỳ mà không để giá trị cũ trộn lẫn với giá trị mới.",
        "prototype": "void replace_bf32_solve(void)",
        "workedExample": [
          "Bước 1: Muốn thay nibble tại bit 8. (reg cũ=0x1234, val mới=0xB)",
          "Bước 2: Mặt nạ vùng cần thay thế là 0x0F00. (mask=0x0F00)",
          "Bước 3: Bước 1 xóa cũ (`reg & ~mask` = 0x1034), Bước 2 lọc và chèn mới (`0x0B00`) → 0x1B34!. (reg mới=0x00001B34, Bit 8..11=0x2 → 0xB)"
        ],
        "testRows": [
          [
            "Case 1",
            "0x1234 replace(pos=8,len=4,val=0xB)",
            "0x1B34"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 027: Thay thế Trường Bit (Clear-then-Set an toàn)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void replace_bf32_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint32_t reg = 0x00001234UL; uint32_t val = 0x0BUL;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn xóa trường cũ trước khi OR giá trị mới; tuyệt đối không chỉ dùng `|=` để thay thế trường bit!",
        "hint2": "Nếu quên `& mask` quanh `(val << pos)` mà `val` bị quá dải (vd 0x1B), nó sẽ ghi đè hỏng bit 12!",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "reg = 0x1234",
          "val": 4660,
          "prev": 4660,
          "mask": 3840,
          "labels": [],
          "note": "Vùng bit 8..11 đang là 0x2"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "reg = 0x1B34",
          "val": 6964,
          "prev": 4660,
          "mask": 3840,
          "labels": [],
          "note": "Đã thay thế sạch sẽ thành 0xB",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 28,
      "type": "task",
      "ewTitle": "Extract Even Bits Only from 32-bit Register",
      "title": "Trích xuất chỉ các Bit ở vị trí chẵn (0, 2, 4...)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Lọc lấy tất cả các bit ở vị trí chẵn bằng mặt nạ 0x55555555UL.",
      "filename": "avr_even_bits.c",
      "lines": [
        {
          "code": "uint32_t reg = 0x000000F5UL; // 1111_0101",
          "phase": "SETUP",
          "explain": "Xét byte thấp 0xF5 = 0b1111_0101. Các bit chẵn là bit 6, 4, 2, 0.",
          "cards": [
            [
              "reg",
              "0xF5",
              "blue"
            ],
            [
              "Mask chẵn",
              "0x55555555UL",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "reg[7:0] = 0xF5",
            "val": 245,
            "prev": 245,
            "mask": 85,
            "labels": [],
            "note": "Bit chẵn: 6(1), 4(1), 2(1), 0(1)"
          }
        },
        {
          "code": "uint32_t even = reg & 0x55555555UL;",
          "phase": "OUTPUT",
          "explain": "0x55 = 0b0101_0101 giữ lại đúng các bit vị trí chẵn và xóa sạch bit lẻ (1, 3, 5, 7) → 0x55.",
          "cards": [
            [
              "even",
              "0x00000055",
              "green"
            ],
            [
              "Bit lẻ",
              "Đã xóa về 0",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "even = 0x55",
            "val": 85,
            "prev": 245,
            "mask": 85,
            "labels": [],
            "note": "Chỉ giữ lại các bit 6, 4, 2, 0"
          }
        }
      ],
      "remember": "0x55555555UL lọc bit chẵn (0,2,4..); 0xAAAAAAAAUL lọc bit lẻ (1,3,5..).",
      "pitfall": "Nhớ thêm hậu tố `UL` cho hằng số 32-bit trên ATmega328P.",
      "tests": [
        "+ 0xF5 & 0x55 = 0x55",
        "+ 0xAA & 0x55 = 0x00"
      ],
      "problem": {
        "scenario": "Mô hình khung chứa ký hiệu tại các vị trí chẵn. Tách các bit ấy bằng mặt nạ, giữ nguyên vị trí của chúng trong kết quả.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Lọc lấy tất cả các bit ở vị trí chẵn bằng mặt nạ 0x55555555UL.",
        "prototype": "void even_bits_solve(void)",
        "workedExample": [
          "Bước 1: Xét byte thấp 0xF5 = 0b1111_0101. (reg=0xF5, Mask chẵn=0x55555555UL)",
          "Bước 2: 0x55 = 0b0101_0101 giữ lại đúng các bit vị trí chẵn và xóa sạch bit lẻ (1, 3, 5, 7) → 0x55. (even=0x00000055, Bit lẻ=Đã xóa về 0)"
        ],
        "testRows": [
          [
            "Case 1",
            "reg = 0xF5, Mask chẵn = 0x55555555UL, even = 0x00000055",
            "0xF5 & 0x55 = 0x55"
          ],
          [
            "Case 2",
            "reg = 0xF5, Mask chẵn = 0x55555555UL, even = 0x00000055",
            "0xAA & 0x55 = 0x00"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 028: Trích xuất chỉ các Bit ở vị trí chẵn (0, 2, 4...)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void even_bits_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint32_t reg = 0x000000F5UL; // 1111_0101\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "0x55555555UL lọc bit chẵn (0,2,4..); 0xAAAAAAAAUL lọc bit lẻ (1,3,5..).",
        "hint2": "Nhớ thêm hậu tố `UL` cho hằng số 32-bit trên ATmega328P.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "reg[7:0] = 0xF5",
          "val": 245,
          "prev": 245,
          "mask": 85,
          "labels": [],
          "note": "Bit chẵn: 6(1), 4(1), 2(1), 0(1)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "even = 0x55",
          "val": 85,
          "prev": 245,
          "mask": 85,
          "labels": [],
          "note": "Chỉ giữ lại các bit 6, 4, 2, 0"
        }
      }
    },
    {
      "id": 29,
      "type": "task",
      "ewTitle": "Set Baud Rate Field in Control Register",
      "title": "Cấu hình Baud Rate 9600 bps vào UBRR0H / UBRR0L (ATmega328P)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M11 (UART)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "USART"
      ],
      "summary": "Tính toán và tách giá trị 12-bit UBRR0 (103 cho 9600 bps @ 16 MHz) ghi vào cặp thanh ghi UBRR0H (4 bit cao) và UBRR0L (8 bit thấp).",
      "filename": "avr_uart_baud.c",
      "lines": [
        {
          "code": "#define F_CPU 16000000UL\n#define BAUD 9600UL",
          "phase": "SETUP",
          "explain": "Khai báo tần số thạch anh 16 MHz và tốc độ truyền UART 9600 bps (chuẩn 8N1).",
          "cards": [
            [
              "F_CPU",
              "16 MHz",
              "blue"
            ],
            [
              "BAUD",
              "9600 bps",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "Công thức UBRR0",
            "val": 0,
            "prev": 0,
            "mask": 4095,
            "labels": [],
            "note": "UBRR0 = F_CPU / (16 * BAUD) - 1"
          }
        },
        {
          "code": "uint16_t ubrr = (F_CPU / (16UL * BAUD)) - 1UL; // 103 (0x0067)",
          "phase": "EXECUTION",
          "explain": "16,000,000 / 153,600 - 1 = 103.16 → 103 (0x0067). Sai số chỉ +0.16%, hoàn toàn đạt chuẩn UART (< 2%).",
          "cards": [
            [
              "ubrr",
              "103 (0x0067)",
              "green"
            ],
            [
              "Sai số",
              "+0.16%",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "ubrr = 103 (0x0067)",
            "val": 103,
            "prev": 0,
            "mask": 4095,
            "labels": [],
            "note": "UBRR0 dùng 12 bit thấp (bit 11..0)"
          }
        },
        {
          "code": "UBRR0H = (uint8_t)((ubrr >> 8) & 0x0FU);",
          "phase": "REGISTER",
          "explain": "Ghi 4 bit cao (bit 11..8) vào UBRR0H (0xC5). Với 9600 bps, UBRR0H = 0x00. Luôn ghi UBRR0H trước UBRR0L!",
          "cards": [
            [
              "UBRR0H",
              "0x00",
              "amber"
            ],
            [
              "Địa chỉ",
              "0xC5",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "UBRR0H = 0x00",
            "val": 0,
            "prev": 0,
            "mask": 15,
            "labels": [
              "-",
              "-",
              "-",
              "-",
              "B11",
              "B10",
              "B9",
              "B8"
            ],
            "note": "4 bit cao của UBRR0",
            "op": "SHIFT RIGHT (>>)"
          }
        },
        {
          "code": "UBRR0L = (uint8_t)(ubrr & 0xFFU);",
          "phase": "OUTPUT",
          "explain": "Ghi 8 bit thấp (0x67 = 103) vào UBRR0L (0xC4). Ngay khi ghi UBRR0L, phần cứng cập nhật bộ chia Baud!",
          "cards": [
            [
              "UBRR0L",
              "0x67 (103)",
              "green"
            ],
            [
              "USART0",
              "9600 bps Ready",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "UBRR0L = 0x67",
            "val": 103,
            "prev": 0,
            "mask": 255,
            "labels": [],
            "note": "8 bit thấp của UBRR0 = 103"
          }
        }
      ],
      "remember": "Ở 115200 bps @ 16MHz, chế độ thường sai số -3.5% (lỗi khung); hãy bật U2X0=1 trong UCSR0A và chia 8 (`ubrr = 16`, sai số +2.1%)!",
      "pitfall": "Luôn dùng `16UL * BAUD` để tránh tràn 16-bit khi tính mẫu số.",
      "tests": [
        "+ 16MHz, 9600 → UBRR0=103 (H=0x00, L=0x67)",
        "+ 16MHz, 2400 → UBRR0=416 (H=0x01, L=0xA0)"
      ],
      "problem": {
        "scenario": "Với clock 16 MHz và U2X0 bằng 0, kiểm UBRR0 cho 9600 baud. Tách giá trị phù hợp vào UBRR0H và UBRR0L.\n\nBạn đang khởi tạo giao tiếp USART0 trên ATmega328P (thạch anh `F_CPU = 16 MHz`) để truyền dữ liệu cảm biến lên máy tính ở tốc độ `9600 bps` (chế độ thường `U2X0 = 0`). Hãy viết hàm tính giá trị 12-bit `UBRR0` và ghi đúng thứ tự vào hai thanh ghi phần cứng `UBRR0H` (4 bit cao) và `UBRR0L` (8 bit thấp).",
        "prototype": "void usart0_set_baud(uint32_t baud)",
        "workedExample": [
          "Bước 1: Khai báo tần số thạch anh 16 MHz và tốc độ truyền UART 9600 bps (chuẩn 8N1). (F_CPU=16 MHz, BAUD=9600 bps)",
          "Bước 2: 16,000,000 / 153,600 - 1 = 103. (ubrr=103 (0x0067), Sai số=+0.16%)",
          "Bước 3: Ghi 4 bit cao (bit 11. (UBRR0H=0x00, Địa chỉ=0xC5)"
        ],
        "testRows": [
          [
            "Case 1 (9600 bps)",
            "F_CPU = 16MHz, baud = 9600",
            "UBRR0H = 0x00, UBRR0L = 0x67 (103)"
          ],
          [
            "Case 2 (2400 bps)",
            "F_CPU = 16MHz, baud = 2400",
            "UBRR0H = 0x01, UBRR0L = 0xA0 (416)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → USART0, kiểm tra `UBRR0H = 0x00` và `UBRR0L = 0x67` (103). Thử truyền `2400UL` để thấy `UBRR0H = 0x01`, `UBRR0L = 0xA0`.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 029: Cấu hình Baud Rate 9600 bps vào UBRR0H / UBRR0L (ATmega328P)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void usart0_set_baud(uint32_t baud)\n * ============================================================ */\n\nvoid usart0_set_baud(uint32_t baud) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    usart0_set_baud(9600UL);\n    // Soi UBRR0H=0x00, UBRR0L=0x67 trong I/O View -> USART0\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Ở 115200 bps @ 16MHz, chế độ thường sai số -3.5% (lỗi khung); hãy bật U2X0=1 trong UCSR0A và chia 8 (`ubrr = 16`, sai số +2.1%)!",
        "hint2": "Luôn dùng `16UL * BAUD` để tránh tràn 16-bit khi tính mẫu số.",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "Công thức UBRR0",
          "val": 0,
          "prev": 0,
          "mask": 4095,
          "labels": [],
          "note": "UBRR0 = F_CPU / (16 * BAUD) - 1"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "UBRR0L = 0x67",
          "val": 103,
          "prev": 0,
          "mask": 255,
          "labels": [],
          "note": "8 bit thấp của UBRR0 = 103"
        }
      }
    },
    {
      "id": 30,
      "type": "task",
      "ewTitle": "Data Transmission",
      "title": "Đóng gói & Truyền khung dữ liệu Byte-by-Byte qua USART0/SPI",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M11 (UART/SPI)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "USART",
        "SPI"
      ],
      "summary": "Đóng gói 4-bit địa chỉ lệnh (CMD) và 4-bit dữ liệu (DATA) vào 1 byte rồi kiểm tra cờ TX để truyền qua UDR0.",
      "filename": "avr_data_tx.c",
      "lines": [
        {
          "code": "uint8_t cmd = 0x0A, payload = 0x05;",
          "phase": "SETUP",
          "explain": "Lệnh 4-bit `cmd = 1010` và dữ liệu 4-bit `payload = 0101`.",
          "cards": [
            [
              "cmd",
              "0xA (4-bit)",
              "blue"
            ],
            [
              "payload",
              "0x5 (4-bit)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "cmd & payload",
            "val": 10,
            "prev": 0,
            "mask": 15,
            "labels": [],
            "note": "Hai trường 4-bit riêng biệt"
          }
        },
        {
          "code": "uint8_t frame = ((cmd & 0x0FU) << 4) | (payload & 0x0FU);",
          "phase": "BITWISE",
          "explain": "Ghép cmd vào 4 bit cao và payload vào 4 bit thấp → frame = 0xA5 (0b1010_0101).",
          "cards": [
            [
              "frame",
              "0xA5",
              "green"
            ],
            [
              "Nhị phân",
              "1010_0101",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "frame = 0xA5",
            "val": 165,
            "prev": 10,
            "mask": 255,
            "labels": [
              "C3",
              "C2",
              "C1",
              "C0",
              "D3",
              "D2",
              "D1",
              "D0"
            ],
            "note": "Đã đóng gói gọn trong 1 byte",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "while (!(UCSR0A & (1U << UDRE0))); UDR0 = frame;",
          "phase": "OUTPUT",
          "explain": "Chờ bộ đệm phát trống (UDRE0=1) rồi nạp `frame` vào thanh ghi truyền UDR0.",
          "cards": [
            [
              "UDR0",
              "0xA5",
              "green"
            ],
            [
              "Trạng thái",
              "Đang phát TXD",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "UDR0 = 0xA5",
            "val": 165,
            "prev": 0,
            "mask": 255,
            "labels": [],
            "note": "Truyền ra chân PD1 (TXD)",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Luôn mask từng trường trước khi dịch và OR để tránh dữ liệu rác tràn sang trường khác.",
      "pitfall": "Đừng quên bật bộ phát `UCSR0B |= (1U << TXEN0);` trong hàm khởi tạo UART.",
      "tests": [
        "+ cmd=0xA, payload=0x5 → frame=0xA5"
      ],
      "problem": {
        "scenario": "Tạo byte lệnh và payload theo định dạng đề. Driver UART/SPI gửi byte đã đóng gói sau khi ngoại vi báo sẵn sàng.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Đóng gói 4-bit địa chỉ lệnh (CMD) và 4-bit dữ liệu (DATA) vào 1 byte rồi kiểm tra cờ TX để truyền qua UDR0.",
        "prototype": "void data_tx_solve(void)",
        "workedExample": [
          "Bước 1: Lệnh 4-bit `cmd = 1010` và dữ liệu 4-bit `payload = 0101`. (cmd=0xA (4-bit), payload=0x5 (4-bit))",
          "Bước 2: Ghép cmd vào 4 bit cao và payload vào 4 bit thấp → frame = 0xA5 (0b1010_0101). (frame=0xA5, Nhị phân=1010_0101)",
          "Bước 3: Chờ bộ đệm phát trống (UDRE0=1) rồi nạp `frame` vào thanh ghi truyền UDR0. (UDR0=0xA5, Trạng thái=Đang phát TXD)"
        ],
        "testRows": [
          [
            "Case 1",
            "cmd=0xA, payload=0x5",
            "frame=0xA5"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART, SPI), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 030: Đóng gói & Truyền khung dữ liệu Byte-by-Byte qua USART0/SPI\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void data_tx_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t cmd = 0x0A, payload = 0x05;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn mask từng trường trước khi dịch và OR để tránh dữ liệu rác tràn sang trường khác.",
        "hint2": "Đừng quên bật bộ phát `UCSR0B |= (1U << TXEN0);` trong hàm khởi tạo UART.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "cmd & payload",
          "val": 10,
          "prev": 0,
          "mask": 15,
          "labels": [],
          "note": "Hai trường 4-bit riêng biệt"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "UDR0 = 0xA5",
          "val": 165,
          "prev": 0,
          "mask": 255,
          "labels": [],
          "note": "Truyền ra chân PD1 (TXD)",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 31,
      "type": "task",
      "ewTitle": "Pack Multiple Fields into a 16-bit Control Register",
      "title": "Đóng gói nhiều trường vào thanh ghi 16-bit (Timer1 OCR1A / Gói cấu hình)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9 & M11 (Timer1)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "TIMER"
      ],
      "summary": "Đóng gói 3 trường cấu hình: Mode (3-bit), Prescaler (3-bit) và Duty Cycle (10-bit) vào 1 từ 16-bit duy nhất.",
      "filename": "avr_pack_16bit.c",
      "lines": [
        {
          "code": "uint16_t mode = 5, presc = 3, duty = 512;",
          "phase": "SETUP",
          "explain": "mode (bit 15..13), presc (bit 12..10), duty 10-bit (bit 9..0, tương ứng PWM 50%).",
          "cards": [
            [
              "mode",
              "5 (101)",
              "blue"
            ],
            [
              "presc",
              "3 (011)",
              "amber"
            ],
            [
              "duty",
              "512 (0x200)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "Ban đầu = 0x0000",
            "val": 0,
            "prev": 0,
            "mask": 0,
            "labels": [],
            "note": "Thanh ghi 16-bit trống"
          }
        },
        {
          "code": "uint16_t reg = ((mode & 0x07U) << 13) | ((presc & 0x07U) << 10) | (duty & 0x03FFU);",
          "phase": "OUTPUT",
          "explain": "mode<<13 = 0xA000, presc<<10 = 0x0C00, duty = 0x0200 → Tổng hợp = 0xAE00!",
          "cards": [
            [
              "reg16",
              "0xAE00",
              "green"
            ],
            [
              "Bit 15..13",
              "101 (5)",
              "blue"
            ],
            [
              "Bit 9..0",
              "512",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "reg16 = 0xAE00",
            "val": 44544,
            "prev": 0,
            "mask": 65535,
            "labels": [],
            "note": "Cả 3 trường đóng gói chính xác vào 16 bit",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Khi ghi thanh ghi 16-bit thật trên ATmega328P (như OCR1A, TCNT1), avr-gcc tự động ghi byte cao trước (`OCR1AH`), byte thấp sau (`OCR1AL`) qua thanh ghi đệm TEMP.",
      "pitfall": "Đọc/ghi thanh ghi 16-bit của Timer1 trong cả `main()` và `ISR()` cần tắt ngắt tạm thời (atomic block) vì TEMP register dùng chung!",
      "tests": [
        "+ mode=5, presc=3, duty=512 → 0xAE00"
      ],
      "problem": {
        "scenario": "Đóng gói mode, prescaler và duty thành từ cấu hình trong SRAM. Khi áp dụng thật, giải mã các trường rồi ghi đúng thanh ghi Timer1.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Đóng gói 3 trường cấu hình: Mode (3-bit), Prescaler (3-bit) và Duty Cycle (10-bit) vào 1 từ 16-bit duy nhất.",
        "prototype": "void pack_16bit_solve(void)",
        "workedExample": [
          "Bước 1: mode (bit 15. (mode=5 (101), presc=3 (011))",
          "Bước 2: mode<<13 = 0xA000, presc<<10 = 0x0C00, duty = 0x0200 → Tổng hợp = 0xAE00!. (reg16=0xAE00, Bit 15..13=101 (5))"
        ],
        "testRows": [
          [
            "Case 1",
            "mode=5, presc=3, duty=512",
            "0xAE00"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, TIMER), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 031: Đóng gói nhiều trường vào thanh ghi 16-bit (Timer1 OCR1A / Gói cấu hình)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void pack_16bit_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t mode = 5, presc = 3, duty = 512;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Khi ghi thanh ghi 16-bit thật trên ATmega328P (như OCR1A, TCNT1), avr-gcc tự động ghi byte cao trước (`OCR1AH`), byte thấp sau (`OCR1AL`) qua thanh ghi đệm TEMP.",
        "hint2": "Đọc/ghi thanh ghi 16-bit của Timer1 trong cả `main()` và `ISR()` cần tắt ngắt tạm thời (atomic block) vì TEMP register dùng chung!",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "Ban đầu = 0x0000",
          "val": 0,
          "prev": 0,
          "mask": 0,
          "labels": [],
          "note": "Thanh ghi 16-bit trống"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "reg16 = 0xAE00",
          "val": 44544,
          "prev": 0,
          "mask": 65535,
          "labels": [],
          "note": "Cả 3 trường đóng gói chính xác vào 16 bit",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 32,
      "type": "task",
      "ewTitle": "Extract and Modify Field in a 32-bit Register",
      "title": "Trích xuất, Tăng giá trị và Ghi lại Trường Bit 32-bit",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Đọc trường bộ đếm 4-bit (bit 16..19) trong biến 32-bit, cộng thêm 1 (modulo 16), rồi ghi ngược lại không làm hỏng 28 bit kia.",
      "filename": "avr_extract_mod32.c",
      "lines": [
        {
          "code": "uint32_t reg = 0x0005ABCDUL;",
          "phase": "SETUP",
          "explain": "Nibble tại bit 16..19 hiện đang mang giá trị 5.",
          "cards": [
            [
              "reg cũ",
              "0x0005ABCD",
              "blue"
            ],
            [
              "Field[19:16]",
              "5",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "reg[31:16] = 0x0005",
            "val": 5,
            "prev": 5,
            "mask": 15,
            "labels": [],
            "note": "Nibble 19:16 = 5"
          }
        },
        {
          "code": "uint32_t cnt = ((reg >> 16) & 0x0FUL) + 1UL;",
          "phase": "EXECUTION",
          "explain": "Trích ra 5, tăng lên 6. Dùng `& 0x0FUL` để bọc vòng nếu 15 + 1 → 0.",
          "cards": [
            [
              "cnt mới",
              "6",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "cnt = 6",
            "val": 6,
            "prev": 5,
            "mask": 15,
            "labels": [],
            "note": "Giá trị tăng từ 5 lên 6",
            "op": "SHIFT RIGHT (>>)"
          }
        },
        {
          "code": "reg = (reg & ~(0x0FUL << 16)) | ((cnt & 0x0FUL) << 16);",
          "phase": "OUTPUT",
          "explain": "Xóa nibble cũ (0x5) và chèn 0x6 vào → 0x0006ABCD.",
          "cards": [
            [
              "reg mới",
              "0x0006ABCD",
              "green"
            ],
            [
              "Bit khác",
              "Bảo toàn",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "reg[31:16] = 0x0006",
            "val": 6,
            "prev": 5,
            "mask": 15,
            "labels": [],
            "note": "Đã cập nhật thành 0x0006ABCD",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Chu trình Read-Modify-Write chuẩn cho bitfield: Extract → Compute & Mask → Clear → OR.",
      "pitfall": "Nếu bỏ quên `& 0x0FUL` khi `cnt = 15 + 1 = 16`, bit tràn sẽ đè hỏng bit 20!",
      "tests": [
        "+ 0x0005ABCD → 0x0006ABCD",
        "+ 0x000FABCD → 0x0000ABCD"
      ],
      "problem": {
        "scenario": "Tăng một trường đếm trong gói trạng thái gửi USART0. Kiểm trường đầy và xác định hành vi theo mặt nạ đề cho.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Đọc trường bộ đếm 4-bit (bit 16..19) trong biến 32-bit, cộng thêm 1 (modulo 16), rồi ghi ngược lại không làm hỏng 28 bit kia.",
        "prototype": "void extract_mod32_solve(void)",
        "workedExample": [
          "Bước 1: Nibble tại bit 16. (reg cũ=0x0005ABCD, Field[19:16]=5)",
          "Bước 2: Trích ra 5, tăng lên 6. (cnt mới=6)",
          "Bước 3: Xóa nibble cũ (0x5) và chèn 0x6 vào → 0x0006ABCD. (reg mới=0x0006ABCD, Bit khác=Bảo toàn)"
        ],
        "testRows": [
          [
            "Case 1",
            "0x0005ABCD",
            "0x0006ABCD"
          ],
          [
            "Case 2",
            "0x000FABCD",
            "0x0000ABCD"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 032: Trích xuất, Tăng giá trị và Ghi lại Trường Bit 32-bit\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void extract_mod32_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint32_t reg = 0x0005ABCDUL;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Chu trình Read-Modify-Write chuẩn cho bitfield: Extract → Compute & Mask → Clear → OR.",
        "hint2": "Nếu bỏ quên `& 0x0FUL` khi `cnt = 15 + 1 = 16`, bit tràn sẽ đè hỏng bit 20!",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "reg[31:16] = 0x0005",
          "val": 5,
          "prev": 5,
          "mask": 15,
          "labels": [],
          "note": "Nibble 19:16 = 5"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "reg[31:16] = 0x0006",
          "val": 6,
          "prev": 5,
          "mask": 15,
          "labels": [],
          "note": "Đã cập nhật thành 0x0006ABCD",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 33,
      "type": "task",
      "ewTitle": "Extract Bit Field from 16-bit Register",
      "title": "Trích xuất Trường Bit từ thanh ghi 16-bit (Kết quả ADC 10-bit)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9 & M11 (ADC)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "ADC"
      ],
      "summary": "Đọc thanh ghi 16-bit `ADC` (ghép ADCL + ADCH) và trích xuất đúng 10 bit kết quả (0..1023) hoặc 8 bit cao khi dùng chế độ canh trái ADLAR.",
      "filename": "avr_extract_bf16.c",
      "lines": [
        {
          "code": "uint16_t raw = 0x03A5; // giả lập thanh ghi ADC",
          "phase": "REGISTER",
          "explain": "Thanh ghi `ADC` của ATmega328P chứa 10 bit chuyển đổi nằm ở bit 9..0 (0x03A5 = 933).",
          "cards": [
            [
              "ADC raw",
              "0x03A5 (933)",
              "blue"
            ],
            [
              "Độ phân giải",
              "10-bit (0..1023)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "ADC = 0x03A5",
            "val": 933,
            "prev": 0,
            "mask": 1023,
            "labels": [],
            "note": "10 bit dữ liệu từ bit 9 đến bit 0"
          }
        },
        {
          "code": "uint16_t adc10 = raw & 0x03FFU;",
          "phase": "BITWISE",
          "explain": "Lọc 10 bit thấp bằng mặt nạ 0x03FF = (1U << 10) - 1.",
          "cards": [
            [
              "adc10",
              "933",
              "green"
            ],
            [
              "Điện áp @5V",
              "~4.56V",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "adc10 = 933",
            "val": 933,
            "prev": 933,
            "mask": 1023,
            "labels": [],
            "note": "Giá trị 10-bit hợp lệ"
          }
        },
        {
          "code": "uint8_t adc8 = (uint8_t)(adc10 >> 2);",
          "phase": "OUTPUT",
          "explain": "Bỏ 2 bit nhiễu LSB bằng cách dịch phải 2 bit → 233 (0xE9), sẵn sàng ghi trực tiếp vào thanh ghi PWM 8-bit `OCR0A`!",
          "cards": [
            [
              "adc8 (OCR0A)",
              "233 (0xE9)",
              "green"
            ],
            [
              "Duty PWM",
              "91%",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "OCR0A = 233 (0xE9)",
            "val": 233,
            "prev": 0,
            "mask": 255,
            "labels": [],
            "note": "Chuyển 10-bit ADC sang 8-bit PWM",
            "op": "SHIFT RIGHT (>>)"
          }
        }
      ],
      "remember": "Khi đọc ADC thủ công từng byte, BẮT BUỘC đọc `ADCL` trước rồi mới đọc `ADCH` (nếu dùng `uint16_t v = ADC;` thì avr-gcc tự làm đúng thứ tự).",
      "pitfall": "Đọc `ADCH` trước sẽ làm khóa thanh ghi và mất đồng bộ dữ liệu!",
      "tests": [
        "+ 0x03A5 → adc10=933 → adc8=233"
      ],
      "problem": {
        "scenario": "Với ADLAR bằng 0, bản sao kết quả ADC 10 bit nằm ở 10 bit thấp. Khi cần đọc cả cặp trên chip, đọc ADCL trước ADCH.\n\nCác thanh ghi cấu hình ngoại vi trên ATmega328P (`ADMUX`, `TCCR0B`, `UBRR0`, khung dữ liệu SPI/UART) gom nhiều trường bit vào chung 1 thanh ghi. Nhiệm vụ của bạn: Đọc thanh ghi 16-bit `ADC` (ghép ADCL + ADCH) và trích xuất đúng 10 bit kết quả (0..1023) hoặc 8 bit cao khi dùng chế độ canh trái ADLAR.",
        "prototype": "void extract_bf16_solve(void)",
        "workedExample": [
          "Bước 1: Thanh ghi `ADC` của ATmega328P chứa 10 bit chuyển đổi nằm ở bit 9. (ADC raw=0x03A5 (933), Độ phân giải=10-bit (0..1023))",
          "Bước 2: Lọc 10 bit thấp bằng mặt nạ 0x03FF = (1U << 10) - 1. (adc10=933, Điện áp @5V=~4.56V)",
          "Bước 3: Bỏ 2 bit nhiễu LSB bằng cách dịch phải 2 bit → 233 (0xE9), sẵn sàng ghi trực tiếp vào thanh ghi PWM 8-bit `OCR0A`!. (adc8 (OCR0A)=233 (0xE9), Duty PWM=91%)"
        ],
        "testRows": [
          [
            "Case 1",
            "0x03A5",
            "adc10=933 → adc8=233"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, ADC), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 033: Trích xuất Trường Bit từ thanh ghi 16-bit (Kết quả ADC 10-bit)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void extract_bf16_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t raw = 0x03A5; // giả lập thanh ghi ADC\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Khi đọc ADC thủ công từng byte, BẮT BUỘC đọc `ADCL` trước rồi mới đọc `ADCH` (nếu dùng `uint16_t v = ADC;` thì avr-gcc tự làm đúng thứ tự).",
        "hint2": "Đọc `ADCH` trước sẽ làm khóa thanh ghi và mất đồng bộ dữ liệu!",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "ADC = 0x03A5",
          "val": 933,
          "prev": 0,
          "mask": 1023,
          "labels": [],
          "note": "10 bit dữ liệu từ bit 9 đến bit 0"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "OCR0A = 233 (0xE9)",
          "val": 233,
          "prev": 0,
          "mask": 255,
          "labels": [],
          "note": "Chuyển 10-bit ADC sang 8-bit PWM",
          "op": "SHIFT RIGHT (>>)"
        }
      }
    },
    {
      "id": 34,
      "type": "quiz",
      "ewTitle": "Bit Field Operations-i",
      "title": "Quiz: Trích xuất & Đóng gói Trường Bit (Nibble/ADC/UART)",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9 & M11",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "ADC",
        "USART"
      ],
      "summary": "Kiểm tra công thức tạo mặt nạ trường bit và cấu hình ADMUX/UBRR0 trên ATmega328P.",
      "questions": [
        {
          "q": "Công thức nào tạo mặt nạ gồm `len` bit 1 liên tiếp (với 1 <= len <= 8)?",
          "opts": [
            "(1U << len) + 1",
            "(1U << len) - 1",
            "(1U >> len) - 1",
            "~(1U << len)"
          ],
          "ans": 1,
          "exp": "Ví dụ len=4: (1U << 4) - 1 = 16 - 1 = 15 = 0b0000_1111 (0x0F)."
        },
        {
          "q": "Muốn chuyển kênh ADC từ ADC5 sang ADC2 trong `ADMUX` (4 bit thấp là MUX3:0) mà vẫn giữ nguyên cấu hình Vref ở 4 bit cao, lệnh nào ĐÚNG?",
          "opts": [
            "ADMUX |= 2;",
            "ADMUX = (ADMUX & 0xF0) | 2;",
            "ADMUX &= 2;",
            "ADMUX = 2;"
          ],
          "ans": 1,
          "exp": "Phải xóa sạch 4 bit thấp cũ (`ADMUX & 0xF0`) rồi mới OR kênh mới `2` vào."
        },
        {
          "q": "Với F_CPU = 16 MHz, chế độ thường (U2X0=0), giá trị `UBRR0` cho tốc độ 9600 bps là?",
          "opts": [
            "51",
            "103",
            "207",
            "16"
          ],
          "ans": 1,
          "exp": "UBRR0 = 16,000,000 / (16 * 9600) - 1 = 103.16 → 103."
        },
        {
          "q": "ADLAR = 0, ADCH = 0x02 và ADCL = 0xA5. Mã ADC là gì?",
          "opts": [
            "0x00A5",
            "0xA502",
            "0x02A5"
          ],
          "ans": 2,
          "exp": "Ghép bằng dịch byte cao 8 bit rồi OR byte thấp."
        }
      ],
      "remember": "Clear-then-Set là quy tắc vàng khi cập nhật bất kỳ bitfield nào.",
      "pitfall": "Không bao giờ dùng mỗi `|=` để đổi chế độ/kênh khi bit cũ có thể đang là 1!",
      "avrContext": "Phân biệt vị trí bit của kết quả ADC với vị trí nibble của byte trên khung UART. Dự đoán bước dịch và mặt nạ."
    },
    {
      "id": 35,
      "type": "quiz",
      "ewTitle": "Bit Field Operations-ii",
      "title": "Quiz: Thanh ghi 16-bit & 32-bit trên ATmega328P",
      "moduleId": "m3_bitfield",
      "brochureRef": "Brochure M9 & M11",
      "level": "Trung bình",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "TIMER"
      ],
      "summary": "Kiểm tra thứ tự đọc/ghi thanh ghi 16-bit AVR và mặt nạ 32-bit.",
      "questions": [
        {
          "q": "Khi đọc kết quả ADC 10-bit bằng 2 thanh ghi `ADCL` và `ADCH`, thứ tự đọc đúng theo Datasheet ATmega328P là?",
          "opts": [
            "Đọc ADCH trước, ADCL sau",
            "Đọc ADCL trước, ADCH sau",
            "Thứ tự nào cũng được",
            "Chỉ cần đọc ADCL"
          ],
          "ans": 1,
          "exp": "Đọc ADCL sẽ khóa ADCH cho đến khi ADCH được đọc xong, đảm bảo 2 byte thuộc cùng 1 mẫu chuyển đổi."
        },
        {
          "q": "Muốn trích 3 bit ở vị trí 5..7 của biến 8-bit `reg`, biểu thức nào đúng?",
          "opts": [
            "(reg >> 5) & 0x07U",
            "(reg & 0x07U) >> 5",
            "(reg << 5) & 0x07U",
            "reg & 0xE0U"
          ],
          "ans": 0,
          "exp": "Dịch phải 5 vị trí rồi AND với 0x07 (3 bit 1) cho giá trị từ 0..7."
        },
        {
          "q": "Giá trị của `((0x3A5 >> 4) & 0x0F)` là bao nhiêu?",
          "opts": [
            "0x05",
            "0x0A",
            "0x03",
            "0x0F"
          ],
          "ans": 1,
          "exp": "0x3A5 >> 4 = 0x3A; 0x3A & 0x0F = 0x0A (10)."
        },
        {
          "q": "Gói cấu hình 32 bit của Timer1 nằm ở đâu trước khi giải mã?",
          "opts": [
            "Biến trong SRAM",
            "Thanh ghi Timer1 32 bit",
            "SREG"
          ],
          "ans": 0,
          "exp": "Timer1 có thanh ghi 16 bit, còn gói này là dữ liệu phần mềm."
        }
      ],
      "remember": "Với 16-bit Timer/ADC trên AVR: Ghi High trước Low sau; Đọc Low trước High sau.",
      "pitfall": "Truy cập thanh ghi 16-bit từ cả main và ISR cần bảo vệ bằng `ATOMIC_BLOCK`.",
      "avrContext": "Phân biệt thanh ghi Timer1 16 bit với từ 32 bit do firmware tạo trong SRAM. Xét thứ tự truy cập khi có ISR."
    },
    {
      "id": 36,
      "type": "task",
      "ewTitle": "Count Set Bits in an Integer",
      "title": "Đếm số Bit 1 (Popcount — Tính Parity / Đếm cảm biến kích hoạt)",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9 (Thuật toán Kernighan)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng thuật toán Brian Kernighan `n &= (n - 1)` để đếm số bit 1 nhanh gấp nhiều lần vòng lặp 16 bước trên ATmega328P.",
      "filename": "avr_popcount16.c",
      "lines": [
        {
          "code": "uint16_t n = 0x00A5; uint8_t cnt = 0;",
          "phase": "SETUP",
          "explain": "0x00A5 = 0b1010_0101 có đúng 4 bit 1. Vòng lặp thường tốn 16 lần lặp, nhưng Kernighan chỉ tốn 4 lần!",
          "cards": [
            [
              "n",
              "0x00A5",
              "blue"
            ],
            [
              "cnt",
              "0",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "n = 0xA5 (4 bit 1)",
            "val": 165,
            "prev": 165,
            "mask": 165,
            "labels": [],
            "note": "Có 4 bit 1 cần đếm"
          }
        },
        {
          "code": "while (n) { n &= (n - 1); cnt++; }",
          "phase": "BITWISE",
          "explain": "Mỗi bước `n &= (n - 1)` xóa đúng 1 bit 1 thấp nhất: 0xA5 → 0xA4 → 0xA0 → 0x80 → 0x00 (4 bước).",
          "cards": [
            [
              "Chuỗi n",
              "A5→A4→A0→80→00",
              "amber"
            ],
            [
              "cnt",
              "4",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "n = 0x00 (Xong!)",
            "val": 0,
            "prev": 165,
            "mask": 165,
            "labels": [],
            "note": "Đã xóa sạch 4 bit 1 trong 4 vòng lặp"
          }
        },
        {
          "code": "uint8_t parity = cnt & 1U;",
          "phase": "OUTPUT",
          "explain": "Bit 0 của `cnt` chính là Even Parity (4 & 1 = 0 → số lượng bit 1 là chẵn).",
          "cards": [
            [
              "cnt",
              "4",
              "green"
            ],
            [
              "Even Parity",
              "0 (Chẵn)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "cnt = 4 (0x04)",
            "val": 4,
            "prev": 0,
            "mask": 7,
            "labels": [],
            "note": "Kết quả popcount = 4"
          }
        }
      ],
      "remember": "Thuật toán Kernighan chỉ lặp đúng bằng số bit 1 có trong số `n`.",
      "pitfall": "Luôn dùng `uint16_t` hoặc `uint8_t` (unsigned) để tránh hành vi bất thường với bit dấu.",
      "tests": [
        "+ 0xA5 → cnt=4",
        "+ 0x00 → cnt=0",
        "+ 0xFFFF → cnt=16"
      ],
      "problem": {
        "scenario": "Ảnh chụp các công tắc có thể chứa nhiều bit 1. Đếm số bit 1 để tính parity trước khi đưa vào khung UART.\n\nTrên vi điều khiển 8-bit ATmega328P không có lệnh chia phần cứng và tài nguyên Flash/SRAM hạn chế, kỹ thuật xoay/đếm/đảo bit giúp xử lý tín hiệu SPI, Encoder và tối ưu Ring Buffer cực nhanh. Bài toán: Dùng thuật toán Brian Kernighan `n &= (n - 1)` để đếm số bit 1 nhanh gấp nhiều lần vòng lặp 16 bước trên ATmega328P.",
        "prototype": "void popcount16_solve(void)",
        "workedExample": [
          "Bước 1: 0x00A5 = 0b1010_0101 có đúng 4 bit 1. (n=0x00A5, cnt=0)",
          "Bước 2: Mỗi bước `n &= (n - 1)` xóa đúng 1 bit 1 thấp nhất: 0xA5 → 0xA4 → 0xA0 → 0x80 → 0x00 (4 bước). (Chuỗi n=A5→A4→A0→80→00, cnt=4)",
          "Bước 3: Bit 0 của `cnt` chính là Even Parity (4 & 1 = 0 → số lượng bit 1 là chẵn). (cnt=4, Even Parity=0 (Chẵn))"
        ],
        "testRows": [
          [
            "Case 1",
            "0xA5",
            "cnt=4"
          ],
          [
            "Case 2",
            "0x00",
            "cnt=0"
          ],
          [
            "Case 3",
            "0xFFFF",
            "cnt=16"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 036: Đếm số Bit 1 (Popcount — Tính Parity / Đếm cảm biến kích hoạt)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void popcount16_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t n = 0x00A5; uint8_t cnt = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Thuật toán Kernighan chỉ lặp đúng bằng số bit 1 có trong số `n`.",
        "hint2": "Luôn dùng `uint16_t` hoặc `uint8_t` (unsigned) để tránh hành vi bất thường với bit dấu.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "n = 0xA5 (4 bit 1)",
          "val": 165,
          "prev": 165,
          "mask": 165,
          "labels": [],
          "note": "Có 4 bit 1 cần đếm"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "cnt = 4 (0x04)",
          "val": 4,
          "prev": 0,
          "mask": 7,
          "labels": [],
          "note": "Kết quả popcount = 4"
        }
      }
    },
    {
      "id": 37,
      "type": "task",
      "ewTitle": "Rotate Left in an 8-bit Register",
      "title": "Xoay trái 8-bit (Hiệu ứng LED đuổi trên PORTD)",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9 & M11 (GPIO)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Xoay vòng các bit sang trái: bit 7 đẩy ra ngoài sẽ vòng lại vào bit 0 (`(reg << k) | (reg >> (8 - k))`).",
      "filename": "avr_rol8.c",
      "lines": [
        {
          "code": "uint8_t reg = 0x81; // 1000_0001 (PD7 & PD0 sáng)",
          "phase": "SETUP",
          "explain": "Thanh ghi PORTD đang có bit 7 và bit 0 bật.",
          "cards": [
            [
              "reg",
              "0x81",
              "blue"
            ],
            [
              "k",
              "1 vị trí",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTD = 0x81",
            "val": 129,
            "prev": 129,
            "mask": 129,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "PD7 và PD0 đang sáng"
          }
        },
        {
          "code": "uint8_t k = 1 & 7U;",
          "phase": "SETUP",
          "explain": "Chuẩn hóa số bước xoay `k % 8` bằng `k & 7U` để tránh dịch quá 8 bit (Undefined Behavior!).",
          "cards": [
            [
              "k chuẩn hóa",
              "1",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Chuẩn bị xoay trái 1",
            "val": 129,
            "prev": 129,
            "mask": 128,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "Bit 7 sẽ vòng về bit 0"
          }
        },
        {
          "code": "reg = (uint8_t)((reg << k) | (reg >> (8U - k)));",
          "phase": "OUTPUT",
          "explain": "(0x81 << 1) = 0x02; (0x81 >> 7) = 0x01; ghép lại = 0x03 (0b0000_0011)!",
          "cards": [
            [
              "reg mới",
              "0x03",
              "green"
            ],
            [
              "PD1, PD0",
              "Sáng!",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "PORTD = 0x03",
            "val": 3,
            "prev": 129,
            "mask": 3,
            "labels": [
              "PD7",
              "PD6",
              "PD5",
              "PD4",
              "PD3",
              "PD2",
              "PD1",
              "PD0"
            ],
            "note": "Bit 7 đã xoay vòng vào bit 0!",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Trình biên dịch avr-gcc nhận diện mẫu xoay vòng và tối ưu bằng lệnh `ROL`/`ROR` qua cờ Carry.",
      "pitfall": "Nếu `k == 0`, biểu thức `reg >> (8 - 0)` dịch 8 bit trên kiểu 8-bit dễ gây lỗi nếu không kiểm tra `if (k == 0) return reg;`!",
      "tests": [
        "+ ROL(0x81, 1) = 0x03",
        "+ ROL(0x81, 4) = 0x18"
      ],
      "problem": {
        "scenario": "Chuẩn bị mẫu LED đuổi cho PORTD bằng xoay vòng. Chỉ dùng toàn bộ PORTD nếu phần cứng dành cả cổng cho LED.\n\nTrên vi điều khiển 8-bit ATmega328P không có lệnh chia phần cứng và tài nguyên Flash/SRAM hạn chế, kỹ thuật xoay/đếm/đảo bit giúp xử lý tín hiệu SPI, Encoder và tối ưu Ring Buffer cực nhanh. Bài toán: Xoay vòng các bit sang trái: bit 7 đẩy ra ngoài sẽ vòng lại vào bit 0 (`(reg << k) | (reg >> (8 - k))`).",
        "prototype": "void rol8_solve(void)",
        "workedExample": [
          "Bước 1: Thanh ghi PORTD đang có bit 7 và bit 0 bật. (reg=0x81, k=1 vị trí)",
          "Bước 2: Chuẩn hóa số bước xoay `k % 8` bằng `k & 7U` để tránh dịch quá 8 bit (Undefined Behavior!). (k chuẩn hóa=1)",
          "Bước 3: (0x81 << 1) = 0x02; (0x81 >> 7) = 0x01; ghép lại = 0x03 (0b0000_0011)!. (reg mới=0x03, PD1, PD0=Sáng!)"
        ],
        "testRows": [
          [
            "Case 1",
            "reg = 0x81, k = 1 vị trí, k chuẩn hóa = 1",
            "ROL(0x81, 1) = 0x03"
          ],
          [
            "Case 2",
            "reg = 0x81, k = 1 vị trí, k chuẩn hóa = 1",
            "ROL(0x81, 4) = 0x18"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → Port B/C/D. Đặt Breakpoint (F9) ở `while(1)`, nhấn F5 (hoặc F10/F11 từng dòng) để thấy bit DDRx/PORTx/PINx đổi màu đỏ.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 037: Xoay trái 8-bit (Hiệu ứng LED đuổi trên PORTD)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void rol8_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t reg = 0x81; // 1000_0001 (PD7 & PD0 sáng)\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trình biên dịch avr-gcc nhận diện mẫu xoay vòng và tối ưu bằng lệnh `ROL`/`ROR` qua cờ Carry.",
        "hint2": "Nếu `k == 0`, biểu thức `reg >> (8 - 0)` dịch 8 bit trên kiểu 8-bit dễ gây lỗi nếu không kiểm tra `if (k == 0) return reg;`!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PORTD = 0x81",
          "val": 129,
          "prev": 129,
          "mask": 129,
          "labels": [
            "PD7",
            "PD6",
            "PD5",
            "PD4",
            "PD3",
            "PD2",
            "PD1",
            "PD0"
          ],
          "note": "PD7 và PD0 đang sáng"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "PORTD = 0x03",
          "val": 3,
          "prev": 129,
          "mask": 3,
          "labels": [
            "PD7",
            "PD6",
            "PD5",
            "PD4",
            "PD3",
            "PD2",
            "PD1",
            "PD0"
          ],
          "note": "Bit 7 đã xoay vòng vào bit 0!",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 38,
      "type": "task",
      "ewTitle": "Rotate Right in a 32-bit Register",
      "title": "Xoay phải 32-bit (Mã hóa / Xoay bộ đệm 4 byte)",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Xoay phải biến 32-bit `k` vị trí an toàn (kể cả khi `k = 0` hoặc `k >= 32`).",
      "filename": "avr_ror32.c",
      "lines": [
        {
          "code": "uint32_t x = 0x12345678UL; uint8_t k = 4;",
          "phase": "SETUP",
          "explain": "Xoay phải 4 bit (1 nibble): nibble thấp nhất `8` sẽ vòng lên thành nibble cao nhất!",
          "cards": [
            [
              "x cũ",
              "0x12345678",
              "blue"
            ],
            [
              "k",
              "4",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "x[15:0] = 0x5678",
            "val": 22136,
            "prev": 22136,
            "mask": 15,
            "labels": [],
            "note": "Nibble 8 sẽ xoay lên đầu"
          }
        },
        {
          "code": "k &= 31U;",
          "phase": "BITWISE",
          "explain": "Lấy phần dư chia 32 bằng `k & 31U`.",
          "cards": [
            [
              "k",
              "4",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "k = 4",
            "val": 4,
            "prev": 4,
            "mask": 31,
            "labels": [],
            "note": "Đảm bảo 0 <= k <= 31"
          }
        },
        {
          "code": "if (k) x = (x >> k) | (x << (32U - k));",
          "phase": "OUTPUT",
          "explain": "Kiểm tra `if (k)` trước để tránh `x << 32` (UB). Kết quả: `0x81234567UL`.",
          "cards": [
            [
              "x mới",
              "0x81234567",
              "green"
            ],
            [
              "An toàn UB",
              "Có if(k)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "x[31:16] = 0x8123",
            "val": 33059,
            "prev": 4660,
            "mask": 61440,
            "labels": [],
            "note": "Nibble 8 đã xuất hiện ở bit 31..28",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Luôn kiểm tra `if (k == 0)` trước khi tính `32U - k` để tránh dịch bằng đúng độ rộng kiểu (Undefined Behavior).",
      "pitfall": "Trên ATmega328P, dịch 32-bit tốn nhiều chu kỳ CPU; hạn chế gọi bên trong ngắt ISR tần số cao.",
      "tests": [
        "+ ROR32(0x12345678, 4) = 0x81234567"
      ],
      "problem": {
        "scenario": "Xoay một từ 32 bit lưu trong SRAM trước khi tuần tự hóa sang USART0. Tách phép xoay khỏi thứ tự gửi byte.\n\nTrên vi điều khiển 8-bit ATmega328P không có lệnh chia phần cứng và tài nguyên Flash/SRAM hạn chế, kỹ thuật xoay/đếm/đảo bit giúp xử lý tín hiệu SPI, Encoder và tối ưu Ring Buffer cực nhanh. Bài toán: Xoay phải biến 32-bit `k` vị trí an toàn (kể cả khi `k = 0` hoặc `k >= 32`).",
        "prototype": "void ror32_solve(void)",
        "workedExample": [
          "Bước 1: Xoay phải 4 bit (1 nibble): nibble thấp nhất `8` sẽ vòng lên thành nibble cao nhất!. (x cũ=0x12345678, k=4)",
          "Bước 2: Lấy phần dư chia 32 bằng `k & 31U`. (k=4)",
          "Bước 3: Kiểm tra `if (k)` trước để tránh `x << 32` (UB). (x mới=0x81234567, An toàn UB=Có if(k))"
        ],
        "testRows": [
          [
            "Case 1",
            "x cũ = 0x12345678, k = 4, k = 4",
            "ROR32(0x12345678, 4) = 0x81234567"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 038: Xoay phải 32-bit (Mã hóa / Xoay bộ đệm 4 byte)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void ror32_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint32_t x = 0x12345678UL; uint8_t k = 4;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn kiểm tra `if (k == 0)` trước khi tính `32U - k` để tránh dịch bằng đúng độ rộng kiểu (Undefined Behavior).",
        "hint2": "Trên ATmega328P, dịch 32-bit tốn nhiều chu kỳ CPU; hạn chế gọi bên trong ngắt ISR tần số cao.",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "x[15:0] = 0x5678",
          "val": 22136,
          "prev": 22136,
          "mask": 15,
          "labels": [],
          "note": "Nibble 8 sẽ xoay lên đầu"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "x[31:16] = 0x8123",
          "val": 33059,
          "prev": 4660,
          "mask": 61440,
          "labels": [],
          "note": "Nibble 8 đã xuất hiện ở bit 31..28",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 39,
      "type": "task",
      "ewTitle": "Detect Circular Pattern Match",
      "title": "Phát hiện khớp mẫu vòng trên thanh ghi 8-bit (Encoder / Đồng bộ khung)",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Kiểm tra xem một mẫu 8-bit `pat` có phải là phiên bản xoay vòng của `reg` hay không bằng cách nhân đôi `reg` thành 16-bit!",
      "filename": "avr_circular_match.c",
      "lines": [
        {
          "code": "uint8_t reg = 0xC3; // 1100_0011\nuint8_t pat = 0x0F; // 0000_1111",
          "phase": "SETUP",
          "explain": "Khi xoay 0xC3 sang phải 2 bit, 2 bit 1 ở đầu nối liền 2 bit 1 ở cuối tạo thành 0x0F!",
          "cards": [
            [
              "reg",
              "0xC3",
              "blue"
            ],
            [
              "pat",
              "0x0F",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "reg = 0xC3 (1100_0011)",
            "val": 195,
            "prev": 195,
            "mask": 195,
            "labels": [],
            "note": "Xoay vòng có tạo ra 0x0F không?"
          }
        },
        {
          "code": "uint16_t doubled = ((uint16_t)reg << 8) | reg; // 0xC3C3",
          "phase": "BITWISE",
          "explain": "Mẹo siêu gọn: ghép `reg` với chính nó thành 16-bit (0xC3C3 = 1100_0011_1100_0011). Mọi phép xoay vòng của reg đều là 1 cửa sổ 8-bit liên tiếp trong `doubled`!",
          "cards": [
            [
              "doubled",
              "0xC3C3",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "doubled = 0xC3C3",
            "val": 50115,
            "prev": 195,
            "mask": 960,
            "labels": [],
            "note": "Thấy rõ 4 bit 1 liên tiếp ở giữa!",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "uint8_t found = 0;\nfor(uint8_t i=0;i<8;i++) if(((doubled>>i)&0xFF)==pat) found=1;",
          "phase": "OUTPUT",
          "explain": "Tại i = 6: (0xC3C3 >> 6) & 0xFF = 0x0F == pat → found = 1!",
          "cards": [
            [
              "found",
              "1 (KHỚP!)",
              "green"
            ],
            [
              "Góc xoay",
              "i = 6 bit",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Khớp tại i=6: 0x0F",
            "val": 15,
            "prev": 195,
            "mask": 15,
            "labels": [],
            "note": "Phát hiện khớp mẫu vòng thành công!",
            "op": "SHIFT RIGHT (>>)"
          }
        }
      ],
      "remember": "Ghép đôi `((uint16_t)reg << 8) | reg` biến bài toán xoay vòng thành trượt cửa sổ đơn giản.",
      "pitfall": "Kiểm tra kỹ kiểu ép `(uint16_t)reg` trước khi `<< 8`, tránh mất dữ liệu.",
      "tests": [
        "+ reg=0xC3, pat=0x0F → found=1",
        "+ reg=0xAA, pat=0x0F → found=0"
      ],
      "problem": {
        "scenario": "Firmware nhận một mẫu 8 bit và chưa biết pha bắt đầu. Thử các phép xoay để tìm mẫu khớp trước khi xử lý khung.\n\nTrên vi điều khiển 8-bit ATmega328P không có lệnh chia phần cứng và tài nguyên Flash/SRAM hạn chế, kỹ thuật xoay/đếm/đảo bit giúp xử lý tín hiệu SPI, Encoder và tối ưu Ring Buffer cực nhanh. Bài toán: Kiểm tra xem một mẫu 8-bit `pat` có phải là phiên bản xoay vòng của `reg` hay không bằng cách nhân đôi `reg` thành 16-bit!",
        "prototype": "void circular_match_solve(void)",
        "workedExample": [
          "Bước 1: Khi xoay 0xC3 sang phải 2 bit, 2 bit 1 ở đầu nối liền 2 bit 1 ở cuối tạo thành 0x0F!. (reg=0xC3, pat=0x0F)",
          "Bước 2: Mẹo siêu gọn: ghép `reg` với chính nó thành 16-bit (0xC3C3 = 1100_0011_1100_0011). (doubled=0xC3C3)",
          "Bước 3: Tại i = 6: (0xC3C3 >> 6) & 0xFF = 0x0F == pat → found = 1!. (found=1 (KHỚP!), Góc xoay=i = 6 bit)"
        ],
        "testRows": [
          [
            "Case 1",
            "reg=0xC3, pat=0x0F",
            "found=1"
          ],
          [
            "Case 2",
            "reg=0xAA, pat=0x0F",
            "found=0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 039: Phát hiện khớp mẫu vòng trên thanh ghi 8-bit (Encoder / Đồng bộ khung)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void circular_match_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t reg = 0xC3; // 1100_0011\n    uint8_t pat = 0x0F; // 0000_1111\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Ghép đôi `((uint16_t)reg << 8) | reg` biến bài toán xoay vòng thành trượt cửa sổ đơn giản.",
        "hint2": "Kiểm tra kỹ kiểu ép `(uint16_t)reg` trước khi `<< 8`, tránh mất dữ liệu.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "reg = 0xC3 (1100_0011)",
          "val": 195,
          "prev": 195,
          "mask": 195,
          "labels": [],
          "note": "Xoay vòng có tạo ra 0x0F không?"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Khớp tại i=6: 0x0F",
          "val": 15,
          "prev": 195,
          "mask": 15,
          "labels": [],
          "note": "Phát hiện khớp mẫu vòng thành công!",
          "op": "SHIFT RIGHT (>>)"
        }
      }
    },
    {
      "id": 40,
      "type": "task",
      "ewTitle": "Count Set Bits in an 8-bit Register",
      "title": "Đếm Bit 1 trong thanh ghi 8-bit bằng Bảng tra PROGMEM (Flash)",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9 & M11 (Flash PROGMEM)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "FLASH"
      ],
      "summary": "Dùng bảng tra 16 phần tử (Nibble LUT) lưu trong bộ nhớ Flash `PROGMEM` của ATmega328P để đếm bit 1 trong O(1) mà không tốn 1 byte SRAM nào!",
      "filename": "avr_popcount8_lut.c",
      "lines": [
        {
          "code": "const uint8_t LUT[16] PROGMEM = {0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4};",
          "phase": "SETUP",
          "explain": "Từ khóa `PROGMEM` (<avr/pgmspace.h>) đặt bảng tra 16 byte vào Flash (32 KB) thay vì copy vào SRAM (chỉ 2 KB)!",
          "cards": [
            [
              "Vùng nhớ",
              "Flash PROGMEM",
              "purple"
            ],
            [
              "Tốn SRAM",
              "0 byte!",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "LUT 4-bit trong Flash",
            "val": 15,
            "prev": 0,
            "mask": 15,
            "labels": [],
            "note": "Tra 4 bit một lần → cực nhanh"
          }
        },
        {
          "code": "uint8_t reg = 0xD6; // 1101_0110",
          "phase": "SETUP",
          "explain": "Nibble cao = 0xD (3 bit 1), Nibble thấp = 0x6 (2 bit 1).",
          "cards": [
            [
              "reg",
              "0xD6",
              "blue"
            ],
            [
              "Hi / Lo",
              "0xD / 0x6",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "reg = 0xD6",
            "val": 214,
            "prev": 214,
            "mask": 255,
            "labels": [],
            "note": "0xD (3) + 0x6 (2) = 5 bit 1"
          }
        },
        {
          "code": "uint8_t cnt = pgm_read_byte(&LUT[reg & 0x0F]) + pgm_read_byte(&LUT[reg >> 4]);",
          "phase": "OUTPUT",
          "explain": "Đọc từ Flash bằng `pgm_read_byte()` (lệnh `LPM` của AVR): LUT[6] + LUT[13] = 2 + 3 = 5!",
          "cards": [
            [
              "cnt",
              "5",
              "green"
            ],
            [
              "Tốc độ",
              "O(1) ~6 cycles",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "cnt = 5 (0x05)",
            "val": 5,
            "prev": 214,
            "mask": 7,
            "labels": [],
            "note": "Đếm xong trong thời gian hằng số",
            "op": "SHIFT RIGHT (>>)"
          }
        }
      ],
      "remember": "Kiến trúc Harvard của ATmega328P tách riêng bus Flash và SRAM: dữ liệu `PROGMEM` BẮT BUỘC đọc qua `pgm_read_byte()`!",
      "pitfall": "Đọc trực tiếp `LUT[i]` khi đã gắn `PROGMEM` sẽ đọc nhầm rác từ SRAM!",
      "tests": [
        "+ 0xD6 → 3 + 2 = 5",
        "+ 0xFF → 4 + 4 = 8"
      ],
      "problem": {
        "scenario": "Bảng đếm bit của mỗi nibble nằm trong Flash. Đọc đúng API PROGMEM để lấy hai kết quả rồi cộng.\n\nTrên vi điều khiển 8-bit ATmega328P không có lệnh chia phần cứng và tài nguyên Flash/SRAM hạn chế, kỹ thuật xoay/đếm/đảo bit giúp xử lý tín hiệu SPI, Encoder và tối ưu Ring Buffer cực nhanh. Bài toán: Dùng bảng tra 16 phần tử (Nibble LUT) lưu trong bộ nhớ Flash `PROGMEM` của ATmega328P để đếm bit 1 trong O(1) mà không tốn 1 byte SRAM nào!",
        "prototype": "void popcount8_lut_solve(void)",
        "workedExample": [
          "Bước 1: Từ khóa `PROGMEM` (<avr/pgmspace. (Vùng nhớ=Flash PROGMEM, Tốn SRAM=0 byte!)",
          "Bước 2: Nibble cao = 0xD (3 bit 1), Nibble thấp = 0x6 (2 bit 1). (reg=0xD6, Hi / Lo=0xD / 0x6)",
          "Bước 3: Đọc từ Flash bằng `pgm_read_byte()` (lệnh `LPM` của AVR): LUT[6] + LUT[13] = 2 + 3 = 5!. (cnt=5, Tốc độ=O(1) ~6 cycles)"
        ],
        "testRows": [
          [
            "Case 1",
            "0xD6",
            "3 + 2 = 5"
          ],
          [
            "Case 2",
            "0xFF",
            "4 + 4 = 8"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, FLASH), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n#include <avr/pgmspace.h>\n\n/* ============================================================\n * Bài 040: Đếm Bit 1 trong thanh ghi 8-bit bằng Bảng tra PROGMEM (Flash)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void popcount8_lut_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const uint8_t LUT[16] PROGMEM = {0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Kiến trúc Harvard của ATmega328P tách riêng bus Flash và SRAM: dữ liệu `PROGMEM` BẮT BUỘC đọc qua `pgm_read_byte()`!",
        "hint2": "Đọc trực tiếp `LUT[i]` khi đã gắn `PROGMEM` sẽ đọc nhầm rác từ SRAM!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "LUT 4-bit trong Flash",
          "val": 15,
          "prev": 0,
          "mask": 15,
          "labels": [],
          "note": "Tra 4 bit một lần → cực nhanh"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "cnt = 5 (0x05)",
          "val": 5,
          "prev": 214,
          "mask": 7,
          "labels": [],
          "note": "Đếm xong trong thời gian hằng số",
          "op": "SHIFT RIGHT (>>)"
        }
      }
    },
    {
      "id": 41,
      "type": "task",
      "ewTitle": "Check If a Number Is a Power of Two",
      "title": "Kiểm tra Lũy thừa bậc 2 (Tối ưu kích thước Ring Buffer)",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9 & M7 (Buffer Sizing)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Kiểm tra kích thước bộ đệm (ví dụ 16, 32, 64 byte) có phải lũy thừa của 2 không để dùng phép `& (SIZE - 1)` thay cho phép chia `% SIZE` cực chậm trên AVR.",
      "filename": "avr_pow2.c",
      "lines": [
        {
          "code": "uint16_t buf_size = 64; // 0x0040",
          "phase": "SETUP",
          "explain": "ATmega328P không có lệnh chia phần cứng (DIV). Nếu kích thước buffer là 2^k (vd 64), `idx % 64` tối ưu thành `idx & 63` (1 chu kỳ xung thay vì >100 chu kỳ!).",
          "cards": [
            [
              "buf_size",
              "64 (0x40)",
              "blue"
            ],
            [
              "buf_size - 1",
              "63 (0x3F)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "64 = 0b0100_0000",
            "val": 64,
            "prev": 64,
            "mask": 64,
            "labels": [],
            "note": "Lũy thừa của 2 chỉ có đúng 1 bit 1"
          }
        },
        {
          "code": "uint8_t is_pow2 = (buf_size != 0) && ((buf_size & (buf_size - 1)) == 0);",
          "phase": "OUTPUT",
          "explain": "64 & 63 = 0b0100_0000 & 0b0011_1111 = 0! Kết hợp điều kiện `buf_size != 0` trả về 1 (Đúng).",
          "cards": [
            [
              "64 & 63",
              "0",
              "green"
            ],
            [
              "is_pow2",
              "1 (TRUE)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "64 & 63 = 0x00",
            "val": 0,
            "prev": 64,
            "mask": 127,
            "labels": [],
            "note": "Xác nhận 64 là lũy thừa của 2!"
          }
        }
      ],
      "remember": "Luôn kiểm tra `n != 0` trước vì `0 & (0 - 1)` cũng bằng 0!",
      "pitfall": "Chọn kích thước Ring Buffer UART là 16, 32, 64 hoặc 128 byte trên ATmega328P để tránh hàm chia `__udivmodqi4` nặng Flash.",
      "tests": [
        "+ 64 → 1",
        "+ 48 → 0",
        "+ 0 → 0"
      ],
      "problem": {
        "scenario": "Kiểm kích thước hàng đợi UART trước khi dùng capacity - 1 làm mặt nạ quấn vòng. Loại 0.\n\nTrên vi điều khiển 8-bit ATmega328P không có lệnh chia phần cứng và tài nguyên Flash/SRAM hạn chế, kỹ thuật xoay/đếm/đảo bit giúp xử lý tín hiệu SPI, Encoder và tối ưu Ring Buffer cực nhanh. Bài toán: Kiểm tra kích thước bộ đệm (ví dụ 16, 32, 64 byte) có phải lũy thừa của 2 không để dùng phép `& (SIZE - 1)` thay cho phép chia `% SIZE` cực chậm trên AVR.",
        "prototype": "void pow2_solve(void)",
        "workedExample": [
          "Bước 1: ATmega328P không có lệnh chia phần cứng (DIV). (buf_size=64 (0x40), buf_size - 1=63 (0x3F))",
          "Bước 2: 64 & 63 = 0b0100_0000 & 0b0011_1111 = 0! Kết hợp điều kiện `buf_size != 0` trả về 1 (Đúng). (64 & 63=0, is_pow2=1 (TRUE))"
        ],
        "testRows": [
          [
            "Case 1",
            "64",
            "1"
          ],
          [
            "Case 2",
            "48",
            "0"
          ],
          [
            "Case 3",
            "0",
            "0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 041: Kiểm tra Lũy thừa bậc 2 (Tối ưu kích thước Ring Buffer)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void pow2_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t buf_size = 64; // 0x0040\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn kiểm tra `n != 0` trước vì `0 & (0 - 1)` cũng bằng 0!",
        "hint2": "Chọn kích thước Ring Buffer UART là 16, 32, 64 hoặc 128 byte trên ATmega328P để tránh hàm chia `__udivmodqi4` nặng Flash.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "64 = 0b0100_0000",
          "val": 64,
          "prev": 64,
          "mask": 64,
          "labels": [],
          "note": "Lũy thừa của 2 chỉ có đúng 1 bit 1"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "64 & 63 = 0x00",
          "val": 0,
          "prev": 64,
          "mask": 127,
          "labels": [],
          "note": "Xác nhận 64 là lũy thừa của 2!"
        }
      }
    },
    {
      "id": 42,
      "type": "task",
      "ewTitle": "Bit Reversal in an 8-bit Value",
      "title": "Đảo ngược thứ tự 8 Bit (Chuyển đổi MSB-first ↔ LSB-first cho SPI)",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9 & M11 (SPI)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SPI"
      ],
      "summary": "Đảo ngược vị trí 8 bit (bit 7↔0, 6↔1, 5↔2, 4↔3) trong O(1) không cần vòng lặp.",
      "filename": "avr_bit_reverse.c",
      "lines": [
        {
          "code": "uint8_t x = 0xB4; // 1011_0100",
          "phase": "SETUP",
          "explain": "Byte đầu vào 0b1011_0100. Sau khi đảo ngược phải thành 0b0010_1101 (0x2D).",
          "cards": [
            [
              "x ban đầu",
              "0xB4 (1011_0100)",
              "blue"
            ],
            [
              "Kỳ vọng",
              "0x2D (0010_1101)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "x = 0xB4",
            "val": 180,
            "prev": 180,
            "mask": 255,
            "labels": [],
            "note": "1011_0100"
          }
        },
        {
          "code": "x = (x >> 4) | (x << 4); // 0x4B",
          "phase": "BITWISE",
          "explain": "Đổi chỗ 2 nibble (trên AVR chỉ đúng 1 lệnh `SWAP`!): 1011_0100 → 0100_1011.",
          "cards": [
            [
              "Bước 1 (SWAP)",
              "0x4B",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Sau SWAP: 0x4B",
            "val": 75,
            "prev": 180,
            "mask": 255,
            "labels": [],
            "note": "0100_1011",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "x = ((x & 0xCC) >> 2) | ((x & 0x33) << 2); // 0x1E",
          "phase": "BITWISE",
          "explain": "Đổi chỗ từng cặp 2 bit trong mỗi nibble → 0001_1110 (0x1E).",
          "cards": [
            [
              "Bước 2 (Cặp 2)",
              "0x1E",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Bước 2: 0x1E",
            "val": 30,
            "prev": 75,
            "mask": 255,
            "labels": [],
            "note": "0001_1110",
            "op": "SHIFT LEFT (<<)"
          }
        },
        {
          "code": "x = ((x & 0xAA) >> 1) | ((x & 0x55) << 1); // 0x2D",
          "phase": "OUTPUT",
          "explain": "Đổi chỗ từng bit kề nhau → 0010_1101 (0x2D). Hoàn tất!",
          "cards": [
            [
              "Kết quả",
              "0x2D",
              "green"
            ],
            [
              "Mẹo SPI AVR",
              "Bit DORD trong SPCR",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Kết quả = 0x2D",
            "val": 45,
            "prev": 30,
            "mask": 255,
            "labels": [],
            "note": "0010_1101 — đảo ngược hoàn hảo!",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Trên phần cứng SPI của ATmega328P, bạn cũng có thể bật bit `DORD` (bit 5 trong `SPCR`) để phần cứng tự truyền LSB-first!",
      "pitfall": "Kỹ thuật 3 bước này hữu ích khi giao tiếp cảm biến bit-banging hoặc vẽ font chữ trên màn hình LED ma trận / OLED.",
      "tests": [
        "+ 0xB4 → 0x2D",
        "+ 0x80 → 0x01"
      ],
      "problem": {
        "scenario": "Đảo thứ tự bit trong byte lưu SRAM trước khi thử gửi SPI. Phân biệt biến đổi dữ liệu với cài đặt DORD của SPCR.\n\nTrên vi điều khiển 8-bit ATmega328P không có lệnh chia phần cứng và tài nguyên Flash/SRAM hạn chế, kỹ thuật xoay/đếm/đảo bit giúp xử lý tín hiệu SPI, Encoder và tối ưu Ring Buffer cực nhanh. Bài toán: Đảo ngược vị trí 8 bit (bit 7↔0, 6↔1, 5↔2, 4↔3) trong O(1) không cần vòng lặp.",
        "prototype": "void bit_reverse_solve(void)",
        "workedExample": [
          "Bước 1: Byte đầu vào 0b1011_0100. (x ban đầu=0xB4 (1011_0100), Kỳ vọng=0x2D (0010_1101))",
          "Bước 2: Đổi chỗ 2 nibble (trên AVR chỉ đúng 1 lệnh `SWAP`!): 1011_0100 → 0100_1011. (Bước 1 (SWAP)=0x4B)",
          "Bước 3: Đổi chỗ từng cặp 2 bit trong mỗi nibble → 0001_1110 (0x1E). (Bước 2 (Cặp 2)=0x1E)"
        ],
        "testRows": [
          [
            "Case 1",
            "0xB4",
            "0x2D"
          ],
          [
            "Case 2",
            "0x80",
            "0x01"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SPI), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 042: Đảo ngược thứ tự 8 Bit (Chuyển đổi MSB-first ↔ LSB-first cho SPI)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void bit_reverse_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t x = 0xB4; // 1011_0100\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trên phần cứng SPI của ATmega328P, bạn cũng có thể bật bit `DORD` (bit 5 trong `SPCR`) để phần cứng tự truyền LSB-first!",
        "hint2": "Kỹ thuật 3 bước này hữu ích khi giao tiếp cảm biến bit-banging hoặc vẽ font chữ trên màn hình LED ma trận / OLED.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "x = 0xB4",
          "val": 180,
          "prev": 180,
          "mask": 255,
          "labels": [],
          "note": "1011_0100"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Kết quả = 0x2D",
          "val": 45,
          "prev": 30,
          "mask": 255,
          "labels": [],
          "note": "0010_1101 — đảo ngược hoàn hảo!",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 43,
      "type": "task",
      "ewTitle": "Compress Interleaved Bits Reverse Bit Spreading",
      "title": "Nén các Bit chẵn về liên tiếp (Giải mã Manchester / Morton)",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9",
      "level": "Nâng cao",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Quá trình ngược lại của Bit Spreading: gom các bit ở vị trí chẵn (0, 2, 4, 6) của 16-bit thành 1 byte liên tiếp.",
      "filename": "avr_compress_bits.c",
      "lines": [
        {
          "code": "uint16_t x = 0x0051; // 0101_0001",
          "phase": "SETUP",
          "explain": "Đầu vào 0x0051 có các bit chẵn (6,4,2,0) là 1, 1, 0, 1 → nén lại phải ra 0x0D (1101).",
          "cards": [
            [
              "x vào",
              "0x0051",
              "blue"
            ],
            [
              "Kỳ vọng",
              "0x000D",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "x = 0x0051",
            "val": 81,
            "prev": 81,
            "mask": 21845,
            "labels": [],
            "note": "Bit chẵn: 1, 1, 0, 1"
          }
        },
        {
          "code": "x &= 0x5555U; x = (x | (x >> 1)) & 0x3333U;",
          "phase": "BITWISE",
          "explain": "Lọc bit chẵn rồi dồn từng cặp 2 bit sát nhau → 0x0031.",
          "cards": [
            [
              "Bước 1",
              "0x0031",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "Bước 1: 0x0031",
            "val": 49,
            "prev": 81,
            "mask": 13107,
            "labels": [],
            "note": "Dồn thành nhóm 2 bit",
            "op": "SHIFT RIGHT (>>)"
          }
        },
        {
          "code": "x = (x | (x >> 2)) & 0x0F0FU; x = (x | (x >> 4)) & 0x00FFU;",
          "phase": "OUTPUT",
          "explain": "Dồn tiếp nhóm 4 bit và nhóm 8 bit → kết quả 0x0D (0b0000_1101)!",
          "cards": [
            [
              "Kết quả",
              "0x0D (13)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Kết quả = 0x0D",
            "val": 13,
            "prev": 49,
            "mask": 15,
            "labels": [],
            "note": "Khôi phục chính xác 0b1101",
            "op": "SHIFT RIGHT (>>)"
          }
        }
      ],
      "remember": "Phép nén dùng chính xác các mặt nạ `0x5555 → 0x3333 → 0x0F0F → 0x00FF` theo thứ tự ngược với Bit Spreading.",
      "pitfall": "Rất hữu ích khi giải mã luồng bit Manchester RF 433MHz trên ATmega328P.",
      "tests": [
        "+ 0x0051 → 0x0D",
        "+ 0x5555 → 0xFF"
      ],
      "problem": {
        "scenario": "Nén các bit nguồn ở vị trí chẵn từ từ dữ liệu nhận vào SRAM. Nghĩ rõ bit nguồn i sẽ vào bit đích nào.\n\nTrên vi điều khiển 8-bit ATmega328P không có lệnh chia phần cứng và tài nguyên Flash/SRAM hạn chế, kỹ thuật xoay/đếm/đảo bit giúp xử lý tín hiệu SPI, Encoder và tối ưu Ring Buffer cực nhanh. Bài toán: Quá trình ngược lại của Bit Spreading: gom các bit ở vị trí chẵn (0, 2, 4, 6) của 16-bit thành 1 byte liên tiếp.",
        "prototype": "void compress_bits_solve(void)",
        "workedExample": [
          "Bước 1: Đầu vào 0x0051 có các bit chẵn (6,4,2,0) là 1, 1, 0, 1 → nén lại phải ra 0x0D (1101). (x vào=0x0051, Kỳ vọng=0x000D)",
          "Bước 2: Lọc bit chẵn rồi dồn từng cặp 2 bit sát nhau → 0x0031. (Bước 1=0x0031)",
          "Bước 3: Dồn tiếp nhóm 4 bit và nhóm 8 bit → kết quả 0x0D (0b0000_1101)!. (Kết quả=0x0D (13))"
        ],
        "testRows": [
          [
            "Case 1",
            "0x0051",
            "0x0D"
          ],
          [
            "Case 2",
            "0x5555",
            "0xFF"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 043: Nén các Bit chẵn về liên tiếp (Giải mã Manchester / Morton)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void compress_bits_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t x = 0x0051; // 0101_0001\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Phép nén dùng chính xác các mặt nạ `0x5555 → 0x3333 → 0x0F0F → 0x00FF` theo thứ tự ngược với Bit Spreading.",
        "hint2": "Rất hữu ích khi giải mã luồng bit Manchester RF 433MHz trên ATmega328P.",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "x = 0x0051",
          "val": 81,
          "prev": 81,
          "mask": 21845,
          "labels": [],
          "note": "Bit chẵn: 1, 1, 0, 1"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Kết quả = 0x0D",
          "val": 13,
          "prev": 49,
          "mask": 15,
          "labels": [],
          "note": "Khôi phục chính xác 0b1101",
          "op": "SHIFT RIGHT (>>)"
        }
      }
    },
    {
      "id": 44,
      "type": "quiz",
      "ewTitle": "Bitwise Rotation and Counting-I",
      "title": "Quiz: Xoay Bit, Đếm Bit & Lũy thừa bậc 2",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU"
      ],
      "summary": "Kiểm tra công thức xoay vòng và thuật toán Brian Kernighan.",
      "questions": [
        {
          "q": "Số `n = 0b0101_1000` (0x58) cần bao nhiêu vòng lặp `n &= (n - 1)` để về 0?",
          "opts": [
            "8 lần",
            "3 lần",
            "5 lần",
            "4 lần"
          ],
          "ans": 1,
          "exp": "0x58 có đúng 3 bit 1 nên thuật toán Kernighan chỉ lặp 3 lần."
        },
        {
          "q": "Xoay trái 8-bit số `0x85` (1000_0101) đi 1 vị trí cho kết quả nào?",
          "opts": [
            "0x0A",
            "0x0B",
            "0x42",
            "0xC2"
          ],
          "ans": 1,
          "exp": "(0x85 << 1) | (0x85 >> 7) = 0x0A | 0x01 = 0x0B (0000_1011)."
        },
        {
          "q": "Biểu thức nào kiểm tra `n` là lũy thừa của 2 đúng cho mọi `uint8_t n` (kể cả n = 0)?",
          "opts": [
            "(n & (n - 1)) == 0",
            "n && ((n & (n - 1)) == 0)",
            "(n | (n - 1)) == 0",
            "(n % 2) == 0"
          ],
          "ans": 1,
          "exp": "Phải loại trừ `n == 0` vì 0 không phải lũy thừa của 2."
        },
        {
          "q": "Xoay trái mẫu LED 0x81 đúng một bit trong 8 bit cho gì?",
          "opts": [
            "0x02",
            "0x03",
            "0xC0"
          ],
          "ans": 1,
          "exp": "Bit 7 quay về bit 0."
        }
      ],
      "remember": "Ring buffer kích thước 2^k giúp thay `%` bằng `& (SIZE - 1)` cực nhanh trên AVR.",
      "pitfall": "Đừng quên xử lý trường hợp biên `k = 0` khi xoay vòng!",
      "avrContext": "Dùng mẫu LED và dung lượng FIFO UART để tự kiểm phép xoay, đếm bit và nhận dạng lũy thừa."
    },
    {
      "id": 45,
      "type": "quiz",
      "ewTitle": "Bitwise Rotation and Counting-II",
      "title": "Quiz: Đảo Bit, PROGMEM LUT & Ứng dụng SPI",
      "moduleId": "m4_bitrot",
      "brochureRef": "Brochure M9 & M11",
      "level": "Trung bình",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "FLASH",
        "SPI"
      ],
      "summary": "Kiểm tra kỹ thuật đảo bit, đọc bảng tra từ Flash và thanh ghi SPI.",
      "questions": [
        {
          "q": "Để đọc 1 byte từ bảng tra `const uint8_t LUT[16] PROGMEM`, ta phải dùng hàm nào trong `<avr/pgmspace.h>`?",
          "opts": [
            "LUT[i]",
            "pgm_read_byte(&LUT[i])",
            "eeprom_read_byte(&LUT[i])",
            "*LUT"
          ],
          "ans": 1,
          "exp": "Kiến trúc Harvard của ATmega328P yêu cầu dùng lệnh LPM thông qua `pgm_read_byte()` để đọc dữ liệu từ Flash."
        },
        {
          "q": "Trong thanh ghi điều khiển SPI (`SPCR`) của ATmega328P, bit nào chọn thứ tự truyền LSB-first thay vì MSB-first?",
          "opts": [
            "SPE",
            "MSTR",
            "DORD",
            "CPOL"
          ],
          "ans": 2,
          "exp": "Bit `DORD` (Data Order) = 1 chọn truyền LSB trước; DORD = 0 truyền MSB trước."
        },
        {
          "q": "Đảo ngược 8 bit của `0x0F` (0000_1111) cho ra giá trị nào?",
          "opts": [
            "0xF0",
            "0x0F",
            "0xFF",
            "0xAA"
          ],
          "ans": 0,
          "exp": "Đảo ngược 0000_1111 thành 1111_0000 = 0xF0."
        },
        {
          "q": "DORD trong SPCR chọn điều gì?",
          "opts": [
            "Tốc độ UART",
            "Thứ tự lưu byte trong SRAM",
            "Thứ tự phát bit của SPI"
          ],
          "ans": 2,
          "exp": "DORD chọn thứ tự bit trên SPI trong mỗi byte."
        }
      ],
      "remember": "Đặt bảng tra hằng số vào Flash bằng `PROGMEM` giúp bảo vệ 2 KB SRAM quý giá của ATmega328P.",
      "pitfall": "Truy cập thẳng mảng `PROGMEM` bằng toán tử `[]` sẽ đọc nhầm địa chỉ trong SRAM!",
      "avrContext": "Phân biệt bảng đếm bit trong Flash với byte gửi SPI và thứ tự bit trên đường truyền."
    },
    {
      "id": 46,
      "type": "task",
      "ewTitle": "Checksum Validation",
      "title": "Kiểm tra Checksum khung truyền UART/RS485",
      "moduleId": "m5_array",
      "brochureRef": "Brochure M4 & M11 (UART Protocol)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART"
      ],
      "summary": "Tính tổng XOR (hoặc Sum mod 256) các byte payload trong mảng SRAM và đối chiếu với byte Checksum cuối gói tin.",
      "filename": "avr_checksum.c",
      "lines": [
        {
          "code": "uint8_t pkt[4] = {0xAA, 0x10, 0x25, 0x9F};",
          "phase": "SETUP",
          "explain": "Gói tin 4 byte lưu tại SRAM 0x0100..0x0103: 3 byte đầu là dữ liệu, byte cuối (0x9F) là XOR Checksum.",
          "cards": [
            [
              "SRAM",
              "0x0100..0x0103",
              "purple"
            ],
            [
              "Checksum gửi",
              "0x9F",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Gói tin UART pkt[4]",
            "cells": [
              {
                "addr": "0x0100",
                "label": "pkt[0]",
                "val": "0xAA",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0101",
                "label": "pkt[1]",
                "val": "0x10",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "pkt[2]",
                "val": "0x25",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0103",
                "label": "CHK",
                "val": "0x9F",
                "active": false,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Byte cuối 0x9F là Checksum cần kiểm chứng"
          }
        },
        {
          "code": "uint8_t chk = 0;\nfor(uint8_t i=0; i<3; i++) chk ^= pkt[i];",
          "phase": "EXECUTION",
          "explain": "Tính XOR tích lũy: 0xAA ^ 0x10 = 0xBA; 0xBA ^ 0x25 = 0x9F.",
          "cards": [
            [
              "chk tính được",
              "0x9F",
              "green"
            ],
            [
              "Vòng lặp",
              "3 byte",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Đang XOR pkt[0..2]",
            "cells": [
              {
                "addr": "0x0100",
                "label": "pkt[0]",
                "val": "0xAA",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "pkt[1]",
                "val": "0x10",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0102",
                "label": "pkt[2]",
                "val": "0x25",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0103",
                "label": "CHK",
                "val": "0x9F",
                "active": false,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "0xAA ^ 0x10 ^ 0x25 = 0x9F"
          }
        },
        {
          "code": "uint8_t valid = (chk == pkt[3]);",
          "phase": "OUTPUT",
          "explain": "So sánh 0x9F == 0x9F → valid = 1 (Gói tin toàn vẹn, không bị nhiễu đường truyền!).",
          "cards": [
            [
              "valid",
              "1 (HỢP LỆ)",
              "green"
            ],
            [
              "Lỗi bit?",
              "Không",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Xác thực thành công",
            "cells": [
              {
                "addr": "0x0100",
                "label": "pkt[0]",
                "val": "0xAA",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0101",
                "label": "pkt[1]",
                "val": "0x10",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "pkt[2]",
                "val": "0x25",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0103",
                "label": "CHK==0x9F",
                "val": "OK ✓",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Gói tin hợp lệ, sẵn sàng giải mã lệnh"
          }
        }
      ],
      "remember": "XOR Checksum rất nhẹ cho ATmega328P; với môi trường công nghiệp nhiễu mạnh (Modbus/CAN) hãy nâng cấp lên CRC-8/CRC-16.",
      "pitfall": "Luôn kiểm tra độ dài gói `len >= 2` trước khi truy cập `pkt[len - 1]`.",
      "tests": [
        "+ {0xAA,0x10,0x25,0x9F} → valid=1",
        "- {0xAA,0x11,0x25,0x9F} → valid=0"
      ],
      "problem": {
        "scenario": "USART0 chuyển byte khung vào SRAM. Tính checksum trên đúng đoạn dữ liệu theo đề và kiểm cả khung sai.\n\nVới chỉ 2 KB SRAM trên ATmega328P, mọi thao tác xử lý mảng cảm biến ADC hoặc gói tin UART đều phải tối ưu tại chỗ (In-Place, không cấp phát thêm mảng lớn). Yêu cầu thực tế: Tính tổng XOR (hoặc Sum mod 256) các byte payload trong mảng SRAM và đối chiếu với byte Checksum cuối gói tin.",
        "prototype": "void checksum_solve(void)",
        "workedExample": [
          "Bước 1: Gói tin 4 byte lưu tại SRAM 0x0100. (SRAM=0x0100..0x0103, Checksum gửi=0x9F)",
          "Bước 2: Tính XOR tích lũy: 0xAA ^ 0x10 = 0xBA; 0xBA ^ 0x25 = 0x9F. (chk tính được=0x9F, Vòng lặp=3 byte)",
          "Bước 3: So sánh 0x9F == 0x9F → valid = 1 (Gói tin toàn vẹn, không bị nhiễu đường truyền!). (valid=1 (HỢP LỆ), Lỗi bit?=Không)"
        ],
        "testRows": [
          [
            "Case 1",
            "{0xAA,0x10,0x25,0x9F}",
            "valid=1"
          ],
          [
            "Case 2",
            "{0xAA,0x11,0x25,0x9F}",
            "valid=0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 046: Kiểm tra Checksum khung truyền UART/RS485\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void checksum_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t pkt[4] = {0xAA, 0x10, 0x25, 0x9F};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "XOR Checksum rất nhẹ cho ATmega328P; với môi trường công nghiệp nhiễu mạnh (Modbus/CAN) hãy nâng cấp lên CRC-8/CRC-16.",
        "hint2": "Luôn kiểm tra độ dài gói `len >= 2` trước khi truy cập `pkt[len - 1]`.",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Gói tin UART pkt[4]",
          "cells": [
            {
              "addr": "0x0100",
              "label": "pkt[0]",
              "val": "0xAA",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0101",
              "label": "pkt[1]",
              "val": "0x10",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "pkt[2]",
              "val": "0x25",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0103",
              "label": "CHK",
              "val": "0x9F",
              "active": false,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Byte cuối 0x9F là Checksum cần kiểm chứng"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: Xác thực thành công",
          "cells": [
            {
              "addr": "0x0100",
              "label": "pkt[0]",
              "val": "0xAA",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0101",
              "label": "pkt[1]",
              "val": "0x10",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "pkt[2]",
              "val": "0x25",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0103",
              "label": "CHK==0x9F",
              "val": "OK ✓",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Gói tin hợp lệ, sẵn sàng giải mã lệnh"
        }
      }
    },
    {
      "id": 47,
      "type": "task",
      "ewTitle": "Reverse an Array In-Place",
      "title": "Đảo ngược mảng tại chỗ (In-Place — Tiết kiệm 2 KB SRAM)",
      "moduleId": "m5_array",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Đảo ngược mảng bằng kỹ thuật 2 chỉ số đầu-cuối (`l`, `r`) mà không cấp phát mảng phụ trên SRAM.",
      "filename": "avr_rev_array.c",
      "lines": [
        {
          "code": "uint8_t a[4] = {10, 20, 30, 40};",
          "phase": "SETUP",
          "explain": "Mảng 4 phần tử trong SRAM (0x0100..0x0103).",
          "cards": [
            [
              "a[]",
              "[10, 20, 30, 40]",
              "blue"
            ],
            [
              "SRAM phụ",
              "1 byte (tmp)",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Mảng ban đầu",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a[0]",
                "val": "10",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0101",
                "label": "a[1]",
                "val": "20",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "a[2]",
                "val": "30",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0103",
                "label": "a[3]",
                "val": "40",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "l=0 (10), r=3 (40)"
          }
        },
        {
          "code": "uint8_t l = 0, r = 3;\nwhile (l < r) { uint8_t t=a[l]; a[l++]=a[r]; a[r--]=t; }",
          "phase": "OUTPUT",
          "explain": "Bước 1 đổi a[0]↔a[3] ({40,20,30,10}), Bước 2 đổi a[1]↔a[2] ({40,30,20,10}). Kết thúc khi l >= r.",
          "cards": [
            [
              "a[] mới",
              "[40, 30, 20, 10]",
              "green"
            ],
            [
              "Độ phức tạp",
              "O(n) / O(1) RAM",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Sau đảo ngược tại chỗ",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a[0]",
                "val": "40",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "a[1]",
                "val": "30",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0102",
                "label": "a[2]",
                "val": "20",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0103",
                "label": "a[3]",
                "val": "10",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Hoàn tất chỉ tốn 1 byte biến tạm"
          }
        }
      ],
      "remember": "Thao tác In-Place (O(1) bộ nhớ phụ) là tiêu chuẩn bắt buộc trên vi điều khiển ít RAM như ATmega328P.",
      "pitfall": "Chú ý nếu mảng rỗng (`n == 0`), `uint8_t r = n - 1` sẽ underflow thành 255! Luôn kiểm tra `if (n < 2) return;`.",
      "tests": [
        "+ {10,20,30,40} → {40,30,20,10}"
      ],
      "problem": {
        "scenario": "Đảo thứ tự mẫu lấy gần đây ngay trong mảng SRAM của ATmega328P. Thử mảng lẻ để kiểm phần tử ở giữa.\n\nVới chỉ 2 KB SRAM trên ATmega328P, mọi thao tác xử lý mảng cảm biến ADC hoặc gói tin UART đều phải tối ưu tại chỗ (In-Place, không cấp phát thêm mảng lớn). Yêu cầu thực tế: Đảo ngược mảng bằng kỹ thuật 2 chỉ số đầu-cuối (`l`, `r`) mà không cấp phát mảng phụ trên SRAM.",
        "prototype": "void rev_array_solve(void)",
        "workedExample": [
          "Bước 1: Mảng 4 phần tử trong SRAM (0x0100. (a[]=[10, 20, 30, 40], SRAM phụ=1 byte (tmp))",
          "Bước 2: Bước 1 đổi a[0]↔a[3] ({40,20,30,10}), Bước 2 đổi a[1]↔a[2] ({40,30,20,10}). (a[] mới=[40, 30, 20, 10], Độ phức tạp=O(n) / O(1) RAM)"
        ],
        "testRows": [
          [
            "Case 1",
            "{10,20,30,40}",
            "{40,30,20,10}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 047: Đảo ngược mảng tại chỗ (In-Place — Tiết kiệm 2 KB SRAM)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void rev_array_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t a[4] = {10, 20, 30, 40};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Thao tác In-Place (O(1) bộ nhớ phụ) là tiêu chuẩn bắt buộc trên vi điều khiển ít RAM như ATmega328P.",
        "hint2": "Chú ý nếu mảng rỗng (`n == 0`), `uint8_t r = n - 1` sẽ underflow thành 255! Luôn kiểm tra `if (n < 2) return;`.",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Mảng ban đầu",
          "cells": [
            {
              "addr": "0x0100",
              "label": "a[0]",
              "val": "10",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0101",
              "label": "a[1]",
              "val": "20",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "a[2]",
              "val": "30",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0103",
              "label": "a[3]",
              "val": "40",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "l=0 (10), r=3 (40)"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: Sau đảo ngược tại chỗ",
          "cells": [
            {
              "addr": "0x0100",
              "label": "a[0]",
              "val": "40",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0101",
              "label": "a[1]",
              "val": "30",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0102",
              "label": "a[2]",
              "val": "20",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0103",
              "label": "a[3]",
              "val": "10",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Hoàn tất chỉ tốn 1 byte biến tạm"
        }
      }
    },
    {
      "id": 48,
      "type": "task",
      "ewTitle": "Left Rotate Array by K Positions",
      "title": "Xoay trái mảng K vị trí (Thuật toán 3 lần Đảo ngược)",
      "moduleId": "m5_array",
      "brochureRef": "Brochure M4",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Xoay trái mảng `a[n]` đi `k` vị trí tại chỗ (O(1) RAM) bằng 3 bước đảo đoạn: đảo `[0..k-1]`, đảo `[k..n-1]`, đảo `[0..n-1]`.",
      "filename": "avr_rotate_arr.c",
      "lines": [
        {
          "code": "uint8_t a[5] = {1, 2, 3, 4, 5}; uint8_t k = 2;",
          "phase": "SETUP",
          "explain": "Cần xoay trái 2 vị trí → kết quả kỳ vọng `{3, 4, 5, 1, 2}`.",
          "cards": [
            [
              "a[]",
              "[1,2,3,4,5]",
              "blue"
            ],
            [
              "k",
              "2",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Ban đầu",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a[0]",
                "val": "1",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "0x0101",
                "label": "a[1]",
                "val": "2",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "0x0102",
                "label": "a[2]",
                "val": "3",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0103",
                "label": "a[3]",
                "val": "4",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0104",
                "label": "a[4]",
                "val": "5",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Tách 2 đoạn [1,2] và [3,4,5]"
          }
        },
        {
          "code": "rev(a, 0, k-1); rev(a, k, 4);",
          "phase": "EXECUTION",
          "explain": "Đảo đoạn đầu → `{2, 1}`, đảo đoạn sau → `{5, 4, 3}`. Mảng tạm thời là `{2, 1, 5, 4, 3}`.",
          "cards": [
            [
              "Sau bước 1&2",
              "[2,1,5,4,3]",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Sau 2 lần đảo con",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a[0]",
                "val": "2",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "0x0101",
                "label": "a[1]",
                "val": "1",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "0x0102",
                "label": "a[2]",
                "val": "5",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0103",
                "label": "a[3]",
                "val": "4",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0104",
                "label": "a[4]",
                "val": "3",
                "active": true,
                "tone": "blue"
              }
            ],
            "pointers": [],
            "note": "Chuẩn bị đảo toàn mảng"
          }
        },
        {
          "code": "rev(a, 0, 4); // {3, 4, 5, 1, 2}",
          "phase": "OUTPUT",
          "explain": "Đảo toàn bộ mảng cho ra đúng `{3, 4, 5, 1, 2}` với 0 byte mảng phụ!",
          "cards": [
            [
              "Kết quả",
              "[3,4,5,1,2]",
              "green"
            ],
            [
              "RAM phụ",
              "1 byte",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Đã xoay trái 2 vị trí",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a[0]",
                "val": "3",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "a[1]",
                "val": "4",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0102",
                "label": "a[2]",
                "val": "5",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0103",
                "label": "a[3]",
                "val": "1",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0104",
                "label": "a[4]",
                "val": "2",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Thuật toán Reversal O(n) thời gian, O(1) RAM"
          }
        }
      ],
      "remember": "Luôn chuẩn hóa `k = k % n` trước khi xoay!",
      "pitfall": "Ứng dụng: cuộn dòng chữ chạy trên LCD 16x2 hoặc LED ma trận 8x8.",
      "tests": [
        "+ {1,2,3,4,5}, k=2 → {3,4,5,1,2}"
      ],
      "problem": {
        "scenario": "Sắp lại thứ tự một cửa sổ mẫu đang lưu trong SRAM theo K. Kiểm n khác 0 trước khi lấy modulo K theo n.\n\nVới chỉ 2 KB SRAM trên ATmega328P, mọi thao tác xử lý mảng cảm biến ADC hoặc gói tin UART đều phải tối ưu tại chỗ (In-Place, không cấp phát thêm mảng lớn). Yêu cầu thực tế: Xoay trái mảng `a[n]` đi `k` vị trí tại chỗ (O(1) RAM) bằng 3 bước đảo đoạn: đảo `[0..k-1]`, đảo `[k..n-1]`, đảo `[0..n-1]`.",
        "prototype": "void rotate_arr_solve(void)",
        "workedExample": [
          "Bước 1: Cần xoay trái 2 vị trí → kết quả kỳ vọng `{3, 4, 5, 1, 2}`. (a[]=[1,2,3,4,5], k=2)",
          "Bước 2: Đảo đoạn đầu → `{2, 1}`, đảo đoạn sau → `{5, 4, 3}`. (Sau bước 1&2=[2,1,5,4,3])",
          "Bước 3: Đảo toàn bộ mảng cho ra đúng `{3, 4, 5, 1, 2}` với 0 byte mảng phụ!. (Kết quả=[3,4,5,1,2], RAM phụ=1 byte)"
        ],
        "testRows": [
          [
            "Case 1",
            "{1,2,3,4,5}, k=2",
            "{3,4,5,1,2}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 048: Xoay trái mảng K vị trí (Thuật toán 3 lần Đảo ngược)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void rotate_arr_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t a[5] = {1, 2, 3, 4, 5}; uint8_t k = 2;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn chuẩn hóa `k = k % n` trước khi xoay!",
        "hint2": "Ứng dụng: cuộn dòng chữ chạy trên LCD 16x2 hoặc LED ma trận 8x8.",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Ban đầu",
          "cells": [
            {
              "addr": "0x0100",
              "label": "a[0]",
              "val": "1",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "0x0101",
              "label": "a[1]",
              "val": "2",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "0x0102",
              "label": "a[2]",
              "val": "3",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0103",
              "label": "a[3]",
              "val": "4",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0104",
              "label": "a[4]",
              "val": "5",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Tách 2 đoạn [1,2] và [3,4,5]"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: Đã xoay trái 2 vị trí",
          "cells": [
            {
              "addr": "0x0100",
              "label": "a[0]",
              "val": "3",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0101",
              "label": "a[1]",
              "val": "4",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0102",
              "label": "a[2]",
              "val": "5",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0103",
              "label": "a[3]",
              "val": "1",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0104",
              "label": "a[4]",
              "val": "2",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Thuật toán Reversal O(n) thời gian, O(1) RAM"
        }
      }
    },
    {
      "id": 49,
      "type": "task",
      "ewTitle": "Find Duplicate in Range 0 and n-1",
      "title": "Tìm phần tử trùng lặp trong dải 0..n-1 (Kiểm tra ID cảm biến I2C)",
      "moduleId": "m5_array",
      "brochureRef": "Brochure M4",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Tìm ID trùng lặp bằng mảng đánh dấu Bitset (1 byte chứa 8 cờ) thay vì mảng bool 8 byte, tiết kiệm 8x SRAM.",
      "filename": "avr_find_dup.c",
      "lines": [
        {
          "code": "uint8_t ids[5] = {1, 3, 2, 3, 0}; uint8_t seen_mask = 0;",
          "phase": "SETUP",
          "explain": "Dùng 1 biến `uint8_t seen_mask` (8 bit) làm bảng băm siêu gọn cho các ID từ 0..7.",
          "cards": [
            [
              "ids[]",
              "[1,3,2,3,0]",
              "blue"
            ],
            [
              "seen_mask",
              "0x00",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "seen_mask = 0x00",
            "val": 0,
            "prev": 0,
            "mask": 0,
            "labels": [],
            "note": "Mỗi bit đại diện 1 ID đã thấy"
          }
        },
        {
          "code": "for(uint8_t i=0;i<5;i++) {\n  if(seen_mask & (1U<<ids[i])) { dup=ids[i]; break; }\n  seen_mask |= (1U<<ids[i]);\n}",
          "phase": "OUTPUT",
          "explain": "i=0(1)→mask=0x02; i=1(3)→mask=0x0A; i=2(2)→mask=0x0E; i=3(3)→bit 3 đã bật → phát hiện `dup = 3`!",
          "cards": [
            [
              "dup",
              "3",
              "green"
            ],
            [
              "seen_mask",
              "0x0E",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Phát hiện bit 3 trùng!",
            "val": 14,
            "prev": 0,
            "mask": 8,
            "labels": [],
            "note": "Bit 3 đã bật trước đó → dup = 3",
            "op": "OR (|=)"
          }
        }
      ],
      "remember": "Dùng Bitset (`uint8_t`/`uint32_t`) kiểm tra trùng lặp tốn O(1) thời gian và tiết kiệm gấp 8 lần SRAM.",
      "pitfall": "Nếu n > 8, dùng mảng `uint8_t bitset[(N+7)/8]` với `bitset[v>>3] & (1U<<(v&7))`.",
      "tests": [
        "+ {1,3,2,3,0} → dup = 3"
      ],
      "problem": {
        "scenario": "Bảng ID phần mềm của các thiết bị trên TWI phải không trùng. Miền 0..n-1 của bài là chỉ số ứng dụng, không phải dải địa chỉ I2C.\n\nVới chỉ 2 KB SRAM trên ATmega328P, mọi thao tác xử lý mảng cảm biến ADC hoặc gói tin UART đều phải tối ưu tại chỗ (In-Place, không cấp phát thêm mảng lớn). Yêu cầu thực tế: Tìm ID trùng lặp bằng mảng đánh dấu Bitset (1 byte chứa 8 cờ) thay vì mảng bool 8 byte, tiết kiệm 8x SRAM.",
        "prototype": "void find_dup_solve(void)",
        "workedExample": [
          "Bước 1: Dùng 1 biến `uint8_t seen_mask` (8 bit) làm bảng băm siêu gọn cho các ID từ 0. (ids[]=[1,3,2,3,0], seen_mask=0x00)",
          "Bước 2: i=0(1)→mask=0x02; i=1(3)→mask=0x0A; i=2(2)→mask=0x0E; i=3(3)→bit 3 đã bật → phát hiện `dup = 3`!. (dup=3, seen_mask=0x0E)"
        ],
        "testRows": [
          [
            "Case 1",
            "{1,3,2,3,0}",
            "dup = 3"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 049: Tìm phần tử trùng lặp trong dải 0..n-1 (Kiểm tra ID cảm biến I2C)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void find_dup_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t ids[5] = {1, 3, 2, 3, 0}; uint8_t seen_mask = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Dùng Bitset (`uint8_t`/`uint32_t`) kiểm tra trùng lặp tốn O(1) thời gian và tiết kiệm gấp 8 lần SRAM.",
        "hint2": "Nếu n > 8, dùng mảng `uint8_t bitset[(N+7)/8]` với `bitset[v>>3] & (1U<<(v&7))`.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "seen_mask = 0x00",
          "val": 0,
          "prev": 0,
          "mask": 0,
          "labels": [],
          "note": "Mỗi bit đại diện 1 ID đã thấy"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Phát hiện bit 3 trùng!",
          "val": 14,
          "prev": 0,
          "mask": 8,
          "labels": [],
          "note": "Bit 3 đã bật trước đó → dup = 3",
          "op": "OR (|=)"
        }
      }
    },
    {
      "id": 50,
      "type": "task",
      "ewTitle": "Sliding Window Sum",
      "title": "Tổng cửa sổ trượt (Bộ lọc trung bình trượt Moving Average ADC)",
      "moduleId": "m5_array",
      "brochureRef": "Brochure M4 & M11 (ADC Filter)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "ADC",
        "SRAM"
      ],
      "summary": "Tính tổng 4 mẫu ADC liên tiếp trong O(1) mỗi bước bằng cách trừ mẫu cũ rời cửa sổ và cộng mẫu mới vào, rồi dịch phải `>> 2` để lấy trung bình!",
      "filename": "avr_sliding_window.c",
      "lines": [
        {
          "code": "uint16_t adc[6] = {100, 104, 102, 106, 108, 104};",
          "phase": "SETUP",
          "explain": "6 mẫu ADC đọc liên tiếp từ cảm biến nhiệt độ LM35 / chiết áp.",
          "cards": [
            [
              "Cửa sổ K",
              "4 mẫu (2^2)",
              "purple"
            ],
            [
              "Chia 4",
              "Dùng >> 2",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Cửa sổ [0..3]: 100+104+102+106",
            "cells": [
              {
                "addr": "0",
                "label": "adc[0]",
                "val": "100",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "adc[1]",
                "val": "104",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "adc[2]",
                "val": "102",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "adc[3]",
                "val": "106",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "adc[4]",
                "val": "108",
                "active": false,
                "tone": ""
              },
              {
                "addr": "5",
                "label": "adc[5]",
                "val": "104",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Tổng đầu = 412 → TB = 103"
          }
        },
        {
          "code": "uint16_t sum = 412; // tổng 4 mẫu đầu",
          "phase": "EXECUTION",
          "explain": "Tổng 4 mẫu đầu tiên = 412 (trung bình 412 >> 2 = 103).",
          "cards": [
            [
              "sum",
              "412",
              "blue"
            ],
            [
              "avg",
              "103",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Trượt sang [1..4]",
            "cells": [
              {
                "addr": "0",
                "label": "Bỏ:100",
                "val": "100",
                "active": true,
                "tone": "rose"
              },
              {
                "addr": "1",
                "label": "adc[1]",
                "val": "104",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "adc[2]",
                "val": "102",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "3",
                "label": "adc[3]",
                "val": "106",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "4",
                "label": "Thêm:108",
                "val": "108",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "5",
                "label": "adc[5]",
                "val": "104",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "sum = 412 - 100 + 108 = 420"
          }
        },
        {
          "code": "sum = sum - adc[0] + adc[4]; // 420 → avg = 105",
          "phase": "OUTPUT",
          "explain": "Trừ mẫu cũ (100), cộng mẫu mới (108) → tổng = 420, trung bình = 420 >> 2 = 105! Chỉ tốn 2 phép tính mỗi mẫu mới.",
          "cards": [
            [
              "sum mới",
              "420",
              "green"
            ],
            [
              "avg mới",
              "105",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Cửa sổ [1..4] hoàn tất",
            "cells": [
              {
                "addr": "0",
                "label": "adc[0]",
                "val": "100",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "adc[1]",
                "val": "104",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "adc[2]",
                "val": "102",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "adc[3]",
                "val": "106",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "adc[4]",
                "val": "108",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "5",
                "label": "adc[5]",
                "val": "104",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "sum = 420, avg = 105"
          }
        }
      ],
      "remember": "Chọn kích thước cửa sổ K = 4, 8 hoặc 16 để thay phép chia chậm trên AVR bằng dịch phải `>> 2`, `>> 3`, `>> 4`.",
      "pitfall": "Kiểm tra tràn tổng: 16 mẫu ADC 10-bit tối đa 16 * 1023 = 16,368 → nằm gọn trong `uint16_t`!",
      "tests": [
        "+ [100,104,102,106]→412; trượt→420 (avg=105)"
      ],
      "problem": {
        "scenario": "PC0/ADC0 đưa mẫu vào cửa sổ. Trừ mẫu cũ trước khi thêm mẫu mới và chọn kiểu tổng theo số mẫu tối đa.\n\nVới chỉ 2 KB SRAM trên ATmega328P, mọi thao tác xử lý mảng cảm biến ADC hoặc gói tin UART đều phải tối ưu tại chỗ (In-Place, không cấp phát thêm mảng lớn). Yêu cầu thực tế: Tính tổng 4 mẫu ADC liên tiếp trong O(1) mỗi bước bằng cách trừ mẫu cũ rời cửa sổ và cộng mẫu mới vào, rồi dịch phải `>> 2` để lấy trung bình!",
        "prototype": "void sliding_window_solve(void)",
        "workedExample": [
          "Bước 1: 6 mẫu ADC đọc liên tiếp từ cảm biến nhiệt độ LM35 / chiết áp. (Cửa sổ K=4 mẫu (2^2), Chia 4=Dùng >> 2)",
          "Bước 2: Tổng 4 mẫu đầu tiên = 412 (trung bình 412 >> 2 = 103). (sum=412, avg=103)",
          "Bước 3: Trừ mẫu cũ (100), cộng mẫu mới (108) → tổng = 420, trung bình = 420 >> 2 = 105! Chỉ tốn 2 phép tính mỗi mẫu mới. (sum mới=420, avg mới=105)"
        ],
        "testRows": [
          [
            "Case 1",
            "[100,104,102,106]",
            "412; trượt→420 (avg=105)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, ADC, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 050: Tổng cửa sổ trượt (Bộ lọc trung bình trượt Moving Average ADC)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void sliding_window_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t adc[6] = {100, 104, 102, 106, 108, 104};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Chọn kích thước cửa sổ K = 4, 8 hoặc 16 để thay phép chia chậm trên AVR bằng dịch phải `>> 2`, `>> 3`, `>> 4`.",
        "hint2": "Kiểm tra tràn tổng: 16 mẫu ADC 10-bit tối đa 16 * 1023 = 16,368 → nằm gọn trong `uint16_t`!",
        "initViz": {
          "kind": "memory",
          "title": "Cửa sổ [0..3]: 100+104+102+106",
          "cells": [
            {
              "addr": "0",
              "label": "adc[0]",
              "val": "100",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "adc[1]",
              "val": "104",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "adc[2]",
              "val": "102",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "adc[3]",
              "val": "106",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "adc[4]",
              "val": "108",
              "active": false,
              "tone": ""
            },
            {
              "addr": "5",
              "label": "adc[5]",
              "val": "104",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Tổng đầu = 412 → TB = 103"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Cửa sổ [1..4] hoàn tất",
          "cells": [
            {
              "addr": "0",
              "label": "adc[0]",
              "val": "100",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "adc[1]",
              "val": "104",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "adc[2]",
              "val": "102",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "adc[3]",
              "val": "106",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "adc[4]",
              "val": "108",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "5",
              "label": "adc[5]",
              "val": "104",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "sum = 420, avg = 105"
        }
      }
    },
    {
      "id": 51,
      "type": "task",
      "ewTitle": "Serialized Data Buffer",
      "title": "Tuần tự hóa dữ liệu cảm biến vào Byte Buffer (Gửi UART/SPI)",
      "moduleId": "m5_array",
      "brochureRef": "Brochure M4 & M11",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART"
      ],
      "summary": "Đóng gói ID (uint8_t) và giá trị Encoder 16-bit (uint16_t) vào mảng byte `tx_buf[]` theo chuẩn Big-Endian để truyền qua UART.",
      "filename": "avr_serialize_buf.c",
      "lines": [
        {
          "code": "uint8_t id = 0x05; uint16_t rpm = 0x04B0; // 1200 RPM",
          "phase": "SETUP",
          "explain": "Cần đóng gói id (1 byte) và tốc độ động cơ rpm = 1200 (0x04B0, 2 byte) vào mảng truyền.",
          "cards": [
            [
              "id",
              "0x05",
              "blue"
            ],
            [
              "rpm",
              "1200 (0x04B0)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: tx_buf[3] (trống)",
            "cells": [
              {
                "addr": "0x0110",
                "label": "tx[0]",
                "val": "0x00",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0111",
                "label": "tx[1]",
                "val": "0x00",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0112",
                "label": "tx[2]",
                "val": "0x00",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Chuẩn bị tuần tự hóa 3 byte"
          }
        },
        {
          "code": "tx_buf[0] = id;\ntx_buf[1] = (uint8_t)(rpm >> 8);\ntx_buf[2] = (uint8_t)(rpm & 0xFFU);",
          "phase": "OUTPUT",
          "explain": "Ghi tuần tự từng byte độc lập với Endianness và Struct Padding: `tx_buf = {0x05, 0x04, 0xB0}`.",
          "cards": [
            [
              "tx_buf",
              "{0x05, 0x04, 0xB0}",
              "green"
            ],
            [
              "An toàn Alignment",
              "100%",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: tx_buf[3] đã đóng gói",
            "cells": [
              {
                "addr": "0x0110",
                "label": "ID",
                "val": "0x05",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0111",
                "label": "RPM_H",
                "val": "0x04",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0112",
                "label": "RPM_L",
                "val": "0xB0",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Sẵn sàng gửi qua USART0"
          }
        }
      ],
      "remember": "Tuần tự hóa thủ công bằng dịch bit (`>> 8`, `& 0xFF`) là cách an toàn và khả chuyển nhất giữa ATmega328P và PC/STM32.",
      "pitfall": "Tránh ép kiểu thẳng `*(uint16_t*)&buf[1] = rpm;` vì khác biệt Endianness và lỗi căn chỉnh trên ARM.",
      "tests": [
        "+ id=5, rpm=1200 → {0x05, 0x04, 0xB0}"
      ],
      "problem": {
        "scenario": "Lấy trường mẫu từ SRAM, ghi lần lượt vào bộ đệm TX của USART0 theo thứ tự byte đề cho. Giữ kiểm tra chiều dài đích.\n\nVới chỉ 2 KB SRAM trên ATmega328P, mọi thao tác xử lý mảng cảm biến ADC hoặc gói tin UART đều phải tối ưu tại chỗ (In-Place, không cấp phát thêm mảng lớn). Yêu cầu thực tế: Đóng gói ID (uint8_t) và giá trị Encoder 16-bit (uint16_t) vào mảng byte `tx_buf[]` theo chuẩn Big-Endian để truyền qua UART.",
        "prototype": "void serialize_buf_solve(void)",
        "workedExample": [
          "Bước 1: Cần đóng gói id (1 byte) và tốc độ động cơ rpm = 1200 (0x04B0, 2 byte) vào mảng truyền. (id=0x05, rpm=1200 (0x04B0))",
          "Bước 2: Ghi tuần tự từng byte độc lập với Endianness và Struct Padding: `tx_buf = {0x05, 0x04, 0xB0}`. (tx_buf={0x05, 0x04, 0xB0}, An toàn Alignment=100%)"
        ],
        "testRows": [
          [
            "Case 1",
            "id=5, rpm=1200",
            "{0x05, 0x04, 0xB0}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 051: Tuần tự hóa dữ liệu cảm biến vào Byte Buffer (Gửi UART/SPI)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void serialize_buf_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t id = 0x05; uint16_t rpm = 0x04B0; // 1200 RPM\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Tuần tự hóa thủ công bằng dịch bit (`>> 8`, `& 0xFF`) là cách an toàn và khả chuyển nhất giữa ATmega328P và PC/STM32.",
        "hint2": "Tránh ép kiểu thẳng `*(uint16_t*)&buf[1] = rpm;` vì khác biệt Endianness và lỗi căn chỉnh trên ARM.",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: tx_buf[3] (trống)",
          "cells": [
            {
              "addr": "0x0110",
              "label": "tx[0]",
              "val": "0x00",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0111",
              "label": "tx[1]",
              "val": "0x00",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0112",
              "label": "tx[2]",
              "val": "0x00",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Chuẩn bị tuần tự hóa 3 byte"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: tx_buf[3] đã đóng gói",
          "cells": [
            {
              "addr": "0x0110",
              "label": "ID",
              "val": "0x05",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0111",
              "label": "RPM_H",
              "val": "0x04",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0112",
              "label": "RPM_L",
              "val": "0xB0",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Sẵn sàng gửi qua USART0"
        }
      }
    },
    {
      "id": 52,
      "type": "quiz",
      "ewTitle": "Array Manipulation-i",
      "title": "Quiz: Quản lý Mảng trong 2 KB SRAM ATmega328P",
      "moduleId": "m5_array",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Kiểm tra cách tính kích thước mảng, truyền mảng vào hàm và Checksum.",
      "questions": [
        {
          "q": "Mảng `uint16_t samples[128];` chiếm bao nhiêu byte trong 2 KB (2048 byte) SRAM của ATmega328P?",
          "opts": [
            "128 byte",
            "256 byte (12.5% SRAM)",
            "512 byte",
            "64 byte"
          ],
          "ans": 1,
          "exp": "Mỗi phần tử `uint16_t` chiếm 2 byte → 128 × 2 = 256 byte."
        },
        {
          "q": "Trong hàm `void process(uint8_t arr[])`, giá trị `sizeof(arr)` trên ATmega328P là bao nhiêu?",
          "opts": [
            "Kích thước cả mảng",
            "2 byte (kích thước con trỏ SRAM 16-bit trên AVR)",
            "4 byte",
            "1 byte"
          ],
          "ans": 1,
          "exp": "Mảng khi truyền vào hàm suy biến thành con trỏ (`uint8_t *`). Con trỏ SRAM trên ATmega328P rộng 16-bit (2 byte)!"
        },
        {
          "q": "Khi dùng bộ lọc Moving Average 8 mẫu ADC 10-bit, phép chia trung bình nhanh nhất trên AVR là?",
          "opts": [
            "sum / 8.0",
            "sum >> 3",
            "sum % 8",
            "sum * 0.125"
          ],
          "ans": 1,
          "exp": "Dịch phải 3 bit (`>> 3`) tránh hoàn toàn phép chia phần mềm và số thực float cực nặng trên AVR."
        },
        {
          "q": "Mảng 64 mẫu ADC kiểu uint16_t chiếm bao nhiêu byte SRAM?",
          "opts": [
            "128",
            "64",
            "256"
          ],
          "ans": 0,
          "exp": "Mỗi phần tử chiếm hai byte."
        }
      ],
      "remember": "Luôn truyền kèm tham số `uint8_t len` khi truyền mảng vào hàm!",
      "pitfall": "Tránh khai báo mảng cục bộ lớn trong hàm vì Stack của ATmega328P rất nhỏ!",
      "avrContext": "Tính số byte mảng chiếm trong 2 KiB SRAM rồi kiểm ca vượt chỉ số. Phần RAM còn lại còn dành cho stack và dữ liệu khác."
    },
    {
      "id": 53,
      "type": "quiz",
      "ewTitle": "Array Manipulation-ii",
      "title": "Quiz: Cửa sổ trượt, Xoay mảng & Tuần tự hóa Buffer",
      "moduleId": "m5_array",
      "brochureRef": "Brochure M4 & M11",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Kiểm tra thuật toán In-Place và tuần tự hóa byte.",
      "questions": [
        {
          "q": "Thuật toán Sliding Window Sum có độ phức tạp thời gian cho mỗi mẫu mới là bao nhiêu?",
          "opts": [
            "O(K)",
            "O(1)",
            "O(N log N)",
            "O(N^2)"
          ],
          "ans": 1,
          "exp": "Chỉ cần 1 phép trừ mẫu cũ và 1 phép cộng mẫu mới → O(1)."
        },
        {
          "q": "Để tách byte cao của `uint16_t val = 0x1234` vào `buf[0]`, ta viết?",
          "opts": [
            "val & 0xFF",
            "(uint8_t)(val >> 8)",
            "(uint8_t)(val << 8)",
            "val / 100"
          ],
          "ans": 1,
          "exp": "0x1234 >> 8 = 0x0012 → ép `uint8_t` được 0x12."
        },
        {
          "q": "Kiểm tra mảng rỗng (`n == 0`) trước khi tính `uint8_t r = n - 1;` giúp tránh lỗi gì?",
          "opts": [
            "Tràn dương",
            "Unsigned Underflow thành 255 gây ghi đè tràn SRAM!",
            "Lỗi biên dịch",
            "Lỗi chia 0"
          ],
          "ans": 1,
          "exp": "Với `n=0`, `n-1` thành 255 khiến vòng lặp truy cập ngoài biên mảng (Buffer Overflow)."
        },
        {
          "q": "Tổng cửa sổ ADC0 bằng 12. Bỏ 2, thêm 6. Tổng mới?",
          "opts": [
            "18",
            "16",
            "8"
          ],
          "ans": 1,
          "exp": "12 trừ 2 rồi cộng 6."
        }
      ],
      "remember": "Mọi thao tác mảng trên ATmega328P cần ưu tiên In-Place và kiểm tra biên chặt chẽ.",
      "pitfall": "Ghi tràn ngoài mảng trên ATmega328P không báo Segmentation Fault mà âm thầm phá hỏng biến khác hoặc Stack!",
      "avrContext": "Xác định dữ liệu nào thuộc cửa sổ ADC và dữ liệu nào là byte của khung. Kiểm kiểu tích lũy và điểm quấn vòng."
    },
    {
      "id": 54,
      "type": "task",
      "ewTitle": "Pointer- Swap Value",
      "title": "Hoán đổi 2 biến qua Con trỏ (Truyền tham chiếu địa chỉ SRAM)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M3 & M5 (Call by Reference)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Truyền địa chỉ SRAM 16-bit (`uint8_t *`) vào hàm `swap()` để thay đổi trực tiếp giá trị hai biến ở hàm gọi.",
      "filename": "avr_ptr_swap.c",
      "lines": [
        {
          "code": "uint8_t a = 10, b = 25;",
          "phase": "SETUP",
          "explain": "Biến `a` nằm ở SRAM 0x0100 (=10), biến `b` nằm ở 0x0101 (=25).",
          "cards": [
            [
              "&a",
              "0x0100 (10)",
              "blue"
            ],
            [
              "&b",
              "0x0101 (25)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Trước khi gọi swap(&a, &b)",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a",
                "val": "10",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0101",
                "label": "b",
                "val": "25",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Hai biến nằm ở 2 ô nhớ riêng"
          }
        },
        {
          "code": "uint8_t *pa = &a, *pb = &b;",
          "phase": "MEMORY",
          "explain": "Con trỏ trên ATmega328P rộng 2 byte (16-bit) vì không gian địa chỉ dữ liệu là 16-bit (0x0000..0x08FF). `pa` giữ 0x0100, `pb` giữ 0x0101.",
          "cards": [
            [
              "pa",
              "0x0100",
              "purple"
            ],
            [
              "pb",
              "0x0101",
              "purple"
            ],
            [
              "sizeof(pa)",
              "2 byte",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Con trỏ trỏ tới a và b",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a (*pa)",
                "val": "10",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "0x0101",
                "label": "b (*pb)",
                "val": "25",
                "active": true,
                "tone": "purple"
              }
            ],
            "pointers": [
              {
                "name": "pa",
                "target": "0x0100",
                "val": "0x0100"
              },
              {
                "name": "pb",
                "target": "0x0101",
                "val": "0x0101"
              }
            ],
            "note": "Cặp thanh ghi X/Y/Z trên AVR giữ địa chỉ 16-bit"
          }
        },
        {
          "code": "uint8_t t = *pa; *pa = *pb; *pb = t;",
          "phase": "OUTPUT",
          "explain": "Giải tham chiếu `*pa` và `*pb` (lệnh `LD`/`ST` của AVR) để ghi trực tiếp vào ô nhớ 0x0100 và 0x0101: a=25, b=10!",
          "cards": [
            [
              "a mới",
              "25",
              "green"
            ],
            [
              "b mới",
              "10",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Sau khi hoán đổi",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a",
                "val": "25",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "b",
                "val": "10",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [
              {
                "name": "pa",
                "target": "0x0100",
                "val": "0x0100"
              },
              {
                "name": "pb",
                "target": "0x0101",
                "val": "0x0101"
              }
            ],
            "note": "Dữ liệu trong SRAM đã được hoán đổi"
          }
        }
      ],
      "remember": "Con trỏ SRAM trên ATmega328P có kích thước 2 byte (16-bit), thường được avr-gcc nạp vào cặp thanh ghi Z (R30:R31) hoặc X/Y.",
      "pitfall": "Luôn kiểm tra `if (!pa || !pb) return;` trước khi giải tham chiếu con trỏ!",
      "tests": [
        "+ swap(10, 25) → a=25, b=10"
      ],
      "problem": {
        "scenario": "Hoán đổi hai giá trị hiệu chuẩn mẫu ADC trong SRAM bằng con trỏ đầu ra. Kiểm trường hợp hai con trỏ trỏ cùng biến.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Truyền địa chỉ SRAM 16-bit (`uint8_t *`) vào hàm `swap()` để thay đổi trực tiếp giá trị hai biến ở hàm gọi.",
        "prototype": "void ptr_swap_solve(void)",
        "workedExample": [
          "Bước 1: Biến `a` nằm ở SRAM 0x0100 (=10), biến `b` nằm ở 0x0101 (=25). (&a=0x0100 (10), &b=0x0101 (25))",
          "Bước 2: Con trỏ trên ATmega328P rộng 2 byte (16-bit) vì không gian địa chỉ dữ liệu là 16-bit (0x0000. (pa=0x0100, pb=0x0101)",
          "Bước 3: Giải tham chiếu `*pa` và `*pb` (lệnh `LD`/`ST` của AVR) để ghi trực tiếp vào ô nhớ 0x0100 và 0x0101: a=25, b=10!. (a mới=25, b mới=10)"
        ],
        "testRows": [
          [
            "Case 1",
            "swap(10, 25)",
            "a=25, b=10"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 054: Hoán đổi 2 biến qua Con trỏ (Truyền tham chiếu địa chỉ SRAM)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void ptr_swap_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t a = 10, b = 25;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Con trỏ SRAM trên ATmega328P có kích thước 2 byte (16-bit), thường được avr-gcc nạp vào cặp thanh ghi Z (R30:R31) hoặc X/Y.",
        "hint2": "Luôn kiểm tra `if (!pa || !pb) return;` trước khi giải tham chiếu con trỏ!",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Trước khi gọi swap(&a, &b)",
          "cells": [
            {
              "addr": "0x0100",
              "label": "a",
              "val": "10",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0101",
              "label": "b",
              "val": "25",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Hai biến nằm ở 2 ô nhớ riêng"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: Sau khi hoán đổi",
          "cells": [
            {
              "addr": "0x0100",
              "label": "a",
              "val": "25",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0101",
              "label": "b",
              "val": "10",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [
            {
              "name": "pa",
              "target": "0x0100",
              "val": "0x0100"
            },
            {
              "name": "pb",
              "target": "0x0101",
              "val": "0x0101"
            }
          ],
          "note": "Dữ liệu trong SRAM đã được hoán đổi"
        }
      }
    },
    {
      "id": 55,
      "type": "task",
      "ewTitle": "Print Sum of Even Numbers",
      "title": "Tính tổng số chẵn bằng Con trỏ duyệt mảng",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 (Pointer Arithmetic)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Duyệt mảng bằng con trỏ `p++` và kiểm tra chẵn bằng `(*p & 1U) == 0` nhanh hơn phép `% 2`.",
      "filename": "avr_ptr_even_sum.c",
      "lines": [
        {
          "code": "uint8_t arr[4] = {4, 7, 12, 5}; uint16_t sum = 0;",
          "phase": "SETUP",
          "explain": "Mảng 4 byte tại 0x0100..0x0103. Dùng `sum` kiểu uint16_t tránh tràn.",
          "cards": [
            [
              "arr",
              "[4, 7, 12, 5]",
              "blue"
            ],
            [
              "sum",
              "0",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: arr[4]",
            "cells": [
              {
                "addr": "0x0100",
                "label": "arr[0]",
                "val": "4",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "arr[1]",
                "val": "7",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "arr[2]",
                "val": "12",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0103",
                "label": "arr[3]",
                "val": "5",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "p",
                "target": "0x0100",
                "val": "0x0100"
              }
            ],
            "note": "p bắt đầu tại 0x0100"
          }
        },
        {
          "code": "for(uint8_t *p = arr; p < arr + 4; p++) {\n  if((*p & 1U) == 0) sum += *p;\n}",
          "phase": "OUTPUT",
          "explain": "Con trỏ `p` tiến từng 1 byte (`LD r, Z+` trên AVR!). Các số chẵn là 4 và 12 → `sum = 16`.",
          "cards": [
            [
              "Số chẵn",
              "4, 12",
              "green"
            ],
            [
              "sum",
              "16",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Duyệt xong",
            "cells": [
              {
                "addr": "0x0100",
                "label": "chẵn (+4)",
                "val": "4",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "lẻ",
                "val": "7",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "chẵn (+12)",
                "val": "12",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0103",
                "label": "lẻ",
                "val": "5",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "p",
                "target": "0x0104",
                "val": "end"
              }
            ],
            "note": "Tổng các số chẵn = 16"
          }
        }
      ],
      "remember": "Duyệt mảng bằng con trỏ `p++` khớp hoàn hảo với chế độ địa chỉ Post-Increment `LD Rd, Z+` của CPU AVR!",
      "pitfall": "Không giải tham chiếu `p` khi `p == arr + 4` (vị trí one-past-the-end).",
      "tests": [
        "+ {4,7,12,5} → sum=16"
      ],
      "problem": {
        "scenario": "Sau khi driver ADC lưu mẫu vào mảng SRAM, duyệt từ đầu đến mốc sau cuối, cộng các giá trị chẵn vào kiểu đủ rộng.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Duyệt mảng bằng con trỏ `p++` và kiểm tra chẵn bằng `(*p & 1U) == 0` nhanh hơn phép `% 2`.",
        "prototype": "void ptr_even_sum_solve(void)",
        "workedExample": [
          "Bước 1: Mảng 4 byte tại 0x0100. (arr=[4, 7, 12, 5], sum=0)",
          "Bước 2: Con trỏ `p` tiến từng 1 byte (`LD r, Z+` trên AVR!). (Số chẵn=4, 12, sum=16)"
        ],
        "testRows": [
          [
            "Case 1",
            "{4,7,12,5}",
            "sum=16"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 055: Tính tổng số chẵn bằng Con trỏ duyệt mảng\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void ptr_even_sum_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t arr[4] = {4, 7, 12, 5}; uint16_t sum = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Duyệt mảng bằng con trỏ `p++` khớp hoàn hảo với chế độ địa chỉ Post-Increment `LD Rd, Z+` của CPU AVR!",
        "hint2": "Không giải tham chiếu `p` khi `p == arr + 4` (vị trí one-past-the-end).",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: arr[4]",
          "cells": [
            {
              "addr": "0x0100",
              "label": "arr[0]",
              "val": "4",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0101",
              "label": "arr[1]",
              "val": "7",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "arr[2]",
              "val": "12",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0103",
              "label": "arr[3]",
              "val": "5",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "p",
              "target": "0x0100",
              "val": "0x0100"
            }
          ],
          "note": "p bắt đầu tại 0x0100"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: Duyệt xong",
          "cells": [
            {
              "addr": "0x0100",
              "label": "chẵn (+4)",
              "val": "4",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0101",
              "label": "lẻ",
              "val": "7",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "chẵn (+12)",
              "val": "12",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0103",
              "label": "lẻ",
              "val": "5",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "p",
              "target": "0x0104",
              "val": "end"
            }
          ],
          "note": "Tổng các số chẵn = 16"
        }
      }
    },
    {
      "id": 56,
      "type": "task",
      "ewTitle": "Reverse an Array Using Only Pointers",
      "title": "Đảo ngược mảng chỉ dùng Con trỏ (Không dùng chỉ số `[]`)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng cặp con trỏ `start` và `end` tiến lại gần nhau để đảo mảng tại chỗ.",
      "filename": "avr_ptr_rev.c",
      "lines": [
        {
          "code": "uint8_t *s = arr, *e = arr + n - 1;",
          "phase": "MEMORY",
          "explain": "Với mảng có ít nhất hai phần tử, đặt một con trỏ ở đầu và một con trỏ ở cuối. Xử lý mảng rỗng hoặc có một phần tử trước khi tạo con trỏ cuối.",
          "cards": [
            [
              "s",
              "0x0100",
              "blue"
            ],
            [
              "e",
              "0x0103",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Hai con trỏ s và e",
            "cells": [
              {
                "addr": "0x0100",
                "label": "*s",
                "val": "1",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0101",
                "label": "a[1]",
                "val": "2",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "a[2]",
                "val": "3",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0103",
                "label": "*e",
                "val": "4",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [
              {
                "name": "s",
                "target": "0x0100",
                "val": "0x0100"
              },
              {
                "name": "e",
                "target": "0x0103",
                "val": "0x0103"
              }
            ],
            "note": "s tiến lên, e lùi lại"
          }
        },
        {
          "code": "while (s < e) { uint8_t t = *s; *s++ = *e; *e-- = t; }",
          "phase": "OUTPUT",
          "explain": "Đổi *s với *e rồi tự động tăng s (`Z+`) và giảm e (`-Y`). Kết quả: `{4, 3, 2, 1}`.",
          "cards": [
            [
              "Kết quả",
              "[4, 3, 2, 1]",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Sau khi đảo xong",
            "cells": [
              {
                "addr": "0x0100",
                "label": "a[0]",
                "val": "4",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "a[1]",
                "val": "3",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0102",
                "label": "a[2]",
                "val": "2",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0103",
                "label": "a[3]",
                "val": "1",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Hoàn tất hoàn toàn bằng con trỏ"
          }
        }
      ],
      "remember": "Cả `Z+` (post-inc) và `-Y` (pre-dec) đều là lệnh phần cứng gốc trên ATmega328P.",
      "pitfall": "Kiểm tra `if (n < 2) return;` trước khi tính `arr + n - 1`.",
      "tests": [
        "+ {1,2,3,4} → {4,3,2,1}"
      ],
      "problem": {
        "scenario": "Dùng hai con trỏ trong bộ đệm mẫu SRAM và đổi các phần tử từ hai đầu vào giữa. Kiểm mảng rỗng trước khi tạo địa chỉ cuối.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Dùng cặp con trỏ `start` và `end` tiến lại gần nhau để đảo mảng tại chỗ.",
        "prototype": "void ptr_rev_solve(void)",
        "workedExample": [
          "Bước 1: `s` trỏ đầu mảng (0x0100), `e` trỏ cuối mảng (0x0103). (s=0x0100, e=0x0103)",
          "Bước 2: Đổi *s với *e rồi tự động tăng s (`Z+`) và giảm e (`-Y`). (Kết quả=[4, 3, 2, 1])"
        ],
        "testRows": [
          [
            "Case 1",
            "{1,2,3,4}",
            "{4,3,2,1}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 56 · ATmega328P */\nint main(void) {\n    uint8_t arr[] = {1, 2, 3, 4};\n    const uint8_t n = sizeof arr / sizeof arr[0];\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Cả `Z+` (post-inc) và `-Y` (pre-dec) đều là lệnh phần cứng gốc trên ATmega328P.",
        "hint2": "Kiểm tra `if (n < 2) return;` trước khi tính `arr + n - 1`.",
        "initViz": {
          "kind": "memory",
          "title": "Hai con trỏ s và e",
          "cells": [
            {
              "addr": "0x0100",
              "label": "*s",
              "val": "1",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0101",
              "label": "a[1]",
              "val": "2",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "a[2]",
              "val": "3",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0103",
              "label": "*e",
              "val": "4",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [
            {
              "name": "s",
              "target": "0x0100",
              "val": "0x0100"
            },
            {
              "name": "e",
              "target": "0x0103",
              "val": "0x0103"
            }
          ],
          "note": "s tiến lên, e lùi lại"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Sau khi đảo xong",
          "cells": [
            {
              "addr": "0x0100",
              "label": "a[0]",
              "val": "4",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0101",
              "label": "a[1]",
              "val": "3",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0102",
              "label": "a[2]",
              "val": "2",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0103",
              "label": "a[3]",
              "val": "1",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Hoàn tất hoàn toàn bằng con trỏ"
        }
      }
    },
    {
      "id": 57,
      "type": "task",
      "ewTitle": "Find Maximum Element Using Pointer Walk",
      "title": "Tìm giá trị lớn nhất (Đỉnh áp ADC) bằng Pointer Walk",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng con trỏ `const uint16_t *p` bước nhảy 2 byte/lần (`p++` tăng địa chỉ thêm `sizeof(uint16_t) = 2`) để tìm đỉnh tín hiệu.",
      "filename": "avr_ptr_max.c",
      "lines": [
        {
          "code": "uint16_t v[4] = {320, 890, 510, 740};",
          "phase": "SETUP",
          "explain": "Mảng 4 phần tử `uint16_t` chiếm 8 byte (0x0100..0x0107).",
          "cards": [
            [
              "Bước nhảy p++",
              "+2 byte",
              "purple"
            ],
            [
              "max đầu",
              "320",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Mảng uint16_t (2 byte/ô)",
            "cells": [
              {
                "addr": "0x0100",
                "label": "v[0]",
                "val": "320",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0102",
                "label": "v[1]",
                "val": "890",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0104",
                "label": "v[2]",
                "val": "510",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0106",
                "label": "v[3]",
                "val": "740",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "p",
                "target": "0x0100",
                "val": "0x0100"
              }
            ],
            "note": "Mỗi bước p++ cộng +2 vào địa chỉ"
          }
        },
        {
          "code": "uint16_t max = *p;\nfor(const uint16_t *p=v+1; p<v+4; p++) if(*p > max) max = *p;",
          "phase": "OUTPUT",
          "explain": "Duyệt qua 0x0102 (890 > 320 → max=890), 0x0104 (510), 0x0106 (740) → Kết quả `max = 890`.",
          "cards": [
            [
              "max",
              "890",
              "green"
            ],
            [
              "Tại địa chỉ",
              "0x0102",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Tìm thấy đỉnh max = 890",
            "cells": [
              {
                "addr": "0x0100",
                "label": "v[0]",
                "val": "320",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "MAX",
                "val": "890",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0104",
                "label": "v[2]",
                "val": "510",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0106",
                "label": "v[3]",
                "val": "740",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "max = 890"
          }
        }
      ],
      "remember": "Pointer Arithmetic tự nhân với `sizeof(*p)`: với `uint16_t*`, `p + 1` tăng địa chỉ thêm 2 byte!",
      "pitfall": "Dùng `const uint16_t *p` khi chỉ đọc để trình biên dịch bảo vệ dữ liệu gốc.",
      "tests": [
        "+ {320,890,510,740} → 890"
      ],
      "problem": {
        "scenario": "Tìm đỉnh trong dãy mẫu ADC đã đọc từ PC0 và lưu SRAM. Khởi tạo cực đại từ mẫu đầu khi mảng có phần tử.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Dùng con trỏ `const uint16_t *p` bước nhảy 2 byte/lần (`p++` tăng địa chỉ thêm `sizeof(uint16_t) = 2`) để tìm đỉnh tín hiệu.",
        "prototype": "void ptr_max_solve(void)",
        "workedExample": [
          "Bước 1: Mảng 4 phần tử `uint16_t` chiếm 8 byte (0x0100. (Bước nhảy p++=+2 byte, max đầu=320)",
          "Bước 2: Duyệt qua 0x0102 (890 > 320 → max=890), 0x0104 (510), 0x0106 (740) → Kết quả `max = 890`. (max=890, Tại địa chỉ=0x0102)"
        ],
        "testRows": [
          [
            "Case 1",
            "{320,890,510,740}",
            "890"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 057: Tìm giá trị lớn nhất (Đỉnh áp ADC) bằng Pointer Walk\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void ptr_max_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t v[4] = {320, 890, 510, 740};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Pointer Arithmetic tự nhân với `sizeof(*p)`: với `uint16_t*`, `p + 1` tăng địa chỉ thêm 2 byte!",
        "hint2": "Dùng `const uint16_t *p` khi chỉ đọc để trình biên dịch bảo vệ dữ liệu gốc.",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Mảng uint16_t (2 byte/ô)",
          "cells": [
            {
              "addr": "0x0100",
              "label": "v[0]",
              "val": "320",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0102",
              "label": "v[1]",
              "val": "890",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0104",
              "label": "v[2]",
              "val": "510",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0106",
              "label": "v[3]",
              "val": "740",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "p",
              "target": "0x0100",
              "val": "0x0100"
            }
          ],
          "note": "Mỗi bước p++ cộng +2 vào địa chỉ"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Tìm thấy đỉnh max = 890",
          "cells": [
            {
              "addr": "0x0100",
              "label": "v[0]",
              "val": "320",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "MAX",
              "val": "890",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0104",
              "label": "v[2]",
              "val": "510",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0106",
              "label": "v[3]",
              "val": "740",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "max = 890"
        }
      }
    },
    {
      "id": 58,
      "type": "task",
      "ewTitle": "Calculate Array Sum Using Only Pointers",
      "title": "Tính tổng mảng bằng Con trỏ",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Tính tổng các phần tử `uint8_t` vào biến tích lũy `uint16_t` bằng con trỏ `p` đến `end`.",
      "filename": "avr_ptr_sum.c",
      "lines": [
        {
          "code": "const uint8_t *p = arr, *end = arr + 4;\nuint16_t sum = 0;",
          "phase": "SETUP",
          "explain": "Tính trước con trỏ kết thúc `end` giúp vòng lặp chỉ cần so sánh `p != end`.",
          "cards": [
            [
              "arr",
              "[50, 100, 80, 70]",
              "blue"
            ],
            [
              "sum",
              "0",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: arr[4]",
            "cells": [
              {
                "addr": "0x0100",
                "label": "arr[0]",
                "val": "50",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0101",
                "label": "arr[1]",
                "val": "100",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "arr[2]",
                "val": "80",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0103",
                "label": "arr[3]",
                "val": "70",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "p",
                "target": "0x0100",
                "val": "0x0100"
              }
            ],
            "note": "Tính tổng 4 byte"
          }
        },
        {
          "code": "while (p < end) sum += *p++;",
          "phase": "OUTPUT",
          "explain": "`*p++` đọc giá trị tại `*p` rồi tăng `p` lên 1 byte. Tổng = 50+100+80+70 = 300 (vượt 255 nên bắt buộc `sum` là `uint16_t`!).",
          "cards": [
            [
              "sum",
              "300 (0x012C)",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Tổng = 300",
            "cells": [
              {
                "addr": "0x0100",
                "label": "50",
                "val": "+50",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "100",
                "val": "+100",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0102",
                "label": "80",
                "val": "+80",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0103",
                "label": "70",
                "val": "+70",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "sum = 300 (uint16_t)"
          }
        }
      ],
      "remember": "`*p++` tương đương `*(p++)`: lấy giá trị tại địa chỉ cũ, sau đó tăng con trỏ.",
      "pitfall": "Luôn chọn kiểu tích lũy lớn hơn kiểu phần tử để tránh tràn tổng.",
      "tests": [
        "+ {50,100,80,70} → 300"
      ],
      "problem": {
        "scenario": "Tính tổng của vùng mẫu liên tiếp trong SRAM. Kiểu tích lũy phải đủ rộng cho tất cả mẫu 8 bit của đề.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Tính tổng các phần tử `uint8_t` vào biến tích lũy `uint16_t` bằng con trỏ `p` đến `end`.",
        "prototype": "void ptr_sum_solve(void)",
        "workedExample": [
          "Bước 1: Tính trước con trỏ kết thúc `end` giúp vòng lặp chỉ cần so sánh `p != end`. (arr=[50, 100, 80, 70], sum=0)",
          "Bước 2: `*p++` đọc giá trị tại `*p` rồi tăng `p` lên 1 byte. (sum=300 (0x012C))"
        ],
        "testRows": [
          [
            "Case 1",
            "{50,100,80,70}",
            "300"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 58 · ATmega328P */\nint main(void) {\n    const uint8_t arr[] = {50, 100, 80, 70};\n    const uint8_t n = sizeof arr / sizeof arr[0];\n    volatile uint16_t sum = 0;\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "`*p++` tương đương `*(p++)`: lấy giá trị tại địa chỉ cũ, sau đó tăng con trỏ.",
        "hint2": "Luôn chọn kiểu tích lũy lớn hơn kiểu phần tử để tránh tràn tổng.",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: arr[4]",
          "cells": [
            {
              "addr": "0x0100",
              "label": "arr[0]",
              "val": "50",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0101",
              "label": "arr[1]",
              "val": "100",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "arr[2]",
              "val": "80",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0103",
              "label": "arr[3]",
              "val": "70",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "p",
              "target": "0x0100",
              "val": "0x0100"
            }
          ],
          "note": "Tính tổng 4 byte"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Tổng = 300",
          "cells": [
            {
              "addr": "0x0100",
              "label": "50",
              "val": "+50",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0101",
              "label": "100",
              "val": "+100",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0102",
              "label": "80",
              "val": "+80",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0103",
              "label": "70",
              "val": "+70",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "sum = 300 (uint16_t)"
        }
      }
    },
    {
      "id": 59,
      "type": "task",
      "ewTitle": "Double Pointer",
      "title": "Con trỏ kép (`uint8_t **`) — Chuyển đổi Bộ đệm Ping-Pong",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 (Double Pointer)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng con trỏ cấp 2 (`**pp`) để hàm bên trong có thể thay đổi con trỏ đang trỏ tới bộ đệm UART/ADC nào.",
      "filename": "avr_double_ptr.c",
      "lines": [
        {
          "code": "uint8_t bufA = 0x11, bufB = 0x22;\nuint8_t *active = &bufA;",
          "phase": "SETUP",
          "explain": "`active` đang trỏ tới `bufA` (0x0100).",
          "cards": [
            [
              "active",
              "0x0100 (&bufA)",
              "blue"
            ],
            [
              "*active",
              "0x11",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Con trỏ cấp 1 & cấp 2",
            "cells": [
              {
                "addr": "0x0100",
                "label": "bufA",
                "val": "0x11",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0101",
                "label": "bufB",
                "val": "0x22",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0110",
                "label": "active",
                "val": "0x0100",
                "active": true,
                "tone": "purple"
              }
            ],
            "pointers": [
              {
                "name": "pp",
                "target": "0x0110",
                "val": "0x0110"
              }
            ],
            "note": "pp giữ địa chỉ của biến con trỏ active"
          }
        },
        {
          "code": "uint8_t **pp = &active;\n*pp = &bufB;",
          "phase": "OUTPUT",
          "explain": "Ghi `&bufB` (0x0101) vào `*pp` làm thay đổi chính con trỏ `active` sang trỏ tới `bufB`! Bây giờ `**pp == 0x22`.",
          "cards": [
            [
              "active mới",
              "0x0101 (&bufB)",
              "green"
            ],
            [
              "**pp",
              "0x22",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: active đã chuyển sang bufB",
            "cells": [
              {
                "addr": "0x0100",
                "label": "bufA",
                "val": "0x11",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0101",
                "label": "bufB",
                "val": "0x22",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0110",
                "label": "active",
                "val": "0x0101",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [
              {
                "name": "pp",
                "target": "0x0110",
                "val": "0x0110"
              }
            ],
            "note": "*pp sửa trực tiếp active → 0x0101"
          }
        }
      ],
      "remember": "Con trỏ cấp 2 `T **pp` dùng khi bạn muốn một hàm làm thay đổi bản thân biến con trỏ `T *p` của bên gọi.",
      "pitfall": "Mỗi cấp giải tham chiếu trên AVR tốn 2 lệnh `LD` (tải 2 byte địa chỉ 16-bit vào thanh ghi Z).",
      "tests": [
        "+ active: &bufA → &bufB, **pp = 0x22"
      ],
      "problem": {
        "scenario": "ADC ghi vào bộ đệm đang nhận, main xử lý bộ đệm đã đầy. Dùng con trỏ kép để minh họa đổi địa chỉ mà không chép dữ liệu.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Dùng con trỏ cấp 2 (`**pp`) để hàm bên trong có thể thay đổi con trỏ đang trỏ tới bộ đệm UART/ADC nào.",
        "prototype": "void double_ptr_solve(void)",
        "workedExample": [
          "Bước 1: `active` đang trỏ tới `bufA` (0x0100). (active=0x0100 (&bufA), *active=0x11)",
          "Bước 2: Ghi `&bufB` (0x0101) vào `*pp` làm thay đổi chính con trỏ `active` sang trỏ tới `bufB`! Bây giờ `**pp == 0x22`. (active mới=0x0101 (&bufB), **pp=0x22)"
        ],
        "testRows": [
          [
            "Case 1",
            "active: &bufA",
            "&bufB, **pp = 0x22"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 059: Con trỏ kép (`uint8_t **`) — Chuyển đổi Bộ đệm Ping-Pong\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void double_ptr_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t bufA = 0x11, bufB = 0x22;\n    uint8_t *active = &bufA;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Con trỏ cấp 2 `T **pp` dùng khi bạn muốn một hàm làm thay đổi bản thân biến con trỏ `T *p` của bên gọi.",
        "hint2": "Mỗi cấp giải tham chiếu trên AVR tốn 2 lệnh `LD` (tải 2 byte địa chỉ 16-bit vào thanh ghi Z).",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Con trỏ cấp 1 & cấp 2",
          "cells": [
            {
              "addr": "0x0100",
              "label": "bufA",
              "val": "0x11",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0101",
              "label": "bufB",
              "val": "0x22",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0110",
              "label": "active",
              "val": "0x0100",
              "active": true,
              "tone": "purple"
            }
          ],
          "pointers": [
            {
              "name": "pp",
              "target": "0x0110",
              "val": "0x0110"
            }
          ],
          "note": "pp giữ địa chỉ của biến con trỏ active"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: active đã chuyển sang bufB",
          "cells": [
            {
              "addr": "0x0100",
              "label": "bufA",
              "val": "0x11",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0101",
              "label": "bufB",
              "val": "0x22",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0110",
              "label": "active",
              "val": "0x0101",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [
            {
              "name": "pp",
              "target": "0x0110",
              "val": "0x0110"
            }
          ],
          "note": "*pp sửa trực tiếp active → 0x0101"
        }
      }
    },
    {
      "id": 60,
      "type": "task",
      "ewTitle": "Swap Two Pointers Using Double Pointers",
      "title": "Hoán đổi 2 Con trỏ Bộ đệm (Double Buffering Zero-Copy)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Hoán đổi hai con trỏ `rx_buf` và `proc_buf` chỉ trong 2 byte thay vì copy cả mảng 64 byte — kỹ thuật Zero-Copy kinh điển trong Embedded!",
      "filename": "avr_swap_ptrs.c",
      "lines": [
        {
          "code": "uint8_t *p1 = buf1, *p2 = buf2;",
          "phase": "SETUP",
          "explain": "p1 đang trỏ buf1 (0x0100), p2 trỏ buf2 (0x0140).",
          "cards": [
            [
              "p1",
              "0x0100",
              "blue"
            ],
            [
              "p2",
              "0x0140",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Zero-Copy Double Buffer",
            "cells": [
              {
                "addr": "0x0100",
                "label": "buf1 (64B)",
                "val": "Data A",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0140",
                "label": "buf2 (64B)",
                "val": "Data B",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [
              {
                "name": "p1",
                "target": "0x0100",
                "val": "0x0100"
              },
              {
                "name": "p2",
                "target": "0x0140",
                "val": "0x0140"
              }
            ],
            "note": "Không copy 64 byte, chỉ đổi con trỏ!"
          }
        },
        {
          "code": "void swap_ptr(uint8_t **a, uint8_t **b) {\n  uint8_t *t = *a; *a = *b; *b = t;\n}",
          "phase": "OUTPUT",
          "explain": "Gọi `swap_ptr(&p1, &p2)`: p1 trỏ 0x0140, p2 trỏ 0x0100 trong O(1) — cực kỳ hữu ích khi ISR đang điền buf1 còn main() xử lý buf2!",
          "cards": [
            [
              "p1 mới",
              "0x0140",
              "green"
            ],
            [
              "p2 mới",
              "0x0100",
              "green"
            ],
            [
              "Byte copy",
              "0 byte dữ liệu!",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Đã hoán đổi Zero-Copy!",
            "cells": [
              {
                "addr": "0x0100",
                "label": "buf1 (p2)",
                "val": "Data A",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0140",
                "label": "buf2 (p1)",
                "val": "Data B",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [
              {
                "name": "p1",
                "target": "0x0140",
                "val": "0x0140"
              },
              {
                "name": "p2",
                "target": "0x0100",
                "val": "0x0100"
              }
            ],
            "note": "Đổi địa chỉ trong vài chu kỳ CPU"
          }
        }
      ],
      "remember": "Swap con trỏ (Zero-Copy) giúp xử lý dữ liệu thời gian thực mà không tốn thời gian `memcpy`.",
      "pitfall": "Khi hoán đổi con trỏ chia sẻ với ISR, nhớ tắt ngắt ngắn hạn (`cli()`/`sei()`).",
      "tests": [
        "+ p1=0x0100, p2=0x0140 → p1=0x0140, p2=0x0100"
      ],
      "problem": {
        "scenario": "Hoán đổi địa chỉ của hai bộ đệm SRAM. Khi nối với ISR thật, chỉ đổi quyền sở hữu sau khi bộ đệm nhận hoàn tất.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Hoán đổi hai con trỏ `rx_buf` và `proc_buf` chỉ trong 2 byte thay vì copy cả mảng 64 byte — kỹ thuật Zero-Copy kinh điển trong Embedded!",
        "prototype": "void swap_ptrs_solve(void)",
        "workedExample": [
          "Bước 1: p1 đang trỏ buf1 (0x0100), p2 trỏ buf2 (0x0140). (p1=0x0100, p2=0x0140)",
          "Bước 2: Gọi `swap_ptr(&p1, &p2)`: p1 trỏ 0x0140, p2 trỏ 0x0100 trong O(1) — cực kỳ hữu ích khi ISR đang điền buf1 còn main() xử lý buf2!. (p1 mới=0x0140, p2 mới=0x0100)"
        ],
        "testRows": [
          [
            "Case 1",
            "p1=0x0100, p2=0x0140",
            "p1=0x0140, p2=0x0100"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 60 · ATmega328P */\nint main(void) {\n    uint8_t buf1[64] = {1};\n    uint8_t buf2[64] = {2};\n    uint8_t *p1 = buf1;\n    uint8_t *p2 = buf2;\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Swap con trỏ (Zero-Copy) giúp xử lý dữ liệu thời gian thực mà không tốn thời gian `memcpy`.",
        "hint2": "Khi hoán đổi con trỏ chia sẻ với ISR, nhớ tắt ngắt ngắn hạn (`cli()`/`sei()`).",
        "initViz": {
          "kind": "memory",
          "title": "Zero-Copy Double Buffer",
          "cells": [
            {
              "addr": "0x0100",
              "label": "buf1 (64B)",
              "val": "Data A",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0140",
              "label": "buf2 (64B)",
              "val": "Data B",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [
            {
              "name": "p1",
              "target": "0x0100",
              "val": "0x0100"
            },
            {
              "name": "p2",
              "target": "0x0140",
              "val": "0x0140"
            }
          ],
          "note": "Không copy 64 byte, chỉ đổi con trỏ!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Đã hoán đổi Zero-Copy!",
          "cells": [
            {
              "addr": "0x0100",
              "label": "buf1 (p2)",
              "val": "Data A",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0140",
              "label": "buf2 (p1)",
              "val": "Data B",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [
            {
              "name": "p1",
              "target": "0x0140",
              "val": "0x0140"
            },
            {
              "name": "p2",
              "target": "0x0100",
              "val": "0x0100"
            }
          ],
          "note": "Đổi địa chỉ trong vài chu kỳ CPU"
        }
      }
    },
    {
      "id": 61,
      "type": "task",
      "ewTitle": "Add Two Integers Using Void Pointers",
      "title": "Cộng hai số qua Con trỏ tổng quát (`void *`)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 (Void Pointer)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Sử dụng `const void *` để viết hàm giao tiếp tổng quát (generic API) rồi ép kiểu tường minh về `const int16_t *` trước khi giải tham chiếu.",
      "filename": "avr_void_ptr.c",
      "lines": [
        {
          "code": "int16_t x = 150, y = 270;\nconst void *px = &x, *py = &y;",
          "phase": "SETUP",
          "explain": "`void *` có thể giữ địa chỉ của mọi kiểu dữ liệu trong SRAM, nhưng KHÔNG thể trực tiếp viết `*px` vì compiler không biết kích thước kiểu.",
          "cards": [
            [
              "px",
              "&x (void*)",
              "purple"
            ],
            [
              "py",
              "&y (void*)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: void* trỏ tới int16_t",
            "cells": [
              {
                "addr": "0x0100",
                "label": "x (int16)",
                "val": "150",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0102",
                "label": "y (int16)",
                "val": "270",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [
              {
                "name": "px",
                "target": "0x0100",
                "val": "void*"
              },
              {
                "name": "py",
                "target": "0x0102",
                "val": "void*"
              }
            ],
            "note": "Cần ép kiểu trước khi đọc"
          }
        },
        {
          "code": "int16_t sum = *(const int16_t *)px + *(const int16_t *)py;",
          "phase": "OUTPUT",
          "explain": "Ép kiểu sang `const int16_t *` rồi giải tham chiếu: 150 + 270 = 420.",
          "cards": [
            [
              "sum",
              "420",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả sau ép kiểu",
            "cells": [
              {
                "addr": "0x0100",
                "label": "*px",
                "val": "150",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0102",
                "label": "*py",
                "val": "270",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0104",
                "label": "sum",
                "val": "420",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "sum = 420"
          }
        }
      ],
      "remember": "Con trỏ `void *` là nền tảng của các hàm callback/RTOS task parameter (`void *pvParameters` trong FreeRTOS).",
      "pitfall": "Ép sai kiểu (ví dụ `int16_t` nhưng ép sang `int32_t*`) sẽ đọc lấn sang 2 byte rác kề bên!",
      "tests": [
        "+ 150 + 270 = 420"
      ],
      "problem": {
        "scenario": "Hai địa chỉ void * trỏ tới đối tượng cùng kiểu theo hợp đồng của hàm. Ép sang đúng kiểu trước khi đọc hoặc tính tổng.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Sử dụng `const void *` để viết hàm giao tiếp tổng quát (generic API) rồi ép kiểu tường minh về `const int16_t *` trước khi giải tham chiếu.",
        "prototype": "void void_ptr_solve(void)",
        "workedExample": [
          "Bước 1: `void *` có thể giữ địa chỉ của mọi kiểu dữ liệu trong SRAM, nhưng KHÔNG thể trực tiếp viết `*px` vì compiler không biết kích thước kiểu. (px=&x (void*), py=&y (void*))",
          "Bước 2: Ép kiểu sang `const int16_t *` rồi giải tham chiếu: 150 + 270 = 420. (sum=420)"
        ],
        "testRows": [
          [
            "Case 1",
            "px = &x (void*), py = &y (void*), sum = 420",
            "150 + 270 = 420"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 061: Cộng hai số qua Con trỏ tổng quát (`void *`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void void_ptr_solve(void)\n * ============================================================ */\n\nint main(void) {\n    int16_t x = 150, y = 270;\n    const void *px = &x, *py = &y;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Con trỏ `void *` là nền tảng của các hàm callback/RTOS task parameter (`void *pvParameters` trong FreeRTOS).",
        "hint2": "Ép sai kiểu (ví dụ `int16_t` nhưng ép sang `int32_t*`) sẽ đọc lấn sang 2 byte rác kề bên!",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: void* trỏ tới int16_t",
          "cells": [
            {
              "addr": "0x0100",
              "label": "x (int16)",
              "val": "150",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0102",
              "label": "y (int16)",
              "val": "270",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [
            {
              "name": "px",
              "target": "0x0100",
              "val": "void*"
            },
            {
              "name": "py",
              "target": "0x0102",
              "val": "void*"
            }
          ],
          "note": "Cần ép kiểu trước khi đọc"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả sau ép kiểu",
          "cells": [
            {
              "addr": "0x0100",
              "label": "*px",
              "val": "150",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0102",
              "label": "*py",
              "val": "270",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0104",
              "label": "sum",
              "val": "420",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "sum = 420"
        }
      }
    },
    {
      "id": 62,
      "type": "task",
      "ewTitle": "Function Pointer Dispatch Table",
      "title": "Bảng điều phối Con trỏ Hàm (Thay thế switch-case dài cho UART/RTOS)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 & M12 (Task Dispatch)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "FLASH",
        "SRAM"
      ],
      "summary": "Dùng mảng con trỏ hàm `void (*cmd_table[4])(void)` để gọi lệnh điều khiển động cơ (`START`, `STOP`, `FWD`, `REV`) trong O(1)!",
      "filename": "avr_fn_dispatch.c",
      "lines": [
        {
          "code": "typedef void (*cmd_fn_t)(void);\nstatic const cmd_fn_t table[4] = {motor_stop, motor_fwd, motor_rev, motor_brake};",
          "phase": "SETUP",
          "explain": "Trên ATmega328P, mỗi con trỏ hàm giữ địa chỉ Word (16-bit) trong Flash (32 KB = 16K Words). Bảng 4 hàm chỉ tốn 8 byte!",
          "cards": [
            [
              "cmd_fn_t",
              "Con trỏ hàm 16-bit",
              "purple"
            ],
            [
              "Số lệnh",
              "4 (0..3)",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Bảng Dispatch Con trỏ Hàm",
            "cells": [
              {
                "addr": "idx 0",
                "label": "STOP",
                "val": "&motor_stop",
                "active": false,
                "tone": ""
              },
              {
                "addr": "idx 1",
                "label": "FWD",
                "val": "&motor_fwd",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "idx 2",
                "label": "REV",
                "val": "&motor_rev",
                "active": false,
                "tone": ""
              },
              {
                "addr": "idx 3",
                "label": "BRAKE",
                "val": "&motor_brake",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "cmd_id",
                "target": "idx 1",
                "val": "1"
              }
            ],
            "note": "Gọi trực tiếp bằng lệnh ICALL của AVR!"
          }
        },
        {
          "code": "uint8_t cmd_id = 1;\nif (cmd_id < 4) table[cmd_id]();",
          "phase": "OUTPUT",
          "explain": "KIỂM TRA BIÊN `cmd_id < 4` là bắt buộc! CPU AVR nạp địa chỉ `motor_fwd` vào thanh ghi Z và thực thi lệnh `ICALL` nhảy thẳng tới hàm trong O(1).",
          "cards": [
            [
              "Hàm được gọi",
              "motor_fwd()",
              "green"
            ],
            [
              "Lệnh AVR",
              "ICALL",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Đang thực thi motor_fwd()",
            "cells": [
              {
                "addr": "idx 0",
                "label": "STOP",
                "val": "0x0210",
                "active": false,
                "tone": ""
              },
              {
                "addr": "idx 1",
                "label": "RUNNING ▶",
                "val": "motor_fwd()",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "idx 2",
                "label": "REV",
                "val": "0x0240",
                "active": false,
                "tone": ""
              },
              {
                "addr": "idx 3",
                "label": "BRAKE",
                "val": "0x0260",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Không cần chuỗi if-else dài dòng!"
          }
        }
      ],
      "remember": "Luôn kiểm tra `if (cmd_id < ARRAY_LEN && table[cmd_id] != NULL)` trước khi gọi con trỏ hàm — gọi địa chỉ rác sẽ làm ATmega328P reset!",
      "pitfall": "Đây chính là xương sống để xây dựng bộ lập lịch tác vụ hợp tác (Cooperative Scheduler — Brochure M12) trên ATmega328P.",
      "tests": [
        "+ cmd_id=1 → gọi motor_fwd()",
        "- cmd_id=9 → bị chặn bởi if(cmd_id<4)"
      ],
      "problem": {
        "scenario": "Byte lệnh đọc từ USART0 chọn STOP/FWD/REV/BRAKE. Kiểm phạm vi trước khi gọi callback trong bảng.\n\nDùng bảng con trỏ hàm để chọn một trong bốn lệnh mô phỏng STOP, FWD, REV và BRAKE. Kiểm mã 0–3 trước khi gọi. Các hàm mẫu ghi kết quả vào biến output để quan sát trong debugger.",
        "prototype": "void fn_dispatch_solve(void)",
        "workedExample": [
          "Bước 1: Trên ATmega328P, mỗi con trỏ hàm giữ địa chỉ Word (16-bit) trong Flash (32 KB = 16K Words). (cmd_fn_t=Con trỏ hàm 16-bit, Số lệnh=4 (0..3))",
          "Bước 2: KIỂM TRA BIÊN `cmd_id < 4` là bắt buộc! CPU AVR nạp địa chỉ `motor_fwd` vào thanh ghi Z và thực thi lệnh `ICALL` nhảy thẳng tới hàm trong O(1). (Hàm được gọi=motor_fwd(), Lệnh AVR=ICALL)"
        ],
        "testRows": [
          [
            "Case 1",
            "cmd_id=1",
            "gọi motor_fwd()"
          ],
          [
            "Case 2",
            "cmd_id=9",
            "bị chặn bởi if(cmd_id<4)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, FLASH, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 62 · ATmega328P */\nstatic volatile uint8_t output;\nstatic void motor_stop(void) { output = 0; }\nstatic void motor_fwd(void) { output = 1; }\nstatic void motor_rev(void) { output = 2; }\nstatic void motor_brake(void) { output = 3; }\n\nint main(void) {\n    typedef void (*cmd_fn_t)(void);\n    const uint8_t cmd_id = 1;\n    /* TODO: Tạo bảng và gọi hàm nếu chỉ số hợp lệ. */\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Luôn kiểm tra `if (cmd_id < ARRAY_LEN && table[cmd_id] != NULL)` trước khi gọi con trỏ hàm — gọi địa chỉ rác sẽ làm ATmega328P reset!",
        "hint2": "Đây chính là xương sống để xây dựng bộ lập lịch tác vụ hợp tác (Cooperative Scheduler — Brochure M12) trên ATmega328P.",
        "initViz": {
          "kind": "memory",
          "title": "Bảng Dispatch Con trỏ Hàm",
          "cells": [
            {
              "addr": "idx 0",
              "label": "STOP",
              "val": "&motor_stop",
              "active": false,
              "tone": ""
            },
            {
              "addr": "idx 1",
              "label": "FWD",
              "val": "&motor_fwd",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "idx 2",
              "label": "REV",
              "val": "&motor_rev",
              "active": false,
              "tone": ""
            },
            {
              "addr": "idx 3",
              "label": "BRAKE",
              "val": "&motor_brake",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "cmd_id",
              "target": "idx 1",
              "val": "1"
            }
          ],
          "note": "Gọi trực tiếp bằng lệnh ICALL của AVR!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Đang thực thi motor_fwd()",
          "cells": [
            {
              "addr": "idx 0",
              "label": "STOP",
              "val": "0x0210",
              "active": false,
              "tone": ""
            },
            {
              "addr": "idx 1",
              "label": "RUNNING ▶",
              "val": "motor_fwd()",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "idx 2",
              "label": "REV",
              "val": "0x0240",
              "active": false,
              "tone": ""
            },
            {
              "addr": "idx 3",
              "label": "BRAKE",
              "val": "0x0260",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Không cần chuỗi if-else dài dòng!"
        }
      }
    },
    {
      "id": 63,
      "type": "task",
      "ewTitle": "State Machine Using Function Pointers",
      "title": "Máy trạng thái hữu hạn (FSM) bằng Con trỏ Hàm",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5, M6 & M12 (Embedded Architecture)",
      "level": "Nâng cao",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "FLASH",
        "TIMER"
      ],
      "summary": "Cài đặt máy trạng thái điều khiển hệ thống (`IDLE → RUN → FAULT`) nơi mỗi hàm trạng thái tự trả về con trỏ tới trạng thái tiếp theo.",
      "filename": "avr_fsm_fnptr.c",
      "lines": [
        {
          "code": "typedef void (*state_fn_t)(void);\nstate_fn_t cur_state = st_idle;",
          "phase": "SETUP",
          "explain": "Biến `cur_state` giữ địa chỉ hàm trạng thái hiện tại. Trong vòng lặp `while(1)`, chỉ cần gọi `cur_state();`.",
          "cards": [
            [
              "cur_state",
              "st_idle",
              "blue"
            ],
            [
              "Kiến trúc",
              "Non-blocking FSM",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "FSM States trên ATmega328P",
            "cells": [
              {
                "addr": "S0",
                "label": "st_idle",
                "val": "ACTIVE ▶",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "S1",
                "label": "st_run",
                "val": "Chờ nút Start",
                "active": false,
                "tone": ""
              },
              {
                "addr": "S2",
                "label": "st_fault",
                "val": "Quá dòng/Lỗi",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "cur_state",
                "target": "S0",
                "val": "st_idle"
              }
            ],
            "note": "Trạng thái hiện tại: IDLE"
          }
        },
        {
          "code": "void st_idle(void) { if (btn_start) cur_state = st_run; }",
          "phase": "EXECUTION",
          "explain": "Khi nhận tín hiệu nhấn nút Start, `cur_state` chuyển thẳng sang `st_run` mà không dùng delay chặn CPU!",
          "cards": [
            [
              "Sự kiện",
              "btn_start = 1",
              "amber"
            ],
            [
              "Chuyển sang",
              "st_run",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Chuyển trạng thái IDLE → RUN",
            "cells": [
              {
                "addr": "S0",
                "label": "st_idle",
                "val": "Xong",
                "active": false,
                "tone": ""
              },
              {
                "addr": "S1",
                "label": "st_run",
                "val": "ACTIVE ▶",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "S2",
                "label": "st_fault",
                "val": "Standby",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "cur_state",
                "target": "S1",
                "val": "st_run"
              }
            ],
            "note": "Động cơ bắt đầu chạy PWM"
          }
        },
        {
          "code": "while (1) { cur_state(); }",
          "phase": "OUTPUT",
          "explain": "Vòng lặp siêu nhẹ kết hợp Watchdog Timer (`wdt_reset()`) đảm bảo hệ thống phản hồi tức thì.",
          "cards": [
            [
              "cur_state()",
              "st_run()",
              "green"
            ],
            [
              "Watchdog",
              "An toàn",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Super-loop + FSM + WDT",
            "cells": [
              {
                "addr": "S0",
                "label": "st_idle",
                "val": "OK",
                "active": false,
                "tone": ""
              },
              {
                "addr": "S1",
                "label": "st_run",
                "val": "RUNNING ▶",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "S2",
                "label": "st_fault",
                "val": "Guard",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Mẫu kiến trúc chuẩn cho Firmware ATmega328P"
          }
        }
      ],
      "remember": "FSM bằng con trỏ hàm giúp tách sạch logic từng trạng thái, dễ bảo trì và không bao giờ chặn Watchdog Timer.",
      "pitfall": "Đảm bảo `cur_state` không bao giờ bị gán `NULL`.",
      "tests": [
        "+ IDLE + btn_start → RUN",
        "+ RUN + overcurrent → FAULT"
      ],
      "problem": {
        "scenario": "Dùng sự kiện nút PD2 bắt đầu trạng thái RUN và cờ lỗi trở về FAULT. Hàm trạng thái được gọi từ vòng lặp chính.\n\nDùng biến con trỏ hàm current để chọn trình xử lý trạng thái IDLE, RUN hoặc FAULT. Hàm đang chạy có thể cập nhật current khi nhận sự kiện. Đối chiếu trạng thái sau từng sự kiện mô phỏng.",
        "prototype": "void fsm_fnptr_solve(void)",
        "workedExample": [
          "Bước 1: Biến `cur_state` giữ địa chỉ hàm trạng thái hiện tại. (cur_state=st_idle, Kiến trúc=Non-blocking FSM)",
          "Bước 2: Khi nhận tín hiệu nhấn nút Start, `cur_state` chuyển thẳng sang `st_run` mà không dùng delay chặn CPU!. (Sự kiện=btn_start = 1, Chuyển sang=st_run)",
          "Bước 3: Vòng lặp siêu nhẹ kết hợp Watchdog Timer (`wdt_reset()`) đảm bảo hệ thống phản hồi tức thì. (cur_state()=st_run(), Watchdog=An toàn)"
        ],
        "testRows": [
          [
            "Case 1",
            "IDLE + btn_start",
            "RUN"
          ],
          [
            "Case 2",
            "RUN + overcurrent",
            "FAULT"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, FLASH, TIMER), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 63 · ATmega328P */\ntypedef void (*state_fn_t)(void);\nstatic state_fn_t current;\nstatic volatile uint8_t btn_start;\nstatic volatile uint8_t fault;\n\nstatic void st_idle(void) {\n    /* TODO: Cập nhật current khi nút được nhấn. */\n}\n\nint main(void) {\n    current = st_idle;\n    btn_start = 1;\n    fault = 0;\n    /* TODO: Thêm trạng thái RUN/FAULT và thử cập nhật current. */\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "FSM bằng con trỏ hàm giúp tách sạch logic từng trạng thái, dễ bảo trì và không bao giờ chặn Watchdog Timer.",
        "hint2": "Đảm bảo `cur_state` không bao giờ bị gán `NULL`.",
        "initViz": {
          "kind": "memory",
          "title": "FSM States trên ATmega328P",
          "cells": [
            {
              "addr": "S0",
              "label": "st_idle",
              "val": "ACTIVE ▶",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "S1",
              "label": "st_run",
              "val": "Chờ nút Start",
              "active": false,
              "tone": ""
            },
            {
              "addr": "S2",
              "label": "st_fault",
              "val": "Quá dòng/Lỗi",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "cur_state",
              "target": "S0",
              "val": "st_idle"
            }
          ],
          "note": "Trạng thái hiện tại: IDLE"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Super-loop + FSM + WDT",
          "cells": [
            {
              "addr": "S0",
              "label": "st_idle",
              "val": "OK",
              "active": false,
              "tone": ""
            },
            {
              "addr": "S1",
              "label": "st_run",
              "val": "RUNNING ▶",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "S2",
              "label": "st_fault",
              "val": "Guard",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Mẫu kiến trúc chuẩn cho Firmware ATmega328P"
        }
      }
    },
    {
      "id": 64,
      "type": "task",
      "ewTitle": "Simulate memcpy function Using Pointer Walk",
      "title": "Tự viết hàm `my_memcpy` bằng Con trỏ `uint8_t *`",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 (Memory Access)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Sao chép `n` byte từ vùng nguồn sang vùng đích trong SRAM bằng con trỏ từng byte (không phụ thuộc căn chỉnh bộ nhớ).",
      "filename": "avr_memcpy.c",
      "lines": [
        {
          "code": "uint8_t *d = (uint8_t *)dst;\nconst uint8_t *s = (const uint8_t *)src;",
          "phase": "SETUP",
          "explain": "Ép kiểu `void*` sang `uint8_t*` để copy chính xác từng byte một.",
          "cards": [
            [
              "src",
              "0x0100",
              "blue"
            ],
            [
              "dst",
              "0x0120",
              "amber"
            ],
            [
              "n",
              "4 byte",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Copy 4 byte",
            "cells": [
              {
                "addr": "0x0100",
                "label": "src[0..3]",
                "val": "DE AD BE EF",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0120",
                "label": "dst[0..3]",
                "val": "00 00 00 00",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Chuẩn bị copy từng byte"
          }
        },
        {
          "code": "while (n--) *d++ = *s++;",
          "phase": "OUTPUT",
          "explain": "Lặp 4 lần: copy lần lượt 0xDE, 0xAD, 0xBE, 0xEF sang `dst` bằng cặp lệnh `LD r, X+` và `ST Z+, r` của AVR.",
          "cards": [
            [
              "dst mới",
              "DE AD BE EF",
              "green"
            ],
            [
              "n cuối",
              "0",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Copy hoàn tất",
            "cells": [
              {
                "addr": "0x0100",
                "label": "src[0..3]",
                "val": "DE AD BE EF",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0120",
                "label": "dst[0..3]",
                "val": "DE AD BE EF",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "4 byte đã sao chép chính xác"
          }
        }
      ],
      "remember": "`memcpy` giả định 2 vùng nhớ KHÔNG chồng lấn (overlap). Nếu có thể chồng lấn, phải dùng `memmove`!",
      "pitfall": "Trên ATmega328P, nhớ phân biệt `memcpy()` (SRAM→SRAM) với `memcpy_P()` (Flash PROGMEM→SRAM).",
      "tests": [
        "+ copy 4 byte → dst giống hệt src"
      ],
      "problem": {
        "scenario": "Sao chép một khung UART từ vùng nhận sang vùng xử lý trong SRAM. Giả định hai vùng không chồng lấp và đủ dung lượng.\n\nSao chép n byte bằng cách đi lần lượt qua con trỏ nguồn và đích. Giả sử hai vùng tách biệt và có ít nhất n byte. Với vùng chồng lấp, hãy dùng memmove hoặc thuật toán chọn chiều sao chép.",
        "prototype": "void memcpy_solve(void)",
        "workedExample": [
          "Bước 1: Ép kiểu `void*` sang `uint8_t*` để copy chính xác từng byte một. (src=0x0100, dst=0x0120)",
          "Bước 2: Lặp 4 lần: copy lần lượt 0xDE, 0xAD, 0xBE, 0xEF sang `dst` bằng cặp lệnh `LD r, X+` và `ST Z+, r` của AVR. (dst mới=DE AD BE EF, n cuối=0)"
        ],
        "testRows": [
          [
            "Case 1",
            "copy 4 byte",
            "dst giống hệt src"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 64 · ATmega328P */\nint main(void) {\n    const uint8_t src[] = {8, 1, 3, 5};\n    uint8_t dst[sizeof src] = {0};\n    const unsigned n = sizeof src;\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "`memcpy` giả định 2 vùng nhớ KHÔNG chồng lấn (overlap). Nếu có thể chồng lấn, phải dùng `memmove`!",
        "hint2": "Trên ATmega328P, nhớ phân biệt `memcpy()` (SRAM→SRAM) với `memcpy_P()` (Flash PROGMEM→SRAM).",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Copy 4 byte",
          "cells": [
            {
              "addr": "0x0100",
              "label": "src[0..3]",
              "val": "DE AD BE EF",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0120",
              "label": "dst[0..3]",
              "val": "00 00 00 00",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Chuẩn bị copy từng byte"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: Copy hoàn tất",
          "cells": [
            {
              "addr": "0x0100",
              "label": "src[0..3]",
              "val": "DE AD BE EF",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0120",
              "label": "dst[0..3]",
              "val": "DE AD BE EF",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "4 byte đã sao chép chính xác"
        }
      }
    },
    {
      "id": 65,
      "type": "task",
      "ewTitle": "Scan Memory for Three Consecutive Increasing Values",
      "title": "Quét bộ nhớ tìm 3 giá trị tăng liên tiếp (Phát hiện xung tăng nhiệt)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng con trỏ trượt quét mảng mẫu cảm biến để phát hiện xu hướng tăng liên tục 3 chu kỳ (`*p < *(p+1) && *(p+1) < *(p+2)`).",
      "filename": "avr_scan_inc3.c",
      "lines": [
        {
          "code": "uint8_t s[6] = {25, 24, 26, 28, 31, 30};",
          "phase": "SETUP",
          "explain": "Cần quét đến tối đa `p <= s + n - 3` để không đọc quá biên mảng!",
          "cards": [
            [
              "Mẫu",
              "[25,24,26,28,31,30]",
              "blue"
            ],
            [
              "Biên dừng",
              "n - 3 = 3",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Quét cửa sổ 3 phần tử",
            "cells": [
              {
                "addr": "0",
                "label": "25",
                "val": "25",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "*p",
                "val": "24",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "*(p+1)",
                "val": "26",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "*(p+2)",
                "val": "28",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "31",
                "val": "31",
                "active": false,
                "tone": ""
              },
              {
                "addr": "5",
                "label": "30",
                "val": "30",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Tại index 1: 24 < 26 < 28!"
          }
        },
        {
          "code": "if (*p < *(p+1) && *(p+1) < *(p+2)) found_idx = p - s;",
          "phase": "OUTPUT",
          "explain": "Phép trừ hai con trỏ cùng mảng `p - s` trả về chỉ số index = 1!",
          "cards": [
            [
              "found_idx",
              "1 (24<26<28)",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Phát hiện tại index = 1",
            "cells": [
              {
                "addr": "0",
                "label": "25",
                "val": "25",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "START",
                "val": "24",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "MID",
                "val": "26",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "END",
                "val": "28",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Cảnh báo xu hướng tăng liên tiếp"
          }
        }
      ],
      "remember": "Luôn kiểm tra `if (n < 3) return -1;` trước khi tính `n - 3`.",
      "pitfall": "Truy cập `*(p+2)` khi `p` ở cuối mảng là lỗi đọc tràn bộ nhớ kinh điển.",
      "tests": [
        "+ {25,24,26,28,31,30} → index 1"
      ],
      "problem": {
        "scenario": "Tìm ba mẫu nhiệt tăng liên tiếp trong bộ đệm SRAM. Chỉ kiểm khi còn đủ ba phần tử từ vị trí hiện tại.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Dùng con trỏ trượt quét mảng mẫu cảm biến để phát hiện xu hướng tăng liên tục 3 chu kỳ (`*p < *(p+1) && *(p+1) < *(p+2)`).",
        "prototype": "void scan_inc3_solve(void)",
        "workedExample": [
          "Bước 1: Cần quét đến tối đa `p <= s + n - 3` để không đọc quá biên mảng!. (Mẫu=[25,24,26,28,31,30], Biên dừng=n - 3 = 3)",
          "Bước 2: Phép trừ hai con trỏ cùng mảng `p - s` trả về chỉ số index = 1!. (found_idx=1 (24<26<28))"
        ],
        "testRows": [
          [
            "Case 1",
            "{25,24,26,28,31,30}",
            "index 1"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 065: Quét bộ nhớ tìm 3 giá trị tăng liên tiếp (Phát hiện xung tăng nhiệt)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void scan_inc3_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t s[6] = {25, 24, 26, 28, 31, 30};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn kiểm tra `if (n < 3) return -1;` trước khi tính `n - 3`.",
        "hint2": "Truy cập `*(p+2)` khi `p` ở cuối mảng là lỗi đọc tràn bộ nhớ kinh điển.",
        "initViz": {
          "kind": "memory",
          "title": "Quét cửa sổ 3 phần tử",
          "cells": [
            {
              "addr": "0",
              "label": "25",
              "val": "25",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "*p",
              "val": "24",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "*(p+1)",
              "val": "26",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "*(p+2)",
              "val": "28",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "31",
              "val": "31",
              "active": false,
              "tone": ""
            },
            {
              "addr": "5",
              "label": "30",
              "val": "30",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Tại index 1: 24 < 26 < 28!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Phát hiện tại index = 1",
          "cells": [
            {
              "addr": "0",
              "label": "25",
              "val": "25",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "START",
              "val": "24",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "MID",
              "val": "26",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "END",
              "val": "28",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Cảnh báo xu hướng tăng liên tiếp"
        }
      }
    },
    {
      "id": 66,
      "type": "task",
      "ewTitle": "Detect Alternating Pattern",
      "title": "Phát hiện mẫu xen kẽ (Tín hiệu đồng bộ Preamble 0x55 / Đổi dấu)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Kiểm tra xem dãy byte trong bộ đệm có luân phiên tăng-giảm (hoặc 0-1 xen kẽ) bằng con trỏ.",
      "filename": "avr_alt_pattern.c",
      "lines": [
        {
          "code": "uint8_t sig[5] = {1, 0, 1, 0, 1}; uint8_t ok = 1;",
          "phase": "SETUP",
          "explain": "Kiểm tra tín hiệu đồng bộ xung vuông 1-0-1-0-1.",
          "cards": [
            [
              "sig",
              "[1,0,1,0,1]",
              "blue"
            ],
            [
              "ok",
              "1",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kiểm tra mẫu xen kẽ",
            "cells": [
              {
                "addr": "0",
                "label": "s[0]",
                "val": "1",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "s[1]",
                "val": "0",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "2",
                "label": "s[2]",
                "val": "1",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "s[3]",
                "val": "0",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "4",
                "label": "s[4]",
                "val": "1",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Mọi cặp kề nhau đều khác nhau"
          }
        },
        {
          "code": "for(uint8_t *p=sig; p < sig+4; p++) if(*p == *(p+1)) { ok=0; break; }",
          "phase": "OUTPUT",
          "explain": "Không có 2 phần tử kề nhau nào trùng nhau → `ok = 1` (Khớp Preamble!).",
          "cards": [
            [
              "ok",
              "1 (HỢP LỆ)",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Khớp mẫu xen kẽ ✓",
            "cells": [
              {
                "addr": "0",
                "label": "1!=0",
                "val": "OK",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "0!=1",
                "val": "OK",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "1!=0",
                "val": "OK",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "0!=1",
                "val": "OK",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Bắt đầu giải mã gói tin"
          }
        }
      ],
      "remember": "Dừng vòng lặp ngay khi phát hiện sai (`break`) để tiết kiệm chu kỳ CPU.",
      "pitfall": "Nhớ điều kiện biên `p < sig + n - 1`.",
      "tests": [
        "+ {1,0,1,0,1} → ok=1",
        "- {1,0,0,1,0} → ok=0"
      ],
      "problem": {
        "scenario": "Kiểm mẫu luân phiên trong bộ đệm nhận. Với USART0, byte 0x55 có thứ tự bit luân phiên theo cách biểu diễn nhị phân.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Kiểm tra xem dãy byte trong bộ đệm có luân phiên tăng-giảm (hoặc 0-1 xen kẽ) bằng con trỏ.",
        "prototype": "void alt_pattern_solve(void)",
        "workedExample": [
          "Bước 1: Kiểm tra tín hiệu đồng bộ xung vuông 1-0-1-0-1. (sig=[1,0,1,0,1], ok=1)",
          "Bước 2: Không có 2 phần tử kề nhau nào trùng nhau → `ok = 1` (Khớp Preamble!). (ok=1 (HỢP LỆ))"
        ],
        "testRows": [
          [
            "Case 1",
            "{1,0,1,0,1}",
            "ok=1"
          ],
          [
            "Case 2",
            "{1,0,0,1,0}",
            "ok=0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 066: Phát hiện mẫu xen kẽ (Tín hiệu đồng bộ Preamble 0x55 / Đổi dấu)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void alt_pattern_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t sig[5] = {1, 0, 1, 0, 1}; uint8_t ok = 1;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Dừng vòng lặp ngay khi phát hiện sai (`break`) để tiết kiệm chu kỳ CPU.",
        "hint2": "Nhớ điều kiện biên `p < sig + n - 1`.",
        "initViz": {
          "kind": "memory",
          "title": "Kiểm tra mẫu xen kẽ",
          "cells": [
            {
              "addr": "0",
              "label": "s[0]",
              "val": "1",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "s[1]",
              "val": "0",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "2",
              "label": "s[2]",
              "val": "1",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "s[3]",
              "val": "0",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "4",
              "label": "s[4]",
              "val": "1",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Mọi cặp kề nhau đều khác nhau"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Khớp mẫu xen kẽ ✓",
          "cells": [
            {
              "addr": "0",
              "label": "1!=0",
              "val": "OK",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "0!=1",
              "val": "OK",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "1!=0",
              "val": "OK",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "0!=1",
              "val": "OK",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Bắt đầu giải mã gói tin"
        }
      }
    },
    {
      "id": 67,
      "type": "task",
      "ewTitle": "Event-Based Triggers Using Function Pointer Array",
      "title": "Hệ thống Callback theo Sự kiện (Button / Timer / UART RX)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 & M12 (Event-Driven)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "INT",
        "USART"
      ],
      "summary": "Đăng ký các hàm callback cho từng sự kiện phần cứng (`EVT_BTN`, `EVT_TIMER`, `EVT_UART`) vào mảng con trỏ hàm — kiến trúc Driver chuẩn!",
      "filename": "avr_event_callbacks.c",
      "lines": [
        {
          "code": "typedef void (*evt_cb_t)(uint8_t arg);\nevt_cb_t callbacks[3] = {0};",
          "phase": "SETUP",
          "explain": "Mảng 3 slot callback khởi tạo `NULL` (0) cho 3 sự kiện phần cứng.",
          "cards": [
            [
              "Slots",
              "3 sự kiện",
              "blue"
            ],
            [
              "Khởi tạo",
              "NULL (An toàn)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Bảng Callback Sự kiện",
            "cells": [
              {
                "addr": "EVT 0",
                "label": "BTN",
                "val": "NULL",
                "active": false,
                "tone": ""
              },
              {
                "addr": "EVT 1",
                "label": "TIMER",
                "val": "NULL",
                "active": false,
                "tone": ""
              },
              {
                "addr": "EVT 2",
                "label": "UART",
                "val": "NULL",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Chưa đăng ký callback"
          }
        },
        {
          "code": "callbacks[2] = on_uart_byte; // Đăng ký",
          "phase": "MEMORY",
          "explain": "Đăng ký hàm `on_uart_byte` cho sự kiện `EVT_UART` (index 2).",
          "cards": [
            [
              "EVT 2",
              "on_uart_byte",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Đã đăng ký EVT 2",
            "cells": [
              {
                "addr": "EVT 0",
                "label": "BTN",
                "val": "NULL",
                "active": false,
                "tone": ""
              },
              {
                "addr": "EVT 1",
                "label": "TIMER",
                "val": "NULL",
                "active": false,
                "tone": ""
              },
              {
                "addr": "EVT 2",
                "label": "UART",
                "val": "on_uart_byte",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Sẵn sàng kích hoạt khi có byte UART"
          }
        },
        {
          "code": "if (callbacks[evt]) callbacks[evt](data);",
          "phase": "OUTPUT",
          "explain": "Khi sự kiện xảy ra, kiểm tra `!= NULL` rồi gọi hàm xử lý kèm tham số `data`.",
          "cards": [
            [
              "Kích hoạt",
              "on_uart_byte(0x41)",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Trigger on_uart_byte('A')",
            "cells": [
              {
                "addr": "EVT 2",
                "label": "CALL ▶",
                "val": "arg='A'",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Tách biệt hoàn toàn tầng Driver và tầng Ứng dụng!"
          }
        }
      ],
      "remember": "Kiến trúc Callback giúp tái sử dụng Driver UART/Timer cho nhiều dự án mà không cần sửa code Driver.",
      "pitfall": "Tránh gọi hàm callback nặng trực tiếp trong ISR; hãy chỉ đặt cờ (flag) trong ISR rồi trigger callback trong `main()`!",
      "tests": [
        "+ Đăng ký & gọi EVT 2 với data='A'"
      ],
      "problem": {
        "scenario": "Ánh xạ các cờ sự kiện từ nút PD2, Timer0 và USART0 vào hàm xử lý. Quy định ISR ghi cờ, main gọi callback.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Đăng ký các hàm callback cho từng sự kiện phần cứng (`EVT_BTN`, `EVT_TIMER`, `EVT_UART`) vào mảng con trỏ hàm — kiến trúc Driver chuẩn!",
        "prototype": "void event_callbacks_solve(void)",
        "workedExample": [
          "Bước 1: Mảng 3 slot callback khởi tạo `NULL` (0) cho 3 sự kiện phần cứng. (Slots=3 sự kiện, Khởi tạo=NULL (An toàn))",
          "Bước 2: Đăng ký hàm `on_uart_byte` cho sự kiện `EVT_UART` (index 2). (EVT 2=on_uart_byte)",
          "Bước 3: Khi sự kiện xảy ra, kiểm tra `!= NULL` rồi gọi hàm xử lý kèm tham số `data`. (Kích hoạt=on_uart_byte(0x41))"
        ],
        "testRows": [
          [
            "Case 1",
            "Slots = 3 sự kiện, Khởi tạo = NULL (An toàn), EVT 2 = on_uart_byte",
            "Đăng ký & gọi EVT 2 với data='A'"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, INT, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 067: Hệ thống Callback theo Sự kiện (Button / Timer / UART RX)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void event_callbacks_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef void (*evt_cb_t)(uint8_t arg);\n    evt_cb_t callbacks[3] = {0};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Kiến trúc Callback giúp tái sử dụng Driver UART/Timer cho nhiều dự án mà không cần sửa code Driver.",
        "hint2": "Tránh gọi hàm callback nặng trực tiếp trong ISR; hãy chỉ đặt cờ (flag) trong ISR rồi trigger callback trong `main()`!",
        "initViz": {
          "kind": "memory",
          "title": "Bảng Callback Sự kiện",
          "cells": [
            {
              "addr": "EVT 0",
              "label": "BTN",
              "val": "NULL",
              "active": false,
              "tone": ""
            },
            {
              "addr": "EVT 1",
              "label": "TIMER",
              "val": "NULL",
              "active": false,
              "tone": ""
            },
            {
              "addr": "EVT 2",
              "label": "UART",
              "val": "NULL",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Chưa đăng ký callback"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Trigger on_uart_byte('A')",
          "cells": [
            {
              "addr": "EVT 2",
              "label": "CALL ▶",
              "val": "arg='A'",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Tách biệt hoàn toàn tầng Driver và tầng Ứng dụng!"
        }
      }
    },
    {
      "id": 68,
      "type": "task",
      "ewTitle": "void pointer and Casting",
      "title": "Ép kiểu Con trỏ `void *` & Truy cập Thanh ghi MMIO (`volatile uint8_t *`)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 & M10 (MMIO & volatile)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Hiểu bản chất định nghĩa `PORTB` trong `<avr/io.h>`: ép địa chỉ số `0x25` thành `volatile uint8_t *` để CPU AVR ghi trực tiếp ra chân vật lý!",
      "filename": "avr_mmio_cast.c",
      "lines": [
        {
          "code": "volatile uint8_t * const pPORTB = (volatile uint8_t *)0x25;",
          "phase": "SETUP",
          "explain": "Trong bản đồ bộ nhớ ATmega328P, thanh ghi `PORTB` nằm ở địa chỉ dữ liệu `0x25`. Từ khóa `volatile` bắt buộc trình biên dịch không được cache vào thanh ghi R0..R31!",
          "cards": [
            [
              "Địa chỉ PORTB",
              "0x0025",
              "purple"
            ],
            [
              "volatile",
              "BẮT BUỘC",
              "rose"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "MMIO [0x0025] = PORTB",
            "val": 0,
            "prev": 0,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Con trỏ trỏ thẳng vào thanh ghi phần cứng"
          }
        },
        {
          "code": "*pPORTB |= (1U << 5);",
          "phase": "OUTPUT",
          "explain": "Địa chỉ dữ liệu 0x25 tương ứng với PORTB trên ATmega328P. Ghi bit 5 thay chốt PORTB. Nếu PB5 đã là đầu ra GPIO và không bị ngoại vi chiếm, chốt điều khiển mức logic trên chân.",
          "cards": [
            [
              "*pPORTB",
              "0x20 (PB5 HIGH)",
              "green"
            ],
            [
              "Macro AVR",
              "_SFR_IO8(0x05)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "MMIO [0x0025] = 0x20",
            "val": 32,
            "prev": 0,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Bit 5 trong chốt PORTB được đặt. Mức chân còn tùy cấu hình và mạch điện.",
            "op": "OR (|=)"
          }
        }
      ],
      "remember": "Bản chất Memory-Mapped I/O trên ATmega328P: mọi thanh ghi ngoại vi (0x20..0xFF) đều được truy cập như con trỏ `volatile uint8_t *`!",
      "pitfall": "Thiếu từ khóa `volatile`, vòng lặp chờ phần cứng `while(*pPINB & 1);` sẽ bị avr-gcc tối ưu hóa `-Os` biến thành vòng lặp treo vĩnh viễn!",
      "tests": [
        "+ *(volatile uint8_t*)0x25 |= 0x20 → PB5 HIGH"
      ],
      "problem": {
        "scenario": "PORTB có địa chỉ không gian dữ liệu 0x25 trên ATmega328P. Đổi chốt PB5 qua volatile uint8_t *, rồi kiểm DDRB để suy ra chân có được điều khiển hay không.\n\nCon trỏ 16-bit trên ATmega328P cho phép truy cập trực tiếp không gian dữ liệu (`0x0020–0x08FF`), làm Zero-Copy Double Buffer và xây dựng bảng điều phối tác vụ O(1). Bài toán thực tế: Hiểu bản chất định nghĩa `PORTB` trong `<avr/io.h>`: ép địa chỉ số `0x25` thành `volatile uint8_t *` để CPU AVR ghi trực tiếp ra chân vật lý!",
        "prototype": "void mmio_cast_solve(void)",
        "workedExample": [
          "Bước 1: Trong bản đồ bộ nhớ ATmega328P, thanh ghi `PORTB` nằm ở địa chỉ dữ liệu `0x25`. (Địa chỉ PORTB=0x0025, volatile=BẮT BUỘC)",
          "Bước 2: Ghi trực tiếp bit 5 vào địa chỉ `0x25` → chân vật lý PB5 lập tức lên 5V! Đây chính là cách macro `_SFR_IO8(0x05)` trong `<avr/io. (*pPORTB=0x20 (PB5 HIGH), Macro AVR=_SFR_IO8(0x05))"
        ],
        "testRows": [
          [
            "Case 1",
            "*(volatile uint8_t*)0x25 |= 0x20",
            "PB5 HIGH"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → Port B/C/D. Đặt Breakpoint (F9) ở `while(1)`, nhấn F5 (hoặc F10/F11 từng dòng) để thấy bit DDRx/PORTx/PINx đổi màu đỏ.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 068: Ép kiểu Con trỏ `void *` & Truy cập Thanh ghi MMIO (`volatile uint8_t *`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void mmio_cast_solve(void)\n * ============================================================ */\n\nint main(void) {\n    volatile uint8_t * const pPORTB = (volatile uint8_t *)0x25;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Bản chất Memory-Mapped I/O trên ATmega328P: mọi thanh ghi ngoại vi (0x20..0xFF) đều được truy cập như con trỏ `volatile uint8_t *`!",
        "hint2": "Thiếu từ khóa `volatile`, vòng lặp chờ phần cứng `while(*pPINB & 1);` sẽ bị avr-gcc tối ưu hóa `-Os` biến thành vòng lặp treo vĩnh viễn!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "MMIO [0x0025] = PORTB",
          "val": 0,
          "prev": 0,
          "mask": 32,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "Con trỏ trỏ thẳng vào thanh ghi phần cứng"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "MMIO [0x0025] = 0x20",
          "val": 32,
          "prev": 0,
          "mask": 32,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "Bit 5 trong chốt PORTB được đặt. Mức chân còn tùy cấu hình và mạch điện.",
          "op": "OR (|=)"
        }
      }
    },
    {
      "id": 69,
      "type": "quiz",
      "ewTitle": "Pointer-i",
      "title": "Quiz: Con trỏ cơ bản & Địa chỉ SRAM ATmega328P",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 & M10",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Bài kiểm tra trắc nghiệm ATmega328P cho phần Pointer-i.",
      "questions": [
        {
          "q": "Kích thước của một con trỏ `uint8_t *` (và `uint32_t *`) trên ATmega328P là bao nhiêu byte?",
          "opts": [
            "1 byte và 4 byte",
            "Đều là 2 byte (16-bit)",
            "Đều là 4 byte (32-bit)",
            "Đều là 8 byte"
          ],
          "ans": 1,
          "exp": "Không gian địa chỉ dữ liệu ATmega328P là 16-bit (0x0000..0x08FF), nên mọi con trỏ SRAM đều rộng 2 byte."
        },
        {
          "q": "Cho `uint16_t *p = (uint16_t *)0x0100;`. Sau lệnh `p++;`, giá trị của `p` là bao nhiêu?",
          "opts": [
            "0x0101",
            "0x0102",
            "0x0104",
            "0x0108"
          ],
          "ans": 1,
          "exp": "Pointer Arithmetic cộng thêm `sizeof(uint16_t) = 2` byte → 0x0102."
        },
        {
          "q": "Lệnh `uint8_t x = *p++;` thực hiện theo thứ tự nào?",
          "opts": [
            "Tăng p rồi lấy *p",
            "Lấy *p rồi tăng giá trị tại *p",
            "Lấy *p gán cho x, sau đó tăng địa chỉ p lên 1",
            "Lỗi cú pháp"
          ],
          "ans": 2,
          "exp": "Hậu tố `++` ưu tiên cao hơn `*`, trả về địa chỉ cũ để `*` giải tham chiếu rồi mới tăng `p`."
        },
        {
          "q": "Với uint8_t samples[8] ở SRAM, địa chỉ nào làm mốc sau cuối?",
          "opts": [
            "samples + 9",
            "Đọc *(samples + 8)",
            "samples + 8, chỉ so sánh"
          ],
          "ans": 2,
          "exp": "Chỉ dùng con trỏ ngay sau cuối làm mốc, không đọc tại đó."
        }
      ],
      "remember": "Nắm chắc kích thước con trỏ 16-bit trên AVR, từ khóa `volatile` và kiểm tra NULL/biên.",
      "pitfall": "Gọi con trỏ hàm NULL trên ATmega328P sẽ nhảy về địa chỉ 0x0000 (Reset Vector) làm reset chip!",
      "avrContext": "Phân biệt địa chỉ đối tượng trong SRAM với giá trị byte chứa ở địa chỉ đó. Bố trí địa chỉ của biến xem trong debugger."
    },
    {
      "id": 70,
      "type": "quiz",
      "ewTitle": "Pointer-ii",
      "title": "Quiz: Con trỏ kép, `const` & `void *`",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 & M10",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Bài kiểm tra trắc nghiệm ATmega328P cho phần Pointer-ii.",
      "questions": [
        {
          "q": "Sự khác biệt giữa `const uint8_t *p` và `uint8_t * const p` là gì?",
          "opts": [
            "Giống hệt nhau",
            "`const uint8_t *p`: không sửa được dữ liệu `*p`; `uint8_t * const p`: không đổi được địa chỉ `p`",
            "Ngược lại",
            "Cả hai đều là hằng toàn phần"
          ],
          "ans": 1,
          "exp": "Đọc từ phải sang trái: `const uint8_t *p` là con trỏ tới dữ liệu hằng; `uint8_t * const p` là con trỏ hằng (như địa chỉ thanh ghi MMIO)."
        },
        {
          "q": "Có thể viết `void *p = &x; uint8_t v = *p;` không?",
          "opts": [
            "Được",
            "Không — bắt buộc ép kiểu sang con trỏ cụ thể trước khi giải tham chiếu",
            "Chỉ được trên AVR",
            "Chỉ được khi dùng -Os"
          ],
          "ans": 1,
          "exp": "Compiler không biết kích thước kiểu mà `void *` trỏ tới nên cấm giải tham chiếu trực tiếp."
        },
        {
          "q": "Khi nào ta cần dùng con trỏ kép (`uint8_t **pp`)?",
          "opts": [
            "Khi cần sửa giá trị 1 byte",
            "Khi cần hàm bên trong thay đổi địa chỉ mà con trỏ bên ngoài đang trỏ tới (như đổi Ping-Pong Buffer)",
            "Khi truy cập Flash",
            "Để chạy nhanh hơn"
          ],
          "ans": 1,
          "exp": "Muốn sửa 1 biến con trỏ `T *p` trong hàm con, phải truyền địa chỉ của nó là `T **pp`."
        },
        {
          "q": "Muốn hàm thay con trỏ uint8_t *rx của bên gọi, truyền gì?",
          "opts": [
            "&rx",
            "*rx",
            "rx"
          ],
          "ans": 0,
          "exp": "&rx có kiểu uint8_t **."
        }
      ],
      "remember": "Nắm chắc kích thước con trỏ 16-bit trên AVR, từ khóa `volatile` và kiểm tra NULL/biên.",
      "pitfall": "Gọi con trỏ hàm NULL trên ATmega328P sẽ nhảy về địa chỉ 0x0000 (Reset Vector) làm reset chip!",
      "avrContext": "Khi đổi con trỏ bộ đệm SRAM của bên gọi, phân biệt quyền sửa địa chỉ và quyền sửa dữ liệu qua kiểu tham số."
    },
    {
      "id": 71,
      "type": "quiz",
      "ewTitle": "Pointer-iii",
      "title": "Quiz: Con trỏ Hàm, Bảng Dispatch & Máy trạng thái (FSM)",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 & M10",
      "level": "Trung bình",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Bài kiểm tra trắc nghiệm ATmega328P cho phần Pointer-iii.",
      "questions": [
        {
          "q": "Khai báo nào đúng cho con trỏ hàm nhận 1 tham số `uint8_t` và không trả về giá trị?",
          "opts": [
            "void *fn(uint8_t);",
            "void (*fn)(uint8_t);",
            "uint8_t (*fn)(void);",
            "void (fn*)(uint8_t);"
          ],
          "ans": 1,
          "exp": "Ngoặc quanh `(*fn)` là bắt buộc; nếu thiếu sẽ thành khai báo hàm trả về `void *`."
        },
        {
          "q": "Trước khi thực thi `table[id]()`, bước kiểm tra an toàn bắt buộc là gì?",
          "opts": [
            "Không cần kiểm tra",
            "Kiểm tra `id < TABLE_SIZE && table[id] != NULL`",
            "Gọi `cli()`",
            "Ép kiểu sang `void*`"
          ],
          "ans": 1,
          "exp": "Nhảy vào địa chỉ rác hoặc NULL (0x0000 = Reset Vector trên AVR!) sẽ làm vi điều khiển tự khởi động lại!"
        },
        {
          "q": "Lợi thế chính của bảng con trỏ hàm so với chuỗi `if-else` 20 nhánh là gì?",
          "opts": [
            "Thời gian tra cứu hằng số O(1) và code gọn dễ mở rộng",
            "Không tốn Flash",
            "Tự động chống ngắt",
            "Dùng ít chân GPIO hơn"
          ],
          "ans": 0,
          "exp": "Thời gian phản hồi O(1) ổn định (deterministic), rất quan trọng cho hệ thống nhúng thời gian thực."
        },
        {
          "q": "USART0 nhận mã lệnh 4, bảng callback có 4 mục. Xử lý thế nào?",
          "opts": [
            "Gọi bảng[4]",
            "Báo mã ngoài phạm vi",
            "Gọi bảng[0] luôn"
          ],
          "ans": 1,
          "exp": "Chỉ số hợp lệ là 0 đến 3."
        }
      ],
      "remember": "Nắm chắc kích thước con trỏ 16-bit trên AVR, từ khóa `volatile` và kiểm tra NULL/biên.",
      "pitfall": "Gọi con trỏ hàm NULL trên ATmega328P sẽ nhảy về địa chỉ 0x0000 (Reset Vector) làm reset chip!",
      "avrContext": "Dùng mã lệnh nhận qua USART0 làm chỉ số bảng. Xét kiểm phạm vi và cách FSM chọn hàm tiếp theo."
    },
    {
      "id": 72,
      "type": "quiz",
      "ewTitle": "Pointer-iv",
      "title": "Quiz: Memory-Mapped I/O (`volatile`) & An toàn Bộ nhớ",
      "moduleId": "m6_pointer",
      "brochureRef": "Brochure M5 & M10",
      "level": "Trung bình",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Bài kiểm tra trắc nghiệm ATmega328P cho phần Pointer-iv.",
      "questions": [
        {
          "q": "Tại sao mọi con trỏ trỏ tới thanh ghi phần cứng ATmega328P đều bắt buộc có từ khóa `volatile`?",
          "opts": [
            "Để lưu biến vào Flash",
            "Ngăn trình biên dịch tối ưu bỏ qua lệnh đọc/ghi phần cứng vì giá trị thanh ghi có thể tự đổi bởi phần cứng/ISR",
            "Để tăng tốc độ CPU",
            "Để giảm kích thước SRAM"
          ],
          "ans": 1,
          "exp": "Với `-Os`, nếu không có `volatile`, avr-gcc chỉ đọc thanh ghi 1 lần rồi giữ trong R24 mãi mãi → vòng lặp polling treo chết!"
        },
        {
          "q": "Vùng địa chỉ thanh ghi I/O và ngoại vi mở rộng trên ATmega328P nằm ở đâu trong không gian dữ liệu?",
          "opts": [
            "0x0000 – 0x001F",
            "0x0020 – 0x00FF",
            "0x0100 – 0x08FF",
            "0x20000000"
          ],
          "ans": 1,
          "exp": "0x0000..0x001F là 32 thanh ghi đa năng R0..R31; 0x0020..0x00FF là thanh ghi I/O & Extended I/O; 0x0100..0x08FF là 2 KB SRAM nội."
        },
        {
          "q": "Dangling Pointer (Con trỏ treo) xảy ra khi nào?",
          "opts": [
            "Trỏ tới biến toàn cục",
            "Trả về địa chỉ của biến cục bộ (nằm trên Stack) đã bị hủy sau khi thoát hàm!",
            "Trỏ tới thanh ghi PORTB",
            "Gán bằng NULL"
          ],
          "ans": 1,
          "exp": "Biến cục bộ nằm trên Stack sẽ bị ghi đè ngay khi gọi hàm tiếp theo → đọc/ghi qua con trỏ đó gây lỗi không lường trước."
        },
        {
          "q": "Dùng con trỏ đọc và ghi PORTB, kiểu đối tượng đích nên là gì?",
          "opts": [
            "const uint8_t",
            "uint32_t",
            "volatile uint8_t"
          ],
          "ans": 2,
          "exp": "Thanh ghi rộng 8 bit và cần truy cập theo ngữ nghĩa volatile."
        }
      ],
      "remember": "Nắm chắc kích thước con trỏ 16-bit trên AVR, từ khóa `volatile` và kiểm tra NULL/biên.",
      "pitfall": "Gọi con trỏ hàm NULL trên ATmega328P sẽ nhảy về địa chỉ 0x0000 (Reset Vector) làm reset chip!",
      "avrContext": "Phân biệt con trỏ RAM và địa chỉ MMIO như 0x25 của PORTB. Xét hiệu lực volatile và giới hạn vùng được phép truy cập."
    },
    {
      "id": 73,
      "type": "task",
      "ewTitle": "Pointer to Struct with Bitfields",
      "title": "Con trỏ tới Struct Bitfield (Điều khiển Driver Timer0)",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 (Pointer to Struct)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "TIMER",
        "SRAM"
      ],
      "summary": "Dùng toán tử mũi tên `->` qua con trỏ tới struct bitfield để bật/tắt các bit cấu hình thanh ghi phần cứng sạch sẽ, dễ đọc.",
      "filename": "avr_ptr_struct_bf.c",
      "lines": [
        {
          "code": "typedef struct { uint8_t cs:3; uint8_t wgm2:1; uint8_t res:4; } tccr0b_t;",
          "phase": "SETUP",
          "explain": "Định nghĩa struct bitfield 8-bit khớp chính xác thanh ghi TCCR0B của ATmega328P (LSB nằm ở bit 0 trên avr-gcc).",
          "cards": [
            [
              "sizeof",
              "1 byte",
              "purple"
            ],
            [
              "cs (bit 2:0)",
              "Prescaler",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "tccr0b_t (1 byte)",
            "val": 0,
            "prev": 0,
            "mask": 15,
            "labels": [
              "res",
              "res",
              "res",
              "res",
              "wgm2",
              "cs2",
              "cs1",
              "cs0"
            ],
            "note": "Bitfield khớp trực tiếp với TCCR0B"
          }
        },
        {
          "code": "volatile tccr0b_t *reg = (volatile tccr0b_t *)&TCCR0B;",
          "phase": "MEMORY",
          "explain": "Ánh xạ con trỏ struct `volatile` trực tiếp lên địa chỉ I/O của thanh ghi TCCR0B (0x45).",
          "cards": [
            [
              "reg",
              "&TCCR0B (0x45)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "TCCR0B qua con trỏ reg",
            "val": 0,
            "prev": 0,
            "mask": 7,
            "labels": [
              "res",
              "res",
              "res",
              "res",
              "wgm2",
              "cs2",
              "cs1",
              "cs0"
            ],
            "note": "Sẵn sàng ghi qua toán tử ->"
          }
        },
        {
          "code": "reg->cs = 3; reg->wgm2 = 0;",
          "phase": "OUTPUT",
          "explain": "Ghi `cs = 3` (chia 64) và `wgm2 = 0` qua `->`. Trình biên dịch tự sinh mã mặt nạ bit!",
          "cards": [
            [
              "TCCR0B",
              "0x03",
              "green"
            ],
            [
              "Prescaler",
              "64",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "TCCR0B = 0x03",
            "val": 3,
            "prev": 0,
            "mask": 7,
            "labels": [
              "res",
              "res",
              "res",
              "res",
              "wgm2",
              "cs2",
              "cs1",
              "cs0"
            ],
            "note": "cs = 011 (3), wgm2 = 0"
          }
        }
      ],
      "remember": "Thứ tự bitfield phụ thuộc compiler (avr-gcc xếp từ LSB lên MSB). Dùng bitfield giúp code đọc rất tường minh.",
      "pitfall": "Cẩn thận: mỗi phép gán `reg->a = 1; reg->b = 1;` sinh 2 lệnh đọc-ghi thanh ghi riêng biệt; nếu cần ghi nguyên tử 1 lần, hãy dùng biến đệm cục bộ!",
      "tests": [
        "+ reg->cs=3 → TCCR0B=0x03"
      ],
      "problem": {
        "scenario": "Cho con trỏ tới cấu hình Timer0 trong SRAM. Sửa trường mong muốn rồi chuyển cấu hình sang mặt nạ TCCR0A/B ở lớp driver.\n\nKhi đóng gói khung truyền cảm biến hoặc viết lớp Driver HAL kiểu STM32 cho ATmega328P, Struct & Bitfield giúp mã nguồn rõ ràng, an toàn kích thước. Yêu cầu: Dùng toán tử mũi tên `->` qua con trỏ tới struct bitfield để bật/tắt các bit cấu hình thanh ghi phần cứng sạch sẽ, dễ đọc.",
        "prototype": "void ptr_struct_bf_solve(void)",
        "workedExample": [
          "Bước 1: Định nghĩa struct bitfield 8-bit khớp chính xác thanh ghi TCCR0B của ATmega328P (LSB nằm ở bit 0 trên avr-gcc). (sizeof=1 byte, cs (bit 2:0)=Prescaler)",
          "Bước 2: Ánh xạ con trỏ struct `volatile` trực tiếp lên địa chỉ I/O của thanh ghi TCCR0B (0x45). (reg=&TCCR0B (0x45))",
          "Bước 3: Ghi `cs = 3` (chia 64) và `wgm2 = 0` qua `->`. (TCCR0B=0x03, Prescaler=64)"
        ],
        "testRows": [
          [
            "Case 1",
            "reg->cs=3",
            "TCCR0B=0x03"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, TIMER, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 073: Con trỏ tới Struct Bitfield (Điều khiển Driver Timer0)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void ptr_struct_bf_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef struct { uint8_t cs:3; uint8_t wgm2:1; uint8_t res:4; } tccr0b_t;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Thứ tự bitfield phụ thuộc compiler (avr-gcc xếp từ LSB lên MSB). Dùng bitfield giúp code đọc rất tường minh.",
        "hint2": "Cẩn thận: mỗi phép gán `reg->a = 1; reg->b = 1;` sinh 2 lệnh đọc-ghi thanh ghi riêng biệt; nếu cần ghi nguyên tử 1 lần, hãy dùng biến đệm cục bộ!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "tccr0b_t (1 byte)",
          "val": 0,
          "prev": 0,
          "mask": 15,
          "labels": [
            "res",
            "res",
            "res",
            "res",
            "wgm2",
            "cs2",
            "cs1",
            "cs0"
          ],
          "note": "Bitfield khớp trực tiếp với TCCR0B"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "TCCR0B = 0x03",
          "val": 3,
          "prev": 0,
          "mask": 7,
          "labels": [
            "res",
            "res",
            "res",
            "res",
            "wgm2",
            "cs2",
            "cs1",
            "cs0"
          ],
          "note": "cs = 011 (3), wgm2 = 0"
        }
      }
    },
    {
      "id": 74,
      "type": "task",
      "ewTitle": "Construct UART Data Frame with Parity Bit",
      "title": "Tạo khung truyền UART 8-bit kèm Bit chẵn lẻ (Even Parity)",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 & M11 (UART Frame)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "USART"
      ],
      "summary": "Đóng gói khung UART gồm Start(0), Data(8-bit), Parity(1-bit) và Stop(1) trong struct và tự tính Even Parity.",
      "filename": "avr_uart_frame.c",
      "lines": [
        {
          "code": "typedef struct { uint8_t data; uint8_t parity:1; uint8_t stop:1; } uart_frame_t;",
          "phase": "SETUP",
          "explain": "Cấu trúc mô tả khung truyền 8E1 (8 data, Even parity, 1 stop bit — cấu hình `UPM01=1` trong `UCSR0C`).",
          "cards": [
            [
              "Cấu hình AVR",
              "UCSR0C: 8E1",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "data = 'C' (0x43)",
            "val": 67,
            "prev": 0,
            "mask": 67,
            "labels": [],
            "note": "0x43 = 0100_0011 có 3 bit 1 (lẻ)"
          }
        },
        {
          "code": "uint8_t p = 0; for(uint8_t b=f.data; b; b&=b-1) p ^= 1;\nf.parity = p; f.stop = 1;",
          "phase": "OUTPUT",
          "explain": "'C' (0x43) có 3 bit 1 (lẻ) → Even Parity phải bằng 1 để tổng số bit 1 thành 4 (chẵn)!",
          "cards": [
            [
              "data",
              "0x43 (3 bit 1)",
              "blue"
            ],
            [
              "parity",
              "1 (Even)",
              "green"
            ],
            [
              "stop",
              "1",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Parity = 1 (Tổng 4 bit 1)",
            "val": 67,
            "prev": 67,
            "mask": 255,
            "labels": [],
            "note": "Khung 8E1 hoàn chỉnh",
            "op": "XOR (^=)"
          }
        }
      ],
      "remember": "Phần cứng USART0 của ATmega328P tự động tính Parity nếu bật `UPM01=1` (Even) hoặc `UPM01:0=11` (Odd) trong `UCSR0C`.",
      "pitfall": "Khi nhận, kiểm tra bit lỗi `UPE0` (bit 2 trong `UCSR0A`) trước khi đọc `UDR0`!",
      "tests": [
        "+ 0x43 (3 bit 1) → Even parity = 1",
        "+ 0x41 (2 bit 1) → Even parity = 0"
      ],
      "problem": {
        "scenario": "Tính even parity cho byte trước khi gửi UART. Khi dùng USART0 thật, cài UPM trong UCSR0C để phần cứng tự phát parity.\n\nKhi đóng gói khung truyền cảm biến hoặc viết lớp Driver HAL kiểu STM32 cho ATmega328P, Struct & Bitfield giúp mã nguồn rõ ràng, an toàn kích thước. Yêu cầu: Đóng gói khung UART gồm Start(0), Data(8-bit), Parity(1-bit) và Stop(1) trong struct và tự tính Even Parity.",
        "prototype": "void uart_frame_solve(void)",
        "workedExample": [
          "Bước 1: Cấu trúc mô tả khung truyền 8E1 (8 data, Even parity, 1 stop bit — cấu hình `UPM01=1` trong `UCSR0C`). (Cấu hình AVR=UCSR0C: 8E1)",
          "Bước 2: 'C' (0x43) có 3 bit 1 (lẻ) → Even Parity phải bằng 1 để tổng số bit 1 thành 4 (chẵn)!. (data=0x43 (3 bit 1), parity=1 (Even))"
        ],
        "testRows": [
          [
            "Case 1",
            "0x43 (3 bit 1)",
            "Even parity = 1"
          ],
          [
            "Case 2",
            "0x41 (2 bit 1)",
            "Even parity = 0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 074: Tạo khung truyền UART 8-bit kèm Bit chẵn lẻ (Even Parity)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void uart_frame_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef struct { uint8_t data; uint8_t parity:1; uint8_t stop:1; } uart_frame_t;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Phần cứng USART0 của ATmega328P tự động tính Parity nếu bật `UPM01=1` (Even) hoặc `UPM01:0=11` (Odd) trong `UCSR0C`.",
        "hint2": "Khi nhận, kiểm tra bit lỗi `UPE0` (bit 2 trong `UCSR0A`) trước khi đọc `UDR0`!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "data = 'C' (0x43)",
          "val": 67,
          "prev": 0,
          "mask": 67,
          "labels": [],
          "note": "0x43 = 0100_0011 có 3 bit 1 (lẻ)"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Parity = 1 (Tổng 4 bit 1)",
          "val": 67,
          "prev": 67,
          "mask": 255,
          "labels": [],
          "note": "Khung 8E1 hoàn chỉnh",
          "op": "XOR (^=)"
        }
      }
    },
    {
      "id": 75,
      "type": "task",
      "ewTitle": "Validate Configuration Register Layout",
      "title": "Kiểm tra hợp lệ Cấu trúc Thanh ghi (`_Static_assert` lúc biên dịch)",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 & M10 (MISRA C)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng `_Static_assert(sizeof(cfg_reg_t) == 2, ...)` để bắt lỗi sai kích thước struct ngay lúc biên dịch trước khi nạp xuống ATmega328P.",
      "filename": "avr_validate_layout.c",
      "lines": [
        {
          "code": "typedef struct { uint8_t mode:4; uint8_t en:1; uint8_t rsv:3; uint8_t top; } pwm_cfg_t;",
          "phase": "SETUP",
          "explain": "Struct cấu hình PWM kỳ vọng đúng 2 byte (byte 0: cờ chế độ, byte 1: giá trị TOP OCR0A).",
          "cards": [
            [
              "Byte 0",
              "mode+en+rsv (8b)",
              "blue"
            ],
            [
              "Byte 1",
              "top (8b)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Bố cục pwm_cfg_t (2 byte)",
            "cells": [
              {
                "addr": "+0",
                "label": "Byte 0",
                "val": "mode:4|en:1|rsv:3",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "+1",
                "label": "Byte 1",
                "val": "top (uint8_t)",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Tổng kích thước = 2 byte"
          }
        },
        {
          "code": "_Static_assert(sizeof(pwm_cfg_t) == 2, \"Wrong size!\");",
          "phase": "OUTPUT",
          "explain": "Nếu ai đó lỡ thêm bit vượt 8 bit làm struct phình lên 3 byte, `avr-gcc` sẽ báo lỗi biên dịch ngay lập tức — tốn 0 byte Flash!",
          "cards": [
            [
              "sizeof",
              "2 byte (PASS ✓)",
              "green"
            ],
            [
              "Tốn Flash",
              "0 byte",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Compile-time Validation PASS",
            "cells": [
              {
                "addr": "Check",
                "label": "sizeof == 2",
                "val": "OK ✓",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "An toàn tuyệt đối cho giao tiếp phần cứng"
          }
        }
      ],
      "remember": "`_Static_assert` (C11) là công cụ không thể thiếu khi ánh xạ struct lên gói tin UART/SPI hoặc EEPROM.",
      "pitfall": "Đừng kiểm tra `sizeof` lúc runtime bằng `if` khi ta có thể bắt lỗi ngay lúc biên dịch!",
      "tests": [
        "+ sizeof(pwm_cfg_t) == 2 → biên dịch thành công"
      ],
      "problem": {
        "scenario": "Dùng _Static_assert để kiểm kích thước và offset cấu trúc bằng avr-gcc. Dùng quy ước dữ liệu riêng cho giao thức.\n\nKhi đóng gói khung truyền cảm biến hoặc viết lớp Driver HAL kiểu STM32 cho ATmega328P, Struct & Bitfield giúp mã nguồn rõ ràng, an toàn kích thước. Yêu cầu: Dùng `_Static_assert(sizeof(cfg_reg_t) == 2, ...)` để bắt lỗi sai kích thước struct ngay lúc biên dịch trước khi nạp xuống ATmega328P.",
        "prototype": "void validate_layout_solve(void)",
        "workedExample": [
          "Bước 1: Struct cấu hình PWM kỳ vọng đúng 2 byte (byte 0: cờ chế độ, byte 1: giá trị TOP OCR0A). (Byte 0=mode+en+rsv (8b), Byte 1=top (8b))",
          "Bước 2: Nếu ai đó lỡ thêm bit vượt 8 bit làm struct phình lên 3 byte, `avr-gcc` sẽ báo lỗi biên dịch ngay lập tức — tốn 0 byte Flash!. (sizeof=2 byte (PASS ✓), Tốn Flash=0 byte)"
        ],
        "testRows": [
          [
            "Case 1",
            "sizeof(pwm_cfg_t) == 2",
            "biên dịch thành công"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 075: Kiểm tra hợp lệ Cấu trúc Thanh ghi (`_Static_assert` lúc biên dịch)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void validate_layout_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef struct { uint8_t mode:4; uint8_t en:1; uint8_t rsv:3; uint8_t top; } pwm_cfg_t;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "`_Static_assert` (C11) là công cụ không thể thiếu khi ánh xạ struct lên gói tin UART/SPI hoặc EEPROM.",
        "hint2": "Đừng kiểm tra `sizeof` lúc runtime bằng `if` khi ta có thể bắt lỗi ngay lúc biên dịch!",
        "initViz": {
          "kind": "memory",
          "title": "Bố cục pwm_cfg_t (2 byte)",
          "cells": [
            {
              "addr": "+0",
              "label": "Byte 0",
              "val": "mode:4|en:1|rsv:3",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+1",
              "label": "Byte 1",
              "val": "top (uint8_t)",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Tổng kích thước = 2 byte"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Compile-time Validation PASS",
          "cells": [
            {
              "addr": "Check",
              "label": "sizeof == 2",
              "val": "OK ✓",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "An toàn tuyệt đối cho giao tiếp phần cứng"
        }
      }
    },
    {
      "id": 76,
      "type": "task",
      "ewTitle": "Struct Padding",
      "title": "Căn chỉnh bộ nhớ Struct Padding: ATmega328P (8-bit) vs ARM Cortex-M (32-bit)",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 & M11 (Kiến trúc MCU)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "So sánh kích thước của cùng 1 struct `{uint8_t a; uint32_t b; uint8_t c;}` trên ATmega328P (6 byte, KHÔNG padding!) và trên STM32/PC (12 byte, 6 byte padding!).",
      "filename": "avr_struct_padding.c",
      "lines": [
        {
          "code": "struct raw_s { uint8_t a; uint32_t b; uint8_t c; };",
          "phase": "SETUP",
          "explain": "Vì ATmega328P có bus dữ liệu 8-bit (alignment = 1 byte), `sizeof(struct raw_s)` trên AVR là **6 byte**. Nhưng trên PC/STM32 (32-bit alignment) nó phình lên **12 byte**!",
          "cards": [
            [
              "AVR 8-bit",
              "6 byte (0 pad)",
              "green"
            ],
            [
              "STM32/PC",
              "12 byte (6 pad!)",
              "rose"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "So sánh Layout: AVR (6B) vs ARM (12B)",
            "cells": [
              {
                "addr": "+0",
                "label": "a (1B)",
                "val": "uint8",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "+1..4",
                "label": "b (4B)",
                "val": "uint32 (AVR liền kề)",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "+5",
                "label": "c (1B)",
                "val": "uint8",
                "active": true,
                "tone": "blue"
              }
            ],
            "pointers": [],
            "note": "AVR không chèn padding, nhưng gửi sang PC sẽ lệch byte!"
          }
        },
        {
          "code": "struct __attribute__((packed)) opt_s { uint32_t b; uint8_t a; uint8_t c; };",
          "phase": "OUTPUT",
          "explain": "Sắp xếp trường lớn lên đầu (`b`, rồi `a`, `c`) và gắn `__attribute__((packed))` cho gói truyền thông để cả AVR và PC đều hiểu đúng 6 byte khớp nhau!",
          "cards": [
            [
              "AVR & PC",
              "Đều khớp 6 byte",
              "green"
            ],
            [
              "Thứ tự chuẩn",
              "Lớn → Nhỏ",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Struct tối ưu: b(4B) + a(1B) + c(1B)",
            "cells": [
              {
                "addr": "+0..3",
                "label": "b (4B)",
                "val": "uint32",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "+4",
                "label": "a (1B)",
                "val": "uint8",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "+5",
                "label": "c (1B)",
                "val": "uint8",
                "active": true,
                "tone": "blue"
              }
            ],
            "pointers": [],
            "note": "Khớp 100% giữa ATmega328P và PC/STM32"
          }
        }
      ],
      "remember": "Câu hỏi phỏng vấn kinh điển (Brochure M13): Luôn xếp thành viên lớn trước nhỏ sau để triệt tiêu padding trên mọi kiến trúc!",
      "pitfall": "Gửi trực tiếp struct chưa `packed` từ ATmega328P lên PC qua UART sẽ làm PC đọc lệch hoàn toàn vì PC tự chèn byte đệm!",
      "tests": [
        "+ AVR: sizeof(raw_s)=6 | PC/ARM: sizeof(raw_s)=12",
        "+ opt_s: 6 byte trên AVR, 8 byte (6 nếu packed) trên ARM"
      ],
      "problem": {
        "scenario": "Biên dịch cho AVR và so với ARM rồi quan sát sizeof/offsetof thực tế. Dùng kết quả AVR để tính SRAM cho mảng bản ghi.\n\nKhi đóng gói khung truyền cảm biến hoặc viết lớp Driver HAL kiểu STM32 cho ATmega328P, Struct & Bitfield giúp mã nguồn rõ ràng, an toàn kích thước. Yêu cầu: So sánh kích thước của cùng 1 struct `{uint8_t a; uint32_t b; uint8_t c;}` trên ATmega328P (6 byte, KHÔNG padding!) và trên STM32/PC (12 byte, 6 byte padding!).",
        "prototype": "void struct_padding_solve(void)",
        "workedExample": [
          "Bước 1: Vì ATmega328P có bus dữ liệu 8-bit (alignment = 1 byte), `sizeof(struct raw_s)` trên AVR là **6 byte**. (AVR 8-bit=6 byte (0 pad), STM32/PC=12 byte (6 pad!))",
          "Bước 2: Sắp xếp trường lớn lên đầu (`b`, rồi `a`, `c`) và gắn `__attribute__((packed))` cho gói truyền thông để cả AVR và PC đều hiểu đúng 6 byte khớp nhau!. (AVR & PC=Đều khớp 6 byte, Thứ tự chuẩn=Lớn → Nhỏ)"
        ],
        "testRows": [
          [
            "Case 1",
            "AVR 8-bit = 6 byte (0 pad), STM32/PC = 12 byte (6 pad!), AVR & PC = Đều khớp 6 byte",
            "AVR: sizeof(raw_s)=6 | PC/ARM: sizeof(raw_s)=12"
          ],
          [
            "Case 2",
            "AVR 8-bit = 6 byte (0 pad), STM32/PC = 12 byte (6 pad!), AVR & PC = Đều khớp 6 byte",
            "opt_s: 6 byte trên AVR, 8 byte (6 nếu packed) trên ARM"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 076: Căn chỉnh bộ nhớ Struct Padding: ATmega328P (8-bit) vs ARM Cortex-M (32-bit)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void struct_padding_solve(void)\n * ============================================================ */\n\nint main(void) {\n    struct raw_s { uint8_t a; uint32_t b; uint8_t c; };\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Câu hỏi phỏng vấn kinh điển (Brochure M13): Luôn xếp thành viên lớn trước nhỏ sau để triệt tiêu padding trên mọi kiến trúc!",
        "hint2": "Gửi trực tiếp struct chưa `packed` từ ATmega328P lên PC qua UART sẽ làm PC đọc lệch hoàn toàn vì PC tự chèn byte đệm!",
        "initViz": {
          "kind": "memory",
          "title": "So sánh Layout: AVR (6B) vs ARM (12B)",
          "cells": [
            {
              "addr": "+0",
              "label": "a (1B)",
              "val": "uint8",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+1..4",
              "label": "b (4B)",
              "val": "uint32 (AVR liền kề)",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "+5",
              "label": "c (1B)",
              "val": "uint8",
              "active": true,
              "tone": "blue"
            }
          ],
          "pointers": [],
          "note": "AVR không chèn padding, nhưng gửi sang PC sẽ lệch byte!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Struct tối ưu: b(4B) + a(1B) + c(1B)",
          "cells": [
            {
              "addr": "+0..3",
              "label": "b (4B)",
              "val": "uint32",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "+4",
              "label": "a (1B)",
              "val": "uint8",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+5",
              "label": "c (1B)",
              "val": "uint8",
              "active": true,
              "tone": "blue"
            }
          ],
          "pointers": [],
          "note": "Khớp 100% giữa ATmega328P và PC/STM32"
        }
      }
    },
    {
      "id": 77,
      "type": "task",
      "ewTitle": "Extract Packet Fields from Byte Stream",
      "title": "Giải mã trường gói tin từ luồng Byte UART vào Struct",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 & M11 (UART)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART"
      ],
      "summary": "Giải mã mảng 5 byte nhận qua UART `{0xAA, 0x02, 0x01, 0xF4, 0x5E}` thành `pkt_t { header, cmd, value16, crc }`.",
      "filename": "avr_parse_pkt.c",
      "lines": [
        {
          "code": "uint8_t rx[5] = {0xAA, 0x02, 0x01, 0xF4, 0x5E};",
          "phase": "SETUP",
          "explain": "Luồng byte nhận từ UART: Header=0xAA, Cmd=0x02, Value=0x01F4 (500), CRC=0x5E.",
          "cards": [
            [
              "rx[0..4]",
              "AA 02 01 F4 5E",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Luồng Byte nhận UART",
            "cells": [
              {
                "addr": "0",
                "label": "HDR",
                "val": "0xAA",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "1",
                "label": "CMD",
                "val": "0x02",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "VAL_H",
                "val": "0x01",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "3",
                "label": "VAL_L",
                "val": "0xF4",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "4",
                "label": "CRC",
                "val": "0x5E",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Đang tách vào struct pkt_t"
          }
        },
        {
          "code": "pkt.hdr = rx[0]; pkt.cmd = rx[1];\npkt.val = ((uint16_t)rx[2] << 8) | rx[3];",
          "phase": "OUTPUT",
          "explain": "Ghép Big-Endian `rx[2]` và `rx[3]` thành `pkt.val = 500` (ví dụ tốc độ đặt 500 RPM cho động cơ DC!).",
          "cards": [
            [
              "pkt.cmd",
              "2",
              "green"
            ],
            [
              "pkt.val",
              "500 (0x01F4)",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Struct pkt_t đã giải mã",
            "cells": [
              {
                "addr": "hdr",
                "label": "Header",
                "val": "0xAA ✓",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "cmd",
                "label": "Command",
                "val": "0x02",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "val",
                "label": "Target RPM",
                "val": "500",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Giải mã an toàn không lỗi Endianness"
          }
        }
      ],
      "remember": "Ghép byte bằng dịch bit thay vì ép con trỏ struct giúp code chạy đúng trên cả Little-Endian (AVR) lẫn Big-Endian.",
      "pitfall": "Luôn kiểm tra `rx[0] == 0xAA` và CRC trước khi tin tưởng `pkt.val`.",
      "tests": [
        "+ {0xAA,0x02,0x01,0xF4,0x5E} → val=500"
      ],
      "problem": {
        "scenario": "Nhận byte qua USART0 rồi giải mã từng trường. Kiểm độ dài khung và thứ tự byte trước khi ghi struct.\n\nKhi đóng gói khung truyền cảm biến hoặc viết lớp Driver HAL kiểu STM32 cho ATmega328P, Struct & Bitfield giúp mã nguồn rõ ràng, an toàn kích thước. Yêu cầu: Giải mã mảng 5 byte nhận qua UART `{0xAA, 0x02, 0x01, 0xF4, 0x5E}` thành `pkt_t { header, cmd, value16, crc }`.",
        "prototype": "void parse_pkt_solve(void)",
        "workedExample": [
          "Bước 1: Luồng byte nhận từ UART: Header=0xAA, Cmd=0x02, Value=0x01F4 (500), CRC=0x5E. (rx[0..4]=AA 02 01 F4 5E)",
          "Bước 2: Ghép Big-Endian `rx[2]` và `rx[3]` thành `pkt. (pkt.cmd=2, pkt.val=500 (0x01F4))"
        ],
        "testRows": [
          [
            "Case 1",
            "{0xAA,0x02,0x01,0xF4,0x5E}",
            "val=500"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 077: Giải mã trường gói tin từ luồng Byte UART vào Struct\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void parse_pkt_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t rx[5] = {0xAA, 0x02, 0x01, 0xF4, 0x5E};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Ghép byte bằng dịch bit thay vì ép con trỏ struct giúp code chạy đúng trên cả Little-Endian (AVR) lẫn Big-Endian.",
        "hint2": "Luôn kiểm tra `rx[0] == 0xAA` và CRC trước khi tin tưởng `pkt.val`.",
        "initViz": {
          "kind": "memory",
          "title": "Luồng Byte nhận UART",
          "cells": [
            {
              "addr": "0",
              "label": "HDR",
              "val": "0xAA",
              "active": true,
              "tone": "purple"
            },
            {
              "addr": "1",
              "label": "CMD",
              "val": "0x02",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "VAL_H",
              "val": "0x01",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "3",
              "label": "VAL_L",
              "val": "0xF4",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "4",
              "label": "CRC",
              "val": "0x5E",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Đang tách vào struct pkt_t"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Struct pkt_t đã giải mã",
          "cells": [
            {
              "addr": "hdr",
              "label": "Header",
              "val": "0xAA ✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "cmd",
              "label": "Command",
              "val": "0x02",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "val",
              "label": "Target RPM",
              "val": "500",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Giải mã an toàn không lỗi Endianness"
        }
      }
    },
    {
      "id": 78,
      "type": "task",
      "ewTitle": "Register Bitfields Using Struct Overlay",
      "title": "Phủ Struct Bitfield lên nhóm thanh ghi GPIO (`PINx`/`DDRx`/`PORTx`)",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 & M10 (HAL Driver)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "GPIO"
      ],
      "summary": "Nhìn vào bảng thanh ghi ATmega328P: `PINB(0x23)`, `DDRB(0x24)`, `PORTB(0x25)` nằm liền kề nhau! Ta có thể tạo 1 struct `avr_port_t` giống phong cách STM32 HAL!",
      "filename": "avr_port_overlay.c",
      "lines": [
        {
          "code": "typedef struct { volatile uint8_t PIN; volatile uint8_t DDR; volatile uint8_t PORT; } avr_port_t;",
          "phase": "SETUP",
          "explain": "Trong ATmega328P, cả 3 cổng B (0x23), C (0x26), D (0x29) đều có đúng thứ tự liên tiếp `PIN (+0), DDR (+1), PORT (+2)`!",
          "cards": [
            [
              "PORT_B",
              "0x23..0x25",
              "purple"
            ],
            [
              "PORT_C",
              "0x26..0x28",
              "purple"
            ],
            [
              "PORT_D",
              "0x29..0x2B",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Struct Overlay GPIO ATmega328P",
            "cells": [
              {
                "addr": "0x23",
                "label": "PINB (+0)",
                "val": "0x00",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x24",
                "label": "DDRB (+1)",
                "val": "0x20",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x25",
                "label": "PORTB (+2)",
                "val": "0x20",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [
              {
                "name": "GPIOB",
                "target": "0x23",
                "val": "0x0023"
              }
            ],
            "note": "Kiến trúc HAL kiểu STM32 ngay trên AVR!"
          }
        },
        {
          "code": "#define GPIOB ((avr_port_t *)0x23)\nGPIOB->DDR |= (1U<<5); GPIOB->PORT |= (1U<<5);",
          "phase": "OUTPUT",
          "explain": "Chỉ cần viết 1 hàm `gpio_write(avr_port_t *port, uint8_t pin, uint8_t val)` dùng chung cho cả Port B, C và D!",
          "cards": [
            [
              "GPIOB->DDR",
              "0x20",
              "green"
            ],
            [
              "GPIOB->PORT",
              "0x20",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "GPIOB->PORT = 0x20",
            "val": 32,
            "prev": 0,
            "mask": 32,
            "labels": [
              "PB7",
              "PB6",
              "PB5",
              "PB4",
              "PB3",
              "PB2",
              "PB1",
              "PB0"
            ],
            "note": "Viết driver tái sử dụng cho mọi Port AVR!",
            "op": "OR (|=)"
          }
        }
      ],
      "remember": "Tất cả thành viên thanh ghi trong struct overlay BẮT BUỘC phải có từ khóa `volatile`.",
      "pitfall": "Kỹ thuật này giúp bạn dễ dàng chuyển tư duy từ ATmega328P sang STM32 (Brochure M11)!",
      "tests": [
        "+ GPIOB=0x23, GPIOC=0x26, GPIOD=0x29"
      ],
      "problem": {
        "scenario": "Mô hình các byte PINx/DDRx/PORTx để phân tích layout. Dùng tên thanh ghi avr/io.h và mặt nạ khi truy cập ngoại vi thật.\n\nKhi đóng gói khung truyền cảm biến hoặc viết lớp Driver HAL kiểu STM32 cho ATmega328P, Struct & Bitfield giúp mã nguồn rõ ràng, an toàn kích thước. Yêu cầu: Nhìn vào bảng thanh ghi ATmega328P: `PINB(0x23)`, `DDRB(0x24)`, `PORTB(0x25)` nằm liền kề nhau! Ta có thể tạo 1 struct `avr_port_t` giống phong cách STM32 HAL!",
        "prototype": "void port_overlay_solve(void)",
        "workedExample": [
          "Bước 1: Trong ATmega328P, cả 3 cổng B (0x23), C (0x26), D (0x29) đều có đúng thứ tự liên tiếp `PIN (+0), DDR (+1), PORT (+2)`!. (PORT_B=0x23..0x25, PORT_C=0x26..0x28)",
          "Bước 2: Chỉ cần viết 1 hàm `gpio_write(avr_port_t *port, uint8_t pin, uint8_t val)` dùng chung cho cả Port B, C và D!. (GPIOB->DDR=0x20, GPIOB->PORT=0x20)"
        ],
        "testRows": [
          [
            "Case 1",
            "PORT_B = 0x23..0x25, PORT_C = 0x26..0x28, PORT_D = 0x29..0x2B",
            "GPIOB=0x23, GPIOC=0x26, GPIOD=0x29"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, GPIO), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Debug → Windows → I/O → Port B/C/D. Đặt Breakpoint (F9) ở `while(1)`, nhấn F5 (hoặc F10/F11 từng dòng) để thấy bit DDRx/PORTx/PINx đổi màu đỏ.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 078: Phủ Struct Bitfield lên nhóm thanh ghi GPIO (`PINx`/`DDRx`/`PORTx`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void port_overlay_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef struct { volatile uint8_t PIN; volatile uint8_t DDR; volatile uint8_t PORT; } avr_port_t;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Tất cả thành viên thanh ghi trong struct overlay BẮT BUỘC phải có từ khóa `volatile`.",
        "hint2": "Kỹ thuật này giúp bạn dễ dàng chuyển tư duy từ ATmega328P sang STM32 (Brochure M11)!",
        "initViz": {
          "kind": "memory",
          "title": "Struct Overlay GPIO ATmega328P",
          "cells": [
            {
              "addr": "0x23",
              "label": "PINB (+0)",
              "val": "0x00",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x24",
              "label": "DDRB (+1)",
              "val": "0x20",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x25",
              "label": "PORTB (+2)",
              "val": "0x20",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [
            {
              "name": "GPIOB",
              "target": "0x23",
              "val": "0x0023"
            }
          ],
          "note": "Kiến trúc HAL kiểu STM32 ngay trên AVR!"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "GPIOB->PORT = 0x20",
          "val": 32,
          "prev": 0,
          "mask": 32,
          "labels": [
            "PB7",
            "PB6",
            "PB5",
            "PB4",
            "PB3",
            "PB2",
            "PB1",
            "PB0"
          ],
          "note": "Viết driver tái sử dụng cho mọi Port AVR!",
          "op": "OR (|=)"
        }
      }
    },
    {
      "id": 79,
      "type": "task",
      "ewTitle": "Filter Structs by Field Value for example Sensor Threshold",
      "title": "Lọc mảng Struct Cảm biến theo Ngưỡng cảnh báo",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "ADC"
      ],
      "summary": "Duyệt mảng struct các nút cảm biến (`id`, `temp_c`) và đếm/đánh dấu những cảm biến vượt ngưỡng 45°C để bật quạt làm mát.",
      "filename": "avr_filter_structs.c",
      "lines": [
        {
          "code": "typedef struct { uint8_t id; int8_t temp; } sensor_t;\nsensor_t list[3] = {{1, 32}, {2, 51}, {3, 48}};",
          "phase": "SETUP",
          "explain": "Mỗi `sensor_t` chỉ chiếm 2 byte SRAM → 3 cảm biến tốn đúng 6 byte.",
          "cards": [
            [
              "Ngưỡng",
              "> 45°C",
              "amber"
            ],
            [
              "Tổng SRAM",
              "6 byte",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Mảng sensor_t[3] (6 byte SRAM)",
            "cells": [
              {
                "addr": "[0]",
                "label": "ID=1",
                "val": "32°C",
                "active": false,
                "tone": ""
              },
              {
                "addr": "[1]",
                "label": "ID=2 (>45)",
                "val": "51°C ⚠",
                "active": true,
                "tone": "rose"
              },
              {
                "addr": "[2]",
                "label": "ID=3 (>45)",
                "val": "48°C ⚠",
                "active": true,
                "tone": "rose"
              }
            ],
            "pointers": [],
            "note": "Cảm biến #2 và #3 vượt ngưỡng 45°C"
          }
        },
        {
          "code": "uint8_t alarm_mask = 0;\nfor(uint8_t i=0;i<3;i++) if(list[i].temp > 45) alarm_mask |= (1U << list[i].id);",
          "phase": "OUTPUT",
          "explain": "Thay vì cấp phát mảng kết quả mới, ta gom các ID vượt ngưỡng vào 1 byte `alarm_mask` = 0b0000_1100 (bit 2 và bit 3 bật)!",
          "cards": [
            [
              "alarm_mask",
              "0x0C (ID 2, 3)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "alarm_mask = 0x0C",
            "val": 12,
            "prev": 0,
            "mask": 12,
            "labels": [],
            "note": "Bit 2 và Bit 3 bật báo quá nhiệt!",
            "op": "OR (|=)"
          }
        }
      ],
      "remember": "Dùng kiểu vừa đủ (`int8_t` cho -128..+127°C) và bitmask kết quả giúp tiết kiệm SRAM tối đa.",
      "pitfall": "Truyền struct lớn vào hàm nên truyền con trỏ `const sensor_t *s` thay vì truyền giá trị (tránh copy lên Stack).",
      "tests": [
        "+ {{1,32},{2,51},{3,48}}, >45 → alarm_mask=0x0C"
      ],
      "problem": {
        "scenario": "Đọc các mẫu ADC vào mảng bản ghi rồi lọc theo ngưỡng. Đếm số phần tử kết quả trước khi ghi mảng đích.\n\nKhi đóng gói khung truyền cảm biến hoặc viết lớp Driver HAL kiểu STM32 cho ATmega328P, Struct & Bitfield giúp mã nguồn rõ ràng, an toàn kích thước. Yêu cầu: Duyệt mảng struct các nút cảm biến (`id`, `temp_c`) và đếm/đánh dấu những cảm biến vượt ngưỡng 45°C để bật quạt làm mát.",
        "prototype": "void filter_structs_solve(void)",
        "workedExample": [
          "Bước 1: Mỗi `sensor_t` chỉ chiếm 2 byte SRAM → 3 cảm biến tốn đúng 6 byte. (Ngưỡng=> 45°C, Tổng SRAM=6 byte)",
          "Bước 2: Thay vì cấp phát mảng kết quả mới, ta gom các ID vượt ngưỡng vào 1 byte `alarm_mask` = 0b0000_1100 (bit 2 và bit 3 bật)!. (alarm_mask=0x0C (ID 2, 3))"
        ],
        "testRows": [
          [
            "Case 1",
            "{{1,32},{2,51},{3,48}}, >45",
            "alarm_mask=0x0C"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, ADC), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 079: Lọc mảng Struct Cảm biến theo Ngưỡng cảnh báo\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void filter_structs_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef struct { uint8_t id; int8_t temp; } sensor_t;\n    sensor_t list[3] = {{1, 32}, {2, 51}, {3, 48}};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Dùng kiểu vừa đủ (`int8_t` cho -128..+127°C) và bitmask kết quả giúp tiết kiệm SRAM tối đa.",
        "hint2": "Truyền struct lớn vào hàm nên truyền con trỏ `const sensor_t *s` thay vì truyền giá trị (tránh copy lên Stack).",
        "initViz": {
          "kind": "memory",
          "title": "Mảng sensor_t[3] (6 byte SRAM)",
          "cells": [
            {
              "addr": "[0]",
              "label": "ID=1",
              "val": "32°C",
              "active": false,
              "tone": ""
            },
            {
              "addr": "[1]",
              "label": "ID=2 (>45)",
              "val": "51°C ⚠",
              "active": true,
              "tone": "rose"
            },
            {
              "addr": "[2]",
              "label": "ID=3 (>45)",
              "val": "48°C ⚠",
              "active": true,
              "tone": "rose"
            }
          ],
          "pointers": [],
          "note": "Cảm biến #2 và #3 vượt ngưỡng 45°C"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "alarm_mask = 0x0C",
          "val": 12,
          "prev": 0,
          "mask": 12,
          "labels": [],
          "note": "Bit 2 và Bit 3 bật báo quá nhiệt!",
          "op": "OR (|=)"
        }
      }
    },
    {
      "id": 80,
      "type": "quiz",
      "ewTitle": "Structures-i",
      "title": "Quiz: Struct cơ bản, Con trỏ `->` & Truyền Struct vào Hàm",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 & M11",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "GPIO"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Structures-i.",
      "questions": [
        {
          "q": "Khi có con trỏ `sensor_t *p = &s;`, cách truy cập thành viên `temp` nào ĐÚNG?",
          "opts": [
            "p.temp",
            "p->temp",
            "*p.temp",
            "&p->temp"
          ],
          "ans": 1,
          "exp": "`p->temp` tương đương `(*p).temp`. Toán tử `.` ưu tiên cao hơn `*` nên `*p.temp` sai cú pháp."
        },
        {
          "q": "Vì sao nên truyền `const pkt_t *p` thay vì `pkt_t p` vào hàm trên ATmega328P?",
          "opts": [
            "Vì C không cho truyền struct theo giá trị",
            "Tránh copy toàn bộ struct lên Stack 2 KB SRAM nhỏ bé",
            "Để sửa được dữ liệu gốc",
            "Để lưu vào EEPROM"
          ],
          "ans": 1,
          "exp": "Truyền con trỏ chỉ đẩy 2 byte địa chỉ lên Stack thay vì copy cả struct."
        },
        {
          "q": "Kích thước của `struct { uint8_t a; uint16_t b; uint8_t c; }` trên ATmega328P là bao nhiêu?",
          "opts": [
            "4 byte (AVR 8-bit không chèn padding)",
            "6 byte",
            "8 byte",
            "12 byte"
          ],
          "ans": 0,
          "exp": "ATmega328P có căn chỉnh 1 byte nên tổng kích thước = 1 + 2 + 1 = 4 byte."
        },
        {
          "q": "Driver có con trỏ p tới bản ghi ADC. Ghi trường mv bằng cách nào?",
          "opts": [
            "p->mv = 500",
            "p.mv = 500",
            "p = 500"
          ],
          "ans": 0,
          "exp": "Toán tử -> truy cập trường qua con trỏ struct."
        }
      ],
      "remember": "Nắm vững thứ tự PIN/DDR/PORT trên AVR và khác biệt Padding giữa AVR 8-bit với ARM 32-bit.",
      "pitfall": "Luôn tuần tự hóa byte khi truyền gói tin giữa ATmega328P và PC!",
      "avrContext": "Theo dõi một bản ghi cảm biến trong SRAM khi truyền giá trị hoặc địa chỉ vào hàm. Xác định thay đổi nào còn lại ở bên gọi."
    },
    {
      "id": 81,
      "type": "quiz",
      "ewTitle": "Structures-ii",
      "title": "Quiz: Struct Bitfield & Struct Padding (AVR vs ARM)",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 & M11",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "GPIO"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Structures-ii.",
      "questions": [
        {
          "q": "Cùng struct `{ uint8_t a; uint32_t b; uint8_t c; }`, vì sao gửi thẳng qua UART từ ATmega328P sang STM32 bị lỗi dữ liệu?",
          "opts": [
            "Khác tần số clock",
            "AVR đóng gói 6 byte (không padding) còn STM32 căn chỉnh 4-byte thành 12 byte!",
            "STM32 không hỗ trợ uint8_t",
            "UART không truyền được struct"
          ],
          "ans": 1,
          "exp": "Phải dùng `__attribute__((packed))` hoặc tuần tự hóa từng byte (serialization) khi truyền giữa 2 kiến trúc."
        },
        {
          "q": "Có thể lấy địa chỉ `&reg.bitfield` của một thành viên bitfield trong struct không?",
          "opts": [
            "Có, trả về con trỏ bit",
            "KHÔNG — vì bitfield không nằm trên ranh giới byte riêng lẻ",
            "Chỉ được trên AVR",
            "Được nếu có volatile"
          ],
          "ans": 1,
          "exp": "Con trỏ trong C chỉ trỏ được tới địa chỉ byte, không thể dùng `&` lên bitfield."
        },
        {
          "q": "Macro/từ khóa nào của C11 kiểm tra `sizeof(my_reg_t) == 2` ngay lúc biên dịch?",
          "opts": [
            "assert()",
            "_Static_assert()",
            "sizeof_check()",
            "#ifdef"
          ],
          "ans": 1,
          "exp": "`_Static_assert` báo lỗi ngay lúc compile và không tốn byte Flash nào."
        },
        {
          "q": "Thứ tự bit-field của một bản ghi AVR đem gửi UART có thể mặc định giống trên ARM không?",
          "opts": [
            "Luôn giống",
            "Phụ thuộc compiler và ABI",
            "Chỉ phụ thuộc clock"
          ],
          "ans": 1,
          "exp": "Trình biên dịch và ABI quyết định layout."
        }
      ],
      "remember": "Nắm vững thứ tự PIN/DDR/PORT trên AVR và khác biệt Padding giữa AVR 8-bit với ARM 32-bit.",
      "pitfall": "Luôn tuần tự hóa byte khi truyền gói tin giữa ATmega328P và PC!",
      "avrContext": "Kiểm layout bằng compiler đang dùng cho ATmega328P. Đừng suy thứ tự bit-field từ một ví dụ chạy trên ARM."
    },
    {
      "id": 82,
      "type": "quiz",
      "ewTitle": "Structures-iii",
      "title": "Quiz: Struct Overlay Thanh ghi ATmega328P",
      "moduleId": "m7_struct",
      "brochureRef": "Brochure M6 & M11",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "GPIO"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Structures-iii.",
      "questions": [
        {
          "q": "Trên ATmega328P, 3 thanh ghi của mỗi cổng GPIO nằm liên tiếp theo thứ tự địa chỉ tăng dần nào?",
          "opts": [
            "PORTx, DDRx, PINx",
            "DDRx, PORTx, PINx",
            "PINx (+0), DDRx (+1), PORTx (+2)",
            "PINx, PORTx, DDRx"
          ],
          "ans": 2,
          "exp": "Datasheet ATmega328P: PINB=0x23, DDRB=0x24, PORTB=0x25 (tương tự cho Port C và D)."
        },
        {
          "q": "Khi phủ struct `avr_port_t` lên địa chỉ `0x23`, thiếu từ khóa `volatile` ở trường `PIN` sẽ gây ra gì?",
          "opts": [
            "Lỗi biên dịch",
            "Compiler có thể đọc PINB 1 lần rồi cache lại, không thấy thay đổi khi nhấn nút!",
            "Tăng tốc độ đọc nút",
            "Cháy chân GPIO"
          ],
          "ans": 1,
          "exp": "Luôn khai báo `volatile uint8_t` cho mọi thanh ghi phần cứng."
        },
        {
          "q": "Chế độ khung UART `8E1` có nghĩa là gì?",
          "opts": [
            "8 bit data, Even parity, 1 stop bit",
            "8 bit data, No parity, 1 stop bit",
            "8 byte data, 1 stop bit",
            "8 bit data, Odd parity, 1 stop bit"
          ],
          "ans": 0,
          "exp": "8 data bits, Even parity (UPM01=1, UPM00=0), 1 stop bit."
        },
        {
          "q": "Đổi hướng PB5 sang output phải sửa thanh ghi nào?",
          "opts": [
            "PINB",
            "PORTB",
            "DDRB"
          ],
          "ans": 2,
          "exp": "DDRB điều khiển hướng ở cổng B."
        }
      ],
      "remember": "Nắm vững thứ tự PIN/DDR/PORT trên AVR và khác biệt Padding giữa AVR 8-bit với ARM 32-bit.",
      "pitfall": "Luôn tuần tự hóa byte khi truyền gói tin giữa ATmega328P và PC!",
      "avrContext": "Xác nhận địa chỉ không gian dữ liệu của PINB, DDRB, PORTB. Phân biệt mô hình bố trí với thao tác ghi 1 vào PINB."
    },
    {
      "id": 83,
      "type": "task",
      "ewTitle": "Control Register Using Nested Bitfields",
      "title": "Thanh ghi điều khiển bằng Union + Bitfield (UCSR0B / TCCR0A)",
      "moduleId": "m8_union",
      "brochureRef": "Brochure M6 & M10 (Register Union)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "USART"
      ],
      "summary": "Dùng `union` chứa cả `uint8_t raw` (đọc/ghi nguyên byte 1 lần) và `struct` bitfield (bật/tắt từng bit `RXEN0`, `TXEN0`, `RXCIE0`).",
      "filename": "avr_union_reg.c",
      "lines": [
        {
          "code": "typedef union {\n  uint8_t raw;\n  struct { uint8_t tx8:1, rx8:1, ucsz2:1, txen:1, rxen:1, udrie:1, txcie:1, rxcie:1; } b;\n} ucsr0b_u;",
          "phase": "SETUP",
          "explain": "`raw` và `b` chia sẻ CHUNG 1 ô nhớ 1 byte! Sửa `u.b.txen = 1` tự động cập nhật bit 3 của `u.raw`.",
          "cards": [
            [
              "sizeof(ucsr0b_u)",
              "1 byte",
              "purple"
            ],
            [
              "Chia sẻ nhớ",
              "raw ↔ b",
              "blue"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "u.raw = 0x00",
            "val": 0,
            "prev": 0,
            "mask": 152,
            "labels": [
              "RXCIE",
              "TXCIE",
              "UDRIE",
              "RXEN",
              "TXEN",
              "UCSZ2",
              "RXB8",
              "TXB8"
            ],
            "note": "Union 1 byte khớp thanh ghi UCSR0B"
          }
        },
        {
          "code": "ucsr0b_u u = { .raw = 0 };\nu.b.rxen = 1; u.b.txen = 1; u.b.rxcie = 1;\nUCSR0B = u.raw; // 0x98",
          "phase": "OUTPUT",
          "explain": "Chuẩn bị sẵn tất cả bit trong biến tạm `u` trên CPU, rồi ghi NGUYÊN TỬ 1 lần `UCSR0B = 0x98` → bật RX, TX và ngắt nhận USART_RX_vect!",
          "cards": [
            [
              "u.raw",
              "0x98",
              "green"
            ],
            [
              "Ghi phần cứng",
              "Đúng 1 lần!",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "UCSR0B = 0x98",
            "val": 152,
            "prev": 0,
            "mask": 152,
            "labels": [
              "RXCIE",
              "TXCIE",
              "UDRIE",
              "RXEN",
              "TXEN",
              "UCSZ2",
              "RXB8",
              "TXB8"
            ],
            "note": "Ghi 1 lần duy nhất ra thanh ghi phần cứng"
          }
        }
      ],
      "remember": "Mẫu Union (raw + bitfield) trên biến cục bộ rồi ghi `REG = u.raw` tránh được nhiều lần Read-Modify-Write lên phần cứng.",
      "pitfall": "Luôn khởi tạo `u.raw = 0` trước để các bit dự phòng (reserved) không mang giá trị rác!",
      "tests": [
        "+ rxen=1, txen=1, rxcie=1 → UCSR0B=0x98"
      ],
      "problem": {
        "scenario": "Giải thích cách union minh họa cờ điều khiển bằng byte trong SRAM. Khi ghi UCSR0B thật, dùng mặt nạ theo datasheet.\n\nUnion cho phép nhìn cùng một vùng nhớ SRAM/thanh ghi dưới 2 góc nhìn (toàn bộ giá trị vs từng byte/bitfield) — cực kỳ đắc lực khi giải mã ADC 10-bit hoặc gửi `float` qua UART. Bài toán: Dùng `union` chứa cả `uint8_t raw` (đọc/ghi nguyên byte 1 lần) và `struct` bitfield (bật/tắt từng bit `RXEN0`, `TXEN0`, `RXCIE0`).",
        "prototype": "void union_reg_solve(void)",
        "workedExample": [
          "Bước 1: `raw` và `b` chia sẻ CHUNG 1 ô nhớ 1 byte! Sửa `u. (sizeof(ucsr0b_u)=1 byte, Chia sẻ nhớ=raw ↔ b)",
          "Bước 2: Chuẩn bị sẵn tất cả bit trong biến tạm `u` trên CPU, rồi ghi NGUYÊN TỬ 1 lần `UCSR0B = 0x98` → bật RX, TX và ngắt nhận USART_RX_vect!. (u.raw=0x98, Ghi phần cứng=Đúng 1 lần!)"
        ],
        "testRows": [
          [
            "Case 1",
            "rxen=1, txen=1, rxcie=1",
            "UCSR0B=0x98"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 083: Thanh ghi điều khiển bằng Union + Bitfield (UCSR0B / TCCR0A)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void union_reg_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef union {\n      uint8_t raw;\n      struct { uint8_t tx8:1, rx8:1, ucsz2:1, txen:1, rxen:1, udrie:1, txcie:1, rxcie:1; } b;\n    } ucsr0b_u;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Mẫu Union (raw + bitfield) trên biến cục bộ rồi ghi `REG = u.raw` tránh được nhiều lần Read-Modify-Write lên phần cứng.",
        "hint2": "Luôn khởi tạo `u.raw = 0` trước để các bit dự phòng (reserved) không mang giá trị rác!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "u.raw = 0x00",
          "val": 0,
          "prev": 0,
          "mask": 152,
          "labels": [
            "RXCIE",
            "TXCIE",
            "UDRIE",
            "RXEN",
            "TXEN",
            "UCSZ2",
            "RXB8",
            "TXB8"
          ],
          "note": "Union 1 byte khớp thanh ghi UCSR0B"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "UCSR0B = 0x98",
          "val": 152,
          "prev": 0,
          "mask": 152,
          "labels": [
            "RXCIE",
            "TXCIE",
            "UDRIE",
            "RXEN",
            "TXEN",
            "UCSZ2",
            "RXB8",
            "TXB8"
          ],
          "note": "Ghi 1 lần duy nhất ra thanh ghi phần cứng"
        }
      }
    },
    {
      "id": 84,
      "type": "task",
      "ewTitle": "Union Extract Bytes from a 32-bit Value",
      "title": "Tách 4 Byte từ biến 32-bit (Đếm xung Encoder / Timestamp) bằng Union",
      "moduleId": "m8_union",
      "brochureRef": "Brochure M6",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng `union { uint32_t u32; uint8_t b[4]; }` để quan sát cách ATmega328P (Little-Endian) lưu 4 byte trong SRAM.",
      "filename": "avr_union_u32.c",
      "lines": [
        {
          "code": "union { uint32_t u32; uint8_t b[4]; } v;\nv.u32 = 0x12345678UL;",
          "phase": "MEMORY",
          "explain": "ATmega328P là **Little-Endian**: byte thấp nhất (LSB = `0x78`) nằm ở địa chỉ thấp nhất `b[0]`, byte cao nhất (`0x12`) nằm ở `b[3]`!",
          "cards": [
            [
              "b[0] (LSB)",
              "0x78",
              "green"
            ],
            [
              "b[3] (MSB)",
              "0x12",
              "amber"
            ],
            [
              "Endianness",
              "Little-Endian",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Union 4 byte (Little-Endian)",
            "cells": [
              {
                "addr": "+0",
                "label": "b[0] (LSB)",
                "val": "0x78",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "+1",
                "label": "b[1]",
                "val": "0x56",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "+2",
                "label": "b[2]",
                "val": "0x34",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "+3",
                "label": "b[3] (MSB)",
                "val": "0x12",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Byte thấp nhất 0x78 nằm ở địa chỉ đầu tiên!"
          }
        }
      ],
      "remember": "AVR-GCC hỗ trợ hợp lệ type-punning qua Union (chuẩn C99).",
      "pitfall": "Khi truyền ra mạng/Modbus (Big-Endian), nhớ gửi ngược từ `b[3]` xuống `b[0]`!",
      "tests": [
        "+ 0x12345678 → b={0x78, 0x56, 0x34, 0x12}"
      ],
      "problem": {
        "scenario": "Chụp bộ đếm xung 32 bit vào SRAM rồi xem biểu diễn byte trên AVR. Quy định thứ tự gửi riêng nếu dùng USART0.\n\nUnion cho phép nhìn cùng một vùng nhớ SRAM/thanh ghi dưới 2 góc nhìn (toàn bộ giá trị vs từng byte/bitfield) — cực kỳ đắc lực khi giải mã ADC 10-bit hoặc gửi `float` qua UART. Bài toán: Dùng `union { uint32_t u32; uint8_t b[4]; }` để quan sát cách ATmega328P (Little-Endian) lưu 4 byte trong SRAM.",
        "prototype": "void union_u32_solve(void)",
        "workedExample": [
          "Bước 1: ATmega328P là **Little-Endian**: byte thấp nhất (LSB = `0x78`) nằm ở địa chỉ thấp nhất `b[0]`, byte cao nhất (`0x12`) nằm ở `b[3]`!. (b[0] (LSB)=0x78, b[3] (MSB)=0x12)"
        ],
        "testRows": [
          [
            "Case 1",
            "0x12345678",
            "b={0x78, 0x56, 0x34, 0x12}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 084: Tách 4 Byte từ biến 32-bit (Đếm xung Encoder / Timestamp) bằng Union\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void union_u32_solve(void)\n * ============================================================ */\n\nint main(void) {\n    union { uint32_t u32; uint8_t b[4]; } v;\n    v.u32 = 0x12345678UL;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "AVR-GCC hỗ trợ hợp lệ type-punning qua Union (chuẩn C99).",
        "hint2": "Khi truyền ra mạng/Modbus (Big-Endian), nhớ gửi ngược từ `b[3]` xuống `b[0]`!",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Union 4 byte (Little-Endian)",
          "cells": [
            {
              "addr": "+0",
              "label": "b[0] (LSB)",
              "val": "0x78",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "+1",
              "label": "b[1]",
              "val": "0x56",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+2",
              "label": "b[2]",
              "val": "0x34",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+3",
              "label": "b[3] (MSB)",
              "val": "0x12",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Byte thấp nhất 0x78 nằm ở địa chỉ đầu tiên!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: Union 4 byte (Little-Endian)",
          "cells": [
            {
              "addr": "+0",
              "label": "b[0] (LSB)",
              "val": "0x78",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "+1",
              "label": "b[1]",
              "val": "0x56",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+2",
              "label": "b[2]",
              "val": "0x34",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+3",
              "label": "b[3] (MSB)",
              "val": "0x12",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Byte thấp nhất 0x78 nằm ở địa chỉ đầu tiên!"
        }
      }
    },
    {
      "id": 85,
      "type": "task",
      "ewTitle": "Modify Bytes in a 32-bit Value Using Union",
      "title": "Sửa từng Byte riêng lẻ trong giá trị 32-bit (Cập nhật Địa chỉ/Màu RGBW)",
      "moduleId": "m8_union",
      "brochureRef": "Brochure M6",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Thay đổi riêng `b[2]` trong union 32-bit mà không cần viết mặt nạ dịch bit phức tạp.",
      "filename": "avr_union_mod32.c",
      "lines": [
        {
          "code": "v.u32 = 0x00112233UL;\nv.b[2] = 0xFF; // Kết quả: 0x00FF2233",
          "phase": "OUTPUT",
          "explain": "Ghi trực tiếp `0xFF` vào byte offset +2 làm `v.u32` lập tức đổi thành `0x00FF2233UL` chỉ trong 1 lệnh `STS` của AVR!",
          "cards": [
            [
              "v.u32 cũ",
              "0x00112233",
              "blue"
            ],
            [
              "v.u32 mới",
              "0x00FF2233",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Sửa trực tiếp b[2] = 0xFF",
            "cells": [
              {
                "addr": "+0",
                "label": "b[0]",
                "val": "0x33",
                "active": false,
                "tone": ""
              },
              {
                "addr": "+1",
                "label": "b[1]",
                "val": "0x22",
                "active": false,
                "tone": ""
              },
              {
                "addr": "+2",
                "label": "b[2] MỚI",
                "val": "0xFF",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "+3",
                "label": "b[3]",
                "val": "0x00",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "v.u32 = 0x00FF2233UL"
          }
        }
      ],
      "remember": "Sửa 1 byte trong `uint32_t` qua Union trên AVR nhanh hơn hẳn thao tác dịch 16-bit/32-bit.",
      "pitfall": "Nhớ rõ thứ tự Little-Endian: `b[0]` là bit 7..0, `b[1]` là 15..8, `b[2]` là 23..16, `b[3]` là 31..24.",
      "tests": [
        "+ 0x00112233, b[2]=0xFF → 0x00FF2233"
      ],
      "problem": {
        "scenario": "Thay đúng byte của từ cấu hình 32 bit trong SRAM. Kết quả kiểm dựa trên bố trí little-endian của AVR.\n\nKhảo sát bố trí byte của AVR bằng một union. Ghi 0x00112233 vào u32 rồi thay byte chỉ số 2. Kết quả mẫu phụ thuộc thứ tự byte của đích. Để mã truyền dữ liệu giữa các nền tảng, dùng dịch và mặt nạ thay thế.",
        "prototype": "void union_mod32_solve(void)",
        "workedExample": [
          "Bước 1: Ghi trực tiếp `0xFF` vào byte offset +2 làm `v. (v.u32 cũ=0x00112233, v.u32 mới=0x00FF2233)"
        ],
        "testRows": [
          [
            "Case 1",
            "0x00112233, b[2]=0xFF",
            "0x00FF2233"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 85 · ATmega328P */\ntypedef union { uint32_t u32; uint8_t b[4]; } word_t;\n\nint main(void) {\n    word_t v = { .u32 = 0x00112233UL };\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Sửa 1 byte trong `uint32_t` qua Union trên AVR nhanh hơn hẳn thao tác dịch 16-bit/32-bit.",
        "hint2": "Nhớ rõ thứ tự Little-Endian: `b[0]` là bit 7..0, `b[1]` là 15..8, `b[2]` là 23..16, `b[3]` là 31..24.",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Sửa trực tiếp b[2] = 0xFF",
          "cells": [
            {
              "addr": "+0",
              "label": "b[0]",
              "val": "0x33",
              "active": false,
              "tone": ""
            },
            {
              "addr": "+1",
              "label": "b[1]",
              "val": "0x22",
              "active": false,
              "tone": ""
            },
            {
              "addr": "+2",
              "label": "b[2] MỚI",
              "val": "0xFF",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "+3",
              "label": "b[3]",
              "val": "0x00",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "v.u32 = 0x00FF2233UL"
        },
        "targetViz": {
          "kind": "memory",
          "title": "SRAM: Sửa trực tiếp b[2] = 0xFF",
          "cells": [
            {
              "addr": "+0",
              "label": "b[0]",
              "val": "0x33",
              "active": false,
              "tone": ""
            },
            {
              "addr": "+1",
              "label": "b[1]",
              "val": "0x22",
              "active": false,
              "tone": ""
            },
            {
              "addr": "+2",
              "label": "b[2] MỚI",
              "val": "0xFF",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "+3",
              "label": "b[3]",
              "val": "0x00",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "v.u32 = 0x00FF2233UL"
        }
      }
    },
    {
      "id": 86,
      "type": "task",
      "ewTitle": "Packet Layout Using Union with Struct",
      "title": "Đóng gói Khung truyền thông bằng Union kết hợp Struct",
      "moduleId": "m8_union",
      "brochureRef": "Brochure M6 & M11",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "USART",
        "SRAM"
      ],
      "summary": "Kết hợp `struct` các trường gói tin với mảng `uint8_t raw[4]` để gửi toàn bộ gói tin qua vòng lặp `uart_putc(pkt.raw[i])`.",
      "filename": "avr_union_pkt.c",
      "lines": [
        {
          "code": "typedef union { uint8_t raw[4]; struct { uint8_t hdr, cmd; uint16_t val; } f; } frame_u;",
          "phase": "SETUP",
          "explain": "Trên ATmega328P (8-bit alignment), `struct f` chiếm đúng 1+1+2 = 4 byte, khớp 100% với `raw[4]`!",
          "cards": [
            [
              "sizeof",
              "4 byte",
              "purple"
            ],
            [
              "Truy cập",
              "f.cmd hoặc raw[i]",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Union frame_u (4 byte)",
            "cells": [
              {
                "addr": "+0",
                "label": "f.hdr",
                "val": "0xAA",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "+1",
                "label": "f.cmd",
                "val": "0x01",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "+2",
                "label": "val_L",
                "val": "0xE8",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "+3",
                "label": "val_H",
                "val": "0x03",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "f.val = 1000 (0x03E8) → raw = {AA,01,E8,03}"
          }
        },
        {
          "code": "for (uint8_t i = 0; i < 4; i++) uart_putc(pkt.raw[i]);",
          "phase": "OUTPUT",
          "explain": "Gửi lần lượt 4 byte của `pkt.raw[]` qua USART0 cực kỳ gọn gàng.",
          "cards": [
            [
              "Gửi UART",
              "AA 01 E8 03",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Đã phát 4 byte qua UDR0",
            "cells": [
              {
                "addr": "TX 0",
                "label": "raw[0]",
                "val": "0xAA",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "TX 1",
                "label": "raw[1]",
                "val": "0x01",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "TX 2",
                "label": "raw[2]",
                "val": "0xE8",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "TX 3",
                "label": "raw[3]",
                "val": "0x03",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Hoàn tất truyền khung"
          }
        }
      ],
      "remember": "Luôn gắn `__attribute__((packed))` cho struct bên trong union nếu code có thể chạy cả trên ARM/PC.",
      "pitfall": "Kiểm tra `_Static_assert(sizeof(frame_u) == 4, ...)` để chắc chắn không lệch kích thước.",
      "tests": [
        "+ hdr=0xAA, cmd=1, val=1000 → {AA,01,E8,03}"
      ],
      "problem": {
        "scenario": "Chuẩn bị khung chuyển qua USART0. Xác nhận byte nào sẽ đến trước và tránh dựa vào padding struct.\n\nUnion cho phép nhìn cùng một vùng nhớ SRAM/thanh ghi dưới 2 góc nhìn (toàn bộ giá trị vs từng byte/bitfield) — cực kỳ đắc lực khi giải mã ADC 10-bit hoặc gửi `float` qua UART. Bài toán: Kết hợp `struct` các trường gói tin với mảng `uint8_t raw[4]` để gửi toàn bộ gói tin qua vòng lặp `uart_putc(pkt.raw[i])`.",
        "prototype": "void union_pkt_solve(void)",
        "workedExample": [
          "Bước 1: Trên ATmega328P (8-bit alignment), `struct f` chiếm đúng 1+1+2 = 4 byte, khớp 100% với `raw[4]`!. (sizeof=4 byte, Truy cập=f.cmd hoặc raw[i])",
          "Bước 2: Gửi lần lượt 4 byte của `pkt. (Gửi UART=AA 01 E8 03)"
        ],
        "testRows": [
          [
            "Case 1",
            "hdr=0xAA, cmd=1, val=1000",
            "{AA,01,E8,03}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 086: Đóng gói Khung truyền thông bằng Union kết hợp Struct\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void union_pkt_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef union { uint8_t raw[4]; struct { uint8_t hdr, cmd; uint16_t val; } f; } frame_u;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn gắn `__attribute__((packed))` cho struct bên trong union nếu code có thể chạy cả trên ARM/PC.",
        "hint2": "Kiểm tra `_Static_assert(sizeof(frame_u) == 4, ...)` để chắc chắn không lệch kích thước.",
        "initViz": {
          "kind": "memory",
          "title": "Union frame_u (4 byte)",
          "cells": [
            {
              "addr": "+0",
              "label": "f.hdr",
              "val": "0xAA",
              "active": true,
              "tone": "purple"
            },
            {
              "addr": "+1",
              "label": "f.cmd",
              "val": "0x01",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+2",
              "label": "val_L",
              "val": "0xE8",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "+3",
              "label": "val_H",
              "val": "0x03",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "f.val = 1000 (0x03E8) → raw = {AA,01,E8,03}"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Đã phát 4 byte qua UDR0",
          "cells": [
            {
              "addr": "TX 0",
              "label": "raw[0]",
              "val": "0xAA",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "TX 1",
              "label": "raw[1]",
              "val": "0x01",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "TX 2",
              "label": "raw[2]",
              "val": "0xE8",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "TX 3",
              "label": "raw[3]",
              "val": "0x03",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Hoàn tất truyền khung"
        }
      }
    },
    {
      "id": 87,
      "type": "task",
      "ewTitle": "Decode ADC Result Using Union Bitfields",
      "title": "Giải mã thanh ghi ADC 10-bit (`ADCL` + `ADCH`) bằng Union",
      "moduleId": "m8_union",
      "brochureRef": "Brochure M6 & M11 (ADC)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "ADC"
      ],
      "summary": "Gom 2 thanh ghi 8-bit `ADCL` và `ADCH` vào `union { uint16_t val16; struct { uint8_t lo; uint8_t hi; }; }` để lấy ngay kết quả 10-bit mà không cần dịch bit!",
      "filename": "avr_union_adc.c",
      "lines": [
        {
          "code": "typedef union { uint16_t full; struct { uint8_t lo; uint8_t hi; } b; } adc_u;",
          "phase": "SETUP",
          "explain": "Vì ATmega328P là Little-Endian, `b.lo` trùng với byte thấp của `full`, `b.hi` trùng với byte cao của `full`!",
          "cards": [
            [
              "b.lo",
              "ADCL (bit 7..0)",
              "blue"
            ],
            [
              "b.hi",
              "ADCH (bit 9..8)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "adc_u (16-bit)",
            "val": 0,
            "prev": 0,
            "mask": 1023,
            "labels": [],
            "note": "Chuẩn bị đọc ADCL trước, ADCH sau"
          }
        },
        {
          "code": "adc_u res; res.b.lo = ADCL; res.b.hi = ADCH; // vd 0x02F4 = 756",
          "phase": "OUTPUT",
          "explain": "Đọc `ADCL` trước (`0xF4`), rồi `ADCH` (`0x02`). Giá trị `res.full` lập tức là `0x02F4` = 756 (3.69V @ 5V)!",
          "cards": [
            [
              "res.full",
              "756 (0x02F4)",
              "green"
            ],
            [
              "Điện áp",
              "~3.69 V",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 16,
            "reg": "res.full = 0x02F4 (756)",
            "val": 756,
            "prev": 0,
            "mask": 1023,
            "labels": [],
            "note": "Ghép ADCL+ADCH tức thì không tốn lệnh dịch!"
          }
        }
      ],
      "remember": "Thứ tự đọc `ADCL` trước `ADCH` là yêu cầu phần cứng bắt buộc của Datasheet ATmega328P.",
      "pitfall": "Trong chế độ canh trái (`ADLAR=1`), chỉ cần đọc mỗi `ADCH` nếu bạn chỉ cần độ phân giải 8-bit.",
      "tests": [
        "+ ADCL=0xF4, ADCH=0x02 → full=756"
      ],
      "problem": {
        "scenario": "Đọc ADCL trước ADCH khi lấy cả cặp ở ATmega328P. Mô hình ca kiểm dùng ADLAR bằng 0.\n\nUnion cho phép nhìn cùng một vùng nhớ SRAM/thanh ghi dưới 2 góc nhìn (toàn bộ giá trị vs từng byte/bitfield) — cực kỳ đắc lực khi giải mã ADC 10-bit hoặc gửi `float` qua UART. Bài toán: Gom 2 thanh ghi 8-bit `ADCL` và `ADCH` vào `union { uint16_t val16; struct { uint8_t lo; uint8_t hi; }; }` để lấy ngay kết quả 10-bit mà không cần dịch bit!",
        "prototype": "void union_adc_solve(void)",
        "workedExample": [
          "Bước 1: Vì ATmega328P là Little-Endian, `b. (b.lo=ADCL (bit 7..0), b.hi=ADCH (bit 9..8))",
          "Bước 2: Đọc `ADCL` trước (`0xF4`), rồi `ADCH` (`0x02`). (res.full=756 (0x02F4), Điện áp=~3.69 V)"
        ],
        "testRows": [
          [
            "Case 1",
            "ADCL=0xF4, ADCH=0x02",
            "full=756"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, ADC), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 087: Giải mã thanh ghi ADC 10-bit (`ADCL` + `ADCH`) bằng Union\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void union_adc_solve(void)\n * ============================================================ */\n\nint main(void) {\n    typedef union { uint16_t full; struct { uint8_t lo; uint8_t hi; } b; } adc_u;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Thứ tự đọc `ADCL` trước `ADCH` là yêu cầu phần cứng bắt buộc của Datasheet ATmega328P.",
        "hint2": "Trong chế độ canh trái (`ADLAR=1`), chỉ cần đọc mỗi `ADCH` nếu bạn chỉ cần độ phân giải 8-bit.",
        "initViz": {
          "kind": "bits",
          "width": 16,
          "reg": "adc_u (16-bit)",
          "val": 0,
          "prev": 0,
          "mask": 1023,
          "labels": [],
          "note": "Chuẩn bị đọc ADCL trước, ADCH sau"
        },
        "targetViz": {
          "kind": "bits",
          "width": 16,
          "reg": "res.full = 0x02F4 (756)",
          "val": 756,
          "prev": 0,
          "mask": 1023,
          "labels": [],
          "note": "Ghép ADCL+ADCH tức thì không tốn lệnh dịch!"
        }
      }
    },
    {
      "id": 88,
      "type": "task",
      "ewTitle": "Transmit Float as Byte Stream Using Union",
      "title": "Truyền số thực IEEE-754 `float` (Nhiệt độ/PID) qua UART bằng Union",
      "moduleId": "m8_union",
      "brochureRef": "Brochure M6 & M11 (UART)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "USART",
        "SRAM"
      ],
      "summary": "Tách biến `float` 4 byte (vd `25.5f` = `0x41CC0000`) thành mảng 4 byte `uint8_t b[4]` để gửi chính xác lên Python/PC qua USART0 mà không cần `dtostrf()` nặng Flash!",
      "filename": "avr_union_float.c",
      "lines": [
        {
          "code": "union { float f; uint8_t b[4]; } tx;\ntx.f = 25.5f;",
          "phase": "SETUP",
          "explain": "Chuẩn IEEE-754 của `25.5f` là `0x41CC0000` (Sign=0, Exp=131, Mantissa). Trên ATmega328P (Little-Endian), `b = {0x00, 0x00, 0xCC, 0x41}`.",
          "cards": [
            [
              "tx.f",
              "25.5f",
              "blue"
            ],
            [
              "IEEE-754",
              "0x41CC0000",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "IEEE-754 float 25.5f trong SRAM",
            "cells": [
              {
                "addr": "+0",
                "label": "b[0]",
                "val": "0x00",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "+1",
                "label": "b[1]",
                "val": "0x00",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "+2",
                "label": "b[2]",
                "val": "0xCC",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "+3",
                "label": "b[3]",
                "val": "0x41",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Truyền 4 byte nhị phân nhanh gấp 10x truyền chuỗi!"
          }
        },
        {
          "code": "for(uint8_t i=0; i<4; i++) uart_putc(tx.b[i]);",
          "phase": "OUTPUT",
          "explain": "Phía PC (Python `struct.unpack('<f', data)`) khôi phục chính xác `25.5` mà ATmega328P không tốn ~1.8 KB Flash cho thư viện in float!",
          "cards": [
            [
              "Tiết kiệm Flash",
              "~1.8 KB",
              "green"
            ],
            [
              "Python",
              "struct.unpack('<f')",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "4 byte gửi qua USART0",
            "cells": [
              {
                "addr": "0",
                "label": "TX0",
                "val": "0x00",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "TX1",
                "val": "0x00",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "TX2",
                "val": "0xCC",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "TX3",
                "val": "0x41",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Truyền dữ liệu Telemetry siêu nhẹ"
          }
        }
      ],
      "remember": "Trên avr-gcc, cả `float` và `double` đều rộng **32-bit** (4 byte, chuẩn IEEE-754)!",
      "pitfall": "Hạn chế tính toán `float` trong ISR vì ATmega328P không có FPU (phải giả lập bằng phần mềm rất chậm).",
      "tests": [
        "+ 25.5f → {0x00, 0x00, 0xCC, 0x41}"
      ],
      "problem": {
        "scenario": "Mã hóa nhiệt độ sang 4 byte để gửi USART0. Bên nhận phải thống nhất định dạng float và thứ tự byte.\n\nUnion cho phép nhìn cùng một vùng nhớ SRAM/thanh ghi dưới 2 góc nhìn (toàn bộ giá trị vs từng byte/bitfield) — cực kỳ đắc lực khi giải mã ADC 10-bit hoặc gửi `float` qua UART. Bài toán: Tách biến `float` 4 byte (vd `25.5f` = `0x41CC0000`) thành mảng 4 byte `uint8_t b[4]` để gửi chính xác lên Python/PC qua USART0 mà không cần `dtostrf()` nặng Flash!",
        "prototype": "void union_float_solve(void)",
        "workedExample": [
          "Bước 1: Chuẩn IEEE-754 của `25. (tx.f=25.5f, IEEE-754=0x41CC0000)",
          "Bước 2: Phía PC (Python `struct. (Tiết kiệm Flash=~1.8 KB, Python=struct.unpack('<f'))"
        ],
        "testRows": [
          [
            "Case 1",
            "25.5f",
            "{0x00, 0x00, 0xCC, 0x41}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 088: Truyền số thực IEEE-754 `float` (Nhiệt độ/PID) qua UART bằng Union\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void union_float_solve(void)\n * ============================================================ */\n\nint main(void) {\n    union { float f; uint8_t b[4]; } tx;\n    tx.f = 25.5f;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trên avr-gcc, cả `float` và `double` đều rộng **32-bit** (4 byte, chuẩn IEEE-754)!",
        "hint2": "Hạn chế tính toán `float` trong ISR vì ATmega328P không có FPU (phải giả lập bằng phần mềm rất chậm).",
        "initViz": {
          "kind": "memory",
          "title": "IEEE-754 float 25.5f trong SRAM",
          "cells": [
            {
              "addr": "+0",
              "label": "b[0]",
              "val": "0x00",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+1",
              "label": "b[1]",
              "val": "0x00",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "+2",
              "label": "b[2]",
              "val": "0xCC",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "+3",
              "label": "b[3]",
              "val": "0x41",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Truyền 4 byte nhị phân nhanh gấp 10x truyền chuỗi!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "4 byte gửi qua USART0",
          "cells": [
            {
              "addr": "0",
              "label": "TX0",
              "val": "0x00",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "TX1",
              "val": "0x00",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "TX2",
              "val": "0xCC",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "TX3",
              "val": "0x41",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Truyền dữ liệu Telemetry siêu nhẹ"
        }
      }
    },
    {
      "id": 89,
      "type": "quiz",
      "ewTitle": "Unions-I",
      "title": "Quiz: Bản chất bộ nhớ Union & Little-Endian AVR",
      "moduleId": "m8_union",
      "brochureRef": "Brochure M6 & M11",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "ADC"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Unions-I.",
      "questions": [
        {
          "q": "Kích thước của `union { uint8_t a; uint16_t b; uint32_t c; }` là bao nhiêu byte?",
          "opts": [
            "7 byte",
            "4 byte (bằng thành viên lớn nhất)",
            "1 byte",
            "8 byte"
          ],
          "ans": 1,
          "exp": "Tất cả thành viên Union dùng chung vùng nhớ, nên kích thước bằng thành viên lớn nhất (4 byte)."
        },
        {
          "q": "Với `union { uint16_t w; uint8_t b[2]; } u; u.w = 0x1234;` trên ATmega328P, giá trị `u.b[0]` là?",
          "opts": [
            "0x12",
            "0x34",
            "0x00",
            "0x43"
          ],
          "ans": 1,
          "exp": "ATmega328P là Little-Endian nên byte thấp `0x34` nằm ở địa chỉ thấp `b[0]`."
        },
        {
          "q": "Trên avr-gcc (ATmega328P), kích thước của kiểu `double` là bao nhiêu byte?",
          "opts": [
            "8 byte",
            "4 byte (giống float)",
            "2 byte",
            "16 byte"
          ],
          "ans": 1,
          "exp": "Mặc định trên AVR 8-bit, `double` được ánh xạ thành 32-bit IEEE-754 để tiết kiệm Flash và SRAM."
        },
        {
          "q": "AVR little-endian lưu uint32_t 0x11223344. Byte tại địa chỉ thấp nhất là gì?",
          "opts": [
            "0x44",
            "0x11",
            "0x22"
          ],
          "ans": 0,
          "exp": "Byte ít ý nghĩa nhất lưu ở địa chỉ thấp nhất."
        }
      ],
      "remember": "Union dùng chung 1 vùng nhớ và tuân theo thứ tự Little-Endian của AVR.",
      "pitfall": "Không quên khởi tạo `.raw = 0` trước khi gán từng bitfield!",
      "avrContext": "Quan sát vùng nhớ chung của union trong SRAM. So thứ tự byte của AVR với thứ tự giao thức yêu cầu."
    },
    {
      "id": 90,
      "type": "quiz",
      "ewTitle": "Unions-II",
      "title": "Quiz: Union Overlay Thanh ghi & Truyền Byte Stream",
      "moduleId": "m8_union",
      "brochureRef": "Brochure M6 & M11",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "ADC"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Unions-II.",
      "questions": [
        {
          "q": "Lợi ích của việc gán bit vào biến tạm `ucsr0b_u u` rồi mới ghi `UCSR0B = u.raw;` là gì?",
          "opts": [
            "Chỉ thực hiện 1 lần ghi thanh ghi phần cứng thay vì nhiều lần Read-Modify-Write",
            "Chạy trên STM32 tốt hơn",
            "Tăng tốc độ baud",
            "Giảm kích thước SRAM"
          ],
          "ans": 0,
          "exp": "Tránh tạo trạng thái trung gian không mong muốn trên phần cứng ngoại vi."
        },
        {
          "q": "Để truyền `float` 4 byte từ ATmega328P lên PC bằng Python `struct.unpack`, format string đúng là?",
          "opts": [
            "'>f' (Big-Endian)",
            "'<f' (Little-Endian)",
            "'<d' (64-bit)",
            "'<i'"
          ],
          "ans": 1,
          "exp": "AVR lưu Little-Endian (`<`) và 32-bit float (`f`)."
        },
        {
          "q": "Khi dùng Union để tách byte từ `ADCL`/`ADCH`, điều gì xảy ra nếu ta đọc `ADCH` trước `ADCL`?",
          "opts": [
            "Chạy bình thường",
            "Dữ liệu 10-bit có thể bị rách (corrupt) do không khóa thanh ghi cập nhật!",
            "Chip bị Reset",
            "ADC tự tắt"
          ],
          "ans": 1,
          "exp": "Datasheet ATmega328P bắt buộc đọc ADCL trước để khóa ADCH."
        },
        {
          "q": "Khi lấy cả cặp thanh ghi kết quả ADC, đọc theo thứ tự nào?",
          "opts": [
            "ADCH rồi ADCL",
            "ADCL rồi ADCH",
            "ADMUX hai lần"
          ],
          "ans": 1,
          "exp": "Đọc ADCL giữ cặp kết quả ổn định cho đến khi đọc ADCH."
        }
      ],
      "remember": "Union dùng chung 1 vùng nhớ và tuân theo thứ tự Little-Endian của AVR.",
      "pitfall": "Không quên khởi tạo `.raw = 0` trước khi gán từng bitfield!",
      "avrContext": "Tách cách giải mã byte ADC khỏi việc gửi stream UART. Kiểm thứ tự đọc thanh ghi và cách ghép trường."
    },
    {
      "id": 91,
      "type": "task",
      "ewTitle": "Circular Buffer Insert",
      "title": "Ghi byte vào Bộ đệm vòng (UART RX ISR — Thay thế `malloc`!)",
      "moduleId": "m9_ringbuf",
      "brochureRef": "Brochure M7 (Static Buffer) & M11 (ISR)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART",
        "INT"
      ],
      "summary": "Thay vì dùng `malloc`/`free` (gây phân mảnh chết 2 KB SRAM!), ta dùng Ring Buffer tĩnh 16 byte với `volatile uint8_t head, tail` cho ngắt nhận `ISR(USART_RX_vect)`.",
      "filename": "avr_ringbuf_push.c",
      "lines": [
        {
          "code": "#define RB_MASK 15U // Kích thước 16 (2^4)\nvolatile uint8_t rb[16], head = 0, tail = 0;",
          "phase": "SETUP",
          "explain": "Chọn kích thước 16 byte (lũy thừa 2) để bọc vòng bằng `& 15U` chỉ tốn 1 chu kỳ trong ISR! Khai báo `volatile` vì `head` sửa trong ISR, `tail` sửa trong `main()`.",
          "cards": [
            [
              "Dung lượng",
              "15 byte hữu ích",
              "purple"
            ],
            [
              "Bọc vòng",
              "& 15U (O(1))",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Ring Buffer (head=0, tail=0 → Rỗng)",
            "cells": [
              {
                "addr": "0",
                "label": "head/tail",
                "val": "--",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "rb[1]",
                "val": "--",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "rb[2]",
                "val": "--",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "rb[3]",
                "val": "--",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "head",
                "target": "0",
                "val": "0"
              },
              {
                "name": "tail",
                "target": "0",
                "val": "0"
              }
            ],
            "note": "head == tail nghĩa là buffer đang rỗng",
            "ring": {
              "size": 8,
              "note": "Bộ đệm vòng (Circular Ring Buffer)"
            }
          }
        },
        {
          "code": "uint8_t next = (head + 1U) & RB_MASK;\nif (next != tail) { rb[head] = UDR0; head = next; }",
          "phase": "OUTPUT",
          "explain": "Kiểm tra đầy (`next == tail`): nếu chưa đầy, ghi byte từ `UDR0` (vd `'A'`) vào `rb[0]` rồi cập nhật `head = 1`. Không cần khóa mutex cho 1-Producer/1-Consumer 8-bit trên AVR!",
          "cards": [
            [
              "rb[0]",
              "'A' (0x41)",
              "green"
            ],
            [
              "head mới",
              "1",
              "green"
            ],
            [
              "Lock-free",
              "Atomic 8-bit!",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Sau khi ISR nhận 'A'",
            "cells": [
              {
                "addr": "0",
                "label": "tail=0",
                "val": "'A'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "head=1",
                "val": "--",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "2",
                "label": "rb[2]",
                "val": "--",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "rb[3]",
                "val": "--",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "tail",
                "target": "0",
                "val": "0"
              },
              {
                "name": "head",
                "target": "1",
                "val": "1"
              }
            ],
            "note": "Ghi dữ liệu vào rb[head] trước khi tăng head!",
            "ring": {
              "size": 8,
              "note": "Bộ đệm vòng (Circular Ring Buffer)"
            }
          }
        }
      ],
      "remember": "Trên ATmega328P 8-bit, đọc/ghi `uint8_t head` và `tail` là nguyên tử tự nhiên (1 lệnh `LDS`/`STS`), tạo nên Ring Buffer Lock-Free tuyệt vời!",
      "pitfall": "Luôn ghi `rb[head] = data` TRƯỚC khi gán `head = next`, nếu không `main()` có thể đọc phải byte chưa ghi xong!",
      "tests": [
        "+ head=0, tail=0, push 'A' → rb[0]='A', head=1",
        "- Khi (head+1)&15 == tail → Buffer đầy, bỏ qua byte mới (hoặc bật cờ overflow)"
      ],
      "problem": {
        "scenario": "USART_RX_vect nhận một byte từ UDR0. Ghi vào ô head rồi cập nhật head theo quy ước đầy/rỗng của đề.\n\nKhi ATmega328P nhận chuỗi lệnh dài từ máy tính qua UART (115200 bps), ngắt `ISR(USART_RX_vect)` xảy ra liên tục trong khi `main()` đang bận tính PID động cơ. Vì ATmega328P chỉ có 2 KB SRAM (không được dùng `malloc`), hãy viết hàm `rb_push(uint8_t byte)` đẩy dữ liệu vào bộ đệm vòng tĩnh 16 byte (`RB_MASK = 15`), dùng `volatile uint8_t head, tail` và trả về `0` nếu bộ đệm đã đầy (tránh ghi đè dữ liệu chưa đọc).",
        "prototype": "uint8_t rb_push(uint8_t data)",
        "workedExample": [
          "Bước 1: Chọn kích thước 16 byte (lũy thừa 2) để bọc vòng bằng `& 15U` chỉ tốn 1 chu kỳ trong ISR! Khai báo `volatile` vì `head` sửa trong ISR, `tail` sửa trong `main()`. (Dung lượng=15 byte hữu ích, Bọc vòng=& 15U (O(1)))",
          "Bước 2: Kiểm tra đầy (`next == tail`): nếu chưa đầy, ghi byte từ `UDR0` (vd `'A'`) vào `rb[0]` rồi cập nhật `head = 1`. (rb[0]='A' (0x41), head mới=1)"
        ],
        "testRows": [
          [
            "Case 1 (Đẩy 'A')",
            "head=0, tail=0, data='A'(0x41)",
            "rb[0]='A', head=1, return=1"
          ],
          [
            "Case 2 (Bọc vòng)",
            "head=15, tail=2, data='Z'",
            "rb[15]='Z', head=0, return=1"
          ],
          [
            "Case 3 (Đầy)",
            "head=15, tail=0, data='X'",
            "Không ghi đè, head vẫn=15, return=0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, USART, INT), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở Watch 1 theo dõi `head`, `tail`, `rb` và mở Memory 1 tại địa chỉ `&rb[0]` để thấy từng byte được ghi tuần tự rồi bọc vòng về 0.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 091: Ghi byte vào Bộ đệm vòng (UART RX ISR — Thay thế `malloc`!)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: uint8_t rb_push(uint8_t data)\n * ============================================================ */\n\nuint8_t rb_push(uint8_t data) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    volatile uint8_t ok1 = rb_push('A');\n    volatile uint8_t ok2 = rb_push('T');\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trên ATmega328P 8-bit, đọc/ghi `uint8_t head` và `tail` là nguyên tử tự nhiên (1 lệnh `LDS`/`STS`), tạo nên Ring Buffer Lock-Free tuyệt vời!",
        "hint2": "Luôn ghi `rb[head] = data` TRƯỚC khi gán `head = next`, nếu không `main()` có thể đọc phải byte chưa ghi xong!",
        "initViz": {
          "kind": "memory",
          "title": "Ring Buffer (head=0, tail=0 → Rỗng)",
          "cells": [
            {
              "addr": "0",
              "label": "head/tail",
              "val": "--",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "1",
              "label": "rb[1]",
              "val": "--",
              "active": false,
              "tone": ""
            },
            {
              "addr": "2",
              "label": "rb[2]",
              "val": "--",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "rb[3]",
              "val": "--",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "head",
              "target": "0",
              "val": "0"
            },
            {
              "name": "tail",
              "target": "0",
              "val": "0"
            }
          ],
          "note": "head == tail nghĩa là buffer đang rỗng",
          "ring": {
            "size": 8,
            "note": "Bộ đệm vòng (Circular Ring Buffer)"
          }
        },
        "targetViz": {
          "kind": "memory",
          "title": "Sau khi ISR nhận 'A'",
          "cells": [
            {
              "addr": "0",
              "label": "tail=0",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "head=1",
              "val": "--",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "2",
              "label": "rb[2]",
              "val": "--",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "rb[3]",
              "val": "--",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "tail",
              "target": "0",
              "val": "0"
            },
            {
              "name": "head",
              "target": "1",
              "val": "1"
            }
          ],
          "note": "Ghi dữ liệu vào rb[head] trước khi tăng head!",
          "ring": {
            "size": 8,
            "note": "Bộ đệm vòng (Circular Ring Buffer)"
          }
        }
      }
    },
    {
      "id": 92,
      "type": "task",
      "ewTitle": "Circular Buffer Read",
      "title": "Đọc byte từ Bộ đệm vòng trong vòng lặp `main()`",
      "moduleId": "m9_ringbuf",
      "brochureRef": "Brochure M7 & M11",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART"
      ],
      "summary": "Kiểm tra `head != tail` và lấy byte cũ nhất ra theo nguyên tắc FIFO (First-In-First-Out).",
      "filename": "avr_ringbuf_pop.c",
      "lines": [
        {
          "code": "if (head == tail) return 0; // Rỗng",
          "phase": "LOGIC",
          "explain": "Nếu `head == tail` nghĩa là chưa có dữ liệu mới từ UART.",
          "cards": [
            [
              "head / tail",
              "2 / 0",
              "blue"
            ],
            [
              "Có sẵn",
              "2 byte",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Ring Buffer có 2 byte: 'O', 'K'",
            "cells": [
              {
                "addr": "0",
                "label": "tail=0",
                "val": "'O'",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "1",
                "label": "rb[1]",
                "val": "'K'",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "head=2",
                "val": "--",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "rb[3]",
                "val": "--",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "tail",
                "target": "0",
                "val": "0"
              },
              {
                "name": "head",
                "target": "2",
                "val": "2"
              }
            ],
            "note": "Chuẩn bị lấy 'O' tại tail=0",
            "ring": {
              "size": 8,
              "note": "Bộ đệm vòng (Circular Ring Buffer)"
            }
          }
        },
        {
          "code": "*out = rb[tail];\ntail = (tail + 1U) & RB_MASK; return 1;",
          "phase": "OUTPUT",
          "explain": "Đọc `rb[0] = 'O'`, sau đó tiến `tail` sang 1. Dữ liệu còn lại trong buffer: `'K'`.",
          "cards": [
            [
              "*out",
              "'O'",
              "green"
            ],
            [
              "tail mới",
              "1",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Sau khi đọc 'O' (tail=1)",
            "cells": [
              {
                "addr": "0",
                "label": "đã đọc",
                "val": "'O'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "tail=1",
                "val": "'K'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "head=2",
                "val": "--",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "3",
                "label": "rb[3]",
                "val": "--",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "tail",
                "target": "1",
                "val": "1"
              },
              {
                "name": "head",
                "target": "2",
                "val": "2"
              }
            ],
            "note": "FIFO hoạt động chính xác!",
            "ring": {
              "size": 8,
              "note": "Bộ đệm vòng (Circular Ring Buffer)"
            }
          }
        }
      ],
      "remember": "Số byte hiện có trong buffer = `(head - tail) & RB_MASK`.",
      "pitfall": "Không bao giờ cập nhật `tail` trước khi đọc xong `rb[tail]`!",
      "tests": [
        "+ rb={'O','K'}, pop → 'O', tail=1"
      ],
      "problem": {
        "scenario": "Vòng lặp main lấy byte cũ nhất từ FIFO UART. Kiểm rỗng, đọc ô tail rồi tăng tail.\n\nBộ đệm vòng tĩnh giúp xác định trước chi phí RAM và chính sách khi đầy trên AVR. Yêu cầu thực tế: Kiểm tra `head != tail` và lấy byte cũ nhất ra theo nguyên tắc FIFO (First-In-First-Out).",
        "prototype": "void ringbuf_pop_solve(void)",
        "workedExample": [
          "Bước 1: Nếu `head == tail` nghĩa là chưa có dữ liệu mới từ UART. (head / tail=2 / 0, Có sẵn=2 byte)",
          "Bước 2: Đọc `rb[0] = 'O'`, sau đó tiến `tail` sang 1. (*out='O', tail mới=1)"
        ],
        "testRows": [
          [
            "Case 1",
            "rb={'O','K'}, pop",
            "'O', tail=1"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 92 · ATmega328P */\nint main(void) {\n    uint8_t rb[16] = {'O', 'K'};\n    uint8_t head = 2, tail = 0;\n    volatile uint8_t out = 0;\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Số byte hiện có trong buffer = `(head - tail) & RB_MASK`.",
        "hint2": "Không bao giờ cập nhật `tail` trước khi đọc xong `rb[tail]`!",
        "initViz": {
          "kind": "memory",
          "title": "Ring Buffer có 2 byte: 'O', 'K'",
          "cells": [
            {
              "addr": "0",
              "label": "tail=0",
              "val": "'O'",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "1",
              "label": "rb[1]",
              "val": "'K'",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "head=2",
              "val": "--",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "rb[3]",
              "val": "--",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "tail",
              "target": "0",
              "val": "0"
            },
            {
              "name": "head",
              "target": "2",
              "val": "2"
            }
          ],
          "note": "Chuẩn bị lấy 'O' tại tail=0",
          "ring": {
            "size": 8,
            "note": "Bộ đệm vòng (Circular Ring Buffer)"
          }
        },
        "targetViz": {
          "kind": "memory",
          "title": "Sau khi đọc 'O' (tail=1)",
          "cells": [
            {
              "addr": "0",
              "label": "đã đọc",
              "val": "'O'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "tail=1",
              "val": "'K'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "head=2",
              "val": "--",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "3",
              "label": "rb[3]",
              "val": "--",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "tail",
              "target": "1",
              "val": "1"
            },
            {
              "name": "head",
              "target": "2",
              "val": "2"
            }
          ],
          "note": "FIFO hoạt động chính xác!",
          "ring": {
            "size": 8,
            "note": "Bộ đệm vòng (Circular Ring Buffer)"
          }
        }
      }
    },
    {
      "id": 93,
      "type": "task",
      "ewTitle": "Peek N Bytes from Circular Buffer",
      "title": "Xem trước N byte (Peek) mà không xóa khỏi Bộ đệm vòng",
      "moduleId": "m9_ringbuf",
      "brochureRef": "Brochure M7 & M11",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Kiểm tra xem khung lệnh có bắt đầu bằng tiền tố `\"AT\"` hay header `0xAA` hay không mà vẫn giữ nguyên `tail`.",
      "filename": "avr_ringbuf_peek.c",
      "lines": [
        {
          "code": "uint8_t avail = (head - tail) & RB_MASK;",
          "phase": "LOGIC",
          "explain": "Nhờ kích thước lũy thừa 2 (16), công thức `(head - tail) & 15` luôn ra đúng số byte đang chờ ngay cả khi `head < tail` (đã bọc vòng)!",
          "cards": [
            [
              "avail",
              "3 byte",
              "blue"
            ],
            [
              "Cần peek",
              "2 byte",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Peek 2 byte (tail không đổi!)",
            "cells": [
              {
                "addr": "14",
                "label": "tail=14",
                "val": "'A'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "15",
                "label": "rb[15]",
                "val": "'T'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0",
                "label": "rb[0]",
                "val": "'\\r'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "head=1",
                "val": "--",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "tail",
                "target": "14",
                "val": "14"
              },
              {
                "name": "head",
                "target": "1",
                "val": "1"
              }
            ],
            "note": "Bọc vòng từ index 15 sang 0!",
            "ring": {
              "size": 8,
              "note": "Bộ đệm vòng (Circular Ring Buffer)"
            }
          }
        },
        {
          "code": "if (avail >= 2) {\n  out[0] = rb[tail]; out[1] = rb[(tail + 1U) & RB_MASK];\n}",
          "phase": "OUTPUT",
          "explain": "Lấy được `'A'` (rb[14]) và `'T'` (rb[15]) trong khi `tail` vẫn đứng nguyên ở 14!",
          "cards": [
            [
              "out",
              "\"AT\"",
              "green"
            ],
            [
              "tail",
              "Vẫn = 14",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả Peek: \"AT\"",
            "cells": [
              {
                "addr": "out[0]",
                "label": "Peek 0",
                "val": "'A'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "out[1]",
                "label": "Peek 1",
                "val": "'T'",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Không làm mất dữ liệu trong Ring Buffer",
            "ring": {
              "size": 8,
              "note": "Bộ đệm vòng (Circular Ring Buffer)"
            }
          }
        }
      ],
      "remember": "Phép `peek()` cực kỳ hữu ích cho bộ phân tích giao thức (Protocol Parser) khi cần kiểm tra Header + Length trước khi rút toàn bộ gói tin.",
      "pitfall": "Kiểm tra `avail >= n` trước khi peek!",
      "tests": [
        "+ tail=14, head=1 → avail=(1-14)&15=3 → peek(2)='AT'"
      ],
      "problem": {
        "scenario": "Muốn xem khung có tiền tố hợp lệ, đọc qua chỉ số modulo mà vẫn giữ tail. Kiểm ca dữ liệu quấn qua cuối mảng.\n\nBộ đệm vòng tĩnh giúp xác định trước chi phí RAM và chính sách khi đầy trên AVR. Yêu cầu thực tế: Kiểm tra xem khung lệnh có bắt đầu bằng tiền tố `\"AT\"` hay header `0xAA` hay không mà vẫn giữ nguyên `tail`.",
        "prototype": "void ringbuf_peek_solve(void)",
        "workedExample": [
          "Bước 1: Nhờ kích thước lũy thừa 2 (16), công thức `(head - tail) & 15` luôn ra đúng số byte đang chờ ngay cả khi `head < tail` (đã bọc vòng)!. (avail=3 byte, Cần peek=2 byte)",
          "Bước 2: Lấy được `'A'` (rb[14]) và `'T'` (rb[15]) trong khi `tail` vẫn đứng nguyên ở 14!. (out=\"AT\", tail=Vẫn = 14)"
        ],
        "testRows": [
          [
            "Case 1",
            "tail=14, head=1",
            "avail=(1-14)&15=3 → peek(2)='AT'"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 93 · ATmega328P */\nint main(void) {\n    uint8_t rb[16] = {[14] = 'A', [15] = 'T', [0] = '\\n'};\n    uint8_t head = 1, tail = 14;\n    const uint8_t mask = 15;\n    volatile uint8_t out[2] = {0};\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Phép `peek()` cực kỳ hữu ích cho bộ phân tích giao thức (Protocol Parser) khi cần kiểm tra Header + Length trước khi rút toàn bộ gói tin.",
        "hint2": "Kiểm tra `avail >= n` trước khi peek!",
        "initViz": {
          "kind": "memory",
          "title": "Peek 2 byte (tail không đổi!)",
          "cells": [
            {
              "addr": "14",
              "label": "tail=14",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "15",
              "label": "rb[15]",
              "val": "'T'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0",
              "label": "rb[0]",
              "val": "'\\r'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "head=1",
              "val": "--",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "tail",
              "target": "14",
              "val": "14"
            },
            {
              "name": "head",
              "target": "1",
              "val": "1"
            }
          ],
          "note": "Bọc vòng từ index 15 sang 0!",
          "ring": {
            "size": 8,
            "note": "Bộ đệm vòng (Circular Ring Buffer)"
          }
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả Peek: \"AT\"",
          "cells": [
            {
              "addr": "out[0]",
              "label": "Peek 0",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "out[1]",
              "label": "Peek 1",
              "val": "'T'",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Không làm mất dữ liệu trong Ring Buffer",
          "ring": {
            "size": 8,
            "note": "Bộ đệm vòng (Circular Ring Buffer)"
          }
        }
      }
    },
    {
      "id": 94,
      "type": "task",
      "ewTitle": "Implement Stack Using Array with Push and Pop Operations",
      "title": "Cài đặt Ngăn xếp (LIFO Stack) & Hiểu Hardware Stack `SP` của ATmega328P",
      "moduleId": "m9_ringbuf",
      "brochureRef": "Brochure M5 & M11 (Stack & Memory)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Cài đặt Stack tĩnh `push()`/`pop()` kiểm tra Overflow/Underflow và liên hệ với thanh ghi Stack Pointer (`SPL`/`SPH`) mọc ngược từ `0x08FF` trên ATmega328P.",
      "filename": "avr_stack.c",
      "lines": [
        {
          "code": "uint8_t stk[8]; uint8_t top = 0;",
          "phase": "SETUP",
          "explain": "Stack phần mềm tăng dần (`top: 0 → 8`), ngược lại Hardware Stack của ATmega328P mọc ngược từ đáy SRAM `RAMEND = 0x08FF` xuống `0x0100`!",
          "cards": [
            [
              "top",
              "0 (Rỗng)",
              "blue"
            ],
            [
              "AVR RAMEND",
              "0x08FF",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Software Stack (LIFO)",
            "cells": [
              {
                "addr": "0",
                "label": "stk[0]",
                "val": "--",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "stk[1]",
                "val": "--",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "stk[2]",
                "val": "--",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "top",
                "target": "0",
                "val": "0"
              }
            ],
            "note": "top = 0: ngăn xếp rỗng"
          }
        },
        {
          "code": "if (top < 8) stk[top++] = 0x42; // Push\nif (top < 8) stk[top++] = 0x99; // Push",
          "phase": "EXECUTION",
          "explain": "Đẩy 0x42 vào stk[0], đẩy 0x99 vào stk[1]. `top` tăng lên 2.",
          "cards": [
            [
              "stk[0..1]",
              "[0x42, 0x99]",
              "amber"
            ],
            [
              "top",
              "2",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Sau 2 lần Push",
            "cells": [
              {
                "addr": "0",
                "label": "stk[0]",
                "val": "0x42",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "TOP-1",
                "val": "0x99",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "2",
                "label": "top=2",
                "val": "--",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "top",
                "target": "2",
                "val": "2"
              }
            ],
            "note": "0x99 vào sau sẽ ra trước (LIFO)"
          }
        },
        {
          "code": "uint8_t val = (top > 0) ? stk[--top] : 0; // Pop -> 0x99",
          "phase": "OUTPUT",
          "explain": "Giảm `top` về 1 rồi lấy `stk[1] = 0x99` ra trước!",
          "cards": [
            [
              "Popped",
              "0x99",
              "green"
            ],
            [
              "top mới",
              "1",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Sau Pop: lấy ra 0x99",
            "cells": [
              {
                "addr": "0",
                "label": "stk[0]",
                "val": "0x42",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "top=1",
                "val": "(0x99)",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "top",
                "target": "1",
                "val": "1"
              }
            ],
            "note": "LIFO hoạt động an toàn không Underflow"
          }
        }
      ],
      "remember": "Tránh đệ quy sâu (Recursion — Brochure M3) trên ATmega328P vì mỗi lời gọi hàm đẩy tối thiểu 2 byte Return Address + biến cục bộ lên Hardware Stack!",
      "pitfall": "Stack Overflow trên ATmega328P xảy ra khi Stack mọc ngược đụng vào vùng biến toàn cục `.bss` → chip treo hoặc Reset bất ngờ!",
      "tests": [
        "+ push(0x42), push(0x99), pop() → 0x99"
      ],
      "problem": {
        "scenario": "Cài stack phần mềm bằng mảng SRAM. Tách trạng thái đỉnh mảng này khỏi SP mà AVR dùng cho lời gọi hàm và ngắt.\n\nBộ đệm vòng tĩnh giúp xác định trước chi phí RAM và chính sách khi đầy trên AVR. Yêu cầu thực tế: Cài đặt Stack tĩnh `push()`/`pop()` kiểm tra Overflow/Underflow và liên hệ với thanh ghi Stack Pointer (`SPL`/`SPH`) mọc ngược từ `0x08FF` trên ATmega328P.",
        "prototype": "void stack_solve(void)",
        "workedExample": [
          "Bước 1: Stack phần mềm tăng dần (`top: 0 → 8`), ngược lại Hardware Stack của ATmega328P mọc ngược từ đáy SRAM `RAMEND = 0x08FF` xuống `0x0100`!. (top=0 (Rỗng), AVR RAMEND=0x08FF)",
          "Bước 2: Đẩy 0x42 vào stk[0], đẩy 0x99 vào stk[1]. (stk[0..1]=[0x42, 0x99], top=2)",
          "Bước 3: Giảm `top` về 1 rồi lấy `stk[1] = 0x99` ra trước!. (Popped=0x99, top mới=1)"
        ],
        "testRows": [
          [
            "Case 1",
            "push(0x42), push(0x99), pop()",
            "0x99"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 094: Cài đặt Ngăn xếp (LIFO Stack) & Hiểu Hardware Stack `SP` của ATmega328P\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void stack_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t stk[8]; uint8_t top = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Tránh đệ quy sâu (Recursion — Brochure M3) trên ATmega328P vì mỗi lời gọi hàm đẩy tối thiểu 2 byte Return Address + biến cục bộ lên Hardware Stack!",
        "hint2": "Stack Overflow trên ATmega328P xảy ra khi Stack mọc ngược đụng vào vùng biến toàn cục `.bss` → chip treo hoặc Reset bất ngờ!",
        "initViz": {
          "kind": "memory",
          "title": "Software Stack (LIFO)",
          "cells": [
            {
              "addr": "0",
              "label": "stk[0]",
              "val": "--",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "stk[1]",
              "val": "--",
              "active": false,
              "tone": ""
            },
            {
              "addr": "2",
              "label": "stk[2]",
              "val": "--",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "top",
              "target": "0",
              "val": "0"
            }
          ],
          "note": "top = 0: ngăn xếp rỗng"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Sau Pop: lấy ra 0x99",
          "cells": [
            {
              "addr": "0",
              "label": "stk[0]",
              "val": "0x42",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "top=1",
              "val": "(0x99)",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [
            {
              "name": "top",
              "target": "1",
              "val": "1"
            }
          ],
          "note": "LIFO hoạt động an toàn không Underflow"
        }
      }
    },
    {
      "id": 95,
      "type": "quiz",
      "ewTitle": "Circular Buffer-I",
      "title": "Quiz: Bộ đệm vòng UART, Static Allocation & Stack ATmega328P",
      "moduleId": "m9_ringbuf",
      "brochureRef": "Brochure M7 & M11",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART"
      ],
      "summary": "Kiểm tra thiết kế Ring Buffer thay thế malloc và hoạt động Hardware Stack AVR.",
      "questions": [
        {
          "q": "Tại sao trong Firmware ATmega328P (2 KB SRAM) ta dùng Static Ring Buffer thay cho `malloc()`/`free()` (Brochure M7)?",
          "opts": [
            "Vì avr-gcc không có malloc",
            "Vì `malloc`/`free` gây phân mảnh Heap (fragmentation), thời gian không xác định và dễ đụng Stack!",
            "Vì Ring Buffer nhanh hơn Flash",
            "Vì EEPROM không dùng được malloc"
          ],
          "ans": 1,
          "exp": "MISRA C Rule 21.3 cấm cấp phát động trong hệ thống nhúng an toàn; Static Ring Buffer dùng bộ nhớ cố định, không bao giờ phân mảnh."
        },
        {
          "q": "Với Ring Buffer kích thước 32 (`RB_MASK = 31`), khi `head = 2`, `tail = 30`, có bao nhiêu byte dữ liệu đang nằm trong buffer?",
          "opts": [
            "28 byte",
            "4 byte",
            "2 byte",
            "32 byte"
          ],
          "ans": 1,
          "exp": "(2 - 30) & 31 = (-28) & 31 = 4 byte (các vị trí 30, 31, 0, 1)."
        },
        {
          "q": "Hardware Stack của ATmega328P bắt đầu từ địa chỉ nào và phát triển theo hướng nào?",
          "opts": [
            "Từ 0x0100 tăng dần lên",
            "Từ RAMEND (0x08FF) giảm dần xuống",
            "Từ Flash 0x0000",
            "Từ EEPROM 0x03FF"
          ],
          "ans": 1,
          "exp": "Stack Pointer (`SP`) khởi tạo tại `RAMEND = 0x08FF` và giảm dần mỗi lệnh `PUSH` hoặc `CALL`."
        },
        {
          "q": "FIFO USART0 có mảng 8 byte, quy ước chừa một ô. Sức chứa hữu dụng?",
          "opts": [
            "16 byte",
            "8 byte",
            "7 byte"
          ],
          "ans": 2,
          "exp": "Ô chừa giúp phân biệt đầy với rỗng."
        }
      ],
      "remember": "Ring Buffer kích thước 2^k + biến `volatile uint8_t head, tail` là mẫu chuẩn vàng cho mọi Driver UART trên AVR.",
      "pitfall": "Đừng quên chừa ít nhất 200–300 byte SRAM trống cho Hardware Stack và Ngắt lồng nhau!",
      "avrContext": "Tính dung lượng hữu dụng của FIFO USART0 có một ô chừa và suy ra hành vi khi đầy. Tính riêng chi phí ngăn xếp."
    },
    {
      "id": 96,
      "type": "task",
      "ewTitle": "Implement Custom strlen Function",
      "title": "Tự viết `my_strlen` (Đếm độ dài chuỗi UART đến ký tự `'\\0'`)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4 (Strings)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Đếm số ký tự của chuỗi C-string kết thúc bằng null terminator `'\\0'` (0x00) bằng con trỏ.",
      "filename": "avr_strlen.c",
      "lines": [
        {
          "code": "const char *s = \"AVR\";\nconst char *p = s;",
          "phase": "SETUP",
          "explain": "Chuỗi `\"AVR\"` chiếm 4 byte: `'A'(0x41), 'V'(0x56), 'R'(0x52), '\\0'(0x00)`.",
          "cards": [
            [
              "Chuỗi",
              "\"AVR\"",
              "blue"
            ],
            [
              "Byte chiếm",
              "4 byte (gồm \\0)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: Chuỗi \"AVR\\0\"",
            "cells": [
              {
                "addr": "0x0100",
                "label": "s[0]",
                "val": "'A'",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "0x0101",
                "label": "s[1]",
                "val": "'V'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0102",
                "label": "s[2]",
                "val": "'R'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "0x0103",
                "label": "NULL",
                "val": "'\\0'",
                "active": false,
                "tone": "amber"
              }
            ],
            "pointers": [
              {
                "name": "p",
                "target": "0x0100",
                "val": "0x0100"
              }
            ],
            "note": "Dừng ngay khi *p == '\\0'"
          }
        },
        {
          "code": "while (*p) p++;\nuint8_t len = (uint8_t)(p - s); // 3",
          "phase": "OUTPUT",
          "explain": "`p` dừng tại 0x0103 (`'\\0'`). Hiệu con trỏ `p - s = 3`!",
          "cards": [
            [
              "len",
              "3",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả: len = 3",
            "cells": [
              {
                "addr": "0x0100",
                "label": "s",
                "val": "'A'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0101",
                "label": "+1",
                "val": "'V'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0102",
                "label": "+2",
                "val": "'R'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "0x0103",
                "label": "p (end)",
                "val": "'\\0'",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "p - s = 3 ký tự"
          }
        }
      ],
      "remember": "Chuỗi dài N ký tự luôn cần mảng `char buf[N + 1]` để chứa byte `'\\0'` ở cuối!",
      "pitfall": "Nếu chuỗi thiếu `'\\0'`, `strlen` sẽ đọc tràn khắp 2 KB SRAM!",
      "tests": [
        "+ my_strlen(\"AVR\") = 3",
        "+ my_strlen(\"\") = 0"
      ],
      "problem": {
        "scenario": "Vòng lặp main nhận một dòng từ USART0 đã kết thúc bằng byte 0. Đếm độ dài nội dung trong vùng SRAM hợp lệ.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Đếm số ký tự của chuỗi C-string kết thúc bằng null terminator `'\\0'` (0x00) bằng con trỏ.",
        "prototype": "void strlen_solve(void)",
        "workedExample": [
          "Bước 1: Chuỗi `\"AVR\"` chiếm 4 byte: `'A'(0x41), 'V'(0x56), 'R'(0x52), '\\0'(0x00)`. (Chuỗi=\"AVR\", Byte chiếm=4 byte (gồm \\0))",
          "Bước 2: `p` dừng tại 0x0103 (`'\\0'`). (len=3)"
        ],
        "testRows": [
          [
            "Case 1",
            "Chuỗi = \"AVR\", Byte chiếm = 4 byte (gồm \\0), len = 3",
            "my_strlen(\"AVR\") = 3"
          ],
          [
            "Case 2",
            "Chuỗi = \"AVR\", Byte chiếm = 4 byte (gồm \\0), len = 3",
            "my_strlen(\"\") = 0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 096: Tự viết `my_strlen` (Đếm độ dài chuỗi UART đến ký tự `'\\0'`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void strlen_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const char *s = \"AVR\";\n    const char *p = s;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Chuỗi dài N ký tự luôn cần mảng `char buf[N + 1]` để chứa byte `'\\0'` ở cuối!",
        "hint2": "Nếu chuỗi thiếu `'\\0'`, `strlen` sẽ đọc tràn khắp 2 KB SRAM!",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: Chuỗi \"AVR\\0\"",
          "cells": [
            {
              "addr": "0x0100",
              "label": "s[0]",
              "val": "'A'",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "0x0101",
              "label": "s[1]",
              "val": "'V'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0102",
              "label": "s[2]",
              "val": "'R'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "0x0103",
              "label": "NULL",
              "val": "'\\0'",
              "active": false,
              "tone": "amber"
            }
          ],
          "pointers": [
            {
              "name": "p",
              "target": "0x0100",
              "val": "0x0100"
            }
          ],
          "note": "Dừng ngay khi *p == '\\0'"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả: len = 3",
          "cells": [
            {
              "addr": "0x0100",
              "label": "s",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0101",
              "label": "+1",
              "val": "'V'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0102",
              "label": "+2",
              "val": "'R'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "0x0103",
              "label": "p (end)",
              "val": "'\\0'",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "p - s = 3 ký tự"
        }
      }
    },
    {
      "id": 97,
      "type": "task",
      "ewTitle": "Implement Custom strcpy function",
      "title": "Tự viết `my_strcpy_safe` (Sao chép chuỗi chống tràn Buffer SRAM)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4 & M13 (Buffer Overflow)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Sao chép chuỗi có giới hạn dung lượng đích `max_len` và luôn đảm bảo kết thúc bằng `'\\0'` (khắc phục lỗ hổng tràn bộ đệm của `strcpy`!).",
      "filename": "avr_strcpy.c",
      "lines": [
        {
          "code": "uint8_t i = 0;\nwhile (i < max_len - 1 && src[i]) { dst[i] = src[i]; i++; }",
          "phase": "EXECUTION",
          "explain": "Chỉ copy tối đa `max_len - 1` ký tự để luôn chừa 1 ô cuối cho `'\\0'`.",
          "cards": [
            [
              "src",
              "\"LED_ON\"",
              "blue"
            ],
            [
              "max_len",
              "8",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Copy an toàn vào dst[8]",
            "cells": [
              {
                "addr": "0",
                "label": "0",
                "val": "'L'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "1",
                "val": "'E'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "2",
                "val": "'D'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "3",
                "val": "'_'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "4",
                "val": "'O'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "5",
                "label": "5",
                "val": "'N'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "6",
                "label": "6",
                "val": "'\\0'",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Luôn kết thúc bằng '\\0'"
          }
        },
        {
          "code": "dst[i] = '\\0';",
          "phase": "OUTPUT",
          "explain": "Đóng chuỗi chắc chắn bằng `'\\0'`, ngăn chặn hoàn toàn lỗi Buffer Overflow (Brochure M13).",
          "cards": [
            [
              "dst",
              "\"LED_ON\"",
              "green"
            ],
            [
              "An toàn tràn",
              "Đạt ✓",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "dst = \"LED_ON\\0\"",
            "cells": [
              {
                "addr": "0..5",
                "label": "Text",
                "val": "LED_ON",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "6",
                "label": "Null",
                "val": "0x00",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Hoàn tất sao chép an toàn"
          }
        }
      ],
      "remember": "Trong Embedded C, KHÔNG dùng `strcpy()` trần — luôn giới hạn độ dài buffer đích!",
      "pitfall": "Trên ATmega328P, nhớ dùng `strcpy_P(dst, PSTR(\"...\"))` nếu chuỗi nguồn nằm trong Flash PROGMEM.",
      "tests": [
        "+ copy \"LED_ON\" vào dst[8] → \"LED_ON\""
      ],
      "problem": {
        "scenario": "Chép lệnh UART sang bộ đệm cố định. Khi đích có chỗ, chừa byte kết thúc; khi dung lượng bằng 0, không ghi.\n\nSao chép chuỗi vào bộ đệm có sức chứa max_len. Khi max_len lớn hơn 0, chừa một byte cho ký tự kết thúc và cắt phần dư nếu thiếu chỗ. Khi max_len bằng 0, không ghi vào đích.",
        "prototype": "void strcpy_solve(void)",
        "workedExample": [
          "Bước 1: Chỉ copy tối đa `max_len - 1` ký tự để luôn chừa 1 ô cuối cho `'\\0'`. (src=\"LED_ON\", max_len=8)",
          "Bước 2: Đóng chuỗi chắc chắn bằng `'\\0'`, ngăn chặn hoàn toàn lỗi Buffer Overflow (Brochure M13). (dst=\"LED_ON\", An toàn tràn=Đạt ✓)"
        ],
        "testRows": [
          [
            "Case 1",
            "copy \"LED_ON\" vào dst[8]",
            "\"LED_ON\""
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 97 · ATmega328P */\nint main(void) {\n    const char src[] = \"LED_ON\";\n    char dst[8] = {0};\n    const unsigned max_len = sizeof dst;\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Trong Embedded C, KHÔNG dùng `strcpy()` trần — luôn giới hạn độ dài buffer đích!",
        "hint2": "Trên ATmega328P, nhớ dùng `strcpy_P(dst, PSTR(\"...\"))` nếu chuỗi nguồn nằm trong Flash PROGMEM.",
        "initViz": {
          "kind": "memory",
          "title": "Copy an toàn vào dst[8]",
          "cells": [
            {
              "addr": "0",
              "label": "0",
              "val": "'L'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "1",
              "val": "'E'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "2",
              "val": "'D'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "3",
              "val": "'_'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "4",
              "val": "'O'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "5",
              "label": "5",
              "val": "'N'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "6",
              "label": "6",
              "val": "'\\0'",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Luôn kết thúc bằng '\\0'"
        },
        "targetViz": {
          "kind": "memory",
          "title": "dst = \"LED_ON\\0\"",
          "cells": [
            {
              "addr": "0..5",
              "label": "Text",
              "val": "LED_ON",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "6",
              "label": "Null",
              "val": "0x00",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Hoàn tất sao chép an toàn"
        }
      }
    },
    {
      "id": 98,
      "type": "task",
      "ewTitle": "Implement Custom strcmp function",
      "title": "Tự viết `my_strcmp` (So khớp lệnh AT / CLI nhận từ UART)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART"
      ],
      "summary": "So sánh từng ký tự của hai chuỗi; trả về `0` khi trùng khớp hoàn toàn (ví dụ kiểm tra lệnh `\"START\"`).",
      "filename": "avr_strcmp.c",
      "lines": [
        {
          "code": "while (*a && (*a == *b)) { a++; b++; }",
          "phase": "EXECUTION",
          "explain": "Tiến song song 2 con trỏ chừng nào chưa gặp `'\\0'` và hai ký tự còn giống nhau.",
          "cards": [
            [
              "a",
              "\"ON\"",
              "blue"
            ],
            [
              "b",
              "\"ON\"",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "So sánh \"ON\" vs \"ON\"",
            "cells": [
              {
                "addr": "0",
                "label": "'O'=='O'",
                "val": "✓",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "'N'=='N'",
                "val": "✓",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "'\\0'=='\\0'",
                "val": "0",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Trùng khớp 100%"
          }
        },
        {
          "code": "int16_t diff = (uint8_t)*a - (uint8_t)*b; // 0",
          "phase": "OUTPUT",
          "explain": "Ép sang `uint8_t` trước khi trừ theo chuẩn C99. Kết quả `0` → hai chuỗi bằng nhau!",
          "cards": [
            [
              "diff",
              "0 (KHỚP!)",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả: 0 (Khớp lệnh!)",
            "cells": [
              {
                "addr": "ret",
                "label": "my_strcmp",
                "val": "0",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Thực thi lệnh ON"
          }
        }
      ],
      "remember": "`strcmp(a, b) == 0` mới là bằng nhau! Lỗi rất hay gặp là viết `if (strcmp(a, b))` (ngược logic!).",
      "pitfall": "Nếu so với chuỗi hằng trong Flash, dùng `strcmp_P(rx_buf, PSTR(\"START\")) == 0` để tiết kiệm SRAM!",
      "tests": [
        "+ strcmp(\"ON\",\"ON\") == 0",
        "+ strcmp(\"ON\",\"OFF\") > 0"
      ],
      "problem": {
        "scenario": "So lệnh đã nhận qua USART0 với chuỗi mẫu, dùng byte unsigned khi lấy hiệu hai ký tự.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: So sánh từng ký tự của hai chuỗi; trả về `0` khi trùng khớp hoàn toàn (ví dụ kiểm tra lệnh `\"START\"`).",
        "prototype": "void strcmp_solve(void)",
        "workedExample": [
          "Bước 1: Tiến song song 2 con trỏ chừng nào chưa gặp `'\\0'` và hai ký tự còn giống nhau. (a=\"ON\", b=\"ON\")",
          "Bước 2: Ép sang `uint8_t` trước khi trừ theo chuẩn C99. (diff=0 (KHỚP!))"
        ],
        "testRows": [
          [
            "Case 1",
            "a = \"ON\", b = \"ON\", diff = 0 (KHỚP!)",
            "strcmp(\"ON\",\"ON\") == 0"
          ],
          [
            "Case 2",
            "a = \"ON\", b = \"ON\", diff = 0 (KHỚP!)",
            "strcmp(\"ON\",\"OFF\") > 0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 98 · ATmega328P */\nint main(void) {\n    const char *a = \"ON\";\n    const char *b = \"ON\";\n    volatile int16_t diff = 0;\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "`strcmp(a, b) == 0` mới là bằng nhau! Lỗi rất hay gặp là viết `if (strcmp(a, b))` (ngược logic!).",
        "hint2": "Nếu so với chuỗi hằng trong Flash, dùng `strcmp_P(rx_buf, PSTR(\"START\")) == 0` để tiết kiệm SRAM!",
        "initViz": {
          "kind": "memory",
          "title": "So sánh \"ON\" vs \"ON\"",
          "cells": [
            {
              "addr": "0",
              "label": "'O'=='O'",
              "val": "✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "'N'=='N'",
              "val": "✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "'\\0'=='\\0'",
              "val": "0",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Trùng khớp 100%"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả: 0 (Khớp lệnh!)",
          "cells": [
            {
              "addr": "ret",
              "label": "my_strcmp",
              "val": "0",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Thực thi lệnh ON"
        }
      }
    },
    {
      "id": 99,
      "type": "task",
      "ewTitle": "Reverse a String In-Place",
      "title": "Đảo ngược chuỗi tại chỗ (Dùng trong hàm tự viết `itoa`)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Đảo ngược các ký tự trước `'\\0'` tại chỗ — bước cuối không thể thiếu khi chuyển số nguyên sang chuỗi ASCII trên AVR.",
      "filename": "avr_str_rev.c",
      "lines": [
        {
          "code": "char s[5] = \"3210\"; // len = 4\nuint8_t l = 0, r = 3;",
          "phase": "SETUP",
          "explain": "Khi chia lấy dư `% 10` số `123`, ta thu được chuỗi ngược `\"321\"`, cần đảo lại tại chỗ thành `\"123\"`.",
          "cards": [
            [
              "s cũ",
              "\"3210\"",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Đảo chuỗi tại chỗ",
            "cells": [
              {
                "addr": "0",
                "label": "l",
                "val": "'3'",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "1",
                "val": "'2'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "2",
                "val": "'1'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "r",
                "val": "'0'",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "4",
                "label": "\\0",
                "val": "0",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Giữ nguyên '\\0' ở cuối"
          }
        },
        {
          "code": "while(l < r) { char t=s[l]; s[l++]=s[r]; s[r--]=t; }",
          "phase": "OUTPUT",
          "explain": "Hoán đổi đối xứng → `\"0123\"`, byte `'\\0'` tại index 4 vẫn nguyên vẹn.",
          "cards": [
            [
              "s mới",
              "\"0123\"",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Chuỗi mới: \"0123\"",
            "cells": [
              {
                "addr": "0",
                "label": "0",
                "val": "'0'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "1",
                "val": "'1'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "2",
                "val": "'2'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "3",
                "val": "'3'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "\\0",
                "val": "0",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Hoàn tất đảo chuỗi"
          }
        }
      ],
      "remember": "Không bao giờ đảo nhầm ký tự `'\\0'` lên đầu chuỗi!",
      "pitfall": "Kiểm tra chuỗi rỗng `len == 0` trước khi tính `r = len - 1`.",
      "tests": [
        "+ \"3210\" → \"0123\""
      ],
      "problem": {
        "scenario": "Firmware sinh chữ số từ thấp đến cao trong SRAM. Đảo phần nội dung và giữ byte kết thúc tại cuối.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Đảo ngược các ký tự trước `'\\0'` tại chỗ — bước cuối không thể thiếu khi chuyển số nguyên sang chuỗi ASCII trên AVR.",
        "prototype": "void str_rev_solve(void)",
        "workedExample": [
          "Bước 1: Khi chia lấy dư `% 10` số `123`, ta thu được chuỗi ngược `\"321\"`, cần đảo lại tại chỗ thành `\"123\"`. (s cũ=\"3210\")",
          "Bước 2: Hoán đổi đối xứng → `\"0123\"`, byte `'\\0'` tại index 4 vẫn nguyên vẹn. (s mới=\"0123\")"
        ],
        "testRows": [
          [
            "Case 1",
            "\"3210\"",
            "\"0123\""
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 099: Đảo ngược chuỗi tại chỗ (Dùng trong hàm tự viết `itoa`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void str_rev_solve(void)\n * ============================================================ */\n\nint main(void) {\n    char s[5] = \"3210\"; // len = 4\n    uint8_t l = 0, r = 3;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Không bao giờ đảo nhầm ký tự `'\\0'` lên đầu chuỗi!",
        "hint2": "Kiểm tra chuỗi rỗng `len == 0` trước khi tính `r = len - 1`.",
        "initViz": {
          "kind": "memory",
          "title": "Đảo chuỗi tại chỗ",
          "cells": [
            {
              "addr": "0",
              "label": "l",
              "val": "'3'",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "1",
              "label": "1",
              "val": "'2'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "2",
              "label": "2",
              "val": "'1'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "r",
              "val": "'0'",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "4",
              "label": "\\0",
              "val": "0",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Giữ nguyên '\\0' ở cuối"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Chuỗi mới: \"0123\"",
          "cells": [
            {
              "addr": "0",
              "label": "0",
              "val": "'0'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "1",
              "val": "'1'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "2",
              "val": "'2'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "3",
              "val": "'3'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "\\0",
              "val": "0",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Hoàn tất đảo chuỗi"
        }
      }
    },
    {
      "id": 100,
      "type": "task",
      "ewTitle": "Remove Duplicate Characters from a String",
      "title": "Loại bỏ ký tự trùng lặp trong chuỗi tại chỗ (Dùng Bitset 16 byte)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng mảng bitset 16 byte (128 bit cho toàn bộ bảng ASCII 0..127) thay vì mảng 256 byte để lọc ký tự trùng lặp ngay trên chuỗi gốc.",
      "filename": "avr_str_dedup.c",
      "lines": [
        {
          "code": "uint8_t seen[16] = {0}; // 128 bit ASCII",
          "phase": "SETUP",
          "explain": "Chỉ tốn 16 byte SRAM thay vì 256 byte! Bit của ký tự `c` nằm ở `seen[c >> 3] & (1U << (c & 7))`.",
          "cards": [
            [
              "SRAM bitset",
              "16 byte",
              "green"
            ],
            [
              "Input",
              "\"AABC\"",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Lọc trùng tại chỗ: \"AABC\"",
            "cells": [
              {
                "addr": "0",
                "label": "r=0",
                "val": "'A'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "r=1 (trùng)",
                "val": "'A'",
                "active": true,
                "tone": "rose"
              },
              {
                "addr": "2",
                "label": "r=2",
                "val": "'B'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "r=3",
                "val": "'C'",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Bỏ qua 'A' thứ hai"
          }
        },
        {
          "code": "s[w] = '\\0'; // Kết quả: \"ABC\"",
          "phase": "OUTPUT",
          "explain": "Con trỏ ghi `w` nén các ký tự duy nhất lên đầu và đóng chuỗi → `\"ABC\"`.",
          "cards": [
            [
              "Kết quả",
              "\"ABC\"",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Sau nén: \"ABC\\0\"",
            "cells": [
              {
                "addr": "0",
                "label": "0",
                "val": "'A'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "1",
                "val": "'B'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "2",
                "val": "'C'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "\\0",
                "val": "0",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Tiết kiệm 16x SRAM nhờ Bitset"
          }
        }
      ],
      "remember": "Hai con trỏ đọc/ghi (`r`, `w`) giúp xóa phần tử trong chuỗi chỉ trong O(n) thời gian và O(1) dịch chuyển.",
      "pitfall": "Kiểm tra `(uint8_t)c < 128` trước khi đánh chỉ số vào `seen[16]`.",
      "tests": [
        "+ \"AABC\" → \"ABC\""
      ],
      "problem": {
        "scenario": "Rút gọn chuỗi ASCII nhận qua UART tại chỗ. Nếu dùng bảng 128 bit, kiểm byte đầu vào nằm trong dải ASCII.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Dùng mảng bitset 16 byte (128 bit cho toàn bộ bảng ASCII 0..127) thay vì mảng 256 byte để lọc ký tự trùng lặp ngay trên chuỗi gốc.",
        "prototype": "void str_dedup_solve(void)",
        "workedExample": [
          "Bước 1: Chỉ tốn 16 byte SRAM thay vì 256 byte! Bit của ký tự `c` nằm ở `seen[c >> 3] & (1U << (c & 7))`. (SRAM bitset=16 byte, Input=\"AABC\")",
          "Bước 2: Con trỏ ghi `w` nén các ký tự duy nhất lên đầu và đóng chuỗi → `\"ABC\"`. (Kết quả=\"ABC\")"
        ],
        "testRows": [
          [
            "Case 1",
            "\"AABC\"",
            "\"ABC\""
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 100: Loại bỏ ký tự trùng lặp trong chuỗi tại chỗ (Dùng Bitset 16 byte)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void str_dedup_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t seen[16] = {0}; // 128 bit ASCII\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Hai con trỏ đọc/ghi (`r`, `w`) giúp xóa phần tử trong chuỗi chỉ trong O(n) thời gian và O(1) dịch chuyển.",
        "hint2": "Kiểm tra `(uint8_t)c < 128` trước khi đánh chỉ số vào `seen[16]`.",
        "initViz": {
          "kind": "memory",
          "title": "Lọc trùng tại chỗ: \"AABC\"",
          "cells": [
            {
              "addr": "0",
              "label": "r=0",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "r=1 (trùng)",
              "val": "'A'",
              "active": true,
              "tone": "rose"
            },
            {
              "addr": "2",
              "label": "r=2",
              "val": "'B'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "r=3",
              "val": "'C'",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Bỏ qua 'A' thứ hai"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Sau nén: \"ABC\\0\"",
          "cells": [
            {
              "addr": "0",
              "label": "0",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "1",
              "val": "'B'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "2",
              "val": "'C'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "\\0",
              "val": "0",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Tiết kiệm 16x SRAM nhờ Bitset"
        }
      }
    },
    {
      "id": 101,
      "type": "task",
      "ewTitle": "Count Alphabets Digits and Symbols in a String",
      "title": "Đếm Chữ cái, Chữ số và Ký hiệu (Kiểm tra hợp lệ gói ASCII)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Phân loại ký tự bằng so sánh mã ASCII trực tiếp (`'0'..'9'`, `'A'..'Z'`, `'a'..'z'`) không cần kéo thư viện `<ctype.h>` lớn.",
      "filename": "avr_count_chars.c",
      "lines": [
        {
          "code": "const char *s = \"M1:90%\";\nuint8_t alpha = 0, digit = 0, sym = 0;",
          "phase": "SETUP",
          "explain": "Khởi tạo 3 bộ đếm 8-bit. Chuỗi `\"M1:90%\"` có độ dài 6 ký tự.",
          "cards": [
            [
              "Chuỗi",
              "\"M1:90%\"",
              "blue"
            ],
            [
              "Bộ đếm",
              "0, 0, 0",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Chuỗi đầu vào \"M1:90%\"",
            "cells": [
              {
                "addr": "0",
                "label": "s[0]",
                "val": "'M'",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "s[1]",
                "val": "'1'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "s[2]",
                "val": "':'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "s[3]",
                "val": "'9'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "4",
                "label": "s[4]",
                "val": "'0'",
                "active": false,
                "tone": ""
              },
              {
                "addr": "5",
                "label": "s[5]",
                "val": "'%'",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Kiểm tra từng ký tự theo bảng ASCII",
            "ring": null
          }
        },
        {
          "code": "for (; *s != '\\0'; s++) {",
          "phase": "LOGIC",
          "explain": "Duyệt qua từng ký tự cho tới khi gặp byte kết thúc chuỗi `'\\0'` (0x00).",
          "cards": [
            [
              "Điều kiện dừng",
              "*s == '\\0'",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Quét qua chuỗi",
            "cells": [
              {
                "addr": "0",
                "label": "Alpha",
                "val": "'M'",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "Digit",
                "val": "'1'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "Sym",
                "val": "':'",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "3",
                "label": "Digit",
                "val": "'9'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "Digit",
                "val": "'0'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "5",
                "label": "Sym",
                "val": "'%'",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Phân loại dải ASCII",
            "ring": null
          }
        },
        {
          "code": "    if ((*s >= 'A' && *s <= 'Z') || (*s >= 'a' && *s <= 'z')) alpha++;\n    else if (*s >= '0' && *s <= '9') digit++;\n    else sym++;\n}",
          "phase": "OUTPUT",
          "explain": "So sánh dải mã ASCII trực tiếp không cần `#include <ctype.h>`: `'M'`→alpha(1), `'1','9','0'`→digit(3), `':','%'`→sym(2).",
          "cards": [
            [
              "alpha",
              "1",
              "blue"
            ],
            [
              "digit",
              "3",
              "green"
            ],
            [
              "sym",
              "2",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả thống kê",
            "cells": [
              {
                "addr": "A",
                "label": "Alpha",
                "val": "1",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "D",
                "label": "Digit",
                "val": "3",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "S",
                "label": "Symbol",
                "val": "2",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "alpha=1, digit=3, sym=2",
            "ring": null
          }
        }
      ],
      "remember": "So sánh dải `'0' <= c && c <= '9'` chạy cực nhanh và tiết kiệm Flash trên AVR.",
      "pitfall": "Đừng quên loại trừ byte kết thúc `'\\0'` trong vòng lặp.",
      "tests": [
        "+ \"M1:90%\" → alpha=1, digit=3, sym=2"
      ],
      "problem": {
        "scenario": "Đếm loại ký tự trong dòng UART dựa trên phạm vi ASCII. Tách chữ cái, chữ số và các ký hiệu ngoài hai nhóm.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Phân loại ký tự bằng so sánh mã ASCII trực tiếp (`'0'..'9'`, `'A'..'Z'`, `'a'..'z'`) không cần kéo thư viện `<ctype.h>` lớn.",
        "prototype": "void count_chars_solve(void)",
        "workedExample": [
          "Bước 1: Khởi tạo 3 bộ đếm 8-bit. (Chuỗi=\"M1:90%\", Bộ đếm=0, 0, 0)",
          "Bước 2: Duyệt qua từng ký tự cho tới khi gặp byte kết thúc chuỗi `'\\0'` (0x00). (Điều kiện dừng=*s == '\\0')",
          "Bước 3: So sánh dải mã ASCII trực tiếp không cần `#include <ctype. (alpha=1, digit=3)"
        ],
        "testRows": [
          [
            "Case 1",
            "\"M1:90%\"",
            "alpha=1, digit=3, sym=2"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 101: Đếm Chữ cái, Chữ số và Ký hiệu (Kiểm tra hợp lệ gói ASCII)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void count_chars_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const char *s = \"M1:90%\";\n    uint8_t alpha = 0, digit = 0, sym = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "So sánh dải `'0' <= c && c <= '9'` chạy cực nhanh và tiết kiệm Flash trên AVR.",
        "hint2": "Đừng quên loại trừ byte kết thúc `'\\0'` trong vòng lặp.",
        "initViz": {
          "kind": "memory",
          "title": "Chuỗi đầu vào \"M1:90%\"",
          "cells": [
            {
              "addr": "0",
              "label": "s[0]",
              "val": "'M'",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "1",
              "label": "s[1]",
              "val": "'1'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "2",
              "label": "s[2]",
              "val": "':'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "s[3]",
              "val": "'9'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "4",
              "label": "s[4]",
              "val": "'0'",
              "active": false,
              "tone": ""
            },
            {
              "addr": "5",
              "label": "s[5]",
              "val": "'%'",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Kiểm tra từng ký tự theo bảng ASCII",
          "ring": null
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả thống kê",
          "cells": [
            {
              "addr": "A",
              "label": "Alpha",
              "val": "1",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "D",
              "label": "Digit",
              "val": "3",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "S",
              "label": "Symbol",
              "val": "2",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "alpha=1, digit=3, sym=2",
          "ring": null
        }
      }
    },
    {
      "id": 102,
      "type": "task",
      "ewTitle": "Convert Uppercase Letters to Lowercase",
      "title": "Chuyển chữ HOA sang chữ thường bằng Bit 5 (`| 0x20`)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4 & M9",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Chuẩn hóa lệnh UART (ví dụ `\"START\"` → `\"start\"`) bằng nhận xét thú vị trong bảng ASCII: chữ thường chỉ khác chữ hoa đúng Bit 5 (+32 = 0x20)!",
      "filename": "avr_tolower.c",
      "lines": [
        {
          "code": "char c = 'A'; // 0x41 = 0100_0001",
          "phase": "SETUP",
          "explain": "Mã ASCII `'A'` = 65 (0x41), `'a'` = 97 (0x61). Hai mã này chỉ khác nhau đúng bit 5 (giá trị 32 = 0x20)!",
          "cards": [
            [
              "'A'",
              "0x41",
              "blue"
            ],
            [
              "'a'",
              "0x61",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "'A' = 0x41",
            "val": 65,
            "prev": 65,
            "mask": 32,
            "labels": [],
            "note": "Bit 5 = 0 ở chữ HOA"
          }
        },
        {
          "code": "if (c >= 'A' && c <= 'Z') c |= 0x20U; // 'a' = 0x61",
          "phase": "OUTPUT",
          "explain": "Bật bit 5 bằng `c |= 0x20U` biến `'A'..'Z'` thành `'a'..'z'` ngay lập tức!",
          "cards": [
            [
              "c mới",
              "'a' (0x61)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "'a' = 0x61",
            "val": 97,
            "prev": 65,
            "mask": 32,
            "labels": [],
            "note": "Bật bit 5 → chuyển sang chữ thường!",
            "op": "OR (|=)"
          }
        }
      ],
      "remember": "Chuẩn hóa lệnh UART thành chữ thường giúp người dùng gõ `led on` hay `LED ON` đều chạy đúng!",
      "pitfall": "Chỉ bật bit 5 khi chắc chắn `c >= 'A' && c <= 'Z'` (nếu áp dụng lên chữ số `'0'` sẽ hỏng thành ký tự khác!).",
      "tests": [
        "+ \"AVR_OK\" → \"avr_ok\""
      ],
      "problem": {
        "scenario": "Chuẩn hóa lệnh ASCII của USART0. Chỉ bật bit 5 với ký tự trong A..Z để dấu câu không bị đổi.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Chuẩn hóa lệnh UART (ví dụ `\"START\"` → `\"start\"`) bằng nhận xét thú vị trong bảng ASCII: chữ thường chỉ khác chữ hoa đúng Bit 5 (+32 = 0x20)!",
        "prototype": "void tolower_solve(void)",
        "workedExample": [
          "Bước 1: Mã ASCII `'A'` = 65 (0x41), `'a'` = 97 (0x61). ('A'=0x41, 'a'=0x61)",
          "Bước 2: Bật bit 5 bằng `c |= 0x20U` biến `'A'. (c mới='a' (0x61))"
        ],
        "testRows": [
          [
            "Case 1",
            "\"AVR_OK\"",
            "\"avr_ok\""
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 102: Chuyển chữ HOA sang chữ thường bằng Bit 5 (`| 0x20`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void tolower_solve(void)\n * ============================================================ */\n\nint main(void) {\n    char c = 'A'; // 0x41 = 0100_0001\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Chuẩn hóa lệnh UART thành chữ thường giúp người dùng gõ `led on` hay `LED ON` đều chạy đúng!",
        "hint2": "Chỉ bật bit 5 khi chắc chắn `c >= 'A' && c <= 'Z'` (nếu áp dụng lên chữ số `'0'` sẽ hỏng thành ký tự khác!).",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "'A' = 0x41",
          "val": 65,
          "prev": 65,
          "mask": 32,
          "labels": [],
          "note": "Bit 5 = 0 ở chữ HOA"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "'a' = 0x61",
          "val": 97,
          "prev": 65,
          "mask": 32,
          "labels": [],
          "note": "Bật bit 5 → chuyển sang chữ thường!",
          "op": "OR (|=)"
        }
      }
    },
    {
      "id": 103,
      "type": "task",
      "ewTitle": "Parse Comma-Separated Integers into an Array",
      "title": "Tách chuỗi CSV số nguyên (`\"120,45,300\"`) vào mảng (Cài đặt tham số PID qua UART)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4 & M11",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART"
      ],
      "summary": "Phân tích chuỗi CSV gửi từ Serial Monitor (vd `\"120,45,300\"` cho Kp, Ki, Kd) trực tiếp vào mảng `int16_t vals[3]` mà không dùng `strtok()` hay `sscanf()`.",
      "filename": "avr_parse_csv.c",
      "lines": [
        {
          "code": "const char *s = \"120,45,300\";\nint16_t vals[3] = {0}; uint8_t idx = 0;",
          "phase": "SETUP",
          "explain": "Chuỗi CSV nhận từ Serial Monitor chứa 3 hệ số PID `Kp=120, Ki=45, Kd=300`. Ta phân tích trực tiếp vào `vals[3]` không dùng `sscanf`/`strtok`.",
          "cards": [
            [
              "s",
              "\"120,45,300\"",
              "blue"
            ],
            [
              "idx",
              "0",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Khởi tạo vals[3] = {0, 0, 0}",
            "cells": [
              {
                "addr": "0",
                "label": "vals[0]",
                "val": "0",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "vals[1]",
                "val": "0",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "vals[2]",
                "val": "0",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Đang đọc số đầu tiên vào vals[0]",
            "ring": null
          }
        },
        {
          "code": "while (*s && idx < 3) {",
          "phase": "LOGIC",
          "explain": "Kiểm tra đồng thời `*s != '\\0'` và `idx < 3` để tuyệt đối không ghi tràn mảng nếu người dùng gửi thừa dấu phẩy.",
          "cards": [
            [
              "Bảo vệ biên",
              "idx < 3",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kiểm tra biên mảng",
            "cells": [
              {
                "addr": "0",
                "label": "Kp",
                "val": "120",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "Ki",
                "val": "0",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "Kd",
                "val": "0",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "An toàn chống Buffer Overflow",
            "ring": null
          }
        },
        {
          "code": "    if (*s == ',') { idx++; s++; continue; }",
          "phase": "EXECUTION",
          "explain": "Khi gặp dấu phẩy `','`, chuyển sang phần tử tiếp theo `idx++` và nhảy qua dấu phẩy.",
          "cards": [
            [
              "Gặp ','",
              "idx tăng +1",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Gặp dấu phẩy -> chuyển idx",
            "cells": [
              {
                "addr": "0",
                "label": "Kp ✓",
                "val": "120",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "Ki (đang đọc)",
                "val": "45",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "2",
                "label": "Kd",
                "val": "0",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Đã xong 120, chuyển sang 45",
            "ring": null
          }
        },
        {
          "code": "    if (*s >= '0' && *s <= '9') vals[idx] = vals[idx] * 10 + (*s - '0');\n    s++;\n}",
          "phase": "OUTPUT",
          "explain": "Nhân dồn cơ số 10 rồi cộng chữ số mới (`'0'` = 48). Kết thúc vòng lặp: `vals = {120, 45, 300}`!",
          "cards": [
            [
              "vals[0..2]",
              "{120, 45, 300}",
              "green"
            ],
            [
              "Tiết kiệm Flash",
              "~1.5 KB vs sscanf",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Hoàn tất tách CSV PID",
            "cells": [
              {
                "addr": "0",
                "label": "Kp",
                "val": "120",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "Ki",
                "val": "45",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "Kd",
                "val": "300",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Sẵn sàng nạp vào bộ điều khiển",
            "ring": null
          }
        }
      ],
      "remember": "Tránh `sscanf` trên ATmega328P vì kéo theo ~2 KB mã thư viện Flash!",
      "pitfall": "Hỗ trợ thêm dấu âm `'-'` nếu hệ số hoặc tọa độ có thể âm.",
      "tests": [
        "+ \"120,45,300\" → {120, 45, 300}"
      ],
      "problem": {
        "scenario": "Dòng cấu hình PID từ UART chứa ba số. Kiểm số trường và giới hạn mảng trước khi lưu từng giá trị vào SRAM.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Phân tích chuỗi CSV gửi từ Serial Monitor (vd `\"120,45,300\"` cho Kp, Ki, Kd) trực tiếp vào mảng `int16_t vals[3]` mà không dùng `strtok()` hay `sscanf()`.",
        "prototype": "void parse_csv_solve(void)",
        "workedExample": [
          "Bước 1: Chuỗi CSV nhận từ Serial Monitor chứa 3 hệ số PID `Kp=120, Ki=45, Kd=300`. (s=\"120,45,300\", idx=0)",
          "Bước 2: Kiểm tra đồng thời `*s != '\\0'` và `idx < 3` để tuyệt đối không ghi tràn mảng nếu người dùng gửi thừa dấu phẩy. (Bảo vệ biên=idx < 3)",
          "Bước 3: Khi gặp dấu phẩy `','`, chuyển sang phần tử tiếp theo `idx++` và nhảy qua dấu phẩy. (Gặp ','=idx tăng +1)"
        ],
        "testRows": [
          [
            "Case 1",
            "\"120,45,300\"",
            "{120, 45, 300}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 103: Tách chuỗi CSV số nguyên (`\"120,45,300\"`) vào mảng (Cài đặt tham số PID qua UART)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void parse_csv_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const char *s = \"120,45,300\";\n    int16_t vals[3] = {0}; uint8_t idx = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Tránh `sscanf` trên ATmega328P vì kéo theo ~2 KB mã thư viện Flash!",
        "hint2": "Hỗ trợ thêm dấu âm `'-'` nếu hệ số hoặc tọa độ có thể âm.",
        "initViz": {
          "kind": "memory",
          "title": "Khởi tạo vals[3] = {0, 0, 0}",
          "cells": [
            {
              "addr": "0",
              "label": "vals[0]",
              "val": "0",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "1",
              "label": "vals[1]",
              "val": "0",
              "active": false,
              "tone": ""
            },
            {
              "addr": "2",
              "label": "vals[2]",
              "val": "0",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Đang đọc số đầu tiên vào vals[0]",
          "ring": null
        },
        "targetViz": {
          "kind": "memory",
          "title": "Hoàn tất tách CSV PID",
          "cells": [
            {
              "addr": "0",
              "label": "Kp",
              "val": "120",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "Ki",
              "val": "45",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "Kd",
              "val": "300",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Sẵn sàng nạp vào bộ điều khiển",
          "ring": null
        }
      }
    },
    {
      "id": 104,
      "type": "task",
      "ewTitle": "Convert String to Integer",
      "title": "Tự viết `my_atoi` (Chuyển chuỗi có dấu `\"-450\"` sang `int16_t`)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Bỏ khoảng trắng đầu, nhận diện dấu `'-'`/`'+'`, rồi tích lũy chữ số `res = res * 10 + (c - '0')`.",
      "filename": "avr_atoi.c",
      "lines": [
        {
          "code": "const char *s = \"-450\";\nint8_t sign = 1; int16_t res = 0;",
          "phase": "SETUP",
          "explain": "Gặp `'-'` → đặt `sign = -1` và dịch `s++` sang `'4'`.",
          "cards": [
            [
              "s",
              "\"-450\"",
              "blue"
            ],
            [
              "sign",
              "-1",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Tích lũy từng chữ số",
            "cells": [
              {
                "addr": "0",
                "label": "Dấu",
                "val": "'-' (-1)",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "1",
                "label": "×10+4",
                "val": "4",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "×10+5",
                "val": "45",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "3",
                "label": "×10+0",
                "val": "450",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "0 → 4 → 45 → 450"
          }
        },
        {
          "code": "res *= sign; // -450",
          "phase": "OUTPUT",
          "explain": "Nhân dấu ở bước cuối → `-450` (0xFE3E).",
          "cards": [
            [
              "res",
              "-450",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả int16_t = -450",
            "cells": [
              {
                "addr": "res",
                "label": "int16_t",
                "val": "-450",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Chuyển đổi chính xác"
          }
        }
      ],
      "remember": "Luôn dừng vòng lặp khi gặp ký tự không phải chữ số (`c < '0' || c > '9'`).",
      "pitfall": "Cẩn thận tràn số `int16_t` nếu chuỗi vượt quá 32767!",
      "tests": [
        "+ \"-450\" → -450",
        "+ \"+128\" → 128"
      ],
      "problem": {
        "scenario": "Chuyển tham số UART sang int16_t. Kiểm dấu và miền -32768 đến 32767 trước khi lưu.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Bỏ khoảng trắng đầu, nhận diện dấu `'-'`/`'+'`, rồi tích lũy chữ số `res = res * 10 + (c - '0')`.",
        "prototype": "void atoi_solve(void)",
        "workedExample": [
          "Bước 1: Gặp `'-'` → đặt `sign = -1` và dịch `s++` sang `'4'`. (s=\"-450\", sign=-1)",
          "Bước 2: Nhân dấu ở bước cuối → `-450` (0xFE3E). (res=-450)"
        ],
        "testRows": [
          [
            "Case 1",
            "\"-450\"",
            "-450"
          ],
          [
            "Case 2",
            "\"+128\"",
            "128"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 104: Tự viết `my_atoi` (Chuyển chuỗi có dấu `\"-450\"` sang `int16_t`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void atoi_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const char *s = \"-450\";\n    int8_t sign = 1; int16_t res = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn dừng vòng lặp khi gặp ký tự không phải chữ số (`c < '0' || c > '9'`).",
        "hint2": "Cẩn thận tràn số `int16_t` nếu chuỗi vượt quá 32767!",
        "initViz": {
          "kind": "memory",
          "title": "Tích lũy từng chữ số",
          "cells": [
            {
              "addr": "0",
              "label": "Dấu",
              "val": "'-' (-1)",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "1",
              "label": "×10+4",
              "val": "4",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "×10+5",
              "val": "45",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "3",
              "label": "×10+0",
              "val": "450",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "0 → 4 → 45 → 450"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả int16_t = -450",
          "cells": [
            {
              "addr": "res",
              "label": "int16_t",
              "val": "-450",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Chuyển đổi chính xác"
        }
      }
    },
    {
      "id": 105,
      "type": "task",
      "ewTitle": "Check if the String Numeric or Alphabetic",
      "title": "Kiểm tra chuỗi là Số thuần túy hay Chữ thuần túy",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Xác thực dữ liệu đầu vào trước khi gọi `my_atoi` để không bị nhận nhầm chuỗi rác `\"12AB\"` thành số `12`.",
      "filename": "avr_is_num_alpha.c",
      "lines": [
        {
          "code": "uint8_t is_num = 1, is_alpha = 1;\nfor(const char *p=s; *p; p++) { ... }",
          "phase": "LOGIC",
          "explain": "Duyệt qua chuỗi `\"2026\"`: mọi ký tự đều nằm trong `'0'..'9'` → `is_num = 1`, `is_alpha = 0`.",
          "cards": [
            [
              "Input",
              "\"2026\"",
              "blue"
            ],
            [
              "is_num",
              "1",
              "green"
            ],
            [
              "is_alpha",
              "0",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Xác thực chuỗi \"2026\"",
            "cells": [
              {
                "addr": "0",
                "label": "'2'",
                "val": "Digit ✓",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "'0'",
                "val": "Digit ✓",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "'2'",
                "val": "Digit ✓",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "'6'",
                "val": "Digit ✓",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Chuỗi số nguyên hợp lệ!"
          }
        }
      ],
      "remember": "Nhớ trả về 0 (không hợp lệ) nếu chuỗi rỗng `s[0] == '\\0'`!",
      "pitfall": "Xác thực đầu vào UART giúp hệ thống nhúng không bị treo bởi gói tin nhiễu.",
      "tests": [
        "+ \"2026\" → Numeric",
        "+ \"PWM\" → Alphabetic",
        "- \"12A\" → Mixed"
      ],
      "problem": {
        "scenario": "Lệnh UART chấp nhận chuỗi thuần chữ hoặc thuần số theo quy ước. Thử chuỗi trộn, rỗng và dấu câu.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Xác thực dữ liệu đầu vào trước khi gọi `my_atoi` để không bị nhận nhầm chuỗi rác `\"12AB\"` thành số `12`.",
        "prototype": "void is_num_alpha_solve(void)",
        "workedExample": [
          "Bước 1: Duyệt qua chuỗi `\"2026\"`: mọi ký tự đều nằm trong `'0'. (Input=\"2026\", is_num=1)"
        ],
        "testRows": [
          [
            "Case 1",
            "\"2026\"",
            "Numeric"
          ],
          [
            "Case 2",
            "\"PWM\"",
            "Alphabetic"
          ],
          [
            "Case 3",
            "\"12A\"",
            "Mixed"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 105 · ATmega328P */\nint main(void) {\n    const char *s = \"2026\";\n    volatile uint8_t is_num = 1, is_alpha = 1;\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Nhớ trả về 0 (không hợp lệ) nếu chuỗi rỗng `s[0] == '\\0'`!",
        "hint2": "Xác thực đầu vào UART giúp hệ thống nhúng không bị treo bởi gói tin nhiễu.",
        "initViz": {
          "kind": "memory",
          "title": "Xác thực chuỗi \"2026\"",
          "cells": [
            {
              "addr": "0",
              "label": "'2'",
              "val": "Digit ✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "'0'",
              "val": "Digit ✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "'2'",
              "val": "Digit ✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "'6'",
              "val": "Digit ✓",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Chuỗi số nguyên hợp lệ!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Xác thực chuỗi \"2026\"",
          "cells": [
            {
              "addr": "0",
              "label": "'2'",
              "val": "Digit ✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "'0'",
              "val": "Digit ✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "'2'",
              "val": "Digit ✓",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "'6'",
              "val": "Digit ✓",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Chuỗi số nguyên hợp lệ!"
        }
      }
    },
    {
      "id": 106,
      "type": "task",
      "ewTitle": "Convert a String to Float",
      "title": "Chuyển chuỗi số thực `\"24.75\"` sang số dấu phẩy tĩnh / `float`",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Tách phần nguyên (`24`) và phần thập phân (`75 / 100.0f`) — đồng thời giới thiệu kỹ thuật Fixed-Point (`2475` trăm độ) tiết kiệm CPU trên AVR!",
      "filename": "avr_atof.c",
      "lines": [
        {
          "code": "const char *s = \"24.75\";\nfloat val = 24.0f, frac = 0.0f, div = 10.0f;",
          "phase": "SETUP",
          "explain": "Đọc phần nguyên trước dấu `'.'` được 24. Sau dấu `'.'`, tích lũy `7/10 + 5/100 = 0.75`.",
          "cards": [
            [
              "Phần nguyên",
              "24",
              "blue"
            ],
            [
              "Phần lẻ",
              "0.75",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Phân tích \"24.75\"",
            "cells": [
              {
                "addr": "int",
                "label": "Trước '.'",
                "val": "24",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "dot",
                "label": "Dấu chấm",
                "val": "'.'",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "frac",
                "label": "Sau '.'",
                "val": "0.75",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "24 + 0.75 = 24.75f"
          }
        },
        {
          "code": "val += frac; // 24.75f (hoặc int16_t x100 = 2475)",
          "phase": "OUTPUT",
          "explain": "Mẹo AVR: nếu chỉ cần 2 số lẻ, lưu `int16_t temp_x100 = 2475` (fixed-point) giúp bỏ hoàn toàn thư viện float!",
          "cards": [
            [
              "float",
              "24.75f",
              "green"
            ],
            [
              "Fixed-point",
              "2475 (2B)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả: 24.75f",
            "cells": [
              {
                "addr": "val",
                "label": "float",
                "val": "24.75f",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "opt",
                "label": "Fixed ×100",
                "val": "2475",
                "active": true,
                "tone": "purple"
              }
            ],
            "pointers": [],
            "note": "Fixed-point tiết kiệm hàng KB Flash trên ATmega328P"
          }
        }
      ],
      "remember": "Tránh dùng `atof()` chuẩn nếu bạn có thể dùng Fixed-Point (`int16_t` nhân 100).",
      "pitfall": "Kiểm tra dấu âm `'-'` áp dụng cho CẢ phần nguyên lẫn phần thập phân (`-(val + frac)`).",
      "tests": [
        "+ \"24.75\" → 24.75f",
        "+ \"-3.5\" → -3.5f"
      ],
      "problem": {
        "scenario": "Chuyển mẫu nhiệt dạng văn bản nhận qua UART. Nếu dùng số cố định, ghi rõ hệ số tỷ lệ và miền lưu.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Tách phần nguyên (`24`) và phần thập phân (`75 / 100.0f`) — đồng thời giới thiệu kỹ thuật Fixed-Point (`2475` trăm độ) tiết kiệm CPU trên AVR!",
        "prototype": "void atof_solve(void)",
        "workedExample": [
          "Bước 1: Đọc phần nguyên trước dấu `'. (Phần nguyên=24, Phần lẻ=0.75)",
          "Bước 2: Mẹo AVR: nếu chỉ cần 2 số lẻ, lưu `int16_t temp_x100 = 2475` (fixed-point) giúp bỏ hoàn toàn thư viện float!. (float=24.75f, Fixed-point=2475 (2B))"
        ],
        "testRows": [
          [
            "Case 1",
            "\"24.75\"",
            "24.75f"
          ],
          [
            "Case 2",
            "\"-3.5\"",
            "-3.5f"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 106: Chuyển chuỗi số thực `\"24.75\"` sang số dấu phẩy tĩnh / `float`\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void atof_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const char *s = \"24.75\";\n    float val = 24.0f, frac = 0.0f, div = 10.0f;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Tránh dùng `atof()` chuẩn nếu bạn có thể dùng Fixed-Point (`int16_t` nhân 100).",
        "hint2": "Kiểm tra dấu âm `'-'` áp dụng cho CẢ phần nguyên lẫn phần thập phân (`-(val + frac)`).",
        "initViz": {
          "kind": "memory",
          "title": "Phân tích \"24.75\"",
          "cells": [
            {
              "addr": "int",
              "label": "Trước '.'",
              "val": "24",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "dot",
              "label": "Dấu chấm",
              "val": "'.'",
              "active": true,
              "tone": "purple"
            },
            {
              "addr": "frac",
              "label": "Sau '.'",
              "val": "0.75",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "24 + 0.75 = 24.75f"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả: 24.75f",
          "cells": [
            {
              "addr": "val",
              "label": "float",
              "val": "24.75f",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "opt",
              "label": "Fixed ×100",
              "val": "2475",
              "active": true,
              "tone": "purple"
            }
          ],
          "pointers": [],
          "note": "Fixed-point tiết kiệm hàng KB Flash trên ATmega328P"
        }
      }
    },
    {
      "id": 107,
      "type": "task",
      "ewTitle": "Split a String Using Delimiter",
      "title": "Tách chuỗi theo ký tự phân cách (In-Place Tokenizer không dùng `strtok`)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Ghi đè ký tự phân cách (`','` hoặc `' '`) bằng `'\\0'` và lưu con trỏ đầu từng token vào `char *tokens[4]` — an toàn Re-entrant (khác với `strtok` dùng biến static nội bộ!).",
      "filename": "avr_split_str.c",
      "lines": [
        {
          "code": "char line[] = \"SET,PWM,180\";\nchar *tok[4]; uint8_t n = 0;",
          "phase": "SETUP",
          "explain": "Mảng `line[]` nằm trong SRAM (có thể ghi đè được). Ta lưu tối đa 4 con trỏ token vào `tok[]`.",
          "cards": [
            [
              "line[]",
              "\"SET,PWM,180\"",
              "blue"
            ],
            [
              "tok[4]",
              "Mảng con trỏ",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: \"SET,PWM,180\\0\"",
            "cells": [
              {
                "addr": "0",
                "label": "tok[0]",
                "val": "SET",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "3",
                "label": "delim",
                "val": "','",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "4",
                "label": "4..6",
                "val": "PWM",
                "active": false,
                "tone": ""
              },
              {
                "addr": "7",
                "label": "delim",
                "val": "','",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "8",
                "label": "8..10",
                "val": "180",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Sẽ thay dấu ',' thành '\\0' tại chỗ!",
            "ring": null
          }
        },
        {
          "code": "tok[n++] = line;\nfor (char *p = line; *p != '\\0'; p++) {",
          "phase": "EXECUTION",
          "explain": "Ghi token đầu tiên `tok[0] = &line[0]`. Sau đó dùng con trỏ `p` quét từng ký tự.",
          "cards": [
            [
              "tok[0]",
              "\"SET...\"",
              "green"
            ],
            [
              "n",
              "1",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Ghi tok[0] = &line[0]",
            "cells": [
              {
                "addr": "tok[0]",
                "label": "0",
                "val": "&line[0]",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Quét tìm dấu ','",
            "ring": null
          }
        },
        {
          "code": "    if (*p == ',' && n < 4) { *p = '\\0'; tok[n++] = p + 1; }\n}",
          "phase": "OUTPUT",
          "explain": "Mỗi khi gặp `','`, thay nó bằng `'\\0'` để cắt chuỗi, và lưu địa chỉ ký tự kế tiếp `p + 1` vào `tok[n++]` → `tok[0]=\"SET\"`, `tok[1]=\"PWM\"`, `tok[2]=\"180\"`, `n = 3`!",
          "cards": [
            [
              "tok[0..2]",
              "SET | PWM | 180",
              "green"
            ],
            [
              "n",
              "3",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "3 Token hoàn chỉnh (Zero-Copy!)",
            "cells": [
              {
                "addr": "tok[0]",
                "label": "CMD",
                "val": "\"SET\"",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "tok[1]",
                "label": "TARGET",
                "val": "\"PWM\"",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "tok[2]",
                "label": "VAL",
                "val": "\"180\"",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Không tốn thêm 1 byte copy chuỗi nào",
            "ring": null
          }
        }
      ],
      "remember": "Luôn kiểm tra `n < MAX_TOKENS` để tránh tràn mảng con trỏ `tok[]`.",
      "pitfall": "Không truyền chuỗi hằng (`const char *`) vào hàm split tại chỗ vì chuỗi hằng không được sửa!",
      "tests": [
        "+ \"SET,PWM,180\" → [\"SET\",\"PWM\",\"180\"]"
      ],
      "problem": {
        "scenario": "Tách các trường lệnh trong bộ đệm SRAM bằng byte phân cách. Quy định cách xử lý trường rỗng và giới hạn đầu ra.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Ghi đè ký tự phân cách (`','` hoặc `' '`) bằng `'\\0'` và lưu con trỏ đầu từng token vào `char *tokens[4]` — an toàn Re-entrant (khác với `strtok` dùng biến static nội bộ!).",
        "prototype": "void split_str_solve(void)",
        "workedExample": [
          "Bước 1: Mảng `line[]` nằm trong SRAM (có thể ghi đè được). (line[]=\"SET,PWM,180\", tok[4]=Mảng con trỏ)",
          "Bước 2: Ghi token đầu tiên `tok[0] = &line[0]`. (tok[0]=\"SET...\", n=1)",
          "Bước 3: Mỗi khi gặp `','`, thay nó bằng `'\\0'` để cắt chuỗi, và lưu địa chỉ ký tự kế tiếp `p + 1` vào `tok[n++]` → `tok[0]=\"SET\"`, `tok[1]=\"PWM\"`, `tok[2]=\"180\"`, `n = 3`!. (tok[0..2]=SET | PWM | 180, n=3)"
        ],
        "testRows": [
          [
            "Case 1",
            "\"SET,PWM,180\"",
            "[\"SET\",\"PWM\",\"180\"]"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 107: Tách chuỗi theo ký tự phân cách (In-Place Tokenizer không dùng `strtok`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void split_str_solve(void)\n * ============================================================ */\n\nint main(void) {\n    char line[] = \"SET,PWM,180\";\n    char *tok[4]; uint8_t n = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn kiểm tra `n < MAX_TOKENS` để tránh tràn mảng con trỏ `tok[]`.",
        "hint2": "Không truyền chuỗi hằng (`const char *`) vào hàm split tại chỗ vì chuỗi hằng không được sửa!",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: \"SET,PWM,180\\0\"",
          "cells": [
            {
              "addr": "0",
              "label": "tok[0]",
              "val": "SET",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "3",
              "label": "delim",
              "val": "','",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "4",
              "label": "4..6",
              "val": "PWM",
              "active": false,
              "tone": ""
            },
            {
              "addr": "7",
              "label": "delim",
              "val": "','",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "8",
              "label": "8..10",
              "val": "180",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Sẽ thay dấu ',' thành '\\0' tại chỗ!",
          "ring": null
        },
        "targetViz": {
          "kind": "memory",
          "title": "3 Token hoàn chỉnh (Zero-Copy!)",
          "cells": [
            {
              "addr": "tok[0]",
              "label": "CMD",
              "val": "\"SET\"",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "tok[1]",
              "label": "TARGET",
              "val": "\"PWM\"",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "tok[2]",
              "label": "VAL",
              "val": "\"180\"",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Không tốn thêm 1 byte copy chuỗi nào",
          "ring": null
        }
      }
    },
    {
      "id": 108,
      "type": "task",
      "ewTitle": "Parse GPS String for Time and Coordinates",
      "title": "Giải mã chuỗi NMEA GPS (`$GPGGA`) lấy Giờ UTC & Vĩ độ/Kinh độ",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4 & M11 (UART Sensor)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "USART",
        "SRAM"
      ],
      "summary": "Tách các trường phân cách bởi dấu phẩy từ câu chuẩn NMEA `$GPGGA,123519,2101.7,N,10550.5,E,...` nhận từ module NEO-6M qua USART0.",
      "filename": "avr_gps_nmea.c",
      "lines": [
        {
          "code": "char nmea[] = \"$GPGGA,123519,2101.7,N,10550.5,E\";",
          "phase": "SETUP",
          "explain": "Chuẩn NMEA-0183: trường 0=`$GPGGA`, trường 1=UTC `12:35:19`, trường 2-3=Vĩ độ `21°01.7' N` (Hà Nội!), trường 4-5=Kinh độ `105°50.5' E`.",
          "cards": [
            [
              "Header",
              "$GPGGA",
              "purple"
            ],
            [
              "UTC",
              "12:35:19",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Các trường NMEA $GPGGA",
            "cells": [
              {
                "addr": "F0",
                "label": "ID",
                "val": "$GPGGA",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "F1",
                "label": "UTC",
                "val": "123519",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "F2",
                "label": "Lat",
                "val": "2101.7 N",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "F4",
                "label": "Lon",
                "val": "10550.5 E",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Tọa độ Hà Nội (21°01.7'N, 105°50.5'E)"
          }
        },
        {
          "code": "// time=\"123519\", lat=\"2101.7N\", lon=\"10550.5E\"",
          "phase": "OUTPUT",
          "explain": "Đếm dấu phẩy theo từng byte hoặc dùng bộ tách token tại chỗ để trích xuất mà không tốn RAM cấp phát động.",
          "cards": [
            [
              "Giờ UTC",
              "12:35:19",
              "green"
            ],
            [
              "Vị trí",
              "21.028°N, 105.84°E",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Giải mã GPS hoàn tất ✓",
            "cells": [
              {
                "addr": "UTC",
                "label": "Giờ",
                "val": "12:35:19",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "LAT",
                "label": "Vĩ độ",
                "val": "2101.7 N",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "LON",
                "label": "Kinh độ",
                "val": "10550.5 E",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Sẵn sàng hiển thị LCD hoặc gửi Telemetry"
          }
        }
      ],
      "remember": "Thực tế cần kiểm tra thêm Checksum NMEA sau dấu `'*'` (XOR toàn bộ ký tự giữa `'$'` và `'*'`) trước khi cập nhật tọa độ!",
      "pitfall": "Module GPS truyền ở 9600 bps liên tục — luôn dùng Ring Buffer trong `ISR(USART_RX_vect)` để không rớt ký tự!",
      "tests": [
        "+ $GPGGA,123519,2101.7,N,10550.5,E → 12:35:19, 2101.7N, 10550.5E"
      ],
      "problem": {
        "scenario": "Tách trường UTC và tọa độ từ dòng NMEA đã nhận qua USART0. Xác nhận checksum trước khi dùng bản ghi trong firmware.\n\nKhi giao tiếp module GPS NEO-6M, Bluetooth HC-05 hoặc Serial Monitor qua USART0, bạn cần xử lý chuỗi ASCII siêu gọn nhẹ, chống tràn buffer và không dùng `sscanf`/`malloc`. Bài toán: Tách các trường phân cách bởi dấu phẩy từ câu chuẩn NMEA `$GPGGA,123519,2101.7,N,10550.5,E,...` nhận từ module NEO-6M qua USART0.",
        "prototype": "void gps_nmea_solve(void)",
        "workedExample": [
          "Bước 1: Chuẩn NMEA-0183: trường 0=`$GPGGA`, trường 1=UTC `12:35:19`, trường 2-3=Vĩ độ `21°01. (Header=$GPGGA, UTC=12:35:19)",
          "Bước 2: Đếm dấu phẩy theo từng byte hoặc dùng bộ tách token tại chỗ để trích xuất mà không tốn RAM cấp phát động. (Giờ UTC=12:35:19, Vị trí=21.028°N, 105.84°E)"
        ],
        "testRows": [
          [
            "Case 1",
            "$GPGGA,123519,2101.7,N,10550.5,E",
            "12:35:19, 2101.7N, 10550.5E"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 108: Giải mã chuỗi NMEA GPS (`$GPGGA`) lấy Giờ UTC & Vĩ độ/Kinh độ\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void gps_nmea_solve(void)\n * ============================================================ */\n\nint main(void) {\n    char nmea[] = \"$GPGGA,123519,2101.7,N,10550.5,E\";\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Thực tế cần kiểm tra thêm Checksum NMEA sau dấu `'*'` (XOR toàn bộ ký tự giữa `'$'` và `'*'`) trước khi cập nhật tọa độ!",
        "hint2": "Module GPS truyền ở 9600 bps liên tục — luôn dùng Ring Buffer trong `ISR(USART_RX_vect)` để không rớt ký tự!",
        "initViz": {
          "kind": "memory",
          "title": "Các trường NMEA $GPGGA",
          "cells": [
            {
              "addr": "F0",
              "label": "ID",
              "val": "$GPGGA",
              "active": true,
              "tone": "purple"
            },
            {
              "addr": "F1",
              "label": "UTC",
              "val": "123519",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "F2",
              "label": "Lat",
              "val": "2101.7 N",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "F4",
              "label": "Lon",
              "val": "10550.5 E",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Tọa độ Hà Nội (21°01.7'N, 105°50.5'E)"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Giải mã GPS hoàn tất ✓",
          "cells": [
            {
              "addr": "UTC",
              "label": "Giờ",
              "val": "12:35:19",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "LAT",
              "label": "Vĩ độ",
              "val": "2101.7 N",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "LON",
              "label": "Kinh độ",
              "val": "10550.5 E",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Sẵn sàng hiển thị LCD hoặc gửi Telemetry"
        }
      }
    },
    {
      "id": 109,
      "type": "task",
      "ewTitle": "Implement a Simple Shell Command Parser",
      "title": "Xây dựng Shell Command Parser qua UART (`LED ON`, `PWM 128`, `STATUS`)",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4, M11 & M13 (Mini Project)",
      "level": "Trung bình",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "USART",
        "GPIO",
        "TIMER"
      ],
      "summary": "Kết hợp Tokenizer + `strcmp` + `my_atoi` + Bảng con trỏ hàm để xây dựng giao diện dòng lệnh (CLI) điều khiển trực tiếp chân GPIO/PWM ATmega328P qua Serial!",
      "filename": "avr_uart_shell.c",
      "lines": [
        {
          "code": "char cmd[] = \"PWM 128\";\n// Tách thành argv[0]=\"PWM\", argv[1]=\"128\"",
          "phase": "SETUP",
          "explain": "Người dùng gõ `PWM 128` trên Terminal PC gửi qua USART0. Bộ phân tích tách lệnh `PWM` và đối số `128`.",
          "cards": [
            [
              "argv[0]",
              "\"PWM\"",
              "blue"
            ],
            [
              "argv[1]",
              "\"128\"",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "UART Shell Command Parser",
            "cells": [
              {
                "addr": "argv[0]",
                "label": "Lệnh",
                "val": "\"PWM\"",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "argv[1]",
                "label": "Tham số",
                "val": "\"128\"",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Khớp lệnh trong bảng Command Table"
          }
        },
        {
          "code": "if (my_strcmp(argv[0], \"PWM\") == 0) {\n  OCR0A = (uint8_t)my_atoi(argv[1]);\n}",
          "phase": "OUTPUT",
          "explain": "Chuyển `\"128\"` → `128` (0x80) và ghi thẳng vào thanh ghi so sánh PWM `OCR0A` → động cơ/LED chạy đúng 50% Duty Cycle!",
          "cards": [
            [
              "OCR0A",
              "128 (50% PWM)",
              "green"
            ],
            [
              "Phản hồi",
              "\"OK\\r\\n\"",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "OCR0A = 128 (0x80)",
            "val": 128,
            "prev": 0,
            "mask": 255,
            "labels": [],
            "note": "PWM Duty Cycle cập nhật thành 50% tức thì!"
          }
        }
      ],
      "remember": "Đây là công cụ gỡ lỗi & hiệu chỉnh PID cực kỳ mạnh mẽ trong phòng lab (thay đổi Kp/Ki/PWM nóng mà không cần nạp lại Flash!).",
      "pitfall": "Đặt chuỗi tên lệnh trong `PROGMEM` (`strcmp_P`) nếu CLI có trên 10 lệnh để tiết kiệm SRAM.",
      "tests": [
        "+ \"PWM 128\" → OCR0A = 128",
        "+ \"LED ON\" → PORTB |= (1<<PB5)"
      ],
      "problem": {
        "scenario": "Nhận lệnh từ USART0. Ánh xạ LED sang PB5 và PWM sang driver timer. Xác thực tham số trước khi đổi trạng thái ngoại vi.\n\nTrong phòng lab, bạn muốn chỉnh tốc độ PWM động cơ DC hoặc bật/tắt LED trực tiếp từ Serial Monitor mà không cần nạp lại code mỗi lần sửa số. Hãy viết bộ phân tích chuỗi lệnh nhận từ UART có dạng `\"PWM 128\"` hoặc `\"LED 1\"`: tách tên lệnh (`argv[0]`) và tham số (`argv[1]`), chuyển tham số sang số nguyên và ghi trực tiếp vào thanh ghi `OCR0A` (hoặc `PORTB`).",
        "prototype": "uint8_t shell_exec(char *line)",
        "workedExample": [
          "Bước 1: Người dùng gõ `PWM 128` trên Terminal PC gửi qua USART0. (argv[0]=\"PWM\", argv[1]=\"128\")",
          "Bước 2: Chuyển `\"128\"` → `128` (0x80) và ghi thẳng vào thanh ghi so sánh PWM `OCR0A` → động cơ/LED chạy đúng 50% Duty Cycle!. (OCR0A=128 (50% PWM), Phản hồi=\"OK\\r\\n\")"
        ],
        "testRows": [
          [
            "Case 1 (Đặt PWM)",
            "line = \"PWM 128\"",
            "OCR0A = 128 (0x80), return = 1"
          ],
          [
            "Case 2 (Bật LED)",
            "line = \"LED 1\"",
            "PORTB |= (1U<<PB5), return = 1"
          ],
          [
            "Case 3 (Lệnh lạ)",
            "line = \"FOO 99\"",
            "Không đổi thanh ghi, return = 0"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART, GPIO, TIMER), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Mở I/O View → TC0 kiểm tra `OCR0A == 0x80` sau khi chạy `shell_exec(cmd1)`. Lưu ý không dùng `strtok` hay `sscanf` để tiết kiệm Flash!",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 109: Xây dựng Shell Command Parser qua UART (`LED ON`, `PWM 128`, `STATUS`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: uint8_t shell_exec(char *line)\n * ============================================================ */\n\nuint8_t shell_exec(char *line) {\n    // TODO: Viết mã C chuẩn ATmega328P của bạn tại đây\n}\n\nint main(void) {\n    char cmd1[] = \"PWM 128\";\n    volatile uint8_t res = shell_exec(cmd1);\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Đây là công cụ gỡ lỗi & hiệu chỉnh PID cực kỳ mạnh mẽ trong phòng lab (thay đổi Kp/Ki/PWM nóng mà không cần nạp lại Flash!).",
        "hint2": "Đặt chuỗi tên lệnh trong `PROGMEM` (`strcmp_P`) nếu CLI có trên 10 lệnh để tiết kiệm SRAM.",
        "initViz": {
          "kind": "memory",
          "title": "UART Shell Command Parser",
          "cells": [
            {
              "addr": "argv[0]",
              "label": "Lệnh",
              "val": "\"PWM\"",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "argv[1]",
              "label": "Tham số",
              "val": "\"128\"",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Khớp lệnh trong bảng Command Table"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "OCR0A = 128 (0x80)",
          "val": 128,
          "prev": 0,
          "mask": 255,
          "labels": [],
          "note": "PWM Duty Cycle cập nhật thành 50% tức thì!"
        }
      }
    },
    {
      "id": 110,
      "type": "quiz",
      "ewTitle": "Strings and Character Handling-i",
      "title": "Quiz: Chuỗi C, Null Terminator & Bộ nhớ PROGMEM AVR",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4 & M13",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "FLASH"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Strings and Character Handling-i.",
      "questions": [
        {
          "q": "Mảng `char msg[] = \"ATmega\";` chiếm bao nhiêu byte trong SRAM?",
          "opts": [
            "6 byte",
            "7 byte (6 ký tự + 1 byte '\\0')",
            "8 byte",
            "12 byte"
          ],
          "ans": 1,
          "exp": "Mọi chuỗi C đều tự động gắn thêm 1 byte null `'\\0'` (0x00) ở cuối."
        },
        {
          "q": "Viết `uart_puts(\"Hello World\");` nhiều lần trên ATmega328P gây tốn bộ nhớ nào nhất?",
          "opts": [
            "Chỉ tốn Flash",
            "Tốn CẢ Flash LẪN 2 KB SRAM (vì avr-gcc copy chuỗi hằng vào SRAM lúc khởi động!)",
            "Chỉ tốn EEPROM",
            "Không tốn gì"
          ],
          "ans": 1,
          "exp": "Phải dùng `PSTR(\"Hello World\")` và `pgm_read_byte()` để giữ chuỗi hằng hoàn toàn trong 32 KB Flash!"
        },
        {
          "q": "Điều kiện nào kiểm tra hai chuỗi `a` và `b` BẰNG NHAU bằng `strcmp`?",
          "opts": [
            "if (strcmp(a, b))",
            "if (strcmp(a, b) == 0)",
            "if (a == b)",
            "if (strcmp(a, b) == 1)"
          ],
          "ans": 1,
          "exp": "`strcmp` trả về 0 khi hai chuỗi giống hệt nhau; `a == b` chỉ so sánh địa chỉ 2 con trỏ!"
        },
        {
          "q": "char line[8] trong SRAM chứa tối đa bao nhiêu byte nội dung chuỗi C?",
          "opts": [
            "7",
            "8",
            "9"
          ],
          "ans": 0,
          "exp": "Cần một byte cho ký tự kết thúc."
        }
      ],
      "remember": "Giữ chuỗi hằng trong Flash bằng `PSTR()`, luôn chừa 1 byte cho `'\\0'` và kiểm tra biên chống tràn.",
      "pitfall": "Quên byte `'\\0'` là nguyên nhân phổ biến nhất gây in rác trên Serial Monitor!",
      "avrContext": "Tách chuỗi nhận đang trong SRAM khỏi bảng chuỗi hằng ở Flash. Kiểm byte kết thúc và hàm đọc vùng nhớ đúng."
    },
    {
      "id": 111,
      "type": "quiz",
      "ewTitle": "Strings and Character Handling-ii",
      "title": "Quiz: Parser CSV, NMEA GPS & Shell CLI trên ATmega328P",
      "moduleId": "m10_string",
      "brochureRef": "Brochure M4 & M13",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "FLASH"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Strings and Character Handling-ii.",
      "questions": [
        {
          "q": "Vì sao không nên dùng `strtok()` trong hệ thống nhúng đa tác vụ hoặc lồng hàm?",
          "opts": [
            "Vì nó quá ngắn",
            "Vì `strtok()` lưu con trỏ trạng thái tĩnh ẩn bên trong (không re-entrant / không thread-safe)!",
            "Vì nó chỉ tách dấu phẩy",
            "Vì nó dùng EEPROM"
          ],
          "ans": 1,
          "exp": "Tự viết bộ tách chuỗi dùng con trỏ cục bộ vừa nhỏ gọn vừa hoàn toàn re-entrant."
        },
        {
          "q": "Phép toán bitwise nào biến ký tự chữ HOA `'A'..'Z'` thành chữ thường `'a'..'z'`?",
          "opts": [
            "c & 0x20",
            "c | 0x20",
            "c ^ 0x0F",
            "c << 1"
          ],
          "ans": 1,
          "exp": "Mã ASCII chữ thường = chữ hoa + 32 (0x20), tức là bật bit 5 lên 1."
        },
        {
          "q": "Tại sao nên tránh `sscanf()` và `sprintf()` bản đầy đủ trên ATmega328P?",
          "opts": [
            "Không chạy được",
            "Chiếm rất nhiều bộ nhớ Flash (~2–4 KB) và Stack sâu",
            "Sai kết quả",
            "Chỉ hỗ trợ số âm"
          ],
          "ans": 1,
          "exp": "Các hàm tự viết (`my_atoi`, `my_itoa`, tokenizer) chỉ tốn vài chục byte Flash và chạy nhanh hơn nhiều."
        },
        {
          "q": "Dòng nhận từ USART0 vượt bộ đệm. Cách nào đồng bộ lại ở dòng sau?",
          "opts": [
            "Ghi tiếp qua cuối mảng",
            "Bỏ phần dư đến LF rồi nhận dòng mới",
            "Coi đoạn đuôi là lệnh mới"
          ],
          "ans": 1,
          "exp": "LF xác định ranh giới để đặt lại bộ phân tích."
        }
      ],
      "remember": "Giữ chuỗi hằng trong Flash bằng `PSTR()`, luôn chừa 1 byte cho `'\\0'` và kiểm tra biên chống tràn.",
      "pitfall": "Quên byte `'\\0'` là nguyên nhân phổ biến nhất gây in rác trên Serial Monitor!",
      "avrContext": "Phân biệt cấu trúc dòng CSV, NMEA và lệnh UART. Tính cách phục hồi sau dòng quá dài hoặc sai định dạng."
    },
    {
      "id": 112,
      "type": "task",
      "ewTitle": "Little Endian to Big Endian",
      "title": "Đổi thứ tự Byte Little-Endian ↔ Big-Endian (`bswap16` / `bswap32`)",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M8 & M11 (SPI/I2C/Network)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SPI",
        "SRAM"
      ],
      "summary": "Chuyển đổi giữa Little-Endian (ATmega328P) và Big-Endian (cảm biến I2C MPU6050, BMP280, giao thức mạng Modbus/TCP).",
      "filename": "avr_endian_swap.c",
      "lines": [
        {
          "code": "uint16_t le16 = 0x1234;\nuint16_t be16 = (le16 >> 8) | (le16 << 8); // 0x3412",
          "phase": "BITWISE",
          "explain": "Đổi chỗ 2 byte của `uint16_t`: `0x1234` → `0x3412`. Trên AVR, đây chỉ đơn giản là đổi thanh ghi R24 ↔ R25!",
          "cards": [
            [
              "le16",
              "0x1234",
              "blue"
            ],
            [
              "be16",
              "0x3412",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Đổi Byte 16-bit (MPU6050 / I2C)",
            "cells": [
              {
                "addr": "+0",
                "label": "Byte 0",
                "val": "0x34 → 0x12",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "+1",
                "label": "Byte 1",
                "val": "0x12 → 0x34",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "0x1234 ↔ 0x3412"
          }
        },
        {
          "code": "uint32_t be32 = ((x>>24)&0xFF) | ((x>>8)&0xFF00UL) | ((x<<8)&0xFF0000UL) | (x<<24);",
          "phase": "OUTPUT",
          "explain": "Đảo ngược thứ tự cả 4 byte của `uint32_t`: `0x12345678` → `0x78563412` (tương đương `__builtin_bswap32(x)`).",
          "cards": [
            [
              "x cũ",
              "0x12345678",
              "blue"
            ],
            [
              "be32",
              "0x78563412",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Đổi Byte 32-bit hoàn tất",
            "cells": [
              {
                "addr": "0",
                "label": "B0",
                "val": "0x12",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "B1",
                "val": "0x34",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "B2",
                "val": "0x56",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "B3",
                "val": "0x78",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Khớp chuẩn Big-Endian Network/I2C"
          }
        }
      ],
      "remember": "Cảm biến I2C như MPU6050 gửi byte cao (MSB) trước, byte thấp (LSB) sau (Big-Endian)!",
      "pitfall": "Có thể dùng hàm nội tại siêu tối ưu của avr-gcc: `__builtin_bswap16(x)` và `__builtin_bswap32(x)`.",
      "tests": [
        "+ bswap16(0x1234) = 0x3412",
        "+ bswap32(0x12345678) = 0x78563412"
      ],
      "problem": {
        "scenario": "Cảm biến gửi byte cao trước qua SPI. Ghép theo giao thức rồi phân biệt với cách AVR lưu số trong SRAM.\n\nHàm `printf`/`sprintf` chuẩn ngốn ~2 KB Flash trên ATmega328P. Bạn cần tự viết bộ chuyển đổi dữ liệu nhị phân/hex/thập phân và đổi Endianness cho cảm biến I2C/SPI. Yêu cầu: Chuyển đổi giữa Little-Endian (ATmega328P) và Big-Endian (cảm biến I2C MPU6050, BMP280, giao thức mạng Modbus/TCP).",
        "prototype": "void endian_swap_solve(void)",
        "workedExample": [
          "Bước 1: Đổi chỗ 2 byte của `uint16_t`: `0x1234` → `0x3412`. (le16=0x1234, be16=0x3412)",
          "Bước 2: Đảo ngược thứ tự cả 4 byte của `uint32_t`: `0x12345678` → `0x78563412` (tương đương `__builtin_bswap32(x)`). (x cũ=0x12345678, be32=0x78563412)"
        ],
        "testRows": [
          [
            "Case 1",
            "le16 = 0x1234, be16 = 0x3412, x cũ = 0x12345678",
            "bswap16(0x1234) = 0x3412"
          ],
          [
            "Case 2",
            "le16 = 0x1234, be16 = 0x3412, x cũ = 0x12345678",
            "bswap32(0x12345678) = 0x78563412"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SPI, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 112: Đổi thứ tự Byte Little-Endian ↔ Big-Endian (`bswap16` / `bswap32`)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void endian_swap_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t le16 = 0x1234;\n    uint16_t be16 = (le16 >> 8) | (le16 << 8); // 0x3412\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Cảm biến I2C như MPU6050 gửi byte cao (MSB) trước, byte thấp (LSB) sau (Big-Endian)!",
        "hint2": "Có thể dùng hàm nội tại siêu tối ưu của avr-gcc: `__builtin_bswap16(x)` và `__builtin_bswap32(x)`.",
        "initViz": {
          "kind": "memory",
          "title": "Đổi Byte 16-bit (MPU6050 / I2C)",
          "cells": [
            {
              "addr": "+0",
              "label": "Byte 0",
              "val": "0x34 → 0x12",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "+1",
              "label": "Byte 1",
              "val": "0x12 → 0x34",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "0x1234 ↔ 0x3412"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Đổi Byte 32-bit hoàn tất",
          "cells": [
            {
              "addr": "0",
              "label": "B0",
              "val": "0x12",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "B1",
              "val": "0x34",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "B2",
              "val": "0x56",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "B3",
              "val": "0x78",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Khớp chuẩn Big-Endian Network/I2C"
        }
      }
    },
    {
      "id": 113,
      "type": "task",
      "ewTitle": "Print Binary Representation of an 8-bit or 16-bit Value",
      "title": "In chuỗi Nhị phân 8-bit/16-bit qua UART để Debug thanh ghi",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M13 (UART Debug)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "USART"
      ],
      "summary": "Duyệt từ MSB (bit 7) xuống LSB (bit 0), in `'1'` hoặc `'0'` ra USART0 để soi trực tiếp thanh ghi `PORTB`/`SREG` trên Serial Monitor!",
      "filename": "avr_print_bin.c",
      "lines": [
        {
          "code": "uint8_t val = 0xA5; // 1010_0101\nfor (int8_t i = 7; i >= 0; i--) {",
          "phase": "SETUP",
          "explain": "Dùng `int8_t i` (có dấu!) cho vòng lặp đếm ngược về 0 để KHÔNG bị lỗi underflow vô tận của `uint8_t`!",
          "cards": [
            [
              "val",
              "0xA5",
              "blue"
            ],
            [
              "Kiểu i",
              "int8_t (an toàn)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "In MSB → LSB: 10100101",
            "val": 165,
            "prev": 165,
            "mask": 128,
            "labels": [],
            "note": "Quét từ bit 7 xuống bit 0"
          }
        },
        {
          "code": "binary[7 - i] = (val & (1U << i)) ? '1' : '0';\n}\nbinary[8] = '\\0';",
          "phase": "OUTPUT",
          "explain": "Gửi lần lượt 8 ký tự `'1','0','1','0','0','1','0','1'` qua `UDR0` — cực kỳ tiện debug không cần `printf`!",
          "cards": [
            [
              "UART Output",
              "\"10100101\"",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Output: 10100101",
            "val": 165,
            "prev": 165,
            "mask": 255,
            "labels": [],
            "note": "8 ký tự ASCII đã phát ra Terminal",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Gắn thêm dấu `'_'` ở giữa (`if (i == 4) uart_putc('_');`) để dễ đọc hai nibble: `1010_0101`!",
      "pitfall": "BẪY QUEN THUỘC: Nếu đổi `int8_t i` thành `uint8_t i`, vòng lặp sẽ chạy vô tận!",
      "tests": [
        "+ 0xA5 → \"10100101\""
      ],
      "problem": {
        "scenario": "Chuẩn bị chuỗi nhị phân của byte chụp từ PORTB để gửi USART0. Duyệt bit 7 đến 0 và dành byte kết thúc.\n\nViết tám ký tự nhị phân tương ứng với val vào binary[9]. Duyệt từ bit 7 xuống bit 0, ghi '1' nếu bit bật, nếu không ghi '0'. Byte cuối phải là ký tự kết thúc. Có thể gửi chuỗi qua UART sau khi đã có driver.",
        "prototype": "void print_bin_solve(void)",
        "workedExample": [
          "Bước 1: Dùng `int8_t i` (có dấu!) cho vòng lặp đếm ngược về 0 để KHÔNG bị lỗi underflow vô tận của `uint8_t`!. (val=0xA5, Kiểu i=int8_t (an toàn))",
          "Bước 2: Gửi lần lượt 8 ký tự `'1','0','1','0','0','1','0','1'` qua `UDR0` — cực kỳ tiện debug không cần `printf`!. (UART Output=\"10100101\")"
        ],
        "testRows": [
          [
            "Case 1",
            "0xA5",
            "\"10100101\""
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Xem chuỗi binary trong bộ nhớ. Với val = 0xA5, cần có tám ký tự 10100101 theo sau bởi byte 0.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 113 · ATmega328P */\nint main(void) {\n    uint8_t val = 0xA5;\n    char binary[9] = {0};\n    /* TODO: Ghi tám ký tự vào binary. Chừa byte cuối bằng 0. */\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Gắn thêm dấu `'_'` ở giữa (`if (i == 4) uart_putc('_');`) để dễ đọc hai nibble: `1010_0101`!",
        "hint2": "BẪY QUEN THUỘC: Nếu đổi `int8_t i` thành `uint8_t i`, vòng lặp sẽ chạy vô tận!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "In MSB → LSB: 10100101",
          "val": 165,
          "prev": 165,
          "mask": 128,
          "labels": [],
          "note": "Quét từ bit 7 xuống bit 0"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Output: 10100101",
          "val": 165,
          "prev": 165,
          "mask": 255,
          "labels": [],
          "note": "8 ký tự ASCII đã phát ra Terminal",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 114,
      "type": "task",
      "ewTitle": "Convert Decimal Number to Binary or Hex Without itoa function",
      "title": "Chuyển số Thập phân sang Nhị phân/Hex không dùng `itoa`",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M8 & M13",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dùng bảng ký tự `\"0123456789ABCDEF\"` và phép dịch/chia theo cơ số `base` (2 hoặc 16) để xuất chuỗi siêu gọn.",
      "filename": "avr_dec_to_base.c",
      "lines": [
        {
          "code": "const char HEX[] = \"0123456789ABCDEF\";\nuint8_t n = 218; // 0xDA",
          "phase": "SETUP",
          "explain": "Với cơ số 16 (lũy thừa 2), thay vì dùng phép chia chậm `/ 16` và `% 16`, ta dùng `>> 4` và `& 0x0F`!",
          "cards": [
            [
              "n",
              "218 (0xDA)",
              "blue"
            ],
            [
              "Nibble cao/thấp",
              "13('D') / 10('A')",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "218 = 0xDA",
            "val": 218,
            "prev": 218,
            "mask": 255,
            "labels": [],
            "note": "1101 (D) | 1010 (A)"
          }
        },
        {
          "code": "buf[0] = HEX[n >> 4]; buf[1] = HEX[n & 0x0F]; buf[2] = '\\0';",
          "phase": "OUTPUT",
          "explain": "Thu được chuỗi `\"DA\"` chỉ trong vài chu kỳ xung mà không tốn 1 lệnh chia nào!",
          "cards": [
            [
              "buf",
              "\"DA\"",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả: \"DA\\0\"",
            "cells": [
              {
                "addr": "0",
                "label": "hi",
                "val": "'D'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "lo",
                "val": "'A'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "\\0",
                "val": "0",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Nhanh gấp 20 lần sprintf(\"%X\")!"
          }
        }
      ],
      "remember": "Với cơ số 2 và 16, luôn dùng dịch bit và mặt nạ thay cho phép chia `/` và `%` trên AVR.",
      "pitfall": "Đừng quên trường hợp `n == 0` phải xuất ra `\"0\"` thay vì chuỗi rỗng!",
      "tests": [
        "+ 218 base 16 → \"DA\""
      ],
      "problem": {
        "scenario": "Đổi số đo thành cơ số 2 hoặc 16 trong bộ đệm SRAM trước khi in UART. Kiểm số 0 và kích thước đích.\n\nHàm `printf`/`sprintf` chuẩn ngốn ~2 KB Flash trên ATmega328P. Bạn cần tự viết bộ chuyển đổi dữ liệu nhị phân/hex/thập phân và đổi Endianness cho cảm biến I2C/SPI. Yêu cầu: Dùng bảng ký tự `\"0123456789ABCDEF\"` và phép dịch/chia theo cơ số `base` (2 hoặc 16) để xuất chuỗi siêu gọn.",
        "prototype": "void dec_to_base_solve(void)",
        "workedExample": [
          "Bước 1: Với cơ số 16 (lũy thừa 2), thay vì dùng phép chia chậm `/ 16` và `% 16`, ta dùng `>> 4` và `& 0x0F`!. (n=218 (0xDA), Nibble cao/thấp=13('D') / 10('A'))",
          "Bước 2: Thu được chuỗi `\"DA\"` chỉ trong vài chu kỳ xung mà không tốn 1 lệnh chia nào!. (buf=\"DA\")"
        ],
        "testRows": [
          [
            "Case 1",
            "218 base 16",
            "\"DA\""
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 114: Chuyển số Thập phân sang Nhị phân/Hex không dùng `itoa`\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void dec_to_base_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const char HEX[] = \"0123456789ABCDEF\";\n    uint8_t n = 218; // 0xDA\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Với cơ số 2 và 16, luôn dùng dịch bit và mặt nạ thay cho phép chia `/` và `%` trên AVR.",
        "hint2": "Đừng quên trường hợp `n == 0` phải xuất ra `\"0\"` thay vì chuỗi rỗng!",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "218 = 0xDA",
          "val": 218,
          "prev": 218,
          "mask": 255,
          "labels": [],
          "note": "1101 (D) | 1010 (A)"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả: \"DA\\0\"",
          "cells": [
            {
              "addr": "0",
              "label": "hi",
              "val": "'D'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "lo",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "\\0",
              "val": "0",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Nhanh gấp 20 lần sprintf(\"%X\")!"
        }
      }
    },
    {
      "id": 115,
      "type": "task",
      "ewTitle": "Convert Integer to String",
      "title": "Tự viết `my_itoa` (In giá trị ADC/RPM ra LCD 16x2 & UART)",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M8 & M13",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "USART"
      ],
      "summary": "Chuyển số nguyên có dấu `int16_t` (vd `-1250`) thành chuỗi ASCII `\"-1250\"` bằng chia 10 lặp và đảo chuỗi tại chỗ.",
      "filename": "avr_itoa.c",
      "lines": [
        {
          "code": "int16_t n = -1250; char buf[7]; uint8_t i = 0;",
          "phase": "SETUP",
          "explain": "Số `int16_t` ngắn nhất là `-32768` (6 ký tự + 1 `'\\0'` = 7 byte). Ta dùng `buf[7]`.",
          "cards": [
            [
              "n",
              "-1250",
              "blue"
            ],
            [
              "buf",
              "char[7]",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Chuẩn bị chuyển -1250 → ASCII",
            "cells": [
              {
                "addr": "n",
                "label": "int16_t",
                "val": "-1250",
                "active": true,
                "tone": "blue"
              }
            ],
            "pointers": [],
            "note": "Xử lý dấu âm an toàn cả với -32768",
            "ring": null
          }
        },
        {
          "code": "uint8_t neg = (n < 0);\nuint16_t u = neg ? (uint16_t)(0U - (uint16_t)n) : (uint16_t)n;",
          "phase": "EXECUTION",
          "explain": "Ép sang `uint16_t` trước khi lấy bù 2 `0U - (uint16_t)n` giúp xử lý an toàn cả giá trị cực trị `-32768` (mà viết `-n` thông thường bị tràn!).",
          "cards": [
            [
              "neg",
              "1 (Âm)",
              "amber"
            ],
            [
              "u",
              "1250",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Lấy trị tuyệt đối u = 1250",
            "cells": [
              {
                "addr": "u",
                "label": "uint16_t",
                "val": "1250",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "neg",
                "label": "Dấu âm",
                "val": "1",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Bắt đầu chia lấy dư cho 10",
            "ring": null
          }
        },
        {
          "code": "do { buf[i++] = (char)('0' + (u % 10U)); u /= 10U; } while (u > 0);\nif (neg) buf[i++] = '-';\nbuf[i] = '\\0';",
          "phase": "EXECUTION",
          "explain": "Dùng `do-while` để khi `n == 0` vẫn ghi được `'0'`. Lúc này `buf` chứa chuỗi ngược `\"0521-\"`.",
          "cards": [
            [
              "Trước đảo",
              "\"0521-\"",
              "amber"
            ],
            [
              "Độ dài i",
              "5",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Chuỗi ngược trong buf: \"0521-\"",
            "cells": [
              {
                "addr": "0",
                "label": "0",
                "val": "'0'",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "1",
                "label": "1",
                "val": "'5'",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "2",
                "label": "2",
                "val": "'2'",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "3",
                "label": "3",
                "val": "'1'",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "4",
                "label": "4",
                "val": "'-'",
                "active": true,
                "tone": "rose"
              }
            ],
            "pointers": [],
            "note": "Cần đảo ngược buf[0..4]",
            "ring": null
          }
        },
        {
          "code": "for (uint8_t l = 0, r = i - 1; l < r; l++, r--) { char t = buf[l]; buf[l] = buf[r]; buf[r] = t; }",
          "phase": "OUTPUT",
          "explain": "Đảo ngược tại chỗ → `buf = \"-1250\"` sẵn sàng gửi ra LCD 16x2 hoặc UART!",
          "cards": [
            [
              "buf",
              "\"-1250\"",
              "green"
            ],
            [
              "Tiết kiệm Flash",
              ">1.5 KB vs sprintf",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả cuối: \"-1250\\0\"",
            "cells": [
              {
                "addr": "0",
                "label": "0",
                "val": "'-'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "1",
                "val": "'1'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2",
                "label": "2",
                "val": "'2'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "3",
                "val": "'5'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "4",
                "val": "'0'",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Hoàn tất itoa không dùng thư viện chuẩn!",
            "ring": null
          }
        }
      ],
      "remember": "Dùng `uint16_t u = (n < 0) ? (uint16_t)(0U - (uint16_t)n) : (uint16_t)n;` xử lý được cả biên cực trị `-32768` mà không bị tràn signed!",
      "pitfall": "Luôn đảm bảo mảng đích có ít nhất 7 byte (cho `int16_t`) hoặc 12 byte (cho `int32_t`).",
      "tests": [
        "+ -1250 → \"-1250\"",
        "+ 0 → \"0\""
      ],
      "problem": {
        "scenario": "Hiển thị ADC/RPM qua LCD hoặc UART. Sinh chữ số trong vùng SRAM hữu hạn và cẩn thận với giá trị âm nhỏ nhất.\n\nHàm `printf`/`sprintf` chuẩn ngốn ~2 KB Flash trên ATmega328P. Bạn cần tự viết bộ chuyển đổi dữ liệu nhị phân/hex/thập phân và đổi Endianness cho cảm biến I2C/SPI. Yêu cầu: Chuyển số nguyên có dấu `int16_t` (vd `-1250`) thành chuỗi ASCII `\"-1250\"` bằng chia 10 lặp và đảo chuỗi tại chỗ.",
        "prototype": "void itoa_solve(void)",
        "workedExample": [
          "Bước 1: Số `int16_t` ngắn nhất là `-32768` (6 ký tự + 1 `'\\0'` = 7 byte). (n=-1250, buf=char[7])",
          "Bước 2: Ép sang `uint16_t` trước khi lấy bù 2 `0U - (uint16_t)n` giúp xử lý an toàn cả giá trị cực trị `-32768` (mà viết `-n` thông thường bị tràn!). (neg=1 (Âm), u=1250)",
          "Bước 3: Dùng `do-while` để khi `n == 0` vẫn ghi được `'0'`. (Trước đảo=\"0521-\", Độ dài i=5)"
        ],
        "testRows": [
          [
            "Case 1",
            "1250",
            "\"-1250\""
          ],
          [
            "Case 2",
            "0",
            "\"0\""
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 115: Tự viết `my_itoa` (In giá trị ADC/RPM ra LCD 16x2 & UART)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void itoa_solve(void)\n * ============================================================ */\n\nint main(void) {\n    int16_t n = -1250; char buf[7]; uint8_t i = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Dùng `uint16_t u = (n < 0) ? (uint16_t)(0U - (uint16_t)n) : (uint16_t)n;` xử lý được cả biên cực trị `-32768` mà không bị tràn signed!",
        "hint2": "Luôn đảm bảo mảng đích có ít nhất 7 byte (cho `int16_t`) hoặc 12 byte (cho `int32_t`).",
        "initViz": {
          "kind": "memory",
          "title": "Chuẩn bị chuyển -1250 → ASCII",
          "cells": [
            {
              "addr": "n",
              "label": "int16_t",
              "val": "-1250",
              "active": true,
              "tone": "blue"
            }
          ],
          "pointers": [],
          "note": "Xử lý dấu âm an toàn cả với -32768",
          "ring": null
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả cuối: \"-1250\\0\"",
          "cells": [
            {
              "addr": "0",
              "label": "0",
              "val": "'-'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "1",
              "val": "'1'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2",
              "label": "2",
              "val": "'2'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "3",
              "val": "'5'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "4",
              "val": "'0'",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Hoàn tất itoa không dùng thư viện chuẩn!",
          "ring": null
        }
      }
    },
    {
      "id": 116,
      "type": "task",
      "ewTitle": "Convert Binary String to Integer Without strtol function or Libraries",
      "title": "Chuyển chuỗi Nhị phân (`\"101101\"`) sang Số nguyên không dùng `strtol`",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M9",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dịch trái 1 bit rồi cộng bit mới: `val = (val << 1) | (*p - '0')`.",
      "filename": "avr_binstr_to_int.c",
      "lines": [
        {
          "code": "const char *s = \"101101\"; uint16_t val = 0;",
          "phase": "SETUP",
          "explain": "Mỗi ký tự `'0'` hoặc `'1'` dịch giá trị cũ sang trái 1 bit (nhân 2) rồi OR bit mới vào bit 0.",
          "cards": [
            [
              "s",
              "\"101101\"",
              "blue"
            ],
            [
              "Kỳ vọng",
              "45 (0x2D)",
              "purple"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "val = 0x2D (45)",
            "val": 45,
            "prev": 0,
            "mask": 63,
            "labels": [],
            "note": "1→2→5→11→22→45"
          }
        },
        {
          "code": "while (*s == '0' || *s == '1') val = (val << 1) | (uint16_t)(*s++ - '0');",
          "phase": "OUTPUT",
          "explain": "Hoàn tất trong O(n) chỉ với 1 phép dịch trái và 1 phép OR mỗi ký tự → `val = 45`!",
          "cards": [
            [
              "val",
              "45 (0x2D)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Kết quả = 45 (0x2D)",
            "val": 45,
            "prev": 0,
            "mask": 63,
            "labels": [],
            "note": "0b0010_1101 = 45",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Bỏ qua tiền tố `\"0b\"` nếu có trước khi chạy vòng lặp.",
      "pitfall": "Kiểm tra số ký tự <= 16 để không tràn `uint16_t`.",
      "tests": [
        "+ \"101101\" → 45"
      ],
      "problem": {
        "scenario": "Nhận chuỗi bit qua UART để cấu hình từ dữ liệu phần mềm. Kiểm từng ký tự và tràn trước khi dịch.\n\nHàm `printf`/`sprintf` chuẩn ngốn ~2 KB Flash trên ATmega328P. Bạn cần tự viết bộ chuyển đổi dữ liệu nhị phân/hex/thập phân và đổi Endianness cho cảm biến I2C/SPI. Yêu cầu: Dịch trái 1 bit rồi cộng bit mới: `val = (val << 1) | (*p - '0')`.",
        "prototype": "void binstr_to_int_solve(void)",
        "workedExample": [
          "Bước 1: Mỗi ký tự `'0'` hoặc `'1'` dịch giá trị cũ sang trái 1 bit (nhân 2) rồi OR bit mới vào bit 0. (s=\"101101\", Kỳ vọng=45 (0x2D))",
          "Bước 2: Hoàn tất trong O(n) chỉ với 1 phép dịch trái và 1 phép OR mỗi ký tự → `val = 45`!. (val=45 (0x2D))"
        ],
        "testRows": [
          [
            "Case 1",
            "\"101101\"",
            "45"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 116: Chuyển chuỗi Nhị phân (`\"101101\"`) sang Số nguyên không dùng `strtol`\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void binstr_to_int_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const char *s = \"101101\"; uint16_t val = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Bỏ qua tiền tố `\"0b\"` nếu có trước khi chạy vòng lặp.",
        "hint2": "Kiểm tra số ký tự <= 16 để không tràn `uint16_t`.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "val = 0x2D (45)",
          "val": 45,
          "prev": 0,
          "mask": 63,
          "labels": [],
          "note": "1→2→5→11→22→45"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Kết quả = 45 (0x2D)",
          "val": 45,
          "prev": 0,
          "mask": 63,
          "labels": [],
          "note": "0b0010_1101 = 45",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 117,
      "type": "task",
      "ewTitle": "Convert Hexadecimal String to Integer Without strtol or sscanf functions",
      "title": "Chuyển chuỗi Hex (`\"0x2F\"`) sang Số nguyên (Giải mã Intel HEX / Bootloader)",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M8 & M9",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Dịch trái 4 bit (`val << 4`) rồi ghép giá trị nibble (0..15) từ ký tự `'0'..'9'`, `'A'..'F'`, `'a'..'f'`.",
      "filename": "avr_hexstr_to_int.c",
      "lines": [
        {
          "code": "const char *s = \"2F\"; uint16_t val = 0;",
          "phase": "SETUP",
          "explain": "Xử lý `'2'` → `val = 0x02`; sau đó xử lý `'F'` (`'F' - 'A' + 10 = 15`) → `val = (0x02 << 4) | 0x0F = 0x2F` (47).",
          "cards": [
            [
              "s",
              "\"2F\"",
              "blue"
            ],
            [
              "'F' → nibble",
              "15 (0xF)",
              "amber"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "val = 0x2F (47)",
            "val": 47,
            "prev": 2,
            "mask": 255,
            "labels": [],
            "note": "0010_1111 = 47"
          }
        },
        {
          "code": "val = (val << 4) | nib; // 0x2F = 47",
          "phase": "OUTPUT",
          "explain": "Chính là thuật toán cốt lõi trong Bootloader AVR khi giải mã file `.hex`!",
          "cards": [
            [
              "val",
              "47 (0x2F)",
              "green"
            ]
          ],
          "viz": {
            "kind": "bits",
            "width": 8,
            "reg": "Kết quả = 0x2F (47)",
            "val": 47,
            "prev": 0,
            "mask": 255,
            "labels": [],
            "note": "Giải mã Hex siêu nhẹ không cần strtol",
            "op": "SHIFT LEFT (<<)"
          }
        }
      ],
      "remember": "Bỏ qua tiền tố `\"0x\"` hoặc `\"0X\"` nếu chuỗi có tiền tố.",
      "pitfall": "Hỗ trợ cả chữ hoa `'A'..'F'` lẫn chữ thường `'a'..'f'`.",
      "tests": [
        "+ \"2F\" → 47 (0x2F)",
        "+ \"0xFF\" → 255"
      ],
      "problem": {
        "scenario": "Giải mã một trường hex nhận qua UART của công cụ nạp. Kiểm toàn bộ ký tự và miền đích trước khi dùng giá trị.\n\nHàm `printf`/`sprintf` chuẩn ngốn ~2 KB Flash trên ATmega328P. Bạn cần tự viết bộ chuyển đổi dữ liệu nhị phân/hex/thập phân và đổi Endianness cho cảm biến I2C/SPI. Yêu cầu: Dịch trái 4 bit (`val << 4`) rồi ghép giá trị nibble (0..15) từ ký tự `'0'..'9'`, `'A'..'F'`, `'a'..'f'`.",
        "prototype": "void hexstr_to_int_solve(void)",
        "workedExample": [
          "Bước 1: Xử lý `'2'` → `val = 0x02`; sau đó xử lý `'F'` (`'F' - 'A' + 10 = 15`) → `val = (0x02 << 4) | 0x0F = 0x2F` (47). (s=\"2F\", 'F' → nibble=15 (0xF))",
          "Bước 2: Chính là thuật toán cốt lõi trong Bootloader AVR khi giải mã file `. (val=47 (0x2F))"
        ],
        "testRows": [
          [
            "Case 1",
            "\"2F\"",
            "47 (0x2F)"
          ],
          [
            "Case 2",
            "\"0xFF\"",
            "255"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 117: Chuyển chuỗi Hex (`\"0x2F\"`) sang Số nguyên (Giải mã Intel HEX / Bootloader)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void hexstr_to_int_solve(void)\n * ============================================================ */\n\nint main(void) {\n    const char *s = \"2F\"; uint16_t val = 0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Bỏ qua tiền tố `\"0x\"` hoặc `\"0X\"` nếu chuỗi có tiền tố.",
        "hint2": "Hỗ trợ cả chữ hoa `'A'..'F'` lẫn chữ thường `'a'..'f'`.",
        "initViz": {
          "kind": "bits",
          "width": 8,
          "reg": "val = 0x2F (47)",
          "val": 47,
          "prev": 2,
          "mask": 255,
          "labels": [],
          "note": "0010_1111 = 47"
        },
        "targetViz": {
          "kind": "bits",
          "width": 8,
          "reg": "Kết quả = 0x2F (47)",
          "val": 47,
          "prev": 0,
          "mask": 255,
          "labels": [],
          "note": "Giải mã Hex siêu nhẹ không cần strtol",
          "op": "SHIFT LEFT (<<)"
        }
      }
    },
    {
      "id": 118,
      "type": "task",
      "ewTitle": "Convert Integer to Hex String Without sprintf or itoa functions",
      "title": "Chuyển Số nguyên 16-bit sang chuỗi Hex `\"0x03A5\"` (In địa chỉ SRAM/Thanh ghi)",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M8 & M13",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "bits",
      "hwBlocks": [
        "CPU",
        "USART"
      ],
      "summary": "Lần lượt trích 4 nibble từ bit 12 xuống bit 0 bằng `(val >> shift) & 0x0F` và tra bảng `\"0123456789ABCDEF\"`.",
      "filename": "avr_int_to_hex.c",
      "lines": [
        {
          "code": "uint16_t v = 0x03A5;\nfor(int8_t s=12; s>=0; s-=4) *p++ = HEX[(v >> s) & 0x0F];",
          "phase": "OUTPUT",
          "explain": "Trích lần lượt `0`, `3`, `A`, `5` → chuỗi `\"03A5\"` dài cố định 4 ký tự, rất đẹp khi in bảng dump bộ nhớ SRAM qua UART!",
          "cards": [
            [
              "v",
              "0x03A5",
              "blue"
            ],
            [
              "Output",
              "\"03A5\"",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Chuỗi Hex: \"03A5\\0\"",
            "cells": [
              {
                "addr": "0",
                "label": "N3",
                "val": "'0'",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "N2",
                "val": "'3'",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "N1",
                "val": "'A'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "N0",
                "val": "'5'",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "\\0",
                "val": "0",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Thay thế hoàn hảo sprintf(\"%04X\")!"
          }
        }
      ],
      "remember": "Hàm này chỉ tốn ~40 byte Flash so với ~1,800 byte của `sprintf`!",
      "pitfall": "Nhớ gắn `'\\0'` vào cuối mảng đích sau vòng lặp.",
      "tests": [
        "+ 0x03A5 → \"03A5\""
      ],
      "problem": {
        "scenario": "Định dạng giá trị mẫu 16 bit để xem qua USART0. Giữ đủ bốn chữ số hex, kể cả số 0 đầu.\n\nHàm `printf`/`sprintf` chuẩn ngốn ~2 KB Flash trên ATmega328P. Bạn cần tự viết bộ chuyển đổi dữ liệu nhị phân/hex/thập phân và đổi Endianness cho cảm biến I2C/SPI. Yêu cầu: Lần lượt trích 4 nibble từ bit 12 xuống bit 0 bằng `(val >> shift) & 0x0F` và tra bảng `\"0123456789ABCDEF\"`.",
        "prototype": "void int_to_hex_solve(void)",
        "workedExample": [
          "Bước 1: Trích lần lượt `0`, `3`, `A`, `5` → chuỗi `\"03A5\"` dài cố định 4 ký tự, rất đẹp khi in bảng dump bộ nhớ SRAM qua UART!. (v=0x03A5, Output=\"03A5\")"
        ],
        "testRows": [
          [
            "Case 1",
            "0x03A5",
            "\"03A5\""
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, USART), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#include <avr/io.h>\n#include <stdint.h>\n\n/* Bài 118 · ATmega328P */\nint main(void) {\n    const uint16_t v = 0x03A5;\n    const char hex[] = \"0123456789ABCDEF\";\n    char text[5] = {0};\n\n    /* Hoàn thành phần xử lý tại đây. */\n    while (1) { /* Điểm dừng để quan sát. */ }\n}\n",
        "hint1": "Hàm này chỉ tốn ~40 byte Flash so với ~1,800 byte của `sprintf`!",
        "hint2": "Nhớ gắn `'\\0'` vào cuối mảng đích sau vòng lặp.",
        "initViz": {
          "kind": "memory",
          "title": "Chuỗi Hex: \"03A5\\0\"",
          "cells": [
            {
              "addr": "0",
              "label": "N3",
              "val": "'0'",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "1",
              "label": "N2",
              "val": "'3'",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "N1",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "N0",
              "val": "'5'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "\\0",
              "val": "0",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Thay thế hoàn hảo sprintf(\"%04X\")!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Chuỗi Hex: \"03A5\\0\"",
          "cells": [
            {
              "addr": "0",
              "label": "N3",
              "val": "'0'",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "1",
              "label": "N2",
              "val": "'3'",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "N1",
              "val": "'A'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "N0",
              "val": "'5'",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "\\0",
              "val": "0",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Thay thế hoàn hảo sprintf(\"%04X\")!"
        }
      }
    },
    {
      "id": 119,
      "type": "quiz",
      "ewTitle": "Data Conversion and Encoding-i",
      "title": "Quiz: Endianness & Chuyển đổi Nhị phân/Hex không dùng thư viện nặng",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M8 & M13",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "USART"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Data Conversion and Encoding-i.",
      "questions": [
        {
          "q": "ATmega328P sử dụng kiến trúc Endianness nào?",
          "opts": [
            "Big-Endian",
            "Little-Endian (byte thấp ở địa chỉ thấp)",
            "Mixed-Endian",
            "Tùy chọn bằng Fuse bit"
          ],
          "ans": 1,
          "exp": "Tất cả vi điều khiển AVR (ATmega328P) đều là Little-Endian."
        },
        {
          "q": "Để chuyển 1 nibble (0..15) thành ký tự Hex `'0'..'9'` hoặc `'A'..'F'`, cách nhanh nhất trên AVR là?",
          "opts": [
            "Dùng bảng tra `\"0123456789ABCDEF\"[nib]`",
            "Dùng sprintf()",
            "Dùng hàm pow()",
            "Dùng switch 16 nhánh với float"
          ],
          "ans": 0,
          "exp": "Tra mảng 16 ký tự (tốt nhất đặt trong `PROGMEM`) chạy tức thì trong O(1)."
        },
        {
          "q": "Phép dịch `val = (val << 4) | nib;` tương đương với phép toán số học nào?",
          "opts": [
            "val = val * 4 + nib",
            "val = val * 16 + nib",
            "val = val + 4 + nib",
            "val = val / 16 + nib"
          ],
          "ans": 1,
          "exp": "Dịch trái 4 bit chính là nhân 2^4 = 16."
        },
        {
          "q": "SPI nhận 0x12 rồi 0x34 theo thứ tự byte cao trước. Ghép được gì?",
          "opts": [
            "0x1200",
            "0x3412",
            "0x1234"
          ],
          "ans": 2,
          "exp": "Dịch byte cao 8 bit rồi OR byte thấp."
        }
      ],
      "remember": "Tự viết các hàm in Hex/Bin/Dec giúp bạn có hệ thống UART Debug gọn nhẹ chỉ vài trăm byte Flash.",
      "pitfall": "Chú ý vòng lặp đếm ngược phải dùng kiểu có dấu (`int8_t`)!",
      "avrContext": "So sánh thứ tự byte của AVR với thứ tự byte trên dây. Dự đoán chuỗi hiển thị sau khi chuyển sang hex."
    },
    {
      "id": 120,
      "type": "quiz",
      "ewTitle": "Data Conversion and Encoding-ii",
      "title": "Quiz: Tối ưu Flash Debug UART trên ATmega328P",
      "moduleId": "m11_convert",
      "brochureRef": "Brochure M8 & M13",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "USART"
      ],
      "summary": "Kiểm tra trắc nghiệm ATmega328P phần Data Conversion and Encoding-ii.",
      "questions": [
        {
          "q": "Khi in số nhị phân 8-bit bằng vòng lặp đếm ngược `for (i = 7; i >= 0; i--)`, tại sao biến `i` PHẢI là `int8_t` thay vì `uint8_t`?",
          "opts": [
            "Tiết kiệm RAM",
            "Nếu là `uint8_t`, sau i=0 giảm thành 255 nên `i >= 0` luôn ĐÚNG → treo vòng lặp vô tận!",
            "Vì `1U << i` cần số âm",
            "Không có lý do"
          ],
          "ans": 1,
          "exp": "Unsigned underflow khiến vòng lặp không bao giờ kết thúc."
        },
        {
          "q": "Kết quả của `__builtin_bswap16(0x0A1F)` là bao nhiêu?",
          "opts": [
            "0xF1A0",
            "0x1F0A",
            "0xA0F1",
            "0x0A1F"
          ],
          "ans": 1,
          "exp": "Hoán đổi 2 byte `0x0A` và `0x1F` thành `0x1F0A`."
        },
        {
          "q": "Chuỗi `\"0x1A\"` chuyển sang số nguyên thập phân có giá trị là bao nhiêu?",
          "opts": [
            "16",
            "26",
            "24",
            "32"
          ],
          "ans": 1,
          "exp": "1 × 16 + 10 = 26."
        },
        {
          "q": "In mã ADC 0x03A5 qua UART thành chuỗi bốn chữ số hex. Cần bao nhiêu byte?",
          "opts": [
            "5",
            "4",
            "8"
          ],
          "ans": 0,
          "exp": "Bốn ký tự cộng byte kết thúc."
        }
      ],
      "remember": "Tự viết các hàm in Hex/Bin/Dec giúp bạn có hệ thống UART Debug gọn nhẹ chỉ vài trăm byte Flash.",
      "pitfall": "Chú ý vòng lặp đếm ngược phải dùng kiểu có dấu (`int8_t`)!",
      "avrContext": "Đo Flash của bản build AVR khi chọn cách định dạng nhật ký USART0. Tính cả dung lượng bộ đệm ở SRAM."
    },
    {
      "id": 121,
      "type": "task",
      "ewTitle": "Linear Search in Array",
      "title": "Tìm kiếm tuyến tính (Tra cứu địa chỉ cảm biến I2C / Mã lệnh)",
      "moduleId": "m12_sort",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM",
        "TWI"
      ],
      "summary": "Duyệt tuần tự mảng nhỏ (< 16 phần tử) để tìm mã thiết bị I2C hoặc mã lỗi.",
      "filename": "avr_linear_search.c",
      "lines": [
        {
          "code": "uint8_t devs[4] = {0x27, 0x3C, 0x68, 0x76};\nint8_t idx = -1;",
          "phase": "SETUP",
          "explain": "Danh sách 4 thiết bị I2C quen thuộc trên ATmega328P: LCD PCF8574 (0x27), OLED SSD1306 (0x3C), MPU6050 (0x68), BMP280 (0x76).",
          "cards": [
            [
              "Tìm",
              "0x68 (MPU6050)",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Quét danh sách thiết bị I2C",
            "cells": [
              {
                "addr": "0",
                "label": "LCD",
                "val": "0x27",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "OLED",
                "val": "0x3C",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "MPU6050 ✓",
                "val": "0x68",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "BMP280",
                "val": "0x76",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Tìm thấy 0x68 tại index 2"
          }
        },
        {
          "code": "for(uint8_t i=0;i<4;i++) if(devs[i]==0x68) { idx=i; break; }",
          "phase": "OUTPUT",
          "explain": "Tìm thấy ngay tại `idx = 2` và `break` sớm. Với mảng nhỏ (<16 phần tử), tìm kiếm tuyến tính nhanh và gọn hơn mọi thuật toán phức tạp!",
          "cards": [
            [
              "idx",
              "2",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Tìm thấy MPU6050 tại idx=2",
            "cells": [
              {
                "addr": "2",
                "label": "MATCH",
                "val": "0x68",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Trả về -1 nếu không tìm thấy"
          }
        }
      ],
      "remember": "Trả về `int8_t` (-1 khi không thấy) để phân biệt rõ với vị trí đầu tiên `0`.",
      "pitfall": "Với mảng chưa sắp xếp, Linear Search là lựa chọn duy nhất với độ phức tạp O(n).",
      "tests": [
        "+ tìm 0x68 → idx=2",
        "- tìm 0x50 → idx=-1"
      ],
      "problem": {
        "scenario": "Duyệt danh sách địa chỉ thiết bị TWI đã lưu trong SRAM. Phân biệt chỉ số mảng tìm được với địa chỉ trên bus.\n\nĐể lọc nhiễu gai ADC (Median Filter) hoặc tra bảng nhiệt độ NTC lưu trong Flash `PROGMEM` trên ATmega328P, bạn cần thuật toán tìm kiếm/sắp xếp không đệ quy, tốn O(1) Stack. Bài toán: Duyệt tuần tự mảng nhỏ (< 16 phần tử) để tìm mã thiết bị I2C hoặc mã lỗi.",
        "prototype": "void linear_search_solve(void)",
        "workedExample": [
          "Bước 1: Danh sách 4 thiết bị I2C quen thuộc trên ATmega328P: LCD PCF8574 (0x27), OLED SSD1306 (0x3C), MPU6050 (0x68), BMP280 (0x76). (Tìm=0x68 (MPU6050))",
          "Bước 2: Tìm thấy ngay tại `idx = 2` và `break` sớm. (idx=2)"
        ],
        "testRows": [
          [
            "Case 1",
            "tìm 0x68",
            "idx=2"
          ],
          [
            "Case 2",
            "tìm 0x50",
            "idx=-1"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM, TWI), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 121: Tìm kiếm tuyến tính (Tra cứu địa chỉ cảm biến I2C / Mã lệnh)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void linear_search_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t devs[4] = {0x27, 0x3C, 0x68, 0x76};\n    int8_t idx = -1;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trả về `int8_t` (-1 khi không thấy) để phân biệt rõ với vị trí đầu tiên `0`.",
        "hint2": "Với mảng chưa sắp xếp, Linear Search là lựa chọn duy nhất với độ phức tạp O(n).",
        "initViz": {
          "kind": "memory",
          "title": "Quét danh sách thiết bị I2C",
          "cells": [
            {
              "addr": "0",
              "label": "LCD",
              "val": "0x27",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "OLED",
              "val": "0x3C",
              "active": false,
              "tone": ""
            },
            {
              "addr": "2",
              "label": "MPU6050 ✓",
              "val": "0x68",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "BMP280",
              "val": "0x76",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Tìm thấy 0x68 tại index 2"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Tìm thấy MPU6050 tại idx=2",
          "cells": [
            {
              "addr": "2",
              "label": "MATCH",
              "val": "0x68",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Trả về -1 nếu không tìm thấy"
        }
      }
    },
    {
      "id": 122,
      "type": "task",
      "ewTitle": "Binary Search in Sorted Array",
      "title": "Tìm kiếm Nhị phân trên Bảng tra nhiệt độ NTC (Flash PROGMEM)",
      "moduleId": "m12_sort",
      "brochureRef": "Brochure M4 & M11 (ADC LUT)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "FLASH",
        "ADC"
      ],
      "summary": "Tra cứu giá trị ADC trong bảng tra đã sắp xếp lưu trong Flash `PROGMEM` bằng Binary Search — chỉ tốn tối đa 7 bước cho bảng 128 điểm (thay vì tính hàm `log()` float nặng nề!).",
      "filename": "avr_binary_search.c",
      "lines": [
        {
          "code": "uint16_t lut[6] = {150, 280, 420, 590, 760, 910};\nuint8_t lo = 0, hi = 5, target = 590;",
          "phase": "SETUP",
          "explain": "Bảng tra ADC đã sắp tăng dần (ứng với 0°C, 10°C, 20°C, 30°C, 40°C, 50°C).",
          "cards": [
            [
              "target",
              "590",
              "blue"
            ],
            [
              "lo / hi",
              "0 / 5",
              "amber"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Binary Search (lo=0, hi=5)",
            "cells": [
              {
                "addr": "0",
                "label": "0°C",
                "val": "150",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "10°C",
                "val": "280",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "mid=2",
                "val": "420",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "3",
                "label": "30°C",
                "val": "590",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "40°C",
                "val": "760",
                "active": false,
                "tone": ""
              },
              {
                "addr": "5",
                "label": "50°C",
                "val": "910",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "420 < 590 → nâng lo = mid + 1 = 3"
          }
        },
        {
          "code": "uint8_t mid = lo + ((hi - lo) >> 1); // tránh tràn (lo+hi)!",
          "phase": "OUTPUT",
          "explain": "Mẹo tránh tràn 8-bit: luôn viết `lo + ((hi - lo) >> 1)` thay vì `(lo + hi) / 2`! Bước 2 trúng ngay `lut[3] == 590` (30°C)!",
          "cards": [
            [
              "mid",
              "3 (30°C)",
              "green"
            ],
            [
              "Số bước",
              "Chỉ 2 bước!",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Tìm thấy 590 tại idx=3 (30°C) ✓",
            "cells": [
              {
                "addr": "3",
                "label": "30°C ✓",
                "val": "590",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "O(log N) — cực nhanh trên ATmega328P!"
          }
        }
      ],
      "remember": "Công thức `mid = lo + ((hi - lo) >> 1)` tránh tràn `uint8_t` khi `lo + hi > 255`!",
      "pitfall": "Khi `mid == 0` mà cần giảm `hi = mid - 1`, nếu `hi` là `uint8_t` sẽ bị underflow thành 255! Hãy dùng `int16_t` cho `lo, hi`.",
      "tests": [
        "+ target=590 → idx=3 (30°C)"
      ],
      "problem": {
        "scenario": "Lấy mã ADC từ PC0 rồi tra bảng NTC có thứ tự trong Flash. Dùng hàm đọc PROGMEM và xác định chiều đơn điệu.\n\nĐể lọc nhiễu gai ADC (Median Filter) hoặc tra bảng nhiệt độ NTC lưu trong Flash `PROGMEM` trên ATmega328P, bạn cần thuật toán tìm kiếm/sắp xếp không đệ quy, tốn O(1) Stack. Bài toán: Tra cứu giá trị ADC trong bảng tra đã sắp xếp lưu trong Flash `PROGMEM` bằng Binary Search — chỉ tốn tối đa 7 bước cho bảng 128 điểm (thay vì tính hàm `log()` float nặng nề!).",
        "prototype": "void binary_search_solve(void)",
        "workedExample": [
          "Bước 1: Bảng tra ADC đã sắp tăng dần (ứng với 0°C, 10°C, 20°C, 30°C, 40°C, 50°C). (target=590, lo / hi=0 / 5)",
          "Bước 2: Mẹo tránh tràn 8-bit: luôn viết `lo + ((hi - lo) >> 1)` thay vì `(lo + hi) / 2`! Bước 2 trúng ngay `lut[3] == 590` (30°C)!. (mid=3 (30°C), Số bước=Chỉ 2 bước!)"
        ],
        "testRows": [
          [
            "Case 1",
            "target=590",
            "idx=3 (30°C)"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, FLASH, ADC), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 122: Tìm kiếm Nhị phân trên Bảng tra nhiệt độ NTC (Flash PROGMEM)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void binary_search_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t lut[6] = {150, 280, 420, 590, 760, 910};\n    uint8_t lo = 0, hi = 5, target = 590;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Công thức `mid = lo + ((hi - lo) >> 1)` tránh tràn `uint8_t` khi `lo + hi > 255`!",
        "hint2": "Khi `mid == 0` mà cần giảm `hi = mid - 1`, nếu `hi` là `uint8_t` sẽ bị underflow thành 255! Hãy dùng `int16_t` cho `lo, hi`.",
        "initViz": {
          "kind": "memory",
          "title": "Binary Search (lo=0, hi=5)",
          "cells": [
            {
              "addr": "0",
              "label": "0°C",
              "val": "150",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "10°C",
              "val": "280",
              "active": false,
              "tone": ""
            },
            {
              "addr": "2",
              "label": "mid=2",
              "val": "420",
              "active": true,
              "tone": "amber"
            },
            {
              "addr": "3",
              "label": "30°C",
              "val": "590",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "40°C",
              "val": "760",
              "active": false,
              "tone": ""
            },
            {
              "addr": "5",
              "label": "50°C",
              "val": "910",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "420 < 590 → nâng lo = mid + 1 = 3"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Tìm thấy 590 tại idx=3 (30°C) ✓",
          "cells": [
            {
              "addr": "3",
              "label": "30°C ✓",
              "val": "590",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "O(log N) — cực nhanh trên ATmega328P!"
        }
      }
    },
    {
      "id": 123,
      "type": "task",
      "ewTitle": "Find Minimum and Maximum in an Array",
      "title": "Tìm Min & Max trong 1 lượt duyệt (Hiệu chuẩn biên Cảm biến dò line)",
      "moduleId": "m12_sort",
      "brochureRef": "Brochure M4",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "ADC",
        "SRAM"
      ],
      "summary": "Tìm đồng thời giá trị nhỏ nhất (nền đen) và lớn nhất (nền trắng) từ mảng mẫu ADC để tính ngưỡng tự động `(min + max) >> 1`.",
      "filename": "avr_minmax.c",
      "lines": [
        {
          "code": "uint16_t s[5] = {410, 120, 880, 350, 790};\nuint16_t mn = s[0], mx = s[0];",
          "phase": "SETUP",
          "explain": "LUÔN khởi tạo `mn = mx = s[0]` (KHÔNG khởi tạo `mn = 0` vì mọi giá trị ADC dương đều lớn hơn 0!).",
          "cards": [
            [
              "mn / mx đầu",
              "410 / 410",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Duyệt 1 lượt tìm Min & Max",
            "cells": [
              {
                "addr": "0",
                "label": "s[0]",
                "val": "410",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "MIN",
                "val": "120",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "MAX",
                "val": "880",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "s[3]",
                "val": "350",
                "active": false,
                "tone": ""
              },
              {
                "addr": "4",
                "label": "s[4]",
                "val": "790",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Min=120, Max=880 → Ngưỡng = 500"
          }
        },
        {
          "code": "uint16_t thresh = (mn + mx) >> 1; // 500",
          "phase": "OUTPUT",
          "explain": "Tìm ra `mn = 120`, `mx = 880` và ngưỡng phân biệt trắng/đen `thresh = 500` chỉ trong 1 vòng lặp!",
          "cards": [
            [
              "Min",
              "120",
              "blue"
            ],
            [
              "Max",
              "880",
              "green"
            ],
            [
              "Ngưỡng",
              "500",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Hiệu chuẩn xong!",
            "cells": [
              {
                "addr": "MIN",
                "label": "Đen",
                "val": "120",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "THR",
                "label": "Ngưỡng",
                "val": "500",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "MAX",
                "label": "Trắng",
                "val": "880",
                "active": true,
                "tone": "green"
              }
            ],
            "pointers": [],
            "note": "Ứng dụng thực tế cho Robot dò line AVR"
          }
        }
      ],
      "remember": "Khởi tạo `mn = mx = arr[0]` đảm bảo đúng với cả mảng số âm lẫn số dương.",
      "pitfall": "Kiểm tra `if (n == 0) return;` trước khi đọc `arr[0]`.",
      "tests": [
        "+ {410,120,880,350,790} → min=120, max=880, thresh=500"
      ],
      "problem": {
        "scenario": "Hiệu chuẩn đầu đọc line tại ADC0 bằng min/max của dãy mẫu. Kiểm mảng rỗng trước khi đọc phần tử đầu.\n\nĐể lọc nhiễu gai ADC (Median Filter) hoặc tra bảng nhiệt độ NTC lưu trong Flash `PROGMEM` trên ATmega328P, bạn cần thuật toán tìm kiếm/sắp xếp không đệ quy, tốn O(1) Stack. Bài toán: Tìm đồng thời giá trị nhỏ nhất (nền đen) và lớn nhất (nền trắng) từ mảng mẫu ADC để tính ngưỡng tự động `(min + max) >> 1`.",
        "prototype": "void minmax_solve(void)",
        "workedExample": [
          "Bước 1: LUÔN khởi tạo `mn = mx = s[0]` (KHÔNG khởi tạo `mn = 0` vì mọi giá trị ADC dương đều lớn hơn 0!). (mn / mx đầu=410 / 410)",
          "Bước 2: Tìm ra `mn = 120`, `mx = 880` và ngưỡng phân biệt trắng/đen `thresh = 500` chỉ trong 1 vòng lặp!. (Min=120, Max=880)"
        ],
        "testRows": [
          [
            "Case 1",
            "{410,120,880,350,790}",
            "min=120, max=880, thresh=500"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, ADC, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 123: Tìm Min & Max trong 1 lượt duyệt (Hiệu chuẩn biên Cảm biến dò line)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void minmax_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t s[5] = {410, 120, 880, 350, 790};\n    uint16_t mn = s[0], mx = s[0];\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Khởi tạo `mn = mx = arr[0]` đảm bảo đúng với cả mảng số âm lẫn số dương.",
        "hint2": "Kiểm tra `if (n == 0) return;` trước khi đọc `arr[0]`.",
        "initViz": {
          "kind": "memory",
          "title": "Duyệt 1 lượt tìm Min & Max",
          "cells": [
            {
              "addr": "0",
              "label": "s[0]",
              "val": "410",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "MIN",
              "val": "120",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "MAX",
              "val": "880",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "s[3]",
              "val": "350",
              "active": false,
              "tone": ""
            },
            {
              "addr": "4",
              "label": "s[4]",
              "val": "790",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Min=120, Max=880 → Ngưỡng = 500"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Hiệu chuẩn xong!",
          "cells": [
            {
              "addr": "MIN",
              "label": "Đen",
              "val": "120",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "THR",
              "label": "Ngưỡng",
              "val": "500",
              "active": true,
              "tone": "purple"
            },
            {
              "addr": "MAX",
              "label": "Trắng",
              "val": "880",
              "active": true,
              "tone": "green"
            }
          ],
          "pointers": [],
          "note": "Ứng dụng thực tế cho Robot dò line AVR"
        }
      }
    },
    {
      "id": 124,
      "type": "task",
      "ewTitle": "Sort an Array in Ascending Order",
      "title": "Sắp xếp tăng dần bằng Insertion Sort (Lọc Trung vị Median Filter 5 mẫu ADC)",
      "moduleId": "m12_sort",
      "brochureRef": "Brochure M4 & M11 (ADC Filter)",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "ADC",
        "SRAM"
      ],
      "summary": "Sắp xếp 5 mẫu ADC tại chỗ bằng Insertion Sort (không đệ quy, không tốn Stack như QuickSort!) rồi lấy phần tử giữa `a[2]` làm bộ lọc Median loại bỏ nhiễu gai!",
      "filename": "avr_insertion_sort.c",
      "lines": [
        {
          "code": "uint16_t a[5] = {512, 1023, 508, 515, 510};",
          "phase": "SETUP",
          "explain": "Cảm biến đọc 5 mẫu ADC 10-bit vào SRAM. Mẫu a[1] = 1023 là xung nhiễu gai (spike). Nếu lấy trung bình cộng sẽ bị kéo lệch lên 613! Ta dùng Insertion Sort tại chỗ rồi lấy phần tử giữa a[2] (Median Filter).",
          "cards": [
            [
              "a[5]",
              "[512,1023,508,515,510]",
              "blue"
            ],
            [
              "Nhiễu gai",
              "a[1] = 1023",
              "rose"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "SRAM: 5 mẫu ADC ban đầu",
            "cells": [
              {
                "addr": "0",
                "label": "a[0]",
                "val": "512",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "GAI!",
                "val": "1023",
                "active": true,
                "tone": "rose"
              },
              {
                "addr": "2",
                "label": "a[2]",
                "val": "508",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "a[3]",
                "val": "515",
                "active": false,
                "tone": ""
              },
              {
                "addr": "4",
                "label": "a[4]",
                "val": "510",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Chuẩn bị chạy Insertion Sort (O(1) Stack, không đệ quy)",
            "ring": null
          }
        },
        {
          "code": "for (uint8_t i = 1; i < 5; i++) {",
          "phase": "LOGIC",
          "explain": "Vòng ngoài duyệt từ phần tử thứ 2 (i = 1) đến hết mảng. Coi đoạn a[0..i-1] bên trái đã luôn được sắp xếp tăng dần.",
          "cards": [
            [
              "i",
              "1 → 4",
              "blue"
            ],
            [
              "Đoạn đã sắp",
              "a[0..i-1]",
              "purple"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Bắt đầu Insertion Sort",
            "cells": [
              {
                "addr": "0",
                "label": "Đã sắp",
                "val": "512",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "key (i=1)",
                "val": "1023",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "2",
                "label": "a[2]",
                "val": "508",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "a[3]",
                "val": "515",
                "active": false,
                "tone": ""
              },
              {
                "addr": "4",
                "label": "a[4]",
                "val": "510",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "i",
                "target": "1",
                "val": "1"
              }
            ],
            "note": "i=1: key=1023 > 512 nên đứng yên",
            "ring": null
          }
        },
        {
          "code": "    uint16_t key = a[i]; int8_t j = (int8_t)i - 1;",
          "phase": "EXECUTION",
          "explain": "Lưu `key = a[i]` vào thanh ghi CPU. Dùng `int8_t j` (có dấu!) để khi j lùi về -1 không bị lỗi unsigned underflow thành 255!",
          "cards": [
            [
              "key",
              "508 (tại i=2)",
              "amber"
            ],
            [
              "Kiểu j",
              "int8_t (có dấu!)",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "i=2: Nhấc key = 508 ra chèn",
            "cells": [
              {
                "addr": "0",
                "label": "a[0]",
                "val": "512",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "a[1]",
                "val": "1023",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "key",
                "val": "508",
                "active": true,
                "tone": "amber"
              },
              {
                "addr": "3",
                "label": "a[3]",
                "val": "515",
                "active": false,
                "tone": ""
              },
              {
                "addr": "4",
                "label": "a[4]",
                "val": "510",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [
              {
                "name": "j",
                "target": "1",
                "val": "1"
              }
            ],
            "note": "So sánh key=508 ngược về bên trái",
            "ring": null
          }
        },
        {
          "code": "    while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }",
          "phase": "EXECUTION",
          "explain": "Dịch các phần tử lớn hơn `key` sang phải 1 ô: với i=2, 1023 và 512 đều > 508 nên dịch sang phải, `j` lùi về -1.",
          "cards": [
            [
              "Dịch phải",
              "1023, 512 → phải",
              "purple"
            ],
            [
              "j dừng ở",
              "-1",
              "blue"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Sau khi dịch các số > 508 sang phải",
            "cells": [
              {
                "addr": "0",
                "label": "trống",
                "val": "(512)",
                "active": true,
                "tone": "purple"
              },
              {
                "addr": "1",
                "label": "a[1]",
                "val": "512",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "a[2]",
                "val": "1023",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "3",
                "label": "a[3]",
                "val": "515",
                "active": false,
                "tone": ""
              },
              {
                "addr": "4",
                "label": "a[4]",
                "val": "510",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Chèn 508 vào vị trí j+1 = 0",
            "ring": null
          }
        },
        {
          "code": "    a[j + 1] = key;\n}",
          "phase": "EXECUTION",
          "explain": "Đặt `key` vào đúng khe trống `a[j + 1]`. Lặp tiếp i=3 (515) và i=4 (510) → mảng tăng dần hoàn chỉnh: `{508, 510, 512, 515, 1023}`.",
          "cards": [
            [
              "a[] đã sắp",
              "[508,510,512,515,1023]",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Mảng sau khi sắp xếp tăng dần",
            "cells": [
              {
                "addr": "0",
                "label": "a[0]",
                "val": "508",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "1",
                "label": "a[1]",
                "val": "510",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "a[2]",
                "val": "512",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "a[3]",
                "val": "515",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "4",
                "label": "a[4]",
                "val": "1023",
                "active": true,
                "tone": "rose"
              }
            ],
            "pointers": [],
            "note": "Gai 1023 đã bị đẩy ra cuối mảng",
            "ring": null
          }
        },
        {
          "code": "uint16_t median = a[2]; // 512 (loại sạch nhiễu gai!)",
          "phase": "OUTPUT",
          "explain": "Lấy phần tử chính giữa `a[5/2] = a[2] = 512`. Nhiễu gai 1023 bị loại bỏ hoàn toàn mà không cần đệ quy tốn Stack!",
          "cards": [
            [
              "median",
              "512 ✓",
              "green"
            ],
            [
              "Tốn Stack",
              "O(1) Không đệ quy",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả Lọc Trung Vị: 512 ✓",
            "cells": [
              {
                "addr": "0",
                "label": "Min",
                "val": "508",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "1",
                "val": "510",
                "active": false,
                "tone": ""
              },
              {
                "addr": "2",
                "label": "MEDIAN ✓",
                "val": "512",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "3",
                "label": "3",
                "val": "515",
                "active": false,
                "tone": ""
              },
              {
                "addr": "4",
                "label": "Gai (bỏ)",
                "val": "1023",
                "active": false,
                "tone": "rose"
              }
            ],
            "pointers": [],
            "note": "Giá trị sạch đưa vào bộ điều khiển PID",
            "ring": null
          }
        }
      ],
      "remember": "Trên ATmega328P, Insertion Sort nhanh hơn và an toàn Stack hơn QuickSort cho mảng nhỏ (N <= 20)!",
      "pitfall": "Luôn copy mảng ADC sang mảng tạm nhỏ trước khi sắp nếu cần giữ thứ tự thời gian của bộ đệm gốc.",
      "tests": [
        "+ {512,1023,508,515,510} → median = 512"
      ],
      "problem": {
        "scenario": "Timer lấy năm mẫu ADC rồi main sắp xếp để lấy mẫu ở giữa. Xem tác động của việc sắp xếp tại chỗ lên thứ tự lấy mẫu.\n\nĐể lọc nhiễu gai ADC (Median Filter) hoặc tra bảng nhiệt độ NTC lưu trong Flash `PROGMEM` trên ATmega328P, bạn cần thuật toán tìm kiếm/sắp xếp không đệ quy, tốn O(1) Stack. Bài toán: Sắp xếp 5 mẫu ADC tại chỗ bằng Insertion Sort (không đệ quy, không tốn Stack như QuickSort!) rồi lấy phần tử giữa `a[2]` làm bộ lọc Median loại bỏ nhiễu gai!",
        "prototype": "void insertion_sort_solve(void)",
        "workedExample": [
          "Bước 1: Cảm biến đọc 5 mẫu ADC 10-bit vào SRAM. (a[5]=[512,1023,508,515,510], Nhiễu gai=a[1] = 1023)",
          "Bước 2: Vòng ngoài duyệt từ phần tử thứ 2 (i = 1) đến hết mảng. (i=1 → 4, Đoạn đã sắp=a[0..i-1])",
          "Bước 3: Lưu `key = a[i]` vào thanh ghi CPU. (key=508 (tại i=2), Kiểu j=int8_t (có dấu!))"
        ],
        "testRows": [
          [
            "Case 1",
            "{512,1023,508,515,510}",
            "median = 512"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, ADC, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 124: Sắp xếp tăng dần bằng Insertion Sort (Lọc Trung vị Median Filter 5 mẫu ADC)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void insertion_sort_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint16_t a[5] = {512, 1023, 508, 515, 510};\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Trên ATmega328P, Insertion Sort nhanh hơn và an toàn Stack hơn QuickSort cho mảng nhỏ (N <= 20)!",
        "hint2": "Luôn copy mảng ADC sang mảng tạm nhỏ trước khi sắp nếu cần giữ thứ tự thời gian của bộ đệm gốc.",
        "initViz": {
          "kind": "memory",
          "title": "SRAM: 5 mẫu ADC ban đầu",
          "cells": [
            {
              "addr": "0",
              "label": "a[0]",
              "val": "512",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "GAI!",
              "val": "1023",
              "active": true,
              "tone": "rose"
            },
            {
              "addr": "2",
              "label": "a[2]",
              "val": "508",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "a[3]",
              "val": "515",
              "active": false,
              "tone": ""
            },
            {
              "addr": "4",
              "label": "a[4]",
              "val": "510",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Chuẩn bị chạy Insertion Sort (O(1) Stack, không đệ quy)",
          "ring": null
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả Lọc Trung Vị: 512 ✓",
          "cells": [
            {
              "addr": "0",
              "label": "Min",
              "val": "508",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "1",
              "val": "510",
              "active": false,
              "tone": ""
            },
            {
              "addr": "2",
              "label": "MEDIAN ✓",
              "val": "512",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "3",
              "label": "3",
              "val": "515",
              "active": false,
              "tone": ""
            },
            {
              "addr": "4",
              "label": "Gai (bỏ)",
              "val": "1023",
              "active": false,
              "tone": "rose"
            }
          ],
          "pointers": [],
          "note": "Giá trị sạch đưa vào bộ điều khiển PID",
          "ring": null
        }
      }
    },
    {
      "id": 125,
      "type": "task",
      "ewTitle": "Sort an Array in Descending Order",
      "title": "Sắp xếp giảm dần (Xếp hạng ưu tiên Tác vụ / Mức tín hiệu RSSI)",
      "moduleId": "m12_sort",
      "brochureRef": "Brochure M4 & M12 (Priority)",
      "level": "Nền tảng",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Sắp xếp mảng mức ưu tiên hoặc cường độ tín hiệu giảm dần tại chỗ bằng Selection/Insertion Sort.",
      "filename": "avr_sort_desc.c",
      "lines": [
        {
          "code": "uint8_t prio[4] = {2, 7, 1, 5}; // Sắp giảm → {7, 5, 2, 1}",
          "phase": "OUTPUT",
          "explain": "Chỉ cần đổi dấu so sánh thành `>` trong vòng lặp chèn để đưa mức ưu tiên cao nhất (7) lên đầu mảng.",
          "cards": [
            [
              "Kết quả",
              "[7, 5, 2, 1]",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Ưu tiên giảm dần",
            "cells": [
              {
                "addr": "0",
                "label": "Cao nhất",
                "val": "7",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "1",
                "label": "2nd",
                "val": "5",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "3rd",
                "val": "2",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "Thấp nhất",
                "val": "1",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Sẵn sàng lập lịch theo ưu tiên"
          }
        }
      ],
      "remember": "Đổi điều kiện so sánh `<` thành `>` giữ nguyên độ phức tạp O(1) SRAM.",
      "pitfall": "Với mảng lớn hơn trên MCU, ưu tiên Shell Sort hoặc Heap Sort (đều O(1) RAM, không đệ quy).",
      "tests": [
        "+ {2,7,1,5} → {7,5,2,1}"
      ],
      "problem": {
        "scenario": "Sắp xếp bản sao bảng ưu tiên tác vụ trong SRAM giảm dần. Ưu tiên ứng dụng không thay đổi thứ tự vector AVR.\n\nĐể lọc nhiễu gai ADC (Median Filter) hoặc tra bảng nhiệt độ NTC lưu trong Flash `PROGMEM` trên ATmega328P, bạn cần thuật toán tìm kiếm/sắp xếp không đệ quy, tốn O(1) Stack. Bài toán: Sắp xếp mảng mức ưu tiên hoặc cường độ tín hiệu giảm dần tại chỗ bằng Selection/Insertion Sort.",
        "prototype": "void sort_desc_solve(void)",
        "workedExample": [
          "Bước 1: Chỉ cần đổi dấu so sánh thành `>` trong vòng lặp chèn để đưa mức ưu tiên cao nhất (7) lên đầu mảng. (Kết quả=[7, 5, 2, 1])"
        ],
        "testRows": [
          [
            "Case 1",
            "{2,7,1,5}",
            "{7,5,2,1}"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 125: Sắp xếp giảm dần (Xếp hạng ưu tiên Tác vụ / Mức tín hiệu RSSI)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void sort_desc_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t prio[4] = {2, 7, 1, 5}; // Sắp giảm → {7, 5, 2, 1}\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Đổi điều kiện so sánh `<` thành `>` giữ nguyên độ phức tạp O(1) SRAM.",
        "hint2": "Với mảng lớn hơn trên MCU, ưu tiên Shell Sort hoặc Heap Sort (đều O(1) RAM, không đệ quy).",
        "initViz": {
          "kind": "memory",
          "title": "Ưu tiên giảm dần",
          "cells": [
            {
              "addr": "0",
              "label": "Cao nhất",
              "val": "7",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "2nd",
              "val": "5",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "3rd",
              "val": "2",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "Thấp nhất",
              "val": "1",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Sẵn sàng lập lịch theo ưu tiên"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Ưu tiên giảm dần",
          "cells": [
            {
              "addr": "0",
              "label": "Cao nhất",
              "val": "7",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "1",
              "label": "2nd",
              "val": "5",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "3rd",
              "val": "2",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "Thấp nhất",
              "val": "1",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Sẵn sàng lập lịch theo ưu tiên"
        }
      }
    },
    {
      "id": 126,
      "type": "task",
      "ewTitle": "Find Kth Smallest and Kth Largest Element",
      "title": "Tìm phần tử nhỏ thứ K và lớn thứ K (Tính bách phân vị / Loại biên ADC)",
      "moduleId": "m12_sort",
      "brochureRef": "Brochure M4",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Sắp xếp mảng nhỏ tại chỗ rồi truy cập trực tiếp `a[k - 1]` (nhỏ thứ K) và `a[n - k]` (lớn thứ K).",
      "filename": "avr_kth_elem.c",
      "lines": [
        {
          "code": "uint8_t a[5] = {40, 10, 50, 20, 30}; uint8_t k = 2;",
          "phase": "SETUP",
          "explain": "Sau khi sắp tăng `{10, 20, 30, 40, 50}`: nhỏ thứ 2 là `a[1] = 20`, lớn thứ 2 là `a[5-2] = a[3] = 40`.",
          "cards": [
            [
              "k",
              "2",
              "amber"
            ],
            [
              "Nhỏ thứ 2",
              "20",
              "blue"
            ],
            [
              "Lớn thứ 2",
              "40",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Mảng sau sắp xếp: {10,20,30,40,50}",
            "cells": [
              {
                "addr": "0",
                "label": "Min",
                "val": "10",
                "active": false,
                "tone": ""
              },
              {
                "addr": "1",
                "label": "K-th Min",
                "val": "20",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "2",
                "label": "Med",
                "val": "30",
                "active": false,
                "tone": ""
              },
              {
                "addr": "3",
                "label": "K-th Max",
                "val": "40",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "4",
                "label": "Max",
                "val": "50",
                "active": false,
                "tone": ""
              }
            ],
            "pointers": [],
            "note": "Kiểm tra biên 1 <= k <= n trước khi truy cập!"
          }
        }
      ],
      "remember": "Luôn kiểm tra `if (k == 0 || k > n) return;` để tránh truy cập ngoài biên mảng.",
      "pitfall": "Ứng dụng: bộ lọc Trimmed Mean (bỏ k mẫu nhỏ nhất và k mẫu lớn nhất rồi mới lấy trung bình).",
      "tests": [
        "+ {40,10,50,20,30}, k=2 → 2nd min=20, 2nd max=40"
      ],
      "problem": {
        "scenario": "Tìm thứ hạng mẫu ADC trong bộ đệm. Kiểm miền K và cách tính khi hai mẫu trùng giá trị.\n\nĐể lọc nhiễu gai ADC (Median Filter) hoặc tra bảng nhiệt độ NTC lưu trong Flash `PROGMEM` trên ATmega328P, bạn cần thuật toán tìm kiếm/sắp xếp không đệ quy, tốn O(1) Stack. Bài toán: Sắp xếp mảng nhỏ tại chỗ rồi truy cập trực tiếp `a[k - 1]` (nhỏ thứ K) và `a[n - k]` (lớn thứ K).",
        "prototype": "void kth_elem_solve(void)",
        "workedExample": [
          "Bước 1: Sau khi sắp tăng `{10, 20, 30, 40, 50}`: nhỏ thứ 2 là `a[1] = 20`, lớn thứ 2 là `a[5-2] = a[3] = 40`. (k=2, Nhỏ thứ 2=20)"
        ],
        "testRows": [
          [
            "Case 1",
            "{40,10,50,20,30}, k=2",
            "2nd min=20, 2nd max=40"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 126: Tìm phần tử nhỏ thứ K và lớn thứ K (Tính bách phân vị / Loại biên ADC)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void kth_elem_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t a[5] = {40, 10, 50, 20, 30}; uint8_t k = 2;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Luôn kiểm tra `if (k == 0 || k > n) return;` để tránh truy cập ngoài biên mảng.",
        "hint2": "Ứng dụng: bộ lọc Trimmed Mean (bỏ k mẫu nhỏ nhất và k mẫu lớn nhất rồi mới lấy trung bình).",
        "initViz": {
          "kind": "memory",
          "title": "Mảng sau sắp xếp: {10,20,30,40,50}",
          "cells": [
            {
              "addr": "0",
              "label": "Min",
              "val": "10",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "K-th Min",
              "val": "20",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "Med",
              "val": "30",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "K-th Max",
              "val": "40",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "Max",
              "val": "50",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Kiểm tra biên 1 <= k <= n trước khi truy cập!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Mảng sau sắp xếp: {10,20,30,40,50}",
          "cells": [
            {
              "addr": "0",
              "label": "Min",
              "val": "10",
              "active": false,
              "tone": ""
            },
            {
              "addr": "1",
              "label": "K-th Min",
              "val": "20",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "2",
              "label": "Med",
              "val": "30",
              "active": false,
              "tone": ""
            },
            {
              "addr": "3",
              "label": "K-th Max",
              "val": "40",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "4",
              "label": "Max",
              "val": "50",
              "active": false,
              "tone": ""
            }
          ],
          "pointers": [],
          "note": "Kiểm tra biên 1 <= k <= n trước khi truy cập!"
        }
      }
    },
    {
      "id": 127,
      "type": "task",
      "ewTitle": "Find Top 3 Largest Values in an Array",
      "title": "Tìm Top 3 giá trị lớn nhất trong 1 lượt duyệt (O(N) không cần sắp xếp!)",
      "moduleId": "m12_sort",
      "brochureRef": "Brochure M4",
      "level": "Cơ bản",
      "duration": "6 phút",
      "vizType": "memory",
      "hwBlocks": [
        "CPU",
        "SRAM"
      ],
      "summary": "Duy trì đúng 3 biến `top1 >= top2 >= top3` trong 1 vòng lặp duy nhất — không làm thay đổi mảng gốc và chỉ tốn 3 thanh ghi CPU!",
      "filename": "avr_top3.c",
      "lines": [
        {
          "code": "uint8_t a[6] = {15, 82, 40, 95, 67, 88};\nuint8_t t1=0, t2=0, t3=0;",
          "phase": "SETUP",
          "explain": "Mỗi phần tử `v`: nếu `v > t1` thì đẩy `t3=t2; t2=t1; t1=v;`; nếu `v > t2` thì đẩy `t3=t2; t2=v;`; nếu `v > t3` thì `t3=v;`.",
          "cards": [
            [
              "Độ phức tạp",
              "O(N) / O(1) RAM",
              "green"
            ]
          ],
          "viz": {
            "kind": "memory",
            "title": "Kết quả Top 3 sau 1 lượt duyệt",
            "cells": [
              {
                "addr": "1st",
                "label": "top1",
                "val": "95",
                "active": true,
                "tone": "green"
              },
              {
                "addr": "2nd",
                "label": "top2",
                "val": "88",
                "active": true,
                "tone": "blue"
              },
              {
                "addr": "3rd",
                "label": "top3",
                "val": "82",
                "active": true,
                "tone": "amber"
              }
            ],
            "pointers": [],
            "note": "Mảng gốc vẫn giữ nguyên không bị xáo trộn!"
          }
        }
      ],
      "remember": "Rất hữu ích khi phát hiện 3 đỉnh phổ (peak detection) trên luồng dữ liệu cảm biến thời gian thực.",
      "pitfall": "Với mảng số có dấu `int16_t`, khởi tạo `t1 = t2 = t3 = INT16_MIN` (-32768) thay vì `0`!",
      "tests": [
        "+ {15,82,40,95,67,88} → 95, 88, 82"
      ],
      "problem": {
        "scenario": "Duyệt một lượt qua dãy mẫu hoặc RSSI đã lấy từ SPI. Quy định giá trị trùng và số mẫu tối thiểu để chọn đủ ba vị trí.\n\nĐể lọc nhiễu gai ADC (Median Filter) hoặc tra bảng nhiệt độ NTC lưu trong Flash `PROGMEM` trên ATmega328P, bạn cần thuật toán tìm kiếm/sắp xếp không đệ quy, tốn O(1) Stack. Bài toán: Duy trì đúng 3 biến `top1 >= top2 >= top3` trong 1 vòng lặp duy nhất — không làm thay đổi mảng gốc và chỉ tốn 3 thanh ghi CPU!",
        "prototype": "void top3_solve(void)",
        "workedExample": [
          "Bước 1: Mỗi phần tử `v`: nếu `v > t1` thì đẩy `t3=t2; t2=t1; t1=v;`; nếu `v > t2` thì đẩy `t3=t2; t2=v;`; nếu `v > t3` thì `t3=v;`. (Độ phức tạp=O(N) / O(1) RAM)"
        ],
        "testRows": [
          [
            "Case 1",
            "{15,82,40,95,67,88}",
            "95, 88, 82"
          ]
        ],
        "constraints": [
          "Chip mục tiêu: ATmega328P (CPU, SRAM), int = 16-bit, SRAM = 2 KB.",
          "Dùng `<stdint.h>` (`uint8_t`, `uint16_t`, `int16_t`), tránh tràn số & Integer Promotion.",
          "Không dùng `malloc`/`free`, không dùng `scanf`/`printf` (tránh treo Simulator & tốn Flash).",
          "Thêm `volatile` cho biến kết quả khi test ở chế độ tối ưu `-Os` để Watch không ẩn mất."
        ],
        "studioCheck": "Đặt Breakpoint (F9) tại `while(1)` → bấm F5. Mở Watch 1 (chuột phải → Hexadecimal Display) hoặc Memory 1 (gõ `0x0100`) để đối chiếu từng byte.",
        "starterCode": "#define F_CPU 16000000UL\n#include <avr/io.h>\n#include <stdint.h>\n\n/* ============================================================\n * Bài 127: Tìm Top 3 giá trị lớn nhất trong 1 lượt duyệt (O(N) không cần sắp xếp!)\n * Thiết bị : ATmega328P (Microchip Studio · Simulator)\n * Nguyên mẫu: void top3_solve(void)\n * ============================================================ */\n\nint main(void) {\n    uint8_t a[6] = {15, 82, 40, 95, 67, 88};\n    uint8_t t1=0, t2=0, t3=0;\n    // TODO: Viết code xử lý tại đây để đạt kết quả trong bảng Test Case\n    // Gợi ý: Khai báo biến kết quả là `volatile` để Microchip Studio Watch không tối ưu ẩn đi!\n\n    while (1) {\n        // Đặt Breakpoint (F9) tại đây -> F5 để dừng và soi Watch / I/O View\n    }\n}\n",
        "hint1": "Rất hữu ích khi phát hiện 3 đỉnh phổ (peak detection) trên luồng dữ liệu cảm biến thời gian thực.",
        "hint2": "Với mảng số có dấu `int16_t`, khởi tạo `t1 = t2 = t3 = INT16_MIN` (-32768) thay vì `0`!",
        "initViz": {
          "kind": "memory",
          "title": "Kết quả Top 3 sau 1 lượt duyệt",
          "cells": [
            {
              "addr": "1st",
              "label": "top1",
              "val": "95",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2nd",
              "label": "top2",
              "val": "88",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "3rd",
              "label": "top3",
              "val": "82",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Mảng gốc vẫn giữ nguyên không bị xáo trộn!"
        },
        "targetViz": {
          "kind": "memory",
          "title": "Kết quả Top 3 sau 1 lượt duyệt",
          "cells": [
            {
              "addr": "1st",
              "label": "top1",
              "val": "95",
              "active": true,
              "tone": "green"
            },
            {
              "addr": "2nd",
              "label": "top2",
              "val": "88",
              "active": true,
              "tone": "blue"
            },
            {
              "addr": "3rd",
              "label": "top3",
              "val": "82",
              "active": true,
              "tone": "amber"
            }
          ],
          "pointers": [],
          "note": "Mảng gốc vẫn giữ nguyên không bị xáo trộn!"
        }
      }
    },
    {
      "id": 128,
      "type": "quiz",
      "ewTitle": "Searching and Sorting-I",
      "title": "Quiz: Tìm kiếm Nhị phân PROGMEM & Lọc Trung vị trên AVR",
      "moduleId": "m12_sort",
      "brochureRef": "Brochure M4 & M13",
      "level": "Cơ bản",
      "duration": "5 phút",
      "vizType": "quiz",
      "hwBlocks": [
        "CPU",
        "FLASH",
        "ADC"
      ],
      "summary": "Kiểm tra lựa chọn thuật toán tìm kiếm/sắp xếp tối ưu cho 2 KB SRAM của ATmega328P.",
      "questions": [
        {
          "q": "Trong Binary Search, tại sao viết `mid = lo + ((hi - lo) >> 1);` an toàn hơn `(lo + hi) / 2`?",
          "opts": [
            "Dễ đọc hơn",
            "Tránh tràn số khi `lo + hi` vượt quá giới hạn kiểu dữ liệu và dùng dịch bit thay phép chia!",
            "Bắt buộc trên C99",
            "Để tìm số âm"
          ],
          "ans": 1,
          "exp": "Với `uint8_t`, nếu lo=150, hi=200 thì `lo+hi=350` bị tràn 8-bit!"
        },
        {
          "q": "Để lọc nhiễu gai (spike) từ 5 mẫu ADC trên ATmega328P, thuật toán nào phù hợp nhất?",
          "opts": [
            "QuickSort đệ quy",
            "Insertion Sort tại chỗ (O(1) Stack) rồi lấy phần tử giữa a[2] (Median Filter)",
            "MergeSort dùng malloc",
            "Tính trung bình cộng"
          ],
          "ans": 1,
          "exp": "Insertion Sort không đệ quy, cực nhanh cho N=5 và Median Filter loại bỏ hoàn toàn gai nhiễu."
        },
        {
          "q": "Tìm kiếm nhị phân trên bảng tra nhiệt độ 128 điểm trong Flash cần tối đa bao nhiêu bước so sánh?",
          "opts": [
            "128 bước",
            "64 bước",
            "7 bước (log2(128))",
            "16 bước"
          ],
          "ans": 2,
          "exp": "2^7 = 128 nên Binary Search chỉ cần tối đa 7 bước."
        },
        {
          "q": "Năm mẫu ADC0 là 9, 1, 8, 2, 3. Trung vị bằng bao nhiêu?",
          "opts": [
            "8",
            "3",
            "2"
          ],
          "ans": 1,
          "exp": "Sau sắp xếp 1, 2, 3, 8, 9, mẫu giữa bằng 3."
        }
      ],
      "remember": "Tránh các thuật toán đệ quy sâu (QuickSort) hoặc cần mảng phụ (MergeSort) trên ATmega328P.",
      "pitfall": "Luôn chọn thuật toán O(1) bộ nhớ phụ và không đệ quy cho hệ thống nhúng 8-bit!",
      "avrContext": "Tra bảng trong Flash cho ADC và tính trung vị trên mảng SRAM. Chọn cách đọc bộ nhớ và thứ tự dữ liệu cho từng thuật toán."
    }
  ],
  "quickGuides": [
    {
      "id": "qg_0",
      "moduleId": "m1_arith",
      "title": "00. Before You Start — Embedded C trên ATmega328P",
      "ewTitle": "Before You start- Embedded C",
      "intro": "Tài liệu nhập môn bắt buộc trước khi viết dòng Embedded C đầu tiên cho vi điều khiển 8-bit ATmega328P (Arduino Uno / Microchip Studio).",
      "sections": [
        {
          "h": "1. Khác biệt sống còn: C trên PC vs C trên ATmega328P",
          "table": [
            [
              "Tiêu chí",
              "C trên PC / Laptop",
              "Embedded C trên ATmega328P"
            ],
            [
              "Kiến trúc CPU",
              "64-bit x86_64 (Von Neumann)",
              "8-bit AVR RISC (Harvard — tách Flash & SRAM)"
            ],
            [
              "Kích thước `int`",
              "4 byte (32-bit, ±2.14 tỷ)",
              "2 byte (16-bit, chỉ -32,768 .. +32,767!)"
            ],
            [
              "Bộ nhớ RAM",
              "8 – 32 GB",
              "2 KB SRAM (2048 byte: 0x0100 – 0x08FF)"
            ],
            [
              "Bộ nhớ Code",
              "Ổ cứng GB/TB",
              "32 KB Flash (lưu code + hằng PROGMEM) + 1 KB EEPROM"
            ],
            [
              "Cấp phát động",
              "malloc() / free() thoải mái",
              "CẤM dùng malloc() — gây phân mảnh chết 2 KB SRAM"
            ],
            [
              "Xuất dữ liệu",
              "printf() ra màn hình",
              "Ghi thanh ghi PORTB / truyền byte qua USART0 (UDR0)"
            ]
          ]
        },
        {
          "h": "2. Bảng kiểu dữ liệu chuẩn `<stdint.h>` & Khi nào dùng",
          "table": [
            [
              "Kiểu",
              "Độ rộng",
              "Dải giá trị",
              "Ứng dụng chuẩn trên ATmega328P"
            ],
            [
              "uint8_t",
              "1 byte (R0..R31)",
              "0 .. 255",
              "Ưu tiên số 1! Thanh ghi DDRx/PORTx, PWM OCR0A, biến đếm nhỏ"
            ],
            [
              "int8_t",
              "1 byte",
              "-128 .. +127",
              "Nhiệt độ nhỏ, vòng lặp đếm ngược `for(int8_t i=7; i>=0; i--)`"
            ],
            [
              "uint16_t",
              "2 byte",
              "0 .. 65,535",
              "ADC 10-bit (0..1023), Timer1 (TCNT1/OCR1A), UBRR0, con trỏ SRAM"
            ],
            [
              "int16_t",
              "2 byte",
              "-32,768 .. +32,767",
              "Sai số PID, offset hiệu chuẩn cảm biến, tọa độ"
            ],
            [
              "uint32_t",
              "4 byte",
              "0 .. 4.29×10⁹",
              "F_CPU (16000000UL), bộ đếm millis(), xung Encoder đường dài"
            ]
          ]
        },
        {
          "h": "3. Chuỗi biên dịch AVR-GCC & Cấu trúc chương trình Bare-Metal",
          "code": "#define F_CPU 16000000UL   // BẮT BUỘC đặt trước <util/delay.h>\n#include <avr/io.h>        // Định nghĩa DDRB, PORTB, UBRR0L, ADMUX...\n#include <stdint.h>        // uint8_t, uint16_t...\n\nint main(void) {\n    DDRB |= (1U << PB5);   // Khởi tạo 1 lần: PB5 làm Output\n    while (1) {            // Super-loop chạy vô tận (không bao giờ return)\n        PINB = (1U << PB5);// Đảo LED PB5\n    }\n}"
        },
        {
          "h": "4. Bốn từ khóa bắt buộc nắm (MISRA C & AVR)",
          "bullets": [
            "`volatile`: Cấm compiler cache biến vào thanh ghi R0–R31. Bắt buộc cho thanh ghi phần cứng và biến chia sẻ giữa `main()` và `ISR()`.",
            "`const PROGMEM`: Giữ bảng tra, chuỗi thông báo ở 32 KB Flash (đọc bằng `pgm_read_byte()`), không copy sang 2 KB SRAM.",
            "`static`: (1) Biến cục bộ giữ giá trị qua nhiều lần gọi hàm; (2) Hàm/biến toàn cục ẩn nội bộ trong 1 file `.c`.",
            "`U` / `UL`: Hậu tố cho hằng số (`1U << 15` cho 16-bit, `1UL << 20` cho 32-bit) để tránh lỗi Integer Promotion 16-bit."
          ]
        },
        {
          "h": "5. Lỗi thường gặp (Common Pitfalls)",
          "bullets": [
            "❌ `int delay_ms = 40000;` → ✅ Tràn thành -25536 trên AVR! Phải dùng `uint16_t` hoặc `uint32_t`.",
            "❌ `printf(\"val=%d\", x);` → ✅ Ngốn ~2 KB Flash và không tự chạy ra UART nếu chưa gắn `fdevopen`; hãy dùng hàm gửi byte UART tự viết."
          ]
        }
      ]
    },
    {
      "id": "qg_1",
      "moduleId": "m1_arith",
      "title": "01. Arithmetic Edge Cases (Tràn số & SREG trên AVR)",
      "ewTitle": "Arithmetic Edge Cases",
      "intro": "Làm chủ tràn số 8-bit/16-bit, cờ nhớ SREG.C, phép trừ Underflow và bẫy trộn Signed/Unsigned trên avr-gcc.",
      "sections": [
        {
          "h": "1. Thanh ghi trạng thái SREG (0x3F) & Các cờ số học",
          "table": [
            [
              "Bit",
              "7 (I)",
              "6 (T)",
              "5 (H)",
              "4 (S)",
              "3 (V)",
              "2 (N)",
              "1 (Z)",
              "0 (C)"
            ],
            [
              "Tên cờ",
              "Global Int",
              "Bit Copy",
              "Half Carry",
              "Sign",
              "2's Overflow",
              "Negative",
              "Zero",
              "Carry"
            ],
            [
              "Khi nào bật?",
              "sei()",
              "BLD/BST",
              "Tràn bit 3→4",
              "N ^ V",
              "Tràn số có dấu",
              "Bit 7 = 1",
              "Kết quả == 0",
              "Tràn / Mượn 8-bit"
            ]
          ]
        },
        {
          "h": "2. Các mẫu xử lý số học an toàn chuẩn ATmega328P",
          "code": "// 1) Phát hiện Carry khi cộng 8-bit:\nuint16_t sum = (uint16_t)a + b;\nuint8_t res = (uint8_t)sum;\nuint8_t carry = (sum > 0xFFU) ? 1U : 0U;\n\n// 2) Phép trừ bão hòa chống Underflow (kẹp về 0):\nuint8_t safe_sub = (ticks < elapsed) ? 0U : (ticks - elapsed);\n\n// 3) Đo khoảng thời gian Timer0 khi tràn vòng 255 -> 0:\nuint8_t dt = (uint8_t)(now_tcnt0 - prev_tcnt0); // Tận dụng modulo 256!\n\n// 4) So sánh an toàn giữa int16_t và uint16_t:\nuint8_t over = (temp_c >= 0) && ((uint16_t)temp_c > threshold);"
        },
        {
          "h": "3. Bẫy kinh điển (Common Pitfalls)",
          "bullets": [
            "❌ `for (uint8_t i = 7; i >= 0; i--)` → ✅ Vòng lặp vô tận! Sửa thành `for (int8_t i = 7; i >= 0; i--)` hoặc `for (uint8_t i = 8; i-- > 0; )`.",
            "❌ `if (-1 > 10U)` → ✅ Trả về ĐÚNG (1) vì `-1` bị ép thành `65535U`!",
            "❌ `uint32_t m = 1 << 20;` → ✅ Ra `0` trên AVR vì `1` chỉ 16-bit! Phải viết `1UL << 20`."
          ]
        },
        {
          "h": "4. Ứng dụng trong Firmware ATmega328P",
          "bullets": [
            "Tính toán `millis()` không bị lỗi khi bộ đếm 32-bit quay vòng sau 49.7 ngày: `(uint32_t)(now - last) >= interval`.",
            "Kẹp (clamp) giá trị PWM `OCR0A` [0..255] hoặc ADC [0..1023] sau khi cộng sai số PID."
          ]
        }
      ]
    },
    {
      "id": "qg_2",
      "moduleId": "m2_bitwise",
      "title": "02. Bitwise Operations (Thao tác Bit trên GPIO & SREG)",
      "ewTitle": "Bitwise Operations",
      "intro": "Bộ công cụ điều khiển từng bit thanh ghi ATmega328P (`DDRx`, `PORTx`, `PINx`, `EIMSK`, `ADCSRA`) mà không làm hỏng 7 bit còn lại.",
      "sections": [
        {
          "h": "1. Bốn phép Bit-Masking cốt lõi & Lệnh Assembly AVR",
          "code": "DDRB  |=  (1U << PB5);   // Set bit 5 (Output)     -> ASM: SBI 0x04, 5 (2 cycles)\nPORTB &= ~(1U << PB5);   // Clear bit 5 (LOW 0V)   -> ASM: CBI 0x05, 5 (2 cycles)\nPORTB ^=  (1U << PB5);   // Toggle bit 5 (RMW)     -> ASM: IN / EOR / OUT\nPINB   =  (1U << PB5);   // Hardware Atomic Toggle -> Chỉ có trên AVR mới!\nif ((PIND & (1U << PD2)) == 0) { /* Nút nhấn kéo xuống GND */ }"
        },
        {
          "h": "2. Bảng trọng số 8-bit (Bit 7 → Bit 0)",
          "table": [
            [
              "Vị trí Bit",
              "Bit 7",
              "Bit 6",
              "Bit 5",
              "Bit 4",
              "Bit 3",
              "Bit 2",
              "Bit 1",
              "Bit 0"
            ],
            [
              "Giá trị DEC",
              "128",
              "64",
              "32",
              "16",
              "8",
              "4",
              "2",
              "1"
            ],
            [
              "Mặt nạ HEX",
              "0x80",
              "0x40",
              "0x20",
              "0x10",
              "0x08",
              "0x04",
              "0x02",
              "0x01"
            ],
            [
              "Ví dụ Port B",
              "PB7 (XTAL2)",
              "PB6 (XTAL1)",
              "PB5 (SCK/LED)",
              "PB4 (MISO)",
              "PB3 (MOSI)",
              "PB2 (SS)",
              "PB1 (OC1A)",
              "PB0 (ICP1)"
            ]
          ]
        },
        {
          "h": "3. Macro chuẩn MISRA C (Dùng lại cho mọi dự án)",
          "code": "#define SET_BIT(REG, BIT)   ((REG) |= (uint8_t)(1U << (BIT)))\n#define CLR_BIT(REG, BIT)   ((REG) &= (uint8_t)~(1U << (BIT)))\n#define TOG_BIT(REG, BIT)   ((REG) ^= (uint8_t)(1U << (BIT)))\n#define READ_BIT(REG, BIT)  (((REG) >> (BIT)) & 1U)"
        },
        {
          "h": "4. Lỗi thường gặp (Common Pitfalls)",
          "bullets": [
            "❌ `PORTB = (1U << PB5);` → ✅ Ghi đè `0` vào cả 7 chân PB0..PB4, PB6..PB7! Phải dùng `|=`.",
            "❌ `if (PIND & (1U << 2) == 1)` → ✅ Sai 2 chỗ: `==` ưu tiên cao hơn `&`, và `PIND & 4` ra `4` chứ không phải `1`! Phải viết `if ((PIND & (1U << 2)) != 0)`.",
            "❌ `TIFR0 &= ~(1U << TOV0);` → ✅ Trên AVR, xóa cờ ngắt (`TIFR0`, `EIFR`, `ADIF`) bằng cách **GHI 1**: `TIFR0 = (1U << TOV0);` (không dùng `|=`!).",
            "❌ `PINB |= (1U << PB5);` → ✅ Vô tình đảo luôn mọi chân đang HIGH trên Port B! Chỉ dùng dấu `=`."
          ]
        }
      ]
    },
    {
      "id": "qg_3",
      "moduleId": "m3_bitfield",
      "title": "03. Bit Field Operations (Trường Bit Ngoại vi AVR)",
      "ewTitle": "Bit Field Operation",
      "intro": "Trích xuất, xóa, thay thế và đóng gói các nhóm bit cấu hình liên tiếp trong `ADMUX`, `TCCR0B`, `UBRR0`, `OCR1A`.",
      "sections": [
        {
          "h": "1. Bộ 3 công thức Bit-Field tổng quát",
          "code": "// 1) Tạo mặt nạ gồm `len` bit 1 bắt đầu tại `pos`:\n#define BF_MASK(pos, len)         (((1UL << (len)) - 1UL) << (pos))\n// 2) Trích xuất trường bit về 0..(2^len - 1):\n#define BF_GET(reg, pos, len)     (((reg) >> (pos)) & ((1UL << (len)) - 1UL))\n// 3) Thay thế trường bit an toàn (Clear-then-Set):\n#define BF_SET(reg, pos, len, v)  ((reg) = ((reg) & ~BF_MASK(pos, len)) | (((v) << (pos)) & BF_MASK(pos, len)))"
        },
        {
          "h": "2. Ví dụ thực chiến trên thanh ghi ATmega328P",
          "code": "// Đổi kênh ADC từ ADC0..ADC7 (4 bit MUX3:0 ở ADMUX[3:0]) mà giữ nguyên Vref ở bit 7:6:\nADMUX = (ADMUX & 0xF0U) | (channel & 0x0FU);\n\n// Đổi Prescaler Timer0 sang chia 64 (CS02:0 = 011 ở TCCR0B[2:0]):\nTCCR0B = (TCCR0B & ~0x07U) | 0x03U;\n\n// Cài Baud Rate 9600 bps @ 16MHz vào cặp 12-bit UBRR0H / UBRR0L:\nuint16_t ubrr = (F_CPU / (16UL * 9600UL)) - 1UL; // 103 (0x0067)\nUBRR0H = (uint8_t)(ubrr >> 8);\nUBRR0L = (uint8_t)(ubrr & 0xFFU);"
        },
        {
          "h": "3. Quy tắc đọc/ghi thanh ghi 16-bit trên AVR (Timer1 & ADC)",
          "table": [
            [
              "Ngoại vi 16-bit",
              "Thứ tự ĐỌC đúng",
              "Thứ tự GHI đúng",
              "Ghi chú Datasheet"
            ],
            [
              "ADC (ADCL / ADCH)",
              "Đọc ADCL trước → ADCH sau",
              "(Read-only)",
              "Đọc ADCL sẽ khóa ADCH cho tới khi đọc ADCH"
            ],
            [
              "Timer1 (TCNT1 / OCR1A)",
              "Đọc Low trước → High sau",
              "Ghi High trước → Low sau",
              "Cả hai dùng chung thanh ghi đệm TEMP 8-bit (cần ATOMIC_BLOCK nếu dùng cả trong ISR)"
            ]
          ]
        },
        {
          "h": "4. Lỗi thường gặp",
          "bullets": [
            "❌ `ADMUX |= 2;` khi trước đó đang chọn kênh 5 → ✅ `5 | 2 = 7` (chọn nhầm kênh 7!). Luôn xóa trường cũ (`& 0xF0U`) trước khi OR kênh mới."
          ]
        }
      ]
    },
    {
      "id": "qg_4",
      "moduleId": "m4_bitrot",
      "title": "04. Bitwise Rotation & Counting (Xoay, Đếm & Đảo Bit)",
      "ewTitle": "Bitwise Rotation and Counting",
      "intro": "Kỹ thuật xoay thanh ghi vòng, đếm bit 1 (Kernighan / PROGMEM LUT), đảo thứ tự bit cho SPI và tối ưu kích thước Buffer.",
      "sections": [
        {
          "h": "1. Xoay vòng an toàn 8-bit & 32-bit",
          "code": "// Xoay trái 8-bit (ROL) k vị trí — xử lý an toàn khi k = 0 hoặc k >= 8:\nuint8_t rol8(uint8_t x, uint8_t k) {\n    k &= 7U;\n    return k ? (uint8_t)((x << k) | (x >> (8U - k))) : x;\n}\n// Xoay phải 32-bit (ROR):\nuint32_t ror32(uint32_t x, uint8_t k) {\n    k &= 31U;\n    return k ? ((x >> k) | (x << (32U - k))) : x;\n}"
        },
        {
          "h": "2. Đếm Bit 1 (Popcount) & Kiểm tra Lũy thừa bậc 2",
          "code": "// Thuật toán Brian Kernighan: chỉ lặp đúng bằng số bit 1!\nuint8_t popcount8(uint8_t n) {\n    uint8_t cnt = 0;\n    while (n) { n &= (uint8_t)(n - 1U); cnt++; }\n    return cnt;\n}\n// Kiểm tra lũy thừa của 2 (16, 32, 64, 128) để bỏ phép chia % chậm trên AVR:\nuint8_t is_pow2(uint16_t n) {\n    return (n != 0U) && ((n & (n - 1U)) == 0U);\n}"
        },
        {
          "h": "3. Đảo ngược 8 Bit (MSB ↔ LSB) trong 3 bước O(1)",
          "code": "x = (uint8_t)((x >> 4) | (x << 4));            // Đổi 2 nibble (ASM: SWAP!)\nx = (uint8_t)(((x & 0xCC) >> 2) | ((x & 0x33) << 2));\nx = (uint8_t)(((x & 0xAA) >> 1) | ((x & 0x55) << 1));\n// Mẹo phần cứng SPI trên ATmega328P: bật bit DORD trong thanh ghi SPCR để tự truyền LSB trước!"
        },
        {
          "h": "4. Bảng tra Nibble trong Flash `PROGMEM` (0 byte SRAM)",
          "code": "const uint8_t POP_LUT[16] PROGMEM = {0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4};\nuint8_t cnt = pgm_read_byte(&POP_LUT[v & 0x0F]) + pgm_read_byte(&POP_LUT[v >> 4]);"
        }
      ]
    },
    {
      "id": "qg_5",
      "moduleId": "m5_array",
      "title": "05. Array Manipulation trong 2 KB SRAM",
      "ewTitle": "Array Manipulation",
      "intro": "Xử lý mảng tại chỗ (In-Place O(1) RAM), kiểm tra Checksum UART, lọc trung bình trượt ADC và tuần tự hóa gói tin.",
      "sections": [
        {
          "h": "1. Nguyên tắc vàng khi dùng Mảng trên ATmega328P",
          "bullets": [
            "SRAM chỉ có 2048 byte: tránh khai báo mảng lớn làm biến cục bộ trong hàm (dễ tràn Stack đụng `.bss`). Hãy khai báo `static` toàn cục để `avr-size` báo chính xác ngay lúc biên dịch.",
            "Khi truyền mảng vào hàm `void fn(uint8_t *arr, uint8_t len)`, `sizeof(arr)` chỉ trả về **2 byte** (kích thước con trỏ AVR) — luôn phải truyền kèm `len`!"
          ]
        },
        {
          "h": "2. Bộ lọc Moving Average & Checksum siêu nhẹ",
          "code": "// Cửa sổ trượt 4 mẫu ADC (dùng >> 2 thay cho / 4):\nsum = sum - buf[idx] + new_adc;\nbuf[idx] = new_adc;\nidx = (idx + 1U) & 3U; // Bọc vòng 4 phần tử\nuint16_t avg = sum >> 2;\n\n// Kiểm tra XOR Checksum gói tin N byte:\nuint8_t chk = 0;\nfor (uint8_t i = 0; i < len - 1; i++) chk ^= pkt[i];\nuint8_t valid = (chk == pkt[len - 1]);"
        },
        {
          "h": "3. Tuần tự hóa (Serialization) đa byte an toàn",
          "code": "// Đóng gói uint16_t rpm vào mảng truyền UART theo Big-Endian:\ntx_buf[0] = (uint8_t)(rpm >> 8);\ntx_buf[1] = (uint8_t)(rpm & 0xFFU);"
        }
      ]
    },
    {
      "id": "qg_6",
      "moduleId": "m6_pointer",
      "title": "06. Pointers, MMIO & Function Dispatch Table",
      "ewTitle": "Pointer",
      "intro": "Bản đồ không gian dữ liệu ATmega328P, con trỏ 16-bit, truy cập thanh ghi MMIO `volatile`, con trỏ kép và bảng hàm điều phối.",
      "sections": [
        {
          "h": "1. Bản đồ không gian địa chỉ dữ liệu ATmega328P",
          "table": [
            [
              "Dải địa chỉ",
              "Kích thước",
              "Vùng nhớ",
              "Ghi chú quan trọng"
            ],
            [
              "0x0000 – 0x001F",
              "32 byte",
              "CPU Registers R0..R31",
              "Các thanh ghi X (R26:27), Y (R28:29), Z (R30:31) giữ con trỏ 16-bit"
            ],
            [
              "0x0020 – 0x005F",
              "64 byte",
              "Standard I/O",
              "PINB(0x23), DDRB(0x24), PORTB(0x25), SREG(0x5F)"
            ],
            [
              "0x0060 – 0x00FF",
              "160 byte",
              "Extended I/O",
              "ADCSRA(0x7A), UCSR0A(0xC0), UDR0(0xC6)"
            ],
            [
              "0x0100 – 0x08FF",
              "2048 byte",
              "Internal SRAM",
              ".data → .bss ↑ (Heap) ... (trống) ... ↓ Stack (từ 0x08FF)"
            ]
          ]
        },
        {
          "h": "2. Bốn mẫu Con trỏ cốt lõi trong Firmware",
          "code": "// 1) MMIO Pointer (bản chất macro PORTB trong <avr/io.h>):\nvolatile uint8_t * const pPORTB = (volatile uint8_t *)0x25;\n*pPORTB |= (1U << 5);\n\n// 2) Pointer Walk (AVR tối ưu thành LD Rd, Z+):\nfor (const uint8_t *p = arr; p < arr + n; p++) sum += *p;\n\n// 3) Double Pointer (Zero-Copy đổi Double Buffer):\nvoid swap_buf(uint8_t **a, uint8_t **b) { uint8_t *t = *a; *a = *b; *b = t; }\n\n// 4) Function Pointer Dispatch Table (Thay switch-case & làm Scheduler O(1)):\ntypedef void (*cmd_fn_t)(void);\nstatic const cmd_fn_t cmd_tbl[3] = {motor_stop, motor_fwd, motor_rev};\nif (id < 3 && cmd_tbl[id] != 0) cmd_tbl[id]();"
        },
        {
          "h": "3. Bẫy nguy hiểm với Con trỏ trên AVR",
          "bullets": [
            "❌ Gọi con trỏ hàm đang bằng `NULL` (`0x0000`) → ✅ `0x0000` trên AVR là **Reset Vector**, chip sẽ tự khởi động lại ngay lập tức!",
            "❌ Trả về `&local_var` từ hàm → ✅ Dangling Pointer vì biến cục bộ trên Stack bị ghi đè ngay khi thoát hàm."
          ]
        }
      ]
    },
    {
      "id": "qg_7",
      "moduleId": "m7_struct",
      "title": "07. Structures, Bitfields & Struct Padding (AVR vs ARM)",
      "ewTitle": "Structures",
      "intro": "Tổ chức gói tin cảm biến, ánh xạ thanh ghi GPIO (`PINx`/`DDRx`/`PORTx`) và cách tránh lệch Struct Padding khi truyền sang PC/STM32.",
      "sections": [
        {
          "h": "1. Struct Padding: ATmega328P (8-bit) vs STM32/PC (32-bit)",
          "table": [
            [
              "Định nghĩa Struct",
              "Trên ATmega328P (Align 1B)",
              "Trên STM32 / PC (Align 4B)",
              "Cách khắc phục"
            ],
            [
              "struct { uint8_t a; uint32_t b; uint8_t c; }",
              "6 byte (0 byte đệm)",
              "12 byte (6 byte đệm!)",
              "Xếp trường lớn trước nhỏ sau + `__attribute__((packed))`"
            ],
            [
              "struct { uint32_t b; uint8_t a; uint8_t c; }",
              "6 byte",
              "8 byte (6 nếu packed)",
              "Thêm `_Static_assert(sizeof(s) == 6, \"err\")`"
            ]
          ]
        },
        {
          "h": "2. Phủ Struct lên nhóm thanh ghi GPIO ATmega328P",
          "code": "typedef struct {\n    volatile uint8_t PIN;   // +0 (vd PINB  = 0x23)\n    volatile uint8_t DDR;   // +1 (vd DDRB  = 0x24)\n    volatile uint8_t PORT;  // +2 (vd PORTB = 0x25)\n} avr_port_t;\n\n#define GPIOB ((avr_port_t *)0x23)\n#define GPIOC ((avr_port_t *)0x26)\n#define GPIOD ((avr_port_t *)0x29)\n\nGPIOB->DDR |= (1U << 5); GPIOB->PORT |= (1U << 5);"
        },
        {
          "h": "3. Lỗi thường gặp",
          "bullets": [
            "❌ Dùng `&reg.bitfield` → ✅ Cấm trong C vì bitfield không nằm trên ranh giới byte.",
            "❌ Truyền struct lớn theo giá trị `fn(pkt)` → ✅ Tốn Stack! Hãy truyền `const pkt_t *p`."
          ]
        }
      ]
    },
    {
      "id": "qg_8",
      "moduleId": "m8_union",
      "title": "08. Unions (Register Overlay, ADC & Float UART)",
      "ewTitle": "Unions",
      "intro": "Dùng chung vùng nhớ SRAM để vừa thao tác cả byte/từ, vừa truy cập từng bitfield hoặc tách `float`/`uint32_t` thành luồng byte.",
      "sections": [
        {
          "h": "1. Sơ đồ Little-Endian của Union 4 byte trên ATmega328P",
          "table": [
            [
              "Địa chỉ SRAM",
              "+0 (Thấp nhất)",
              "+1",
              "+2",
              "+3 (Cao nhất)"
            ],
            [
              "`u.u32 = 0x12345678UL`",
              "`u.b[0] = 0x78` (LSB)",
              "`u.b[1] = 0x56`",
              "`u.b[2] = 0x34`",
              "`u.b[3] = 0x12` (MSB)"
            ],
            [
              "`u.f = 25.5f` (IEEE-754)",
              "`0x00`",
              "`0x00`",
              "`0xCC`",
              "`0x41`"
            ]
          ]
        },
        {
          "h": "2. Các mẫu Union thực chiến trên ATmega328P",
          "code": "// 1) Giải mã ADC 10-bit (đọc ADCL trước, ADCH sau):\ntypedef union { uint16_t full; struct { uint8_t lo, hi; } b; } adc_u;\nadc_u res; res.b.lo = ADCL; res.b.hi = ADCH;\n\n// 2) Chuẩn bị thanh ghi UCSR0B rồi ghi nguyên tử 1 lần:\ntypedef union { uint8_t raw; struct { uint8_t tx8:1,rx8:1,ucsz2:1,txen:1,rxen:1,udrie:1,txcie:1,rxcie:1; } b; } ucsr0b_u;\nucsr0b_u u = { .raw = 0 };\nu.b.rxen = 1; u.b.txen = 1; u.b.rxcie = 1;\nUCSR0B = u.raw; // 0x98\n\n// 3) Truyền float 4 byte qua UART (Python nhận bằng struct.unpack('<f', data)):\nunion { float f; uint8_t b[4]; } tx = { .f = 25.5f };\nfor (uint8_t i = 0; i < 4; i++) uart_putc(tx.b[i]);"
        },
        {
          "h": "3. Lưu ý quan trọng trên AVR",
          "bullets": [
            "Trên `avr-gcc`, cả `float` và `double` đều mặc định rộng **32-bit (4 byte)**.",
            "Luôn khởi tạo `.raw = 0` cho Union thanh ghi trước khi gán từng bitfield để tránh bit rác."
          ]
        }
      ]
    },
    {
      "id": "qg_9",
      "moduleId": "m9_ringbuf",
      "title": "09. Circular Buffers & Hardware Stack (Thay malloc)",
      "ewTitle": "Circular Buffer",
      "intro": "Xây dựng bộ đệm vòng tĩnh Lock-Free cho ngắt `ISR(USART_RX_vect)` thay thế `malloc`/`free`, và bảo vệ Hardware Stack của ATmega328P.",
      "sections": [
        {
          "h": "1. Vì sao ATmega328P dùng Ring Buffer tĩnh thay `malloc()`?",
          "bullets": [
            "Heap + Stack dùng chung 2 KB SRAM (`0x0100..0x08FF`). Dùng `malloc`/`free` gây phân mảnh bộ nhớ và có thể đâm thủng Stack làm treo chip.",
            "Ring Buffer kích thước lũy thừa của 2 (`16, 32, 64`) bọc vòng chỉ bằng phép `& RB_MASK` (1 chu kỳ xung trong ISR!).",
            "Đọc/ghi `volatile uint8_t head, tail` là nguyên tử tự nhiên trên CPU 8-bit AVR (không cần khóa mutex)."
          ]
        },
        {
          "h": "2. Code chuẩn Ring Buffer UART RX (Copy dùng ngay)",
          "code": "#define RB_SIZE 32U\n#define RB_MASK (RB_SIZE - 1U)\n\nstatic volatile uint8_t rb_buf[RB_SIZE];\nstatic volatile uint8_t rb_head = 0, rb_tail = 0;\n\nISR(USART_RX_vect) {\n    uint8_t data = UDR0; // Luôn đọc UDR0 để xóa cờ RXC0\n    uint8_t next = (rb_head + 1U) & RB_MASK;\n    if (next != rb_tail) { rb_buf[rb_head] = data; rb_head = next; }\n}\n\nuint8_t rb_pop(uint8_t *out) {\n    if (rb_head == rb_tail) return 0U; // Rỗng\n    *out = rb_buf[rb_tail];\n    rb_tail = (rb_tail + 1U) & RB_MASK;\n    return 1U;\n}"
        },
        {
          "h": "3. Quản lý Hardware Stack (SP = SPL/SPH)",
          "bullets": [
            "Stack mọc ngược từ `RAMEND = 0x08FF` xuống. Mỗi lệnh `CALL`/ngắt `ISR` đẩy 2 byte Return Address + các thanh ghi được dùng.",
            "Tránh hàm đệ quy (Recursion) và tránh khai báo mảng cục bộ > 64 byte bên trong hàm."
          ]
        }
      ]
    },
    {
      "id": "qg_10",
      "moduleId": "m10_string",
      "title": "10. Strings, PROGMEM & UART Shell Parser",
      "ewTitle": "Strings and Character Handling",
      "intro": "Xử lý chuỗi ASCII không tốn SRAM (`PSTR` / `PROGMEM`), chống tràn Buffer Overflow và viết bộ tách lệnh Shell/GPS siêu nhẹ.",
      "sections": [
        {
          "h": "1. Tiết kiệm SRAM bằng `<avr/pgmspace.h>`",
          "code": "// ❌ TỐN SRAM: avr-gcc copy \"Motor Ready\" từ Flash vào 2KB SRAM lúc khởi động!\nuart_puts(\"Motor Ready\\r\\n\");\n\n// ✅ 0 BYTE SRAM: Đọc từng ký tự trực tiếp từ Flash 32KB!\nvoid uart_puts_P(const char *s) {\n    char c;\n    while ((c = (char)pgm_read_byte(s++)) != '\\0') uart_putc(c);\n}\nuart_puts_P(PSTR(\"Motor Ready\\r\\n\"));\n// So sánh lệnh nhận từ UART với chuỗi trong Flash:\nif (strcmp_P(rx_line, PSTR(\"START\")) == 0) { /* ... */ }"
        },
        {
          "h": "2. Thủ thuật ASCII & Parser siêu gọn (Không dùng sscanf/strtok)",
          "code": "// 1) Đổi HOA -> thường bằng Bit 5:\nif (c >= 'A' && c <= 'Z') c |= 0x20U;\n\n// 2) Chuyển chuỗi số không dấu sang số:\nwhile (*p >= '0' && *p <= '9') val = val * 10 + (*p++ - '0');\n\n// 3) Copy an toàn chống tràn Buffer:\nfor (i = 0; i < max_len - 1 && src[i]; i++) dst[i] = src[i];\ndst[i] = '\\0';"
        },
        {
          "h": "3. Lỗi thường gặp",
          "bullets": [
            "❌ `if (strcmp(a, b))` → ✅ Ngược logic! `strcmp` trả về `0` khi hai chuỗi bằng nhau (`strcmp(a, b) == 0`).",
            "❌ Quên chừa 1 byte cho `'\\0'` ở cuối mảng `char buf[N + 1]`."
          ]
        }
      ]
    },
    {
      "id": "qg_11",
      "moduleId": "m11_convert",
      "title": "11. Data Conversion & Encoding (Endianness & Debug)",
      "ewTitle": "Data Conversion and Encoding",
      "intro": "Chuyển đổi Little-Endian (AVR) ↔ Big-Endian (I2C/SPI/Modbus) và tự viết hàm xuất Nhị phân/Hex/Thập phân thay thế `sprintf`.",
      "sections": [
        {
          "h": "1. So sánh dung lượng Flash: Tự viết vs `sprintf`",
          "table": [
            [
              "Phương pháp",
              "Flash tiêu tốn trên AVR",
              "Tốc độ",
              "Khuyến nghị"
            ],
            [
              "`sprintf(buf, \"%d %X\", a, b)`",
              "~1,600 – 2,200 byte",
              "Chậm",
              "Hạn chế dùng khi Flash chật"
            ],
            [
              "`sprintf(buf, \"%.2f\", f)`",
              "~3,500+ byte (cần -lprintf_flt)",
              "Rất chậm",
              "Tránh dùng — hãy truyền binary Union hoặc Fixed-Point"
            ],
            [
              "Tự viết `my_itoa` + `puthex8`",
              "~80 – 140 byte",
              "Rất nhanh",
              "Chuẩn tối ưu cho ATmega328P"
            ]
          ]
        },
        {
          "h": "2. Các hàm chuyển đổi bỏ túi cho ATmega328P",
          "code": "// 1) Đổi Endianness 16-bit (cho MPU6050 / BMP280):\nuint16_t bswap16(uint16_t x) { return (uint16_t)((x >> 8) | (x << 8)); }\n\n// 2) In 1 byte dạng Hex (2 ký tự) ra UART:\nvoid uart_puthex8(uint8_t v) {\n    static const char H[] = \"0123456789ABCDEF\";\n    uart_putc(H[v >> 4]); uart_putc(H[v & 0x0FU]);\n}\n\n// 3) In 1 byte dạng Nhị phân ra UART để soi thanh ghi:\nvoid uart_putbin8(uint8_t v) {\n    for (int8_t i = 7; i >= 0; i--) uart_putc((v & (1U << i)) ? '1' : '0');\n}"
        }
      ]
    },
    {
      "id": "qg_12",
      "moduleId": "m12_sort",
      "title": "12. Searching & Sorting (PROGMEM LUT & Median Filter)",
      "ewTitle": "Searching and Sorting",
      "intro": "Tìm kiếm nhị phân trên bảng tra cảm biến trong Flash `PROGMEM` và lọc nhiễu gai ADC bằng thuật toán sắp xếp không đệ quy.",
      "sections": [
        {
          "h": "1. Chọn thuật toán chuẩn cho vi điều khiển 8-bit",
          "table": [
            [
              "Bài toán",
              "Thuật toán khuyên dùng",
              "Bộ nhớ Stack phụ",
              "Tránh dùng"
            ],
            [
              "Tìm trong mảng nhỏ (< 16 phần tử)",
              "Linear Search",
              "O(1)",
              "Hash table lớn"
            ],
            [
              "Tra bảng NTC / Sin / PWM Gamma (128+ điểm)",
              "Binary Search trên `PROGMEM`",
              "O(1)",
              "Hàm `log()` / `pow()` float"
            ],
            [
              "Lọc nhiễu gai ADC (5–9 mẫu)",
              "Insertion Sort + lấy phần tử giữa (Median)",
              "O(1) Không đệ quy",
              "QuickSort đệ quy / MergeSort"
            ]
          ]
        },
        {
          "h": "2. Code chuẩn Binary Search & Median Filter 5 mẫu",
          "code": "// Binary Search an toàn không tràn (lo + hi):\nint8_t bsearch_u16(const uint16_t *arr, uint8_t n, uint16_t target) {\n    int16_t lo = 0, hi = (int16_t)n - 1;\n    while (lo <= hi) {\n        int16_t mid = lo + ((hi - lo) >> 1);\n        if (arr[mid] == target) return (int8_t)mid;\n        if (arr[mid] < target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}\n\n// Insertion Sort tại chỗ (cho Median Filter):\nfor (uint8_t i = 1; i < n; i++) {\n    uint16_t key = a[i]; int8_t j = (int8_t)i - 1;\n    while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }\n    a[j + 1] = key;\n}"
        }
      ]
    }
  ],
  "brochureAudit": [
    {
      "m": "M1",
      "brochure": "Intro to C, Compilation, Data Types, I/O (Day 1–7)",
      "ewMap": "Quick Guide 0 + Module 01 (Arithmetic Edge Cases)",
      "status": "Đã nâng cấp cho AVR",
      "avrNote": "Chuyển chuỗi biên dịch sang avr-gcc (.c→.elf→.hex), nhấn mạnh kiểu int 16-bit trên AVR, F_CPU, <avr/io.h> và USART0 thay printf."
    },
    {
      "m": "M2",
      "brochure": "Operators & Control Statements (Day 8–14)",
      "ewMap": "Module 01 (Arithmetic) + xuyên suốt 102 Tasks",
      "status": "Phủ 100%",
      "avrNote": "Đưa Arithmetic Edge Cases lên ĐẦU lộ trình để xử lý bẫy tràn 8-bit/16-bit, underflow vòng lặp ngược và signed-vs-unsigned."
    },
    {
      "m": "M3",
      "brochure": "Functions, Call by Ref, Recursion, Storage Classes (Day 15–21)",
      "ewMap": "Module 06 (Pointer) + Quick Guide 0",
      "status": "Đã tối ưu cho AVR",
      "avrNote": "Cảnh báo hạn chế Recursion vì Hardware Stack nhỏ (2 KB SRAM); nhấn mạnh static/extern/volatile trong Driver nhiều file .c/.h."
    },
    {
      "m": "M4",
      "brochure": "Arrays & Strings (Day 22–28)",
      "ewMap": "Module 05 (Array: 8) + Module 10 (Strings: 16) + Module 12 (Sort: 8)",
      "status": "Phủ vượt mức (32 bài)",
      "avrNote": "Toàn bộ thuật toán tối ưu In-Place O(1) RAM, thêm PSTR()/PROGMEM cho chuỗi hằng, parser CSV/NMEA GPS và Shell CLI."
    },
    {
      "m": "M5",
      "brochure": "Pointers, Function Pointers, Stack/Heap (Day 29–35)",
      "ewMap": "Module 06 (Pointer: 19 bài)",
      "status": "Phủ vượt mức (19 bài)",
      "avrNote": "Chuyển sang con trỏ 16-bit SRAM (0x0100–0x08FF), MMIO (volatile uint8_t*), Zero-Copy Double Buffer, Dispatch Table & FSM."
    },
    {
      "m": "M6",
      "brochure": "Structures, Union & Enum (Day 36–42)",
      "ewMap": "Module 07 (Structures: 10) + Module 08 (Unions: 8)",
      "status": "Phủ 100% (18 bài)",
      "avrNote": "Phủ struct lên GPIO (PINx/DDRx/PORTx), so sánh Padding AVR 8-bit vs ARM 32-bit, giải mã ADC 10-bit & truyền IEEE-754 float."
    },
    {
      "m": "M7",
      "brochure": "Dynamic Memory Allocation: malloc/calloc/free (Day 43–49)",
      "ewMap": "Module 09 (Circular Buffers & Stack: 5 bài)",
      "status": "Chuyển đổi Bare-Metal",
      "avrNote": "Thay malloc/free (cấm trong MISRA C & gây phân mảnh chết 2 KB SRAM) bằng Static Ring Buffer Lock-Free cho ngắt UART RX!"
    },
    {
      "m": "M8",
      "brochure": "File Handling: fopen/fprintf/Binary Files (Day 50–56)",
      "ewMap": "Module 11 (Data Conversion: 9 bài) + EEPROM/PROGMEM",
      "status": "Chuyển đổi Bare-Metal",
      "avrNote": "ATmega328P không có OS Filesystem: chuyển sang lưu trữ EEPROM (<avr/eeprom.h>), bảng tra Flash PROGMEM và UART Debug không dùng sprintf."
    },
    {
      "m": "M9",
      "brochure": "Bitwise Programming & Bit Masking (Day 57–63)",
      "ewMap": "Module 02 (16) + Module 03 (13) + Module 04 (10)",
      "status": "Phủ vượt mức (39 bài)",
      "avrNote": "Ánh xạ 100% vào thanh ghi thật ATmega328P: DDRB/PORTB/PINB, SREG, ADMUX, ADCSRA, TCCR0A/B, UBRR0, SPCR."
    },
    {
      "m": "M10",
      "brochure": "Embedded C: Bare Metal, MMIO, volatile, MISRA C (Day 64–70)",
      "ewMap": "Tích hợp xuyên suốt 128 bài + Quick Guide 0..12",
      "status": "Phủ 100%",
      "avrNote": "Gắn hộp cảnh báo Bẫy AVR & quy tắc MISRA C (1U/1UL, volatile, _Static_assert, Clear-then-Set, write-1-to-clear TIFR0) vào từng bài."
    },
    {
      "m": "M11",
      "brochure": "MCU Basics: ARM Cortex-M, GPIO, UART, SPI, I2C, CAN (Day 71–77)",
      "ewMap": "Chuyển toàn bộ sang ATmega328P AVR",
      "status": "Chuyển đổi 100% AVR",
      "avrNote": "Đổi ARM Cortex-M → ATmega328P (32KB Flash, 2KB SRAM, 1KB EEPROM, R0–R31, SREG, INT0/1, GPIO, USART0, SPI, TWI/I2C, ADC, Timer0/1/2; CAN qua MCP2515 SPI)."
    },
    {
      "m": "M12",
      "brochure": "Real-Time & RTOS Concepts, Timers & Watchdog (Day 78–84)",
      "ewMap": "Module 06 (Dispatch Table/FSM) + WDT/Timer0",
      "status": "Điều chỉnh cho AVR",
      "avrNote": "Áp dụng Super-loop + Timer-tick Cooperative Scheduler (dùng Function Pointer Table) + Watchdog Timer (WDTCSR) phù hợp 2 KB SRAM."
    },
    {
      "m": "M13",
      "brochure": "Debugging (GDB/Breakpoints) & Interview Prep (Day 85–91)",
      "ewMap": "26 Quizzes + Ca kiểm tra Microchip Studio (F11)",
      "status": "Phủ 100%",
      "avrNote": "Chuyển GDB sang Microchip Studio Simulator (F11 Step Into, I/O View, Processor Status SREG, Watch Window) + 78 câu hỏi phỏng vấn/quiz."
    }
  ]
};
