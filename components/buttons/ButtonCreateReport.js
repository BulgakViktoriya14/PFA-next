import React from 'react';

class ButtonCreateReport extends React.Component {
    render() {
        return (
            <button id={this.props.id} onClick={this.props.functionOnClick} type="button" className="button-create-report">{this.props.textButton}</button>
        )
    }
}

export default ButtonCreateReport;