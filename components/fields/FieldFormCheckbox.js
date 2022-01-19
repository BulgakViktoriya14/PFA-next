import React from 'react';

class FieldFormCheckbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="form__item form__item_checkbox">
                <input type="checkbox" name="checkbox-category-list" className="form__input_checkbox" ref={this.props.innerRef} aria-label={this.props.label}
                    onClick={this.props.functionOnCLick} checked={this.props.checked ? "checked" : ""}/>
                <label className="form__label label-checkbox" htmlFor="checkbox-category-list">{this.props.label}</label>
            </div>
        )
    }
}

export default React.forwardRef((props, ref) => <FieldFormCheckbox innerRef={ref} {...props}/>);
