"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[936972],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>g});var o=a(296540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function m(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function t(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?m(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,o,n=function(e,r){if(null==e)return{};var a,o,n={},m=Object.keys(e);for(o=0;o<m.length;o++)a=m[o],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(o=0;o<m.length;o++)a=m[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var y=o.createContext({}),i=function(e){var r=o.useContext(y),a=r;return e&&(a="function"==typeof e?e(r):t(t({},r),e)),a},c=function(e){var r=i(e.components);return o.createElement(y.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var a=e.components,n=e.mdxType,m=e.originalType,y=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(a),u=n,g=p["".concat(y,".").concat(u)]||p[u]||s[u]||m;return a?o.createElement(g,t(t({ref:r},c),{},{components:a})):o.createElement(g,t({ref:r},c))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var m=a.length,t=new Array(m);t[0]=u;var l={};for(var y in r)hasOwnProperty.call(r,y)&&(l[y]=r[y]);l.originalType=e,l[p]="string"==typeof e?e:n,t[1]=l;for(var i=2;i<m;i++)t[i]=a[i];return o.createElement.apply(null,t)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},561869:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>y,contentTitle:()=>t,default:()=>s,frontMatter:()=>m,metadata:()=>l,toc:()=>i});var o=a(58168),n=(a(296540),a(15680));const m={title:"\u5185\u5b58\u8ddf\u8e2a\u5668",language:"zh-CN"},t=void 0,l={unversionedId:"admin-manual/memory-management/memory-feature/memory-tracker",id:"admin-manual/memory-management/memory-feature/memory-tracker",title:"\u5185\u5b58\u8ddf\u8e2a\u5668",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/memory-management/memory-feature/memory-tracker.md",sourceDirName:"admin-manual/memory-management/memory-feature",slug:"/admin-manual/memory-management/memory-feature/memory-tracker",permalink:"/zh-CN/docs/dev/admin-manual/memory-management/memory-feature/memory-tracker",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5185\u5b58\u8ddf\u8e2a\u5668",language:"zh-CN"},sidebar:"docs",previous:{title:"Heap Profile \u5206\u6790\u5185\u5b58",permalink:"/zh-CN/docs/dev/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis"},next:{title:"\u5185\u5b58\u63a7\u5236\u7b56\u7565",permalink:"/zh-CN/docs/dev/admin-manual/memory-management/memory-feature/memory-control-strategy"}},y={},i=[{value:"\u5185\u5b58\u8ddf\u8e2a\u539f\u7406",id:"\u5185\u5b58\u8ddf\u8e2a\u539f\u7406",level:2},{value:"Memory Tracker \u7ed3\u6784",id:"memory-tracker-\u7ed3\u6784",level:2},{value:"Memory Tracker \u7edf\u8ba1\u7f3a\u5931",id:"memory-tracker-\u7edf\u8ba1\u7f3a\u5931",level:2},{value:"Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u73b0\u8c61",id:"memory-tracker-\u7edf\u8ba1\u7f3a\u5931\u73b0\u8c61",level:3},{value:"Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u5206\u6790",id:"memory-tracker-\u7edf\u8ba1\u7f3a\u5931\u5206\u6790",level:3},{value:"Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u539f\u56e0",id:"memory-tracker-\u7edf\u8ba1\u7f3a\u5931\u539f\u56e0",level:3},{value:"Doris 2.1 \u4e4b\u540e",id:"doris-21-\u4e4b\u540e",level:4},{value:"Doris 2.1 \u4e4b\u524d",id:"doris-21-\u4e4b\u524d",level:4}],c={toc:i},p="wrapper";function s(e){let{components:r,...m}=e;return(0,n.yg)(p,(0,o.A)({},c,m,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Doris BE \u4f7f\u7528\u5185\u5b58\u8ddf\u8e2a\u5668\uff08Memory Tracker\uff09\u8bb0\u5f55\u8fdb\u7a0b\u5185\u5b58\u4f7f\u7528\uff0c\u5305\u62ec\u67e5\u8be2\u3001\u5bfc\u5165\u3001Compaction\u3001Schema Change \u7b49\u4efb\u52a1\u751f\u547d\u5468\u671f\u4e2d\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u4ee5\u53ca\u5404\u9879\u7f13\u5b58\u3002\u652f\u6301 Web \u9875\u9762\u5b9e\u65f6\u67e5\u770b\uff0c\u5e76\u5728\u5185\u5b58\u76f8\u5173\u62a5\u9519\u65f6\u6253\u5370\u5230 BE \u65e5\u5fd7\u4e2d\uff0c\u7528\u4e8e\u5185\u5b58\u5206\u6790\u548c\u6392\u67e5\u5185\u5b58\u95ee\u9898\u3002"),(0,n.yg)("p",null,"\u6709\u5173 Memory Tracker \u7684\u67e5\u770b\u65b9\u6cd5\uff0c\u4ee5\u53ca\u4e0d\u540c Memory Tracker \u6240\u4ee3\u8868\u5185\u5b58\u5360\u7528\u8fc7\u5927\u7684\u539f\u56e0\u4ee5\u53ca\u51cf\u5c11\u5176\u5185\u5b58\u4f7f\u7528\u7684\u5206\u6790\u65b9\u6cd5\u5728 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/memory-management/overview"},"Overview")," \u4e2d\u5df2\u7ed3\u5408 Doris BE \u5185\u5b58\u7ed3\u6784\u4e00\u8d77\u4ecb\u7ecd\u3002\u672c\u6587\u53ea\u4ecb\u7ecd Memory Tracker \u539f\u7406\u3001\u7ed3\u6784\uff0c\u4ee5\u53ca\u4e00\u4e9b\u5e38\u89c1\u95ee\u9898\u3002"),(0,n.yg)("h2",{id:"\u5185\u5b58\u8ddf\u8e2a\u539f\u7406"},"\u5185\u5b58\u8ddf\u8e2a\u539f\u7406"),(0,n.yg)("p",null,"Memory Tracker \u4f9d\u8d56 Doris Allocator \u8ddf\u8e2a\u5185\u5b58\u7684\u6bcf\u6b21\u7533\u8bf7\u548c\u91ca\u653e\uff0c\u6709\u5173 Doris Allocator \u7684\u4ecb\u7ecd\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/memory-management/memory-feature/memory-control-strategy"},"\u5185\u5b58\u63a7\u5236\u7b56\u7565"),"\u3002"),(0,n.yg)("p",null,"\u8fdb\u7a0b\u5185\u5b58: Doris BE \u4f1a\u5b9a\u65f6\u4ece\u7cfb\u7edf\u83b7\u53d6 Doris BE \u8fdb\u7a0b\u5185\u5b58\uff0c\u517c\u5bb9Cgroup\u3002"),(0,n.yg)("p",null,"\u4efb\u52a1\u5185\u5b58: \u6bcf\u4e2a\u67e5\u8be2\u3001\u5bfc\u5165\u3001Compaction\u7b49\u4efb\u52a1\u521d\u59cb\u5316\u65f6\u90fd\u4f1a\u521b\u5efa\u81ea\u5df1\u552f\u4e00\u7684 Memory Tracker\uff0c\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u5c06 Memory Tracker \u653e\u5165 TLS\uff08Thread Local Storage\uff09\u4e2d\uff0cDoris \u4e3b\u8981\u7684\u5185\u5b58\u6570\u636e\u7ed3\u6784\u90fd\u7ee7\u627f\u81ea Allocator\uff0cAllocator \u6bcf\u6b21\u7533\u8bf7\u548c\u91ca\u653e\u5185\u5b58\u90fd\u4f1a\u8bb0\u5f55\u5230 TLS \u7684 Memory Tracker \u4e2d\u3002"),(0,n.yg)("p",null,"\u7b97\u5b50\u5185\u5b58\uff1a\u4efb\u52a1\u7684\u4e0d\u540c\u6267\u884c\u7b97\u5b50\u4e5f\u4f1a\u521b\u5efa\u81ea\u5df1\u7684 Memory Trakcer\uff0c\u6bd4\u5982 Join/Agg/Sink \u7b49\uff0c\u652f\u6301\u624b\u52a8\u8ddf\u8e2a\u5185\u5b58\u6216\u653e\u5165 TLS \u4e2d\u7531 ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris Allocator")," \u8bb0\u5f55\uff0c\u7528\u4e8e\u6267\u884c\u903b\u8f91\u63a7\u5236\uff0c\u4ee5\u53ca Query Profile \u4e2d\u5206\u6790\u4e0d\u540c\u7b97\u5b50\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3002"),(0,n.yg)("p",null,"\u5168\u5c40\u5185\u5b58: \u5168\u5c40\u5185\u5b58\u4e3b\u8981\u5305\u62ec Cache \u548c\u5143\u6570\u636e\u7b49\u5728\u4e0d\u540c\u4efb\u52a1\u95f4\u5171\u4eab\u7684\u5185\u5b58\u3002\u6bcf\u4e2a Cache \u6709\u81ea\u5df1\u552f\u4e00\u7684 Memory Tracker\uff0c\u7531 ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris Allocator")," \u6216 \u624b\u52a8\u8ddf\u8e2a\uff1b\u5143\u6570\u636e\u5185\u5b58\u76ee\u524d\u6ca1\u6709\u7edf\u8ba1\u5b8c\u5168\uff0c\u66f4\u591a\u8981\u4f9d\u8d56 Metrics \u548c Bvar \u7edf\u8ba1\u7684\u5404\u79cd\u5143\u6570\u636e Counter \u8fdb\u884c\u5206\u6790\u3002"),(0,n.yg)("p",null,"\u5176\u4e2d Doris BE \u8fdb\u7a0b\u5185\u5b58\u56e0\u4e3a\u53d6\u81ea\u64cd\u4f5c\u7cfb\u7edf\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u5b8c\u5168\u51c6\u786e\u7684\uff0c\u5176\u4ed6 Memory Tracker \u56e0\u4e3a\u5b9e\u73b0\u4e0a\u7684\u5c40\u9650\u6027\uff0c\u8ddf\u8e2a\u7684\u5185\u5b58\u901a\u5e38\u53ea\u662f\u771f\u5b9e\u5185\u5b58\u7684\u4e00\u4e2a\u5b50\u96c6\uff0c\u5bfc\u81f4\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6240\u6709 Memory Tracker \u4e4b\u548c\u8981\u5c0f\u4e8e Doris BE \u8fdb\u7a0b\u7269\u7406\u5185\u5b58\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u7f3a\u5931\uff0c\u4e0d\u8fc7 Memory Tracker \u8bb0\u5f55\u5230\u7684\u5185\u5b58\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u53ef\u4fe1\u5ea6\u8f83\u9ad8\uff0c\u53ef\u4ee5\u653e\u5fc3\u7684\u7528\u4e8e\u5185\u5b58\u5206\u6790\u3002\u6b64\u5916 Memory Tracker \u5b9e\u9645\u8ddf\u8e2a\u7684\u662f\u865a\u62df\u5185\u5b58\uff0c\u800c\u4e0d\u662f\u901a\u5e38\u66f4\u5173\u6ce8\u7684\u7269\u7406\u5185\u5b58\uff0c\u5b83\u4eec\u4e4b\u95f4\u4e5f\u5b58\u5728\u4e00\u5b9a\u7684\u8bef\u5dee\u3002"),(0,n.yg)("h2",{id:"memory-tracker-\u7ed3\u6784"},"Memory Tracker \u7ed3\u6784"),(0,n.yg)("p",null,"\u6839\u636e\u4f7f\u7528\u65b9\u5f0f Memory Tracker \u5206\u4e3a\u4e24\u7c7b\uff0c\u7b2c\u4e00\u7c7b Memory Tracker Limiter\uff0c\u5728\u6bcf\u4e2a\u67e5\u8be2\u3001\u5bfc\u5165\u3001Compaction \u7b49\u4efb\u52a1\u548c\u5168\u5c40 Cache\u3001TabletMeta \u552f\u4e00\uff0c\u7528\u4e8e\u89c2\u6d4b\u548c\u63a7\u5236\u5185\u5b58\u4f7f\u7528\uff1b\u7b2c\u4e8c\u7c7b Memory Tracker\uff0c\u4e3b\u8981\u7528\u4e8e\u8ddf\u8e2a\u67e5\u8be2\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u5185\u5b58\u70ed\u70b9\uff0c\u5982 Join/Aggregation/Sort/\u7a97\u53e3\u51fd\u6570\u4e2d\u7684 HashTable\u3001\u5e8f\u5217\u5316\u7684\u4e2d\u95f4\u6570\u636e\u7b49\uff0c\u6765\u5206\u6790\u67e5\u8be2\u4e2d\u4e0d\u540c\u7b97\u5b50\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff0c\u4ee5\u53ca\u7528\u4e8e\u5bfc\u5165\u6570\u636e\u4e0b\u5237\u7684\u5185\u5b58\u63a7\u5236\u3002"),(0,n.yg)("p",null,"\u4e8c\u8005\u4e4b\u95f4\u7684\u7236\u5b50\u5173\u7cfb\u53ea\u7528\u4e8e\u5feb\u7167\u7684\u6253\u5370\uff0c\u4f7f\u7528Lable\u540d\u79f0\u5173\u8054\uff0c\u76f8\u5f53\u4e8e\u4e00\u5c42\u8f6f\u94fe\u63a5\uff0c\u4e0d\u4f9d\u8d56\u7236\u5b50\u5173\u7cfb\u540c\u65f6\u6d88\u8d39\uff0c\u751f\u547d\u5468\u671f\u4e92\u4e0d\u5f71\u54cd\uff0c\u51cf\u5c11\u7406\u89e3\u548c\u4f7f\u7528\u7684\u6210\u672c\u3002\u6240\u6709 Memory Tracker \u5b58\u653e\u5728\u4e00\u7ec4 Map \u4e2d\uff0c\u5e76\u63d0\u4f9b\u6253\u5370\u6240\u6709 Memory Tracker Type \u7684\u5feb\u7167\u3001\u6253\u5370 Query/Load/Compaction  \u7b49 Task \u7684\u5feb\u7167\u3001\u83b7\u53d6\u5f53\u524d\u4f7f\u7528\u5185\u5b58\u6700\u591a\u7684\u4e00\u7ec4 Query/Load\u3001\u83b7\u53d6\u5f53\u524d\u8fc7\u91cf\u4f7f\u7528\u5185\u5b58\u6700\u591a\u7684\u4e00\u7ec4 Query/Load \u7b49\u65b9\u6cd5\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Memory Tracker Implement",src:a(217954).A,width:"1080",height:"897"})),(0,n.yg)("h2",{id:"memory-tracker-\u7edf\u8ba1\u7f3a\u5931"},"Memory Tracker \u7edf\u8ba1\u7f3a\u5931"),(0,n.yg)("p",null,"Doris 2.1 \u4e4b\u524d\u548c\u4e4b\u540e\u7684\u7248\u672c\u4e2d Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u7684\u73b0\u8c61\u4e0d\u540c\u3002"),(0,n.yg)("h3",{id:"memory-tracker-\u7edf\u8ba1\u7f3a\u5931\u73b0\u8c61"},"Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u73b0\u8c61"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Doris 2.1 \u4e4b\u540e Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u6709\u4e24\u4e2a\u73b0\u8c61\u3002")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"Label=process resident memory")," Memory Tracker \u51cf\u53bb ",(0,n.yg)("inlineCode",{parentName:"p"},"Label=sum of all trackers")," Memory Tracker \u7684\u5dee\u503c\u8fc7\u5927\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Orphan Memory Tracker \u503c\u8fc7\u5927\u3002"))),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Doris 2.1 \u4e4b\u524d Orphan Memory Tracker \u503c\u8fc7\u5927\u610f\u5473\u7740 Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u3002")),(0,n.yg)("h3",{id:"memory-tracker-\u7edf\u8ba1\u7f3a\u5931\u5206\u6790"},"Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u5206\u6790"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u5728 Doris 2.1.5 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\u53d1\u73b0 Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u6216 BE \u8fdb\u7a0b\u5185\u5b58\u4e0d\u4e0b\u964d\uff0c\u4f18\u5148\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis"},"Cache \u5185\u5b58\u5206\u6790")," \u5206\u6790 SegmentCache \u5185\u5b58\u4f7f\u7528\uff0c\u5c1d\u8bd5\u5173\u95ed Segment Cache \u540e\u7ee7\u7eed\u6d4b\u8bd5\u3002")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u5728 Doris 2.1.5 \u4e4b\u524d\u7684\u7248\u672c\u4e2d Segment Cache Memory Tacker \u4e0d\u51c6\u786e\uff0c\u8fd9\u662f\u56e0\u4e3a\u5305\u62ec Primary Key Index \u5728\u5185\u7684\u4e00\u4e9b Index \u5185\u5b58\u7edf\u8ba1\u7684\u662f\u4e0d\u51c6\u786e\u7684\uff0c\u5bfc\u81f4 Segment Cache \u5185\u5b58\u6ca1\u6709\u5f97\u5230\u6709\u6548\u9650\u5236\uff0c\u7ecf\u5e38\u5360\u7528\u8fc7\u5927\u7684\u5185\u5b58\uff0c\u5c24\u5176\u662f\u5728\u6210\u767e\u4e0a\u5343\u5217\u7684\u5927\u5bbd\u8868\u4e0a\uff0c\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/memory-management/memory-analysis/metadata-memory-analysis"},"Metadata \u5185\u5b58\u5206\u6790")," \u5982\u679c\u4f60\u53d1\u73b0 Doris BE Metrics \u4e2d ",(0,n.yg)("inlineCode",{parentName:"p"},'doris_be_cache_usage{name="SegmentCache"}')," \u4e0d\u5927\uff0c\u4f46 Doris BE Bvar \u4e2d ",(0,n.yg)("inlineCode",{parentName:"p"},"doris_column_reader_num")," \u5f88\u5927\uff0c\u5219\u9700\u8981\u6000\u7591 Segment Cache \u7684\u5185\u5b58\u5360\u7528\uff0c\u5982\u679c\u4f60\u5728 Heap Profile \u5185\u5b58\u5360\u6bd4\u5927\u7684\u8c03\u7528\u6808\u4e2d\u770b\u5230 ",(0,n.yg)("inlineCode",{parentName:"p"},"Segment"),"\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"ColumnReader")," \u5b57\u6bb5\uff0c\u5219\u57fa\u672c\u53ef\u4ee5\u786e\u8ba4\u662f Segment Cache \u5360\u7528\u4e86\u5927\u91cf\u5185\u5b58\u3002")),(0,n.yg)("p",null,"\u5982\u679c\u89c2\u5bdf\u5230\u4e0a\u8ff0\u73b0\u8c61\uff0c\u82e5\u96c6\u7fa4\u65b9\u4fbf\u91cd\u542f\uff0c\u5e76\u4e14\u73b0\u8c61\u53ef\u4ee5\u88ab\u590d\u73b0\uff0c\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis"},"Heap Profile \u5185\u5b58\u5206\u6790")," \u4f7f\u7528 Jemalloc Heap Profile \u5206\u6790\u8fdb\u7a0b\u5185\u5b58\u3002"),(0,n.yg)("p",null,"\u5426\u5219\u53ef\u4ee5\u5148\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/memory-management/memory-analysis/metadata-memory-analysis"},"Metadata \u5185\u5b58\u5206\u6790")," \u5206\u6790 Doris BE \u7684\u5143\u6570\u636e\u5185\u5b58\u3002"),(0,n.yg)("h3",{id:"memory-tracker-\u7edf\u8ba1\u7f3a\u5931\u539f\u56e0"},"Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u539f\u56e0"),(0,n.yg)("p",null,"\u4e0b\u9762\u4ecb\u7ecd Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u7684\u539f\u56e0\uff0c\u6d89\u53ca\u5230 Memory Tracker \u7684\u5b9e\u73b0\uff0c\u901a\u5e38\u65e0\u9700\u5173\u6ce8\u3002"),(0,n.yg)("h4",{id:"doris-21-\u4e4b\u540e"},"Doris 2.1 \u4e4b\u540e"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"Label=process resident memory")," Memory Tracker \u51cf\u53bb ",(0,n.yg)("inlineCode",{parentName:"li"},"Label=sum of all trackers")," Memory Tracker \u7684\u5dee\u503c\u8fc7\u5927\u3002")),(0,n.yg)("p",null,"\u82e5 ",(0,n.yg)("inlineCode",{parentName:"p"},"Label=sum of all trackers")," Memory Tracker \u7684\u503c\u5360\u5230 ",(0,n.yg)("inlineCode",{parentName:"p"},"Label=process resident memory")," Memory Tracker \u7684 70% \u4ee5\u4e0a\uff0c\u901a\u5e38\u8bf4\u660e Memory Tracker \u7edf\u8ba1\u5230\u4e86 Doris BE \u8fdb\u7a0b\u7684\u5927\u90e8\u5206\u5185\u5b58\uff0c\u901a\u5e38\u53ea\u9700\u8981\u5206\u6790 Memory Tracker \u5b9a\u4f4d\u5185\u5b58\u4f4d\u7f6e\u3002"),(0,n.yg)("p",null,"\u82e5 ",(0,n.yg)("inlineCode",{parentName:"p"},"Label=sum of all trackers")," Memory Tracker \u7684\u503c\u5360\u5230 ",(0,n.yg)("inlineCode",{parentName:"p"},"Label=process resident memory")," Memory Tracker \u7684 70% \u4ee5\u4e0b\uff0c\u8bf4\u660e Memory Tracker \u7edf\u8ba1\u7f3a\u5931\uff0c\u6b64\u65f6 Memory Tracker \u53ef\u80fd\u65e0\u6cd5\u51c6\u786e\u5b9a\u4f4d\u5185\u5b58\u4f4d\u7f6e\u3002"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Label=process resident memory")," Memory Tracker \u51cf\u53bb ",(0,n.yg)("inlineCode",{parentName:"p"},"Label=sum of all trackers")," Memory Tracker \u7684\u5dee\u503c\u662f\u6ca1\u6709\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris Allocator")," \u5206\u914d\u7684\u5185\u5b58\uff0cDoris \u4e3b\u8981\u5185\u5b58\u6570\u636e\u7ed3\u6784\u90fd\u7ee7\u627f\u81ea ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris Allocator"),"\uff0c\u4f46\u4ecd\u6709\u4e00\u90e8\u5206\u5185\u5b58\u6ca1\u6709\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris Allocator")," \u5206\u914d\uff0c\u5305\u62ec\u5143\u6570\u636e\u5185\u5b58\u3001RPC \u5185\u5b58\u7b49\uff0c\u4e5f\u53ef\u80fd\u662f\u5b58\u5728\u5185\u5b58\u6cc4\u6f0f\uff0c\u6b64\u65f6\u9664\u4e86\u5206\u6790\u5185\u5b58\u503c\u5927\u7684 Memory Tracker \u5916\uff0c\u901a\u5e38\u8fd8\u9700\u8981\u5173\u6ce8\u5143\u6570\u636e\u5185\u5b58\u662f\u5426\u5408\u7406\uff0c\u662f\u5426\u5b58\u5728\u5185\u5b58\u6cc4\u6f0f\u7b49\u3002"),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Orphan Memory Tracker \u503c\u8fc7\u5927")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n")),(0,n.yg)("p",null,"Orphan Memory Tracker \u662f\u9ed8\u8ba4 Memory Tracker\uff0c\u503c\u4e3a\u6b63\u6570\u6216\u8d1f\u6570\u90fd\u610f\u5473\u7740 Doris Allocator \u5206\u914d\u7684\u5185\u5b58\u8ddf\u8e2a\u4e0d\u51c6\uff0c\u503c\u8d8a\u5927\uff0c\u610f\u5473\u7740 Memory Tracker \u6574\u4f53\u7edf\u8ba1\u7ed3\u679c\u7684\u53ef\u4fe1\u5ea6\u8d8a\u4f4e\u3002\u5176\u7edf\u8ba1\u503c\u6709\u4e24\u4e2a\u6765\u6e90\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5982\u679c\u7ebf\u7a0b\u5f00\u59cb\u65f6 TLS \u4e2d\u6ca1\u6709\u7ed1\u5b9a Memory Tracker\uff0c\u90a3\u4e48 Doris Allocator \u4f1a\u9ed8\u8ba4\u5c06\u5185\u5b58\u8bb0\u5f55\u5230 Orphan Memory Tracker \u4e2d\uff0c\u610f\u5473\u7740\u8fd9\u90e8\u5206\u5185\u5b58\u4e0d\u77e5\u6240\u5c5e\uff0c\u6709\u5173 Doris Allocator \u8bb0\u5f55\u5185\u5b58\u7684\u539f\u7406\u53c2\u8003\u4e0a\u6587 ","[\u5185\u5b58\u8ddf\u8e2a\u539f\u7406]","\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Query \u6216 Load \u7b49\u4efb\u52a1 Memory Tracker \u6790\u6784\u65f6\u5982\u679c\u503c\u4e0d\u7b49\u4e8e 0\uff0c\uff0c\u901a\u5e38\u610f\u5473\u7740\u8fd9\u90e8\u5206\u5185\u5b58\u6ca1\u6709\u91ca\u653e\uff0c\u5c06\u628a\u8fd9\u90e8\u5206\u5269\u4f59\u7684\u5185\u5b58\u8bb0\u5f55\u5230 Orphan Memory Tracker \u4e2d\uff0c\u76f8\u5f53\u4e8e\u5c06\u5269\u4f59\u5185\u5b58\u4ea4\u7531 Orphan Memory Tracker \u7ee7\u7eed\u8ddf\u8e2a\u3002\u4ece\u800c\u4fdd\u8bc1 Orphan Memory Tracker \u548c\u5176\u4ed6 Memory Tracker \u4e4b\u548c\u7b49\u4e8e Doris Allocator \u5206\u914d\u51fa\u53bb\u7684\u6240\u6709\u5185\u5b58\u3002"))),(0,n.yg)("p",null,"\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u671f\u671b Orphan Memory Tracker \u7684\u503c\u63a5\u8fd10\u3002\u6240\u4ee5\u6211\u4eec\u5e0c\u671b\u6240\u6709\u7ebf\u7a0b\u5f00\u59cb\u65f6\u90fd Attach \u4e00\u4e2a Orphan \u4e4b\u5916\u7684 Memory Tracker\uff0c\u6bd4\u5982 Query \u6216 Load Memory Tracker\u3002\u5e76\u4e14\u6240\u6709 Query \u6216 Load Memory Tracker \u6790\u6784\u65f6\u90fd\u7b49\u4e8e0\uff0c\u8fd9\u610f\u5473\u7740 Query \u6216 Load \u6267\u884c\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u5185\u5b58\u5728\u6790\u6784\u65f6\u90fd\u5df2\u7ecf\u88ab\u91ca\u653e\u3002"),(0,n.yg)("p",null,"\u5982\u679c Orphan Memory Tracker \u4e0d\u7b49\u4e8e0\u4e14\u503c\u8f83\u5927\uff0c\u8fd9\u610f\u5473\u7740\u6709\u5927\u91cf\u4e0d\u77e5\u6240\u5c5e\u7684\u5185\u5b58\u6ca1\u6709\u88ab\u91ca\u653e\uff0c\u6216\u8005 Query \u548c Load \u6267\u884c\u7ed3\u675f\u540e\u6709\u5927\u91cf\u7684\u5185\u5b58\u6ca1\u6709\u88ab\u91ca\u653e\uff0c"),(0,n.yg)("h4",{id:"doris-21-\u4e4b\u524d"},"Doris 2.1 \u4e4b\u524d"),(0,n.yg)("p",null,"Doris 2.1 \u4e4b\u524d\u5c06\u4e0d\u77e5\u6240\u5c5e\u7684\u5185\u5b58\u90fd\u7edf\u8ba1\u5230 ",(0,n.yg)("inlineCode",{parentName:"p"},"Label=Orphan")," Memory Tracker \u4e2d\uff0c\u6240\u4ee5 Orphan Memory Tracker \u503c\u8fc7\u5927\u610f\u5473\u7740 Memory Tracker \u7edf\u8ba1\u7f3a\u5931\u3002"))}s.isMDXComponent=!0},217954:(e,r,a)=>{a.d(r,{A:()=>o});const o=a.p+"assets/images/memory-tracker-implement-5c548eff5415a15a098dfd931e60a99f.png"}}]);