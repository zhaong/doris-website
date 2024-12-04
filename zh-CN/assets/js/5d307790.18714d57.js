"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[735748],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>c});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),d=p(a),y=r,c=d["".concat(o,".").concat(y)]||d[y]||s[y]||l;return a?t.createElement(c,i(i({ref:n},g),{},{components:a})):t.createElement(c,i({ref:n},g))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},310941:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var t=a(58168),r=(a(296540),a(15680));const l={title:"Java UDF",language:"zh-CN"},i=void 0,u={unversionedId:"query-data/udf/java-user-defined-function",id:"version-3.0/query-data/udf/java-user-defined-function",title:"Java UDF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-data/udf/java-user-defined-function.md",sourceDirName:"query-data/udf",slug:"/query-data/udf/java-user-defined-function",permalink:"/zh-CN/docs/3.0/query-data/udf/java-user-defined-function",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Java UDF",language:"zh-CN"},sidebar:"docs",previous:{title:"\u522b\u540d\u51fd\u6570",permalink:"/zh-CN/docs/3.0/query-data/udf/alias-function"},next:{title:"\u590d\u6742\u7c7b\u578b\u67e5\u8be2",permalink:"/zh-CN/docs/3.0/query-data/complex-type"}},o={},p=[{value:"Java UDF \u4ecb\u7ecd",id:"java-udf-\u4ecb\u7ecd",level:2},{value:"\u521b\u5efa UDF",id:"\u521b\u5efa-udf",level:2},{value:"UDF",id:"udf",level:3},{value:"UDAF",id:"udaf",level:3},{value:"UDTF",id:"udtf",level:3},{value:"\u4f7f\u7528 UDF",id:"\u4f7f\u7528-udf",level:2},{value:"\u5220\u9664 UDF",id:"\u5220\u9664-udf",level:2},{value:"\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb",id:"\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb",level:2},{value:"UDF \u7684\u7f16\u5199",id:"udf-\u7684\u7f16\u5199",level:2},{value:"UDF",id:"udf-1",level:3},{value:"UDAF",id:"udaf-1",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"Static \u53d8\u91cf\u52a0\u8f7d",id:"static-\u53d8\u91cf\u52a0\u8f7d",level:3},{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2}],g={toc:p},d="wrapper";function s(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"java-udf-\u4ecb\u7ecd"},"Java UDF \u4ecb\u7ecd"),(0,r.yg)("p",null,"Java UDF \u4e3a\u7528\u6237\u63d0\u4f9b UDF \u7f16\u5199\u7684 Java \u63a5\u53e3\uff0c\u4ee5\u65b9\u4fbf\u7528\u6237\u4f7f\u7528 Java \u8bed\u8a00\u8fdb\u884c\u81ea\u5b9a\u4e49\u51fd\u6570\u7684\u6267\u884c\u3002"),(0,r.yg)("p",null,"Doris \u652f\u6301\u4f7f\u7528 JAVA \u7f16\u5199 UDF\u3001UDAF \u548c UDTF\u3002\u4e0b\u6587\u5982\u65e0\u7279\u6b8a\u8bf4\u660e\uff0c\u4f7f\u7528 UDF \u7edf\u79f0\u6240\u6709\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u3002"),(0,r.yg)("h2",{id:"\u521b\u5efa-udf"},"\u521b\u5efa UDF"),(0,r.yg)("p",null,"\u5b9e\u73b0\u7684 jar \u5305\u53ef\u4ee5\u653e\u5728\u672c\u5730\u4e5f\u53ef\u4ee5\u5b58\u653e\u5728\u8fdc\u7a0b\u670d\u52a1\u7aef\u901a\u8fc7 HTTP \u4e0b\u8f7d\uff0c\u4f46\u5fc5\u987b\u8ba9\u6bcf\u4e2a FE \u548c BE \u8282\u70b9\u90fd\u80fd\u83b7\u53d6\u5230 jar \u5305\u3002"),(0,r.yg)("p",null,"\u5426\u5219\u5c06\u4f1a\u8fd4\u56de\u9519\u8bef\u72b6\u6001\u4fe1\u606f ",(0,r.yg)("inlineCode",{parentName:"p"},"Couldn't open file ......"),"\u3002"),(0,r.yg)("p",null,"\u66f4\u591a\u8bed\u6cd5\u5e2e\u52a9\u53ef\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION"},"CREATE FUNCTION"),"."),(0,r.yg)("h3",{id:"udf"},"UDF"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.yg)("h3",{id:"udaf"},"UDAF"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION middle_quantiles(DOUBLE,INT) RETURNS DOUBLE PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.MiddleNumberUDAF",\n    "always_nullable"="true",\n    "type"="JAVA_UDAF"\n);\n')),(0,r.yg)("h3",{id:"udtf"},"UDTF"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"UDTF \u81ea Doris 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLES FUNCTION java-utdf(string, string) RETURNS array<string> PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.UDTFStringTest",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.yg)("h2",{id:"\u4f7f\u7528-udf"},"\u4f7f\u7528 UDF"),(0,r.yg)("p",null,"\u7528\u6237\u4f7f\u7528 UDF \u5fc5\u987b\u62e5\u6709\u5bf9\u5e94\u6570\u636e\u5e93\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," \u6743\u9650\u3002"),(0,r.yg)("p",null,"UDF \u7684\u4f7f\u7528\u4e0e\u666e\u901a\u7684\u51fd\u6570\u65b9\u5f0f\u4e00\u81f4\uff0c\u552f\u4e00\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5185\u7f6e\u51fd\u6570\u7684\u4f5c\u7528\u57df\u662f\u5168\u5c40\u7684\uff0c\u800c UDF \u7684\u4f5c\u7528\u57df\u662f DB \u5185\u90e8\u3002"),(0,r.yg)("p",null,"\u5f53\u94fe\u63a5 Session \u4f4d\u4e8e\u6570\u636e\u5185\u90e8\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528 UDF \u540d\u5b57\u4f1a\u5728\u5f53\u524d DB \u5185\u90e8\u67e5\u627e\u5bf9\u5e94\u7684 UDF\u3002\u5426\u5219\u7528\u6237\u9700\u8981\u663e\u793a\u7684\u6307\u5b9a UDF \u7684\u6570\u636e\u5e93\u540d\u5b57\uff0c\u4f8b\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"dbName.funcName"),"\u3002"),(0,r.yg)("h2",{id:"\u5220\u9664-udf"},"\u5220\u9664 UDF"),(0,r.yg)("p",null,"\u5f53\u4f60\u4e0d\u518d\u9700\u8981 UDF \u51fd\u6570\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u6765\u5220\u9664\u4e00\u4e2a UDF \u51fd\u6570\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FUNCTION"},"DROP FUNCTION")),(0,r.yg)("h2",{id:"\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb"},"\u7c7b\u578b\u5bf9\u5e94\u5173\u7cfb"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris \u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Java UDF \u53c2\u6570\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bool"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TinyInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SmallInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Short")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BigInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Long")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LargeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"BigInteger")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Float"),(0,r.yg)("td",{parentName:"tr",align:null},"Float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"Double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"LocalDate")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"LocalDateTime")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"array<Type>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ArrayList<Type>"),"\uff08\u652f\u6301\u5d4c\u5957\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"map<Type1,Type2>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HashMap<Type1,Type2>"),"\uff08\u652f\u6301\u5d4c\u5957\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"struct<Type...>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ArrayList<Object>"),"\uff08\u4ece 3.0.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff09")))),(0,r.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"array"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"map"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"struct")," \u7c7b\u578b\u53ef\u4ee5\u5d4c\u5957\u5176\u5b83\u7c7b\u578b\u3002\u4f8b\u5982\uff0cDoris \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"array<array<int>>")," \u5bf9\u5e94 Java UDF \u53c2\u6570\u7c7b\u578b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"ArrayList<ArrayList<Integer>>"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u4f9d\u6b64\u7c7b\u63a8\u3002")),(0,r.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"\u5728\u521b\u5efa\u51fd\u6570\u65f6\uff0c\u8bf7\u52a1\u5fc5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\u800c\u4e0d\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"varchar"),"\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u51fd\u6570\u6267\u884c\u5931\u8d25\u3002")),(0,r.yg)("h2",{id:"udf-\u7684\u7f16\u5199"},"UDF \u7684\u7f16\u5199"),(0,r.yg)("p",null,"\u672c\u5c0f\u8282\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a Java UDF\u3002\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"samples/doris-demo/java-udf-demo/")," \u4e0b\u63d0\u4f9b\u793a\u4f8b\uff0c\u53ef\u70b9\u51fb\u67e5\u770b",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/doris-demo/java-udf-demo"},"\u53c2\u8003\u793a\u4f8b")),(0,r.yg)("p",null,"\u4f7f\u7528 Java \u4ee3\u7801\u7f16\u5199 UDF\uff0cUDF \u7684\u4e3b\u5165\u53e3\u5fc5\u987b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"evaluate")," \u51fd\u6570\u3002\u8fd9\u4e00\u70b9\u4e0e Hive \u7b49\u5176\u4ed6\u5f15\u64ce\u4fdd\u6301\u4e00\u81f4\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u7f16\u5199\u4e86 ",(0,r.yg)("inlineCode",{parentName:"p"},"AddOne")," UDF \u6765\u5b8c\u6210\u5bf9\u6574\u578b\u8f93\u5165\u8fdb\u884c\u52a0\u4e00\u7684\u64cd\u4f5c\u3002"),(0,r.yg)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u672c\u4f8b\u4e0d\u53ea\u662f Doris \u652f\u6301\u7684 Java UDF\uff0c\u540c\u65f6\u8fd8\u662f Hive \u652f\u6301\u7684 UDF\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bf9\u4e8e\u7528\u6237\u6765\u8bb2\uff0cHive UDF \u662f\u53ef\u4ee5\u76f4\u63a5\u8fc1\u79fb\u81f3 Doris \u7684\u3002"),(0,r.yg)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u5b9a\u4e49\u7684 UDF \u4e2d\u9700\u8981\u52a0\u8f7d\u5f88\u5927\u7684\u8d44\u6e90\u6587\u4ef6\uff0c\u6216\u8005\u5e0c\u671b\u53ef\u4ee5\u5b9a\u4e49\u5168\u5c40\u7684 Static \u53d8\u91cf\uff0c\u53ef\u4ee5\u53c2\u7167\u6587\u6863\u4e0b\u65b9\u7684 Static \u53d8\u91cf\u52a0\u8f7d\u65b9\u5f0f\u3002"),(0,r.yg)("h3",{id:"udf-1"},"UDF"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class AddOne extends UDF {\n    public Integer evaluate(Integer value) {\n        return value == null ? null : value + 1;\n    }\n}\n")),(0,r.yg)("h3",{id:"udaf-1"},"UDAF"),(0,r.yg)("p",null,"\u5728\u4f7f\u7528 Java \u4ee3\u7801\u7f16\u5199 UDAF \u65f6\uff0c\u6709\u4e00\u4e9b\u5fc5\u987b\u5b9e\u73b0\u7684\u51fd\u6570 (\u6807\u8bb0 ",(0,r.yg)("inlineCode",{parentName:"p"},"required"),") \u548c\u4e00\u4e2a\u5185\u90e8\u7c7b State\uff0c\u4e0b\u9762\u5c06\u4ee5\u4e00\u4e2a\u5177\u4f53\u7684\u5b9e\u4f8b\u6765\u8bf4\u660e\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u793a\u4f8b 1")),(0,r.yg)("p",null,"\u4e0b\u9762\u7684 SimpleDemo \u5c06\u5b9e\u73b0\u4e00\u4e2a\u7c7b\u4f3c\u7684 SUM \u7684\u7b80\u5355\u51fd\u6570\uff0c\u8f93\u5165\u53c2\u6570 INT\uff0c\u8f93\u51fa\u53c2\u6570\u662f INT\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'package org.apache.doris.udf.demo;\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.IOException;\nimport java.util.logging.Logger;\n\npublic class SimpleDemo  {\n\n    Logger log = Logger.getLogger("SimpleDemo");\n\n    //Need an inner class to store data\n    /*required*/\n    public static class State {\n        /*some variables if you need */\n        public int sum = 0;\n    }\n\n    /*required*/\n    public State create() {\n        /* here could do some init work if needed */\n        return new State();\n    }\n\n    /*required*/\n    public void destroy(State state) {\n        /* here could do some destroy work if needed */\n    }\n\n    /*Not Required*/\n    public void reset(State state) {\n        /*if you want this udaf function can work with window function.*/\n        /*Must impl this, it will be reset to init state after calculate every window frame*/\n        state.sum = 0;\n    }\n\n    /*required*/\n    //first argument is State, then other types your input\n    public void add(State state, Integer val) throws Exception {\n        /* here doing update work when input data*/\n        if (val != null) {\n            state.sum += val;\n        }\n    }\n\n    /*required*/\n    public void serialize(State state, DataOutputStream out)  {\n        /* serialize some data into buffer */\n        try {\n            out.writeInt(state.sum);\n        } catch (Exception e) {\n            /* Do not throw exceptions */\n            log.info(e.getMessage());\n        }\n    }\n\n    /*required*/\n    public void deserialize(State state, DataInputStream in)  {\n        /* deserialize get data from buffer before you put */\n        int val = 0;\n        try {\n            val = in.readInt();\n        } catch (Exception e) {\n            /* Do not throw exceptions */\n            log.info(e.getMessage());\n        }\n        state.sum = val;\n    }\n\n    /*required*/\n    public void merge(State state, State rhs) throws Exception {\n        /* merge data from state */\n        state.sum += rhs.sum;\n    }\n\n    /*required*/\n    //return Type you defined\n    public Integer getValue(State state) throws Exception {\n        /* return finally result */\n        return state.sum;\n    }\n}\n\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u793a\u4f8b 2")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'package org.apache.doris.udf.demo;\n\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.math.BigDecimal;\nimport java.util.Arrays;\nimport java.util.logging.Logger;\n\n/*UDAF \u8ba1\u7b97\u4e2d\u4f4d\u6570*/\npublic class MedianUDAF {\n    Logger log = Logger.getLogger("MedianUDAF");\n\n    //\u72b6\u6001\u5b58\u50a8\n    public static class State {\n        //\u8fd4\u56de\u7ed3\u679c\u7684\u7cbe\u5ea6\n        int scale = 0;\n        //\u662f\u5426\u662f\u67d0\u4e00\u4e2a tablet \u4e0b\u7684\u67d0\u4e2a\u805a\u5408\u6761\u4ef6\u4e0b\u7684\u6570\u636e\u7b2c\u4e00\u6b21\u6267\u884c add \u65b9\u6cd5\n        boolean isFirst = true;\n        //\u6570\u636e\u5b58\u50a8\n        public StringBuilder stringBuilder;\n    }\n\n    //\u72b6\u6001\u521d\u59cb\u5316\n    public State create() {\n        State state = new State();\n        //\u6839\u636e\u6bcf\u4e2a tablet \u4e0b\u7684\u805a\u5408\u6761\u4ef6\u9700\u8981\u805a\u5408\u7684\u6570\u636e\u91cf\u5927\u5c0f\uff0c\u9884\u5148\u521d\u59cb\u5316\uff0c\u589e\u52a0\u6027\u80fd\n        state.stringBuilder = new StringBuilder(1000);\n        return state;\n    }\n\n\n    //\u5904\u7406\u6267\u884c\u5355\u4f4d\u5904\u7406\u5404\u81ea tablet \u4e0b\u7684\u5404\u81ea\u805a\u5408\u6761\u4ef6\u4e0b\u7684\u6bcf\u4e2a\u6570\u636e\n    public void add(State state, Double val, int scale) {\n        try {\n            if (val != null && state.isFirst) {\n                state.stringBuilder.append(scale).append(",").append(val).append(",");\n                state.isFirst = false;\n            } else if (val != null) {\n                state.stringBuilder.append(val).append(",");\n            }\n        } catch (Exception e) {\n            //\u5982\u679c\u4e0d\u80fd\u4fdd\u8bc1\u4e00\u5b9a\u4e0d\u4f1a\u5f02\u5e38\uff0c\u5efa\u8bae\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u6700\u5927\u5316\u6355\u83b7\u5f02\u5e38\uff0c\u56e0\u4e3a\u76ee\u524d\u4e0d\u652f\u6301\u5904\u7406 java \u629b\u51fa\u7684\u5f02\u5e38\n            log.info("\u83b7\u53d6\u6570\u636e\u5f02\u5e38\uff1a" + e.getMessage());\n        }\n    }\n\n    //\u5904\u7406\u6570\u636e\u5b8c\u9700\u8981\u8f93\u51fa\u7b49\u5f85\u805a\u5408\n    public void serialize(State state, DataOutputStream out) {\n        try {\n            //\u76ee\u524d\u6682\u65f6\u53ea\u63d0\u4f9b DataOutputStream\uff0c\u5982\u679c\u9700\u8981\u5e8f\u5217\u5316\u5bf9\u8c61\u53ef\u4ee5\u8003\u8651\u62fc\u63a5\u5b57\u7b26\u4e32\uff0c\u8f6c\u6362 json\uff0c\u5e8f\u5217\u5316\u6210\u5b57\u8282\u6570\u7ec4\u7b49\u65b9\u5f0f\n            //\u5982\u679c\u8981\u5e8f\u5217\u5316 State \u5bf9\u8c61\uff0c\u53ef\u80fd\u9700\u8981\u81ea\u5df1\u5c06 State \u5185\u90e8\u7c7b\u5b9e\u73b0\u5e8f\u5217\u5316\u63a5\u53e3\n            //\u6700\u7ec8\u90fd\u662f\u8981\u901a\u8fc7 DataOutputStream \u4f20\u8f93\n            out.writeUTF(state.stringBuilder.toString());\n        } catch (Exception e) {\n            log.info("\u5e8f\u5217\u5316\u5f02\u5e38\uff1a" + e.getMessage());\n        }\n    }\n\n    //\u83b7\u53d6\u5904\u7406\u6570\u636e\u6267\u884c\u5355\u4f4d\u8f93\u51fa\u7684\u6570\u636e\n    public void deserialize(State state, DataInputStream in) {\n        try {\n            String string = in.readUTF();\n            state.scale = Integer.parseInt(String.valueOf(string.charAt(0)));\n            StringBuilder stringBuilder = new StringBuilder(string.substring(2));\n            state.stringBuilder = stringBuilder;\n        } catch (Exception e) {\n            log.info("\u53cd\u5e8f\u5217\u5316\u5f02\u5e38\uff1a" + e.getMessage());\n        }\n    }\n\n    //\u805a\u5408\u6267\u884c\u5355\u4f4d\u6309\u7167\u805a\u5408\u6761\u4ef6\u5408\u5e76\u67d0\u4e00\u4e2a\u952e\u4e0b\u6570\u636e\u7684\u5904\u7406\u7ed3\u679c ,\u6bcf\u4e2a\u952e\u7b2c\u4e00\u6b21\u5408\u5e76\u65f6\uff0cstate1 \u53c2\u6570\u662f\u521d\u59cb\u5316\u7684\u5b9e\u4f8b\n    public void merge(State state1, State state2) {\n        try {\n            state1.scale = state2.scale;\n            state1.stringBuilder.append(state2.stringBuilder.toString());\n        } catch (Exception e) {\n            log.info("\u5408\u5e76\u7ed3\u679c\u5f02\u5e38\uff1a" + e.getMessage());\n        }\n    }\n\n    //\u5bf9\u6bcf\u4e2a\u952e\u5408\u5e76\u540e\u7684\u6570\u636e\u8fdb\u884c\u5e76\u8f93\u51fa\u6700\u7ec8\u7ed3\u679c\n    public Double getValue(State state) {\n        try {\n            String[] strings = state.stringBuilder.toString().split(",");\n            double[] doubles = new double[strings.length + 1];\n            doubles = Arrays.stream(strings).mapToDouble(Double::parseDouble).toArray();\n\n            Arrays.sort(doubles);\n            double n = doubles.length - 1;\n            double index = n * 0.5;\n\n            int low = (int) Math.floor(index);\n            int high = (int) Math.ceil(index);\n\n            double value = low == high ? (doubles[low] + doubles[high]) * 0.5 : doubles[high];\n\n            BigDecimal decimal = new BigDecimal(value);\n            return decimal.setScale(state.scale, BigDecimal.ROUND_HALF_UP).doubleValue();\n        } catch (Exception e) {\n            log.info("\u8ba1\u7b97\u5f02\u5e38\uff1a" + e.getMessage());\n        }\n        return 0.0;\n    }\n\n    //\u6bcf\u4e2a\u6267\u884c\u5355\u4f4d\u6267\u884c\u5b8c\u90fd\u4f1a\u6267\u884c\n    public void destroy(State state) {\n    }\n\n}\n\n')),(0,r.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.yg)("h3",{id:"static-\u53d8\u91cf\u52a0\u8f7d"},"Static \u53d8\u91cf\u52a0\u8f7d"),(0,r.yg)("p",null,"\u5f53\u524d\u5728 Doris \u4e2d\uff0c\u6267\u884c\u4e00\u4e2a UDF \u51fd\u6570\uff0c\u4f8b\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"select udf(col) from table"),", \u6bcf\u4e00\u4e2a\u5e76\u53d1 Instance \u4f1a\u52a0\u8f7d\u4e00\u6b21 udf.jar \u5305\uff0c\u5728\u8be5 instance \u7ed3\u675f\u65f6\u5378\u8f7d\u6389 udf.jar \u5305\u3002"),(0,r.yg)("p",null,"\u6240\u4ee5\u5f53 udf.jar \u6587\u4ef6\u4e2d\u9700\u8981\u52a0\u8f7d\u4e00\u4e2a\u51e0\u767e MB \u7684\u6587\u4ef6\u65f6\uff0c\u4f1a\u56e0\u4e3a\u5e76\u53d1\u7684\u539f\u56e0\uff0c\u4f7f\u5f97\u5360\u636e\u7684\u5185\u5b58\u6025\u5267\u589e\u5927\uff0c\u5bb9\u6613 OOM\u3002"),(0,r.yg)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u662f\u53ef\u4ee5\u5c06\u8d44\u6e90\u52a0\u8f7d\u4ee3\u7801\u62c6\u5206\u5f00\uff0c\u5355\u72ec\u751f\u6210\u4e00\u4e2a jar \u5305\u6587\u4ef6\uff0c\u5176\u4ed6\u5305\u76f4\u63a5\u5f15\u7528\u8be5\u8d44\u6e90 jar \u5305\u3002 "),(0,r.yg)("p",null,"\u5047\u8bbe\u5df2\u7ecf\u62c6\u5206\u4e3a\u4e86 DictLibrary \u548c FunctionUdf \u4e24\u4e2a\u6587\u4ef6\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5355\u72ec\u7f16\u8bd1 DictLibrary \u6587\u4ef6\uff0c\u4f7f\u5176\u751f\u6210\u4e00\u4e2a\u72ec\u7acb\u7684 jar \u5305\uff0c\u8fd9\u6837\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u8d44\u6e90\u6587\u4ef6 DictLibrary.jar: "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"javac   ./DictLibrary.java\njar -cf ./DictLibrary.jar ./DictLibrary.class\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class DictLibrary {\n    private static HashMap<String, String> res = new HashMap<>();\n\n    static {\n        // suppose we built this dictionary from a certain local file.\n        res.put("key1", "value1");\n        res.put("key2", "value2");\n        res.put("key3", "value3");\n        res.put("0", "value4");\n        res.put("1", "value5");\n        res.put("2", "value6");\n    }\n\n    public static String evaluate(String key) {\n        if (key == null) {\n            return null;\n        }\n        return res.get(key);\n    }\n}\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class FunctionUdf {\n    public String evaluate(String key) {\n        String value = DictLibrary.evaluate(key);\n        return value;\n    }\n}\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7f16\u8bd1 FunctionUdf \u6587\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528\u4e0a\u4e00\u6b65\u7684\u5230\u7684\u8d44\u6e90\u5305\uff0c\u8fd9\u6837\u53ef\u4ee5\u5f97\u5230 UDF \u7684 FunctionUdf.jar \u5305\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"javac -cp ./DictLibrary.jar  ./FunctionUdf.java\njar  -cvf ./FunctionUdf.jar  ./FunctionUdf.class\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7ecf\u8fc7\u4e0a\u9762\u4e24\u6b65\u4e4b\u540e\uff0c\u4f1a\u5f97\u5230\u4e24\u4e2a jar \u5305\uff0c\u7531\u4e8e\u60f3\u8ba9\u8d44\u6e90 jar \u5305\u88ab\u6240\u6709\u7684\u5e76\u53d1\u5f15\u7528\uff0c\u6240\u4ee5\u9700\u8981\u5c06\u5b83\u653e\u5230\u6307\u5b9a\u8def\u5f84 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe/custom_lib")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"be/custom_lib")," \u4e0b\u9762\uff0c\u670d\u52a1\u91cd\u542f\u4e4b\u540e\u5c31\u53ef\u4ee5\u968f\u7740 JVM \u7684\u542f\u52a8\u52a0\u8f7d\u8fdb\u6765\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6700\u540e\u5229\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE FUNCTION")," \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a UDF \u51fd\u6570"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION java_udf_dict(string) RETURNS string PROPERTIES (\n "symbol"="org.apache.doris.udf.FunctionUdf",\n "always_nullable"="true",\n "type"="JAVA_UDF"\n);\n')))),(0,r.yg)("p",null,"\u4f7f\u7528\u8be5\u52a0\u8f7d\u65b9\u5f0f\u65f6\uff0cFunctionUdf.jar \u548c DictLibrary.jar \u90fd\u5728 FE \u548c BE \u7684 custom_lib \u8def\u5f84\u4e0b\uff0c\u56e0\u6b64\u90fd\u4f1a\u968f\u7740\u670d\u52a1\u542f\u52a8\u800c\u52a0\u8f7d\uff0c\u505c\u6b62\u800c\u91ca\u653e\uff0c\u4e0d\u518d\u9700\u8981\u6307\u5b9a File \u7684\u8def\u5f84\u3002"),(0,r.yg)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528 file:/// \u65b9\u5f0f\u81ea\u5b9a\u4e49 FunctionUdf.jar \u7684\u8def\u5f84\uff0c\u4f46\u662f DictLibrary.jar \u53ea\u80fd\u653e\u5728 custom_lib \u4e0b\u3002"),(0,r.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u590d\u6742\u6570\u636e\u7c7b\u578b\uff08HLL\uff0cBitmap\uff09\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5f53\u524d\u5141\u8bb8\u7528\u6237\u81ea\u5df1\u6307\u5b9a JVM \u6700\u5927\u5806\u5927\u5c0f\uff0c\u914d\u7f6e\u9879\u662f be.conf \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"JAVA_OPTS")," \u7684 -Xmx \u90e8\u5206\u3002\u9ed8\u8ba4 1024m\uff0c\u5982\u679c\u9700\u8981\u805a\u5408\u6570\u636e\uff0c\u5efa\u8bae\u8c03\u5927\u4e00\u4e9b\uff0c\u589e\u52a0\u6027\u80fd\uff0c\u51cf\u5c11\u5185\u5b58\u6ea2\u51fa\u98ce\u9669\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Char \u7c7b\u578b\u7684 UDF \u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE FUNCTION")," \u65f6\u9700\u8981\u4f7f\u7528 String \u7c7b\u578b\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7531\u4e8e JVM \u52a0\u8f7d\u540c\u540d\u7c7b\u7684\u95ee\u9898\uff0c\u4e0d\u8981\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u540c\u540d\u7c7b\u4f5c\u4e3a UDF \u5b9e\u73b0\uff0c\u5982\u679c\u60f3\u66f4\u65b0\u67d0\u4e2a\u540c\u540d\u7c7b\u7684 UDF\uff0c\u9700\u8981\u91cd\u542f BE \u91cd\u65b0\u52a0\u8f7d Classpath\u3002"))))}s.isMDXComponent=!0}}]);