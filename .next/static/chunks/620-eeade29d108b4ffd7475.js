"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{1887:function(e,t,r){function n(e){return{type:"SET_USER_SUM",payload:e}}r.d(t,{A:function(){return n}})},7483:function(e,t,r){var n=r(5671),o=r(3144),c=r(9340),s=r(2963),a=r(1120),u=r(7294),i=r(5893);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var l=function(e){(0,c.Z)(r,e);var t=f(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,i.jsx)("button",{className:"button-delete-card",onClick:this.props.changeFlagDeleteCard})}}]),r}(u.Component);t.Z=l},3923:function(e,t,r){var n=r(5671),o=r(3144),c=r(7326),s=r(9340),a=r(2963),u=r(1120),i=r(4942),f=r(7294),l=r(5893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var p=function(e){(0,s.Z)(r,e);var t=d(r);function r(){var e;(0,n.Z)(this,r);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s)),(0,i.Z)((0,c.Z)(e),"openPopupAddCard",(function(){document.querySelector(".creation-card").classList.add("creation-card_open"),document.querySelector(".button-open-sidebar").classList.add("hidden")})),e}return(0,o.Z)(r,[{key:"render",value:function(){return(0,l.jsx)("button",{className:"button-open-popup-add-card",onClick:this.openPopupAddCard})}}]),r}(f.Component);t.Z=p},4800:function(e,t,r){var n=r(5671),o=r(3144),c=r(7326),s=r(9340),a=r(2963),u=r(1120),i=r(4942),f=r(7294),l=r(2567),d=r(8216),p=r(1887),y=r(7918),h=r(3649),m=r(7249),v=r(5893);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var g=function(e){(0,s.Z)(r,e);var t=b(r);function r(e){var o;return(0,n.Z)(this,r),o=t.call(this,e),(0,i.Z)((0,c.Z)(o),"loadMore",(function(){o.setState((function(e){return{visible:e.visible+8}}))})),(0,i.Z)((0,c.Z)(o),"createList",(function(){var e=[];for(var t in o.props.cards)e.push(o.props.cards[t]),(0,m.v)(e);e.reverse(),o.setState({arrayCards:e})})),(0,i.Z)((0,c.Z)(o),"deleteCard",(function(e){var t=(0,c.Z)(o),r=e.target.parentElement.getAttribute("id"),n=e.target.parentElement.querySelector(".card__sum").textContent,s=Number(o.props.userSum);l.Z.database().ref("users/user"+t.props.userId+"/"+t.props.type+"/card"+r).remove().then((function(){"cardsIncome"===t.props.type&&(s-=Number(n)),"cardsExpenses"===t.props.type&&(s+=Number(n)),t.props.setUserSumFunction(+s.toFixed(2))})).then((function(){l.Z.database().ref("users/user"+t.props.userId).update({money:+s.toFixed(2)})})).catch((function(e){return console.log(e.message)}))})),o.state={arrayCards:[],visible:20},o}return(0,o.Z)(r,[{key:"componentDidUpdate",value:function(e){this.props.cards!==e.cards&&this.createList()}},{key:"componentDidMount",value:function(){this.createList()}},{key:"render",value:function(){var e=this;return(0,v.jsxs)("div",{className:"container cards",children:[!this.state.arrayCards.length&&(0,v.jsx)("p",{className:"cards-container-empty",children:"You haven't created any cards yet."}),this.state.arrayCards.slice(0,this.state.visible).map((function(t){return(0,v.jsx)(y.Z,{cardItem:t,flagDeleteCard:e.props.flagDeleteCard,functionOnCLick:e.deleteCard},t.id)})),this.state.visible<this.state.arrayCards.length&&(0,v.jsx)(h.Z,{functionOnCLick:this.loadMore,nameButton:"Load more"})]})}}]),r}(f.Component);t.Z=(0,d.$j)((function(e){return{userId:e.userInfo.idUser,cardsIncome:e.userInfo.cardsIncome,cardsExpenses:e.userInfo.cardsExpenses,userSum:e.userInfo.userSum}}),(function(e){return{setUserSumFunction:function(t){e((0,p.A)(t))}}}))(g)},5011:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(5671),o=r(3144),c=r(7326),s=r(9340),a=r(2963),u=r(1120),i=r(4942),f=r(7294),l=r(3561),d=r(1704),p=r(4586),y=r(2567),h=r(1887),m=r(8216),v=r(7449),b=r(7061),g=r(5893);function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var x=function(e){(0,s.Z)(r,e);var t=Z(r);function r(e){var o;return(0,n.Z)(this,r),o=t.call(this,e),(0,i.Z)((0,c.Z)(o),"getDate",(function(){var e=new Date,t=e.getDate(),r=e.getMonth()+1,n=e.getFullYear();return t<10&&(t="0"+t),r<10&&(r="0"+r),n<10&&(n="0"+n),t+"."+r+"."+n})),(0,i.Z)((0,c.Z)(o),"createCard",(function(){var e=o.sum.current.value,t=o.name.current.value,r=o.description.current.value,n=o.getDate();return{title:t,money:e,category:o.props.enableCategoryFlag&&0!==o.state.categoryList[0].length?document.querySelector("#select-categories > div > div > div").innerText:o.category.current.value,date:n,description:r}})),(0,i.Z)((0,c.Z)(o),"checkResultAccount",(function(e){return!("expenses"===o.props.type&&Number(e)>Number(o.props.userSum))||(o.setState({errorText:"Your balance does not allow the operation"}),!1)})),(0,i.Z)((0,c.Z)(o),"createOneCard",(function(e,t,r,n){var o=(0,p.Z)(),c="/users/user"+n.props.userId+"/"+e+"/card"+o;y.Z.database().ref(c).set({startedAt:y.Z.database.ServerValue.TIMESTAMP,id:o,category:r.category,date:r.date,money:r.money,title:r.title,description:r.description}).then((function(){n.form.current.reset(),document.querySelector("#select-categories > div > div > div").innerText=""})).then((function(){n.props.setUserSumFunction(t)})).then((function(){y.Z.database().ref("/users/user"+n.props.userId).update({money:t})}))})),(0,i.Z)((0,c.Z)(o),"addCart",(function(){var e=document.querySelectorAll("input[required]"),t=[];if(e.forEach((function(e){t.push(e.value)})),(0,d.m)(t)){if(o.setState({errorText:""}),o.checkResultAccount(document.querySelector("#sum").value)){var r=(0,c.Z)(o),n=o.createCard();if("income"===o.props.type){var s=Number(o.props.userSum)+Number(n.money);o.createOneCard("cardsIncome",+s.toFixed(2),n,r)}else{var a=Number(o.props.userSum)-Number(n.money);o.createOneCard("cardsExpenses",+a.toFixed(2),n,r)}document.querySelector(".creation-card.creation-card_open")&&document.querySelector(".creation-card.creation-card_open").classList.remove("creation-card_open"),document.querySelector(".button-open-sidebar.hidden")&&document.querySelector(".button-open-sidebar").classList.remove("hidden")}}else o.setState({errorText:"You did not fill in the required fields"})})),o.state={errorText:"",categoryList:[""]},o.name=f.createRef(),o.sum=f.createRef(),o.category=f.createRef(),o.description=f.createRef(),o.form=f.createRef(),o}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){if(0!==this.props.categoryList.length){var e=[];this.props.categoryList.split("#").forEach((function(t){t.length>0&&e.push(t)})),this.setState({categoryList:e})}}},{key:"render",value:function(){return(0,g.jsxs)("form",{className:"form form-add-card",ref:this.form,children:[(0,g.jsx)(v.Z,{innerRef:this.name,required:!0,label:"Title",type:"text",id:"name",flagPasswordField:!1,inputMode:"text"}),(!this.props.enableCategoryFlag||0===this.state.categoryList[0].length)&&(0,g.jsx)(v.Z,{innerRef:this.category,label:"Category",type:"text",id:"category",flagPasswordField:!1,inputMode:"text"}),this.props.enableCategoryFlag&&0!==this.state.categoryList[0].length&&(0,g.jsx)(b.Z,{label:"Category",optionsArray:this.state.categoryList,id:"select-categories"}),(0,g.jsx)(v.Z,{innerRef:this.sum,required:!0,label:"Amount",type:"number",id:"sum",flagPasswordField:!1,inputMode:"decimal"}),(0,g.jsx)(v.Z,{innerRef:this.description,label:"Description",type:"text",id:"description",flagPasswordField:!1,inputMode:"text"}),(0,g.jsx)("input",{type:"button",className:"button-add-card",value:"Add card",onClick:this.addCart}),this.state.errorText&&(0,g.jsx)("p",{className:"massage-error",children:this.state.errorText})]})}}]),r}(f.Component);var C=(0,m.$j)((function(e){return{cardsIncome:e.userInfo.cardsIncome,cardsExpenses:e.userInfo.cardsExpenses,userId:e.userInfo.idUser,userSum:e.userInfo.userSum,enableCategoryFlag:e.userInfo.enableCategoryFlag,categoryList:e.userInfo.categoryList}}),(function(e){return{setUserSumFunction:function(t){e((0,h.A)(t))}}}))(x),R=r(5675);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var O=function(e){(0,s.Z)(r,e);var t=j(r);function r(e){var o;return(0,n.Z)(this,r),o=t.call(this,e),(0,i.Z)((0,c.Z)(o),"closePopupCreationCard",(function(){o.blockCreateCard.current.classList.remove("creation-card_open"),document.querySelector(".button-open-sidebar").classList.remove("hidden")})),o.state={errorText:""},o.blockCreateCard=f.createRef(),o}return(0,o.Z)(r,[{key:"render",value:function(){return(0,g.jsxs)("div",{className:"creation-card",ref:this.blockCreateCard,children:[(0,g.jsx)("button",{className:"close",onClick:this.closePopupCreationCard,children:(0,g.jsx)(R.default,{src:l.Z,alt:"close",width:30,height:30,loading:"lazy"})}),(0,g.jsx)("h2",{className:"subtitle",children:"Create card"}),(0,g.jsx)(C,{type:this.props.type})]})}}]),r}(f.Component)},7061:function(e,t,r){r.d(t,{Z:function(){return Z}});var n=r(4942),o=r(5671),c=r(3144),s=r(9340),a=r(2963),u=r(1120),i=r(7294),f=r(8617),l=r(5893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={control:function(e){return y(y({},e),{},{backgroundColor:"white"})},option:function(e,t){t.data,t.isDisabled,t.isFocused;return{backgroundColor:t.isSelected?"#ffb8b8":"#fff",padding:10,fontSize:"16px"}},menu:function(e,t){return y(y({},e),{},{padding:0,cursor:"pointer",border:"1px solid #000",borderRadius:0})}},m=function(e){(0,s.Z)(r,e);var t=d(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).state={options:[]},n}return(0,c.Z)(r,[{key:"componentDidMount",value:function(){var e=[];this.props.optionsArray.forEach((function(t){e.push({value:t,label:t})})),this.setState({options:e})}},{key:"render",value:function(){return(0,l.jsx)(f.ZP,{styles:h,options:this.state.options,placeholder:"",className:this.props.className,id:this.props.id,required:this.props.required})}}]),r}(i.Component);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var g=function(e){(0,s.Z)(r,e);var t=b(r);function r(e){return(0,o.Z)(this,r),t.call(this,e)}return(0,c.Z)(r,[{key:"render",value:function(){return(0,l.jsxs)("div",{className:"form__item",children:[this.props.label&&(0,l.jsx)("label",{htmlFor:this.props.id,className:"form__label".concat(this.props.required?" required":""),children:this.props.label}),(0,l.jsx)(m,{className:"form__select",optionsArray:this.props.optionsArray,required:this.props.required?"required":"",id:this.props.id})]})}}]),r}(i.Component),Z=i.forwardRef((function(e,t){return(0,l.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({innerRef:t},e))}))},7249:function(e,t,r){function n(e){e.sort((function(e,t){return e.startedAt>t.startedAt?1:-1}))}r.d(t,{v:function(){return n}})},4586:function(e,t,r){var n;r.d(t,{Z:function(){return l}});var o=new Uint8Array(16);function c(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(e){return"string"===typeof e&&s.test(e)},u=[],i=0;i<256;++i)u.push((i+256).toString(16).substr(1));var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r};var l=function(e,t,r){var n=(e=e||{}).random||(e.rng||c)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return f(n)}}}]);