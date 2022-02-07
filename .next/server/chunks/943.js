"use strict";
exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 7238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ setUserCategoryListAction)
/* harmony export */ });
function setUserCategoryListAction(categoryList) {
  return {
    type: "SET_USER_CATEGORY_LIST",
    payload: categoryList
  };
}

/***/ }),

/***/ 4347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ setUserCategoryListFlagAction)
/* harmony export */ });
function setUserCategoryListFlagAction(categoryList) {
  return {
    type: "SET_CATEGORY_LIST_FLAG",
    payload: categoryList
  };
}

/***/ }),

/***/ 9943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blocks_ModalWindow)
});

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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
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
        showHidePassword: this.doVisibleOrHiddenPassword,
        inputMode: "text"
      }), !this.props.flagChangePassword && /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        ref: this.repeatPassword,
        required: true,
        label: "Re-enter the new password",
        type: "password",
        id: "repeat-password",
        flagPasswordField: true,
        showHidePassword: this.doVisibleOrHiddenPassword,
        inputMode: "text"
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

/* harmony default export */ const blocks_FormChangePassword = (FormChangePassword);
// EXTERNAL MODULE: ./images/close.svg
var images_close = __webpack_require__(3561);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/blocks/FormChangeAvatar.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { FormChangeAvatar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FormChangeAvatar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class FormChangeAvatar extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    FormChangeAvatar_defineProperty(this, "saveNewAvatar", e => {
      e.preventDefault();
      if (this.state.errorText !== "") return;
      let file = this.props.inputFile.current.files[0];

      let _this = this;

      if (file) {
        external_firebase_default().storage().ref().child(`avatars/${_this.props.idUser}`).put(file).then(function (result) {
          _this.setState({
            errorText: ""
          });

          router_default().reload(window.location.pathname);
        });
      } else {
        this.setState({
          errorText: "You haven't selected a file"
        });
      }
    });

    FormChangeAvatar_defineProperty(this, "uploadFile", () => {
      let file = this.props.inputFile.current.files[0];

      if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/HEIF') {
        this.labelInputFile.current.classList.add("upload-file");
        this.buttonSave.current.classList.remove("disabled");
        this.setState({
          errorText: ""
        });
      } else {
        this.labelInputFile.current.classList.remove("upload-file");
        this.buttonSave.current.classList.add("disabled");
        this.setState({
          errorText: "Wrong file type"
        });
      }
    });

    this.state = {
      errorText: ""
    };
    this.labelInputFile = /*#__PURE__*/external_react_default().createRef();
    this.buttonSave = /*#__PURE__*/external_react_default().createRef();
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
          "aria-label": "file for avatar",
          id: "file",
          name: "file",
          className: "form__input",
          onChange: this.uploadFile,
          ref: this.props.inputFile
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "form__notice",
          children: "Files allowed: jpg, png and heif"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        ref: this.buttonSave,
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

/* harmony default export */ const blocks_FormChangeAvatar = (/*#__PURE__*/external_react_default().forwardRef((props, ref) => /*#__PURE__*/jsx_runtime_.jsx(FormChangeAvatar, _objectSpread({
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
        required: true,
        inputMode: "email"
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

/* harmony default export */ const blocks_FormSetNewPassword = (FormSetNewPassword);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/buttons/ButtonEditCategory.js



class ButtonEditCategory extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "button-category button-category_edit",
      onClick: this.props.functionOnClick
    });
  }

}

/* harmony default export */ const buttons_ButtonEditCategory = (ButtonEditCategory);
;// CONCATENATED MODULE: ./components/buttons/ButtonDeleteCategory.js



class ButtonDeleteCategory extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "button-category button-category_delete",
      onClick: this.props.functionOnClick
    });
  }

}

/* harmony default export */ const buttons_ButtonDeleteCategory = (ButtonDeleteCategory);
// EXTERNAL MODULE: ./components/buttons/ButtonProfile.js
var ButtonProfile = __webpack_require__(3649);
;// CONCATENATED MODULE: ./components/fields/FieldFormCheckbox.js
function FieldFormCheckbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function FieldFormCheckbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FieldFormCheckbox_ownKeys(Object(source), true).forEach(function (key) { FieldFormCheckbox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FieldFormCheckbox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FieldFormCheckbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FieldFormCheckbox extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form__item form__item_checkbox",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "checkbox",
        name: "checkbox-category-list",
        className: "form__input_checkbox",
        ref: this.props.innerRef,
        "aria-label": this.props.label,
        onClick: this.props.functionOnCLick,
        checked: this.props.checked ? "checked" : ""
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        className: "form__label label-checkbox",
        htmlFor: "checkbox-category-list",
        children: this.props.label
      })]
    });
  }

}

