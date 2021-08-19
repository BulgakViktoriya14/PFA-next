exports.id = 447;
exports.ids = [447];
exports.modules = {

/***/ 7449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class FieldFormWithoutValue extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "form__item",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: this.props.id,
        className: `form__label${this.props.required ? ' required' : ''}`,
        children: this.props.label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: this.props.type,
        ref: this.props.innerRef,
        id: this.props.id,
        name: this.props.id,
        className: "form__input",
        required: this.props.required ? "required" : "",
        "aria-required": this.props.required ? "required" : "",
        onChange: this.props.functionOnChange,
        "aria-label": this.props.label
      }), this.props.flagPasswordField && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "button-visible-password",
        "aria-label": "Button visible password",
        onClick: this.props.showHidePassword
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldFormWithoutValue, _objectSpread({
  innerRef: ref
}, props))));

/***/ }),

/***/ 1704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ validateEmptyField; }
/* harmony export */ });
function validateEmptyField(fieldsArray) {
  let countFalse = 0;
  fieldsArray.forEach(function (item) {
    if (item === "") {
      countFalse++;
    }
  });

  if (countFalse > 0) {
    return false;
  } else {
    return true;
  }
}

/***/ })

};
;