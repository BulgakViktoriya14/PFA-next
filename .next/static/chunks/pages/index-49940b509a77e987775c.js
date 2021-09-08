(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3289:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var r=n(5893),o=n(6610),s=n(5991),a=n(3349),i=n(5255),u=n(6070),c=n(7608),l=n(6156),f=n(7294),d=n(8278),h=n(1704);function p(t,e){switch(t){case"text":return function(t){if(t.length<3)return!1;return!0}(e);case"email":return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}}var m=n(7449),g=n(614),w=n(6755),x=n(1664),Z=n(1163);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,c.Z)(t);if(e){var o=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var y=function(t){(0,i.Z)(n,t);var e=v(n);function n(t){var r;return(0,o.Z)(this,n),r=e.call(this,t),(0,l.Z)((0,a.Z)(r),"handleChange",(function(t){var e=t.target.getAttribute("id"),n=t.target.value;r.setState((0,l.Z)({},e,n))})),(0,l.Z)((0,a.Z)(r),"doVisibleOrHiddenPassword",(function(t){t.preventDefault(),(0,w.o)(t.target)})),(0,l.Z)((0,a.Z)(r),"logIntoAccount",(function(){var t=r.state,e=t.email,n=t.password,o=t.name,s=t.money,i=(0,a.Z)(r),u=(0,h.m)([e,n,o,s]);if(r.props.account)d.Z.auth().signInWithEmailAndPassword(e,n).then((function(){return r.props.router.push("/profile")})).catch((function(t){return i.setState({errorText:t.message})}));else{if(!u)return void r.setState({errorText:"You have not completed the fields"});if(!p("text",o))return void r.setState({errorText:"Wrong entered Name (at least 3 characters)"});if(!p("email",e))return void r.setState({errorText:"Wrong email address"});!function(t){var e=t.match(/\d/g);(t.length<6||null==e)&&console.log("false")}(n),r.setState({errorText:""})}})),(0,l.Z)((0,a.Z)(r),"setNewPassword",(function(t){t.preventDefault(),document.querySelector(".modal-window__forgot-password").classList.add("open")})),r.state={email:"",password:"",name:"",money:1,id:"",errorText:""},r}return(0,s.Z)(n,[{key:"render",value:function(){return(0,r.jsxs)("form",{className:"form form-login-checkin",children:[!this.props.account&&(0,r.jsx)(m.Z,{label:"Your name",id:"name",type:"text",required:!0,functionOnChange:this.handleChange}),(0,r.jsx)(m.Z,{label:"E-mail",id:"email",type:"email",required:!0,functionOnChange:this.handleChange}),(0,r.jsx)(m.Z,{label:"Password",id:"password",type:"password",required:!0,functionOnChange:this.handleChange,flagPasswordField:!0,showHidePassword:this.doVisibleOrHiddenPassword}),!this.props.account&&(0,r.jsx)(g.Z,{type:"number",label:"Starting amount",id:"money",value:this.state.money,functionOnChange:this.handleChange}),(0,r.jsxs)("div",{className:"form__wrapper-buttons",children:[(0,r.jsx)("input",{className:"form__submit",type:"button",name:"submit",value:this.props.textButton,onClick:this.logIntoAccount}),(0,r.jsxs)("div",{className:"form__wrapper-link",children:[(0,r.jsx)(x.default,{href:this.props.link,children:(0,r.jsx)("a",{className:"form__link",children:this.props.textLink})}),this.props.account&&(0,r.jsx)("button",{className:"form__link button",onClick:this.setNewPassword,children:"Forgot your password?"})]})]}),this.state.errorText&&(0,r.jsx)("p",{className:"massage-error",children:this.state.errorText})]})}}]),n}(f.Component),_=(0,Z.withRouter)(y)},6124:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=n(6610),s=n(5991),a=n(5255),i=n(6070),u=n(7608),c=n(7294),l=n(7471),f=n(3289),d=n(887);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}var p=function(t){(0,a.Z)(n,t);var e=h(n);function n(){return(0,o.Z)(this,n),e.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(d.Z,{history:this.props.history,page:"page-login",nameClass:"modal-window modal-window__forgot-password"}),(0,r.jsx)("h1",{className:"title",children:"Login to your account"}),(0,r.jsx)(f.Z,{link:"/register",textLink:"Create an account",textButton:"Login",account:!0})]})}}]),n}(c.Component);e.default=p},8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])}},function(t){t.O(0,[882,676,608,774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);