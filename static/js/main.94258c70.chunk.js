(this["webpackJsonpchess-algorithms-visualizer"]=this["webpackJsonpchess-algorithms-visualizer"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e(1),i=e.n(c),u=e(5),o=e.n(u),a=(e(12),e(2)),s=(e(13),e(6)),l=e.n(s),d=e(3),f=e.n(d),j=function(t){for(var n=0,e="",r=0;r<8;r++){for(var c=0;c<8;c++)"_"===t[r][c]?n++:(0!==n&&(e=e.concat(n)),e=e.concat("Q"),n=0);0!==n&&(e=e.concat(n),n=0),7!==r&&(e=e.concat("/"))}return e.concat(" w - - 0 1")},b=function(){for(var t=[],n=0;n<8;n++){t.push([]);for(var e=0;e<8;e++)t[n].push("_")}return t},v=function(t){for(var n=0,e=0;e<8;e++){n=0;for(var r=0;r<8;r++)"X"===t[r][e]&&n++;if(n>1)return"invalid"}for(var c=0;c<8;c++){n=0;for(var i=c,u=0;u<=c;u++){if("X"===t[i][u]&&n++,n>1)return"invalid";i--}}for(var o=7;o>=0;o--){n=0;for(var a=o,s=7;s>=o;s--){if("X"===t[a][s]&&n++,n>1)return"invalid";a++}}for(var l=7;l>=0;l--){n=0;for(var d=l,f=0;f<=7-l;f++){if("X"===t[d][f]&&n++,n>1)return"invalid";d++}}for(var j=0;j<8;j++){n=0;for(var b=j,v=7;v>=7-j;v--){if("X"===t[b][v]&&n++,n>1)return"invalid";b--}}n=0;for(var h=0;h<8;h++)for(var O=0;O<8;O++)"X"===t[h][O]&&n++;return 8===n},h=function(t){var n=t.started,e=t.timeInterval,i=t.solutions,u=t.setSolutions,o=t.setStarted,s=Object(c.useRef)([0,0,0,0,0,0,0,0]),l=Object(c.useState)(function(){for(var t=b(),n=0;n<8;n++)t[n][s.current[n]]="X";return t}()),d=Object(a.a)(l,2),h=d[0],O=d[1],g=Object(c.useRef)();return Object(c.useEffect)((function(){if(n){var t=setTimeout((function(){!function(){if(s.current.every((function(t){return 0===t}))&&console.log("START"),s.current.every((function(t){return 7===t})))o(!1),s.current=[0,0,0,0,0,0,0,0];else{for(s.current[0]++;s.current.includes(8);){var t=s.current.indexOf(8);s.current[t]=0,s.current[t+1]++}g.current=b();for(var n=0;n<8;n++)g.current[n][s.current[n]]="X";O(JSON.parse(JSON.stringify(g.current))),!0===v(h)&&u(i.concat(j(h)))}}()}),e);return function(){return clearTimeout(t)}}})),Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{calcWidth:function(t){var n=t.screenWidth,e=t.screenHeight;return Math.min(n<700?n/1.1:n/1.5,e/1.5)},transitionDuration:0,position:j(h),showNotation:!1,allowDrag:function(){return!1}})})},O=function(t){var n=function(t){for(var n=[null,null,null,null,null,null,null,null],e=0;e<8;e++)if(t[e]!==n[e])return!1;return!0},e=t.setStarted,i=t.started,u=t.timeInterval,o=t.solutions,s=t.setSolutions,l=Object(c.useRef)([null,null,null,null,null,null,null,null]),d=Object(c.useState)(b()),h=Object(a.a)(d,2),O=h[0],g=h[1],m=Object(c.useRef)(),x=Object(c.useRef)(0),S=Object(c.useRef)(!1);return Object(c.useEffect)((function(){if(!(!i||S.current&&n(l.current))){var t=setTimeout((function(){!function(){n(l.current)&&!S.current&&(S.current=!0),null===l.current[x.current]?l.current[x.current]=0:l.current[x.current]++,m.current=b();for(var t=0;t<8;t++)m.current[t][l.current[t]]="X";g(JSON.parse(JSON.stringify(m.current))),!0===v(m.current)?s(o.concat(j(m.current))):8===l.current[x.current]?(l.current[x.current]=null,x.current--):!1===v(m.current)&&x.current++}()}),u);return function(){return clearTimeout(t)}}e(!1),S.current=!1})),Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{calcWidth:function(t){var n=t.screenWidth,e=t.screenHeight;return Math.min(n<=850?n/1.1:n/1.5,e/1.5)},transitionDuration:0,position:j(O),showNotation:!1,allowDrag:function(){return!1}})})},g=function(){var t=Object(c.useState)([]),n=Object(a.a)(t,2),e=n[0],i=n[1],u=Object(c.useState)("blank"),o=Object(a.a)(u,2),s=o[0],d=o[1],j=Object(c.useState)(250),b=Object(a.a)(j,2),v=b[0],g=b[1],m=Object(c.useState)(!1),x=Object(a.a)(m,2),S=x[0],p=x[1],w=function(){var t=window;return{width:t.innerWidth,height:t.innerHeight}},k=function(){var t=Object(c.useState)(w()),n=Object(a.a)(t,2),e=n[0],r=n[1];return Object(c.useEffect)((function(){function t(){r(w())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),e};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{id:"header",children:Object(r.jsx)("h1",{children:"Eight Queens Visualizer"})}),Object(r.jsxs)("div",{id:"main-container",children:[Object(r.jsxs)("div",{id:"board-container",children:["blank"===s?Object(r.jsx)(f.a,{calcWidth:function(t){var n=t.screenWidth,e=t.screenHeight;return Math.min(n<=850?n/1.1:n/1.5,e/1.5)},showNotation:!1}):null,"brute-force"===s?Object(r.jsx)(h,{setStarted:p,started:S,timeInterval:v,solutions:e,setSolutions:i}):null,"backtracking"===s?Object(r.jsx)(O,{setAlgorithm:d,setStarted:p,started:S,timeInterval:v,solutions:e,setSolutions:i}):null]}),Object(r.jsxs)("div",{id:"controls-container",className:k().width<=850?"controls-container-small":"controls-container-big",children:[Object(r.jsxs)("div",{id:"range-container",children:[Object(r.jsx)("input",{type:"range",id:"interval-range",min:"1",max:"500",value:v,onChange:function(t){g(t.target.value)}}),Object(r.jsx)("label",{htmlFor:"interval-range",children:"Speed"})]}),Object(r.jsxs)("div",{id:"start-stop-container",children:[Object(r.jsx)("button",{className:"start-button",onClick:function(){p(!0)},disabled:!0===S,children:"Start"}),Object(r.jsx)("button",{className:"stop-button",onClick:function(){p(!1)},disabled:!1===S,children:"Stop"})]}),Object(r.jsxs)("div",{id:"algorithms-container",className:k().width<=850?"algorithms-container-small":"algorithms-container-big",children:[Object(r.jsx)("button",{onClick:function(){d("brute-force"),i([])},disabled:"brute-force"===s,children:"Brute Force"}),Object(r.jsx)("button",{onClick:function(){d("backtracking"),i([])},disabled:"backtracking"===s,children:"Backtracking"})]})]})]}),Object(r.jsx)("div",{id:"solutions-container",children:e.map((function(t,n){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:["Solution ",n+1]}),Object(r.jsx)(f.a,{calcWidth:function(t){var n=t.screenWidth;return n<=850?n/2.5:n/4.9},position:t,showNotation:!1,allowDrag:function(){return!1}})]},l()())}))})]})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.94258c70.chunk.js.map