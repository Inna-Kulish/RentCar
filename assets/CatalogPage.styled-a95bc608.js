import{k as C,l as N,n as O,r as v,s as o,e as P,j as e,f as H,o as D,p as G}from"./index-de11f5b6.js";function V(t=C){const A=t===C?N:O(t);return function(){const{store:n}=A();return n}}const Y=V();function T(t=C){const A=t===C?Y:V(t);return function(){return A().dispatch}}const Z=T();var I="NOT_FOUND";function U(t){var A;return{get:function(n){return A&&t(A.key,n)?A.value:I},put:function(n,a){A={key:n,value:a}},getEntries:function(){return A?[A]:[]},clear:function(){A=void 0}}}function L(t,A){var r=[];function n(c){var i=r.findIndex(function(u){return A(c,u.key)});if(i>-1){var l=r[i];return i>0&&(r.splice(i,1),r.unshift(l)),l.value}return I}function a(c,i){n(c)===I&&(r.unshift({key:c,value:i}),r.length>t&&r.pop())}function s(){return r}function g(){r=[]}return{get:n,put:a,getEntries:s,clear:g}}var K=function(A,r){return A===r};function $(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var a=r.length,s=0;s<a;s++)if(!t(r[s],n[s]))return!1;return!0}}function _(t,A){var r=typeof A=="object"?A:{equalityCheck:A},n=r.equalityCheck,a=n===void 0?K:n,s=r.maxSize,g=s===void 0?1:s,c=r.resultEqualityCheck,i=$(a),l=g===1?U(i):L(g,i);function u(){var d=l.get(arguments);if(d===I){if(d=t.apply(null,arguments),c){var p=l.getEntries(),b=p.find(function(f){return c(f.value,d)});b&&(d=b.value)}l.put(arguments,d)}return d}return u.clearCache=function(){return l.clear()},u}function AA(t){var A=Array.isArray(t[0])?t[0]:t;if(!A.every(function(n){return typeof n=="function"})){var r=A.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return A}function eA(t){for(var A=arguments.length,r=new Array(A>1?A-1:0),n=1;n<A;n++)r[n-1]=arguments[n];var a=function(){for(var g=arguments.length,c=new Array(g),i=0;i<g;i++)c[i]=arguments[i];var l=0,u,d={memoizeOptions:void 0},p=c.pop();if(typeof p=="object"&&(d=p,p=c.pop()),typeof p!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof p+"]");var b=d,f=b.memoizeOptions,j=f===void 0?r:f,B=Array.isArray(j)?j:[j],k=AA(c),h=t.apply(void 0,[function(){return l++,p.apply(null,arguments)}].concat(B)),w=t(function(){for(var E=[],x=k.length,W=0;W<x;W++)E.push(k[W].apply(null,arguments));return u=h.apply(null,E),u});return Object.assign(w,{resultFunc:p,memoizedResultFunc:h,dependencies:k,lastResult:function(){return u},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),w};return a}var tA=eA(_);const rA=t=>t.cars.items,nA=t=>t.filter.conditions,oA=t=>t.cars.favorite,WA=tA([rA,nA],(t,A)=>t.filter(r=>!(A.brand&&!r.make.includes(A.brand)||A.price&&!(Number(r.rentalPrice.slice(1))<=A.price)||A.milefrom&&!(Number(A.milefrom)<=r.mileage)||A.mileto&&!(Number(A.mileto)>=r.mileage)))),iA=t=>v.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...t},v.createElement("path",{stroke:"#121417",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M18 6 6 18M6 6l12 12"})),aA=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  transition: opacity 2500ms cubic-bezier(0.4, 0, 0.2, 1), visibility 2500ms cubic-bezier(0.4, 0, 0.2, 1);
`,sA=o.div`
  position: absolute;
    top: 50%;
    left: 50%;
     box-sizing: border-box;
    width: 541px;
    padding: 40px;
    background-color: white;
    border-radius: 24px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%) scale(1);
    transition: transform 2500ms cubic-bezier(0.4, 0, 0.2, 1);
`,cA=o.button`
  position: absolute;
  padding: 0;
  top: 16px;
  right: 16px;

  border: 0px;
  background-color: transparent;
`,lA=o(iA)`
display: block;
  width: 24px;
  height: 24px;
`,dA=document.querySelector("#modal-root");function pA({children:t,onClose:A}){v.useEffect(()=>{const n=a=>{a.code==="Escape"&&A()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[A]);const r=n=>{n.currentTarget===n.target&&A()};return P.createPortal(e.jsx(aA,{onClick:r,children:e.jsxs(sA,{children:[e.jsx(cA,{type:"button",onClick:()=>A(),children:e.jsx(lA,{})}),t]})}),dA)}const Q="data:image/jpeg;base64,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",uA=o.img`
width: 461px;
height: 248px;
margin-bottom: 14px;

border-radius: 14px;
background: #F3F3F2;
`,xA=o.h1`
margin-bottom: 8px;
color: #121417;
  font-family: "ManropeMedium";
  font-size: 18px;
  line-height: 24px;
`,F=o.ul`
display: flex;
flex-wrap: wrap;
gap: 6px;
`,m=o.li`
padding-right: 6px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
border-right: 1px solid rgba(18, 20, 23, 0.5);
`,gA=o.p`
margin-top: 14px;
font-size: 14px;
line-height: 20px;
`,z=o.h2`
margin-top: 24px;
margin-bottom: 8px;
font-family: 'ManropeMedium';
font-size: 14px;
line-height: 20px;
`,R=o.li`
padding: 7px 14px;
color: #363535;

font-family: 'Montserrat';
font-size: 12px;
line-height: 18px;

border-radius: 35px;
background: #F9F9F9;
`,S=o.span`
color: #3470FF;
font-family: 'MontserratSemiBolt';
`,fA=o.a`
display: block;
width: fit-content;
margin-top: 24px;
padding: 12px 50px;

color: white;
font-family: 'ManropeSemiBolt';
font-size: 14px;
line-height: 20px;

border-radius: 12px;
background: #3470FF;

transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color: #0b44cd;
  }
`,X=t=>v.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},v.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.8,strokeWidth:1.5,d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})),hA=o.li`
  position: relative;
  flex-basis: 274px;
  height: 426px;
`,mA=o.img`
  margin-bottom: 14px;
  border-radius: 14px;
`,J=o.button`
  position: absolute;
  padding: 0;
  top: 14px;
  right: 14px;

  border: 0px;
  background-color: transparent;
`,bA=o(X)`
  display: block;
  stroke: rgba(255, 255, 255, 0.8);
  width: 18px;
  height: 18px;

  &:hover,
  :focus {
    fill: rgba(52, 112, 255, 1);
    stroke: rgba(52, 112, 255, 1);
  }
`,kA=o(X)`
  display: block;
  fill: rgba(52, 112, 255, 1);
  stroke: rgba(52, 112, 255, 1);

  width: 18px;
  height: 18px;

  &:hover,
  :focus {
    stroke: rgba(255, 255, 255, 0.8);
    fill: transparent;
  }
`,jA=o.div`
  height: 24px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  overflow: hidden;
`,yA=o.h2`
  color: #121417;
  font-family: "ManropeMedium";
  font-size: 16px;
  line-height: 24px;
`,q=o.span`
  color: #3470ff;
`,vA=o.p`
  font-family: "ManropeMedium";
  font-size: 16px;
  line-height: 24px;
`,BA=o.p`
  margin-bottom: 28px;
  height: 40px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
  overflow: hidden;
`,wA=o.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  color: white;
  font-family: "ManropeSemiBolt";
  font-size: 14px;
  line-height: 20px;

  border: 0px;
  border-radius: 12px;
  background: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;function EA({data:t}){const{img:A,model:r,make:n,year:a,address:s,rentalCompany:g,type:c,id:i,accessories:l,rentalPrice:u,fuelConsumption:d,engineSize:p,description:b,functionalities:f,rentalConditions:j,mileage:B}=t,k=s.split(", ").slice(1),h=j.split(`
`),w=parseInt(h[0].match(/\d+/)),y=Number(u.slice(1)),E=new Intl.NumberFormat("en-IN").format(B);return e.jsxs(e.Fragment,{children:[e.jsx(uA,{src:A??Q,alt:n,width:"461px",height:"248px",onError:x=>x.target.src=Q}),e.jsxs(xA,{children:[n," ",e.jsx(q,{children:r}),", ",a]}),e.jsxs(F,{children:[e.jsx(m,{children:k[0]}),e.jsx(m,{children:k[1]}),e.jsxs(m,{children:["id:",i]}),e.jsxs(m,{children:["Year: ",a]}),e.jsxs(m,{children:["Type: ",c]}),e.jsxs(m,{children:["Fuel Consumption: ",d]}),e.jsxs(m,{children:["Engine Size: ",p]})]}),e.jsx(gA,{children:b}),e.jsx(z,{children:"Accessories and functionalities:"}),e.jsxs(F,{children:[l.map(x=>e.jsx(m,{children:x},x)),f.map(x=>e.jsx(m,{children:x},x))]}),e.jsx(z,{children:"Rental Conditions:"}),e.jsxs(F,{children:[e.jsxs(R,{children:["Minimum age: ",e.jsx(S,{children:w})]}),h.slice(1).map(x=>e.jsx(R,{children:x},x)),e.jsxs(R,{children:["Mileage: ",e.jsx(S,{children:E})]}),e.jsxs(R,{children:["Price: ",e.jsxs(S,{children:[y,"$"]})]})]}),e.jsx(fA,{href:"tel:+380730000000",children:"Rental car"})]})}const M="data:image/jpeg;base64,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";function RA({data:t}){const[A,r]=v.useState(!1),n=Z(),{img:a,model:s,make:g,year:c,address:i,rentalCompany:l,type:u,id:d,accessories:p,rentalPrice:b}=t,f=i.split(", ").slice(1),j=H(oA),B=()=>{n(D(t))},k=()=>{n(G(t))};return e.jsxs(hA,{children:[e.jsx(mA,{width:"274px",height:"268px",src:a??M,alt:s,onError:h=>h.target.src=M}),j.some(h=>h.id===d)?e.jsx(J,{type:"button",onClick:()=>k(),children:e.jsx(kA,{})}):e.jsx(J,{type:"button",onClick:()=>B(),children:e.jsx(bA,{})}),e.jsxs(jA,{children:[e.jsxs(yA,{children:[g," ",e.jsx(q,{children:s}),", ",c]}),e.jsx(vA,{children:b})]}),e.jsxs(BA,{children:[f[0]," | ",f[1]," | ",l," | ",u," | ",s," |"," ",d," | ",p[1]]}),e.jsx(wA,{type:"button",onClick:()=>r(!0),children:"Learn more"}),A&&e.jsx(pA,{children:e.jsx(EA,{data:t}),onClose:()=>r(!1)})]})}const CA=o.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 29px;
    row-gap: 50px;
    justify-content: center;
`;function FA({cars:t}){return e.jsx(CA,{children:t.map(A=>e.jsx(RA,{data:A},A.id))})}const SA=o.div`
padding-top: 40px;
padding-left: 128px;
padding-right: 128px;
padding-bottom: 150px;
`;export{SA as C,WA as a,FA as b,oA as c,rA as s,Z as u};
