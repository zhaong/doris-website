"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[288402],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,y=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return t?a.createElement(y,s(s({ref:n},m),{},{components:t})):a.createElement(y,s({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},621451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const i={title:"VARIANT",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-data-types/semi-structured/VARIANT",id:"version-3.0/sql-manual/sql-data-types/semi-structured/VARIANT",title:"VARIANT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-data-types/semi-structured/VARIANT.md",sourceDirName:"sql-manual/sql-data-types/semi-structured",slug:"/sql-manual/sql-data-types/semi-structured/VARIANT",permalink:"/docs/3.0/sql-manual/sql-data-types/semi-structured/VARIANT",draft:!1,tags:[],version:"3.0",frontMatter:{title:"VARIANT",language:"en"},sidebar:"docs",previous:{title:"JSON",permalink:"/docs/3.0/sql-manual/sql-data-types/semi-structured/JSON"},next:{title:"HLL (HyperLogLog)",permalink:"/docs/3.0/sql-manual/sql-data-types/aggregate/HLL"}},l={},p=[{value:"VARIANT",id:"variant",level:2},{value:"Description",id:"description",level:3},{value:"Note",id:"note",level:3},{value:"Example",id:"example",level:3},{value:"Nested Array",id:"nested-array",level:3},{value:"Usage Restrictions and Best Practices",id:"usage-restrictions-and-best-practices",level:3},{value:"FAQ",id:"faq",level:3},{value:"Keywords",id:"keywords",level:3}],m={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"variant"},"VARIANT"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Introduced a new data type VARIANT in Doris 2.1, which can store semi-structured JSON data. It allows storing complex data structures containing different data types (such as integers, strings, boolean values, etc.) without the need to define specific columns in the table structure beforehand. The VARIANT type is particularly useful for handling complex nested structures that may change at any time. During the writing process, this type can automatically infer column information based on the structure and types of the columns, dynamicly merge written schemas. It stores JSON keys and their corresponding values as columns and dynamic sub-columns."),(0,r.yg)("h3",{id:"note"},"Note"),(0,r.yg)("p",null,"Advantages over JSON Type:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Different storage methods: The JSON type is stored in binary JSONB format, and the entire JSON is stored row by row in segment files. In contrast, the VARIANT type infers types during writing and stores the written JSON columns. It has a higher compression ratio compared to the JSON type, providing better storage efficiency."),(0,r.yg)("li",{parentName:"ol"},"Query: Querying does not require parsing. VARIANT fully utilizes columnar storage, vectorized engines, optimizers, and other components in Doris, providing users with extremely high query performance.\nBelow are test results based on clickbench data:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"Storage Space"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Predefined Static Columns"),(0,r.yg)("td",{parentName:"tr",align:null},"12.618 GB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARIANT Type"),(0,r.yg)("td",{parentName:"tr",align:null},"12.718 GB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON Type"),(0,r.yg)("td",{parentName:"tr",align:null},"35.711 GB")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Saves approximately 65% storage capacity")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query Counts"),(0,r.yg)("th",{parentName:"tr",align:null},"Predefined Static Columns"),(0,r.yg)("th",{parentName:"tr",align:null},"VARIANT Type"),(0,r.yg)("th",{parentName:"tr",align:null},"JSON Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"First Query (cold)"),(0,r.yg)("td",{parentName:"tr",align:null},"233.79s"),(0,r.yg)("td",{parentName:"tr",align:null},"248.66s"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Most queries timeout"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Second Query (hot)"),(0,r.yg)("td",{parentName:"tr",align:null},"86.02s"),(0,r.yg)("td",{parentName:"tr",align:null},"94.82s"),(0,r.yg)("td",{parentName:"tr",align:null},"789.24s")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Third Query (hot)"),(0,r.yg)("td",{parentName:"tr",align:null},"83.03s"),(0,r.yg)("td",{parentName:"tr",align:null},"92.29s"),(0,r.yg)("td",{parentName:"tr",align:null},"743.69s")))),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickBench/blob/main/doris/queries.sql"},"test case")," contains 43 queries "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"8x faster query, query performance comparable to static columns")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Demonstrate the functionality and usage of VARIANT with an example covering table creation, data import, and query cycle."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Table Creation Syntax"),"\nCreate a table, using the ",(0,r.yg)("inlineCode",{parentName:"p"},"VARIANT")," keyword in the syntax."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- Without index\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\ntable_properties;\n\n-- Create an index on the v column, optionally specify the tokenize method, default is untokenized \nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT,\n    INDEX idx_var(v) USING INVERTED [PROPERTIES("parser" = "english|unicode|chinese")] [COMMENT \'your comment\']\n)\ntable_properties;\n\n-- Create an bloom filter on v column, to enhance query seed on sub columns\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\n...\nproperties("replication_num" = "1", "bloom_filter_columns" = "v");\n\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Query Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- use v['a']['b'] format for example, v['properties']['title'] type is VARIANT\nSELECT v['properties']['title'] from ${table_name}\n\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example based on the GitHub events dataset")),(0,r.yg)("p",null,"Here, github events data is used to demonstrate the table creation, data import, and query using VARIANT.\nThe below is a formatted line of data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "14186154924",\n  "type": "PushEvent",\n  "actor": {\n    "id": 282080,\n    "login": "brianchandotcom",\n    "display_login": "brianchandotcom",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/brianchandotcom",\n    "avatar_url": "https://avatars.githubusercontent.com/u/282080?"\n  },\n  "repo": {\n    "id": 1920851,\n    "name": "brianchandotcom/liferay-portal",\n    "url": "https://api.github.com/repos/brianchandotcom/liferay-portal"\n  },\n  "payload": {\n    "push_id": 6027092734,\n    "size": 4,\n    "distinct_size": 4,\n    "ref": "refs/heads/master",\n    "head": "91edd3c8c98c214155191feb852831ec535580ba",\n    "before": "abb58cc0db673a0bd5190000d2ff9c53bb51d04d",\n    "commits": [""]\n  },\n  "public": true,\n  "created_at": "2020-11-13T18:00:00Z"\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Table Creation")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Created three columns of VARIANT type: ",(0,r.yg)("inlineCode",{parentName:"li"},"actor"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"repo"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"payload"),"."),(0,r.yg)("li",{parentName:"ul"},"Simultaneously created an inverted index, ",(0,r.yg)("inlineCode",{parentName:"li"},"idx_payload"),", for the ",(0,r.yg)("inlineCode",{parentName:"li"},"payload")," column while creating the table."),(0,r.yg)("li",{parentName:"ul"},"Specified the index type as inverted using ",(0,r.yg)("inlineCode",{parentName:"li"},"USING INVERTED"),", aimed at accelerating conditional filtering of sub-columns."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'PROPERTIES("parser" = "english")')," specified the adoption of English tokenization.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE test_variant;\nUSE test_variant;\nCREATE TABLE IF NOT EXISTS github_events (\n    id BIGINT NOT NULL,\n    type VARCHAR(30) NULL,\n    actor VARIANT NULL,\n    repo VARIANT NULL,\n    payload VARIANT NULL,\n    public BOOLEAN NULL,\n    created_at DATETIME NULL,\n    INDEX idx_payload (`payload`) USING INVERTED PROPERTIES("parser" = "english") COMMENT \'inverted index for payload\'\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nproperties("replication_num" = "1");\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"Creating an index on VARIANT columns, such as when there are numerous sub-columns in payload, might lead to an excessive number of index columns, impacting write performance."),(0,r.yg)("li",{parentName:"ol"},"The tokenization properties for the same VARIANT column are uniform. If you have varied tokenization requirements, consider creating multiple VARIANT columns and specifying index properties separately for each."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Using Streamload for Import")),(0,r.yg)("p",null,"Importing gh_2022-11-07-3.json, which contains one hour's worth of GitHub events data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'wget https://qa-build.oss-cn-beijing.aliyuncs.com/regression/variant/gh_2022-11-07-3.json\n\ncurl --location-trusted -u root:  -T gh_2022-11-07-3.json -H "read_json_by_line:true" -H "format:json"  http://127.0.0.1:18148/api/test_variant/github_events/_strea\nm_load\n\n{\n    "TxnId": 2,\n    "Label": "086fd46a-20e6-4487-becc-9b6ca80281bf",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 139325,\n    "NumberLoadedRows": 139325,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 633782875,\n    "LoadTimeMs": 7870,\n    "BeginTxnTimeMs": 19,\n    "StreamLoadPutTimeMs": 162,\n    "ReadDataTimeMs": 2416,\n    "WriteDataTimeMs": 7634,\n    "CommitAndPublishTimeMs": 55\n}\n')),(0,r.yg)("p",null,"Confirm the successful import."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- View the number of rows.\nmysql> select count() from github_events;\n+----------+\n| count(*) |\n+----------+\n|   139325 |\n+----------+\n1 row in set (0.25 sec)\n\n-- Random select one row\nmysql> select * from github_events limit 1;\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| id          | type      | actor                                                                                                                                                                                                                       | repo                                                                                                                                                     | payload                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | public | created_at          |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| 25061821748 | PushEvent | {"gravatar_id":"","display_login":"jfrog-pipelie-intg","url":"https://api.github.com/users/jfrog-pipelie-intg","id":98024358,"login":"jfrog-pipelie-intg","avatar_url":"https://avatars.githubusercontent.com/u/98024358?"} | {"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16","id":562683829,"name":"jfrog-pipelie-intg/jfinte2e_1667789956723_16"} | {"commits":[{"sha":"334433de436baa198024ef9f55f0647721bcd750","author":{"email":"98024358+jfrog-pipelie-intg@users.noreply.github.com","name":"jfrog-pipelie-intg"},"message":"commit message 10238493157623136117","distinct":true,"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16/commits/334433de436baa198024ef9f55f0647721bcd750"}],"before":"f84a26792f44d54305ddd41b7e3a79d25b1a9568","head":"334433de436baa198024ef9f55f0647721bcd750","size":1,"push_id":11572649828,"ref":"refs/heads/test-notification-sent-branch-10238493157623136113","distinct_size":1} |      1 | 2022-11-07 11:00:00 |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n1 row in set (0.23 sec)\n')),(0,r.yg)("p",null,"Running desc command to view schema information, sub-columns will automatically expand at the storage layer and undergo type inference."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| public                                                     | BOOLEAN    | Yes  | false | NULL    | NONE  |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n6 rows in set (0.07 sec)\n\nmysql> set describe_extend_variant_column = true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| actor.avatar_url                                           | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.display_login                                        | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.id                                                   | INT        | Yes  | false | NULL    | NONE  |\n| actor.login                                                | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.url                                                  | TEXT       | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| payload.action                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.before                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.author_association                         | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.body                                       | TEXT       | Yes  | false | NULL    | NONE  |\n....\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n406 rows in set (0.07 sec)\n")),(0,r.yg)("p",null,"DESC can be used to specify partition and view the schema of a particular partition. The syntax is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE ${table_name} PARTITION ($partition_name);\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Querying")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"When utilizing filtering and aggregation functionalities to query sub-columns, additional casting operations need to be performed on sub-columns (because the storage types are not necessarily fixed and require a unified SQL type).\nFor instance, ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT * FROM tbl where CAST(var['titile'] as text) MATCH \"hello world\""),"\nThe simplified examples below illustrate how to use VARIANT for querying:\nThe following are three typical query scenarios")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Retrieve the top 5 repositories based on star count from the ",(0,r.yg)("inlineCode",{parentName:"li"},"github_events")," table.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT\n    ->     cast(repo['name'] as text) as repo_name, count() AS stars\n    -> FROM github_events\n    -> WHERE type = 'WatchEvent'\n    -> GROUP BY repo_name\n    -> ORDER BY stars DESC LIMIT 5;\n+--------------------------+-------+\n| repo_name                | stars |\n+--------------------------+-------+\n| aplus-framework/app      |    78 |\n| lensterxyz/lenster       |    77 |\n| aplus-framework/database |    46 |\n| stashapp/stash           |    42 |\n| aplus-framework/image    |    34 |\n+--------------------------+-------+\n5 rows in set (0.03 sec)\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'Retrieve the count of comments containing "doris".')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- implicit cast `payload['comment']['body']` to string type\nmysql> SELECT\n    ->     count() FROM github_events\n    ->     WHERE payload['comment']['body'] MATCH 'doris';\n+---------+\n| count() |\n+---------+\n|       3 |\n+---------+\n1 row in set (0.04 sec)\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Query the issue number with the highest number of comments along with its corresponding repository.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT \n    ->   cast(repo['name'] as string) as repo_name, \n    ->   cast(payload['issue']['number'] as int) as issue_number, \n    ->   count() AS comments, \n    ->   count(\n    ->     distinct cast(actor['login'] as string)\n    ->   ) AS authors \n    -> FROM  github_events \n    -> WHERE type = 'IssueCommentEvent' AND (cast(payload[\"action\"] as string) = 'created') AND (cast(payload[\"issue\"][\"number\"] as int) > 10) \n    -> GROUP BY repo_name, issue_number \n    -> HAVING authors >= 4\n    -> ORDER BY comments DESC, repo_name \n    -> LIMIT 50;\n+--------------------------------------+--------------+----------+---------+\n| repo_name                            | issue_number | comments | authors |\n+--------------------------------------+--------------+----------+---------+\n| facebook/react-native                |        35228 |        5 |       4 |\n| swsnu/swppfall2022-team4             |           27 |        5 |       4 |\n| belgattitude/nextjs-monorepo-example |         2865 |        4 |       4 |\n+--------------------------------------+--------------+----------+---------+\n3 rows in set (0.03 sec)\n")),(0,r.yg)("h3",{id:"nested-array"},"Nested Array"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "nested" : [{"field1" : 123, "field11" : "123"}, {"field2" : 456, "field22" : "456"}]\n}\n')),(0,r.yg)("p",null,"In the JSON example above, the array nested contains objects (or nested data types). It\u2019s important to note that only one level of array expansion is currently supported. If a Variant type subfield contains a nested array, its expansion behavior will be different. Here is an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- Note: Set variant_enable_flatten_nested to true\n-- This setting enables nested array expansion, allowing array<object> elements to be stored in columnar format.\n-- If set to false, nested arrays will be stored as JSON types.\nCREATE TABLE `simple_nested_test` (\n  `k` bigint NULL,\n  `v` variant NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k`)\nDISTRIBUTED BY HASH(`k`) BUCKETS 8\nPROPERTIES (\n"file_cache_ttl_seconds" = "0",\n"is_being_synced" = "false",\n"storage_medium" = "hdd",\n"storage_format" = "V2",\n"inverted_index_storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false",\n"variant_enable_flatten_nested" = "true",\n"enable_single_replica_compaction" = "false",\n"group_commit_interval_ms" = "10000",\n"group_commit_data_bytes" = "134217728"\n);\n\ninsert into simple_nested_test values(1, \'{\n  "eventId": 1,\n  "firstName": "Name1",\n  "lastName": "Eric",\n  "body": {\n    "phoneNumbers": [\n      {\n        "number": "1111111111",\n        "type": "GSM",\n        "callLimit": 5\n      },\n      {\n        "number": "222222222",\n        "type": "HOME",\n        "callLimit": 3\n      },\n      {\n        "number": "33333333",\n        "callLimit": 2,\n        "type": "WORK"\n      }\n    ]\n  }\n}\');\n\n-- Enable extended column descriptions\nset describe_extend_variant_column = true;  \n\n-- The DESC command will display expanded columns such as v.body.phoneNumbers.callLimit, v.body.phoneNumbers.number, and v.body.phoneNumbers.type\n-- These fields are expanded from v.body.phoneNumbers\nmysql> desc simple_nested_test;\n+-------------------------------+----------------+------+-------+---------+-------+\n| Field                         | Type           | Null | Key   | Default | Extra |\n+-------------------------------+----------------+------+-------+---------+-------+\n| k                             | bigint         | Yes  | true  | NULL    |       |\n| v                             | variant        | Yes  | false | NULL    | NONE  |\n| v.body.phoneNumbers.callLimit | array<tinyint> | Yes  | false | NULL    | NONE  |\n| v.body.phoneNumbers.number    | array<text>    | Yes  | false | NULL    | NONE  |\n| v.body.phoneNumbers.type      | array<text>    | Yes  | false | NULL    | NONE  |\n| v.eventId                     | tinyint        | Yes  | false | NULL    | NONE  |\n| v.firstName                   | text           | Yes  | false | NULL    | NONE  |\n| v.lastName                    | text           | Yes  | false | NULL    | NONE  |\n+-------------------------------+----------------+------+-------+---------+-------+\n8 rows in set (0.00 sec)\n\n-- Use lateral view (explode_variant_array) to expand arrays and query phone numbers and event IDs that meet specific criteria\nmysql> select v[\'eventId\'], phone_numbers\n    from simple_nested_test lateral view explode_variant_array(v[\'body\'][\'phoneNumbers\']) tmp1 as phone_numbers\n    where phone_numbers[\'type\'] = \'GSM\' OR phone_numbers[\'type\'] = \'HOME\' and phone_numbers[\'callLimit\'] > 2;                                                                                                               \n+--------------------------+----------------------------------------------------+\n| element_at(v, \'eventId\') | phone_numbers                                      |\n+--------------------------+----------------------------------------------------+\n| 1                        | {"callLimit":5,"number":"1111111111","type":"GSM"} |\n| 1                        | {"callLimit":3,"number":"222222222","type":"HOME"} |\n+--------------------------+----------------------------------------------------+\n2 rows in set (0.02 sec)\n')),(0,r.yg)("h3",{id:"usage-restrictions-and-best-practices"},"Usage Restrictions and Best Practices"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"There are several limitations when using the VARIANT type:"),"\nDynamic columns of VARIANT are nearly as efficient as predefined static columns. When dealing with data like logs, where fields are often added dynamically (such as container labels in Kubernetes), parsing JSON and inferring types can generate additional costs during write operations. Therefore, it's recommended to keep the number of columns for a single import below 1000."),(0,r.yg)("p",null,"Ensure consistency in types whenever possible. Doris automatically performs compatible type conversions. When a field cannot undergo compatible type conversion, it is uniformly converted to JSONB type. The performance of JSONB columns may degrade compared to columns like int or text."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"tinyint -> smallint -> int -> bigint, integer types can be promoted following the direction of the arrows."),(0,r.yg)("li",{parentName:"ol"},"float -> double, floating-point numbers can be promoted following the direction of the arrow."),(0,r.yg)("li",{parentName:"ol"},"text, string type."),(0,r.yg)("li",{parentName:"ol"},"JSON, binary JSON type.")),(0,r.yg)("p",null,"When the above types cannot be compatible, they will be transformed into JSON type to prevent loss of type information. If you need to set a strict schema in VARIANT, the VARIANT MAPPING mechanism will be introduced soon."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Other limitations include:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"VARIANT columns can only create inverted indexes or bloom filter to speed up query."),(0,r.yg)("li",{parentName:"ul"},"Using the ",(0,r.yg)("strong",{parentName:"li"},"RANDOM")," mode or ",(0,r.yg)("a",{parentName:"li",href:"/docs/data-operate/import/group-commit-manual.md"},"group commit")," mode is recommended for higher write performance."),(0,r.yg)("li",{parentName:"ul"},"Non-standard JSON types such as date and decimal should ideally use static types for better performance, since these types are infered to text type."),(0,r.yg)("li",{parentName:"ul"},"Arrays with dimensions of 2 or higher will be stored as JSONB encoding, which might perform less efficiently than native arrays."),(0,r.yg)("li",{parentName:"ul"},"Not supported as primary or sort keys."),(0,r.yg)("li",{parentName:"ul"},"Queries with filters or aggregations require casting. The storage layer eliminates cast operations based on storage type and the target type of the cast, speeding up queries. ")),(0,r.yg)("h3",{id:"faq"},"FAQ"),(0,r.yg)("p",null,"1.Streamload Error: ","[CANCELLED][INTERNAL_ERROR]"," tablet error: ","[DATA_QUALITY_ERROR]"," Reached max column size limit 2048.\nDue to compaction and metadata storage limitations, the VARIANT type imposes a limit on the number of columns, with the default being 2048 columns. You can adjust the BE configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"variant_max_merged_tablet_schema_size")," accordingly, but it is not recommended to exceed 4096 columns."),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"VARIANT\n")))}d.isMDXComponent=!0}}]);