(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[5260],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||l;return r?i.createElement(m,a(a({ref:t},u),{},{components:r})):i.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var d=2;d<l;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},367:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(7294);function n(e){var t=e.src,r=e.w,n=e.h,l=e.alt;return i.createElement("img",{className:"doc-img",loading:"lazy",src:"/img/"+t+".png",width:r,height:n,alt:l})}},7967:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var i=r(2122),n=r(9756),l=(r(7294),r(3905)),a=r(367),o=["components"],s={id:"multilinetextfield",title:"Bit from - Multi-Line Text field",sidebar_label:"Multi-Line Text field",slug:"/wpbitform-multilinetextfield"},d={unversionedId:"Fields/multilinetextfield",id:"Fields/multilinetextfield",isDocsHomePage:!1,title:"Bit from - Multi-Line Text field",description:"Multiline text field is similar to the Single Line field, but with a greater capacity. This field accepts multiple lines of plain text like paragraph text or description types.",source:"@site/docs/Fields/Multilinetextfield.mdx",sourceDirName:"Fields",slug:"/wpbitform-multilinetextfield",permalink:"/docs/wpbitform-multilinetextfield",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Fields/Multilinetextfield.mdx",version:"current",sidebar_label:"Multi-Line Text field",frontMatter:{id:"multilinetextfield",title:"Bit from - Multi-Line Text field",sidebar_label:"Multi-Line Text field",slug:"/wpbitform-multilinetextfield"},sidebar:"someSidebar",previous:{title:"Bit from - Textfield",permalink:"/docs/wpbitform-textfield"},next:{title:"Bit from - Checkbox field",permalink:"/docs/wpbitform-checkboxfield"}},u=[{value:"\u2699 General Settings :",id:"-general-settings-",children:[{value:"1. Field Key",id:"1-field-key",children:[]},{value:"2. Field Label",id:"2-field-label",children:[]},{value:"3. Admin Label",id:"3-admin-label",children:[]},{value:"4. Required",id:"4-required",children:[]},{value:"5. Placeholder",id:"5-placeholder",children:[]},{value:"6. Pattern",id:"6-pattern",children:[]}]}],p={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Multiline text field"))," is similar to the Single Line field, but with a greater capacity. This field accepts multiple lines of plain text like ",(0,l.kt)("strong",{parentName:"p"},"paragraph text")," or ",(0,l.kt)("strong",{parentName:"p"},"description types"),"."),(0,l.kt)("h2",{id:"-general-settings-"},"\u2699 General Settings :"),(0,l.kt)("h3",{id:"1-field-key"},"1. Field Key"),(0,l.kt)("p",null," The Field Key is unique for all fields. ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"bf4-1"))," an example of field key. bf means ",(0,l.kt)("strong",{parentName:"p"},"bit form")," , 4 represent ",(0,l.kt)("strong",{parentName:"p"},"form id")," , 1 represent ",(0,l.kt)("strong",{parentName:"p"},"1st field")," of the form . These keys are used in ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Success/Error Messages, Web Hooks, Redirect Page, Email Templates, Workflow & Integrations."))),(0,l.kt)("h3",{id:"2-field-label"},"2. Field Label"),(0,l.kt)("p",null," You can set a proper name of the field that is considered as a field label. This label name will appear on the front end of the form you will display. If you want you can hide the field label from the form ."),(0,l.kt)("h3",{id:"3-admin-label"},"3. Admin Label"),(0,l.kt)("p",null," This field is used for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Administration purposes")),". Admin can set a label to specify the label name on the responses page. "),(0,l.kt)("h3",{id:"4-required"},"4. Required"),(0,l.kt)("p",null," By enabling this option, you can make the field required for the user if you need it.  Also you can set an ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Error message"))," if you want the field required. Also you can set message as your requirements."),(0,l.kt)("br",null),(0,l.kt)(a.Z,{src:"Field-Types/Multiline-Text-Field-Bit-Form",alt:"Form-Field",w:"1900",h:"350",mdxType:"Image"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"5-placeholder"},"5. Placeholder"),(0,l.kt)("p",null," A Placeholder is a property by which user can understand the usage of the field. Any text entered on the placeholder will be displayed on the fields. When the user starts writing on the field, the placeholder text will disappear."),(0,l.kt)("h3",{id:"6-pattern"},"6. Pattern"),(0,l.kt)("p",null," You can set the pattern of the input of the field & also can set a custom regex pattern on the flag option."))}c.isMDXComponent=!0}}]);