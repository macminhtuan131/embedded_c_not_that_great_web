(() => {
  const paths = {
    book:'<path d="M12 7v14m0-14C9 4 6 4 3 5v14c4-1 7 0 9 2m0-14c3-3 6-3 9-2v14c-4-1-7 0-9 2"/>',
    terminal:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>',
    branch:'<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="6" r="2"/><path d="M6 7v10m0-4a7 7 0 0 0 12-5"/>',
    code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-16-4 20"/>',
    stack:'<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
    link:'<path d="m10 13 4-4m-6 1-3 3a4 4 0 0 0 6 6l3-3m-4-8 3-3a4 4 0 0 1 6 6l-3 3"/>',
    layers:'<path d="m12 3 9 5-9 5-9-5 9-5zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
    box:'<path d="m3 7 9-4 9 4v10l-9 4-9-4V7zm0 0 9 4 9-4m-9 4v10m-4-16 8 4"/>',
    file:'<path d="M5 4h9l5 5v11H5V4zm9 0v5h5M8 13h8m-8 3h6"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M10 2v4m4-4v4m-4 12v4m4-4v4M2 10h4m-4 4h4m12-4h4m-4 4h4"/>',
    radio:'<circle cx="12" cy="12" r="2"/><path d="M16 8a6 6 0 0 1 0 8M8 8a6 6 0 0 0 0 8m11-11a10 10 0 0 1 0 14M5 5a10 10 0 0 0 0 14"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    home:'<path d="m3 10 9-7 9 7v10h-6v-6H9v6H3V10z"/>',
    map:'<path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2V5zm6-2v16m6-14v16"/>',
    flask:'<path d="M9 3h6m-5 0v7l-6 8a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-8V3M7 15h10"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
    right:'<path d="m9 6 6 6-6 6"/>',
    down:'<path d="m6 9 6 6 6-6"/>',
    play:'<path d="m8 5 11 7-11 7V5z"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    activity:'<path d="M2 12h4l3-8 5 16 3-8h5"/>',
    close:'<path d="m6 6 12 12M18 6 6 18"/>',
    reset:'<path d="M3 12a9 9 0 1 1 2.6 6.4M3 4v8h8"/>',
    copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    light:'<path d="M9 18h6m-5 4h4M8 15c0-2-3-3-3-7a7 7 0 0 1 14 0c0 4-3 5-3 7"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
    moon:'<path d="M21 14a9 9 0 0 1-11-11 9 9 0 1 0 11 11z"/>'
  };
  window.icon = (name, size=19) => '<svg aria-hidden="true" width="' + size + '" height="' + size +
    '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
    (paths[name] || paths.book) + '</svg>';
})();

