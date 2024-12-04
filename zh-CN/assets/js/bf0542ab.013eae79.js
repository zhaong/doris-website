"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[817921],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,d=p["".concat(s,".").concat(f)]||p[f]||_[f]||o;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV6_STRING_TO_NUM_OR_DEFAULT",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default",id:"version-3.0/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default",title:"IPV6_STRING_TO_NUM_OR_DEFAULT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IPV6_STRING_TO_NUM_OR_DEFAULT",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV6_STRING_TO_NUM",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/ipv6-string-to-num"},next:{title:"IPV6_STRING_TO_NUM_OR_NULL",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-null"}},s={},u=[{value:"IPV6_STRING_TO_NUM_OR_DEFAULT",id:"ipv6_string_to_num_or_default",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function _(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv6_string_to_num_or_default"},"IPV6_STRING_TO_NUM_OR_DEFAULT"),(0,i.yg)("p",null,"IPV6_STRING_TO_NUM_OR_DEFAULT"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR IPV6_STRING_TO_NUM_OR_DEFAULT(VARCHAR ipv6_string)")),(0,i.yg)("p",null,"IPv6NumToString \u7684\u53cd\u5411\u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a IP \u5730\u5740\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u4e8c\u8fdb\u5236\u683c\u5f0f\u7684 IPv6 \u5730\u5740\u3002\n\u5982\u679c\u8f93\u5165\u5b57\u7b26\u4e32\u5305\u542b\u6709\u6548\u7684 IPv4 \u5730\u5740\uff0c\u5219\u8fd4\u56de\u5176\u7b49\u6548\u7684 IPv6 \u5730\u5740\u3002"),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,"\u5982\u679c\u8f93\u5165\u975e\u6cd5\u7684IP\u5730\u5740\uff0c\u4f1a\u8fd4\u56de ",(0,i.yg)("inlineCode",{parentName:"p"},"0")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select hex(ipv6_string_to_num_or_default('1111::ffff'));\n+--------------------------------------------------+\n| hex(ipv6_string_to_num_or_default('1111::ffff')) |\n+--------------------------------------------------+\n| 1111000000000000000000000000FFFF                 |\n+--------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select hex(ipv6_string_to_num_or_default('192.168.0.1'));\n+---------------------------------------------------+\n| hex(ipv6_string_to_num_or_default('192.168.0.1')) |\n+---------------------------------------------------+\n| 00000000000000000000FFFFC0A80001                  |\n+---------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(ipv6_string_to_num_or_default('notaaddress'));\n+---------------------------------------------------+\n| hex(ipv6_string_to_num_or_default('notaaddress')) |\n+---------------------------------------------------+\n| 00000000000000000000000000000000                  |\n+---------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV6_STRING_TO_NUM_OR_DEFAULT, IP"))}_.isMDXComponent=!0}}]);