/* harmony default export */ const fields_FieldFormCheckbox = (/*#__PURE__*/external_react_default().forwardRef((props, ref) => /*#__PURE__*/jsx_runtime_.jsx(FieldFormCheckbox, FieldFormCheckbox_objectSpread({
  innerRef: ref
}, props))));
// EXTERNAL MODULE: ./actions/actionCategoryList.js
var actionCategoryList = __webpack_require__(7238);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./components/blocks/FormAddCategory.js
function FormAddCategory_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function FormAddCategory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FormAddCategory_ownKeys(Object(source), true).forEach(function (key) { FormAddCategory_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FormAddCategory_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FormAddCategory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class FormAddCategory extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    FormAddCategory_defineProperty(this, "addCategory", () => {
      let _this = this;

      let value = _this.inputValue.current.value;

      if (!(0,validateEmptyField/* validateEmptyField */.m)([value])) {
        _this.setState({
          message: "You did not fill in the required field"
        });

        return;
      }

      _this.setState({
        message: ""
      });

      let array = _this.props.arrayCategory;
      array.unshift(value);
      let string = array.join('#');
      external_firebase_default().database().ref('/users/user' + _this.props.userId).update({
        category: string
      }).then(() => {
        _this.props.setUserCategoryList(string);

        _this.inputValue.current.value = '';
      });
    });

    this.state = {
      message: ''
    };
    this.inputValue = /*#__PURE__*/(0,external_react_.createRef)();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "form form-add-category",
      ref: this.props.innerRef,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        required: "required",
        innerRef: this.inputValue,
        label: "Name category",
        type: "text",
        flagPasswordField: false,
        inputMode: "text"
      }), /*#__PURE__*/jsx_runtime_.jsx(ButtonProfile/* default */.Z, {
        nameButton: "+",
        functionOnCLick: this.addCategory
      }), this.state.message && /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "massage-error",
        children: this.state.message
      })]
    });
  }

}

function mapStateToProps(state) {
  return {
    userId: state.userInfo.idUser
  };
}

function matchDispatchToProps(dispatch) {
  return {
    setUserCategoryList: category => {
      dispatch((0,actionCategoryList/* setUserCategoryListAction */.F)(category));
    }
  };
}

/* harmony default export */ const blocks_FormAddCategory = ((0,external_react_redux_.connect)(mapStateToProps, matchDispatchToProps)( /*#__PURE__*/external_react_default().forwardRef((props, ref) => /*#__PURE__*/jsx_runtime_.jsx(FormAddCategory, FormAddCategory_objectSpread({
  innerRef: ref
}, props)))));
// EXTERNAL MODULE: ./actions/actionEnableCategoryFlag.js
var actionEnableCategoryFlag = __webpack_require__(4347);
// EXTERNAL MODULE: ./components/fields/FieldFormWithValue.js
var FieldFormWithValue = __webpack_require__(614);
;// CONCATENATED MODULE: ./components/blocks/BlockCategories.js
function BlockCategories_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















