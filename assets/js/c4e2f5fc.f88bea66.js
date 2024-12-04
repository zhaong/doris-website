"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[773565],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var i=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,u=p["".concat(l,".").concat(g)]||p[g]||h[g]||n;return a?i.createElement(u,o(o({ref:t},d),{},{components:a})):i.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},473966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(58168),r=(a(296540),a(15680));const n={title:"Apache Doris speeds up data reporting, tagging, and data lake analytics",description:"The user leverages the capabilities of Apache Doris in reporting, customer tagging, and data lake analytics and achieves high performance.",date:"2023-12-27",author:"Apache Doris",tags:["Best Practice"],image:"/images/apache-doris-speeds-up-data-reporting-data-lake-analytics.jpg"},o=void 0,s={permalink:"/blog/apache-doris-speeds-up-data-reporting-tagging-and-data-lake-analytics",source:"@site/blog/apache-doris-speeds-up-data-reporting-tagging-and-data-lake-analytics.md",title:"Apache Doris speeds up data reporting, tagging, and data lake analytics",description:"The user leverages the capabilities of Apache Doris in reporting, customer tagging, and data lake analytics and achieves high performance.",date:"2023-12-27T00:00:00.000Z",formattedDate:"December 27, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris speeds up data reporting, tagging, and data lake analytics",description:"The user leverages the capabilities of Apache Doris in reporting, customer tagging, and data lake analytics and achieves high performance.",date:"2023-12-27",author:"Apache Doris",tags:["Best Practice"],image:"/images/apache-doris-speeds-up-data-reporting-data-lake-analytics.jpg"},prevItem:{title:"Financial data warehousing: fast, secure, and highly available with Apache Doris",permalink:"/blog/a-fast-secure-high-available-real-time-data-warehouse-based-on-apache-doris"},nextItem:{title:"From Elasticsearch to Apache Doris: upgrading an observability platform",permalink:"/blog/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform"}},l={authorsImageUrls:[void 0]},c=[{value:"Reporting",id:"reporting",level:2},{value:"From ClickHouse + MySQL to Apache Doris",id:"from-clickhouse--mysql-to-apache-doris",level:3},{value:"Performance improvements",id:"performance-improvements",level:3},{value:"Tagging",id:"tagging",level:2},{value:"Data lake analytics",id:"data-lake-analytics",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,i.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"As much as we say ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris")," is an all-in-one data platform that is capable of various analytics workloads, it is always compelling to demonstrate that by real use cases. That's why I would like to share this user story with you. It is about how they leverage the capabilities of Apache Doris in reporting, customer tagging, and data lake analytics and achieve high performance."),(0,r.yg)("p",null,"This fintech service provider is a long-term user of Apache Doris. They have almost 10 clusters for production, hundreds of Doris backend nodes, and thousands of CPU Cores. The total data size is near 1 PB. Every day, they have hundreds of workflows running simultaneously, receive almost 10 billion new data records, and respond to millions of data queries."),(0,r.yg)("p",null,"Before migrating to Apache Doris, they used ClickHouse, MySQL, and Elasticsearch. Then frictions arise from their ever-enlarging data size. They found it hard to scale out the ClickHouse clusters because there were too many dependencies. As for MySQL, they had to switch between various MySQL instances because one MySQL instance had its limits and cross-instance queries were not supported."),(0,r.yg)("h2",{id:"reporting"},"Reporting"),(0,r.yg)("h3",{id:"from-clickhouse--mysql-to-apache-doris"},"From ClickHouse + MySQL to Apache Doris"),(0,r.yg)("p",null,"Data reporting is one of the major services they provide to their customers and they are bound by an SLA. They used to support such service with a combination of ClickHouse and MySQL, but they found significant fluctuations in their data synchronization duration, making it hard for them to meet the service levels outlined in their SLA. Diagnosis showed that it was because the multiple components add to the complexity and instability of data synchronization tasks. To fix that, they have used Apache Doris as a unified analytic engine to support data reporting. "),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://cdn.selectdb.com/static/from_clickhouse_mysql_to_apache_doris_6387c0363a.png",alt:"from-clickhouse-mysql-to-apache-doris",width:"840",style:{display:"inline-block"}})),(0,r.yg)("h3",{id:"performance-improvements"},"Performance improvements"),(0,r.yg)("p",null,"With Apache Doris, they ingest data via the ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/1.2/data-operate/import/import-way/broker-load-manual"},"Broker Load")," method and reach an SLA compliance rate of over 99% in terms of data synchronization performance."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://cdn.selectdb.com/static/data_synchronization_size_and_duration_327e4dc1fe.png",alt:"data-synchronization-size-and-duration",width:"640",style:{display:"inline-block"}})),(0,r.yg)("p",null,"As for data queries, the Doris-based architecture maintains an ",(0,r.yg)("strong",{parentName:"p"},"average query response time")," of less than ",(0,r.yg)("strong",{parentName:"p"},"10s")," and a ",(0,r.yg)("strong",{parentName:"p"},"P90 response time")," of less than ",(0,r.yg)("strong",{parentName:"p"},"30s"),". This is a 50% speedup compared to the old architecture. "),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://cdn.selectdb.com/static/average_query_response_time_372d71ef16.png",alt:"average-query-response-time",width:"840",style:{display:"inline-block"}})),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://cdn.selectdb.com/static/query_response_time_percentile_756c6f6a71.png",alt:"query-response-time-percentile",width:"840",style:{display:"inline-block"}})),(0,r.yg)("h2",{id:"tagging"},"Tagging"),(0,r.yg)("p",null,"Tagging is a common operation in customer analytics. You assign labels to customers based on their behaviors and characteristics, so that you can divide them into groups and figure out targeted marketing strategies for each group of them. "),(0,r.yg)("p",null,"In the old processing architecture where Elasticsearch was the processing engine, raw data was ingested and tagged properly. Then, it will be merged into JSON files and imported into Elasticsearch, which provides data services for analysts and marketers. In this process, the merging step was to reduce updates and relieve load for Elasticsearch, but it turned out to be a troublemaker:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Any problematic data in any of the tags could spoil the entire merging operation and thus interrupt the data services."),(0,r.yg)("li",{parentName:"ul"},"The merging operation was implemented based on Spark and MapReduce and took up to 4 hours. Such a long time frame could encroach on marketing opportunities and lead to unseen losses.")),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://cdn.selectdb.com/static/tagging_services_3263e21c36.png",alt:"tagging-services",width:"840",style:{display:"inline-block"}})),(0,r.yg)("p",null,"Then Apache Doris takes this over. Apache Doris arranges tag data with its data models, which process data fast and smoothly. The aforementioned merging step can be done by the ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-table/data-model#aggregate-model"},"Aggregate Key model"),", which aggregates tag data based on the specified Aggregate Key upon data ingestion. The ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-table/data-model#unique-model"},"Unique Key model")," is handy for partial column updates. Again, all you need is to specify the Unique Key. This enables swift and flexible data updating and saves you from the trouble of replacing the entire flat table. You can also put your detailed data into a ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-table/data-model#duplicate-model"},"Duplicate model")," to speed up certain queries. ",(0,r.yg)("strong",{parentName:"p"},"In practice, it took the user 1 hour to finish the data ingestion, compared to 4 hours with the old architecture.")),(0,r.yg)("p",null,"In terms of query performance, Doris is equipped with well-developed bitmap indexes and techniques tailored to high-concurrency queries, so in this case, it can finish ",(0,r.yg)("strong",{parentName:"p"},"customer segmentation within seconds")," and reach over ",(0,r.yg)("strong",{parentName:"p"},"700 QPS in user-facing queries"),"."),(0,r.yg)("h2",{id:"data-lake-analytics"},"Data lake analytics"),(0,r.yg)("p",null,"In data lake scenarios, the data size you need to handle tends to be huge, but the data processing volume in each query tends to vary. To ensure fast data ingestion and high query performance of huge data sets, you need more resources. On the other hand, during non-peak time, you want to scale down your cluster for more efficient resource management. How do you handle this dilemma?"),(0,r.yg)("p",null,"Apache Doris has a few features that are designed for data lake analytics, including Multi-Catalog and Compute Node. The former shields you from the headache of data ingestion in data lake analytics while the latter enables elastic cluster scaling."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/lakehouse/multi-catalog/?_highlight=multi&_highlight=catalog"},"Multi-Catalog")," mechanism allows you to connect Doris to a variety of external data sources so you can use Doris as a unified query gateway without worrying about bulky data ingestion into Doris."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/advanced/compute-node/"},"Compute Node")," of Apache Doris is a backend role that is designed for remote federated query workloads, like those in data lake analytics. Normal Doris backend nodes are responsible for both SQL query execution and data management, while the Compute Nodes in Doris, as the name implies, only perform computation. Compute Nodes are stateless, making them elastic enough for cluster scaling."),(0,r.yg)("p",null,"The user introduces Compute Nodes into their cluster and deploys them with other components in a hybrid configuration. As a result, the cluster automatically scales down during the night, when there are fewer query requests, and scales out during the daytime to handle the massive query workload. This is more resource-efficient."),(0,r.yg)("p",null,"For easier deployment, they have also optimized their Deploy on Yarn process via Skein. As is shown below, they define the number of Compute nodes and the required resources in the YAML file, and then pack the installation file, configuration file, and startup script into the distributed file system. In this way, they can start or stop the entire cluster of over 100 nodes within minutes using one simple line of code."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://cdn.selectdb.com/static/skein_3516ba1a83.png",alt:"skein",width:"560",style:{display:"inline-block"}})),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"For data reporting and customer tagging, Apache Doris smoothens data ingestion and merging steps, and delivers high query performance based on its own design and functionality. For data lake analytics, the user improves resource efficiency by elastic scaling of clusters using the Compute Node. Along their journey with Apache Doris, they have also developed a data ingestion task prioritizing mechanism and contributed it to the Doris project. A gesture to facilitate their use case ends up benefiting the whole ",(0,r.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw"},"open source community"),". This is a great example of open-source products thriving on user involvement."),(0,r.yg)("p",null,"Check Apache Doris ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"repo")," on GitHub"))}h.isMDXComponent=!0}}]);