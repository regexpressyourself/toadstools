(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{34:function(e,t,n){e.exports=n(62)},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(28),c=n.n(l),o=n(6),i=n(1),u=n(5),s=n(13),f=n.n(s),m=n(29),p=n(30),E=n.n(p),b=function(){var e=Object(m.a)(f.a.mark((function e(t,n,a){var r,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("user"),console.log(a),e.next=4,E.a.get("/playing/".concat(a&&a));case 4:r=e.sent,l=r.data,t.song!==l.song&&n(l);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),h=n(7),d=n(8);function v(){var e=Object(h.a)(["\n  position: absolute;\n  visibility: hidden;\n  height: auto;\n  width: auto;\n  white-space: nowrap; /* Thanks to Herb Caudill comment */\n"]);return v=function(){return e},e}function g(){var e=Object(h.a)(["\n  animation: scroll ","s linear 0s infinite;\n  position: absolute;\n  left: ","px;\n  @keyframes scroll {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(-","px, 0);\n    }\n  }\n"]);return g=function(){return e},e}function j(){var e=Object(h.a)(["\n  font-family: ",";\n  position: relative !important;\n  width: 300px;\n  height: 45px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 220ms ease-in-out;\n  white-space: nowrap;\n"]);return j=function(){return e},e}var y=function(e){var t=e.songData,n=Object(i.f)().font,l=Object(a.useRef)(null),c=Object(a.useState)(0),o=Object(u.a)(c,2),s=o[0],f=o[1],m=Object(a.useState)("gh"===n?"Gloria Hallelujah":n),p=Object(u.a)(m,1)[0],E="".concat(t.song," // ").concat(t.artist," // ").concat(t.album);return Object(a.useEffect)((function(){if(p){var e=document.createElement("link");e.setAttribute("href","https://fonts.googleapis.com/css2?family=".concat(p,"&display=swap")),e.setAttribute("rel","stylesheet"),document.head.appendChild(e)}}),[p]),Object(a.useEffect)((function(){var e=l.current&&l.current.clientWidth+1;f(e)}),[t]),t.song?r.a.createElement(O,{elWidth:s,fontFamily:p&&p.replace("+"," ")},r.a.createElement(w,{elWidth:s},E),r.a.createElement(w,{elWidth:s,elOffset:s},E),r.a.createElement(x,{ref:l},E)):null},O=d.a.div(j(),(function(e){return e.fontFamily})),w=d.a.span(g(),(function(e){return e.elWidth/42}),(function(e){return e.elOffset+50||0}),(function(e){return e.elWidth+50||0})),x=d.a.div(v());var S=function(e){var t=e.songData;return r.a.createElement("img",{alt:"--",src:t.image})};var k=function(e){var t=e.view,n=Object(a.useState)({}),l=Object(u.a)(n,2),c=l[0],o=l[1],s=Object(i.f)().user;switch(Object(a.useEffect)((function(){b(c,o,s);var e=setInterval((function(){b(c,o,s)}),5e3);return function(){return clearInterval(e)}}),[c,c.song,s]),t){case"art":return r.a.createElement(S,{songData:c});case"info":return r.a.createElement(y,{songData:c});default:return null}};function C(){var e=Object(h.a)(["\n  font-family: ",";\n"]);return C=function(){return e},e}var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"PSST"),r.a.createElement("p",null,"Pretty",r.a.createElement("br",null),"Sweet",r.a.createElement("br",null),"Streaming",r.a.createElement("br",null),"Tools",r.a.createElement("br",null)),r.a.createElement(o.b,{to:"/play/zookeeprr/info/Gloria+Hallelujah"},"Sam's now playing info"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/play/zookeeprr/art"},"Sam's now playing art"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/countdown/Gloria+Hallelujah"},"Countdown timer"))};d.a.div(C(),(function(e){return e.fontFamily}));function W(){var e=Object(h.a)(["\n  font-family: ",";\n"]);return W=function(){return e},e}var D=function(){var e=Object(i.f)().font,t=Object(a.useState)("gh"===e?"Gloria Hallelujah":e),n=Object(u.a)(t,1)[0],l=Object(a.useState)(null),c=Object(u.a)(l,2),o=c[0],s=c[1],f=Object(a.useState)("Done"),m=Object(u.a)(f,2),p=m[0],E=m[1],b=Object(a.useState)(0),h=Object(u.a)(b,2),d=h[0],v=h[1],g=Object(a.useState)(0),j=Object(u.a)(g,2),y=j[0],O=j[1];return Object(a.useEffect)((function(){if(n){var e=document.createElement("link");e.setAttribute("href","https://fonts.googleapis.com/css2?family=".concat(n,"&display=swap")),e.setAttribute("rel","stylesheet"),document.head.appendChild(e)}}),[n]),o?r.a.createElement(H,{fontFamily:n&&n.replace("+"," ")},r.a.createElement("p",null,o)):r.a.createElement(H,{fontFamily:n&&n.replace("+"," ")},r.a.createElement("label",{for:"seconds"},"Seconds")," ",r.a.createElement("input",{max:"59",type:"number",min:"0",id:"seconds",onChange:function(e){var t=e.target;return v(t.value)}}),r.a.createElement("br",null),r.a.createElement("label",{for:"minutes"},"Minutes")," ",r.a.createElement("input",{max:"59",min:"0",type:"number",id:"minutes",onChange:function(e){var t=e.target;return O(t.value)}}),r.a.createElement("br",null),r.a.createElement("label",{for:"text"},"Completion text")," ",r.a.createElement("input",{type:"text",id:"text",value:p,onChange:function(e){var t=e.target;return E(t.value)}}),r.a.createElement("br",null),r.a.createElement("button",{disabled:y>59||d>59,onClick:function(){var e=y,t=d;setInterval((function(){s("".concat(e||"0",":").concat(t<10?"0"+("0"+t).slice(-1):t)),--t<0&&e>=0&&(--e,t=59),e<0&&s(p)}),1e3)}},"Start Timer"))},H=d.a.section(W(),(function(e){return e.fontFamily}));function A(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(F,null)),r.a.createElement(i.a,{exact:!0,path:"/countdown"},r.a.createElement(D,null)),r.a.createElement(i.a,{exact:!0,path:"/countdown/:font"},r.a.createElement(D,null)),r.a.createElement(i.a,{exact:!0,path:"/play/art"},r.a.createElement(k,{view:"art"})),r.a.createElement(i.a,{exact:!0,path:"/play/:user/art"},r.a.createElement(k,{view:"art"})),r.a.createElement(i.a,{exact:!0,path:"/play/info"},r.a.createElement(k,{view:"info"})),r.a.createElement(i.a,{exact:!0,path:"/play/:user/info"},r.a.createElement(k,{view:"info"})),r.a.createElement(i.a,{exact:!0,path:"/play/info/:font"},r.a.createElement(k,{view:"info"})),r.a.createElement(i.a,{exact:!0,path:"/play/:user/info/:font"},r.a.createElement(k,{view:"info"}))))}n(61);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c6a46ad8.chunk.js.map