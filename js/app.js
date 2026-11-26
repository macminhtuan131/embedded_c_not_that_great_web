(() => {
  "use strict";
  const {modules, tracks, lessons, projects, references, guides} = window.EmbeddedCourse;
  const {materials,moduleReading,lessonReading,drillGroups,ewC} = references;
  const moduleById = new Map(modules.map(item=>[item.id,item]));
  const trackById = new Map(tracks.map(item=>[item.id,item]));
  const groupById = new Map(drillGroups.map(item=>[item.id,item]));
  const oldLessons = window.COURSE.lessons.map(item=>({...item,id:"avr-"+item.id,module:groupById.get(item.moduleId).module}));
  const guideByGroup = new Map(guides.map(item=>[item.moduleId,item]));
  const trackOf = item => trackById.get(item.guide?"nhung":moduleById.get(item.module).track);
  const moduleOrder = new Map(modules.map((item,index)=>[item.id,index]));
  lessons.sort((a,b)=>moduleOrder.get(a.module)-moduleOrder.get(b.module));
  const catalogItems = [guideByGroup.get(null),...drillGroups.flatMap(group=>[
    guideByGroup.get(group.id),...oldLessons.filter(item=>item.moduleId===group.id)
  ])];
  const catalogCounts = {
    task:oldLessons.filter(item=>item.type==="task").length,
    quiz:oldLessons.filter(item=>item.type==="quiz").length,
    guide:guides.length
  };
  const catalogViews = {ewskills:"all","huong-dan":"guide","bai-tap":"avr","trac-nghiem":"quiz"};
  const allLabItems = [...lessons,...catalogItems];
  const avrLabs=window.AvrLabs.labs;
  const {notes,quizLabs,guideLabs}=window.AvrTeaching;
  const {render:renderBench,wiring}=window.AvrBench;
  const quizLabId=item=>"avr-"+quizLabs[item.id.slice(4)];
  const guideLabId=item=>guideLabs[item.moduleId]??
    (item.moduleId?oldLessons.find(task=>task.moduleId===item.moduleId && task.type==="task").id:"hello");
  const titleOf=item=>avrLabs[item.id]?.title??tidy(item.title);
  const summaryOf=item=>item.type==="quiz"?avrLabs[quizLabId(item)].title:avrLabs[item.id]?.task??item.summary;

  const all = [...lessons,...catalogItems];
  const byId = new Map(all.map(item=>[item.id,item]));
  const i = window.icon;
  const {esc,renderAvrArch} = window.Visualizers;
  const $ = selector => document.querySelector(selector);
  const main = $("#main");
  const storageKey = "xuong-nhung-v1";
  function read(key) {
    try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; }
  }
  const prior = read("avr328p_course_v2");
  const stored = read(storageKey);
  const done = new Set((Array.isArray(stored.done) ? stored.done :
    Array.isArray(prior.completed) ? prior.completed.map(id=>"avr-"+id) : []).filter(id=>byId.has(id)));
  const drafts = stored.avrDrafts || {};
  const quiz = stored.quiz || {};
  const projectDone = new Set(Array.isArray(stored.projects) ? stored.projects : []);
  let theme = stored.theme || prior.theme || "light";
  let last = byId.has(stored.last) ? stored.last : byId.has("avr-"+prior.lessonId) ? "avr-"+prior.lessonId : "";
  let route = ["",""], labFilter = "all", labQuery = "";
  let noticeTimer;
  let board = {value:37,before:37,bit:5,expression:"PORTB = 0x25;"};
  function save() {
    try { localStorage.setItem(storageKey,JSON.stringify({done:[...done],drafts:stored.drafts,avrDrafts:drafts,quiz,last,theme,projects:[...projectDone]})); } catch {}
  }
  function notify(message) {
    const note = $("#notice");
    note.textContent=message;
    note.classList.add("visible");
    clearTimeout(noticeTimer);
    noticeTimer=setTimeout(()=>note.classList.remove("visible"),2400);
  }
  const tidy = value => String(value).replace(/^Quiz:\s*/i,"").replace(/\bCase\b/g,"Ca");
  const inline = value => esc(tidy(value)).replace(/\x60([^\x60\n]+)\x60/g,"<code>$1</code>").replace(/\n/g,"<br>");
  const code = value => '<pre class="snippet"><code>'+esc(value)+'</code></pre>';
  const list = values => '<ul class="content-list">'+values.map(text=>'<li>'+inline(text)+'</li>').join("")+'</ul>';
  const pad = number => String(number).padStart(2,"0");
  const count = items => items.filter(item=>done.has(item.id)).length;
  const progressPct = () => Math.round(count(lessons)*100/lessons.length);
  const bar = value => `<div class="bar" role="progressbar" aria-label="Tiến độ" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}"><span style="width:${value}%"></span></div>`;
  const lessonLink = id => (byId.get(id)?.guide?"#huong-dan/":"#bai/")+id;
  const isAvrLab = item => Boolean(avrLabs[item.id]);
  const type = item => item.guide ? "Hướng dẫn" : item.type==="quiz" ? "Trắc nghiệm" : "Firmware AVR";
  const badge = (label,variant="") => `<span class="badge ${variant}">${esc(label)}</span>`;
  const section = (title,detail="") => `<div class="section-heading"><h2>${title}</h2>${detail?"<p>"+detail+"</p>":""}</div>`;
  const heading = (title,desc,mark) => `<div class="page-heading"><span class="phase-icon">${i(mark,23)}</span><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>`;
  const foot = () => `<footer class="footer"><span>Xưởng Nhúng</span><div><a href="#tai-lieu">Nguồn và tài liệu</a><a href="#mo-phong">Mô phỏng bit</a><a href="#tien-do">Tiến độ học</a></div></footer>`;
  const trackHref = (page,id) => "#"+page+"/"+id;
  const externalLink = ([label,url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;

  function trackSwitcher(page,selected) {
    return `<nav class="track-switch" aria-label="Chọn phần học">${tracks.map(track=>`<a href="${trackHref(page,track.id)}"
      ${track===selected?'aria-current="page"':""}>${i(track.icon,19)}<span><small>Phần ${track.number}</small><strong>${track.shortTitle}</strong></span>${i("right",16)}</a>`).join("")}</nav>`;
  }
  function readingLinks(label,items) {
    return `<details class="panel reference-links"><summary>${i("book",17)} ${label}</summary><ul>${items.map(item=>`<li>${externalLink(item)}</li>`).join("")}</ul></details>`;
  }
  function drillLinks(groups) {
    return `<div class="panel drill-links">${groups.map(group=>`<div><a href="#luyen/nhung/${group.id}">${i("terminal",17)} ${group.title}</a>
      <small>${catalogItems.filter(item=>item.moduleId===group.id).length} mục</small></div>`).join("")}</div>`;
  }

  function renderHeader() {
    const [page] = route;
    const links = [["","home","Tổng quan"],["lo-trinh","map","Lộ trình"],["luyen","terminal","Luyện code"],["du-an","flask","Dự án"]];
    $("#topbar").innerHTML = `<div class="top-inner">
      <nav class="top-links" aria-label="Điều hướng chính">${links.map(([id,key,name])=>{
        const selected=id===page || (id==="lo-trinh" && page==="bai") || (id==="luyen" && ["mo-phong","huong-dan"].includes(page));
        return `<a href="#${id}" ${selected?'aria-current="page"':""}>${i(key,17)}<span>${name}</span></a>`;
      }).join("")}</nav>
      <div class="top-tools"><button class="search-trigger" data-action="search" aria-label="Tìm bài học">${i("search",17)}<span>Tìm bài học</span><kbd>Ctrl K</kbd></button>
      <button class="icon-btn theme-btn" data-action="theme" aria-label="Đổi giao diện sáng tối" title="Đổi giao diện sáng tối">${i(theme==="dark"?"sun":"moon",18)}</button>
      <a class="top-progress" href="#tien-do" aria-label="Tiến độ học ${progressPct()} phần trăm"><span class="mini-ring" style="--value:${progressPct()}%"></span><span>${progressPct()}%</span></a></div></div>`;
  }
  function lessonRow(item,index) {
    return `<a class="lesson-row" href="${lessonLink(item.id)}"><span class="row-symbol ${done.has(item.id)?"complete":""}">
      ${done.has(item.id)?i("check",17):Number.isInteger(index)?pad(index+1):i(item.guide?"book":item.type==="quiz"?"target":isAvrLab(item)?"cpu":"code",17)}</span>
      <span class="row-main"><strong>${esc(titleOf(item))}</strong><small>${esc(summaryOf(item))}</small></span><span class="row-type">${type(item)}</span>${i("right",17)}</a>`;
  }
  function home() {
    const counts=[["book",modules.length,"Mô-đun học"],["terminal",Object.keys(avrLabs).length,"Firmware ATmega328P"],["cpu",catalogItems.length,"Mục theo EWskills"],["flask",projects.length,"Dự án thực hành"]];
    main.innerHTML = `<div class="container home"><div class="metrics" aria-label="Nội dung khóa học">${counts.map(([key,n,label])=>`<div class="metric"><div class="metric-icon">${i(key)}</div><div><strong>${n}</strong><span>${label}</span></div></div>`).join("")}</div>
      <section class="path-section">${section("Lộ trình học","Từ nút bấm và LED đầu tiên đến giao tiếp, ngắt và lập lịch trực tiếp trên ATmega328P.")}
      <div class="phase-grid">${tracks.map(track=>{
        const group=modules.filter(item=>item.track===track.id);
        return `<a class="phase-card ${track.color}" href="${trackHref("lo-trinh",track.id)}"><div class="phase-top"><span class="phase-icon">${i(track.icon,23)}</span>${badge("Phần "+track.number)}</div>
        <h3>${track.title}</h3><p>${track.desc}</p><div class="track-topics">${track.topics.map(topic=>`<span>${topic}</span>`).join("")}</div>
        <div class="phase-meta"><span>${group.length} mô-đun · ${track.id==="nhung"?"EWskills":"Tài liệu GitHub"}</span><span>Xem nội dung ${i("right",15)}</span></div></a>`;
      }).join("")}</div></section>
      <section class="home-bottom"><div>${section("Bắt đầu từ đây","Học theo thứ tự nếu bạn mới làm quen với C.") + (last ? `<a class="btn secondary resume-link" href="${lessonLink(last)}">Học tiếp</a>` : "")}
      <div class="panel">${lessons.slice(0,4).map((item,index)=>lessonRow(item,index)).join("")}</div></div>
      <div>${section("Góc thực hành")}
      <a class="panel tool-card" href="#mo-phong"><span class="phase-icon">${i("grid",22)}</span><div><strong>Mô phỏng bit</strong><p>Bật, xóa và đảo bit trong thanh ghi 8 bit.</p></div>${i("right",17)}</a>
      <a class="panel tool-card" href="#tai-lieu"><span class="phase-icon">${i("book",22)}</span><div><strong>Tài liệu tra cứu</strong><p>Brochure, mã tham khảo và datasheet.</p></div>${i("right",17)}</a></div></section>${foot()}</div>`;
  }
  function schedule(id) {
    const selected = moduleById.get(id);
    const track = trackById.get(selected?.track || id) || tracks[0];
    const subjects = modules.filter(item=>item.track===track.id);
    const content = selected ? moduleContent(selected) : trackOverview(track,subjects);
    main.innerHTML = `<div class="container inner-page">${heading("Lộ trình học","Chọn phần học để xem các mô-đun, bài thực hành và tài liệu tương ứng.","map")}
      ${trackSwitcher("lo-trinh",track)}${selected?`<div class="course-layout">
      <nav class="panel module-nav" aria-label="Các mô-đun của phần đã chọn"><div class="module-group"><h2>${track.title}</h2>
      ${subjects.map(item=>{
        const group=lessons.filter(lesson=>lesson.module===item.id);
        return `<a href="#lo-trinh/${item.id}" ${item===selected?'aria-current="page"':""}><span class="module-index">${pad(item.number)}</span><span>${item.title}</span><small>${count(group)}/${group.length}</small></a>`;
      }).join("")}</div></nav><div class="course-content">${content}</div></div>`:content}${foot()}</div>`;
  }
  function trackOverview(track,subjects) {
    const embedded=track.id==="nhung";
    return `<section class="panel module-summary track-intro"><div><h2>${track.title}</h2><p>${track.desc}</p></div><div class="track-actions">
      <a class="btn primary" href="${lessonLink(track.start)}">${i("play",16)} Bắt đầu phần ${track.number}</a>
      <a class="btn secondary" href="${trackHref("luyen",track.id)}">${i("terminal",17)} Luyện tập</a></div></section>
      ${embedded?catalogOverview():""}
      ${section("Các mô-đun")}<div class="panel">${subjects.map(item=>{
        const own=lessons.filter(lesson=>lesson.module===item.id);
        return `<a class="lesson-row module-row" href="#lo-trinh/${item.id}"><span class="row-symbol">${pad(item.number)}</span>
          <span class="row-main"><strong>${item.title}</strong><small>${item.desc}</small></span><span class="row-type">${count(own)}/${own.length} bài</span>${i("right",17)}</a>`;
      }).join("")}</div><p class="course-source-link"><a href="${trackHref("tai-lieu",track.id)}" class="text-link">Xem nguồn học của phần ${track.number}</a></p>`;
  }
  function catalogOverview() {
    const shortcuts=[["huong-dan","book",catalogCounts.guide,"Hướng dẫn"],
      ["bai-tap","terminal",catalogCounts.task,"Bài tập AVR"],["trac-nghiem","target",catalogCounts.quiz,"Trắc nghiệm"]];
    return `<section class="panel catalog-overview" aria-labelledby="catalog-title">
      <div class="catalog-head"><div><h2 id="catalog-title">Kho học EWskills</h2><p>${catalogItems.length} mục theo ${drillGroups.length} chủ đề và hướng dẫn bắt đầu.</p></div>
        <a class="btn secondary" href="#luyen/nhung/ewskills">Xem toàn bộ kho</a></div>
      <div class="catalog-shortcuts">${shortcuts.map(([path,icon,total,label])=>`<a href="#luyen/nhung/${path}">
        <span class="phase-icon">${i(icon,19)}</span><span><strong>${total}</strong><small>${label}</small></span></a>`).join("")}</div>
      <details class="catalog-topics"><summary>Duyệt ${drillGroups.length} chủ đề</summary>${drillLinks(drillGroups)}</details>
    </section>`;
  }
  function moduleContent(selected) {
    const own=lessons.filter(item=>item.module===selected.id);
    const groups=drillGroups.filter(item=>item.module===selected.id);
    return `<div class="panel module-summary"><div class="module-title"><span class="phase-icon">${i(selected.icon,22)}</span><div>
        <div class="eyebrow">MÔ-ĐUN ${pad(selected.number)}</div><h2>${selected.title}</h2></div></div><p>${selected.desc}</p>
        <div class="progress-inline">${bar(Math.round(count(own)*100/own.length))}<span>${count(own)}/${own.length} bài học</span></div></div>
        ${section("Bài giảng và bài áp dụng")}<div class="panel">${own.map((item,index)=>lessonRow(item,index)).join("")}</div>
        ${groups.length?`<section class="subsection">${section("Bài tập theo chủ đề EWskills")}${drillLinks(groups)}</section>`:""}
        ${readingLinks("Tài liệu cho mô-đun này",moduleReading[selected.id])}`;
  }

  const normalize = value => String(value).normalize("NFD").replace(/\p{Diacritic}/gu,"").replace(/đ/gi,"d").toLowerCase().trim();
  function matches(item, query) {
    const text = normalize([titleOf(item),summaryOf(item),item.title,item.ewTitle,moduleById.get(item.module)?.title,groupById.get(item.moduleId)?.title].filter(Boolean).join(" "));
    return normalize(query).split(/\s+/).every(word=>text.includes(word));
  }
  function labScope() {
    const track=trackById.get(route[1]) || tracks[0];
    const group=track.id==="nhung"?groupById.get(route[2]):undefined;
    return {track,group,catalog:track.id==="nhung" && Object.hasOwn(catalogViews,route[2])};
  }
  function labRows() {
    const {track,group,catalog}=labScope();
    const items=catalog || group ? catalogItems : allLabItems;
    const filtered = items.filter(item=>trackOf(item)===track && (!group || item.moduleId===group.id) &&
      (labFilter==="all" ||
      (labFilter==="avr" && isAvrLab(item)) || (labFilter==="quiz" && item.type==="quiz") ||
      (labFilter==="guide" && item.guide) || (labFilter==="todo" && !item.guide && !done.has(item.id))) && matches(item,labQuery));
    $("#lab-count").textContent=filtered.length+" mục";
    $("#lab-rows").innerHTML=filtered.length?filtered.map(item=>lessonRow(item)).join(""):'<p class="empty">Không tìm thấy bài phù hợp.</p>';
  }
  function labs() {
    const {track,group,catalog}=labScope();
    const embedded=track.id==="nhung";
    const filters=[["all","Tất cả"]];
    if (embedded) {
      filters.push(["guide","Hướng dẫn"],["avr","Lab AVR"],["quiz","Trắc nghiệm"]);
    }
    filters.push(["todo","Chưa hoàn thành"]);
    main.innerHTML=`<div class="container inner-page">${heading(catalog?"Kho học EWskills":group?group.title:"Luyện code",embedded?
      catalog?`${catalogCounts.guide} hướng dẫn, ${catalogCounts.task} bài tập AVR và ${catalogCounts.quiz} bài trắc nghiệm.`:
      "Áp dụng C vào thanh ghi, xử lý dữ liệu và ngoại vi. Chọn một chủ đề EWskills để tập trung luyện.":"Luyện C qua tín hiệu GPIO, dữ liệu USART0 và mẫu ADC0 trên vi điều khiển mô phỏng.","terminal")}
      ${trackSwitcher("luyen",track)}
      <div class="lab-toolbar"><label class="field-search">${i("search",18)}<input id="lab-search" type="search" placeholder="Tìm theo tên hoặc chủ đề" aria-label="Tìm trong bài thực hành"></label>
      ${embedded?`<label class="lab-group">Chủ đề EWskills
      <select id="lab-group"><option value="">Tất cả chủ đề</option>${drillGroups.map(item=>`<option value="${item.id}" ${item===group?"selected":""}>${item.title}</option>`).join("")}</select></label>`:""}</div>
      ${embedded && !catalog && !group?'<p class="drill-prerequisite"><a class="text-link" href="#luyen/nhung/ewskills">Mở kho EWskills</a></p>':""}
      ${group?`<p class="drill-prerequisite">Ôn trước khi luyện <a class="text-link" href="${lessonLink(group.prerequisite)}">${esc(titleOf(byId.get(group.prerequisite)))}</a></p>`:""}
      <div class="lab-filters"><div class="tabs" aria-label="Lọc bài thực hành">
      ${filters.map(([key,label])=>`<button data-filter="${key}" class="${labFilter===key?"active":""}" aria-pressed="${labFilter===key}">${label}</button>`).join("")}
      </div><span id="lab-count" aria-live="polite"></span></div><div class="panel" id="lab-rows"></div>
      ${embedded?`<p class="course-source-link">${externalLink(["Xem kho bài tập gốc trên EWskills",ewC])}</p>`:""}${foot()}</div>`;
    $("#lab-search").value=labQuery;
    labRows();
  }
  function projectCard(project) {
    return `<a class="panel project-card" href="#du-an/${project.id}">
      <div class="phase-top"><span class="phase-icon">${i(project.icon,22)}</span>${badge(projectDone.has(project.id)?"Đã hoàn thành":project.level,projectDone.has(project.id)?"success":"")}</div>
      <h2>${project.title}</h2><p>${project.summary}</p><span class="project-more">Mở dự án ${i("right",16)}</span></a>`;
  }
  function renderProjects(id) {
    const item=projects.find(project=>project.id===id);
    const body=item?`<a class="breadcrumb" href="#du-an">Dự án</a>${heading(item.title,item.summary,item.icon)}
      <div class="project-layout"><article class="panel prose"><h2>Các bước thực hiện</h2><ol class="content-list">${item.steps.map(value=>'<li>'+esc(value)+'</li>').join("")}</ol>
      <h2>Điều kiện nghiệm thu</h2>${list(item.checks)}<button class="btn ${projectDone.has(id)?"secondary":"primary"}" data-action="project-done" data-id="${id}" aria-pressed="${projectDone.has(id)}">${i("check",18)} ${projectDone.has(id)?"Đã hoàn thành":"Đánh dấu hoàn thành"}</button></article>
      <div><aside class="panel project-prep"><h2>Bài cần xem trước</h2>${item.needs.map(key=>lessonRow(byId.get(key))).join("")}</aside>
        <p class="project-example">Chạy một mạch thành phần trước khi ghép dự án.</p><aside id="workspace"></aside></div></div>` :
      `${heading("Dự án thực hành","Ghép các bài đã học thành firmware hoàn chỉnh rồi nghiệm thu trên chân và thanh ghi ATmega328P.","flask")}
      ${tracks.map(track=>`<section class="subsection">${section("Phần "+track.number+" · "+track.title)}
      <div class="project-grid">${projects.filter(project=>trackOf(byId.get(project.needs[0]))===track).map(projectCard).join("")}</div></section>`).join("")}`;
    main.innerHTML=`<div class="container inner-page">${body}${foot()}</div>`;
    if(item) renderBench($("#workspace"),item.lab,{example:true});
  }
  function resources(id) {
    const track=trackById.get(id) || tracks[0];
    const refs=["3","4","4–5","5","5–6","6","6–7","7","7–8","8","8–9","9","9–10"];
    main.innerHTML=`<div class="container inner-page">${heading("Nguồn và tài liệu","Mỗi phần có nguồn học chính, tài liệu đọc thêm và đối chiếu với brochure.","book")}
      ${trackSwitcher("tai-lieu",track)}
      <div class="resource-grid track-resources">${materials[track.id].map(([label,title,desc,link])=>`<article class="panel resource-card">${badge(label)}<h2>${esc(title)}</h2><p>${esc(desc)}</p>
      <span class="text-link">${externalLink(["Mở tài liệu gốc",link])}</span></article>`).join("")}</div>
      <section class="panel prose mapping"><h2>Đối chiếu với brochure</h2><p>Đề cương <em>C Programming for Embedded Systems</em> dùng để đối chiếu nội dung và bài thực hành của từng mô-đun.</p>
      <div class="mapping-grid">${modules.filter(item=>item.track===track.id).map(item=>`<a href="#lo-trinh/${item.id}">
      <span>${pad(item.number)}</span><strong>${item.title}</strong><small>Trang ${refs[item.number-1]}</small></a>`).join("")}</div></section>${foot()}</div>`;
  }
  function progress() {
    const groups=tracks.map(track=>lessons.filter(item=>trackOf(item)===track));
    const categories=[
      ...groups.map((items,index)=>[count(items),items.length,"Phần "+tracks[index].number+" · "+tracks[index].shortTitle]),
      [count(oldLessons),oldLessons.length,"Bài tập và trắc nghiệm EWskills"],
      [projectDone.size,projects.length,"Dự án"]
    ];
    main.innerHTML=`<div class="container inner-page">${heading("Tiến độ học","Tiến độ, mã nháp và câu trả lời được lưu trong trình duyệt này.","activity")}
      <div class="progress-cards">${categories.map(([value,total,label])=>`<div class="panel progress-card"><h2>${label}</h2><strong>${value} / ${total}</strong>${bar(Math.round(value*100/total))}</div>`).join("")}</div>
      <div class="panel mapping">${modules.map(item=>{
        const own=lessons.filter(lesson=>lesson.module===item.id);
        return `<a class="progress-row" href="#lo-trinh/${item.id}"><span>${pad(item.number)}</span><strong>${item.title}</strong>
        ${bar(Math.round(count(own)*100/own.length))}<small>${count(own)}/${own.length}</small>${i("right",15)}</a>`;
      }).join("")}</div>${foot()}</div>`;
  }
  function renderLesson(id) {
    const item=byId.get(id);
    if (item?.guide) { renderGuide(id); return; }
    if (!item) { main.innerHTML=`<div class="container inner-page">${heading("Không tìm thấy bài học","Mở lộ trình để chọn một bài đang có.","search")}<a class="btn primary" href="#lo-trinh">Mở lộ trình</a></div>`; return; }
    const mod=moduleById.get(item.module);
    const track=trackOf(item);
    const group=groupById.get(item.moduleId);
    const sequence=item.type?oldLessons:lessons;
    const idx=sequence.indexOf(item);
    const next=sequence[idx+1];
    const labId=item.type==="quiz"?quizLabId(item):id;
    const parentLink=group?"#luyen/nhung/"+group.id:"#lo-trinh/"+mod.id;
    const readingLabel=group?"Nguồn bài tập":lessonReading[id]?"Tài liệu đọc thêm":"Tài liệu cho mô-đun này";
    const reading=group?[["EWskills · Bài tập Embedded C",ewC]]:lessonReading[id]||moduleReading[mod.id];
    main.innerHTML=`<div class="container inner-page lesson-page">
      <div class="crumb-row"><a href="${trackHref("lo-trinh",track.id)}">Phần ${track.number} · ${track.shortTitle}</a>
        ${i("right",14)}<a href="${parentLink}">${group?group.title:mod.title}</a></div>
      <header class="lesson-heading"><div class="lesson-labels">${badge(type(item),"level")}${item.type?badge(item.level):badge("Mô-đun "+pad(mod.number))}</div>
      <h1>${esc(titleOf(item))}</h1><p>${item.type==="quiz"?"Dự đoán kết quả firmware trên ATmega328P rồi chạy ca để đối chiếu.":"ATmega328P · C bare-metal"}</p></header>
      <div class="lesson-layout avr-layout"><article class="panel lesson-content" id="lesson-content"></article>
      <aside id="workspace" aria-label="Thực hành firmware"></aside></div>
      ${readingLinks(readingLabel,reading)}
      <nav class="lesson-nav" aria-label="Chuyển bài học"><a class="btn secondary" href="${sequence[idx-1]?lessonLink(sequence[idx-1].id):parentLink}">${sequence[idx-1]?"Bài trước":group?"Chủ đề":"Mô-đun"}</a>
      <button class="btn ${done.has(id)?"secondary":"primary"}" data-action="complete" aria-pressed="${done.has(id)}">${i("check",18)}<span>${done.has(id)?"Đã hoàn thành":"Đánh dấu hoàn thành"}</span></button>
      ${next?`<a class="btn secondary" href="${lessonLink(next.id)}">${trackOf(next)!==track?"Sang phần Firmware AVR":"Bài tiếp"}</a>`:""}</nav>${foot()}</div>`;
    lessonContent(item);
    renderBench($("#workspace"),labId,{
      example:item.type==="quiz",
      predict:item.type==="quiz",
      draft:item.type==="quiz"?undefined:drafts[id],
      onDraft:item.type==="quiz"?undefined:value=>{drafts[id]=value;save();},
      onPass:item.type==="quiz"?undefined:()=>{
        if (!$("#lesson-content") || route[1]!==id || done.has(id)) return;
        done.add(id);
        save();
        updateCompletion(item);
        notify("HEX của bạn vượt qua các ca. Đã lưu tiến độ.");
      }
    });
  }
  function teachingSections(sections) {
    return sections.map(([title,text,snippet])=>`<section class="teach-block"><h2>${esc(title)}</h2><p>${inline(text)}</p>${snippet?code(snippet):""}</section>`).join("");
  }
  function renderGuide(id) {
    const item=byId.get(id);
    if (!item?.guide) {
      main.innerHTML=`<div class="container inner-page">${heading("Không tìm thấy hướng dẫn","Chọn một hướng dẫn trong kho EWskills.","book")}<a class="btn primary" href="#luyen/nhung/huong-dan">Tất cả hướng dẫn</a></div>`;
      return;
    }
    const group=groupById.get(item.moduleId);
    const labId=guideLabId(item), lab=avrLabs[labId];
    main.innerHTML=`<div class="container inner-page lesson-page">
      <div class="crumb-row"><a href="#lo-trinh/nhung">Phần 2 · Firmware AVR</a>${i("right",14)}<a href="#luyen/nhung/huong-dan">Hướng dẫn EWskills</a></div>
      <header class="lesson-heading"><div class="lesson-labels">${badge("Hướng dẫn tiếng Việt","level")}</div><h1>${esc(item.title)}</h1><p>${esc(item.summary)}</p></header>
      <div class="lesson-layout avr-layout">
        <article class="panel prose"><h2>Thử với ATmega328P</h2><p>${inline(lab.task)}</p>${wiring(lab)}
          <p>Dự đoán đầu ra của ca bên cạnh rồi chạy HEX để xem kết quả. Mở <a class="text-link" href="${lessonLink(labId)}">bài firmware tương ứng</a> để xem toàn bộ nhiệm vụ.</p>
          ${teachingSections(item.sections)}
          <p class="course-source-link">${externalLink(["Đọc hướng dẫn gốc trên EWskills",item.source])}</p>
          <nav class="guide-actions" aria-label="Thực hành tiếp theo">${group?`<a class="btn primary" href="#luyen/nhung/${group.id}">Luyện chủ đề này</a>
            <a class="btn secondary" href="${lessonLink(group.prerequisite)}">Ôn bài liên quan</a>`:'<a class="btn primary" href="#luyen/nhung/huong-dan">Xem hướng dẫn theo chủ đề</a><a class="btn secondary" href="#lo-trinh/chuan-bi">Ôn C nền tảng</a>'}
            ${item.id==="toan-tu-bit"?'<a class="btn secondary" href="#mo-phong">Mô phỏng bit</a>':""}</nav>
        </article>
        <aside id="workspace" aria-label="Thí nghiệm trong hướng dẫn"></aside>
      </div>${foot()}</div>`;
    renderBench($("#workspace"),labId,{example:true});
  }
  function lessonContent(item) {
    const lab=avrLabs[item.type==="quiz"?quizLabId(item):item.id];
    const theory=notes[item.id];
    const body=item.type==="quiz"?quizBody(item):
      `<h2>Nhiệm vụ trên ATmega328P</h2><p>${inline(lab.task)}</p>${wiring(lab)}
      ${theory?`<h2>Từ tín hiệu đến mã C</h2><p>${inline(theory)}</p>`:""}
      <h2>Kiểm bằng firmware</h2><ol class="content-list">
        <li>Chọn ca và ghi lại đầu vào. Từ nhiệm vụ, dự đoán mức chân, byte phát hoặc giá trị thanh ghi cần kiểm.</li>
        <li>Chạy HEX mẫu và tìm phần tương ứng ở cột Đo được. Mở ảnh chụp cổng để so hướng DDRx, chốt PORTx và mức chân PINx.</li>
        <li>Hoàn thành main.c, tạo HEX đích atmega328p và nạp vào bàn thực hành để kiểm lại ${lab.cases.length} ca.</li>
      </ol>`;
    $("#lesson-content").innerHTML='<div class="prose lesson-prose">'+body+'</div>';
  }

  function quizQuestions(item) {
    const lab=avrLabs[quizLabId(item)], test=lab.cases[0];
    const hex=value=>"0x"+value.toString(16).toUpperCase().padStart(2,"0");
    const asBytes=values=>values.length?values.map(hex).join(" "):"Không phát byte";
    const target=Object.keys(test.regs??{}).find(name=>name.startsWith("PORT"))??Object.keys(test.regs??{})[0];
    const rotate=(options,correct)=> {
      const ans=Number(item.id.slice(4))%(options.length+1);
      options.splice(ans,0,correct);
      return {opts:options,ans};
    };
    let practical;
    if(test.tx) {
      const expected=test.tx, first=expected[0]??0;
      const alternatives=expected.length?[[first^1,...expected.slice(1)],[first^128,...expected.slice(1)],[]]:[[0],[1],[255]];
      practical={
        q:"Với đầu vào của Ca 1 ở bàn thực hành, PD1/TXD phát chuỗi byte nào?",
        ...rotate(alternatives.map(asBytes),asBytes(expected)),
        exp:"Chạy Ca 1 và xem USART0 TX. Kết quả theo thứ tự byte là "+asBytes(expected)+". Đối chiếu từng lần ghi UDR0 trong lời giải."
      };
    } else if(target) {
      const value=test.regs[target];
      practical={
        q:"Với đầu vào của Ca 1, "+target+" có giá trị nào sau khi firmware xử lý?",
        ...rotate([1,2,4].map(mask=>hex(value^mask)),hex(value)),
        exp:"Bảng đo ở Ca 1 cho "+target+" bằng "+hex(value)+". Xem cách firmware đọc chân vào rồi thay đổi đúng mặt nạ hoặc trường cấu hình."
      };
    } else {
      practical={
        q:"Cần thay đổi dữ liệu ở mục nào để kiểm đầu vào của Ca 1?",
        opts:["Nguồn tín hiệu được liệt kê trong bàn thực hành","Giá trị đã đo trong cột kết quả","Tiêu đề bài","Tên tệp đang tải"],ans:0,
        exp:"Mỗi ca áp đặt tín hiệu đầu vào trước hoặc trong khi CPU chạy rồi ghi nhận kết quả."
      };
    }
    return [{...practical,key:"avr"},...item.questions.map((q,key)=>({...q,key}))];
  }
  function quizBody(item) {
    const questions=quizQuestions(item), answers=quiz[item.id]||{};
    const correct=questions.filter(q=>answers[q.key]===q.ans).length;
    const lab=avrLabs[quizLabId(item)];
    return `<div class="quiz-summary"><h2>Kiểm tra trên ATmega328P</h2>${badge(correct+"/"+questions.length+" câu đúng",correct===questions.length?"success":"")}</div>
      <p>${inline(lab.task)}</p>${wiring(lab)}
      <p>${inline(item.avrContext)}</p>
      ${questions.map((q,index)=>`<section class="quiz-q"><h3>${index+1}. ${inline(q.q)}</h3>
      <div class="quiz-options">${q.opts.map((option,which)=>`<button class="${answers[q.key]===which?(which===q.ans?"right-answer":"wrong-answer"):""}" aria-pressed="${answers[q.key]===which}" data-quiz="${q.key}" data-answer="${which}"><span>${String.fromCharCode(65+which)}</span>${inline(option)}</button>`).join("")}</div>
      ${answers[q.key]===undefined?"":`<p class="quiz-feedback"><strong>${answers[q.key]===q.ans?"Đúng.":"Chưa đúng."}</strong> ${inline(q.exp)}</p>`}</section>`).join("")}`;
  }

  function updateCompletion(item) {
    const button=$('[data-action="complete"]');
    const checked=done.has(item.id);
    button.setAttribute("aria-pressed",checked);
    button.className="btn "+(checked?"secondary":"primary");
    button.querySelector("span").textContent=checked?"Đã hoàn thành":"Đánh dấu hoàn thành";
    renderHeader();
  }
  function sandbox() {
    main.innerHTML=`<div class="container inner-page">${heading("Mô phỏng thanh ghi 8 bit","Thay đổi từng bit và đọc cùng một giá trị ở hệ nhị phân, thập phân và thập lục phân.","grid")}
      <div class="sandbox-layout"><section id="sandbox" class="panel prose" aria-label="Thanh ghi mô phỏng"></section><aside class="panel prose">
      <h2>Cách đọc thanh ghi</h2><p>Bit 0 ở ngoài cùng bên phải. Nhấn một ô để đảo bit đó. Chọn vị trí rồi thử đặt, xóa hoặc đảo bit với mặt nạ.</p>
      <h3>Ví dụ 0x25</h3><p>0010 0101 có bit 5, 2 và 0 bằng 1. Cộng 32 + 4 + 1 được 37.</p>
      <p>Mức điện thực tế của từng chân còn phụ thuộc hướng GPIO, chức năng chân và mạch kết nối.</p><a class="text-link" href="#bai/masks">Học về mặt nạ bit</a></aside></div>
      <section class="panel prose architecture"><h2>Kiến trúc ATmega328P</h2><div class="table-wrap">${renderAvrArch(["CPU","GPIO","FLASH","SRAM"])}</div></section>${foot()}</div>`;
    renderBoard();
  }
  function renderBoard() {
    const hex=val=>"0x"+val.toString(16).toUpperCase().padStart(2,"0");
    $("#sandbox").innerHTML=`<h2>Thanh ghi PORTB</h2><div class="board-values"><div><small>THẬP LỤC PHÂN</small><strong>${hex(board.value)}</strong></div>
      <div><small>THẬP PHÂN</small><strong>${board.value}</strong></div><div><small>NHỊ PHÂN</small><strong>${board.value.toString(2).padStart(8,"0")}</strong></div></div>
      <div class="board-bits">${Array.from({length:8},(_,idx)=>{
        const bit=7-idx,on=(board.value>>bit)&1,changed=((board.value^board.before)>>bit)&1;
        return `<button data-board="bit" data-bit="${bit}" aria-label="Đảo bit ${bit}, giá trị ${on}" aria-pressed="${!!on}" class="${on?"on":""} ${changed?"changed":""}"><span>${bit}</span><strong>${on}</strong></button>`;
      }).join("")}</div><div class="board-controls"><label>Bit mục tiêu <select id="board-bit">${Array.from({length:8},(_,bit)=>`<option ${bit===board.bit?"selected":""}>${bit}</option>`).join("")}</select></label>
      ${[["set","Đặt 1"],["clear","Xóa về 0"],["toggle","Đảo bit"],["rotate","Xoay trái"],["reset","Đặt về 0"]].map(([key,label])=>`<button class="btn secondary" data-board="${key}">${label}</button>`).join("")}</div>
      ${code(board.expression)}<p class="before-val">Giá trị trước thao tác <code>${hex(board.before)}</code></p>`;
  }
  function applyBoard(action,bit) {
    const pos=bit??board.bit;
    const mask=1<<pos;
    const values={bit:board.value^mask,toggle:board.value^mask,set:board.value|mask,clear:board.value&~mask,rotate:((board.value<<1)|(board.value>>7))&255,reset:0};
    const expr={bit:"PORTB ^= (1U << "+pos+");",toggle:"PORTB ^= (1U << "+pos+");",set:"PORTB |= (1U << "+pos+");",clear:"PORTB &= (uint8_t)~(1U << "+pos+");",rotate:"PORTB = (uint8_t)((PORTB << 1) | (PORTB >> 7));",reset:"PORTB = 0x00;"};
    board={value:values[action],before:board.value,bit:pos,expression:expr[action]};
    renderBoard();
    $(action==="bit"?'[data-board="bit"][data-bit="'+pos+'"]':'[data-board="'+action+'"]').focus({preventScroll:true});
  }

  function search() {
    const dialog=$("#search-dialog");
    if (dialog.open) return;
    dialog.innerHTML=`<div class="search-head"><h2 id="search-title">Tìm bài học</h2><button class="icon-btn" data-action="close-search" aria-label="Đóng tìm kiếm">${i("close")}</button></div>
      <label class="field-search">${i("search",19)}<input type="search" id="global-search" placeholder="Thử tìm PD2, PORTB hoặc «con trỏ»" aria-label="Từ khóa tìm bài học"></label>
      <div id="search-results" class="search-results"></div>`;
    dialog.showModal();
    $("#global-search").focus();
    searchResults("");
  }
  function searchResults(value) {
    const found=value.trim()?all.filter(item=>matches(item,value)).slice(0,16):lessons.slice(0,5);
    $("#search-results").innerHTML=found.length?found.map(item=>lessonRow(item)).join(""):'<p class="empty">Không tìm thấy bài học.</p>';
  }
  function go() {
    route=location.hash.slice(1).split("/");
    const [page,id]=route;
    if (page==="luyen") {
      labFilter=labScope().catalog?catalogViews[route[2]]:"all";
      labQuery="";
    }
    if ($("#search-dialog").open) $("#search-dialog").close();
    if (page==="bai" && byId.has(id)) { last=id; save(); }
    renderHeader();
    if (page==="bai") renderLesson(id);
    else if (page==="huong-dan") renderGuide(id);
    else if (page==="lo-trinh") schedule(id);
    else if (page==="luyen") labs();
    else if (page==="du-an") renderProjects(id);
    else if (page==="tai-lieu") resources(id);
    else if (page==="tien-do") progress();
    else if (page==="mo-phong") sandbox();
    else home();
    const title=main.querySelector("h1")?.textContent;
    document.title=page&&title?title+" — Xưởng Nhúng":"Xưởng Nhúng — Học lập trình C nhúng";
    if (window.scrollY) window.scrollTo(0,0);
  }
  document.addEventListener("click",event=>{
    const anchor=event.target.closest("a");
    if (anchor?.closest("#search-dialog")) $("#search-dialog").close();
    if (anchor?.classList.contains("skip-link")) { event.preventDefault(); main.focus(); return; }
    const button=event.target.closest("button");
    if (!button) return;
    const item=byId.get(route[1]);
    const {action,filter,board:boardAction}=button.dataset;
    if (action==="theme") {
      theme=theme==="dark"?"light":"dark";
      document.documentElement.dataset.theme=theme;
      save();
      renderHeader();
      $('[data-action="theme"]').focus();
    } else if (action==="search") search();
    else if (action==="close-search") $("#search-dialog").close();
    else if (action==="complete") {
      if (done.has(item.id)) done.delete(item.id);
      else done.add(item.id);
      save();
      updateCompletion(item);
    } else if (action==="project-done") {
      const id=button.dataset.id;
      if (projectDone.has(id)) projectDone.delete(id);
      else projectDone.add(id);
      save();
      renderProjects(id);
      $('[data-action="project-done"]').focus({preventScroll:true});
    } else if (filter) {
      labFilter=filter;
      document.querySelectorAll("button[data-filter]").forEach(el=>{
        el.classList.toggle("active",el===button);
        el.setAttribute("aria-pressed",el===button);
      });
      labRows();
    } else if (boardAction) applyBoard(boardAction,button.dataset.bit===undefined?undefined:Number(button.dataset.bit));
    else if (button.dataset.quiz!==undefined) {
      const answers=quiz[item.id]||={};
      answers[button.dataset.quiz]=Number(button.dataset.answer);
      if (quizQuestions(item).every(q=>answers[q.key]===q.ans)) { done.add(item.id); updateCompletion(item); }
      save();
      lessonContent(item);
      $('[data-quiz="'+button.dataset.quiz+'"][data-answer="'+button.dataset.answer+'"]')?.focus({preventScroll:true});
    }
  });
  document.addEventListener("input",event=>{
    const id=event.target.id;
    if (id==="lab-search") { labQuery=event.target.value; labRows(); }
    if (id==="global-search") searchResults(event.target.value);
  });
  document.addEventListener("change",event=>{
    if (event.target.id==="board-bit") board.bit=Number(event.target.value);
    if (event.target.id==="lab-group") {
      location.hash="#luyen/nhung/"+(event.target.value||"ewskills");
    }
  });
  document.addEventListener("keydown",event=>{
    if ((event.ctrlKey||event.metaKey) && event.key.toLowerCase()==="k") { event.preventDefault(); search(); }
  });
  document.documentElement.dataset.theme=theme;
  window.addEventListener("hashchange",go);
  go();
})();

