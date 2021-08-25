import React from 'react';
import Wrapper from "../../components/common/Wrapper";
import ChartistGraph from "react-chartist";
import {connect} from "react-redux";
import FormCreateChart from "../../components/blocks/FormCreateChart";
import {validateEmptyField} from "../../functions/validateEmptyField";
import {createDailyReport} from "../../functions/createDailyReport";
import {createCategoryReport} from "../../functions/createCategoryReport";
import {createYearlyReport} from "../../functions/createYearlyReport";
import {validateDates} from "../../functions/validateDates";
import {createMonthlyReport} from "../../functions/createMonthlyReport";
import {createTable} from "../../functions/createTable";

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errorText: '',
            type: '',
            flag: false
        }

        this.startDate = React.createRef();
        this.endDate = React.createRef();
    }

    checkData = (array) => {
        if (array[0].length === 0) {
            this.setState({errorText: "You do not have data for this interval of time"});
            this.setState({type: ""});
            this.setState({flag: false});
        }
    }

    createReport = (e) => {
        let typeReport = document.querySelector("#type-report > div > div > div").innerText;
        let categoryReport = document.querySelector("#category-report > div > div > div").innerText;
        console.log(typeReport, categoryReport)
        let startDateItem = this.startDate.current.value;
        let endDateItem = this.endDate.current.value;
        let flagEmptyField = validateEmptyField([startDateItem, endDateItem, typeReport, categoryReport]);
        let flagDates = validateDates(startDateItem, endDateItem);
        let flagEndDate = validateDateEnd(endDateItem);

        if (!flagEmptyField) {
            this.setState({errorText: "You have not completed the fields"});
            this.setState({flag: false});
            return;
        }

        if (!flagDates) {
            this.setState({errorText: "The date interval is incorrect"});
            this.setState({flag: false});
            return;
        }

        if (!flagEndDate) {
            this.setState({errorText: "You cannot choose a day beyond the current one"});
            this.setState({flag: false});
            return;
        }

        this.setState({errorText: ""});
        this.setState({type: e.target.getAttribute("id")});

        let cards = typeReport === "Expenses" ? this.props.cardsExpenses : this.props.cardsIncome;

        switch (categoryReport) {
            case "Daily chart":
                let resultArrayDaily = createDailyReport(startDateItem, endDateItem, cards);
                this.checkData(resultArrayDaily);
                this.setState({flag: true});
                if (this.state.type === "graph") {
                    this.setState({data: {labels: resultArrayDaily[0], series: resultArrayDaily[1]}});
                } else if (this.state.type === "table") {
                    createTable(resultArrayDaily[0], resultArrayDaily[1]);
                }
                break;
            case "Category chart":
                let resultArrayCategory = createCategoryReport(startDateItem, endDateItem, cards);
                this.checkData(resultArrayCategory);
                this.setState({flag: true});
                if (this.state.type === "graph") {
                    this.setState({data: {labels: resultArrayCategory[0], series: resultArrayCategory[1]}});
                } else if (this.state.type === "table") {
                    createTable(resultArrayCategory[0], resultArrayCategory[1]);
                }
                break;
            case "Yearly chart":
                let resultArrayYearly = createYearlyReport(startDateItem, endDateItem, cards);
                this.checkData(resultArrayYearly);
                this.setState({flag: true});
                if (this.state.type === "graph") {
                    this.setState({data: {labels: resultArrayYearly[0], series: resultArrayYearly[1]}});
                } else if (this.state.type === "table") {
                    createTable(resultArrayYearly[0], resultArrayYearly[1]);
                }
                break;
            case "Monthly chart":
                let resultArrayMonthly = createMonthlyReport(startDateItem, endDateItem, cards);
                this.checkData(resultArrayMonthly);
                this.setState({flag: true});
                if (this.state.type === "graph") {
                    this.setState({data: {labels: resultArrayMonthly[0], series: resultArrayMonthly[1]}});
                } else if (this.state.type === "table") {
                    createTable(resultArrayMonthly[0], resultArrayMonthly[1]);
                }
                break;
        }
    }

    render() {
        let options = {
            width: "400px",
            height: "400px",
            donut: false,
            labelOffset: 50,
        }

        let type = "Pie";

        let responsiveOptions = [
            ['screen and (max-width: 500px)', {
                height: '300px',
                width: "300px",
                labelOffset: 20
            }]
        ]

        return (
            <Wrapper>
                <h1 className="title">Reports about your income and expenses</h1>
                <div className="report-container">
                    <FormCreateChart startDate={this.startDate} endDate={this.endDate} createReport={this.createReport}
                                     errorText={this.state.errorText} typeReport={this.typeReport}
                                     categoryReport={this.categoryReport} buttonCreateType={this.buttonCreateType}/>
                    <div className="report">
                        {this.state.type === "graph" &&
                        <ChartistGraph data={this.state.data} options={options} type={type}
                                       responsiveOptions={responsiveOptions}/>
                        }
                        {this.state.type === "table" && this.state.flag &&
                        <table className="table report__table">
                            <thead className="thead">
                            <tr className="tr">
                                <th className="th">Category</th>
                                <th className="th">Amount</th>
                            </tr>
                            </thead>
                            <tbody className="tbody">
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        cardsExpenses: state.userInfo.cardsExpenses,
        cardsIncome: state.userInfo.cardsIncome,
    }
}

export default connect(mapStateToProps, null)(Reports);