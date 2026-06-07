/* ============================================================
   Photon Legal — sample datasets (recreated from live product)
   ============================================================ */
const PALETTE = ['#3b82f6','#10b981','#f59e0b','#8b5cf6','#6366f1','#ef4444','#0ea5e9','#14b8a6','#f43f5e','#a855f7'];
const colorFor = (s)=>{let h=0;for(let i=0;i<s.length;i++)h=s.charCodeAt(i)+((h<<5)-h);return PALETTE[Math.abs(h)%PALETTE.length];};
const initials = (s)=>s.replace(/[^a-zA-Z0-9 ]/g,'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0].toUpperCase()).join('')||'?';

/* ---------------- PATENTS ---------------- */
const PATENT_SEED = [
  {no:'US123456789', linked:true, title:'Test Idea yagna', assignee:'', prn:'-', tag:'', filed:'2026-05-28', country:'IN', status:'Active – Applied'},
  {no:'19/685,730', linked:true, title:'METHOD AND SYSTEM FOR CONTEXT-AWARE IDENTIFICATION OF SELECTORS FOR USER INTERFACE ELEMENTS IN AUTOMATION WORKFLOW', assignee:'Automation Anywhere', prn:'4924', tag:'Ai Adjacent', filed:'2026-05-22', country:'US', status:'Active – Applied'},
  {no:'PCT/US26/28193', linked:false, title:'SYSTEMS AND METHODS FOR INCIDENT AND SERVICE MANAGEMENT', assignee:'Automation Anywhere', prn:'5010', tag:'AI', filed:'2026-05-14', country:'PCT', status:'Active – Applied'},
  {no:'19/667,844', linked:false, title:'RETRIEVAL-AUGMENTED GENERATION PIPELINE WITH CENTRALIZED ORCHESTRATION AND VERSIONED ARTIFACT SELECTION', assignee:'Automation Anywhere', prn:'5009', tag:'AI', filed:'2026-05-05', country:'US', status:'Active – Applied'},
  {no:'19/657,867', linked:true, title:'SEMANTIC FRAMEWORK FOR USER INTERFACE AUTOMATION', assignee:'AUTOMATION ANYWHERE INC (US)', prn:'4665', tag:'AI Adjacent', filed:'2026-04-24', country:'US', status:'Active – Applied'},
  {no:'19/657,356', linked:true, title:'METHOD AND SYSTEM FOR AUTOMATICALLY GENERATING AND RENDERING A WIDGET ON A PERSONALIZED ANALYTICS DASHBOARD BASED ON RECURRING NATURAL LANGUAGE REQUESTS', assignee:'Automation Anywhere', prn:'4894', tag:'AI Adjacent', filed:'2026-04-24', country:'US', status:'Active – Applied'},
  {no:'19/657,599', linked:true, title:'SYSTEM AND METHOD FOR DETECTING PERFORMANCE DEGRADATION IN DEPLOYED ARTIFICIAL INTELLIGENCE MODELS', assignee:'AUTOMATION ANYWHERE INC (US)', prn:'4874', tag:'AI', filed:'2026-04-24', country:'US', status:'Active – Applied'},
  {no:'19/650,665', linked:true, title:'FROM SCHEMA-LESS ITSM DATA TO SALES-READY INTELLIGENCE: AN APPLIED AI SYSTEM FOR THEME DISCOVERY, AUTOMATION SCORING, AND EXECUTIVE REPORTING', assignee:'Automation Anywhere', prn:'4880', tag:'AI', filed:'2026-04-17', country:'US', status:'Active – Applied'},
  {no:'19/649,373', linked:false, title:'METHOD AND SYSTEM FOR AI-ASSISTED SEARCH FOR PRE-EXISTING AUTOMATION PROCESSES', assignee:'AUTOMATION ANYWHERE INC (US)', prn:'4641', tag:'AI', filed:'2026-04-16', country:'US', status:'Active – Applied'},
  {no:'26387047.9', linked:false, title:'RETRIEVAL-AUGMENTED GENERATION PIPELINE WITH CENTRALIZED ORCHESTRATION AND VERSIONED ARTIFACT SELECTION', assignee:'Automation Anywhere', prn:'4867', tag:'AI', filed:'2026-04-09', country:'GR', status:'Active – Applied'},
];
const PT_TITLES = ['SYSTEM AND METHOD FOR ADAPTIVE WORKFLOW ORCHESTRATION','APPARATUS FOR SECURE MULTI-TENANT DATA ISOLATION','MACHINE LEARNING PIPELINE FOR ANOMALY DETECTION IN TELEMETRY','METHOD FOR DYNAMIC RESOURCE ALLOCATION IN DISTRIBUTED SYSTEMS','GRAPH-BASED ENTITY RESOLUTION FOR ENTERPRISE KNOWLEDGE','REAL-TIME PRINT QUEUE OPTIMIZATION USING SENSOR FUSION','CLOSED-LOOP MAINTENANCE PREDICTION FOR INDUSTRIAL DEVICES','NATURAL LANGUAGE INTERFACE FOR ANALYTICS DASHBOARDS','AUTOMATED COMPLIANCE MONITORING AND REPORTING ENGINE','EDGE-DEPLOYED INFERENCE WITH MODEL VERSION CONTROL'];
const PT_ASSIGNEE = ['Automation Anywhere','NETGEAR INC (US)','SIMPLISAFE INC (US)','COHERENT INC (US)','ENTEFY INC (US)','6SENSE INSIGHTS INC','HYUNDAI MOTOR CO LTD (KR)','ELECTRONICS FOR IMAGING INC','GRABTAXI HOLDINGS PTE LTD (SG)','INMOBI PTE LTD (IN)'];
const PT_COUNTRY = ['US','IN','PCT','GR','EP','JP','KR','SG','CA','DE'];
const PT_STATUS = ['Active – Applied','Granted','Pending','Abandoned'];
const PT_TAGS = ['AI','AI Adjacent','Hardware','SaaS','Networking',''];
const PATENTS = [...PATENT_SEED];
for(let i=0;i<70;i++){
  const y=2026,m=((i*3)%12)+1,d=((i*7)%27)+1;
  PATENTS.push({
    no:`${17+(i%4)}/${String(100000+i*137).slice(0,3)},${String(100+i*7).slice(-3)}`,
    linked:i%5===0,
    title:PT_TITLES[i%PT_TITLES.length],
    assignee:PT_ASSIGNEE[i%PT_ASSIGNEE.length],
    prn:String(4000+i*13),
    tag:PT_TAGS[i%PT_TAGS.length],
    filed:`${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`,
    country:PT_COUNTRY[i%PT_COUNTRY.length],
    status:PT_STATUS[i%PT_STATUS.length]
  });
}

/* ---------------- IDEAS ---------------- */
const IDEA_SEED = [
  ['Double-Sided Print Registration via Reused Redirect Roller Creating a Sensor Gap',7.7],
  ['Remotely-Manipulable, Roadmap-Intelligent Print-Queue Management',8.2],
  ['Multi-Roll Media Hold Configuration with Cradle',8.2],
  ['Automated Cross-Platform Feature-Scaling Method for Porting Capabilities Between Machine Sizes',7.8],
  ['Remote External Vacuum/Blower System with Dual-Path Manifold and Gate-Valve Switching',7.2],
  ['Onboard Printer-Embedded, Alarm-Triggered Closed-Loop Resolution Assistant',8.3],
  ['Adaptive Sensor-Telemetry Sampling with Condition-Based Triggers',8.2],
  ['Multi-Sensor Predictive Maintenance Engine with Closed-Loop Action and Printhead Lifecycle Tracking',8.2],
  ['Per-Job, Per-Color Drop-Level Ink Consumption Metering from Print-Electronics Firing Records',8.4],
  ['Closed-Loop Ink Authenticity and Quality Assurance via QR, Consumption, and Tank Reconciliation',8.0],
];
const IDEA_EXTRA = ['Self-Calibrating Color Profile Generation for Variable Substrates','Predictive Nozzle Health Scoring with Auto-Recovery','Distributed Firmware Rollout with Staged Canary Validation','Context-Aware Job Routing Across Heterogeneous Fleets','Energy-Optimized Drying Curve Estimation','Vision-Guided Media Alignment Correction','Tamper-Evident Consumable Authentication Protocol','Adaptive Halftoning for Low-Cost Substrates','Real-Time Defect Classification on the Print Web','Cloud-Synced Maintenance Scheduling with SLA Awareness'];
const IDEA_STATUS = [['Sent by IP Committee','b-green'],['Under Review','b-amber'],['Drafting','b-blue'],['Filed','b-green'],['On Hold','b-gray']];
const IDEAS = [];
IDEA_SEED.forEach((r,i)=>IDEAS.push({title:r[0],client:'abc@efi.com',status:IDEA_STATUS[0],submitted:'Jun 4, 2026',score:r[1],updated:'Jun 4, 2026'}));
for(let i=0;i<45;i++){
  const st=IDEA_STATUS[i%IDEA_STATUS.length];
  IDEAS.push({title:IDEA_EXTRA[i%IDEA_EXTRA.length],client:['abc@efi.com','info@glance.com','ip@coherent.com','legal@netgear.com'][i%4],status:st,submitted:`May ${((i*3)%27)+1}, 2026`,score:(6.5+((i*0.13)%2.8)).toFixed(1),updated:`Jun ${((i)%28)+1}, 2026`});
}

/* ---------------- CLIENTS ---------------- */
const CLIENT_SEED = [
  ['Lapmaster Wolters',317,'Jun 6, 2026','Existing'],
  ['6sense',167,'Oct 14, 2025','Existing'],['8x8',98,'Feb 6, 2026','Potential'],['Adopt AI Inc.',2,'Jul 9, 2025','Existing'],
  ['Adster',2,'Jul 9, 2025','Existing'],['AjnaLens',38,'Jul 24, 2025','Potential'],['Asper',16,'Jul 3, 2025','Existing'],
  ['Atomberg',58,'Jul 10, 2025','Potential'],['Augnito',1,'Sep 8, 2025','Potential'],['Automation Anywhere',155,'Mar 20, 2026','Existing'],
];
const CLIENT_EXTRA = ['Cargill','Coherent','ColorTokens','Cybric','Electronics For Imaging','Entefy','Glance','GrabTaxi','Harness','HyperVerge','Hyundai Motor','InMobi','Kia Motors','Knorr Bremse','Kyndryl','Magic Leap','Motorola Solutions','NetGear','Panasonic','Simplisafe','Split Software','Traceable','Turtle Shell Tech','Ultrahuman','Yield Engineering','ZeroNorth','Aisera','Archion','SMR Patents','6Sense Insights'];
const CLIENTS = [...CLIENT_SEED.map(c=>({name:c[0],patents:c[1],updated:c[2],type:c[3]}))];
CLIENT_EXTRA.forEach((n,i)=>CLIENTS.push({name:n,patents:[2,16,38,58,98,155,167,1,12,44,77][i%11],updated:`${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i%12]} ${((i*3)%27)+1}, 2025`,type:i%3===1?'Potential':'Existing'}));

/* ---------------- DUE DATES ---------------- */
const DD_EVENTS = ['National Phase Deadline (30m)','Next Annual Maintenance Fee Due','Final Response to Office Action','3 1/2 Year Maintenance Fee Window Open','7 1/2 Year Maintenance Fee Due','Respond to Office Action - CTNF','Renewal','File Reply to FER','11 1/2 Year Maintenance Fee Grace Period'];
const DD_CLIENTS = ['6SENSE INSIGHTS INC','AUTOMATION ANYWHERE','SIMPLISAFE INC','NETGEAR INC','COHERENT INC','INMOBI PTE LTD','HYUNDAI MOTOR CO LTD'];
const DUEDATES = [];
const DD_SEED = [
  ['National Phase Deadline (30m)','PCT/US2022/035159','6SENSE INSIGHTS INC','Jan 12, 2023'],
  ['Next Annual Maintenance Fee Due','2020-542804','6SENSE INSIGHTS INC','Jan 1, 2024'],
  ['National Phase Deadline (30m)','PCT/US2022/051656','6SENSE INSIGHTS INC','Mar 6, 2024'],
  ['National Phase Deadline (30m)','PCT/US2023/020854','6SENSE INSIGHTS INC','Mar 11, 2024'],
  ['National Phase Deadline (30m)','PCT/US2023/020856','6SENSE INSIGHTS INC','Mar 11, 2024'],
  ['National Phase Deadline (30m)','PCT/US2022/051856','6SENSE INSIGHTS INC','Jun 6, 2024'],
  ['National Phase Deadline (30m)','PCT/US2023/021893','6SENSE INSIGHTS INC','Dec 11, 2024'],
  ['National Phase Deadline (30m)','PCT/US2022/035164','6SENSE INSIGHTS INC','Dec 27, 2024'],
  ['Next Annual Maintenance Fee Due','2021-180904','6SENSE INSIGHTS INC','Jan 1, 2025'],
  ['Final Response to Office Action','18/073,807','6SENSE INSIGHTS INC','Feb 7, 2025'],
];
DD_SEED.forEach(r=>DUEDATES.push({event:r[0],appno:r[1],client:r[2],due:r[3],status:'Active'}));
for(let i=0;i<60;i++){
  DUEDATES.push({event:DD_EVENTS[i%DD_EVENTS.length],appno:`PCT/US20${22+(i%4)}/0${String(20000+i*131).slice(0,5)}`,client:DD_CLIENTS[i%DD_CLIENTS.length],due:`${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i%12]} ${((i*5)%27)+1}, 2025`,status:'Active'});
}

/* ---------------- ACTIONS ---------------- */
const ACTIONS = [
  ['US17855760','Demo','Final Response to Office Action','Jul 7, 2025','Overdue','Instruct OC: File final response now','photongpt@gmail.com','a month ago','New'],
  ['19/090,387','Automation Anywhere','Foreign Filing/PCT direct filing for this application Final due date','Mar 25, 2026','Done','No foreign filing','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['16/398,532','Automation Anywhere','3 1/2 Year Maintenance Fee Window Open','Mar 28, 2026','Done','No action','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['GB2117167.3','Automation Anywhere','3 1/2 Year Maintenance Fee Window Open','Apr 12, 2026','Done','Instruct OC: Prepare to pay 3 1/2 year maintenance fee','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['16/724,308','Automation Anywhere','3 1/2 Year Maintenance Fee Due','Apr 22, 2026','Done','Instruct OC: Pay 3 1/2 year maintenance fee','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['16/724,308','Automation Anywhere','3 1/2 Year Maintenance Fee Due','Apr 27, 2026','Done','Instruct OC: Pay 3 1/2 year maintenance fee','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['19/194,857','Automation Anywhere','Foreign Filing/PCT direct filing for this application Final due date','Apr 30, 2026','Done','No foreign filing','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['US18604001','Kyndryl','Respond to Office Action - NOA','May 4, 2026','Overdue','Instruct OC: File response','abc@kyndryl.com','a month ago','New'],
  ['18/489,358','Glance','Final Response to Office Action','May 7, 2026','Overdue','Instruct OC: File final response now','info@glance.com','a month ago','New'],
  ['15/897,236','Automation Anywhere','7 1/2 Year Maintenance Fee Due','May 13, 2026','Done','Instruct OC: Pay 7 1/2 year maintenance fee','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['14/939,715','Automation Anywhere','7 1/2 Year Maintenance Fee Window Open','May 14, 2026','Done','No action','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['19/214,996','Automation Anywhere','Foreign Filing/PCT direct filing for this application Final due date','May 21, 2026','Done','Instruct OC: File PCT (final)','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['19/034,538','Automation Anywhere','File request for redacted publication','May 22, 2026','Done','No action','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['16/859,488','Automation Anywhere','3 1/2 Year Maintenance Fee Due','May 29, 2026','Done','Instruct OC: Pay 3 1/2 year maintenance fee','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['19/040,847','Automation Anywhere','File request for redacted publication','May 29, 2026','Done','No action','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['16/779,117','Automation Anywhere','3 1/2 Year Maintenance Fee Due','May 29, 2026','Done','Instruct OC: Pay 3 1/2 year maintenance fee','amit.koshal@tmphoton.com','9 days ago','Completed'],
  ['2731/CHE/2014','Glance','Renewal','Jun 4, 2026','Overdue','Instruct OC: Pay/process renewal','info@glance.com','a month ago','New'],
].map(r=>({appno:r[0],client:r[1],event:r[2],deadline:r[3],days:r[4],action:r[5],by:r[6],ago:r[7],reqstatus:r[8]}));

/* ---------------- WORKSPACE ---------------- */
const ADMINS = ['prateek@photonlegal.com','asavari.mathur@photonlegal.com','photon.corp@photonlegal.com','anisha.kapoor@photonlegal.com','surender.verma@photonlegal.com','vaishnavi.joshi@photonlegal.com','sanjeevani.patil@photonlegal.com','yagna@photonlegal.com','prayank.khandelwal@photonlegal.com','amit.koshal@photonlegal.com','developer@photonlegal.com','photon.ip@photonlegal.com','nirmay.meshram@photonlegal.com','shivang.khandelwal@photonlegal.com','karishma.mehndiratta@photonlegal.com','shruhita@photonlegal.com','aamir.hussain@photonlegal.com','shreshth.tyagi@photonlegal.com','tanmay.bhanushali@photonlegal.com'];

/* ---------------- LAPMASTER WOLTERS — IP AUDIT ---------------- */
const AUDIT = {
  client:'Lapmaster Wolters',
  health:52,            // 0-100
  verdict:'Needs attention',
  hero:[
    {k:'Inactive Portfolio',v:'48%',sub:'164 active / 153 dead',tone:'red',delta:'▲ 2 pts since last review',dtone:'red'},
    {k:'Value at Risk',v:'$4.6M',sub:'sunk in dead patents',tone:'red',delta:'▲ $0.3M vs prior',dtone:'red'},
    {k:'Open Coverage Gaps',v:'12',sub:'patents + trademarks',tone:'amber',delta:'▼ 3 resolved',dtone:'green'},
    {k:'Avg. Grant Time',v:'38 mo',sub:'across portfolio',tone:'gray',delta:'— flat vs prior',dtone:'gray'},
  ],
  decisions:[
    {sev:'red',title:'153 dead patents',scope:'Prune vs. revive',why:'Bleeding annuities on lapsed value — $4.6M sunk.',cta:'Decide'},
    {sev:'red',title:'Refile POWERSEMI',scope:'US · EUIPO · WIPO · China',why:'Active semiconductor product brand, currently unprotected in core markets.',cta:'Approve · $'},
    {sev:'red',title:'50 abandoned (non-payment)',scope:'Reinstate or release',why:'32.7% of inactive records lapsed purely from missed fees.',cta:'Decide'},
    {sev:'amber',title:'Service-class trademark gaps',scope:'Classes 37 & 42 · US/EU/India',why:'You sell installation & technical services but don’t own the marks for them.',cta:'Review'},
    {sev:'amber',title:'Refile S logo (house mark)',scope:'EUIPO · UK · Japan',why:'Lapse leaves the company with no registered device-mark in major markets.',cta:'Approve · $'},
    {sev:'amber',title:'Extend LAPMASTER WOLTERS to Asia',scope:'CN · JP · KR · TW · IN · SG · BR',why:'Combined brand filed internationally, but key Asian markets are absent.',cta:'Approve · $'},
    {sev:'blue',title:'Confirm assignment recordals',scope:'Predecessor & subsidiary entities',why:'Post-M&A ownership may still sit in old entity names — group control at risk.',cta:'Review'},
  ],
  patents:{
    snapshot:[
      ['Granted',113,'#10b981'],
      ['Pending',51,'#f59e0b'],
      ['Dead',153,'#ef4444'],
    ],
    detail:[['Under examination',16],['Examination yet to begin',20],['Notice of Allowance mailed',9],['WIPO patents',6]],
    total:317,
    gaps:[
      {sev:'red',title:'Portfolio health',why:'48.3% of records inactive; 50 lapsed from non-payment, weakening leverage in still-relevant machine, tool & process areas.'},
      {sev:'amber',title:'Closed-loop inspection-to-correction',why:'No cross-platform workflow turning inline inspection into automatic correction of pressure, feed, dressing, slurry & tool offsets — what customers actually buy for yield.'},
      {sev:'amber',title:'SiC & wafer process-integration',why:'No unified SiC control layer tracking wafer ID, tool state, consumable batch, grinding/CMP history & defect outcomes across stations.'},
      {sev:'amber',title:'Predictive maintenance & uptime',why:'No coverage for predicting failure from spindle load, vibration, acoustics, pad/wheel wear, wire tension & metrology drift — drives service revenue & retention.'},
      {sev:'amber',title:'Consumables intelligence',why:'Focused on mechanical consumable structures, not self-identifying pads, plates, carriers & slurries linking lot, usage history & measured finish.'},
    ],
  },
  trademarks:{
    buckets:[
      {sev:'red',title:'Lapsed / expired marks',items:'LAPMASTER · Peter Wolters · MICROLINE · POWERSEMI · NANO-series · S logo — gone across WIPO, EUIPO, Japan, Korea & national registries.'},
      {sev:'red',title:'Missing filings in key markets',items:'Lapmaster Wolters, PSS, ELB-KEHREN, ISOG Technology, TouchGrind — not filed in major markets (US, China, Japan, Korea, India, etc.).'},
      {sev:'amber',title:'Class coverage gaps',items:'Service classes 37 (install/repair) & 42 (technical consulting/R&D) missing where only Class 7 (machines) is registered.'},
      {sev:'blue',title:'Entity / ownership inconsistencies',items:'Marks held by predecessor or subsidiary entities post-restructuring — assignment / name-change recordals likely required.'},
    ],
    steps:[
      'Refile POWERSEMI / PowerSemi in US, EUIPO, WIPO & China (Cl. 7, 35, 40).',
      'Refile the S logo house mark in EUIPO, UK & Japan.',
      'Refile NANOEDGE, NANOGLAZE, NANOPLANE, NANOTOUCH via new EUIPO / WIPO applications.',
      'Extend LAPMASTER WOLTERS wordmark to China, Japan, Korea, Taiwan, India, Singapore & Brazil (Cl. 3, 7, 37, 42).',
      'Restore LAPMASTER wordmark in Benelux, France, Italy, Hong Kong, Japan & Argentina.',
      'Confirm assignment / ownership recordals for Peter Wolters GmbH, Elb-Schliff & LAPMASTER (M) SDN.BHD.',
    ],
  },
  plan:{
    yearly:'$310,990',
    monthly:'$15,500',
    reassurances:[
      ['Fixed fee per patent','No more per-hour attorney billing — one price per patent, per country.'],
      ['Money-back guarantee','Full refund if the patent is rejected in the US or Canada.'],
      ['Carry-forward','Unused filings roll to next year at no extra charge.'],
    ],
    lineItems:[
      ['New US patent','$14,800','Harvesting → search → drafting → filing → unlimited OAs & interviews → allowance. Incl. US lawyer fee.'],
      ['Pending patent transfer','$7,000 / patent / country','Unlimited office actions & interviews until allowed or rejected. Incl. US lawyer fee.'],
      ['Patent filing — other country','$9,800 / patent / country','Filing, unlimited office actions & disposal. Incl. foreign lawyer fee.'],
      ['PCT filing','$1,200 / application',''],
      ['Annuity & pruning advice','$230 / patent / country',''],
      ['FTO & landscape','$425 / hr',''],
    ],
    table:[
      ['10 New US Patents','10 × 14,800','$148,000'],
      ['10 PCT filings','10 × 1,200','$12,000'],
      ['Portfolio maintenance','113 × 230','$25,990'],
      ['Govt. fees (US & PCT)','estimate','~$125,000'],
    ],
    tableTotal:'~$310,990',
    note:'Min. commitment 8 new patents/year. 8% discount on a one-time annual retainer. Billable in USD or INR. Govt. fees not included above.',
  },
};

/* ---------------- LAPMASTER — INTERNAL DATABASES (from Notion sub-pages) ---------------- */
const AUDIT_DETAIL = {
  // 1. Current Status — patent register (representative rows; 317 total in source)
  registerTotal:317,
  register:[
    ['EP13812164.5','Wire Management System','ACTIVE-GRANTED','Precision Surface Solutions GmbH','Wire saw systems'],
    ['10201605952T','Casting ring-shaped plastic frame in rotor-disk recess','ACTIVE-GRANTED','Lapmaster Wolters GmbH','Rotor-disk / carrier mfg'],
    ['SG10201700919V','Double/one-side machining machine — thermal disk deformation','ACTIVE-GRANTED','Lapmaster Wolters GmbH','Dual-face lapping / polishing'],
    ['10202109415V','Double/one-side machining — pressure-fluid + thermal control','ACTIVE-GRANTED','Lapmaster Wolters GmbH','Working-disk deformation'],
    ['TW109146192','Rotor disk, double-sided processing machine','ACTIVE-APPLIED','Lapmaster Wolters GmbH','Rotor-disk consumable'],
    ['TW112113814','Double/one-side machine tool — multi-sensor monitoring','ACTIVE-APPLIED','Lapmaster Wolters GmbH','Sensor-based automation'],
    ['BR102019013861-0','Fine stamping press material handling','ACTIVE-GRANTED','Lapmaster Wolters GmbH','PSS fine-blanking'],
    ['BR102019026380-6','Fine Cutting Press — closed-loop force control','INACTIVE-NONPAYMENT','Lapmaster Wolters GmbH','PSS fine-blanking press'],
    ['BR102020006100-3','Method for operating a fine built-in system','INACTIVE-NONPAYMENT','Lapmaster Wolters GmbH','PSS fine-blanking press'],
    ['CN211440667U','Guide-roller rotating device (sealed) for multi-wire saw','ACTIVE-GRANTED','Lapmaster Wolters Shenyang','Wire saw accessory'],
    ['CN212044221U','Quick-change structure for polishing wheel','ACTIVE-GRANTED','Lapmaster Wolters Shenyang','Buffing / polishing wheel'],
    ['JP11157685','Ceramic mask of vacuum chuck','INACTIVE-REJECTED','Lapmaster SFT Corp','Wafer chuck / polishing head'],
    ['200910131283','Full-automatic 4-spindle semiconductor grinding device','INACTIVE-WITHDRAWN','Lapmaster SFT Corp','Auto wafer grinder'],
    ['10376270','Measuring method for semiconductor wafer','INACTIVE-EXPIRED','Lapmaster SFT Corp','Wafer metrology'],
  ],
  statusColor:(s)=>/GRANTED/.test(s)?'b-green':/APPLIED/.test(s)?'b-blue':'b-red',

  // 2. Feature Coverage — protected vs whitespace (16 product lines)
  featureCoverage:[
    {cat:'Lapping machines',prot:[
      'Grooved lapping disk working surface for liquid lapping-agent and loose-abrasive distribution',
      'Working-disk clamping, friction decoupling, pressure-fluid disk deformation, thermal-channel control, and working-gap control',
      'Fluid delivery into a double-side working gap through grouped bores and separately pressurized supply lines'],
     white:[
      'Consumable-aware closed-loop slurry feed and plate-conditioning control based on plate temperature, flatness drift, removal rate, abrasive media, and workpiece material',
      'Application-specific lapping recipe optimizer that converts material, abrasive, vehicle, plate speed, pressure, feed, conditioning state, and target flatness into a recommended process window',
      'Operator-guided setup workflow for non-standard workpieces that recommends plate type, abrasive, vehicle, conditioning-ring position, and feed schedule while excluding protected groove and disk-deformation structures']},
    {cat:'Fine grinding machines',prot:[
      'Through-type double-sided fine-grinding disc finishing device with adjustable installation and linear guide structure',
      'Working-gap temperature control and working-gap form adjustment for double-side wafer or part grinding',
      'Optical in-process thickness measurement through working-disk openings',
      'Pressure-fluid deformation and thermal control of working disks'],
     white:[
      'Diamond and CBN wheel life estimator that recommends dressing intervals based on wheel type, workpiece material, load, spindle data, temperature, finish drift, and removal-rate trend',
      'Coolant and swarf-control process method that adjusts coolant flow, filtration, dressing state, and wheel selection based on material family and target finish',
      'Fine-grinding process-window predictor that correlates force, spindle load, temperature, wheel condition, and historical metrology to flatness, parallelism, surface finish, and size tolerance']},
    {cat:'Polishing machines and CMP',prot:[
      'Closed-loop platen cooling and chilled-slurry delivery for aggressive semiconductor wafer CMP',
      'Semiconductor polishing-head structures using airbag or compliant alignment arrangements',
      'Single-face and double-sided polishing-disc dressing or trimming devices',
      'Quick-change polishing-wheel connector structures',
      'Double-sided polishing feeding and clamp-guide mechanisms'],
     white:[
      'Pad-condition endpoint control using friction, torque, slurry temperature, pad age, pad wear, and surface-finish trend while excluding protected chilled-slurry and platen-cooling architecture',
      'Polishing media selection engine that maps material, pressure, plate speed, abrasive or pad type, vehicle, feed system, and plate temperature to finish and flatness targets',
      'Predictive polishing-head calibration workflow using pressure-chamber response, head compliance, wafer edge exclusion, and removal-rate uniformity']},
    {cat:'Single wafer, SiC, NanoEdge & wafer edge grinding',prot:[
      'Wafer edge grinding with wafer chuck, grinding wheel, and in situ dressing of the grinding rim',
      'Rotary-indexing wafer processing machine with multiple grinding stations and auxiliary workstations',
      'Multi-spindle automatic wafer grinding with transfer and temporary placement stages',
      'Laser-based wafer peripheral-edge profiling',
      'Wafer regeneration for multilayer-film or patterned wafers using cutting, fly-cutting, or honing/grinding operations'],
     white:[
      'SiC-specific cross-process recipe control for grinding, polishing, and CMP that tracks wafer ID, tool state, consumable batch, metrology history, and defect outcomes across lots',
      'NanoEdge inspection and correction loop using edge chipping, bevel geometry, post-grind metrology, wheel condition, and dressing history to adjust edge-grinding parameters',
      'Remanufactured wafer-processing equipment calibration method that normalizes legacy tool performance to current process recipes, metrology limits, and wafer-quality acceptance criteria']},
    {cat:'Dual-face & double-sided machines',prot:[
      'Working-gap regulation using disk deformation, pressure-fluid actuation, distance measurement, and parallelism determination',
      'Machine-base foot sensors and drive-shaft alignment sensors for monitoring disk or shaft alignment',
      'Sensor-driven state-vector comparison for machine condition or process-state evaluation',
      'Optical in-process thickness measurement with control-based stop logic',
      'Carrier or rotor-disk improvements, including surface-property control and cast plastic-frame structures',
      'Warm-up and processing-fluid delivery methods for double-side working gaps'],
     white:[
      'Recipe-aware production-cell control for double-sided machines that coordinates carrier loading, unloading, consumable state, lot priority, recipe selection, and metrology targets while avoiding protected feed, clamp, and working-gap mechanisms',
      'SPC integration layer that links routine storage, operator prompts, pressure history, thickness data, consumable lots, and final metrology to process capability dashboards',
      'Service and authorization workflow for double-sided machines that controls recipe release based on machine state, guard status, consumable identity, maintenance history, and operator authorization']},
    {cat:'Wire saw & wafer slicing systems',prot:[
      'Wire management using reservoir and storage spools with controlled winding density',
      'Releasable wire-guide roller mounting structures',
      'Wire saw housing with separated cutting and wire-spool compartments and accessible cutting-wire path',
      'Multi-wire saw layout with cutting room, wire storage room, cooling cycle, electric cabinet, wire device, guide wheel, guide roller, seal, and feed-plate structures',
      'Wire-saw operation using reduced maximum power assigned to saw wire drives'],
     white:[
      'In-process kerf, bow, wire-wear, and wafer-breakage prediction using vibration, acoustic, motor-current, wire-tension, coolant, and post-cut metrology data while excluding protected reduced-power operation',
      'Cut-plan optimizer for SiC, sapphire, quartz, silicon, and special materials that balances kerf loss, wire consumption, coolant condition, slicing time, and target wafer thickness distribution',
      'Sensorized retrofit kit for older annular saws and wire saws with standardized motor, wire-tension, coolant, vibration, and metrology modules']},
    {cat:'Optical pitch polishing machines',prot:[
      'No active portfolio claim family directly mapped to the air-bearing optical pitch polisher, granite support plate, tripod base, belt-drive bearing layout, or pitch-trimming bar configuration',
      'Adjacent polishing claims may apply if the machine uses protected quick-change, disc-dressing, feeding, or cooling structures'],
     white:[
      'Air-film pressure sensing and closed-loop air-bearing control for pitch-lap stability, vibration suppression, and plano-optics flatness',
      'Thermal compensation model using granite support temperature, slurry temperature, room temperature, polishing duration, and measured optical flatness drift',
      'Automated pitch trimming and workholder-ring oscillation optimization for plano optics flatness, finish, and process repeatability']},
    {cat:'Single-sided thru-feed grinding machines',prot:[
      'No active portfolio claim family directly mapped to the continuous conveyor-fed single-sided thru-feed arrangement as marketed',
      'Adjacent fine-grinding and double-side control claims may apply if the thru-feed product uses protected disc finishing, disk deformation, or in-process measurement features'],
     white:[
      'Adaptive conveyor-speed, wheel-load, coolant-flow, and part-spacing control tied to inline surface and thickness measurement',
      'Vision-assisted part classification, reject/divert control, and recipe changeover for mixed-part thru-feed grinding',
      'Throughput optimization method that maximizes grinding time while controlling thermal load, wheel wear, coolant state, and dimensional drift']},
    {cat:'Buffing machines',prot:[
      'Quick-change wheel structures may cover analogous buffing-wheel mounting if implemented',
      'No active portfolio claim family directly mapped to multi-spindle ID/OD buffing or multi-axis deep-buffing toolpath control'],
     white:[
      'Synchronized multi-spindle ID/OD buffing with tool-wear compensation, adaptive spindle-load balancing, and surface-finish feedback',
      'Multi-axis deep-buffing toolpath generation from measured bore or outer-diameter geometry and tool-compliance model',
      'Buffing media identification and life tracking linked to speed, compound, force, cycle count, and finish outcome']},
    {cat:'Automation and loading systems',prot:[
      'Double-sided polishing feeding and clamp-guide mechanisms',
      'Automatic wafer grinding and wafer processing station architecture',
      'Wire saw feed-plate and machine-layout structures',
      'Rotor-disk plastic-frame casting device and method for double-sided machining machines',
      'Grinding-wheel and dressing-tool changer architecture for grinding machines',
      'Robotic or magazine-based workpiece and tool handling structures, with some families inactive and more relevant as legacy disclosure than active protection'],
     white:[
      'Cross-platform modular automation kit with common mechanical, electrical, safety, and software interfaces across lapping, fine grinding, polishing, flat honing, deburring, and CNC grinding machines',
      'Recipe-aware robot and loader scheduler using machine availability, consumable state, lot priority, metrology targets, and operator authorization for automated cell control',
      'Automation-module auto-validation routine that checks gripper, carrier, guard, interlock, tool, consumable, workpiece geometry, and recipe compatibility before production release while avoiding protected tool-changing structures']},
    {cat:'Special purpose machines & turnkey systems',prot:[
      'Grinding-center axis compensation using probes on the grinding head and workpiece table',
      'Configurable double-side or one-side machine controls involving disk deformation, alignment sensing, drive-shaft monitoring, or sensor-based state evaluation',
      'Specific custom architectures for wafer grinding, wafer regeneration, wire saws, polishing, and fine blanking systems',
      'Grinding-device spindle modules with independently movable dressing and tool-changing components',
      'Combined grinding and milling machine structures, hydrostatic clamping arrangements, coolant nozzle carrier structures, magnetic-table cleaning devices, and machine-accessory systems for CNC grinding platforms'],
     white:[
      'Modular retrofit architecture for bespoke handling, conveyor feed, metrology, deburring, and finishing cells using standardized I/O, safety, calibration, and validation routines while excluding protected grinding-spindle, tool-changing, coolant-carrier, and clamping structures',
      'Remote commissioning and acceptance-test workflow that validates precision surfacing performance using machine telemetry, metrology data, and customer tolerance limits',
      'Engineering configuration workflow that converts part geometry, material, tolerance, throughput, footprint, and consumable constraints into a validated machine cell and process recipe']},
    {cat:'Consumables, carriers, wheels, plates, slurries, pads, dressing',prot:[
      'Grooved lapping disks for abrasive and liquid distribution',
      'Carrier disks having defined surface wetting/contact-angle characteristics',
      'Cast plastic-frame structures for rotor or carrier disks',
      'Quick-change polishing-wheel structures',
      'Polishing and fine-grinding disc dressing or finishing mechanisms'],
     white:[
      'Consumable batch traceability system linking lot chemistry, abrasive type, wheel or pad life, dressing history, flatness, surface finish, and recommended machine settings',
      'Self-identifying carrier, wheel, pad, plate, or slurry container with embedded data carrier for recipe compatibility, usage history, and service lockout',
      'Material-specific consumable recommendation engine that selects abrasive powder, slurry, vehicle, lubricant, pad, dressing stick, and composite plate based on material, finish, flatness, and throughput targets']},
    {cat:'Service, retrofit, remanufacturing & metrology services',prot:[
      'No active portfolio claim family mapped to a standalone service business method',
      'Service and retrofit work may be covered when it installs or operates protected hardware or protected control methods'],
     white:[
      'Sensorized retrofit package for older saws, lappers, grinders, and polishers with calibration workflow, remote diagnostics, predictive maintenance, and metrology-based acceptance testing',
      'Metrology-linked service workflow that converts pre-job and post-job measurements into recommended consumables, plate conditioning, machine settings, and maintenance actions',
      'Remanufactured equipment acceptance-test method that benchmarks restored tool performance against digital factory recipes, historical machine baselines, and wafer or part quality limits']},
    {cat:'Surface/profile, creep-feed & CNC grinding centers',prot:[
      'Grinding-center axis compensation using touch probes and a control unit',
      'Tool-grinding spindle architecture with wobble compensation and radial spindle-axis displacement',
      'Coolant nozzle carrier surrounding or positioned relative to a grinding disc',
      'Hydrostatic clamping for steady-rest or support fixation',
      'Magnetic-plate cleaning for grinding machines',
      'Grinding-device spindle modules with independently movable dresser and tool changer',
      'Machine-table illumination and operator-visibility features'],
     white:[
      'Closed-loop import of external metrology into surface/profile and creep-feed grinding compensation across multiple machine models and part families, excluding protected probe-based axis compensation and specific spindle-module structures',
      'Multi-axis grinding cell calibration using probe health, thermal drift, spindle load, wheel wear, and measured part error to update compensation logic and path offsets while avoiding protected spindle-displacement and tool-changing mechanisms',
      'Process-selection engine that recommends machine type, grinding mode, probe strategy, wheel, dressing method, coolant strategy, and compensation workflow from part geometry and tolerance stack']},
    {cat:'Bore honing and finishing',prot:[
      'No active honing-specific claim family identified in the active uploaded portfolio',
      'Legacy published disclosures exist around releasable tool bodies, fluid-actuated abrasive expansion, and integral air-gage arrangements, so those features should not be presented as new'],
     white:[
      'Smart honing head with position sensing, electronic through-coolant actuation, and closed-loop bore-geometry correction, only when materially distinguished from legacy honing disclosures',
      'Quick-change honing cartridge with digital tool ID, abrasive wear history, bore-size recipe loading, and service-life tracking',
      'In-process bore-finish prediction using spindle load, fluid pressure, abrasive expansion position, air-gage feedback, and final bore metrology']},
    {cat:'Fine blanking and stamping press systems',prot:[
      'Fine blanking press material handling in the process zone',
      'Multi-press-unit fine blanking architecture with controlled counterforce during overlapping press movements',
      'Fine blanking system using different drive types for movable press components',
      'Sensor-based control-parameter adjustment for fine blanking',
      'Press ram guide-section structures and stamping press cushion arrangements'],
     white:[
      'Die-condition monitoring and predictive maintenance using force, acoustic, vibration, thermal, and visual signatures from fine blanking cycles',
      'Automatic slug and scrap evacuation with quality confirmation linked to press cycle data and part-ejection status',
      'Vision-based fine-blanked edge-quality feedback that adjusts press parameters while avoiding protected sensor-control and press-drive architectures']},
  ],

  // 3. Top Competitors
  competitors:[
    ['Lapmaster Wolters','153','38','Lapping, polishing, honing, fine grinding, wire saw, optical pitch, automation & special-purpose; single-wafer & SiC; dual-face platforms; consumables & services'],
    ['SpeedFam','153','32','Single/double-side lapping, polishing & fine grinding; matched consumables (abrasives, lap plates, carriers); retrofits'],
    ['Supfina','171','37','Superfinishing, flat finishing, fine grinding, double-disk grinding; LeanSystems automation; test-center & retrofit services'],
    ['Okamoto Machine Tool Works','202','37','Semiconductor lapping for SiC/GaN/ceramics; nano-level flatness; mass-production systems; auto base-plate correction'],
    ['Tokyo Seimitsu','2,743','26','Polish grinders, CMP, edge grinding, dicing, probing; high-rigidity grinding for SiC/sapphire; 200/300 mm wafer'],
    ['EBARA','—','—',''],
    ['DISCO','—','—',''],
    ['LAM Research','—','—',''],
    ['Applied Materials','—','—',''],
  ],

  // 4. Decoding Examination Reports
  examReports:[
    ['US202318129209A','Press ram for a fine blanking press',2,'Abandoned — Failure to Pay Issue Fee','Brian Collins','Barclay Damon, LLP','—',0,null],
    ['US202117154424A','Rotor disk & double-sided processing machine',4,'Abandoned — Failure to Respond to OA','Brian Collins','Barclay Damon, LLP','Steven Huang',1,
      {who:'Huang',rate:'38%',cases:47,diff:'Very Hard',pct:87,blurb:'With Examiner Huang, you have a 38% chance of getting an issued patent by 3 years after the first office action. Examiner Huang is a very hard examiner and in the 87th percentile across all examiners (with 100th percentile most difficult).'}],
    ['US201715687674A','Method for measuring thickness of flat workpieces',4,'Abandoned — Failure to Respond to OA','Brian Collins','Barclay Damon, LLP','Marcel T Dion',0,
      {who:'Dion',rate:'33%',cases:218,diff:'Very Hard',pct:89,blurb:'With Examiner Dion, you have a 33% chance of getting an issued patent by 3 years after the first office action. Examiner Dion is a very hard examiner and in the 89th percentile across all examiners (with 100th percentile most difficult).'}],
  ],

  // 5. Patent Pruning & Renewal Decisions
  pruning:{
    rows:[
      ['green','✅ Maintain','82','72.6%','$182,221','Renew — high confidence'],
      ['amber','🟡 Review','20','17.7%','$44,668','Manual evaluation by counsel'],
      ['red','🔴 Prune','11','9.7%','$16,809','Candidates to let lapse'],
    ],
    total:['113','100%','$243,698'],
    note:'Evaluated the full granted portfolio to cut unnecessary renewal spend.',
  },

  // 6. Trademark portfolio snapshot
  tmPortfolio:{total:291,live:201,expired:19,ended:71},

  // 7. Suggested New Filings (mark, classes, countries)
  suggestedFilings:[
    ['POWERSEMI','7, 35, 40','US, EUIPO, China'],
    ['S Logo (House Mark)','3, 7','EUIPO, UK, Japan'],
    ['SF Logo','3, 7','Germany'],
    ['NANOEDGE','7, 37','US, China'],
    ['NANOGLAZE','7, 37','EUIPO, UK, US'],
    ['NANOTOUCH','7, 37','EUIPO, UK, US'],
    ['LAPMASTER WOLTERS (Word)','3, 7, 37, 42','China, Japan, Korea, India, Taiwan, Singapore, Brazil, Australia, Turkey, Malaysia'],
    ['LAPMASTER (Word)','7, 37, 42','France, Italy, Hong Kong, Argentina'],
    ['LAPMASTER (Word)','3, 7, 37, 42','Benelux'],
    ['LAPMASTER (Word)','37, 42','US'],
    ['Peter Wolters','8, 40','India'],
    ['Peter Wolters','8','US'],
    ['PSS','42','EUIPO'],
    ['TouchGrind','7, 9, 40','US'],
    ['TouchGrind','7','China'],
    ['Microline','7, 9','Japan'],
    ['Microline','9, 42','China'],
    ['ELB-KEHREN','37, 42','US, India, China, Korea'],
    ['ELB-KEHREN','37','Japan'],
    ['KEHREN','7, 37','US, China, Japan, Korea'],
    ['Precision Surfacing Solutions (PSS)','3, 7, 37','Japan, Turkey, Brazil, Argentina'],
    ['Precision Surfacing Solutions (PSS)','36, 40','Canada, EU, UK'],
    ['INVADER','7','US, China, Japan, Korea'],
    ['LAPMASTER','3, 7, 37, 42','Japan'],
    ['LAPMASTER WOLTERS (Logo)','3, 7, 37, 42','US, China, Japan, Korea'],
  ],

  // 8. Similar Marks by Others (conflicts)
  similarMarks:[
    ['REPOWER SEMI','9','302104604','Rao Haishan','Hong Kong'],
    ['C.M.G.','7','3107025','Pratapbhai Kurjibhai Jinjariya','India'],
    ['CMG','7','4020217043625','CMG Trade','Korea'],
    ['CMG','7','123328','Tokyo Diamond Tools Mfg. Co.','Kazakhstan'],
    ['CMG','7','M1001625401','Regal Beloit Australia Pty Ltd','Singapore'],
    ['DMG','7','KSM2025000177','Mühlbauer Technology GmbH','Kosovo'],
    ['DMG','7','4020227013535','Mühlbauer Technology GmbH','Korea'],
    ['Micron','7, 35, 39','190110776','Hamed Vafaei Zadeh','Iran'],
    ['Micron','7','959126','Mr. Kanpanich Supasiriroj','Thailand'],
    ['Micron','7, 8','820221686465','Sistemas y Homologaciones (SHPD)','OAPI'],
    ['NanoEdge','5, 10, 37','UK00916543662','Geuder AG','UK'],
    ['NanoEdge','5, 10, 37','016543662','Geuder AG','EUIPO'],
    ['NanoEdge','5, 10, 37','00150-2017','Geuder AG','Switzerland'],
    ['Nano Glass','7, 8, 9, 11, 21, 35','2011/50747','Tasf. Hal. Purtek Makina','Turkey'],
    ['Lapmaster','20','4681259','Pravagna Pranesh','India'],
    ['Lapmaster','9','4562921','Naveen Kumar Madan','India'],
    ['Lapmaster','7','5620030009145','John Crane Inc.','Korea'],
    ['Lapmaster','37','1160194','Franklin Canavati Nader','Mexico'],
    ['Master Lap','35','M3584275','Fernando Lopez Palomeque','Spain'],
  ],
};

/* ---------------- LAPMASTER HUB — ideas, team, settings ---------------- */
const LAP_IDEAS = [
  ['Closed-loop slurry feed from plate temperature & flatness drift','R. Hoffmann','Lapping','Under Review',8.4,'May 28, 2026'],
  ['SiC cross-process recipe control across grind / polish / CMP','M. Tan','Wafer / SiC','Drafting',8.7,'May 24, 2026'],
  ['Predictive wire-saw breakage from tension & acoustic signals','K. Bauer','Wire Saw','Under Review',8.1,'May 19, 2026'],
  ['Self-identifying carrier/pad with embedded usage history','S. Iyer','Consumables','New',7.6,'May 14, 2026'],
  ['NanoEdge inspect-and-correct loop for edge grinding','J. Weber','Edge Grinding','Filed',8.5,'May 9, 2026'],
  ['Die-condition predictive maintenance for fine-blanking','L. Costa','Fine Blanking','New',7.3,'May 2, 2026'],
];
const LAP_IDEA_STATUS = {'New':'b-blue','Under Review':'b-amber','Drafting':'b-amber','Filed':'b-green'};
const LAP_TEAM = [
  ['Anika Reuter','IP Counsel (Admin)','anika.reuter@lapmaster-wolters.com'],
  ['Markus Hoffmann','VP Engineering','markus.hoffmann@lapmaster-wolters.com'],
  ['Sofia Bauer','R&D Director — Wafer','sofia.bauer@lapmaster-wolters.com'],
  ['Daniel Weber','Patent Coordinator','daniel.weber@lapmaster-wolters.com'],
  ['Priya Iyer','Product — Consumables','priya.iyer@lapmaster-wolters.com'],
  ['Lukas Costa','Engineering — Fine Blanking','lukas.costa@lapmaster-wolters.com'],
];
const LAP_ORG = {name:'Lapmaster Wolters', domain:'lapmaster-wolters.com', entities:['Lapmaster Wolters GmbH','Precision Surfacing Solutions','ELB Schliff','ISOG Technology'], advisor:'Photon Legal'};
const LAP_DEADLINES = [
  ['Respond to Office Action — NOA','US202117154424A','Lapmaster Wolters GmbH','Overdue','May 4, 2026'],
  ['Pay Issue Fee','US202318129209A','Lapmaster Wolters GmbH','Overdue','Apr 18, 2026'],
  ['Final Response to Office Action','US201715687674A','Lapmaster Wolters GmbH','Due soon','Jun 21, 2026'],
  ['7½ Year Maintenance Fee Due','SG10201700919V','Lapmaster Wolters GmbH','Due soon','Jul 3, 2026'],
  ['Annuity Payment','EP13812164.5','Precision Surface Solutions GmbH','Active','Aug 12, 2026'],
  ['National Phase Deadline (30m)','PCT/SG2024/050118','Lapmaster Wolters GmbH','Active','Sep 2, 2026'],
  ['Renewal','TW109146192','Lapmaster Wolters GmbH','Active','Sep 20, 2026'],
  ['3½ Year Maintenance Fee Window Open','10202109415V','Lapmaster Wolters GmbH','Active','Oct 5, 2026'],
  ['Examination Request Deadline','TW112113814','Lapmaster Wolters GmbH','Active','Oct 28, 2026'],
  ['Annuity Payment','CN211440667U','Lapmaster Wolters Shenyang','Active','Nov 14, 2026'],
  ['Trademark Renewal — NANOEDGE','EUIPO 016543… ','Lapmaster Wolters GmbH','Due soon','Jul 30, 2026'],
  ['Grace Period Deadline — POWERSEMI','JP (last live)','Lapmaster Wolters GmbH','Overdue','May 22, 2026'],
  ['3½ Year Maintenance Fee Window Open','SG10201706631X','Lapmaster Wolters GmbH','Active','Jun 9, 2026'],
  ['Final Response to Office Action','TW202408730A','Lapmaster Wolters GmbH','Due soon','Jun 11, 2026'],
  ['Respond to Office Action - CTNF','19/657,867','Lapmaster Wolters GmbH','Due soon','Jun 15, 2026'],
  ['Trademark Renewal — NANOPLANE','EUIPO 016543','Lapmaster Wolters GmbH','Due soon','Jun 18, 2026'],
  ['Annuity Payment','TW201729937A','Lapmaster Wolters GmbH','Active','Jun 24, 2026'],
  ['National Phase Deadline (30m)','PCT/SG2024/050233','Lapmaster Wolters GmbH','Active','Jun 28, 2026'],
  ['7½ Year Maintenance Fee Window Open','SG10202100104W','Lapmaster Wolters GmbH','Active','Jul 12, 2026'],
  ['Renewal','CN210910673U','Lapmaster Wolters Shenyang','Active','Aug 3, 2026'],
];

/* ---------------- LAPMASTER — patents by jurisdiction (granted / pending) ---------------- */
const LAP_JURISDICTIONS = [
  ['DE','Germany',22,6],
  ['SG','Singapore',18,7],
  ['US','United States',16,8],
  ['TW','Taiwan',14,9],
  ['CN','China',10,4],
  ['EP','Europe (EP)',9,4],
  ['JP','Japan',8,5],
  ['KR','South Korea',6,3],
  ['BR','Brazil',6,3],
  ['IN','India',4,2],
];

/* ---------------- DASHBOARD ---------------- */
const TOP_CLIENTS = [['Grab Inc','1,053'],['Demo','468'],['Simplisafe','458'],['Panasonic Life Solutions India Pvt. Ltd.','448'],['EFI','443']];
const CAL_EVENTS = {
  1:[['red','3 1/2 Yr Maint. Fee Grace Period','MAGIC LEAP INC (US)'],['red','3 1/2 Yr Maint. Fee Grace Period','MOTOROLA SOLUTIONS INC (US)']],
  2:[['red','11 1/2 Yr Maint. Fee Due','HYUNDAI MOTOR CO LTD (KR)'],['amber','Final Response to Office Action','SIMPLISAFE INC (US)'],['red','11 1/2 Yr Maint. Fee Window Open','NETGEAR INC (US)'],['red','11 1/2 Yr Maint. Fee Window Open','8X8 INC (US)']],
  3:[['red','11 1/2 Yr Maint. Fee Grace Period','NETGEAR INC (US)'],['amber','Final Response to Office Action','SIMPLISAFE INC (US)'],['red','11 1/2 Yr Maint. Fee Grace Period','ELECTRONICS FOR IMAGING INC']],
  4:[['red','7 1/2 Yr Maint. Fee Due','YIELD ENG SYSTEMS INC (US)'],['amber','File Reply to FER','ULTRAHUMAN HEALTHCARE (IN)'],['blue','Renewal','INMOBI PTE LTD (IN)'],['red','7 1/2 Yr Maint. Fee Due','CYBRIC INC (US)']],
  5:[['red','7 1/2 Yr Maint. Fee Grace Period','HYUNDAI MOTOR CO LTD (KR)'],['amber','Respond to Office Action - NOA','HYPERVERGE INC (US)'],['red','7 1/2 Yr Maint. Fee Grace Period','KNORR BREMSE (DE)'],['red','7 1/2 Yr Maint. Fee Grace Period','ENTEFY INC (US)']],
  6:[['red','3 1/2 Yr Maint. Fee Window Open','ENTEFY INC (US)'],['red','3 1/2 Yr Maint. Fee Window Open','ELECTRONICS FOR IMAGING INC']],
  7:[],
  8:[['red','3 1/2 Yr Maint. Fee Due','MAGIC LEAP INC (US)'],['red','3 1/2 Yr Maint. Fee Due','SMR PATENT S A R L (LU)'],['red','3 1/2 Yr Maint. Fee Due','HYUNDAI MOTOR CO LTD (KR)'],['amber','File Reply to FER','ULTRAHUMAN HEALTHCARE (IN)']],
  9:[['amber','Respond to Office Action - CTFR','SIMPLISAFE INC (US)'],['red','11 1/2 Yr Maint. Fee Window Open','NETGEAR INC (US)'],['red','11 1/2 Yr Maint. Fee Due','NETGEAR INC (US)'],['red','11 1/2 Yr Maint. Fee Window Open','CARGILL INC (US)']],
  10:[],
  11:[['red','7 1/2 Yr Maint. Fee Window Open','YIELD ENG SYSTEMS INC (US)'],['red','7 1/2 Yr Maint. Fee Window Open','ELECTRONICS FOR IMAGING INC'],['amber','Respond to Office Action - CTNF','SIMPLISAFE INC (US)'],['amber','Respond to Office Action - CTNF','TRACEABLE INC (US)']],
  12:[['red','7 1/2 Yr Maint. Fee Grace Period','NETGEAR INC (US)'],['amber','Respond to Office Action - CTNF','SIMPLISAFE INC (US)'],['red','7 1/2 Yr Maint. Fee Grace Period','8X8 INC (US)'],['amber','Grace Period Deadline','6SENSE INSIGHTS INC']],
  13:[['red','3 1/2 Yr Maint. Fee Window Open','SPLIT SOFTWARE INC (US)'],['blue','Renewal','INMOBI PTE LTD (SG)'],['red','3 1/2 Yr Maint. Fee Window Open','SIMPLISAFE INC (US)']],
  14:[],
  15:[['red','3 1/2 Yr Maint. Fee Grace Period','SIMPLISAFE INC (US)'],['red','3 1/2 Yr Maint. Fee Grace Period','COLORTOKENS INC (US)'],['amber','Respond to Office Action - M327','SIMPLISAFE INC (US)'],['red','3 1/2 Yr Maint. Fee Due','COHERENT INC (US)']],
  16:[['red','11 1/2 Yr Maint. Fee Window Open','KROUS ERIK (US)'],['amber','Non Final Office Action','Aisera Inc.'],['amber','Final Response to Office Action','GRABTAXI HOLDINGS (SG)'],['red','11 1/2 Yr Maint. Fee Window Open','COHERENT INC (US)']],
  17:[['amber','Respond to Office Action - CTRS','SIMPLISAFE INC (US)'],['red','11 1/2 Yr Maint. Fee Grace Period','NETGEAR INC (US)'],['amber','Final Response to Office Action','HARNESS INC (US)'],['amber','Final Response to Office Action','SIMPLISAFE INC (US)']],
  18:[['amber','Final Response to Office Action','TRACEABLE INC (US)']],
  19:[['amber','File Reply to FER','ULTRAHUMAN HEALTHCARE (IN)']],
  20:[['red','3 1/2 Yr Maint. Fee Window Open','CARGILL INC (US)'],['red','3 1/2 Yr Maint. Fee Window Open','MOTOROLA SOLUTIONS INC (US)'],['red','3 1/2 Yr Maint. Fee Window Open','AUTOMATION ANYWHERE INC'],['red','3 1/2 Yr Maint. Fee Window Open','8X8 INC (US)']],
  21:[],
  22:[['red','3 1/2 Yr Maint. Fee Grace Period','YIELD ENG SYSTEMS INC (US)'],['red','3 1/2 Yr Maint. Fee Grace Period','ENTEFY INC (US)'],['amber','Respond to Office Action - M327','HARNESS INC (US)'],['amber','Final Response to Office Action','SIMPLISAFE INC (US)']],
  23:[['amber','Respond to Office Action - NOA','SIMPLISAFE INC (US)'],['red','11 1/2 Yr Maint. Fee Window Open','HYUNDAI MOTOR CO LTD (KR)'],['red','11 1/2 Yr Maint. Fee Window Open','COHERENT INC (US)'],['amber','Respond to Office Action - CTNF','TURTLE SHELL TECH (IN)']],
  24:[['red','11 1/2 Yr Maint. Fee Grace Period','ARCHION INC (US)'],['red','11 1/2 Yr Maint. Fee Grace Period','HEATH PETER (US)'],['red','11 1/2 Yr Maint. Fee Grace Period','COHERENT INC (US)']],
  25:[['amber','Respond to Office Action - NOA','HARNESS INC (US)'],['amber','Respond to Office Action - CTNF','GLANCE INMOBI PTE LTD'],['blue','Renewal','INMOBI PTE LTD (IN)'],['red','7 1/2 Yr Maint. Fee Window Open','8X8 INC (US)']],
  26:[['amber','Respond to Office Action - CTFR','TRACEABLE INC (US)'],['amber','Respond to Office Action - CTNF','AUTOMATION ANYWHERE INC'],['amber','Respond to Office Action - CTNF','TURTLE SHELL TECH (IN)']],
  27:[['red','3 1/2 Yr Maint. Fee Window Open','ELECTRONICS FOR IMAGING INC'],['blue','Renewal','INMOBI PTE LTD (SG)'],['red','3 1/2 Yr Maint. Fee Window Open','YIELD ENG SYSTEMS INC']],
  28:[],
  29:[['amber','Deadline to Request Examination','6SENSE INSIGHTS INC'],['red','3 1/2 Yr Maint. Fee Due','MOTOROLA SOLUTIONS INC (US)'],['amber','Final Response to Office Action','TRACEABLE INC (US)'],['red','3 1/2 Yr Maint. Fee Due','SPLIT SOFTWARE INC (US)']],
  30:[['red','11 1/2 Yr Maint. Fee Due','NETGEAR INC (US)'],['amber','Respond to Office Action - CTNF','SIMPLISAFE INC (US)'],['red','11 1/2 Yr Maint. Fee Window Open','ELECTRONICS FOR IMAGING'],['blue','Annuity Payment','']],
};
