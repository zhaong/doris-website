"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[249244],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>h});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(l.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),c=n,h=m["".concat(l,".").concat(c)]||m[c]||g[c]||i;return t?r.createElement(h,o(o({ref:a},u),{},{components:t})):r.createElement(h,o({ref:a},u))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},330100:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(58168),n=(t(296540),t(15680));const i={title:"Apache Doris version 2.0.15 has been released",summary:"Thanks to our community users and developers, about 157 improvements and bug fixes have been made in Doris 2.0.15 version",description:"Thanks to our community users and developers, about 157 improvements and bug fixes have been made in Doris 2.0.15 version",date:"2024-09-30",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.15.jpg"},o=void 0,p={permalink:"/zh-CN/blog/release-note-2.0.15",source:"@site/blog/release-note-2.0.15.md",title:"Apache Doris version 2.0.15 has been released",description:"Thanks to our community users and developers, about 157 improvements and bug fixes have been made in Doris 2.0.15 version",date:"2024-09-30T00:00:00.000Z",formattedDate:"2024\u5e749\u670830\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris version 2.0.15 has been released",summary:"Thanks to our community users and developers, about 157 improvements and bug fixes have been made in Doris 2.0.15 version",description:"Thanks to our community users and developers, about 157 improvements and bug fixes have been made in Doris 2.0.15 version",date:"2024-09-30",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.15.jpg"},prevItem:{title:"Apache Doris 3.0.2 just released",permalink:"/zh-CN/blog/release-note-3.0.2"},nextItem:{title:"Apache Doris Flink Connector 24.0.0  just released!",permalink:"/zh-CN/blog/release-flink-doris-connector-24.0.0"}},l={authorsImageUrls:[void 0]},s=[{value:"1 Behavior Change",id:"1-behavior-change",level:2},{value:"2 New Features",id:"2-new-features",level:2},{value:"3 Improvement and Optimizations",id:"3-improvement-and-optimizations",level:2},{value:"Stability",id:"stability",level:3},{value:"Performance",id:"performance",level:3},{value:"Optimizer and Statistics",id:"optimizer-and-statistics",level:3},{value:"Multi Catalog and Others",id:"multi-catalog-and-others",level:3}],u={toc:s},m="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Thanks to our community users and developers, about 157 improvements and bug fixes have been made in Doris 2.0.15 version"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Quick Download: ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download"},"https://doris.apache.org/download"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"GitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases/tag/2.0.15"},"https://github.com/apache/doris/releases/tag/2.0.15")," "))),(0,n.yg)("h2",{id:"1-behavior-change"},"1 Behavior Change"),(0,n.yg)("p",null,"NA"),(0,n.yg)("h2",{id:"2-new-features"},"2 New Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Restore now supports deleting redundant tablets and partition options. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39028"},"#39028"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support JSON function ",(0,n.yg)("inlineCode",{parentName:"p"},"json_search"),".",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/40948"},"#40948")))),(0,n.yg)("h2",{id:"3-improvement-and-optimizations"},"3 Improvement and Optimizations"),(0,n.yg)("h3",{id:"stability"},"Stability"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add a FE configuration ",(0,n.yg)("inlineCode",{parentName:"p"},"abort_txn_after_lost_heartbeat_time_second")," for transaction abort time. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/28662"},"#28662"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Abort transactions after a BE loses heartbeat for over 1 minute instead of 5 seconds, to avoid overly sensitive transaction aborts. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/22781"},"#22781"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Delay scheduling EOF tasks of routine load to avoid an excessive number of small transactions. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39975"},"#39975"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Prefer querying from online disk services to be more robust. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39467"},"#39467"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Skip checking newly inserted rows in non-strict mode partial updates if the row's delete sign is marked. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/40322"},"#40322"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To prevent FE OOM, limit the number of tablets in backup tasks, with a default value of 300,000. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39987"},"#39987")))),(0,n.yg)("h3",{id:"performance"},"Performance"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Optimize slow column updates caused by concurrent column updates and compactions. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38487"},"#38487"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"When a NullLiteral exists in a filter condition, it can now be folded into False and further converted to an EmptySet to reduce unnecessary data scanning and computation. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38135"},"#38135"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Improve performance of ",(0,n.yg)("inlineCode",{parentName:"p"},"ORDER BY")," permutation. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38985"},"#38985"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Improve the performance of string processing in inverted indexes. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37395"},"#37395")))),(0,n.yg)("h3",{id:"optimizer-and-statistics"},"Optimizer and Statistics"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Added support for statements beginning with a semicolon. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39399"},"#39399"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Polish aggregate function signature matching. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39352"},"#39352"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Drop column statistics and trigger auto analysis after schema change. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39101"},"#39101"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support dropping cached stats using ",(0,n.yg)("inlineCode",{parentName:"p"},"DROP CACHED STATS table_name"),". ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39367"},"#39367")))),(0,n.yg)("h3",{id:"multi-catalog-and-others"},"Multi Catalog and Others"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Optimize JDBC Catalog refresh to reduce the frequency of client creation. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/40261"},"#40261"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix thread leaks in JDBC Catalog under certain conditions. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/39423"},"#39423"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"ARRAY MAP STRUCT types now support ",(0,n.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),". ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38304"},"#38304"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Retry delete jobs for failures that are not ",(0,n.yg)("inlineCode",{parentName:"p"},"DELETE_INVALID_XXX"),". ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37834"},"#37834")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Credits")),(0,n.yg)("p",null,"@924060929, @BePPPower, @BiteTheDDDDt, @CalvinKirs, @GoGoWen, @HappenLee, @Jibing-Li, @Johnnyssc, @LiBinfeng-01, @Mryange, @SWJTU-ZhangLei, @TangSiyang2001, @Toms1999, @Vallishp, @Yukang-Lian, @airborne12, @amorynan, @bobhan1, @cambyzju, @csun5285, @dataroaring, @eldenmoon, @englefly, @feiniaofeiafei, @hello-stephen, @htyoung, @hubgeter, @justfortaste, @liaoxin01, @liugddx, @liutang123, @luwei16, @mongo360, @morrySnow, @qidaye, @smallx, @sollhui, @starocean999, @w41ter, @xiaokang, @xzj7019, @yujun777, @zclllyybb, @zddr, @zhangstar333, @zhannngchen, @zy-kkk, @zzzxl1993"))}g.isMDXComponent=!0}}]);