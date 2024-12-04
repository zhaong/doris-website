"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[920876],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>p});var n=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=i,p=u["".concat(l,".").concat(h)]||u[h]||g[h]||o;return t?n.createElement(p,r(r({ref:a},d),{},{components:t})):n.createElement(p,r({ref:a},d))}));function p(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},919142:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(58168),i=(t(296540),t(15680));const o={title:"Building the next-generation data lakehouse: 10X performance",description:"This article explains how to connect various data sources quickly and ensure high query performance.",date:"2023-03-14",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/building-the-next-generation-data-lakehouse.jpg"},r=void 0,s={permalink:"/blog/Building-the-Next-Generation-Data-Lakehouse-10X-Performance",source:"@site/blog/Building-the-Next-Generation-Data-Lakehouse-10X-Performance.md",title:"Building the next-generation data lakehouse: 10X performance",description:"This article explains how to connect various data sources quickly and ensure high query performance.",date:"2023-03-14T00:00:00.000Z",formattedDate:"March 14, 2023",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Building the next-generation data lakehouse: 10X performance",description:"This article explains how to connect various data sources quickly and ensure high query performance.",date:"2023-03-14",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/building-the-next-generation-data-lakehouse.jpg"},prevItem:{title:"Apache Doris announced the official release of version 1.2.3",permalink:"/blog/release-note-1.2.3"},nextItem:{title:"Tencent data engineer: why we went from ClickHouse to Apache Doris?",permalink:"/blog/Tencent-Data-Engineers-Why-We-Went-from-ClickHouse-to-Apache-Doris"}},l={authorsImageUrls:[void 0]},c=[{value:"Metadata Acquisition and Data Access",id:"metadata-acquisition-and-data-access",level:2},{value:"Metadata Acquisition",id:"metadata-acquisition",level:3},{value:"Metadata Structure",id:"metadata-structure",level:4},{value:"<strong>Extensible Metadata Connection Framework</strong>",id:"extensible-metadata-connection-framework",level:4},{value:"<strong>Efficient Metadata Access</strong>",id:"efficient-metadata-access",level:4},{value:"<strong>Custom Authorization</strong>",id:"custom-authorization",level:4},{value:"Data Access",id:"data-access",level:3},{value:"Query Performance Optimization",id:"query-performance-optimization",level:2},{value:"<strong>Data Reading</strong>",id:"data-reading",level:3},{value:"<strong>Native File Format Reader</strong>",id:"native-file-format-reader",level:4},{value:"File Cache",id:"file-cache",level:4},{value:"Execution Engine",id:"execution-engine",level:4},{value:"Query Optimizer",id:"query-optimizer",level:4},{value:"Performance",id:"performance",level:4},{value:"Workload Management and Elastic Computing",id:"workload-management-and-elastic-computing",level:2},{value:"Use Case",id:"use-case",level:2},{value:"More Data Sources",id:"more-data-sources",level:2},{value:"Data Integration",id:"data-integration",level:2},{value:"Resource Isolation &amp; Scheduling",id:"resource-isolation--scheduling",level:2},{value:"Join us",id:"join-us",level:2}],d={toc:c},u="wrapper";function g(e){let{components:a,...o}=e;return(0,i.yg)(u,(0,n.A)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,'A data warehouse was defined by Bill Inmon as "a subject-oriented, integrated, nonvolatile, and time-variant collection of data in support of management\'s decisions" over 30 years ago. However, the initial data warehouses unable to store massive heterogeneous data, hence the creation of data lakes. In modern times, data lakehouse emerges as a new paradigm. It is an open data management architecture featured by strong data analytics and governance capabilities, high flexibility, and open storage.'),(0,i.yg)("p",null,"If I could only use one word to describe the next-gen data lakehouse, it would be ",(0,i.yg)("strong",{parentName:"p"},"unification:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Unified data storage")," to avoid the trouble and risks brought by redundant storage and cross-system ETL."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Unified governance")," of both data and metadata with support for ACID, Schema Evolution, and Snapshot."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Unified data application")," that supports data access via a single interface for multiple engines and workloads.")),(0,i.yg)("p",null,"Let's look into the architecture of a data lakehouse. We will find that it is not only supported by table formats such as Apache Iceberg, Apache Hudi, and Delta Lake, but more importantly, it is powered by a high-performance query engine to extract value from data."),(0,i.yg)("p",null,"Users are looking for a query engine that allows quick and smooth access to the most popular data sources. What they don't want is for their data to be locked in a certain database and rendered unavailable for other engines or to spend extra time and computing costs on data transfer and format conversion."),(0,i.yg)("p",null,"To turn these visions into reality, a data query engine needs to figure out the following questions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"How to access more data sources and acquire metadata more easily?"),(0,i.yg)("li",{parentName:"ul"},"How to improve query performance on data coming from various sources?"),(0,i.yg)("li",{parentName:"ul"},"How to enable more flexible resource scheduling and workload management?")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris")," provides a possible answer to these questions. It is a real-time OLAP database that aspires to build itself into a unified data analysis gateway. This means it needs to be easily connected to various RDBMS, data warehouses, and data lake engines (such as Hive, Iceberg, Hudi, Delta Lake, and Flink Table Store) and allow for quick data writing from and queries on these heterogeneous data sources. The rest of this article is an in-depth explanation of Apache Doris' techniques in the above three aspects: metadata acquisition, query performance optimization, and resource scheduling."),(0,i.yg)("h2",{id:"metadata-acquisition-and-data-access"},"Metadata Acquisition and Data Access"),(0,i.yg)("p",null,"Apache Doris 1.2.2 supports a wide variety of data lake formats and data access from various external data sources. Besides, via the Table Value Function, users can analyze files in object storage or HDFS directly."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"data-sources-supported-in-data-lakehouse",src:t(909015).A,width:"1598",height:"882"})),(0,i.yg)("p",null,"To support multiple data sources, Apache Doris puts efforts into metadata acquisition and data access."),(0,i.yg)("h3",{id:"metadata-acquisition"},"Metadata Acquisition"),(0,i.yg)("p",null,"Metadata consists of information about the databases, tables, partitions, indexes, and files from the data source. Thus, metadata of various data sources come in different formats and patterns, adding to the difficulty of metadata connection. An ideal metadata acquisition service should include the following:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"A ",(0,i.yg)("strong",{parentName:"li"},"metadata structure")," that can accommodate heterogeneous metadata."),(0,i.yg)("li",{parentName:"ol"},"An ",(0,i.yg)("strong",{parentName:"li"},"extensible metadata connection framework")," that enables quick and low-cost data connection."),(0,i.yg)("li",{parentName:"ol"},"Reliable and ",(0,i.yg)("strong",{parentName:"li"},"efficient")," ",(0,i.yg)("strong",{parentName:"li"},"metadata access")," that supports real-time metadata capture."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Custom authentication")," services to interface with external privilege management systems and thus reduce migration costs. ")),(0,i.yg)("h4",{id:"metadata-structure"},"Metadata Structure"),(0,i.yg)("p",null,"Older versions of Doris support a two-tiered metadata structure: database and table. As a result, users need to create mappings for external databases and tables one by one, which is heavy work. Thus, Apache Doris 1.2.0 introduced the Multi-Catalog functionality. With this, you can map to external data at the catalog level, which means:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"You can map to the whole external data source and ingest all metadata from it."),(0,i.yg)("li",{parentName:"ol"},"You can manage the properties of the specified data source at the catalog level, such as connection, privileges, and data ingestion details, and easily handle multiple data sources.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"metadata-structure",src:t(650908).A,width:"1280",height:"650"})),(0,i.yg)("p",null,"Data in Doris falls into two types of catalogs:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Internal Catalog: Existing Doris databases and tables all belong to the Internal Catalog."),(0,i.yg)("li",{parentName:"ol"},"External Catalog: This is used to interface with external data sources. For example, HMS External Catalog can be connected to a cluster managed by Hive Metastore, and Iceberg External Catalog can be connected to an Iceberg cluster.")),(0,i.yg)("p",null,"You can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"SWITCH")," statement to switch catalogs. You can also conduct federated queries using fully qualified names. For example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT * FROM hive.db1.tbl1 a JOIN iceberg.db2.tbl2 b\nON a.k1 = b.k1;\n")),(0,i.yg)("p",null,"See more details ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/"},"here"),"."),(0,i.yg)("h4",{id:"extensible-metadata-connection-framework"},(0,i.yg)("strong",{parentName:"h4"},"Extensible Metadata Connection Framework")),(0,i.yg)("p",null,"The introduction of the catalog level also enables users to add new data sources simply by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE CATALOG")," statement:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n);\n")),(0,i.yg)("p",null,"In data lake scenarios, Apache Doris currently supports the following metadata services:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Hive Metastore-compatible metadata services"),(0,i.yg)("li",{parentName:"ul"},"Alibaba Cloud Data Lake Formation"),(0,i.yg)("li",{parentName:"ul"},"AWS Glue")),(0,i.yg)("p",null,"This also paves the way for developers who want to connect to more data sources via External Catalog. All they need is to implement the access interface."),(0,i.yg)("h4",{id:"efficient-metadata-access"},(0,i.yg)("strong",{parentName:"h4"},"Efficient Metadata Access")),(0,i.yg)("p",null,"Access to external data sources is often hindered by network conditions and data resources. This requires extra efforts of a data query engine to guarantee reliability, stability, and real-timeliness in metadata access."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"metadata-access-Hive-MetaStore",src:t(733797).A,width:"1280",height:"472"})),(0,i.yg)("p",null,"Doris enables high efficiency in metadata access by ",(0,i.yg)("strong",{parentName:"p"},"Meta Cache"),", which includes Schema Cache, Partition Cache, and File Cache. This means that Doris can respond to metadata queries on thousands of tables in milliseconds. In addition, Doris supports manual refresh of metadata at the Catalog/Database/Table level. Meanwhile, it enables auto synchronization of metadata in Hive Metastore by monitoring Hive Metastore Event, so any changes can be updated within seconds."),(0,i.yg)("h4",{id:"custom-authorization"},(0,i.yg)("strong",{parentName:"h4"},"Custom Authorization")),(0,i.yg)("p",null,"External data sources usually come with their own privilege management services. Many companies use one single tool (such as Apache Ranger) to provide authorization for their multiple data systems. Doris supports a custom authorization plugin, which can be connected to the user's own privilege management system via the Doris Access Controller interface. As a user, you only need to specify the authorization plugin for a newly created catalog, and then you can readily perform authorization, audit, and data encryption on external data in Doris."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"custom-authorization",src:t(366922).A,width:"1280",height:"568"})),(0,i.yg)("h3",{id:"data-access"},"Data Access"),(0,i.yg)("p",null,"Doris supports data access to external storage systems, including HDFS and S3-compatible object storage:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"access-to-external-storage-systems",src:t(5779).A,width:"1490",height:"610"})),(0,i.yg)("h2",{id:"query-performance-optimization"},"Query Performance Optimization"),(0,i.yg)("p",null,"After clearing the way for external data access, the next step for a query engine would be to accelerate data queries. In the case of Apache Doris, efforts are made in data reading, execution engine, and optimizer."),(0,i.yg)("h3",{id:"data-reading"},(0,i.yg)("strong",{parentName:"h3"},"Data Reading")),(0,i.yg)("p",null,"Reading data on remote storage systems is often bottlenecked by access latency, concurrency, and I/O bandwidth, so reducing reading frequency will be a better choice."),(0,i.yg)("h4",{id:"native-file-format-reader"},(0,i.yg)("strong",{parentName:"h4"},"Native File Format Reader")),(0,i.yg)("p",null,"Improving data reading efficiency entails optimizing the reading of Parquet files and ORC files, which are the most commonly seen data files. Doris has refactored its File Reader, which is fine-tuned for each data format. Take the Native Parquet Reader as an example:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Reduce format conversion"),": It can directly convert files to the Doris storage format or to a format of higher performance using dictionary encoding. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Smart indexing of finer granularity"),": It supports Page Index for Parquet files, so it can utilize Page-level smart indexing to filter Pages. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Predicate pushdown and late materialization"),": It first reads columns with filters first and then reads the other columns of the filtered rows. This remarkably reduces file read volume since it avoids reading irrelevant data."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Lower read frequency"),": Building on the high throughput and low concurrency of remote storage, it combines multiple data reads into one in order to improve overall data reading efficiency.")),(0,i.yg)("h4",{id:"file-cache"},"File Cache"),(0,i.yg)("p",null,"Doris caches files from remote storage in local high-performance disks as a way to reduce overhead and increase performance in data reading. In addition, it has developed two new features that make queries on remote files as quick as those on local files:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Block cache"),": Doris supports the block cache of remote files and can automatically adjust the block size from 4KB to 4MB based on the read request. The block cache method reduces read/write amplification and read latency in cold caches."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Consistent hashing for caching"),": Doris applies consistent hashing to manage cache locations and schedule data scanning. By doing so, it prevents cache failures brought about by the online and offlining of nodes. It can also increase cache hit rate and query service stability.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"file-cache",src:t(660024).A,width:"1080",height:"638"})),(0,i.yg)("h4",{id:"execution-engine"},"Execution Engine"),(0,i.yg)("p",null,"Developers surely don't want to rebuild all the general features for every new data source. Instead, they hope to reuse the vectorized execution engine and all operators in Doris in the data lakehouse scenario. Thus, Doris has refactored the scan nodes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Layer the logic"),": All data queries in Doris, including those on internal tables, use the same operators, such as Join, Sort, and Agg. The only difference between queries on internal and external data lies in data access. In Doris, anything above the scan nodes follows the same query logic, while below the scan nodes, the implementation classes will take care of access to different data sources."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Use a general framework for scan operators"),": Even for the scan nodes, different data sources have a lot in common, such as task splitting logic, scheduling of sub-tasks and I/O, predicate pushdown, and Runtime Filter. Therefore, Doris uses interfaces to handle them. Then, it implements a unified scheduling logic for all sub-tasks. The scheduler is in charge of all scanning tasks in the node. With global information of the node in hand, the schedular is able to do fine-grained management. Such a general framework makes it easy to connect a new data source to Doris, which will only take a week of work for one developer.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"execution-engine",src:t(881153).A,width:"830",height:"844"})),(0,i.yg)("h4",{id:"query-optimizer"},"Query Optimizer"),(0,i.yg)("p",null,"Doris supports a range of statistical information from various data sources, including Hive Metastore, Iceberg Metafile, and Hudi MetaTable. It has also refined its cost model inference based on the characteristics of different data sources to enhance its query planning capability. "),(0,i.yg)("h4",{id:"performance"},"Performance"),(0,i.yg)("p",null,"We tested Doris and Presto/Trino on HDFS in flat table scenarios (ClickBench) and multi-table scenarios (TPC-H). Here are the results:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Apache-Doris-VS-Trino-Presto-ClickBench",src:t(362310).A,width:"1925",height:"345"})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Apache-Doris-VS-Trino-Presto-TPCH",src:t(884975).A,width:"1688",height:"421"})),(0,i.yg)("p",null,"As is shown, with the same computing resources and on the same dataset, Apache Doris takes much less time to respond to SQL queries in both scenarios, delivering a 3~10 times higher performance than Presto/Trino."),(0,i.yg)("h2",{id:"workload-management-and-elastic-computing"},"Workload Management and Elastic Computing"),(0,i.yg)("p",null,"Querying external data sources requires no internal storage of Doris. This makes elastic stateless computing nodes possible. Apache Doris 2.0 is going to implement Elastic Compute Node, which is dedicated to supporting query workloads of external data sources."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"stateless-compute-nodes",src:t(413623).A,width:"1960",height:"884"})),(0,i.yg)("p",null,"Stateless computing nodes are open for quick scaling so users can easily cope with query workloads during peaks and valleys and strike a balance between performance and cost. In addition, Doris has optimized itself for Kubernetes cluster management and node scheduling. Now Master nodes can automatically manage the onlining and offlining of Elastic Compute Nodes, so users can govern their cluster workloads in cloud-native and hybrid cloud scenarios without difficulty."),(0,i.yg)("h2",{id:"use-case"},"Use Case"),(0,i.yg)("p",null,"Apache Doris has been adopted by a financial institution for risk management. The user's high demands for data timeliness makes their data mart built on Greenplum and CDH, which could only process data from one day ago, no longer a great fit. In 2022, they incorporated Apache Doris in their data production and application pipeline, which allowed them to perform federated queries across Elasticsearch, Greenplum, and Hive. A few highlights from the user's feedback include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Doris allows them to create one Hive Catalog that maps to tens of thousands of external Hive tables and conducts fast queries on them."),(0,i.yg)("li",{parentName:"ul"},"Doris makes it possible to perform real-time federated queries using Elasticsearch Catalog and achieve a response time of mere milliseconds."),(0,i.yg)("li",{parentName:"ul"},"Doris enables the decoupling of daily batch processing and statistical analysis, bringing less resource consumption and higher system stability.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"use-case-of-data-lakehouse",src:t(270606).A,width:"1510",height:"882"})),(0,i.yg)("h1",{id:"future-plans"},"Future Plans"),(0,i.yg)("p",null,"Apache Doris is going to support a wider range of data sources, improve its data reading and write-back functionality, and optimizes its resource isolation and scheduling."),(0,i.yg)("h2",{id:"more-data-sources"},"More Data Sources"),(0,i.yg)("p",null,"We are working closely with various open source communities to expand and improve Doris' features in data lake analytics. We plan to provide:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support for Incremental Query of Hudi Merge-on-Read tables;"),(0,i.yg)("li",{parentName:"ul"},"Lower query latency utilizing the indexing of Iceberg/Hudi in combination with the query optimizer;"),(0,i.yg)("li",{parentName:"ul"},"Support for more data lake formats such as Delta Lake and Flink Table Store.")),(0,i.yg)("h2",{id:"data-integration"},"Data Integration"),(0,i.yg)("p",null," ",(0,i.yg)("strong",{parentName:"p"},"Data reading:")),(0,i.yg)("p",null,"Apache Doris is going to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support CDC and Incremental Materialized Views for data lakes in order to provide users with near real-time data views;"),(0,i.yg)("li",{parentName:"ul"},"Support a Git-Like data access mode and enable easier and safer data management via the multi-version and Branch mechanisms. ")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Data Write-Back:")),(0,i.yg)("p",null,"We are going to enhance Apache Doris' data analysis gateway. In the future, users will be able to use Doris as a unified data management portal that is in charge of the write-back of processed data, export of data, and the generation of a unified data view."),(0,i.yg)("h2",{id:"resource-isolation--scheduling"},"Resource Isolation & Scheduling"),(0,i.yg)("p",null,"Apache Doris is undertaking a wider variety of workloads as it is interfacing with more and more data sources. For example, it needs to provide low-latency online services while batch processing T-1 data in Hive. To make it work, resource isolation within the same cluster is critical, which is where efforts will be made."),(0,i.yg)("p",null,"Meanwhile, we will continue optimizing the scheduling logic of elastic computing nodes in various scenarios and develop intra-node resource isolation at a finer granularity, such as CPU, I/O, and memory. "),(0,i.yg)("h2",{id:"join-us"},"Join us"),(0,i.yg)("p",null,"Contact ",(0,i.yg)("a",{parentName:"p",href:"mailto:dev@apache.doris.org"},"dev@apache.doris.org")," to join the Lakehouse SIG(Special Interest Group) in the Apache Doris community and talk to developers from all walks of life."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"# Links:")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Apache Doris:")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"http://doris.apache.org"},"http://doris.apache.org")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Apache Doris Github:")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris")),(0,i.yg)("p",null,"Find Apache Doris developers on ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw"},"Slack"),"."))}g.isMDXComponent=!0},909015:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_1-3be8649464d93663ca4b474a8ce1d669.png"},413623:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_10-96454cb74de1a358c1b94af7e9673f24.png"},270606:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_11-486b5f1ff26d1d7f20c70d4c4841e6ee.png"},650908:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_2-c1381100fe5007d6e3ee17ef81245112.png"},733797:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_3-9539a868abd98e4fa92881ef8c32b38a.png"},366922:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_4-1f3438ed8d88966a5352a85b1b479057.png"},5779:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_5-3407cba9da2ea30688926b5e6ade10f5.png"},660024:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_6-ab3642f54deb4b5f57694e0814a891a7.png"},881153:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_7-8e726de5b739f4532ff1c8a45055911e.png"},362310:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_8-3fc3c0c72557dccb1dde18e02b88d155.png"},884975:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Lakehouse_9-07cdca2b93201425f7d2f7647c13c163.png"}}]);