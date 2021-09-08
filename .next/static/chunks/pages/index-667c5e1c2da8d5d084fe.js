(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3289:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var n=r(5893),o=r(6610),a=r(5991),s=r(3349),i=r(5255),u=r(6070),c=r(7608),l=r(6156),f=r(7294),d=r(8278),h=r(4586),p=r(1704);function m(t,e){switch(t){case"text":return function(t){if(t.length<3)return!1;return!0}(e);case"email":return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}}var g=r(7449),v=r(614),w=r(6755),y=r(1664),Z=r(1163);function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,c.Z)(t);if(e){var o=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}var _=function(t){(0,i.Z)(r,t);var e=x(r);function r(t){var n;return(0,o.Z)(this,r),n=e.call(this,t),(0,l.Z)((0,s.Z)(n),"handleChange",(function(t){var e=t.target.getAttribute("id"),r=t.target.value;n.setState((0,l.Z)({},e,r))})),(0,l.Z)((0,s.Z)(n),"doVisibleOrHiddenPassword",(function(t){t.preventDefault(),(0,w.o)(t.target)})),(0,l.Z)((0,s.Z)(n),"logIntoAccount",(function(){var t=n.state,e=t.email,r=t.password,o=t.name,a=t.money,i=(0,s.Z)(n),u=(0,p.m)([e,r,o,a]);if(n.props.account)d.Z.auth().signInWithEmailAndPassword(e,r).then((function(){return n.props.router.push("/profile")})).catch((function(t){return i.setState({errorText:t.message})}));else{if(!u)return void n.setState({errorText:"You have not completed the fields"});if(!m("text",o))return void n.setState({errorText:"Wrong entered Name (at least 3 characters)"});if(!m("email",e))return void n.setState({errorText:"Wrong email address"});if(!function(t){var e=t.match(/\d/g),r=t.match(/[A-Z]/g),n=t.match(/[a-z]/g);return!(t.length<6||null==e||null==r||null==n)}(r))return void n.setState({errorText:"Wrong password. Password must contain at least 6 characters, numbers, uppercase and lowercase letters in English."});n.setState({errorText:""}),d.Z.auth().createUserWithEmailAndPassword(e,r).then((function(){var t=(0,h.Z)();d.Z.database().ref("/users/user"+t).set({name:o,email:e,money:a,id:t}),document.querySelector(".modal-window").classList.add("open")})).catch((function(t){return i.setState({errorText:t.message})}))}})),(0,l.Z)((0,s.Z)(n),"setNewPassword",(function(t){t.preventDefault(),document.querySelector(".modal-window__forgot-password").classList.add("open")})),n.state={email:"",password:"",name:"",money:1,id:"",errorText:""},n}return(0,a.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("form",{className:"form form-login-checkin",children:[!this.props.account&&(0,n.jsx)(g.Z,{label:"Your name",id:"name",type:"text",required:!0,functionOnChange:this.handleChange}),(0,n.jsx)(g.Z,{label:"E-mail",id:"email",type:"email",required:!0,functionOnChange:this.handleChange}),(0,n.jsx)(g.Z,{label:"Password",id:"password",type:"password",required:!0,functionOnChange:this.handleChange,flagPasswordField:!0,showHidePassword:this.doVisibleOrHiddenPassword}),!this.props.account&&(0,n.jsx)(v.Z,{type:"number",label:"Starting amount",id:"money",value:this.state.money,functionOnChange:this.handleChange}),(0,n.jsxs)("div",{className:"form__wrapper-buttons",children:[(0,n.jsx)("input",{className:"form__submit",type:"button",name:"submit",value:this.props.textButton,onClick:this.logIntoAccount}),(0,n.jsxs)("div",{className:"form__wrapper-link",children:[(0,n.jsx)(y.default,{href:this.props.link,children:(0,n.jsx)("a",{className:"form__link",children:this.props.textLink})}),this.props.account&&(0,n.jsx)("button",{className:"form__link button",onClick:this.setNewPassword,children:"Forgot your password?"})]})]}),this.state.errorText&&(0,n.jsx)("p",{className:"massage-error",children:this.state.errorText})]})}}]),r}(f.Component),b=(0,Z.withRouter)(_)},6124:function(t,e,r){"use strict";r.r(e);var n=r(5893),o=r(6610),a=r(5991),s=r(5255),i=r(6070),u=r(7608),c=r(7294),l=r(7471),f=r(3289),d=r(887);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var p=function(t){(0,s.Z)(r,t);var e=h(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{history:this.props.history,page:"page-login",nameClass:"modal-window modal-window__forgot-password"}),(0,n.jsx)("h1",{className:"title",children:"Login to your account"}),(0,n.jsx)(f.Z,{link:"/register",textLink:"Create an account",textButton:"Login",account:!0})]})}}]),r}(c.Component);e.default=p},8581:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6124)}])},4586:function(t,e,r){"use strict";var n;r.d(e,{Z:function(){return f}});var o=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(t){return"string"===typeof t&&s.test(t)},u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r};var f=function(t,e,r){var n=(t=t||{}).random||(t.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return l(n)}}},function(t){t.O(0,[882,676,608,774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);