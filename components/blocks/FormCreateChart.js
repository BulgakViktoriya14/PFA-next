import React from 'react';
import FieldSelect from "../fields/FieldSelect";
import FieldFormWithoutValue from "../fields/FieldFormWithoutValue";
import ButtonCreateReport from "../buttons/ButtonCreateReport";

class FormCreateChart extends React.Component {
    render() {
        return (
            <form className="form form-chart">
                <FieldSelect label={"Select what to build the report for"} required={true}
                             optionsArray={["Expenses", "Income"]} id={"type-report"}/>
                <FieldSelect label={"Select the category for the report"} required={true} id={"category-report"}
                             optionsArray={["Daily graph", "Monthly graph", "Yearly graph", "Category graph"]}/>
                <FieldFormWithoutValue innerRef={this.props.startDate} required={true}
                                       label={"Select the start date of the interval"} type={"date"}
                                       id={"start-date-interval"} flagPasswordField={false}/>
                <FieldFormWithoutValue innerRef={this.props.endDate} required={true}
                                       label={"Select the end date of the interval"} type={"date"}
                                       id={"end-date-interval"} flagPasswordField={false}/>
                <div className="form__wrapper-buttons">
                    <ButtonCreateReport functionOnClick={this.props.createReport} textButton={"Create graph"} id={"graph"}/>
                    <ButtonCreateReport functionOnClick={this.props.createReport} textButton={"Create table"} id={"table"}/>
                </div>
                {this.props.errorText &&
                    <p className="massage-error">{this.props.errorText}</p>
                }
            </form>
        )
    }
}

export default FormCreateChart;
