"use strict";(self.webpackChunkslimmom=self.webpackChunkslimmom||[]).push([[989],{2024:function(e,n,a){a.d(n,{Z:function(){return o}});var i="Background_background__WcKDH",s=a(184),o=function(e){var n=e.children;return(0,s.jsx)("div",{className:i,children:n})}},9894:function(e,n,a){a.d(n,{Z:function(){return o}});var i="Button_buttonStyle__pAeaQ",s=a(184);function o(e){var n=e.onClickHandler,a=e.btnText,o=e.type,t=e.disabled,l=e.autofocus;return(0,s.jsx)("button",{className:i,onClick:n,type:o,disabled:t,autoFocus:l,children:a})}},6698:function(e,n,a){a.d(n,{Z:function(){return h}});var i=a(2791),s=a(9894),o="ChoiceModal_overlay__jTzNb",t="ChoiceModal_modal__ZRali",l="ChoiceModal_buttonBox__ILmHR",r="ChoiceModal_content__k2FW9",c="ChoiceModal_title__wQz+U",d="ChoiceModal_subtext__FOSdx",A="ChoiceModal_buttonWrapper__a9may",u="ChoiceModal_button__E4EZ6",m=a(184);var h=function(e){var n=e.text,a=e.choiceHandler,h=e.closeModalHandle,g=e.subText;(0,i.useEffect)((function(){return window.addEventListener("keydown",x),function(){window.removeEventListener("keydown",x)}}));var x=function(e){27===e.keyCode&&(a(!1),h(),document.body.style.overflow="visible")};return(0,m.jsx)("div",{className:o,id:"modal-overlay",onClick:function(e){"modal-overlay"===e.target.id&&(a(!1),h(),document.body.style.overflow="visible")},children:(0,m.jsxs)("div",{className:t,children:[(0,m.jsx)("div",{className:l,children:(0,m.jsx)("button",{className:u,onClick:function(){return a(!1),h(),void(document.body.style.overflow="visible")},children:(0,m.jsx)("svg",{viewBox:"0 0 30 32",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})})})}),(0,m.jsxs)("div",{className:r,children:[(0,m.jsxs)("h2",{className:c,children:["Are you sure, ",n,"?"]}),(0,m.jsx)("p",{className:d,children:g}),(0,m.jsxs)("div",{className:A,children:[(0,m.jsx)(s.Z,{onClickHandler:function(){a(!1),h(),document.body.style.overflow="visible"},btnText:"Cancel",autofocus:!0}),(0,m.jsx)(s.Z,{onClickHandler:function(){a(!0),h(),document.body.style.overflow="visible"},btnText:"Confirm",autofocus:!1})]})]})]})})}},2283:function(e,n,a){a.d(n,{Z:function(){return j}});var i=a(9439),s=a(5705),o=a(2791),t=a(9085),l=a(9894),r="DailyCaloriesForm_containerForm__sbOXU",c="DailyCaloriesForm_form__Ri71L",d="DailyCaloriesForm_title__VbQQ2",A="DailyCaloriesForm_valuesBox__32CZz",u="DailyCaloriesForm_valueLabel__U6ua0",m="DailyCaloriesForm_field__CVpZy",h="DailyCaloriesForm_radioField__MpUTL",g="DailyCaloriesForm_buttonBox__UXzvm",x="DailyCaloriesForm_listFields__Jhozx",v=a(184);function j(e){var n=e.onFormSubmit,a=e.userInfo,j=void 0!==a&&a,C=e.isCleanUserInfo,N=void 0!==C&&C,f=e.isShowNoti,w=void 0===f||f,_=(0,o.useState)(!1),b=(0,i.Z)(_,2),y=b[0],p=b[1],L=(0,o.useState)((function(){return j?j.bloodType:"1"})),B=(0,i.Z)(L,2),F=B[0],S=B[1],k=function(e){S(e.target.value)},R=j||{height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:"1"};return(0,v.jsx)(s.J9,{initialValues:R,validate:function(e){var n=e.height,a=e.age,i=e.desiredWeight,s=e.currentWeight,o=e.bloodType;!n||n<100||n>250||!a||a<18||a>100||!s||s<45||s>500||!i||i<45||i>500||(o||(e.bloodType=F),p(!0))},onSubmit:function(e,a){var i=a.resetForm;if(y){var s={userData:{height:String(e.height),age:String(e.age),currentWeight:String(e.currentWeight),desiredWeight:String(e.desiredWeight),bloodType:String(e.bloodType)}};n(s)&&w&&(t.Am.success("Start losing weight!"),window.scrollTo(0,document.body.scrollHeight)),n(s),N&&i()}},children:(0,v.jsxs)("div",{className:r,children:[(0,v.jsx)("p",{className:d,children:"Calculate your daily calorie intake right now"}),(0,v.jsxs)(s.l0,{className:c,children:[(0,v.jsxs)("div",{className:A,children:[(0,v.jsxs)("label",{className:u,htmlFor:"height",children:["Height",(0,v.jsx)(s.gN,{className:m,pattern:"[0-9]{3}",required:!0,id:"height",type:"number",name:"height",min:"100",max:"250"})]}),(0,v.jsxs)("label",{className:u,htmlFor:"age",children:["Age",(0,v.jsx)(s.gN,{className:m,pattern:"[0-9]{2}",id:"age",required:!0,type:"number",name:"age",min:"18",max:"100"})]}),(0,v.jsxs)("label",{className:u,htmlFor:"currentWeight",children:["Current weight",(0,v.jsx)(s.gN,{className:m,pattern:"[0-9]{2,3}",required:!0,id:"currentWeight",type:"number",name:"currentWeight",min:"45",max:"500"})]})]}),(0,v.jsxs)("div",{className:A,children:[(0,v.jsxs)("label",{className:u,htmlFor:"desiredWeight",children:["Desired weight",(0,v.jsx)(s.gN,{className:m,pattern:"[0-9]{2,3}",id:"desiredWeight",required:!0,name:"desiredWeight",type:"number",min:"46",max:"150"})]}),(0,v.jsxs)("label",{className:u,htmlFor:"bloodType",required:!0,children:[(0,v.jsx)("p",{style:{marginBottom:"20px"},children:"Blood Type"}),(0,v.jsxs)("ul",{className:x,children:[(0,v.jsxs)("li",{children:[(0,v.jsx)(s.gN,{className:h,type:"radio",name:"bloodType",id:"blood-inp-1",value:1,checked:"1"===F,onClick:k}),(0,v.jsx)("label",{htmlFor:"blood-inp-1",children:"1"})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)(s.gN,{className:h,type:"radio",name:"bloodType",id:"blood-inp-2",value:2,checked:"2"===F,onClick:k}),(0,v.jsx)("label",{htmlFor:"blood-inp-2",children:"2"})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)(s.gN,{className:h,type:"radio",name:"bloodType",id:"blood-inp-3",value:3,checked:"3"===F,onClick:k}),(0,v.jsx)("label",{htmlFor:"blood-inp-3",children:"3"})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)(s.gN,{className:h,type:"radio",name:"bloodType",id:"blood-inp-4",checked:"4"===F,onClick:k,value:4}),(0,v.jsx)("label",{htmlFor:"blood-inp-4",children:"4"})]})]})]})]}),(0,v.jsx)("div",{className:g,children:(0,v.jsx)(l.Z,{type:"submit",btnText:"Start losing weight"})})]})]})})}},134:function(e,n,a){a.d(n,{Z:function(){return U}});var i=a(9439),s=a(1087),o="Logo_logoBox__IJmu6",t="Logo_logoPic__mTcmH",l="Logo_logoText__retJ4",r=a(184),c=function(){return(0,r.jsx)(s.rU,{to:"/",children:(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("img",{className:t,src:"data:image/png;base64,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",alt:"Logo"}),(0,r.jsx)("img",{className:l,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAQCAYAAAD+mOowAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATASURBVHgB5VlNcuJGFH7dklyVxcyQE0R4lUrFHjhB7BMMnGDgBJi1cSxie41vAD6BzQmMT2AyniRLNCcIrixSBVJ3vicaSsFICGIcZuarahr6vW51v/8WgmJwXfcAHbc3aI9ofW4+QAnAHI97sHgLaCXuQLukF8L47McDIcStEmFx5/j3fpY5wcVehTS1LQpc0fjjE20hJH9AoG4+n7/F11O0HE2URDhwDW2wu7t7SuvBRfuJ/gdY2m5n4fvb+94Vk3NvNWz+YAvUWl8leIWL7hbd46qeYfhfzJumEIJ8eAh7l+ecfPTSeB3bYSX10Cq0xZAm3C0MXWbcHwwG+ZcMX8+BUSDLHBFGFz8UkniikCfoYDS2mrQCtOfmuNGaYC9edW32KBfe5NMGACPgB3KO6i+guehyTDN8FZqEXc6JN3O8BzTJnYwe6D1agm+8vj86329Ksq61VygKrz+M06chTyldZd7gfC91PRaecl7XeJ+h1pEgoeihINGxjj8kKjo42ysJSe/k+K96aL+6xlABHj/EXIrPZT4M1ELQp2tTSE3754cO/+Yc5cPyCkZYz42SlLKWQKswDfmP8+A9TfJZlBeRLweuQSx3kqG3eSzLfncaHy4RAn1lh09yEIc8KKmL0Nhbtg4rVTmv7jXpQkhB2W48fMtNUVjmMQh1kOglknJwBFfZr28VqS7Ps44f8uOxdYi9lcLzvVZ4sV8DXwt8zfjawqJTGNsRL2OzdeLgfQjgGoevplV4zw1sDNYl+CBFPHZm8djHJSsEX5nWnQvLHpR7jXE+gLfsGePAqjp2eI98NVNKFPLgoXZgFykDHMdpGaUexcdNVVkene11oHje7+HiFcRBSGF9p/HbLH2wF8PTD0M7HEAQvM8ij8XXxp6rUhBHhE5U9eHQVbRPXOEZa/WmuWvDcJVS9biSGPjNAilgT8NFuRNzqux5WbyKD69INIUUbRw4Nw15bNHz4XARuNznvcwrKQ4ntKL9Gt6nQHETV9JsGM9Xmrqoe+7iSpqtC8PiMDl2Rm6kKH+CCgST5+oPIemtCTEa1ts2+eTZgWfdJXkwaD10d4torFhWIvb4hjIgCoHIfRwCTci7WiSYBJTEpCpMxFTgzLuQIaUGEKSHoCfe9+BsvlAyZ8cHjdA6pnEIYqs+4hyC7+UsSXwVwCD+TCHzXc5PobMy8+gyXVCtsVWNwgws1Gl8zFNGaBI5KNZfxgeB+1KK72h1LPVqhkwjckVmPK1pcsZniyjMaapGSXx1ZCm0WKGPtCHIjHwdNK7A1rGYrYF98nCzQsibQCgutN4uY4M3vRNaZHpltQ7kKmU5PGtjFrOtcAKnQ2mFAsDlNQoCmt55NgHJZTkKhlaawvi+w8l9vjr7GhAVCorqLKfgl6is/xf0+f57yOZS4+JMG4RtSnPPFAx8S+5P3yRwtWeUxNXMOrH9i8AOPAVvDoa4gLbwBuO9mPyrwK8TC6HQLpR0mOXi/F9gm0qvYu5NFTR+MxC9xuBXS7izXOFrMcWb/JT1YY3q16R5oKV5qE/pa7Ownsy3Q7s/lqMyrQic9VCcJP/FwfkN3Q2HQCVkJB+hVRcVZC9lWULx0rOcUWLuCkK7kzZfCavuBOT/A1uTk8DPpFuMAAAAAElFTkSuQmCC",alt:"Logo"})]})})},d=a(4420),A=a(7689),u=a(2015),m=a(6698),h="AuthNav_containerAuthNav__AkSTw",g="AuthNav_header__dAmEL",x="AuthNav_logoBox__YQ7g8",v="AuthNav_containerUser__rZL6-",j="AuthNav_user__XPNn2",C="AuthNav_userBox__ceu44",N="AuthNav_buttonBox__N+Ftm",f="AuthNav_button__-fh2Z",w="AuthNav_navigation__hahLA",_="AuthNav_navLink__8ZR7w",b="AuthNav_modalOpen__il4PB",y="AuthNav_modalBox__02lRP",p="AuthNav_buttonMenu__i4mGr",L=a(4164),B=a(2791),F=function(){var e=(0,d.I0)(),n=(0,A.s0)(),a=(0,B.useState)(!1),o=(0,i.Z)(a,2),t=o[0],l=o[1],F=(0,d.v9)(u.um.getUserName),S=(0,B.useState)(!1),k=(0,i.Z)(S,2),R=k[0],E=k[1],T=function(){var e=document.querySelector("#menu-root");if(t){var n=function(){document.body.style.overflow="visible"};return(0,L.createPortal)((0,r.jsxs)("div",{className:y,children:[(0,r.jsxs)(s.OL,{className:b,to:"/diary",onClick:function(){l(!1),n()},children:[" ","Diary"]}),(0,r.jsx)(s.OL,{className:b,to:"/calculator",onClick:function(){l(!1),n()},children:"Calculator"})]}),e)}return null},H=function(){return(0,r.jsxs)("div",{className:w,children:[(0,r.jsx)(s.OL,{className:_,to:"/diary",children:"Diary"}),(0,r.jsx)(s.OL,{className:_,to:"/calculator",children:"Calculator"})]})},I=function(){return t?(0,r.jsx)("button",{className:p,onClick:function(e){e.preventDefault(),document.body.style.overflow="visible",l(!1)},style:{marginRight:"4px"},children:(0,r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACMSURBVHgBpVLBDYAgDGyZxLCJG7CJOImrsIGrsAn2DCYktmDwXhd61x4FIoH3flsENAA00IKz8MjMh/BcSlmzwDKJ7gQV3e6EJJhwgII2uTVVbWKt0E62amx1heC+i9GQB5FIM72MipnIWJqjSfyPOrWcqefomXppsJzQMwE4q9Fz1YanY/z6yaEFvwAvm5SqqbiJQAAAAABJRU5ErkJggg==",alt:"CloseMenuIcon"})}):(0,r.jsx)("button",{className:p,onClick:function(e){e.preventDefault(),document.body.style.overflow="hidden",l(!0)},children:(0,r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAmSURBVHgB7dAxEQAACAJAsAn9Q2oEF89j4CM8JTUOFGLDZP/xyx5NuQQwnPRVwwAAAABJRU5ErkJggg==",alt:"MenuIcon"})})};return(0,r.jsxs)("div",{className:h,children:[R&&(0,r.jsx)(m.Z,{text:"you want to log out of your account?",choiceHandler:function(a){a&&e(u.r5.actionLogout()).then((function(){n("/login",{replace:!0})}))},closeModalHandle:function(){E(!1)}}),(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)("div",{className:x,children:(0,r.jsx)(c,{})}),(0,r.jsx)("div",{className:v,children:(0,r.jsx)(H,{})}),(0,r.jsxs)("div",{className:j,children:[(0,r.jsxs)("div",{className:C,children:[(0,r.jsx)("span",{children:F}),(0,r.jsx)("div",{className:N}),(0,r.jsx)("button",{className:f,type:"button",onClick:function(){E(!0),document.body.style.overflow="hidden"},children:"Exit"})]}),(0,r.jsx)(I,{})]})]}),(0,r.jsx)(T,{})]})},S="NotAuthNav_container__0auCF",k="NotAuthNav_redirect__sjgMj",R="NotAuthNav_linkTo__QbTIO";function E(){var e=window;return{innerWidth:e.innerWidth,innerHeight:e.innerHeight}}var T=function(e){var n=e.localPage,a=(0,B.useState)(E()),o=(0,i.Z)(a,2),t=o[0],l=o[1];return(0,B.useEffect)((function(){function e(){l(E())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),("LoginPage"===n||"RegistrationPage"===n)&&t.innerWidth>1279?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c,{})}):(0,r.jsxs)("div",{className:S,children:[(0,r.jsx)(c,{}),(0,r.jsxs)("div",{className:k,children:[(0,r.jsx)(s.OL,{className:R,to:"/login",children:"Login"}),(0,r.jsx)(s.OL,{className:R,to:"/register",children:"Register"})]})]})},H="Header_headerBox__RPcIW",I="Header_menu__bKlxq",U=function(e){var n=e.localPage,a=(0,d.v9)(u.um.getIsLoggenIn);return n="CalculatorPage",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{className:H,children:[!a&&(0,r.jsx)(T,{localPage:n}),a&&(0,r.jsx)(F,{localPage:n})]}),(0,r.jsx)("div",{className:I,id:"menu-root"})]})}},5989:function(e,n,a){a.r(n),a.d(n,{default:function(){return k}});var i=a(5861),s=a(9439),o=a(4687),t=a.n(o),l=a(2791),r=a(8213),c=a(2283),d=a(7689),A=a(9894),u="CloseBtn_button__DQ+na",m=a(184),h=function(e){var n=e.onHandleClick;return(0,m.jsx)("button",{className:u,onClick:function(){return n()},children:(0,m.jsx)("svg",{viewBox:"0 0 30 32",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})})})},g=a(4403),x="Modal_container__Ha+Ky",v="Modal_modal__DJDMv",j="Modal_content__gGb69",C="Modal_buttonBox__nrlbB",N="Modal_buttonBack__c2zeT",f="Modal_buttonCloseBox__9J7kE",w="Modal_title__3HkNf",_="Modal_text__KJZTz",b="Modal_productText__IPh5A",y="Modal_list__EF-Lt";var p=function(e){var n=e.closeModalHandle,a=e.userData,i=a.userDailyCalorieIntake,s=a.userNotRecommendedProducts,o=(0,d.s0)();(0,l.useEffect)((function(){var e=function(e){!function(e){27===e.keyCode&&n()}(e)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);var t=function(){n()};return(0,m.jsx)("div",{className:x,id:"modal-overlay",onClick:function(e){"modal-overlay"===e.target.id&&n()},children:(0,m.jsxs)("div",{className:v,children:[(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("button",{className:N,onClick:function(){return t()},children:(0,m.jsx)("img",{src:g,alt:"IconBack",width:12,height:7})}),(0,m.jsx)("div",{className:f,children:(0,m.jsx)(h,{onHandleClick:t})})]}),(0,m.jsxs)("div",{className:j,children:[(0,m.jsx)("h2",{className:w,children:"Your recommended daily calorie intake is"}),(0,m.jsxs)("p",{className:_,children:[i,(0,m.jsx)("span",{children:" Kcal"})]}),(0,m.jsx)("p",{className:b,children:"Foods you shouldn't eat"}),(0,m.jsx)("ol",{className:y,children:null===s||void 0===s?void 0:s.map((function(e){return(0,m.jsx)("li",{},e)}))}),(0,m.jsx)(A.Z,{onClickHandler:function(){n(),o("/register",{replace:!0})},btnText:"Start losing weight"})]})]})})},L=a(2024),B=a(134),F=a(2639),S="MainPage_container__Lm-lH";function k(){var e=(0,l.useState)(null),n=(0,s.Z)(e,2),a=n[0],o=n[1],d=(0,l.useState)(!1),A=(0,s.Z)(d,2),u=A[0],h=A[1],g=(0,l.useState)(!1),x=(0,s.Z)(g,2),v=x[0],j=x[1],C=function(){var e=(0,i.Z)(t().mark((function e(n){var a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,(0,r.GU)(n);case 3:200===(a=e.sent).code&&(o(a.data.nutritionAdvice),h(!0),j(!1));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsxs)(L.Z,{children:[(0,m.jsx)(B.Z,{localPage:"MainPage"}),(0,m.jsxs)("div",{className:S,children:[(0,m.jsx)(c.Z,{onFormSubmit:C,isCleanUserInfo:!0,isShowNoti:!1}),v&&(0,m.jsx)(F.Z,{}),u&&(0,m.jsx)(p,{userData:a,closeModalHandle:function(){h(!1),j(!1)}})]})]})}},4403:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAASCAYAAACnxdXaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB7dRBDoAgDETR0RN5I3oTvXllYRNjAsFChw0/mS0vsABo6wC5lKd5J0gZqCz4C9q8T/0+4xco8FdFI8AqGgUW0RIYMTqo+4NumJSAd9smOCE4WTD6vkE3fIGUsEFr6JPeFoaVDBSuSlYAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=989.3d963ebf.chunk.js.map