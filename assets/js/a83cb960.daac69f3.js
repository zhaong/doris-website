"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[216519],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>c});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},o=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=y(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,c=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return a?r.createElement(c,g(g({ref:t},o),{},{components:a})):r.createElement(c,g({ref:t},o))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,g=new Array(l);g[0]=m;var y={};for(var i in t)hasOwnProperty.call(t,i)&&(y[i]=t[i]);y.originalType=e,y[d]="string"==typeof e?e:n,g[1]=y;for(var p=2;p<l;p++)g[p]=a[p];return r.createElement.apply(null,g)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},643353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>g,default:()=>s,frontMatter:()=>l,metadata:()=>y,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const l={title:"JDBC External Table",language:"en"},g=void 0,y={unversionedId:"lakehouse/external-table/jdbc",id:"version-1.2/lakehouse/external-table/jdbc",title:"JDBC External Table",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/lakehouse/external-table/jdbc.md",sourceDirName:"lakehouse/external-table",slug:"/lakehouse/external-table/jdbc",permalink:"/docs/1.2/lakehouse/external-table/jdbc",draft:!1,tags:[],version:"1.2",frontMatter:{title:"JDBC External Table",language:"en"},sidebar:"docs",previous:{title:"Elasticsearch External Table",permalink:"/docs/1.2/lakehouse/external-table/es"},next:{title:"ODBC External Table",permalink:"/docs/1.2/lakehouse/external-table/odbc"}},i={},p=[{value:"Create JDBC External Table in Doris",id:"create-jdbc-external-table-in-doris",level:3},{value:"1. Create JDBC External Table by Creating JDBC_Resource",id:"1-create-jdbc-external-table-by-creating-jdbc_resource",level:4},{value:"Query",id:"query",level:3},{value:"Write Data",id:"write-data",level:3},{value:"Transaction",id:"transaction",level:4},{value:"1.MySQL Test",id:"1mysql-test",level:4},{value:"2.PostgreSQL Test",id:"2postgresql-test",level:4},{value:"3.SQLServer Test",id:"3sqlserver-test",level:4},{value:"4.Oracle Test",id:"4oracle-test",level:4},{value:"5.ClickHouse Test",id:"5clickhouse-test",level:4},{value:"6.Sap Hana Test",id:"6sap-hana-test",level:4},{value:"7.Trino Test",id:"7trino-test",level:4},{value:"8.OceanBase Test",id:"8oceanbase-test",level:4},{value:"Type Mapping",id:"type-mapping",level:2},{value:"MySQL",id:"mysql",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Oracle",id:"oracle",level:3},{value:"SQL server",id:"sql-server",level:3},{value:"ClickHouse",id:"clickhouse",level:3},{value:"SAP HANA",id:"sap-hana",level:3},{value:"Trino",id:"trino",level:3},{value:"OceanBase",id:"oceanbase",level:3},{value:"Q&amp;A",id:"qa",level:2}],o={toc:p},d="wrapper";function s(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"jdbc-external-table"},"JDBC External Table"),(0,n.yg)("admonition",{title:"Tips",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"This feature is supported since the Apache Doris 1.2.2 version")),(0,n.yg)("p",null,"Please use ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/"},"JDBC Catalog")," to access JDBC data sources, this function will no longer be maintained after version 1.2.2."),(0,n.yg)("p",null,"By creating JDBC External Tables, Doris can access external tables via JDBC, the standard database access inferface. This allows Doris to visit various databases without tedious data ingestion, and give full play to its own OLAP capabilities to perform data analysis on external tables:"),(0,n.yg)("p",null,"::tip Tips\nThis feature is supported since the Apache Doris 1.2 version\n:::"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Multiple data sources can be connected to Doris;"),(0,n.yg)("li",{parentName:"ol"},"It enables Join queries across Doris and other data sources and thus allows more complex analysis.")),(0,n.yg)("p",null,"This topic introduces how to use JDBC External Tables in Doris."),(0,n.yg)("h3",{id:"create-jdbc-external-table-in-doris"},"Create JDBC External Table in Doris"),(0,n.yg)("p",null,"See ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE/"},"CREATE TABLE")," for syntax details."),(0,n.yg)("h4",{id:"1-create-jdbc-external-table-by-creating-jdbc_resource"},"1. Create JDBC External Table by Creating JDBC_Resource"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE jdbc_resource\nproperties (\n    "type"="jdbc",\n    "user"="root",\n    "password"="123456",\n    "jdbc_url"="jdbc:mysql://192.168.0.1:3306/test?useCursorFetch=true",\n    "driver_url"="http://IP:port/mysql-connector-java-5.1.47.jar",\n    "driver_class"="com.mysql.jdbc.Driver"\n);\n     \nCREATE EXTERNAL TABLE `baseall_mysql` (\n  `k1` tinyint(4) NULL,\n  `k2` smallint(6) NULL,\n  `k3` int(11) NULL,\n  `k4` bigint(20) NULL,\n  `k5` decimal(9, 3) NULL\n) ENGINE=JDBC\nPROPERTIES (\n"resource" = "jdbc_resource",\n"table" = "baseall",\n"table_type"="mysql"\n);\n')),(0,n.yg)("p",null,"Parameter Description:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"type")),(0,n.yg)("td",{parentName:"tr",align:null},'"jdbc"; required; specifies the type of the Resource')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"user")),(0,n.yg)("td",{parentName:"tr",align:null},"Username for accessing the external database")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"password")),(0,n.yg)("td",{parentName:"tr",align:null},"Password of the user")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"jdbc_url")),(0,n.yg)("td",{parentName:"tr",align:null},'JDBC URL protocol, including the database type, IP address, port number, and database name; Please be aware of the different formats of different database protocols. For example, MySQL: "jdbc:mysql://127.0.0.1:3306/test?useCursorFetch=true".')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"driver_class")),(0,n.yg)("td",{parentName:"tr",align:null},"Class of the driver used to access the external database. For example, to access MySQL data: com.mysql.jdbc.Driver.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"driver_url")),(0,n.yg)("td",{parentName:"tr",align:null},'Driver URL for downloading the Jar file package that is used to access the external database, for example, http://IP:port/mysql-connector-java-5.1.47.jar. For local stand-alone testing, you can put the Jar file package in a local path: "driver_url"="file:///home/disk1/pathTo/mysql-connector-java-5.1.47.jar"; for local multi-machine testing, please ensure the consistency of the paths.')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"resource")),(0,n.yg)("td",{parentName:"tr",align:null},"Name of the Resource that the Doris External Table depends on; should be the same as the name set in Resource creation.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"table")),(0,n.yg)("td",{parentName:"tr",align:null},"Name of the external table to be mapped in Doris")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"table_type")),(0,n.yg)("td",{parentName:"tr",align:null},"The database from which the external table comes, such as mysql, postgresql, sqlserver, and oracle.")))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Note:")),(0,n.yg)("p",{parentName:"blockquote"},"For local testing, please make sure you put the Jar file package in the FE and BE nodes, too.")),(0,n.yg)("version",{since:"1.2.1"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"In Doris 1.2.1 and newer versions, if you have put the driver in the  ",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_drivers"),"  directory of FE/BE, you can simply specify the file name in the driver URL: ",(0,n.yg)("inlineCode",{parentName:"p"},'"driver_url" = "mysql-connector-java-5.1.47.jar"'),", and the system will automatically find the file in the ",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_drivers")," directory."))),(0,n.yg)("h3",{id:"query"},"Query"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"select * from mysql_table where k1 > 1000 and k3 ='term';\n")),(0,n.yg)("p",null,'In some cases, the keywords in the database might be used as the field names. For queries to function normally in these cases, Doris will add escape characters to the field names and tables names in SQL statements based on the rules of different databases, such as (``) for MySQL, ([]) for SQLServer, and ("") for PostgreSQL and Oracle. This might require extra attention on case sensitivity. You can view the query statements sent to these various databases via ',(0,n.yg)("inlineCode",{parentName:"p"},"explain sql"),"."),(0,n.yg)("h3",{id:"write-data"},"Write Data"),(0,n.yg)("p",null,"After creating a JDBC External Table in Doris, you can write data or query results to it using the ",(0,n.yg)("inlineCode",{parentName:"p"},"insert into")," statement. You can also ingest data from one JDBC External Table to another JDBC External Table."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'insert into mysql_table values(1, "doris");\ninsert into mysql_table select * from table;\n')),(0,n.yg)("h4",{id:"transaction"},"Transaction"),(0,n.yg)("p",null,"In Doris, data is written to External Tables in batches. If the ingestion process is interrupted, rollbacks might be required. That's why JDBC External Tables support data writing transactions. You can utilize this feature by setting the session variable: ",(0,n.yg)("inlineCode",{parentName:"p"},"enable_odbc_transcation ")," (ODBC transactions are also controlled by this variable)."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"set enable_odbc_transcation = true; \n")),(0,n.yg)("p",null,"The transaction mechanism ensures the atomicity of data writing to JDBC External Tables, but it reduces performance to a certain extent. You may decide whether to enable transactions based on your own tradeoff."),(0,n.yg)("h4",{id:"1mysql-test"},"1.MySQL Test"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"MySQL Version"),(0,n.yg)("th",{parentName:"tr",align:null},"MySQL JDBC Driver Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"8.0.30"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-connector-java-5.1.47.jar")))),(0,n.yg)("h4",{id:"2postgresql-test"},"2.PostgreSQL Test"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"PostgreSQL Version"),(0,n.yg)("th",{parentName:"tr",align:null},"PostgreSQL JDBC Driver Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"14.5"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql-42.5.0.jar")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE jdbc_pg\nproperties (\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="123456",\n    "jdbc_url"="jdbc:postgresql://127.0.0.1:5442/postgres?currentSchema=doris_test",\n    "driver_url"="http://127.0.0.1:8881/postgresql-42.5.0.jar",\n    "driver_class"="org.postgresql.Driver"\n);\n\nCREATE EXTERNAL TABLE `ext_pg` (\n  `k1` int\n) ENGINE=JDBC\nPROPERTIES (\n    "resource" = "jdbc_pg",\n    "table" = "pg_tbl",\n    "table_type"="postgresql"\n);\n')),(0,n.yg)("h4",{id:"3sqlserver-test"},"3.SQLServer Test"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"SQLServer Version"),(0,n.yg)("th",{parentName:"tr",align:null},"SQLServer JDBC Driver Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"2022"),(0,n.yg)("td",{parentName:"tr",align:null},"mssql-jdbc-11.2.0.jre8.jar")))),(0,n.yg)("h4",{id:"4oracle-test"},"4.Oracle Test"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Oracle Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Oracle JDBC Driver Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"11"),(0,n.yg)("td",{parentName:"tr",align:null},"ojdbc6.jar")))),(0,n.yg)("p",null,"Test information on more versions will be provided in the future."),(0,n.yg)("h4",{id:"5clickhouse-test"},"5.ClickHouse Test"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"ClickHouse Version"),(0,n.yg)("th",{parentName:"tr",align:null},"ClickHouse JDBC Driver Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"22"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse-jdbc-0.3.2-patch11-all.jar")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"22"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse-jdbc-0.4.1-all.jar")))),(0,n.yg)("h4",{id:"6sap-hana-test"},"6.Sap Hana Test"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Sap Hana Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Sap Hana JDBC Driver Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"2.0"),(0,n.yg)("td",{parentName:"tr",align:null},"ngdbc.jar")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE jdbc_hana\nproperties (\n    "type"="jdbc",\n    "user"="SYSTEM",\n    "password"="SAPHANA",\n    "jdbc_url" = "jdbc:sap://localhost:31515/TEST",\n    "driver_url" = "file:///path/to/ngdbc.jar",\n    "driver_class" = "com.sap.db.jdbc.Driver"\n);\n\nCREATE EXTERNAL TABLE `ext_hana` (\n  `k1` int\n) ENGINE=JDBC\nPROPERTIES (\n    "resource" = "jdbc_hana",\n    "table" = "TEST.HANA",\n    "table_type"="sap_hana"\n);\n')),(0,n.yg)("h4",{id:"7trino-test"},"7.Trino Test"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Trino Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Trino JDBC Driver Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"389"),(0,n.yg)("td",{parentName:"tr",align:null},"trino-jdbc-389.jar")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE jdbc_trino\nproperties (\n    "type"="jdbc",\n    "user"="hadoop",\n    "password"="",\n    "jdbc_url" = "jdbc:trino://localhost:8080/hive",\n    "driver_url" = "file:///path/to/trino-jdbc-389.jar",\n    "driver_class" = "io.trino.jdbc.TrinoDriver"\n);\n\nCREATE EXTERNAL TABLE `ext_trino` (\n  `k1` int\n) ENGINE=JDBC\nPROPERTIES (\n    "resource" = "jdbc_trino",\n    "table" = "hive.test",\n    "table_type"="trino"\n);\n')),(0,n.yg)("h4",{id:"8oceanbase-test"},"8.OceanBase Test"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"OceanBase Version"),(0,n.yg)("th",{parentName:"tr",align:null},"OceanBase JDBC Driver Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"3.2.3"),(0,n.yg)("td",{parentName:"tr",align:null},"oceanbase-client-2.4.2.jar")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE jdbc_oceanbase\nproperties (\n    "type"="jdbc",\n    "user"="root",\n    "password"="",\n    "jdbc_url" = "jdbc:oceanbase://localhost:2881/test",\n    "driver_url" = "file:///path/to/oceanbase-client-2.4.2.jar",\n    "driver_class" = "com.oceanbase.jdbc.Driver",\n    "oceanbase_mode" = "mysql" or "oracle"\n);\n\nCREATE EXTERNAL TABLE `ext_oceanbase` (\n  `k1` int\n) ENGINE=JDBC\nPROPERTIES (\n    "resource" = "jdbc_oceanbase",\n    "table" = "test.test",\n    "table_type"="oceanbase"\n);\n')),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Note:")),(0,n.yg)("p",{parentName:"blockquote"},"When creating an OceanBase external table, you only need to specify the ",(0,n.yg)("inlineCode",{parentName:"p"},"oceanbase mode")," parameter when creating a resource, and the table type of the table to be created is oceanbase")),(0,n.yg)("h2",{id:"type-mapping"},"Type Mapping"),(0,n.yg)("p",null,"The followings list how data types in different databases are mapped in Doris."),(0,n.yg)("h3",{id:"mysql"},"MySQL"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"MySQL"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BIT(1)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TINYINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"INT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"INT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT UNSIGNED"),(0,n.yg)("td",{parentName:"tr",align:"center"},"LARGEINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL")))),(0,n.yg)("h3",{id:"postgresql"},"PostgreSQL"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"PostgreSQL"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"INT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"INT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"TIMESTAMP"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL")))),(0,n.yg)("h3",{id:"oracle"},"Oracle"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Oracle"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"INT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"INT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL")))),(0,n.yg)("h3",{id:"sql-server"},"SQL server"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"SQLServer"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BIT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TINYINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"INT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"INT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL")))),(0,n.yg)("h3",{id:"clickhouse"},"ClickHouse"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"ClickHouse"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Boolean"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"String"),(0,n.yg)("td",{parentName:"tr",align:"center"},"STRING")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Date/Date32"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE/DATEV2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DateTime/DateTime64"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME/DATETIMEV2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Float32"),(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Float64"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Int8"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TINYINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Int16/UInt8"),(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Int32/UInt16"),(0,n.yg)("td",{parentName:"tr",align:"center"},"INT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Int64/Uint32"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Int128/UInt64"),(0,n.yg)("td",{parentName:"tr",align:"center"},"LARGEINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Int256/UInt128/UInt256"),(0,n.yg)("td",{parentName:"tr",align:"center"},"STRING")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Decimal"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL/DECIMALV3/STRING")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Enum/IPv4/IPv6/UUID"),(0,n.yg)("td",{parentName:"tr",align:"center"},"STRING")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Array(T)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"ARRAY\\<T",">")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"For Array types in ClickHouse, use Doris's Array type to match them. For basic types in an Array, see Basic type matching rules. Nested arrays are not supported. "),(0,n.yg)("li",{parentName:"ul"},"Some data types in ClickHouse, such as UUID, IPv4, IPv6, and Enum8, will be mapped to Varchar/String in Doris. IPv4 and IPv6 will be displayed with an ",(0,n.yg)("inlineCode",{parentName:"li"},"/")," as a prefix. You can use the ",(0,n.yg)("inlineCode",{parentName:"li"},"split_part")," function to remove the ",(0,n.yg)("inlineCode",{parentName:"li"},"/")," ."),(0,n.yg)("li",{parentName:"ul"},"The Point Geo type in ClickHouse cannot be mapped in Doris by far. ")),(0,n.yg)("h3",{id:"sap-hana"},"SAP HANA"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"SAP_HANA"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TINYINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"INTERGER"),(0,n.yg)("td",{parentName:"tr",align:"center"},"INT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLDECIMAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL/DECIMALV3")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL/DECIMALV3")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE/DATEV2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"TIME"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TEXT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"TIMESTAMP"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME/DATETIMEV2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"SECONDDATE"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME/DATETIMEV2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TEXT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"NVARCHAR"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TEXT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"ALPHANUM"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TEXT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"SHORTTEXT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TEXT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.yg)("td",{parentName:"tr",align:"center"},"CHAR")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"NCHAR"),(0,n.yg)("td",{parentName:"tr",align:"center"},"CHAR")))),(0,n.yg)("h3",{id:"trino"},"Trino"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Trino"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"tinyint"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TINYINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"smallint"),(0,n.yg)("td",{parentName:"tr",align:"center"},"SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"integer"),(0,n.yg)("td",{parentName:"tr",align:"center"},"INT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"bigint"),(0,n.yg)("td",{parentName:"tr",align:"center"},"BIGINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"decimal"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DECIMAL/DECIMALV3")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"real"),(0,n.yg)("td",{parentName:"tr",align:"center"},"FLOAT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"double"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DOUBLE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"date"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATE/DATEV2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"timestamp"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DATETIME/DATETIMEV2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"varchar"),(0,n.yg)("td",{parentName:"tr",align:"center"},"TEXT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"char"),(0,n.yg)("td",{parentName:"tr",align:"center"},"CHAR")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"array"),(0,n.yg)("td",{parentName:"tr",align:"center"},"ARRAY")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"others"),(0,n.yg)("td",{parentName:"tr",align:"center"},"UNSUPPORTED")))),(0,n.yg)("h3",{id:"oceanbase"},"OceanBase"),(0,n.yg)("p",null,"For MySQL mode, please refer to ",(0,n.yg)("a",{parentName:"p",href:"#MySQL"},"MySQL type mapping"),"\nFor Oracle mode, please refer to ",(0,n.yg)("a",{parentName:"p",href:"#Oracle"},"Oracle type mapping")),(0,n.yg)("h2",{id:"qa"},"Q&A"),(0,n.yg)("p",null,"See the FAQ section in ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/"},"JDBC"),"."))}s.isMDXComponent=!0}}]);