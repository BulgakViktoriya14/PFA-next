(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{2679:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Y}});var n=r(5893),a=r(6610),o=r(5991),c=r(3349),s=r(5255),i=r(6070),u=r(7608),p=r(6156),l=r(7294),f=r(7471),h=r(4494),d=r(8462);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){(0,p.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={control:function(t){return m(m({},t),{},{backgroundColor:"white"})},option:function(t,e){e.data,e.isDisabled,e.isFocused;return{backgroundColor:e.isSelected?"#ffb8b8":"#fff",padding:10,fontSize:"16px"}},menu:function(t,e){return m(m({},t),{},{padding:0,cursor:"pointer",border:"1px solid #000",borderRadius:0})}},g=function(t){(0,s.Z)(r,t);var e=y(r);function r(t){var n;return(0,a.Z)(this,r),(n=e.call(this,t)).state={options:[]},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var t=[];this.props.optionsArray.forEach((function(e){t.push({value:e,label:e})})),this.setState({options:t})}},{key:"render",value:function(){return(0,n.jsx)(d.ZP,{styles:b,options:this.state.options,placeholder:"",className:this.props.className,id:this.props.id,required:this.props.required})}}]),r}(l.Component);function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var D=function(t){(0,s.Z)(r,t);var e=j(r);function r(t){return(0,a.Z)(this,r),e.call(this,t)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"form__item",children:[(0,n.jsx)("label",{htmlFor:this.props.id,className:"form__label".concat(this.props.required?" required":""),children:this.props.label}),(0,n.jsx)(g,{className:"form__select",optionsArray:this.props.optionsArray,required:this.props.required?"required":"",id:this.props.id})]})}}]),r}(l.Component),R=l.forwardRef((function(t,e){return(0,n.jsx)(D,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){(0,p.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({innerRef:e},t))})),Z=r(7449);function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var w=function(t){(0,s.Z)(r,t);var e=O(r);function r(){return(0,a.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsx)("button",{id:this.props.id,onClick:this.props.functionOnClick,type:"button",className:"button-create-report",children:this.props.textButton})}}]),r}(l.Component);function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var N=function(t){(0,s.Z)(r,t);var e=S(r);function r(){return(0,a.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("form",{className:"form form-chart",children:[(0,n.jsx)(R,{label:"Select what to build the report for",required:!0,optionsArray:["Expenses","Income"],id:"type-report"}),(0,n.jsx)(R,{label:"Select the category for the report",required:!0,id:"category-report",optionsArray:["Daily graph","Monthly graph","Yearly graph","Category graph"]}),(0,n.jsx)(Z.Z,{innerRef:this.props.startDate,required:!0,label:"Select the start date of the interval",type:"date",id:"start-date-interval",flagPasswordField:!1}),(0,n.jsx)(Z.Z,{innerRef:this.props.endDate,required:!0,label:"Select the end date of the interval",type:"date",id:"end-date-interval",flagPasswordField:!1}),(0,n.jsxs)("div",{className:"form__wrapper-buttons",children:[(0,n.jsx)(w,{functionOnClick:this.props.createReport,textButton:"Create graph",id:"graph"}),(0,n.jsx)(w,{functionOnClick:this.props.createReport,textButton:"Create table",id:"table"})]}),this.props.errorText&&(0,n.jsx)("p",{className:"massage-error",children:this.props.errorText})]})}}]),r}(l.Component),T=r(1704);function P(t){var e=t.split(/[- :]/);return t=new Date(e[0],Number(e[1])-1,e[2],e[3],e[4],e[5]).getTime()}function k(t,e){var r=document.querySelector(".report__table .tbody");r.innerHTML="",t.forEach((function(t,n){var a=document.createElement("tr"),o=document.createElement("td"),c=document.createElement("td");o.classList.add("td"),c.classList.add("td"),o.innerText="".concat(t),c.innerText="".concat(e[n]),a.append(o),a.append(c),r.append(a)}))}var C=r(4925);function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var E=function(t){(0,s.Z)(r,t);var e=_(r);function r(t){return(0,a.Z)(this,r),e.call(this,t)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"report",children:[(0,n.jsx)(C.Z,{data:this.props.data,options:this.props.options,type:this.props.typeChart,responsiveOptions:this.props.responsiveOptions,className:"".concat(this.props.flag&&"graph"===this.props.type?"":"disabled")}),(0,n.jsxs)("table",{className:"table report__table".concat(this.props.flag&&"table"===this.props.type?"":" disabled"),children:[(0,n.jsx)("thead",{className:"thead",children:(0,n.jsxs)("tr",{className:"tr",children:[(0,n.jsx)("th",{className:"th",children:"Category"}),(0,n.jsx)("th",{className:"th",children:"Amount"})]})}),(0,n.jsx)("tbody",{className:"tbody"})]})]})}}]),r}(l.Component);function q(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var A=function(t){(0,s.Z)(r,t);var e=q(r);function r(t){var n;return(0,a.Z)(this,r),n=e.call(this,t),(0,p.Z)((0,c.Z)(n),"checkData",(function(t){0===t[0].length&&(n.setState({errorText:"You do not have data for this interval of time"}),n.setState({type:""}),n.setState({flag:!1}))})),(0,p.Z)((0,c.Z)(n),"createReport",(function(t){var e,r=document.querySelector("#type-report > div > div > div").innerText,a=document.querySelector("#category-report > div > div > div").innerText,o=n.startDate.current.value,c=n.endDate.current.value,s=(0,T.m)([o,c,r,a]),i=(e=c,P("".concat(o," 00:00:00"))<P("".concat(e," 00:00:00"))),u=function(t){var e=(new Date).getTime();return alert(e),alert(e),alert(e>P("".concat(t," 00:00:00"))),e>P("".concat(t," 00:00:00"))}(c),p=t.target.getAttribute("id");if(n.setState({type:p}),!s)return n.setState({errorText:"You have not completed the fields"}),void n.setState({flag:!1});if(!i)return n.setState({errorText:"The date interval is incorrect"}),void n.setState({flag:!1});if(!u)return n.setState({errorText:"You cannot choose a day beyond the current one"}),void n.setState({flag:!1});n.setState({errorText:""}),n.setState({flag:!0});var l="Expenses"===r?n.props.cardsExpenses:n.props.cardsIncome;switch(a){case"Daily graph":var f=function(t,e,r){var n=t.split("-"),a=e.split("-"),o=new Date("".concat(n[1]," ").concat(n[2]," ").concat(n[0])).getTime(),c=new Date("".concat(a[1]," ").concat(a[2]," ").concat(a[0])).getTime(),s=[],i=[],u=[],p=[];for(var l in r){var f=r[l].date.split("."),h=new Date("".concat(f[1]," ").concat(f[0]," ").concat(f[2])).getTime();s.push([h,r[l].money,r[l].date])}for(var d=0;d<s.length;d++)if(s[d].length<4){for(var y=d+1;y<s.length;y++)s[d][0]===s[y][0]&&s[y].length<4&&(s[d][1]=Number(s[d][1])+Number(s[y][1]),s[y].push("true"));i.push({date:s[d][0],money:s[d][1],label:s[d][2]})}return i.forEach((function(t){t.date>=o&&t.date<=c&&(u.push(t.money),p.push(t.label))})),[p,u]}(o,c,l);n.checkData(f),"graph"===p?n.setState({data:{labels:f[0],series:f[1]}}):"table"===p&&k(f[0],f[1]);break;case"Category graph":var h=function(t,e,r){var n=t.split("-"),a=e.split("-"),o=new Date("".concat(n[1]," ").concat(n[2]," ").concat(n[0])).getTime(),c=new Date("".concat(a[1]," ").concat(a[2]," ").concat(a[0])).getTime(),s=[],i=[],u=[],p=[];for(var l in r)if(r[l].category){var f=r[l].date.split("."),h=new Date("".concat(f[1]," ").concat(f[0]," ").concat(f[2])).getTime();s.push([h,r[l].money,r[l].category])}for(var d=0;d<s.length;d++)if(s[d].length<4){for(var y=d+1;y<s.length;y++)s[d][2].toLowerCase().trim()===s[y][2].toLowerCase().trim()&&s[y].length<4&&(s[d][1]=(Number(s[d][1])+Number(s[y][1])).toFixed(2),s[y].push("true"));i.push({date:s[d][0],money:s[d][1],label:s[d][2]})}return i.forEach((function(t){t.date>=o&&t.date<=c&&(u.push(t.money),p.push(t.label))})),[p,u]}(o,c,l);n.checkData(h),"graph"===p?n.setState({data:{labels:h[0],series:h[1]}}):"table"===p&&k(h[0],h[1]);break;case"Yearly graph":var d=function(t,e,r){var n=t.split("-"),a=e.split("-"),o=Number(n[0]),c=Number(a[0]),s=[],i=[],u=[],p=[];for(var l in r){var f=r[l].date.split(".")[2];s.push([f,r[l].money])}for(var h=0;h<s.length;h++)if(s[h].length<3){for(var d=h+1;d<s.length;d++)s[h][0]===s[d][0]&&s[d].length<3&&(s[h][1]=Number(s[h][1])+Number(s[d][1]),s[d].push("true"));i.push({date:s[h][0],money:s[h][1]})}return i.forEach((function(t){t.date>=o&&t.date<=c&&(u.push(t.money),p.push(t.date))})),[p,u]}(o,c,l);n.checkData(d),"graph"===p?n.setState({data:{labels:d[0],series:d[1]}}):"table"===p&&k(d[0],d[1]);break;case"Monthly graph":var y=function(t,e,r){var n=t.split("-"),a=e.split("-"),o=new Date("".concat(n[1]," ").concat(n[2]," ").concat(n[0])).getTime(),c=new Date("".concat(a[1]," ").concat(a[2]," ").concat(a[0])).getTime(),s=[],i=[],u=[],p=[];for(var l in r){var f=r[l].date.split("."),h=new Date("".concat(f[1]," ").concat(f[0]," ").concat(f[2])).getTime(),d=f[2],y=f[1];s.push([d,y,r[l].money,h])}for(var v=0;v<s.length;v++)if(s[v].length<5){for(var m=v+1;m<s.length;m++)s[v][0]===s[m][0]&&s[v][1]===s[m][1]&&s[m].length<5&&(s[v][2]=Number(s[v][2])+Number(s[m][2]),s[m].push("true"));i.push({dateY:s[v][0],dateM:s[v][1],money:s[v][2],date:s[v][3]})}return i.forEach((function(t){t.date>=o&&t.date<=c&&(u.push(t.money),p.push("".concat(t.dateM,".").concat(t.dateY)))})),[p,u]}(o,c,l);n.checkData(y),"graph"===p?n.setState({data:{labels:y[0],series:y[1]}}):"table"===p&&k(y[0],y[1])}})),n.state={data:{},errorText:"",type:"",flag:!1},n.startDate=l.createRef(),n.endDate=l.createRef(),n}return(0,o.Z)(r,[{key:"render",value:function(){return(0,n.jsxs)(f.Z,{children:[(0,n.jsx)("h1",{className:"title",children:"Reports about your income and expenses"}),(0,n.jsxs)("div",{className:"report-container",children:[(0,n.jsx)(N,{startDate:this.startDate,endDate:this.endDate,createReport:this.createReport,errorText:this.state.errorText,typeReport:this.typeReport,categoryReport:this.categoryReport,buttonCreateType:this.buttonCreateType}),(0,n.jsx)(E,{data:this.state.data,flag:this.state.flag,type:this.state.type,typeChart:"Pie",responsiveOptions:[["screen and (max-width: 500px)",{height:"300px",width:"300px",labelOffset:20}]],options:{width:"400px",height:"400px",donut:!1,labelOffset:50}})]})]})}}]),r}(l.Component);var Y=(0,h.$j)((function(t){return{cardsExpenses:t.userInfo.cardsExpenses,cardsIncome:t.userInfo.cardsIncome}}),null)(A)},4094:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports",function(){return r(2679)}])}},function(t){t.O(0,[882,95,676,774,888,179],(function(){return e=4094,t(t.s=e);var e}));var e=t.O();_N_E=e}]);