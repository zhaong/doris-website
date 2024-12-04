"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[812616],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},495859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"LAST_DAY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/last-day",id:"version-2.1/sql-manual/sql-functions/date-time-functions/last-day",title:"LAST_DAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/date-time-functions/last-day.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/last-day",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/last-day",draft:!1,tags:[],version:"2.1",frontMatter:{title:"LAST_DAY",language:"zh-CN"},sidebar:"docs",previous:{title:"FROM_DAYS",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/from-days"},next:{title:"TO_MONDAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/to-monday"}},s={},c=[{value:"last_day",id:"last_day",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"last_day"},"last_day"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATE last_day(DATETIME date)")),(0,a.yg)("p",null,"\u8fd4\u56de\u8f93\u5165\u65e5\u671f\u4e2d\u6708\u4efd\u7684\u6700\u540e\u4e00\u5929\uff1b\u6240\u4ee5\u8fd4\u56de\u7684\u65e5\u671f\u4e2d\uff0c\u5e74\u548c\u6708\u4e0d\u53d8\uff0c\u65e5\u53ef\u80fd\u662f\u5982\u4e0b\u60c5\u51b5\uff1a\n'28'(\u975e\u95f0\u5e74\u7684\u4e8c\u6708\u4efd),\n'29'(\u95f0\u5e74\u7684\u4e8c\u6708\u4efd),\n'30'(\u56db\u6708\uff0c\u516d\u6708\uff0c\u4e5d\u6708\uff0c\u5341\u4e00\u6708),\n'31'(\u4e00\u6708\uff0c\u4e09\u6708\uff0c\u4e94\u6708\uff0c\u4e03\u6708\uff0c\u516b\u6708\uff0c\u5341\u6708\uff0c\u5341\u4e8c\u6708)"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql > select last_day('2000-02-03');\n+-------------------+\n| last_day('2000-02-03 00:00:00') |\n+-------------------+\n| 2000-02-29        |\n+-------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"LAST_DAY,DAYS\n")))}p.isMDXComponent=!0}}]);