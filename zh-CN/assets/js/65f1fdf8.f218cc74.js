"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[520275],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var l=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,d=c["".concat(p,".").concat(y)]||c[y]||m[y]||n;return r?l.createElement(d,i(i({ref:t},u),{},{components:r})):l.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}y.displayName="MDXCreateElement"},124074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var l=r(58168),a=(r(296540),r(15680));const n={title:"Kubernetes \u90e8\u7f72",language:"zh-CN"},i=void 0,o={unversionedId:"install/k8s-deploy",id:"version-1.2/install/k8s-deploy",title:"Kubernetes \u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/install/k8s-deploy.md",sourceDirName:"install",slug:"/install/k8s-deploy",permalink:"/zh-CN/docs/1.2/install/k8s-deploy",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Kubernetes \u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"\u90e8\u7f72 Docker \u96c6\u7fa4",permalink:"/zh-CN/docs/1.2/install/construct-docker/run-docker-cluster"},next:{title:"\u901a\u7528\u7f16\u8bd1",permalink:"/zh-CN/docs/1.2/install/source-install/compilation-general"}},p={},s=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u542f\u52a8\u96c6\u7fa4",id:"\u542f\u52a8\u96c6\u7fa4",level:2},{value:"\u6269\u7f29\u5bb9",id:"\u6269\u7f29\u5bb9",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2},{value:"k8s\u7b80\u6613\u64cd\u4f5c\u547d\u4ee4",id:"k8s\u7b80\u6613\u64cd\u4f5c\u547d\u4ee4",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,l.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"k8s\u90e8\u7f72doris"},"K8s\u90e8\u7f72doris"),(0,a.yg)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5b89\u88c5 k8s"),(0,a.yg)("li",{parentName:"ul"},"\u6784\u5efa\u6216\u4e0b\u8f7ddoris\u955c\u50cf",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u6784\u5efa\u955c\u50cf ",(0,a.yg)("a",{parentName:"li",href:"./construct-docker/construct-docker-image"},"\u6784\u5efa Docker Image")," "),(0,a.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d\u955c\u50cf ",(0,a.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/doris/tags"},"https://hub.docker.com/r/apache/doris/tags")))),(0,a.yg)("li",{parentName:"ul"},"\u521b\u5efa\u6216\u4e0b\u8f7ddoris on k8s\u7684yml\u6587\u4ef6",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_follower.yml"},"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_follower.yml")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_be.yml"},"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_be.yml")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_cn.yml"},"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_cn.yml"))))),(0,a.yg)("h2",{id:"\u542f\u52a8\u96c6\u7fa4"},"\u542f\u52a8\u96c6\u7fa4"),(0,a.yg)("p",null,"\u542f\u52a8 FE\uff08\u89d2\u8272\u7c7b\u578b\u4e3a Follower\uff09\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create -f doris_follower.yml")," "),(0,a.yg)("p",null,"\u542f\u52a8 BE \uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create -f doris_be.yml")," "),(0,a.yg)("p",null,"\u542f\u52a8 BE\uff08\u89d2\u8272\u7c7b\u578b\u4e3a Compute Node\uff09\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create -f doris_cn.yml")),(0,a.yg)("h2",{id:"\u6269\u7f29\u5bb9"},"\u6269\u7f29\u5bb9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"FE",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301\u6269\u7f29\u5bb9\uff0c\u5efa\u8bae\u6309\u9700\u521d\u59cb\u53161\u4e2a\u6216\u80053\u4e2a\u8282\u70b9"))),(0,a.yg)("li",{parentName:"ul"},"BE",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u547d\u4ee4\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl scale statefulset doris-be-cluster1 --replicas=4")))),(0,a.yg)("li",{parentName:"ul"},"BE(\u89d2\u8272\u7c7b\u578b\u4e3a Compute Node)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u547d\u4ee4\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl scale statefulset doris-cn-cluster1 --replicas=4"))))),(0,a.yg)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,a.yg)("p",null,"\u4f7f\u7528 mysql-client \u8fde\u63a5\u5230 FE\uff0c\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"show backends"),"\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"show frontends"),"\u7b49\u64cd\u4f5c\u67e5\u770b\u5404\u8282\u70b9\u72b6\u6001"),(0,a.yg)("h2",{id:"k8s\u7b80\u6613\u64cd\u4f5c\u547d\u4ee4"},"k8s\u7b80\u6613\u64cd\u4f5c\u547d\u4ee4"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u9996\u6b21\u6267\u884cyml\u6587\u4ef6 ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl create -f xxx.yml")),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u6539yml\u6587\u4ef6\u540e\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl apply -f xxx.yml")),(0,a.yg)("li",{parentName:"ul"},"\u5220\u9664yml\u5b9a\u4e49\u7684\u6240\u6709\u8d44\u6e90 ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl delete -f xxx.yml")),(0,a.yg)("li",{parentName:"ul"},"\u67e5\u770bpod\u5217\u8868 ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl get pods")),(0,a.yg)("li",{parentName:"ul"},"\u8fdb\u5165\u5bb9\u5668 ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl exec -it xxx\uff08podName\uff09 -- /bin/sh")),(0,a.yg)("li",{parentName:"ul"},"\u67e5\u770b\u65e5\u5fd7 ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl logs xxx\uff08podName\uff09")),(0,a.yg)("li",{parentName:"ul"},"\u67e5\u770bip\u548c\u7aef\u53e3\u4fe1\u606f ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl get ep")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kubernetes.io"},"\u66f4\u591ak8s\u77e5\u8bc6"))),(0,a.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6570\u636e\u600e\u4e48\u6301\u4e45\u5316\uff1f"),(0,a.yg)("p",{parentName:"li"},"\u7528\u6237\u9700\u8981\u81ea\u884c\u6302\u8f7dpvc\uff0c\u6301\u4e45\u5316\u5143\u6570\u636e\u4fe1\u606f\uff0c\u6570\u636e\u4fe1\u606f\u6216\u8005\u65e5\u5fd7\u4fe1\u606f\u7b49")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u600e\u4e48\u5b89\u5168\u7f29\u5bb9BE\u8282\u70b9\uff1f"),(0,a.yg)("p",{parentName:"li"},"BE:\u5f53\u524d\u7f29\u5bb9\u4e4b\u524d\u9700\u8981\u7528\u6237\u624b\u52a8\u6267\u884c",(0,a.yg)("a",{parentName:"p",href:"../../docs/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},"ALTER-SYSTEM-DECOMMISSION-BACKEND")),(0,a.yg)("p",{parentName:"li"},"BE(\u89d2\u8272\u7c7b\u578b\u4e3a Compute Node): \u4e0d\u5b58\u50a8\u6570\u636e\u6587\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u7f29\u5bb9\uff0c",(0,a.yg)("a",{parentName:"p",href:"../../docs/advanced/compute_node"},"\u5173\u4e8e\u8ba1\u7b97\u8282\u70b9"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'FE\u542f\u52a8\u62a5\u9519"failed to init statefulSetName"'),(0,a.yg)("p",{parentName:"li"},"doris_follower.yml\u7684\u73af\u5883\u53d8\u91cf statefulSetName\u548cserviceName\u5fc5\u987b\u6210\u5bf9\u51fa\u73b0\uff0c\u6bd4\u5982\u914d\u7f6e\u4e86CN_SERVICE\uff0c\u5c31\u5fc5\u987b\u914d\u7f6eCN_STATEFULSET"))))}m.isMDXComponent=!0}}]);