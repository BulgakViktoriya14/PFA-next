(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1887:function(e,t,n){"use strict";function r(e){return{type:"SET_USER_SUM",payload:e}}n.d(t,{A:function(){return r}})},3562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(5671),a=n(3144),o=n(7326),s=n(9340),i=n(2963),u=n(1120),c=n(4942),l=n(7294),f=n(4758),p=n(2567),d=n(8216),h=n(1163);var m=n(1887);var g=n(7238),y=n(9943),v=n(3649),Z=n(123),_=n(1664),C=n(5675),w=n(614),U=n(5893);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}var x=function(e){(0,s.Z)(n,e);var t=E(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,U.jsxs)("form",{className:"form profile__info-form",children:[(0,U.jsx)(w.Z,{label:"Name",type:"text",id:"name-user",readonly:this.props.flag,value:this.props.userName,functionOnChange:this.props.handleChange,inputMode:"text"}),(0,U.jsx)(w.Z,{label:"E-mail",type:"email",id:"email",readonly:this.props.flag,value:this.props.userEmail,functionOnChange:this.props.handleChange,inputMode:"email"})]})}}]),n}(l.Component);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}var N=function(e){(0,s.Z)(n,e);var t=S(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,U.jsx)("div",{className:"loader",children:(0,U.jsx)("h5",{className:"loader__text",children:"Loading..."})})}}]),n}(l.Component),j=n(4347);function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}var L=function(e){(0,s.Z)(n,e);var t=F(n);function n(e){var a;return(0,r.Z)(this,n),a=t.call(this,e),(0,c.Z)((0,o.Z)(a),"getAvatar",(function(e){var t=(0,o.Z)(a),n=a.containerImage.current;p.Z.storage().ref().child("avatars/".concat(e)).getDownloadURL().then((function(e){e&&(n.innerHTML="<img src=".concat(e,' alt="photo"/>'),t.props.setUserAvatarFunction(e),t.setState({isLoading:!1}))})).catch((function(e){t.setState({isLoading:!1}),console.log(e)}))})),(0,c.Z)((0,o.Z)(a),"changeUserInfo",(function(){a.setState({flag:!a.state.flag})})),(0,c.Z)((0,o.Z)(a),"saveUserInfo",(function(){var e=p.Z.database();a.setState({flag:!a.state.flag}),e.ref("/users/user"+a.state.idUser).update({name:a.props.userName,email:a.props.userEmail}),p.Z.auth().currentUser.updateEmail(a.props.userEmail)})),(0,c.Z)((0,o.Z)(a),"logout",(function(){a.props.setUserNameFunction(""),a.props.setUserEmailFunction(""),a.props.setUserSumFunction(0),p.Z.auth().signOut(),a.props.router.push("/")})),(0,c.Z)((0,o.Z)(a),"openModalWindowChangePassword",(function(){document.querySelector(".modal-window.modal-window__change-password").classList.add("open")})),(0,c.Z)((0,o.Z)(a),"openModalWindowChangeAvatar",(function(){document.querySelector(".modal-window.modal-window__change-avatar").classList.add("open")})),(0,c.Z)((0,o.Z)(a),"openCategoryList",(function(){document.querySelector(".modal-window.modal-window__change-category").classList.add("open")})),(0,c.Z)((0,o.Z)(a),"handleChange",(function(e){switch(e.target.name){case"name-user":a.props.setUserNameFunction(e.target.value);break;case"email":a.props.setUserEmailFunction(e.target.value)}})),(0,c.Z)((0,o.Z)(a),"deleteProfile",(function(){var e=(0,o.Z)(a);p.Z.auth().currentUser.delete().then((function(){p.Z.database().ref("users/user"+e.props.userId).remove().then((function(){this.props.history.push("/check-in")})).catch((function(e){return console.log(e.message)}))}))})),a.state={flag:!0,idUser:"",loc:e.router.query.loc,isLoading:!0},a.containerImage=l.createRef(),a}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=p.Z.database(),t=this;p.Z.auth().onAuthStateChanged((function(n){if(n){var r=n.email;e.ref("/users").on("value",(function(e){var n=e.val();for(var a in n)r===n[a].email&&(t.setState({idUser:n[a].id}),t.props.setUserIdFunction(n[a].id),t.props.setUserNameFunction(n[a].name),t.props.setUserEmailFunction(n[a].email),t.props.setUserSumFunction(n[a].money),t.props.setUserIncomeCardsFunction(n[a].cardsIncome),t.props.setUserExpensesCardsFunction(n[a].cardsExpenses),t.props.setUserCategoryListFunction(n[a].category),t.props.setUserCategoryListFlagFunction(n[a].enableCategoryFlag),t.getAvatar(n[a].id))}))}}))}},{key:"render",value:function(){return(0,U.jsxs)(Z.Z,{children:[this.state.isLoading&&(0,U.jsx)(N,{}),this.props.userId&&(0,U.jsxs)("div",{className:"content__logged-in",children:[(0,U.jsx)(y.Z,{modalTitle:"Change password",page:"profile-password",nameClass:"modal-window modal-window__change-password"}),(0,U.jsx)(y.Z,{idUser:this.props.userId,page:"profile-avatar",modalTitle:"Change avatar",nameClass:"modal-window modal-window__change-avatar",history:this.props.history}),(0,U.jsx)(y.Z,{modalTitle:"My category list",page:"profile-category",nameClass:"modal-window modal-window__change-category",arrayCategory:this.props.categoryList.split("#")}),(0,U.jsx)("h1",{className:"title",children:"Profile"}),(0,U.jsxs)("div",{className:"profile",children:[(0,U.jsx)("div",{className:"profile__image wrapper-img",ref:this.containerImage,children:(0,U.jsx)(C.default,{src:f.Z,alt:"photo"})}),(0,U.jsx)(x,{handleChange:this.handleChange,flag:this.state.flag,userName:this.props.userName,userEmail:this.props.userEmail})]}),(0,U.jsxs)("div",{className:"profile__wrapper-buttons",children:[(0,U.jsx)(v.Z,{functionOnCLick:this.openCategoryList,nameButton:"Open my category list"}),this.state.flag&&(0,U.jsx)(v.Z,{functionOnCLick:this.changeUserInfo,nameButton:"Change information about yourself"}),!this.state.flag&&(0,U.jsx)(v.Z,{functionOnCLick:this.saveUserInfo,nameButton:"Save"}),(0,U.jsx)(v.Z,{functionOnCLick:this.openModalWindowChangePassword,nameButton:"Change password"}),(0,U.jsx)(v.Z,{functionOnCLick:this.openModalWindowChangeAvatar,nameButton:"Change avatar"}),(0,U.jsx)(v.Z,{functionOnCLick:this.logout,nameButton:"Log out"}),(0,U.jsx)(v.Z,{functionOnCLick:this.deleteProfile,nameButton:"Delete profile"})]})]}),!this.props.userId&&(0,U.jsxs)("div",{className:"content__unlogged ".concat(this.state.isLoading?" disabled":""),children:[(0,U.jsx)("h1",{className:"title",children:"You are not logged in!"}),(0,U.jsx)(_.default,{href:"/login",children:(0,U.jsx)("a",{className:"button-open-login-page",children:"Sign in"})})]})]})}}]),n}(l.Component);var R=(0,d.$j)((function(e){return{userId:e.userInfo.idUser,userName:e.userInfo.userName,userEmail:e.userInfo.userEmail,userSum:e.userInfo.userSum,userAvatar:e.userInfo.userAvatar,categoryList:e.userInfo.categoryList,enableCategoryFlag:e.userInfo.enableCategoryFlag}}),(function(e){return{setUserIdFunction:function(t){e({type:"SET_USER_ID",payload:t})},setUserAvatarFunction:function(t){e(function(e){return{type:"SET_USER_AVATAR",payload:e}}(t))},setUserNameFunction:function(t){e(function(e){return{type:"SET_USER_NAME",payload:e}}(t))},setUserEmailFunction:function(t){e({type:"SET_USER_EMAIL",payload:t})},setUserSumFunction:function(t){e((0,m.A)(t))},setUserIncomeCardsFunction:function(t){e(function(e){return{type:"SET_USER_INCOME_CARDS",payload:e}}(t))},setUserExpensesCardsFunction:function(t){e(function(e){return{type:"SET_USER_EXPENSES_CARDS",payload:e}}(t))},setUserCategoryListFunction:function(t){e((0,g.F)(t))},setUserCategoryListFlagFunction:function(t){e((0,j.y)(t))}}}))((0,h.withRouter)(L))},883:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(3562)}])}},function(e){e.O(0,[947,737,943,774,888,179],(function(){return t=883,e(e.s=t);var t}));var t=e.O();_N_E=t}]);