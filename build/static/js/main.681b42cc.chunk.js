(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{83:function(e,t,n){},88:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(19),r=n.n(i),o=(n(83),n(73)),c=n(121),l=n(125),s=n(122),d=n(120),b=n(15),j=n(4),p=Object(b.a)({root:{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",padding:"0 25px",boxSizing:"border-box",borderRadius:0,background:"#4f25f7",color:"#fff",transform:"none",boxShadow:"6px 6px 0 0 #c7d8ed",transition:"background .3s,border-color .3s,color .3s","&:hover":{backgroundColor:"#4f25f7"}},label:{textTransform:"capitalize"}})(d.a);var m=function(e){return Object(j.jsx)(p,{variant:"contained",children:e.txt})},h=Object(c.a)({wrapper:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0 5rem 0 5rem"},item:{paddingTop:"1rem"}});var u=function(e){var t=e.icon,n=e.title,a=e.btnTitle,i=h();return Object(j.jsxs)("div",{className:i.wrapper,children:[Object(j.jsx)("div",{className:i.item,children:t}),Object(j.jsx)(s.a,{className:i.item,variant:"h5",children:n}),Object(j.jsx)("div",{className:i.item,children:Object(j.jsx)(m,{txt:a})})]})},f=n(123),x=n(124),g=n(64),O=n.n(g),y=n(65),v=n.n(y),w=n(66),S=n.n(w),T=n(67),k=n.n(T);var N=function(){return Object(j.jsxs)(f.a,{children:[Object(j.jsx)(x.a,{color:"red",label:"Facebook",value:"recents",icon:Object(j.jsx)(O.a,{style:{fill:"#3b5998"}})}),Object(j.jsx)(x.a,{label:"Twitter",value:"favorites",icon:Object(j.jsx)(v.a,{style:{fill:"#1DA1F2"}})}),Object(j.jsx)(x.a,{label:"Instagram",value:"nearby",icon:Object(j.jsx)(S.a,{style:{fill:" #C13584"}})}),Object(j.jsx)(x.a,{label:"YouTube",value:"folder",icon:Object(j.jsx)(k.a,{style:{fill:"#c4302b"}})})]})},C=n(5),F=n(3),z=Object(c.a)({wrapper:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0 5rem 0 5rem"},bigSpace:{marginTop:"-4rem",font:"bold",size:"5px"},textbox:{width:"240%",height:"70%",padding:"10%",margin:"8px 0",boxSizing:"border-box",border:"5px solid #ccc",borderRadius:"20%",backgroundColor:"#f8f8f8",resize:"auto",fontSize:"large",left:"-60%",top:"-30%",zIndex:"2",position:"relative","&:focus":{boxShadow:"1 2 2 1",outline:"none",border:"3px solid #ccc",backgroundColor:"#f8f8f8",transition:"all 0.2s ease-in-out"}},submit:{fontSize:"large",fontFamily:"Roboto",fontWeight:"bold",position:"relative"}});var A=function(e){var t=Object(a.useState)(""),n=Object(C.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(""),c=Object(C.a)(o,2),l=(c[0],c[1],Object(F.k)()),s=z();return Object(j.jsx)("div",{className:"".concat(s.wrapper," ").concat(s.bigSpace),children:Object(j.jsxs)("form",{onSubmit:function(e){console.log("The name you entered was: ".concat(i)),e.preventDefault(),fetch("http://localhost:5000/search",{method:"POST",mode:"cors",headers:{content_type:"application/json"},body:JSON.stringify({user:"null for now",product:i})}).then((function(e){return e.json().then((function(e){console.log(e),l("/comparison",e)}))}))},children:[Object(j.jsx)("input",{className:s.textbox,type:"text",placeholder:"Search ",name:"product_name",value:i,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("input",{className:s.submit,type:"submit",value:"Search"})]})})},D=(n(88),n(68)),I=n.n(D),E=n(69),W=n.n(E),R=n(70),B=n.n(R),P=Object(o.a)({palette:{primary:{main:"#2e1667"},secondary:{main:"#c7d8ed"}},typography:{fontFamily:["Roboto"],h4:{fontWeight:600,fontSize:28,lineHeight:"2rem"},h5:{fontWeight:100,lineHeight:"2rem"}}}),J=Object(c.a)({wrapper:{width:"30%",margin:"auto",textAlign:"center"},bigSpace:{marginTop:"5rem"},littleSpace:{marginTop:"2.5rem"},grid:{display:"flex",marginTop:"-12rem",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},search:{marginTop:"2rem",marginBottom:"11rem",display:"center",justifyContent:"center",borderRadius:"10px",borderColor:"#AFDCEB",borderWidth:"10px",borderStyle:"solid",backgroundColor:"#c7d8ed",padding:"10%",backgroundPosition:"center",margin:"25%"}});var L=function(){var e=J();return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.a,{theme:P,children:[Object(j.jsxs)("div",{className:e.wrapper,children:[Object(j.jsx)(s.a,{variant:"h2",className:e.bigSpace,color:"primary",children:"Price Ain't Right"}),Object(j.jsx)(s.a,{variant:"h5",className:e.littleSpace,color:"primary",children:"Find The best deals on the web with one simple search! (And it's free!)"})]}),Object(j.jsx)("div",{className:"".concat(e.search," ").concat(e.wrapper),children:Object(j.jsx)(A,{})}),Object(j.jsxs)("div",{className:"".concat(e.grid," ").concat(e.littleSpace),children:[Object(j.jsx)(u,{icon:Object(j.jsx)(I.a,{style:{fill:"#5EA780",height:"125",width:"125"}}),title:"Education Discounts",btnTitle:"Show me More"}),Object(j.jsx)(u,{icon:Object(j.jsx)(W.a,{style:{fill:"#E69426",height:"125",width:"125"}}),title:"Environmental-Friendly",btnTitle:"Show me More"}),Object(j.jsx)(u,{icon:Object(j.jsx)(B.a,{style:{fill:"#2EA09D",height:"125",width:"125"}}),title:"Feeling Lucky?",btnTitle:"Show me More"})]}),Object(j.jsx)("div",{className:e.bigSpace,children:Object(j.jsx)(N,{})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))},H=n(48),_=Object(o.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:H.a.A400},background:{default:"#f7f7f7"}},typography:{fontFamily:['"Open Sans"',"sans-serif"]}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(56);n(94);r.a.render(Object(j.jsxs)(l.a,{theme:_,children:[Object(j.jsx)(Y.a,{children:Object(j.jsx)(L,{})}),","]}),document.getElementById("root")),M(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[96,1,2]]]);
//# sourceMappingURL=main.681b42cc.chunk.js.map