(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6032:function(e,t,n){Promise.resolve().then(n.t.bind(n,4026,23)),Promise.resolve().then(n.bind(n,7899)),Promise.resolve().then(n.t.bind(n,7551,23)),Promise.resolve().then(n.bind(n,5277)),Promise.resolve().then(n.t.bind(n,414,23)),Promise.resolve().then(n.t.bind(n,2011,23)),Promise.resolve().then(n.t.bind(n,7908,23)),Promise.resolve().then(n.bind(n,1836))},5277:function(e,t,n){"use strict";n.r(t);var o=n(9268),i=n(4751);n(6006);let r=e=>{let{children:t}=e;return(0,o.jsx)(i.SessionProvider,{children:t})};t.default=r},1836:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var o=n(9268),i=n(4751),r=n(5846),l=n.n(r),s=n(6006),a=n(4770),c=n.n(a),u=n(7899);let d=()=>{let{toggle:e,mode:t}=(0,s.useContext)(u.ThemeContext);return(0,o.jsxs)("div",{className:c().container,onClick:e,children:[(0,o.jsx)("div",{className:c().icon,children:"\uD83C\uDF19"}),(0,o.jsx)("div",{className:c().icon,children:"\uD83D\uDD06"}),(0,o.jsx)("div",{className:c().ball,style:"light"===t?{left:"2px"}:{right:"2px"}})]})};var _=n(7108),h=n.n(_);let f=[{id:1,title:"Home",url:"/"},{id:2,title:"Portfolio",url:"/portfolio"},{id:3,title:"Blog",url:"/blog"},{id:4,title:"About",url:"/about"},{id:5,title:"Contact",url:"/contact"},{id:6,title:"Dashboard",url:"/dashboard"}],v=()=>{let e=(0,i.useSession)();return(0,o.jsxs)("div",{className:h().container,children:[(0,o.jsx)(l(),{href:"/",className:h().logo,children:"A Casa da Alquimia"}),(0,o.jsxs)("div",{className:h().links,children:[(0,o.jsx)(d,{}),f.map(e=>(0,o.jsx)(l(),{href:e.url,className:h().link,children:e.title},e.id)),"authenticated"===e.status&&(0,o.jsx)("button",{className:h().logout,onClick:i.signOut,children:"Logout"})]})]})};var m=v},7899:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeContext:function(){return r},ThemeProvider:function(){return l}});var o=n(9268),i=n(6006);let r=(0,i.createContext)(),l=e=>{let{children:t}=e,[n,l]=(0,i.useState)("dark"),s=()=>{l(e=>"dark"===e?"green":"dark")};return(0,o.jsx)(r.Provider,{value:{toggle:s,mode:n},children:(0,o.jsx)("div",{className:"theme ".concat(n),children:t})})}},4026:function(){},4770:function(e){e.exports={container:"darkModeToggle_container__vksLH",icon:"darkModeToggle_icon__aEY9H",ball:"darkModeToggle_ball__fygnp"}},7908:function(e){e.exports={container:"footer_container__3MeST",social:"footer_social__wfezv",icon:"footer_icon__QNMi8"}},7108:function(e){e.exports={container:"navbar_container__iE2vU",logo:"navbar_logo__M4SlJ",links:"navbar_links__FjYqR",logout:"navbar_logout__Qyi_R"}},7551:function(e){e.exports={style:{fontFamily:"'__Inter_a184c8', '__Inter_Fallback_a184c8'",fontStyle:"normal"},className:"__className_a184c8"}},5846:function(e,t,n){e.exports=n(414)}},function(e){e.O(0,[414,11,751,667,139,744],function(){return e(e.s=6032)}),_N_E=e.O()}]);