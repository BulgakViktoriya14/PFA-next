(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{3238:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return C}});var n=r(5893),a=r(6610),o=r(5991),c=r(3349),s=r(5255),i=r(6070),u=r(7608),l=r(6156),p=r(7294),f=r(7471),h=r(4925),d=r(4494),y=r(8462);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){(0,l.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g={control:function(t){return b(b({},t),{},{backgroundColor:"white"})},option:function(t,e){e.data;var r=e.isDisabled;e.isFocused;return{backgroundColor:e.isSelected?"#faabab":"#fff",padding:"5px",cursor:r?"not-allowed":"default",fontSize:"16px"}},menu:function(t,e){return b(b({},t),{},{padding:"0",border:"1px solid #000"})}},x=function(t){(0,s.Z)(r,t);var e=v(r);function r(t){var n;return(0,a.Z)(this,r),(n=e.call(this,t)).state={options:[]},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var t=[];this.props.optionsArray.forEach((function(e){t.push({value:e,label:e})})),this.setState({options:t})}},{key:"render",value:function(){return(0,n.jsx)(y.ZP,{styles:g,options:this.state.options,placeholder:"",className:this.props.className,id:this.props.id,required:this.props.required})}}]),r}(p.Component);function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var O=function(t){(0,s.Z)(r,t);var e=D(r);function r(t){return(0,a.Z)(this,r),e.call(this,t)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"form__item",children:[(0,n.jsx)("label",{htmlFor:this.props.id,className:"form__label".concat(this.props.required?" required":""),children:this.props.label}),(0,n.jsx)(x,{className:"form__select",optionsArray:this.props.optionsArray,required:this.props.required?"required":"",id:this.props.id})]})}}]),r}(p.Component),R=p.forwardRef((function(t,e){return(0,n.jsx)(O,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){(0,l.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({innerRef:e},t))})),Z=r(7449);function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var S=function(t){(0,s.Z)(r,t);var e=w(r);function r(){return(0,a.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsx)("button",{id:this.props.id,onClick:this.props.functionOnClick,type:"button",className:"button-create-report",children:this.props.textButton})}}]),r}(p.Component);function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var T=function(t){(0,s.Z)(r,t);var e=N(r);function r(){return(0,a.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("form",{className:"form form-chart",children:[(0,n.jsx)(R,{label:"Select what to build the report for",required:!0,optionsArray:["Expenses","Income"],id:"type-report"}),(0,n.jsx)(R,{label:"Select categories for the report",required:!0,id:"category-report",optionsArray:["Daily chart","Monthly chart","Yearly chart","Category chart"]}),(0,n.jsx)(Z.Z,{innerRef:this.props.startDate,required:!0,label:"Select the start date of the interval",type:"date",id:"start-date-interval",flagPasswordField:!1}),(0,n.jsx)(Z.Z,{innerRef:this.props.endDate,required:!0,label:"Select the end date of the interval",type:"date",id:"end-date-interval",flagPasswordField:!1}),(0,n.jsxs)("div",{className:"form__wrapper-buttons",children:[(0,n.jsx)(S,{functionOnClick:this.props.createReport,textButton:"Create graph",id:"graph"}),(0,n.jsx)(S,{functionOnClick:this.props.createReport,textButton:"Create table",id:"table"})]}),this.props.errorText&&(0,n.jsx)("p",{className:"massage-error",children:this.props.errorText})]})}}]),r}(p.Component),P=r(1704);function k(t,e){var r=document.querySelector(".report__table .tbody");r.innerHTML="",t.forEach((function(t,n){var a=document.createElement("tr"),o=document.createElement("td"),c=document.createElement("td");o.classList.add("td"),c.classList.add("td"),o.innerText="".concat(t),c.innerText="".concat(e[n]),a.append(o),a.append(c),r.append(a)}))}function E(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var _=function(t){(0,s.Z)(r,t);var e=E(r);function r(t){var n;return(0,a.Z)(this,r),n=e.call(this,t),(0,l.Z)((0,c.Z)(n),"checkData",(function(t){0===t[0].length&&(n.setState({errorText:"You do not have data for this interval of time"}),n.setState({type:""}),n.setState({flag:!1}))})),(0,l.Z)((0,c.Z)(n),"createReport",(function(t){var e=document.querySelector("#type-report > div > div > div").innerText,r=document.querySelector("#category-report > div > div > div").innerText;console.log(e,r);var a=n.startDate.current.value,o=n.endDate.current.value,c=(0,P.m)([a,o,e,r]),s=function(t,e){var r=t.split("-"),n=e.split("-");return new Date("".concat(r[1]," ").concat(r[2]," ").concat(r[0])).getTime()<new Date("".concat(n[1]," ").concat(n[2]," ").concat(n[0])).getTime()}(a,o),i=validateDateEnd(o);if(!c)return n.setState({errorText:"You have not completed the fields"}),void n.setState({flag:!1});if(!s)return n.setState({errorText:"The date interval is incorrect"}),void n.setState({flag:!1});if(!i)return n.setState({errorText:"You cannot choose a day beyond the current one"}),void n.setState({flag:!1});n.setState({errorText:""}),n.setState({type:t.target.getAttribute("id")});var u="Expenses"===e?n.props.cardsExpenses:n.props.cardsIncome;switch(r){case"Daily chart":var l=function(t,e,r){var n=t.split("-"),a=e.split("-"),o=new Date("".concat(n[1]," ").concat(n[2]," ").concat(n[0])).getTime(),c=new Date("".concat(a[1]," ").concat(a[2]," ").concat(a[0])).getTime(),s=[],i=[],u=[],l=[];for(var p in r){var f=r[p].date.split("."),h=new Date("".concat(f[1]," ").concat(f[0]," ").concat(f[2])).getTime();s.push([h,r[p].money,r[p].date])}for(var d=0;d<s.length;d++)if(s[d].length<4){for(var y=d+1;y<s.length;y++)s[d][0]===s[y][0]&&s[y].length<4&&(s[d][1]=Number(s[d][1])+Number(s[y][1]),s[y].push("true"));i.push({date:s[d][0],money:s[d][1],label:s[d][2]})}return i.forEach((function(t){t.date>=o&&t.date<=c&&(u.push(t.money),l.push(t.label))})),[l,u]}(a,o,u);n.checkData(l),n.setState({flag:!0}),"graph"===n.state.type?n.setState({data:{labels:l[0],series:l[1]}}):"table"===n.state.type&&k(l[0],l[1]);break;case"Category chart":var p=function(t,e,r){var n=t.split("-"),a=e.split("-"),o=new Date("".concat(n[1]," ").concat(n[2]," ").concat(n[0])).getTime(),c=new Date("".concat(a[1]," ").concat(a[2]," ").concat(a[0])).getTime(),s=[],i=[],u=[],l=[];for(var p in r)if(r[p].category){var f=r[p].date.split("."),h=new Date("".concat(f[1]," ").concat(f[0]," ").concat(f[2])).getTime();s.push([h,r[p].money,r[p].category])}for(var d=0;d<s.length;d++)if(s[d].length<4){for(var y=d+1;y<s.length;y++)s[d][2]===s[y][2]&&s[y].length<4&&(s[d][1]=Number(s[d][1])+Number(s[y][1]),s[y].push("true"));i.push({date:s[d][0],money:s[d][1],label:s[d][2]})}return i.forEach((function(t){t.date>=o&&t.date<=c&&(u.push(t.money),l.push(t.label))})),[l,u]}(a,o,u);n.checkData(p),n.setState({flag:!0}),"graph"===n.state.type?n.setState({data:{labels:p[0],series:p[1]}}):"table"===n.state.type&&k(p[0],p[1]);break;case"Yearly chart":var f=function(t,e,r){var n=t.split("-"),a=e.split("-"),o=Number(n[0]),c=Number(a[0]),s=[],i=[],u=[],l=[];for(var p in r){var f=r[p].date.split(".")[2];s.push([f,r[p].money])}for(var h=0;h<s.length;h++)if(s[h].length<3){for(var d=h+1;d<s.length;d++)s[h][0]===s[d][0]&&s[d].length<3&&(s[h][1]=Number(s[h][1])+Number(s[d][1]),s[d].push("true"));i.push({date:s[h][0],money:s[h][1]})}return i.forEach((function(t){t.date>=o&&t.date<=c&&(u.push(t.money),l.push(t.date))})),[l,u]}(a,o,u);n.checkData(f),n.setState({flag:!0}),"graph"===n.state.type?n.setState({data:{labels:f[0],series:f[1]}}):"table"===n.state.type&&k(f[0],f[1]);break;case"Monthly chart":var h=function(t,e,r){var n=t.split("-"),a=e.split("-"),o=new Date("".concat(n[1]," ").concat(n[2]," ").concat(n[0])).getTime(),c=new Date("".concat(a[1]," ").concat(a[2]," ").concat(a[0])).getTime(),s=[],i=[],u=[],l=[];for(var p in r){var f=r[p].date.split("."),h=new Date("".concat(f[1]," ").concat(f[0]," ").concat(f[2])).getTime(),d=f[2],y=f[1];s.push([d,y,r[p].money,h])}for(var v=0;v<s.length;v++)if(s[v].length<5){for(var m=v+1;m<s.length;m++)s[v][0]===s[m][0]&&s[v][1]===s[m][1]&&s[m].length<5&&(s[v][2]=Number(s[v][2])+Number(s[m][2]),s[m].push("true"),console.log(s[v][0],s[v][1]));i.push({dateY:s[v][0],dateM:s[v][1],money:s[v][2],date:s[v][3]}),console.log(i)}return i.forEach((function(t){console.log(t),t.date>=o&&t.date<=c&&(u.push(t.money),l.push("".concat(t.dateM,".").concat(t.dateY))),console.log(u,l)})),[l,u]}(a,o,u);n.checkData(h),n.setState({flag:!0}),"graph"===n.state.type?n.setState({data:{labels:h[0],series:h[1]}}):"table"===n.state.type&&k(h[0],h[1])}})),n.state={data:{},errorText:"",type:"",flag:!1},n.startDate=p.createRef(),n.endDate=p.createRef(),n}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)(f.Z,{children:[(0,n.jsx)("h1",{className:"title",children:"Reports about your income and expenses"}),(0,n.jsxs)("div",{className:"report-container",children:[(0,n.jsx)(T,{startDate:this.startDate,endDate:this.endDate,createReport:this.createReport,errorText:this.state.errorText,typeReport:this.typeReport,categoryReport:this.categoryReport,buttonCreateType:this.buttonCreateType}),(0,n.jsxs)("div",{className:"report",children:["graph"===this.state.type&&(0,n.jsx)(h.Z,{data:this.state.data,options:{width:"400px",height:"400px",donut:!1,labelOffset:50},type:"Pie",responsiveOptions:[["screen and (max-width: 500px)",{height:"300px",width:"300px",labelOffset:20}]]}),"table"===this.state.type&&this.state.flag&&(0,n.jsxs)("table",{className:"table report__table",children:[(0,n.jsx)("thead",{className:"thead",children:(0,n.jsxs)("tr",{className:"tr",children:[(0,n.jsx)("th",{className:"th",children:"Category"}),(0,n.jsx)("th",{className:"th",children:"Amount"})]})}),(0,n.jsx)("tbody",{className:"tbody"})]})]})]})]})}}]),r}(p.Component);var C=(0,d.$j)((function(t){return{cardsExpenses:t.userInfo.cardsExpenses,cardsIncome:t.userInfo.cardsIncome}}),null)(_)},4094:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports",function(){return r(3238)}])}},function(t){t.O(0,[882,95,676,774,888,179],(function(){return e=4094,t(t.s=e);var e}));var e=t.O();_N_E=e}]);