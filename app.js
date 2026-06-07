/* ============================================================
   Photon Legal — client-side router + page renderers
   ============================================================ */
const $ = (s,el=document)=>el.querySelector(s);
const esc = (s)=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- icons ---------- */
const I = {
  dashboard:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  patents:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8"/>',
  ideas:'<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
  clients:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h4M7 12h4M7 16h4M15 8h2M15 12h2M15 16h2"/>',
  due:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  actions:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  workspace:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>',
  chev:'<path d="M6 9l6 6 6-6"/>',
  sort:'<path d="M7 4v16M7 4l-3 3M7 4l3 3M17 20V4M17 20l3-3M17 20l-3-3"/>',
  filter:'<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
  cols:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18"/>',
  tag:'<path d="M20 10l-8 8-9-9V3h7z"/><circle cx="7" cy="7" r="1.5"/>',
  cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  trash:'<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
  badge:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h4M7 13h2"/><circle cx="16" cy="10" r="2"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  pin:'<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  xc:'<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>',
  tm:'<circle cx="12" cy="9" r="7"/><path d="M9 21l3-2 3 2"/><path d="M9 7h6M12 7v5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"/>',
  hourglass:'<path d="M6 2h12M6 22h12M8 2c0 5 8 5 8 10s-8 5-8 10M16 2c0 5-8 5-8 10s8 5 8 10"/>',
  money:'<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  back:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
  arrowR:'<path d="M5 12h14M12 5l7 7-7 7"/>',
  alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  scale:'<path d="M12 3v18M5 7l-3 6h6zM19 7l-3 6h6zM7 21h10M6 7h12"/>',
};
const svg=(p,w=18)=>`<svg viewBox="0 0 24 24" width="${w}" height="${w}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

/* ---------- nav (Lapmaster hub) ---------- */
const NAV = [
  ['','Overview',I.dashboard],
  ['#','Patents'],
  ['patents','Patents',I.patents,'317'],
  ['renewals','Renewals',I.scale,'11','red'],
  ['#','Trademarks'],
  ['trademarks','Trademarks',I.tm,'291'],
  ['tm-filings','Filings & Watch',I.plus,'25'],
  ['#','Hub'],
  ['due-dates','Deadlines',I.due,'4','red'],
  ['approvals','Approvals',I.actions,'7','red'],
  ['ideas','Submit Idea',I.ideas,'6'],
  ['#','Engagement'],
  ['investment','Investment',I.money],
  ['settings','Settings',I.workspace],
];
function renderSidebar(route){
  const items = NAV.map(it=>{
    if(it[0]==='#') return `<div class="nav-sec">${esc(it[1])}</div>`;
    const [r,label,ic,count,tone]=it;
    const badge=count?`<span class="nav-count ${tone==='red'?'nc-red':''}">${esc(count)}</span>`:'';
    return `<a class="nav-item ${r===route?'active':''}" href="#/${r}">${svg(ic)}<span class="nav-lbl">${esc(label)}</span>${badge}</a>`;
  }).join('');
  return `<aside class="sidebar">
    <div class="logo"><div class="lap-lock"><div class="lap-name">LAPMASTER</div><div class="lap-sub">WOLTERS</div></div></div>
    <nav>${items}</nav>
    <div class="userbox">
      <div class="avatar lap-av">LW</div>
      <div class="meta"><div class="name">Anika Reuter</div><div class="role">IP Counsel</div></div>
      <button class="plus">+</button>
    </div>
    <div class="powered">Powered by <b>Photon Legal</b></div>
  </aside>`;
}

/* ---------- shared widgets ---------- */
const pill=(label,icon,chev=true)=>`<button class="pill">${icon?svg(icon,16):''}${esc(label)}${chev?`<span class="chev">${svg(I.chev,14)}</span>`:''}</button>`;
const sortTh=(label)=>`<span class="sortable">${esc(label)}${svg(I.sort,13)}</span>`;

/* per-page UI state */
const state={
  patents:{q:'',page:1,size:10},
  ideas:{q:'',page:1,size:10},
  clients:{q:'',page:1},
  'due-dates':{q:'',page:1,size:10},
  actions:{q:''},
  workspace:{tab:'profile'},
  audit:{tab:'decisions'},
  ideasLap:{list:LAP_IDEAS.slice()},
  deadlines:{q:'',view:'calendar',ym:2026*12+5,sort:null},
  ovCal:'calendar',
  lapPatents:{tab:'gaps',comp:'Lapmaster Wolters'},
  tmFilings:{tab:'filings'},
};

function paginate(rows,page,size){
  const total=rows.length;const pages=Math.max(1,Math.ceil(total/size));
  page=Math.min(page,pages);const start=(page-1)*size;
  return {slice:rows.slice(start,start+size),total,pages,page,start};
}
function pager(page,pages,onGo){
  let btns='';
  btns+=`<button data-go="1" ${page===1?'disabled':''}>«</button>`;
  btns+=`<button data-go="${page-1}" ${page===1?'disabled':''}>‹</button>`;
  const show=new Set([1,2,3,page-1,page,page+1,pages]);
  let last=0;
  [...show].filter(n=>n>=1&&n<=pages).sort((a,b)=>a-b).forEach(n=>{
    if(n-last>1)btns+=`<span style="padding:0 4px;color:#cbd5e1">…</span>`;
    btns+=`<button data-go="${n}" class="${n===page?'on':''}">${n}</button>`;last=n;
  });
  btns+=`<button data-go="${page+1}" ${page===pages?'disabled':''}>›</button>`;
  btns+=`<button data-go="${pages}" ${page===pages?'disabled':''}>»</button>`;
  return `<div class="pager">${btns}</div>`;
}
function wirePager(scope,go){
  scope.querySelectorAll('.pager button[data-go]').forEach(b=>{
    if(b.disabled)return;b.onclick=()=>go(parseInt(b.dataset.go));
  });
}
function sizeSelect(size){
  return `<select class="sel" data-size>${[10,20,30,50,100].map(n=>`<option ${n===size?'selected':''}>${n}</option>`).join('')}</select>`;
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function viewDashboard(){
  const stat=(label,num,cls,icon)=>`<div class="card stat"><div class="top"><div class="label">${esc(label)}</div><div class="icon ${cls}">${svg(icon,20)}</div></div><div class="num">${num}</div></div>`;
  const pins=[[24,34],[20,50],[42,64],[48,20],[50,14],[54,36],[64,48],[72,36],[80,30],[84,28],[84,40],[80,54],[88,74],[96,84]];
  const clientRow=(name,count,i)=>`<div class="client"><div class="cav" style="background:${colorFor(name)}1a;color:${colorFor(name)}">${initials(name)}</div><div class="cmeta"><div class="cname">${esc(name)}</div><div class="crank">Rank #${i+1}</div></div><div class="ccount">${count}</div></div>`;

  return `
  <div class="page-head">
    <div><h1>Hi, Prateek Photon Legal!</h1><div class="sub">Look at your system overview and statistics</div></div>
    <button class="bell">${svg(I.bell,18)}</button>
  </div>
  <div class="grid">
    ${stat('Total Patents','8013','ic-blue',I.doc)}
    ${stat('Granted Patents','3897','ic-green',I.check)}
    ${stat('Pending Patents','2670','ic-amber',I.clock)}
    ${stat('Abandoned/Expired/Rejected Patents','1445','ic-red',I.xc)}
    ${stat('Idea Received in Last 30 Days','22','ic-purple',I.ideas)}
    ${stat('Patents Filed in Last 90 Days','21','ic-indigo',I.doc)}
  </div>

  <div class="card section">
    <div class="section-head">
      <div><h2>Patent World Map</h2><div class="sub">Global Patent Distribution by Country</div></div>
      <div class="legend"><span><i class="dot g"></i> Granted</span><span><i class="dot p"></i> Pending</span></div>
    </div>
    <div class="map-wrap">
      <img alt="World map" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"/>
      ${pins.map(([x,y])=>`<div class="pin" style="left:${x}%;top:${y}%"></div>`).join('')}
    </div>
  </div>

  <div class="card section">
    <div class="section-head"><div><h2>Top Clients</h2><div class="sub">By Patent Count</div></div><a class="link">View all →</a></div>
    ${TOP_CLIENTS.map((c,i)=>clientRow(c[0],c[1],i)).join('')}
  </div>

  <div class="card section">
    <div class="section-head">
      <div><h2>Timeline &amp; Events</h2><div class="sub">Upcoming Deadlines and Meetings</div></div>
      <div class="controls">
        <div class="seg" id="cal-toggle">
          <button class="on" data-mode="calendar">${svg(I.cal,15)}Calendar</button>
          <button data-mode="list">${svg(I.list,15)}List</button>
        </div>
        <div class="month-nav"><button class="navbtn">${svg('<path d="M15 18l-6-6 6-6"/>',16)}</button><div class="label">JUN 2026</div><button class="navbtn">${svg('<path d="M9 18l6-6-6-6"/>',16)}</button></div>
      </div>
    </div>
    <div id="cal-mount"></div>
  </div>`;
}
function renderCalendar(){
  let html='<div class="cal"><div class="cal-head">'+['MON','TUE','WED','THU','FRI','SAT','SUN'].map(d=>`<div>${d}</div>`).join('')+'</div>';
  let day=1;const total=30,cells=Math.ceil(total/7)*7;
  for(let i=0;i<cells;i++){
    if(i%7===0)html+=(i?'</div>':'')+'<div class="cal-row">';
    if(day>total){html+='<div class="cal-cell empty"></div>';}
    else{
      const evs=CAL_EVENTS[day]||[];let inner=`<div class="daynum">${day}</div>`;
      evs.slice(0,3).forEach(([c,t,o])=>{inner+=`<div class="evt ${c}"><span class="et">${esc(t)}</span>${o?`<span class="eo">${esc(o)}</span>`:''}</div>`;});
      if(evs.length>3)inner+=`<div class="more">+${evs.length-3} more</div>`;
      html+=`<div class="cal-cell">${inner}</div>`;day++;
    }
  }
  return html+'</div></div>';
}
function renderCalList(){
  const rows=[];
  Object.keys(CAL_EVENTS).forEach(d=>CAL_EVENTS[d].forEach(([c,t,o])=>rows.push([d,c,t,o])));
  const col={red:'#f87171',amber:'#fbbf24',blue:'#60a5fa'};
  return `<div class="evt-list">${rows.map(([d,c,t,o])=>`<div class="evt-li"><div class="bar" style="background:${col[c]}"></div><div class="d">Jun ${d}</div><div style="flex:1"><div class="ti">${esc(t)}</div>${o?`<div class="ow">${esc(o)}</div>`:''}</div></div>`).join('')}</div>`;
}
function wireDashboard(){
  const mount=$('#cal-mount');if(!mount)return;
  mount.innerHTML=renderCalendar();
  const tg=$('#cal-toggle');
  tg.querySelectorAll('button').forEach(b=>b.onclick=()=>{
    tg.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
    mount.innerHTML=b.dataset.mode==='list'?renderCalList():renderCalendar();
  });
}

/* ============================================================
   PATENTS
   ============================================================ */
