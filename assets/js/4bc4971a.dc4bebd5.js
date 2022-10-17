"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[1938],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const i={version:1,submitted_by:"greenhsu123",published_date:"tbd",category:"cloud",tags:["networking","role:cloud-engineer","size:small"]},o="Reduce Transmitted Data",s={unversionedId:"catalog/cloud/reduce-transmitted-data",id:"catalog/cloud/reduce-transmitted-data",title:"Reduce Transmitted Data",description:"Description",source:"@site/docs/catalog/cloud/reduce-transmitted-data.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/reduce-transmitted-data",permalink:"/catalog/cloud/reduce-transmitted-data",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/reduce-transmitted-data.md",tags:[{label:"networking",permalink:"/tags/networking"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"greenhsu123",published_date:"tbd",category:"cloud",tags:["networking","role:cloud-engineer","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Queuing non-urgent processing requests",permalink:"/catalog/cloud/queue-non-urgent-requests"},next:{title:"Set Storage Retention Policies",permalink:"/catalog/cloud/set-retention-policy-on-storage-resources"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reduce-transmitted-data"},"Reduce Transmitted Data"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"From an energy-efficiency perspective, it's better to minimise the size of the data transmitted so that less energy is required because the network traffic is reduced. "),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Minimise the size of data transmitted by only sending properties or values deemed necessary. "),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Concerning the SCI equation. Reducing the size of data will impact one part:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),": We reduce the total electricity required by reducing network traffic. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total size of data stored, we reduce the total embodied carbon.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,"Suppose we choose to transfer data  (e.g. payloads) to the client side as it is because some properties or values may be needed later. A better solution would be to consider curating the data set, ensuring only necessary properties are sent across the network so the overall network traffic is reduced. And in many use cases, certain properties or values can be correlated later. "),(0,a.kt)("p",null,"Another consideration worth noting is the choice between different data formats, e.g. XML v.s. Protobuf, where the latter is much more compact, will affect the overall network traffic. "),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It may reduce cloud bills because minimising the size of the data transmitted will cost less. "),(0,a.kt)("li",{parentName:"ul"},"If we minimise the dataset by taking away properties or values, there may be overhead to corelate the missing properties or values.s")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/energy-efficiency"},"Energy Efficiency Principle"))))}d.isMDXComponent=!0}}]);