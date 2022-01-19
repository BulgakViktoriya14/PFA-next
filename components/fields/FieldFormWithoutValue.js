import React from 'react';

class FieldFormWithoutValue extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form__item">
                {this.props.label &&
                    <label htmlFor={this.props.id} className={`form__label${this.props.required ? ' required' : ''}`}>{this.props.label}</label>
                }
                <input type={this.props.type} ref={this.props.innerRef} id={this.props.id} name={this.props.id} className="form__input" required={this.props.required ? "required" : ""}
                       aria-required={this.props.required ? "required" : ""} onChange={this.props.functionOnChange} aria-label={this.props.label} inputMode={this.props.inputMode}/>
                {this.props.flagPasswordField &&
                    <button className="button-visible-password" aria-label="Button visible password" onClick={this.props.showHidePassword}/>
                }
            </div>
        )
    }
}

export default React.forwardRef((props, ref) => <FieldFormWithoutValue innerRef={ref} {...props}/>);
