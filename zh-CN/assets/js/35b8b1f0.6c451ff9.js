"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[357332],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>h});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,h=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},781884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const o={title:"Apache Doris 2.0.8 just released",description:"Thanks to our community users and developers, about 65 improvements and bug fixes have been made in Doris 2.0.8 version.",date:"2024-04-09",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.8.png"},i=void 0,l={permalink:"/zh-CN/blog/release-note-2.0.8",source:"@site/blog/release-note-2.0.8.md",title:"Apache Doris 2.0.8 just released",description:"Thanks to our community users and developers, about 65 improvements and bug fixes have been made in Doris 2.0.8 version.",date:"2024-04-09T00:00:00.000Z",formattedDate:"2024\u5e744\u67089\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 2.0.8 just released",description:"Thanks to our community users and developers, about 65 improvements and bug fixes have been made in Doris 2.0.8 version.",date:"2024-04-09",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.8.png"},prevItem:{title:"Apache Doris 2.1.2 just released",permalink:"/zh-CN/blog/release-note-2.1.2"},nextItem:{title:"Auto-increment columns in databases: a simple magic that makes a big difference",permalink:"/zh-CN/blog/auto-increment-columns-in-databases"}},s={authorsImageUrls:[void 0]},p=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Credits",id:"credits",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Thanks to our community users and developers, about 65 improvements and bug fixes have been made in Doris 2.0.8 version."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Quick Download")," : ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GitHub")," : ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")))),(0,r.yg)("h2",{id:"behavior-changes"},"Behavior changes"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ADMIN SHOW")," statement can not be executed with high version of MySQL 8.x jdbc driver. So rename these statement, remove the ",(0,r.yg)("inlineCode",{parentName:"p"},"ADMIN")," keywords. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/29492"},"https://github.com/apache/doris/pull/29492"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN SHOW CONFIG -> SHOW CONFIG\nADMIN SHOW REPLICA -> SHOW REPLICA\nADMIN DIAGNOSE TABLET -> SHOW TABLET DIAGNOSIS\nADMIN SHOW TABLET -> SHOW TABLET\n")),(0,r.yg)("h2",{id:"new-features"},"New features"),(0,r.yg)("p",null,"N/A"),(0,r.yg)("h2",{id:"improvement"},"Improvement"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Make Inverted Index work with TopN opt in Nereids")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Limit the max string length to 1024 while collecting column stats to control BE memory usage")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JDBC Catalog close when JDBC client is not empty")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Accept all Iceberg database and do not check the name format of database")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Refresh external table's rowcount async to avoid cache miss and unstable query plan")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Simplify the isSplitable method of hive external table to avoid too many hadoop metrics"))),(0,r.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.7...2.0.8"},"GitHub")," ."),(0,r.yg)("h2",{id:"credits"},"Credits"),(0,r.yg)("p",null,"Thanks all who contribute to this release:"),(0,r.yg)("p",null,"924060929,  AcKing-Sam, amorynan, AshinGau, BePPPower, BiteTheDDDDt, ByteYue, cambyzju,  dongsilun, eldenmoon, feiniaofeiafei, gnehil, Jibing-Li, liaoxin01, luwei16,  morningman, morrySnow, mrhhsg, Mryange, nextdreamblue, platoneko,  starocean999, SWJTU-ZhangLei, wuwenchi, xiaokang, xinyiZzz, Yukang-Lian,  Yulei-Yang, zclllyybb, zddr, zhangstar333, zhiqiang-hhhh, ziyanTOP, zy-kkk,  zzzxl1993"))}c.isMDXComponent=!0}}]);