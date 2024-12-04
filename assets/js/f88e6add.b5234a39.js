"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[376599],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,d=p["".concat(i,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},856413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"HISTOGRAM",language:"en"},u=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/histogram",id:"version-2.1/sql-manual/sql-functions/aggregate-functions/histogram",title:"HISTOGRAM",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/histogram.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/histogram",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/histogram",draft:!1,tags:[],version:"2.1",frontMatter:{title:"HISTOGRAM",language:"en"},sidebar:"docs",previous:{title:"PERCENTILE_APPROX",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx"},next:{title:"GROUP_ARRAY_INTERSECT",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/group-array-intersect"}},i={},s=[{value:"HISTOGRAM",id:"histogram",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"histogram"},"HISTOGRAM"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"histogram(expr[, INT num_buckets])")),(0,a.yg)("p",null,'The histogram function is used to describe the distribution of the data. It uses an "equal height" bucking strategy, and divides the data into buckets according to the value of the data. It describes each bucket with some simple data, such as the number of values that fall in the bucket. It is mainly used by the optimizer to estimate the range query.'),(0,a.yg)("p",null,"The result of the function returns an empty or Json string."),(0,a.yg)("p",null,"Parameter description\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"num_buckets\uff1aOptional. Limit the number of histogram buckets. The default value is 128.")),(0,a.yg)("p",null,"Alias function: ",(0,a.yg)("inlineCode",{parentName:"p"},"hist(expr[, INT num_buckets])")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'MySQL [test]> SELECT histogram(c_float) FROM histogram_test;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_float`)                                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":3,"buckets":[{"lower":"0.1","upper":"0.1","count":1,"pre_sum":0,"ndv":1},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> SELECT histogram(c_string, 2) FROM histogram_test;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_string`)                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":2,"buckets":[{"lower":"str1","upper":"str7","count":4,"pre_sum":0,"ndv":3},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,a.yg)("p",null,"Query result description\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "num_buckets": 3, \n    "buckets": [\n        {\n            "lower": "0.1", \n            "upper": "0.2", \n            "count": 2, \n            "pre_sum": 0, \n            "ndv": 2\n        }, \n        {\n            "lower": "0.8", \n            "upper": "0.9", \n            "count": 2, \n            "pre_sum": 2, \n            "ndv": 2\n        }, \n        {\n            "lower": "1.0", \n            "upper": "1.0", \n            "count": 2, \n            "pre_sum": 4, \n            "ndv": 1\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"Field description\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"num_buckets\uff1aThe number of buckets"),(0,a.yg)("li",{parentName:"ul"},"buckets\uff1aAll buckets",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"lower\uff1aUpper bound of the bucket"),(0,a.yg)("li",{parentName:"ul"},"upper\uff1aLower bound of the bucket"),(0,a.yg)("li",{parentName:"ul"},"count\uff1aThe number of elements contained in the bucket"),(0,a.yg)("li",{parentName:"ul"},"pre_sum\uff1aThe total number of elements in the front bucket"),(0,a.yg)("li",{parentName:"ul"},"ndv\uff1aThe number of different values in the bucket")))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Total number of histogram elements = number of elements in the last bucket(count) + total number of elements in the previous bucket(pre_sum).")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"HISTOGRAM, HIST"))}m.isMDXComponent=!0}}]);