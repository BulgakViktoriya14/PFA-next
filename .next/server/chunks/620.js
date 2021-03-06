"use strict";
exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 1887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ setUserSumAction)
/* harmony export */ });
function setUserSumAction(sum) {
  return {
    type: "SET_USER_SUM",
    payload: sum
  };
}

/***/ }),

/***/ 7483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



class ButtonDeleteCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
      className: "button-delete-card",
      onClick: this.props.changeFlagDeleteCard
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonDeleteCard);

/***/ }),

/***/ 3923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ButtonOpenPopupAddCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "openPopupAddCard", () => {
      document.querySelector(".creation-card").classList.add("creation-card_open");
      document.querySelector(".button-open-sidebar").classList.add("hidden");
    });
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
      className: "button-open-popup-add-card",
      onClick: this.openPopupAddCard
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonOpenPopupAddCard);

/***/ }),

/***/ 4800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7005);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actionSumUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1887);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7918);
/* harmony import */ var _buttons_ButtonProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3649);
/* harmony import */ var _functions_sortCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7249);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Cards extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "loadMore", () => {
      this.setState(prev => {
        return {
          visible: prev.visible + 8
        };
      });
    });

    _defineProperty(this, "createList", () => {
      let arrayCards = [];

      for (let card in this.props.cards) {
        arrayCards.push(this.props.cards[card]);
        (0,_functions_sortCard__WEBPACK_IMPORTED_MODULE_6__/* .sortCard */ .v)(arrayCards);
      }

      arrayCards.reverse();
      this.setState({
        arrayCards: arrayCards
      });
    });

    _defineProperty(this, "deleteCard", e => {
      let _this = this;

      let id = e.target.parentElement.getAttribute("id");
      let account = e.target.parentElement.querySelector(".card__sum").textContent;
      let sum = Number(this.props.userSum);
      firebase__WEBPACK_IMPORTED_MODULE_1___default().database().ref('users/user' + _this.props.userId + '/' + _this.props.type + '/card' + id).remove().then(function () {
        if (_this.props.type === "cardsIncome") {
          sum -= Number(account);
        }

        if (_this.props.type === "cardsExpenses") {
          sum += Number(account);
        }

        _this.props.setUserSumFunction(+sum.toFixed(2));
      }).then(function () {
        firebase__WEBPACK_IMPORTED_MODULE_1___default().database().ref('users/user' + _this.props.userId).update({
          money: +sum.toFixed(2)
        });
      }).catch(error => console.log(error.message));
    });

    this.state = {
      arrayCards: [],
      visible: 20
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.cards !== prevProps.cards) {
      this.createList();
    }
  }

  componentDidMount() {
    this.createList();
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container cards",
      children: [!this.state.arrayCards.length && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
        className: "cards-container-empty",
        children: "You haven't created any cards yet."
      }), this.state.arrayCards.slice(0, this.state.visible).map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        cardItem: item,
        flagDeleteCard: this.props.flagDeleteCard,
        functionOnCLick: this.deleteCard
      }, item.id)), this.state.visible < this.state.arrayCards.length && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_buttons_ButtonProfile__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        functionOnCLick: this.loadMore,
        nameButton: "Load more"
      })]
    });
  }

}

function mapStateToProps(state) {
  return {
    userId: state.userInfo.idUser,
    cardsIncome: state.userInfo.cardsIncome,
    cardsExpenses: state.userInfo.cardsExpenses,
    userSum: state.userInfo.userSum
  };
}

function matchDispatchToProps(dispatch) {
  return {
    setUserSumFunction: sum => {
      dispatch((0,_actions_actionSumUser__WEBPACK_IMPORTED_MODULE_7__/* .setUserSumAction */ .A)(sum));
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, matchDispatchToProps)(Cards));

/***/ }),

