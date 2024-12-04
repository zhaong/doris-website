"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[212806],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,g=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},394699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(58168),n=(r(296540),r(15680));const i={title:"Apache Doris version 2.0.14 has been released",summary:"Thanks to our community users and developers, about 110 improvements and bug fixes have been made in Doris 2.0.14 version",description:"Thanks to our community users and developers, about 110 improvements and bug fixes have been made in Doris 2.0.14 version",date:"2024-08-07",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.14.jpg"},o=void 0,s={permalink:"/blog/release-note-2.0.14",source:"@site/blog/release-note-2.0.14.md",title:"Apache Doris version 2.0.14 has been released",description:"Thanks to our community users and developers, about 110 improvements and bug fixes have been made in Doris 2.0.14 version",date:"2024-08-07T00:00:00.000Z",formattedDate:"August 7, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris version 2.0.14 has been released",summary:"Thanks to our community users and developers, about 110 improvements and bug fixes have been made in Doris 2.0.14 version",description:"Thanks to our community users and developers, about 110 improvements and bug fixes have been made in Doris 2.0.14 version",date:"2024-08-07",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.14.jpg"},prevItem:{title:"Automatic and flexible data sharding: Auto Partition in Apache Doris",permalink:"/blog/auto-partition-in-apache-doris"},nextItem:{title:"Migrate data lakehouse from BigQuery to Apache Doris, saving $4,500 per month",permalink:"/blog/migrate-lakehouse-from-bigquery-to-doris"}},l={authorsImageUrls:[void 0]},p=[{value:"1 New features",id:"1-new-features",level:2},{value:"2 Improvements",id:"2-improvements",level:2},{value:"Credits",id:"credits",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Thanks to our community users and developers, about 110 improvements and bug fixes have been made in Doris 2.0.14 version"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Quick Download")),(0,n.yg)("h2",{id:"1-new-features"},"1 New features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Adds a REST interface to retrieve the most recent query profile: ",(0,n.yg)("inlineCode",{parentName:"li"},"curl http://user:password@127.0.0.1:8030/api/profile/text")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/38268"},"#38268"))),(0,n.yg)("h2",{id:"2-improvements"},"2 Improvements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Optimizes the primary key point query performance for MOW tables with sequence columns ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38287"},"#38287"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Enhances the performance of inverted index queries with many conditions  ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35346"},"#35346"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Automatically enables the   ",(0,n.yg)("inlineCode",{parentName:"p"},"support_phrase")," option when creating a tokenized inverted index to accelerate  ",(0,n.yg)("inlineCode",{parentName:"p"},"match_phrase")," phrase queries ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37949"},"#37949"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Supports simplified SQL hints, for example: ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT /*+ query_timeout(3000) */ * FROM t;")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37720"},"#37720"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Automatically retries reading from object storage when encountering a   ",(0,n.yg)("inlineCode",{parentName:"p"},"429")," error to improve stability ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35396"},"#35396"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"LEFT SEMI / ANTI JOIN terminates subsequent matching execution upon matching a qualifying data row to enhance performance. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34703"},"#34703"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Prevents coredump when returning illegal data to MySQL results. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/28069"},"#28069"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Unifies the output of type names in lowercase to maintain compatibility with MySQL and be more friendly to BI tools. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38521"},"#38521")))),(0,n.yg)("p",null,"You can access the full list through the GitHub ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.13...2.0.14"},"link")," , with the key features and improvements highlighted below."),(0,n.yg)("h2",{id:"credits"},"Credits"),(0,n.yg)("p",null,"Thanks all who contribute to this release:"),(0,n.yg)("p",null,"@ByteYue, @CalvinKirs, @GoGoWen, @HappenLee, @Jibing-Li, @Lchangliang, @LiBinfeng-01, @Mryange, @XieJiann, @Yukang-Lian, @Yulei-Yang, @airborne12, @amorynan, @biohazard4321, @cambyzju, @csun5285, @eldenmoon, @englefly, @freemandealer, @hello-stephen, @hubgeter, @kaijchen, @liaoxin01, @luwei16, @morningman, @morrySnow, @mymeiyi, @qidaye, @sollhui, @starocean999, @w41ter, @wuwenchi, @xiaokang, @xy720, @yujun777, @zclllyybb, @zddr, @zhangstar333, @zhiqiang-hhhh, @zy-kkk, @zzzxl1993"))}c.isMDXComponent=!0}}]);