class BlockCategories extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    BlockCategories_defineProperty(this, "checkArrayCategory", () => {
      if (this.props.arrayCategory.length === 1 && this.props.arrayCategory[0].length === 0) {
        return false;
      }

      return true;
    });

    BlockCategories_defineProperty(this, "openFormAddCategory", e => {
      if (this.formAdd.current.classList.contains("open")) {
        this.formAdd.current.classList.remove("open");
        e.target.innerText = "add";
      } else {
        this.formAdd.current.classList.add("open");
        e.target.innerText = "×";
      }
    });

    BlockCategories_defineProperty(this, "editCategory", e => {
      let row = e.target.parentElement.parentElement;

      if (e.target.classList.contains("save")) {
        e.target.classList.remove("save");
        row.querySelector(".form__input").classList.add("hidden");
        row.querySelector(".static-name").classList.remove("hidden");
      } else {
        e.target.classList.add("save");
        row.querySelector(".form__input").classList.remove("hidden");
        row.querySelector(".static-name").classList.add("hidden");
      }
    });

    BlockCategories_defineProperty(this, "enableCategory", () => {
      let _this = this;

      if (_this.checkboxValue.current.checked) {
        external_firebase_default().database().ref('/users/user' + _this.props.userId).update({
          enableCategoryFlag: true
        }).then(() => {
          _this.props.setUserCategoryListFlagFunction(true);
        });
      } else {
        external_firebase_default().database().ref('/users/user' + _this.props.userId).update({
          enableCategoryFlag: false
        }).then(() => {
          _this.props.setUserCategoryListFlagFunction(false);
        });
      }
    });

    BlockCategories_defineProperty(this, "deleteCategory", e => {
      let _this = this;

      let id = e.target.parentElement.parentElement.querySelector(".form__input").getAttribute("id");
      let array = _this.props.arrayCategory;
      array.splice(Number(id), 1);
      let string = array.join('#');
      external_firebase_default().database().ref('/users/user' + _this.props.userId).update({
        category: string
      }).then(() => {
        _this.props.setUserCategoryListFunction(string);
      });
    });

    BlockCategories_defineProperty(this, "handleChange", e => {
      let categoryList = this.props.arrayCategory;

      let _this = this;

      if (e.target.value.length > 0) {
        categoryList[e.target.name] = e.target.value;
      } else {
        categoryList.splice([e.target.name], 1);
      }

      let string = categoryList.join('#');
      external_firebase_default().database().ref('/users/user' + _this.props.userId).update({
        category: string
      }).then(() => {
        this.props.setUserCategoryListFunction(string);
      });
    });

    this.state = {
      message: 'The list of categories is empty. To create a category, click the button "add".'
    };
    this.formAdd = /*#__PURE__*/(0,external_react_.createRef)();
    this.checkboxValue = /*#__PURE__*/(0,external_react_.createRef)();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "block-categories",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(fields_FieldFormCheckbox, {
          checked: this.props.enableCategoryFlag,
          innerRef: this.checkboxValue,
          label: "Enabling the category list function",
          functionOnCLick: this.enableCategory
        }), /*#__PURE__*/jsx_runtime_.jsx(ButtonProfile/* default */.Z, {
          functionOnCLick: this.openFormAddCategory,
          nameButton: "add"
        }), /*#__PURE__*/jsx_runtime_.jsx(blocks_FormAddCategory, {
          innerRef: this.formAdd,
          arrayCategory: this.props.arrayCategory
        })]
      }), this.checkArrayCategory() && /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
          className: "thead",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            className: "tr",
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              className: "th",
              children: "Name category"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              className: "th",
              children: "Actions"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
          children: this.props.arrayCategory.map((item, index) => {
            if (item.length > 0) return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              className: "tr",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                className: "td",
                children: [/*#__PURE__*/jsx_runtime_.jsx(FieldFormWithValue/* default */.Z, {
                  id: index,
                  functionOnChange: this.handleChange,
                  inputMode: item,
                  classInput: "hidden",
                  value: item,
                  readonly: false
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "static-name",
                  children: item
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                className: "td",
                children: [/*#__PURE__*/jsx_runtime_.jsx(buttons_ButtonEditCategory, {
                  functionOnClick: this.editCategory
                }), /*#__PURE__*/jsx_runtime_.jsx(buttons_ButtonDeleteCategory, {
                  functionOnClick: this.deleteCategory
                })]
              })]
            }, index);
          })
        })]
      }), !this.checkArrayCategory() && /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "success-result__text",
        children: this.state.message
      })]
    });
  }

}

function BlockCategories_mapStateToProps(state) {
  return {
    userId: state.userInfo.idUser,
    enableCategoryFlag: state.userInfo.enableCategoryFlag
  };
}

function BlockCategories_matchDispatchToProps(dispatch) {
  return {
    setUserCategoryListFunction: category => {
      dispatch((0,actionCategoryList/* setUserCategoryListAction */.F)(category));
    },
    setUserCategoryListFlagFunction: flag => {
      dispatch((0,actionEnableCategoryFlag/* setUserCategoryListFlagAction */.y)(flag));
    }
  };
}

