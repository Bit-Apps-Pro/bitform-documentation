(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[1319],{4137:function(e,t,l){"use strict";l.d(t,{Zo:function(){return p},kt:function(){return c}});var i=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,i,r=function(e,t){if(null==e)return{};var l,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d=i.createContext({}),u=function(e){var t=i.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(l),c=r,m=f["".concat(d,".").concat(c)]||f[c]||s[c]||n;return l?i.createElement(m,o(o({ref:t},p),{},{components:l})):i.createElement(m,o({ref:t},p))}));function c(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,o=new Array(n);o[0]=f;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<n;u++)o[u]=l[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,l)}f.displayName="MDXCreateElement"},367:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var i=l(7294);function r(e){var t=e.src,l=e.w,r=e.h,n=e.alt;return i.createElement("img",{className:"doc-img",loading:"lazy",src:"/img/"+t+".png",width:l,height:r,alt:n})}},4307:function(e,t,l){"use strict";l.r(t),l.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var i=l(2122),r=l(9756),n=(l(7294),l(4137)),o=l(367),a=["components"],d={id:"fileuploadfield",title:"Bit from - File Upload field",sidebar_label:"File Upload field",slug:"/wpbitform-fileuploadfield"},u=void 0,p={unversionedId:"Fields/fileuploadfield",id:"Fields/fileuploadfield",isDocsHomePage:!1,title:"Bit from - File Upload field",description:"File upload field allows user to upload files like - image, audio, video, spreadsheet, doc & zip files. You can limit the size of the file from the settings option.",source:"@site/docs/Fields/FileUpload.mdx",sourceDirName:"Fields",slug:"/wpbitform-fileuploadfield",permalink:"/docs/wpbitform-fileuploadfield",editUrl:"https://github.com/Bit-Press/bitform-documentation/docs/Fields/FileUpload.mdx",version:"current",frontMatter:{id:"fileuploadfield",title:"Bit from - File Upload field",sidebar_label:"File Upload field",slug:"/wpbitform-fileuploadfield"},sidebar:"someSidebar",previous:{title:"URL field",permalink:"/docs/wpbitform-urlfield"},next:{title:"Date field",permalink:"/docs/wpbitform-datefield"}},s=[{value:"\u2699 General Settings :",id:"-general-settings-",children:[{value:"1.Field Key",id:"1field-key",children:[]},{value:"2.Field Label",id:"2field-label",children:[]},{value:"3.Admin Label",id:"3admin-label",children:[]},{value:"4.Upload Button Text:",id:"4upload-button-text",children:[]},{value:"5.Required:",id:"5required",children:[]},{value:"6.Allow Multiple:",id:"6allow-multiple",children:[]},{value:"7.Max upload size:",id:"7max-upload-size",children:[]},{value:"8.Allowed file type:",id:"8allowed-file-type",children:[]}]}],f={toc:s};function c(e){var t=e.components,l=(0,r.Z)(e,a);return(0,n.kt)("wrapper",(0,i.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"File upload"))," field allows user to upload files like - ",(0,n.kt)("strong",{parentName:"p"},"image, audio, video, spreadsheet, doc & zip files.")," You can limit the size of the file from the settings option."),(0,n.kt)("h2",{id:"-general-settings-"},"\u2699 General Settings :"),(0,n.kt)("h3",{id:"1field-key"},"1.Field Key"),(0,n.kt)("p",null,"The Field Key is unique for all fields. ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"bf4-1"))," an example of field key. bf means ",(0,n.kt)("strong",{parentName:"p"},"bit form")," , 4 represent ",(0,n.kt)("strong",{parentName:"p"},"form id")," , 1 represent ",(0,n.kt)("strong",{parentName:"p"},"1st field")," of the form . These keys are used in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Success/Error Messages, Web Hooks, Redirect Page, Email Templates, Workflow & Integrations."))),(0,n.kt)("h3",{id:"2field-label"},"2.Field Label"),(0,n.kt)("p",null,"You can set a proper name of the field that is considered as a field label. This label name will appear on the front end of the form you will display. If you want you can hide the field label from the form ."),(0,n.kt)("h3",{id:"3admin-label"},"3.Admin Label"),(0,n.kt)("p",null,"This field is used for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Administration purposes")),". Admin can set a label to specify the label name on the responses page."),(0,n.kt)("h3",{id:"4upload-button-text"},"4.Upload Button Text:"),(0,n.kt)("p",null,"You can change the text of the file upload button."),(0,n.kt)(o.Z,{src:"Field-Types/File-Upload-Bit-Form",alt:"Form-Field",w:"1900",h:"400",mdxType:"Image"}),(0,n.kt)("h3",{id:"5required"},"5.Required:"),(0,n.kt)("p",null,"By enabling this option you can make the field required for the user if you need."),(0,n.kt)("h3",{id:"6allow-multiple"},"6.Allow Multiple:"),(0,n.kt)("p",null,"Enable this option if you let your user select multiple files."),(0,n.kt)("h3",{id:"7max-upload-size"},"7.Max upload size:"),(0,n.kt)("p",null,"Set the maximum file upload size of your required file you will allow from user. "),(0,n.kt)("h3",{id:"8allowed-file-type"},"8.Allowed file type:"),(0,n.kt)("p",null,"From this option admin have to select the file type for the form submission. Admin can select multiple file types from the drop-down list Types are :"),(0,n.kt)("p",null,"\ud83d\udcc1 Image"),(0,n.kt)("p",null,"\ud83d\udcc1 Video"),(0,n.kt)("p",null,"\ud83d\udcc1 Audio"),(0,n.kt)("p",null,"\ud83d\udcc1 Documents"),(0,n.kt)("p",null,"\ud83d\udcc1 Zip"),(0,n.kt)("p",null,"\ud83d\udcc1 Presentation"),(0,n.kt)("p",null,"\ud83d\udcc1 Spreadsheet"))}c.isMDXComponent=!0}}]);