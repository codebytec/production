(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[9],{103:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a(4),i=a.n(c),r=a(57),o=a(20),l=a(21),d=a(74),h=a(22),u=a(58),j=a(59);a(98);t.default=function(){return Object(n.jsxs)("section",{className:"page-404",children:[Object(n.jsxs)(o.a,{children:[Object(n.jsx)("title",{tag:"title",children:"404 | Page Not Found"}),Object(n.jsx)("meta",{name:"description",content:"404: page not found. This page doesn't exist. "})]}),Object(n.jsx)(r.a,{appear:!0,in:!0,timeout:0,onEnter:h.b,children:e=>Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)("div",{className:"page-404__details",children:Object(n.jsxs)("div",{className:"page-404__text",children:[Object(n.jsx)(u.a,{className:i()("page-404__title",`page-404__title--${e}`),level:0,children:"404"}),Object(n.jsx)(u.a,{"aria-hidden":!0,className:i()("page-404__subheading",`page-404__subheading--${e}`),as:"h2",level:3,children:Object(n.jsx)(d.a,{text:"Error: Redacted",start:"exited"!==e,delay:300})}),Object(n.jsx)(j.a,{className:i()("page-404__description",`page-404__description--${e}`),children:"This page could not be found. It either doesn\u2019t exist or was deleted. You don't exist. It's all in your head."}),Object(n.jsx)(l.a,{secondary:!0,iconHoverShift:!0,className:i()("page-404__button",`page-404__button--${e}`),href:"/",icon:"chevronRight",children:"Rescue me"})]})}),Object(n.jsx)("div",{className:i()("page-404__video-container",`page-404__video-container--${e}`)})]})})]})}},58:function(e,t,a){"use strict";var n=a(1),s=a(0),c=a(4),i=a.n(c),r=a(20),o=a.p+"static/media/gotham-bold.73ce573b.woff2";a(60);t.a=({children:e,level:t=1,as:a,align:c="auto",weight:l="medium",className:d,...h})=>{const u=Math.min(Math.max(t,0),4),j=a||`h${Math.max(u,1)}`;return Object(n.jsxs)(s.Fragment,{children:["bold"===l&&Object(n.jsxs)(r.a,{children:[Object(n.jsx)("link",{rel:"preload",href:o,as:"font",crossorigin:""}),Object(n.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(n.jsx)(j,{className:i()(d,"heading",`heading--align-${c}`,`heading--level-${u}`,`heading--weight-${l}`),...h,children:e})]})}},59:function(e,t,a){"use strict";var n=a(1),s=a(4),c=a.n(s);a(63);t.a=({children:e,size:t="m",as:a="p",align:s="auto",weight:i="auto",secondary:r,className:o,...l})=>Object(n.jsx)(a,{className:c()(o,"text",`text--align-${s}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":r}),...l,children:e})},60:function(e,t,a){},63:function(e,t,a){},74:function(e,t,a){"use strict";var n=a(1),s=a(0),c=a(4),i=a.n(c),r=a(9),o=a(69),l=a(23),d=a(27);a(75);const h=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],u="glyph",j="value";const p=({text:e,start:t=!0,delay:a=0,className:c,...p})=>{const b=Object(s.useRef)([{type:u,value:""}]),g=Object(s.useRef)(),f=Object(r.g)();return Object(s.useEffect)((()=>{const n=g.current,s=e.split("");let c;const i=()=>{const e=b.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},r=Object(o.g)(0,(e=>{b.current=function(e,t,a){return e.map(((e,n)=>{if(n<a)return{type:j,value:e};if(a%1<.5){const e=Math.floor(Math.random()*h.length);return{type:u,value:h[e]}}return{type:u,value:t[n].value}}))}(s,b.current,e),i()}));return!t||c||f||d.a||(c=Object(o.a)(Object(o.b)(a),Object(o.e)({from:0,to:s.length,stiffness:8,damping:5})).start(r)),f&&(b.current=s.map(((e,t)=>({type:j,value:s[t]}))),i()),()=>{c&&c.stop()}}),[f,t,a,e]),Object(n.jsxs)("span",{className:i()("decoder-text",c),...p,children:[Object(n.jsx)(l.a,{className:"decoder-text__label",children:e}),Object(n.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:g})]})};t.a=Object(s.memo)(p)},75:function(e,t,a){},98:function(e,t,a){}}]);
//# sourceMappingURL=9.5006da6b.chunk.js.map