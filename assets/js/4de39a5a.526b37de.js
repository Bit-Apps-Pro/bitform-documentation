"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[3067],{14364:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return m},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=o(22122),n=o(19756),r=(o(67294),o(3905)),i=o(95838),l=(o(76301),["components"]),m={id:"email-autoresponder",title:"Bit Form email notification",sidebar_label:"How to set up an autoresponder Email",slug:"/wpbitform-email-autoresponder"},s=void 0,p={unversionedId:"Others/email-autoresponder",id:"Others/email-autoresponder",isDocsHomePage:!1,title:"Bit Form email notification",description:"The function of an email autoresponder or email notification is to notify the user that the form has been submitted successfully.",source:"@site/docs/Others/Email-autoresponder.mdx",sourceDirName:"Others",slug:"/wpbitform-email-autoresponder",permalink:"/wpbitform-email-autoresponder",editUrl:"https://github.com/Bit-Press/bitform-documentation/blob/main/docs/Others/Email-autoresponder.mdx",tags:[],version:"current",frontMatter:{id:"email-autoresponder",title:"Bit Form email notification",sidebar_label:"How to set up an autoresponder Email",slug:"/wpbitform-email-autoresponder"},sidebar:"someSidebar",previous:{title:"Fetch data from url parameter",permalink:"/wpbitform-get-url-parameter"},next:{title:"API",permalink:"/wpbitform-api"}},u=[],h={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The function of an ",(0,r.kt)("strong",{parentName:"p"},"email autoresponder or email notification")," is to notify the user that the form has been submitted successfully."),(0,r.kt)("p",null,"To set up the email notification feature follow the below steps-"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Settings"))," option of the builder.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Navigate to the \u201cEmail Templates\u201d option. Create a template that you want to send as a notification to your user. From the \u201cEmail Templates\u201d set the following option \u2013 "),(0,r.kt)("p",{parentName:"li"},"   \u2714Template Name"),(0,r.kt)("p",{parentName:"li"},"   \u2714Email subject"),(0,r.kt)("p",{parentName:"li"},"   \u2714Email body \u2013  On the email body Admin can fetch the data directly from the form fields.   "),(0,r.kt)(i.Z,{src:"Email Autoresponder/Email-Template-Bit-Form",alt:"Email Autoresponder",w:"1020",h:"350",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After creating the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Templates"))," for the notification you have to set the conditional logic for when the email notification will be sent to the user. Here, you have to set the action \u201cEmail Notification\u201d & also have to specify when this action will run."),(0,r.kt)(i.Z,{src:"Email Autoresponder/Set-Action-Bit-Form",alt:"Email Autoresponder",w:"1020",h:"250",mdxType:"Image"}))),(0,r.kt)("p",null,"Other fields you have to set are:"),(0,r.kt)("p",null,"  \u2714 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Email Notification:"))," You have to select the email template here which you have created earlier"),(0,r.kt)("p",null,"  \u2714 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"To:"))," Here you have to input the email address where you want to send the email notification. Also you can select the \u201cForm Fields\u201d to fetch the data directly from the frontend."),(0,r.kt)("p",null,"  \u2714 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"From:"))," Set the email address from where you want to send mail to recipients."),(0,r.kt)("p",null,"  \u2714 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"CC & BCC field:"))," Then you have chosen the CC & BCC field if you want to send the notification to multiple email addresses."),(0,r.kt)("p",null,"  \u2714 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Reply To:"))," Set the email address where the user will send the reply message in response to your email notification."),(0,r.kt)("p",null,"  \u2714 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Attachment:"))," You can send an attachment if you have any file upload field on the form"),(0,r.kt)(i.Z,{src:"Email Autoresponder/Set-Condition-Bit-Form",alt:"Email Autoresponder",w:"1020",h:"300",mdxType:"Image"}),(0,r.kt)("p",null,"Apart from all these fields, the admin can set another value of the fields by setting the form fields from the drop-down menu. Admin can run this action based on Action Behaviour \u2013 \u201cAlways\u201d & \u201cCondition\u201c."),(0,r.kt)(i.Z,{src:"Email Autoresponder/Set-another-value-Bit-Form",alt:"Email Autoresponder",w:"1020",h:"300",mdxType:"Image"}),(0,r.kt)("p",null,"As an example here we have set the value of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Text Field = User for email autoresponder"))," So,  while the user will submit any form the input value of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Text Field"))," will be replaced as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"User for email autoresponder"))," based on the action behavior"),(0,r.kt)("p",null,"At last, you have to configure the SMTP from the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"App Settings"))," option to make sure that the email will be sent without any spamming. To set the SMTP  read the ",(0,r.kt)("strong",{parentName:"p"},"SMTP documentation"),"."))}d.isMDXComponent=!0}}]);