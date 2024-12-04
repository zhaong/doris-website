"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[791566],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var t=n(296540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,y=p["".concat(u,".").concat(f)]||p[f]||g[f]||a;return n?t.createElement(y,i(i({ref:r},c),{},{components:n})):t.createElement(y,i({ref:r},c))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},878207:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(58168),o=(n(296540),n(15680));const a={title:"group_bit_xor",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/group-bit-xor",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/group-bit-xor",title:"group_bit_xor",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/group-bit-xor.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group-bit-xor",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/group-bit-xor",draft:!1,tags:[],version:"2.0",frontMatter:{title:"group_bit_xor",language:"zh-CN"},sidebar:"docs",previous:{title:"GROUP_BIT_OR",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/group-bit-or"},next:{title:"PERCENTILE_APPROX",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/percentile-approx"}},u={},s=[{value:"group_bit_xor",id:"group_bit_xor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function g(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"group_bit_xor"},"group_bit_xor"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"expr GROUP_BIT_XOR(expr)")),(0,o.yg)("p",null,"\u5bf9expr\u8fdb\u884c xor \u8ba1\u7b97, \u8fd4\u56de\u65b0\u7684expr\n\u652f\u6301\u6240\u6709INT\u7c7b\u578b"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from group_bit;\n+-------+\n| value |\n+-------+\n|     3 |\n|     1 |\n|     2 |\n|     4 |\n+-------+\n4 rows in set (0.02 sec)\n\nmysql> select group_bit_xor(value) from group_bit;\n+------------------------+\n| group_bit_xor(`value`) |\n+------------------------+\n|                      4 |\n+------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"GROUP_BIT_XOR,BIT\n")))}g.isMDXComponent=!0}}]);