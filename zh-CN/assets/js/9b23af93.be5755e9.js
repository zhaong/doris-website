"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[596474],{15680:(n,e,a)=>{a.d(e,{xA:()=>u,yg:()=>c});var t=a(296540);function l(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function o(n,e){if(null==n)return{};var a,t,l=function(n,e){if(null==n)return{};var a,t,l={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(l[a]=n[a]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(l[a]=n[a])}return l}var p=t.createContext({}),s=function(n){var e=t.useContext(p),a=e;return n&&(a="function"==typeof n?n(e):i(i({},e),n)),a},u=function(n){var e=s(n.components);return t.createElement(p.Provider,{value:e},n.children)},N="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},T=t.forwardRef((function(n,e){var a=n.components,l=n.mdxType,r=n.originalType,p=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),N=s(a),T=l,c=N["".concat(p,".").concat(T)]||N[T]||g[T]||r;return a?t.createElement(c,i(i({ref:e},u),{},{components:a})):t.createElement(c,i({ref:e},u))}));function c(n,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=a.length,i=new Array(r);i[0]=T;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o[N]="string"==typeof n?n:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}T.displayName="MDXCreateElement"},250001:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=a(58168),l=(a(296540),a(15680));const r={title:"\u624b\u52a8\u5206\u533a",language:"zh-CN"},i=void 0,o={unversionedId:"table-design/data-partitioning/manual-partitioning",id:"version-3.0/table-design/data-partitioning/manual-partitioning",title:"\u624b\u52a8\u5206\u533a",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/table-design/data-partitioning/manual-partitioning.md",sourceDirName:"table-design/data-partitioning",slug:"/table-design/data-partitioning/manual-partitioning",permalink:"/zh-CN/docs/3.0/table-design/data-partitioning/manual-partitioning",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u624b\u52a8\u5206\u533a",language:"zh-CN"},sidebar:"docs",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh-CN/docs/3.0/table-design/data-partitioning/basic-concepts"},next:{title:"\u52a8\u6001\u5206\u533a",permalink:"/zh-CN/docs/3.0/table-design/data-partitioning/dynamic-partitioning"}},p={},s=[{value:"\u5206\u533a\u5217",id:"\u5206\u533a\u5217",level:2},{value:"Range \u5206\u533a",id:"range-\u5206\u533a",level:2},{value:"List \u5206\u533a",id:"list-\u5206\u533a",level:2},{value:"NULL \u5206\u533a",id:"null-\u5206\u533a",level:2}],u={toc:s},N="wrapper";function g(n){let{components:e,...a}=n;return(0,l.yg)(N,(0,t.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u5206\u533a\u5217"},"\u5206\u533a\u5217"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5206\u533a\u5217\u53ef\u4ee5\u6307\u5b9a\u4e00\u5217\u6216\u591a\u5217\uff0c\u5206\u533a\u5217\u5fc5\u987b\u4e3a KEY \u5217\u3002\u591a\u5217\u5206\u533a\u7684\u4f7f\u7528\u65b9\u5f0f\u5728\u540e\u9762\u591a\u5217\u5206\u533a\u5c0f\u7ed3\u4ecb\u7ecd\u3002"),(0,l.yg)("li",{parentName:"ul"},"PARTITION \u5217\u9ed8\u8ba4\u5fc5\u987b\u4e3a NOT NULL \u5217\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528 NULL \u5217\uff0c\u5e94\u8bbe\u7f6e session variable ",(0,l.yg)("inlineCode",{parentName:"li"},"allow_partition_column_nullable = true"),"\u3002\u5bf9\u4e8e LIST PARTITION\uff0c\u652f\u6301\u771f\u6b63\u7684 NULL \u5206\u533a\u3002\u5bf9\u4e8e RANGE PARTITION\uff0cNULL \u503c\u4f1a\u88ab\u5212\u5f52",(0,l.yg)("strong",{parentName:"li"},"\u6700\u5c0f\u7684 LESS THAN \u5206\u533a"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4e0d\u8bba\u5206\u533a\u5217\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u5728\u5199\u5206\u533a\u503c\u65f6\uff0c\u90fd\u9700\u8981\u52a0\u53cc\u5f15\u53f7\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5206\u533a\u6570\u91cf\u7406\u8bba\u4e0a\u6ca1\u6709\u4e0a\u9650\u3002\u4f46\u9ed8\u8ba4\u9650\u5236\u6bcf\u5f20\u8868 4096 \u4e2a\u5206\u533a\uff0c\u5982\u679c\u60f3\u7a81\u7834\u8fd9\u4e2a\u9650\u5236\uff0c\u53ef\u4ee5\u4fee\u6539 FE \u914d\u7f6e",(0,l.yg)("inlineCode",{parentName:"li"},"max_multi_partition_num"),"\u548c",(0,l.yg)("inlineCode",{parentName:"li"},"max_dynamic_partition_num "),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5f53\u4e0d\u4f7f\u7528\u5206\u533a\u5efa\u8868\u65f6\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u548c\u8868\u540d\u540c\u540d\u7684\uff0c\u5168\u503c\u8303\u56f4\u7684\u5206\u533a\u3002\u8be5\u5206\u533a\u5bf9\u7528\u6237\u4e0d\u53ef\u89c1\uff0c\u5e76\u4e14\u4e0d\u53ef\u5220\u6539\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u521b\u5efa\u5206\u533a\u65f6\u4e0d\u53ef\u6dfb\u52a0\u8303\u56f4\u91cd\u53e0\u7684\u5206\u533a\u3002")),(0,l.yg)("h2",{id:"range-\u5206\u533a"},"Range \u5206\u533a"),(0,l.yg)("p",null,"\u5206\u533a\u5217\u901a\u5e38\u4e3a\u65f6\u95f4\u5217\uff0c\u4ee5\u65b9\u4fbf\u7684\u7ba1\u7406\u65b0\u65e7\u6570\u636e\u3002Range \u5206\u533a\u652f\u6301\u7684\u5217\u7c7b\u578b DATE,  DATETIME, TINYINT, SMALLINT, INT, BIGINT, LARGEINT\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5206\u533a\u4fe1\u606f\uff0c\u652f\u6301\u56db\u79cd\u5199\u6cd5\uff1a"),"            "),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"FIXED RANGE\uff1a\u5b9a\u4e49\u5206\u533a\u7684\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\u3002  ")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'PARTITION BY RANGE(col1[, col2, ...])                                                                                                                                                                                                  \n(                                                                                                                                                                                                                                      \n    PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ...)),                                                                                                      \n    PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, ))                                                                                                                                \n)                                                                                                                                                                                                                                      \n')),(0,l.yg)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'PARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES [("2017-01-01"),  ("2017-02-01")),\n    PARTITION `p201702` VALUES [("2017-02-01"), ("2017-03-01")),\n    PARTITION `p201703` VALUES [("2017-03-01"), ("2017-04-01"))\n)\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"LESS THAN\uff1a\u4ec5\u5b9a\u4e49\u5206\u533a\u4e0a\u754c\u3002\u4e0b\u754c\u7531\u4e0a\u4e00\u4e2a\u5206\u533a\u7684\u4e0a\u754c\u51b3\u5b9a\u3002 ")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'PARTITION BY RANGE(col1[, col2, ...])                                                                                                                                                                                                  \n(                                                                                                                                                                                                                                      \n    PARTITION partition_name1 VALUES LESS THAN MAXVALUE | ("value1", "value2", ...),                                                                                                                                                     \n    PARTITION partition_name2 VALUES LESS THAN MAXVALUE | ("value1", "value2", ...)                                                                                                                                                      \n)                                                                                                                                                                                                                                      \n')),(0,l.yg)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'PARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES LESS THAN ("2017-02-01"),\n    PARTITION `p201702` VALUES LESS THAN ("2017-03-01"),\n    PARTITION `p201703` VALUES LESS THAN ("2017-04-01"),\n    PARTITION `p2018` VALUES [("2018-01-01"), ("2019-01-01")),\n    PARTITION `other` VALUES LESS THAN (MAXVALUE)\n)\n')),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"BATCH RANGE\uff1a\u6279\u91cf\u521b\u5efa\u6570\u5b57\u7c7b\u578b\u548c\u65f6\u95f4\u7c7b\u578b\u7684 RANGE \u5206\u533a\uff0c\u5b9a\u4e49\u5206\u533a\u7684\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\uff0c\u8bbe\u5b9a\u6b65\u957f\u3002 ")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'PARTITION BY RANGE(int_col)                                                                                                                                                                                                            \n(                                                                                                                                                                                                                                      \n    FROM (start_num) TO (end_num) INTERVAL interval_value                                                                                                                                                                                                   \n)\n\nPARTITION BY RANGE(date_col)                                                                                                                                                                                                            \n(                                                                                                                                                                                                                                      \n    FROM ("start_date") TO ("end_date") INTERVAL num YEAR | num MONTH | num WEEK | num DAY \uff5c 1 HOUR                                                                                                                                                                                                   \n)                                                                                                                                                                                                                                    \n')),(0,l.yg)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'PARTITION BY RANGE(age)\n(\n    FROM (1) TO (100) INTERVAL 10\n)\n\nPARTITION BY RANGE(`date`)\n(\n    FROM ("2000-11-14") TO ("2021-11-14") INTERVAL 2 YEAR\n)\n')),(0,l.yg)("p",null,"4.MULTI RANGE\uff1a\u6279\u91cf\u521b\u5efa RANGE \u5206\u533a\uff0c\u5b9a\u4e49\u5206\u533a\u7684\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'PARTITION BY RANGE(col)                                                                                                                                                                                                                \n(                                                                                                                                                                                                                                      \n   FROM ("2000-11-14") TO ("2021-11-14") INTERVAL 1 YEAR,                                                                                                                                                                              \n   FROM ("2021-11-14") TO ("2022-11-14") INTERVAL 1 MONTH,                                                                                                                                                                             \n   FROM ("2022-11-14") TO ("2023-01-03") INTERVAL 1 WEEK,                                                                                                                                                                              \n   FROM ("2023-01-03") TO ("2023-01-14") INTERVAL 1 DAY,\n   PARTITION p_20230114 VALUES [(\'2023-01-14\'), (\'2023-01-15\'))                                                                                                                                                                                \n)                                                                                                                                                                                                                                      \n')),(0,l.yg)("h2",{id:"list-\u5206\u533a"},"List \u5206\u533a"),(0,l.yg)("p",null,"\u5206\u533a\u5217\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DATE, DATETIME, CHAR, VARCHAR")," \u6570\u636e\u7c7b\u578b\uff0c\u5206\u533a\u503c\u4e3a\u679a\u4e3e\u503c\u3002\u53ea\u6709\u5f53\u6570\u636e\u4e3a\u76ee\u6807\u5206\u533a\u679a\u4e3e\u503c\u5176\u4e2d\u4e4b\u4e00\u65f6\uff0c\u624d\u53ef\u4ee5\u547d\u4e2d\u5206\u533a\u3002"),(0,l.yg)("p",null,"Partition \u652f\u6301\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"VALUES IN (...)")," \u6765\u6307\u5b9a\u6bcf\u4e2a\u5206\u533a\u5305\u542b\u7684\u679a\u4e3e\u503c\u3002"),(0,l.yg)("p",null,"\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'PARTITION BY LIST(city)\n(\n    PARTITION `p_cn` VALUES IN ("Beijing", "Shanghai", "Hong Kong"),\n    PARTITION `p_usa` VALUES IN ("New York", "San Francisco"),\n    PARTITION `p_jp` VALUES IN ("Tokyo")\n)\n')),(0,l.yg)("p",null,"List \u5206\u533a\u4e5f\u652f\u6301\u591a\u5217\u5206\u533a\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'PARTITION BY LIST(id, city)\n(\n    PARTITION p1_city VALUES IN (("1", "Beijing"), ("1", "Shanghai")),\n    PARTITION p2_city VALUES IN (("2", "Beijing"), ("2", "Shanghai")),\n    PARTITION p3_city VALUES IN (("3", "Beijing"), ("3", "Shanghai"))\n)\n')),(0,l.yg)("h2",{id:"null-\u5206\u533a"},"NULL \u5206\u533a"),(0,l.yg)("p",null,"PARTITION \u5217\u9ed8\u8ba4\u5fc5\u987b\u4e3a NOT NULL \u5217\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528 NULL \u5217\uff0c\u5e94\u8bbe\u7f6e session variable ",(0,l.yg)("inlineCode",{parentName:"p"},"allow_partition_column_nullable = true"),"\u3002\u5bf9\u4e8e LIST PARTITION\uff0c\u6211\u4eec\u652f\u6301\u771f\u6b63\u7684 NULL \u5206\u533a\u3002\u5bf9\u4e8e RANGE PARTITION\uff0cNULL \u503c\u4f1a\u88ab\u5212\u5f52",(0,l.yg)("strong",{parentName:"p"},"\u6700\u5c0f\u7684 LESS THAN \u5206\u533a"),"\u3002\u5206\u5217\u5982\u4e0b\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"LIST \u5206\u533a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> create table null_list(\n    -> k0 varchar null\n    -> )\n    -> partition by list (k0)\n    -> (\n    -> PARTITION pX values in ((NULL))\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.11 sec)\n\nmysql> insert into null_list values (null);\nQuery OK, 1 row affected (0.19 sec)\n\nmysql> select * from null_list;\n+------+\n| k0   |\n+------+\n| NULL |\n+------+\n1 row in set (0.18 sec)\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"RANGE \u5206\u533a \u2014\u2014 \u5f52\u5c5e\u6700\u5c0f\u7684 LESS THAN \u5206\u533a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> create table null_range(\n    -> k0 int null\n    -> )\n    -> partition by range (k0)\n    -> (\n    -> PARTITION p10 values less than (10),\n    -> PARTITION p100 values less than (100),\n    -> PARTITION pMAX values less than (maxvalue)\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.12 sec)\n\nmysql> insert into null_range values (null);\nQuery OK, 1 row affected (0.19 sec)\n\nmysql> select * from null_range partition(p10);\n+------+\n| k0   |\n+------+\n| NULL |\n+------+\n1 row in set (0.18 sec)\n')),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"RANGE \u5206\u533a \u2014\u2014 \u6ca1\u6709 LESS THAN \u5206\u533a\u65f6\uff0c\u65e0\u6cd5\u63d2\u5165")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> create table null_range2(\n    -> k0 int null\n    -> )\n    -> partition by range (k0)\n    -> (\n    -> PARTITION p200 values [("100"), ("200"))\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.13 sec)\n\nmysql> insert into null_range2 values (null);\nERROR 5025 (HY000): Insert has filtered data in strict mode, tracking_url=......\n')))}g.isMDXComponent=!0}}]);