/* harmony default export */ const blocks_BlockCategories = ((0,external_react_redux_.connect)(BlockCategories_mapStateToProps, BlockCategories_matchDispatchToProps)(BlockCategories));
// EXTERNAL MODULE: ./components/card/Card.js
var Card = __webpack_require__(7918);
;// CONCATENATED MODULE: ./components/blocks/BlockReportCards.js
function BlockReportCards_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class BlockReportCards extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    BlockReportCards_defineProperty(this, "loadMore", () => {
      this.setState(prev => {
        return {
          visible: prev.visible + 4
        };
      });
    });

    this.state = {
      visible: 6
    };
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [this.props.flag && this.props.cardsReport[this.props.idButton].slice(0, this.state.visible).map(item => /*#__PURE__*/jsx_runtime_.jsx(Card/* default */.Z, {
        cardItem: item,
        flagDeleteCard: false
      }, item.id)), this.props.flag && this.state.visible < this.props.cardsReport[this.props.idButton].length && /*#__PURE__*/jsx_runtime_.jsx(ButtonProfile/* default */.Z, {
        functionOnCLick: this.loadMore,
        nameButton: "Load more"
      })]
    });
  }

}

/* harmony default export */ const blocks_BlockReportCards = (BlockReportCards);
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

        if (modalWindow.classList.contains("modal-window__show-cards")) {
          this.props.clearReportCards();
        }

        if (modalWindow.classList.contains("modal-window__success-check-in")) {
          this.props.history.push("/login");
          return;
        }

        if (modalWindow.classList.contains("modal-window__change-avatar")) {
          this.inputFile.current.classList.remove("upload-file");
        }

        modalWindow.classList.remove("open");
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
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-window__block",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-window__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "close",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "close",
              src: images_close/* default */.Z,
              alt: "icon",
              width: 30,
              height: 30,
              loading: 'lazy'
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "modal-window__title",
            children: this.props.modalTitle
          }), this.props.page === "show-cards" && /*#__PURE__*/jsx_runtime_.jsx(blocks_BlockReportCards, {
            cardsReport: this.props.cardsReport,
            idButton: this.props.idButton,
            flag: this.props.flag
          }), this.props.page === "page-login" && /*#__PURE__*/jsx_runtime_.jsx(blocks_FormSetNewPassword, {
            functionCloseWindow: this.closeModalWindowAfterChangePassword
          }), this.props.page === "profile-password" && /*#__PURE__*/jsx_runtime_.jsx(blocks_FormChangePassword, {
            functionCloseWindow: this.closeModalWindowAfterChangePassword,
            openSuccessResult: this.openSuccessResult,
            flagChangePassword: this.state.flagChangePassword
          }), this.props.page === "profile-avatar" && /*#__PURE__*/jsx_runtime_.jsx(blocks_FormChangeAvatar, {
            history: this.props.history,
            ref: this.inputFile,
            idUser: this.props.idUser
          }), this.props.page === "check-in" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "success-result",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "success-result__text",
              children: "You are registered"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "form__submit",
              name: "submit",
              onClick: () => this.props.router.push('/'),
              children: "Login to your account"
            })]
          }), this.props.page === "profile-category" && /*#__PURE__*/jsx_runtime_.jsx(blocks_BlockCategories, {
            arrayCategory: this.props.arrayCategory
          })]
        })
      })
    });
  }

}

/* harmony default export */ const blocks_ModalWindow = ((0,router_.withRouter)(ModalWindow));

/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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





class FieldFormWithValue extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "form__item",
      children: [this.props.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
        htmlFor: this.props.id,
        className: `form__label${this.props.required ? ' required' : ''}`,
        children: this.props.label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
        type: this.props.type,
        id: this.props.id,
        value: this.props.value ? this.props.value : "",
        readOnly: this.props.readonly ? "readonly" : "",
        name: this.props.id,
        className: this.props.classInput !== undefined ? `form__input ${this.props.classInput}` : 'form__input',
        "aria-required": this.props.required ? "required" : "",
        required: this.props.required ? "required" : "",
        ref: this.props.innerRef,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, ref) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FieldFormWithValue, _objectSpread({
  innerRef: ref
}, props))));

/***/ }),

/***/ 6755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ doVisibleOrHiddenPassword)
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