(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(5),a=n.n(o),r=(n(10),n(3)),i=n(2),l=n.n(i),b=n(0),j=function(){var e=Object(c.useState)({background:"black",color:"white"}),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)("Enable Light Mode"),a=Object(r.a)(o,2),i=a[0],j=a[1],u=Object(c.useState)(""),d=Object(r.a)(u,2),h=d[0],x=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:l.a.container,style:n,children:[Object(b.jsx)("div",{className:l.a.header,style:n,children:Object(b.jsx)("h3",{children:"Text Utils"})}),Object(b.jsxs)("div",{className:l.a.main,style:n,children:[Object(b.jsx)("h2",{children:"Analysis your text"}),Object(b.jsx)("textarea",{name:"textArea",cols:"70",rows:"10",id:"box",value:h,onChange:function(e){x(e.target.value)}}),Object(b.jsxs)("div",{className:l.a.btns,style:n,children:[Object(b.jsx)("button",{onClick:function(){var e=h.toUpperCase();x(e)},style:n,children:"Convert to UpperCase"}),Object(b.jsx)("button",{onClick:function(){var e=h.toLowerCase();x(e)},style:n,children:"Convert to LowerCase"}),Object(b.jsx)("button",{onClick:function(){x("")},style:n,children:"Clear All"}),Object(b.jsxs)("button",{onClick:function(){var e=h.split(/[ ]+/);x(e.join(" "))},style:n,children:["Remove Extra Spaces"," "]}),Object(b.jsx)("button",{onClick:function(){var e=document.getElementById("box");e.select(),navigator.clipboard.writeText(e.value)},style:n,children:"Copy Text"}),Object(b.jsx)("button",{onClick:function(){"white"===n.color?(s({background:"white",color:"black"}),j("Enable Dark Mode")):(s({background:"black",color:"white"}),j("Enable Light Mode"))},style:n,children:i})]})]}),Object(b.jsxs)("div",{className:l.a.summery,style:n,children:[Object(b.jsx)("h2",{children:"Text Utils Summery Here"}),Object(b.jsxs)("p",{children:[h.split(" ").length-1," word and ",h.length," cahracters"]})]})]})})};var u=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j,{})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),d()},2:function(e,t,n){e.exports={header:"Home_header__2pEsj",container:"Home_container__2SuKc",main:"Home_main__Wl-ut",btns:"Home_btns__1QC14",summery:"Home_summery__3pxtt",btn:"Home_btn__ul-D_"}}},[[12,1,2]]]);
//# sourceMappingURL=main.8d83114f.chunk.js.map