(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7538:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MyApp; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/chartist/dist/chartist.js
var chartist = __webpack_require__(9259);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: ./reducers/info.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  idUser: '',
  userEmail: "",
  userName: "",
  userSum: 0,
  userAvatar: '',
  cardsIncome: [],
  cardsExpenses: []
};
function userInfo(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_ID":
      return _objectSpread(_objectSpread({}, state), {}, {
        idUser: action.payload
      });

    case "SET_USER_NAME":
      return _objectSpread(_objectSpread({}, state), {}, {
        userName: action.payload
      });

    case "SET_USER_EMAIL":
      return _objectSpread(_objectSpread({}, state), {}, {
        userEmail: action.payload
      });

    case "SET_USER_SUM":
      return _objectSpread(_objectSpread({}, state), {}, {
        userSum: action.payload
      });

    case "SET_USER_AVATAR":
      return _objectSpread(_objectSpread({}, state), {}, {
        userAvatar: action.payload
      });

    case "SET_USER_INCOME_CARDS":
      return _objectSpread(_objectSpread({}, state), {}, {
        cardsIncome: action.payload
      });

    case "SET_USER_EXPENSES_CARDS":
      return _objectSpread(_objectSpread({}, state), {}, {
        cardsExpenses: action.payload
      });

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./reducers/index.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  userInfo: userInfo
});
/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(7005);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/common/Head.js




function HeadMain() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: "Description"
    }), /*#__PURE__*/jsx_runtime_.jsx("title", {
      children: "Personal finance accounting"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "manifest",
      href: "/manifest.json"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      href: "/icon-small.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      href: "/icon-big.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "mobile-web-app-capable",
      content: "yes"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "theme-color",
      content: "#536878"
    })]
  });
}

/* harmony default export */ var Head = (HeadMain);
;// CONCATENATED MODULE: ./firebaseConfig.js
const firebaseConfig = {
  apiKey: "AIzaSyD4ZOaQgincn4u2ohZbafA0KebyN68JE9E",
  authDomain: "project-pfa-e4c83.firebaseapp.com",
  databaseURL: "https://project-pfa-e4c83-default-rtdb.firebaseio.com",
  projectId: "project-pfa-e4c83",
  storageBucket: "project-pfa-e4c83.appspot.com",
  messagingSenderId: "964044908564",
  appId: "1:964044908564:web:56963fd7a04f0d8bafdf01"
};
;// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const store = (0,external_redux_namespaceObject.createStore)(reducers);
external_firebase_default().initializeApp(firebaseConfig);
function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
    store: store,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
  });
}

/***/ }),

/***/ 7005:
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [259], function() { return __webpack_exec__(7538); });
module.exports = __webpack_exports__;

})();