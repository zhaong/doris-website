"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[434986],{15680:(t,e,a)=>{a.d(e,{xA:()=>p,yg:()=>o});var r=a(296540);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var y=r.createContext({}),m=function(t){var e=r.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(y.Provider,{value:e},t.children)},d="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,y=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=m(a),f=n,o=d["".concat(y,".").concat(f)]||d[f]||N[f]||l;return a?r.createElement(o,g(g({ref:e},p),{},{components:a})):r.createElement(o,g({ref:e},p))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,g=new Array(l);g[0]=f;var i={};for(var y in e)hasOwnProperty.call(e,y)&&(i[y]=e[y]);i.originalType=t,i[d]="string"==typeof t?t:n,g[1]=i;for(var m=2;m<l;m++)g[m]=a[m];return r.createElement.apply(null,g)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},120191:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(58168),n=(a(296540),a(15680));const l={title:"files",language:"zh-CN"},g=void 0,i={unversionedId:"admin-manual/system-tables/information_schema/files",id:"version-3.0/admin-manual/system-tables/information_schema/files",title:"files",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/system-tables/information_schema/files.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/files",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/files",draft:!1,tags:[],version:"3.0",frontMatter:{title:"files",language:"zh-CN"},sidebar:"docs",previous:{title:"events",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/events"},next:{title:"global_variables",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/global_variables"}},y={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],p={toc:m},d="wrapper";function N(t){let{components:e,...a}=t;return(0,n.yg)(d,(0,r.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.yg)("p",null,"\u6b64\u8868\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL \u884c\u4e3a\u3002\u6c38\u8fdc\u4e3a\u7a7a\u3002"),(0,n.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,n.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"FILE_ID"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"FILE_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"FILE_TYPE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(256)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLESPACE_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(256)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLE_CATALOG"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(16)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLE_SCHEMA"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLE_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"LOGFILE_GROUP_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(256)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"LOGFILE_GROUP_NUMBER"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ENGINE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"FULLTEXT_KEYS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DELETED_ROWS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"UPDATE_COUNT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"FREE_EXTENTS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TOTAL_EXTENTS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"EXTENT_SIZE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"INITIAL_SIZE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"MAXIMUM_SIZE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"AUTOEXTEND_SIZE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CREATION_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"LAST_UPDATE_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"LAST_ACCESS_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"RECOVER_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TRANSACTION_COUNTER"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"VERSION"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ROW_FORMAT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(256)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"TABLE_ROWS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"AVG_ROW_LENGTH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DATA_LENGTH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"MAX_DATA_LENGTH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"INDEX_LENGTH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DATA_FREE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CREATE_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"UPDATE_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CHECK_TIME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CHECKSUM"),(0,n.yg)("td",{parentName:"tr",align:"left"},"text"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"STATUS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(256)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"EXTRA"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(256)"),(0,n.yg)("td",{parentName:"tr",align:"left"})))))}N.isMDXComponent=!0}}]);