(this.webpackJsonpmemorygame=this.webpackJsonpmemorygame||[]).push([[0],{11:function(c,e,t){},12:function(c,e,t){},13:function(c,e,t){},15:function(c,e,t){"use strict";t.r(e);var n=t(3),a=t.n(n),r=t(6),s=t.n(r),i=(t(11),t(4)),d=t(2),u=t(1),o=(t(12),t(13),t.p+"static/media/cover.b35cfd28.png"),l=t(0),j=function(c){var e=c.card,t=c.handleChoice,n=c.flipped,a=c.disabled;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:n?"flipped":"",children:[Object(l.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(l.jsx)("img",{className:"back",src:o,onClick:function(){a||t(e)},alt:"card back"})]})})},m=[{src:t.p+"static/media/helmet-1.d082cb3c.png",matched:!1},{src:t.p+"static/media/potion-1.94e34273.png",matched:!1},{src:t.p+"static/media/ring-1.4c376e3f.png",matched:!1},{src:t.p+"static/media/scroll-1.135e1c7d.png",matched:!1},{src:t.p+"static/media/shield-1.a961da95.png",matched:!1},{src:t.p+"static/media/sword-1.47dbfbdd.png",matched:!1}];var b=function(){var c=Object(u.useState)([]),e=Object(d.a)(c,2),t=e[0],n=e[1],a=Object(u.useState)(0),r=Object(d.a)(a,2),s=r[0],o=r[1],b=Object(u.useState)(null),f=Object(d.a)(b,2),p=f[0],h=f[1],O=Object(u.useState)(null),g=Object(d.a)(O,2),x=g[0],v=g[1],N=Object(u.useState)(!1),k=Object(d.a)(N,2),S=k[0],M=k[1],w=function(){var c=[].concat(m,m).sort((function(){return Math.random()-.5})).map((function(c){return Object(i.a)(Object(i.a)({},c),{},{id:Math.random()})}));h(null),v(null),n(c),o(0)},C=function(c){p?v(c):h(c)};Object(u.useEffect)((function(){p&&x&&(M(!0),p.src===x.src?(n((function(c){return c.map((function(c){return c.src===p.src?Object(i.a)(Object(i.a)({},c),{},{matched:!0}):c}))})),setTimeout((function(){return y()}),1e3)):setTimeout((function(){return y()}),1e3))}),[p,x]),console.log(t);var y=function(){h(null),v(null),o((function(c){return c+1})),M(!1)};return Object(u.useEffect)((function(){w()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Magic Match"}),Object(l.jsx)("button",{onClick:w,children:"New Game"}),Object(l.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(l.jsx)(j,{card:c,handleChoice:C,flipped:c===p||c===x||c.matched,disabled:S},c.id)}))}),Object(l.jsxs)("p",{children:["Turns: ",s]})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dbd4f288.chunk.js.map