"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[5036],{91010:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return N}});var r=a(83117),n=a(80102),o=a(67294),m=a(3905),s=a(56251),i=a(76301),l=function(t){var e=t.text,a=(0,o.useState)("Copy"),r=a[0],n=a[1];return o.createElement("div",{className:"clipboard"},e,o.createElement("button",{onClick:function(){navigator.clipboard.writeText(e),n("Copied"),setTimeout((function(){return n("Copy")}),[1e3])},className:"onclick-copy-value"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},o.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})),o.createElement("span",{className:"tooltiptext"},r)))},p=a(1993),d=["components"],u={id:"smart-tags",title:"Bit form Smart Tags",sidebar_label:"Smart Tags",slug:"/smart-tags"},k=void 0,g={unversionedId:"Others/smart-tags",id:"Others/smart-tags",title:"Bit form Smart Tags",description:"Smart tags are helpful to display and get static and dynamic information from the user. A smart tag is some form of default short-code of Bit Form, which gets the static information of the WordPress user you use.",source:"@site/docs/Others/smart-tags.mdx",sourceDirName:"Others",slug:"/smart-tags",permalink:"/smart-tags",editUrl:"https://github.com/Bit-Apps-Pro/bitform-documentation/blob/main/docs/Others/smart-tags.mdx",tags:[],version:"current",frontMatter:{id:"smart-tags",title:"Bit form Smart Tags",sidebar_label:"Smart Tags",slug:"/smart-tags"},sidebar:"someSidebar",previous:{title:"How to add calculation",permalink:"/wpbitform-how-to-add-calculation"},next:{title:"Translate Bit Form",permalink:"/translate-bitform"}},h={},N=[{value:"How to use Smart Tags",id:"how-to-use-smart-tags",level:2},{value:"Integration",id:"integration",level:3},{value:"Conditional logic",id:"conditional-logic",level:3},{value:"Email Notification",id:"email-notification",level:3},{value:"Basic Smart Tags",id:"basic-smart-tags",level:2},{value:"Current Date Time",id:"current-date-time",level:3},{value:"Administrator Email",id:"administrator-email",level:3},{value:"Date (default format)",id:"default-date-format",level:3},{value:"Time",id:"time",level:3},{value:"Weekday",id:"weekday",level:3},{value:"Referer URL",id:"refer-url",level:3},{value:"Custom User Data",id:"custom-user-data",level:2},{value:"User IP Address",id:"user-ip-address",level:3},{value:"Browser Name",id:"browser-name",level:3},{value:"Random Digit",id:"random-digit",level:3},{value:"Operating System",id:"operating-system",level:3},{value:"Author Details",id:"author-details",level:2},{value:"Post Author ID",id:"post-author-id",level:3},{value:"Post Author Display Name",id:"post-author-display-name",level:3},{value:"Post Author Email",id:"post-author-email",level:3},{value:"User Management",id:"user-management",level:2},{value:"User ID",id:"user-id",level:3},{value:"User First Name",id:"user-first-name",level:3},{value:"User Last Name",id:"user-last-name",level:3},{value:"User Display Name",id:"user-display-name",level:3},{value:"User Nice Name",id:"user-nice-name",level:3},{value:"User Login Name",id:"user-login-name",level:3},{value:"User Email",id:"user-email",level:3},{value:"User URL",id:"user-url",level:3},{value:"Current User Role",id:"current-user-role",level:3},{value:"Site Title",id:"site-title",level:3},{value:"Site Description",id:"site-description",level:3},{value:"Site URL",id:"site-url",level:3},{value:"WordPress Locale Code",id:"wordpress-local-code",level:3},{value:"Embedded Page / Post ID",id:"page-post-id",level:3},{value:"Embedded Page / Post Name",id:"page-post-name",level:3},{value:"Embedded Page / Post Title",id:"page-post-title",level:3},{value:"Embedded Page / Post URL",id:"page-post-url",level:3},{value:"Post Publish Date",id:"post-publish-date",level:3},{value:"Post Modified Date",id:"post-modified-date",level:3},{value:"User Meta Key",id:"user-meta-key",level:3},{value:"Custom Date Format",id:"custom-date-format",level:3}],f={toc:N};function y(t){var e=t.components,a=(0,n.Z)(t,d);return(0,m.kt)("wrapper",(0,r.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Smart tags")," are helpful to display and get static and dynamic information from the user. A smart tag is some form of default short-code of Bit Form, which gets the static information of the WordPress user you use.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"For example:"))," Here is a smart tag ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("inlineCode",{parentName:"strong"},"${_bf_admin_email}"))," that can be used in the Email template to pull the site admin email. Also, you can show this information in your form on the front end with conditional logic and form submitted success or error message. Smart Tags uses the dollar sign and curly brackets, look something like.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_display_name}")),(0,m.kt)("h2",{id:"how-to-use-smart-tags"},"How to use Smart Tags"),(0,m.kt)("h3",{id:"integration"},"Integration"),(0,m.kt)("p",null,"You can get a ",(0,m.kt)("strong",{parentName:"p"},"User IP address")," by sending it to a third-party app via integration. First, set up a complete authorization process for integration. Then you will get the option to map the form field. There you will find the section of ",(0,m.kt)("strong",{parentName:"p"},"general smart code"),", select ",(0,m.kt)("strong",{parentName:"p"},"user IP address"),"."),(0,m.kt)(s.Z,{src:"smart-tags/integration-smart-tags",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h3",{id:"conditional-logic"},"Conditional logic"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"On form load:")," The On Form Load action is used to dynamically alter a Form when it is loaded. The Form actions On Form Load are executed when the Form is loaded by a user.\nWhen a page is loaded and you want to pre-filled some field value.\nThere is two ways to pre-filled a value:"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("p",{parentName:"li"},"Use an initial field key in field properties in the form builder.")),(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("p",{parentName:"li"},"Use the parameter in the URL. Parameter in the URL: website_url?field_api_name=field_value\nExample: ",(0,m.kt)("a",{parentName:"p",href:"https://www.bitappspro/?bf1-1=$%7B_bf_user_first_name%7D"},"https://www.bitappspro/?bf1-1=${_bf_user_first_name}")),(0,m.kt)(i.Z,{src:"smart-tags-in-conditional-logic",alt:"Create a first form",w:"800",h:"400",mdxType:"Video"}))),(0,m.kt)("p",null,"In the above example, after the form loading First Name will be User first Name and User Last Name. Many kinds of logic are used for On Form Load such as Equal, Not Equal, Is Null, Is Not Null, Contain, Not Contain, Start With, End With."),(0,m.kt)("h3",{id:"email-notification"},"Email Notification"),(0,m.kt)("p",null,"You can send admin name, email, and more default WordPress static data using ",(0,m.kt)("strong",{parentName:"p"},"smart tags")," via email notifications. Then you need to ",(0,m.kt)("inlineCode",{parentName:"p"},"create")," an email template or ",(0,m.kt)("inlineCode",{parentName:"p"},"edit")," the existing email template.",(0,m.kt)("br",{parentName:"p"}),"\n","Next, you will find the ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("inlineCode",{parentName:"strong"},"Smart tag fields"))," option. Select the option from the Drop-Down list that you want to send the data into the email notification."),(0,m.kt)(s.Z,{src:"smart-tags/email-template-smart-tag-fields",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h2",{id:"basic-smart-tags"},"Basic Smart Tags"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Label"),(0,m.kt)("th",{parentName:"tr",align:null},"Key"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#current-date-time"},"Current Date Time")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_current_time}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#administrator-email"},"Administrator Email")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_admin_email}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#default-date-format"},"Date (default format)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_date_default}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#default-date-format"},"Date(mm/dd/yy)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_date.m/d/y}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#default-date-format"},"Date(dd/mm/yy)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_date.d/m/y}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#default-date-format"},"Date(Y/m/d")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_date.y/m/d}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#time"},"Time")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_time}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#weekday"},"Weekday")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_weekday}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#refer-url"},"Referer URL")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_http_referer_url}",mdxType:"Copy"}))))),(0,m.kt)("h3",{id:"current-date-time"},"Current Date Time"),(0,m.kt)("p",null,"This smart tag inserted the current date and time when a form was submitted. The date and time will be set in your WordPress date and time format.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_current_time}")),(0,m.kt)("h3",{id:"administrator-email"},"Administrator Email"),(0,m.kt)("p",null,"This Smart Tag will insert the email address of the website administrator from your WordPress settings.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_admin_email}")),(0,m.kt)(s.Z,{src:"smart-tags/administrator-email",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h3",{id:"default-date-format"},"Date (default format)"),(0,m.kt)("p",null,"This smart tag inserted the date when a form was submitted. The date will be set in your WordPress default date format.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_date_default}")),(0,m.kt)(s.Z,{src:"smart-tags/date-and-time-default-format",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h3",{id:"time"},"Time"),(0,m.kt)("p",null,"This smart tag is inserted on time when submitting a form.\nExample: If anyone submits the form at 11:00 am. Then with this smart tag, you know which time the user has submitted the form.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_time}")),(0,m.kt)(s.Z,{src:"smart-tags/time",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h3",{id:"weekday"},"Weekday"),(0,m.kt)("p",null,"This smart tag is inserted on weekdays when submitting a form.\nExample: If anyone submits the form on Friday. Then with this smart tag, you know which day the user has submitted the form.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_weekday}")),(0,m.kt)("h3",{id:"refer-url"},"Referer URL"),(0,m.kt)("p",null,"This Smart Tag will insert the URL address of the page that referred the user to the current page.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_http_referer_url}")),(0,m.kt)("h2",{id:"custom-user-data"},"Custom User Data"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Label"),(0,m.kt)("th",{parentName:"tr",align:null},"Key"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-ip-address"},"User IP Address")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_ip_address}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#browser-name"},"Browser Name")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_browser_name}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#random-digit"},"Random Digit")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_random_digit_num}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#operating-system"},"Operating System")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_operating_system}",mdxType:"Copy"}))))),(0,m.kt)("h3",{id:"user-ip-address"},"User IP Address"),(0,m.kt)("p",null,"This smart tag allows you to see the IP address of the user who submitted the form?\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_ip_address}")),(0,m.kt)("h3",{id:"browser-name"},"Browser Name"),(0,m.kt)("p",null,"To submit your form, the user has to submit the form from a computer or mobile through the browser. If you\u2019d like to know the Browser name of anyone who fills out your forms, you can use this Smart Tag.\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_browser_name}")),(0,m.kt)("h3",{id:"random-digit"},"Random Digit"),(0,m.kt)("p",null,"This smart tag generates a unique number.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_random_digit_num}")),(0,m.kt)("h3",{id:"operating-system"},"Operating System"),(0,m.kt)("p",null,"If you\u2019d like to know the operating system of anyone who fills out your forms, you can use this Smart Tag.\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_operating_system}")),(0,m.kt)("h2",{id:"author-details"},"Author Details"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Label"),(0,m.kt)("th",{parentName:"tr",align:null},"Key"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#post-author-id"},"Post Author ID")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_author_id}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#post-author-display-name"},"Post Author Display Name")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_author_display}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#post-author-email"},"Post Author Email")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_author_email}",mdxType:"Copy"}))))),(0,m.kt)("h3",{id:"post-author-id"},"Post Author ID"),(0,m.kt)("p",null,"Each user has an unique Author ID. If you'd like to know the Author ID of the post or page on which the form is embedded, you can use this Smart Tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_author_id}")),(0,m.kt)(s.Z,{src:"smart-tags/author-id",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h3",{id:"post-author-display-name"},"Post Author Display Name"),(0,m.kt)("p",null,"Each user has an Author Display Name. If you'd like to know the Author's Display Name of the post or page on which the form is embedded, you can use this Smart Tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_author_display}")),(0,m.kt)("h3",{id:"post-author-email"},"Post Author Email"),(0,m.kt)("p",null,"Each user has an Author Email. If you'd like to know the Author's Email of the post or page on which the form is embedded, you can use this Smart Tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_author_email}")),(0,m.kt)("h2",{id:"user-management"},"User Management"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Label"),(0,m.kt)("th",{parentName:"tr",align:null},"Key"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-id"},"User ID")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_id}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-first-name"},"User First Name")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_first_name}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-last-name"},"User Last Name")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_last_name}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-display-name"},"User Display Name")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_display_name}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-nice-name"},"User Nice Name")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_nice_name}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-login-name"},"User Login Name")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_login_name}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-email"},"User Email")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_email}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-url"},"User URL")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_url}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#current-user-role"},"Current User Role")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_current_user_role}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#site-title"},"Site Title")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_site_title}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#site-description"},"Site Description")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_site_description}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#site-url"},"Site URL")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_site_url}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#wordpress-local-code"},"WordPress Locale Code")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_wp_local_codes}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#page-post-id"},"Embedded Page / Post ID")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_post_id}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#page-post-name"},"Embedded Page / Post Name")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_post_name}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#page-post-title"},"Embedded Page / Post Title")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_post_title}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#page-post-url"},"Embedded Page / Post URL")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_post_url}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#post-publish-date"},"Post Publish Date")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_post_date}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#post-modified-date"},"Post Modified Date")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_post_modified_date}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#url-query-parameter"},"URL Query Parameter")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_query_param()}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#user-meta-key"},"User Meta Key")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_user_meta_key()}",mdxType:"Copy"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#custom-date-format"},"Custom Date Format")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(l,{text:"${_bf_custom_date_format()}",mdxType:"Copy"}))))),(0,m.kt)("h3",{id:"user-id"},"User ID"),(0,m.kt)("p",null,"Each registered user on your WordPress site has a unique ID number. If you'd like to know the User ID when a logged-in user submits your form, you can use this smart tag.\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_id}")),(0,m.kt)("h3",{id:"user-first-name"},"User First Name"),(0,m.kt)("p",null,"Each registered user on your WordPress site has First Name.  If you'd like to know the First Name when a logged-in user submits your form, you can use this smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_first_name}")),(0,m.kt)("h3",{id:"user-last-name"},"User Last Name"),(0,m.kt)("p",null,"Each registered user on your WordPress site has a Last Name.  If you'd like to know the Last Name when a logged-in user submits your form, you can use this smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_last_name}")),(0,m.kt)("h3",{id:"user-display-name"},"User Display Name"),(0,m.kt)("p",null,"Each registered user on your WordPress site has a Display Name.  If you'd like to know the Display Name when a logged-in user submits your form, you can use this smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_display_name}")),(0,m.kt)("h3",{id:"user-nice-name"},"User Nice Name"),(0,m.kt)("p",null,"Each registered user on your WordPress site has a Nice Name.  If you'd like to know the Nice Name when a logged-in user submits your form, you can use this smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_nice_name}")),(0,m.kt)("h3",{id:"user-login-name"},"User Login Name"),(0,m.kt)("p",null,"Each registered user on your WordPress site has a Login Name.  If you'd like to know the Login Name when a logged-in user submits your form, you can use this smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_login_name}")),(0,m.kt)("h3",{id:"user-email"},"User Email"),(0,m.kt)("p",null,"Each registered user on your WordPress site has a Login Name.  If you'd like to know the Login Name when a logged-in user submits your form, you can use this smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_email}")),(0,m.kt)("h3",{id:"user-url"},"User URL"),(0,m.kt)("p",null,"Each registered user on your WordPress site has a profile.  If you'd like to know the profile URL when a logged-in user submits your form, you can use this smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_url}")),(0,m.kt)("h3",{id:"current-user-role"},"Current User Role"),(0,m.kt)("p",null,"Each registered user on your WordPress site has a User Role.  If you'd like to know the user role when a logged-in user submits your form, you can use this smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_current_user_role}")),(0,m.kt)("h3",{id:"site-title"},"Site Title"),(0,m.kt)("p",null,"This smart tag inserts the title of your website set in your WordPress settings.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_site_title}")),(0,m.kt)(s.Z,{src:"smart-tags/site-title",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h3",{id:"site-description"},"Site Description"),(0,m.kt)("p",null,"This smart tag inserts the Tagline/Description of your website set in your WordPress settings.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_site_description}")),(0,m.kt)(s.Z,{src:"smart-tags/site-description",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h3",{id:"site-url"},"Site URL"),(0,m.kt)("p",null,"This smart tag inserts the Site URL of your website set in your WordPress settings.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_site_url}")),(0,m.kt)(s.Z,{src:"smart-tags/site-url",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)("h3",{id:"wordpress-local-code"},"WordPress Locale Code"),(0,m.kt)("p",null,"This smart tag inserts the WordPress Locale Code(Site Language) of your website set in your WordPress settings. If the user submits the form while logging in to WordPress, the user will see the language code added to WordPress.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_wp_local_codes}")),(0,m.kt)("h3",{id:"page-post-id"},"Embedded Page / Post ID"),(0,m.kt)("p",null,"If you want to know the ID of the page/post from which page/post is submitting the form., you can use this Smart Tag. Each page/post ID on your WordPress site has a unique ID.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_post_id}")),(0,m.kt)("h3",{id:"page-post-name"},"Embedded Page / Post Name"),(0,m.kt)("p",null,"If you want to know the Name of the page/post from which page/post is submitting the form, you can use this Smart Tag. Each page/post Name on your WordPress site has a Name.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_post_name}")),(0,m.kt)("h3",{id:"page-post-title"},"Embedded Page / Post Title"),(0,m.kt)("p",null,"If you want to know the Title of the page/post from which page/post is submitting the form, you can use this Smart Tag. Each page/post Title on your WordPress site has a Title.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_post_title}")),(0,m.kt)("h3",{id:"page-post-url"},"Embedded Page / Post URL"),(0,m.kt)("p",null,"If you want to know the URL of the page/post from which page/post is submitting the form, you can use this Smart Tag. Each page/post URL on your WordPress site has a URL.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_post_url}")),(0,m.kt)("h3",{id:"post-publish-date"},"Post Publish Date"),(0,m.kt)("p",null,"If you want to know the publish date of the page/post from which page/post is submitting the form, you can use this Smart Tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_post_date}")),(0,m.kt)("h3",{id:"post-modified-date"},"Post Modified Date"),(0,m.kt)("p",null,"If you want to know the last Modified Date of the page/post from which page/post is submitting the form, you can use this Smart Tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_post_modified_date}")),(0,m.kt)("h3",{id:"user-meta-key"},"User Meta Key"),(0,m.kt)("p",null,"If you have a custom user field in WordPress (Meta Box, ACF) then using this smart tag you will get the data of the custom field. To get the data of the custom field, you have to put the key of the custom field inside the smart tag.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_user_meta_key(company_name)}")),(0,m.kt)("h3",{id:"custom-date-format"},"Custom Date Format"),(0,m.kt)("p",null,"This smart tag inserted the ",(0,m.kt)("a",{parentName:"p",href:"https://wordpress.org/support/article/formatting-date-and-time/"},"custom date and time")," when a form was submitted. The date and time will be set in your WordPress date and time format.",(0,m.kt)("br",{parentName:"p"}),"\n",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("em",{parentName:"strong"},"Example:"))," ",(0,m.kt)("inlineCode",{parentName:"p"},"${_bf_custom_date_format(l, F j, Y)}")),(0,m.kt)(s.Z,{src:"smart-tags/custom-date-format",alt:"Bit Form Smart tags",w:"800",h:"400",mdxType:"Image"}),(0,m.kt)(p.Z,{mdxType:"Feedback"}))}y.isMDXComponent=!0}}]);