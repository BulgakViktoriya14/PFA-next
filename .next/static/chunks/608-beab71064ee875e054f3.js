(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{887:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var s=r(5893),n=r(6610),a=r(5991),o=r(3349),i=r(5255),c=r(6070),l=r(7608),u=r(6156),d=r(7294),f=r(8278),p=r(1704),h=r(7449),m=r(6755);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,l.Z)(e);if(t){var n=(0,l.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,c.Z)(this,r)}}var v=function(e){(0,i.Z)(r,e);var t=w(r);function r(e){var s;return(0,n.Z)(this,r),s=t.call(this,e),(0,u.Z)((0,o.Z)(s),"changePassword",(function(e){e.preventDefault();var t=s.newPassword.current.value,r=s.repeatPassword.current.value,n=(0,o.Z)(s);(0,p.m)([t,r])?t===r?(s.setState({errorText:""}),f.Z.auth().currentUser.updatePassword(t).then((function(){n.props.openSuccessResult()})).catch((function(e){s.setState({errorText:e.message})}))):s.setState({errorText:"Your passwords do not match"}):s.setState({errorText:"Your fields are empty"})})),(0,u.Z)((0,o.Z)(s),"doVisibleOrHiddenPassword",(function(e){e.preventDefault(),(0,m.o)(e.target)})),s.state={errorText:""},s.newPassword=d.createRef(),s.repeatPassword=d.createRef(),s}return(0,a.Z)(r,[{key:"render",value:function(){return(0,s.jsxs)("form",{className:"form form-change-password",children:[!this.props.flagChangePassword&&(0,s.jsx)(h.Z,{ref:this.newPassword,required:!0,label:"New password",type:"password",id:"new-password",flagPasswordField:!0,showHidePassword:this.doVisibleOrHiddenPassword}),!this.props.flagChangePassword&&(0,s.jsx)(h.Z,{ref:this.repeatPassword,required:!0,label:"Re-enter the new password",type:"password",id:"repeat-password",flagPasswordField:!0,showHidePassword:this.doVisibleOrHiddenPassword}),!this.props.flagChangePassword&&(0,s.jsx)("button",{className:"form__submit",name:"submit",onClick:this.changePassword,children:"Save"}),this.props.flagChangePassword&&(0,s.jsxs)("div",{className:"success-result",children:[(0,s.jsx)("p",{className:"success-result__text",children:"Your password has been updated"}),(0,s.jsx)("button",{className:"form__submit",name:"submit",onClick:this.props.functionCloseWindow,children:"Close"})]}),this.state.errorText&&(0,s.jsx)("p",{className:"massage-error",children:this.state.errorText})]})}}]),r}(d.Component),g=r(518),b=r(1163);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,l.Z)(e);if(t){var n=(0,l.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,c.Z)(this,r)}}var x=function(e){(0,i.Z)(r,e);var t=j(r);function r(e){var s;return(0,n.Z)(this,r),s=t.call(this,e),(0,u.Z)((0,o.Z)(s),"saveNewAvatar",(function(e){if(e.preventDefault(),""===s.state.errorText){var t=s.props.inputFile.current.files[0],r=(0,o.Z)(s);t?f.Z.storage().ref().child("avatars/".concat(r.props.idUser)).put(t).then((function(e){r.setState({errorText:""}),b.default.reload(window.location.pathname)})):s.setState({errorText:"You haven't selected a file"})}})),(0,u.Z)((0,o.Z)(s),"uploadFile",(function(){var e=s.props.inputFile.current.files[0];console.log(e.type),"image/png"===e.type||"image/jpeg"===e.type||"image/HEIF"===e.type?(s.labelInputFile.current.classList.add("upload-file"),s.buttonSave.current.classList.remove("disabled"),s.setState({errorText:""})):(s.labelInputFile.current.classList.remove("upload-file"),s.buttonSave.current.classList.add("disabled"),s.setState({errorText:"Wrong file type"}))})),s.state={errorText:""},s.labelInputFile=d.createRef(),s.buttonSave=d.createRef(),s}return(0,a.Z)(r,[{key:"render",value:function(){return(0,s.jsxs)("form",{className:"form form-change-avatar",children:[(0,s.jsxs)("div",{className:"form__wrapper-file",children:[(0,s.jsx)("label",{htmlFor:"money",className:"form__label",ref:this.labelInputFile,children:"Select a file"}),(0,s.jsx)("input",{type:"file","aria-label":"file for avatar",id:"file",name:"file",className:"form__input",onChange:this.uploadFile,ref:this.props.inputFile}),(0,s.jsx)("span",{className:"form__notice",children:"Files allowed: jpg, png and heif"})]}),(0,s.jsx)("button",{ref:this.buttonSave,className:"form__submit",name:"submit",onClick:this.saveNewAvatar,children:"Save photo"}),this.state.errorText&&(0,s.jsx)("p",{className:"massage-error",children:this.state.errorText})]})}}]),r}(d.Component),Z=d.forwardRef((function(e,t){return(0,s.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({inputFile:t},e))}));function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,l.Z)(e);if(t){var n=(0,l.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,c.Z)(this,r)}}var P=function(e){(0,i.Z)(r,e);var t=_(r);function r(e){var s;return(0,n.Z)(this,r),s=t.call(this,e),(0,u.Z)((0,o.Z)(s),"sendEmail",(function(e){e.preventDefault();var t=(0,o.Z)(s),r=s.email.current.value;f.Z.auth().sendPasswordResetEmail(r).then((function(){t.setState({flagSendEmail:!t.state.flagSendEmail})})).catch((function(e){return console.log(e)}))})),s.state={flagSendEmail:!1},s.email=d.createRef(),s}return(0,a.Z)(r,[{key:"render",value:function(){return(0,s.jsxs)("form",{className:"form form-set-password",children:[!this.state.flagSendEmail&&(0,s.jsx)(h.Z,{ref:this.email,label:"Your email",id:"email-for-password",type:"email",required:!0}),!this.state.flagSendEmail&&(0,s.jsx)("button",{className:"form__submit",name:"submit",onClick:this.sendEmail,children:"Send email"}),this.state.flagSendEmail&&(0,s.jsxs)("div",{className:"success-result",children:[(0,s.jsx)("p",{className:"success-result__text",children:"Check your email"}),(0,s.jsx)("button",{className:"form__submit",name:"submit",onClick:this.props.functionCloseWindow,children:"Close"})]})]})}}]),r}(d.Component),N=r(5675);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,l.Z)(e);if(t){var n=(0,l.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,c.Z)(this,r)}}var C=function(e){(0,i.Z)(r,e);var t=R(r);function r(e){var s;return(0,n.Z)(this,r),s=t.call(this,e),(0,u.Z)((0,o.Z)(s),"closeModalWindow",(function(e){var t=s.modalWindow.current;if(e.target.classList.contains("modal-window")||e.target.classList.contains("close")){if(t.classList.contains("modal-window__change-password")&&s.setState({flagChangePassword:!1}),t.classList.remove("open"),t.classList.contains("modal-window__success-check-in"))return void s.props.history.push("/login");t.classList.contains("modal-window__change-avatar")&&s.inputFile.current.classList.remove("upload-file"),t.querySelector(".form").reset()}})),(0,u.Z)((0,o.Z)(s),"openSuccessResult",(function(){s.setState({flagChangePassword:!0})})),(0,u.Z)((0,o.Z)(s),"closeModalWindowAfterChangePassword",(function(){s.modalWindow.current.classList.remove("open"),s.setState({flagChangePassword:!1})})),s.state={flagChangePassword:!1},s.modalWindow=d.createRef(),s.inputFile=d.createRef(),s}return(0,a.Z)(r,[{key:"render",value:function(){var e=this;return(0,s.jsx)("div",{className:this.props.nameClass,onClick:this.closeModalWindow,ref:this.modalWindow,children:(0,s.jsxs)("div",{className:"modal-window__block",children:["page-login"===this.props.page&&(0,s.jsxs)("div",{className:"modal-window__content",children:[(0,s.jsx)("button",{className:"close",children:(0,s.jsx)(N.default,{className:"close",src:g.Z,alt:"icon",width:30,height:30,loading:"lazy"})}),(0,s.jsx)("h4",{className:"modal-window__title",children:"Change password"}),(0,s.jsx)(P,{functionCloseWindow:this.closeModalWindowAfterChangePassword})]}),"profile-password"===this.props.page&&(0,s.jsxs)("div",{className:"modal-window__content",children:[(0,s.jsx)("button",{className:"close",children:(0,s.jsx)(N.default,{className:"close",src:g.Z,alt:"icon",width:30,height:30,loading:"lazy"})}),(0,s.jsx)("h4",{className:"modal-window__title",children:"Change password"}),(0,s.jsx)(v,{functionCloseWindow:this.closeModalWindowAfterChangePassword,openSuccessResult:this.openSuccessResult,flagChangePassword:this.state.flagChangePassword})]}),"profile-avatar"===this.props.page&&(0,s.jsxs)("div",{className:"modal-window__content",children:[(0,s.jsx)("button",{className:"close",children:(0,s.jsx)(N.default,{className:"close",src:g.Z,alt:"icon",width:30,height:30,loading:"lazy"})}),(0,s.jsx)("h4",{className:"modal-window__title",children:"Change avatar"}),(0,s.jsx)(Z,{history:this.props.history,ref:this.inputFile,idUser:this.props.idUser})]}),"check-in"===this.props.page&&(0,s.jsxs)("div",{className:"modal-window__content success-result",children:[(0,s.jsx)("p",{className:"success-result__text",children:"You are registered"}),(0,s.jsx)("button",{className:"form__submit",name:"submit",onClick:function(){return e.props.router.push("/")},children:"Login to your account"})]})]})})}}]),r}(d.Component),S=(0,b.withRouter)(C)},614:function(e,t,r){"use strict";var s=r(6156),n=r(5893),a=r(6610),o=r(5991),i=r(5255),c=r(6070),l=r(7608),u=r(7294);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,l.Z)(e);if(t){var n=(0,l.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,c.Z)(this,r)}}var p=function(e){(0,i.Z)(r,e);var t=f(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"form__item",children:[(0,n.jsx)("label",{htmlFor:this.props.id,className:"form__label".concat(this.props.required?" required":""),children:this.props.label}),(0,n.jsx)("input",{type:this.props.type,id:this.props.id,value:this.props.value?this.props.value:"",readOnly:this.props.readonly?"readonly":"",name:this.props.id,className:"form__input","aria-required":this.props.required?"required":"",required:this.props.required?"required":"",ref:this.props.innerRef,onChange:this.props.functionOnChange,"aria-label":this.props.label}),this.props.flagPasswordField&&(0,n.jsx)("button",{className:"button-visible-password","aria-label":"Button visible password",onClick:this.props.showHidePassword})]})}}]),r}(u.Component);t.Z=u.forwardRef((function(e,t){return(0,n.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({innerRef:t},e))}))},6755:function(e,t,r){"use strict";function s(e){e.classList.contains("button-hidden-password")?(e.classList.remove("button-hidden-password"),e.previousElementSibling.setAttribute("type","password")):(e.classList.add("button-hidden-password"),e.previousElementSibling.setAttribute("type","text"))}r.d(t,{o:function(){return s}})}}]);