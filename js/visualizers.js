// Visualizers v4: 3-Row Bitwise Diff + AVR Physical Pin LED Strip + Animated Memory/Pointer SVG + Ring Buffer SVG
window.Visualizers = (() => {
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function renderBitsViz(v) {
    const width = v.width || 8;
    const val = v.val >>> 0;
    const prev = (v.prev !== undefined ? v.prev : val) >>> 0;
    const mask = (v.mask || 0) >>> 0;
    const hexPad = width === 16 ? 4 : 2;
    const hexStr = '0x' + val.toString(16).toUpperCase().padStart(hexPad, '0');
    const prevHex = '0x' + prev.toString(16).toUpperCase().padStart(hexPad, '0');
    const binStr = val.toString(2).padStart(width, '0').replace(/(.{4})(?=.)/g, '$1_');

    let prevRow = '';
    let maskRow = '';
    let cells = '';


    for (let i = width - 1; i >= 0; i--) {
      const bit = (val >> i) & 1;
      const pbit = (prev >> i) & 1;
      const mbit = (mask >> i) & 1;
      const isChanged = bit !== pbit;
      const lbl = (v.labels && v.labels[width - 1 - i]) ? v.labels[width - 1 - i] : `b${i}`;

      prevRow += `<div class="mini-bit ${pbit ? 'on' : ''}">${pbit}</div>`;
      maskRow += `<div class="mini-bit ${mbit ? 'msk' : ''}">${mbit}</div>`;
      cells += `<div class="bit-cell ${bit ? 'one' : ''} ${isChanged ? 'changed' : ''} ${mbit ? 'masked' : ''}" data-bit="${i}">
        <div class="bit-idx">${i}</div>
        <div class="bit-val">${bit}</div>
        <div class="bit-lbl">${esc(lbl)}</div>
      </div>`;

    }

    const showDiff = (prev !== val || mask !== 0) && width <= 16;

    return `<div class="bit-panel">
      <div class="bit-hdr">
        <span class="bit-reg-name">${esc(v.reg)}</span>
        <div class="bit-readouts">
          <span class="badge purple">HEX: ${hexStr}</span>
          <span class="badge blue">DEC: ${val}</span>
          <span class="badge green">BIN: 0b${binStr}</span>
        </div>
      </div>
      ${showDiff ? `<div class="diff-box">
        <div class="diff-row"><span class="diff-tag">Trước (${prevHex}):</span><div class="mini-grid ${width===16?'w16':'w8'}">${prevRow}</div></div>
        <div class="diff-row"><span class="diff-tag">${esc(v.op || 'Mask / Vùng tác động')}:</span><div class="mini-grid ${width===16?'w16':'w8'}">${maskRow}</div></div>
      </div>` : ''}
      <div class="bit-grid ${width === 16 ? 'w16' : 'w8'}">${cells}</div>
      <div class="viz-note">💡 ${esc(v.note || '')}</div>
    </div>`;
  }

  function renderMemoryViz(v) {
    const cells = (v.cells || []).map(c => `
      <div class="mem-cell ${c.active ? 'active ' + (c.tone || 'green') : ''}">
        <div class="mem-addr">${esc(c.addr)}</div>
        <div class="mem-val">${esc(c.val)}</div>
        <div class="mem-lbl">${esc(c.label)}</div>
      </div>
    `).join('');

    const ptrs = (v.pointers || []).map(p => `
      <div class="ptr-flow-item">
        <span class="ptr-chip">${esc(p.name)} = ${esc(p.val)}</span>
        <span class="ptr-arrow-txt">━━▶</span>
        <span class="badge green">Ô nhớ [${esc(p.target)}]</span>
      </div>
    `).join('');

    return `<div class="bit-panel">
      <div class="bit-hdr"><span class="bit-reg-name">${esc(v.title)}</span><span class="badge purple">ATmega328P SRAM (0x0100–0x08FF)</span></div>
      <div class="mem-grid">${cells}</div>
      ${ptrs ? `<div class="ptr-flow">${ptrs}</div>` : ''}
      <div class="viz-note">💡 ${esc(v.note || '')}</div>
    </div>`;
  }

  function renderAvrArch(activeBlocks) {
    const set = new Set(activeBlocks || ['CPU']);
    const lit = k => set.has(k) ? 'lit' : '';
    return `<div class="avr-svg-wrap">
      <svg viewBox="0 0 680 260" style="width:100%;height:auto;display:block;">
        <rect x="10" y="10" width="195" height="105" rx="10" class="avr-block ${lit('CPU')}" />
        <text x="24" y="34" class="avr-txt">AVR 8-bit RISC CPU</text>
        <text x="24" y="52" class="avr-sub">32 Thanh ghi R0–R31 (0x00–0x1F)</text>
        <text x="24" y="68" class="avr-sub">ALU 8 bit</text>
        <rect x="24" y="78" width="165" height="26" rx="6" class="avr-block ${lit('SREG')}" />
        <text x="34" y="95" class="avr-txt">SREG: I T H S V N Z C</text>
        <rect x="230" y="10" width="135" height="72" rx="10" class="avr-block ${lit('FLASH')}" />
        <text x="244" y="34" class="avr-txt">FLASH 32 KB</text>
        <text x="244" y="50" class="avr-sub">Code &amp; PROGMEM</text>
        <text x="244" y="65" class="avr-sub">Bus lệnh riêng</text>
        <rect x="380" y="10" width="145" height="72" rx="10" class="avr-block ${lit('SRAM')}" />
        <text x="394" y="34" class="avr-txt">SRAM 2 KB</text>
        <text x="394" y="50" class="avr-sub">0x0100 – 0x08FF</text>
        <text x="394" y="65" class="avr-sub">.data/.bss ↑  ↓ Stack</text>
        <rect x="540" y="10" width="130" height="72" rx="10" class="avr-block ${lit('EEPROM')}" />
        <text x="554" y="34" class="avr-txt">EEPROM 1 KB</text>
        <text x="554" y="50" class="avr-sub">Lưu cấu hình bền</text>
        <text x="554" y="65" class="avr-sub">EEAR / EEDR / EECR</text>
        <line x1="205" y1="46" x2="230" y2="46" stroke="var(--border-strong)" stroke-width="2" />
        <line x1="205" y1="115" x2="205" y2="145" stroke="var(--border-strong)" stroke-width="2" />
        <line x1="40" y1="145" x2="640" y2="145" stroke="var(--green-solid)" stroke-width="2.5" stroke-dasharray="5 3" />
        <text x="240" y="138" class="avr-sub">8-bit Internal Data &amp; I/O Bus (MMIO: 0x0020 – 0x00FF)</text>
        <rect x="10" y="160" width="102" height="82" rx="9" class="avr-block ${lit('GPIO')}" />
        <text x="20" y="182" class="avr-txt">GPIO B/C/D</text>
        <text x="20" y="198" class="avr-sub">DDRx / PORTx</text>
        <text x="20" y="212" class="avr-sub">PINx (23 chân)</text>
        <rect x="122" y="160" width="102" height="82" rx="9" class="avr-block ${lit('TIMER')}" />
        <text x="132" y="182" class="avr-txt">Timer 0/1/2</text>
        <text x="132" y="198" class="avr-sub">TCCR / OCR</text>
        <text x="132" y="212" class="avr-sub">PWM · 8/16-bit</text>
        <rect x="234" y="160" width="102" height="82" rx="9" class="avr-block ${lit('USART')}" />
        <text x="244" y="182" class="avr-txt">USART0</text>
        <text x="244" y="198" class="avr-sub">UCSR0 · UBRR0</text>
        <text x="244" y="212" class="avr-sub">UDR0 (PD0/PD1)</text>
        <rect x="346" y="160" width="102" height="82" rx="9" class="avr-block ${lit('ADC')}" />
        <text x="356" y="182" class="avr-txt">ADC 10-bit</text>
        <text x="356" y="198" class="avr-sub">ADMUX / ADCSRA</text>
        <text x="356" y="212" class="avr-sub">ADCL + ADCH</text>
        <rect x="458" y="160" width="102" height="82" rx="9" class="avr-block ${lit('SPI')}" />
        <text x="468" y="182" class="avr-txt">SPI / TWI</text>
        <text x="468" y="198" class="avr-sub">SPCR / SPDR</text>
        <text x="468" y="212" class="avr-sub">TWCR / TWDR</text>
        <rect x="570" y="160" width="100" height="82" rx="9" class="avr-block ${lit('INT')}" />
        <text x="580" y="182" class="avr-txt">INT &amp; WDT</text>
        <text x="580" y="198" class="avr-sub">INT0/1 · PCINT</text>
        <text x="580" y="212" class="avr-sub">WDTCSR Watchdog</text>
      </svg>
      <div class="viz-note">Khối tô màu giúp xác định thành phần đang được minh họa.</div>
    </div>`;
  }

  function renderSandbox(state) {
    const v = {
      width: 8, reg: 'PORTB (0x25) — Nhấn trực tiếp vào từng ô Bit bên dưới để đảo!',
      val: state.sandboxReg, prev: state.sandboxPrev, mask: (1 << state.sandboxBit),
      labels: ['PB7','PB6','PB5','PB4','PB3','PB2','PB1','PB0'],
      note: state.sandboxExpr, op: 'Bit mục tiêu'
    };
    let html = renderBitsViz(v);
    html += `<div class="bit-panel">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span class="mono" style="font-weight:700;">Chọn Bit n (0..7):</span>
        <select id="sbBitSel" style="padding:4px 8px;border-radius:6px;border:1px solid var(--border);background:var(--surface);color:var(--ink);">
          ${[0,1,2,3,4,5,6,7].map(i => `<option value="${i}" ${i===state.sandboxBit?'selected':''}>PB${i} (Bit ${i})</option>`).join('')}
        </select>
        <button class="ctrl-btn active" id="sbSet">|= (1U &lt;&lt; n) Set</button>
        <button class="ctrl-btn" id="sbClr">&amp;= ~(1U &lt;&lt; n) Clear</button>
        <button class="ctrl-btn" id="sbTog">^= (1U &lt;&lt; n) Toggle</button>
        <button class="ctrl-btn" id="sbRol">ROL &lt;&lt; 1</button>
        <button class="ctrl-btn" id="sbRor">ROR &gt;&gt; 1</button>
        <button class="ctrl-btn" id="sbNot">~PORTB</button>
        <button class="ctrl-btn" id="sbZero">Reset 0x00</button>
      </div>
    </div>`;
    return html;
  }

  return { esc, renderBitsViz, renderMemoryViz, renderAvrArch, renderSandbox };
})();
