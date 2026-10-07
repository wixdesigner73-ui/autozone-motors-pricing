/*!
 * Autozone Motors - Homepage "Pricing" section
 * Self-contained Web Component for a Wix "Custom Element" (or Embed HTML).
 * Tag name: autozone-home-pricing
 *
 * Optional attributes (Embed HTML only):
 *   link="https://..."        Page opened by "VIEW FULL PRICING"
 *   book="https://..."        Page opened by "BOOK A SERVICE"
 *   vehicle="0"               Default vehicle: 0 Hatchback, 1 Sedan, 2 SUV, 3 Full Size SUV
 */
(function () {
"use strict";
if (customElements.get("autozone-home-pricing")) return;

/* ---- Edit these two links if your pages live elsewhere ---- */
var PRICING_LINK = "https://wixdesigner73-ui.github.io/autozone-motors-pricing/pricing-no-hero.html";
var BOOK_LINK = "https://www.autozonemotors.com/contact-us";

var VEH = ["Hatchback", "Sedan", "SUV", "Full Size SUV"];
var ICON = {
  wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.6"/><path d="M12 3v6.4M12 14.6V21M3.8 8l5.6 3.2M14.6 12.8l5.6 3.2M3.8 16l5.6-3.2M14.6 11.2L20.2 8"/>',
  brake: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.5 6.5A9 9 0 0 0 3.2 12M18.5 17.5A9 9 0 0 0 20.8 12"/><circle cx="12" cy="12" r=".6"/>',
  tune: '<path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="17" r="2"/>',
  snow: '<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><path d="M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5"/>',
  scan: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M6.5 12h2.8l1.7-3.2 2.4 6.2 1.6-3H17.5"/>',
  drop: '<path d="M12 3.2C8.4 8 6 10.8 6 14.2a6 6 0 0 0 12 0C18 10.8 15.6 8 12 3.2z"/><path d="M9.2 14.5a2.9 2.9 0 0 0 2.4 2.7"/>',
  seat: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.2"/><path d="M3.4 10.6c5.6-1.9 11.6-1.9 17.2 0M12 14.2V21M12 14.2l-5.4 3.6M12 14.2l5.4 3.6"/>',
  spark: '<path d="M12 3l2.1 5.9L20 11l-5.9 2.1L12 19l-2.1-5.9L4 11l5.9-2.1z"/><path d="M19 3.5v3M17.5 5h3"/>'
};
var ITEMS = [
  { n: "Balancing & Alignment", s: "Balancing + Alignment", i: "wheel", pkg: 1, p: [3500, 5000, 6000, 7000] },
  { n: "Brake Service", s: "Wheels & Brakes", i: "brake", p: [1500, 2500, 3500, 4500] },
  { n: "Complete General Tuning", s: "CAT Service + Injector Cleaning", i: "tune", pkg: 1, p: [8500, 11500, 14500, 18000] },
  { n: "AC Service", s: "AC & HVAC", i: "snow", p: [2000, 2500, 3500, 5000] },
  { n: "Scanner Check", s: "Electrical & Diagnostics", i: "scan", p: [500, 500, 1000, 1000] },
  { n: "Premium Wash", s: "Detailing", i: "drop", p: [3000, 4500, 5500, 7000] },
  { n: "Interior Detailing", s: "Detailing", i: "seat", p: [5000, 8000, 10000, 12000] },
  { n: "Complete Detailing", s: "Detailing", i: "spark", p: [12000, 18000, 25000, 30000] }
];

var CSS = "\
:host{display:block}\
*{box-sizing:border-box}\
.hp{--accent:#01ff13;--dark:#1b1c1e;--ink:#fff;--mute:#aeb3ad;font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:var(--ink);line-height:1.5;position:relative;overflow:hidden;\
background:linear-gradient(180deg,rgba(20,21,23,.94),rgba(20,21,23,.97)),url(https://wixdesigner73-ui.github.io/autozone-motors-pricing/img/floor.jpg) center/cover,var(--dark);padding:64px 24px}\
.hp::before{content:'';position:absolute;inset:0;background:radial-gradient(640px 280px at 85% 0%,rgba(1,255,19,.13),transparent 70%);pointer-events:none}\
.in{position:relative;max-width:1160px;margin:0 auto}\
.top{display:flex;justify-content:space-between;align-items:flex-end;gap:28px;flex-wrap:wrap}\
.eye{display:block;font-size:12px;font-weight:700;letter-spacing:.2em;color:var(--accent);margin:0 0 12px}\
h2{margin:0;font-size:clamp(28px,4.4vw,44px);font-weight:800;letter-spacing:-.02em;line-height:1.08;max-width:18ch}\
.sub{margin:14px 0 0;color:var(--mute);max-width:54ch;font-size:16px}\
.pills{display:inline-grid;grid-template-columns:repeat(4,auto);gap:4px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:4px}\
.pills button{min-height:44px;padding:0 18px;border:0;border-radius:999px;background:transparent;color:#d6dad4;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;transition:background .15s,color .15s}\
.pills button:hover{color:#fff}\
.pills button[aria-pressed=true]{background:var(--accent);color:#06210a}\
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}\
.card{position:relative;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:20px 20px 18px;display:flex;flex-direction:column;gap:6px;min-height:196px;transition:border-color .15s,transform .15s,background .15s}\
.card:hover{border-color:rgba(1,255,19,.55);background:rgba(255,255,255,.07);transform:translateY(-2px)}\
.ic{width:40px;height:40px;border-radius:11px;background:rgba(1,255,19,.12);display:grid;place-items:center;margin-bottom:8px}\
.ic svg{width:22px;height:22px;fill:none;stroke:var(--accent);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\
.badge{position:absolute;top:18px;right:18px;font-size:10.5px;font-weight:800;letter-spacing:.14em;color:#06210a;background:var(--accent);border-radius:6px;padding:3px 8px}\
.nm{font-size:17px;font-weight:700;line-height:1.25}\
.ds{font-size:13px;color:var(--mute)}\
.pr{margin-top:auto;padding-top:14px;font-size:24px;font-weight:800;color:var(--accent);font-variant-numeric:tabular-nums;letter-spacing:-.01em}\
.pr small{display:block;font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#98a09a;margin-bottom:2px}\
.feat{display:flex;flex-wrap:wrap;gap:10px 26px;margin-top:30px;color:#cfd3cd;font-size:14px}\
.feat span{display:inline-flex;align-items:center;gap:8px}\
.feat span::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--accent)}\
.cta{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:30px}\
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 28px;border-radius:999px;border:1.5px solid transparent;font-weight:700;font-size:14px;letter-spacing:.06em;text-decoration:none;cursor:pointer;transition:background .15s,border-color .15s}\
.btn.p{background:var(--accent);color:#06210a}.btn.p:hover{background:#33ff42}\
.btn.g{border-color:rgba(255,255,255,.35);color:#fff}.btn.g:hover{border-color:#fff;background:rgba(255,255,255,.08)}\
.note{margin:22px 0 0;font-size:12.5px;color:#8f958f;max-width:70ch}\
:focus-visible{outline:3px solid var(--accent);outline-offset:2px;border-radius:8px}\
.mid .grid{grid-template-columns:repeat(2,1fr)}\
.mid .top{align-items:flex-start}\
.narrow.hp{padding:48px 16px}\
.narrow .grid{grid-template-columns:1fr;gap:10px;margin-top:26px}\
.narrow .card{min-height:0;flex-direction:row;flex-wrap:nowrap;align-items:center;padding:16px;gap:4px 14px}\
.narrow .ic{margin:0;flex:none}\
.narrow .tx{flex:1;min-width:0;padding-right:0}\
.narrow .pr{margin:0;padding:0;text-align:right;font-size:20px}\
.narrow .pr small{display:none}\
.narrow .badge{position:static;display:inline-block;margin-bottom:5px}\
.narrow .pills{display:grid;width:100%}\
.narrow .pills button{padding:0 4px;font-size:13px}\
.narrow .btn{width:100%}\
";

function money(n) { return "Rs. " + n.toLocaleString("en-US"); }
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
function loadFont() {
  if (document.getElementById("az-inter-font")) return;
  var l = document.createElement("link");
  l.id = "az-inter-font"; l.rel = "stylesheet";
  l.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
  document.head.appendChild(l);
}

class AutozoneHomePricing extends HTMLElement {
  constructor() { super(); this.root = this.attachShadow({ mode: "open" }); this.v = 0; this.ready = false; }

  connectedCallback() {
    if (this.ready) return;
    this.ready = true;
    loadFont();
    var a = parseInt(this.getAttribute("vehicle"), 10);
    if (a >= 0 && a < 4) this.v = a;
    var link = this.getAttribute("link") || PRICING_LINK;
    var book = this.getAttribute("book") || BOOK_LINK;
    this.root.innerHTML = '<style>' + CSS + '</style><section class="hp"><div class="in">' +
      '<div class="top"><div><span class="eye">SERVICES &amp; PRICING</span><h2>Transparent Pricing. Professional Car Care.</h2>' +
      '<p class="sub">Pick your vehicle type to see what popular services cost. Clear prices, no surprises.</p></div>' +
      '<div class="pills" role="group" aria-label="Vehicle type"></div></div>' +
      '<div class="grid"></div>' +
      '<div class="feat"><span>Prices for 4 vehicle categories</span><span>Oil &amp; filter prices by make and model</span><span>Instant estimate calculator</span></div>' +
      '<div class="cta"><a class="btn p" href="' + esc(link) + '" target="_top">VIEW FULL PRICING</a><a class="btn g" href="' + esc(book) + '" target="_top">BOOK A SERVICE</a></div>' +
      '<p class="note">Prices shown are based on vehicle category. Final pricing may vary where additional parts, repairs, or vehicle-specific requirements are identified after inspection.</p>' +
      '</div></section>';
    this.hp = this.root.querySelector(".hp");
    this.draw();
    var self = this;
    this.root.querySelector(".pills").addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (b) { self.v = +b.dataset.i; self.draw(); }
    });
    if (window.ResizeObserver) {
      this.ro = new ResizeObserver(function (e) {
        var w = e[0].contentRect.width;
        self.hp.classList.toggle("narrow", w < 640);
        self.hp.classList.toggle("mid", w >= 640 && w < 980);
      });
      this.ro.observe(this);
    }
  }
  disconnectedCallback() { if (this.ro) this.ro.disconnect(); }

  draw() {
    var v = this.v;
    this.root.querySelector(".pills").innerHTML = VEH.map(function (n, i) {
      return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === v) + '">' + n + '</button>';
    }).join("");
    this.root.querySelector(".grid").innerHTML = ITEMS.map(function (it) {
      return '<article class="card">' +
        '<div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[it.i] + '</svg></div>' +
        '<div class="tx">' + (it.pkg ? '<span class="badge">PACKAGE</span>' : "") + '<div class="nm">' + esc(it.n) + '</div><div class="ds">' + esc(it.s) + '</div></div>' +
        '<div class="pr"><small>' + VEH[v] + '</small>' + money(it.p[v]) + '</div></article>';
    }).join("");
  }
}
customElements.define("autozone-home-pricing", AutozoneHomePricing);
})();
