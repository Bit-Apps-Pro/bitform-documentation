"use strict";(self.webpackChunkbitform_documentation=self.webpackChunkbitform_documentation||[]).push([[1022],{54962:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var i=o(83117),a=o(80102),n=(o(67294),o(3905)),l=(o(56251),o(76301)),r=["components"],s={id:"conditional-logic",title:"Bit form - Conditional Logic",sidebar_label:"Conditional Logic",slug:"/wpbitform-conditional-logic"},d=void 0,c={unversionedId:"conditional-logic",id:"conditional-logic",title:"Bit form - Conditional Logic",description:"Workflows in Bit Form, are a set of actions (Success Message, Redirect URL, Web Hook, Email Notifications, Integration, and field updates) that are executed when certain specified conditions are met. These rules automate the process of Success Message, Redirect URL, Web Hook, Email Notifications, Integration and field updates when a rule is triggered.",source:"@site/docs/Conditional Logic.mdx",sourceDirName:".",slug:"/wpbitform-conditional-logic",permalink:"/wpbitform-conditional-logic",editUrl:"https://github.com/Bit-Apps-Pro/bitform-documentation/blob/main/docs/Conditional Logic.mdx",tags:[],version:"current",frontMatter:{id:"conditional-logic",title:"Bit form - Conditional Logic",sidebar_label:"Conditional Logic",slug:"/wpbitform-conditional-logic"},sidebar:"someSidebar",previous:{title:"Form Settings",permalink:"/wpbitform-form-settings"},next:{title:"Confirmation Message",permalink:"/wpbitform- confirmation-massage"}},h=[],m={toc:h};function u(e){var t=e.components,o=(0,a.Z)(e,r);return(0,n.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Workflows in Bit Form, are a set of actions ",(0,n.kt)("strong",{parentName:"p"},"(Success Message, Redirect URL, Web Hook, Email Notifications, Integration, and field updates)")," that are executed when certain specified conditions are met. These rules automate the process of ",(0,n.kt)("strong",{parentName:"p"},"Success Message, Redirect URL, Web Hook, Email Notifications, Integration and field updates")," when a rule is triggered."),(0,n.kt)("p",null,"A workflow rule consists of the following elements:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Action Run When \u2013")," Specify when the rule should be triggered for a record .There are four options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Record Create/Edit : Executes the rule when records are created and or existing records are modified. See the example below :",(0,n.kt)(l.Z,{src:"Bit-Form-workflow-create-edit",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"})),(0,n.kt)("li",{parentName:"ul"},"Record Create : Executes the rule when records are created. It\u2019s doesn\u2019t work for Edit, Delete. See the example below :",(0,n.kt)(l.Z,{src:"Bit-Form-workflow-create",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"})),(0,n.kt)("li",{parentName:"ul"},"Record Edit : Executes the rule when existing record are modified. It\u2019s doesn\u2019t work for create, delete.",(0,n.kt)(l.Z,{src:"Bit-Form-workflow-edits-1",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"})),(0,n.kt)("li",{parentName:"ul"},"Record Delete : Executes the rule when certain records are deleted. Only Email Notifications and Webhooks can be associated for such a rule.",(0,n.kt)(l.Z,{src:"Bit-Form-workflow-delete",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Action Effect \u2013")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"On Form Load :"))," The On Form Load action is used to dynamically alter a Form when it is loaded. The Form actions ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"On Form Load"))," is executed when the Form is loaded by a user."),(0,n.kt)("p",null,"When a page is loaded and you want to pre-filled some field value and can also run a workflow to update value, show, hide, disable and enable field."),(0,n.kt)("p",null,"There is two ways to pre-filled a value:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use a initial field value in field properties in the form builder (the feature will be added in the next update of plugin).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the parameter in the URL.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Parameter in the URL: website_url?field_api_name=field_value"))),(0,n.kt)("p",null,"Example: ",(0,n.kt)("a",{parentName:"p",href:"https://www.testpress.bitcode.pro/test/?b-1First_Name=a"},"https://www.testpress.bitcode.pro/test/?b-1First_Name=a")),(0,n.kt)("p",null,"Workflow action for On Form Load: on a form load while created or edited following action are available."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Field value update")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Disable")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Hide")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Show"))),(0,n.kt)("p",null,"See the example below:"),(0,n.kt)(l.Z,{src:"Bit-Form-On-Form-Load-Always",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"In the above example, after the form loading First Name will be \u201cBitcode\u201d and Last Name will be disabled. Many kinds of logic are used for On Form Load such as Equal, Not Equal, Is Null, Is Not Null, Contain, Not Contain, Greater Than, Less Than, Start With, Greater Than Equal, Less Than Equal, Start With, End With."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"On Field Input :"))," The On Field input is a client side action which will be called whenever the value of a field is modified either by the user . It is used to improve the usability of a form by validating field data even before it is submitted or display other field values based on the value specified in this field. The On Field input is executed before the changed data is persisted in the database."),(0,n.kt)("p",null,"When a form is created or edited an user/visitor put value in a field based on that you may want to trigger an action. Following actions are available for on field user input:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Field value update")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Disable")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Hide")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Show"))),(0,n.kt)("p",null,"See the example below:"),(0,n.kt)(l.Z,{src:"Bit-Form-On-Field-Input-Condition",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"In the above example, if First Name is equal \u201cBitcode\u201d and Last Name is equal \u201cTechnology\u201d then the Email will be ",(0,n.kt)("a",{parentName:"p",href:"mailto:bitcode@gmail.com."},"bitcode@gmail.com.")," Many kinds of logic are used for on Field Input such as Equal, Not Equal, Is Null, Is Not Null, Contain, Not Contain, Greater Than, Less Than, Start With, Greater Than Equal, Less Than Equal, Start With, End With."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"On Form Validate :")),"\nThis action is executed when a user submits the form to the server, before the user data is stored in the database. The script runs on the server side, and it has access to all the inputs the user entered. Only message can be associated for such a rule."),(0,n.kt)(l.Z,{src:"Bit-Form-On-Form-validate-message",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"In the above example, if First Name Start With \u201cB\u201d or Last Name End Width \u201cY\u201d, a message will be shown from the created confirmation message. Many kinds of logic are used for On Form Validate such as Equal, Not Equal, Is Null, Is Not Null, Contain, Not Contain, Greater Than, Less Than, Start With, Greater Than Equal, Less Than Equal, Start With, End With."),(0,n.kt)("p",null,"On Form Submit : On Form Submit is used to execute actions when a new record is successfully submitted to the database or when an existing record is updated or deleted from the database. It\u2019s works on both situation when new data submitted or edit old data. Action on \u201cOn form submit\u201d can be triggered with or without condition. The following actions are available in the On form submit:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Success Message")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Redirect URL (does not work on edit)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Web Hook")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Email Notification")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Integration")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Field value update."))),(0,n.kt)("p",null,"See the example below:"),(0,n.kt)(l.Z,{src:"Bit-Form-On-Form-Submit-success-message-and-page-redirects",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"In the above example, if First Name is Null And Last Name Is Not Null then a success message will be shown from the created confirmation message and the page redirect to \u201c",(0,n.kt)("a",{parentName:"p",href:"https://bitapps.pro/%E2%80%9D"},"https://bitapps.pro/\u201d"),". Many kinds of logic are used for On Form Submit such as Equal, Not Equal, Is Null, Is Not Null, Contain, Not Contain, Greater Than, Less Than, Start With, Greater Than Equal, Less Than Equal, Start With, End With."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Workflow condition :"))," You can create multiple conditions in a workflow rule. Each condition consists of two elements. One is specifying which records should be triggered i.e. all records or the records that match the criteria. Another is adding the criteria based on which it should be triggered."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Action Behavior \u2013")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Always :"))," The action in a workflow executes for all records by default when the action behavior field is set as Always."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Condition :"))," Executes the workflow via conditional logic. Rule will be triggered for the records that meet the criteria."),(0,n.kt)("p",null,"In condition you can use many kinds of logic. Here\u2019s some examples of condition:"),(0,n.kt)(l.Z,{src:"Bit-Form-workflow-condition",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"In the above example, if the workflow is work, continent value is set to \u201cAsia\u201d. Although \u201clanguage\u201d=\u201dbangla\u201d is not match the workflow is working. Because firstly the workflow checks whether the first two conditions (\u201ccountry\u201d=\u201dBangladesh\u201d and \u201cCity\u201d=\u201dDhaka\u201d) are met, if met then it\u2019s check the next condition. We used OR logic for next condition. We setted \u201clanguage\u201d=\u201dbangla\u201d in workflow but filled up this field \u201cenglish\u201d. Since we used OR for this condition, if not the condition is met then the workflow will check the next condition. We used AND for the next condition. For this, it must be met, or the workflow will not work."),(0,n.kt)(l.Z,{src:"Bit-Form-workflow-condition1-1.gif-min-1",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"In the above example, if the workflow is work, continent value is set to \u201cAsia\u201d. Although the first two conditions (\u201ccountry\u201d=\u201dPakistan\u201d and \u201cCity\u201d=\u201dIslamabad\u201d) do not match the workflow is working. Because this time the workflow check the condition by group. Firstly the workflow checks whether the first two conditions (\u201ccountry\u201d=\u201dBangladesh\u201d and \u201cCity\u201d=\u201dDhaka\u201d) are met, since we used OR after those two conditions, if not those conditions are met then the workflow will check the next condition. We uses OR logic for next condition. Then it checks whether the last two conditions are met. If match, the workflow will work."),(0,n.kt)(l.Z,{src:"Bit-Form-workflow-condition3.gif-min",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"In the above example, if the workflow is work, continent value is set to \u201cAsia\u201d. The workflow is not working. Because firstly the workflow checks whether the first two conditions (\u201ccountry\u201d=\u201dBangladesh\u201d and \u201cCity\u201d=\u201dDhaka\u201d) are met, if match then it checks the next condition. We used OR logic for the next condition. Since we used OR for this condition, if not the condition is match then the workflow will check the next condition."),(0,n.kt)("p",null,"We used AND for the next condition. Since we used AND for this condition, for this, it must be met or the workflow will not work. We setted \u201cSea port\u201d=\u201dchittagong\u201d in workflow but filled up this field \u201ckarachi\u201d. This condition isn\u2019t match, for this the workflow isn\u2019t working."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"#Calculation :")),(0,n.kt)("p",null,"In Bit Form, you can use many kinds of mathematics calculations. Bit form allow Addition, Subtraction, Multiplication, Division. You can calculate via form fields value or custom value. See the example below :"),(0,n.kt)(l.Z,{src:"Calculations",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("p",null,"In the above example, the sum of the two fields value is shown. If you want to calculate with field values, you have to follow the syntax. Here\u2019s an example syntax : ${bf12-7-Electricity_Bill}+${bf12-8-Internet_Bill} . Start with the \u2018$\u2019 sign then have to wrap the field key in \u2018{}\u2019. Here\u2019s \u2018bf12-7-Electricity_Bill\u2019 and \u2018bf12-8-Internet_Bill\u2019 are field keys."),(0,n.kt)(l.Z,{src:"Calculations-via-custom-valuess",alt:"Condition-logic",w:"800",h:"400",mdxType:"Video"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Notice: Bit Form allows only the number field for calculation.")))))}u.isMDXComponent=!0}}]);