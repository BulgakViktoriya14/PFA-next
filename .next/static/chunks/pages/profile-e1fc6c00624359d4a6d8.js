(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1887:function(e,t,n){"use strict";function r(e){return{type:"SET_USER_SUM",payload:e}}n.d(t,{A:function(){return r}})},8200:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(5893),s=n(6610),a=n(5991),o=n(3349),i=n(5255),u=n(6070),c=n(7608),l=n(6156),f=n(7294),p=n(1871),d=n(8278),h=n(4494),m=n(1163);var g=n(1887);var v=n(887);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var Z=function(e){(0,i.Z)(n,e);var t=y(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,r.jsx)("button",{type:"button",onClick:this.props.functionOnCLick,className:"button-edit-profile",children:this.props.nameButton})}}]),n}(f.Component),_=n(7471),E=n(1664),U=n(5675),w=n(614);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var S=function(e){(0,i.Z)(n,e);var t=C(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,r.jsxs)("form",{className:"form profile__info-form",children:[(0,r.jsx)(w.Z,{label:"Name",type:"text",id:"name-user",readonly:this.props.flag,value:this.props.userName,functionOnChange:this.props.handleChange}),(0,r.jsx)(w.Z,{label:"E-mail",type:"email",id:"email",readonly:this.props.flag,value:this.props.userEmail,functionOnChange:this.props.handleChange})]})}}]),n}(f.Component);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var N=function(e){(0,i.Z)(n,e);var t=x(n);function n(e){var r;return(0,s.Z)(this,n),r=t.call(this,e),(0,l.Z)((0,o.Z)(r),"getAvatar",(function(e){var t=(0,o.Z)(r),n=r.containerImage.current;d.Z.storage().ref().child("avatars/".concat(e)).getDownloadURL().then((function(e){e&&(n.innerHTML="<img src=".concat(e,' alt="photo"/>'),t.props.setUserAvatarFunction(e))}))})),(0,l.Z)((0,o.Z)(r),"changeUserInfo",(function(){r.setState({flag:!r.state.flag})})),(0,l.Z)((0,o.Z)(r),"saveUserInfo",(function(){var e=d.Z.database();r.setState({flag:!r.state.flag}),e.ref("/users/user"+r.state.idUser).update({name:r.props.userName,email:r.props.userEmail}),d.Z.auth().currentUser.updateEmail(r.props.userEmail)})),(0,l.Z)((0,o.Z)(r),"logout",(function(){r.props.setUserNameFunction(""),r.props.setUserEmailFunction(""),r.props.setUserSumFunction(0),d.Z.auth().signOut(),r.props.router.push("/")})),(0,l.Z)((0,o.Z)(r),"openModalWindowChangePassword",(function(){document.querySelector(".modal-window.modal-window__change-password").classList.add("open")})),(0,l.Z)((0,o.Z)(r),"openModalWindowChangeAvatar",(function(){document.querySelector(".modal-window.modal-window__change-avatar").classList.add("open")})),(0,l.Z)((0,o.Z)(r),"handleChange",(function(e){switch(e.target.name){case"name-user":r.props.setUserNameFunction(e.target.value);break;case"email":r.props.setUserEmailFunction(e.target.value)}})),(0,l.Z)((0,o.Z)(r),"deleteProfile",(function(){var e=(0,o.Z)(r);d.Z.auth().currentUser.delete().then((function(){d.Z.database().ref("users/user"+e.props.userId).remove().then((function(){this.props.history.push("/check-in")})).catch((function(e){return console.log(e.message)}))}))})),r.state={flag:!0,idUser:"",loc:e.router.query.loc},r.containerImage=f.createRef(),r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=d.Z.database(),t=this;d.Z.auth().onAuthStateChanged((function(n){if(n){var r=n.email;e.ref("/users").on("value",(function(e){var n=e.val();for(var s in n)r===n[s].email&&(t.setState({idUser:n[s].id}),t.props.setUserIdFunction(n[s].id),t.props.setUserNameFunction(n[s].name),t.props.setUserEmailFunction(n[s].email),t.props.setUserSumFunction(n[s].money),t.props.setUserIncomeCardsFunction(n[s].cardsIncome),t.props.setUserExpensesCardsFunction(n[s].cardsExpenses),t.getAvatar(n[s].id))}))}}))}},{key:"render",value:function(){return(0,r.jsxs)(_.Z,{children:[this.props.userId&&(0,r.jsxs)("div",{className:"content__logged-in",children:[(0,r.jsx)(v.Z,{page:"profile-password",nameClass:"modal-window modal-window__change-password"}),(0,r.jsx)(v.Z,{idUser:this.props.userId,page:"profile-avatar",nameClass:"modal-window modal-window__change-avatar",history:this.props.history}),(0,r.jsx)("h1",{className:"title",children:"Profile"}),(0,r.jsxs)("div",{className:"profile",children:[(0,r.jsx)("div",{className:"profile__image wrapper-img",ref:this.containerImage,children:(0,r.jsx)(U.default,{src:p.Z,alt:"photo"})}),(0,r.jsx)(S,{handleChange:this.handleChange,flag:this.state.flag,userName:this.props.userName,userEmail:this.props.userEmail})]}),(0,r.jsxs)("div",{className:"profile__wrapper-buttons",children:[this.state.flag&&(0,r.jsx)(Z,{functionOnCLick:this.changeUserInfo,nameButton:"Change information about yourself"}),!this.state.flag&&(0,r.jsx)(Z,{functionOnCLick:this.saveUserInfo,nameButton:"Save"}),(0,r.jsx)(Z,{functionOnCLick:this.openModalWindowChangePassword,nameButton:"Change password"}),(0,r.jsx)(Z,{functionOnCLick:this.openModalWindowChangeAvatar,nameButton:"Change avatar"}),(0,r.jsx)(Z,{functionOnCLick:this.logout,nameButton:"Log out"}),(0,r.jsx)(Z,{functionOnCLick:this.deleteProfile,nameButton:"Delete profile"})]})]}),!this.props.userId&&(0,r.jsxs)("div",{className:"content__unlogged",children:[(0,r.jsx)("h1",{className:"title",children:"You are not logged in!"}),(0,r.jsx)(E.default,{href:"/login",children:(0,r.jsx)("a",{className:"button-open-login-page",children:"Sign in"})})]})]})}}]),n}(f.Component);var R=(0,h.$j)((function(e){return{userId:e.userInfo.idUser,userName:e.userInfo.userName,userEmail:e.userInfo.userEmail,userSum:e.userInfo.userSum,userAvatar:e.userInfo.userAvatar}}),(function(e){return{setUserIdFunction:function(t){e({type:"SET_USER_ID",payload:t})},setUserAvatarFunction:function(t){e(function(e){return{type:"SET_USER_AVATAR",payload:e}}(t))},setUserNameFunction:function(t){e(function(e){return{type:"SET_USER_NAME",payload:e}}(t))},setUserEmailFunction:function(t){e({type:"SET_USER_EMAIL",payload:t})},setUserSumFunction:function(t){e((0,g.A)(t))},setUserIncomeCardsFunction:function(t){e(function(e){return{type:"SET_USER_INCOME_CARDS",payload:e}}(t))},setUserExpensesCardsFunction:function(t){e(function(e){return{type:"SET_USER_EXPENSES_CARDS",payload:e}}(t))}}}))((0,m.withRouter)(N))},883:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(8200)}])}},function(e){e.O(0,[882,676,608,774,888,179],(function(){return t=883,e(e.s=t);var t}));var t=e.O();_N_E=t}]);