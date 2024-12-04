"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[269937],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>p});var i=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,p=u["".concat(l,".").concat(h)]||u[h]||m[h]||n;return a?i.createElement(p,o(o({ref:t},d),{},{components:a})):i.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},171969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(58168),r=(a(296540),a(15680));const n={title:"Real-time data warehouse in TikTok based on Apache Doris",description:"We are excited to invite the data platform team of TikTok to talk about how they use Apache Doris in their real-time data architecture and how they benefit from it, which could serve as a model for effective real-time data warehousing.",summary:"We are excited to invite the data platform team of TikTok to talk about how they use Apache Doris in their real-time data architecture and how they benefit from it, which could serve as a model for effective real-time data warehousing.",date:"2024-09-12",author:"Data Platform Team of TikTok",tags:["Best Practice"],picked:"true",order:"4",image:"/images/real-time-data-warehouse-in-tiktok-based-on-apache-doris.png"},o=void 0,s={permalink:"/zh-CN/blog/real-time-data-warehouse-in-TikTok-based-on-doris",source:"@site/blog/real-time-data-warehouse-in-TikTok-based-on-doris.md",title:"Real-time data warehouse in TikTok based on Apache Doris",description:"We are excited to invite the data platform team of TikTok to talk about how they use Apache Doris in their real-time data architecture and how they benefit from it, which could serve as a model for effective real-time data warehousing.",date:"2024-09-12T00:00:00.000Z",formattedDate:"2024\u5e749\u670812\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Data Platform Team of TikTok"}],frontMatter:{title:"Real-time data warehouse in TikTok based on Apache Doris",description:"We are excited to invite the data platform team of TikTok to talk about how they use Apache Doris in their real-time data architecture and how they benefit from it, which could serve as a model for effective real-time data warehousing.",summary:"We are excited to invite the data platform team of TikTok to talk about how they use Apache Doris in their real-time data architecture and how they benefit from it, which could serve as a model for effective real-time data warehousing.",date:"2024-09-12",author:"Data Platform Team of TikTok",tags:["Best Practice"],picked:"true",order:"4",image:"/images/real-time-data-warehouse-in-tiktok-based-on-apache-doris.png"},prevItem:{title:"Apache Doris Flink Connector 24.0.0  just released!",permalink:"/zh-CN/blog/release-flink-doris-connector-24.0.0"},nextItem:{title:"Apache Doris 2.1.6 just released",permalink:"/zh-CN/blog/release-note-2.1.6"}},l={authorsImageUrls:[void 0]},c=[{value:"Real-time data warehouse in TikTok",id:"real-time-data-warehouse-in-tiktok",level:2},{value:"OLAP engine",id:"olap-engine",level:2},{value:"Real-time ranking board",id:"real-time-ranking-board",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Live streaming and e-commerce are among the biggest revenue drivers of TikTok, and they both rely on real-time data processing. It is more challenging than offline batch processing because it involves complicated operations like multi-stream JOINs and dimension table changes. It requires a higher level of development and maintenance input, and due to the need for system stability guarantee, it often leads to resource redundancy and waste. "),(0,r.yg)("p",null,"We are excited to invite the data platform team of TikTok to talk about how they use ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org"},"Apache Doris")," in their real-time data architecture and how they benefit from it, which could serve as a model for effective real-time data warehousing."),(0,r.yg)("h2",{id:"real-time-data-warehouse-in-tiktok"},"Real-time data warehouse in TikTok"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Real-time data warehouse in TikTok",src:a(170798).A,width:"1280",height:"617"})),(0,r.yg)("p",null,"Before migration to Apache Doris, the real-time data was transferred by Flink, with Kafka enabling data flow between different data layers. Because Kafka itself does not have a logical table, it was hard to develop on it as easily as on Hive."),(0,r.yg)("p",null,"For TikTok, there is a significant gap in the data volume between real-time data and offline data. Due to the costs in development, operation, and resources associated with real-time data, the team tended to downgrade the real-time data requirements, but it was only a duct-tape solution."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Development costs"),": Since Flink is a stateful data stream engine with incremental state, it requires developers to have better knowledge of the underlying architecture, especially in multi-stream JOINs. The incremental state makes it impossible to store the full data state in memory like Hive. Real-time data requires a huge storage volume and the use of various computing engines (OLTP engines like MySQL, OLAP engines like ClickHouse and Apache Doris, and KV stores like Abase, Tier, and Redis) to meet different computing needs, adding to the development complexity. The incremental state also makes testing more challenging.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Maintenance costs"),": Complex multi-stream JOIN operations often require storing large amounts of state data, which can lead to stability issues, especially when processing continuous live streams. The live stream business of TikTok is under continuous innovation. When there is a data schema change, direct deployment might cause data recovery failure due to altered state structures.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Resources"),": Under-utilization of resources is a common issue in real-time scenarios. For example, at the beginning of a sales campaign, there is often a tidal surge of traffic, which will quickly decrease after a few minutes. However, to ensure stability throughout the campaign, a high resource level must be maintained 24/7, leading to resource waste."))),(0,r.yg)("p",null,"TikTok was looking for a solution that provides the same convenience as offline data development and reduces resource costs. Additionally, since the intermediate state data of Flink is inaccessible, it will be great that the new solution can enable quick and easy data testing, which is a prerequisite for data accuracy."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Real-time data warehouse in TikTok",src:a(901679).A,width:"1280",height:"507"})),(0,r.yg)("p",null,"The Flink-based architecture has been a mature solution in TikTok. It was primarily used for well-established business applications. In terms of data storage, it utilized the logical table format provided by Kafka. Despite the lack of fields, constraints, and high data traceability, this logical table approach supported over half of the real-time data development."),(0,r.yg)("p",null,"The new architecture is based on Apache Doris. It is simpler and similar to an offline Hive setup. The key to this Doris-based architecture is the combination of the sub-second scheduling engine with the OLAP engine. This enables data layering and the reuse of offline development."),(0,r.yg)("h2",{id:"olap-engine"},"OLAP engine"),(0,r.yg)("p",null,"To serve the live streaming business in TikTok, the OLAP engine should be well-performed in:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Cross-site disaster recovery"),": This provides stability guarantee for live streaming to avoid significant financial losses caused by service unavailability. ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Read-write isolation"),": This is another guarantee of stability. ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Cross-cluster ETL"),": Data is scattered across different clusters for different business scenarios. For example, Cluster B and C both process transaction data, which should be synchronized from Cluster B to C, otherwise it will lead to duplicate data warehouse construction across business lines and impose burden on manpower and resources. "))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"OLAP engine",src:a(690723).A,width:"1280",height:"543"})),(0,r.yg)("p",null,"This is how TikTok addresses these challenges:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Cross-site disaster recovery"),": Each table is stored with three replicas. The replicas are distributed across the data centers to ensure availability in each site. Message queues from the production end go through intermediate processing and arrive at the consumption end, forming the full data service link. In the event of a single data center outage, there are policies in place for both production and consumption to ensure service efficiency and stability.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Read-write isolation"),": The read and write traffic is routed to different cluster groups.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Cross-cluster ETL"),": For cross-cluster reads and writes, TikTok employs two mechanisms based on different business requirements and time sensitivity. One is to use Spark to read the data source format into a Yarn cluster and then synchronize it to the other clusters. The other is to leverage the ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/admin-manual/data-admin/ccr"},"cross-cluster replication")," capability of Apache Doris. The Spark on Doris method is more stable and does not consume the computing resources of Doris, while the second approach is more efficient."))),(0,r.yg)("h2",{id:"real-time-ranking-board"},"Real-time ranking board"),(0,r.yg)("p",null,"How is the real-time data warehouse supporting the live streaming business of TikTok?"),(0,r.yg)("p",null,"It builds a real-time ranking board to monitor its live streaming business performance. As is mentioned, it was migrated from Flink to Apache Doris. The new solution has a clear definition of metadata."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Real-time ranking board",src:a(899770).A,width:"1280",height:"720"})),(0,r.yg)("p",null,"The metadata is parsed from the fields in the real-time tables and then given definitions. Defining the metadata is a way to abstract the business logic of the ranking board."),(0,r.yg)("p",null,"This also involves defining the partitioning logic of the real-time ranking board. By simple configurations, the corresponding Flink tasks can be quickly created."),(0,r.yg)("p",null,"However, the need for such real-time ranking boards proliferates and challenges the Flink architecture in two ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Firstly, the excessive number of ranking boards causes a surge in tasks, making resource management more difficult, especially real-time stream processing that runs 24/7.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Secondly, alerts from real-time tasks are getting more frequent. Also, the large number of tasks consuming the same message queue amplifies traffic, imposing an additional burden on HDFS."))),(0,r.yg)("p",null,"Moreover, since large promotional events in e-commerce tend to run for a long period, the long-cycle computation is a threat to the stability of Flink. ",(0,r.yg)("strong",{parentName:"p"},"This also makes backtracking difficult.")," To address these issues, maintenance personnel often need to perform operations at midnight when the state is relatively small and backtracking pressure is reduced."),(0,r.yg)("p",null,"Compared to the solution on Flink, the Doris-based data warehouse consumes less resources and generates less alerts. Plus, ",(0,r.yg)("strong",{parentName:"p"},"because the states are stored in Doris tables, long-cycle computation becomes more flexible"),"."),(0,r.yg)("p",null,"Join Apache Doris community on ",(0,r.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"Slack"),"!"))}m.isMDXComponent=!0},690723:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/OLAP-engine-1089735ce92b6503eaaacca16d336c78.PNG"},901679:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/real-time-data-warehouse-in-TikTok-2-6603d5e5915db8cbeeb6557b71da02fc.PNG"},170798:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/real-time-data-warehouse-in-TikTok-3a4c3be36862d146c387cfbda3d468f8.PNG"},899770:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/real-time-ranking-board-ee634d2b4f9b6fd95bdb251616cb4b27.png"}}]);