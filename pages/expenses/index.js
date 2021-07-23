import React from 'react';
import CreationCard from "../../components/card/CreationCard";
import {connect} from 'react-redux';
import Cards from "../../components/card/Cards";
import ButtonOpenPopupAddCard from "../../components/buttons/ButtonOpenPopupAddCard";
import ButtonDeleteCard from "../../components/buttons/ButtonDeleteCards";
import Wrapper from "../../components/common/Wrapper";

class Expenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flagDeleteCard: false
        }
    }

    changeFlagDeleteCard = () => {
        this.setState({flagDeleteCard: !this.state.flagDeleteCard});
    }

    render() {
        return (
            <Wrapper>
                <div className="wrapper">
                    <ButtonOpenPopupAddCard/>
                    <h1 className="title">Expenses</h1>
                    <CreationCard type="expenses"/>
                    <h2 className="subtitle">Your expenses cards:</h2>
                    <Cards flagDeleteCard={this.state.flagDeleteCard} cards={this.props.cardsExpenses} type={"cardsExpenses"}/>
                    <ButtonDeleteCard changeFlagDeleteCard={this.changeFlagDeleteCard}/>
                </div>
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        cardsExpenses: state.userInfo.cardsExpenses,
    }
}

export default connect(mapStateToProps, null)(Expenses);