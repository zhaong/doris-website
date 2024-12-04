"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[552445],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var i=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,h=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return t?i.createElement(h,o(o({ref:n},c),{},{components:t})):i.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},783484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(58168),r=(t(296540),t(15680));const a={title:"Controlling Hints with CBO Rule",language:"zh-CN"},o=void 0,l={unversionedId:"query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule",id:"version-3.0/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule",title:"Controlling Hints with CBO Rule",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule.md",sourceDirName:"query-acceleration/tuning/tuning-plan",slug:"/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule",permalink:"/docs/3.0/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Controlling Hints with CBO Rule",language:"zh-CN"},sidebar:"docs",previous:{title:"Adjusting Join Shuffle with Hint",permalink:"/docs/3.0/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle"},next:{title:"Reordering Join with Leading Hint",permalink:"/docs/3.0/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint"}},s={},u=[{value:"Principles",id:"principles",level:2},{value:"Tuning Usage Case",id:"tuning-usage-case",level:2},{value:"Summary",id:"summary",level:2}],c={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"principles"},"Principles"),(0,r.yg)("p",null,"The query optimizer applies a series of rules in the process of generating execution plans. These rules are mainly divided into two categories: Rule-Based Optimizer (RBO) and Cost-Based Optimizer (CBO)."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"RBO: This type of optimization improves the query plan by applying a set of predefined heuristic rules without considering specific data statistics. Examples include strategies such as predicate pushdown and projection pushdown.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"CBO: This type of optimization utilizes data statistics to estimate the cost of different execution plans and selects the plan with the lowest cost for execution. This includes the selection of access paths and join algorithms."))),(0,r.yg)("p",null,"In some cases, database administrators or developers may need more granular control over the query optimization process. Based on this, this document will introduce how to use query hints to manage CBO rules."),(0,r.yg)("p",null,"The basic syntax for CBO rule control hints is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT /*+ USE_CBO_RULE(rule1, rule2, ...) */ ...\n")),(0,r.yg)("p",null,"This hint should immediately follow the SELECT keyword, and the names of the rules to be enabled should be specified within parentheses (note: rule names are case-insensitive)."),(0,r.yg)("p",null,"In the optimizer, the following CBO rules are disabled by default and need to be explicitly enabled using the ",(0,r.yg)("inlineCode",{parentName:"p"},"USE_CBO_RULE hint"),":"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"PUSH_DOWN_AGG_THROUGH_JOIN"),(0,r.yg)("li",{parentName:"ol"},"PUSH_DOWN_AGG_THROUGH_JOIN_ONE_SIDE"),(0,r.yg)("li",{parentName:"ol"},"PUSH_DOWN_DISTINCT_THROUGH_JOIN")),(0,r.yg)("p",null,"These rules mainly involve the optimization of aggregation operations and JOIN operations. The specific optimization logic is as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The system first checks whether the ",(0,r.yg)("inlineCode",{parentName:"li"},"USE_CBO_RULE hint")," exists in the query."),(0,r.yg)("li",{parentName:"ol"},"If the hint exists, the system will traverse all specified rules."),(0,r.yg)("li",{parentName:"ol"},"For each rule, the system checks if it is on the whitelist. If it is, the rule will be enabled."),(0,r.yg)("li",{parentName:"ol"},"If the specified rule is not on the whitelist, the system will further check if it is a valid rule name. If it is a valid rule, the rule will also be enabled."),(0,r.yg)("li",{parentName:"ol"},"Any unrecognized rule names will be ignored by the system.")),(0,r.yg)("h2",{id:"tuning-usage-case"},"Tuning Usage Case"),(0,r.yg)("p",null,"Here is a query example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT /*+ USE_CBO_RULE(push_down_agg_through_join, push_down_agg_through_join_one_side) */    a.event_id,\n    b.experiment_id,\n    b.group_id,\n    COUNT(a.event_id)\nFROM\n    com_dd_library a\nJOIN shunt_log_com_dd_library b ON\n    a.device_id = b.device_id\nGROUP BY\n    b.group_id,\n    b.experiment_id,\n    a.event_id;\n")),(0,r.yg)("p",null,"In this example, we have enabled two aggregation pushdown rules. This operation may enable the optimizer to generate a more efficient execution plan, especially when processing large datasets."),(0,r.yg)("p",null,"Best Practices:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Use CBO rule hints cautiously. In most cases, the optimizer can make good decisions."),(0,r.yg)("li",{parentName:"ol"},"Before applying hints, analyze query performance and identify bottlenecks."),(0,r.yg)("li",{parentName:"ol"},"Verify the effect of hints in a test environment to ensure they actually improve performance."),(0,r.yg)("li",{parentName:"ol"},"Regularly reevaluate applied hints, as changes in data distribution and system configuration may affect their effectiveness."),(0,r.yg)("li",{parentName:"ol"},"Document all applied hints and their reasons to facilitate subsequent maintenance and optimization efforts.")),(0,r.yg)("h2",{id:"summary"},"Summary"),(0,r.yg)("p",null,"By using the ",(0,r.yg)("inlineCode",{parentName:"p"},"USE_CBO_RULE hint")," appropriately, you can fine-tune the behavior of the query optimizer in specific scenarios, potentially improving the performance of complex queries. However, this requires a deep understanding of the query optimization process and data characteristics. In most cases, relying on the optimizer's automatic decisions remains the best choice."))}g.isMDXComponent=!0}}]);