function viewPatents(){
  const st=state.patents;
  const filtered=PATENTS.filter(p=>!st.q||`${p.no} ${p.title} ${p.assignee} ${p.prn}`.toLowerCase().includes(st.q.toLowerCase()));
  const {slice,total,pages,page,start}=paginate(filtered,st.page,st.size);st.page=page;
  const rows=slice.map((p,i)=>`<tr>
    <td class="sno">${start+i+1}</td>
    <td><div class="appno">${svg(I.doc,16)}${esc(p.no)}</div>${p.linked?`<div class="linked">↳ Linked to idea</div>`:''}</td>
    <td class="title-cell">${esc(p.title)}</td>
    <td class="assignee">${p.assignee?esc(p.assignee):'<span class="muted">—</span>'}</td>
    <td>${esc(p.prn)}</td>
    <td>${p.tag?`<span class="tag">${esc(p.tag)}</span>`:`<span class="addtag">+ Add tag</span>`}</td>
    <td class="muted">${esc(p.filed)}</td>
    <td>${esc(p.country)}</td>
    <td><span class="badge b-green">${esc(p.status)}</span></td>
  </tr>`).join('');
  return `
  <div class="page-head">
    <div><h1>Patents Portfolio</h1><div class="sub">Manage and track all patent applications</div></div>
    <div class="head-right">
      <div class="bignum"><div class="n">8013</div><div class="l">Total Patents</div></div>
      <button class="btn">${svg(I.download,16)}Export CSV</button>
    </div>
  </div>
  <div class="toolbar">
    <div class="search">${svg(I.search,17)}<input data-q placeholder="Search by application no., title, inventor..." value="${esc(st.q)}"/></div>
    ${pill('Clients',I.clients)}${pill('Status',I.filter)}${pill('Tags',I.tag)}${pill('Date',I.cal)}${pill('Columns',I.cols)}${pill('Sort',I.sort)}
  </div>
  <div class="card table-card">
    <div class="tbl-scroll"><table>
      <thead><tr><th>S.NO</th><th>${sortTh('Application No.')}</th><th>${sortTh('Title')}</th><th>${sortTh('Assignee Original')}</th><th>${sortTh('PRN')}</th><th>Tags</th><th>${sortTh('Filing Date')}</th><th>${sortTh('Pub. Country')}</th><th>${sortTh('Current Status')}</th></tr></thead>
      <tbody>${rows||`<tr><td colspan="9" class="empty-state">No patents match your search.</td></tr>`}</tbody>
    </table></div>
    <div class="tbl-foot">
      <div class="foot-left"><span>Showing ${total?start+1:0} to ${start+slice.length} of ${total.toLocaleString()} entries</span>${sizeSelect(st.size)}</div>
      ${pager(page,pages)}
    </div>
  </div>`;
}
function wireTable(key){
  const st=state[key];
  const q=$('[data-q]');if(q)q.oninput=()=>{st.q=q.value;st.page=1;rerender(true);};
  const sz=$('[data-size]');if(sz)sz.onchange=()=>{st.size=parseInt(sz.value);st.page=1;rerender();};
  wirePager(document,(n)=>{st.page=n;rerender();});
}

/* ============================================================
   IDEAS
   ============================================================ */
function viewIdeas(){
  const st=state.ideas;
  const filtered=IDEAS.filter(x=>!st.q||`${x.title} ${x.client} ${x.status[0]}`.toLowerCase().includes(st.q.toLowerCase()));
  const {slice,total,pages,page,start}=paginate(filtered,st.page,st.size);st.page=page;
  const rows=slice.map((x,i)=>`<tr>
    <td class="sno">${start+i+1}</td>
    <td class="title-cell">${esc(x.title)}</td>
    <td class="assignee">${esc(x.client)}</td>
    <td><span class="badge ${x.status[1]}">${esc(x.status[0])}</span></td>
    <td class="muted">${esc(x.submitted)}</td>
    <td>${esc(x.score)}</td>
    <td class="muted">${esc(x.updated)}</td>
    <td><div class="row-actions"><button class="icon-btn">${svg(I.copy,15)}</button><button class="icon-btn">${svg(I.trash,15)}</button></div></td>
  </tr>`).join('');
  return `
  <div class="page-head"><div><h1>Ideas Repository</h1><div class="sub">Manage and track innovation submissions</div></div></div>
  <div class="toolbar">
    <div class="search">${svg(I.search,17)}<input data-q placeholder="Search by title, inventor, client, status..." value="${esc(st.q)}"/></div>
    ${pill('Status',I.filter)}${pill('Sort',I.sort)}
  </div>
  <div class="card table-card">
    <div class="tbl-scroll"><table>
      <thead><tr><th>S.NO</th><th>Title</th><th>Client</th><th>Status</th><th>Date of Submission</th><th>Score</th><th>Last Updated</th><th>Actions</th></tr></thead>
      <tbody>${rows||`<tr><td colspan="8" class="empty-state">No ideas match your search.</td></tr>`}</tbody>
    </table></div>
    <div class="tbl-foot"><div class="foot-left"><span>Showing ${total?start+1:0} to ${start+slice.length} of ${total} entries</span></div>${pager(page,pages)}</div>
  </div>`;
}

/* ============================================================
   CLIENTS
   ============================================================ */
function viewClients(){
  const st=state.clients;const size=9;
  const filtered=CLIENTS.filter(c=>!st.q||c.name.toLowerCase().includes(st.q.toLowerCase()));
  const {slice,total,pages,page,start}=paginate(filtered,st.page,size);st.page=page;
  const cards=slice.map(c=>{
    const col=colorFor(c.name);const badge=c.type==='Existing'?'b-green':'b-blue';
    const audit=/lapmaster/i.test(c.name);
    const tag=audit?`<span class="badge b-amber" style="margin-right:8px">IP Audit ready</span>`:'';
    const open=audit?`href="#/audit"`:'';
    const El=audit?'a':'div';
    return `<${El} ${open} class="card cl-card${audit?' clickable':''}">
      <div class="cl-top">
        <div class="cl-logo" style="background:${col}">${initials(c.name)}</div>
        <div class="cl-actions">${tag}<span class="badge ${badge}">${esc(c.type)}</span><button class="icon-btn">${svg(I.trash,15)}</button></div>
      </div>
      <div class="cl-name">${esc(c.name)}</div>
      <div class="cl-stats">
        <div><div class="k">${svg(I.doc,13)} Patents</div><div class="v">${c.patents}</div></div>
        <div><div class="k">${svg(I.clock,13)} Updated</div><div class="v sm">${esc(c.updated)}</div></div>
      </div>
    </${El}>`;}).join('');
  return `
  <div class="page-head">
    <div><h1>Clients</h1><div class="sub">Manage and track all clients</div></div>
    <button class="btn btn-gold">${svg(I.plus,16)}Onboard a Client</button>
  </div>
  <div class="toolbar">
    <div class="search">${svg(I.search,17)}<input data-q placeholder="Search by client name..." value="${esc(st.q)}"/></div>
    ${pill('View',I.grid)}${pill('All',I.filter)}${pill('Sort',I.sort)}
  </div>
  <div class="clients-grid">${cards||`<div class="empty-state" style="grid-column:1/-1">No clients match your search.</div>`}</div>
  <div class="card" style="margin-top:20px"><div class="tbl-foot"><span>Showing ${total?start+1:0} to ${start+slice.length} of ${total} entries</span>${pager(page,pages)}</div></div>`;
}
function wireClients(){
  const st=state.clients;
  const q=$('[data-q]');if(q)q.oninput=()=>{st.q=q.value;st.page=1;rerender(true);};
  wirePager(document,(n)=>{st.page=n;rerender();});
}

/* ============================================================
   DUE DATES
   ============================================================ */
function viewDueDates(){
  const st=state['due-dates'];
  const filtered=DUEDATES.filter(d=>!st.q||`${d.event} ${d.appno} ${d.client}`.toLowerCase().includes(st.q.toLowerCase()));
  const {slice,total,pages,page,start}=paginate(filtered,st.page,st.size);st.page=page;
  const rows=slice.map((d,i)=>`<tr>
    <td class="sno">${start+i+1}</td>
    <td>${esc(d.event)}</td>
    <td><div class="appno">${svg(I.doc,16)}${esc(d.appno)}</div></td>
    <td class="assignee">${esc(d.client)}</td>
    <td class="muted">${esc(d.due)}</td>
    <td><span class="badge b-green">${esc(d.status)}</span></td>
    <td class="muted">N/A</td>
    <td>${esc(d.event)}</td>
    <td><span class="remind">${svg(I.bell,15)} Remind</span></td>
  </tr>`).join('');
  return `
  <div class="page-head">
    <div><h1>Due Dates</h1><div class="sub">Track and manage all patent-related deadlines</div></div>
    <div class="head-right">
      <div class="seg"><button class="on">${svg(I.cols,15)}</button><button>${svg(I.cal,15)}</button></div>
      <div class="bignum"><div class="n">11505</div><div class="l">Deliverables Due</div></div>
    </div>
  </div>
  <div class="toolbar">
    <div class="search">${svg(I.search,17)}<input data-q placeholder="Search by event, application number, client..." value="${esc(st.q)}"/></div>
    ${pill('All Due Dates',I.cal)}${pill('Clients',I.clients)}${pill('Sort',I.sort)}${pill('Columns',I.cols)}
  </div>
  <div class="card table-card">
    <div class="tbl-scroll"><table>
      <thead><tr><th>S.NO</th><th>Event</th><th>Application No.</th><th>Client</th><th>Due Date</th><th>Status</th><th>Family Members</th><th>Current Event</th><th>Remind</th></tr></thead>
      <tbody>${rows||`<tr><td colspan="9" class="empty-state">No deadlines match your search.</td></tr>`}</tbody>
    </table></div>
    <div class="tbl-foot"><div class="foot-left"><span>Showing ${total?start+1:0} to ${start+slice.length} of ${total.toLocaleString()} entries</span>${sizeSelect(st.size)}</div>${pager(page,pages)}</div>
  </div>`;
}

/* ============================================================
   ACTIONS
   ============================================================ */
