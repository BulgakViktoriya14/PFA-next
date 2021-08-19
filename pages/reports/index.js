import React from 'react';
import Wrapper from "../../components/common/Wrapper";
import ChartistGraph from "react-chartist";
import {connect} from "react-redux";

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        let arrayDataValues = [];
        let arrayDataLabels = [];
        let cardsExpenses = this.props.cardsExpenses;
        for (let key in cardsExpenses) {
            arrayDataValues.push(cardsExpenses[key].money);
            arrayDataLabels.push(cardsExpenses[key].date)
        }
        this.setState({data: {labels: arrayDataLabels, series: arrayDataValues}});
    }

    render() {
        let options = {
            width: "400px",
            height: "400px",
            donut: false,
        }

        let type = "Pie";

        let responsiveOptions = [
            [ 'screen and (min-width: 500px)', {
                height: '300px',
                width: "300px",
            } ]
        ]

        return (
            <Wrapper>
                <h1 className="title">Reports about your income and expenses</h1>
                <ChartistGraph data={this.state.data} options={options} type={type} responsiveOptions={responsiveOptions}/>
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        cardsExpenses: state.userInfo.cardsExpenses,
    }
}

export default connect(mapStateToProps, null)(Reports);