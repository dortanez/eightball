(this.webpackJsonpeightball=this.webpackJsonpeightball||[]).push([[0],[,,,,,,,,,,function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){"use strict";t.r(o);var n=t(0),s=t(1),l=t.n(s),r=t(4),c=t.n(r),a=(t(10),t(11),t(2)),i=(t(12),function(e){var o=Object(s.useState)("Think of a Question"),t=Object(a.a)(o,2),l=t[0],r=t[1],c=Object(s.useState)("black"),i=Object(a.a)(c,2),g=i[0],d=i[1],u=Object(s.useState)(0),b=Object(a.a)(u,2),m=b[0],j=b[1],h=Object(s.useState)(0),O=Object(a.a)(h,2),p=O[0],y=O[1],f=Object(s.useState)(0),k=Object(a.a)(f,2),x=k[0],w=k[1];return Object(n.jsxs)("div",{className:"EightBall",children:[Object(n.jsx)("div",{style:{backgroundColor:g},className:"EightBall-div",onClick:function(){var o=Math.floor(Math.random()*e.answers.length);r(e.answers[o].msg),d(e.answers[o].color),"green"===e.answers[o].color?j(m+1):"goldenrod"===e.answers[o].color?y(p+1):w(x+1)},children:Object(n.jsx)("h1",{className:"EightBall-text",children:l})}),Object(n.jsx)("button",{onClick:function(){r("Think of a Question"),d("black"),j(0),y(0),w(0)},className:"EightBall-btn",children:"Reset"}),Object(n.jsxs)("p",{className:"EightBall-p",children:["Green: ",m]}),Object(n.jsxs)("p",{className:"EightBall-p",children:["Yellow: ",p]}),Object(n.jsxs)("p",{className:"EightBall-p",children:["Red: ",x]})]})});i.defaultProps={answers:[{msg:"It is certain.",color:"green"},{msg:"It is decidedly so.",color:"green"},{msg:"Without a doubt.",color:"green"},{msg:"Yes - definitely.",color:"green"},{msg:"You may rely on it.",color:"green"},{msg:"As I see it, yes.",color:"green"},{msg:"Most likely.",color:"green"},{msg:"Outlook good.",color:"green"},{msg:"Yes.",color:"green"},{msg:"Signs point to yes.",color:"goldenrod"},{msg:"Reply hazy, try again.",color:"goldenrod"},{msg:"Ask again later.",color:"goldenrod"},{msg:"Better not tell you now.",color:"goldenrod"},{msg:"Cannot predict now.",color:"goldenrod"},{msg:"Concentrate and ask again.",color:"goldenrod"},{msg:"Don't count on it.",color:"red"},{msg:"My reply is no.",color:"red"},{msg:"My sources say no.",color:"red"},{msg:"Outlook not so good.",color:"red"},{msg:"Very doubtful.",color:"red"}]};var g=i;var d=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(g,{})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(o){var t=o.getCLS,n=o.getFID,s=o.getFCP,l=o.getLCP,r=o.getTTFB;t(e),n(e),s(e),l(e),r(e)}))};c.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.eb029bd3.chunk.js.map