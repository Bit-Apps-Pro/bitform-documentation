(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[8700],{4137:function(e,t,i){"use strict";i.d(t,{Zo:function(){return m},kt:function(){return h}});var o=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(i),h=r,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||n;return i?o.createElement(f,a(a({ref:t},m),{},{components:i})):o.createElement(f,a({ref:t},m))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<n;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},367:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var o=i(7294);function r(e){var t=e.src,i=e.w,r=e.h,n=e.alt;return o.createElement("img",{className:"doc-img",loading:"lazy",src:"/img/"+t+".png",width:i,height:r,alt:n})}},6301:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var o=i(7294);function r(e){var t=e.src,i=e.w,r=e.h;e.alt;return e.youtube?"undefined"!=typeof window?o.createElement("lite-youtube",{class:"youtube-vdo",videoid:t}):o.createElement(o.Fragment,null):o.createElement("video",{width:i,height:r,controls:!0},o.createElement("source",{src:"/video/"+t+".mp4",type:"video/mp4"}))}},9332:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var o=i(2122),r=i(9756),n=(i(7294),i(4137)),a=i(367),l=i(6301),s=["components"],c={id:"mailpoet",title:"Bit from Integration With MailPoet",sidebar_label:"MailPoet",slug:"/wpbitform-mailpoet"},m=void 0,u={unversionedId:"Integrations/mailpoet",id:"Integrations/mailpoet",isDocsHomePage:!1,title:"Bit from Integration With MailPoet",description:"Another integration that eases your email marketing is MailPoet integration via Bit form. When users submit any form, the email of that corresponding user will store in the newsletter list of MailPoet. For more details go through this documentation carefully.",source:"@site/docs/Integrations/MailPoet.mdx",sourceDirName:"Integrations",slug:"/wpbitform-mailpoet",permalink:"/docs/wpbitform-mailpoet",editUrl:"https://github.com/Bit-Press/bitform-documentation/docs/Integrations/MailPoet.mdx",version:"current",frontMatter:{id:"mailpoet",title:"Bit from Integration With MailPoet",sidebar_label:"MailPoet",slug:"/wpbitform-mailpoet"},sidebar:"someSidebar",previous:{title:"Mailchimp",permalink:"/docs/wpbitform-mailchimp"},next:{title:"Encharge",permalink:"/docs/wpbitform-encharge"}},p=[{value:"Authorization Process:",id:"authorization-process",children:[]},{value:"Integration Settings:",id:"integration-settings",children:[]}],h={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Another integration that eases your email marketing is MailPoet integration via Bit form. When users submit any form, the email of that corresponding user will store in the newsletter list of MailPoet. For more details go through this documentation carefully."),(0,n.kt)("h2",{id:"authorization-process"},"Authorization Process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"At first, select the form you want to apply the MailPoet integration. If you don\u2019t have any then create a new one from \u2018Create Form\u2019.  After that, follow the below instructions. Follow the path:"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings => Integrations =>  Click on (+) => Click on \u2018MailPoet\u2019")),"."),(0,n.kt)(a.Z,{src:"MailPoet/Create Form",alt:"MailPoet",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(a.Z,{src:"MailPoet/Settings to integration",alt:"MailPoet",w:"1020",h:"300",mdxType:"Image"}),(0,n.kt)(a.Z,{src:"MailPoet/Select MailPoet",alt:"MailPoet",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Before setting up the integration, you must confirm that the MailPoet plugin is activated on your site. Otherwise, the integration will not work.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, click on the \u2018Authorize\u2018 button to complete authorization settings."),(0,n.kt)(a.Z,{src:"MailPoet/Authorization",alt:"MailPoet",w:"1020",h:"300",mdxType:"Image"}))),(0,n.kt)("h2",{id:"integration-settings"},"Integration Settings:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After completing the authorization process, select the newsletter list that you have created before on MailPoet. By default, the name of the list is \u201cNewsletter Mailing List\u201c. You can select multiple lists from here. "),(0,n.kt)(a.Z,{src:"MailPoet/Select List",alt:"MailPoet",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then you have to map the form fields with MailPoet fields. By default, the field is \u201cEmail\u201c. Also, you set any field required on MailPoet it will be automatically displayed on your map settings. You can set multiple fields from map field settings."),(0,n.kt)(a.Z,{src:"MailPoet/Map Fields",alt:"MailPoet",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After clicking \u2018Finish & Save\u2018 you can see the integration you have created now. "),(0,n.kt)(a.Z,{src:"MailPoet/Finish&Save",alt:"MailPoet",w:"1020",h:"300",mdxType:"Image"}),(0,n.kt)(a.Z,{src:"MailPoet/MailPoet Integration",alt:"MailPoet",w:"1020",h:"390",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After completing the settings, you have to set the conditions when this integration works. Don\u2019t forget to specify the integration name; otherwise, the integration will not work correctly. Here we have set the condition that \u2013 every time when records will be created/ edited, on form submission the integration will be triggered."),(0,n.kt)(a.Z,{src:"MailPoet/Conditional Logic",alt:"MailPoet",w:"1020",h:"390",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, whenever a user will submit the form it will be added to the corresponding subscriber list of MailPoet. Also can view from form responses of Bit Form."),(0,n.kt)(a.Z,{src:"MailPoet/Subscriber List",alt:"MailPoet",w:"1020",h:"300",mdxType:"Image"}),(0,n.kt)(a.Z,{src:"MailPoet/Responses",alt:"MailPoet",w:"1020",h:"300",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can view every success API of the submitted data from the timeline of related info."),(0,n.kt)(a.Z,{src:"MailPoet/api response",alt:"MailPoet",w:"1020",h:"390",mdxType:"Image"}),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Watch the full video here!")))),(0,n.kt)(l.Z,{youtube:!0,src:"5hDcm4vVwcg",mdxType:"Video"}))}f.isMDXComponent=!0}}]);