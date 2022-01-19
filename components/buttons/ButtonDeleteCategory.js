import React from 'react';

class ButtonDeleteCategory extends React.Component {
    render() {
        return (
            <button className="button-category button-category_delete" onClick={this.props.functionOnClick}/>
        )
    }
}

export default ButtonDeleteCategory;
