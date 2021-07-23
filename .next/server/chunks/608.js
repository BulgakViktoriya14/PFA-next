exports.id = 608;
exports.ids = [608];
exports.modules = {

/***/ 887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ blocks_ModalWindow; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(7005);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);
// EXTERNAL MODULE: ./functions/validateEmptyField.js
var validateEmptyField = __webpack_require__(1704);
// EXTERNAL MODULE: ./components/fields/FieldFormWithoutValue.js
var FieldFormWithoutValue = __webpack_require__(7449);
// EXTERNAL MODULE: ./functions/doVisibleOrHiddenPassword.js
var doVisibleOrHiddenPassword = __webpack_require__(6755);
;// CONCATENATED MODULE: ./components/blocks/FormChangePassword.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class FormChangePassword extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "changePassword", e => {
      e.preventDefault();
      let newPassOne = this.newPassword.current.value;
      let newPassTwo = this.repeatPassword.current.value;

      let _this = this;

      if (!(0,validateEmptyField/* validateEmptyField */.m)([newPassOne, newPassTwo])) {
        this.setState({
          errorText: "Your fields are empty"
        });
        return;
      }

      if (newPassOne === newPassTwo) {
        this.setState({
          errorText: ""
        });
        external_firebase_default().auth().currentUser.updatePassword(newPassOne).then(() => {
          _this.props.openSuccessResult();
        }).catch(error => {
          this.setState({
            errorText: error.message
          });
        });
      } else {
        this.setState({
          errorText: "Your passwords do not match"
        });
      }
    });

    _defineProperty(this, "doVisibleOrHiddenPassword", e => {
      e.preventDefault();
      (0,doVisibleOrHiddenPassword/* doVisibleOrHiddenPassword */.o)(e.target);
    });

    this.state = {
      errorText: ''
    };
    this.newPassword = /*#__PURE__*/external_react_default().createRef();
    this.repeatPassword = /*#__PURE__*/external_react_default().createRef();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "form form-change-password",
      children: [!this.props.flagChangePassword && /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        ref: this.newPassword,
        required: true,
        label: "New password",
        type: "password",
        id: "new-password",
        flagPasswordField: true,
        showHidePassword: this.doVisibleOrHiddenPassword
      }), !this.props.flagChangePassword && /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        ref: this.repeatPassword,
        required: true,
        label: "Re-enter the new password",
        type: "password",
        id: "repeat-password",
        flagPasswordField: true,
        showHidePassword: this.doVisibleOrHiddenPassword
      }), !this.props.flagChangePassword && /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "form__submit",
        name: "submit",
        onClick: this.changePassword,
        children: "Save"
      }), this.props.flagChangePassword && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "success-result",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "success-result__text",
          children: "Your password has been updated"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "form__submit",
          name: "submit",
          onClick: this.props.functionCloseWindow,
          children: "Close"
        })]
      }), this.state.errorText && /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "massage-error",
        children: this.state.errorText
      })]
    });
  }

}

/* harmony default export */ var blocks_FormChangePassword = (FormChangePassword);
// EXTERNAL MODULE: ./images/close.svg
var images_close = __webpack_require__(518);
;// CONCATENATED MODULE: ./components/blocks/FormChangeAvatar.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { FormChangeAvatar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FormChangeAvatar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class FormChangeAvatar extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    FormChangeAvatar_defineProperty(this, "saveNewAvatar", e => {
      e.preventDefault();
      let file = this.props.inputFile.current.files[0];

      let _this = this;

      if (file) {
        external_firebase_default().storage().ref().child(`avatars/${_this.props.idUser}`).put(file).then(function (result) {
          _this.setState({
            errorText: ""
          });

          _this.props.history.go(0);
        });
      } else {
        this.setState({
          errorText: "You haven't selected a file"
        });
      }
    });

    FormChangeAvatar_defineProperty(this, "uploadFile", e => {
      if (e.target.value) {
        this.labelInputFile.current.classList.add("upload-file");
      }
    });

    this.state = {
      errorText: ""
    };
    this.labelInputFile = /*#__PURE__*/external_react_default().createRef();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "form form-change-avatar",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form__wrapper-file",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "money",
          className: "form__label",
          ref: this.labelInputFile,
          children: "Select a file"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "file",
          id: "file",
          name: "file",
          className: "form__input",
          onChange: this.uploadFile,
          ref: this.props.inputFile
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "form__submit",
        name: "submit",
        onClick: this.saveNewAvatar,
        children: "Save photo"
      }), this.state.errorText && /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "massage-error",
        children: this.state.errorText
      })]
    });
  }

}

/* harmony default export */ var blocks_FormChangeAvatar = (/*#__PURE__*/external_react_default().forwardRef((props, ref) => /*#__PURE__*/jsx_runtime_.jsx(FormChangeAvatar, _objectSpread({
  inputFile: ref
}, props))));
;// CONCATENATED MODULE: ./components/blocks/FormSetNewPassword.js



