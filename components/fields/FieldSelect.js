import React from 'react';
import SelectItem from "../select/SelectItem";

class FieldSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form__item">
                {this.props.label &&
                    <label htmlFor={this.props.id}
                       className={`form__label${this.props.required ? ' required' : ''}`}>{this.props.label}</label>
                }
                <SelectItem className="form__select" optionsArray={this.props.optionsArray}
                            required={this.props.required ? "required" : ""} id={this.props.id}/>
            </div>
        )
    }
}

export default React.forwardRef((props, ref) => <FieldSelect innerRef={ref} {...props}/>);
