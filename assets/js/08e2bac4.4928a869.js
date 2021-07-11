(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[5918],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),f=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=f(r),p=i,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var f=2;f<o;f++)l[f]=r[f];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},367:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294);function i(e){var t=e.src,r=e.w,i=e.h,o=e.alt;return n.createElement("img",{className:"doc-img",loading:"lazy",src:"/img/"+t+".png",width:r,height:i,alt:o})}},7912:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return f},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(4137)),l=r(367),a=["components"],s={id:"weekfield",title:"Bit from - Week field",sidebar_label:"Week field",slug:"/wpbitform-weekfield"},f=void 0,c={unversionedId:"Fields/weekfield",id:"Fields/weekfield",isDocsHomePage:!1,title:"Bit from - Week field",description:"\u2699 General Settings :",source:"@site/docs/Fields/Weekfield.mdx",sourceDirName:"Fields",slug:"/wpbitform-weekfield",permalink:"/docs/wpbitform-weekfield",editUrl:"https://github.com/Bit-Press/bitform-documentation/docs/Fields/Weekfield.mdx",version:"current",frontMatter:{id:"weekfield",title:"Bit from - Week field",sidebar_label:"Week field",slug:"/wpbitform-weekfield"}},d=[{value:"\u2699 General Settings :",id:"-general-settings-",children:[{value:"1.Field Key",id:"1field-key",children:[]},{value:"2.Field Label",id:"2field-label",children:[]},{value:"3.Admin Label",id:"3admin-label",children:[]}]}],u={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"-general-settings-"},"\u2699 General Settings :"),(0,o.kt)("h3",{id:"1field-key"},"1.Field Key"),(0,o.kt)("p",null,"The Field Key is unique for all fields. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"bf4-1"))," an example of field key. bf means ",(0,o.kt)("strong",{parentName:"p"},"bit form")," , 4 represent ",(0,o.kt)("strong",{parentName:"p"},"form id")," , 1 represent ",(0,o.kt)("strong",{parentName:"p"},"1st field")," of the form . These keys are used in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Success/Error Messages, Web Hooks, Redirect Page, Email Templates, Workflow & Integrations."))),(0,o.kt)("h3",{id:"2field-label"},"2.Field Label"),(0,o.kt)("p",null,"You can set a proper name of the field that is considered as a field label. This label name will appear on the front end of the form you will display. If you want you can hide the field label from the form ."),(0,o.kt)("h3",{id:"3admin-label"},"3.Admin Label"),(0,o.kt)("p",null,"This field is used for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Administration purposes")),". Admin can set a label to specify the label name on the responses page."),(0,o.kt)(l.Z,{src:"Field-Types/Month-Field-Bit-Form",alt:"Form-Field",w:"1900",h:"300",mdxType:"Image"}))}p.isMDXComponent=!0}}]);