exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 1887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ setUserSumAction; }
/* harmony export */ });
function setUserSumAction(sum) {
  return {
    type: "SET_USER_SUM",
    payload: sum
  };
}

/***/ }),

/***/ 7483:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



class ButtonDeleteCard extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      className: "button-delete-card",
      onClick: this.props.changeFlagDeleteCard
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (ButtonDeleteCard);

/***/ }),

/***/ 3923:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ButtonOpenPopupAddCard extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "openPopupAddCard", () => {
      document.querySelector(".creation-card").classList.add("creation-card_open");
    });
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      className: "button-open-popup-add-card",
      onClick: this.openPopupAddCard
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (ButtonOpenPopupAddCard);

/***/ }),

/***/ 4800:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7005);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actionSumUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1887);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Cards extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "createList", () => {
      let arrayCards = [];

      for (let card in this.props.cards) {
        arrayCards.push(this.props.cards[card]);
        this.sortCard(arrayCards);
      }

      arrayCards.reverse();
      this.setState({
        arrayCards: arrayCards
      });
    });

    _defineProperty(this, "openMoreDetails", e => {
      e.target.parentElement.classList.add("open");
    });

    _defineProperty(this, "closeMoreDetails", e => {
      e.target.parentElement.parentElement.classList.remove("open");
    });

    _defineProperty(this, "deleteCard", e => {
      let _this = this;

      let id = e.target.parentElement.getAttribute("id");
      let account = e.target.parentElement.querySelector(".card__sum").textContent;
      let sum = Number(this.props.userSum);
      firebase__WEBPACK_IMPORTED_MODULE_2___default().database().ref('users/user' + _this.props.userId + '/' + _this.props.type + '/card' + id).remove().then(function () {
        if (_this.props.type === "cardsIncome") {
          sum -= Number(account);
        }

        if (_this.props.type === "cardsExpenses") {
          sum += Number(account);
        }

        _this.props.setUserSumFunction(+sum.toFixed(2));
      }).then(function () {
        firebase__WEBPACK_IMPORTED_MODULE_2___default().database().ref('users/user' + _this.props.userId).update({
          money: +sum.toFixed(2)
        });
      }).catch(error => console.log(error.message));
    });

    this.state = {
      arrayCards: []
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

  sortCard(array) {
    array.sort((a, b) => a.startedAt > b.startedAt ? 1 : -1);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container cards",
      children: [!this.state.arrayCards.length && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "cards-container-empty",
        children: "You haven't created any cards yet."
      }), this.state.arrayCards.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "card",
        id: item.id,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: `card__button-delete${this.props.flagDeleteCard ? " visible" : ""}`,
          onClick: this.deleteCard
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
          className: "card__title",
          children: item.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
          className: "card__category",
          children: item.category
        }), item.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: "card__more-details",
          onClick: this.openMoreDetails,
          children: "More details"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          className: "card__bottom",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "card__sum",
            children: item.money
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "card__date",
            children: item.date
          })]
        }), item.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "card__description",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: item.description
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "card__more-details",
            onClick: this.closeMoreDetails,
            children: "Hide"
          })]
        })]
      }, item.id))]
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
      dispatch((0,_actions_actionSumUser__WEBPACK_IMPORTED_MODULE_4__/* .setUserSumAction */ .A)(sum));
    }
  };
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, matchDispatchToProps)(Cards));

/***/ }),

/***/ 5011:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ card_CreationCard; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./images/close.svg
var images_close = __webpack_require__(518);
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
      let category = this.category.current.value;
      let name = this.name.current.value;
      let description = this.description.current.value;
      let date = this.getDate();
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

    _defineProperty(this, "crateOneCard", (pathName, sum, card, _this) => {
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
        this.crateOneCard('cardsIncome', +newSum.toFixed(2), card, _this);
      } else {
        let newSum = Number(this.props.userSum) - Number(card.money);
        this.crateOneCard('cardsExpenses', +newSum.toFixed(2), card, _this);
      }

      if (document.querySelector(".creation-card.creation-card_open")) {
        document.querySelector(".creation-card.creation-card_open").classList.remove("creation-card_open");
      }
    });

    this.state = {
      errorText: ''
    };
    this.name = /*#__PURE__*/external_react_default().createRef();
    this.sum = /*#__PURE__*/external_react_default().createRef();
    this.category = /*#__PURE__*/external_react_default().createRef();
    this.description = /*#__PURE__*/external_react_default().createRef();
    this.form = /*#__PURE__*/external_react_default().createRef();
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "form form-add-card",
      ref: this.form,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        ref: this.name,
        required: true,
        label: "Title",
        type: "text",
        id: "name",
        flagPasswordField: false
      }), /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        ref: this.category,
        label: "Category",
        type: "text",
        id: "category",
        flagPasswordField: false
      }), /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        ref: this.sum,
        required: true,
        label: "Amount",
        type: "number",
        id: "sum",
        flagPasswordField: false
      }), /*#__PURE__*/jsx_runtime_.jsx(FieldFormWithoutValue/* default */.Z, {
        ref: this.description,
        label: "Description",
        type: "text",
        id: "description",
        flagPasswordField: false
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
    userSum: state.userInfo.userSum
  };
}

function matchDispatchToProps(dispatch) {
  return {
    setUserSumFunction: sum => {
      dispatch((0,actionSumUser/* setUserSumAction */.A)(sum));
    }
  };
}

/* harmony default export */ var blocks_FormCreateCard = ((0,external_react_redux_.connect)(mapStateToProps, matchDispatchToProps)(FormCreateCard));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/card/CreationCard.js



function CreationCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CreationCard extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    CreationCard_defineProperty(this, "closePopupCreationCard", () => {
      this.blockCreateCard.current.classList.remove("creation-card_open");
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

/* harmony default export */ var card_CreationCard = (CreationCard);

/***/ })

};
;