function viewActions(){
  const st=state.actions;
  const filtered=ACTIONS.filter(a=>!st.q||`${a.appno} ${a.client} ${a.event} ${a.action} ${a.by}`.toLowerCase().includes(st.q.toLowerCase()));
  const rows=filtered.map(a=>{
    const dcls=a.days==='Overdue'?'txt-red':'txt-gray';
    const opts=['New','In Progress','Completed'].map(o=>`<option ${o===a.reqstatus?'selected':''}>${o}</option>`).join('');
    return `<tr>
      <td class="appno" style="font-weight:600">${esc(a.appno)}</td>
      <td class="assignee">${esc(a.client)}</td>
      <td class="title-cell" style="max-width:220px">${esc(a.event)}</td>
      <td class="muted">${esc(a.deadline)}</td>
      <td class="${dcls}">${esc(a.days)}</td>
      <td class="title-cell" style="max-width:200px">${esc(a.action)}</td>
      <td class="subby"><div class="em">${esc(a.by)}</div><div class="ago">${esc(a.ago)}</div></td>
      <td><select class="sel">${opts}</select></td>
    </tr>`;}).join('');
  return `
  <div class="page-head"><div><h1>Action Queue</h1><div class="sub" style="text-transform:none;letter-spacing:0;font-size:14px;color:#64748b">Review and manage submitted actions from clients</div></div></div>
  <div class="toolbar">
    <div class="search">${svg(I.search,17)}<input data-q placeholder="Search by application num..." value="${esc(st.q)}"/></div>
    ${pill('All Actions',I.filter)}${pill('All statuses',I.filter)}${pill('All clients',I.clients)}${pill('Sort',I.sort)}${pill('Columns',I.cols)}
  </div>
  <div class="card table-card">
    <div class="tbl-scroll"><table>
      <thead><tr><th>Application No.</th><th>Client</th><th>Next Event</th><th>Deadline</th><th>Days</th><th>Action Selected</th><th>Submitted By</th><th>Request Status</th></tr></thead>
      <tbody>${rows||`<tr><td colspan="8" class="empty-state">No actions match your search.</td></tr>`}</tbody>
    </table></div>
  </div>`;
}
function wireActions(){
  const st=state.actions;const q=$('[data-q]');if(q)q.oninput=()=>{st.q=q.value;rerender(true);};
}

/* ============================================================
   WORKSPACE
   ============================================================ */
function viewWorkspace(){
  const st=state.workspace;
  const admins=ADMINS.map(a=>`<a title="${esc(a)}">${esc(a)}</a>`).join('');
  const field=(label,icon,val,ph='')=>`<div class="field"><label>${svg(icon,14)}${esc(label)}</label><input value="${esc(val)}" placeholder="${esc(ph)}"/></div>`;
  let body;
  if(st.tab==='profile'){
    body=`<h3>Personal Information</h3>
      <div class="ws-avatar">Profile</div>
      ${field('Employee ID',I.badge,'22c795d1-3494-450f-bb3c-b864b57c71b4')}
      ${field('Email ID',I.mail,'prateek@photonlegal.com')}
      ${field('Name',I.user,'Prateek Photon Legal')}
      ${field('Phone Number',I.phone,'','Add phone number')}
      ${field('Address',I.pin,'','Add address')}`;
  }else{
    body=`<h3>Team Members</h3>${ADMINS.map(a=>{const name=a.split('@')[0].split('.').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');return `<div class="people-row"><div class="pav" style="background:${colorFor(a)}">${initials(name)}</div><div><div class="pname">${esc(name)}</div><div class="pmail">${esc(a)}</div></div></div>`;}).join('')}`;
  }
  return `
  <div class="page-head">
    <div><h1>My Workspace</h1><div class="sub">Manage your personal workspace and team</div></div>
    <button class="btn">${svg(I.edit,16)}Edit</button>
  </div>
  <div class="ws-layout">
    <div class="card ws-side">
      <div class="ws-logo"><div class="logo-mark"><div class="row1">PHOTON</div><div class="row2">LEGAL</div></div></div>
      <div class="ws-org">Photon Legal</div>
      <div class="ws-block"><div class="k">${svg(I.mail,14)} Allowed Mail Domain</div><div class="v">photonlegal.com</div></div>
      <div class="ws-block"><div class="k">${svg(I.users,14)} Administrator List</div><div class="admin-list">${admins}</div></div>
      <div class="ws-block"><div class="k">${svg(I.doc,14)} About</div><div class="v">description test</div></div>
    </div>
    <div class="card ws-main">
      <div class="ws-tabs">
        <button class="${st.tab==='profile'?'on':''}" data-tab="profile">Your Profile</button>
        <button class="${st.tab==='people'?'on':''}" data-tab="people">People</button>
      </div>
      <div class="ws-body">${body}</div>
    </div>
  </div>`;
}
function wireWorkspace(){
  document.querySelectorAll('.ws-tabs button').forEach(b=>b.onclick=()=>{state.workspace.tab=b.dataset.tab;rerender();});
}

/* ============================================================
   LAPMASTER — IP AUDIT (GC view: decisions first)
   ============================================================ */
const SEV={red:'#ef4444',amber:'#f59e0b',blue:'#6366f1',gray:'#94a3b8'};
const TONECLS={red:'ic-red',amber:'ic-amber',gray:'ic-gray',green:'ic-green'};

/* ---------- reusable audit renderers ---------- */
function auHero(){const a=AUDIT;const DT={red:'#dc2626',green:'#059669',gray:'#94a3b8'};
  return `<div class="grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:24px">`+
  a.hero.map(h=>`<div class="card stat" style="min-height:128px"><div class="top"><div class="label">${esc(h.k)}</div></div><div class="num" style="color:${SEV[h.tone]||'#18181b'};font-size:30px">${esc(h.v)}</div><div class="muted" style="font-size:12px;margin-top:4px">${esc(h.sub)}</div>${h.delta?`<div class="delta" style="color:${DT[h.dtone]||'#94a3b8'}">${esc(h.delta)}</div>`:''}</div>`).join('')+`</div>`;}
function auHealth(){const a=AUDIT;return `<div class="health health-${a.health<60?'amber':'green'}"><div class="ring" style="background:conic-gradient(${a.health<60?'#f59e0b':'#10b981'} ${a.health*3.6}deg,#eef0f3 0)"><span>${a.health}</span></div><div><div class="h-k">Portfolio Health</div><div class="h-v">${esc(a.verdict)}</div></div></div>`;}
function auDecisions(head=true){const a=AUDIT;
  const h=head?`<div class="dec-head">${svg(I.alert,16)} ${a.decisions.length} items need your attention <span class="muted" style="font-weight:400">· sorted by priority</span></div>`:'';
  return h+a.decisions.map(d=>`<div class="decision"><span class="sevdot" style="background:${SEV[d.sev]}"></span><div class="dec-main"><div class="dec-title">${esc(d.title)} <span class="dec-scope">${esc(d.scope)}</span></div><div class="dec-why">${esc(d.why)}</div></div><button class="dec-cta">${esc(d.cta)} ${svg(I.arrowR,14)}</button></div>`).join('');}
function auRenewBand(){const pr=AUDIT_DETAIL.pruning;
  const bar=pr.rows.map(r=>`<div class="rn-seg rn-${r[0]}" style="flex:${r[2]}" title="${esc(r[1])}: ${r[2]} (${esc(r[3])})"><span>${r[2]}</span></div>`).join('');
  const cards=pr.rows.map(r=>`<div class="prune-card prune-${r[0]}"><div class="pc-label">${esc(r[1])}</div><div class="pc-count">${r[2]}<span>${r[3]}</span></div><div class="pc-cost">${esc(r[4])}/yr</div><div class="pc-act">${esc(r[5])}</div></div>`).join('');
  return `<div class="rn-bar">${bar}</div><div class="prune-band">${cards}</div>`;}
