import React from 'react';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {setUserSumAction} from "../../actions/actionSumUser";
import Card from "./Card";
import ButtonProfile from "../buttons/ButtonProfile";
import {sortCard} from "../../functions/sortCard";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCards: [],
            visible: 20,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.cards !== prevProps.cards) {
            this.createList();
        }
    }

    componentDidMount() {
        this.createList();
    }

    loadMore = () => {
        this.setState((prev) => {
            return {visible: prev.visible + 8};
        });
    }

    createList = () => {
        let arrayCards = [];
        for(let card in this.props.cards) {
            arrayCards.push(this.props.cards[card]);
            sortCard(arrayCards);
        }
        arrayCards.reverse();
        this.setState({arrayCards: arrayCards});
    }

    deleteCard = (e) => {
        let _this = this;
        let id = e.target.parentElement.getAttribute("id");
        let account = e.target.parentElement.querySelector(".card__sum").textContent;
        let sum = Number(this.props.userSum);
        firebase.database().ref('users/user' + _this.props.userId + '/' + _this.props.type + '/card' + id).remove()
            .then(function () {
                if(_this.props.type === "cardsIncome") {
                    sum -= Number(account);
                }
                if(_this.props.type === "cardsExpenses") {
                    sum += Number(account);
                }
                _this.props.setUserSumFunction(+sum.toFixed(2));
            }).then(function () {
                firebase.database().ref('users/user' + _this.props.userId).update({
                    money: +sum.toFixed(2)
                })
            })
            .catch(error => console.log(error.message));
    }

    render() {
		return (
            <div className="container cards">
                {!this.state.arrayCards.length &&
                    <p className="cards-container-empty">{"You haven't created any cards yet."}</p>
                }
                {this.state.arrayCards.slice(0, this.state.visible).map((item) =>
                    <Card key={item.id} cardItem={item} flagDeleteCard={this.props.flagDeleteCard} functionOnCLick={this.deleteCard}/>
                )}

                {this.state.visible < this.state.arrayCards.length &&
                    <ButtonProfile functionOnCLick={this.loadMore} nameButton={"Load more"}/>
                }
            </div>
        )
	}
}

function mapStateToProps(state) {
    return {
        userId: state.userInfo.idUser,
        cardsIncome: state.userInfo.cardsIncome,
        cardsExpenses: state.userInfo.cardsExpenses,
        userSum: state.userInfo.userSum
    }
}

function matchDispatchToProps(dispatch) {
    return {
        setUserSumFunction: (sum) => {
            dispatch(setUserSumAction(sum))
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Cards);
