(this["webpackJsonprandom-character"]=this["webpackJsonprandom-character"]||[]).push([[0],{59:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c,r=n(3),a=n.n(r),s=n(50),i=n.n(s),j=(n(59),n(51)),o=n(36),l=n(8),u=function(e){var t=e.attribute;return Object(l.jsx)("span",{children:t.name})},b=function(e){var t=e.characterRace,n=e.characterClass;return Object(l.jsxs)("p",{children:["You should build a ",Object(l.jsx)(u,{attribute:t})," ",Object(l.jsx)(u,{attribute:n}),"!"]})},d=function(e){var t=function(e){return e[Math.floor(Math.random()*e.length)]},n=e.srdData,c=n.classes,a=n.races,s=Object(r.useState)(t(c)),i=Object(o.a)(s,2),j=i[0],u=i[1],d=Object(r.useState)(t(a)),h=Object(o.a)(d,2),O=h[0],x=h[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{class:"flex-center",children:Object(l.jsx)(b,{characterRace:O,characterClass:j})}),Object(l.jsx)("div",{class:"flex-center",children:Object(l.jsx)("button",{onClick:function(){return u(t(c)),void x(t(a))},children:"I'm not feeling this one"})})]})},h=n(20),O=function(){var e=Object(h.gql)(c||(c=Object(j.a)(["\n    {\n      races {\n        name\n      }\n      classes {\n        name\n      }\n    }\n  "]))),t=Object(h.useQuery)(e).data;return t?Object(l.jsx)(d,{srdData:t}):Object(l.jsx)("p",{children:" Crunchatizing "})},x=(n(67),function(){return Object(l.jsx)("div",{className:"main",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsx)(O,{})})})}),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},p=Object(h.createHttpLink)({uri:"https://www.dnd5eapi.co/graphql"}),m=new h.ApolloClient({link:p,cache:new h.InMemoryCache});i.a.render(Object(l.jsx)(h.ApolloProvider,{client:m,children:Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})})}),document.getElementById("root")),f()}},[[68,1,2]]]);
//# sourceMappingURL=main.2eeed772.chunk.js.map