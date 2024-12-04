"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[914683],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||l;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},649050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const l={title:"LTRIM_IN",language:"zh-CN"},a=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/ltrim_in",id:"sql-manual/sql-functions/string-functions/ltrim_in",title:"LTRIM_IN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/ltrim_in.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/ltrim_in",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/ltrim_in",draft:!1,tags:[],version:"current",frontMatter:{title:"LTRIM_IN",language:"zh-CN"},sidebar:"docs",previous:{title:"TRIM_IN",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/trim_in"},next:{title:"RTRIM_IN",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/rtrim_in"}},s={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u4e3e\u4f8b",id:"\u4e3e\u4f8b",level:2},{value:"\u5173\u952e\u8bcd",id:"\u5173\u952e\u8bcd",level:2}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR ltrim_in(VARCHAR str[, VARCHAR rhs])")),(0,i.yg)("p",null,"\u5f53\u6ca1\u6709 ",(0,i.yg)("inlineCode",{parentName:"p"},"rhs")," \u53c2\u6570\u65f6\uff0c\u5c06\u53c2\u6570 ",(0,i.yg)("inlineCode",{parentName:"p"},"str")," \u4e2d\u4ece\u5de6\u4fa7\u90e8\u5206\u5f00\u59cb\u90e8\u5206\u8fde\u7eed\u51fa\u73b0\u7684\u7a7a\u683c\u53bb\u6389\uff1b\u5f53\u6709 ",(0,i.yg)("inlineCode",{parentName:"p"},"rhs")," \u53c2\u6570\u65f6\uff0c\u5728\u5b57\u7b26\u4e32\u7684\u5de6\u7aef\u67e5\u627e\u5e76\u79fb\u9664 ",(0,i.yg)("inlineCode",{parentName:"p"},"rhs")," \u5b57\u7b26\u96c6\u5408\u4e2d\u7684\u4efb\u4f55\u5b57\u7b26\uff08\u4e0d\u8003\u8651\u987a\u5e8f\uff09"),(0,i.yg)("h2",{id:"\u4e3e\u4f8b"},"\u4e3e\u4f8b"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT ltrim_in('   ab d') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT ltrim_in('ababccaab','ab') str;\n+-------+\n| str   |\n+-------+\n| ccaab |\n+-------+\n")),(0,i.yg)("h2",{id:"\u5173\u952e\u8bcd"},"\u5173\u952e\u8bcd"),(0,i.yg)("p",null,"LTRIM_IN"))}f.isMDXComponent=!0}}]);