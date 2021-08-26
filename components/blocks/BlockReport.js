import React from 'react';
import ChartistGraph from "react-chartist";

class BlockReport extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="report">
                <ChartistGraph data={this.props.data} options={this.props.options} type={this.props.typeChart}
                               responsiveOptions={this.props.responsiveOptions}
                               className={`${this.props.flag && this.props.type === "graph" ? '' : 'disabled'}`}/>
                <table
                    className={`table report__table${this.props.flag && this.props.type === "table" ? '' : ' disabled'}`}>
                    <thead className="thead">
                        <tr className="tr">
                            <th className="th">Category</th>
                            <th className="th">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BlockReport;