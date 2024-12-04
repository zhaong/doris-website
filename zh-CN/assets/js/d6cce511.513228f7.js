"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[927459],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>u});var r=a(296540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=r.createContext({}),s=function(e){var n=r.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),g=t,u=c["".concat(o,".").concat(g)]||c[g]||m[g]||l;return a?r.createElement(u,i(i({ref:n},d),{},{components:a})):r.createElement(u,i({ref:n},d))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:t,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},799058:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(58168),t=(a(296540),a(15680));const l={title:"\u96c6\u7fa4\u8fd0\u7ef4",language:"zh-CN"},i=void 0,p={unversionedId:"install/cluster-deployment/k8s-deploy/cluster-operation",id:"version-2.1/install/cluster-deployment/k8s-deploy/cluster-operation",title:"\u96c6\u7fa4\u8fd0\u7ef4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/install/cluster-deployment/k8s-deploy/cluster-operation.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/cluster-operation",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/cluster-operation",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u96c6\u7fa4\u8fd0\u7ef4",language:"zh-CN"},sidebar:"docs",previous:{title:"\u914d\u7f6e Doris \u96c6\u7fa4",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-config-cluster"},next:{title:"Doris on AWS",permalink:"/zh-CN/docs/install/cluster-deployment/doris-on-aws"}},o={},s=[{value:"\u670d\u52a1 Crash \u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668",id:"\u670d\u52a1-crash-\u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668",level:2},{value:"\u542f\u52a8 Debug \u6a21\u5f0f",id:"\u542f\u52a8-debug-\u6a21\u5f0f",level:3},{value:"\u9000\u51fa Debug \u6a21\u5f0f",id:"\u9000\u51fa-debug-\u6a21\u5f0f",level:3},{value:"\u670d\u52a1\u6269\u7f29\u5bb9",id:"\u670d\u52a1\u6269\u7f29\u5bb9",level:2},{value:"\u83b7\u53d6 DorisCluster \u8d44\u6e90",id:"\u83b7\u53d6-doriscluster-\u8d44\u6e90",level:3},{value:"\u6269\u7f29\u5bb9\u8d44\u6e90",id:"\u6269\u7f29\u5bb9\u8d44\u6e90",level:3},{value:"FE \u6269\u5bb9",id:"fe-\u6269\u5bb9",level:4},{value:"BE \u6269\u5bb9",id:"be-\u6269\u5bb9",level:4},{value:"\u8282\u70b9\u7f29\u5bb9",id:"\u8282\u70b9\u7f29\u5bb9",level:3},{value:"\u5347\u7ea7 Doris \u96c6\u7fa4",id:"\u5347\u7ea7-doris-\u96c6\u7fa4",level:2},{value:"\u5347\u7ea7\u524d\u6ce8\u610f\u4e8b\u9879",id:"\u5347\u7ea7\u524d\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u5347\u7ea7\u64cd\u4f5c",id:"\u5347\u7ea7\u64cd\u4f5c",level:3},{value:"\u5347\u7ea7 BE",id:"\u5347\u7ea7-be",level:4},{value:"\u5347\u7ea7 FE",id:"\u5347\u7ea7-fe",level:4},{value:"\u5347\u7ea7\u5b8c\u6210\u5904\u7406",id:"\u5347\u7ea7\u5b8c\u6210\u5904\u7406",level:3},{value:"\u9a8c\u8bc1\u96c6\u7fa4\u8282\u70b9\u72b6\u6001",id:"\u9a8c\u8bc1\u96c6\u7fa4\u8282\u70b9\u72b6\u6001",level:4},{value:"\u6062\u590d\u96c6\u7fa4\u526f\u672c\u540c\u6b65\u548c\u5747\u8861",id:"\u6062\u590d\u96c6\u7fa4\u526f\u672c\u540c\u6b65\u548c\u5747\u8861",level:4}],d={toc:s},c="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,r.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u670d\u52a1-crash-\u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668"},"\u670d\u52a1 Crash \u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668"),(0,t.yg)("p",null,"\u5728 K8s \u73af\u5883\u4e2d\u670d\u52a1\u56e0\u4e3a\u4e00\u4e9b\u9884\u671f\u4e4b\u5916\u7684\u4e8b\u60c5\u4f1a\u8fdb\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \u72b6\u6001\uff0c\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl get pod --namespace ${namespace}")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u6307\u5b9a namespace \u4e0b\u7684 pod \u72b6\u6001\u548c pod_name\u3002\n\u5728\u8fd9\u79cd\u72b6\u6001\u4e0b\uff0c\u5355\u7eaf\u901a\u8fc7 describe \u548c logs \u547d\u4ee4\u65e0\u6cd5\u5224\u5b9a\u670d\u52a1\u51fa\u95ee\u9898\u7684\u539f\u56e0\u3002\u5f53\u670d\u52a1\u8fdb\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \u72b6\u6001\u65f6\uff0c\u9700\u8981\u6709\u4e00\u79cd\u673a\u5236\u5141\u8bb8\u90e8\u7f72\u670d\u52a1\u7684 pod \u8fdb\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"running")," \u72b6\u6001\u65b9\u4fbf\u7528\u6237\u901a\u8fc7 exec \u8fdb\u5165\u5bb9\u5668\u5185\u8fdb\u884c Debug\u3002"),(0,t.yg)("p",null,"Doris Operator \u63d0\u4f9b\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"Debug")," \u7684\u8fd0\u884c\u6a21\u5f0f\uff0c\u4e0b\u9762\u63cf\u8ff0\u4e86\u5f53\u670d\u52a1\u8fdb\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \u65f6\u5982\u4f55\u8fdb\u5165 Debug \u6a21\u5f0f\u8fdb\u884c\u4eba\u5de5 Debug\uff0c\u4ee5\u53ca\u89e3\u51b3\u540e\u5982\u4f55\u6062\u590d\u5230\u6b63\u5e38\u542f\u52a8\u72b6\u6001\u3002"),(0,t.yg)("h3",{id:"\u542f\u52a8-debug-\u6a21\u5f0f"},"\u542f\u52a8 Debug \u6a21\u5f0f"),(0,t.yg)("p",null,"\u5f53\u670d\u52a1\u4e00\u4e2a pod \u8fdb\u5165 CrashLoopBackOff \u6216\u8005\u6b63\u5e38\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u65e0\u6cd5\u518d\u6b63\u5e38\u542f\u52a8\u65f6\uff0c\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u8ba9\u670d\u52a1\u8fdb\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"Debug")," \u6a21\u5f0f\uff0c\u8fdb\u884c\u624b\u52a8\u542f\u52a8\u670d\u52a1\u67e5\u627e\u95ee\u9898\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u7ed9\u8fd0\u884c\u6709\u95ee\u9898\u7684 pod \u8fdb\u884c\u6dfb\u52a0 annnotation")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl annotate pod ${pod_name} --namespace ${namespace} selectdb.com.doris/runmode=debug\n")),(0,t.yg)("p",{parentName:"li"},"\u5f53\u670d\u52a1\u8fdb\u884c\u4e0b\u4e00\u6b21\u91cd\u542f\u65f6\u5019\uff0c\u670d\u52a1\u4f1a\u68c0\u6d4b\u5230\u6807\u8bc6 ",(0,t.yg)("inlineCode",{parentName:"p"},"Debug")," \u6a21\u5f0f\u542f\u52a8\u7684 annotation \u5c31\u4f1a\u8fdb\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"Debug")," \u6a21\u5f0f\u542f\u52a8\uff0cpod \u72b6\u6001\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"running"),"\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u5f53\u670d\u52a1\u8fdb\u5165 ",(0,t.yg)("inlineCode",{parentName:"strong"},"Debug")," \u6a21\u5f0f\uff0c\u6b64\u65f6\u670d\u52a1\u7684 pod \u663e\u793a\u4e3a\u6b63\u5e38\u72b6\u6001\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u5165 pod \u5185\u90e8")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl --namespace ${namespace} exec -ti ${pod_name} bash\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Debug")," \u4e0b\u624b\u52a8\u542f\u52a8\u670d\u52a1\uff0c\u5f53\u7528\u6237\u8fdb\u5165 pod \u5185\u90e8\uff0c\u901a\u8fc7\u4fee\u6539\u5bf9\u5e94\u914d\u7f6e\u6587\u4ef6\u6709\u5173\u7aef\u53e3\u8fdb\u884c\u624b\u52a8\u6267\u884c ",(0,t.yg)("inlineCode",{parentName:"strong"},"start_xx.sh")," \u811a\u672c\uff0c\u811a\u672c\u76ee\u5f55\u4e3a ",(0,t.yg)("inlineCode",{parentName:"strong"},"/opt/apache-doris/xx/bin")," \u4e0b\u3002")),(0,t.yg)("p",{parentName:"li"},"FE \u9700\u8981\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"query_port"),"\uff0cBE \u9700\u8981\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"heartbeat_service_port"),"\n\u4e3b\u8981\u662f\u907f\u514d",(0,t.yg)("inlineCode",{parentName:"p"},"Debug"),"\u6a21\u5f0f\u4e0b\u8fd8\u80fd\u901a\u8fc7 service \u8bbf\u95ee\u5230 crash \u7684\u8282\u70b9\u5bfc\u81f4\u8bef\u5bfc\u6d41\u3002"))),(0,t.yg)("h3",{id:"\u9000\u51fa-debug-\u6a21\u5f0f"},"\u9000\u51fa Debug \u6a21\u5f0f"),(0,t.yg)("p",null,"\u5f53\u670d\u52a1\u5b9a\u4f4d\u5230\u95ee\u9898\u540e\u9700\u8981\u9000\u51fa ",(0,t.yg)("inlineCode",{parentName:"p"},"Debug")," \u8fd0\u884c\uff0c\u6b64\u65f6\u53ea\u9700\u8981\u6309\u7167\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u5bf9\u5e94\u7684 pod\uff0c\u670d\u52a1\u5c31\u4f1a\u6309\u7167\u6b63\u5e38\u7684\u6a21\u5f0f\u542f\u52a8\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl delete pod ${pod_name} --namespace ${namespace}\n")),(0,t.yg)("admonition",{title:"Tip  ",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("strong",{parentName:"p"},"\u8fdb\u5165 pod \u5185\u90e8\u540e\uff0c\u9700\u8981\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u7684\u7aef\u53e3\u4fe1\u606f\uff0c\u624d\u80fd\u624b\u52a8\u542f\u52a8 \u76f8\u5e94\u7684 Doris \u7ec4\u4ef6"),"  "),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"FE \u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u8def\u5f84\u4e3a\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"/opt/apache-doris/fe/conf/fe.conf")," \u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"query_port=9030")," \u914d\u7f6e\u3002  "),(0,t.yg)("li",{parentName:"ul"},"BE \u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u8def\u5f84\u4e3a\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"/opt/apache-doris/be/conf/be.conf")," \u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"heartbeat_service_port=9050")," \u914d\u7f6e\u3002  "))),(0,t.yg)("h2",{id:"\u670d\u52a1\u6269\u7f29\u5bb9"},"\u670d\u52a1\u6269\u7f29\u5bb9"),(0,t.yg)("p",null,"Doris \u5728 K8s \u4e4b\u4e0a\u7684\u6269\u7f29\u5bb9\u53ef\u901a\u8fc7\u4fee\u6539 DorisCluster \u8d44\u6e90\u5bf9\u5e94\u7ec4\u4ef6\u7684 replicas \u5b57\u6bb5\u6765\u5b9e\u73b0\u3002\u4fee\u6539\u53ef\u76f4\u63a5\u7f16\u8f91\u5bf9\u5e94\u7684\u8d44\u6e90\uff0c\u4e5f\u53ef\u901a\u8fc7\u547d\u4ee4\u7684\u65b9\u5f0f\u3002"),(0,t.yg)("h3",{id:"\u83b7\u53d6-doriscluster-\u8d44\u6e90"},"\u83b7\u53d6 DorisCluster \u8d44\u6e90"),(0,t.yg)("p",null,"\u4f7f\u7528\u547d\u4ee4 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl --namespace {namespace} get doriscluster")," \u83b7\u53d6\u5df2\u90e8\u7f72 DorisCluster (\u7b80\u79f0 dcr ) \u8d44\u6e90\u7684\u540d\u79f0\u3002\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"doris")," \u4e3a namespace."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl --namespace doris get doriscluster\nNAME                  FESTATUS    BESTATUS    CNSTATUS   BROKERSTATUS\ndoriscluster-sample   available   available\n")),(0,t.yg)("h3",{id:"\u6269\u7f29\u5bb9\u8d44\u6e90"},"\u6269\u7f29\u5bb9\u8d44\u6e90"),(0,t.yg)("p",null,"K8s \u6240\u6709\u8fd0\u7ef4\u64cd\u4f5c\u901a\u8fc7\u4fee\u6539\u8d44\u6e90\u4e3a\u6700\u7ec8\u72b6\u6001\uff0c\u7531 Operator \u670d\u52a1\u81ea\u52a8\u5b8c\u6210\u8fd0\u7ef4\u3002\u6269\u7f29\u5bb9\u64cd\u4f5c\u53ef\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl --namespace {namespace}  edit doriscluster {dcr_name}")," \u76f4\u63a5\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\u4fee\u6539\u5bf9\u5e94 spec \u7684 replicas \u503c\uff0c\u4fdd\u5b58\u9000\u51fa\u540e Doris-Operator \u5b8c\u6210\u8fd0\u7ef4\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b9e\u73b0\u4e0d\u540c\u7ec4\u4ef6\u7684\u6269\u7f29\u5bb9\u3002"),(0,t.yg)("h4",{id:"fe-\u6269\u5bb9"},"FE \u6269\u5bb9"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u67e5\u770b\u5f53\u524d FE \u670d\u52a1\u6570\u91cf")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=fe"\nNAME                       READY   STATUS    RESTARTS       AGE\ndoriscluster-sample-fe-0   1/1     Running   0              10d\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6269\u5bb9 FE")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris patch doriscluster doriscluster-sample --type merge --patch \'{"spec":{"feSpec":{"replicas":3}}}\'\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u68c0\u6d4b\u6269\u5bb9\u7ed3\u679c")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=fe"\nNAME                       READY   STATUS    RESTARTS   AGE\ndoriscluster-sample-fe-2   1/1     Running   0          9m37s\ndoriscluster-sample-fe-1   1/1     Running   0          9m37s\ndoriscluster-sample-fe-0   1/1     Running   0          8m49s\n')))),(0,t.yg)("h4",{id:"be-\u6269\u5bb9"},"BE \u6269\u5bb9"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u67e5\u770b\u5f53\u524d BE \u670d\u52a1\u6570\u91cf")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=be"\nNAME                       READY   STATUS    RESTARTS      AGE\ndoriscluster-sample-be-0   1/1     Running   0             3d2h\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6269\u5bb9 BE")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris patch doriscluster doriscluster-sample --type merge --patch \'{"spec":{"beSpec":{"replicas":3}}}\'\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u68c0\u6d4b\u6269\u5bb9\u7ed3\u679c")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=be"\nNAME                       READY   STATUS    RESTARTS      AGE\ndoriscluster-sample-be-0   1/1     Running   0             3d2h\ndoriscluster-sample-be-2   1/1     Running   0             12m\ndoriscluster-sample-be-1   1/1     Running   0             12m\n')))),(0,t.yg)("h3",{id:"\u8282\u70b9\u7f29\u5bb9"},"\u8282\u70b9\u7f29\u5bb9"),(0,t.yg)("p",null,"\u5173\u4e8e\u8282\u70b9\u7f29\u5bb9\u95ee\u9898\uff0cDoris-Operator \u76ee\u524d\u5e76\u4e0d\u80fd\u5f88\u597d\u7684\u652f\u6301\u8282\u70b9\u5b89\u5168\u4e0b\u7ebf\uff0c\u5728\u8fd9\u91cc\u4ecd\u80fd\u591f\u901a\u8fc7\u51cf\u5c11\u96c6\u7fa4\u7ec4\u4ef6\u7684 replicas \u5c5e\u6027\u6765\u5b9e\u73b0\u51cf\u5c11 FE \u6216 BE \u7684\u76ee\u7684\uff0c\u8fd9\u91cc\u662f\u76f4\u63a5 stop \u8282\u70b9\u6765\u5b9e\u73b0\u8282\u70b9\u4e0b\u7ebf\uff0c\u5f53\u524d\u7248\u672c\u7684 Doris-Operator \u5e76\u672a\u80fd\u5b9e\u73b0 ",(0,t.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},"decommission")," \u5b89\u5168\u8f6c\u79fb\u526f\u672c\u540e\u4e0b\u7ebf\u3002\u7531\u6b64\u53ef\u80fd\u5f15\u53d1\u4e00\u4e9b\u95ee\u9898\u53ca\u5176\u6ce8\u610f\u4e8b\u9879\u5982\u4e0b"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8868\u5b58\u5728\u5355\u526f\u672c\u60c5\u51b5\u4e0b\u8d38\u7136\u4e0b\u7ebf BE \u8282\u70b9\uff0c\u4e00\u5b9a\u4f1a\u6709\u6570\u636e\u4e22\u5931\uff0c\u5c3d\u53ef\u80fd\u907f\u514d\u6b64\u64cd\u4f5c\u3002"),(0,t.yg)("li",{parentName:"ul"},"FE Follower \u8282\u70b9\u5c3d\u91cf\u907f\u514d\u968f\u610f\u4e0b\u7ebf\uff0c\u53ef\u80fd\u5e26\u6765\u5143\u6570\u636e\u635f\u574f\u5f71\u54cd\u670d\u52a1\u3002"),(0,t.yg)("li",{parentName:"ul"},"FE Observer \u7c7b\u578b\u8282\u70b9\u53ef\u4ee5\u968f\u610f\u4e0b\u7ebf\uff0c\u5e76\u65e0\u98ce\u9669\u3002"),(0,t.yg)("li",{parentName:"ul"},"CN \u8282\u70b9\u4e0d\u6301\u6709\u6570\u636e\u526f\u672c\uff0c\u53ef\u4ee5\u968f\u610f\u4e0b\u7ebf\uff0c\u4f46\u56e0\u6b64\u4f1a\u635f\u5931\u5b58\u5728\u4e8e\u8be5 CN \u8282\u70b9\u7684\u8fdc\u7aef\u6570\u636e\u7f13\u5b58\uff0c\u5bfc\u81f4\u6570\u636e\u67e5\u8be2\u77ed\u65f6\u95f4\u5185\u5b58\u5728\u4e00\u5b9a\u7684\u6027\u80fd\u56de\u9000\u3002")),(0,t.yg)("h2",{id:"\u5347\u7ea7-doris-\u96c6\u7fa4"},"\u5347\u7ea7 Doris \u96c6\u7fa4"),(0,t.yg)("p",null,"Doris \u96c6\u7fa4\u6574\u4f53\u5347\u7ea7\u9700\u8981\u5148\u5347\u7ea7 BE\uff0c\u518d\u5347\u7ea7 FE\u3002Doris Operator \u57fa\u4e8e Kubernetes \u7684 ",(0,t.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/"},"\u6eda\u52a8\u66f4\u65b0\u529f\u80fd")," \u5b9e\u73b0\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u6eda\u52a8\u5e73\u6ed1\u5347\u7ea7\u3002"),(0,t.yg)("h3",{id:"\u5347\u7ea7\u524d\u6ce8\u610f\u4e8b\u9879"},"\u5347\u7ea7\u524d\u6ce8\u610f\u4e8b\u9879"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5347\u7ea7\u64cd\u4f5c\u63a8\u8350\u5728\u4e1a\u52a1\u4f4e\u5cf0\u671f\u8fdb\u884c\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u6eda\u52a8\u5347\u7ea7\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5bfc\u81f4\u8fde\u63a5\u5230\u88ab\u5173\u95ed\u8282\u70b9\u7684\u8fde\u63a5\u5931\u6548\uff0c\u9020\u6210\u8bf7\u6c42\u5931\u8d25\uff0c\u5bf9\u4e8e\u8fd9\u7c7b\u4e1a\u52a1\uff0c\u63a8\u8350\u5728\u5ba2\u6237\u7aef\u6dfb\u52a0\u91cd\u8bd5\u80fd\u529b\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5347\u7ea7\u524d\u53ef\u4ee5\u9605\u8bfb ",(0,t.yg)("a",{parentName:"li",href:"/zh-CN/docs/admin-manual/cluster-management/upgrade"},"\u5e38\u89c4\u5347\u7ea7\u624b\u518c"),"\uff0c\u4fbf\u4e8e\u7406\u89e3\u5347\u7ea7\u4e2d\u7684\u4e00\u4e9b\u539f\u7406\u548c\u6ce8\u610f\u4e8b\u9879\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5347\u7ea7\u524d\u65e0\u6cd5\u5bf9\u6570\u636e\u548c\u5143\u6570\u636e\u7684\u517c\u5bb9\u6027\u8fdb\u884c\u9a8c\u8bc1\uff0c\u56e0\u6b64\u96c6\u7fa4\u5347\u7ea7\u4e00\u5b9a\u8981\u907f\u514d\u6570\u636e\u5b58\u5728 \u5355\u526f\u672c \u60c5\u51b5 \u548c \u96c6\u7fa4\u5355 FE FOLLOWER \u8282\u70b9\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u8282\u70b9\u91cd\u542f\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u89e6\u53d1\u4e0d\u5fc5\u8981\u7684\u96c6\u7fa4\u5747\u8861\u548c\u526f\u672c\u4fee\u590d\u903b\u8f91\uff0c\u5148\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5173\u95ed")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'admin set frontend config("disable_balance" = "true");\nadmin set frontend config("disable_colocate_balance" = "true");\nadmin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Doris \u5347\u7ea7\u8bf7\u9075\u5b88\u4e0d\u8981\u8de8\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u5173\u952e\u8282\u70b9\u7248\u672c\u5347\u7ea7\u7684\u539f\u5219\uff0c\u82e5\u8981\u8de8\u591a\u4e2a\u5173\u952e\u8282\u70b9\u7248\u672c\u5347\u7ea7\uff0c\u5148\u5347\u7ea7\u5230\u6700\u8fd1\u7684\u5173\u952e\u8282\u70b9\u7248\u672c\uff0c\u968f\u540e\u518d\u4f9d\u6b21\u5f80\u540e\u5347\u7ea7\uff0c\u82e5\u662f\u975e\u5173\u952e\u8282\u70b9\u7248\u672c\uff0c\u5219\u53ef\u5ffd\u7565\u8df3\u8fc7\u3002\u5177\u4f53\u53c2\u8003 ",(0,t.yg)("a",{parentName:"li",href:"/zh-CN/docs/admin-manual/cluster-management/upgrade"},"\u5347\u7ea7\u7248\u672c\u8bf4\u660e"))),(0,t.yg)("h3",{id:"\u5347\u7ea7\u64cd\u4f5c"},"\u5347\u7ea7\u64cd\u4f5c"),(0,t.yg)("p",null,"\u5347\u7ea7\u8fc7\u7a0b\u8282\u70b9\u7c7b\u578b\u987a\u5e8f\u5982\u4e0b\uff0c\u5982\u679c\u67d0\u7c7b\u578b\u8282\u70b9\u4e0d\u5b58\u5728\u5219\u8df3\u8fc7\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"  cn/be -> fe -> broker\n")),(0,t.yg)("p",null,"\u5efa\u8bae\u4f9d\u6b21\u4fee\u6539\u5bf9\u5e94\u96c6\u7fa4\u7ec4\u4ef6\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"image")," \u7136\u540e \u5e94\u7528\u8be5\u914d\u7f6e\uff0c\u5f85\u5f53\u524d\u7c7b\u578b\u7684\u7ec4\u4ef6\u5b8c\u5168\u5347\u7ea7\u6210\u529f\u72b6\u6001\u6062\u590d\u6b63\u5e38\u540e\uff0c\u518d\u8fdb\u884c\u4e0b\u4e00\u4e2a\u7c7b\u578b\u8282\u70b9\u7684\u6eda\u52a8\u5347\u7ea7\u3002"),(0,t.yg)("h4",{id:"\u5347\u7ea7-be"},"\u5347\u7ea7 BE"),(0,t.yg)("p",null,"\u5982\u679c\u4fdd\u7559\u4e86\u96c6\u7fa4\u7684 crd\uff08Doris Operator \u5b9a\u4e49\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"DorisCluster")," \u7c7b\u578b\u8d44\u6e90\u540d\u79f0\u7684\u7b80\u5199\uff09\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8be5\u914d\u7f6e\u6587\u4ef6\u5e76\u4e14 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl apply")," \u7684\u547d\u4ee4\u6765\u8fdb\u884c\u5347\u7ea7\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"spec.beSpec.image")),(0,t.yg)("p",{parentName:"li"},"\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"selectdb/doris.be-ubuntu:2.0.4")," \u53d8\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"selectdb/doris.be-ubuntu:2.1.0")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ vim doriscluster-sample.yaml\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fdd\u5b58\u4fee\u6539\u540e\u5e94\u7528\u672c\u6b21\u4fee\u6539\u8fdb\u884c be \u5347\u7ea7\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ kubectl apply -f doriscluster-sample.yaml -n doris\n")),(0,t.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl edit dcr")," \u7684\u65b9\u5f0f\u76f4\u63a5\u4fee\u6539\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u770b namespace \u4e3a 'doris' \u4e0b\u7684 dcr \u5217\u8868\uff0c\u83b7\u53d6\u9700\u8981\u66f4\u65b0\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"cluster_name")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ kubectl get dcr -n doris\nNAME                  FESTATUS    BESTATUS    CNSTATUS\ndoriscluster-sample   available   available\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u3001\u4fdd\u5b58\u5e76\u751f\u6548"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ kubectl edit dcr doriscluster-sample -n doris\n")),(0,t.yg)("p",{parentName:"li"},"\u8fdb\u5165\u6587\u672c\u7f16\u8f91\u5668\u540e\uff0c\u5c06\u627e\u5230",(0,t.yg)("inlineCode",{parentName:"p"},"spec.beSpec.image"),"\uff0c\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"selectdb/doris.be-ubuntu:2.0.4")," \u4fee\u6539\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"selectdb/doris.be-ubuntu:2.1.0"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u770b\u5347\u7ea7\u8fc7\u7a0b\u548c\u7ed3\u679c\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ kubectl get pod -n doris\n")))),(0,t.yg)("p",null,"\u5f53\u6240\u6709 Pod \u90fd\u91cd\u5efa\u5b8c\u6bd5\u8fdb\u5165 Running \u72b6\u6001\u540e\uff0c\u5347\u7ea7\u5b8c\u6210\u3002"),(0,t.yg)("h4",{id:"\u5347\u7ea7-fe"},"\u5347\u7ea7 FE"),(0,t.yg)("p",null,"\u5982\u679c\u4fdd\u7559\u4e86\u96c6\u7fa4\u7684 crd\uff08Doris Operator \u5b9a\u4e49\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"DorisCluster")," \u7c7b\u578b\u8d44\u6e90\u540d\u79f0\u7684\u7b80\u5199\uff09\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8be5\u914d\u7f6e\u6587\u4ef6\u5e76\u4e14 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl apply")," \u7684\u547d\u4ee4\u6765\u8fdb\u884c\u5347\u7ea7\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"spec.feSpec.image")),(0,t.yg)("p",{parentName:"li"},"\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"selectdb/doris.fe-ubuntu:2.0.4")," \u53d8\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"selectdb/doris.fe-ubuntu:2.1.0")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ vim doriscluster-sample.yaml\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fdd\u5b58\u4fee\u6539\u540e\u5e94\u7528\u672c\u6b21\u4fee\u6539\u8fdb\u884c be \u5347\u7ea7\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ kubectl apply -f doriscluster-sample.yaml -n doris\n")))),(0,t.yg)("p",null,"\u4e5f\u53ef\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl edit dcr")," \u7684\u65b9\u5f0f\u76f4\u63a5\u4fee\u6539\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u3001\u4fdd\u5b58\u5e76\u751f\u6548"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ kubectl edit dcr doriscluster-sample -n doris\n")),(0,t.yg)("p",{parentName:"li"},"\u8fdb\u5165\u6587\u672c\u7f16\u8f91\u5668\u540e\uff0c\u5c06\u627e\u5230",(0,t.yg)("inlineCode",{parentName:"p"},"spec.feSpec.image"),"\uff0c\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"selectdb/doris.fe-ubuntu:2.0.4")," \u4fee\u6539\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"selectdb/doris.fe-ubuntu:2.1.0"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u770b\u5347\u7ea7\u8fc7\u7a0b\u548c\u7ed3\u679c"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"$ kubectl get pod -n doris\n")))),(0,t.yg)("p",null,"\u5f53\u6240\u6709 Pod \u90fd\u91cd\u5efa\u5b8c\u6bd5\u8fdb\u5165 Running \u72b6\u6001\u540e\uff0c\u5347\u7ea7\u5b8c\u6210\u3002"),(0,t.yg)("h3",{id:"\u5347\u7ea7\u5b8c\u6210\u5904\u7406"},"\u5347\u7ea7\u5b8c\u6210\u5904\u7406"),(0,t.yg)("h4",{id:"\u9a8c\u8bc1\u96c6\u7fa4\u8282\u70b9\u72b6\u6001"},"\u9a8c\u8bc1\u96c6\u7fa4\u8282\u70b9\u72b6\u6001"),(0,t.yg)("p",null,"\u901a\u8fc7  ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-config-cluster#%E8%AE%BF%E9%97%AE%E9%85%8D%E7%BD%AE"},"\u8bbf\u95ee Doris \u96c6\u7fa4")," \u6587\u6863\u63d0\u4f9b\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"mysql-client")," \u8bbf\u95ee Doris\u3002\n\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"show frontends")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"show backends")," \u7b49 SQL \u67e5\u770b\u5404\u4e2a\u7ec4\u4ef6\u7684 \u7248\u672c \u548c \u72b6\u6001\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> show frontends\\G;\n*************************** 1. row ***************************\n              Name: fe_13c132aa_3281_4f4f_97e8_655d01287425\n              Host: doriscluster-sample-fe-0.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: false\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2422\n     LastStartTime: 2024-02-19 06:38:47\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: Yes\n*************************** 2. row ***************************\n              Name: fe_f1a9d008_d110_4780_8e60_13d392faa54e\n              Host: doriscluster-sample-fe-2.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: true\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2423\n     LastStartTime: 2024-02-19 06:37:35\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: No\n*************************** 3. row ***************************\n              Name: fe_e42bf9da_006f_4302_b861_770d2c955a47\n              Host: doriscluster-sample-fe-1.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: false\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2422\n     LastStartTime: 2024-02-19 06:38:17\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: No\n3 rows in set (0.02 sec)\n")),(0,t.yg)("p",null,"\u82e5 FE \u8282\u70b9 ",(0,t.yg)("inlineCode",{parentName:"p"},"alive")," \u72b6\u6001\u4e3a true\uff0c\u4e14 ",(0,t.yg)("inlineCode",{parentName:"p"},"Version")," \u503c\u4e3a\u65b0\u7248\u672c\uff0c\u5219\u8be5 FE \u8282\u70b9\u5347\u7ea7\u6210\u529f\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'mysql> show backends\\G;\n*************************** 1. row ***************************\n              BackendId: 10002\n                   Host: doriscluster-sample-be-0.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 06:37:56\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 14\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:31:48","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n*************************** 2. row ***************************\n              BackendId: 10003\n                   Host: doriscluster-sample-be-1.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 06:37:35\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 8\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:31:43","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n*************************** 3. row ***************************\n              BackendId: 11024\n                   Host: doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 08:50:36\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 0\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:32:04","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n3 rows in set (0.01 sec)\n')),(0,t.yg)("p",null,"\u82e5 BE \u8282\u70b9 ",(0,t.yg)("inlineCode",{parentName:"p"},"alive")," \u72b6\u6001\u4e3a true\uff0c\u4e14 ",(0,t.yg)("inlineCode",{parentName:"p"},"Version")," \u503c\u4e3a\u65b0\u7248\u672c\uff0c\u5219\u8be5 BE \u8282\u70b9\u5347\u7ea7\u6210\u529f"),(0,t.yg)("h4",{id:"\u6062\u590d\u96c6\u7fa4\u526f\u672c\u540c\u6b65\u548c\u5747\u8861"},"\u6062\u590d\u96c6\u7fa4\u526f\u672c\u540c\u6b65\u548c\u5747\u8861"),(0,t.yg)("p",null,"\u5728\u786e\u8ba4\u5404\u4e2a\u8282\u70b9\u72b6\u6001\u65e0\u8bef\u540e\uff0c\u6267\u884c\u4ee5\u4e0b SQL \u6062\u590d\u96c6\u7fa4\u5747\u8861\u548c\u526f\u672c\u4fee\u590d\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'admin set frontend config("disable_balance" = "false");\nadmin set frontend config("disable_colocate_balance" = "false");\nadmin set frontend config("disable_tablet_scheduler" = "false");\n')))}m.isMDXComponent=!0}}]);