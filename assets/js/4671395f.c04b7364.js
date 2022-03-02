"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[6622],{47010:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return d},toc:function(){return h},default:function(){return g}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=o(56251),s=o(76301),l=["components"],m={id:"form-settings",title:"Bit form - Form Settings",sidebar_label:"Form Settings",slug:"/wpbitform-form-settings"},p=void 0,u={unversionedId:"form-settings",id:"form-settings",title:"Bit form - Form Settings",description:"Overview",source:"@site/docs/Form-Settings.mdx",sourceDirName:".",slug:"/wpbitform-form-settings",permalink:"/wpbitform-form-settings",editUrl:"https://github.com/Bit-Apps-Pro/bitform-documentation/blob/main/docs/Form-Settings.mdx",tags:[],version:"current",frontMatter:{id:"form-settings",title:"Bit form - Form Settings",sidebar_label:"Form Settings",slug:"/wpbitform-form-settings"},sidebar:"someSidebar",previous:{title:"Response Management",permalink:"/wpbitform-response-management"},next:{title:"Conditional Logic",permalink:"/wpbitform-conditional-logic"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Allow Single Entry for each IP address",id:"allow-single-entry-for-each-ip-address",level:3},{value:"Require user to be logged in for submitting form",id:"require-user-to-be-logged-in-for-submitting-form",level:3},{value:"Disallow empty form submission",id:"disallow-empty-form-submission",level:3},{value:"Validate form input for focus lost",id:"validate-form-input-for-focus-lost",level:3},{value:"Disable entry storing in WordPress database",id:"disable-entry-storing-in-wordpress-database",level:3},{value:"Disable this form after limited entry",id:"disable-this-form-after-limited-entry",level:3},{value:"Honeypot",id:"honeypot",level:3},{value:"Limit form submission period",id:"limit-form-submission-period",level:3},{value:"Blocked IP list",id:"blocked-ip-list",level:3},{value:"Allowed IP",id:"allowed-ip",level:3},{value:"SMTP Configuration",id:"smtp-configuration",level:3},{value:"Form import &amp; export",id:"form-import--export",level:3}],c={toc:h};function g(t){var e=t.components,o=(0,r.Z)(t,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The following features are available under ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Form Settings"))," -"),(0,a.kt)("p",null,"\u2714 Allow Single Entry for each IP address"),(0,a.kt)("p",null,"\u2714 Require user to be logged in for submitting form"),(0,a.kt)("p",null,"\u2714 Disallow empty form submission"),(0,a.kt)("p",null,"\u2714 Validate form input for focus lost"),(0,a.kt)("p",null,"\u2714 Disable entry storing in WordPress database"),(0,a.kt)("p",null,"\u2714 Enable reCAPTCHA V3"),(0,a.kt)("p",null,"\u2714 Disable this form after limited entry"),(0,a.kt)("p",null,"\u2714 Honeypot"),(0,a.kt)("p",null,"\u2714 Limit form submission period"),(0,a.kt)("p",null,"\u2714 Blocked IP list"),(0,a.kt)("p",null,"\u2714 Allowed IP"),(0,a.kt)("p",null,"\u2714 SMTP Configuration"),(0,a.kt)("p",null,"\u2714 Form import & export"),(0,a.kt)("h3",{id:"allow-single-entry-for-each-ip-address"},"Allow Single Entry for each IP address"),(0,a.kt)("p",null,"One form can be submitted one time from each IP address. Suppose you are submitting a form using/from this IP 123.123. 12.1. You can not submit the same form again from the same IP address but you can submit the form using another IP address which is not used yet to submit the same form."),(0,a.kt)(i.Z,{src:"Bit-Form-single-entry-for-ip-address",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"}),(0,a.kt)("h3",{id:"require-user-to-be-logged-in-for-submitting-form"},"Require user to be logged in for submitting form"),(0,a.kt)("p",null,"Enabling this option, users have to be logged in for form submission. You can set an error message to notify your user to log in "),(0,a.kt)(i.Z,{src:"Form-Settings/Require-Log-In-Bit-Form",alt:"Form Settings",w:"1000",h:"230",mdxType:"Image"}),(0,a.kt)("h3",{id:"disallow-empty-form-submission"},"Disallow empty form submission"),(0,a.kt)("p",null,"Enabling this option, users can't submit empty form. If users try to submit empty form then admin can display an error message from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Form settings")," option."),(0,a.kt)(i.Z,{src:"Form-Settings/Disallow-Empty-Form-Bit-Form",alt:"Form Settings",w:"1000",h:"250",mdxType:"Image"}),(0,a.kt)("h3",{id:"validate-form-input-for-focus-lost"},"Validate form input for focus lost"),(0,a.kt)("p",null,"Turning on this option validate the input of the fields. If the keep any field empty & move to another field, an error message will be displayed to the user. If this option is not turned on & the user forgets to fill up any field required, the error message will be shown when the user wants to submit the form."),(0,a.kt)(i.Z,{src:"Form-Settings/Focus-Lost-Bit-Form",alt:"Form Settings",w:"1000",h:"250",mdxType:"Image"}),(0,a.kt)("h3",{id:"disable-entry-storing-in-wordpress-database"},"Disable entry storing in WordPress database"),(0,a.kt)("p",null,"Enabling this option your form submission data will not be stored in Bit Form responses."),(0,a.kt)(i.Z,{src:"Form-Settings/Data-Storing-Bit-Form",alt:"Form Settings",w:"1000",h:"250",mdxType:"Image"}),(0,a.kt)("h3",{id:"disable-this-form-after-limited-entry"},"Disable this form after limited entry"),(0,a.kt)("p",null,"If you want to disable the form after certain entries you can use this feature. Suppose you have decided that after 100 times submission you want to disable the form than this feature is for you"),(0,a.kt)(i.Z,{src:"Bit-Form-limited-entry",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"}),(0,a.kt)("h3",{id:"honeypot"},"Honeypot"),(0,a.kt)("p",null,"It is a well-known fact that spambots are real trouble today. One of the common problems web developers face is that spambots create web forms to submit spam messages to the websites. Spam prevention is not easy because of intelligent bots. Though re-captcha will help you in this situation by setting some challenges or tricks to avoid bots, sometimes you can get into an endless trap which is annoying to some visitors. So, we have come with a better experience for spam protection while submitting web forms & that is an intelligent ",(0,a.kt)("inlineCode",{parentName:"p"},"Honeypot"),", aka a ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden field"),"."),(0,a.kt)("p",null,"The main goal of today\u2019s article is \u2013 how you can prevent a bot from submitting the form using Honeypot in Bit Form. Our previous article demonstrated to you how you could add hidden fields manually using conditional logic. But now, you can use Honeypot by enabling a simple option from the settings. In this article, we will show you how you can do that."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What is Honeypot & how does it work?")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Honeypot")," is a security technique that helps an administrator to prevent form submission by a spam bot. With Honeypot, an admin can prevent spamming, which decreases spamming compliance of your website."),(0,a.kt)("p",null,"Honeypot works by setting up an automatic trap that will catch the hackers when they try to submit a form with a script. It checks if the hidden field is filled up by someone who will be obviously a bot because a real human can not view the field."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How does Honeypot work on Bit Form?")),(0,a.kt)("p",null,"To set up ",(0,a.kt)("strong",{parentName:"p"},"Honeypot")," on Bit Form \u2013"),(0,a.kt)("p",null,"\u2714 Create a form or select a form you have created before."),(0,a.kt)("p",null,"\u2714 Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Form settings")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," option."),(0,a.kt)("p",null,"\u2714 Enable the option ",(0,a.kt)("inlineCode",{parentName:"p"},"Honeypot trap for bot")," & save the settings"),(0,a.kt)(i.Z,{src:"Honeypot-Bit-Form (2)",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"}),(0,a.kt)("p",null,"This settings will automatically create some hidden fields that a real human can\u2019t access, but bot will take it as a part of web forms. As it starts to try to fill those fields, it will end up revealings as ",(0,a.kt)("inlineCode",{parentName:"p"},"Spambots")," Whenever bots try to fill those hidden fields & submit the form an error message will be displayed ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Trying to submit the form by bot")),"."),(0,a.kt)("h3",{id:"limit-form-submission-period"},"Limit form submission period"),(0,a.kt)("p",null,"If you want to disable the form after certain entries you can use this feature. Suppose you have decided that after 100 times submission you want to disable the form than this feature is for you"),(0,a.kt)(i.Z,{src:"Bit-Form-limit-period",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"}),(0,a.kt)("h3",{id:"blocked-ip-list"},"Blocked IP list"),(0,a.kt)("p",null,"The blocked listed IP addresses can not submit your form. Suppose you have noticed that from specific IP addresses a form is being submitted as spamming and you do not like it. In this case, you can use this feature, you can list those IP here and form submission from those IP will not be accepted anymore.And you can also disable the blocked listed IPs whenever you want.\nFor example, you want to disallow submission from the below listed IPs"),(0,a.kt)("p",null,"103.145.119.253"),(0,a.kt)("p",null,"103.145.119.251"),(0,a.kt)("p",null,"103.145.119.250"),(0,a.kt)("p",null,"Just put these three IPs on blocked list and enable blocked option. Now, no more submission will be accepted from those IPs"),(0,a.kt)(i.Z,{src:"Bit-Form-block-ip",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"}),(0,a.kt)("h3",{id:"allowed-ip"},"Allowed IP"),(0,a.kt)("p",null,"In some cases, some organization or company want to accept form submission from some specific ",(0,a.kt)("inlineCode",{parentName:"p"},"IP addresses"),". Only in those situations, this feature will be helpful for them."),(0,a.kt)("p",null,"By enabling this option only the listed IP can submit this form."),(0,a.kt)("p",null,"Suppose you have listed these two IP 123.123. 12.1 and 123.123. 12.2 Now, only form submission from these two IPs will be accepted."),(0,a.kt)(i.Z,{src:"Bit-Form-allowed-ip",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"}),(0,a.kt)("h3",{id:"smtp-configuration"},"SMTP Configuration"),(0,a.kt)("p",null,"A new addition to our Bit Form plugin is \u2013 ",(0,a.kt)("strong",{parentName:"p"},"SMTP configuration"),". A lot of site owners face the spam mail problem for using the WordPress default PHP mail function.SMTP is a protocol that helps your WordPress site to make its email deliverability more easygoing & reliable. By enabling this feature you can send mail from your site to your recipients via your preferred mail server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How does SMTP works :")),(0,a.kt)("p",null,"At first, you have to open an account on your desired hosting provider ",(0,a.kt)("strong",{parentName:"p"},"(e.g: ",(0,a.kt)("inlineCode",{parentName:"strong"},"MailGun"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"Gmail"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"Yahoo"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"Hotmail"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"Zoho mail"),")"),". By opening an account you are authenticating your WordPress site. They will provide you the necessary credentials ",(0,a.kt)("strong",{parentName:"p"},"(e.g.: ",(0,a.kt)("inlineCode",{parentName:"strong"},"Encryption type"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"SMTP port")," )"),". You have to put this information when configuring SMTP on your site. Once your site is authenticated you can send mail through your preferred SMTP server. All the email validation work will be done on your specified SMTP server."),(0,a.kt)("p",null,"You don\u2019t have to use different SMTP plug-in or different workflow of SMTP providers. We bring it all in one feature. To access all the mail services you need professional mail addresses. The mail services you can use through this feature:"),(0,a.kt)("p",null,"\u2714 MailGun SMTP ","[5,000 free email /per month for 3 months]"),(0,a.kt)("p",null,"\u2714 Gmail SMTP ","[6,000 free email/per month]"),(0,a.kt)("p",null,"\u2714 Hotmail"),(0,a.kt)("p",null,"\u2714 Yahoo"),(0,a.kt)("p",null,"\u2714 AWS SES"),(0,a.kt)("p",null,"\u2714 ZOHO Mail"),(0,a.kt)("p",null,"\u2714 Outlook"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Process of SMTP settings :")," "),(0,a.kt)("p",null,"To configure you need to go WordPress Dashboard. Then click to ",(0,a.kt)("strong",{parentName:"p"},"Bit Form"),". From Bit Form to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),". Then go to ",(0,a.kt)("inlineCode",{parentName:"p"},"SMTP")," option."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"1.Bit Form SMTP general settings :"))),(0,a.kt)("p",null,"\u27a4 Enable  SMTP: Enabling SMTP ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"YES"))," you are ready to configure general SMTP settings."),(0,a.kt)("p",null,"\u27a4 From Email Address: Set the email address from where you want to send mail to recipients."),(0,a.kt)("p",null,"\u27a4 From Name: Set the name that will be shown to your recipients as the part of ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Form"))," or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Sender"))),(0,a.kt)("p",null,"\u27a4 Reply-To Email Address: Set the email address to whom you want to send the mail."),(0,a.kt)("p",null,"\u27a4SMTP Host: Set the outgoing mail server that you have to choose.(e.g: smtp.gmail.com)"),(0,a.kt)(i.Z,{src:"SMTP/SMTP_1",alt:"Form Settings",w:"1000",h:"650",mdxType:"Image"}),(0,a.kt)("p",null,"\u27a4 Type of Encryption: Choose the encryption type regarding your hosting server."),(0,a.kt)("p",null,"\u27a4 SMTP Port: Choose the port to relay your outgoing mail to the SMTP server. Here are all the configuration details :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2606  Mail Gun :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        SMTP Host: smtp.mailgun.org\n\n        Type of Encryption:TLS\n\n        SMTP Port: 587\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2606 Gmail :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        SMTP Host: smtp.gmail.com\n\n        Type of Encryption: TLS\n\n        SMTP Port: 587\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The mail you use must be professional mail, then it will work to send the mail.."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2606 Hotmail :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        SMTP Host : smtp.live.com\n\n        Type of Encryption : TLS\n\n        SMTP Port: 587\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2606 Yahoo :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        SMTP Host : smtp.mail.yahoo.com\n\n        Type of Encryption : SSL\n\n        SMTP Port: 465\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2606 Outlook :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        SMTP Host : smtp.office365.com\n\n        Type of Encryption : STARTLS\n\n        SMTP Port: 587            \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2606 Zoho :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        SMTP Host : smtp.zoho.com\n\n        Type of Encryption : TSL\n\n        SMTP Port: 587\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note: When configuring Zoho SMTP, you need to provide the entire email address and the correct password for authentication. You may require an Application-specific Password to set up the account in other devices if you\u2019ve enabled Two-Factor Authentication."))),(0,a.kt)("p",null,"\u27a4 SMTP authentication: Set the authentication ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"YES"))," always."),(0,a.kt)("p",null,"\u27a4 SMTP Username & Password: Enter your username & password that you use to login into your mail server."),(0,a.kt)("p",null,"After clicking the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Save Changes"))," your SMTP configuration will be finished. Now you are ready for the test to see whether SMTP settings works or not!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enabling Less secure apps & generate apps password:")),(0,a.kt)("p",null,"To set-up the SMTP configuration- you need to enable the less secure apps options to generate app password of your mail service."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"1. Gmail:"))),(0,a.kt)("p",null,"\u2714 Log-in to your Gmail account. "),(0,a.kt)(i.Z,{src:"SMTP/Gmail",alt:"Form Settings",w:"346",h:"500",mdxType:"Image"}),(0,a.kt)("p",null,"\u2714 Navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Security")," option. From this option you will find ",(0,a.kt)("strong",{parentName:"p"},"Less security Apps")," window."),(0,a.kt)(i.Z,{src:"SMTP/1.Security",alt:"Form Settings",w:"324",h:"431",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"SMTP/2.App-access-window",alt:"Form Settings",w:"852",h:"260",mdxType:"Image"}),(0,a.kt)("p",null,"\u2714 Now, turn ON the ",(0,a.kt)("strong",{parentName:"p"},"Allow less secure apps"),"."),(0,a.kt)(i.Z,{src:"SMTP/3.Turn-on-app-access",alt:"Form Settings",w:"586",h:"314",mdxType:"Image"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},'Note: If the "2-step verification is enabled on your gmail account then you can\'t turn on the  "Allow less secure apps" option')))),(0,a.kt)("p",null,"\u2714 Next, to set the password- click on ",(0,a.kt)("strong",{parentName:"p"},"App Password")," & sign in to your gmail account."),(0,a.kt)(i.Z,{src:"SMTP/4.App-Password",alt:"Form Settings",w:"851",h:"331",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"SMTP/5.Sign-in",alt:"Form Settings",w:"455",h:"508",mdxType:"Image"}),(0,a.kt)("p",null,"\u2714 Then set a app name or any other custom name to generate the password."),(0,a.kt)(i.Z,{src:"SMTP/6.Set-Name",alt:"Form Settings",w:"768",h:"603",mdxType:"Image"}),(0,a.kt)("p",null,"\u2714 In the next window a password will be automatically generated."),(0,a.kt)(i.Z,{src:"SMTP/8.Generated-Password",alt:"Form Settings",w:"646",h:"466",mdxType:"Image"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"2. Zoho Mail:"))),(0,a.kt)("p",null,"\u2714 Log-in to your Zoho mail account. "),(0,a.kt)(i.Z,{src:"zoho-mail/1.Login",alt:"zoho mail",w:"396",h:"492",mdxType:"Image"}),(0,a.kt)("p",null,"\u2714 Navigate to the 'Security' option. From this option you will find \"App Passwords\" window."),(0,a.kt)(i.Z,{src:"zoho-mail/2.Security",alt:"zoho mail",w:"1293",h:"400",mdxType:"Image"}),(0,a.kt)("p",null,'\u2714 Click on "Generate New Password.'),(0,a.kt)(i.Z,{src:"zoho-mail/3.New-Password",alt:"zoho mail",w:"968",h:"350",mdxType:"Image"}),(0,a.kt)("p",null,"\u2714 Then set a app name to generate the password."),(0,a.kt)(i.Z,{src:"zoho-mail/4.App-Name",alt:"zoho mail",w:"608",h:"319",mdxType:"Image"}),(0,a.kt)("p",null,"\u2714 In the next window a password will be automatically generated."),(0,a.kt)(i.Z,{src:"zoho-mail/4.App-Name",alt:"zoho mail",w:"600",h:"350",mdxType:"Image"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.SMTP Testing :")),(0,a.kt)("p",null,"This testing option will help you to verify that actually, your website can relay outgoing mail to the referred recipients. SMTP testing option consists of :"),(0,a.kt)("p",null,"\u27a4 To Field: Type the email address to whom you want to send the mail."),(0,a.kt)("p",null,"\u27a4 Subject Field: Include the subject of your message."),(0,a.kt)("p",null,"\u27a4 Message Field: Write your message to this text field."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Let\u2019s see an example to clear this out!"))),(0,a.kt)("p",null," \u25aa Let say you open an account on a mail server using your Gmail (e.g.: ",(0,a.kt)("a",{parentName:"p",href:"mailto:xyz@gmail.com"},"xyz@gmail.com"),") to send all the emails from your site."),(0,a.kt)("p",null," \u25aa Now you want to see what will recipients see when they get your mail. Then set an alternate Gmail(",(0,a.kt)("a",{parentName:"p",href:"mailto:abc_14@gmail.com"},"abc_14@gmail.com"),") in the \u2018To\u2019 field & set the subject, message."),(0,a.kt)("p",null," \u25aa Clicking on  \u2018Send Test\u2019 your mail will relay to the Gmail SMTP server. Gmail will validate the information you have set before(username, password)"),(0,a.kt)("p",null," \u25aa When Gmail will validate your mail then the mail will be delivered to ",(0,a.kt)("a",{parentName:"p",href:"mailto:abc_14@gmail.com."},"abc_14@gmail.com.")," Hence your mail will be delivered safely to your recipient via the SMTP server."),(0,a.kt)(i.Z,{src:"SMTP/SMTP_2",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"}),(0,a.kt)(s.Z,{youtube:!0,src:"gCfsPYBILLU",alt:"SMTP",w:"800",h:"400",mdxType:"Video"}),(0,a.kt)("h3",{id:"form-import--export"},"Form import & export"),(0,a.kt)("p",null," Bit Form comes with an ",(0,a.kt)("strong",{parentName:"p"},"Import & Export")," Form feature that allows you to migrate your forms to & from multiple WordPress websites. It consumes your time effortlessly as well as within a minute. Read this documentation to know more."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Export Forms:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"At first, go to your WordPress dashboard, then click on Bit Form."),(0,a.kt)(i.Z,{src:"Form-Import-Export/Dashboard-to-BitForm-",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, choose any form from the list which you want to export from your site.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then click on the menu from the right side of the selected form."),(0,a.kt)(i.Z,{src:"Form-Import-Export/Select-the-menu",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Export"))," among the actions. By clicking this option, you can only export the form & related other styling & integration, but not the entries related to the selected form."),(0,a.kt)(i.Z,{src:"Form-Import-Export/Select-Export",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A JSON file will be downloaded after clicking the Export option."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Import Forms:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to another domain where you want to import the form. Then click on Bit Form."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note: Make sure that Bit Form is successfully installed on your new domain where you are going to import the form.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now click on the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Create Form")),", hover to the (+) icon & you can see the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Import"))," option. Click on the option."),(0,a.kt)(i.Z,{src:"Form-Import-Export/Create-Form",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"}),(0,a.kt)(i.Z,{src:"Form-Import-Export/Import",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then, click on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Choose File"))," & upload the downloaded JSON file from your computer. Here you have to select the property that you want to import with your form. They are:"),(0,a.kt)("p",{parentName:"li"}," \u21db All"),(0,a.kt)("p",{parentName:"li"}," \u21db Form Settings"),(0,a.kt)("p",{parentName:"li"}," \u21db Confirmations"),(0,a.kt)("p",{parentName:"li"}," \u21db Conditional Logic"),(0,a.kt)("p",{parentName:"li"}," \u21db Email templates"),(0,a.kt)("p",{parentName:"li"}," \u21db Integrations"),(0,a.kt)("p",{parentName:"li"},"If you want to import all properties, click on the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"All"))," option."),(0,a.kt)(i.Z,{src:"Form-Import-Export/Choose-file-property",alt:"Form Settings",w:"1000",h:"300",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After successful import, you will see the form on the form list."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Watch the full video tutorial here!")))}g.isMDXComponent=!0}}]);