function auPatentsDetail(){
  const p=AUDIT.patents;const ad=AUDIT_DETAIL;
  let acc=0;const stops=p.snapshot.map(s=>{const start=acc/p.total*360;acc+=s[1];const end=acc/p.total*360;return `${s[2]} ${start}deg ${end}deg`;}).join(',');
  const fc=ad.featureCoverage.map(f=>`<div class="fc-row"><div class="fc-cat">${esc(f[0])}</div><div class="fc-prot">${svg(I.check,13)} ${esc(f[1])}</div><div class="fc-white">${svg(I.shield,13)} ${esc(f[2])}</div></div>`).join('');
  const reg=ad.register.map((r,i)=>`<tr><td class="sno">${i+1}</td><td class="appno" style="font-weight:600">${esc(r[0])}</td><td class="title-cell" style="max-width:300px">${esc(r[1])}</td><td><span class="badge ${ad.statusColor(r[2])}">${esc(r[2])}</span></td><td class="assignee">${esc(r[3])}</td><td class="muted">${esc(r[4])}</td></tr>`).join('');
  const comp=ad.competitors.map(c=>`<tr><td style="font-weight:600;white-space:nowrap">${esc(c[0])}</td><td>${esc(c[1])}</td><td>${esc(c[2])}</td><td class="title-cell" style="max-width:520px;color:#64748b">${esc(c[3])||'<span class="muted">—</span>'}</td></tr>`).join('');
  const exam=ad.examReports.map(e=>`<tr><td class="appno" style="font-weight:600">${esc(e[0])}</td><td class="title-cell" style="max-width:230px">${esc(e[1])}</td><td style="text-align:center">${e[2]}</td><td><span class="badge b-red">${esc(e[3])}</span></td><td class="muted">${esc(e[5])}</td><td class="muted">${esc(e[6])}</td><td style="text-align:center">${e[7]}</td></tr>`).join('');
  return `<div class="aud-cols">
    <div class="card aud-snap"><h3>Status Snapshot</h3>
      <div class="donut" style="background:conic-gradient(${stops})"><div class="donut-hole"><b>${p.total}</b><span>patents</span></div></div>
      <div class="donut-legend">${p.snapshot.map(s=>`<div><i style="background:${s[2]}"></i>${esc(s[0])}<b>${s[1]}</b></div>`).join('')}</div>
      <div class="snap-detail">${p.detail.map(d=>`<div><span>${esc(d[0])}</span><b>${d[1]}</b></div>`).join('')}</div>
    </div>
    <div class="aud-gaps"><h3 class="gaps-h">${svg(I.shield,15)} Coverage Gaps — where you’re not protected yet</h3>
      ${p.gaps.map(g=>`<div class="gapcard"><span class="sevbar" style="background:${SEV[g.sev]}"></span><div><div class="gap-title">${esc(g.title)}</div><div class="gap-why">${esc(g.why)}</div></div></div>`).join('')}
    </div>
  </div>
  <div class="card table-card" style="margin-top:20px"><div class="aud-h" style="padding:18px 20px 0">${svg(I.doc,15)} Patent Register <span class="muted">— showing ${ad.register.length} of ${ad.registerTotal}</span></div>
    <div class="tbl-scroll"><table><thead><tr><th>#</th><th>Application No.</th><th>Title</th><th>Legal Status</th><th>Current Owner</th><th>Product / Service</th></tr></thead><tbody>${reg}</tbody></table></div></div>
  <details class="aud-acc" open><summary>${svg(I.shield,14)} Feature Coverage — protected vs. whitespace · ${ad.featureCoverage.length} product lines</summary>
    <div class="fc-head"><div>Product line</div><div>Protected by patents</div><div>Apparent whitespace</div></div>${fc}</details>
  <details class="aud-acc"><summary>${svg(I.clients,14)} Competitor Benchmark · ${ad.competitors.length} companies</summary>
    <div class="tbl-scroll"><table><thead><tr><th>Company</th><th>Alive Patents</th><th>Avg. Grant (mo)</th><th>Key Features</th></tr></thead><tbody>${comp}</tbody></table></div></details>
  <details class="aud-acc"><summary>${svg(I.alert,14)} Examination Reports · ${ad.examReports.length} flagged</summary>
    <div class="tbl-scroll"><table><thead><tr><th>Application No.</th><th>Title</th><th>OAs</th><th>Status</th><th>Attorney</th><th>Examiner</th><th>Interviews</th></tr></thead><tbody>${exam}</tbody></table></div></details>`;
}
function auTmPortfolio(){
  const t=AUDIT.trademarks;const tp=AUDIT_DETAIL.tmPortfolio;
  const tmStat=(k,v,cls)=>`<div class="card stat" style="min-height:104px"><div class="top"><div class="label">${esc(k)}</div></div><div class="num" style="font-size:30px;color:${cls}">${v}</div></div>`;
  return `<div class="grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:22px">
      ${tmStat('Total Records',tp.total,'#18181b')}${tmStat('Live Marks',tp.live,'#059669')}${tmStat('Expired',tp.expired,'#b45309')}${tmStat('Ended / Cancelled',tp.ended,'#dc2626')}</div>
    <div class="aud-cols">
      <div class="aud-gaps" style="flex:1.2"><h3 class="gaps-h">${svg(I.shield,15)} Trademark Gaps</h3>
        ${t.buckets.map(g=>`<div class="gapcard"><span class="sevbar" style="background:${SEV[g.sev]}"></span><div><div class="gap-title">${esc(g.title)}</div><div class="gap-why">${esc(g.items)}</div></div></div>`).join('')}</div>
      <div class="card aud-steps"><h3>Recommended Next Steps</h3><ol>${t.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div>
    </div>`;
}
const TM_URGENT=/POWERSEMI|S Logo|NANOEDGE|NANOGLAZE|NANOTOUCH/i;
function tmFilingGroups(){
  const g={};
  AUDIT_DETAIL.suggestedFilings.forEach(f=>{(g[f[0]]=g[f[0]]||[]).push({cls:f[1],cty:f[2]});});
  return Object.keys(g).map(name=>({name,entries:g[name],urgent:TM_URGENT.test(name)}));
}
function tmConflictGroups(){
  const g={};
  AUDIT_DETAIL.similarMarks.forEach(m=>{const k=m[0].replace(/[^a-z0-9]/gi,'').toUpperCase();(g[k]=g[k]||{name:m[0],items:[]}).items.push({cls:m[1],appno:m[2],owner:m[3],cty:m[4]});});
  return Object.values(g);
}
function auTmNewFilings(){
  const groups=tmFilingGroups();
  const cty=s=>s.split(/[,·]/).map(c=>c.trim()).filter(Boolean);
  const cards=groups.sort((a,b)=>(b.urgent-a.urgent)).map(gp=>`
    <div class="fcard${gp.urgent?' urgent':''}">
      <div class="fcard-h"><span class="fcard-name">${esc(gp.name)}</span>${gp.urgent?`<span class="fcard-pri">${svg(I.alert,11)} Priority</span>`:''}</div>
      ${gp.entries.map(e=>`<div class="fcard-row"><span class="fcard-cls">Cl. ${esc(e.cls)}</span><div class="fcard-cty">${cty(e.cty).map(c=>`<span class="cchip">${esc(c)}</span>`).join('')}</div></div>`).join('')}
    </div>`).join('');
  return `<div class="fgrid">${cards}</div>`;
}
function auTmWatch(){
  const groups=tmConflictGroups();
  const cards=groups.map(gp=>`
    <div class="wcard">
      <div class="wcard-h"><span class="wcard-name">${esc(gp.name)}</span><span class="wcard-count">${gp.items.length} conflict${gp.items.length>1?'s':''}</span></div>
      <div class="wcard-list">${gp.items.map(i=>`<div class="wrow"><span class="wctry">${esc(i.cty)}</span><span class="wowner">${esc(i.owner)}</span><span class="wcls">Cl. ${esc(i.cls)}</span></div>`).join('')}</div>
    </div>`).join('');
  return `<div class="wgrid">${cards}</div>`;
}
function auPlan(){
  const pl=AUDIT.plan;
  return `<div class="plan-top">
      <div class="card plan-big"><div class="pb-k">Yearly Investment</div><div class="pb-v">${esc(pl.yearly)}</div><div class="muted" style="font-size:12px">incl. govt fees estimate</div></div>
      <div class="card plan-big"><div class="pb-k">Monthly Retainer</div><div class="pb-v">${esc(pl.monthly)}</div><div class="muted" style="font-size:12px">excl. govt fees</div></div></div>
    <div class="reassure">${pl.reassurances.map(r=>`<div class="card rcard">${svg(I.check,18)}<div><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div></div>`).join('')}</div>
    <div class="card section" style="margin-top:20px"><div class="section-head"><div><h2>Sample Year</h2><div class="sub">Illustrative engagement</div></div></div>
      <div class="tbl-scroll"><table><thead><tr><th>Activity</th><th>Bifurcation</th><th style="text-align:right">Total</th></tr></thead><tbody>${pl.table.map(r=>`<tr><td>${esc(r[0])}</td><td class="muted">${esc(r[1])}</td><td style="text-align:right;font-weight:600">${esc(r[2])}</td></tr>`).join('')}
        <tr><td style="font-weight:700">Yearly Investment</td><td></td><td style="text-align:right;font-weight:800;color:var(--gold-deep)">${esc(pl.tableTotal)}</td></tr></tbody></table></div></div>
    <details class="plan-details"><summary>View per-unit pricing</summary>${pl.lineItems.map(li=>`<div class="li-row"><div><b>${esc(li[0])}</b>${li[2]?`<div class="muted" style="font-size:12.5px;margin-top:3px">${esc(li[2])}</div>`:''}</div><div class="li-price">${esc(li[1])}</div></div>`).join('')}</details>
    <div class="plan-note">${svg(I.alert,14)} ${esc(pl.note)}</div>`;
}
const PHEAD=(title,sub,right='')=>`<div class="page-head"><div><h1>${esc(title)}</h1><div class="sub">${esc(sub)}</div></div>${right?`<div class="head-right">${right}</div>`:''}</div>`;

/* ============================================================
   LAPMASTER HUB — pages
   ============================================================ */
function viewOverview(){
  const ym=state.deadlines.ym;
  const monthLabel=`${MONTHS[ym%12].toUpperCase()} ${Math.floor(ym/12)}`;
  const stat=(label,num,cls,icon)=>`<div class="card stat"><div class="top"><div class="label">${esc(label)}</div><div class="icon ${cls}">${svg(icon,20)}</div></div><div class="num">${num}</div></div>`;
  const GEO={DE:[52.5,13.4],SG:[1.35,103.8],US:[39.8,-98.6],TW:[23.7,121.0],CN:[35.0,103.0],EP:[48.1,11.6],JP:[36.2,138.3],KR:[36.5,127.8],BR:[-10.0,-52.0],IN:[22.0,79.0]};
  const maxT=Math.max(...LAP_JURISDICTIONS.map(j=>j[2]+j[3]));
  const mapPins=LAP_JURISDICTIONS.map(j=>{
    const g=GEO[j[0]];if(!g)return '';
    const lat=g[0],lon=g[1];
    /* map.svg is cropped equirectangular: viewBox y 38.889..811.111 (lat 83..-56) */
    const x=(lon+180)/360*100, y=(((90-lat)/180*1000)-38.889)/772.222*100;
    const t=j[2]+j[3], sz=10+Math.round((t/maxT)*16);
    return `<div class="pin" style="left:${x}%;top:${y}%">
      <span class="pin-dot" style="width:${sz}px;height:${sz}px"></span>
      <span class="pin-tip"><b>${esc(j[1])}</b><span><i class="td g"></i>${j[2]} granted · <i class="td p"></i>${j[3]} pending · <b>${t}</b> total</span></span>
    </div>`;
  }).join('');
  const entities=[['Lapmaster Wolters',228,'71.9%'],['ELB Schliff Edmund Lang',49,'15.5%'],['Precision Surfacing Solutions',24,'7.6%'],['ISOG Technology',16,'5.0%']];
  const entRow=(name,count,pct)=>`<div class="client"><div class="cav" style="background:${colorFor(name)}1a;color:${colorFor(name)}">${initials(name)}</div><div class="cmeta"><div class="cname">${esc(name)}</div><div class="crank">${pct} of portfolio</div></div><div class="ccount">${count}</div></div>`;
  const calMode=state.ovCal!=='list';
  return `
  <div class="page-head">
    <div><h1>Hi, Anika!</h1><div class="sub">Look at your IP portfolio overview and statistics</div></div>
    <button class="bell">${svg(I.bell,18)}</button>
  </div>
  <div class="grid grid-5">
    ${stat('Total Patents','317','ic-blue',I.doc)}
    ${stat('Granted Patents','113','ic-green',I.check)}
    ${stat('Total Pending Patents','51','ic-amber',I.clock)}
    ${stat('Dead Patents','153','ic-red',I.xc)}
    ${stat('Avg. Grant Time (Months)','38','ic-purple',I.hourglass)}
  </div>
  <div class="card section">
    <div class="section-head"><div><h2>Patent World Map</h2><div class="sub">Global distribution across filing offices</div></div>
      <div class="legend"><span><i class="dot g"></i> Granted</span><span><i class="dot p"></i> Pending</span></div></div>
    <div class="map-wrap"><img class="map-img" id="ov-map-img" src="world.svg" alt="World map"/>${mapPins}</div>
  </div>
  <div class="card section">
    <div class="section-head"><div><h2>Top Entities</h2><div class="sub">By patent count</div></div><a class="link" href="#/patents">View all →</a></div>
    ${entities.map(e=>entRow(e[0],e[1],e[2])).join('')}
  </div>
  <div class="card section">
    <div class="section-head">
      <div><h2>Timeline &amp; Events</h2><div class="sub">Upcoming deadlines &amp; maintenance</div></div>
      <div class="controls">
        <div class="seg" id="ov-toggle"><button class="${calMode?'on':''}" data-ovm="calendar">${svg(I.cal,15)}Calendar</button><button class="${!calMode?'on':''}" data-ovm="list">${svg(I.list,15)}List</button></div>
        <div class="month-nav"><button class="navbtn" id="ov-prev">${svg('<path d="M15 18l-6-6 6-6"/>',16)}</button><div class="label">${monthLabel}</div><button class="navbtn" id="ov-next">${svg('<path d="M9 18l6-6-6-6"/>',16)}</button></div>
      </div>
    </div>
    ${calMode?dlCalendar():ovAgenda()}
  </div>`;
}
function ovAgenda(){
  const col={Overdue:'#f87171','Due soon':'#fbbf24',Active:'#34d399'};
  const rows=LAP_DEADLINES.map(d=>({d,p:parseDL(d[4])})).filter(x=>x.p).sort((a,b)=>(a.p.y-b.p.y)||(a.p.m-b.p.m)||(a.p.d-b.p.d));
  return `<div class="evt-list">${rows.map(({d,p})=>`<div class="evt-li"><div class="bar" style="background:${col[d[3]]||'#cbd5e1'}"></div><div class="d">${MONTHS[p.m].slice(0,3)} ${p.d}</div><div style="flex:1"><div class="ti">${esc(d[0])}</div><div class="ow">${esc(d[2])}</div></div></div>`).join('')}</div>`;
}
function wireOverview(){
  const tg=$('#ov-toggle');if(tg)tg.querySelectorAll('button').forEach(b=>b.onclick=()=>{state.ovCal=b.dataset.ovm;rerender();});
  const pv=$('#ov-prev');if(pv)pv.onclick=()=>{state.deadlines.ym--;rerender();};
  const nx=$('#ov-next');if(nx)nx.onclick=()=>{state.deadlines.ym++;rerender();};
}
/* Patents — health bar + prosecution pipeline (clearer than a donut) */
function ptSnapshot(){
  const p=AUDIT.patents;const total=p.total;
  const pct=n=>Math.round(n/total*100);
  const active=113+51, inactive=153;
  const seg=p.snapshot.map(s=>`<div class="s3-seg" style="flex:${s[1]};--c:${s[2]}" title="${esc(s[0])}: ${s[1]} (${pct(s[1])}%)"><span>${s[1]}</span></div>`).join('');
  const blabels=p.snapshot.map(s=>`<div class="s3-bl" style="flex:${s[1]}"><i style="background:${s[2]}"></i><span>${esc(s[0])}</span> <b>${s[1]}</b> <em>${pct(s[1])}%</em></div>`).join('');
  const stages=[
    ['20','Yet to begin',I.hourglass,'#94a3b8'],
    ['16','Under examination',I.search,'#f59e0b'],
    ['9','NOA — grant imminent',I.mail,'#6366f1'],
  ];
  const pipe=stages.map((s,i)=>{
    const conn=i<stages.length-1?`<div class="s3-conn">${svg('<path d="M9 18l6-6-6-6"/>',16)}</div>`:'';
    return `<div class="s3-step" style="--c:${s[3]}"><div class="s3-ico">${svg(s[2],15)}</div><div class="s3-num">${s[0]}</div><div class="s3-lbl">${esc(s[1])}</div></div>${conn}`;
  }).join('');
  return `<div class="card s3-snap">
    <div class="s3-head">
      <div class="s3-total"><b>${total}</b><span>Total patents</span></div>
      <div class="s3-split"><span class="s3-ok">${active} active</span><i>·</i><span class="s3-deadn">${inactive} dead</span><em>${pct(inactive)}%</em></div>
    </div>
    <div class="s3-bar">${seg}</div>
    <div class="s3-barlabels">${blabels}</div>
    <div class="s3-rule"></div>
    <div class="s3-pipehead">${svg(I.scale,14)} Prosecution pipeline <span>· where the 51 pending stand</span></div>
    <div class="s3-pipe">${pipe}</div>
    <div class="s3-wipo">${svg(I.globe,13)} Plus <b>6</b> at the WIPO / international stage</div>
  </div>`;
}
function ptGaps(){const p=AUDIT.patents;
  return `<div class="aud-gaps"><h3 class="gaps-h">${svg(I.shield,15)} Coverage Gaps — where you’re not protected yet</h3>
    ${p.gaps.map(g=>`<div class="gapcard"><span class="sevbar" style="background:${SEV[g.sev]}"></span><div><div class="gap-title">${esc(g.title)}</div><div class="gap-why">${esc(g.why)}</div></div></div>`).join('')}</div>`;}
