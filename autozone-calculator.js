/*!
 * Autozone Motors - Service Price Calculator
 * Self-contained Web Component for Wix "Custom Element".
 * Tag name to use in Wix: autozone-calculator
 *
 * Optional attributes (set in the Wix custom element settings):
 *   whatsapp="923333053389"   WhatsApp number, digits only with country code
 *   vehicle="0"               Default vehicle: 0 Hatchback, 1 Sedan, 2 SUV, 3 Full Size SUV
 */
(function () {
"use strict";
if (customElements.get("autozone-calculator")) return;

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

var CSS = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap\");\n:host{display:block;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}\n*{box-sizing:border-box}\n.az{--bg:#f5f6f4;--surface:#fff;--ink:#15171a;--ink-2:#4a4f55;--ink-3:#7a8087;--line:#e4e7e2;--line-2:#d3d8d0;--dark:#1b1c1e;--accent:#01ff13;--accent-ink:#0a6e12;--accent-soft:rgba(1,255,19,.13);--radius:14px;--radius-sm:10px;\n  font-family:Inter,system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;font-size:16px;line-height:1.5;color:var(--ink);background:var(--bg);padding:20px;min-height:100%}\nbutton,select{font:inherit;color:inherit}\n:focus-visible{outline:3px solid var(--accent-ink);outline-offset:2px;border-radius:6px}\n.head{margin-bottom:18px}\n.seg{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;background:var(--surface);border:1px solid var(--line-2);border-radius:12px;padding:4px;max-width:620px}\n.seg button{min-height:42px;border:0;border-radius:9px;background:transparent;font-size:14px;font-weight:600;color:var(--ink-2);cursor:pointer;padding:0 4px}\n.seg button:hover{color:var(--ink)}\n.seg button[aria-pressed=true]{background:var(--dark);color:#fff;box-shadow:inset 0 -3px 0 var(--accent)}\n.calc{display:grid;grid-template-columns:1fr 370px;gap:22px;align-items:start}\n.cg{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);margin-bottom:12px;overflow:hidden}\n.cg summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:12px;padding:16px 20px;font-weight:800;font-size:17px}\n.cg summary::-webkit-details-marker{display:none}\n.cg summary .cnt{margin-left:auto;font-size:12px;font-weight:700;color:var(--accent-ink);background:var(--accent-soft);border-radius:999px;padding:3px 10px;display:none}\n.cg summary .cnt.on{display:inline-block}\n.cg summary::after{content:\"\";width:18px;height:18px;flex:none;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237a8087' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\") center/contain no-repeat;transition:transform .2s}\n.cg[open] summary::after{transform:rotate(180deg)}\n.ci{display:flex;align-items:center;gap:14px;padding:12px 20px;border-top:1px solid var(--line);min-height:62px}\n.ci label{flex:1;display:flex;align-items:center;gap:14px;cursor:pointer;min-width:0}\n.ci input[type=checkbox]{appearance:none;-webkit-appearance:none;flex:none;width:24px;height:24px;margin:0;border-radius:7px;border:1.5px solid var(--line-2);background:var(--surface);cursor:pointer;display:grid;place-items:center;transition:all .12s}\n.ci input[type=checkbox]:checked{background:var(--accent);border-color:var(--accent)}\n.ci input[type=checkbox]:checked::after{content:\"\";width:12px;height:7px;border:solid #06210a;border-width:0 0 3px 3px;transform:rotate(-45deg) translate(1px,-1px)}\n.ci input:disabled{opacity:.4;cursor:not-allowed}\n.ci .nm{font-weight:600;line-height:1.3}\n.ci .nm small{display:block;font-weight:400;font-size:12.5px;color:var(--ink-3)}\n.ci .pr{font-weight:800;font-variant-numeric:tabular-nums;color:var(--ink-2);white-space:nowrap}\n.ci.on{background:var(--accent-soft)}\n.ci.on .pr{color:var(--accent-ink)}\n.ci.dis .nm{color:var(--ink-3)}\n.ci .na{font-size:12.5px;font-weight:600;color:var(--ink-3)}\n.ci.hintrow{color:var(--ink-3);font-size:14px;min-height:0}\n.qty{display:inline-flex;align-items:center;border:1.5px solid var(--line-2);border-radius:999px;background:var(--surface);overflow:hidden}\n.qty[hidden]{display:none}\n.qty button{width:34px;height:34px;border:0;background:none;font-size:18px;cursor:pointer;line-height:1}\n.qty button:hover{background:var(--bg)}\n.qty span{min-width:22px;text-align:center;font-weight:700;font-size:14px}\n.cfil{padding:16px 20px;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr 1fr;gap:12px}\n.fld label{display:block;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin:0 0 6px}\n.fld select{width:100%;height:48px;border-radius:var(--radius-sm);border:1.5px solid var(--line-2);background:var(--surface) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237a8087' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\") right 14px center/18px no-repeat;padding:0 40px 0 14px;appearance:none;-webkit-appearance:none;cursor:pointer;font-weight:500}\n.fld select:focus{outline:none;border-color:var(--ink);box-shadow:0 0 0 4px var(--accent-soft)}\n.sum{position:sticky;top:0;background:var(--dark);color:#fff;border-radius:var(--radius);padding:24px}\n.sum h3{margin:0 0 4px;font-size:20px;font-weight:800}\n.sum .vt{font-size:13px;color:#aeb3ad}\n.sum ul{list-style:none;margin:18px 0 0;padding:0;max-height:300px;overflow:auto}\n.sum li{display:flex;gap:10px;align-items:flex-start;justify-content:space-between;padding:10px 0;border-top:1px solid rgba(255,255,255,.1);font-size:14px}\n.sum li .l{flex:1;min-width:0}\n.sum li .l small{display:block;color:#98a09a;font-size:12px}\n.sum li b{white-space:nowrap;font-variant-numeric:tabular-nums}\n.sum li button{border:0;background:rgba(255,255,255,.1);color:#fff;width:24px;height:24px;border-radius:50%;cursor:pointer;line-height:1;flex:none;margin-top:1px}\n.sum li button:hover{background:rgba(255,255,255,.22)}\n.sum .none{padding:22px 0 6px;color:#98a09a;font-size:14px;border-top:1px solid rgba(255,255,255,.1);margin-top:18px}\n.tot{display:flex;justify-content:space-between;align-items:baseline;margin-top:14px;padding-top:16px;border-top:1.5px solid rgba(255,255,255,.22)}\n.tot span{font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#aeb3ad}\n.tot strong{font-size:32px;font-weight:800;color:var(--accent);font-variant-numeric:tabular-nums;letter-spacing:-.01em}\n.sum .fine{margin:12px 0 18px;font-size:12.5px;color:#98a09a;line-height:1.45}\n.btn{display:flex;align-items:center;justify-content:center;min-height:48px;padding:0 20px;border-radius:999px;background:var(--accent);color:#06210a;font-weight:700;font-size:14px;letter-spacing:.06em;text-decoration:none;text-align:center;transition:background .15s}\n.btn:hover{background:#33ff42}\n.clr{display:block;margin:12px auto 0;border:0;background:none;color:#aeb3ad;font-size:13px;text-decoration:underline;text-underline-offset:3px;cursor:pointer}\n.clr:hover{color:#fff}\n.narrow{padding:14px}\n.narrow .calc{grid-template-columns:1fr}\n.narrow .sum{position:static}\n.narrow .seg button{font-size:13px;min-height:44px}\n.narrow .ci{padding:12px 14px;gap:10px;flex-wrap:wrap}\n.narrow .ci label{flex:1 1 60%}\n.narrow .cg summary{padding:16px 14px}\n.narrow .cfil{grid-template-columns:1fr;padding:14px}\n.narrow .sum{padding:20px}\n.narrow .tot strong{font-size:28px}\n";

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function money(n){return "Rs. "+n.toLocaleString("en-US")}

var CI = {}, CG = [];
GROUPS.forEach(function (g) {
  var keys = g.rows.map(function (r, i) {
    var k = g.id + ":" + i;
    CI[k] = { name: r[0], desc: r[1], p: r[2], per: r[1] === "Per piece" };
    return k;
  });
  CG.push({ id: g.id, t: g.t, keys: keys });
});
CG.push({ id: "pkg", t: "Packages", keys: PKGS.map(function (p, i) {
  var k = "pkg:" + i;
  CI[k] = { name: p.n, desc: p.inc.join(" + "), p: p.p, per: false };
  return k;
}) });
var MAKES = [];
FD.forEach(function (r) { if (MAKES.indexOf(r[0]) < 0) MAKES.push(r[0]); });

class AutozoneCalculator extends HTMLElement {
  static get observedAttributes() { return ["whatsapp", "vehicle"]; }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.v = 0;
    this.sel = {};
    this.fil = {};
    this.open = { mech: true };
    this.make = "";
    this.veh = "";
  }

  connectedCallback() {
    var a = parseInt(this.getAttribute("vehicle"), 10);
    if (a >= 0 && a < 4) this.v = a;
    this.root.innerHTML = '<style>' + CSS + '</style><div class="az"><div class="head"><div class="seg" role="group" aria-label="Vehicle type"></div></div><div class="calc"><div class="list"></div><aside class="sum" aria-live="polite"></aside></div></div>';
    this.az = this.root.querySelector(".az");
    this.drawSeg();
    this.drawList();
    this.update();
    this.bind();
    if (window.ResizeObserver) {
      this.ro = new ResizeObserver(function (e) {
        this.az.classList.toggle("narrow", e[0].contentRect.width < 760);
      }.bind(this));
      this.ro.observe(this);
    }
  }
  disconnectedCallback() { if (this.ro) this.ro.disconnect(); }
  attributeChangedCallback(n, o, v) {
    if (!this.az) return;
    if (n === "vehicle") { var a = parseInt(v, 10); if (a >= 0 && a < 4) this.setVehicle(a); }
    else this.update();
  }

  $(s) { return this.root.querySelector(s); }
  price(k) { var v = CI[k].p[this.v]; return typeof v === "number" ? v : null; }

  drawSeg() {
    this.$(".seg").innerHTML = VEH.map(function (v, i) {
      return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === this.v) + '">' + (v.k === "full" ? "Full Size SUV" : v.n) + '</button>';
    }, this).join("");
  }

  setVehicle(i) {
    this.v = i;
    var self = this;
    Object.keys(this.sel).forEach(function (k) { if (CI[k].p[i] === null) delete self.sel[k]; });
    this.drawSeg();
    this.drawList();
    this.update();
  }

  drawList() {
    var self = this;
    var h = CG.map(function (g) {
      return '<details class="cg" data-g="' + g.id + '"' + (self.open[g.id] ? " open" : "") + '><summary>' + esc(g.t) + '<span class="cnt"></span></summary>' + g.keys.map(function (k) {
        var it = CI[k], v = it.p[self.v], na = v === null;
        var pr = na ? '<span class="na">N/A</span>' : v === INSP ? '<span class="na">On inspection</span>' : money(v);
        return '<div class="ci' + (na ? " dis" : "") + '" data-k="' + k + '"><label><input type="checkbox" data-k="' + k + '"' + (na ? " disabled" : "") + '><span class="nm">' + esc(it.name) + (it.desc ? '<small>' + esc(it.desc) + '</small>' : "") + '</span></label>' +
          (it.per ? '<span class="qty" hidden><button type="button" data-q="-1" data-k="' + k + '" aria-label="Fewer pieces">&minus;</button><span>1</span><button type="button" data-q="1" data-k="' + k + '" aria-label="More pieces">+</button></span>' : "") +
          '<span class="pr">' + pr + '</span></div>';
      }).join("") + '</details>';
    }).join("");
    h += '<details class="cg" data-g="fil"' + (this.open.fil ? " open" : "") + '><summary>Oil &amp; Filters (optional)<span class="cnt"></span></summary><div class="cfil"><div class="fld"><label for="cMake">Make</label><select id="cMake"><option value="">Select make</option>' +
      MAKES.map(function (m) { return '<option' + (m === self.make ? " selected" : "") + '>' + esc(m) + '</option>'; }).join("") +
      '</select></div><div class="fld"><label for="cVeh">Vehicle</label><select id="cVeh"><option value="">Select vehicle</option></select></div></div><div class="cfItems"></div></details>';
    this.$(".list").innerHTML = h;
    this.drawVehOptions();
    this.drawFilters();
  }

  drawVehOptions() {
    var self = this;
    this.$("#cVeh").innerHTML = '<option value="">Select vehicle</option>' + FD.filter(function (r) { return r[0] === self.make; }).map(function (r) {
      return '<option' + (r[1] === self.veh ? " selected" : "") + '>' + esc(r[1]) + '</option>';
    }).join("");
  }

  drawFilters() {
    var self = this, row = FD.filter(function (r) { return r[0] === self.make && r[1] === self.veh; })[0], h = "";
    if (row) FT.forEach(function (f, i) {
      if (row[2 + i] === null) return;
      var k = self.make + "|" + self.veh + "|" + f[0];
      h += '<div class="ci' + (self.fil[k] ? " on" : "") + '" data-f="' + esc(k) + '"><label><input type="checkbox" data-f="' + esc(k) + '" data-label="' + f[1] + '" data-veh="' + esc(self.veh) + '" data-price="' + row[2 + i] + '"' + (self.fil[k] ? " checked" : "") + '><span class="nm">' + f[1] + '<small>' + esc(self.veh) + '</small></span></label><span class="pr">' + money(row[2 + i]) + '</span></div>';
    });
    this.$(".cfItems").innerHTML = h || '<div class="ci hintrow">Choose your make and vehicle to add filters.</div>';
  }

  update() {
    var self = this, lines = [], total = 0, insp = false;
    this.root.querySelectorAll(".ci[data-k]").forEach(function (el) {
      var k = el.dataset.k, on = !!self.sel[k];
      el.classList.toggle("on", on);
      el.querySelector("input").checked = on;
      var q = el.querySelector(".qty");
      if (q) { q.hidden = !on; q.querySelector("span").textContent = self.sel[k] || 1; }
    });
    CG.forEach(function (g) {
      var n = 0;
      g.keys.forEach(function (k) {
        if (!self.sel[k]) return;
        n++;
        var it = CI[k], p = self.price(k), q = self.sel[k];
        if (p === null) {
          insp = true;
          lines.push({ id: k, n: it.name, s: "Priced after inspection", t: "TBC", txt: it.name + " (priced after inspection)" });
        } else {
          total += p * q;
          lines.push({ id: k, n: it.name, s: q > 1 ? q + " \u00d7 " + money(p) : "", t: money(p * q), txt: it.name + (q > 1 ? " x" + q : "") + " - " + money(p * q) });
        }
      });
      var c = self.$('.cg[data-g="' + g.id + '"] .cnt');
      if (c) { c.textContent = n + " selected"; c.classList.toggle("on", n > 0); }
    });
    var fn = 0;
    Object.keys(this.fil).forEach(function (k) {
      var f = self.fil[k]; fn++; total += f.price;
      lines.push({ id: k, n: f.label, s: f.veh, t: money(f.price), txt: f.label + " (" + f.veh + ") - " + money(f.price) });
    });
    var fc = this.$('.cg[data-g="fil"] .cnt');
    if (fc) { fc.textContent = fn + " selected"; fc.classList.toggle("on", fn > 0); }

    var num = (this.getAttribute("whatsapp") || "923333053389").replace(/\D/g, "");
    var msg = "Hello Autozone Motors, I'd like a quote for my " + VEH[this.v].n + ":\n" + lines.map(function (l) { return "- " + l.txt; }).join("\n") + "\nEstimated total: " + money(total);
    var link = lines.length
      ? '<a class="btn" target="_blank" rel="noopener" href="https://wa.me/' + num + '?text=' + encodeURIComponent(msg) + '">SEND ESTIMATE ON WHATSAPP</a>'
      : '<a class="btn" target="_blank" rel="noopener" href="https://wa.me/' + num + '">CHAT ON WHATSAPP</a>';
    this.$(".sum").innerHTML = '<h3>Your estimate</h3><div class="vt">Vehicle type: ' + VEH[this.v].n + '</div>' +
      (lines.length
        ? '<ul>' + lines.map(function (l) { return '<li><div class="l">' + esc(l.n) + (l.s ? '<small>' + esc(l.s) + '</small>' : "") + '</div><b>' + l.t + '</b><button type="button" data-rm="' + esc(l.id) + '" aria-label="Remove ' + esc(l.n) + '">&times;</button></li>'; }).join("") + '</ul>'
        : '<div class="none">No services selected yet. Tick a service to start.</div>') +
      '<div class="tot"><span>Estimated total</span><strong>' + money(total) + '</strong></div>' +
      '<p class="fine">' + (insp ? "Services priced after inspection are not included in the total. " : "") + 'This is an estimate only. Final pricing may vary after inspection.</p>' + link +
      (lines.length ? '<button type="button" class="clr" data-clear="1">Clear all</button>' : "");
  }

  bind() {
    var self = this, r = this.root;
    r.addEventListener("click", function (e) {
      var t = e.target;
      var s = t.closest(".seg button");
      if (s) return self.setVehicle(+s.dataset.i);
      var q = t.closest("[data-q]");
      if (q) { var k = q.dataset.k, n = (self.sel[k] || 1) + +q.dataset.q; self.sel[k] = Math.max(1, Math.min(20, n)); return self.update(); }
      var rm = t.closest("[data-rm]");
      if (rm) {
        var id = rm.dataset.rm;
        delete self.sel[id]; delete self.fil[id];
        var cb = r.querySelector('.cfItems input[data-f="' + id.replace(/"/g, '\\"') + '"]');
        if (cb) cb.checked = false;
        return self.update();
      }
      if (t.closest("[data-clear]")) {
        self.sel = {}; self.fil = {};
        r.querySelectorAll(".cfItems input").forEach(function (c) { c.checked = false; });
        self.update();
      }
    });
    r.addEventListener("change", function (e) {
      var t = e.target;
      if (t.matches("input[data-k]")) {
        if (t.checked) self.sel[t.dataset.k] = 1; else delete self.sel[t.dataset.k];
        self.update();
      } else if (t.matches(".cfItems input[data-f]")) {
        if (t.checked) self.fil[t.dataset.f] = { label: t.dataset.label, veh: t.dataset.veh, price: +t.dataset.price };
        else delete self.fil[t.dataset.f];
        t.closest(".ci").classList.toggle("on", t.checked);
        self.update();
      } else if (t.id === "cMake") {
        self.make = t.value; self.veh = "";
        self.drawVehOptions();
        var vs = FD.filter(function (x) { return x[0] === self.make; });
        if (vs.length === 1) { self.veh = vs[0][1]; self.$("#cVeh").value = self.veh; }
        self.drawFilters(); self.update();
      } else if (t.id === "cVeh") {
        self.veh = t.value; self.drawFilters(); self.update();
      }
    });
    r.addEventListener("toggle", function (e) {
      var d = e.target;
      if (d.matches && d.matches(".cg")) self.open[d.dataset.g] = d.open;
    }, true);
  }
}

customElements.define("autozone-calculator", AutozoneCalculator);
})();
