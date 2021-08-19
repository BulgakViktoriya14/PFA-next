exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 7471:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ common_Wrapper; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./images/logo.png
/* harmony default export */ var logo = ({"src":"/_next/static/image/images/logo.761a2b7ef78869b0b935a7196c8f50e5.png","height":123,"width":360,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPElEQVR42mMw/qf03+i/yD/+f2L/Ff+L/WeI/Bf/L/qfzb/wfxH/3P/p/2MwABKm/wX+qf/T/c/wj+EfAMtqHDt2iCjwAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
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

/* harmony default export */ var common_Logo = (Logo);
// EXTERNAL MODULE: ./images/profile.png
var profile = __webpack_require__(1871);
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

/* harmony default export */ var common_ProfileMini = ((0,external_react_redux_.connect)(mapStateToProps, null)(ProfileMini));
;// CONCATENATED MODULE: ./components/common/Header.js






class Header extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx(common_Logo, {}), /*#__PURE__*/jsx_runtime_.jsx(common_ProfileMini, {})]
    });
  }

}

/* harmony default export */ var common_Header = (Header);
// EXTERNAL MODULE: ./images/close.svg
var images_close = __webpack_require__(518);
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

/* harmony default export */ var common_MoneyAccount = ((0,external_react_redux_.connect)(MoneyAccount_mapStateToProps, null)(MoneyAccount));
;// CONCATENATED MODULE: ./components/common/Sidebar.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
            className: "menu-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/income",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "menu-link",
                onClick: this.closeSidebar,
                children: "Income"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "menu-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/expenses",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "menu-link",
                onClick: this.closeSidebar,
                children: "Expenses"
              })
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(common_MoneyAccount, {})]
    });
  }

}

/* harmony default export */ var common_Sidebar = (/*#__PURE__*/external_react_default().forwardRef((props, ref) => /*#__PURE__*/jsx_runtime_.jsx(Sidebar, _objectSpread({
  blockSidebar: ref
}, props))));
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
          ref: this.blockSidebar
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

/* harmony default export */ var common_Wrapper = ((0,external_react_redux_.connect)(Wrapper_mapStateToProps, null)(Wrapper));

/***/ }),

/***/ 518:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/images/close.dbf4a056bb627916a7cf3c9d61faaab7.svg","height":512,"width":512});

/***/ }),

/***/ 1871:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/images/profile.e0cd17273bf2895fafe64fc54f5ad005.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyklEQVR4nDXPyYrCQBAG4L86E51h1CguuAX0oAff/z1EEMENRYNKMMT9YneXZaN1Kv7+6Kqi0WTOAMFay0EhR0oR0tOV1buRErBgYyyKQY67YcOFhzjhXZzQj+c5YJ/aIGxUUauU5Bm43h6YryN8AWsB7aaA8gfcH1isInhfIIVsxkevG0qosN7ukV5u8JRywGpjoIgw6HeQ8X1Mlxv3y7un4XjGQf4f9VqZ/36zbsmn1hwfU0rSCyjax9yqVyWGTGIHiEhOB51lzAuaDWZo/V/DtAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;