(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{7471:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n=r(5893),c=r(6610),i=r(5991),s=r(3349),o=r(5255),a=r(6089),u=r(7608),f=r(6156),l=r(7294),h={src:"/_next/static/image/images/logo.761a2b7ef78869b0b935a7196c8f50e5.png",height:123,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPElEQVR42mMw/qf03+i/yD/+f2L/Ff+L/WeI/Bf/L/qfzb/wfxH/3P/p/2MwABKm/wX+qf/T/c/wj+EfAMtqHDt2iCjwAAAAAElFTkSuQmCC"},p=r(5675);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var c=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var m=function(e){(0,o.Z)(r,e);var t=d(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){return(0,n.jsx)("div",{className:"logo wrapper-img",children:(0,n.jsx)(p.default,{src:h,alt:"logo",width:250,height:100,loading:"lazy"})})}}]),r}(l.Component),y=r(1871),b=r(6940),v=r(1664);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var c=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var g=function(e){(0,o.Z)(r,e);var t=j(r);function r(e){var n;return(0,c.Z)(this,r),n=t.call(this,e),(0,f.Z)((0,s.Z)(n),"closeSidebar",(function(){document.querySelector(".sidebar").classList.contains("sidebar_open")&&document.querySelector(".sidebar").classList.remove("sidebar_open")})),n.containerImage=l.createRef(),n}return(0,i.Z)(r,[{key:"setPhotoUser",value:function(){var e=this.containerImage.current;this.props.userAvatar&&(e.innerHTML="<img src=".concat(this.props.userAvatar,' alt="photo"/>'))}},{key:"componentDidMount",value:function(){this.setPhotoUser()}},{key:"componentDidUpdate",value:function(){this.setPhotoUser()}},{key:"render",value:function(){return(0,n.jsxs)("div",{className:this.props.userName?"header__profile":"header__profile_hidden",children:[(0,n.jsx)("h3",{className:"header__name",children:(0,n.jsx)(v.default,{href:"/profile",children:(0,n.jsx)("a",{onClick:this.closeSidebar,children:this.props.userName})})}),(0,n.jsx)("div",{className:"header__photo wrapper-img",children:(0,n.jsx)(v.default,{href:"/profile",children:(0,n.jsx)("a",{onClick:this.closeSidebar,ref:this.containerImage,children:(0,n.jsx)(p.default,{src:y.Z,alt:"photo",width:70,height:70,loading:"lazy"})})})})]})}}]),r}(l.Component);var A=(0,b.$j)((function(e){return{userName:e.userInfo.userName,userAvatar:e.userInfo.userAvatar}}),null)(g);function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var c=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var x=function(e){(0,o.Z)(r,e);var t=Z(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("header",{className:"header",children:[(0,n.jsx)(m,{}),(0,n.jsx)(A,{})]})}}]),r}(l.Component),R=r(518);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var c=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var w=function(e){(0,o.Z)(r,e);var t=N(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"money-account",children:[(0,n.jsx)("h3",{className:"money-account_title",children:"On your account:"}),(0,n.jsxs)("span",{className:"money-account_sum",children:[(0,n.jsx)("span",{className:"number",children:this.props.sum})," BYN."]})]})}}]),r}(l.Component);var O=(0,b.$j)((function(e){return{sum:e.userInfo.userSum}}),null)(w);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var c=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var S=function(e){(0,o.Z)(r,e);var t=D(r);function r(){var e;(0,c.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,f.Z)((0,s.Z)(e),"closeSidebar",(function(){e.props.blockSidebar.current.classList.remove("sidebar_open")})),e}return(0,i.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("aside",{className:"sidebar",ref:this.props.blockSidebar,children:[(0,n.jsx)("nav",{className:"menu",children:(0,n.jsxs)("ul",{className:"menu-list",children:[(0,n.jsx)("button",{className:"close",onClick:this.closeSidebar,children:(0,n.jsx)(p.default,{src:R.Z,alt:"close",width:30,height:30,loading:"lazy"})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)(v.default,{href:"/income",children:(0,n.jsx)("a",{className:"menu-link",onClick:this.closeSidebar,children:"Income"})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)(v.default,{href:"/expenses",children:(0,n.jsx)("a",{className:"menu-link",onClick:this.closeSidebar,children:"Expenses"})})})]})}),(0,n.jsx)(O,{})]})}}]),r}(l.Component),P=l.forwardRef((function(e,t){return(0,n.jsx)(S,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({blockSidebar:t},e))}));function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var c=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var C=function(e){(0,o.Z)(r,e);var t=_(r);function r(e){var n;return(0,c.Z)(this,r),n=t.call(this,e),(0,f.Z)((0,s.Z)(n),"openSidebar",(function(){n.blockSidebar.current.classList.add("sidebar_open")})),n.blockSidebar=l.createRef(),n}return(0,i.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"site",children:[(0,n.jsx)(x,{}),(0,n.jsxs)("section",{className:"content",children:[this.props.userName&&(0,n.jsx)("button",{className:"button-open-sidebar",onClick:this.openSidebar}),this.props.userName&&(0,n.jsx)(P,{ref:this.blockSidebar}),(0,n.jsx)("div",{className:"wrapper",children:this.props.children})]})]})}}]),r}(l.Component);var E=(0,b.$j)((function(e){return{userName:e.userInfo.userName}}),null)(C)},7449:function(e,t,r){"use strict";var n=r(6156),c=r(5893),i=r(6610),s=r(5991),o=r(5255),a=r(6089),u=r(7608),f=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var c=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var p=function(e){(0,o.Z)(r,e);var t=h(r);function r(e){return(0,i.Z)(this,r),t.call(this,e)}return(0,s.Z)(r,[{key:"render",value:function(){return(0,c.jsxs)("div",{className:"form__item",children:[(0,c.jsx)("label",{htmlFor:this.props.id,className:"form__label".concat(this.props.required?" required":""),children:this.props.label}),(0,c.jsx)("input",{type:this.props.type,ref:this.props.innerRef,id:this.props.id,name:this.props.id,className:"form__input",required:this.props.required?"required":"","aria-required":this.props.required?"required":"",onChange:this.props.functionOnChange,"aria-label":this.props.label}),this.props.flagPasswordField&&(0,c.jsx)("button",{className:"button-visible-password",onClick:this.props.showHidePassword})]})}}]),r}(f.Component);t.Z=f.forwardRef((function(e,t){return(0,c.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({innerRef:t},e))}))},1704:function(e,t,r){"use strict";function n(e){var t=0;return e.forEach((function(e){""===e&&t++})),!(t>0)}r.d(t,{m:function(){return n}})},518:function(e,t){"use strict";t.Z={src:"/_next/static/image/images/close.dbf4a056bb627916a7cf3c9d61faaab7.svg",height:512,width:512}},1871:function(e,t){"use strict";t.Z={src:"/_next/static/image/images/profile.e0cd17273bf2895fafe64fc54f5ad005.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyklEQVR4nDXPyYrCQBAG4L86E51h1CguuAX0oAff/z1EEMENRYNKMMT9YneXZaN1Kv7+6Kqi0WTOAMFay0EhR0oR0tOV1buRErBgYyyKQY67YcOFhzjhXZzQj+c5YJ/aIGxUUauU5Bm43h6YryN8AWsB7aaA8gfcH1isInhfIIVsxkevG0qosN7ukV5u8JRywGpjoIgw6HeQ8X1Mlxv3y7un4XjGQf4f9VqZ/36zbsmn1hwfU0rSCyjax9yqVyWGTGIHiEhOB51lzAuaDWZo/V/DtAAAAABJRU5ErkJggg=="}}}]);