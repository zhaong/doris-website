"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[767108],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,y=p["".concat(a,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const s={title:"ENDS_WITH",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/ends-with",id:"sql-manual/sql-functions/string-functions/ends-with",title:"ENDS_WITH",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/ends-with.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/ends-with",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/ends-with",draft:!1,tags:[],version:"current",frontMatter:{title:"ENDS_WITH",language:"en"},sidebar:"docs",previous:{title:"APPEND_TRAILING_CHAR_IF_ABSENT",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent"},next:{title:"STARTS_WITH",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/starts-with"}},a={},c=[{value:"ends_with",id:"ends_with",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ends_with"},"ends_with"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BOOLEAN ENDS_WITH(VARCHAR str, VARCHAR suffix)")),(0,i.yg)("p",null,"It returns true if the string ends with the specified suffix, otherwise it returns false.\nIf any parameter is NULL, it returns NULL."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select ends_with(\"Hello doris\", \"doris\");\n+-----------------------------------+\n| ends_with('Hello doris', 'doris') |\n+-----------------------------------+\n|                                 1 | \n+-----------------------------------+\n\nmysql> select ends_with(\"Hello doris\", \"Hello\");\n+-----------------------------------+\n| ends_with('Hello doris', 'Hello') |\n+-----------------------------------+\n|                                 0 | \n+-----------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"ENDS_WITH\n")))}d.isMDXComponent=!0}}]);