(this["webpackJsonpchess-algorithms-visualizer"]=this["webpackJsonpchess-algorithms-visualizer"]||[]).push([[0],{15:function(t,r,e){},16:function(t,r,e){},18:function(t,r,e){"use strict";e.r(r);var n=e(0),c=e(1),i=e.n(c),u=e(8),a=e.n(u),o=(e(15),e(2)),s=(e(16),e(9)),l=e.n(s),f=e(3),d=e.n(f),j=function(t){for(var r=0,e="",n=0;n<8;n++){for(var c=0;c<8;c++)"_"===t[n][c]?r++:(0!==r&&(e=e.concat(r)),e=e.concat("Q"),r=0);0!==r&&(e=e.concat(r),r=0),7!==n&&(e=e.concat("/"))}return e.concat(" w - - 0 1")},b=function(){for(var t=[],r=0;r<8;r++){t.push([]);for(var e=0;e<8;e++)t[r].push("_")}return t},v=function(t){for(var r=0,e=0;e<8;e++){r=0;for(var n=0;n<8;n++)"X"===t[n][e]&&r++;if(r>1)return"invalid"}for(var c=0;c<8;c++){r=0;for(var i=c,u=0;u<=c;u++){if("X"===t[i][u]&&r++,r>1)return"invalid";i--}}for(var a=7;a>=0;a--){r=0;for(var o=a,s=7;s>=a;s--){if("X"===t[o][s]&&r++,r>1)return"invalid";o++}}for(var l=7;l>=0;l--){r=0;for(var f=l,d=0;d<=7-l;d++){if("X"===t[f][d]&&r++,r>1)return"invalid";f++}}for(var j=0;j<8;j++){r=0;for(var b=j,v=7;v>=7-j;v--){if("X"===t[b][v]&&r++,r>1)return"invalid";b--}}r=0;for(var O=0;O<8;O++)for(var h=0;h<8;h++)"X"===t[O][h]&&r++;return 8===r},O=function(t){var r=t.started,e=t.timeInterval,i=t.solutions,u=t.setSolutions,a=t.setStarted,s=Object(c.useRef)([0,0,0,0,0,0,0,0]),l=Object(c.useState)(function(){for(var t=b(),r=0;r<8;r++)t[r][s.current[r]]="X";return t}()),f=Object(o.a)(l,2),O=f[0],h=f[1],m=Object(c.useRef)();return Object(c.useEffect)((function(){if(r){var t=setTimeout((function(){!function(){if(s.current.every((function(t){return 0===t}))&&console.log("START"),s.current.every((function(t){return 7===t})))a(!1),s.current=[0,0,0,0,0,0,0,0];else{for(s.current[0]++;s.current.includes(8);){var t=s.current.indexOf(8);s.current[t]=0,s.current[t+1]++}m.current=b();for(var r=0;r<8;r++)m.current[r][s.current[r]]="X";h(JSON.parse(JSON.stringify(m.current))),!0===v(O)&&u(i.concat(j(O)))}}()}),e);return function(){return clearTimeout(t)}}})),Object(n.jsx)("div",{children:Object(n.jsx)(d.a,{calcWidth:function(t){var r=t.screenWidth,e=t.screenHeight;return Math.min(r<700?r/1.1:r/1.5,e/1.5)},transitionDuration:0,position:j(O),showNotation:!1,allowDrag:function(){return!1}})})},h=function(t){var r=function(t){for(var r=[null,null,null,null,null,null,null,null],e=0;e<8;e++)if(t[e]!==r[e])return!1;return!0},e=t.setStarted,i=t.started,u=t.timeInterval,a=t.solutions,s=t.setSolutions,l=Object(c.useRef)([null,null,null,null,null,null,null,null]),f=Object(c.useState)(b()),O=Object(o.a)(f,2),h=O[0],m=O[1],g=Object(c.useRef)(),x=Object(c.useRef)(0),S=Object(c.useRef)(!1);return Object(c.useEffect)((function(){if(!(!i||S.current&&r(l.current))){var t=setTimeout((function(){!function(){r(l.current)&&!S.current&&(S.current=!0),null===l.current[x.current]?l.current[x.current]=0:l.current[x.current]++,g.current=b();for(var t=0;t<8;t++)g.current[t][l.current[t]]="X";m(JSON.parse(JSON.stringify(g.current))),!0===v(g.current)?s(a.concat(j(g.current))):8===l.current[x.current]?(l.current[x.current]=null,x.current--):!1===v(g.current)&&x.current++}()}),u);return function(){return clearTimeout(t)}}e(!1),S.current=!1})),Object(n.jsx)("div",{children:Object(n.jsx)(d.a,{calcWidth:function(t){var r=t.screenWidth,e=t.screenHeight;return Math.min(r<=850?r/1.1:r/1.5,e/1.5)},transitionDuration:0,position:j(h),showNotation:!1,allowDrag:function(){return!1}})})},m=e(7),g=function(t,r){var e=[0,0,0,0,0,0,0,0];t[r]=["_","_","_","_","_","_","_","_"];for(var n=0;n<8;n++){var c=0;t[r][n]="X";for(var i=0;i<8;i++)"X"===t[i][n]&&c++;for(var u=r,a=n;u>=0&&a>=0;)"X"===t[u][a]&&c++,u--,a--;for(u=r,a=n;u>=0&&a<8;)"X"===t[u][a]&&c++,u--,a++;for(u=r,a=n;u<8&&a>=0;)"X"===t[u][a]&&c++,u++,a--;for(u=r,a=n;u<8&&a<8;)"X"===t[u][a]&&c++,u++,a++;e[n]=c-5,t[r][n]="_"}return e},x=function(t){var r=t.started,e=t.timeInterval,i=t.setStarted,u=Object(c.useRef)([0,1,2,3,4,5,6,7]),a=Object(c.useState)(function(){for(var t=b(),r=0;r<8;r++)t[r][u.current[r]]="X";return t}()),s=Object(o.a)(a,2),l=s[0],f=s[1],O=Object(c.useRef)(),h=Object(c.useRef)(0),x=Object(c.useState)(h.current),S=Object(o.a)(x,2),p=S[0],w=S[1],X=Object(c.useRef)(!1);return Object(c.useEffect)((function(){if(r){var t=setTimeout((function(){!function(){if(!0!==v(l)||X.current)if(v(l)&&X.current){X.current=!1,O.current=b();for(var t=0;t<8;t++)O.current[t][u.current[t]]="X";f(JSON.parse(JSON.stringify(O.current)))}else{8===h.current&&(h.current=0);var r=g(Object(m.a)(l),h.current),e=r.indexOf(Math.min.apply(Math,Object(m.a)(r)));u.current[h.current]=e,h.current++,w(h.current),O.current=b();for(var n=0;n<8;n++)O.current[n][u.current[n]]="X";f(JSON.parse(JSON.stringify(O.current)))}else i(!1),u.current=[0,1,2,3,4,5,6,7],h.current=0,X.current=!0}()}),e);return function(){return clearTimeout(t)}}})),Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)(d.a,{calcWidth:function(t){var r=t.screenWidth,e=t.screenHeight;return Math.min(r<700?r/1.1:r/1.5,e/1.5)},transitionDuration:0,position:j(l),showNotation:!1,allowDrag:function(){return!1}}),Object(n.jsx)("h2",{children:!0!==v(l)?"Repairing Row ".concat(p+1):"Iterative Repair Completed"})]})},S=function(){var t=Object(c.useState)([]),r=Object(o.a)(t,2),e=r[0],i=r[1],u=Object(c.useState)("blank"),a=Object(o.a)(u,2),s=a[0],f=a[1],j=Object(c.useState)(250),b=Object(o.a)(j,2),v=b[0],m=b[1],g=Object(c.useState)(!1),S=Object(o.a)(g,2),p=S[0],w=S[1],X=function(){var t=window;return{width:t.innerWidth,height:t.innerHeight}},k=function(){var t=Object(c.useState)(X()),r=Object(o.a)(t,2),e=r[0],n=r[1];return Object(c.useEffect)((function(){function t(){n(X())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),e};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"header",children:Object(n.jsx)("h1",{children:"Eight Queens Visualizer"})}),Object(n.jsxs)("div",{id:"main-container",children:[Object(n.jsxs)("div",{id:"board-container",children:["blank"===s?Object(n.jsx)(d.a,{calcWidth:function(t){var r=t.screenWidth,e=t.screenHeight;return Math.min(r<=850?r/1.1:r/1.5,e/1.5)},showNotation:!1}):null,"brute-force"===s?Object(n.jsx)(O,{setStarted:w,started:p,timeInterval:v,solutions:e,setSolutions:i}):null,"backtracking"===s?Object(n.jsx)(h,{setAlgorithm:f,setStarted:w,started:p,timeInterval:v,solutions:e,setSolutions:i}):null,"iterative-repair"===s?Object(n.jsx)(x,{setAlgorithm:f,setStarted:w,started:p,timeInterval:v,solutions:e,setSolutions:i}):null]}),Object(n.jsxs)("div",{id:"controls-container",className:k().width<=850?"controls-container-small":"controls-container-big",children:[Object(n.jsxs)("div",{id:"range-container",children:[Object(n.jsx)("input",{type:"range",id:"interval-range",min:"1",max:"500",value:v,onChange:function(t){m(t.target.value)}}),Object(n.jsx)("label",{htmlFor:"interval-range",children:"Speed"})]}),Object(n.jsxs)("div",{id:"start-stop-container",children:[Object(n.jsx)("button",{className:"start-button",onClick:function(){w(!0)},disabled:!0===p,children:"Start"}),Object(n.jsx)("button",{className:"stop-button",onClick:function(){w(!1)},disabled:!1===p,children:"Stop"})]}),Object(n.jsxs)("div",{id:"algorithms-container",className:k().width<=850?"algorithms-container-small":"algorithms-container-big",children:[Object(n.jsx)("button",{onClick:function(){f("brute-force"),i([])},disabled:"brute-force"===s,children:"Brute Force"}),Object(n.jsx)("button",{onClick:function(){f("backtracking"),i([])},disabled:"backtracking"===s,children:"Backtracking"}),Object(n.jsx)("button",{onClick:function(){f("iterative-repair"),i([])},disabled:"iterative-repair"===s,children:"Iterative Repair"})]})]})]}),Object(n.jsx)("div",{id:"solutions-container",children:e.map((function(t,r){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:["Solution ",r+1]}),Object(n.jsx)(d.a,{calcWidth:function(t){var r=t.screenWidth;return r<=850?r/2.5:r/4.9},position:t,showNotation:!1,allowDrag:function(){return!1}})]},l()())}))})]})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6646617b.chunk.js.map