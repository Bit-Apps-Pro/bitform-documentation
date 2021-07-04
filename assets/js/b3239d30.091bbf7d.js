(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[6783],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return h},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var g=n.createContext({}),s=function(e){var t=n.useContext(g),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=s(o),d=r,u=p["".concat(g,".").concat(d)]||p[d]||c[d]||a;return o?n.createElement(u,i(i({ref:t},h),{},{components:o})):n.createElement(u,i({ref:t},h))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},367:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(7294);function r(e){var t=e.src,o=e.w,r=e.h,a=e.alt;return n.createElement("img",{className:"doc-img",loading:"lazy",src:"/img/"+t+".png",width:o,height:r,alt:a})}},9899:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return g},metadata:function(){return s},toc:function(){return h},default:function(){return p}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i=o(367),l=["components"],g={id:"googlesheet",title:"Bit from Integration With Google Sheet",sidebar_label:"Google Sheet",slug:"/wpbitform-googlesheet"},s={unversionedId:"Integrations/googlesheet",id:"Integrations/googlesheet",isDocsHomePage:!1,title:"Bit from Integration With Google Sheet",description:"In a new addition to our integration section, recently, we have added a new integration with Google Sheet. From now on, you can store all the submitted data to google sheet by Bit Form.",source:"@site/docs/Integrations/Google-Sheet.mdx",sourceDirName:"Integrations",slug:"/wpbitform-googlesheet",permalink:"/docs/wpbitform-googlesheet",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Integrations/Google-Sheet.mdx",version:"current",sidebar_label:"Google Sheet",frontMatter:{id:"googlesheet",title:"Bit from Integration With Google Sheet",sidebar_label:"Google Sheet",slug:"/wpbitform-googlesheet"},sidebar:"someSidebar",previous:{title:"Bit from Integration With Pods",permalink:"/docs/wpbitform-pods"},next:{title:"Bit from Integration With Google Ads",permalink:"/docs/wpbitform-googleads"}},h=[{value:"Authorization Settings:",id:"authorization-settings",children:[]},{value:"Integration Settings:",id:"integration-settings",children:[]}],c={toc:h};function p(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a new addition to our integration section, recently, we have added a new integration with Google Sheet. From now on, you can store all the submitted data to google sheet by Bit Form."),(0,a.kt)("h2",{id:"authorization-settings"},"Authorization Settings:"),(0,a.kt)("p",null,"At first, select the name of the form you want to apply the Google Sheet integration; after that, follow the below instructions."),(0,a.kt)("p",null,"Follow the path:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Settings=> Integrations => Click on (+) => Click on \u2018Google Sheet\u2019"))),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Select Google Sheet Integration",alt:"google-Sheet",w:"1875",h:"420",mdxType:"Image"}),(0,a.kt)("p",null,"A. Integration Name: Set the integration name \u201cGoogle Sheet API\u201d."),(0,a.kt)("p",null,"B. Homepage URL: Enter the URL of your website."),(0,a.kt)("p",null,"C. Authorized Redirect URL: Enter the URL in which Google Sheet will send the authentication code."),(0,a.kt)("p",null,"D. Client ID & Secret: For client ID & secret you have to visit the Google API console. If you already have any Client ID & secret before then copy this to the field. If you don\u2019t have any then you have to create a new client ID & secret."),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/To get ID & Secret",alt:"google-Sheet",w:"1020",h:"550",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Credential to Google sheet",alt:"google-Sheet",w:"1020",h:"300",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Created ID & Secret",alt:"google-Sheet",w:"1913",h:"250",mdxType:"Image"}),(0,a.kt)("p",null,"If you don\u2019t have any then you have to create a new client ID & secret."),(0,a.kt)("p",null,"To get new Client Id & Client secret information go to Google API CONSOL=> Credentials=>Create Credentials=> OAuth Client ID => Select Application Type=> Give a Client Name => Add home page URL => Add authorized URL."),(0,a.kt)("p",null,"Register all the information and get your client ID & Secret information from google sheet."),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Create credentials_1",alt:"google-Sheet",w:"1875",h:"300",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Create credentials_2",alt:"google-Sheet",w:"1875",h:"300",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Create Credential_3",alt:"google-Sheet",w:"1875",h:"350",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Create Credential_4",alt:"google-Sheet",w:"1875",h:"500",mdxType:"Image"}),(0,a.kt)("p",null,"Now give ID & Secret to the fields & click \u2018Authorize\u2018 & you are ready to import all your data from Bit Form to your Google Sheet."),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Give Id & secret",alt:"google-Sheet",w:"1875",h:"350",mdxType:"Image"}),(0,a.kt)("h2",{id:"integration-settings"},"Integration Settings:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the specific spreadsheet from the drop-down menu which you have created before on Google Sheet.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then select the worksheet that belongs to the selected spreadsheet."))),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Spreadsheet, Worksheet,Header Row",alt:"google-Sheet",w:"1875",h:"300",mdxType:"Image"}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Now specify the header row. By default, the first row of the worksheet is considered as a header row.")),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Header Row",alt:"google-Sheet",w:"1875",h:"300",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Name of header row",alt:"google-Sheet",w:"1875",h:"300",mdxType:"Image"}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the refresh button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can now map the Bit form fields with the necessary Google field. You can send custom values on Google Sheet. After mapping the desired fields, click on \u2018Next\u2019."))),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Map",alt:"google-Sheet",w:"1875",h:"350",mdxType:"Image"}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To save the integration process click on \u201cFinish & Save\u201d.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now to run this integration you have created, navigate to conditional logic. Conditional logics helps you to trigger integration when it is necessary."))),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Conditional Logics",alt:"google-Sheet",w:"1875",h:"350",mdxType:"Image"}),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"After clicking update, all the information will be saved & you will be able to see all the submitted data through google sheet. When a form will be submitted, the information will be shown on the sheet.")),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Test",alt:"google-Sheet",w:"1875",h:"380",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Show in sheet",alt:"google-Sheet",w:"1875",h:"380",mdxType:"Image"}),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Also if you edit any data on the responses page, the data will be updated automatically on a google sheet.")),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Responses update",alt:"google-Sheet",w:"1875",h:"200",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Google-Sheet-Integration/Show update",alt:"Show in sheet",w:"1875",h:"400",mdxType:"Image"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Watch the video tutorial here!")),(0,a.kt)(i.Z,{youtube:!0,src:"https://youtu.be/Vb4CE-hXbbo",mdxType:"Video"}))}p.isMDXComponent=!0}}]);