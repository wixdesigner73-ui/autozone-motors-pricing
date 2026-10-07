/*!
 * Autozone Motors - Services & Pricing (full page, no hero)
 * Self-contained Web Component for a Wix "Custom Element".
 * Tag name to use in Wix: autozone-pricing
 * Prices and images are bundled / loaded from:
 * https://wixdesigner73-ui.github.io/autozone-motors-pricing/
 */
(function () {
"use strict";
if (customElements.get("autozone-pricing")) return;
function loadFont(){if(document.getElementById("az-inter-font"))return;var l=document.createElement("link");l.id="az-inter-font";l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";document.head.appendChild(l);}

var CSS = "\n:host{display:block;height:100%;\n  --bg:#f5f6f4; --surface:#fff; --ink:#15171a; --ink-2:#4a4f55; --ink-3:#7a8087;\n  --line:#e4e7e2; --line-2:#d3d8d0;\n  --dark:#1b1c1e; --dark-2:#26282b; --dark-3:#33363a;\n  --accent:#01ff13; --accent-ink:#0a6e12; --accent-soft:rgba(1,255,19,.13); --accent-line:rgba(10,110,18,.35);\n  --radius:14px; --radius-sm:10px;\n  --nav-h:0px;\n}\n*{box-sizing:border-box}\n@media (prefers-reduced-motion:reduce){.az{scroll-behavior:auto}*{transition:none!important}}\n.az{margin:0;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;scroll-behavior:smooth;background:var(--bg);color:var(--ink);font-family:Inter,system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;font-size:16px;line-height:1.5}\na{color:inherit}\nbutton,input,select{font:inherit;color:inherit}\n.wrap{width:100%;max-width:1160px;margin:0 auto;padding:0 20px}\n.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n:focus-visible{outline:3px solid var(--accent-ink);outline-offset:2px;border-radius:6px}\n\n/* buttons */\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 24px;border-radius:999px;border:1.5px solid transparent;font-weight:700;font-size:14px;letter-spacing:.06em;text-decoration:none;cursor:pointer;transition:background .15s,border-color .15s,transform .15s}\n.btn-primary{background:var(--accent);color:#06210a}\n.btn-primary:hover{background:#33ff42}\n.btn-ghost{border-color:rgba(255,255,255,.35);color:#fff;background:transparent}\n.btn-ghost:hover{border-color:#fff;background:rgba(255,255,255,.08)}\n.btn:active{transform:translateY(1px)}\n\n/* top bar + hero */\n.top{background:var(--dark);color:#fff}\n.top .wrap{display:flex;align-items:center;justify-content:space-between;height:60px}\n.logo{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.14em;font-size:14px;text-decoration:none}\n.logo i{display:block;width:26px;height:26px;border-radius:7px;background:var(--accent);position:relative;overflow:hidden}\n.logo i::after{content:\"\";position:absolute;inset:-4px 9px;background:var(--dark);transform:skewX(-24deg)}\n.top a.tel{font-size:14px;font-weight:600;text-decoration:none;color:#d8dbd6}\n.top a.tel:hover{color:var(--accent)}\n.hero{background:linear-gradient(90deg,rgba(20,21,23,.96) 28%,rgba(20,21,23,.55) 70%,rgba(20,21,23,.35)),url(https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/hero.jpg) 60% 55%/cover,var(--dark);color:#fff;position:relative;overflow:hidden;padding:44px 0 60px}\n.hero::before{content:\"\";position:absolute;inset:0;background:radial-gradient(600px 260px at 85% 0%,rgba(1,255,19,.12),transparent 70%)}\n.hero::after{content:\"\";position:absolute;left:0;right:0;bottom:0;height:3px;background:linear-gradient(90deg,var(--accent),transparent 60%)}\n.hero .wrap{position:relative}\n.eyebrow{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.2em;color:var(--accent);margin:0 0 14px}\n.hero h1{margin:0;font-size:clamp(32px,5.6vw,56px);line-height:1.04;font-weight:800;letter-spacing:-.02em;max-width:16ch}\n.hero p.lead{margin:18px 0 0;max-width:58ch;color:#bcc1bb;font-size:clamp(15px,1.6vw,17px)}\n.hero .cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}\n\n/* sticky nav */\n.nav{display:none!important;position:sticky;top:0;z-index:30;background:rgba(245,246,244,.94);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}\n.chips{display:flex;gap:8px;overflow-x:auto;padding:10px 20px;scrollbar-width:none;max-width:1160px;margin:0 auto;-webkit-overflow-scrolling:touch}\n.chips::-webkit-scrollbar{display:none}\n.chip{flex:none;min-height:40px;padding:0 16px;border-radius:999px;border:1px solid var(--line-2);background:var(--surface);font-size:14px;font-weight:600;color:var(--ink-2);text-decoration:none;display:inline-flex;align-items:center;white-space:nowrap;transition:all .15s}\n.chip:hover{border-color:var(--ink);color:var(--ink)}\n.chip.on{background:var(--dark);border-color:var(--dark);color:#fff;box-shadow:inset 0 -3px 0 var(--accent)}\n.nav-v{display:none;padding:0 20px 10px;max-width:1160px;margin:0 auto}\n.seg{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;background:var(--surface);border:1px solid var(--line-2);border-radius:12px;padding:4px}\n.seg button{min-height:40px;border:0;border-radius:9px;background:transparent;font-size:13px;font-weight:600;color:var(--ink-2);cursor:pointer;padding:0 2px}\n.seg button[aria-pressed=true]{background:var(--dark);color:#fff;box-shadow:inset 0 -3px 0 var(--accent)}\n\nsection.blk{padding:56px 0 8px;scroll-margin-top:calc(var(--nav-h) + 8px)}\n.h2{font-size:clamp(24px,3.2vw,34px);font-weight:800;letter-spacing:-.015em;line-height:1.15;margin:0}\n.sub{margin:8px 0 0;color:var(--ink-2);max-width:62ch}\n.label{font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--accent-ink)}\n\n/* vehicle selector */\n.vsel{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:22px}\n.vcard{position:relative;text-align:left;cursor:pointer;background:var(--surface);border:1.5px solid var(--line-2);border-radius:var(--radius);padding:18px 18px 16px;transition:all .15s;min-height:128px;display:flex;flex-direction:column;gap:10px}\n.vcard:hover{border-color:var(--ink)}\n.vcard svg{width:78px;height:34px;color:var(--ink-3);transition:color .15s}\n.vcard b{font-size:17px;font-weight:700;line-height:1.2}\n.vcard small{font-size:12.5px;color:var(--ink-3);line-height:1.35}\n.vcard[aria-checked=true]{background:var(--dark);border-color:var(--dark);color:#fff;box-shadow:0 0 0 3px var(--accent-soft)}\n.vcard[aria-checked=true] svg{color:var(--accent)}\n.vcard[aria-checked=true] small{color:#aeb3ad}\n.vcard[aria-checked=true]::after{content:\"\";position:absolute;top:14px;right:14px;width:22px;height:22px;border-radius:50%;background:var(--accent) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306210a' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7.5'/%3E%3C/svg%3E\") center/14px no-repeat}\n\n/* search */\n.search{position:relative;margin-top:22px}\n.search input{width:100%;height:56px;border-radius:var(--radius);border:1.5px solid var(--line-2);background:var(--surface);padding:0 48px 0 52px;font-size:16px;outline:none;transition:border-color .15s,box-shadow .15s}\n.search input:focus{border-color:var(--ink);box-shadow:0 0 0 4px var(--accent-soft)}\n.search svg{position:absolute;left:18px;top:17px;width:22px;height:22px;color:var(--ink-3)}\n.search .x{position:absolute;right:10px;top:10px;width:36px;height:36px;border:0;border-radius:50%;background:var(--bg);cursor:pointer;font-size:18px;line-height:1;display:none}\n.search.has .x{display:block}\n.hint{margin:10px 2px 0;font-size:13px;color:var(--ink-3)}\n.hint button{border:0;background:none;padding:0 2px;font-weight:600;color:var(--accent-ink);cursor:pointer;text-decoration:underline;text-underline-offset:3px}\n\n/* pricing groups */\n.group{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);margin-top:22px;overflow:hidden}\n.ghead{display:flex;align-items:center;gap:14px;width:100%;padding:20px 24px;border:0;background:var(--surface);cursor:pointer;text-align:left}\n.ghead .t{flex:1}\n.ghead h3{margin:0;font-size:20px;font-weight:800;letter-spacing:-.01em}\n.ghead p{margin:2px 0 0;font-size:13.5px;color:var(--ink-3)}\n.ghead .n{font-size:12px;font-weight:700;color:var(--ink-2);background:var(--bg);border-radius:999px;padding:4px 10px}\n.ghead .car{width:20px;height:20px;color:var(--ink-3);transition:transform .2s}\n.group.shut .car{transform:rotate(-90deg)}\n.group.shut .gbody{display:none}\n.cols,.row{display:grid;grid-template-columns:minmax(210px,1.7fr) repeat(4,minmax(96px,1fr));align-items:center}\n.cols{border-top:1px solid var(--line);background:#fafbf9}\n.cols>*{padding:11px 16px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);text-align:right}\n.cols>:first-child{text-align:left;padding-left:24px}\n.cols button{border:0;background:none;cursor:pointer;font:inherit;letter-spacing:inherit;text-transform:inherit;color:inherit;font-size:11.5px;font-weight:700}\n.cols button:hover{color:var(--ink)}\n.cols .sel{color:var(--accent-ink);background:var(--accent-soft)}\n.row{border-top:1px solid var(--line);position:relative;transition:background .12s}\n.row:hover{background:#fafbf9}\n.svc{padding:16px 16px 16px 24px}\n.svc .name{font-weight:600;font-size:16px;line-height:1.3}\n.svc .desc{display:block;font-size:13px;color:var(--ink-3);margin-top:2px}\n.p{padding:16px;text-align:right;font-weight:600;font-size:15px;color:var(--ink-2);font-variant-numeric:tabular-nums;align-self:stretch;display:flex;align-items:center;justify-content:flex-end}\n.p small{font-weight:600;font-size:12px;color:var(--ink-3)}\n.p.sel{background:var(--accent-soft);color:var(--accent-ink);font-weight:800;font-size:17px}\n.p .na{font-size:12.5px;font-weight:600;color:var(--ink-3)}\n.p.sel .na{color:var(--accent-ink)}\n.mp,.all{display:none}\n.more{display:flex;justify-content:center;padding:14px;border-top:1px solid var(--line)}\n.linkbtn{border:1.5px solid var(--line-2);background:var(--surface);border-radius:999px;min-height:42px;padding:0 20px;font-weight:600;font-size:14px;cursor:pointer;transition:all .15s}\n.linkbtn:hover{border-color:var(--ink)}\n.empty{margin-top:22px;padding:34px 24px;text-align:center;background:var(--surface);border:1px dashed var(--line-2);border-radius:var(--radius);color:var(--ink-2)}\n.empty b{display:block;color:var(--ink);font-size:18px;margin-bottom:4px}\n\n/* packages */\n.pkgs{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:22px}\n.pkg{background:var(--surface);border:1.5px solid var(--accent-line);border-radius:var(--radius);padding:24px;position:relative}\n.pkg::before{content:\"\";position:absolute;left:0;top:24px;bottom:24px;width:4px;border-radius:0 4px 4px 0;background:var(--accent)}\n.badge{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.16em;color:#06210a;background:var(--accent);border-radius:6px;padding:4px 9px}\n.pkg h3{margin:12px 0 4px;font-size:21px;font-weight:800;letter-spacing:-.01em;line-height:1.2}\n.incl{font-size:14px;color:var(--ink-2);margin:0}\n.incl b{font-weight:700;color:var(--ink)}\n.pp{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:20px}\n.pp div{border:1px solid var(--line);border-radius:var(--radius-sm);padding:10px 10px 11px;background:var(--bg)}\n.pp span{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3)}\n.pp strong{display:block;margin-top:2px;font-size:16px;font-weight:800;font-variant-numeric:tabular-nums}\n.pp .sel{background:var(--dark);border-color:var(--dark);color:#fff}\n.pp .sel span{color:var(--accent)}\n.pp .sel strong{color:#fff}\n\n/* filters */\n.fbar{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:22px}\n.fld label{display:block;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin:0 0 6px}\n.fld select{width:100%;height:52px;border-radius:var(--radius-sm);border:1.5px solid var(--line-2);background:var(--surface) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237a8087' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\") right 14px center/18px no-repeat;padding:0 40px 0 14px;appearance:none;-webkit-appearance:none;cursor:pointer;font-weight:500}\n.fld select:focus{outline:none;border-color:var(--ink);box-shadow:0 0 0 4px var(--accent-soft)}\n.ftable{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);margin-top:18px;overflow:hidden}\n.fr{display:grid;grid-template-columns:minmax(180px,1.6fr) 1fr 1fr;align-items:center;border-top:1px solid var(--line);padding:0 24px}\n.fr:first-child{border-top:0}\n.fr.fh{background:#fafbf9;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)}\n.fr.fh>*{padding:11px 0}\n.fr>*{padding:14px 0}\n.fr .v b{font-weight:600;display:block;line-height:1.3}\n.fr .v small{color:var(--ink-3);font-size:12.5px}\n.tag{display:inline-block;font-size:12.5px;font-weight:600;border-radius:999px;padding:3px 11px;background:var(--bg);border:1px solid var(--line-2)}\n.fr .pr{text-align:right;font-weight:800;font-size:17px;color:var(--accent-ink);font-variant-numeric:tabular-nums}\n.fr.fh .pr{color:var(--ink-3);font-size:11.5px}\n.fr .tg{padding-left:8px}\n\n/* PPF */\n.ppf{background:linear-gradient(100deg,rgba(20,21,23,.95) 35%,rgba(20,21,23,.72)),url(https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/ppf-bay.jpg) center/cover,var(--dark);color:#fff;border-radius:20px;padding:32px;margin-top:22px;position:relative;overflow:hidden;display:grid;grid-template-columns:1.05fr 1fr;gap:32px}\n.ppf::before{content:\"\";position:absolute;inset:0;background:radial-gradient(520px 240px at 0% 0%,rgba(1,255,19,.14),transparent 70%)}\n.split{display:grid;grid-template-columns:1.1fr 1fr;gap:32px;align-items:center}\n.split figure,.gal figure{margin:0;border-radius:var(--radius);overflow:hidden;position:relative;background:var(--dark-2)}\n.split img{display:block;width:100%;height:190px;object-fit:cover}\n.gal{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:14px;margin-top:22px}\n.gal img{display:block;width:100%;height:100%;min-height:240px;object-fit:cover;transition:transform .4s}\n.gal figure:hover img{transform:scale(1.03)}\n.gal figcaption{position:absolute;left:0;right:0;bottom:0;padding:34px 16px 14px;background:linear-gradient(transparent,rgba(10,11,12,.85));color:#fff;font-size:14px;font-weight:600}\n.ppf>*{position:relative}\n.ppf .label{color:var(--accent)}\n.ppf h3{margin:8px 0 8px;font-size:26px;font-weight:800;letter-spacing:-.01em;line-height:1.15}\n.ppf p{margin:0;color:#b9beb8;font-size:15px}\n.ppf .note{margin-top:22px;padding:16px 18px;border:1px solid rgba(255,255,255,.14);border-radius:var(--radius-sm);background:rgba(255,255,255,.04);font-size:14px;color:#d3d7d1}\n.ppf .note a{color:var(--accent);font-weight:700;text-decoration:none}\n.ppf .note a:hover{text-decoration:underline}\n.ptiles{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-content:start}\n.pt{border:1px solid rgba(255,255,255,.14);border-radius:var(--radius);padding:16px 16px 18px;background:rgba(255,255,255,.04);transition:all .15s}\n.pt span{display:block;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#98a09a}\n.pt strong{display:block;margin-top:6px;font-size:23px;font-weight:800;font-variant-numeric:tabular-nums}\n.pt.sel{background:var(--accent);border-color:var(--accent);color:#06210a}\n.pt.sel span{color:#0d4a15}\n\n/* disclaimer */\n.info{display:flex;gap:12px;align-items:flex-start;margin-top:40px;padding:14px 18px;border:1px solid var(--line-2);border-radius:var(--radius-sm);background:rgba(255,255,255,.6);font-size:13.5px;color:var(--ink-2)}\n.info svg{flex:none;width:20px;height:20px;margin-top:1px;color:var(--ink-3)}\n\n/* faq */\n.faq{max-width:820px;margin-top:22px}\n.faq details{border-top:1px solid var(--line-2)}\n.faq details:last-child{border-bottom:1px solid var(--line-2)}\n.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:18px 2px;font-weight:600;font-size:17px}\n.faq summary::-webkit-details-marker{display:none}\n.faq summary::after{content:\"+\";flex:none;width:30px;height:30px;border-radius:50%;background:var(--surface);border:1px solid var(--line-2);display:grid;place-items:center;font-size:18px;font-weight:500;line-height:1;transition:transform .2s}\n.faq details[open] summary::after{content:\"\u2013\";background:var(--accent);border-color:var(--accent)}\n.faq details p{margin:0 0 18px;padding:0 48px 0 2px;color:var(--ink-2)}\n\n/* cta */\n.final{background:linear-gradient(rgba(20,21,23,.86),rgba(20,21,23,.92)),url(https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/building.jpg) center 35%/cover,var(--dark);color:#fff;border-radius:22px;padding:56px 32px;text-align:center;position:relative;overflow:hidden;margin-top:64px}\n.final::before{content:\"\";position:absolute;inset:0;background:radial-gradient(640px 260px at 50% 0%,rgba(1,255,19,.17),transparent 70%)}\n\n/* calculator */\n.calc{display:grid;grid-template-columns:1fr 380px;gap:24px;margin-top:22px;align-items:start}\n.cg{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);margin-bottom:12px;overflow:hidden}\n.cg summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:12px;padding:16px 20px;font-weight:800;font-size:17px}\n.cg summary::-webkit-details-marker{display:none}\n.cg summary .cnt{margin-left:auto;font-size:12px;font-weight:700;color:var(--accent-ink);background:var(--accent-soft);border-radius:999px;padding:3px 10px;display:none}\n.cg summary .cnt.on{display:inline-block}\n.cg summary::after{content:\"\";width:18px;height:18px;flex:none;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237a8087' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\") center/contain no-repeat;transition:transform .2s}\n.cg[open] summary::after{transform:rotate(180deg)}\n.ci{display:flex;align-items:center;gap:14px;padding:12px 20px;border-top:1px solid var(--line);min-height:62px}\n.ci label{flex:1;display:flex;align-items:center;gap:14px;cursor:pointer;min-width:0}\n.ci input[type=checkbox]{appearance:none;-webkit-appearance:none;flex:none;width:24px;height:24px;border-radius:7px;border:1.5px solid var(--line-2);background:var(--surface);cursor:pointer;display:grid;place-items:center;transition:all .12s}\n.ci input[type=checkbox]:checked{background:var(--accent);border-color:var(--accent)}\n.ci input[type=checkbox]:checked::after{content:\"\";width:12px;height:7px;border:solid #06210a;border-width:0 0 3px 3px;transform:rotate(-45deg) translate(1px,-1px)}\n.ci input:disabled{opacity:.4;cursor:not-allowed}\n.ci .nm{font-weight:600;line-height:1.3}\n.ci .nm small{display:block;font-weight:400;font-size:12.5px;color:var(--ink-3)}\n.ci .pr{font-weight:800;font-variant-numeric:tabular-nums;color:var(--ink-2);white-space:nowrap}\n.ci.on{background:var(--accent-soft)}\n.ci.on .pr{color:var(--accent-ink)}\n.ci.dis .nm{color:var(--ink-3)}\n.ci .na{font-size:12.5px;font-weight:600;color:var(--ink-3)}\n.qty{display:inline-flex;align-items:center;border:1.5px solid var(--line-2);border-radius:999px;background:var(--surface);overflow:hidden}\n.qty button{width:34px;height:34px;border:0;background:none;font-size:18px;cursor:pointer;line-height:1}\n.qty button:hover{background:var(--bg)}\n.qty span{min-width:22px;text-align:center;font-weight:700;font-size:14px}\n.cfil{padding:16px 20px;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr 1fr;gap:12px}\n.cfil .fld select{height:48px}\n.sum{position:sticky;top:calc(var(--nav-h) + 16px);background:var(--dark);color:#fff;border-radius:var(--radius);padding:24px;overflow:hidden}\n.sum h3{margin:0 0 4px;font-size:20px;font-weight:800}\n.sum .vt{font-size:13px;color:#aeb3ad}\n.sum ul{list-style:none;margin:18px 0 0;padding:0;max-height:300px;overflow:auto}\n.sum li{display:flex;gap:10px;align-items:flex-start;justify-content:space-between;padding:10px 0;border-top:1px solid rgba(255,255,255,.1);font-size:14px}\n.sum li .l{flex:1;min-width:0}\n.sum li .l small{display:block;color:#98a09a;font-size:12px}\n.sum li b{white-space:nowrap;font-variant-numeric:tabular-nums}\n.sum li button{border:0;background:rgba(255,255,255,.1);color:#fff;width:24px;height:24px;border-radius:50%;cursor:pointer;line-height:1;flex:none;margin-top:1px}\n.sum li button:hover{background:rgba(255,255,255,.22)}\n.sum .none{padding:22px 0 6px;color:#98a09a;font-size:14px;border-top:1px solid rgba(255,255,255,.1);margin-top:18px}\n.tot{display:flex;justify-content:space-between;align-items:baseline;margin-top:14px;padding-top:16px;border-top:1.5px solid rgba(255,255,255,.22)}\n.tot span{font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#aeb3ad}\n.tot strong{font-size:32px;font-weight:800;color:var(--accent);font-variant-numeric:tabular-nums;letter-spacing:-.01em}\n.sum .fine{margin:12px 0 18px;font-size:12.5px;color:#98a09a;line-height:1.45}\n.sum .btn{width:100%}\n.sum .clr{display:block;margin:12px auto 0;border:0;background:none;color:#aeb3ad;font-size:13px;text-decoration:underline;text-underline-offset:3px;cursor:pointer}\n.sum .clr:hover{color:#fff}\n.final>*{position:relative}\n.final h2{margin:0;font-size:clamp(28px,4.4vw,44px);font-weight:800;letter-spacing:-.02em;line-height:1.1}\n.final p{margin:14px auto 0;max-width:52ch;color:#bcc1bb}\n.final .cta{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:28px}\n.final .addr{margin-top:26px;font-size:13.5px;color:#8f958f}\nfooter{padding:36px 0 44px;color:var(--ink-3);font-size:13px;text-align:center}\n\n/* tablet */\n@media (max-width:1000px){\n  .vsel{grid-template-columns:repeat(2,1fr)}\n  .cols,.row{grid-template-columns:minmax(170px,1.5fr) repeat(4,minmax(78px,1fr))}\n  .p{padding:14px 10px;font-size:14px}.p.sel{font-size:15px}\n  .svc{padding:14px 10px 14px 18px}.cols>:first-child{padding-left:18px}.cols>*{padding:10px;font-size:10.5px}.cols button{font-size:10.5px}\n  .ghead{padding:18px}\n  .pkgs{grid-template-columns:1fr}\n  .ppf{grid-template-columns:1fr;padding:26px}\n  .calc{grid-template-columns:1fr}\n  .sum{position:static}\n  .split{grid-template-columns:1fr;gap:18px}\n  .gal{grid-template-columns:1fr 1fr}.gal figure:first-child{grid-column:1/-1}.gal figure:first-child img{min-height:260px}\n}\n/* mobile */\n@media (max-width:719px){\n  :root{--nav-h:0px}\n  .wrap{padding:0 16px}\n  .chips{padding:10px 16px}.nav-v{display:block;padding:0 16px 10px}\n  .hero{padding:32px 0 44px}\n  .hero .cta .btn{flex:1 1 100%}\n  section.blk{padding-top:44px}\n  .vsel{gap:10px}.vcard{padding:14px;min-height:112px}.vcard b{font-size:16px}.vcard svg{width:66px;height:30px}\n  .vcard[aria-checked=true]::after{top:10px;right:10px}\n  .cols{display:none}\n  .row{grid-template-columns:1fr auto;cursor:pointer;padding:0}\n  .row>.p{display:none}\n  .svc{padding:16px 8px 16px 16px}\n  .svc .name{font-size:16px}\n  .mp{display:block;padding:12px 16px 12px 8px;text-align:right}\n  .mp small{display:block;font-size:11.5px;font-weight:600;color:var(--ink-3)}\n  .mp strong{font-size:19px;font-weight:800;color:var(--accent-ink);font-variant-numeric:tabular-nums;white-space:nowrap}\n  .mp .na{font-size:13px;font-weight:700;color:var(--ink-2)}\n  .mp .tap{display:block;font-size:11px;color:var(--ink-3);margin-top:2px}\n  .row.open .all{display:grid}\n  .all{grid-column:1/-1;grid-template-columns:1fr 1fr;gap:8px;padding:0 16px 16px}\n  .all div{background:var(--bg);border-radius:var(--radius-sm);padding:9px 12px}\n  .all div.sel{background:var(--accent-soft);box-shadow:inset 0 0 0 1.5px var(--accent-line)}\n  .all span{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3)}\n  .all b{font-size:15px;font-weight:700;font-variant-numeric:tabular-nums}\n  .all .na{font-size:13px;color:var(--ink-3);font-weight:600}\n  .ghead h3{font-size:18px}.ghead p{display:none}\n  .pkg{padding:20px}.pkg h3{font-size:19px}\n  .pp{grid-template-columns:1fr 1fr}\n  .fbar{grid-template-columns:1fr}\n  .hero{background:linear-gradient(rgba(20,21,23,.88),rgba(20,21,23,.8)),url(https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/hero.jpg) 60% 50%/cover,var(--dark)}\n  .gal{grid-template-columns:1fr}.gal img{min-height:200px}\n  .ci{padding:12px 14px;gap:10px;flex-wrap:wrap}.ci label{flex:1 1 60%}\n  .cg summary{padding:16px 14px}.cfil{grid-template-columns:1fr;padding:14px}\n  .sum{padding:20px}.tot strong{font-size:28px}\n  .split img{height:150px}\n  .fr{grid-template-columns:1fr auto;padding:0 16px;row-gap:0}\n  .fr.fh{display:none}\n  .fr>*{padding:0}\n  .fr{padding:14px 16px}\n  .fr .v{grid-column:1;grid-row:1}\n  .fr .tg{grid-column:1;grid-row:2;padding:6px 0 0}\n  .fr .pr{grid-column:2;grid-row:1/3;align-self:center;font-size:19px}\n  .ppf{padding:22px 18px;gap:22px}.ppf h3{font-size:22px}.pt strong{font-size:20px}\n  .final{padding:44px 20px;border-radius:18px;margin-top:48px}\n  .final .btn{flex:1 1 100%}\n  .faq summary{font-size:16px}.faq details p{padding-right:8px}\n  .sticky-hint{display:none}\n}\n";
var HTML = "<div class=\"az\"><nav class=\"nav\" aria-label=\"Service categories\">\n  <div class=\"chips\" id=\"chips\"></div>\n  <div class=\"nav-v\">\n    <div class=\"seg\" id=\"segV\" role=\"group\" aria-label=\"Vehicle type\"></div>\n  </div>\n</nav>\n\n<main class=\"wrap\">\n\n  <section class=\"blk\" id=\"vehicle\" style=\"padding-top:44px\">\n    <span class=\"label\">Step 1</span>\n    <h2 class=\"h2\">Select Your Vehicle Type</h2>\n    <p class=\"sub\">Prices are set by vehicle category. Pick yours and the matching price is highlighted everywhere on this page.</p>\n    <div class=\"vsel\" id=\"vsel\" role=\"radiogroup\" aria-label=\"Vehicle type\"></div>\n\n    <div class=\"search\" id=\"searchBox\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-3.5-3.5\"/></svg>\n      <label class=\"sr\" for=\"q\">Search services</label>\n      <input id=\"q\" type=\"search\" placeholder=\"Search services...\" autocomplete=\"off\" inputmode=\"search\">\n      <button class=\"x\" id=\"qx\" type=\"button\" aria-label=\"Clear search\">&times;</button>\n    </div>\n    <p class=\"hint\" id=\"hint\">Try <button type=\"button\" data-s=\"brake\">brake</button>, <button type=\"button\" data-s=\"alignment\">alignment</button> or <button type=\"button\" data-s=\"engine\">engine</button>.</p>\n  </section>\n\n  <div id=\"groups\"></div>\n\n  <section class=\"blk\" id=\"filters\">\n    <div class=\"split\">\n      <div>\n        <span class=\"label\">Vehicle specific</span>\n        <h2 class=\"h2\">Oil &amp; Filter Pricing</h2>\n        <p class=\"sub\">Find applicable filter options and pricing based on your vehicle.</p>\n      </div>\n      <figure><img src=\"https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/oil.jpg\" alt=\"Engine oil display at the Autozone Motors service counter\" loading=\"lazy\"></figure>\n    </div>\n    <div class=\"fbar\">\n      <div class=\"fld\"><label for=\"fMake\">Select Make</label><select id=\"fMake\"></select></div>\n      <div class=\"fld\"><label for=\"fVeh\">Select Vehicle</label><select id=\"fVeh\"></select></div>\n      <div class=\"fld\"><label for=\"fType\">Select Filter Type</label><select id=\"fType\"></select></div>\n    </div>\n    <div class=\"ftable\" id=\"ftable\"></div>\n    <div class=\"more\" style=\"border:0\" id=\"fmore\"></div>\n  </section>\n\n  <section class=\"blk\" id=\"ppf\">\n    <span class=\"label\">Premium protection</span>\n    <h2 class=\"h2\">PPF &amp; Coating</h2>\n    <p class=\"sub\">Paint protection film and coating services for higher-value protection.</p>\n    <div class=\"ppf\">\n      <div>\n        <span class=\"label\">Listed price</span>\n        <h3>PPF Removal</h3>\n        <p>Professional removal of existing paint protection film, priced by vehicle category.</p>\n        <div class=\"note\">Looking to protect your paint? PPF and coating options vary by brand, film thickness and package, so we confirm them for your exact vehicle. <a href=\"#contact\">Ask for a quote &rarr;</a></div>\n      </div>\n      <div class=\"ptiles\" id=\"ppfTiles\"></div>\n    </div>\n  </section>\n\n  <div class=\"info\" role=\"note\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v5M12 8h.01\"/></svg>\n    <span>Prices shown are based on vehicle category and listed service specifications. Final pricing may vary where additional parts, repairs, or vehicle-specific requirements are identified after inspection.</span>\n  </div>\n\n  <section class=\"blk\" id=\"workshop\">\n    <span class=\"label\">Our workshop</span>\n    <h2 class=\"h2\">Where your car is looked after</h2>\n    <div class=\"gal\">\n      <figure><img src=\"https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/bay.jpg\" alt=\"A car on a lift inside an Autozone Motors service bay\" loading=\"lazy\"><figcaption>Service bays with vehicle lifts</figcaption></figure>\n      <figure><img src=\"https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/floor.jpg\" alt=\"Autozone Motors service floor with lifts and detailing lights\" loading=\"lazy\"><figcaption>Detailing &amp; service floor</figcaption></figure>\n      <figure><img src=\"https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/wheels.jpg\" alt=\"Rims and tyres on display at Autozone Motors\" loading=\"lazy\"><figcaption>Tyres &amp; rims</figcaption></figure>\n    </div>\n  </section>\n\n  <section class=\"blk\" id=\"faq\">\n    <span class=\"label\">Pricing FAQ</span>\n    <h2 class=\"h2\">Good to know</h2>\n    <div class=\"faq\">\n      <details><summary>Are these prices fixed for every vehicle?</summary><p>No. Prices are fixed per vehicle category (Hatchback, Sedan, SUV or Full Size SUV), so two cars in the same category share the same listed price.</p></details>\n      <details><summary>How do I know which vehicle category my car belongs to?</summary><p>Go by body size and type. Small cars such as an Alto or Picanto are Hatchbacks, cars such as a Civic or City are Sedans, and larger vehicles fall under SUV or Full Size SUV. Not sure? Call or WhatsApp us and we'll tell you.</p></details>\n      <details><summary>Can the final price change after inspection?</summary><p>It can. If extra parts, repairs or vehicle-specific requirements are found, we'll tell you before going ahead. Denting work is always priced after inspection.</p></details>\n      <details><summary>Do service prices include parts?</summary><p>Items marked as labour cover workmanship only. Parts are not part of the listed service price, and we confirm any parts needed for your vehicle before starting.</p></details>\n      <details><summary>Can I book a service directly from this page?</summary><p>Yes. Use the Book a Service button to reach our contact page, or call or WhatsApp us to confirm availability and a time that suits you.</p></details>\n      <details><summary>Do you provide vehicle-specific filter options?</summary><p>Yes. Use the Oil &amp; Filter Pricing section above to choose your make and vehicle and see the oil, air and AC filter prices that apply.</p></details>\n    </div>\n  </section>\n\n  <section class=\"final\" id=\"contact\">\n    <h2>Found the Service You Need?</h2>\n    <p>Book your service or contact our team to confirm availability and vehicle-specific requirements.</p>\n    <div class=\"cta\">\n      <a class=\"btn btn-primary\" href=\"https://www.autozonemotors.com/contact-us\">BOOK A SERVICE</a>\n      <a class=\"btn btn-ghost\" href=\"tel:+923333053389\">CALL AUTOZONE MOTORS</a>\n      <a class=\"btn btn-ghost\" id=\"wa\" href=\"https://wa.me/923333053389\" target=\"_blank\" rel=\"noopener\">WHATSAPP US</a>\n    </div>\n    <div class=\"addr\">51 Pine Ave, T &amp; T Aabpara Housing Society, Lahore &middot; 0333 3053389</div>\n  </section>\n\n  <section class=\"blk\" id=\"calculator\" style=\"padding-bottom:56px\">\n    <span class=\"label\">Price calculator</span>\n    <h2 class=\"h2\">Estimate Your Service Cost</h2>\n    <p class=\"sub\">Choose your vehicle type, tick the services you need and see an estimated total. Prices come from the same list above.</p>\n    <div class=\"seg\" id=\"calcSeg\" role=\"group\" aria-label=\"Calculator vehicle type\" style=\"margin-top:20px;max-width:560px\"></div>\n    <div class=\"calc\">\n      <div id=\"calcList\"></div>\n      <aside class=\"sum\" id=\"calcSum\" aria-live=\"polite\"></aside>\n    </div>\n  </section>\n</main>\n\n\n\n</div>";

function init(ROOT,HOST){
var SC=ROOT.querySelector(".az");
var hAttr=HOST.getAttribute("height");if(hAttr)SC.style.height=hAttr;
function canScroll(){return SC.scrollHeight>SC.clientHeight+2}
function fit(){
  if(hAttr)return;
  SC.style.height="";
  if(canScroll())return;
  for(var p=HOST;p&&p!==document.body&&p!==document.documentElement;p=p.parentElement){
    var cs=getComputedStyle(p);
    if(/(hidden|clip|auto|scroll)/.test(cs.overflowY)&&p.clientHeight>40&&p.clientHeight<SC.scrollHeight-4){SC.style.height=p.clientHeight+"px";return}
  }
}
"use strict";

/* ---------- Data (source: AUTO ZONE SERVICE RATES + FILTERS sheets) ---------- */
var VEH=[
  {k:"hatch",n:"Hatchback",s:"HATCHBACK",ex:"e.g. Alto, Picanto"},
  {k:"sedan",n:"Sedan",s:"SEDAN",ex:"e.g. Civic, City"},
  {k:"suv",n:"SUV",s:"SUV",ex:"e.g. Sportage, Tucson"},
  {k:"full",n:"Full Size SUV",s:"FULL SIZE",ex:"e.g. Prado, Land Cruiser"}
];
var INSP="insp"; // price "as per actual inspection"
var GROUPS=[
  {id:"mech",t:"Mechanical Services",d:"Engine, tuning, suspension and drivetrain",rows:[
    ["Half Tuning","",[2500,3500,4500,6000]],
    ["CAT Service","",[3000,4000,5000,6000]],
    ["Injector Cleaning","",[3000,4000,5000,6000]],
    ["Fuel Pump Service","",[1500,2500,3500,4500]],
    ["Full Suspension, Front","Labour charges",[10000,15000,20000,25000]],
    ["Full Suspension, Rear","Labour charges",[6000,8000,14000,18000]],
    ["Shocks Replacement","Labour charges",[2000,3000,4000,5000]],
    ["Engine Replacement","Labour charges",[15000,20000,25000,30000]],
    ["Gear Replacement","Labour charges",[10000,15000,20000,25000]],
    ["Clutch / Pressure Plate Replacement","Labour charges",[5000,8000,null,null]],
    ["Front or Rear Bearing Change","Labour charges",[2500,3500,4500,6000]],
    ["Gear Oil Change","Labour charges",[1000,2000,2500,3500]]
  ]},
  {id:"elec",t:"Electrical & Diagnostics",d:"Scanning, electrical work and fuel system",rows:[
    ["Scanner Check","Computerised fault scan",[500,500,1000,1000]],
    ["Minor Electric Work","",[500,500,500,500]],
    ["Fuel Pump Change","",[1000,1500,2000,2500]]
  ]},
  {id:"ac",t:"AC & HVAC",d:"Air-conditioning service and repair",rows:[
    ["AC Service","",[2000,2500,3500,5000]],
    ["Gas Charging","",[4500,6000,8000,12000]],
    ["Cooling Coil Change","Labour charges",[8000,10000,12000,18000]]
  ]},
  {id:"wheels",t:"Wheels & Brakes",d:"Balancing, alignment and braking",rows:[
    ["Balancing","",[1000,1500,2000,2500]],
    ["Alignment","",[2500,3500,4000,4500]],
    ["Brake Service","",[1500,2500,3500,4500]]
  ]},
  {id:"body",t:"Body & Paint",d:"Denting, sanding and metallic paint",rows:[
    ["Denting Work","Priced after inspection",[INSP,INSP,INSP,INSP]],
    ["Sanding","Per piece",[500,1000,1500,2000]],
    ["Bumper Paint (Metallic)","",[7000,9000,11000,15000]],
    ["Body Paint (Metallic)","Per piece",[7000,9000,11000,15000]]
  ]},
  {id:"detail",t:"Detailing",d:"Interior, exterior and full detailing",rows:[
    ["Premium Wash","",[3000,4500,5500,7000]],
    ["Interior Detailing","",[5000,8000,10000,12000]],
    ["Exterior Detailing","",[7000,10000,15000,18000]],
    ["General Service (Without Scaling)","",[8000,11000,14000,18000]],
    ["Complete Detailing","",[12000,18000,25000,30000]]
  ]}
];
var PKGS=[
  {n:"Complete General Tuning",inc:["CAT Service","Injector Cleaning"],p:[8500,11500,14500,18000]},
  {n:"Balancing & Alignment",inc:["Balancing","Alignment"],p:[3500,5000,6000,7000]}
];
var PPF_REMOVAL=[15000,25000,30000,40000];
var NAVS=[["mech","Mechanical"],["elec","Electrical & Diagnostics"],["ac","AC & HVAC"],["wheels","Wheels & Brakes"],["body","Body & Paint"],["detail","Detailing"],["packages","Packages"],["filters","Oil & Filters"],["ppf","PPF & Coating"],["calculator","Calculator"]];

/* filters: [make, vehicle, oil, air, ac] */
var FT=[["oil","Oil Filter"],["air","Air Filter"],["ac","AC Filter"]];
var FD=[
["Toyota","Corolla 09",1250,1250,1250],["Toyota","Vitz",1250,1250,1250],["Toyota","Mira",1250,1250,1250],["Toyota","Move",1250,1250,1250],["Toyota","Corolla 13 to 26",1250,1500,1250],["Toyota","Grande",1250,1500,1250],["Toyota","Aqua",1250,1500,1250],["Toyota","Yaris",1250,2200,1250],["Toyota","Prius",1250,2200,1250],["Toyota","Yaris Import",1250,2200,1250],["Toyota","Cross",1250,2200,1250],["Toyota","Raiz",1250,2200,1250],["Toyota","Camry",1650,2200,1250],["Toyota","Prado",1650,4800,2000],["Toyota","Fortuner",2450,4800,2000],["Toyota","Revo",2450,4800,2000],["Toyota","Vigo",2450,3000,2000],["Toyota","Land Cruiser V8",1850,6850,2000],
["Honda","Civic CF",1550,2250,1250],["Honda","Civic Reborn",1550,2250,1250],["Honda","Civic Rebirth",1550,2250,1250],["Honda","Civic X 17",1550,2250,1250],["Honda","Civic Turbo 1.5",1550,3000,1250],["Honda","Civic New",1550,3000,1250],["Honda","City 7-10",1550,1850,1250],["Honda","City 10-22",1550,1850,1250],["Honda","City 22-26",1550,1850,1250],["Honda","Vezel",1550,1850,1250],["Honda","BRV",1550,1850,1250],
["Suzuki","Alto",950,1300,1050],["Suzuki","Cultus",950,1300,1050],["Suzuki","Wagon R",950,1300,1050],["Suzuki","Swift New",950,1300,1050],
["Hyundai","Tucson",2450,3500,2500],["Hyundai","Sonata",2450,3500,2500],["Hyundai","Elantra",2450,3500,2500],
["Haval","Jolion",2450,3500,2500],["Haval","Jolion Hybrid",2450,3500,2500],["Haval","H6",2450,3500,2500],["Haval","BJ40",2450,3500,2500],["Haval","H6 HEV",2800,5450,2500],["Haval","Tank",2800,5450,2500],
["Kia","Sportage",2450,3650,2500],["Kia","Stonic",2450,3650,2500],["Kia","Santa Fe",2450,3650,2500],["Kia","Picanto",1550,1850,1250],
["Changan","Alsvin",1550,2450,2000],["Changan","Oshan X7",2450,3850,2500],["Changan","Karvan",1250,1600,1250],
["Chery","Tigo 6",2450,3450,2000],
["BYD","Atto 3",null,4250,3000],
["Jaecoo","J5",null,4850,3000],["Jaecoo","J7",null,4850,3000],
["JAC","J9 Hunter",2450,3500,3000],
["MG","HS / ZS",2450,3200,3000],
["Peugeot","Peugeot",null,3450,2000]
];

/* ---------- Helpers ---------- */
var $=function(s,r){return (r||ROOT).querySelector(s)};
function scrollToEl(el){
  if(canScroll()){var top=el.getBoundingClientRect().top-SC.getBoundingClientRect().top+SC.scrollTop-($(".nav").offsetHeight+8);SC.scrollTo({top:Math.max(0,top),behavior:"smooth"})}
  else el.scrollIntoView({behavior:"smooth",block:"start"});
}
var money=function(n){return "Rs. "+n.toLocaleString("en-US")};
var CAR='<svg class="car" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
var BODY={
  hatch:'M6 22v-5c0-2 1-3 3-3.5L14 8c1-1 2-1.5 4-1.5h12c3 0 5 1 7 3.5l4 4c4 .5 6 1 8 2.5 2 1 3 2.5 3 5v3.5',
  sedan:'M5 22v-4c0-2 1-3 3-3.5L17 13l7-5c1-.8 2-1 4-1h12c2 0 3.500.6 5 2l5 4.500 4 1c3 .7 5 1.500 6 3.500l1 3.500V22',
  suv:'M5 22v-6c0-2 1-3 3-3.500L11 12l3-4.500c1-1.200 2-1.500 4-1.500h24c2.500 0 3.500.5 5 2l5 5.500c4 .5 6 1 7.500 2.500 1 1 1.500 2.500 1.500 5V22',
  full:'M4 22v-7c0-2 1-3 3-3.500L9 11l2.500-4c1-1.500 2-2 4-2h32c2.500 0 3.500.6 5 2.200l5 5.500c4 .5 6.500 1 8 2.500 1 1 1.500 2.500 1.500 5V22'
};
function carSvg(k){
  var vb=k==="full"?"0 0 74 30":"0 0 74 30";
  return '<svg viewBox="'+vb+'" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+BODY[k]+'" transform="translate(0 2)"/><path d="M12 24h8M52 24h14" transform="translate(0 2)" opacity="0"/><circle cx="19" cy="25" r="4" fill="var(--wheel,#fff)"/><circle cx="55" cy="25" r="4" fill="var(--wheel,#fff)"/></svg>';
}

/* ---------- State ---------- */
var st={v:0,q:"",open:{},expanded:{},rowOpen:{}};
var LIMIT=6;

/* ---------- Vehicle selectors ---------- */
function drawVehicles(){
  $("#vsel").innerHTML=VEH.map(function(v,i){
    return '<button type="button" class="vcard" role="radio" aria-checked="'+(i===st.v)+'" data-i="'+i+'">'+carSvg(v.k)+'<b>'+v.n+'</b><small>'+v.ex+'</small></button>';
  }).join("");
  var seg=VEH.map(function(v,i){
    return '<button type="button" aria-pressed="'+(i===st.v)+'" data-i="'+i+'">'+(v.k==="full"?"Full Size":v.n)+'</button>';
  }).join("");
  $("#segV").innerHTML=seg;$("#calcSeg").innerHTML=seg;
}
function setVehicle(i){
  st.v=i;drawVehicles();renderGroups();renderPackages();renderPPF();
  if(typeof renderCalcList==="function"){var cm=$("#cMake")?[$("#cMake").value,$("#cVeh").value]:["",""];renderCalcList();if(cm[0]){$("#cMake").value=cm[0];$("#cMake").dispatchEvent(new Event("change",{bubbles:true}));$("#cVeh").value=cm[1];renderCfItems()}}
  $("#wa").href="https://wa.me/923333053389?text="+encodeURIComponent("Hello Autozone Motors, I'd like to check a service price for my "+VEH[i].n+".");
}

/* ---------- Pricing groups ---------- */
function cell(v,sel,k,short){
  var c='<div class="p'+(sel?' sel':'')+'" data-k="'+k+'">';
  if(v===null)c+='<span class="na" title="Not listed for this vehicle type. Please contact us.">N/A</span>';
  else if(v===INSP)c+='<span class="na">On inspection</span>';
  else c+=money(v);
  return c+'</div>';
}
function mobilePrice(v){
  if(v===null)return '<span class="na">Not available</span>';
  if(v===INSP)return '<span class="na">On inspection</span>';
  return '<strong>'+money(v)+'</strong>';
}
function rowHtml(r,gid,idx){
  var id=gid+idx,sel=st.v,p=r[2];
  var h='<div class="row'+(st.rowOpen[id]?' open':'')+'" data-id="'+id+'" role="row">';
  h+='<div class="svc"><span class="name">'+r[0]+'</span>'+(r[1]?'<span class="desc">'+r[1]+'</span>':'')+'</div>';
  for(var i=0;i<4;i++)h+=cell(p[i],i===sel,VEH[i].k);
  h+='<div class="mp"><small>'+VEH[sel].n+'</small>'+mobilePrice(p[sel])+'<span class="tap">'+(st.rowOpen[id]?'Hide all':'Tap for all')+'</span></div>';
  h+='<div class="all">'+VEH.map(function(v,i){
    var t=p[i]===null?'<span class="na">N/A</span>':p[i]===INSP?'<span class="na">On inspection</span>':'<b>'+money(p[i])+'</b>';
    return '<div class="'+(i===sel?'sel':'')+'"><span>'+v.n+'</span>'+t+'</div>';
  }).join("")+'</div>';
  return h+'</div>';
}
function colsHtml(){
  return '<div class="cols" role="row"><div>Service</div>'+VEH.map(function(v,i){
    return '<div class="'+(i===st.v?'sel':'')+'"><button type="button" data-i="'+i+'" title="Highlight '+v.n+' prices">'+v.n+'</button></div>';
  }).join("")+'</div>';
}
function matches(name,desc){
  if(!st.q)return true;
  var s=(name+" "+desc).toLowerCase();
  return st.q.toLowerCase().split(/\s+/).every(function(w){return s.indexOf(w)>-1});
}
function renderGroups(){
  var out="",any=false,searching=!!st.q;
  GROUPS.forEach(function(g){
    var idx=[];
    g.rows.forEach(function(r,i){if(matches(r[0],r[1]))idx.push(i)});
    if(!idx.length)return;
    any=true;
    var shut=!searching&&st.open[g.id]===false;
    var all=searching||st.expanded[g.id]||idx.length<=LIMIT+1;
    var shown=all?idx:idx.slice(0,LIMIT);
    out+='<section class="group'+(shut?' shut':'')+'" id="'+g.id+'" style="scroll-margin-top:calc(var(--nav-h) + 12px)">';
    out+='<button type="button" class="ghead" data-g="'+g.id+'" aria-expanded="'+!shut+'"><div class="t"><h3>'+g.t+'</h3><p>'+g.d+'</p></div><span class="n">'+idx.length+(idx.length===1?' service':' services')+'</span>'+CAR+'</button>';
    out+='<div class="gbody" role="table" aria-label="'+g.t+'">'+colsHtml();
    out+=shown.map(function(i){return rowHtml(g.rows[i],g.id,i)}).join("");
    if(!all)out+='<div class="more"><button type="button" class="linkbtn" data-more="'+g.id+'">View all '+idx.length+' services</button></div>';
    else if(!searching&&idx.length>LIMIT+1)out+='<div class="more"><button type="button" class="linkbtn" data-less="'+g.id+'">Show less</button></div>';
    out+='</div></section>';
  });
  if(!any)out='<div class="empty"><b>No matching services</b>Nothing listed for "'+st.q.replace(/</g,"&lt;")+'". Try another word, or <a href="#contact">contact us</a> and we\'ll help.</div>';
  $("#groups").innerHTML=out;
  // hide empty chips while searching
  ROOT.querySelectorAll("#chips .chip").forEach(function(c){
    var id=c.dataset.t;if(!searching||id==="filters"||id==="ppf"){c.style.display="";return}
    c.style.display=ROOT.getElementById(id)?"":"none";
  });
}

/* ---------- Packages ---------- */
function renderPackages(){
  var list=PKGS.filter(function(p){return matches(p.n,p.inc.join(" "))});
  var el=$("#packages");
  if(!el){
    el=document.createElement("section");el.className="blk";el.id="packages";
    $("#groups").after(el);
  }
  if(!list.length){el.style.display="none";return}
  el.style.display="";
  el.innerHTML='<span class="label">Combined services</span><h2 class="h2">Packages</h2><p class="sub">Bundled services priced together, so you can see at a glance what a package covers.</p><div class="pkgs">'+list.map(function(p){
    return '<article class="pkg"><span class="badge">PACKAGE</span><h3>'+p.n+'</h3><p class="incl"><b>Including:</b> '+p.inc.join(" + ")+'</p><div class="pp">'+VEH.map(function(v,i){
      return '<div class="'+(i===st.v?'sel':'')+'"><span>'+v.n+'</span><strong>'+money(p.p[i])+'</strong></div>';
    }).join("")+'</div></article>';
  }).join("")+'</div>';
}

/* ---------- PPF ---------- */
function renderPPF(){
  $("#ppfTiles").innerHTML=VEH.map(function(v,i){
    return '<div class="pt'+(i===st.v?' sel':'')+'"><span>'+v.n+'</span><strong>'+money(PPF_REMOVAL[i])+'</strong></div>';
  }).join("");
}

/* ---------- Oil & filter ---------- */
var fMore=false,FLIM=8;
function opt(sel,items,first){
  var cur=sel.value;
  sel.innerHTML='<option value="">'+first+'</option>'+items.map(function(x){return '<option value="'+x[0]+'">'+x[1]+'</option>'}).join("");
  if(items.some(function(x){return x[0]===cur}))sel.value=cur;
}
function initFilters(){
  var makes=[];FD.forEach(function(r){if(makes.indexOf(r[0])<0)makes.push(r[0])});
  opt($("#fMake"),makes.map(function(m){return [m,m]}),"All makes");
  opt($("#fType"),FT,"All filter types");
  syncVeh();renderFilters();
}
function syncVeh(){
  var m=$("#fMake").value;
  var vs=FD.filter(function(r){return !m||r[0]===m});
  opt($("#fVeh"),vs.map(function(r){return [r[1],r[1]]}),"All vehicles");
}
function renderFilters(){
  var m=$("#fMake").value,v=$("#fVeh").value,t=$("#fType").value,rows=[];
  FD.forEach(function(r){
    if(m&&r[0]!==m)return;if(v&&r[1]!==v)return;
    FT.forEach(function(f,i){
      if(t&&t!==f[0])return;
      if(r[2+i]!==null)rows.push({make:r[0],veh:r[1],type:f[1],price:r[2+i]});
    });
  });
  var filtered=m||v||t;
  var shown=(filtered||fMore)?rows:rows.slice(0,FLIM);
  var h='<div class="fr fh"><div>Vehicle</div><div class="tg">Filter type</div><div class="pr">Price</div></div>';
  if(!rows.length)h+='<div style="padding:28px 24px;color:var(--ink-2)">No price is listed for that combination. <a href="#contact" style="color:var(--accent-ink);font-weight:600">Contact us</a> and we\'ll check it for you.</div>';
  shown.forEach(function(r){
    h+='<div class="fr"><div class="v"><b>'+(r.make===r.veh?r.make:r.veh)+'</b>'+(r.make===r.veh?'':'<small>'+r.make+'</small>')+'</div><div class="tg"><span class="tag">'+r.type+'</span></div><div class="pr">'+money(r.price)+'</div></div>';
  });
  $("#ftable").innerHTML=h;
  $("#fmore").innerHTML=(!filtered&&rows.length>FLIM)?'<button type="button" class="linkbtn" id="fToggle">'+(fMore?'Show less':'View all '+rows.length+' prices')+'</button>':"";
}

/* ---------- Calculator ---------- */
var CI={},CG=[],calcSel={},calcFil={},cOpen={mech:true};
GROUPS.forEach(function(g){
  var keys=g.rows.map(function(r,i){var k=g.id+":"+i;CI[k]={name:r[0],desc:r[1],p:r[2],per:r[1]==="Per piece"};return k});
  CG.push({id:g.id,t:g.t,keys:keys});
});
CG.push({id:"pkg",t:"Packages",keys:PKGS.map(function(p,i){var k="pkg:"+i;CI[k]={name:p.n,desc:p.inc.join(" + "),p:p.p,per:false};return k})});
function cPrice(k){var v=CI[k].p[st.v];return typeof v==="number"?v:null}
function renderCalcList(){
  Object.keys(calcSel).forEach(function(k){if(CI[k].p[st.v]===null)delete calcSel[k]});
  var h=CG.map(function(g){
    return '<details class="cg" data-g="'+g.id+'"'+(cOpen[g.id]?' open':'')+'><summary>'+g.t+'<span class="cnt"></span></summary>'+g.keys.map(function(k){
      var it=CI[k],v=it.p[st.v],na=v===null;
      var pr=na?'<span class="na">N/A</span>':v===INSP?'<span class="na">On inspection</span>':money(v);
      return '<div class="ci'+(na?' dis':'')+'" data-k="'+k+'"><label><input type="checkbox" data-k="'+k+'"'+(na?' disabled':'')+'><span class="nm">'+it.name+(it.desc?'<small>'+it.desc+'</small>':'')+'</span></label>'+
        (it.per?'<span class="qty" hidden><button type="button" data-q="-1" data-k="'+k+'" aria-label="Fewer pieces">&minus;</button><span>1</span><button type="button" data-q="1" data-k="'+k+'" aria-label="More pieces">+</button></span>':'')+
        '<span class="pr">'+pr+'</span></div>';
    }).join("")+'</details>';
  }).join("");
  var makes=[];FD.forEach(function(r){if(makes.indexOf(r[0])<0)makes.push(r[0])});
  h+='<details class="cg" data-g="fil"'+(cOpen.fil?' open':'')+'><summary>Oil &amp; Filters (optional)<span class="cnt"></span></summary><div class="cfil"><div class="fld"><label for="cMake">Make</label><select id="cMake"><option value="">Select make</option>'+makes.map(function(m){return '<option>'+m+'</option>'}).join("")+'</select></div><div class="fld"><label for="cVeh">Vehicle</label><select id="cVeh"><option value="">Select vehicle</option></select></div></div><div id="cfItems"><div class="ci" style="color:var(--ink-3);font-size:14px">Choose your make and vehicle to add filters.</div></div></details>';
  $("#calcList").innerHTML=h;
  updateCalc();
}
function renderCfItems(){
  var m=$("#cMake").value,v=$("#cVeh").value,row=FD.filter(function(r){return r[0]===m&&r[1]===v})[0],h="";
  if(row)FT.forEach(function(f,i){
    if(row[2+i]===null)return;
    var k=m+"|"+v+"|"+f[0];
    h+='<div class="ci" data-f="'+k+'"><label><input type="checkbox" data-f="'+k+'" data-label="'+f[1]+'" data-veh="'+v+'" data-price="'+row[2+i]+'"'+(calcFil[k]?' checked':'')+'><span class="nm">'+f[1]+'<small>'+v+'</small></span></label><span class="pr">'+money(row[2+i])+'</span></div>';
  });
  $("#cfItems").innerHTML=h||'<div class="ci" style="color:var(--ink-3);font-size:14px">Choose your make and vehicle to add filters.</div>';
  updateCalc();
}
function updateCalc(){
  ROOT.querySelectorAll("#calcList .ci[data-k]").forEach(function(el){
    var k=el.dataset.k,on=!!calcSel[k];
    el.classList.toggle("on",on);el.querySelector("input").checked=on;
    var q=el.querySelector(".qty");if(q){q.hidden=!on;q.querySelector("span").textContent=calcSel[k]||1}
  });
  ROOT.querySelectorAll("#cfItems .ci[data-f]").forEach(function(el){
    var on=!!calcFil[el.dataset.f];el.classList.toggle("on",on);
  });
  Object.keys(calcSel).forEach(function(k){if(CI[k].p[st.v]===null)delete calcSel[k]});
  var lines=[],total=0,insp=false;
  CG.forEach(function(g){
    var n=0;
    g.keys.forEach(function(k){
      if(!calcSel[k])return;n++;
      var it=CI[k],p=cPrice(k),q=calcSel[k];
      if(p===null){insp=true;lines.push({id:k,n:it.name,s:"Priced after inspection",t:"TBC",txt:it.name+" (priced after inspection)"});}
      else{total+=p*q;lines.push({id:k,n:it.name,s:q>1?q+" \u00d7 "+money(p):"",t:money(p*q),txt:it.name+(q>1?" x"+q:"")+" - "+money(p*q)})}
    });
    var c=ROOT.querySelector('.cg[data-g="'+g.id+'"] .cnt');if(c){c.textContent=n+" selected";c.classList.toggle("on",n>0)}
  });
  var fn=0;
  Object.keys(calcFil).forEach(function(k){var f=calcFil[k];fn++;total+=f.price;lines.push({id:k,f:1,n:f.label,s:f.veh,t:money(f.price),txt:f.label+" ("+f.veh+") - "+money(f.price)})});
  var fc=ROOT.querySelector('.cg[data-g="fil"] .cnt');if(fc){fc.textContent=fn+" selected";fc.classList.toggle("on",fn>0)}
  var msg="Hello Autozone Motors, I'd like a quote for my "+VEH[st.v].n+":\n"+lines.map(function(l){return "- "+l.txt}).join("\n")+"\nEstimated total: "+money(total);
  $("#calcSum").innerHTML='<h3>Your estimate</h3><div class="vt">Vehicle type: '+VEH[st.v].n+'</div>'+
    (lines.length?'<ul>'+lines.map(function(l){return '<li><div class="l">'+l.n+(l.s?'<small>'+l.s+'</small>':'')+'</div><b>'+l.t+'</b><button type="button" data-rm="'+l.id+'" aria-label="Remove '+l.n+'">&times;</button></li>'}).join("")+'</ul>':'<div class="none">No services selected yet. Tick a service to start.</div>')+
    '<div class="tot"><span>Estimated total</span><strong>'+money(total)+'</strong></div>'+
    '<p class="fine">'+(insp?'Services priced after inspection are not included in the total. ':'')+'This is an estimate only. Final pricing may vary after inspection.</p>'+
    '<a class="btn btn-primary" target="_blank" rel="noopener" href="https://wa.me/923333053389?text='+encodeURIComponent(msg)+'">SEND ESTIMATE ON WHATSAPP</a>'+
    (lines.length?'<button type="button" class="clr" data-clear="1">Clear all</button>':'');
}
ROOT.addEventListener("change",function(e){
  var t=e.target;
  if(t.matches("#calcList input[data-k]")){if(t.checked)calcSel[t.dataset.k]=1;else delete calcSel[t.dataset.k];updateCalc()}
  else if(t.matches("#cfItems input[data-f]")){if(t.checked)calcFil[t.dataset.f]={label:t.dataset.label,veh:t.dataset.veh,price:+t.dataset.price};else delete calcFil[t.dataset.f];updateCalc()}
  else if(t.id==="cMake"){
    var m=t.value,vs=FD.filter(function(r){return r[0]===m});
    $("#cVeh").innerHTML='<option value="">Select vehicle</option>'+vs.map(function(r){return '<option>'+r[1]+'</option>'}).join("");
    if(vs.length===1)$("#cVeh").value=vs[0][1];
    renderCfItems();
  }
  else if(t.id==="cVeh")renderCfItems();
});
ROOT.addEventListener("toggle",function(e){var d=e.target;if(d.matches&&d.matches("#calcList .cg"))cOpen[d.dataset.g]=d.open},true);
ROOT.addEventListener("click",function(e){
  var q=e.target.closest("[data-q]");
  if(q){var k=q.dataset.k,n=(calcSel[k]||1)+ +q.dataset.q;calcSel[k]=Math.max(1,Math.min(20,n));updateCalc();return}
  var rm=e.target.closest("[data-rm]");
  if(rm){var id=rm.dataset.rm;delete calcSel[id];delete calcFil[id];
    var cb=ROOT.querySelector('#cfItems input[data-f="'+id+'"]');if(cb)cb.checked=false;updateCalc();return}
  if(e.target.closest("[data-clear]")){calcSel={};calcFil={};var cbs=ROOT.querySelectorAll("#cfItems input");cbs.forEach(function(c){c.checked=false});updateCalc()}
});

/* ---------- Nav ---------- */
function drawChips(){
  $("#chips").innerHTML=NAVS.map(function(n,i){return '<a class="chip'+(i===0?' on':'')+'" href="#'+n[0]+'" data-t="'+n[0]+'">'+n[1]+'</a>'}).join("");
}
function spy(){
  var chips=[].slice.call(ROOT.querySelectorAll("#chips .chip"));
  var navH=$(".nav").offsetHeight+16,cur=null;
  chips.forEach(function(c){
    var el=ROOT.getElementById(c.dataset.t);
    if(el&&el.offsetParent!==null&&el.getBoundingClientRect().top-(canScroll()?SC.getBoundingClientRect().top:0)<=navH+4)cur=c;
  });
  if(canScroll()&&SC.scrollTop+SC.clientHeight>=SC.scrollHeight-4)cur=chips.filter(function(c){return c.style.display!=="none"}).pop()||cur;
  chips.forEach(function(c){c.classList.toggle("on",c===cur)});
  if(cur){var bx=$("#chips"),l=cur.offsetLeft-bx.clientWidth/2+cur.offsetWidth/2;
    if(Math.abs(bx.scrollLeft-l)>40)bx.scrollTo({left:l,behavior:"smooth"})}
}
var ticking=false;
var onScroll=function(){if(!ticking){ticking=true;requestAnimationFrame(function(){spy();ticking=false})}};
SC.addEventListener("scroll",onScroll,{passive:true});
window.addEventListener("scroll",onScroll,{passive:true});
window.addEventListener("resize",function(){fit();onScroll()});
if(window.ResizeObserver){var ro=new ResizeObserver(function(){fit()});ro.observe(HOST);if(HOST.parentElement)ro.observe(HOST.parentElement)}
fit();setTimeout(fit,300);setTimeout(fit,1200);setTimeout(fit,3000);

/* ---------- Events ---------- */
ROOT.addEventListener("click",function(e){
  var t=e.target;
  var vc=t.closest(".vcard,#segV button,#calcSeg button,.cols button");
  if(vc){setVehicle(+vc.dataset.i);return}
  var gh=t.closest(".ghead");
  if(gh){var id=gh.dataset.g;st.open[id]=st.open[id]===false;renderGroups();return}
  var mo=t.closest("[data-more]");if(mo){st.expanded[mo.dataset.more]=true;renderGroups();return}
  var le=t.closest("[data-less]");if(le){var g=le.dataset.less;st.expanded[g]=false;renderGroups();scrollToEl(ROOT.getElementById(g));return}
  var row=t.closest(".row");
  if(row&&window.matchMedia("(max-width:719px)").matches){var rid=row.dataset.id;st.rowOpen[rid]=!st.rowOpen[rid];row.classList.toggle("open",st.rowOpen[rid]);var tp=row.querySelector(".tap");if(tp)tp.textContent=st.rowOpen[rid]?"Hide all":"Tap for all";return}
  var hs=t.closest("[data-s]");if(hs){$("#q").value=hs.dataset.s;onSearch();return}
  var ft=t.closest("#fToggle");if(ft){fMore=!fMore;renderFilters();return}
  var al=t.closest("a[href^=\"#\"]");
  if(al&&!al.classList.contains("chip")){var te=ROOT.getElementById(al.getAttribute("href").slice(1));if(te){e.preventDefault();scrollToEl(te)}return}
  var ch=t.closest(".chip");
  if(ch){
    var id2=ch.dataset.t,target=ROOT.getElementById(id2);
    if(target){
      e.preventDefault();
      if(st.open[id2]===false){st.open[id2]=true;renderGroups();target=ROOT.getElementById(id2)}
      scrollToEl(target);
    }
  }
});
function onSearch(){
  var v=$("#q").value.trim();st.q=v;
  $("#searchBox").classList.toggle("has",!!v);
  renderGroups();renderPackages();
}
$("#q").addEventListener("input",onSearch);
$("#qx").addEventListener("click",function(){$("#q").value="";onSearch();$("#q").focus()});
$("#fMake").addEventListener("change",function(){syncVeh();renderFilters()});
$("#fVeh").addEventListener("change",renderFilters);
$("#fType").addEventListener("change",renderFilters);

/* ---------- Init ---------- */
drawChips();drawVehicles();renderGroups();renderPackages();renderPPF();initFilters();renderCalcList();
$("#wa").href="https://wa.me/923333053389?text="+encodeURIComponent("Hello Autozone Motors, I'd like to check a service price for my "+VEH[0].n+".");
spy();
}

class AutozonePricing extends HTMLElement {
  constructor() { super(); this.root = this.attachShadow({ mode: "open" }); this.ready = false; }
  connectedCallback() {
    loadFont();
    if (this.ready) return;
    this.ready = true;
    this.root.innerHTML = "<style>" + CSS + "</style>" + HTML;
    init(this.root, this);
  }
}
customElements.define("autozone-pricing", AutozonePricing);
})();
