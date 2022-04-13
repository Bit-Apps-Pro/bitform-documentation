"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[6249],{7614:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return u}});var a=o(83117),r=o(80102),n=(o(67294),o(3905)),s=o(56251),l=o(76301),i=["components"],c={id:"zoho-project",title:"Bit Form Integration With Zoho Project",sidebar_label:"Zoho Project",slug:"/wpbitform-zoho-project"},p=void 0,h={unversionedId:"Integrations/zoho-project",id:"Integrations/zoho-project",title:"Bit Form Integration With Zoho Project",description:"",source:"@site/docs/Integrations/Zoho-Project.mdx",sourceDirName:"Integrations",slug:"/wpbitform-zoho-project",permalink:"/wpbitform-zoho-project",editUrl:"https://github.com/Bit-Apps-Pro/bitform-documentation/blob/main/docs/Integrations/Zoho-Project.mdx",tags:[],version:"current",frontMatter:{id:"zoho-project",title:"Bit Form Integration With Zoho Project",sidebar_label:"Zoho Project",slug:"/wpbitform-zoho-project"},sidebar:"someSidebar",previous:{title:"Zoho Marketing Hub",permalink:"/wpbitform-zoho-marketing-hub"},next:{title:"Zoho Recruit",permalink:"/wpbitform-zoho-recruit"}},d={},u=[{value:"Authorization Settings:",id:"authorization-settings",level:2},{value:"Event",id:"event",level:2},{value:"1. Create Project",id:"1-create-project",level:3},{value:"2. Create Milestone",id:"2-create-milestone",level:3},{value:"3. Create Tasklist",id:"3-create-tasklist",level:3},{value:"4. Create Task",id:"4-create-task",level:3},{value:"5. Create Subtask",id:"5-create-subtask",level:3},{value:"6. Create Issue",id:"6-create-issue",level:3}],m={toc:u};function k(e){var t=e.components,o=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Using ",(0,n.kt)("strong",{parentName:"p"},"Zoho Project integration")," with WordPress form builder, you can create ",(0,n.kt)("strong",{parentName:"p"},"(project, milestone, task list, task, subtask)")," in Zoho Project. You can easily integrate without any coding. This Documentation goes through the configuration process. "),(0,n.kt)("h2",{id:"authorization-settings"},"Authorization Settings:"),(0,n.kt)("p",null,"First, you have to log-in to your WordPress dashboard. Then click on Bit form from the left sidebar. Select an existing form that you want to integrate with Zoho Project. If you don\u2019t have any form please create a new form. Please follow the screenshots below:"),(0,n.kt)(s.Z,{src:"Zoho Project/1.create_form",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,"Then click on the Settings menu from the top navigation bar.Navigate to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings->Integrations->Click on (+) ->Select Zoho Project")),". Please follow the screenshots below:"),(0,n.kt)(s.Z,{src:"Zoho Project/2.Homepage",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(s.Z,{src:"Zoho Project/3.Bit-Form-to-Zoho-Project-integration-select",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,"Select a data center from the dropdown. Then click on the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Zoho API Console")),". Navigate to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"API Console->Get Started->Server-based Applications")),". Please follow the screenshots below"),(0,n.kt)(s.Z,{src:"Zoho Project/4.Bit-Form-to-Zoho-Project-api-console",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(s.Z,{src:"Zoho Project/5.GetStarted",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(s.Z,{src:"Zoho Project/6.api-console-server-based",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,"Fill those fields (Homepage URL and Authorized Redirect URLs) the same as your Integration Homepage. Then click ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"UPDATE")),"."),(0,n.kt)(s.Z,{src:"Zoho Project/7.Bit-Form-to-Zoho-Project-client-details",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,"A Client ID and a Client Secret will be generated. Then go to the Client Secret tab."),(0,n.kt)(s.Z,{src:"Zoho Project/8.Bit-Form-to-Zoho-Project-client-secret",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,"Then copy the Client ID and Client Secret and paste them to the Bit Form integration page. Then click on the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Authorize"))," button (wait for a few seconds). After the successful authorization click on the Next button."),(0,n.kt)(s.Z,{src:"Zoho Project/9.Bit-Form-to-Zoho-Project-integration-homepage",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(s.Z,{src:"Zoho Project/10.Bit-Form-to-Zoho-Project-select",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(s.Z,{src:"Zoho Project/11.Bit-Form-to-Zoho-Project-integration-authorization",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,"Select the required (Portal and Event) from the dropdown. There have six kinds of events. Such as Create Project, Create Milestone, Create Tasklist, Create Task, Create Subtask, Create Issue.  "),(0,n.kt)(l.Z,{src:"12.Bit-Form-to-Zoho-project-field-map",alt:"Zoho Project",w:"1020",h:"350",mdxType:"Video"}),(0,n.kt)("h2",{id:"event"},"Event"),(0,n.kt)("h3",{id:"1-create-project"},"1. Create Project"),(0,n.kt)(l.Z,{youtube:!0,src:"CaxLekQ-xVY",mdxType:"Video"}),(0,n.kt)("p",null," Select the Create Project event from the dropdown. Then map the mandatory field. Map all the needed fields to the corresponding fields in your form. To map more fields, click on the (+). The form fields that are relevant to the selected field would be listed in the drop-down under Bit Forms."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Project Actions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Project Owner-> By selecting this option you can add a project owner to your project. It\u2019s mandatory to select a project owner for creating a project in the Zoho project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Notice: Do not assign project owners as project users.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Task Layout-> Select a layout for your project. It\u2019s a mandatory action.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Project Access-> By selecting this option you can change the access control of your project. There are two types of project access. One is Private and the other one is Public. Set the project access to Private if you want the project can be accessed only by the project users in the selected project. If you set it to the Public, the project will be followed and viewed by all the portal users.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Project User-> You can assign users for your project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Group Name-> You can assign a group for your project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Project Tags->  You can assign tags name with your project."))),(0,n.kt)("h3",{id:"2-create-milestone"},"2. Create Milestone"),(0,n.kt)(l.Z,{youtube:!0,src:"n1OlWZMGOPM",mdxType:"Video"}),(0,n.kt)("p",null,"Select the Create Milestone event from the dropdown. Then select a project from the dropdown if you had already an existing project. If you don\u2019t have any existing projects, you have to create a new project. To create a new project please follow the above create project actions."),(0,n.kt)("p",null,"Then map the mandatory field. Map all the needed fields to the corresponding fields in your form. To map more fields, click on the (+). The form fields that are relevant to the selected field would be listed in the drop-down under Bit Forms."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Milestone Actions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Milestone Owner-> By selecting this option you can add a milestone owner to your project. It\u2019s mandatory to select a milestone owner for creating a milestone in your project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Milestone Flag-> Add a Milestone Flag for your milestone. There are two types of milestone flag. One is External and the other is Internal. External milestone will be visible to both the client and project users. Internal milestone will be visible only to the project users. It\u2019s a mandatory action.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Milestone Tags-> Add a tag for milestone. "))),(0,n.kt)("h3",{id:"3-create-tasklist"},"3. Create Tasklist"),(0,n.kt)(l.Z,{youtube:!0,src:"3nEht9WAQsM",mdxType:"Video"}),(0,n.kt)("p",null,"Select the Create Tasklist event from the dropdown. Then select a project from the dropdown if you have already an existing project. If you don\u2019t have any existing projects, you have to create a new project. To create a new project please follow the above create project actions."),(0,n.kt)("p",null,"You can also assign a tasklist under a milestone. For this, you have to select a milestone from the dropdown if you had already existing milestone. If you don\u2019t have any existing milestones, you have to create a new milestone. To create a new milestone please follow the above create milestone actions."),(0,n.kt)("p",null,"Then map the mandatory field. Map all the needed fields to the corresponding fields in your form. To map more fields, click on the (+). The form fields that are relevant to the selected field would be listed in the drop-down under Bit Forms."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tasklist Actions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tasklist Flag-> Add a Tasklist Flag for your milestone. There are two types of tasklist flags. One is External and the other is Internal. The external tasklist will be visible to both the client and project users. The internal tasklist will be visible only to the project users. It\u2019s a mandatory action.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tasklist Tag->  Add  tags for tasklist. "))),(0,n.kt)("h3",{id:"4-create-task"},"4. Create Task"),(0,n.kt)("p",null,"Select the Create Task event from the dropdown. Then select a project from the dropdown if you had already existing project. If you don\u2019t have any existing projects, you have to create a new project. To create a new project please follow the above Create Project actions."),(0,n.kt)("p",null,"You can also assign a task under a milestone. For this, you have to select a milestone from the dropdown if you had already existing milestone. If you don\u2019t have any existing milestones, you have to create a new milestone. To create a new milestone please follow the above Create Milestone actions."),(0,n.kt)("p",null,"You can also assign a task under a tasklist. For this, at first, you have to select a tasklist flag. Then you have to select a tasklist if you had already existing tasklist. If you don\u2019t have any existing tasklist, you have to create a new tasklist. To create a new tasklist please follow the above Create Tasklist actions."),(0,n.kt)("p",null,"Then map the mandatory field. Map all the needed fields to the corresponding fields in your form. To map more fields, click on the (+). The form fields that are relevant to the selected field would be listed in the drop-down under Bit Forms."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Task Actions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Task Owner-> Add a Task Owner by selecting this action. It\u2019s a mandatory action.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Task Attachments-> Add attachments for task.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Task Time log->\nSelect Date\nBilling Status\nEnter Hours\nSet Start & End Time\nUser\nNotes:       "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Task Recurrence-> You can create a task and recreate it anytime using the Recurring functionality in Zoho Projects. When the same set of tasks are repeated after a couple of days, months and year, you can set it as a recurring task so that it automatically gets recreated after a designated period of time. You can set recurring details for a task while creating or editing a task."),(0,n.kt)("li",{parentName:"ul"},"Task Remainder-> Working on multiple tasks can be tedious and you can lose track of your work. Task reminders can help you stay on top of your work by sending timely emails. With task reminders in Zoho Projects, you don\u2019t miss a single task.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Daily: The reminder mail will be sent to task owners daily till the due date."),(0,n.kt)("li",{parentName:"ul"},"On due date:A reminder mail will be sent to the specified users on or before the due date."),(0,n.kt)("li",{parentName:"ul"},"Day(s) before due date:A reminder mail will be sent before the due date based on the day(s) specified."))),(0,n.kt)("li",{parentName:"ul"},"Task Tags-> Add tags with task. ")))),(0,n.kt)("h3",{id:"5-create-subtask"},"5. Create Subtask"),(0,n.kt)(l.Z,{youtube:!0,src:"JpyxmCcQ0OY",mdxType:"Video"}),(0,n.kt)("p",null,"Select the Create Subtask event from the dropdown. Then select a project from the dropdown if you had already existed project. If you don\u2019t have any existing projects, you have to create a new project. To create a new project please follow the above Create Project actions."),(0,n.kt)("p",null,"To create a subtask you have to select a task from the dropdown if you had already existed task. If you don\u2019t have any existing tasks, you have to create a new task. To create a new task please follow the above Create Task actions."),(0,n.kt)("p",null,"You can also assign a subtask under a task milestone. For this, you have to select a milestone from the dropdown if you had already existed milestone. If you don\u2019t have any existing milestones, you have to create a new milestone. To create a new milestone please follow the above Create Milestone actions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can also assign a subtask under the task of tasklist. For this, at first, you have to select a tasklist flag. There are two types of tasklist flags. One is External and the other is Internal. When you select External if any task remains under this flag all task list will be shown in the below dropdown. Then you have to select a task list if you had already existed tasklist. If you don\u2019t have any existing tasklist, you have to create a new tasklist. To create a new tasklist please follow the above Create Tasklist actions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Then map the mandatory field. Map all the needed fields to the corresponding fields in your form. To map more fields, click on the (+). The form fields that are relevant to the selected field would be listed in the drop-down under Bit Forms."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Subtask Actions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subtask Owner-> Add a Subtask Owner by selecting this action. It\u2019s a mandatory action.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subtask Attachments-> Add assignments for subtask.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subtask Tags-> Add tags for subtask. "))),(0,n.kt)("h3",{id:"6-create-issue"},"6. Create Issue"),(0,n.kt)(l.Z,{youtube:!0,src:"cQWT1eOXaTs",mdxType:"Video"}),(0,n.kt)("p",null,"Select the Create Issue event from the dropdown. Then select a project from the dropdown if you had already an existing project. If you don\u2019t have any existing projects, you have to create a new project. To create a new project please follow the above create project actions."),(0,n.kt)("p",null,"Then map the mandatory field."),(0,n.kt)("p",null,"You can also create a task under a milestone. For this, you have to select a milestone from the dropdown if you had already existed milestone. If you don\u2019t have any existing milestones, you have to create a new milestone. To create a new milestone please follow the above Create Milestone actions."),(0,n.kt)("p",null,"Then map the mandatory field. Map all the needed fields to the corresponding fields in your form. To map more fields, click on the (+). The form fields that are relevant to the selected field would be listed in the drop-down under Bit Forms."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Issue Actions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Owner-> By selecting this option you can add an issue owner. It\u2019s mandatory to select an issue owner for creating an issue.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Flag-> Add an issue Flag for your milestone. There are two types of issue flag. One is External and the other is Internal. The external issue will be visible to both the client and project users. The internal issue will be visible only to the project users. It\u2019s a mandatory action.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Followers-> Select Issue Followers to add project users to the issue.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Severity  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Classification")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Priority")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Attachments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Issue Tags"))),(0,n.kt)("p",null,"Map all the fields, select the necessary Actions to be performed on integration, and then click on the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Save"))," button to save your settings."),(0,n.kt)("p",null,"In the end, create a Workflow for triggering the integration. Select the integration which you created before."),(0,n.kt)(l.Z,{src:"13.Bit-Form-to-Zoho-project-workflow",alt:"Zoho Desk",w:"1020",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"You can find all the video tutorial related to Zoho Projec here :"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL7c6CDwwm-AJoFFks8-X5HhaM19_W9y3j"},"https://www.youtube.com/playlist?list=PL7c6CDwwm-AJoFFks8-X5HhaM19_W9y3j")))}k.isMDXComponent=!0}}]);