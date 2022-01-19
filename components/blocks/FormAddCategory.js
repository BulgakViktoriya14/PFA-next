import React, {createRef} from 'react';
import FieldFormWithoutValue from "../fields/FieldFormWithoutValue";
import ButtonProfile from "../buttons/ButtonProfile";
import {setUserCategoryListAction} from "../../actions/actionCategoryList";
import {connect} from "react-redux";
import firebase from "firebase";
import {validateEmptyField} from "../../functions/validateEmptyField";

class FormAddCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }

        this.inputValue = createRef();
    }

    addCategory = () => {
        let _this = this;
        let value = _this.inputValue.current.value;
        if(!validateEmptyField([value])) {
            _this.setState({message: "You did not fill in the required field"});
            return;
        }
        _this.setState({message: ""})
        let array = _this.props.arrayCategory;
        array.unshift(value)
        let string = array.join('#');
        firebase.database().ref('/users/user' + _this.props.userId).update({
            category: string
        }).then(() => {
            _this.props.setUserCategoryList(string);
            _this.inputValue.current.value = '';
        })
    }

    render() {
        return (
            <form className="form form-add-category" ref={this.props.innerRef}>
                <FieldFormWithoutValue required={"required"} innerRef={this.inputValue} label={"Name category"} type={"text"} flagPasswordField={false} inputMode={"text"}/>
                <ButtonProfile nameButton={"+"} functionOnCLick={this.addCategory}/>
                {this.state.message &&
                    <p className="massage-error">{this.state.message}</p>
                }
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userInfo.idUser,
    }
}

function matchDispatchToProps(dispatch) {
    return {
        setUserCategoryList: (category) => {
            dispatch(setUserCategoryListAction(category))
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(React.forwardRef((props, ref) => <FormAddCategory innerRef={ref} {...props}/>));
