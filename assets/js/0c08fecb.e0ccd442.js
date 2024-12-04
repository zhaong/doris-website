"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[461556],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,m=p["".concat(l,".").concat(u)]||p[u]||g[u]||i;return t?n.createElement(m,o(o({ref:a},c),{},{components:t})):n.createElement(m,o({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},631442:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(58168),r=(t(296540),t(15680));const i={title:"Using Doris and Iceberg",language:"en"},o=void 0,s={unversionedId:"gettingStarted/tutorials/building-lakehouse/doris-iceberg",id:"gettingStarted/tutorials/building-lakehouse/doris-iceberg",title:"Using Doris and Iceberg",description:"\x3c!--",source:"@site/docs/gettingStarted/tutorials/building-lakehouse/doris-iceberg.md",sourceDirName:"gettingStarted/tutorials/building-lakehouse",slug:"/gettingStarted/tutorials/building-lakehouse/doris-iceberg",permalink:"/docs/dev/gettingStarted/tutorials/building-lakehouse/doris-iceberg",draft:!1,tags:[],version:"current",frontMatter:{title:"Using Doris and Iceberg",language:"en"},sidebar:"get-starting",previous:{title:"Using Doris and Paimon",permalink:"/docs/dev/gettingStarted/tutorials/building-lakehouse/doris-paimon"},next:{title:"Using Doris and LakeSoul",permalink:"/docs/dev/gettingStarted/tutorials/building-lakehouse/doris-lakesoul"}},l={},d=[{value:"Apache Doris &amp; Iceberg",id:"apache-doris--iceberg",level:2},{value:"User Guide",id:"user-guide",level:2},{value:"01 Environment Preparation",id:"01-environment-preparation",level:3},{value:"02 Environment Deployment",id:"02-environment-deployment",level:3},{value:"03 Create Iceberg Table",id:"03-create-iceberg-table",level:3},{value:"04 Data Insertion",id:"04-data-insertion",level:3},{value:"05 Data Query",id:"05-data-query",level:3},{value:"06 Time Travel",id:"06-time-travel",level:3}],c={toc:d},p="wrapper";function g(e){let{components:a,...i}=e;return(0,r.yg)(p,(0,n.A)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"As a new open data management architecture, the Data Lakehouse integrates the high performance and real-time capabilities of a data warehouse with the low cost and flexibility of a data lake, helping users more conveniently meet various data processing and analysis needs. It has been increasingly applied in enterprise big data systems."),(0,r.yg)("p",null,"In recent versions, Apache Doris has deepened its integration with data lakes and now offers a mature Data Lakehouse solution."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Since version 0.15, Apache Doris has introduced Hive and Iceberg external tables, exploring the capabilities of combining with Apache Iceberg for data lakes."),(0,r.yg)("li",{parentName:"ul"},"Starting from version 1.2, Apache Doris officially introduced the Multi-Catalog feature, enabling automatic metadata mapping and data access for various data sources, along with numerous performance optimizations for external data reading and query execution. It now fully supports building a high-speed and user-friendly Lakehouse architecture."),(0,r.yg)("li",{parentName:"ul"},"In version 2.1, Apache Doris further strengthened its Data Lakehouse architecture, enhancing the reading and writing capabilities of mainstream data lake formats (Hudi, Iceberg, Paimon, etc.), introducing compatibility with multiple SQL dialects, and seamless migration from existing systems to Apache Doris. For data science and large-scale data reading scenarios, Doris integrated the Arrow Flight high-speed reading interface, achieving a 100x improvement in data transfer efficiency.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Building Lakehouse using Doris and Iceberg",src:t(763995).A,width:"2560",height:"1280"})),(0,r.yg)("h2",{id:"apache-doris--iceberg"},"Apache Doris & Iceberg"),(0,r.yg)("p",null,"Apache Iceberg is an open-source, high-performance, and highly reliable data lake table format that enables the analysis and management of massive-scale data. It supports various mainstream query engines, including Apache Doris, is compatible with HDFS and various object cloud storage, and features ACID compliance, schema evolution, advanced filtering, hidden partitioning, and partition layout evolution to ensure high-performance queries, data reliability, consistency, and flexibility with features like time travel and version rollback."),(0,r.yg)("p",null,"Apache Doris provides native support for several core features of Iceberg:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Supports multiple Iceberg Catalog types such as Hive Metastore, Hadoop, REST, Glue, Google Dataproc Metastore, DLF, etc."),(0,r.yg)("li",{parentName:"ul"},"Native support for Iceberg V1/V2 table formats and reading of Position Delete, Equality Delete files."),(0,r.yg)("li",{parentName:"ul"},"Supports querying Iceberg table snapshot history through table functions."),(0,r.yg)("li",{parentName:"ul"},"Supports Time Travel functionality."),(0,r.yg)("li",{parentName:"ul"},"Native support for the Iceberg table engine. It allows Apache Doris to directly create, manage, and write data to Iceberg tables. It supports comprehensive partition Transform functions, providing capabilities like hidden partitioning and partition layout evolution.")),(0,r.yg)("p",null,"Users can quickly build an efficient Data Lakehouse solution based on Apache Doris + Apache Iceberg to flexibly address various real-time data analysis and processing needs."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use the high-performance query engine of Doris to perform data analysis by associating Iceberg table data and other data sources, building a ",(0,r.yg)("strong",{parentName:"li"},"unified federated data analysis platform"),"."),(0,r.yg)("li",{parentName:"ul"},"Manage and build Iceberg tables directly through Doris, complete data cleaning, processing, and writing to Iceberg tables in Doris, building a ",(0,r.yg)("strong",{parentName:"li"},"unified data processing platform for data lakes"),"."),(0,r.yg)("li",{parentName:"ul"},"Share Doris data with other upstream and downstream systems for further processing through the Iceberg table engine, building a ",(0,r.yg)("strong",{parentName:"li"},"unified open data storage platform"),".")),(0,r.yg)("p",null,"In the future, Apache Iceberg will serve as one of the native table engines for Apache Doris, providing more comprehensive analysis and management functions for lake-formatted data. Apache Doris will also gradually support more advanced features of Apache Iceberg, including Update/Delete/Merge, sorting during write-back, incremental data reading, metadata management, etc., to jointly build a unified, high-performance, real-time data lake platform."),(0,r.yg)("p",null,"For more information, please refer to ",(0,r.yg)("a",{parentName:"p",href:"../../../lakehouse/datalake-analytics/iceberg"},"Iceberg Catalog")),(0,r.yg)("h2",{id:"user-guide"},"User Guide"),(0,r.yg)("p",null,"This document mainly explains how to quickly set up an Apache Doris + Apache Iceberg testing & demonstration environment in a Docker environment and demonstrate the usage of various functions."),(0,r.yg)("p",null,"All scripts and code mentioned in this document can be obtained from this address: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon"},"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon")),(0,r.yg)("h3",{id:"01-environment-preparation"},"01 Environment Preparation"),(0,r.yg)("p",null,"This document uses Docker Compose for deployment, with the following components and versions:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Component"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Doris"),(0,r.yg)("td",{parentName:"tr",align:null},"Default 2.1.5, can be modified")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Iceberg"),(0,r.yg)("td",{parentName:"tr",align:null},"1.4.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MinIO"),(0,r.yg)("td",{parentName:"tr",align:null},"RELEASE.2024-04-29T09-56-05Z")))),(0,r.yg)("h3",{id:"02-environment-deployment"},"02 Environment Deployment"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start all components"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"bash ./start_all.sh"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"After starting, you can use the following script to log in to the Doris command line:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"-- login doris\nbash ./start_doris_client.sh\n")))),(0,r.yg)("h3",{id:"03-create-iceberg-table"},"03 Create Iceberg Table"),(0,r.yg)("p",null,"After logging into the Doris command line, an Iceberg Catalog named Iceberg has already been created in the Doris cluster (can be viewed by ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CATALOGS"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE CATALOG iceberg"),"). The following is the creation statement for this Catalog:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'-- Already created\nCREATE CATALOG `iceberg` PROPERTIES (\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "rest",\n    "warehouse" = "s3://warehouse/",\n    "uri" = "http://rest:8181",\n    "s3.access_key" = "admin",\n    "s3.secret_key" = "password",\n    "s3.endpoint" = "http://minio:9000"\n);\n')),(0,r.yg)("p",null,"Create a database and an Iceberg table in the Iceberg Catalog:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'mysql> SWITCH iceberg;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> CREATE DATABASE nyc;\nQuery OK, 0 rows affected (0.12 sec)\n\nmysql> CREATE TABLE iceberg.nyc.taxis\n       (\n           vendor_id BIGINT,\n           trip_id BIGINT,\n           trip_distance FLOAT,\n           fare_amount DOUBLE,\n           store_and_fwd_flag STRING,\n           ts DATETIME\n       )\n       PARTITION BY LIST (vendor_id, DAY(ts)) ()\n       PROPERTIES (\n           "compression-codec" = "zstd",\n           "write-format" = "parquet"\n       );\nQuery OK, 0 rows affected (0.15 sec)\n')),(0,r.yg)("h3",{id:"04-data-insertion"},"04 Data Insertion"),(0,r.yg)("p",null,"Insert data into the Iceberg table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> INSERT INTO iceberg.nyc.taxis\n       VALUES\n        (1, 1000371, 1.8, 15.32, 'N', '2024-01-01 9:15:23'),\n        (2, 1000372, 2.5, 22.15, 'N', '2024-01-02 12:10:11'),\n        (2, 1000373, 0.9, 9.01, 'N', '2024-01-01 3:25:15'),\n        (1, 1000374, 8.4, 42.13, 'Y', '2024-01-03 7:12:33');\nQuery OK, 4 rows affected (1.61 sec)\n{'status':'COMMITTED', 'txnId':'10085'}\n")),(0,r.yg)("p",null,"Create an Iceberg table using ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE TABLE AS SELECT"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> CREATE TABLE iceberg.nyc.taxis2 AS SELECT * FROM iceberg.nyc.taxis;\nQuery OK, 6 rows affected (0.25 sec)\n{'status':'COMMITTED', 'txnId':'10088'}\n")),(0,r.yg)("h3",{id:"05-data-query"},"05 Data Query"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Simple query"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM iceberg.nyc.taxis;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.37 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis2;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.35 sec)\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Partition pruning"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM iceberg.nyc.taxis where vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02';\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n1 row in set (0.06 sec)\n\nmysql> EXPLAIN VERBOSE SELECT * FROM iceberg.nyc.taxis where vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02';\n                                                                                                                                                             \n....                                                                                                                                                                                  \n|   0:VICEBERG_SCAN_NODE(71)                                                                                                                                                          \n|      table: taxis                                                                                                                                                                   \n|      predicates: (ts[#5] < '2024-01-02 00:00:00'), (vendor_id[#0] = 2), (ts[#5] >= '2024-01-01 00:00:00')                                                                           \n|      inputSplitNum=1, totalFileSize=3539, scanRanges=1                                                                                                                              \n|      partition=1/0                                                                                                                                                                  \n|      backends:                                                                                                                                                                      \n|        10002                                                                                                                                                                        \n|          s3://warehouse/wh/nyc/taxis/data/vendor_id=2/ts_day=2024-01-01/40e6ca404efa4a44-b888f23546d3a69c_5708e229-2f3d-4b68-a66b-44298a9d9815-0.zstd.parquet start: 0 length: 3539 \n|      cardinality=6, numNodes=1                                                                                                                                                      \n|      pushdown agg=NONE                                                                                                                                                              \n|      icebergPredicatePushdown=                                                                                                                                                      \n|           ref(name=\"ts\") < 1704153600000000                                                                                                                                         \n|           ref(name=\"vendor_id\") == 2                                                                                                                                                \n|           ref(name=\"ts\") >= 1704067200000000                                                                                                                                        \n....\n")),(0,r.yg)("p",{parentName:"li"},"By examining the result of the ",(0,r.yg)("inlineCode",{parentName:"p"},"EXPLAIN VERBOSE")," statement, it can be seen that the predicate condition ",(0,r.yg)("inlineCode",{parentName:"p"},"vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02'")," ultimately only hits one partition (",(0,r.yg)("inlineCode",{parentName:"p"},"partition=1/0"),")."),(0,r.yg)("p",{parentName:"li"},"It can also be observed that because a partition Transform function ",(0,r.yg)("inlineCode",{parentName:"p"},"DAY(ts)")," was specified when creating the table, the original value in the data ",(0,r.yg)("inlineCode",{parentName:"p"},"2024-01-01 03:25:15.000000")," will be transformed into the partition information in the file directory ",(0,r.yg)("inlineCode",{parentName:"p"},"ts_day=2024-01-01"),"."))),(0,r.yg)("h3",{id:"06-time-travel"},"06 Time Travel"),(0,r.yg)("p",null,"Let's insert a few more rows of data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO iceberg.nyc.taxis VALUES (1, 1000375, 8.8, 55.55, 'Y', '2024-01-01 8:10:22'), (3, 1000376, 7.4, 32.35, 'N', '2024-01-02  1:14:45');\nQuery OK, 2 rows affected (0.17 sec)\n{'status':'COMMITTED', 'txnId':'10086'}\n\nmysql> SELECT * FROM iceberg.nyc.taxis;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         3 | 1000376 |           7.4 |       32.35 | N                  | 2024-01-02 01:14:45.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         1 | 1000375 |           8.8 |       55.55 | Y                  | 2024-01-01 08:10:22.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n6 rows in set (0.11 sec)\n")),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"iceberg_meta")," table function to query the snapshot information of the table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'mysql> select * from iceberg_meta("table" = "iceberg.nyc.taxis", "query_type" = "snapshots");\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| committed_at        | snapshot_id         | parent_id           | operation | manifest_list                                                                                             | summary                                                                                                                                                                                                                                                        |\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 2024-07-29 03:38:22 | 8483933166442433486 |                  -1 | append    | s3://warehouse/wh/nyc/taxis/metadata/snap-8483933166442433486-1-5f7b7736-8022-4ba1-9db2-51ae7553be4d.avro | {"added-data-files":"4","added-records":"4","added-files-size":"14156","changed-partition-count":"4","total-records":"4","total-files-size":"14156","total-data-files":"4","total-delete-files":"0","total-position-deletes":"0","total-equality-deletes":"0"} |\n| 2024-07-29 03:40:23 | 4726331391239920914 | 8483933166442433486 | append    | s3://warehouse/wh/nyc/taxis/metadata/snap-4726331391239920914-1-6aa3d142-6c9c-4553-9c04-08ad4d49a4ea.avro | {"added-data-files":"2","added-records":"2","added-files-size":"7078","changed-partition-count":"2","total-records":"6","total-files-size":"21234","total-data-files":"6","total-delete-files":"0","total-position-deletes":"0","total-equality-deletes":"0"}  |\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n2 rows in set (0.07 sec)\n')),(0,r.yg)("p",null,"Query a specified snapshot using the ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM iceberg.nyc.taxis FOR VERSION AS OF 8483933166442433486;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.05 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis FOR VERSION AS OF 4726331391239920914;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000375 |           8.8 |       55.55 | Y                  | 2024-01-01 08:10:22.000000 |\n|         3 | 1000376 |           7.4 |       32.35 | N                  | 2024-01-02 01:14:45.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n6 rows in set (0.04 sec)\n")),(0,r.yg)("p",null,"Query a specified snapshot using the ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'mysql> SELECT * FROM iceberg.nyc.taxis FOR TIME AS OF "2024-07-29 03:38:23";\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.04 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis FOR TIME AS OF "2024-07-29 03:40:22";\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.05 sec)\n')))}g.isMDXComponent=!0},763995:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/lakehouse-architecture-for-doris-and-iceberg-f68e6dce7852461952c5bf7ba5efae25.png"}}]);