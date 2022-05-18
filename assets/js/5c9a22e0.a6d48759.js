"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[341],{77616:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return c}});var i=a(83117),l=a(80102),n=(a(67294),a(3905)),r=a(56251),o=a(1993),s=["components"],d={id:"passwordfield",title:"Bit Form - Password field",sidebar_label:"Password field",slug:"/wpbitform-passwordfield"},p=void 0,m={unversionedId:"Fields/passwordfield",id:"Fields/passwordfield",title:"Bit Form - Password field",description:"Password field takes sequence of characters. These characters can be text characters, special characters, numeric characters or any other valid input. The entering character will be masked up as a dot sign.",source:"@site/docs/Fields/PasswordField.mdx",sourceDirName:"Fields",slug:"/wpbitform-passwordfield",permalink:"/wpbitform-passwordfield",editUrl:"https://github.com/Bit-Apps-Pro/bitform-documentation/blob/main/docs/Fields/PasswordField.mdx",tags:[],version:"current",frontMatter:{id:"passwordfield",title:"Bit Form - Password field",sidebar_label:"Password field",slug:"/wpbitform-passwordfield"},sidebar:"someSidebar",previous:{title:"Country field",permalink:"/wpbitform-countryfield"},next:{title:"Email field",permalink:"/wpbitform-emailfield"}},u={},c=[{value:"\u2699 General Settings",id:"-general-settings",level:2},{value:"1.Field Key",id:"1field-key",level:3},{value:"2.Field Label",id:"2field-label",level:3},{value:"3.Admin Label",id:"3admin-label",level:3},{value:"5.Required",id:"5required",level:3},{value:"5.Autofill",id:"5autofill",level:3},{value:"6.Placeholder",id:"6placeholder",level:3},{value:"7.Validations",id:"7validations",level:3},{value:"8.Pattern",id:"8pattern",level:3},{value:"9.Unique Entry Validation:",id:"9unique-entry-validation",level:3}],h={toc:c};function f(e){var t=e.components,a=(0,l.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Password field"))," takes ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"sequence of characters")),". These characters can be ",(0,n.kt)("inlineCode",{parentName:"p"},"text characters"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"special characters"),", numeric characters or any other valid input. The entering character will be masked up as a dot sign."),(0,n.kt)("h2",{id:"-general-settings"},"\u2699 General Settings"),(0,n.kt)(r.Z,{src:"Field-Types/Passwordfield-Bit-Form",alt:"Form-Field",w:"1900",h:"250",mdxType:"Image"}),(0,n.kt)("h3",{id:"1field-key"},"1.Field Key"),(0,n.kt)("p",null,"The Field Key is unique for all fields. ",(0,n.kt)("inlineCode",{parentName:"p"},"bf4-1")," an example of field key. bf means ",(0,n.kt)("inlineCode",{parentName:"p"},"bit form")," , 4 represent ",(0,n.kt)("inlineCode",{parentName:"p"},"form id")," , 1 represent ",(0,n.kt)("inlineCode",{parentName:"p"},"1st field")," of the form . These keys are used in ",(0,n.kt)("inlineCode",{parentName:"p"},"Success/Error Messages"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Web Hooks"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Redirect Page"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Email Templates"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Workflow")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"Integrations"),"."),(0,n.kt)("h3",{id:"2field-label"},"2.Field Label"),(0,n.kt)("p",null,"You can set a proper name of the field that is considered as a field label. This label name will appear on the front end of the form you will display. If you want you can hide the field label from the form ."),(0,n.kt)("h3",{id:"3admin-label"},"3.Admin Label"),(0,n.kt)("p",null,"This field is used for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Administration purposes")),". Admin can set a label to specify the label name on the responses page."),(0,n.kt)("h3",{id:"5required"},"5.Required"),(0,n.kt)("p",null,"By enabling this option, you can make the field required for the user if you need it. Also you can set an `Error message`` if you want the field required. Also you can set message as your requirements."),(0,n.kt)("h3",{id:"5autofill"},"5.Autofill"),(0,n.kt)("p",null,"To suggest auto field value from the browser, you need to enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"AutoFill")," property."),(0,n.kt)("h3",{id:"6placeholder"},"6.Placeholder"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Placeholder")," is a property by which user can understand the usage of the field. Any text entered on the placeholder will be displayed on the fields. When the user starts writing on the field, the placeholder text will disappear."),(0,n.kt)("h3",{id:"7validations"},"7.Validations"),(0,n.kt)("p",null,"Users can use the password validation with some patterns which are also customizable. Password validation options are: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At least one digit (0-9)"),(0,n.kt)("li",{parentName:"ul"},"At least one lowercase character (a-z)"),(0,n.kt)("li",{parentName:"ul"},"At least one uppercase character (A-Z)"),(0,n.kt)("li",{parentName:"ul"},"At least one special character"),(0,n.kt)("li",{parentName:"ul"},"Limit Password with ",(0,n.kt)("inlineCode",{parentName:"li"},"MINIMUM")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"MAXIMUM")," character length   ")),(0,n.kt)(r.Z,{src:"Field-Types/Passwordfield-Bit-Form2",alt:"Form-Field",w:"1900",h:"300",mdxType:"Image"}),(0,n.kt)("h3",{id:"8pattern"},"8.Pattern"),(0,n.kt)("p",null,"Passwordfield supports a custom Regex Pattern. We have added a suggestion list of predefined patterns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only Characters (a-zA-Z)"),(0,n.kt)("li",{parentName:"ul"},"Only Digits (0-9) - only full number, no decimal value"),(0,n.kt)("li",{parentName:"ul"},"Name - only characters & space"),(0,n.kt)("li",{parentName:"ul"},"Username - only lowercase characters & numbers"),(0,n.kt)("li",{parentName:"ul"},"Character Limit - default is set to a maximum of 100 characters"),(0,n.kt)("li",{parentName:"ul"},"Word Limit - default is set to a maximum of 30 words"),(0,n.kt)("li",{parentName:"ul"},"Only Gmail - only allows Gmail address  ")),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"After selecting any predefined pattern, you can customize those too."))),(0,n.kt)("p",null,"For each pattern, the user can set ",(0,n.kt)("inlineCode",{parentName:"p"},"Flag")," to control how the regex pattern will work for the text field."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"g( global)-")," With this flag, the search looks for all matches, without it \u2013 only the first match is returned."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"i (case-insensitive)-")," With this flag, the search is case-insensitive: no difference between A and a. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"s(single line)-")," Enables \u201cdot all\u201d mode, which allows a dot . to match newline character \\n."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"m (multi line)"),"- Multiline mode."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"u (unicode)-")," Enables full Unicode support."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"y (sticky)-")," \u201cSticky\u201d mode: searching at the exact position in the text."),(0,n.kt)("h3",{id:"9unique-entry-validation"},"9.Unique Entry Validation:"),(0,n.kt)("p",null,"You can validate whether entry is unique or not by turning on this option."),(0,n.kt)(o.Z,{mdxType:"Feedback"}))}f.isMDXComponent=!0}}]);