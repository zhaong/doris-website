"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[371288],{15680:(t,e,a)=>{a.d(e,{xA:()=>p,yg:()=>d});var n=a(296540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),g=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=g(t.components);return n.createElement(m.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=g(a),y=r,d=s["".concat(m,".").concat(y)]||s[y]||u[y]||l;return a?n.createElement(d,i(i({ref:e},p),{},{components:a})):n.createElement(d,i({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},733776:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const l={title:"partition_statistics",language:"en"},i=void 0,o={unversionedId:"admin-manual/system-tables/internal_schema/partition_statistics",id:"version-3.0/admin-manual/system-tables/internal_schema/partition_statistics",title:"partition_statistics",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/system-tables/internal_schema/partition_statistics.md",sourceDirName:"admin-manual/system-tables/internal_schema",slug:"/admin-manual/system-tables/internal_schema/partition_statistics",permalink:"/docs/3.0/admin-manual/system-tables/internal_schema/partition_statistics",draft:!1,tags:[],version:"3.0",frontMatter:{title:"partition_statistics",language:"en"},sidebar:"docs",previous:{title:"column_statistics",permalink:"/docs/3.0/admin-manual/system-tables/internal_schema/column_statistics"},next:{title:"Audit Log Plugin",permalink:"/docs/3.0/admin-manual/audit-plugin"}},m={},g=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}],p={toc:g},s="wrapper";function u(t){let{components:e,...a}=t;return(0,r.yg)(s,(0,n.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Partition statistics"),(0,r.yg)("h2",{id:"database"},"Database"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"__internal_schema")),(0,r.yg)("h2",{id:"table-information"},"Table Information"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_id"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the Catalog")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"db_id"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the Database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tbl_id"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the Table")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"idx_id"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the Index")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"part_name"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the Partition")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"part_id"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the Partition")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"col_id"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the column, currently storing column names")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"count"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of rows")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ndv"),(0,r.yg)("td",{parentName:"tr",align:null},"hll"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of distinct values")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"null_count"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of NULLs")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(65533)"),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(65533)"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_size_in_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Data size in bytes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"update_time"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"Last update time of current statistics")))))}u.isMDXComponent=!0}}]);