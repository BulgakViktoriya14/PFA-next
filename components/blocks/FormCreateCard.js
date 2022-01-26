import React from 'react';
import {validateEmptyField} from "../../functions/validateEmptyField";
import {v4 as uuidv4} from "uuid";
import firebase from 'firebase';
import {setUserSumAction} from "../../actions/actionSumUser";
import {connect} from 'react-redux';
import FieldFormWithoutValue from "../fields/FieldFormWithoutValue";
import FieldSelect from "../fields/FieldSelect";

class FormCreateCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorText: '',
            categoryList: ['']
        }

        this.name = React.createRef();
        this.sum = React.createRef();
        this.category = React.createRef();
        this.description = React.createRef();
        this.form = React.createRef();
    }

    componentDidMount() {
        if(this.props.categoryList.length !== 0) {
            let array = [];
            this.props.categoryList.split('#').forEach(function (item) {
                if (item.length > 0) {
                    array.push(item)
                }
            })
            this.setState({categoryList: array})
        }
    }

    getDate = () => {
        let now = new Date();
        let dd = now.getDate();
        let mm = now.getMonth() + 1;
        let yy = now.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    createCard = () => {
        let sum =  this.sum.current.value;
        let name = this.name.current.value;
        let description = this.description.current.value;
        let date = this.getDate();
        let category = '';

        if(!this.props.enableCategoryFlag || this.state.categoryList[0].length === 0) {
            category = this.category.current.value;
        } else {
            category = document.querySelector("#select-categories > div > div > div").innerText;
        }

        return  {
            title: name,
            money: sum,
            category: category,
            date: date,
            description: description
        }
    }

    checkResultAccount = (value) => {
        if(this.props.type === "expenses" && Number(value) > Number(this.props.userSum)) {
            this.setState({errorText: "Your balance does not allow the operation"});
            return false;
        }
        return true;
    }

    createOneCard = (pathName, sum, card, _this) => {
        let id = uuidv4();
        let path = '/users/user' + _this.props.userId + '/' + pathName + '/card' + id;
        firebase.database().ref(path).set({
            startedAt: firebase.database.ServerValue.TIMESTAMP,
            id: id,
            category: card.category,
            date: card.date,
            money: card.money,
            title: card.title,
            description: card.description
        })
            .then(() => {
                _this.form.current.reset();
                document.querySelector("#select-categories > div > div > div").innerText = '';
            })
            .then(() => {_this.props.setUserSumFunction(sum)})
            .then(() => {
                firebase.database().ref('/users/user' + _this.props.userId).update({
                    money: sum
                })
            })
    }


    addCart = () => {
        let arrayRequiredFields = document.querySelectorAll('input[required]');
        let arrayRequiredFieldsValues = [];
        arrayRequiredFields.forEach(function (elem) {
            arrayRequiredFieldsValues.push(elem.value);
        })

        if(!validateEmptyField(arrayRequiredFieldsValues)) {
            this.setState({errorText: "You did not fill in the required fields"});
            return;
        } else {
            this.setState({errorText: ''});
        }
        if(!this.checkResultAccount(document.querySelector("#sum").value)) return;

        let _this = this;
        let card = this.createCard();

        if(this.props.type === "income") {
            let newSum = Number(this.props.userSum) + Number(card.money);
            this.createOneCard('cardsIncome', +newSum.toFixed(2), card, _this);
        } else {
            let newSum = Number(this.props.userSum) - Number(card.money);
            this.createOneCard('cardsExpenses', +newSum.toFixed(2), card, _this);
        }

        if(document.querySelector(".creation-card.creation-card_open")) {
            document.querySelector(".creation-card.creation-card_open").classList.remove("creation-card_open");
        }

        if(document.querySelector(".button-open-sidebar.hidden")) {
            document.querySelector(".button-open-sidebar").classList.remove("hidden");
        }
    }

    render() {
        return (
            <form className="form form-add-card" ref={this.form}>
                <FieldFormWithoutValue innerRef={this.name} required={true} label={"Title"} type={"text"} id={"name"} flagPasswordField={false} inputMode={"text"}/>
                {(!this.props.enableCategoryFlag || this.state.categoryList[0].length === 0) &&
                    <FieldFormWithoutValue innerRef={this.category} label={"Category"} type={"text"} id={"category"}
                                       flagPasswordField={false} inputMode={"text"}/>
                }
                {this.props.enableCategoryFlag && this.state.categoryList[0].length !== 0 &&
                    <FieldSelect label={"Category"} optionsArray={this.state.categoryList} id={"select-categories"}/>
                }
                <FieldFormWithoutValue innerRef={this.sum} required={true} label={"Amount"} type={"number"} id={"sum"} flagPasswordField={false} inputMode={"decimal"}/>
                <FieldFormWithoutValue innerRef={this.description} label={"Description"} type={"text"} id={"description"} flagPasswordField={false} inputMode={"text"}/>
                <input type="button" className="button-add-card" value="Add card" onClick={this.addCart}/>
                {this.state.errorText &&
                    <p className="massage-error">{this.state.errorText}</p>
                }
            </form>
        )
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
    }
}

function matchDispatchToProps(dispatch) {
    return {
        setUserSumFunction: (sum) => {
            dispatch(setUserSumAction(sum))
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(FormCreateCard);
