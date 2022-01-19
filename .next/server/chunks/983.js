"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 7061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ fields_FieldSelect)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(724);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/select/SelectItem.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const customStyles = {
  control: styles => _objectSpread(_objectSpread({}, styles), {}, {
    backgroundColor: 'white'
  }),
  option: (styles, {
    data,
    isDisabled,
    isFocused,
    isSelected
  }) => {
    return {
      backgroundColor: isSelected ? '#ffb8b8' : '#fff',
      padding: 10,
      fontSize: '16px'
    };
  },
  menu: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
    padding: 0,
    cursor: 'pointer',
    border: '1px solid #000',
    borderRadius: 0
  })
};

class SelectItem extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    let array = [];
    this.props.optionsArray.forEach(function (item) {
      array.push({
        value: item,
        label: item
      });
    });
    this.setState({
      options: array
    });
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
      styles: customStyles,
      options: this.state.options,
      placeholder: "",
      className: this.props.className,
      id: this.props.id,
      required: this.props.required
    });
  }

}

/* harmony default export */ const select_SelectItem = (SelectItem);
;// CONCATENATED MODULE: ./components/fields/FieldSelect.js
function FieldSelect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function FieldSelect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FieldSelect_ownKeys(Object(source), true).forEach(function (key) { FieldSelect_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FieldSelect_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FieldSelect_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class FieldSelect extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form__item",
      children: [this.props.label && /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: this.props.id,
        className: `form__label${this.props.required ? ' required' : ''}`,
        children: this.props.label
      }), /*#__PURE__*/jsx_runtime_.jsx(select_SelectItem, {
        className: "form__select",
        optionsArray: this.props.optionsArray,
        required: this.props.required ? "required" : "",
        id: this.props.id
      })]
    });
  }

}

/* harmony default export */ const fields_FieldSelect = (/*#__PURE__*/external_react_default().forwardRef((props, ref) => /*#__PURE__*/jsx_runtime_.jsx(FieldSelect, FieldSelect_objectSpread({
  innerRef: ref
}, props))));

/***/ })

};
;