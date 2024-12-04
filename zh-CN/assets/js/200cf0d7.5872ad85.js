"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[876119],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var i=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||n;return a?i.createElement(m,o(o({ref:t},p),{},{components:a})):i.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(58168),r=(a(296540),a(15680));const n={title:"Scaling Bitcoin data to billions of records with Apache Doris: our journey to auto-partitioning",description:"To power lightning-fast queries and ensure the Deep Dive dashboards deliver real-time insights, Ortege relies on Apache Doris. A crucial feature they embrace is Auto Partition.",summary:"To power lightning-fast queries and ensure the Deep Dive dashboards deliver real-time insights, Ortege relies on Apache Doris. A crucial feature they embrace is Auto Partition.",date:"2024-11-20",author:"Justin Trollip",tags:["Best Practice"],picked:"true",order:"1",image:"/images/ortege-1.jpg"},o=void 0,s={permalink:"/zh-CN/blog/ortege-studio-1-scaling-bitcoin-data-to-billions-of-records",source:"@site/blog/ortege-studio-1-scaling-bitcoin-data-to-billions-of-records.md",title:"Scaling Bitcoin data to billions of records with Apache Doris: our journey to auto-partitioning",description:"To power lightning-fast queries and ensure the Deep Dive dashboards deliver real-time insights, Ortege relies on Apache Doris. A crucial feature they embrace is Auto Partition.",date:"2024-11-20T00:00:00.000Z",formattedDate:"2024\u5e7411\u670820\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Justin Trollip"}],frontMatter:{title:"Scaling Bitcoin data to billions of records with Apache Doris: our journey to auto-partitioning",description:"To power lightning-fast queries and ensure the Deep Dive dashboards deliver real-time insights, Ortege relies on Apache Doris. A crucial feature they embrace is Auto Partition.",summary:"To power lightning-fast queries and ensure the Deep Dive dashboards deliver real-time insights, Ortege relies on Apache Doris. A crucial feature they embrace is Auto Partition.",date:"2024-11-20",author:"Justin Trollip",tags:["Best Practice"],picked:"true",order:"1",image:"/images/ortege-1.jpg"},nextItem:{title:"Fine-tuning Apache Doris for maximum performance and resilience: a deep dive into fe.conf",permalink:"/zh-CN/blog/ortege-studio-2-fine-tuning-apache-doris-for-maximum-performance-and-resilience"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,i.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{title:"Special Thanks",type:"info"},(0,r.yg)("p",{parentName:"admonition"}," The Apache Doris community shares our deep appreciation for ",(0,r.yg)("a",{parentName:"p",href:"https://www.linkedin.com/in/justintrollip/"},"Justin Trollip"),", Founder of ",(0,r.yg)("a",{parentName:"p",href:"https://www.ortege.ai/"},"Ortege AI"),", for providing his hands-on experience in applying Auto Partition of Apache Doris to manage massive blockchain data. Justin is a passionate and visionary technologist and entrepreneur, and we are glad to have him join the Apache Doris user community and share his insights with us.")),(0,r.yg)("p",null,"At Ortege, we're building the ultimate blockchain data platform, providing comprehensive and accessible insights to empower the crypto community. One of our biggest challenges is managing the sheer volume of data, especially for Bitcoin. Our bitcoin.outputs table alone contains over ",(0,r.yg)("strong",{parentName:"p"},"3 billion records")," and it's growing every day!"),(0,r.yg)("p",null,"To power our lightning-fast queries and ensure Ortege Studio's Deep Dive dashboards deliver real-time insights, we rely on Apache Doris, a high-performance analytical database. A crucial feature we've embraced is ",(0,r.yg)("strong",{parentName:"p"},"Doris' auto-partitioning"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"From manual to automated:")),(0,r.yg)("p",null,"Initially, we manually defined partitions for our Bitcoin tables, meticulously crafting ranges based on block height. While this worked well for Bitcoin's relatively predictable growth, it became cumbersome for newer chains like Stacks, where data patterns are more dynamic."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Enter Doris auto-partitioning:")),(0,r.yg)("p",null,"Doris' auto-partitioning changed the game. It automatically creates partitions based on the data being ingested, eliminating the need for manual intervention. We can now define partition rules (e.g., partition by month based on the block timestamp) and let Doris handle the rest. This is a game-changer for:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Scalability:")," Effortlessly accommodate massive data growth without manual schema updates."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Performance:")," Optimize query speed by ensuring data is distributed efficiently across partitions."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Flexibility:")," Easily adapt to changing data patterns, especially for newer chains with less predictable growth.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A tailored approach:")),(0,r.yg)("p",null,"While auto-partitioning is perfect for many scenarios, we've found that a hybrid approach works best for Bitcoin. We use auto-partitioning for recent data while manually managing partitions for historical data, balancing automation with fine-grained control."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Lessons learned:")),(0,r.yg)("p",null,"Our experience with Doris auto-partitioning has taught us that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Flexibility is key:")," Choose a data platform that can adapt to your specific needs and data characteristics."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Automation is powerful:")," Leverage automation to streamline data management and focus on extracting insights."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Performance matters:")," A high-performance database like Apache Doris is essential for handling the scale of blockchain data.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"We're committed to providing the most comprehensive and accessible blockchain data platform, and Apache Doris' auto-partitioning is a crucial part of that journey. Stay tuned as we continue to innovate and empower the crypto community with data-driven insights.")),(0,r.yg)("p",null,"This article was written by Justin Trollip and originally posted on ",(0,r.yg)("a",{parentName:"p",href:"https://www.linkedin.com/pulse/scaling-bitcoin-data-billions-records-apache-doris-our-journey-diknc/?trackingId=pSs7z3aeSguCbWyxTcew6w%3D%3D"},"Linkedin"),"."))}g.isMDXComponent=!0}}]);