/***/ 5011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ card_CreationCard)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./images/close.svg
var images_close = __webpack_require__(3561);
// EXTERNAL MODULE: ./functions/validateEmptyField.js
var validateEmptyField = __webpack_require__(1704);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(7005);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);
// EXTERNAL MODULE: ./actions/actionSumUser.js
var actionSumUser = __webpack_require__(1887);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/fields/FieldFormWithoutValue.js
var FieldFormWithoutValue = __webpack_require__(7449);
// EXTERNAL MODULE: ./components/fields/FieldSelect.js + 1 modules
var FieldSelect = __webpack_require__(7061);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/blocks/FormCreateCard.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class FormCreateCard extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getDate", () => {
      let now = new Date();
      let dd = now.getDate();
      let mm = now.getMonth() + 1;
      let yy = now.getFullYear();
      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      if (yy < 10) yy = '0' + yy;
      return dd + '.' + mm + '.' + yy;
    });

    _defineProperty(this, "createCard", () => {
      let sum = this.sum.current.value;
      let name = this.name.current.value;
      let description = this.description.current.value;
      let date = this.getDate();
      let category = '';

      if (!this.props.enableCategoryFlag || this.state.categoryList[0].length === 0) {
        category = this.category.current.value;
      } else {
        category = document.querySelector("#select-categories > div > div > div").innerText;
      }

      return {
        title: name,
        money: sum,
        category: category,
        date: date,
        description: description
      };
    });

    _defineProperty(this, "checkResultAccount", value => {
      if (this.props.type === "expenses" && Number(value) > Number(this.props.userSum)) {
        this.setState({
          errorText: "Your balance does not allow the operation"
        });
        return false;
      }

      return true;
    });

    _defineProperty(this, "createOneCard", (pathName, sum, card, _this) => {
      let id = (0,external_uuid_.v4)();
      let path = '/users/user' + _this.props.userId + '/' + pathName + '/card' + id;
      external_firebase_default().database().ref(path).set({
        startedAt: (external_firebase_default()).database.ServerValue.TIMESTAMP,
        id: id,
        category: card.category,
        date: card.date,
        money: card.money,
        title: card.title,
        description: card.description
      }).then(() => {
        _this.form.current.reset();

        this.select.current.select.clearValue();
      }).then(() => {
        _this.props.setUserSumFunction(sum);
      }).then(() => {
        external_firebase_default().database().ref('/users/user' + _this.props.userId).update({
          money: sum
        });
      });
    });

    _defineProperty(this, "addCart", () => {
      let arrayRequiredFields = document.querySelectorAll('input[required]');
      let arrayRequiredFieldsValues = [];
      arrayRequiredFields.forEach(function (elem) {
        arrayRequiredFieldsValues.push(elem.value);
      });

      if (!(0,validateEmptyField/* validateEmptyField */.m)(arrayRequiredFieldsValues)) {
        this.setState({
          errorText: "You did not fill in the required fields"
        });
        return;
      } else {
        this.setState({
          errorText: ''
        });
      }

      if (!this.checkResultAccount(document.querySelector("#sum").value)) return;

      let _this = this;

      let card = this.createCard();

      if (this.props.type === "income") {
        let newSum = Number(this.props.userSum) + Number(card.money);
        this.createOneCard('cardsIncome', +newSum.toFixed(2), card, _this);
      } else {
        let newSum = Number(this.props.userSum) - Number(card.money);
        this.createOneCard('cardsExpenses', +newSum.toFixed(2), card, _this);
      }

      if (document.querySelector(".creation-card.creation-card_open")) {
        document.querySelector(".creation-card.creation-card_open").classList.remove("creation-card_open");
      }

      if (document.querySelector(".button-open-sidebar.hidden")) {
        document.querySelector(".button-open-sidebar").classList.remove("hidden");
      }
    });

    this.state = {
      errorText: '',
      categoryList: ['']
    };
    this.name = /*#__PURE__*/external_react_default().createRef();
    this.sum = /*#__PURE__*/external_react_default().createRef();
    this.category = /*#__PURE__*/external_react_default().createRef();
    this.description = /*#__PURE__*/external_react_default().createRef();
    this.form = /*#__PURE__*/external_react_default().createRef();
    this.select = /*#__PURE__*/external_react_default().createRef();
  }

  componentDidMount() {
    if (this.props.categoryList.length !== 0) {
      let array = [];
      this.props.categoryList.split('#').forEach(function (item) {
        if (item.length > 0) {
          array.push(item);
        }
      });
      this.setState({
        categoryList: array
      });
    }
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "form form-add-card",
      ref: this.form,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        innerRef: this.name,
        required: true,
        label: "Title",
        type: "text",
        id: "name",
        flagPasswordField: false,
        inputMode: "text"
      }), (!this.props.enableCategoryFlag || this.state.categoryList[0].length === 0) && /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        innerRef: this.category,
        label: "Category",
        type: "text",
        id: "category",
        flagPasswordField: false,
        inputMode: "text"
      }), this.props.enableCategoryFlag && this.state.categoryList[0].length !== 0 && /*#__PURE__*/jsx_runtime_.jsx(FieldSelect/* default */.Z, {
        selectRef: this.select,
        label: "Category",
        optionsArray: this.state.categoryList,
        id: "select-categories"
      }), /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        innerRef: this.sum,
        required: true,
        label: "Amount",
        type: "number",
        id: "sum",
        flagPasswordField: false,
        inputMode: "decimal"
      }), /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        innerRef: this.description,
        label: "Description",
        type: "text",
        id: "description",
        flagPasswordField: false,
        inputMode: "text"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "button",
        className: "button-add-card",
        value: "Add card",
        onClick: this.addCart
      }), this.state.errorText && /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "massage-error",
        children: this.state.errorText
      })]
    });
  }

}

function mapStateToProps(state) {
  return {
    cardsIncome: state.userInfo.cardsIncome,
    cardsExpenses: state.userInfo.cardsExpenses,
    userId: state.userInfo.idUser,
    userSum: state.userInfo.userSum,
    enableCategoryFlag: state.userInfo.enableCategoryFlag,
    categoryList: state.userInfo.categoryList
  };
}

function matchDispatchToProps(dispatch) {
  return {
    setUserSumFunction: sum => {
      dispatch((0,actionSumUser/* setUserSumAction */.A)(sum));
    }
  };
}

/* harmony default export */ const blocks_FormCreateCard = ((0,external_react_redux_.connect)(mapStateToProps, matchDispatchToProps)(FormCreateCard));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/card/CreationCard.js
function CreationCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CreationCard extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    CreationCard_defineProperty(this, "closePopupCreationCard", () => {
      this.blockCreateCard.current.classList.remove("creation-card_open");
      document.querySelector(".button-open-sidebar").classList.remove("hidden");
    });

    this.state = {
      errorText: ''
    };
    this.blockCreateCard = /*#__PURE__*/external_react_default().createRef();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "creation-card",
      ref: this.blockCreateCard,
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "close",
        onClick: this.closePopupCreationCard,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: images_close/* default */.Z,
          alt: "close",
          width: 30,
          height: 30,
          loading: 'lazy'
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "subtitle",
        children: "Create card"
      }), /*#__PURE__*/jsx_runtime_.jsx(blocks_FormCreateCard, {
        type: this.props.type
      })]
    });
  }

}

/* harmony default export */ const card_CreationCard = (CreationCard);

/***/ })

};
;