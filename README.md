# Xưởng Nhúng · ATmega328P

Khóa học C bare-metal bằng tiếng Việt dùng ATmega328P ở 16 MHz. Phần đầu dạy biến, vòng lặp, hàm, con trỏ và bộ nhớ qua tín hiệu GPIO, USART0, ADC0 và EEPROM. Phần sau triển khai thanh ghi, ngắt, timer, PWM, SPI, TWI và lịch hợp tác.

Website có 53 bài chính, 102 bài tập firmware theo các chủ đề EWskills, 26 bài trắc nghiệm, 13 hướng dẫn và 5 dự án. Từng bài firmware có nhiệm vụ, nguồn vào, điểm đo, mã khởi đầu, lời giải C và firmware Intel HEX đã tạo cho ATmega328P. Hướng dẫn, trắc nghiệm và dự án có ca thực hành đi kèm.

## Thực hành

1. Mở index.html bằng trình duyệt hoặc chạy một máy chủ tĩnh từ thư mục dự án.
2. Chọn ca. Đọc mức chân, byte UART hoặc điện áp ADC0 cấp vào. Dự đoán giá trị rồi bấm **Chạy HEX mẫu**. Đối chiếu cột **Đo được** và mở ảnh chụp từng chân ở cổng B, C, D.
3. Tải main.c và sửa theo đề. Dùng AVR-GCC tạo HEX rồi bấm **Nạp HEX của bạn** để chạy các ca. Dùng tên chân của ATmega328P và đối chiếu sơ đồ bo trước khi đấu mạch.

    avr-gcc -std=gnu11 -Os -mmcu=atmega328p -DF_CPU=16000000UL main.c -o main.elf
    avr-objcopy -O ihex -R .eeprom main.elf main.hex

AVR8js thực thi lệnh AVR và mô phỏng các thanh ghi, ngoại vi cần cho ca kiểm. USART, SPI và TWI cung cấp dữ liệu ở mức byte. Các bài kiểm PWM dùng sai số một nhịp Timer0 khi đo độ rộng. Với bo thật, đo riêng thời gian, điện áp, đấu dây và tín hiệu điện.

Tiến độ và mã AVR nháp được lưu trong trình duyệt theo địa chỉ website.

## Đưa lên GitHub Pages

1. Giải nén ZIP. Tải toàn bộ nội dung bên trong lên gốc nhánh main, cùng cấp với index.html. Giữ tệp .nojekyll. Nếu GitHub bỏ qua tệp bắt đầu bằng dấu chấm, tạo tệp rỗng .nojekyll ở gốc repository.
2. Vào **Settings → Pages**. Dùng **Deploy from a branch → main → /(root)**.
3. Khi GitHub báo triển khai xong, mở website ở **Settings → Pages → Visit site**.

## Tạo lại bản tĩnh từ mã nguồn

Chạy npm run build để tạo thư mục dist. Để tái tạo các HEX mẫu, dùng AVR-GCC và avr-objcopy trong PATH rồi chạy npm run build:firmware. Có thể chỉ định tệp thực thi bằng biến AVR_GCC và AVR_OBJCOPY.

## Tài liệu

- [Datasheet và thông tin sản phẩm ATmega328P của Microchip](https://www.microchip.com/en-us/product/atmega328p)
- [Kho Embedded C của EWskills](https://www.ewskills.com/embedded-c)
- [Embedded-C của aKaReZa75](https://github.com/aKaReZa75/Embedded-C)
- [Modern Embedded Systems Programming của Quantum Leaps](https://github.com/QuantumLeaps/modern-embedded-programming-course)
- [AVR8js của Wokwi](https://github.com/wokwi/avr8js). Giấy phép ở vendor/avr8js/LICENSE.

Trang Nguồn và tài liệu đối chiếu các mô-đun với brochure *C Programming for Embedded Systems*.

