"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[725867],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>m});var o=t(296540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return t?o.createElement(m,a(a({ref:r},d),{},{components:t})):o.createElement(m,a({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},857484:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(58168),n=(t(296540),t(15680));const i={title:"BI FAQ",language:"en"},a=void 0,s={unversionedId:"faq/bi-faq",id:"version-2.1/faq/bi-faq",title:"BI FAQ",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/faq/bi-faq.md",sourceDirName:"faq",slug:"/faq/bi-faq",permalink:"/docs/faq/bi-faq",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BI FAQ",language:"en"},sidebar:"faq",previous:{title:"Data Lakehouse FAQ",permalink:"/docs/faq/lakehouse-faq"}},c={},l=[{value:"Power BI",id:"power-bi",level:2},{value:"Q1. An error occurs when you use JDBC to pull data into  Desktop Power BI. &quot;Timeout expired. The timeout period elapsed prior to completion of the operation or the server is not responding&quot;.",id:"q1-an-error-occurs-when-you-use-jdbc-to-pull-data-into--desktop-power-bi-timeout-expired-the-timeout-period-elapsed-prior-to-completion-of-the-operation-or-the-server-is-not-responding",level:3},{value:"Q2. When the 2.1.x version uses JDBC to connect to Power BI, an error occurs &quot;An error happened while reading data from the provider: the given key was not present in the dictionary&quot;.",id:"q2-when-the-21x-version-uses-jdbc-to-connect-to-power-bi-an-error-occurs-an-error-happened-while-reading-data-from-the-provider-the-given-key-was-not-present-in-the-dictionary",level:3},{value:"Q3. Connection Doris Times error &quot;Reading data from the provider times error index and count must refer to the location within the string&quot;.",id:"q3-connection-doris-times-error-reading-data-from-the-provider-times-error-index-and-count-must-refer-to-the-location-within-the-string",level:3},{value:"Q4. JDBC connection version 2.1.x error message &quot;Character set &#39;utf8mb3&#39; is not supported by.net.Framework&quot;.",id:"q4-jdbc-connection-version-21x-error-message-character-set-utf8mb3-is-not-supported-bynetframework",level:3},{value:"Tableau",id:"tableau",level:2},{value:"Q1. Version 2.0.x reports that Tableau cannot connect to the data source with error code 37CE01A3.",id:"q1-version-20x-reports-that-tableau-cannot-connect-to-the-data-source-with-error-code-37ce01a3",level:3},{value:"Q2. SSL connection error:protocol version mismatch Failed to connect to the MySQL server",id:"q2-ssl-connection-errorprotocol-version-mismatch-failed-to-connect-to-the-mysql-server",level:3},{value:"Q3. Connection error Unsupported command(COM_STMT_PREPARED)",id:"q3-connection-error-unsupported-commandcom_stmt_prepared",level:3}],d={toc:l},u="wrapper";function p(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,o.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"power-bi"},"Power BI"),(0,n.yg)("h3",{id:"q1-an-error-occurs-when-you-use-jdbc-to-pull-data-into--desktop-power-bi-timeout-expired-the-timeout-period-elapsed-prior-to-completion-of-the-operation-or-the-server-is-not-responding"},'Q1. An error occurs when you use JDBC to pull data into  Desktop Power BI. "Timeout expired. The timeout period elapsed prior to completion of the operation or the server is not responding".'),(0,n.yg)("p",null,"Usually, this is Power BI pulling the time timeout of the data source. When filling in the data source server and database, click the advanced option, which has a timeout time, set the time higher."),(0,n.yg)("h3",{id:"q2-when-the-21x-version-uses-jdbc-to-connect-to-power-bi-an-error-occurs-an-error-happened-while-reading-data-from-the-provider-the-given-key-was-not-present-in-the-dictionary"},'Q2. When the 2.1.x version uses JDBC to connect to Power BI, an error occurs "An error happened while reading data from the provider: the given key was not present in the dictionary".'),(0,n.yg)("p",null,'Run "show collation" in the database first. Generally, only utf8mb4_900_bin is displayed, and the charset is utf8mb4. The main reason for this error is that ID 33 needs to be found when connecting to Power BI. That is, rows with 33ids in the table need to be upgraded to version 2.1.5 or later.'),(0,n.yg)("h3",{id:"q3-connection-doris-times-error-reading-data-from-the-provider-times-error-index-and-count-must-refer-to-the-location-within-the-string"},'Q3. Connection Doris Times error "Reading data from the provider times error index and count must refer to the location within the string".'),(0,n.yg)("p",null,"The cause of the problem is that global parameters are loaded during the connection process, and the SQL column names and values are the same"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"SELECT\n@@max_allowed_packet  as max_allowed_packet, @@character_set_client ,@@character_set_connection ,\n@@license,@@sql_mode ,@@lower_case_table_names , @@autocommit ;\n")),(0,n.yg)("p",null,"The new optimizer can be turned off in the current version or upgraded to version 2.0.7 or 2.1.6 or later."),(0,n.yg)("h3",{id:"q4-jdbc-connection-version-21x-error-message-character-set-utf8mb3-is-not-supported-bynetframework"},"Q4. JDBC connection version 2.1.x error message \"Character set 'utf8mb3' is not supported by.net.Framework\"."),(0,n.yg)("p",null,"This problem is easily encountered in version 2.1.x. If this problem occurs, you need to upgrade the JDBC Driver to 8.0.32."),(0,n.yg)("h2",{id:"tableau"},"Tableau"),(0,n.yg)("h3",{id:"q1-version-20x-reports-that-tableau-cannot-connect-to-the-data-source-with-error-code-37ce01a3"},"Q1. Version 2.0.x reports that Tableau cannot connect to the data source with error code 37CE01A3."),(0,n.yg)("p",null,"Turn off the new optimizer in the current version or upgrade to 2.0.7 or later"),(0,n.yg)("h3",{id:"q2-ssl-connection-errorprotocol-version-mismatch-failed-to-connect-to-the-mysql-server"},"Q2. SSL connection error:protocol version mismatch Failed to connect to the MySQL server"),(0,n.yg)("p",null,"The cause of this error is that SSL authentication is enabled on Doris, but SSL connections are not used during the connection. You need to disable the enable_ssl variable in fe.conf."),(0,n.yg)("h3",{id:"q3-connection-error-unsupported-commandcom_stmt_prepared"},"Q3. Connection error Unsupported command(COM_STMT_PREPARED)"),(0,n.yg)("p",null,"The MySQL driver version is improperly installed. Install the MySQL 5.1.x connection driver instead."))}p.isMDXComponent=!0}}]);