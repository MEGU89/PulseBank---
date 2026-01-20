(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32857,t=>{"use strict";var e=t.i(43476),l=t.i(71645),o=t.i(70703);let i=(0,o.default)(()=>t.A(52169).then(t=>t.MapContainer),{loadableGenerated:{modules:[94970]},ssr:!1}),a=(0,o.default)(()=>t.A(52169).then(t=>t.TileLayer),{loadableGenerated:{modules:[94970]},ssr:!1}),n=(0,o.default)(()=>t.A(52169).then(t=>t.Marker),{loadableGenerated:{modules:[94970]},ssr:!1}),s=(0,o.default)(()=>t.A(52169).then(t=>t.Popup),{loadableGenerated:{modules:[94970]},ssr:!1});t.A(492).then(t=>{t.useMap});let d=(0,o.default)(()=>t.A(52169).then(t=>{let{useMap:e}=t;return{default:()=>{let t=e();return(0,l.useEffect)(()=>()=>{},[t]),null}}}),{loadableGenerated:{modules:[94970]},ssr:!1});function r({activeDonors:o=[],hospitals:r=[],currentLocation:c=null}){let[u,h]=(0,l.useState)(!1),[p,f]=(0,l.useState)(null),[m]=(0,l.useState)(()=>`map-${Math.random().toString(36).slice(2,9)}`);if((0,l.useEffect)(()=>{h(!0)},[]),(0,l.useEffect)(()=>{(async()=>{let[e]=await Promise.all([t.A(71400),t.A(12620)]);f(e.default||e)})()},[]),!u||!p)return(0,e.jsx)("div",{className:"w-full h-full bg-gray-200"});let x=o&&o.length>0&&o[0]?.location?[o[0].location.latitude,o[0].location.longitude]:[21.1466,79.0889],g=(o||[]).filter(t=>t?.location?.latitude&&t?.location?.longitude),b=(r||[]).filter(t=>t?.location?.latitude&&t?.location?.longitude);return console.log("[LeafletMap] Rendering with:",{validDonors:g.length,validHospitals:b.length}),(0,e.jsx)("div",{className:"w-full h-full relative",children:(0,e.jsxs)(i,{center:x,zoom:12,style:{height:"100%",width:"100%",position:"absolute",top:0,left:0},children:[(0,e.jsx)(d,{}),(0,e.jsx)(a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"© OpenStreetMap contributors"}),g.map((t,l)=>(0,e.jsx)(n,{position:[t.location.latitude,t.location.longitude],icon:p.divIcon({html:`<div style="
      background-color: #ef4444;
      border: 2px solid white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      font-weight: bold;
      color: white;
      font-size: 12px;
    ">♥</div>`,className:"custom-marker",iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]}),children:(0,e.jsx)(s,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("b",{children:t.fullName||"Donor"})," ",(0,e.jsx)("br",{}),"Blood: ",t.bloodType||"Unknown"]})})},`donor-${l}`)),b.map((t,l)=>{let o=null;try{let e=c?.lat??c?.latitude??null,l=c?.lng??c?.longitude??null;if(null!=e&&null!=l&&t.location&&null!=t.location.latitude&&null!=t.location.longitude){var i,a;let n,s,d,r,c=(i=t.location.latitude,a=t.location.longitude,s=(n=t=>t*Math.PI/180)(i-e),d=n(a-l),r=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n(e))*Math.cos(n(i))*Math.sin(d/2)*Math.sin(d/2),2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371);o=`${c<1?(1e3*c).toFixed(0)+" m":c.toFixed(1)+" km"}`}}catch(t){}return(0,e.jsx)(n,{position:[t.location.latitude,t.location.longitude],icon:p.divIcon({html:`<div style="
      background-color: #2563eb;
      border: 2px solid white;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      font-weight: bold;
      color: white;
      font-size: 12px;
    ">H</div>`,className:"hospital-marker",iconSize:[28,28],iconAnchor:[14,14],popupAnchor:[0,-12]}),children:(0,e.jsx)(s,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("b",{children:t.fullName||t.name||t.hospital||"Hospital"})," ",(0,e.jsx)("br",{}),t.notes&&(0,e.jsx)("div",{className:"text-sm",children:t.notes}),o&&(0,e.jsxs)("div",{className:"text-sm text-gray-600 mt-1",children:[o," away"]})]})})},`hospital-${l}`)})]},m)},m)}t.s(["default",()=>r])},8235,t=>{t.n(t.i(32857))},52169,t=>{t.v(e=>Promise.all(["static/chunks/15d38308d8f24529.js","static/chunks/1442f9ddf5556540.js"].map(e=>t.l(e))).then(()=>e(94970)))},492,t=>{t.v(e=>Promise.all(["static/chunks/100e18aa1de8bde8.js","static/chunks/1442f9ddf5556540.js"].map(e=>t.l(e))).then(()=>e(3105)))},71400,t=>{t.v(e=>Promise.all(["static/chunks/1442f9ddf5556540.js"].map(e=>t.l(e))).then(()=>e(32322)))},12620,t=>{t.v(t=>Promise.resolve())}]);