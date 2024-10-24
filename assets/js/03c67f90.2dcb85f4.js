"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[3911,4629,3429],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),i=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(7462),n=a(7294),l=a(6010),s=a(2466),o=a(6775),u=a(1980),i=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,i]=f({queryString:a,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),h(e)}),[i,h,l]),tabValues:l}}var v=a(2389);const b="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==o&&(d(t),u(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function S(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(E,(0,r.Z)({},e,t)))}function T(e){const t=(0,v.Z)();return n.createElement(S,(0,r.Z)({key:String(t)},e))}},4481:(e,t,a)=>{a.d(t,{Z:()=>r});const r=[{Params:"Content-Type",value:"application/json",DataType:"String",Required:"required"},{Params:"Authorization",value:"Basic Auth",DataType:"String",Required:"required"},{Params:"Accept",value:"application/json",DataType:"String",Required:"required"}]},7285:(e,t,a)=>{a.d(t,{Z:()=>r});const r=[{StatusCode:"0x0200",Status:"SUCCESS",Message:"TRANSACTION SUCCESSFULL"},{StatusCode:"0x0201",Status:"UNAUTHORIZED",Message:"UNAUTHORIZED USER"},{StatusCode:"0x0202",Status:"FAILURE",Message:"FAILURE USER"},{StatusCode:"0x0203",Status:"MISSING_PARAMETER",Message:"MISSING PARAMETER"},{StatusCode:"0x0204",Status:"CONNECTION_TIMEOUT",Message:"CONNECTION TIMEOUT"},{StatusCode:"0x0205",Status:"SOMETHING_WENT_WRONG",Message:"SOMETHING WENT WRONG"},{StatusCode:"0x0206",Status:"PENDING",Message:"TRANSACTION PENDING"}]},7456:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);function n(e){let{children:t,className:a}=e;return r.createElement("span",{className:a},t)}},6525:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(7294);const n=e=>r.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>r.createElement("div",{className:"inner",key:7*t},r.createElement("b",{style:{fontSize:"16px"}},e.Params),r.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),r.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",r.createElement("br",null),r.createElement("span",{style:{fontWeight:"550",fontSize:"15px"}},e.value," ")))))},3779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(7294);const n=e=>r.createElement(r.Fragment,null,r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"Status Code"),r.createElement("th",null,"Status"),r.createElement("th",null,"Message")),(null==e?void 0:e.data)&&e.data.map(((e,t)=>r.createElement("tr",{key:8*t},r.createElement("td",null,e.StatusCode),r.createElement("td",null,e.Status),r.createElement("td",null,e.Message)))))))},7750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>f,toc:()=>v});var r=a(7462),n=(a(7294),a(3905)),l=a(7456),s=a(6525),o=a(4481),u=a(4866),i=a(5162),c=a(3779),d=a(7285);const p={id:"id-details-merchant",title:"Details Merchant",description:"Details Merchant",slug:"/v1/service/aeps/merchant",sidebar_position:2},m=void 0,f={unversionedId:"Aadhaar Banking/Merchant OnBoard/id-details-merchant",id:"Aadhaar Banking/Merchant OnBoard/id-details-merchant",title:"Details Merchant",description:"Details Merchant",source:"@site/docs/Aadhaar Banking/Merchant OnBoard/details-merchant.md",sourceDirName:"Aadhaar Banking/Merchant OnBoard",slug:"/v1/service/aeps/merchant",permalink:"/docs/v1/service/aeps/merchant",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"id-details-merchant",title:"Details Merchant",description:"Details Merchant",slug:"/v1/service/aeps/merchant",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Onboard Merchant",permalink:"/docs/v1/service/aeps/merchant-onboard"},next:{title:"Cash Withdrawal",permalink:"/docs/v1/service/aeps/withdrawal"}},h={},v=[{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Request",id:"request",level:3},{value:"Response Samples",id:"response-samples",level:3},{value:"Response Code",id:"response-code",level:3}],b={toc:v};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Details Merchant"),(0,n.kt)("admonition",{title:"Postman Collection",type:"tip"},(0,n.kt)("a",{href:"https://www.google.com",target:"_blank"},"AEPS")),(0,n.kt)("h3",{id:"url"},"URL"),(0,n.kt)(l.Z,{className:"get",mdxType:"Highlight"},"GET")," : ",(0,n.kt)("strong",null,"/v1/service/aeps/merchant/"),(0,n.kt)("h3",{id:"headers"},"Headers"),(0,n.kt)(s.default,{data:o.Z,mdxType:"HeaderMarkdown"}),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Example Request"',title:'"Example','Request"':!0},"    curl --location --request GET '/v1/service/aeps/merchant/9651807986' \\\n        --header 'Content-Type: application/json' \\\n        --header 'Authorization: Basic Og==' \\\n        --data ''\n")),(0,n.kt)("h3",{id:"response-samples"},"Response Samples"),(0,n.kt)(u.Z,{defaultValue:"found",values:[{label:"SUCCESS",value:"found"},{label:"FAILED",value:"failed"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"found",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0200",\n        "message": "Merchant details found successfully.",\n        "status": "SUCCESS",\n        "data": {\n            "merchantLoginId": "MID6XXXXX9694",\n            "fullName": "Anil",\n            "mobile": "96XXXXX986",\n            "email": "kumXXXXXXi@gmail.com",\n            "status": "1"\n        }\n    }\n'))),(0,n.kt)(i.Z,{value:"failed",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0202",\n        "status": "FAILURE",\n        "message": "Merchant Details Not Found"\n    }\n')))),(0,n.kt)("h3",{id:"response-code"},"Response Code"),(0,n.kt)(c.default,{data:d.Z,mdxType:"ResponseCode"}))}g.isMDXComponent=!0}}]);