function FormSetNewPassword_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FormSetNewPassword extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    FormSetNewPassword_defineProperty(this, "sendEmail", e => {
      e.preventDefault();

      let _this = this;

      let email = this.email.current.value;
      external_firebase_default().auth().sendPasswordResetEmail(email).then(function () {
        _this.setState({
          flagSendEmail: !_this.state.flagSendEmail
        });
      }).catch(error => console.log(error));
    });

    this.state = {
      flagSendEmail: false
    };
    this.email = /*#__PURE__*/external_react_default().createRef();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "form form-set-password",
      children: [!this.state.flagSendEmail && /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        ref: this.email,
        label: "Your email",
        id: "email-for-password",
        type: "email",
        required: true
      }), !this.state.flagSendEmail && /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "form__submit",
        name: "submit",
        onClick: this.sendEmail,
        children: "Send email"
      }), this.state.flagSendEmail && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "success-result",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "success-result__text",
          children: "Check your email"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "form__submit",
          name: "submit",
          onClick: this.props.functionCloseWindow,
          children: "Close"
        })]
      })]
    });
  }

}

/* harmony default export */ var blocks_FormSetNewPassword = (FormSetNewPassword);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/blocks/ModalWindow.js



function ModalWindow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ModalWindow extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    ModalWindow_defineProperty(this, "closeModalWindow", e => {
      let modalWindow = this.modalWindow.current;

      if (e.target.classList.contains("modal-window") || e.target.classList.contains("close")) {
        if (modalWindow.classList.contains("modal-window__change-password")) {
          this.setState({
            flagChangePassword: false
          });
        }

        modalWindow.classList.remove("open");

        if (modalWindow.classList.contains("modal-window__success-check-in")) {
          this.props.history.push("/login");
          return;
        }

        if (modalWindow.classList.contains("modal-window__change-avatar")) {
          this.inputFile.current.classList.remove("upload-file");
        }

        modalWindow.querySelector(".form").reset();
      }
    });

    ModalWindow_defineProperty(this, "openSuccessResult", () => {
      this.setState({
        flagChangePassword: true
      });
    });

    ModalWindow_defineProperty(this, "closeModalWindowAfterChangePassword", () => {
      this.modalWindow.current.classList.remove("open");
      this.setState({
        flagChangePassword: false
      });
    });

    this.state = {
      flagChangePassword: false
    };
    this.modalWindow = /*#__PURE__*/external_react_default().createRef();
    this.inputFile = /*#__PURE__*/external_react_default().createRef();
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: this.props.nameClass,
      onClick: this.closeModalWindow,
      ref: this.modalWindow,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "modal-window__block",
        children: [this.props.page === "page-login" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-window__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "close",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "close",
              src: images_close/* default */.Z,
              alt: "icon close"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "modal-window__title",
            children: "Change password"
          }), /*#__PURE__*/jsx_runtime_.jsx(blocks_FormSetNewPassword, {
            functionCloseWindow: this.closeModalWindowAfterChangePassword
          })]
        }), this.props.page === "profile-password" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-window__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "close",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: images_close/* default */.Z,
              alt: "icon close"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "modal-window__title",
            children: "Change password"
          }), /*#__PURE__*/jsx_runtime_.jsx(blocks_FormChangePassword, {
            functionCloseWindow: this.closeModalWindowAfterChangePassword,
            openSuccessResult: this.openSuccessResult,
            flagChangePassword: this.state.flagChangePassword
          })]
        }), this.props.page === "profile-avatar" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-window__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "close",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: images_close/* default */.Z,
              alt: "icon close"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "modal-window__title",
            children: "Change avatar"
          }), /*#__PURE__*/jsx_runtime_.jsx(blocks_FormChangeAvatar, {
            history: this.props.history,
            ref: this.inputFile,
            idUser: this.props.idUser
          })]
        }), this.props.page === "check-in" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-window__content success-result",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "success-result__text",
            children: "You are registered"
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "form__submit",
            name: "submit",
            onClick: () => this.props.router.push('/'),
            children: "Login to your account"
          })]
        })]
      })
    });
  }

}

/* harmony default export */ var blocks_ModalWindow = ((0,router_.withRouter)(ModalWindow));

/***/ }),

/***/ 614:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class FieldFormWithValue extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "form__item",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: this.props.id,
        className: `form__label${this.props.required ? ' required' : ''}`,
        children: this.props.label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: this.props.type,
        id: this.props.id,
        value: this.props.value ? this.props.value : "",
        readOnly: this.props.readonly ? "readonly" : "",
        name: this.props.id,
        className: "form__input",
        "aria-required": this.props.required ? "required" : "",
        required: this.props.required ? "required" : "",
        ref: this.props.innerRef,
        onChange: this.props.functionOnChange,
        "aria-label": this.props.label
      }), this.props.flagPasswordField && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "button-visible-password",
        onClick: this.props.showHidePassword
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldFormWithValue, _objectSpread({
  innerRef: ref
}, props))));

/***/ }),

/***/ 6755:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": function() { return /* binding */ doVisibleOrHiddenPassword; }
/* harmony export */ });
function doVisibleOrHiddenPassword(element) {
  if (element.classList.contains("button-hidden-password")) {
    element.classList.remove("button-hidden-password");
    element.previousElementSibling.setAttribute("type", "password");
  } else {
    element.classList.add("button-hidden-password");
    element.previousElementSibling.setAttribute("type", "text");
  }
}

/***/ })

};
;