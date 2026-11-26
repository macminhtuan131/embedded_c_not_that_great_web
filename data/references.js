(() => {
  const githubC = "https://github.com/aKaReZa75/Embedded-C";
  const quantum = "https://github.com/QuantumLeaps/modern-embedded-programming-course";
  const quantumLessons = "https://www.state-machine.com/video-course/";
  const ewC = "https://www.ewskills.com/embedded-c";
  const ewMCU = "https://www.ewskills.com/arduino";
  const microchip = "https://www.microchip.com/en-us/product/atmega328p";
  const c = (file,title) => [title,githubC+"/blob/main/"+file+".md"];
  const ew = (slug,title,course=ewMCU) => [title,course+"/"+slug];

  const materials = {
    "chuan-bi":[
      ["Nguồn chính","aKaReZa75 · Embedded-C","Tra cứu kiểu dữ liệu, luồng điều khiển, hàm, con trỏ, cấp phát và cấu trúc dữ liệu theo từng chuyên đề.",githubC],
      ["Bổ sung","Quantum Leaps · Modern Embedded Systems Programming","Các bài đầu minh họa cách số, luồng điều khiển, biến, địa chỉ và phép toán C xuất hiện trong chương trình.",quantum]
    ],
    "nhung":[
      ["Nguồn chính","EWskills · Embedded C Programming","Luyện mặt nạ bit, số học có giới hạn, bộ đệm, chuỗi, con trỏ và dữ liệu đưa vào firmware.",ewC],
      ["Nguồn chính","EWskills · Mastering Microcontrollers","Học ngoại vi qua GPIO, PWM, ADC, EEPROM, UART, SPI, I²C, timer, ngắt và quản lý nguồn.",ewMCU],
      ["Bổ sung","Quantum Leaps · Modern Embedded Systems Programming","Đọc thêm về Cortex-M, mã khởi động, vùng tranh chấp, RTOS, máy trạng thái và kiểm thử.",quantum],
      ["Tra cứu phần cứng","Microchip · ATmega328P","Đối chiếu sơ đồ chân, bề rộng thanh ghi, bit cấu hình và trình tự truy cập của chip dùng trong lab.",microchip]
    ]
  };

  const moduleReading = {
    c:[c("Variable","Biến và kiểu dữ liệu"),c("STDIO","Nhập xuất và định dạng"),c("ASCII","Ký tự ASCII và escape")],
    flow:[c("Operators","Toán tử"),c("Conditional","Câu lệnh điều kiện"),c("Loops","Vòng lặp")],
    functions:[c("Function","Hàm"),c("MemoryClass","Lớp lưu trữ"),c("Preprocessor","Tiền xử lý")],
    arrays:[c("Array_String","Mảng và chuỗi"),c("ASCII","Ký tự ASCII")],
    pointers:[c("Pointer","Con trỏ"),c("Casting","Chuyển kiểu"),["Quantum Leaps · Các bài C đầu tiên",quantumLessons]],
    records:[c("Data_Structures","Struct, union, enum và typedef")],
    heap:[c("MemoryClass","Lớp lưu trữ và vòng đời"),c("Pointer","Con trỏ và quản lý bộ nhớ")],
    files:[c("STDIO","Ôn định dạng và hàm nhập xuất")],
    bits:[ew("bitwise-operations","EWskills · Toán tử bit",ewC),ew("bit-field-operation","EWskills · Trường bit",ewC),["EWskills · Bài tập Embedded C",ewC]],
    bare:[ew("gpio","EWskills · GPIO"),["Quantum Leaps · Mã khởi động và thanh ghi",quantumLessons],["Microchip · Datasheet ATmega328P",microchip]],
    peripherals:[["EWskills · Mastering Microcontrollers",ewMCU],ew("timer","EWskills · Timer"),ew("adc","EWskills · ADC"),ew("uart","EWskills · UART"),ew("spi","EWskills · SPI"),ew("i2c","EWskills · I²C")],
    realtime:[ew("interrupt","EWskills · Ngắt"),ew("circular-buffer","EWskills · Bộ đệm vòng",ewC),["Quantum Leaps · RTOS và hướng sự kiện",quantumLessons]],
    debug:[["EWskills · Ôn ngoại vi và các ca thực hành",ewMCU],["Quantum Leaps · Tracing, assertion và kiểm thử",quantumLessons],c("Comment","Chú thích và Doxygen")]
  };

  const lessonReading = {
    arithmetic:[["EWskills · Áp dụng số học trong phần C nhúng",ewC]],
    binary:[ew("bitwise-operations","EWskills · Cách đọc và thao tác bit",ewC)],
    gpio:[ew("gpio","EWskills · Hướng, mức logic và điện trở kéo")],
    timer:[ew("timer","EWskills · Các chế độ timer")],
    "pwm-lab":[ew("pwm","EWskills · PWM"),["Microchip · Chế độ PWM của Timer0",microchip]],
    adc:[ew("adc","EWskills · Độ phân giải và điện áp tham chiếu")],
    "eeprom-lab":[ew("eeprom","EWskills · Đọc ghi EEPROM"),["Microchip · EEPROM trên ATmega328P",microchip]],
    "dac-notes":[ew("dac","EWskills · DAC"),ew("pwm","EWskills · PWM")],
    uart:[ew("uart","EWskills · Khung UART và kết nối phần cứng")],
    "uart-workshop":[ew("uart","EWskills · Thực hành UART")],
    buses:[ew("spi","EWskills · SPI"),ew("i2c","EWskills · I²C")],
    interrupts:[ew("interrupt","EWskills · Điều kiện ngắt và ISR")],
    "cortex-startup":[["Quantum Leaps · Các bài về startup Cortex-M",quantumLessons]],
    "rtos-workshop":[["Quantum Leaps · Các dự án RTOS",quantum]]
  };

  const drillGroups = [
    ["m1_arith","Số học và tràn số","bits","arithmetic"],
    ["m2_bitwise","Thao tác bit","bits","masks"],
    ["m3_bitfield","Trường bit","bits","masks"],
    ["m4_bitrot","Xoay và đếm bit","bits","masks"],
    ["m5_array","Xử lý mảng dữ liệu","bare","arrays"],
    ["m6_pointer","Con trỏ và điều phối hàm","bare","advanced-pointers"],
    ["m7_struct","Struct trong firmware","bare","struct"],
    ["m8_union","Union và biểu diễn dữ liệu","bare","union-enum"],
    ["m9_ringbuf","Bộ đệm vòng và ngăn xếp","peripherals","buffers"],
    ["m10_string","Chuỗi và lệnh qua UART","peripherals","strings"],
    ["m11_convert","Mã hóa và chuyển đổi dữ liệu","bits","encoding"],
    ["m12_sort","Tìm kiếm và sắp xếp dữ liệu","bare","arrays"]
  ].map(([id,title,module,prerequisite])=>({id,title,module,prerequisite}));

  window.EmbeddedCourse.references = {materials,moduleReading,lessonReading,drillGroups,ewC};
})();

