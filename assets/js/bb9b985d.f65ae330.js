"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[3881,4629,3429,2544],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,g=p["".concat(o,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(g,u(u({ref:t},d),{},{components:a})):n.createElement(g,u({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,u[1]=s;for(var i=2;i<l;i++)u[i]=a[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(7462),r=a(7294),l=a(6010),u=a(2466),s=a(6775),o=a(1980),i=a(7392),d=a(12);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[u,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,i]=g({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=o??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var v=a(2389);const h="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=i[a].value;n!==s&&(c(t),o(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:u}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},u,{className:(0,l.Z)("tabs__item",y,null==u?void 0:u.className,{"tabs__item--active":s===t})}),a??t)})))}function S(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(S,(0,n.Z)({},e,t)))}function T(e){const t=(0,v.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},4481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=[{Params:"Content-Type",value:"application/json",DataType:"String",Required:"required"},{Params:"Authorization",value:"Basic Auth",DataType:"String",Required:"required"},{Params:"Accept",value:"application/json",DataType:"String",Required:"required"}]},7285:(e,t,a)=>{a.d(t,{Z:()=>n});const n=[{StatusCode:"0x0200",Status:"SUCCESS",Message:"TRANSACTION SUCCESSFULL"},{StatusCode:"0x0201",Status:"UNAUTHORIZED",Message:"UNAUTHORIZED USER"},{StatusCode:"0x0202",Status:"FAILURE",Message:"FAILURE USER"},{StatusCode:"0x0203",Status:"MISSING_PARAMETER",Message:"MISSING PARAMETER"},{StatusCode:"0x0204",Status:"CONNECTION_TIMEOUT",Message:"CONNECTION TIMEOUT"},{StatusCode:"0x0205",Status:"SOMETHING_WENT_WRONG",Message:"SOMETHING WENT WRONG"},{StatusCode:"0x0206",Status:"PENDING",Message:"TRANSACTION PENDING"}]},7456:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{children:t,className:a}=e;return n.createElement("span",{className:a},t)}},9958:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294);const r=e=>n.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>n.createElement("div",{className:"inner",key:4*t},n.createElement("b",{style:{fontSize:"16px"}},e.Parameter),n.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),n.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",n.createElement("br",null),!0===(null==e?void 0:e.isValueHtml)&&n.createElement(n.Fragment,null,n.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"},dangerouslySetInnerHTML:{__html:e.value}}),n.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.MaxLength&&`(Max Length: ${e.MaxLength})`)),!0!==(null==e?void 0:e.isValueHtml)&&n.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.value," ",e.MaxLength&&`(Max Length: ${e.MaxLength})`)))))},6525:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294);const r=e=>n.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>n.createElement("div",{className:"inner",key:7*t},n.createElement("b",{style:{fontSize:"16px"}},e.Params),n.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),n.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",n.createElement("br",null),n.createElement("span",{style:{fontWeight:"550",fontSize:"15px"}},e.value," ")))))},3779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294);const r=e=>n.createElement(n.Fragment,null,n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"Status Code"),n.createElement("th",null,"Status"),n.createElement("th",null,"Message")),(null==e?void 0:e.data)&&e.data.map(((e,t)=>n.createElement("tr",{key:8*t},n.createElement("td",null,e.StatusCode),n.createElement("td",null,e.Status),n.createElement("td",null,e.Message)))))))},9749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>S,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var n=a(7462),r=(a(7294),a(3905)),l=a(7456),u=a(6525),s=a(4481),o=a(9958);const i=[{Parameter:"mobile",DataType:"String",MaxLength:10,Required:"Required",value:"Merchant Mobile Number "},{Parameter:"firstName",DataType:"String",MaxLength:20,Required:"Required",value:"Merchant First Name"},{Parameter:"middleName",DataType:"String",MaxLength:20,Required:"Required",value:" Merchant Middle Name"},{Parameter:"lastName",DataType:"String",MaxLength:20,Required:"Required",value:"Merchant Last Name "},{Parameter:"dob",DataType:"String",MaxLength:10,Required:"Required",value:"Merchant Date of Birth"},{Parameter:"address",DataType:"String",MaxLength:40,Required:"Required",value:"Merchant Address"},{Parameter:"email",DataType:"String",MaxLength:40,Required:"Required",value:"Merchant Email Id"},{Parameter:"pinCode",DataType:"String",MaxLength:6,Required:"Required",value:"Merchant Pin Code"},{Parameter:"gender",DataType:"String",MaxLength:12,Required:"Required",value:"Merchant Gneder"},{Parameter:"stateId",DataType:"String",MaxLength:40,Required:"Required",value:"Merchant State Id"},{Parameter:"districtId",DataType:"String",MaxLength:40,Required:"Required",value:"Merchant District Id"},{Parameter:"pan",DataType:"String",MaxLength:10,Required:"Required",value:"Merchant Pan Card Number"},{Parameter:"aadhaar",DataType:"String",MaxLength:12,Required:"Required",value:"Merchant Aaadhaar Number"}];var d=a(4866),c=a(5162),p=a(3779),m=a(7285);const g={id:"id-pan-docs-addAgent",title:"Add Agent",description:"Add Agent",slug:"/v1/service/pan/agent",sidebar_position:1},f=void 0,v={unversionedId:"Pan Card/id-pan-docs-addAgent",id:"Pan Card/id-pan-docs-addAgent",title:"Add Agent",description:"Add Agent",source:"@site/docs/Pan Card/add-agent.md",sourceDirName:"Pan Card",slug:"/v1/service/pan/agent",permalink:"/ipayments/docs/v1/service/pan/agent",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"id-pan-docs-addAgent",title:"Add Agent",description:"Add Agent",slug:"/v1/service/pan/agent",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pan Card",permalink:"/ipayments/docs/v1/service/pan"},next:{title:"Init",permalink:"/ipayments/docs/v1/service/pan/init"}},h={},y=[{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Body Params",id:"body-params",level:2},{value:"Request",id:"request",level:3},{value:"Response Samples",id:"response-samples",level:3},{value:"Response Code",id:"response-code",level:3}],b={toc:y};function S(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Add Agent"),(0,r.kt)("admonition",{title:"Postman Collection",type:"tip"},(0,r.kt)("a",{href:"https://www.google.com",target:"_blank"},"Pan Docs")),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)(l.Z,{className:"post",mdxType:"Highlight"},"POST")," : ",(0,r.kt)("strong",null,"/v1/service/pan/agent"),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)(u.default,{data:s.Z,mdxType:"HeaderMarkdown"}),(0,r.kt)("h2",{id:"body-params"},"Body Params"),(0,r.kt)(o.default,{data:i,mdxType:"BodyParam"}),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Example Request"',title:'"Example','Request"':!0},'    curl --location \'/v1/service/pan/agent\' \\\n        --header \'Content-Type: application/json\' \\\n        --header \'Authorization: Basic Og==\' \\\n        --data-raw \'{\n            "mobile" : "987XXXX221",\n            "firstName" : "Anil",\n            "middleName" : "",\n            "lastName" : "Kumar",\n            "dob" : "1985-12-02",\n            "address" : "address",\n            "email" : "anil@example.com",\n            "pinCode" : "222XXX",\n            "gender" :"Male",\n            "stateId" : "14",\n            "districtId" : "123",\n            "pan" : "ASDXXXX1A",\n            "aadhaar" : "3333XXXX1111"  \n        }\'\n')),(0,r.kt)("h3",{id:"response-samples"},"Response Samples"),(0,r.kt)(d.Z,{defaultValue:"found",values:[{label:"SUCCESS",value:"found"},{label:"FAILED",value:"failed"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"found",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0200",\n        "message": "Agent onboarded successfully.",\n        "status": "SUCCESS",\n        "data": {\n            "psaId": "PSA_987XXXX221",\n            "email": "anXX@example.com",\n            "mobile": "987XXXX221"\n        }\n    }\n'))),(0,r.kt)(c.Z,{value:"failed",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0202",\n        "status": "FAILURE",\n        "message": "The Agent already registered with UTI. Your psaId: XTTL012345"\n    }\n')))),(0,r.kt)("h3",{id:"response-code"},"Response Code"),(0,r.kt)(p.default,{data:m.Z,mdxType:"ResponseCode"}))}S.isMDXComponent=!0}}]);