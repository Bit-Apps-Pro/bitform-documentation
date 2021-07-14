(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[341],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},367:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7294);function n(e){var t=e.src,r=e.w,n=e.h,i=e.alt;return a.createElement("img",{className:"doc-img",loading:"lazy",src:"/img/"+t+".png",width:r,height:n,alt:i})}},8235:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var a=r(2122),n=r(9756),i=(r(7294),r(4137)),l=r(367),o=["components"],s={id:"passwordfield",title:"Bit from - Password field",sidebar_label:"Password field",slug:"/wpbitform-passwordfield"},d=void 0,c={unversionedId:"Fields/passwordfield",id:"Fields/passwordfield",isDocsHomePage:!1,title:"Bit from - Password field",description:"Password field takes sequence of characters. These characters can be text characters, special characters, numeric characters or any other valid input. The entering character will be masked up as a dot sign.",source:"@site/docs/Fields/PasswordField.mdx",sourceDirName:"Fields",slug:"/wpbitform-passwordfield",permalink:"/docs/wpbitform-passwordfield",editUrl:"https://github.com/Bit-Press/bitform-documentation/docs/Fields/PasswordField.mdx",version:"current",frontMatter:{id:"passwordfield",title:"Bit from - Password field",sidebar_label:"Password field",slug:"/wpbitform-passwordfield"},sidebar:"someSidebar",previous:{title:"Country field",permalink:"/docs/wpbitform-countryfield"},next:{title:"Email field",permalink:"/docs/wpbitform-emailfield"}},p=[{value:"\u2699 General Settings :",id:"-general-settings-",children:[{value:"1.Field Key",id:"1field-key",children:[]},{value:"2.Field Label",id:"2field-label",children:[]},{value:"3.Admin Label",id:"3admin-label",children:[]},{value:"5.Required",id:"5required",children:[]},{value:"5.Autofill",id:"5autofill",children:[]},{value:"6.Placeholder",id:"6placeholder",children:[]},{value:"7.Validations",id:"7validations",children:[]},{value:"8.Pattern",id:"8pattern",children:[]}]}],u={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Password field"))," takes sequence of characters. These characters can be text characters, special characters, numeric characters or any other valid input. The entering character will be masked up as a dot sign."),(0,i.kt)("h2",{id:"-general-settings-"},"\u2699 General Settings :"),(0,i.kt)("h3",{id:"1field-key"},"1.Field Key"),(0,i.kt)("p",null,"The Field Key is unique for all fields. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"bf4-1"))," an example of field key. bf means ",(0,i.kt)("strong",{parentName:"p"},"bit form")," , 4 represent ",(0,i.kt)("strong",{parentName:"p"},"form id")," , 1 represent ",(0,i.kt)("strong",{parentName:"p"},"1st field")," of the form . These keys are used in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Success/Error Messages, Web Hooks, Redirect Page, Email Templates, Workflow & Integrations."))),(0,i.kt)("h3",{id:"2field-label"},"2.Field Label"),(0,i.kt)("p",null,"You can set a proper name of the field that is considered as a field label. This label name will appear on the front end of the form you will display. If you want you can hide the field label from the form ."),(0,i.kt)("h3",{id:"3admin-label"},"3.Admin Label"),(0,i.kt)("p",null,"This field is used for ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Administration purposes")),". Admin can set a label to specify the label name on the responses page."),(0,i.kt)(l.Z,{src:"Field-Types/Passwordfield-Bit-Form",alt:"Form-Field",w:"1900",h:"300",mdxType:"Image"}),(0,i.kt)("h3",{id:"5required"},"5.Required"),(0,i.kt)("p",null,"By enabling this option, you can make the field required for the user if you need it. Also you can set an ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Error message"))," if you want the field required. Also you can set message as your requirements."),(0,i.kt)("h3",{id:"5autofill"},"5.Autofill"),(0,i.kt)("p",null,"To suggest auto field value from the browser, you need to enable the AutoFill property."),(0,i.kt)("h3",{id:"6placeholder"},"6.Placeholder"),(0,i.kt)("p",null,"A Placeholder is a property by which user can understand the usage of the field. Any text entered on the placeholder will be displayed on the fields. When the user starts writing on the field, the placeholder text will disappear."),(0,i.kt)("h3",{id:"7validations"},"7.Validations"),(0,i.kt)("p",null,"Users can use the password validation with some patterns which are also customizable. Password validation options are: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"At least one digit (0-9)"),(0,i.kt)("li",{parentName:"ul"},"At least one lowercase character (a-z)"),(0,i.kt)("li",{parentName:"ul"},"At least one uppercase character (A-Z)"),(0,i.kt)("li",{parentName:"ul"},"At least one special character"),(0,i.kt)("li",{parentName:"ul"},"Limit Password with ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"MINIMUM"))," & ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"MAXIMUM"))," character length   ")),(0,i.kt)(l.Z,{src:"Field-Types/Passwordfield-Bit-Form2",alt:"Form-Field",w:"1900",h:"300",mdxType:"Image"}),(0,i.kt)("h3",{id:"8pattern"},"8.Pattern"),(0,i.kt)("p",null,"You can set the pattern of the input of the field & also can set a custom regex pattern on the flag option"))}f.isMDXComponent=!0}}]);