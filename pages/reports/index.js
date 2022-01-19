import React from 'react';
import Wrapper from "../../components/common/Wrapper";
import {connect} from "react-redux";
import FormCreateChart from "../../components/blocks/FormCreateChart";
import {validateEmptyField} from "../../functions/validateEmptyField";
import {createDailyReport} from "../../functions/createDailyReport";
import {createCategoryReport} from "../../functions/createCategoryReport";
import {createYearlyReport} from "../../functions/createYearlyReport";
import {validateDates} from "../../functions/validateDates";
import {createMonthlyReport} from "../../functions/createMonthlyReport";
import {createTable} from "../../functions/createTable";
import {validateDateEnd} from "../../functions/validateDateEnd";
import BlockReport from "../../components/blocks/BlockReport";
import ModalWindow from "../../components/blocks/ModalWindow";

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            errorText: '',
            type: '',
            flag: false,
            cardsReport: [],
            idButton: 0,
            flagCardReport: false
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

    showCards = (e) => {
        if(e.target.classList.contains("button-show-cards")) {
            document.querySelector(".modal-window__show-cards").classList.add("open");
            let idButton = Number(e.target.getAttribute("id"));
            this.setState({idButton: idButton, flagCardReport: true})
        }
    }

    clearReportCards = () => {
        this.setState({flagCardReport: false});
    }

    createReport = (e) => {
        let typeReport = document.querySelector("#type-report > div > div > div").innerText;
        let categoryReport = document.querySelector("#category-report > div > div > div").innerText;
        let startDateItem = this.startDate.current.value;
        let endDateItem = this.endDate.current.value;
        let flagEmptyField = validateEmptyField([startDateItem, endDateItem, typeReport, categoryReport]);
        let flagDates = validateDates(startDateItem, endDateItem);
        let flagEndDate = validateDateEnd(endDateItem);
        let type = e.target.getAttribute("id");
        this.setState({type: type});

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
        this.setState({flag: true});

        let cards = typeReport === "Expenses" ? this.props.cardsExpenses : this.props.cardsIncome;

        function setDataArrayGraph(resultArray) {
            let array = [];
            array.push(['Title', 'Sum'])
            resultArray[0].forEach(function (item, id) {
                array.push([item, Number(resultArray[1][id])])
            })
            return array;
        }

        switch (categoryReport) {
            case "Daily graph":
                let resultArrayDaily = createDailyReport(startDateItem, endDateItem, cards);
                this.checkData(resultArrayDaily);
                if (type === "graph") {
                    this.setState({data: setDataArrayGraph(resultArrayDaily)});
                } else if (type === "table") {
                    this.setState({data: []});
                    createTable(resultArrayDaily[0], resultArrayDaily[1]);
                    this.setState({cardsReport: resultArrayDaily[2]});
                }
                break;
            case "Category graph":
                let resultArrayCategory = createCategoryReport(startDateItem, endDateItem, cards);
                this.checkData(resultArrayCategory);
                if (type === "graph") {
                    this.setState({data: setDataArrayGraph(resultArrayCategory)});
                } else if (type === "table") {
                    this.setState({data: []});
                    createTable(resultArrayCategory[0], resultArrayCategory[1]);
                    this.setState({cardsReport: resultArrayCategory[2]});
                }
                break;
            case "Yearly graph":
                let resultArrayYearly = createYearlyReport(startDateItem, endDateItem, cards);
                this.checkData(resultArrayYearly);
                if (type === "graph") {
                    this.setState({data: setDataArrayGraph(resultArrayYearly)});
                } else if (type === "table") {
                    this.setState({data: []});
                    createTable(resultArrayYearly[0], resultArrayYearly[1]);
                    this.setState({cardsReport: resultArrayYearly[2]});
                }
                break;
            case "Monthly graph":
                let resultArrayMonthly = createMonthlyReport(startDateItem, endDateItem, cards);
                this.checkData(resultArrayMonthly);
                if (type === "graph") {
                    this.setState({data: setDataArrayGraph(resultArrayMonthly)});
                } else if (type === "table") {
                    this.setState({data: []});
                    createTable(resultArrayMonthly[0], resultArrayMonthly[1]);
                    this.setState({cardsReport: resultArrayMonthly[2]});
                }
                break;
        }
    }

    render() {
        return (
            <Wrapper>
                <ModalWindow modalTitle={"Cards"} page={"show-cards"} nameClass={"modal-window modal-window__show-cards"} flag={this.state.flagCardReport}
                             clearReportCards={this.clearReportCards} cardsReport={this.state.cardsReport} idButton={this.state.idButton}/>
                <h1 className="title">Reports about your income and expenses</h1>
                <div className="report-container">
                    <FormCreateChart startDate={this.startDate} endDate={this.endDate} createReport={this.createReport}
                                     errorText={this.state.errorText} typeReport={this.typeReport}
                                     categoryReport={this.categoryReport} buttonCreateType={this.buttonCreateType}/>
                    <BlockReport showCards={this.showCards} data={this.state.data} flag={this.state.flag} type={this.state.type}/>
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
