"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[942546],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>N});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=t.createContext({}),o=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},s=function(e){var a=o(e.components);return t.createElement(m.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=o(n),u=r,N=g["".concat(m,".").concat(u)]||g[u]||y[u]||l;return n?t.createElement(N,p(p({ref:a},s),{},{components:n})):t.createElement(N,p({ref:a},s))}));function N(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[g]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},802497:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=n(58168),r=(n(296540),n(15680));const l={title:"\u6570\u636e\u5907\u4efd\u6062\u590d",language:"zh-CN"},p=void 0,i={unversionedId:"admin-manual/data-admin/restore",id:"admin-manual/data-admin/restore",title:"\u6570\u636e\u5907\u4efd\u6062\u590d",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/data-admin/restore.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/restore",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/restore",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u5907\u4efd\u6062\u590d",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5907\u4efd",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/backup"},next:{title:"\u6982\u8ff0",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/ccr/overview"}},m={},o=[{value:"\u7b80\u8981\u539f\u7406\u8bf4\u660e",id:"\u7b80\u8981\u539f\u7406\u8bf4\u660e",level:2},{value:"\u5f00\u59cb\u6062\u590d",id:"\u5f00\u59cb\u6062\u590d",level:2},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2},{value:"\u5e38\u89c1\u9519\u8bef",id:"\u5e38\u89c1\u9519\u8bef",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],s={toc:o},g="wrapper";function y(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris \u652f\u6301\u5c06\u5f53\u524d\u6570\u636e\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u901a\u8fc7 broker \u5907\u4efd\u5230\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u3002\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7 \u6062\u590d \u547d\u4ee4\uff0c\u4ece\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u5c06\u6570\u636e\u6062\u590d\u5230\u4efb\u610f Doris \u96c6\u7fa4\u3002\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0cDoris \u53ef\u4ee5\u652f\u6301\u5c06\u6570\u636e\u5b9a\u671f\u7684\u8fdb\u884c\u5feb\u7167\u5907\u4efd\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0c\u5728\u4e0d\u540c\u96c6\u7fa4\u95f4\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u3002"),(0,r.yg)("p",null,"\u8be5\u529f\u80fd\u9700\u8981 Doris \u7248\u672c 0.8.2+"),(0,r.yg)("p",null,"\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u9700\u8981\u90e8\u7f72\u5bf9\u5e94\u8fdc\u7aef\u5b58\u50a8\u7684 broker\u3002\u5982 BOS\u3001HDFS \u7b49\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW BROKER;")," \u67e5\u770b\u5f53\u524d\u90e8\u7f72\u7684 broker\u3002"),(0,r.yg)("h2",{id:"\u7b80\u8981\u539f\u7406\u8bf4\u660e"},"\u7b80\u8981\u539f\u7406\u8bf4\u660e"),(0,r.yg)("p",null,"\u6062\u590d\u64cd\u4f5c\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5907\u4efd\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a\u5907\u4efd\u7684\u5185\u5bb9\u6062\u590d\u5230\u672c\u5730\u96c6\u7fa4\u4e2d\u3002\u5f53\u7528\u6237\u63d0\u4ea4 Restore \u8bf7\u6c42\u540e\uff0c\u7cfb\u7edf\u5185\u90e8\u4f1a\u505a\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u672c\u5730\u521b\u5efa\u5bf9\u5e94\u7684\u5143\u6570\u636e"),(0,r.yg)("p",{parentName:"li"},"\u8fd9\u4e00\u6b65\u9996\u5148\u4f1a\u5728\u672c\u5730\u96c6\u7fa4\u4e2d\uff0c\u521b\u5efa\u6062\u590d\u5bf9\u5e94\u7684\u8868\u5206\u533a\u7b49\u7ed3\u6784\u3002\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u8be5\u8868\u53ef\u89c1\uff0c\u4f46\u662f\u4e0d\u53ef\u8bbf\u95ee\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u672c\u5730 snapshot"),(0,r.yg)("p",{parentName:"li"},"\u8fd9\u4e00\u6b65\u662f\u5c06\u4e0a\u4e00\u6b65\u521b\u5efa\u7684\u8868\u505a\u4e00\u4e2a\u5feb\u7167\u3002\u8fd9\u5176\u5b9e\u662f\u4e00\u4e2a\u7a7a\u5feb\u7167\uff08\u56e0\u4e3a\u521a\u521b\u5efa\u7684\u8868\u662f\u6ca1\u6709\u6570\u636e\u7684\uff09\uff0c\u5176\u76ee\u7684\u4e3b\u8981\u662f\u5728 Backend \u4e0a\u4ea7\u751f\u5bf9\u5e94\u7684\u5feb\u7167\u76ee\u5f55\uff0c\u7528\u4e8e\u4e4b\u540e\u63a5\u6536\u4ece\u8fdc\u7aef\u4ed3\u5e93\u4e0b\u8f7d\u7684\u5feb\u7167\u6587\u4ef6\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0b\u8f7d\u5feb\u7167"),(0,r.yg)("p",{parentName:"li"},"\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u7684\u5feb\u7167\u6587\u4ef6\uff0c\u4f1a\u88ab\u4e0b\u8f7d\u5230\u5bf9\u5e94\u7684\u4e0a\u4e00\u6b65\u751f\u6210\u7684\u5feb\u7167\u76ee\u5f55\u4e2d\u3002\u8fd9\u4e00\u6b65\u7531\u5404\u4e2a Backend \u5e76\u53d1\u5b8c\u6210\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u751f\u6548\u5feb\u7167"),(0,r.yg)("p",{parentName:"li"},"\u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u8981\u5c06\u5404\u4e2a\u5feb\u7167\u6620\u5c04\u4e3a\u5f53\u524d\u672c\u5730\u8868\u7684\u5143\u6570\u636e\u3002\u7136\u540e\u91cd\u65b0\u52a0\u8f7d\u8fd9\u4e9b\u5feb\u7167\uff0c\u4f7f\u4e4b\u751f\u6548\uff0c\u5b8c\u6210\u6700\u7ec8\u7684\u6062\u590d\u4f5c\u4e1a\u3002"))),(0,r.yg)("h2",{id:"\u5f00\u59cb\u6062\u590d"},"\u5f00\u59cb\u6062\u590d"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'\u4ece example_repo \u4e2d\u6062\u590d\u5907\u4efd snapshot_1 \u4e2d\u7684\u8868 backup_tbl \u5230\u6570\u636e\u5e93 example_db1\uff0c\u65f6\u95f4\u7248\u672c\u4e3a "2018-05-04-16-45-08"\u3002\u6062\u590d\u4e3a 1 \u4e2a\u526f\u672c\uff1a'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_1`\nFROM `example_repo`\nON ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-52-29",\n    "replication_num" = "1"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'\u4ece example_repo \u4e2d\u6062\u590d\u5907\u4efd snapshot_2 \u4e2d\u7684\u8868 backup_tbl \u7684\u5206\u533a p1,p2\uff0c\u4ee5\u53ca\u8868 backup_tbl2 \u5230\u6570\u636e\u5e93 example_db1\uff0c\u5e76\u91cd\u547d\u540d\u4e3a new_tbl\uff0c\u65f6\u95f4\u7248\u672c\u4e3a "2018-05-04-17-11-01"\u3002\u9ed8\u8ba4\u6062\u590d\u4e3a 3 \u4e2a\u526f\u672c\uff1a'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_2`\nFROM `example_repo`\nON\n(\n    `backup_tbl` PARTITION (`p1`, `p2`),\n    `backup_tbl2` AS `new_tbl`\n)\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-55-43"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b restore \u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW RESTORE\\G;\n*************************** 1. row ***************************\n               JobId: 17891851\n               Label: snapshot_label1\n           Timestamp: 2022-04-08-15-52-29\n              DbName: default_cluster:example_db1\n               State: FINISHED\n           AllowLoad: false\n      ReplicationNum: 3\n         RestoreObjs: {\n  "name": "snapshot_label1",\n  "database": "example_db",\n  "backup_time": 1649404349050,\n  "content": "ALL",\n  "olap_table_list": [\n    {\n      "name": "backup_tbl",\n      "partition_names": [\n        "p1",\n        "p2"\n      ]\n    }\n  ],\n  "view_list": [],\n  "odbc_table_list": [],\n  "odbc_resource_list": []\n}\n          CreateTime: 2022-04-08 15:59:01\n    MetaPreparedTime: 2022-04-08 15:59:02\nSnapshotFinishedTime: 2022-04-08 15:59:05\nDownloadFinishedTime: 2022-04-08 15:59:12\n        FinishedTime: 2022-04-08 15:59:18\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              Status: [OK]\n             Timeout: 86400\n1 row in set (0.01 sec)\n')))),(0,r.yg)("p",null,"RESTORE \u7684\u66f4\u591a\u7528\u6cd5\u53ef\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE"},"\u8fd9\u91cc"),"\u3002"),(0,r.yg)("h2",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,r.yg)("p",null,"\u548c\u5907\u4efd\u6062\u590d\u529f\u80fd\u76f8\u5173\u7684\u547d\u4ee4\u5982\u4e0b\u3002\u4ee5\u4e0b\u547d\u4ee4\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7 mysql-client \u8fde\u63a5 Doris \u540e\uff0c\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"help cmd;")," \u7684\u65b9\u5f0f\u67e5\u770b\u8be6\u7ec6\u5e2e\u52a9\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. CREATE REPOSITORY")),(0,r.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u8fdc\u7aef\u4ed3\u5e93\u8def\u5f84\uff0c\u7528\u4e8e\u5907\u4efd\u6216\u6062\u590d\u3002\u8be5\u547d\u4ee4\u9700\u8981\u501f\u52a9 Broker \u8fdb\u7a0b\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\uff0c\u4e0d\u540c\u7684 Broker \u9700\u8981\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"../../data-operate/import/broker-load-manual"},"Broker \u6587\u6863"),"\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 S3 \u534f\u8bae\u5907\u4efd\u5230\u652f\u6301 AWS S3 \u534f\u8bae\u7684\u8fdc\u7a0b\u5b58\u50a8\u4e0a\u53bb\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5907\u4efd\u5230 HDFS\uff0c\u5177\u4f53\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"},"\u521b\u5efa\u8fdc\u7a0b\u4ed3\u5e93\u6587\u6863")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. RESTORE")),(0,r.yg)("p",null,"\u6267\u884c\u4e00\u6b21\u6062\u590d\u64cd\u4f5c\u3002"),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"SHOW RESTORE")),(0,r.yg)("p",null,"\u67e5\u770b\u6700\u8fd1\u4e00\u6b21 restore \u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff0c\u5305\u62ec\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JobId\uff1a\u672c\u6b21\u6062\u590d\u4f5c\u4e1a\u7684 id\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Label\uff1a\u7528\u6237\u6307\u5b9a\u7684\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u540d\u79f0\uff08Label\uff09\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Timestamp\uff1a\u7528\u6237\u6307\u5b9a\u7684\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u65f6\u95f4\u6233\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"DbName\uff1a\u6062\u590d\u4f5c\u4e1a\u5bf9\u5e94\u7684 Database\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"State\uff1a\u6062\u590d\u4f5c\u4e1a\u5f53\u524d\u6240\u5728\u9636\u6bb5\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"PENDING\uff1a\u4f5c\u4e1a\u521d\u59cb\u72b6\u6001\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"SNAPSHOTING\uff1a\u6b63\u5728\u8fdb\u884c\u672c\u5730\u65b0\u5efa\u8868\u7684\u5feb\u7167\u64cd\u4f5c\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"DOWNLOAD\uff1a\u6b63\u5728\u53d1\u9001\u4e0b\u8f7d\u5feb\u7167\u4efb\u52a1\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"DOWNLOADING\uff1a\u5feb\u7167\u6b63\u5728\u4e0b\u8f7d\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"COMMIT\uff1a\u51c6\u5907\u751f\u6548\u5df2\u4e0b\u8f7d\u7684\u5feb\u7167\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"COMMITTING\uff1a\u6b63\u5728\u751f\u6548\u5df2\u4e0b\u8f7d\u7684\u5feb\u7167\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FINISHED\uff1a\u6062\u590d\u5b8c\u6210\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"CANCELLED\uff1a\u6062\u590d\u5931\u8d25\u6216\u88ab\u53d6\u6d88\u3002")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"AllowLoad\uff1a\u6062\u590d\u671f\u95f4\u662f\u5426\u5141\u8bb8\u5bfc\u5165\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ReplicationNum\uff1a\u6062\u590d\u6307\u5b9a\u7684\u526f\u672c\u6570\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"RestoreObjs\uff1a\u672c\u6b21\u6062\u590d\u6d89\u53ca\u7684\u8868\u548c\u5206\u533a\u7684\u6e05\u5355\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"CreateTime\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MetaPreparedTime\uff1a\u672c\u5730\u5143\u6570\u636e\u751f\u6210\u5b8c\u6210\u65f6\u95f4\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"SnapshotFinishedTime\uff1a\u672c\u5730\u5feb\u7167\u5b8c\u6210\u65f6\u95f4\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"DownloadFinishedTime\uff1a\u8fdc\u7aef\u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\u65f6\u95f4\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FinishedTime\uff1a\u672c\u6b21\u4f5c\u4e1a\u5b8c\u6210\u65f6\u95f4\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"UnfinishedTasks\uff1a\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"SNAPSHOTTING"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"DOWNLOADING"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"COMMITTING")," \u7b49\u9636\u6bb5\uff0c\u4f1a\u6709\u591a\u4e2a\u5b50\u4efb\u52a1\u5728\u540c\u65f6\n\u8fdb\u884c\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u5f53\u524d\u9636\u6bb5\uff0c\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1\u7684 task id\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"TaskErrMsg\uff1a\u5982\u679c\u6709\u5b50\u4efb\u52a1\u6267\u884c\u51fa\u9519\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5bf9\u5e94\u5b50\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Status\uff1a\u7528\u4e8e\u8bb0\u5f55\u5728\u6574\u4e2a\u4f5c\u4e1a\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Timeout\uff1a\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. CANCEL RESTORE")),(0,r.yg)("p",null,"\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u6062\u590d\u4f5c\u4e1a\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5. DROP REPOSITORY")),(0,r.yg)("p",null,"\u5220\u9664\u5df2\u521b\u5efa\u7684\u8fdc\u7aef\u4ed3\u5e93\u3002\u5220\u9664\u4ed3\u5e93\uff0c\u4ec5\u4ec5\u662f\u5220\u9664\u8be5\u4ed3\u5e93\u5728 Doris \u4e2d\u7684\u6620\u5c04\uff0c\u4e0d\u4f1a\u5220\u9664\u5b9e\u9645\u7684\u4ed3\u5e93\u6570\u636e\u3002"),(0,r.yg)("h2",{id:"\u5e38\u89c1\u9519\u8bef"},"\u5e38\u89c1\u9519\u8bef"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"RESTORE \u62a5\u9519\uff1a","[20181: invalid md5 of downloaded file:/data/doris.HDD/snapshot/20220607095111.862.86400/19962/668322732/19962.hdr, expected: f05b63cca5533ea0466f62a9897289b5, get: d41d8cd98f00b204e9800998ecf8427e]"),(0,r.yg)("p",{parentName:"li"},"\u5907\u4efd\u548c\u6062\u590d\u7684\u8868\u7684\u526f\u672c\u6570\u4e0d\u4e00\u81f4\u5bfc\u81f4\u7684\uff0c\u6267\u884c\u6062\u590d\u547d\u4ee4\u65f6\u9700\u6307\u5b9a\u526f\u672c\u4e2a\u6570\uff0c\u5177\u4f53\u547d\u4ee4\u8bf7\u53c2\u9605",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE"},"RESTORE")," \u547d\u4ee4\u624b\u518c")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"RESTORE \u62a5\u9519\uff1a","[COMMON_ERROR, msg: Could not set meta version to 97 since it is lower than minimum required version 100]"),(0,r.yg)("p",{parentName:"li"},"\u5907\u4efd\u548c\u6062\u590d\u4e0d\u662f\u540c\u4e00\u4e2a\u7248\u672c\u5bfc\u81f4\u7684\uff0c\u4f7f\u7528\u6307\u5b9a\u7684 meta_version \u6765\u8bfb\u53d6\u4e4b\u524d\u5907\u4efd\u7684\u5143\u6570\u636e\u3002\u6ce8\u610f\uff0c\u8be5\u53c2\u6570\u4f5c\u4e3a\u4e34\u65f6\u65b9\u6848\uff0c\u4ec5\u7528\u4e8e\u6062\u590d\u8001\u7248\u672c Doris \u5907\u4efd\u7684\u6570\u636e\u3002\u6700\u65b0\u7248\u672c\u7684\u5907\u4efd\u6570\u636e\u4e2d\u5df2\u7ecf\u5305\u542b meta version\uff0c\u65e0\u9700\u518d\u6307\u5b9a\uff0c\u9488\u5bf9\u4e0a\u8ff0\u9519\u8bef\u5177\u4f53\u89e3\u51b3\u65b9\u6848\u6307\u5b9a meta_version = 100\uff0c\u5177\u4f53\u547d\u4ee4\u8bf7\u53c2\u9605",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE"},"RESTORE")," \u547d\u4ee4\u624b\u518c"))),(0,r.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,r.yg)("p",null,"\u5173\u4e8e RESTORE \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE"},"RESTORE")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP RESTORE")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}y.isMDXComponent=!0}}]);