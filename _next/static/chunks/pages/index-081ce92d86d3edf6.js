(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(86878)}])},83188:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(85893),o=n(27689),i=(n(67294),n(55614)),s=n(69647),a=function(e){var t=e.clientItems,n="";return(0,r.jsx)("div",{className:"carousel-wrapper",children:(0,r.jsx)(i.Z,{isRTL:!1,breakPoints:[{width:1,itemsToShow:1},{width:550,itemsToShow:2,itemsToScroll:2},{width:768,itemsToShow:3},{width:1200,itemsToShow:4}],children:t.map((function(e){return n=e.attributes.url,(0,r.jsx)(o.yP,{children:(0,r.jsx)(s.Z,{image:n,sx:{height:"100%",width:"100%"}})},e.id)}))})})}},94427:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(85893),o=n(67294),i=n(29630),s=n(79072),a=n(70918),c=n(30120),l=n(9144),d=n(27689),u=n(62097),h=n(41664),m=n.n(h),x=function(e){var t=e.project,n=t.attributes.image.data.attributes.url;(0,u.Z)();return(0,r.jsxs)(s.ZP,{container:!0,spacing:2,sx:{margin:"auto",padding:2,marginTop:2},children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(a.Z,{elevation:0,sx:{backgroundColor:"unset"},children:(0,r.jsx)(c.Z,{sx:{padding:2,margin:"auto",marginTop:1,backgroundColor:"unset"},children:(0,r.jsx)("img",{src:n,alt:t.attributes.title})})})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,r.jsx)(a.Z,{sx:{margin:"auto",padding:2,marginBottom:5,marginTop:2,backgroundColor:"unset"},elevation:0,children:(0,r.jsx)(l.Z,{children:(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(c.Z,{children:(0,r.jsx)("h2",{children:t.attributes.title})}),(0,r.jsx)(c.Z,{height:"150px",padding:1,children:(0,r.jsx)(i.Z,{variant:"body1",color:"text.secondary",children:t.attributes.description})}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(m(),{style:{textDecoration:"none"},href:"/project/".concat(t.attributes.slug),children:(0,r.jsx)(d.Sn,{variant:"outlined",children:"DETAILS"})})})]})})})})]})},g=n(28114),p=function(e){var t,n=(0,o.useState)(1),i=n[0],s=n[1],a=0,c=0,l=e.filter.pageSize,d=[],u=[];(void 0!=e.homeProjects?d=e.homeProjects:void 0!=e.portfolioProjects&&(d=e.portfolioProjects),d.length>0)&&(c=d.length,u=(t=l,d.reduce((function(e,n,r){return r%t?e[e.length-1].push(n):e.push([n]),e}),[]))[i-1]);return void 0!=u&&(a=Math.round(c/l)),(0,r.jsxs)(r.Fragment,{children:[void 0==u?(0,r.jsx)("h2",{children:"Loading projects ..."}):void 0!=u&&u.map((function(e){return(0,r.jsx)(x,{project:e},"project__".concat(e.attributes.slug))})),a>1?(0,r.jsx)(g.Z,{sx:{margin:"auto",marginBottom:"10px",width:"30%"},count:a,variant:"outlined",color:"primary",page:i,onChange:function(e,t){s(t)}}):null]})}},87607:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(85893),o=n(67294),i=n(49837),s=n(29630),a=n(9144),c=n(70918),l=n(30120),d=n(32793),u=n(1048),h=n(86010),m=n(94780),x=n(81719),g=n(78884),p=n(36622),j=n(1588),f=n(34867);function b(e){return(0,f.Z)("MuiIcon",e)}(0,j.Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const v=["baseClassName","className","color","component","fontSize"],Z=(0,x.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,p.Z)(n.color)}`],t[`fontSize${(0,p.Z)(n.fontSize)}`]]}})((({theme:e,ownerState:t})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:e.typography.pxToRem(20),medium:e.typography.pxToRem(24),large:e.typography.pxToRem(36)}[t.fontSize],color:{primary:(e.vars||e).palette.primary.main,secondary:(e.vars||e).palette.secondary.main,info:(e.vars||e).palette.info.main,success:(e.vars||e).palette.success.main,warning:(e.vars||e).palette.warning.main,action:(e.vars||e).palette.action.active,error:(e.vars||e).palette.error.main,disabled:(e.vars||e).palette.action.disabled,inherit:void 0}[t.color]}))),y=o.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiIcon"}),{baseClassName:o="material-icons",className:i,color:s="inherit",component:a="span",fontSize:c="medium"}=n,l=(0,u.Z)(n,v),x=(0,d.Z)({},n,{baseClassName:o,color:s,component:a,fontSize:c}),j=(e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,p.Z)(t)}`,`fontSize${(0,p.Z)(n)}`]};return(0,m.Z)(o,b,r)})(x);return(0,r.jsx)(Z,(0,d.Z)({as:a,className:(0,h.Z)(o,"notranslate",j.root,i),ownerState:x,"aria-hidden":!0,ref:t},l))}));y.muiName="Icon";var w=y,S=n(62097),P=function(e){(0,S.Z)();var t=e.service,n=e.bgcolor,o=e.color;return(0,r.jsx)(a.Z,{children:(0,r.jsxs)(i.Z,{sx:{padding:1,height:500,backgroundColor:"unset"},elevation:0,children:[(0,r.jsxs)(c.Z,{sx:{width:"80%",margin:"auto",marginBottom:1,textAlign:"center",height:150,backgroundColor:"unset"},elevation:0,children:[(0,r.jsx)("h2",{id:"h2service",children:t.attributes.title}),(0,r.jsx)(s.Z,{variant:"body2",color:"text.secondary",style:{float:"left",fontSize:18},children:t.attributes.description})]}),(0,r.jsx)(l.Z,{sx:{width:"15rem",height:"15rem",margin:"auto",backgroundColor:n,borderRadius:"50%",display:"flex"},children:(0,r.jsx)(l.Z,{sx:{border:3,borderColor:"unset",width:"14rem",height:"14rem",backgroundColor:n,color:o,borderRadius:"50%",margin:"auto",marginTop:"0.3rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(w,{sx:{fontSize:"150px !important"},children:t.attributes.icon})})})]})})},k=n(79072),T=function(e){var t=e.homeServices,n=e.bgColor,o=e.color;return(0,r.jsx)(r.Fragment,{children:void 0==t?(0,r.jsx)("h2",{children:"Loading"}):void 0!=t&&t.map((function(e){return(0,r.jsx)(k.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(P,{service:e,bgcolor:n,color:o},"service__".concat(e.attributes.slug))},"service__".concat(e.attributes.slug))}))})}},86878:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return I}});var r=n(41799),o=n(85893),i=n(9008),s=n.n(i),a=n(30120),c=n(87607),l=n(94427),d=n(79072),u=n(70918),h=n(9144);var m=(0,n(61354).Z)(),x=n(69647),g=n(27689),p=n(91435),j=n(34768),f=n(67294),b=n(62097),v=function(e){var t=(0,b.Z)();return(0,o.jsx)(g.Mt,{elevation:0,children:(0,o.jsxs)(d.ZP,{container:!0,spacing:2,marginBottom:5,children:[(0,o.jsx)(d.ZP,{item:!0,xs:12,md:6,lg:6,xl:6,children:(0,o.jsx)(u.Z,{sx:{margin:"auto",padding:5,marginBottom:5,marginTop:5,fontSize:20,color:t.palette.secondary.contrastText,backgroundColor:"unset"},elevation:0,children:(0,o.jsx)(h.Z,{children:(0,o.jsx)(m,{children:(0,o.jsx)(p.D,{rehypePlugins:[j.Z],children:e.content})})})})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,md:6,lg:6,xl:6,children:(0,o.jsx)(m,{sx:{display:"flex",alignItems:"flex-start",height:"100%"},children:(0,o.jsx)(u.Z,{sx:{margin:"auto",marginTop:0,color:"unset",backgroundColor:"unset"},elevation:0,children:(0,o.jsx)(x.Z,{component:"img",height:"300",width:"600",image:"/business-home_1920.png",alt:"bio"})})})})]})})},Z=n(44373),y=n(29630),w=n(79903),S=function(e){(0,b.Z)();return(0,o.jsx)(m,{sx:{display:"flex",justifyContent:"space-between",bgcolor:"unset",borderRadius:1},children:(0,o.jsx)(u.Z,{sx:{width:"50%",margin:"auto",marginTop:2,marginBottom:2,bgcolor:"unset"},elevation:0,children:(0,o.jsx)(h.Z,{children:(0,o.jsxs)(m,{children:[(0,o.jsx)("h1",{id:"h1submit",children:e.content.title}),(0,o.jsx)(y.Z,{variant:"body1",color:"text.secondary",align:"center",children:e.content.description}),(0,o.jsx)(m,{sx:{margin:"auto",width:"30%"},children:(0,o.jsx)(g.Sn,{variant:"outlined",startIcon:(0,o.jsx)(w.Z,{}),onClick:function(){return window.location.href="mailto:info@fititsolution.com"},children:e.content.action.title})})]})})})})},P=n(41664),k=n.n(P),T=n(11163),C=n(79548),_=n(83188),z=function(e){var t=(0,f.useContext)(C.OO).i18n.language,n=(0,T.useRouter)().pathname,i="https://www.loadstartech.com/",u=e.homePage.filter((function(e){return e.attributes.locale==t})),h=e.homeProjects.data.filter((function(e){return e.attributes.locale==t})),m=e.homeServices.data.filter((function(e){return e.attributes.locale==t})),x={locale:t,pageSize:2},p={homeProjects:h,meta:e.homeProjects.meta,filter:x},j=(0,b.Z)();return void 0!=u&&(p.filter.pageSize=u[0].attributes.pageSettings.caseNumber),(0,o.jsx)("div",{className:"App",children:void 0==u?(0,o.jsxs)("h1",{style:{margin:"70px"},children:["Loading Page ",n," please refresh the page "]}):void 0!=u&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s(),{children:u[0].attributes.seo&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("title",{children:u[0].attributes.seo.metaTitle}),(0,o.jsx)("meta",{name:"description",content:u[0].attributes.seo.metaDescription},"description"),(0,o.jsx)("meta",{name:"keywords",content:u[0].attributes.seo.keywords}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,o.jsx)("meta",{property:"og:url",content:i},"og:url"),(0,o.jsx)("meta",{property:"og:title",content:u[0].attributes.seo.metaTitle},"og:title"),(0,o.jsx)("meta",{property:"og:description",content:u[0].attributes.seo.metaDescription},"og:description"),(0,o.jsx)("meta",{property:"og:image",content:""},"og:image"),(0,o.jsx)("link",{rel:"canonical",href:i}),u[0].attributes.seo.preventIndexing&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"robots",content:"noindex"}),(0,o.jsx)("meta",{name:"googlebot",content:"noindex"})]})]})}),(0,o.jsx)(v,{content:u[0].attributes.blocks[0].body}),(0,o.jsx)(a.Z,{sx:{width:"100%",marginTop:0},children:(0,o.jsx)("h1",{className:"h1home",children:u[0].attributes.blocks[2].sectionHeader[1].title})}),(0,o.jsx)(d.ZP,{sx:{display:"flex",alignContent:"space-around"},container:!0,spacing:0,children:(0,o.jsx)(c.Z,{homeServices:m,bgColor:j.palette.primary.main,color:j.palette.fourthly.main})}),(0,o.jsx)(a.Z,{sx:{width:"100%",marginTop:0},children:(0,o.jsx)("h1",{className:"h1home",children:u[0].attributes.blocks[2].sectionHeader[2].title})}),(0,o.jsx)(_.W,{clientItems:u[0].attributes.blocks[3].files.data}),(0,o.jsx)(Z.Z,{sx:{borderBottomWidth:3}}),(0,o.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between",marginTop:2,bgcolor:"unset",borderRadius:1},children:[(0,o.jsx)(a.Z,{children:(0,o.jsx)("h1",{children:u[0].attributes.blocks[2].sectionHeader[0].title})}),(0,o.jsx)(k(),{style:{textDecoration:"none"},href:"/portfolio",children:(0,o.jsxs)(g.Sn,{variant:"outlined",children:["  ",u[0].attributes.blocks[2].action[0].title]})})]}),(0,o.jsx)(d.ZP,{container:!0,spacing:2,children:(0,o.jsx)(l.Z,(0,r.Z)({},p))}),(0,o.jsx)(Z.Z,{sx:{borderBottomWidth:3}}),(0,o.jsx)(S,{content:u[0].attributes.blocks[1]})]})})};var N=!0,I=function(e){var t=e.homePage,n=e.homeProjects,i={homePage:t,homeServices:e.homeServices,homeProjects:n};return(0,o.jsx)(z,(0,r.Z)({},i))}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[833,768,451,114,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);