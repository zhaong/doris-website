"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[274259],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,g=p["".concat(s,".").concat(d)]||p[d]||y[d]||l;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},134445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=t(58168),a=(t(296540),t(15680));const l={title:"JSON_UNQUOTE",language:"en"},o=void 0,u={unversionedId:"sql-manual/sql-functions/json-functions/json-unquote",id:"version-2.1/sql-manual/sql-functions/json-functions/json-unquote",title:"JSON_UNQUOTE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/json-functions/json-unquote.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-unquote",permalink:"/docs/sql-manual/sql-functions/json-functions/json-unquote",draft:!1,tags:[],version:"2.1",frontMatter:{title:"JSON_UNQUOTE",language:"en"},sidebar:"docs",previous:{title:"JSON_QUOTE",permalink:"/docs/sql-manual/sql-functions/json-functions/json-quote"},next:{title:"JSON_VALID",permalink:"/docs/sql-manual/sql-functions/json-functions/json-valid"}},s={},i=[{value:"json_unquote",id:"json_unquote",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_unquote"},"json_unquote"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR json_unquote(VARCHAR)")),(0,a.yg)("p",null,"This function unquotes a JSON value and returns the result as a utf8mb4 string. If the argument is NULL, it will return NULL."),(0,a.yg)("p",null,"Escape sequences within a string as shown in the following table will be recognized. Backslashes will be ignored for all other escape sequences."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Escape Sequence"),(0,a.yg)("th",{parentName:"tr",align:null},"Character Represented by Sequence"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},'\\"'),(0,a.yg)("td",{parentName:"tr",align:null},'A double quote (") character')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\b"),(0,a.yg)("td",{parentName:"tr",align:null},"A backspace character")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\f"),(0,a.yg)("td",{parentName:"tr",align:null},"A formfeed character")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\n"),(0,a.yg)("td",{parentName:"tr",align:null},"A newline (linefeed) character")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\r"),(0,a.yg)("td",{parentName:"tr",align:null},"A carriage return character")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\t"),(0,a.yg)("td",{parentName:"tr",align:null},"A tab character")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\"),(0,a.yg)("td",{parentName:"tr",align:null},"A backslash (",")"," character")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\uxxxx"),(0,a.yg)("td",{parentName:"tr",align:null},"UTF-8 bytes for Unicode value XXXX")))),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT json_unquote('\"doris\"');\n+-------------------------+\n| json_unquote('\"doris\"') |\n+-------------------------+\n| doris                   |\n+-------------------------+\n\nmysql> SELECT json_unquote('[1, 2, 3]');\n+---------------------------+\n| json_unquote('[1, 2, 3]') |\n+---------------------------+\n| [1, 2, 3]                 |\n+---------------------------+\n\n\nmysql> SELECT json_unquote(null);\n+--------------------+\n| json_unquote(NULL) |\n+--------------------+\n| NULL               |\n+--------------------+\n\nmysql> SELECT json_unquote('\"\\\\ttest\"');\n+--------------------------+\n| json_unquote('\"\\ttest\"') |\n+--------------------------+\n|       test                    |\n+--------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"json,unquote,json_unquote"))}y.isMDXComponent=!0}}]);