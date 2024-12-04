"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[358420],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||i;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},763320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const i={title:"\u4e3b\u952e\u6a21\u578b\u7684 Update \u66f4\u65b0",language:"zh-CN"},o=void 0,l={unversionedId:"data-operate/update/unique-update",id:"data-operate/update/unique-update",title:"\u4e3b\u952e\u6a21\u578b\u7684 Update \u66f4\u65b0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/update/unique-update.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/unique-update",permalink:"/zh-CN/docs/dev/data-operate/update/unique-update",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e3b\u952e\u6a21\u578b\u7684 Update \u66f4\u65b0",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u66f4\u65b0\u6982\u8ff0",permalink:"/zh-CN/docs/dev/data-operate/update/update-overview"},next:{title:"\u4e3b\u952e\u6a21\u578b\u7684\u5bfc\u5165\u66f4\u65b0",permalink:"/zh-CN/docs/dev/data-operate/update/update-of-unique-model"}},u={},p=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:3},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],s={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528 Update \u547d\u4ee4\u6765\u66f4\u65b0 Doris \u4e2d\u7684\u6570\u636e\u3002Update \u547d\u4ee4\u53ea\u80fd\u5728 Unique \u6570\u636e\u6a21\u578b\u7684\u8868\u4e2d\u6267\u884c\u3002"),(0,r.yg)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5bf9\u6ee1\u8db3\u67d0\u4e9b\u6761\u4ef6\u7684\u884c\uff0c\u4fee\u6539\u5176\u53d6\u503c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8fd9\u4e2a\u9002\u5408\u5c11\u91cf\u6570\u636e\uff0c\u4e0d\u9891\u7e41\u7684\u66f4\u65b0"))),(0,r.yg)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,r.yg)("p",null,"\u5229\u7528\u67e5\u8be2\u5f15\u64ce\u81ea\u8eab\u7684 where \u8fc7\u6ee4\u903b\u8f91\uff0c\u4ece\u5f85\u66f4\u65b0\u8868\u4e2d\u7b5b\u9009\u51fa\u9700\u8981\u88ab\u66f4\u65b0\u7684\u884c\u3002\u518d\u5229\u7528 Unique \u6a21\u578b\u81ea\u5e26\u7684 Value \u5217\u65b0\u6570\u636e\u66ff\u6362\u65e7\u6570\u636e\u7684\u903b\u8f91\uff0c\u5c06\u5f85\u66f4\u65b0\u7684\u884c\u53d8\u66f4\u540e\uff0c\u518d\u91cd\u65b0\u63d2\u5165\u5230\u8868\u4e2d\uff0c\u4ece\u800c\u5b9e\u73b0\u884c\u7ea7\u522b\u66f4\u65b0\u3002"),(0,r.yg)("h3",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,r.yg)("p",null,"Update \u8bed\u6cd5\u5728 Doris \u4e2d\u662f\u4e00\u4e2a\u540c\u6b65\u8bed\u6cd5\uff0c\u5373 Update \u8bed\u53e5\u6267\u884c\u6210\u529f\uff0c\u66f4\u65b0\u64cd\u4f5c\u4e5f\u5c31\u5b8c\u6210\u4e86\uff0c\u6570\u636e\u662f\u53ef\u89c1\u7684\u3002"),(0,r.yg)("h3",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,r.yg)("p",null,"Update \u8bed\u53e5\u7684\u6027\u80fd\u548c\u5f85\u66f4\u65b0\u7684\u884c\u6570\u4ee5\u53ca\u67e5\u8be2\u6761\u4ef6\u7684\u68c0\u7d22\u6548\u7387\u5bc6\u5207\u76f8\u5173\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5f85\u66f4\u65b0\u7684\u884c\u6570\uff1a\u5f85\u66f4\u65b0\u7684\u884c\u6570\u8d8a\u591a\uff0cUpdate \u8bed\u53e5\u7684\u901f\u5ea6\u5c31\u4f1a\u8d8a\u6162\u3002Update \u66f4\u65b0\u6bd4\u8f83\u5408\u9002\u5076\u53d1\u66f4\u65b0\u7684\u573a\u666f\uff0c\u6bd4\u5982\u4fee\u6539\u4e2a\u522b\u884c\u7684\u503c\u3002Update \u5e76\u4e0d\u9002\u5408\u5927\u6279\u91cf\u7684\u4fee\u6539\u6570\u636e\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u8be2\u6761\u4ef6\u7684\u68c0\u7d22\u6548\u7387\uff1aUpdate \u5b9e\u73b0\u539f\u7406\u662f\u5148\u5c06\u6ee1\u8db3\u67e5\u8be2\u6761\u4ef6\u7684\u884c\u505a\u8bfb\u53d6\u5904\u7406\uff0c\u6240\u4ee5\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u7684\u68c0\u7d22\u6548\u7387\u9ad8\uff0c\u5219 Update \u7684\u901f\u5ea6\u4e5f\u4f1a\u5feb\u3002\u6761\u4ef6\u5217\u6700\u597d\u80fd\u547d\u4e2d\u7d22\u5f15\u6216\u8005\u5206\u533a\u5206\u6876\u88c1\u526a\uff0c\u8fd9\u6837 Doris \u5c31\u4e0d\u9700\u8981\u626b\u5168\u8868\uff0c\u53ef\u4ee5\u5feb\u901f\u5b9a\u4f4d\u5230\u9700\u8981\u66f4\u65b0\u7684\u884c\uff0c\u4ece\u800c\u63d0\u5347\u66f4\u65b0\u6548\u7387\u3002\u5f3a\u70c8\u4e0d\u63a8\u8350\u6761\u4ef6\u5217\u4e2d\u5305\u542b value \u5217\u3002"))),(0,r.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.yg)("p",null,"\u5047\u8bbe\u5728\u91d1\u878d\u98ce\u63a7\u573a\u666f\u4e2d\uff0c\u5b58\u5728\u5982\u4e0b\u7ed3\u6784\u7684\u4ea4\u6613\u660e\u7ec6\u8868\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE transaction_details (\n    transaction_id BIGINT NOT NULL,        -- \u552f\u4e00\u4ea4\u6613\u7f16\u53f7\n    user_id BIGINT NOT NULL,               -- \u7528\u6237\u7f16\u53f7\n    transaction_date DATE NOT NULL,        -- \u4ea4\u6613\u65e5\u671f\n    transaction_time DATETIME NOT NULL,    -- \u4ea4\u6613\u65f6\u95f4\n    transaction_amount DECIMAL(18, 2),     -- \u4ea4\u6613\u91d1\u989d\n    transaction_device STRING,             -- \u4ea4\u6613\u8bbe\u5907\n    transaction_region STRING,             -- \u4ea4\u6613\u5730\u533a\n    average_daily_amount DECIMAL(18, 2),   -- \u6700\u8fd13\u4e2a\u6708\u65e5\u5747\u4ea4\u6613\u91d1\u989d\n    recent_transaction_count INT,          -- \u6700\u8fd17\u5929\u4ea4\u6613\u6b21\u6570\n    has_dispute_history BOOLEAN,           -- \u662f\u5426\u6709\u62d2\u4ed8\u8bb0\u5f55\n    risk_level STRING                      -- \u98ce\u9669\u7b49\u7ea7\n)\nUNIQUE KEY(transaction_id)\nDISTRIBUTED BY HASH(transaction_id) BUCKETS 16\nPROPERTIES (\n    "replication_num" = "3",               -- \u526f\u672c\u6570\u91cf\uff0c\u9ed8\u8ba43\n    "enable_unique_key_merge_on_write" = "true"  -- \u542f\u7528MOW\u6a21\u5f0f\uff0c\u652f\u6301\u5408\u5e76\u66f4\u65b0\n);\n')),(0,r.yg)("p",null,"\u5b58\u5728\u5982\u4e0b\u4ea4\u6613\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n| transaction_id | user_id | transaction_date | transaction_time    | transaction_amount | transaction_device | transaction_region | average_daily_amount | recent_transaction_count | has_dispute_history | risk_level |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n|           1001 |    5001 | 2024-11-24       | 2024-11-24 14:30:00 |             100.00 | iPhone 12          | New York           |               100.00 |                       10 |                   0 | NULL       |\n|           1002 |    5002 | 2024-11-24       | 2024-11-24 03:30:00 |             120.00 | iPhone 12          | New York           |               100.00 |                       15 |                   0 | NULL       |\n|           1003 |    5003 | 2024-11-24       | 2024-11-24 10:00:00 |             150.00 | Samsung S21        | Los Angeles        |               100.00 |                       30 |                   0 | NULL       |\n|           1004 |    5004 | 2024-11-24       | 2024-11-24 16:00:00 |             300.00 | MacBook Pro        | high_risk_region1  |               200.00 |                        5 |                   0 | NULL       |\n|           1005 |    5005 | 2024-11-24       | 2024-11-24 11:00:00 |            1100.00 | iPad Pro           | Chicago            |               200.00 |                       10 |                   0 | NULL       |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n")),(0,r.yg)("p",null,"\u6309\u7167\u5982\u4e0b\u98ce\u63a7\u89c4\u5219\u6765\u66f4\u65b0\u6bcf\u65e5\u6240\u6709\u4ea4\u6613\u8bb0\u5f55\u7684\u98ce\u9669\u7b49\u7ea7\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6709\u62d2\u4ed8\u8bb0\u5f55\uff0c\u98ce\u9669\u4e3a high\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5728\u9ad8\u98ce\u9669\u5730\u533a\uff0c\u98ce\u9669\u4e3a high\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4ea4\u6613\u91d1\u989d\u5f02\u5e38\uff08\u8d85\u8fc7\u65e5\u5747 5 \u500d\uff09\uff0c\u98ce\u9669\u4e3a high\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6700\u8fd1 7 \u5929\u4ea4\u6613\u9891\u7e41\uff1a\na. \u4ea4\u6613\u6b21\u6570 > 50\uff0c\u98ce\u9669\u4e3a high\u3002\nb. \u4ea4\u6613\u6b21\u6570\u5728 20-50 \u4e4b\u95f4\uff0c\u98ce\u9669\u4e3a medium\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u975e\u5de5\u4f5c\u65f6\u95f4\u4ea4\u6613\uff08\u51cc\u6668 2 \u70b9\u5230 4 \u70b9\uff09\uff0c\u98ce\u9669\u4e3a medium\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u9ed8\u8ba4\u98ce\u9669\u4e3a low\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE transaction_details\nSET risk_level = CASE\n    -- \u6709\u62d2\u4ed8\u8bb0\u5f55\u6216\u5728\u9ad8\u98ce\u9669\u5730\u533a\u7684\u4ea4\u6613\n    WHEN has_dispute_history = TRUE THEN 'high'\n    WHEN transaction_region IN ('high_risk_region1', 'high_risk_region2') THEN 'high'\n\n    -- \u7a81\u7136\u5f02\u5e38\u4ea4\u6613\u91d1\u989d\n    WHEN transaction_amount > 5 * average_daily_amount THEN 'high'\n\n    -- \u6700\u8fd17\u5929\u4ea4\u6613\u9891\u7387\u5f88\u9ad8\n    WHEN recent_transaction_count > 50 THEN 'high'\n    WHEN recent_transaction_count BETWEEN 20 AND 50 THEN 'medium'\n\n    -- \u975e\u5de5\u4f5c\u65f6\u95f4\u4ea4\u6613\n    WHEN HOUR(transaction_time) BETWEEN 2 AND 4 THEN 'medium'\n\n    -- \u9ed8\u8ba4\u98ce\u9669\n    ELSE 'low'\nEND\nWHERE transaction_date = '2024-11-24';\n")),(0,r.yg)("p",null,"\u66f4\u65b0\u4e4b\u540e\u7684\u6570\u636e\u4e3a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n| transaction_id | user_id | transaction_date | transaction_time    | transaction_amount | transaction_device | transaction_region | average_daily_amount | recent_transaction_count | has_dispute_history | risk_level |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n|           1001 |    5001 | 2024-11-24       | 2024-11-24 14:30:00 |             100.00 | iPhone 12          | New York           |               100.00 |                       10 |                   0 | low        |\n|           1002 |    5002 | 2024-11-24       | 2024-11-24 03:30:00 |             120.00 | iPhone 12          | New York           |               100.00 |                       15 |                   0 | medium     |\n|           1003 |    5003 | 2024-11-24       | 2024-11-24 10:00:00 |             150.00 | Samsung S21        | Los Angeles        |               100.00 |                       30 |                   0 | medium     |\n|           1004 |    5004 | 2024-11-24       | 2024-11-24 16:00:00 |             300.00 | MacBook Pro        | high_risk_region1  |               200.00 |                        5 |                   0 | high       |\n|           1005 |    5005 | 2024-11-24       | 2024-11-24 11:00:00 |            1100.00 | iPad Pro           | Chicago            |               200.00 |                       10 |                   0 | high       |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n")),(0,r.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,r.yg)("p",null,"\u5173\u4e8e\u6570\u636e\u66f4\u65b0\u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE"},"UPDATE")," \u547d\u4ee4\u624b\u518c\uff0c\u4e5f\u53ef\u4ee5\u5728 MySQL \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP UPDATE")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);