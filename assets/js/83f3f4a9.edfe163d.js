"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[4045,4629,3429,2544],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?l.createElement(b,s(s({ref:t},c),{},{components:a})):l.createElement(b,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var l=a(7462),n=a(7294),r=a(6010),s=a(2466),i=a(6775),o=a(1980),u=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[o,u]=b({queryString:a,groupId:l}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,c.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),v=(()=>{const e=o??d;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var v=a(2389);const y="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),l=u[a].value;l!==i&&(d(t),o(l))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,r.Z)("tabs__item",h,null==s?void 0:s.className,{"tabs__item--active":i===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function S(e){const t=f(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",y)},n.createElement(g,(0,l.Z)({},e,t)),n.createElement(E,(0,l.Z)({},e,t)))}function T(e){const t=(0,v.Z)();return n.createElement(S,(0,l.Z)({key:String(t)},e))}},4481:(e,t,a)=>{a.d(t,{Z:()=>l});const l=[{Params:"Content-Type",value:"application/json",DataType:"String",Required:"required"},{Params:"Authorization",value:"Basic Auth",DataType:"String",Required:"required"},{Params:"Accept",value:"application/json",DataType:"String",Required:"required"}]},7285:(e,t,a)=>{a.d(t,{Z:()=>l});const l=[{StatusCode:"0x0200",Status:"SUCCESS",Message:"TRANSACTION SUCCESSFULL"},{StatusCode:"0x0201",Status:"UNAUTHORIZED",Message:"UNAUTHORIZED USER"},{StatusCode:"0x0202",Status:"FAILURE",Message:"FAILURE USER"},{StatusCode:"0x0203",Status:"MISSING_PARAMETER",Message:"MISSING PARAMETER"},{StatusCode:"0x0204",Status:"CONNECTION_TIMEOUT",Message:"CONNECTION TIMEOUT"},{StatusCode:"0x0205",Status:"SOMETHING_WENT_WRONG",Message:"SOMETHING WENT WRONG"},{StatusCode:"0x0206",Status:"PENDING",Message:"TRANSACTION PENDING"}]},7456:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);function n(e){let{children:t,className:a}=e;return l.createElement("span",{className:a},t)}},9958:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var l=a(7294);const n=e=>l.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>l.createElement("div",{className:"inner",key:4*t},l.createElement("b",{style:{fontSize:"16px"}},e.Parameter),l.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),l.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",l.createElement("br",null),!0===(null==e?void 0:e.isValueHtml)&&l.createElement(l.Fragment,null,l.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"},dangerouslySetInnerHTML:{__html:e.value}}),l.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.MaxLength&&`(Max Length: ${e.MaxLength})`)),!0!==(null==e?void 0:e.isValueHtml)&&l.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.value," ",e.MaxLength&&`(Max Length: ${e.MaxLength})`)))))},6525:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var l=a(7294);const n=e=>l.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>l.createElement("div",{className:"inner",key:7*t},l.createElement("b",{style:{fontSize:"16px"}},e.Params),l.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),l.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",l.createElement("br",null),l.createElement("span",{style:{fontWeight:"550",fontSize:"15px"}},e.value," ")))))},3779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var l=a(7294);const n=e=>l.createElement(l.Fragment,null,l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",null,"Status Code"),l.createElement("th",null,"Status"),l.createElement("th",null,"Message")),(null==e?void 0:e.data)&&e.data.map(((e,t)=>l.createElement("tr",{key:8*t},l.createElement("td",null,e.StatusCode),l.createElement("td",null,e.Status),l.createElement("td",null,e.Message)))))))},6644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>E,frontMatter:()=>b,metadata:()=>v,toc:()=>h});var l=a(7462),n=(a(7294),a(3905)),r=a(7456),s=a(6525),i=a(4481),o=a(9958);const u=[{Parameter:"billId",DataType:"String",MaxLength:50,Required:"Required",value:"Merchant Bill Id"}];var c=a(4866),d=a(5162),p=a(3779),m=a(7285);const b={id:"id-fetch-bill-by-billid",title:"Fetch Bill by BillId",description:"Fetch Bill by BillId",slug:"/v1/service/bbps/fetch/bill-by-billid",sidebar_position:2},f=void 0,v={unversionedId:"BBPS/id-fetch-bill-by-billid",id:"BBPS/id-fetch-bill-by-billid",title:"Fetch Bill by BillId",description:"Fetch Bill by BillId",source:"@site/docs/BBPS/fetch-bill-by-billid.md",sourceDirName:"BBPS",slug:"/v1/service/bbps/fetch/bill-by-billid",permalink:"/ipayments/docs/v1/service/bbps/fetch/bill-by-billid",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"id-fetch-bill-by-billid",title:"Fetch Bill by BillId",description:"Fetch Bill by BillId",slug:"/v1/service/bbps/fetch/bill-by-billid",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fetch Bill",permalink:"/ipayments/docs/v1/service/bbps/fetch/bill"},next:{title:"Fetch Biller by BillerId",permalink:"/ipayments/docs/v1/service/bbps/fetch/biller/fetch-by-billerid"}},y={},h=[{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Body Params",id:"body-params",level:2},{value:"Request",id:"request",level:3},{value:"Response Samples",id:"response-samples",level:3},{value:"Response Code",id:"response-code",level:3}],g={toc:h};function E(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Fetch Bill by BillId"),(0,n.kt)("admonition",{title:"Postman Collection",type:"tip"},(0,n.kt)("a",{href:"https://www.google.com",target:"_blank"},"BBPS")),(0,n.kt)("h3",{id:"url"},"URL"),(0,n.kt)(r.Z,{className:"get",mdxType:"Highlight"},"GET")," : ",(0,n.kt)("strong",null,"/v1/service/bbps/fetch/billByBillId"),(0,n.kt)("h3",{id:"headers"},"Headers"),(0,n.kt)(s.default,{data:i.Z,mdxType:"HeaderMarkdown"}),(0,n.kt)("h2",{id:"body-params"},"Body Params"),(0,n.kt)(o.default,{data:u,mdxType:"BodyParam"}),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Example Request"',title:'"Example','Request"':!0},"    curl --location --request GET '/v1/service/bbps/fetch/billByBillId' \\\n        --header 'Content-Type: application/json' \\\n        --header 'Authorization: Basic Og==' \\\n        --data '{\n            \"billId\": \"b140e4d9-XXXX-456a-XXXX-4955c132eee4\"\n        }'\n")),(0,n.kt)("h3",{id:"response-samples"},"Response Samples"),(0,n.kt)(c.Z,{defaultValue:"found",values:[{label:"SUCCESS",value:"found"},{label:"FAILED",value:"failed"}],mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"found",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0200",\n        "message": "Record fetched successfully.",\n        "status": "SUCCESS",\n        "data": ""\n    }\n'))),(0,n.kt)(d.Z,{value:"failed",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0202",\n        "status": "FAILURE",\n        "message": "Bill Not found with ID",\n        "data": {\n            "message": "Bill Not found with ID",\n            "remarks": "",\n            "status": "failure",\n            "statusCode": "400"\n        }\n    }\n')))),(0,n.kt)("h3",{id:"response-code"},"Response Code"),(0,n.kt)(p.default,{data:m.Z,mdxType:"ResponseCode"}))}E.isMDXComponent=!0}}]);