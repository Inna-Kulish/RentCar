import{l as u,n as X,o as H,r as c,s as t,e as P,j as A,p as q,q as G}from"./index-775a05ca.js";function S(e=u){const o=e===u?X:H(e);return function(){const{store:r}=o();return r}}const N=S();function Y(e=u){const o=e===u?N:S(e);return function(){return o().dispatch}}const D=Y(),uA=e=>e.cars.items,mA=e=>e.cars.page,fA=e=>e.cars.favorite,bA=e=>e.filter.filteredCars,O=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e},c.createElement("path",{stroke:"#121417",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M18 6 6 18M6 6l12 12"})),Z=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  transition: opacity 2500ms cubic-bezier(0.4, 0, 0.2, 1), visibility 2500ms cubic-bezier(0.4, 0, 0.2, 1);
`,T=t.div`
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
`,L=t.button`
  position: absolute;
  padding: 0;
  top: 16px;
  right: 16px;

  border: 0px;
  background-color: transparent;
`,U=t(O)`
display: block;
  width: 24px;
  height: 24px;
`,K=document.querySelector("#modal-root");function $({children:e,onClose:o}){c.useEffect(()=>{const r=a=>{a.code==="Escape"&&o()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[o]);const s=r=>{r.currentTarget===r.target&&o()};return P.createPortal(A.jsx(Z,{onClick:s,children:A.jsxs(T,{children:[A.jsx(L,{type:"button",onClick:()=>o(),children:A.jsx(U,{})}),e]})}),K)}const W="data:image/jpeg;base64,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",_=t.img`
width: 461px;
height: 248px;
margin-bottom: 14px;

border-radius: 14px;
background: #F3F3F2;
`,AA=t.h1`
margin-bottom: 8px;
color: #121417;
  font-family: "ManropeMedium";
  font-size: 18px;
  line-height: 24px;
`,R=t.ul`
display: flex;
flex-wrap: wrap;
gap: 6px;
`,i=t.li`
padding-right: 6px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
border-right: 1px solid rgba(18, 20, 23, 0.5);
`,eA=t.p`
margin-top: 14px;
font-size: 14px;
line-height: 20px;
`,Q=t.h2`
margin-top: 24px;
margin-bottom: 8px;
font-family: 'ManropeMedium';
font-size: 14px;
line-height: 20px;
`,h=t.li`
padding: 7px 14px;
color: #363535;

font-family: 'Montserrat';
font-size: 12px;
line-height: 18px;

border-radius: 35px;
background: #F9F9F9;
`,C=t.span`
color: #3470FF;
font-family: 'MontserratSemiBolt';
`,tA=t.a`
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
`,z=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.8,strokeWidth:1.5,d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})),oA=t.li`
  position: relative;
  flex-basis: 274px;
  height: 426px;
`,rA=t.img`
  margin-bottom: 14px;
  border-radius: 14px;
`,F=t.button`
  position: absolute;
  padding: 0;
  top: 14px;
  right: 14px;

  border: 0px;
  background-color: transparent;
`,nA=t(z)`
  display: block;
  stroke: rgba(255, 255, 255, 0.8);
  width: 18px;
  height: 18px;

  &:hover,
  :focus {
    fill: rgba(52, 112, 255, 1);
    stroke: rgba(52, 112, 255, 1);
  }
`,iA=t(z)`
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
`,sA=t.div`
  height: 24px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  overflow: hidden;
`,aA=t.h2`
  color: #121417;
  font-family: "ManropeMedium";
  font-size: 16px;
  line-height: 24px;
`,J=t.span`
  color: #3470ff;
`,cA=t.p`
  font-family: "ManropeMedium";
  font-size: 16px;
  line-height: 24px;
`,dA=t.p`
  margin-bottom: 28px;
  height: 40px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
  overflow: hidden;
`,lA=t.button`
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
`;function pA({data:e}){const{img:o,model:s,make:r,year:a,address:l,rentalCompany:I,type:d,id:m,accessories:f,rentalPrice:b,fuelConsumption:k,engineSize:j,description:B,functionalities:w,rentalConditions:y,mileage:p}=e,x=l.split(", ").slice(1),g=y.split(`
`),E=parseInt(g[0].match(/\d+/)),V=Number(b.slice(1)),M=new Intl.NumberFormat("en-IN").format(p);return A.jsxs(A.Fragment,{children:[A.jsx(_,{src:o??W,alt:r,width:"461px",height:"248px",onError:n=>n.target.src=W}),A.jsxs(AA,{children:[r," ",A.jsx(J,{children:s}),", ",a]}),A.jsxs(R,{children:[A.jsx(i,{children:x[0]}),A.jsx(i,{children:x[1]}),A.jsxs(i,{children:["id:",m]}),A.jsxs(i,{children:["Year: ",a]}),A.jsxs(i,{children:["Type: ",d]}),A.jsxs(i,{children:["Fuel Consumption: ",k]}),A.jsxs(i,{children:["Engine Size: ",j]})]}),A.jsx(eA,{children:B}),A.jsx(Q,{children:"Accessories and functionalities:"}),A.jsxs(R,{children:[f.map(n=>A.jsx(i,{children:n},n)),w.map(n=>A.jsx(i,{children:n},n))]}),A.jsx(Q,{children:"Rental Conditions:"}),A.jsxs(R,{children:[A.jsxs(h,{children:["Minimum age: ",A.jsx(C,{children:E})]}),g.slice(1).map(n=>A.jsx(h,{children:n},n)),A.jsxs(h,{children:["Mileage: ",A.jsx(C,{children:M})]}),A.jsxs(h,{children:["Price: ",A.jsxs(C,{children:[V,"$"]})]})]}),A.jsx(tA,{href:"tel:+380730000000",children:"Rental car"})]})}const v="data:image/jpeg;base64,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";function xA({data:e}){const[o,s]=c.useState(!1),[r,a]=c.useState(!1),l=D(),{img:I,model:d,make:m,year:f,address:b,rentalCompany:k,type:j,id:B,accessories:w,rentalPrice:y}=e,p=b.split(", ").slice(1),x=()=>{l(q(e)),a(!0)},g=()=>{l(G(e)),a(!1)};return A.jsxs(oA,{children:[A.jsx(rA,{width:"274px",height:"268px",src:I??v,alt:d,onError:E=>E.target.src=v}),r?A.jsx(F,{type:"button",onClick:()=>g(),children:A.jsx(iA,{})}):A.jsx(F,{type:"button",onClick:()=>x(),children:A.jsx(nA,{})}),A.jsxs(sA,{children:[A.jsxs(aA,{children:[m," ",A.jsx(J,{children:d}),", ",f]}),A.jsx(cA,{children:y})]}),A.jsxs(dA,{children:[p[0]," | ",p[1]," | ",k," | ",j," | ",d," | ",B," | ",w[1]]}),A.jsx(lA,{type:"button",onClick:()=>s(!0),children:"Learn more"}),o&&A.jsx($,{children:A.jsx(pA,{data:e}),onClose:()=>s(!1)})]})}const gA=t.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 29px;
    row-gap: 50px;
    justify-content: center;
`;function kA({cars:e}){return A.jsx(gA,{children:e.map(o=>A.jsx(xA,{data:o},o.id))})}const jA=t.div`
padding-top: 40px;
padding-left: 128px;
padding-right: 128px;
padding-bottom: 150px;
`;export{jA as C,mA as a,bA as b,kA as c,fA as d,uA as s,D as u};
