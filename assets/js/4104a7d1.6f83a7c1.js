"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[4270],{3837:function(e,t,o){o.r(t),o.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return u},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return c}});var r=o(83117),n=o(80102),i=(o(67294),o(3905)),a=o(56251),s=o(76301),l=["components"],d={id:"zoho-workdrive",title:"Bit Form Integration With Zoho Workdrive",sidebar_label:"Zoho Workdrive",slug:"/wpbitform-zoho-workdrive"},h=void 0,m={unversionedId:"Integrations/zoho-workdrive",id:"Integrations/zoho-workdrive",title:"Bit Form Integration With Zoho Workdrive",description:"",source:"@site/docs/Integrations/Zoho-Workdrive.mdx",sourceDirName:"Integrations",slug:"/wpbitform-zoho-workdrive",permalink:"/wpbitform-zoho-workdrive",editUrl:"https://github.com/Bit-Apps-Pro/bitform-documentation/blob/main/docs/Integrations/Zoho-Workdrive.mdx",tags:[],version:"current",frontMatter:{id:"zoho-workdrive",title:"Bit Form Integration With Zoho Workdrive",sidebar_label:"Zoho Workdrive",slug:"/wpbitform-zoho-workdrive"},sidebar:"someSidebar",previous:{title:"Zoho Sign",permalink:"/wpbitform-zoho-sign"},next:{title:"WP Auth",permalink:"/wpbitform-user-registration"}},k={},c=[{value:"Authorization Settings",id:"authorization-settings",level:2},{value:"Integration Settings",id:"integration-settings",level:2},{value:"Actions",id:"actions",level:2}],p={toc:c};function u(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{youtube:!0,src:"27v1F-cZLgg",mdxType:"Video"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Using ",(0,i.kt)("strong",{parentName:"p"},"Zoho Workdrive integration")," with WordPress form builder, you can create a folder and send attachments in Zoho Work drive. You can easily integrate without any coding. This Documentation goes through the configuration process."),(0,i.kt)("h2",{id:"authorization-settings"},"Authorization Settings"),(0,i.kt)("p",null,"First, you have to log-in to your WordPress dashboard. Then click on Bit form from the left sidebar. Select an existing form that you want to integrate with Zoho Work drive. If you don\u2019t have any form please create a new form. Please follow the screenshots below:"),(0,i.kt)(a.Z,{src:"Zoho Workdrive/1.create_form",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"Then click on the Settings menu from the top navigation bar. Navigate to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Settings->Integrations->Click on (+) ->Select Zoho Workdrive")),". Please follow the screenshots below:"),(0,i.kt)(a.Z,{src:"Zoho Workdrive/2.Homepage",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(a.Z,{src:"Zoho Workdrive/3.Bit-Form-to-Zoho-Workdrive-select-integration-1",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"Select a data center from the dropdown. Then click on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Zoho API Console")),". Navigate to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"API Console->Get Started->Server-based Applications")),". Please follow the screenshots below :"),(0,i.kt)(a.Z,{src:"Zoho Workdrive/4.Bit-Form-to-Zoho-Workdrive-api-console-1",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(a.Z,{src:"Zoho Workdrive/5.GetStarted",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(a.Z,{src:"Zoho Workdrive/6.api-console-server-based",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"Fill those fields (Homepage URL and Authorized Redirect URLs) the same as your Integration Homepage. Then click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"UPDATE")),"."),(0,i.kt)(a.Z,{src:"Zoho Workdrive/7.Client-Details",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"A Client ID and a Client Secret will be generated. Then go to the Client Secret tab."),(0,i.kt)(a.Z,{src:"Zoho Workdrive/8.Bit-Form-to-Zoho-Workdrive-client-secret-1",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"Then copy the Client ID and Client Secret and paste them to the Bit Form integration page. Then click on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Authorize"))," button (wait for a few seconds). After the successful authorization click on the Next button."),(0,i.kt)(a.Z,{src:"Zoho Workdrive/9.Bit-Form-to-Zoho-Workdrive-integration-homepage-1",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(a.Z,{src:"Zoho Workdrive/10.Bit-Form-to-Zoho-Workdrive-accept-1",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)(a.Z,{src:"Zoho Workdrive/11.Bit-Form-to-Zoho-Workdrive-authorization-1",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("h2",{id:"integration-settings"},"Integration Settings"),(0,i.kt)("p",null,"Select the required Team and Folder from the dropdown. There are ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"My Folder"))," is the personal folder and General is the team folder."),(0,i.kt)(a.Z,{src:"Zoho Workdrive/12.Bit-Form-to-Zoho-Workdrive-select-folder-1-1024x502",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"1. Create New Folder:"))," To create a folder in Zoho Workdrive you have to define the folder name in Create New Folder Actions."),(0,i.kt)(s.Z,{src:"Bit-Form-to-Zoho-Workdrive-new-folder-1",alt:"Zoho CRM",w:"800",h:"400",mdxType:"Video"}),(0,i.kt)("p",null,"You can also create folder in Workdrive via field value. For this, you have to select the field from the dropdown."),(0,i.kt)(s.Z,{src:"13.Bit-Form-to-Zoho-Workdrive-field-value-1",alt:"Zoho CRM",w:"800",h:"400",mdxType:"Video"}),(0,i.kt)("p",null,"You can add a random number with the folder name by selecting the Add Random Number option."),(0,i.kt)(s.Z,{src:"14.Bit-Form-to-Zoho-Workdrive-add-random-number-1",alt:"Zoho CRM",w:"800",h:"400",mdxType:"Video"}),(0,i.kt)("p",null,"Also, You can share the folder with users and control their access. There have four types of permission such as View, Edit, Organize, and Upload."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"View:"))," When you select this option the users can view, copy, and download the creating folder and also add comments to them.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Edit:"))," When you select this option the users can view, add, edit, and rename the creating folder, but cannot share or move them.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Organize:"))," When you select this option the users can edit, rename, organize the creating folder within the Team Folder, and also share them with other team members.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Upload:"))," If you want to give permission to the users for file uploading in the creating folder you need to select this option. "))),(0,i.kt)(a.Z,{src:"Zoho Workdrive/15.Bit-Form-to-Zoho-Workdrive-create-newfolder-2",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"You can also send an email notification to the selected user about the folder created by selecting the Send Email Notification option."),(0,i.kt)(a.Z,{src:"Zoho Workdrive/16.Bit-Form-to-Zoho-Workdrive-send-mail-2-1024x502",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"In Zoho Workdrive, if create a new folder is checked but the folder name is not given, then by default, a folder will be created with the name: New Folder with a random number. Example : New Folder 5f58e5273"),(0,i.kt)(a.Z,{src:"Zoho Workdrive/17.Bit-Form-to-Zoho-Workdrive-Create-folder-default--1024x508",alt:"Zoho Workdrive",w:"1020",h:"400",mdxType:"Image"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"2.Upload Files:"))," You can send Attachments in Workdrive. For this, you have to select this file upload field that you want to send. Also, you can share the attachment with users and control their access. There have four types of permission such as View, Edit, Share, View, and Comment."),(0,i.kt)(s.Z,{youtube:!0,src:"rFCBEdUs7DA",mdxType:"Video"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"View:"))," When you select this option the users can view, copy, and download the sending attachment.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Edit:"))," When you select this option the users view, add, edit, and rename files the sending attachment, but cannot share or move them.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Organize:"))," When you select this option the users\u2019 edit, rename, organize the sending attachment, and also share them with other team members.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"View and Comment:"))," When you select this option the users can view, copy, and download the sending attachment also comments to them.")),(0,i.kt)(a.Z,{src:"Zoho Workdrive/18.Bit-Form-to-Zoho-Workdrive-select-attachment-1-1024x496",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"You can also send an email notification to the selected user about the folder create by selecting the Send Email Notification option."),(0,i.kt)(a.Z,{src:"Zoho Workdrive/19.Bit-Form-to-Zoho-Workdrive-send-mail-3-1024x502",alt:"Zoho Workdrive",w:"1020",h:"300",mdxType:"Image"}),(0,i.kt)("p",null,"Map all the fields, select the necessary Actions to be performed on integration, and then click on the Save button to save your settings."),(0,i.kt)("p",null,"In the end, create a Workflow for triggering the integration. Select the integration which you created before."),(0,i.kt)(s.Z,{src:"20.Bit-Form-to-Zoho-Workdrive-workflow",alt:"Zoho CRM",w:"800",h:"400",mdxType:"Video"}))}u.isMDXComponent=!0}}]);