"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[461398],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},277853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"TRIM_IN",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/trim_in",id:"sql-manual/sql-functions/string-functions/trim_in",title:"TRIM_IN",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/trim_in.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/trim_in",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/trim_in",draft:!1,tags:[],version:"current",frontMatter:{title:"TRIM_IN",language:"en"},sidebar:"docs",previous:{title:"RTRIM",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/rtrim"},next:{title:"LTRIM_IN",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/ltrim_in"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("h2",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR trim_in(VARCHAR str[, VARCHAR rhs])")),(0,a.yg)("p",null,"When there is no rhs parameter, remove the spaces that appear consecutively at the right and left beginning of the parameter str; when there is an rhs parameter, search and remove any characters in the rhs character set at both ends of the string (regardless of order)"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT trim_in('   ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT trim_in('ababccaab','ab') str;\n+------+\n| str  |\n+------+\n| cc   |\n+------+\n")),(0,a.yg)("h2",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"TRIM_IN"))}m.isMDXComponent=!0}}]);