function ptRegister(){const ad=AUDIT_DETAIL;
  const reg=ad.register.map((r,i)=>`<tr><td class="sno">${i+1}</td><td class="appno" style="font-weight:600">${esc(r[0])}</td><td class="title-cell" style="max-width:320px">${esc(r[1])}</td><td><span class="badge ${ad.statusColor(r[2])}">${esc(r[2])}</span></td><td class="assignee">${esc(r[3])}</td><td class="muted">${esc(r[4])}</td></tr>`).join('');
  return `<div class="card table-card"><div class="tbl-foot" style="border-top:0;border-bottom:1px solid var(--line)"><span>Showing ${ad.register.length} of ${ad.registerTotal} records</span></div>
    <div class="tbl-scroll"><table><thead><tr><th>#</th><th>Application No.</th><th>Title</th><th>Legal Status</th><th>Current Owner</th><th>Product / Service</th></tr></thead><tbody>${reg}</tbody></table></div></div>`;}
function ptFeature(){
  const fc=AUDIT_DETAIL.featureCoverage;
  const totalOpps=fc.reduce((s,f)=>s+f.white.length,0);
  const lvl=(prot)=>{const p0=(prot&&prot[0])||'';const j=(prot||[]).join(' ');
    if(/^No active|^No standalone/i.test(p0))return['Gap','r'];
    if(/may cover|may apply|legacy/i.test(j))return['Light','a'];
    return['Covered','g'];};
  const short=(s)=>{s=String(s).trim();let c=s.split(/\s(?:that|based on|using|linking|with|for |across|including)\s/i)[0];if(c.length>62)c=c.slice(0,60).trim()+'…';return c;};
  const gaps=fc.filter(f=>lvl(f.prot)[1]==='r').length;
  const rows=fc.map(f=>{
    const [lab,cls]=lvl(f.prot);
    const chips=f.white.map(x=>`<span class="fchip" title="${esc(x)}">${esc(short(x))}</span>`).join('');
    const prot=f.prot.map(x=>`<li>${esc(x)}</li>`).join('');
    return `<div class="fc3-row">
      <div class="fc3-left"><span class="fc3-dot ${cls}"></span><div><div class="fc3-name">${esc(f.cat)}</div><span class="fc3-pill ${cls}">${lab}</span></div></div>
      <div class="fc3-right">
        <div class="fc3-chips">${chips}</div>
        <details class="fc3-prot"><summary>${svg(I.check,12)} ${f.prot.length} feature${f.prot.length>1?'s':''} already covered</summary><ul>${prot}</ul></details>
      </div>
    </div>`;
  }).join('');
  return `<div class="card section">
    <div class="section-head"><div><h2>Feature Coverage</h2><div class="sub">Open whitespace by product line · <b style="color:#b45309">${totalOpps} filing opportunities</b> · <b style="color:#dc2626">${gaps} lines with no active coverage</b></div></div></div>
    <div class="fc3-list">${rows}</div></div>`;
}
function ptCompetitors(){
  const ad=AUDIT_DETAIL;
  const all=ad.competitors.map(c=>({name:c[0],alive:parseInt(String(c[1]).replace(/[^0-9]/g,''))||0,grant:parseInt(c[2])||0,feat:c[3]||''}));
  const plotted=all.filter(d=>d.alive&&d.grant);
  const others=all.filter(d=>!(d.alive&&d.grant));
  const scope=state.lapPatents.compScope||'all';
  const data=scope==='peers'?plotted.filter(d=>!/tokyo/i.test(d.name)):plotted;
  const sel=plotted.find(d=>d.name===state.lapPatents.comp)||plotted.find(d=>/lapmaster/i.test(d.name))||plotted[0];
  const xMin=24,xMax=40;
  const yMax=scope==='peers'?Math.ceil(Math.max(...data.map(d=>d.alive))/50)*50:3000;
  const yN=scope==='peers'?5:3;
  const xTicks=[24,28,32,36,40];
  const yTicks=Array.from({length:yN+1},(_,i)=>Math.round(yMax/yN*i));
  const X=g=>((Math.min(Math.max(g,xMin),xMax)-xMin)/(xMax-xMin))*100;
  const Y=v=>(1-(Math.min(v,yMax)/yMax))*100;
  const grid=xTicks.map(t=>`<div class="grid-v" style="left:${X(t)}%"></div><div class="xtick" style="left:${X(t)}%">${t}mo</div>`).join('')
    + yTicks.map(t=>`<div class="grid-h" style="top:${Y(t)}%"></div><div class="ytick" style="top:${Y(t)}%">${t.toLocaleString()}</div>`).join('');
  const dots=data.map(d=>{const isLap=/lapmaster/i.test(d.name),isTok=/tokyo/i.test(d.name);
    const lbl=(scope==='peers'||isLap||isTok)?`<span class="sdot-lbl">${esc(d.name.split(' ')[0])}</span>`:'';
    return `<button class="sdot ${isLap?'lap':''} ${isTok?'tok':''} ${d.name===sel.name?'sel':''} ${X(d.grant)>62?'lbl-left':''}" data-comp="${esc(d.name)}" style="left:${X(d.grant)}%;top:${Y(d.alive)}%" data-tip="${esc(d.name)} · ${d.alive.toLocaleString()} patents · ${d.grant} mo to grant">${lbl}</button>`;}).join('');
  const featList=sel.feat?'<ul>'+sel.feat.split('•').map(x=>x.trim()).filter(Boolean).map(x=>`<li>${esc(x)}</li>`).join('')+'</ul>':'<span class="muted">No details</span>';
  const chips=others.map(o=>`<span class="oc-chip">${esc(o.name)}</span>`).join('');
  return `<div class="card section">
    <div class="section-head"><div><h2>Competitive Benchmark</h2><div class="sub">Patent volume (↑) vs. speed to grant (→) · one dot per competitor · click to compare</div></div>
      <div class="seg" id="comp-scope"><button class="${scope==='all'?'on':''}" data-scope="all">All</button><button class="${scope==='peers'?'on':''}" data-scope="peers">Peers only</button></div></div>
    <div class="s2-wrap"><div class="s2-yaxis">Alive patents ↑</div>
      <div class="scatter2">${grid}${dots}</div></div>
    <div class="s2-xaxis"><span>← faster to grant</span><span>avg. months to grant</span><span>slower →</span></div>
    <div class="comp-detail">
      <div class="cd-head"><b>${esc(sel.name)}</b>${/lapmaster/i.test(sel.name)?'<span class="badge b-amber">You</span>':'<span class="badge b-gray">Competitor</span>'}</div>
      <div class="cd-stats"><div><span>Alive patents</span><b>${sel.alive.toLocaleString()}</b></div><div><span>Avg. grant time</span><b>${sel.grant} mo</b></div></div>
      <div class="cd-feat">${featList}</div></div>
    ${chips?`<div class="oc-row"><span class="muted">Not yet benchmarked:</span> ${chips}</div>`:''}
  </div>`;
}
function ptExam(){const ad=AUDIT_DETAIL;
  const diffCls=(p)=>p>=80?'b-red':p>=60?'b-amber':'b-green';
  const rows=ad.examReports.map(e=>{
    const d=e[8];
    const grant=d?`<b>${esc(d.rate)}</b> <span class="muted">/ ${d.cases}</span>`:'<span class="muted">—</span>';
    const diff=d?`<span class="badge ${diffCls(d.pct)}">${esc(d.diff)}</span> <span class="muted">${d.pct}th</span>`:'<span class="muted">—</span>';
    return `<tr>
      <td><div class="appno" style="font-weight:600">${esc(e[0])}</div><div class="muted" style="font-size:12px;margin-top:2px;max-width:280px">${esc(e[1])}</div></td>
      <td class="assignee">${esc(e[6])||'<span class="muted">—</span>'}</td>
      <td style="text-align:center">${e[2]}</td>
      <td style="text-align:center">${e[7]}</td>
      <td style="white-space:nowrap">${grant}</td>
      <td style="white-space:nowrap">${diff}</td>
      <td><span class="badge b-red">${esc(e[3])}</span></td>
    </tr>`;
  }).join('');
  return `<div class="card table-card">
    <div class="aud-h" style="padding:18px 20px 0">${svg(I.alert,15)} Examination Reports <span class="muted">— ${ad.examReports.length} flagged · examiner grant-rate &amp; difficulty</span></div>
    <div class="tbl-scroll"><table>
      <thead><tr><th>Application No.</th><th>Examiner</th><th>OAs</th><th>Int.</th><th>3-yr Grant</th><th>Difficulty</th><th>Status</th></tr></thead>
      <tbody>${rows}</tbody></table></div></div>`;
}
function ptJurisdictions(){
  const FLAG={DE:'🇩🇪',SG:'🇸🇬',US:'🇺🇸',TW:'🇹🇼',CN:'🇨🇳',EP:'🇪🇺',JP:'🇯🇵',KR:'🇰🇷',BR:'🇧🇷',IN:'🇮🇳'};
  const J=LAP_JURISDICTIONS;const total=J.reduce((s,j)=>s+j[2]+j[3],0);
  const max=Math.max(...J.map(j=>j[2]+j[3]));
  const rows=J.map(j=>{const t=j[2]+j[3];const pct=(t/total*100);
    const gw=j[2]/max*100, pw=j[3]/max*100;
    return `<div class="jr-row">
      <div class="jr-flag">${FLAG[j[0]]||esc(j[0])}</div>
      <div class="jr-name">${esc(j[1])}</div>
      <div class="jr-track"><div class="jr-bar jr-g" style="width:${gw}%"></div><div class="jr-bar jr-p" style="width:${pw}%"></div></div>
      <div class="jr-num"><b>${t}</b><span>${pct.toFixed(1)}% of portfolio</span></div>
    </div>`;}).join('');
  return `<div class="card section">
    <div class="section-head"><div><h2>Patents by Jurisdiction</h2><div class="sub">Granted vs pending across your filing offices</div></div>
      <div class="legend"><span><i class="dot g"></i> Granted</span><span><i class="dot p"></i> Pending</span></div></div>
    ${rows}</div>`;
}

