"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[3469],{99103:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return f}});var r=o(83117),n=o(80102),a=(o(67294),o(3905)),i=o(56251),s=o(76301),m=["components"],l={id:"prevent-bot",title:"How to prevent a bot from the form submission",sidebar_label:"prevent a bot from the form submission",slug:"/wpbitform-prevent-bot"},p=void 0,h={unversionedId:"Others/prevent-bot",id:"Others/prevent-bot",title:"How to prevent a bot from the form submission",description:"A *spambot is a malicious program that harms your website by gathering email addresses & other information. Many website owners, as well as email marketers, face difficulties because of these highly designed bots. There are many specific ways to protect forms from spambots. However, a hidden field or honeypot is one of them.",source:"@site/docs/Others/Prevent-Bot.mdx",sourceDirName:"Others",slug:"/wpbitform-prevent-bot",permalink:"/wpbitform-prevent-bot",editUrl:"https://github.com/Bit-Apps-Pro/bitform-documentation/blob/main/docs/Others/Prevent-Bot.mdx",tags:[],version:"current",frontMatter:{id:"prevent-bot",title:"How to prevent a bot from the form submission",sidebar_label:"prevent a bot from the form submission",slug:"/wpbitform-prevent-bot"},sidebar:"someSidebar",previous:{title:"WP Auth",permalink:"/wpbitform-user-registration"},next:{title:"Fetch data from url parameter",permalink:"/wpbitform-get-url-parameter"}},d={},f=[{value:"How hidden field works on Bit Form",id:"how-hidden-field-works-on-bit-form",level:2}],u={toc:f};function b(e){var t=e.components,o=(0,n.Z)(e,m);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{youtube:!0,src:"c_XBHJnp96U",mdxType:"Video"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"*spambot")," is a malicious program that harms your website by gathering email addresses & other information. Many website owners, as well as email marketers, face difficulties because of these highly designed bots. There are many specific ways to protect forms from spambots. However, ",(0,a.kt)("strong",{parentName:"p"},"a hidden field or honeypot")," is one of them."),(0,a.kt)("h2",{id:"how-hidden-field-works-on-bit-form"},"How hidden field works on Bit Form"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A honeypot or hidden field")," is a filter that prevents spam/bot from your site. For that, you have to set up a field that will remain hidden from the front end of the form. Real humans can\u2019t see the hidden field on the form, but bots can. Depending on some parameters, if a form is submitted with a hidden input field value, then the submission will be identified as bots submission or spamming."),(0,a.kt)("p",null,"Now, we will show you how you can prevent bot submission on Bit Form."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"At first, navigate to your Bit Form dashboard. Then select a form where you want to implement this honeypot feature.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, take fake fields for the bot. Label it as a real name like email, website, address or anything. But remember, don\u2019t set the label as \u2018Honeypot/Bot\u2019. Because some sophisticated or clever bot can detect those fields. Also, add an admin label as bot or honeypot field to recognize by admin."),(0,a.kt)(i.Z,{src:"Prevent Bot/Admin & Field label",alt:"Prevent Bot from the form submission",w:"1020",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then go to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Settings"))," option. Navigate to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Confirmation"))," page. Now set an ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Error Message"))," to show when the form not submitted by humans."),(0,a.kt)(i.Z,{src:"Prevent Bot/Show Error message",alt:"Prevent Bot from the form submission",w:"1020",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now go to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Conditional Logic"))," option & set some conditions to prevent the bot from submitting the form. For this, set a new logic and set action effect -",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"on form load")),".\nAnd select the fake field and then set the action to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Hide")),"."),(0,a.kt)(i.Z,{src:"Prevent Bot/Set Conditional logic",alt:"Prevent Bot from the form submission",w:"1020",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We need to set another logic to validate the hidden fields triggered when a bot wants to submit a form. To do this, add another new logic and select the action effect \u2013 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"on form validate"))," and select the fake field and then set the action \u2013 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"is not null")),". Now select the error message. Your form is now secure from most common bots."),(0,a.kt)(i.Z,{src:"Prevent Bot/Set the action",alt:"Prevent Bot from the form submission",w:"1020",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now upload the form to any page of your site & you can\u2019t see the hidden fields you have set before. However, the bot won\u2019t understand that the field is hidden. When it tries to fill up the form with the honeypot field, the form won\u2019t submit & the error message will be shown."),(0,a.kt)(i.Z,{src:"Prevent Bot/Submission",alt:"Prevent Bot from the form submission",w:"1020",h:"300",mdxType:"Image"}))),(0,a.kt)("p",null,"Thus, you can prevent any bot or spam from your site from gathering your information and submit any data."))}b.isMDXComponent=!0}}]);