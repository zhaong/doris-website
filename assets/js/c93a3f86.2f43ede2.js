"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[783178],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),y=r,u=c["".concat(o,".").concat(y)]||c[y]||d[y]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},448383:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"SHOW-LOAD",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-LOAD",id:"sql-manual/sql-statements/Show-Statements/SHOW-LOAD",title:"SHOW-LOAD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-LOAD.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-LOAD",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-LOAD",language:"en"},sidebar:"docs",previous:{title:"SHOW-TABLETS",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-TABLETS"},next:{title:"SHOW-TABLES",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-TABLES"}},o={},p=[{value:"SHOW-LOAD",id:"show-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-load"},"SHOW-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display the execution of the specified import task"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD\n[FROM db_name]\n[\n   WHERE\n   [LABEL [ = "your_label" | LIKE "label_matcher"]]\n   [STATE = ["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]]\n]\n[ORDER BY...]\n[LIMIT limit][OFFSET offset];\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If db_name is not specified, the current default db is used")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If LABEL LIKE is used, it will match import tasks whose label contains label_matcher")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If LABEL = is used, it will match the specified label exactly")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If STATE is specified, matches the LOAD state")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You can use ORDER BY to sort on any combination of columns")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If LIMIT is specified, limit matching records are displayed. Otherwise show all")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If OFFSET is specified, the query results are displayed starting at offset offset. By default the offset is 0.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If you are using broker/mini load, the connections in the URL column can be viewed using the following command:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW LOAD WARNINGS ON 'url'\n")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show all import tasks for default db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW LOAD;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Display the import tasks of the specified db, the label contains the string "2014_01_02", and display the oldest 10'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Display the import tasks of the specified db, specify the label as "load_example_db_20140102" and sort by LoadStartTime in descending order'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Display the import task of the specified db, specify the label as "load_example_db_20140102", the state as "loading", and sort by LoadStartTime in descending order'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display the import tasks of the specified db and sort them in descending order by LoadStartTime, and display 10 query results starting from offset 5"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Small batch import is a command to check the import status"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"curl --location-trusted -u {user}:{passwd} http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);