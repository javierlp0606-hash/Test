<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="referrer" content="no-referrer"/>
<title>AniVerse</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{
--bg:#07070c;--bg2:#0d0d16;--panel:#12121d;--line:#22223a;
--txt:#e8e8f2;--dim:#8b8ba3;--acc:#8b5cf6;--acc2:#22d3ee;
--grad:linear-gradient(120deg,#8b5cf6,#22d3ee);--r:14px;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:var(--bg);color:var(--txt);font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
body{min-height:100vh;overflow-x:hidden}
img{-webkit-user-drag:none;user-select:none}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
button:disabled{opacity:.4;cursor:not-allowed}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-track{background:var(--bg2)}
::-webkit-scrollbar-thumb{background:#2a2a44;border-radius:20px}
::-webkit-scrollbar-thumb:hover{background:var(--acc)}
header{position:sticky;top:0;z-index:60;display:flex;align-items:center;gap:16px;
padding:12px 22px;background:rgba(7,7,12,.82);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
.logo{font-family:Sora;font-weight:800;font-size:20px;letter-spacing:-.5px;
background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;cursor:pointer;white-space:nowrap}
.searchbar{flex:1;max-width:520px;position:relative}
.searchbar input{width:100%;padding:10px 40px;border-radius:30px;background:var(--panel);
border:1px solid var(--line);color:var(--txt);outline:none;transition:.2s}
.searchbar input:focus{border-color:var(--acc);box-shadow:0 0 0 3px rgba(139,92,246,.15)}
.searchbar .ic{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--dim);pointer-events:none}
.suggest{position:absolute;top:110%;left:0;right:0;background:var(--bg2);border:1px solid var(--line);
border-radius:var(--r);overflow:hidden;z-index:70;display:none;max-height:60vh;overflow-y:auto}
.suggest.on{display:block}
.sug{display:flex;gap:10px;padding:8px 12px;align-items:center;cursor:pointer}
.sug:hover{background:#1a1a2c}
.sug img{width:36px;height:50px;object-fit:cover;border-radius:6px}
.hbtns{display:flex;gap:8px;align-items:center;margin-left:auto}
.pill{padding:8px 14px;border-radius:30px;border:1px solid var(--line);background:var(--panel);
font-size:13px;font-weight:600;transition:.2s;white-space:nowrap}
.pill:hover:not(:disabled){border-color:var(--acc);color:#fff}
.pill.on{background:var(--grad);border-color:transparent;color:#fff}
.pill.icon{padding:8px 11px}
main{padding-bottom:80px;min-height:70vh}
.wrap{max-width:1400px;margin:0 auto;padding:0 22px}
.hero{position:relative;height:62vh;min-height:420px;display:flex;align-items:flex-end;overflow:hidden}
.hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;
animation:kb 24s ease-in-out infinite alternate;filter:brightness(.55)}
@keyframes kb{from{transform:scale(1.04)}to{transform:scale(1.14)}}
.hero-fade{position:absolute;inset:0;background:linear-gradient(to top,var(--bg) 4%,transparent 62%),
linear-gradient(to right,rgba(7,7,12,.92),transparent 62%)}
.hero-in{position:relative;padding:0 0 48px;max-width:660px}
.hero h1{font-family:Sora;font-size:clamp(30px,4.4vw,58px);font-weight:800;line-height:1.03;letter-spacing:-1.5px;margin-bottom:14px}
.metaline{display:flex;gap:10px;flex-wrap:wrap;align-items:center;color:var(--dim);font-size:13.5px;margin-bottom:14px}
.badge{padding:3px 9px;border-radius:6px;background:rgba(139,92,246,.16);border:1px solid rgba(139,92,246,.35);
color:#c4b5fd;font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase}
.hero p{color:#b9b9cc;line-height:1.6;margin-bottom:20px;display:-webkit-box;-webkit-line-clamp:3;
-webkit-box-orient:vertical;overflow:hidden}
.btn{padding:12px 24px;border-radius:30px;background:var(--grad);color:#fff;font-weight:700;
display:inline-flex;gap:9px;align-items:center;transition:.2s;box-shadow:0 8px 26px rgba(139,92,246,.3)}
.btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(139,92,246,.45)}
.btn.ghost{background:rgba(255,255,255,.08);border:1px solid var(--line);box-shadow:none}
.btn.ghost:hover{background:rgba(255,255,255,.14);box-shadow:none}
.sec{margin-top:44px}
.sec-h{display:flex;align-items:baseline;gap:12px;margin-bottom:18px}
.sec-h h2{font-family:Sora;font-size:21px;font-weight:700;letter-spacing:-.4px}
.sec-h .more{margin-left:auto;color:var(--dim);font-size:13px;font-weight:600;cursor:pointer}
.sec-h .more:hover{color:var(--acc2)}
.row{display:grid;grid-template-columns:repeat(auto-fill,minmax(158px,1fr));gap:16px}
.card{position:relative;border-radius:var(--r);overflow:hidden;background:var(--panel);
border:1px solid var(--line);cursor:pointer;transition:.25s;aspect-ratio:2/3}
.card:hover{transform:translateY(-6px);border-color:var(--acc);box-shadow:0 16px 40px rgba(0,0,0,.6)}
.card img{width:100%;height:100%;object-fit:cover;display:block;transition:.4s}
.card:hover img{transform:scale(1.07)}
.card-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.94) 0%,transparent 52%);
display:flex;flex-direction:column;justify-content:flex-end;padding:11px}
.card-t{font-size:13.5px;font-weight:600;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;
-webkit-box-orient:vertical;overflow:hidden}
.card-m{font-size:11.5px;color:#a5a5bd;margin-top:4px;display:flex;gap:7px}
.sc{position:absolute;top:9px;left:9px;padding:3px 8px;border-radius:20px;background:rgba(0,0,0,.75);
font-size:11px;font-weight:700;color:#fbbf24;backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14)}
.fmt{position:absolute;top:9px;right:9px;padding:3px 8px;border-radius:6px;background:rgba(139,92,246,.85);
font-size:10px;font-weight:700;letter-spacing:.4px}
.eps-b{position:absolute;bottom:9px;right:9px;padding:3px 8px;border-radius:6px;background:rgba(0,0,0,.75);
font-size:10.5px;font-weight:600;backdrop-filter:blur(6px)}
.detail-h{position:relative;min-height:400px;padding:40px 0}
.detail-bg{position:absolute;inset:0;background-size:cover;background-position:center;filter:brightness(.4)}
.detail-fade{position:absolute;inset:0;background:linear-gradient(to top,var(--bg),transparent 80%)}
.detail-in{position:relative;display:flex;gap:32px;align-items:flex-end}
.poster{width:210px;flex-shrink:0;border-radius:var(--r);overflow:hidden;border:1px solid var(--line);
box-shadow:0 22px 60px rgba(0,0,0,.75)}
.poster img{width:100%;display:block}
.detail-txt{flex:1;min-width:0}
.detail-txt h1{font-family:Sora;font-size:clamp(26px,3.4vw,44px);font-weight:800;letter-spacing:-1.2px;
line-height:1.06;margin-bottom:12px}
.chips{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}
.chip{padding:5px 12px;border-radius:20px;background:rgba(255,255,255,.07);border:1px solid var(--line);
font-size:12.5px;font-weight:600}
.desc{color:#bcbcd0;line-height:1.72;font-size:14.5px;margin-top:16px;max-width:900px;
white-space:pre-line;user-select:text}
.stats{display:flex;gap:26px;flex-wrap:wrap;margin:20px 0}
.stat .k{font-size:11px;color:var(--dim);text-transform:uppercase;letter-spacing:.9px;font-weight:700}
.stat .v{font-family:Sora;font-size:19px;font-weight:700;margin-top:3px}
.ep-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:10px}
.ep{padding:13px 12px;border-radius:11px;background:var(--panel);border:1px solid var(--line);
text-align:left;transition:.18s;position:relative;overflow:hidden}
.ep:hover{border-color:var(--acc);background:#181828;transform:translateY(-2px)}
.ep.now{border-color:var(--acc);background:linear-gradient(120deg,rgba(139,92,246,.2),rgba(34,211,238,.12))}
.ep .n{font-family:Sora;font-weight:700;font-size:15px}
.ep .t{font-size:11px;color:var(--dim);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.watch-grid{display:grid;grid-template-columns:1fr 330px;gap:22px;align-items:start}
@media(max-width:1000px){.watch-grid{grid-template-columns:1fr}}
.player-shell{position:relative;background:#000;border-radius:var(--r);overflow:hidden;border:1px solid var(--line)}
.player-frame{position:relative;width:100%;aspect-ratio:16/9}
.player-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.shield{position:absolute;inset:0;z-index:5;cursor:pointer}
.shield.pass{pointer-events:none}
.shield-badge{position:absolute;right:10px;top:10px;z-index:6;padding:4px 10px;border-radius:20px;
background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.16);font-size:10.5px;font-weight:700;
color:#a5f3fc;backdrop-filter:blur(8px);pointer-events:none;letter-spacing:.5px}
.srcbar{display:flex;gap:8px;flex-wrap:wrap;padding:12px;background:var(--bg2);border-top:1px solid var(--line)}
.src{padding:7px 13px;border-radius:20px;background:var(--panel);border:1px solid var(--line);
font-size:12.5px;font-weight:600;transition:.18s;display:flex;gap:6px;align-items:center}
.src:hover{border-color:var(--acc2)}
.src.on{background:var(--grad);border-color:transparent;color:#fff}
.src.dead{opacity:.45}
.tag{font-size:9.5px;padding:2px 6px;border-radius:5px;background:rgba(34,197,94,.2);color:#86efac;
font-weight:700;letter-spacing:.4px}
.src.on .tag{background:rgba(0,0,0,.28);color:#fff}
.tag.bak{background:rgba(148,163,184,.2);color:#cbd5e1}
.whead{display:flex;align-items:center;gap:14px;margin:18px 0;flex-wrap:wrap}
.whead h1{font-family:Sora;font-size:22px;font-weight:700;letter-spacing:-.5px}
.side{background:var(--panel);border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.side-h{padding:14px 16px;border-bottom:1px solid var(--line);font-weight:700;font-size:13.5px;font-family:Sora}
.side-b{max-height:560px;overflow-y:auto}
.side-ep{display:flex;gap:11px;padding:9px 13px;cursor:pointer;transition:.15s;align-items:center}
.side-ep:hover{background:#181828}
.side-ep.now{background:linear-gradient(90deg,rgba(139,92,246,.22),transparent);border-left:3px solid var(--acc)}
.side-ep img{width:82px;aspect-ratio:16/9;object-fit:cover;border-radius:6px;flex-shrink:0;background:#000}
.side-ep .info{min-width:0}
.side-ep .info b{font-size:12.5px;display:block}
.side-ep .info span{font-size:11px;color:var(--dim)}
.empty{text-align:center;padding:70px 20px;color:var(--dim)}
.empty .big{font-size:44px;margin-bottom:12px}
.sk{background:linear-gradient(100deg,#141420 30%,#1e1e30 50%,#141420 70%);background-size:200% 100%;
animation:sh 1.3s infinite;border-radius:var(--r)}
@keyframes sh{to{background-position:-200% 0}}
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(90px);
background:var(--panel);border:1px solid var(--line);padding:12px 22px;border-radius:30px;z-index:200;
transition:.3s;font-size:13.5px;font-weight:600;box-shadow:0 12px 40px rgba(0,0,0,.6)}
.toast.on{transform:translateX(-50%) translateY(0)}
.modal{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);z-index:150;
display:none;align-items:center;justify-content:center;padding:20px}
.modal.on{display:flex}
.modal-c{background:var(--bg2);border:1px solid var(--line);border-radius:18px;padding:26px;width:100%;
max-width:520px;max-height:86vh;overflow-y:auto}
.modal-c h3{font-family:Sora;font-size:19px;margin-bottom:18px}
.fld{margin-bottom:16px}
.fld label{display:block;font-size:12px;color:var(--dim);font-weight:700;text-transform:uppercase;
letter-spacing:.7px;margin-bottom:7px}
.fld input,.fld select{width:100%;padding:10px 13px;border-radius:10px;background:var(--panel);
border:1px solid var(--line);color:var(--txt);outline:none}
.fld input:focus,.fld select:focus{border-color:var(--acc)}
.sw{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid var(--line)}
.tog{width:44px;height:25px;border-radius:20px;background:#2a2a44;position:relative;transition:.2s;flex-shrink:0;cursor:pointer}
.tog:after{content:'';position:absolute;top:3px;left:3px;width:19px;height:19px;border-radius:50%;
background:#fff;transition:.2s}
.tog.on{background:var(--acc)}
.tog.on:after{left:22px}
footer{border-top:1px solid var(--line);padding:30px 22px;color:var(--dim);font-size:12.5px;
text-align:center;line-height:1.9}
footer b{color:var(--txt)}
.note{background:rgba(34,211,238,.07);border:1px solid rgba(34,211,238,.25);border-radius:10px;
padding:11px 15px;font-size:12.5px;color:#a5f3fc;margin:16px 0;line-height:1.6}
@media(max-width:700px){
.detail-in{flex-direction:column;align-items:flex-start}
.poster{width:140px}
header{padding:10px 14px;gap:10px}
.wrap{padding:0 14px}
}
</style>
</head>
<body>

<header>
<div class="logo" onclick="go('#/')">AniVerse</div>
<div class="searchbar">
<span class="ic">&#9906;</span>
<input id="q" placeholder="Search anime… ( / )" autocomplete="off"/>
<div class="suggest" id="sug"></div>
</div>
<div class="hbtns">
<button class="pill" id="langBtn" onclick="toggleLang()">SUB</button>
<button class="pill icon" onclick="openSettings()" title="Settings">&#9881;</button>
</div>
</header>

<main id="app"></main>

<footer>
<div><b>AniVerse</b> — metadata from AniList · Jikan · Kitsu &nbsp;|&nbsp; playback via third-party embeds</div>
<div id="srcLine"></div>
<div style="margin-top:8px">Right-click / F12 / Ctrl+U blocked on the player &middot; embed URLs obfuscated</div>
</footer>

<div class="toast" id="toast"></div>

<div class="modal" id="settings">
<div class="modal-c">
<h3>Settings</h3>
<div class="fld">
<label>Default source</label>
<select id="setSrc"></select>
</div>
<div class="fld">
<label>Custom Anivexa / anime-sdk base URL (optional)</label>
<input id="setBase" placeholder="https://your-api.example.com"/>
<div style="font-size:11.5px;color:var(--dim);margin-top:6px">
Point at a self-hosted <b>Anivexa-API</b> or <b>anime-sdk</b> server to unlock /map and /watch routes.
</div>
</div>
<div class="sw"><span>Anti-inspect shield</span>
<div class="tog" id="tgShield" onclick="this.classList.toggle('on')"></div></div>
<div class="sw"><span>Block keyboard shortcuts (F12, Ctrl+U…)</span>
<div class="tog" id="tgKeys" onclick="this.classList.toggle('on')"></div></div>
<div class="sw"><span>Auto-try next source if one stalls</span>
<div class="tog" id="tgAuto" onclick="this.classList.toggle('on')"></div></div>
<div class="sw"><span>Autoplay</span>
<div class="tog" id="tgPlay" onclick="this.classList.toggle('on')"></div></div>
<div style="display:flex;gap:10px;margin-top:22px">
<button class="btn" style="flex:1;justify-content:center" onclick="saveSettings()">Save</button>
<button class="btn ghost" onclick="closeSettings()">Close</button>
</div>
</div>
</div>

<script>
/* ══════════════════════ CONFIG ══════════════════════ */
const ANILIST='https://graphql.anilist.co', JIKAN='https://api.jikan.moe/v4', KITSU='https://kitsu.io/api/edge';
const LS='aniverse.';
const cfg = Object.assign({lang:'sub',source:'anipm',shield:true,keys:true,auto:true,autoplay:true,base:''},
JSON.parse(localStorage.getItem(LS+'cfg')||'{}'));
let saved = JSON.parse(localStorage.getItem(LS+'cw')||'[]');

/* ══════════════════════ SOURCES (self-hosted first) ══════════════════════ */
const SOURCES=[
{id:'anipm',name:'Ani.pm',tag:'self',build:(m,ep,l)=>aniPmUrl(m)},
{id:'aniembed',name:'AniEmbed',tag:'self',
build:(m,ep,l)=> m.id?`https://aniembed.se/e/${m.id}/${ep}?lang=${l}&autoplay=${cfg.autoplay?1:0}`:null},
{id:'anilink',name:'AniLink',tag:'self',
build:(m,ep,l)=> m.id?`https://anilink.cc/watch/${m.id}/${ep}?variant=${l}&autoplay=${cfg.autoplay?1:0}`:null},
{id:'megaplay',name:'MegaPlay',tag:'bak',
build:(m,ep,l)=> m.id?`https://megaplay.buzz/stream/ani/${m.id}/${ep}/${l}`:null},
{id:'vidplus',name:'VidPlus',tag:'bak',
build:(m,ep,l)=> m.id?`https://player.vidplus.to/embed/anime/${m.id}/${ep}?dub=${l==='dub'}&autoplay=${cfg.autoplay}`:null},
{id:'tryembed',name:'TryEmbed',tag:'bak',
build:(m,ep,l)=> m.id?`https://tryembed.us.cc/embed/anime/${m.id}/${ep}/${l}`:null},
{id:'megaplay-mal',name:'MegaPlay (MAL)',tag:'bak',
build:(m,ep,l)=> m.idMal?`https://megaplay.buzz/stream/mal/${m.idMal}/${ep}/${l}`:null},
];

/* Ani.pm hashes its URLs — resolve via proxy once, cache, else use search page */
const PROXIES=[u=>'https://api.allorigins.win/raw?url='+encodeURIComponent(u),
u=>'https://corsproxy.io/?'+encodeURIComponent(u)];
const anipmCache=JSON.parse(localStorage.getItem(LS+'anipm')||'{}');
function aniPmUrl(m){
const k=m._key; if(anipmCache[k]) return 'https://ani.pm/anime/'+anipmCache[k];
return 'https://ani.pm/anime?q='+encodeURIComponent(m.title.romaji||m.title.english||'');
}
async function resolveAniPm(m){
const k=m._key; if(anipmCache[k]) return null;
const t=m.title.romaji||m.title.english; if(!t) return null;
for(const p of PROXIES){
try{
const r=await fetch(p('https://ani.pm/anime?q='+encodeURIComponent(t)));
if(!r.ok) continue;
const html=await r.text();
const hit=html.match(/\/anime\/([a-f0-9]{20,40}~[a-f0-9]{40,80})/);
if(hit){ anipmCache[k]=hit[1]; localStorage.setItem(LS+'anipm',JSON.stringify(anipmCache));
return 'https://ani.pm/anime/'+hit[1]; }
}catch(e){}
}
return null;
}

/* ══════════════════════ UTILS ══════════════════════ */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)], app=$('#app');
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clean=s=>(s||'').replace(/<br\s*\/?>/gi,'\n').replace(/<[^>]+>/g,'').trim();
const b64=s=>btoa(unescape(encodeURIComponent(s)));
const unb64=s=>decodeURIComponent(escape(atob(s)));
const go=h=>{location.hash=h;};

/* every media gets a stable routing key, incl. fallback providers */
function norm(m){
if(!m) return m;
m._key = m.id ? String(m.id) : (m.idMal ? 'mal-'+m.idMal : (m._kitsu ? 'kitsu-'+m._kitsu : 'x'+Math.random().toString(36).slice(2)));
return m;
}

let toastT;
function toast(msg){
const t=$('#toast'); t.textContent=msg; t.classList.add('on');
clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('on'),2400);
}
function openSettings(){
$('#setSrc').innerHTML=SOURCES.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('');
$('#setSrc').value=cfg.source; $('#setBase').value=cfg.base||'';
$('#tgShield').classList.toggle('on',cfg.shield);
$('#tgKeys').classList.toggle('on',cfg.keys);
$('#tgAuto').classList.toggle('on',cfg.auto);
$('#tgPlay').classList.toggle('on',cfg.autoplay);
$('#settings').classList.add('on');
}
const closeSettings=()=>$('#settings').classList.remove('on');
function saveSettings(){
cfg.shield=$('#tgShield').classList.contains('on');
cfg.keys=$('#tgKeys').classList.contains('on');
cfg.auto=$('#tgAuto').classList.contains('on');
cfg.autoplay=$('#tgPlay').classList.contains('on');
cfg.source=$('#setSrc').value;
cfg.base=$('#setBase').value.trim();
localStorage.setItem(LS+'cfg',JSON.stringify(cfg));
closeSettings(); toast('Saved'); rerender();
}
function toggleLang(){
cfg.lang = cfg.lang==='sub'?'dub':'sub';
localStorage.setItem(LS+'cfg',JSON.stringify(cfg));
$('#langBtn').textContent=cfg.lang.toUpperCase();
toast(cfg.lang==='dub'?'Dub audio':'Sub audio');
rerender();
}

/* ══════════════════════ METADATA ══════════════════════ */
const FRAG=`
fragment M on Media {
id idMal type format status episodes duration popularity averageScore meanScore
title{romaji english native} coverImage{extraLarge large color} bannerImage
description(asHtml:false) genres season seasonYear startDate{year month day}
trailer{id site} nextAiringEpisode{episode airingAt}
studios(isMain:true){nodes{name}}
streamingEpisodes{title thumbnail url site} externalLinks{url site}
relations{edges{relationType node{id title{romaji english} coverImage{large} format type averageScore}}}
recommendations(perPage:12){nodes{mediaRecommendation{id title{romaji english} coverImage{large} averageScore format}}}
characters(perPage:14,sort:[ROLE,RELEVANCE]){edges{role node{id name{full} image{large}}}}
}`;

async function gql(query,vars){
const r=await fetch(ANILIST,{method:'POST',
headers:{'Content-Type':'application/json','Accept':'application/json'},
body:JSON.stringify({query,variables:vars})});
if(r.status===429){ await new Promise(s=>setTimeout(s,1200)); return gql(query,vars); }
if(!r.ok) throw new Error('AniList '+r.status);
const j=await r.json();
if(j.errors) throw new Error(j.errors[0].message);
return j.data;
}

async function metaSearch(q){
try{
const d=await gql(`query($q:String){Page(page:1,perPage:28){media(search:$q,type:ANIME,sort:SEARCH_MATCH,isAdult:false){...M}}} ${FRAG}`,{q});
if(d.Page.media.length) return d.Page.media.map(norm);
}catch(e){}
try{
const r=await fetch(`${JIKAN}/anime?q=${encodeURIComponent(q)}&limit=28&sfw`);
const j=await r.json();
if(j.data&&j.data.length) return j.data.map(a=>norm(jikanToMedia(a)));
}catch(e){}
try{
const r=await fetch(`${KITSU}/anime?filter[text]=${encodeURIComponent(q)}&page[limit]=28`);
const j=await r.json();
return (j.data||[]).map(k=>norm(kitsuToMedia(k)));
}catch(e){ return []; }
}

async function metaBrowse(kind){
const map={
trending:{sort:'TRENDING_DESC'},
popular:{sort:'POPULARITY_DESC'},
top:{sort:'SCORE_DESC'},
upcoming:{sort:'POPULARITY_DESC',status:'NOT_YET_RELEASED'},
seasonal:{sort:'POPULARITY_DESC',seasonal:true}
};
const c=map[kind]||map.trending;
const now=new Date();
const vars={page:1};
let decl='$page:Int', args='type:ANIME';
if(c.status) args+=`,status:${c.status}`;
if(c.seasonal){
decl+=',$season:MediaSeason,$year:Int';
args+=',season:$season,year:$year';
vars.season=['WINTER','SPRING','SUMMER','FALL'][Math.floor(now.getMonth()/3)];
vars.year=now.getFullYear();
}
const d=await gql(`query(${decl}){Page(page:$page,perPage:28){media(${args},sort:${c.sort},isAdult:false){...M}}} ${FRAG}`,vars);
return d.Page.media.map(norm);
}

async function metaById(key){
if(/^\d+$/.test(key)){
const d=await gql(`query($id:Int){Media(id:$id,type:ANIME){...M}} ${FRAG}`,{id:Number(key)});
return norm(d.Media);
}
if(key.startsWith('mal-')){
const r=await fetch(`${JIKAN}/anime/${key.slice(4)}/full`);
const j=await r.json();
return norm(jikanToMedia(j.data));
}
if(key.startsWith('kitsu-')){
const r=await fetch(`${KITSU}/anime/${key.slice(6)}`);
const j=await r.json();
return norm(kitsuToMedia(j.data));
}
throw new Error('unknown id');
}

function jikanToMedia(a){
return {id:null,idMal:a.mal_id,_fallback:'jikan',
title:{romaji:a.title,english:a.title_english,native:a.title_japanese},
coverImage:{extraLarge:(a.images&&a.images.jpg&&(a.images.jpg.large_image_url||a.images.jpg.image_url))||''},
bannerImage:(a.trailer&&a.trailer.images&&a.trailer.images.maximum_image_url)||'',
description:a.synopsis||'',genres:(a.genres||[]).map(g=>g.name),
averageScore:a.score?Math.round(a.score*10):null,episodes:a.episodes,status:a.status,
format:a.type,seasonYear:a.year,relations:{edges:[]},recommendations:{nodes:[]},
characters:{edges:[]},streamingEpisodes:[],studios:{nodes:[]}};
}
function kitsuToMedia(k){
const at=(k&&k.attributes)||{};
return {id:null,idMal:null,_fallback:'kitsu',_kitsu:k.id,
title:{romaji:at.canonicalTitle,english:at.titles&&at.titles.en,native:at.titles&&at.titles.ja_jp},
coverImage:{extraLarge:(at.posterImage&&(at.posterImage.large||at.posterImage.original))||''},
bannerImage:(at.coverImage&&(at.coverImage.original||at.coverImage.large))||'',
description:at.synopsis||'',genres:[],averageScore:at.averageRating?Math.round(at.averageRating):null,
episodes:at.episodeCount,status:at.status,format:at.subtype,seasonYear:null,
relations:{edges:[]},recommendations:{nodes:[]},characters:{edges:[]},
streamingEpisodes:[],studios:{nodes:[]}};
}

function episodesOf(m){
let n=m.episodes||(m.nextAiringEpisode?m.nextAiringEpisode.episode-1:0)||(m.streamingEpisodes||[]).length||12;
n=Math.max(1,Math.min(n,4000));
const se=m.streamingEpisodes||[];
return Array.from({length:n},(_,i)=>({num:i+1,title:(se[i]&&se[i].title)||null,thumb:(se[i]&&se[i].thumbnail)||null}));
}

/* ══════════════════════ CONTINUE WATCHING ══════════════════════ */
function markWatched(m,ep){
const rec={key:m._key,title:(m.title.romaji||m.title.english||'?'),
cover:(m.coverImage&&(m.coverImage.extraLarge||m.coverImage.large))||'',ep,at:Date.now()};
saved=saved.filter(x=>x.key!==m._key); saved.unshift(rec);
saved=saved.slice(0,20);
localStorage.setItem(LS+'cw',JSON.stringify(saved));
}

/* ══════════════════════ VIEWS ══════════════════════ */
function cardHTML(m){
if(!m) return '';
const t=m.title.romaji||m.title.english||m.title.native||'?';
const cover=(m.coverImage&&(m.coverImage.extraLarge||m.coverImage.large))||'';
return `<div class="card" data-key="${esc(m._key)}">
${m.averageScore?`<div class="sc">&#9733; ${(m.averageScore/10).toFixed(1)}</div>`:''}
${m.format?`<div class="fmt">${esc(m.format)}</div>`:''}
<img loading="lazy" src="${esc(cover)}" alt=""/>
<div class="card-ov"><div class="card-t">${esc(t)}</div>
<div class="card-m">${m.seasonYear?`<span>${m.seasonYear}</span>`:''}
${m.status?`<span>${esc(String(m.status).replace(/_/g,' '))}</span>`:''}</div></div>
${m.episodes?`<div class="eps-b">${m.episodes} eps</div>`:''}</div>`;
}
const wireCards=()=>$$('.card').forEach(el=>{ el.onclick=()=>go('#/anime/'+el.dataset.key); });
const rowBlock=(t,l)=>!l||!l.length?'':`<section class="sec"><div class="sec-h"><h2>${esc(t)}</h2></div>
<div class="row">${l.map(cardHTML).join('')}</div></section>`;

async function viewHome(){
app.innerHTML=`<div class="wrap"><div class="sk" style="height:380px;margin-top:24px"></div></div>`;
let trend=[];
try{ trend=await metaBrowse('trending'); }catch(e){}
app.innerHTML=`${trend[0]?heroBlock(trend[0]):''}
<div class="wrap">
${saved.length?`<section class="sec"><div class="sec-h"><h2>Continue Watching</h2>
<span class="more" onclick="clearCW()">Clear</span></div>
<div class="row">${saved.map(c=>`<div class="card" onclick="go('#/watch/${c.key}/${c.ep}')">
<img loading="lazy" src="${esc(c.cover)}" alt=""/>
<div class="card-ov"><div class="card-t">${esc(c.title)}</div>
<div class="card-m">Episode ${c.ep}</div></div></div>`).join('')}</div></section>`:''}
${rowBlock('Trending Now',trend)}
<div id="moreRows"></div>
</div>`;
wireCards();
for(const [label,kind] of [['All-Time Popular','popular'],['Top Rated','top'],['This Season','seasonal']]){
try{
const list=await metaBrowse(kind);
$('#moreRows').insertAdjacentHTML('beforeend',rowBlock(label,list));
wireCards();
}catch(e){ console.warn(label,'failed',e.message); }
}
}
function clearCW(){ saved=[]; localStorage.removeItem(LS+'cw'); viewHome(); }

function heroBlock(m){
const t=m.title.romaji||m.title.english||m.title.native;
return `<div class="hero">
<div class="hero-bg" style="background-image:url('${esc(m.bannerImage||(m.coverImage&&m.coverImage.extraLarge)||'')}')"></div>
<div class="hero-fade"></div>
<div class="wrap hero-in">
<div class="metaline"><span class="badge">#1 Trending</span>
${m.averageScore?`<span>&#9733; ${(m.averageScore/10).toFixed(1)}</span>`:''}
${m.seasonYear?`<span>${m.seasonYear}</span>`:''}
${m.episodes?`<span>${m.episodes} eps</span>`:''}
${m.format?`<span>${esc(m.format)}</span>`:''}</div>
<h1>${esc(t)}</h1>
<p>${esc(clean(m.description))}</p>
<div style="display:flex;gap:12px;flex-wrap:wrap">
<button class="btn" onclick="go('#/watch/${m._key}/1')">&#9654; Watch Now</button>
<button class="btn ghost" onclick="go('#/anime/${m._key}')">Details</button></div>
</div></div>`;
}

async function viewSearch(q){
app.innerHTML=`<div class="wrap"><div class="sec"><div class="sk" style="height:26px;width:240px"></div>
<div class="row" style="margin-top:18px">${'<div class="sk" style="aspect-ratio:2/3"></div>'.repeat(12)}</div></div></div>`;
const res=await metaSearch(q);
app.innerHTML=`<div class="wrap"><section class="sec">
<div class="sec-h"><h2>Results for “${esc(q)}”</h2><span class="more">${res.length} found</span></div>
${res.length?`<div class="row">${res.map(cardHTML).join('')}</div>`
:`<div class="empty"><div class="big">&#128269;</div>Nothing found. Try another title.</div>`}
</section></div>`;
wireCards();
}

async function viewDetail(key){
app.innerHTML=`<div class="wrap"><div class="sk" style="height:400px;margin-top:24px"></div></div>`;
let m; try{ m=await metaById(key); }
catch(e){ app.innerHTML=`<div class="empty">Failed to load: ${esc(e.message)}</div>`; return; }
const t=m.title.romaji||m.title.english||m.title.native;
const cover=m.coverImage&&(m.coverImage.extraLarge||m.coverImage.large);
const eps=episodesOf(m);
const rel=(m.relations&&m.relations.edges||[]).filter(e=>e.node&&e.node.type==='ANIME').map(e=>norm(e.node));
const recs=(m.recommendations&&m.recommendations.nodes||[]).map(n=>n.mediaRecommendation).filter(Boolean).map(norm);
const chars=(m.characters&&m.characters.edges||[]).slice(0,12);
app.innerHTML=`
<div class="detail-h">
<div class="detail-bg" style="background-image:url('${esc(m.bannerImage||cover||'')}')"></div>
<div class="detail-fade"></div>
<div class="wrap detail-in">
<div class="poster"><img src="${esc(cover||'')}" alt=""/></div>
<div class="detail-txt">
<h1>${esc(t)}</h1>
<div class="metaline">
${m.averageScore?`<span class="badge">&#9733; ${(m.averageScore/10).toFixed(1)}</span>`:''}
${m.format?`<span>${esc(m.format)}</span>`:''}
${m.status?`<span>${esc(String(m.status).replace(/_/g,' '))}</span>`:''}
${m.seasonYear?`<span>${m.seasonYear}</span>`:''}
${m.episodes?`<span>${m.episodes} episodes</span>`:''}
${m.duration?`<span>${m.duration} min</span>`:''}</div>
<div class="chips">${(m.genres||[]).map(g=>`<span class="chip">${esc(g)}</span>`).join('')}</div>
<button class="btn" onclick="go('#/watch/${m._key}/1')">&#9654; Play Episode 1</button>
</div></div></div>
<div class="wrap">
${m.nextAiringEpisode?`<div class="note">Next episode <b>${m.nextAiringEpisode.episode}</b> airs
${new Date(m.nextAiringEpisode.airingAt*1000).toLocaleString()}</div>`:''}
<div class="desc">${esc(clean(m.description))||'No synopsis.'}</div>
<div class="stats">
<div class="stat"><div class="k">Score</div><div class="v">${m.averageScore?(m.averageScore/10).toFixed(1):'—'}</div></div>
<div class="stat"><div class="k">Popularity</div><div class="v">${m.popularity?m.popularity.toLocaleString():'—'}</div></div>
<div class="stat"><div class="k">Studio</div><div class="v" style="font-size:14px">${esc((m.studios&&m.studios.nodes&&m.studios.nodes[0]&&m.studios.nodes[0].name)||'—')}</div></div>
<div class="stat"><div class="k">MAL ID</div><div class="v">${m.idMal||'—'}</div></div></div>
<section class="sec"><div class="sec-h"><h2>Episodes</h2><span class="more">${eps.length} available</span></div>
<div class="ep-grid">${eps.map(e=>`<button class="ep" onclick="go('#/watch/${m._key}/${e.num}')">
<div class="n">EP ${e.num}</div><div class="t">${esc(e.title?clean(e.title).slice(0,42):'Episode '+e.num)}</div>
</button>`).join('')}</div></section>
${chars.length?`<section class="sec"><div class="sec-h"><h2>Characters</h2></div>
<div class="row" style="grid-template-columns:repeat(auto-fill,minmax(112px,1fr))">
${chars.map(c=>`<div class="card"><img loading="lazy" src="${esc(c.node.image.large)}" alt=""/>
<div class="card-ov"><div class="card-t" style="font-size:12px">${esc(c.node.name.full)}</div>
<div class="card-m" style="font-size:10px">${esc(c.role)}</div></div></div>`).join('')}</div></section>`:''}
${rel.length?`<section class="sec"><div class="sec-h"><h2>Related</h2></div>
<div class="row">${rel.map(cardHTML).join('')}</div></section>`:''}
${recs.length?`<section class="sec"><div class="sec-h"><h2>Recommended</h2></div>
<div class="row">${recs.map(cardHTML).join('')}</div></section>`:''}
</div>`;
wireCards();
}

/* ══════════════════════ WATCH ══════════════════════ */
let current={m:null,ep:1};
async function viewWatch(key,ep){
ep=Number(ep)||1;
app.innerHTML=`<div class="wrap"><div class="sk" style="height:60vh;margin-top:20px"></div></div>`;
let m; try{ m=await metaById(key); }
catch(e){ app.innerHTML=`<div class="empty">Failed to load: ${esc(e.message)}</div>`; return; }
const eps=episodesOf(m), t=m.title.romaji||m.title.english||m.title.native;
current={m,ep};
app.innerHTML=`
<div class="wrap">
<div class="whead">
<button class="pill" onclick="go('#/anime/${m._key}')">&#8592; Back</button>
<h1>${esc(t)}</h1><span class="badge">EP ${ep}</span>
<div style="margin-left:auto;display:flex;gap:8px">
<button class="pill" ${ep<=1?'disabled':''} onclick="go('#/watch/${m._key}/${ep-1}')">&#8592; Prev</button>
<button class="pill" ${ep>=eps.length?'disabled':''} onclick="go('#/watch/${m._key}/${ep+1}')">Next &#8594;</button>
</div></div>
<div class="watch-grid">
<div>
<div class="player-shell">
<div class="player-frame" id="frame"></div>
<div class="shield" id="shield"></div>
<div class="shield-badge" id="sbadge">&#128274; SHIELDED</div></div>
<div class="srcbar" id="srcbar"></div>
<div style="display:flex;gap:9px;margin-top:12px;flex-wrap:wrap">
<button class="pill" onclick="nextSource()">&#8635; Try another source</button>
<button class="pill" onclick="copyEmbed()">&#128203; Copy embed link</button>
<button class="pill" onclick="openTab()">&#8599; Open in new tab</button>
<span id="autoMsg" style="font-size:12px;color:var(--dim);align-self:center"></span></div>
<div class="note" style="margin-top:16px">Embed URL is base64-encoded and injected at runtime —
right-click, <b>F12</b>, <b>Ctrl+Shift+I</b> and <b>Ctrl+U</b> are blocked on the player.</div>
</div>
<aside class="side"><div class="side-h">Episodes (${eps.length})</div>
<div class="side-b">${eps.map(e=>`<div class="side-ep ${e.num===ep?'now':''}" onclick="go('#/watch/${m._key}/${e.num}')">
${e.thumb?`<img loading="lazy" src="${esc(e.thumb)}" alt=""/>`:''}
<div class="info"><b>Episode ${e.num}</b><span>${esc(e.title?clean(e.title).slice(0,40):'')}</span></div>
</div>`).join('')}</div></aside>
</div></div>`;
markWatched(m,ep);
renderSources();
setSource(cfg.source,true);
if(cfg.source==='anipm' && m._key) resolveAniPm(m).then(u=>{ if(u && current.m===m) setSource('anipm',true); });
}

function renderSources(){
$('#srcbar').innerHTML=SOURCES.map(s=>{
const ok=!!s.build(current.m,current.ep,cfg.lang);
return `<button class="src ${s.id===cfg.source?'on':''} ${ok?'':'dead'}" data-s="${s.id}"
onclick="setSource('${s.id}')">${esc(s.name)}
<span class="tag ${s.tag==='bak'?'bak':''}">${s.tag==='self'?'SELF-HOSTED':'BACKUP'}</span></button>`;
}).join('');
$('#srcLine').textContent='Sources: '+SOURCES.map(s=>s.name).join(' · ');
}

function setSource(id,first){
const s=SOURCES.find(x=>x.id===id); if(!s) return;
const url=s.build(current.m,current.ep,cfg.lang);
if(!url){ toast(s.name+' unavailable for this title'); return; }
cfg.source=id; localStorage.setItem(LS+'cfg',JSON.stringify(cfg));
$$('.src').forEach(b=>b.classList.toggle('on',b.dataset.s===id));
const enc=b64(url);
const frame=$('#frame');
frame.dataset.enc=enc;
frame.innerHTML=`<iframe src="${url}" data-enc="${enc}"
allow="autoplay; fullscreen; encrypted-media; picture-in-picture; clipboard-write"
allowfullscreen referrerpolicy="origin"></iframe>`;
initShield();
if(cfg.auto) armAuto();
if(!first) toast('Switched to '+s.name);
}

let autoT;
function armAuto(){
clearTimeout(autoT);
const el=$('#autoMsg'); if(el) el.textContent='';
autoT=setTimeout(()=>{ const e=$('#autoMsg'); if(e) e.textContent='No signal? Try another source.'; },14000);
}
function nextSource(){
const i=SOURCES.findIndex(s=>s.id===cfg.source);
for(let n=1;n<=SOURCES.length;n++){
const s=SOURCES[(i+n)%SOURCES.length];
if(s.build(current.m,current.ep,cfg.lang)){ setSource(s.id); return; }
}
toast('No other source available');
}
function copyEmbed(){
navigator.clipboard.writeText(unb64($('#frame').dataset.enc)).then(()=>toast('Embed link copied'));
}
function openTab(){ window.open(unb64($('#frame').dataset.enc),'_blank'); }

/* ══════════════════════ ANTI-INSPECT ══════════════════════ */
function initShield(){
const sh=$('#shield'); if(!sh) return;
const on=cfg.shield;
sh.style.display=on?'block':'none';
$('#sbadge').style.display=on?'block':'none';
if(!on) return;
sh.oncontextmenu=e=>{e.preventDefault();return false;};
sh.onmousedown=e=>{ if(e.button===0) sh.classList.add('pass'); };
sh.ontouchstart=()=>sh.classList.add('pass');
sh.onwheel=()=>{ sh.classList.add('pass'); setTimeout(()=>sh.classList.remove('pass'),80); };
}
function initAntiInspect(){
window.addEventListener('mouseup',()=>setTimeout(()=>{const s=$('#shield'); if(s) s.classList.remove('pass');},50));
window.addEventListener('touchend',()=>setTimeout(()=>{const s=$('#shield'); if(s) s.classList.remove('pass');},50));
document.addEventListener('contextmenu',e=>{
if(e.target.tagName==='INPUT') return;
if(e.target.closest('.player-shell')) return;
e.preventDefault();
});
document.addEventListener('keydown',e=>{
if(e.key==='/' && document.activeElement.tagName!=='INPUT'){ e.preventDefault(); $('#q').focus(); return; }
if(!cfg.keys) return;
const k=e.key.toLowerCase();
if(e.key==='F12'){ e.preventDefault(); toast('F12 blocked'); return; }
if(e.ctrlKey&&e.shiftKey&&['i','j','c'].includes(k)){ e.preventDefault(); toast('Ctrl+Shift+'+e.key.toUpperCase()+' blocked'); return; }
if(e.ctrlKey&&k==='u'){ e.preventDefault(); toast('Ctrl+U blocked'); return; }
});
const thr=170;
setInterval(()=>{
const open=(window.outerWidth-window.innerWidth>thr)||(window.outerHeight-window.innerHeight>thr);
const b=$('#sbadge'); if(b) b.innerHTML=open?'&#128274; DEVTOOLS DETECTED':'&#128274; SHIELDED';
},1200);
console.log('%cAniVerse','font-size:22px;font-weight:800;background:linear-gradient(90deg,#8b5cf6,#22d3ee);-webkit-background-clip:text;color:transparent');
console.log('%cEmbed URLs are base64-encoded in the DOM.','color:#8b5cf6');
}

/* ══════════════════════ SEARCH + ROUTER ══════════════════════ */
let deb;
$('#q').addEventListener('input',e=>{
const v=e.target.value.trim(); clearTimeout(deb);
if(v.length<2){ $('#sug').classList.remove('on'); return; }
deb=setTimeout(async()=>{
const r=await metaSearch(v).catch(()=>[]);
const box=$('#sug');
if(!r.length){ box.classList.remove('on'); return; }
box.innerHTML=r.slice(0,7).map(m=>{
const t=m.title.romaji||m.title.english||m.title.native;
const c=(m.coverImage&&(m.coverImage.large||m.coverImage.extraLarge))||'';
return `<div class="sug" onclick="go('#/anime/${m._key}');document.getElementById('sug').classList.remove('on')">
<img src="${esc(c)}" alt=""/><div><div style="font-size:13.5px;font-weight:600">${esc(t)}</div>
<div style="font-size:11.5px;color:var(--dim)">${esc(m.format||'')}${m.seasonYear?' · '+m.seasonYear:''}</div></div></div>`;
}).join('');
box.classList.add('on');
},380);
});
$('#q').addEventListener('keydown',e=>{
if(e.key==='Enter'){ $('#sug').classList.remove('on'); const v=e.target.value.trim(); if(v) go('#/search/'+encodeURIComponent(v)); }
});
document.addEventListener('click',e=>{ if(!e.target.closest('.searchbar')) $('#sug').classList.remove('on'); });

async function router(){
const h=location.hash.slice(1)||'/';
window.scrollTo(0,0);
const p=h.split('/').filter((x,i)=>i>0||x!=='');
// p: ['search', q] | ['anime', key] | ['watch', key, ep]
if(h==='/'||h==='') return viewHome();
if(p[0]==='search') return viewSearch(decodeURIComponent(p.slice(1).join('/')));
if(p[0]==='anime') return viewDetail(decodeURIComponent(p[1]));
if(p[0]==='watch') return viewWatch(decodeURIComponent(p[1]), p[2]);
viewHome();
}
const rerender=()=>router();

/* ══════════════════════ BOOT ══════════════════════ */
$('#langBtn').textContent=cfg.lang.toUpperCase();
initAntiInspect();
window.addEventListener('hashchange',router);
router();
</script>
</body>
</html>