function viewLapPatents(){
  const st=state.lapPatents;
  const tabs=[['gaps','Coverage Gaps'],['jurisdictions','Jurisdictions'],['register','Register'],['feature','Feature Coverage'],['competitors','Competitors'],['exam','Examination']];
  const sec={gaps:ptGaps,jurisdictions:ptJurisdictions,register:ptRegister,feature:ptFeature,competitors:ptCompetitors,exam:ptExam}[st.tab]||ptGaps;
  const right=`<div class="bignum"><div class="n">317</div><div class="l">Total Patents</div></div>`;
  return PHEAD('Patents','Your patent portfolio at a glance',right)
  + ptSnapshot()
  + `<div class="tabsticky"><div class="aud-tabs" style="max-width:640px">${tabs.map(([k,l])=>`<button class="${st.tab===k?'on':''}" data-ptab="${k}">${esc(l)}</button>`).join('')}</div></div>`
  + `<div class="pt-body">${sec()}</div>`;
}
function wireLapPatents(){
  document.querySelectorAll('.aud-tabs button[data-ptab]').forEach(b=>b.onclick=()=>{state.lapPatents.tab=b.dataset.ptab;rerender();});
  document.querySelectorAll('.sdot[data-comp]').forEach(b=>b.onclick=()=>{state.lapPatents.comp=b.dataset.comp;rerender();});
  const _cs=document.getElementById('comp-scope');if(_cs)_cs.querySelectorAll('button').forEach(b=>b.onclick=()=>{state.lapPatents.compScope=b.dataset.scope;rerender();});
}
function viewLapTrademarks(){
  const right=`<div class="bignum"><div class="n">291</div><div class="l">TM Records</div></div>`;
  return PHEAD('Trademarks','Your trademark portfolio health & gaps',right)+auTmPortfolio();
}
function viewTmFilings(){
  const st=state.tmFilings;
  const nFil=tmFilingGroups().length, nWatch=tmConflictGroups().length;
  const tabs=[['filings',`New Filings · ${nFil}`],['watch',`Conflicts to Watch · ${nWatch}`]];
  const body=st.tab==='watch'?auTmWatch():auTmNewFilings();
  const sum=st.tab==='watch'
    ? `<b>${nWatch}</b> conflicting marks to monitor across ${AUDIT_DETAIL.similarMarks.length} registrations`
    : `<b>${nFil}</b> marks to file · <b class="amber">${tmFilingGroups().filter(g=>g.urgent).length}</b> priority refiles`;
  return PHEAD('Filings & Watch','New trademark filings to make and conflicts to monitor')
  + `<div class="tabsticky"><div class="aud-tabs" style="max-width:440px">${tabs.map(([k,l])=>`<button class="${st.tab===k?'on':''}" data-tmtab="${k}">${esc(l)}</button>`).join('')}</div></div>
     <div class="fc2-summary">${sum}</div>
     <div class="tmf-body">${body}</div>`;
}
function wireTmFilings(){
  document.querySelectorAll('.aud-tabs button[data-tmtab]').forEach(b=>b.onclick=()=>{state.tmFilings.tab=b.dataset.tmtab;rerender();});
}
function viewRenewals(){
  const pr=AUDIT_DETAIL.pruning;
  const FLAG={DE:'🇩🇪',SG:'🇸🇬',US:'🇺🇸',TW:'🇹🇼',CN:'🇨🇳',EP:'🇪🇺',JP:'🇯🇵',KR:'🇰🇷',BR:'🇧🇷',IN:'🇮🇳'};
  const confCls=c=>c==='High'?'b-green':'b-amber';
  const hero=`<div class="rn-hero">
    <div class="rn-tile">
      <div class="rn-k">Annual renewal spend</div>
      <div class="rn-v">$243,698<span>/yr</span></div>
      <div class="rn-s">across 113 granted patents</div>
    </div>
    <div class="rn-tile rn-save">
      <div class="rn-k">Recoverable now</div>
      <div class="rn-v">$16,809<span>/yr</span></div>
      <div class="rn-s">prune 11 low-value patents</div>
    </div>
    <div class="rn-tile rn-watch">
      <div class="rn-k">Pending counsel</div>
      <div class="rn-v">$44,668<span>/yr</span></div>
      <div class="rn-s">20 candidates under review</div>
    </div>
  </div>`;
  const prRows=pr.pruneList.map(p=>`<tr>
    <td class="appno" style="font-weight:600;white-space:nowrap">${FLAG[p[2]]||''} ${esc(p[0])}</td>
    <td class="title-cell" style="max-width:340px">${esc(p[1])}</td>
    <td class="muted">${esc(p[4])}</td>
    <td style="text-align:right;font-weight:600;font-variant-numeric:tabular-nums">$${p[3].toLocaleString()}/yr</td>
    <td><span class="badge ${confCls(p[5])}">${esc(p[5])}</span></td>
  </tr>`).join('');
  const pruneTable=`<div class="card table-card">
    <div class="tbl-head-row"><div><h2 style="margin:0">🔴 Prune candidates · 11 patents</h2><div class="sub">Let lapse at next renewal — ${esc(pr.method)}</div></div>
      <div class="rn-tablesum">Saves <b>$16,809</b>/yr</div></div>
    <div class="tbl-scroll"><table>
      <thead><tr><th>Patent</th><th>Title</th><th>Why flagged</th><th style="text-align:right">Annual cost</th><th>Confidence</th></tr></thead>
      <tbody>${prRows}</tbody>
    </table></div></div>`;
  return PHEAD('Renewals & Pruning','Decide what to maintain, review, or let lapse')
  + hero
  + `<div class="card section"><div class="section-head"><div><h2>Recommendations</h2><div class="sub">${esc(pr.note)}</div></div><div class="rn-tablesum">Total <b>${pr.total[0]}</b> · <b>${esc(pr.total[2])}</b>/yr</div></div>${auRenewBand()}</div>`
  + pruneTable
  + `<div class="plan-note">${svg(I.alert,14)} The 20 “review” candidates ($44,668/yr) need counsel sign-off before lapse — flag for manual evaluation.</div>`;
}
function viewInvestment(){
  return PHEAD('Investment','What it takes to protect your IP the right way')+auPlan();
}
function viewApprovals(){
  const a=AUDIT;const ad=AUDIT_DETAIL;
  const oa=ad.examReports.map(e=>`<tr><td class="appno" style="font-weight:600">${esc(e[0])}</td><td class="title-cell" style="max-width:280px">${esc(e[1])}</td><td><span class="badge b-red">${esc(e[3])}</span></td><td><button class="btn" style="padding:7px 12px">Instruct counsel</button></td></tr>`).join('');
  return PHEAD('Approvals','Items awaiting your sign-off')
  + `<div class="card section">${auDecisions(true)}</div>
     <div class="card table-card"><div class="aud-h" style="padding:18px 20px 0">${svg(I.alert,15)} Pending office actions <span class="muted">— flagged, abandoned for non-response</span></div>
       <div class="tbl-scroll"><table><thead><tr><th>Application No.</th><th>Title</th><th>Status</th><th></th></tr></thead><tbody>${oa}</tbody></table></div></div>`;
}
function viewSubmitIdea(){
  const st=state.ideasLap;
  const rows=st.list.map((x,i)=>`<tr><td class="sno">${i+1}</td><td class="title-cell" style="max-width:420px;font-weight:500;color:#1e293b">${esc(x[0])}</td><td class="assignee">${esc(x[1])}</td><td>${esc(x[2])}</td><td><span class="badge ${LAP_IDEA_STATUS[x[3]]||'b-gray'}">${esc(x[3])}</span></td><td>${esc(x[4])}</td><td class="muted">${esc(x[5])}</td></tr>`).join('');
  return PHEAD('Submit an Idea','Capture innovation early — get an instant AI patentability score')
  + `<div class="card section idea-form">
       <div class="field"><label>${svg(I.ideas,14)} Idea title</label><input data-i-title placeholder="e.g. Closed-loop slurry feed from plate temperature drift"/></div>
       <div class="if-row">
         <div class="field"><label>${svg(I.user,14)} Inventor</label><input data-i-inv placeholder="Your name"/></div>
         <div class="field"><label>${svg(I.cols,14)} Product area</label><input data-i-cat placeholder="e.g. Lapping, Wafer/SiC, Wire Saw"/></div>
       </div>
       <div class="field"><label>${svg(I.doc,14)} Description</label><textarea data-i-desc rows="3" placeholder="Describe the problem and your solution…"></textarea></div>
       <button class="btn btn-gold" id="idea-submit">${svg(I.plus,16)} Submit & score</button>
       <div id="idea-msg" class="idea-msg"></div>
     </div>
     <div class="card table-card"><div class="aud-h" style="padding:18px 20px 0">${svg(I.ideas,15)} Recent submissions <span class="muted">— ${st.list.length}</span></div>
       <div class="tbl-scroll"><table><thead><tr><th>#</th><th>Title</th><th>Inventor</th><th>Area</th><th>Status</th><th>AI Score</th><th>Submitted</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}
function wireSubmitIdea(){
  const btn=$('#idea-submit');if(!btn)return;
  btn.onclick=()=>{
    const t=$('[data-i-title]').value.trim();if(!t){$('#idea-msg').innerHTML='<span style="color:#dc2626">Add an idea title first.</span>';return;}
    const inv=$('[data-i-inv]').value.trim()||'Anonymous';const cat=$('[data-i-cat]').value.trim()||'General';
    const score=(7+((t.length*7)%26)/10).toFixed(1);
    state.ideasLap.list.unshift([t,inv,cat,'New',score,'Just now']);
    rerender();
  };
}
function viewSettings(){
  const o=LAP_ORG;
  const team=LAP_TEAM.map(m=>`<div class="people-row"><div class="pav" style="background:${colorFor(m[0])}">${initials(m[0])}</div><div><div class="pname">${esc(m[0])}</div><div class="pmail">${esc(m[2])}</div></div><div style="margin-left:auto;font-size:12.5px;color:#64748b">${esc(m[1])}</div></div>`).join('');
  return PHEAD('Settings','Your organisation & team',`<button class="btn">${svg(I.edit,16)}Edit</button>`)
  + `<div class="ws-layout">
       <div class="card ws-side">
         <div class="ws-logo"><div class="lap-lock"><div class="lap-name">LAPMASTER</div><div class="lap-sub">WOLTERS</div></div></div>
         <div class="ws-org">${esc(o.name)}</div>
         <div class="ws-block"><div class="k">${svg(I.mail,14)} Allowed mail domain</div><div class="v">${esc(o.domain)}</div></div>
         <div class="ws-block"><div class="k">${svg(I.workspace,14)} Group entities</div><div class="admin-list">${o.entities.map(e=>`<a>${esc(e)}</a>`).join('')}</div></div>
         <div class="ws-block"><div class="k">${svg(I.scale,14)} IP advisor</div><div class="v">${esc(o.advisor)}</div></div>
       </div>
       <div class="card ws-main"><div class="ws-body"><h3>Team Members · ${LAP_TEAM.length}</h3>${team}</div></div>
     </div>`;
}
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const dlStatusEvt=(s)=>s==='Overdue'?'red':s==='Due soon'?'amber':'green';
const dlBadge=(s)=>s==='Overdue'?'b-red':s==='Due soon'?'b-amber':'b-green';
function parseDL(s){const m=String(s).match(/([A-Za-z]+)\s+(\d+),\s*(\d+)/);if(!m)return null;const mi=MONTHS.findIndex(x=>x.toLowerCase()===m[1].slice(0,3).toLowerCase());return mi<0?null:{y:+m[3],m:mi,d:+m[2]};}
const DL_COLS=[
  {key:'event', label:'Event',           get:d=>d[0].toLowerCase()},
  {key:'app',   label:'Application No.',  get:d=>d[1].toLowerCase()},
  {key:'entity',label:'Entity',          get:d=>d[2].toLowerCase()},
  {key:'status',label:'Status',          get:d=>({'Overdue':0,'Due soon':1,'Active':2}[d[3]]??3)},
  {key:'due',   label:'Due Date',        get:d=>{const p=parseDL(d[4]);return p?p.y*10000+p.m*100+p.d:0;}},
];
function dlList(){
  const st=state.deadlines;
  let list=LAP_DEADLINES.filter(d=>!st.q||`${d[0]} ${d[1]} ${d[2]}`.toLowerCase().includes(st.q.toLowerCase()));
  if(st.sort){const c=DL_COLS.find(x=>x.key===st.sort.key);if(c){list=list.slice().sort((a,b)=>{const va=c.get(a),vb=c.get(b);return (va<vb?-1:va>vb?1:0)*st.sort.dir;});}}
  const arr=(k)=> st.sort&&st.sort.key===k ? (st.sort.dir===1?'↑':'↓') : '⇅';
  const heads=DL_COLS.map(c=>`<th class="th-sort${st.sort&&st.sort.key===c.key?' on':''}" data-sk="${c.key}">${esc(c.label)}<span class="tharr">${arr(c.key)}</span></th>`).join('');
  const rows=list.map((d,i)=>`<tr><td class="sno">${i+1}</td><td>${esc(d[0])}</td><td><div class="appno">${svg(I.doc,16)}${esc(d[1])}</div></td><td class="assignee">${esc(d[2])}</td><td><span class="badge ${dlBadge(d[3])}">${esc(d[3])}</span></td><td class="muted">${esc(d[4])}</td><td><span class="remind">${svg(I.bell,15)} Remind</span></td></tr>`).join('');
  return `<div class="toolbar"><div class="search">${svg(I.search,17)}<input data-q placeholder="Search by event, application, entity..." value="${esc(st.q)}"/></div>${pill('All entities',I.workspace)}</div>
     <div class="card table-card"><div class="tbl-scroll"><table><thead><tr><th>S.NO</th>${heads}<th>Remind</th></tr></thead><tbody>${rows||`<tr><td colspan="7" class="empty-state">No deadlines match.</td></tr>`}</tbody></table></div></div>`;
}
function dlCalendar(){
  const ym=state.deadlines.ym;const year=Math.floor(ym/12);const month=ym%12;
  const events={};
  LAP_DEADLINES.forEach(d=>{const p=parseDL(d[4]);if(p&&p.y===year&&p.m===month){(events[p.d]=events[p.d]||[]).push(d);}});
  const offset=(new Date(year,month,1).getDay()+6)%7;
  const days=new Date(year,month+1,0).getDate();
  const cells=Math.ceil((offset+days)/7)*7;
  const today={y:2026,m:5,d:6};
  let html='<div class="cal"><div class="cal-head">'+['MON','TUE','WED','THU','FRI','SAT','SUN'].map(d=>`<div>${d}</div>`).join('')+'</div>';
  let day=1;
  for(let i=0;i<cells;i++){
    if(i%7===0)html+=(i?'</div>':'')+'<div class="cal-row">';
    if(i<offset||day>days){html+='<div class="cal-cell empty"></div>';}
    else{
      const evs=events[day]||[];const isToday=year===today.y&&month===today.m&&day===today.d;
      let inner=`<div class="daynum${isToday?' today':''}">${day}</div>`;
      evs.slice(0,3).forEach(d=>{inner+=`<div class="evt ${dlStatusEvt(d[3])}"><span class="et">${esc(d[0])}</span><span class="eo">${esc(d[1])}</span></div>`;});
      if(evs.length>3)inner+=`<div class="more">+${evs.length-3} more</div>`;
      html+=`<div class="cal-cell">${inner}</div>`;day++;
    }
  }
  return html+'</div></div>';
}
function viewDeadlines(){
  const st=state.deadlines;
  const overdue=LAP_DEADLINES.filter(d=>d[3]==='Overdue').length;
  const right=`<div class="bignum"><div class="n" style="color:#dc2626">${overdue}</div><div class="l">Overdue</div></div>`;
  const ym=st.ym;const monthLabel=`${MONTHS[ym%12].toUpperCase()} ${Math.floor(ym/12)}`;
  const cal=st.view==='calendar';
  const controls=`<div class="dl-bar">
    <div class="seg" id="dl-toggle">
      <button class="${cal?'on':''}" data-dv="calendar">${svg(I.cal,15)}Calendar</button>
      <button class="${!cal?'on':''}" data-dv="list">${svg(I.list,15)}List</button>
    </div>
    <div class="dl-right">${cal?`<div class="cal-legend"><span><i class="ev-d red"></i>Overdue</span><span><i class="ev-d amber"></i>Due soon</span><span><i class="ev-d green"></i>Active</span></div>
      <div class="month-nav"><button class="navbtn" id="dl-prev">${svg('<path d="M15 18l-6-6 6-6"/>',16)}</button><div class="label">${monthLabel}</div><button class="navbtn" id="dl-next">${svg('<path d="M9 18l6-6-6-6"/>',16)}</button></div>`:''}</div>
  </div>`;
  const body = cal ? `<div class="card section">${dlCalendar()}</div>` : dlList();
  return PHEAD('Deadlines','Your upcoming IP deadlines & maintenance',right)
   + controls + body;
}
function wireDeadlines(){
  const st=state.deadlines;
  const q=$('[data-q]');if(q)q.oninput=()=>{st.q=q.value;rerender(true);};
  const tg=$('#dl-toggle');if(tg)tg.querySelectorAll('button').forEach(b=>b.onclick=()=>{st.view=b.dataset.dv;rerender();});
  const pv=$('#dl-prev');if(pv)pv.onclick=()=>{st.ym--;rerender();};
  const nx=$('#dl-next');if(nx)nx.onclick=()=>{st.ym++;rerender();};
  document.querySelectorAll('th[data-sk]').forEach(th=>th.onclick=()=>{const k=th.dataset.sk;st.sort=(st.sort&&st.sort.key===k)?{key:k,dir:st.sort.dir*-1}:{key:k,dir:1};rerender();});
}

function viewAudit(){
  const a=AUDIT;const st=state.audit;
  const hero=a.hero.map(h=>`<div class="card stat" style="min-height:120px"><div class="top"><div class="label">${esc(h.k)}</div></div><div class="num" style="color:${SEV[h.tone]||'#18181b'};font-size:30px">${esc(h.v)}</div><div class="muted" style="font-size:12px;margin-top:4px">${esc(h.sub)}</div></div>`).join('');
  const tabs=[['decisions','Needs Decision'],['patents','Patents'],['trademarks','Trademarks'],['plan','Investment Plan']]
    .map(([k,l])=>`<button class="${st.tab===k?'on':''}" data-atab="${k}">${esc(l)}</button>`).join('');

  let body='';
  if(st.tab==='decisions'){
    body=`<div class="dec-head">${svg(I.alert,16)} ${a.decisions.length} items need your attention <span class="muted" style="font-weight:400">· sorted by priority</span></div>
    ${a.decisions.map(d=>`<div class="decision">
      <span class="sevdot" style="background:${SEV[d.sev]}"></span>
      <div class="dec-main">
        <div class="dec-title">${esc(d.title)} <span class="dec-scope">${esc(d.scope)}</span></div>
        <div class="dec-why">${esc(d.why)}</div>
      </div>
      <button class="dec-cta">${esc(d.cta)} ${svg(I.arrowR,14)}</button>
    </div>`).join('')}`;
  }
  else if(st.tab==='patents'){
    const p=a.patents;const ad=AUDIT_DETAIL;
    let acc=0;const stops=p.snapshot.map(s=>{const start=acc/p.total*360;acc+=s[1];const end=acc/p.total*360;return `${s[2]} ${start}deg ${end}deg`;}).join(',');
    const pr=ad.pruning;
    // pruning band
    const pruneCards=pr.rows.map(r=>`<div class="prune-card prune-${r[0]}"><div class="pc-label">${esc(r[1])}</div><div class="pc-count">${r[2]}<span>${r[3]}</span></div><div class="pc-cost">${esc(r[4])}/yr</div><div class="pc-act">${esc(r[5])}</div></div>`).join('');
    // feature coverage
    const fc=ad.featureCoverage.map(f=>`<div class="fc-row"><div class="fc-cat">${esc(f[0])}</div><div class="fc-prot">${svg(I.check,13)} ${esc(f[1])}</div><div class="fc-white">${svg(I.shield,13)} ${esc(f[2])}</div></div>`).join('');
    // register
    const reg=ad.register.map((r,i)=>`<tr><td class="sno">${i+1}</td><td class="appno" style="font-weight:600">${esc(r[0])}</td><td class="title-cell" style="max-width:300px">${esc(r[1])}</td><td><span class="badge ${ad.statusColor(r[2])}">${esc(r[2])}</span></td><td class="assignee">${esc(r[3])}</td><td class="muted">${esc(r[4])}</td></tr>`).join('');
    // competitors
    const comp=ad.competitors.map(c=>`<tr><td style="font-weight:600;white-space:nowrap">${esc(c[0])}</td><td>${esc(c[1])}</td><td>${esc(c[2])}</td><td class="title-cell" style="max-width:520px;color:#64748b">${esc(c[3])||'<span class="muted">—</span>'}</td></tr>`).join('');
    // exam reports
    const exam=ad.examReports.map(e=>`<tr><td class="appno" style="font-weight:600">${esc(e[0])}</td><td class="title-cell" style="max-width:230px">${esc(e[1])}</td><td style="text-align:center">${e[2]}</td><td><span class="badge b-red">${esc(e[3])}</span></td><td class="muted">${esc(e[5])}</td><td class="muted">${esc(e[6])}</td><td style="text-align:center">${e[7]}</td></tr>`).join('');
    body=`<div class="aud-cols">
      <div class="card aud-snap">
        <h3>Status Snapshot</h3>
        <div class="donut" style="background:conic-gradient(${stops})"><div class="donut-hole"><b>${p.total}</b><span>patents</span></div></div>
        <div class="donut-legend">${p.snapshot.map(s=>`<div><i style="background:${s[2]}"></i>${esc(s[0])}<b>${s[1]}</b></div>`).join('')}</div>
        <div class="snap-detail">${p.detail.map(d=>`<div><span>${esc(d[0])}</span><b>${d[1]}</b></div>`).join('')}</div>
      </div>
      <div class="aud-gaps">
        <h3 class="gaps-h">${svg(I.shield,15)} Coverage Gaps — where you’re not protected yet</h3>
        ${p.gaps.map(g=>`<div class="gapcard"><span class="sevbar" style="background:${SEV[g.sev]}"></span><div><div class="gap-title">${esc(g.title)}</div><div class="gap-why">${esc(g.why)}</div></div></div>`).join('')}
      </div>
    </div>

    <div class="aud-sec"><h3 class="aud-h">${svg(I.scale,15)} Renewal &amp; Pruning <span class="muted">— ${esc(pr.note)}</span></h3>
      <div class="prune-band">${pruneCards}</div>
      <div class="prune-total">Total reviewed <b>${pr.total[0]}</b> · Est. annual renewal <b>${esc(pr.total[2])}</b></div>
    </div>

    <details class="aud-acc" open><summary>${svg(I.shield,14)} Feature Coverage — protected vs. whitespace · ${ad.featureCoverage.length} product lines</summary>
      <div class="fc-head"><div>Product line</div><div>Protected by patents</div><div>Apparent whitespace</div></div>
      ${fc}
    </details>

    <details class="aud-acc"><summary>${svg(I.doc,14)} Patent Register · showing ${ad.register.length} of ${ad.registerTotal}</summary>
      <div class="tbl-scroll"><table><thead><tr><th>#</th><th>Application No.</th><th>Title</th><th>Legal Status</th><th>Current Owner</th><th>Product / Service</th></tr></thead><tbody>${reg}</tbody></table></div>
    </details>

    <details class="aud-acc"><summary>${svg(I.clients,14)} Competitor Benchmark · ${ad.competitors.length} companies</summary>
      <div class="tbl-scroll"><table><thead><tr><th>Company</th><th>Alive Patents</th><th>Avg. Grant (mo)</th><th>Key Features</th></tr></thead><tbody>${comp}</tbody></table></div>
    </details>

    <details class="aud-acc"><summary>${svg(I.alert,14)} Examination Reports · ${ad.examReports.length} flagged</summary>
      <div class="tbl-scroll"><table><thead><tr><th>Application No.</th><th>Title</th><th>OAs</th><th>Status</th><th>Attorney</th><th>Examiner</th><th>Interviews</th></tr></thead><tbody>${exam}</tbody></table></div>
    </details>`;
  }
  else if(st.tab==='trademarks'){
    const t=a.trademarks;const ad=AUDIT_DETAIL;const tp=ad.tmPortfolio;
    const tmStat=(k,v,cls)=>`<div class="card stat" style="min-height:104px"><div class="top"><div class="label">${esc(k)}</div></div><div class="num" style="font-size:30px;color:${cls}">${v}</div></div>`;
    const filings=ad.suggestedFilings.map(f=>`<tr><td style="font-weight:600">${esc(f[0])}</td><td><span class="tag">${esc(f[1])}</span></td><td class="title-cell" style="max-width:420px;color:#475569">${esc(f[2])}</td></tr>`).join('');
    const sim=ad.similarMarks.map(m=>`<tr><td style="font-weight:600">${esc(m[0])}</td><td><span class="tag">${esc(m[1])}</span></td><td class="muted">${esc(m[2])}</td><td class="assignee">${esc(m[3])}</td><td class="muted">${esc(m[4])}</td></tr>`).join('');
    body=`<div class="grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:22px">
      ${tmStat('Total Records',tp.total,'#18181b')}
      ${tmStat('Live Marks',tp.live,'#059669')}
      ${tmStat('Expired',tp.expired,'#b45309')}
      ${tmStat('Ended / Cancelled',tp.ended,'#dc2626')}
    </div>
    <div class="aud-cols">
      <div class="aud-gaps" style="flex:1.2">
        <h3 class="gaps-h">${svg(I.shield,15)} Trademark Gaps</h3>
        ${t.buckets.map(g=>`<div class="gapcard"><span class="sevbar" style="background:${SEV[g.sev]}"></span><div><div class="gap-title">${esc(g.title)}</div><div class="gap-why">${esc(g.items)}</div></div></div>`).join('')}
      </div>
      <div class="card aud-steps">
        <h3>Recommended Next Steps</h3>
        <ol>${t.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>
      </div>
    </div>

    <details class="aud-acc" open><summary>${svg(I.plus,14)} Suggested New Filings · ${ad.suggestedFilings.length} marks</summary>
      <div class="tbl-scroll"><table><thead><tr><th>Trademark</th><th>Suggested Class</th><th>Suggested Country</th></tr></thead><tbody>${filings}</tbody></table></div>
    </details>

    <details class="aud-acc"><summary>${svg(I.alert,14)} Similar Marks by Others — potential conflicts · ${ad.similarMarks.length}</summary>
      <div class="tbl-scroll"><table><thead><tr><th>Infringing Mark</th><th>Class</th><th>Application No.</th><th>Owner</th><th>Country</th></tr></thead><tbody>${sim}</tbody></table></div>
    </details>`;
  }
  else {
    const pl=a.plan;
    body=`<div class="plan-top">
      <div class="card plan-big"><div class="pb-k">Yearly Investment</div><div class="pb-v">${esc(pl.yearly)}</div><div class="muted" style="font-size:12px">incl. govt fees estimate</div></div>
      <div class="card plan-big"><div class="pb-k">Monthly Retainer</div><div class="pb-v">${esc(pl.monthly)}</div><div class="muted" style="font-size:12px">excl. govt fees</div></div>
    </div>
    <div class="reassure">${pl.reassurances.map(r=>`<div class="card rcard">${svg(I.check,18)}<div><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div></div>`).join('')}</div>
    <div class="card section" style="margin-top:20px">
      <div class="section-head"><div><h2>Sample Year</h2><div class="sub">Illustrative engagement</div></div></div>
      <div class="tbl-scroll"><table><thead><tr><th>Activity</th><th>Bifurcation</th><th style="text-align:right">Total</th></tr></thead>
        <tbody>${pl.table.map(r=>`<tr><td>${esc(r[0])}</td><td class="muted">${esc(r[1])}</td><td style="text-align:right;font-weight:600">${esc(r[2])}</td></tr>`).join('')}
        <tr><td style="font-weight:700">Yearly Investment</td><td></td><td style="text-align:right;font-weight:800;color:var(--gold-deep)">${esc(pl.tableTotal)}</td></tr></tbody></table></div>
    </div>
    <details class="plan-details"><summary>View per-unit pricing</summary>
      ${pl.lineItems.map(li=>`<div class="li-row"><div><b>${esc(li[0])}</b>${li[2]?`<div class="muted" style="font-size:12.5px;margin-top:3px">${esc(li[2])}</div>`:''}</div><div class="li-price">${esc(li[1])}</div></div>`).join('')}
    </details>
    <div class="plan-note">${svg(I.alert,14)} ${esc(pl.note)}</div>`;
  }

  return `
  <div class="aud-bar"><a class="back" href="#/clients">${svg(I.back,16)} Clients</a></div>
  <div class="page-head">
    <div>
      <h1>Lapmaster Wolters</h1>
      <div class="sub">IP Audit · Portfolio Health Review</div>
    </div>
    <div class="head-right">
      <div class="health health-${a.health<60?'amber':'green'}">
        <div class="ring" style="background:conic-gradient(${a.health<60?'#f59e0b':'#10b981'} ${a.health*3.6}deg,#eef0f3 0)"><span>${a.health}</span></div>
        <div><div class="h-k">Portfolio Health</div><div class="h-v">${esc(a.verdict)}</div></div>
      </div>
    </div>
  </div>
  <div class="grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:24px">${hero}</div>
  <div class="aud-tabs">${tabs}</div>
  <div class="aud-body">${body}</div>`;
}
function wireAudit(){
  document.querySelectorAll('.aud-tabs button[data-atab]').forEach(b=>b.onclick=()=>{state.audit.tab=b.dataset.atab;rerender();});
}

/* ============================================================
   ROUTER
   ============================================================ */
const ROUTES={
  '':          {view:viewOverview, wire:wireOverview},
  'patents':   {view:viewLapPatents, wire:wireLapPatents},
  'trademarks':{view:viewLapTrademarks},
  'tm-filings':{view:viewTmFilings, wire:wireTmFilings},
  'renewals':  {view:viewRenewals},
  'due-dates': {view:viewDeadlines,  wire:wireDeadlines},
  'approvals': {view:viewApprovals},
  'ideas':     {view:viewSubmitIdea, wire:wireSubmitIdea},
  'investment':{view:viewInvestment},
  'settings':  {view:viewSettings},
  'audit':     {view:viewOverview},
};
function currentRoute(){
  const h=location.hash.replace(/^#\/?/,'').split('?')[0];
  return ROUTES[h]?h:(h===''?'':'');
}
function rerender(keepFocus){
  const route=currentRoute();const def=ROUTES[route]||ROUTES[''];
  const main=$('#main');
  const active=document.activeElement;
  const focusQ=keepFocus&&active&&active.matches('[data-q]');
  const caret=focusQ?active.selectionStart:null;
  main.innerHTML=def.view();
  def.wire&&def.wire();
  if(focusQ){const q=$('[data-q]');if(q){q.focus();if(caret!=null)q.setSelectionRange(caret,caret);}}
}
function route(){
  const r=currentRoute();
  document.title='Photon Pulse';
  $('#sidebar-mount').innerHTML=renderSidebar(r);
  rerender();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
window.addEventListener('DOMContentLoaded',()=>{
  if(!location.hash)location.replace('#/');
  route();
});
