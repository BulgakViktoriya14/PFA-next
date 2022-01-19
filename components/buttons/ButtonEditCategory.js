import React from 'react';

class ButtonEditCategory extends React.Component {
    render() {
        return (
            <button className="button-category button-category_edit" onClick={this.props.functionOnClick}/>
        )
    }
}

export default ButtonEditCategory;
