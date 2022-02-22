import React from 'react';
import Chart from "react-google-charts";

class BlockReport extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="report">
                {this.props.data.length > 0 &&
                    <Chart width={window.innerWidth < 550 ? '100%' : '500px'}
                           height={window.innerWidth < 550 ? '100%' : '400px'}
                           chartType="PieChart"
                           loader={<div>Loading Chart</div>}
                           data={this.props.data}
                           options={{
                               is3D: true,
                           }}
                           rootProps={{'data-testid': 'chart'}}/>
                }
                <table
                    className={`table report__table${this.props.flag && this.props.type === "table" ? '' : ' disabled'}`}>
                    <thead className="thead">
                        <tr className="tr">
                            <th className="th">Category</th>
                            <th className="th">Amount</th>
                            <th className="th">Show cards</th>
                        </tr>
                    </thead>
                    <tbody className="tbody" onClick={this.props.showCards}>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BlockReport;
