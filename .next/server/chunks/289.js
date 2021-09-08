exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 3289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ blocks_FormLoginAndCheckIn; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(7005);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
// EXTERNAL MODULE: ./functions/validateEmptyField.js
var validateEmptyField = __webpack_require__(1704);
;// CONCATENATED MODULE: ./functions/validateLengthField.js
function validateLengthField(typeField, valueField) {
  switch (typeField) {
    case "text":
      return flagLengthTextField(valueField);

    case "email":
      return flagLengthEmailField(valueField);

    default:
      break;
  }
}

function flagLengthTextField(value) {
  if (value.length < 3) {
    return false;
  }

  return true;
}

function flagLengthEmailField(email) {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}
// EXTERNAL MODULE: ./components/fields/FieldFormWithoutValue.js
var FieldFormWithoutValue = __webpack_require__(7449);
// EXTERNAL MODULE: ./components/fields/FieldFormWithValue.js
var FieldFormWithValue = __webpack_require__(614);
// EXTERNAL MODULE: ./functions/doVisibleOrHiddenPassword.js
var doVisibleOrHiddenPassword = __webpack_require__(6755);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./functions/validatePassword.js
function validatePassword(pass) {
  let regNumber = pass.match(/\d/g);

  if (pass.length < 6 || regNumber == null) {
    console.log("false"); // return false;
  } //
  // return true;

}
;// CONCATENATED MODULE: ./components/blocks/FormLoginAndCheckIn.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class FormLoginAndCheckIn extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      let id = e.target.getAttribute("id");
      let value = e.target.value;
      this.setState({
        [id]: value
      });
    });

    _defineProperty(this, "doVisibleOrHiddenPassword", e => {
      e.preventDefault();
      (0,doVisibleOrHiddenPassword/* doVisibleOrHiddenPassword */.o)(e.target);
    });

    _defineProperty(this, "logIntoAccount", () => {
      const {
        email,
        password,
        name,
        money
      } = this.state;

      let _this = this;

      let flag = (0,validateEmptyField/* validateEmptyField */.m)([email, password, name, money]);

      if (this.props.account) {
        external_firebase_default().auth().signInWithEmailAndPassword(email, password).then(() => this.props.router.push("/profile")).catch(error => _this.setState({
          errorText: error.message
        }));
      } else {
        if (!flag) {
          this.setState({
            errorText: "You have not completed the fields"
          });
          return;
        }

        if (!validateLengthField("text", name)) {
          this.setState({
            errorText: "Wrong entered Name (at least 3 characters)"
          });
          return;
        }

        if (!validateLengthField("email", email)) {
          this.setState({
            errorText: "Wrong email address"
          });
          return;
        }

        validatePassword(password); // if(!validatePassword) {
        // 	this.setState({errorText: "Wrong password. Password must contain at least 6 characters, numbers, uppercase and lowercase letters in English."})
        // }

        this.setState({
          errorText: ""
        }); // firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then(() => {
        // 	let id = uuidv4();
        // 	firebase.database().ref('/users/user' + id).set({
        // 		name: name, email: email, money: money, id: id
        // 	})
        // 	document.querySelector(".modal-window").classList.add("open")
        // }).catch(error => _this.setState({errorText: error.message}));
      }
    });

    _defineProperty(this, "setNewPassword", e => {
      e.preventDefault();
      document.querySelector(".modal-window__forgot-password").classList.add("open");
    });

    this.state = {
      email: '',
      password: '',
      name: '',
      money: 1,
      id: '',
      errorText: ''
    };
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "form form-login-checkin",
      children: [!this.props.account && /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        label: "Your name",
        id: "name",
        type: "text",
        required: true,
        functionOnChange: this.handleChange
      }), /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        label: "E-mail",
        id: "email",
        type: "email",
        required: true,
        functionOnChange: this.handleChange
      }), /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        label: "Password",
        id: "password",
        type: "password",
        required: true,
        functionOnChange: this.handleChange,
        flagPasswordField: true,
        showHidePassword: this.doVisibleOrHiddenPassword
      }), !this.props.account && /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithValue/* default */.Z, {
        type: "number",
        label: "Starting amount",
        id: "money",
        value: this.state.money,
        functionOnChange: this.handleChange
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form__wrapper-buttons",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "form__submit",
          type: "button",
          name: "submit",
          value: this.props.textButton,
          onClick: this.logIntoAccount
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form__wrapper-link",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: this.props.link,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "form__link",
              children: this.props.textLink
            })
          }), this.props.account && /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "form__link button",
            onClick: this.setNewPassword,
            children: "Forgot your password?"
          })]
        })]
      }), this.state.errorText && /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "massage-error",
        children: this.state.errorText
      })]
    });
  }

}

/* harmony default export */ var blocks_FormLoginAndCheckIn = ((0,router_.withRouter)(FormLoginAndCheckIn));

/***/ })

};
;