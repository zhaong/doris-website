"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[376173],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",j={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,y=p["".concat(i,".").concat(f)]||p[f]||j[f]||s;return t?o.createElement(y,a(a({ref:n},u),{},{components:t})):o.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},239227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(58168),r=(t(296540),t(15680));const s={title:"json_object",language:"en"},a=void 0,c={unversionedId:"sql-manual/sql-functions/json-functions/json_object",id:"version-1.2/sql-manual/sql-functions/json-functions/json_object",title:"json_object",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/json-functions/json_object.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_object",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_object",draft:!1,tags:[],version:"1.2",frontMatter:{title:"json_object",language:"en"},sidebar:"docs",previous:{title:"json_array",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_array"},next:{title:"json_quote",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_quote"}},i={},l=[{value:"json_object",id:"json_object",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function j(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"json_object"},"json_object"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VARCHAR json_object(VARCHAR,...)")),(0,r.yg)("p",null,"Generate a json object containing the specified Key-Value,\nan exception error is returned when Key is NULL or the number of parameters are odd."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MySQL> select json_object();\n+---------------+\n| json_object() |\n+---------------+\n| {}            |\n+---------------+\n\nMySQL> select json_object('time',curtime());\n+--------------------------------+\n| json_object('time', curtime()) |\n+--------------------------------+\n| {\"time\": \"10:49:18\"}           |\n+--------------------------------+\n\n\nMySQL> SELECT json_object('id', 87, 'name', 'carrot');\n+-----------------------------------------+\n| json_object('id', 87, 'name', 'carrot') |\n+-----------------------------------------+\n| {\"id\": 87, \"name\": \"carrot\"}            |\n+-----------------------------------------+\n\n\nMySQL> select json_object('username',null);\n+---------------------------------+\n| json_object('username', 'NULL') |\n+---------------------------------+\n| {\"username\": NULL}              |\n+---------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"json,object,json_object"))}j.isMDXComponent=!0}}]);