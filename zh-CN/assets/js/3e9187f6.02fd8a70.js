"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[590438],{15680:(t,e,a)=>{a.d(e,{xA:()=>p,yg:()=>f});var r=a(296540);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),y=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=y(t.components);return r.createElement(m.Provider,{value:e},t.children)},d="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,p=g(t,["components","mdxType","originalType","parentName"]),d=y(a),N=n,f=d["".concat(m,".").concat(N)]||d[N]||o[N]||l;return a?r.createElement(f,i(i({ref:e},p),{},{components:a})):r.createElement(f,i({ref:e},p))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var g={};for(var m in e)hasOwnProperty.call(e,m)&&(g[m]=e[m]);g.originalType=t,g[d]="string"==typeof t?t:n,i[1]=g;for(var y=2;y<l;y++)i[y]=a[y];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},212216:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>g,toc:()=>y});var r=a(58168),n=(a(296540),a(15680));const l={title:"partitions",language:"zh-CN"},i=void 0,g={unversionedId:"admin-manual/system-tables/information_schema/partitions",id:"admin-manual/system-tables/information_schema/partitions",title:"partitions",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/information_schema/partitions.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/partitions",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/partitions",draft:!1,tags:[],version:"current",frontMatter:{title:"partitions",language:"zh-CN"},sidebar:"docs",previous:{title:"parameters",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/parameters"},next:{title:"processlist",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/processlist"}},m={},y=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],p={toc:y},d="wrapper";function o(t){let{components:e,...a}=t;return(0,n.yg)(d,(0,r.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.yg)("p",null,"\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868\u7684 Partition \u60c5\u51b5\u3002"),(0,n.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,n.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLE_CATALOG"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Catalog \u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLE_SCHEMA"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Database \u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLE_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Table \u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"PARTITION_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Partition \u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"SUBPARTITION_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u6c38\u8fdc\u4e3a\u7a7a")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"PARTITION_ORDINAL_POSITION"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Partition \u7684\u5e8f\u53f7")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"SUBPARTITION_ORDINAL_POSITION"),(0,n.yg)("td",{parentName:"tr",align:"left"},"int"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u6c38\u8fdc\u4e3a\u7a7a")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"PARTITION_METHOD"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(13)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Partition \u7684\u5206\u533a\u65b9\u6cd5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"SUBPARTITION_METHOD"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(13)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u6c38\u8fdc\u4e3a\u7a7a")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"PARTITION_EXPRESSION"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(2048)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Partition \u7684\u8868\u8fbe\u5f0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"SUBPARTITION_EXPRESSION"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(2048)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u6c38\u8fdc\u4e3a\u7a7a")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"PARTITION_DESCRIPTION"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Parititon \u7684\u63cf\u8ff0\u4fe1\u606f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLE_ROWS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"AVG_ROW_LENGTH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DATA_LENGTH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"MAX_DATA_LENGTH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"INDEX_LENGTH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DATA_FREE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CREATE_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"UPDATE_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"datetime"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CHECK_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"datetime"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CHECKSUM"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"PARTITION_COMMENT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"NODEGROUP"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(256)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLESPACE_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(268)"),(0,n.yg)("td",{parentName:"tr",align:"left"})))))}o.isMDXComponent=!0}}]);