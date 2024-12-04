"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[805220],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},866254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"Get DDL Statement Action",language:"en"},o=void 0,l={unversionedId:"admin-manual/fe/get-ddl-stmt-action",id:"version-2.0/admin-manual/fe/get-ddl-stmt-action",title:"Get DDL Statement Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/fe/get-ddl-stmt-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/get-ddl-stmt-action",permalink:"/docs/2.0/admin-manual/fe/get-ddl-stmt-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Get DDL Statement Action",language:"en"},sidebar:"docs",previous:{title:"Fe Version Info Action",permalink:"/docs/2.0/admin-manual/fe/fe-version-info-action"},next:{title:"Get Load Info Action",permalink:"/docs/2.0/admin-manual/fe/get-load-info-action"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"get-ddl-statement-action"},"Get DDL Statement Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/_get_ddl")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to get the table creation statement, partition creation statement and rollup statement of the specified table."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"db")),(0,a.yg)("p",{parentName:"li"},"  Specify database")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"table")),(0,a.yg)("p",{parentName:"li"},"  Specify table"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "create_partition": ["ALTER TABLE `tbl1` ADD PARTITION ..."],\n        "create_table": ["CREATE TABLE `tbl1` ...],\n        "create_rollup": ["ALTER TABLE `tbl1` ADD ROLLUP ..."]\n    },\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Get the DDL statement of the specified table"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET GET /api/_get_ddl?db=db1&table=tbl1\n\nResponse\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "create_partition": [],\n        "create_table": ["CREATE TABLE `tbl1` (\\n  `k1` int(11) NULL COMMENT \\"\\",\\n  `k2` int(11) NULL COMMENT \\"\\"\\n) ENGINE=OLAP\\nDUPLICATE KEY(`k1`, `k2`)\\nCOMMENT \\"OLAP\\"\\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\\nPROPERTIES (\\n\\"replication_num\\" = \\"1\\",\\n\\"version_info\\" = \\"1,0\\",\\n\\"in_memory\\" = \\"false\\",\\n\\"storage_format\\" = \\"DEFAULT\\"\\n);"],\n        "create_rollup": []\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);