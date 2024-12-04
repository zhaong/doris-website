"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[746164],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),y=i,m=p["".concat(o,".").concat(y)]||p[y]||d[y]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},246364:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(58168),i=(a(296540),a(15680));const r={title:"Transparent Rewriting with Sync-Materialized View",language:"en"},l=void 0,s={unversionedId:"query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv",id:"version-3.0/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv",title:"Transparent Rewriting with Sync-Materialized View",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv.md",sourceDirName:"query-acceleration/tuning/tuning-plan",slug:"/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv",permalink:"/docs/3.0/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Transparent Rewriting with Sync-Materialized View",language:"en"},sidebar:"docs",previous:{title:"Optimizing Table Scanning",permalink:"/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-table-scanning"},next:{title:"Transparent Rewriting by Async-Materialized View",permalink:"/docs/3.0/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv"}},o={},c=[{value:"Principle",id:"principle",level:2},{value:"Tuning Usage Case",id:"tuning-usage-case",level:2},{value:"Create a Materialized View",id:"create-a-materialized-view",level:3},{value:"Query Data",id:"query-data",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"principle"},"Principle"),(0,i.yg)("p",null,"A sync-materialized view is a special type of table that precomputes and stores data based on a predefined SELECT statement. Its primary purpose is to satisfy users' analytical needs for arbitrary dimensions of raw detailed data while also enabling rapid fixed-dimension analytical queries."),(0,i.yg)("p",null,"Materialized views are suitable for the following scenarios:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Analytical requirements cover both detailed data queries and fixed-dimension queries.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Queries only involve a small subset of columns or rows in the table.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Queries contain time-consuming processing operations, such as long aggregation operations.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Queries require matching different prefix indexes."))),(0,i.yg)("p",null,"For queries that frequently reuse the same subquery results, a sync-materialized view can significantly enhance performance. Doris automatically maintains the data in the materialized view, ensuring data consistency between the base table and the materialized view without additional manual maintenance costs. During queries, the system automatically matches the optimal materialized view and reads data directly from it."),(0,i.yg)("h2",{id:"tuning-usage-case"},"Tuning Usage Case"),(0,i.yg)("p",null,"The following is a specific example to illustrate the use of single-table materialized views:"),(0,i.yg)("p",null,"Suppose we have a detailed sales record table ",(0,i.yg)("inlineCode",{parentName:"p"},"sales_records")," that records various information for each transaction, including transaction ID, salesperson ID, store ID, sales date, and transaction amount. Now, we frequently need to perform analytical queries on sales volumes for different stores."),(0,i.yg)("p",null,"To optimize the performance of these queries, we can create a materialized view ",(0,i.yg)("inlineCode",{parentName:"p"},"store_amt")," that groups by store ID and sums the sales amounts for the same store. The specific steps are as follows:"),(0,i.yg)("h3",{id:"create-a-materialized-view"},"Create a Materialized View"),(0,i.yg)("p",null,"First, we use the following SQL statement to create the materialized view ",(0,i.yg)("inlineCode",{parentName:"p"},"store_amt"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW store_amt AS \nSELECT store_id, SUM(sale_amt) \nFROM sales_records\nGROUP BY store_id;\n")),(0,i.yg)("p",null,"After submitting the creation task, Doris will asynchronously build this materialized view in the background. We can view the creation progress of the materialized view through the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE MATERIALIZED VIEW FROM db_name; \n")),(0,i.yg)("p",null,"When the ",(0,i.yg)("inlineCode",{parentName:"p"},"State")," field changes to ",(0,i.yg)("inlineCode",{parentName:"p"},"FINISHED"),", it indicates that the ",(0,i.yg)("inlineCode",{parentName:"p"},"store_amt")," materialized view has been successfully created."),(0,i.yg)("h3",{id:"query-data"},"Query Data"),(0,i.yg)("p",null,"After the materialized view is created, when we query the sales volumes of different stores, Doris will automatically match the ",(0,i.yg)("inlineCode",{parentName:"p"},"store_amt")," materialized view and read the pre-aggregated data directly from it, significantly improving query efficiency."),(0,i.yg)("p",null,"The query statement is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT store_id, SUM(sale_amt) FROM sales_records GROUP BY store_id;\n")),(0,i.yg)("p",null,"We can also use the ",(0,i.yg)("inlineCode",{parentName:"p"},"EXPLAIN")," command to check whether the query successfully hits the materialized view:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT store_id, SUM(sale_amt) FROM sales_records GROUP BY store_id;\n")),(0,i.yg)("p",null,"At the end of the execution plan, if similar content is displayed, it indicates that the query successfully hits the ",(0,i.yg)("inlineCode",{parentName:"p"},"store_amt")," materialized view:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"TABLE: default_cluster:test.sales_records(store_amt), PREAGGREGATION: ON\n")),(0,i.yg)("p",null,"By following these steps, we can utilize single-table materialized views to optimize query performance and improve the efficiency of data analysis."),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("p",null,"By creating materialized views, we can significantly enhance the query speed for related aggregation analyses. Materialized views not only enable us to perform statistical analyses quickly but also flexibly support the query requirements of detailed data, making them a very powerful feature in Doris."))}d.isMDXComponent=!0}}]);