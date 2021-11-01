exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Wrapper)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/image/images/logo.761a2b7ef78869b0b935a7196c8f50e5.png","height":123,"width":360,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAACVBMVEUEBAQgICAUFBTnjh+tAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFUlEQVQImWNggAFGRkYmRkYmOJ8BAACWAAoihrZQAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/common/Logo.js





class Logo extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "logo wrapper-img",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: logo,
        alt: "logo",
        width: 250,
        height: 100,
        loading: 'lazy'
      })
    });
  }

}

/* harmony default export */ const common_Logo = (Logo);
// EXTERNAL MODULE: ./images/profile.png
var profile = __webpack_require__(4758);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/common/ProfileMini.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ProfileMini extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "closeSidebar", () => {
      if (document.querySelector(".sidebar").classList.contains("sidebar_open")) {
        document.querySelector(".sidebar").classList.remove("sidebar_open");
      }
    });

    this.containerImage = /*#__PURE__*/external_react_default().createRef();
  }

  setPhotoUser() {
    let imageWrapper = this.containerImage.current;

    if (this.props.userAvatar) {
      imageWrapper.innerHTML = `<img src=${this.props.userAvatar} alt="photo"/>`;
    }
  }

  componentDidMount() {
    this.setPhotoUser();
  }

  componentDidUpdate() {
    this.setPhotoUser();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: this.props.userName ? 'header__profile' : 'header__profile_hidden',
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "header__name",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/profile",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: this.closeSidebar,
            children: this.props.userName
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header__photo wrapper-img",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/profile",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: this.closeSidebar,
            ref: this.containerImage,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: profile/* default */.Z,
              alt: "photo",
              width: 70,
              height: 70,
              loading: 'lazy'
            })
          })
        })
      })]
    });
  }

}

function mapStateToProps(state) {
  return {
    userName: state.userInfo.userName,
    userAvatar: state.userInfo.userAvatar
  };
}

/* harmony default export */ const common_ProfileMini = ((0,external_react_redux_.connect)(mapStateToProps, null)(ProfileMini));
;// CONCATENATED MODULE: ./components/common/Header.js






class Header extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx(common_Logo, {}), /*#__PURE__*/jsx_runtime_.jsx(common_ProfileMini, {})]
    });
  }

}

/* harmony default export */ const common_Header = (Header);
// EXTERNAL MODULE: ./images/close.svg
var images_close = __webpack_require__(3561);
;// CONCATENATED MODULE: ./components/common/MoneyAccount.js





class MoneyAccount extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "money-account",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "money-account_title",
        children: "On your account:"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "money-account_sum",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "number",
          children: this.props.sum
        }), " BYN."]
      })]
    });
  }

}

function MoneyAccount_mapStateToProps(state) {
  return {
    sum: state.userInfo.userSum
  };
}

/* harmony default export */ const common_MoneyAccount = ((0,external_react_redux_.connect)(MoneyAccount_mapStateToProps, null)(MoneyAccount));
;// CONCATENATED MODULE: ./components/common/Sidebar.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Sidebar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Sidebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Sidebar extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    Sidebar_defineProperty(this, "closeSidebar", () => {
      this.props.blockSidebar.current.classList.remove("sidebar_open");
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
      className: "sidebar",
      ref: this.props.blockSidebar,
      children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: "menu",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "menu-list",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "close",
            onClick: this.closeSidebar,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: images_close/* default */.Z,
              alt: "close",
              width: 30,
              height: 30,
              loading: 'lazy'
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: this.props.router.pathname === "/income" ? "menu-item menu-item_active" : "menu-item",
            onClick: this.closeSidebar,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/income",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "menu-link",
                children: "Income"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: this.props.router.pathname === "/expenses" ? "menu-item menu-item_active" : "menu-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/expenses",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "menu-link",
                children: "Expenses"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: this.props.router.pathname === "/reports" ? "menu-item menu-item_active" : "menu-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/reports",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "menu-link",
                children: "Reports"
              })
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(common_MoneyAccount, {})]
    });
  }

}

/* harmony default export */ const common_Sidebar = (/*#__PURE__*/external_react_default().forwardRef((props, ref) => /*#__PURE__*/jsx_runtime_.jsx(Sidebar, _objectSpread({
  blockSidebar: ref
}, props))));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/common/Wrapper.js
function Wrapper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Wrapper extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    Wrapper_defineProperty(this, "openSidebar", () => {
      this.blockSidebar.current.classList.add("sidebar_open");
    });

    this.blockSidebar = /*#__PURE__*/external_react_default().createRef();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "site",
      children: [/*#__PURE__*/jsx_runtime_.jsx(common_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "content",
        children: [this.props.userName && /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "button-open-sidebar",
          onClick: this.openSidebar
        }), this.props.userName && /*#__PURE__*/jsx_runtime_.jsx(common_Sidebar, {
          ref: this.blockSidebar,
          router: this.props.router
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "wrapper",
          children: this.props.children
        })]
      })]
    });
  }

}

function Wrapper_mapStateToProps(state) {
  return {
    userName: state.userInfo.userName
  };
}

/* harmony default export */ const common_Wrapper = ((0,external_react_redux_.connect)(Wrapper_mapStateToProps, null)((0,router_.withRouter)(Wrapper)));

/***/ }),

/***/ 7449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FieldFormWithoutValue extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "form__item",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
        htmlFor: this.props.id,
        className: `form__label${this.props.required ? ' required' : ''}`,
        children: this.props.label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
        type: this.props.type,
        ref: this.props.innerRef,
        id: this.props.id,
        name: this.props.id,
        className: "form__input",
        required: this.props.required ? "required" : "",
        "aria-required": this.props.required ? "required" : "",
        onChange: this.props.functionOnChange,
        "aria-label": this.props.label,
        inputMode: this.props.inputMode
      }), this.props.flagPasswordField && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
        className: "button-visible-password",
        "aria-label": "Button visible password",
        onClick: this.props.showHidePassword
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, ref) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FieldFormWithoutValue, _objectSpread({
  innerRef: ref
}, props))));

/***/ }),

/***/ 1704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ validateEmptyField)
/* harmony export */ });
function validateEmptyField(fieldsArray) {
  let countFalse = 0;
  fieldsArray.forEach(function (item) {
    if (item === "") {
      countFalse++;
    }
  });
  return countFalse <= 0;
}

/***/ }),

/***/ 3561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/close.29a3822456679d49f6933189f905058f.svg","height":512,"width":512});

/***/ }),

/***/ 4758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/profile.e0cd17273bf2895fafe64fc54f5ad005.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXR1tz////d4eXm6ezx8vQ+6NwuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVQImVXKsQ0AMBDCQAzsP3Mk9E1cXWFJsrUMGQL9Ybjp4LI7rD4IBABB1+Og3QAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;