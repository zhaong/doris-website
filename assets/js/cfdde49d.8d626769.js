"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[870880],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(n),E=a,y=p["".concat(c,".").concat(E)]||p[E]||u[E]||l;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=E;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},995747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(58168),a=(n(296540),n(15680));const l={title:"CREATE-ROLE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE",id:"version-2.1/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE",title:"CREATE-ROLE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE.md",sourceDirName:"sql-manual/sql-statements/Account-Management-Statements",slug:"/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CREATE-ROLE",language:"en"},sidebar:"docs",previous:{title:"CANCEL-ALTER-SYSTEM",permalink:"/docs/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM"},next:{title:"CREATE-USER",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/CREATE-USER"}},c={},i=[{value:"CREATE-ROLE",id:"create-role",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:i},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"create-role"},"CREATE-ROLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CREATE ROLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"The statement user creates a role"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"  CREATE ROLE role_name [comment];\n")),(0,a.yg)("p",null,"This statement creates an unprivileged role, which can be subsequently granted with the GRANT command."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a role"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE role1;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a role with comment"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROLE role2 COMMENT "this is my first role";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," CREATE, ROLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);