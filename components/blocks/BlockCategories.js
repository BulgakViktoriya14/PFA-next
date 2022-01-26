import React, {createRef} from 'react';
import ButtonEditCategory from "../buttons/ButtonEditCategory";
import ButtonDeleteCategory from "../buttons/ButtonDeleteCategory";
import ButtonProfile from "../buttons/ButtonProfile";
import FieldFormCheckbox from "../fields/FieldFormCheckbox";
import {setUserCategoryListAction} from "../../actions/actionCategoryList";
import {connect} from "react-redux";
import firebase from "firebase";
import FormAddCategory from "./FormAddCategory";
import {setUserCategoryListFlagAction} from "../../actions/actionEnableCategoryFlag";
import FieldFormWithValue from "../fields/FieldFormWithValue";

class BlockCategories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'The list of categories is empty. To create a category, click the button "add".',
        }

        this.formAdd = createRef();
        this.checkboxValue = createRef();
    }

    checkArrayCategory = () => {
        if(this.props.arrayCategory.length === 1 && this.props.arrayCategory[0].length === 0) {
            return false;
        }

        return true;
    }

    openFormAddCategory = (e) => {
        if(this.formAdd.current.classList.contains("open")) {
            this.formAdd.current.classList.remove("open");
            e.target.innerText = "add";
        } else {
            this.formAdd.current.classList.add("open");
            e.target.innerText = "×";
        }
    }

    editCategory = (e) => {
        let row = e.target.parentElement.parentElement;
        if(e.target.classList.contains("save")) {
            e.target.classList.remove("save")
            row.querySelector(".form__input").classList.add("hidden");
            row.querySelector(".static-name").classList.remove("hidden");
        } else {
            e.target.classList.add("save")
            row.querySelector(".form__input").classList.remove("hidden");
            row.querySelector(".static-name").classList.add("hidden");
        }
    }

    enableCategory = () => {
        let _this = this;
        if(_this.checkboxValue.current.checked) {
            firebase.database().ref('/users/user' + _this.props.userId).update({
                enableCategoryFlag: true
            }).then(() => {
                _this.props.setUserCategoryListFlagFunction(true);
            })
        } else {
            firebase.database().ref('/users/user' + _this.props.userId).update({
                enableCategoryFlag: false
            }).then(() => {
                _this.props.setUserCategoryListFlagFunction(false);
            })
        }
    }

    deleteCategory = (e) => {
        let _this = this;
        let id = e.target.parentElement.parentElement.getAttribute("id");
        let array = _this.props.arrayCategory;
        array.splice(Number(id), 1);
        let string = array.join('#');
        firebase.database().ref('/users/user' + _this.props.userId).update({
            category: string
        }).then(() => {
            _this.props.setUserCategoryListFunction(string);
        })
    }

    handleChange = (e) => {
        let categoryList = this.props.arrayCategory;
        let _this = this;
        if(e.target.value.length > 0) {
            categoryList[e.target.name] = e.target.value;
        } else {
            categoryList.splice([e.target.name], 1);
        }
        let string = categoryList.join('#');
        firebase.database().ref('/users/user' + _this.props.userId).update({
            category: string
        }).then(() => {
            this.props.setUserCategoryListFunction(string);
        })
    }

    render() {
        return (
            <div className="block-categories">
                <div className="container">
                    <FieldFormCheckbox checked={this.props.enableCategoryFlag} innerRef={this.checkboxValue} label={"Enabling the category list function"} functionOnCLick={this.enableCategory}/>
                    <ButtonProfile functionOnCLick={this.openFormAddCategory} nameButton={"add"}/>
                    <FormAddCategory innerRef={this.formAdd} arrayCategory={this.props.arrayCategory}/>
                </div>
                {this.checkArrayCategory() &&
                    <table className="table">
                        <thead className="thead">
                            <tr className="tr">
                                <th className="th">Name category</th>
                                <th className="th">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.arrayCategory.map((item, index) => {
                            if (item.length > 0)
                                return <tr key={index} className="tr">
                                    <td className="td">
                                        <FieldFormWithValue id={index} functionOnChange={this.handleChange} inputMode={item} classInput={"hidden"} value={item} readonly={false}/>
                                        <span className="static-name">{item}</span>
                                    </td>
                                    <td className="td">
                                        <ButtonEditCategory functionOnClick={this.editCategory}/>
                                        <ButtonDeleteCategory functionOnClick={this.deleteCategory}/>
                                    </td>
                                </tr>
                            }
                        )}
                        </tbody>
                    </table>
                }
                {!this.checkArrayCategory() &&
                    <p className="success-result__text">{this.state.message}</p>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userInfo.idUser,
        enableCategoryFlag: state.userInfo.enableCategoryFlag
    }
}

function matchDispatchToProps(dispatch) {
    return {
        setUserCategoryListFunction: (category) => {
            dispatch(setUserCategoryListAction(category))
        },

        setUserCategoryListFlagFunction: (flag) => {
            dispatch(setUserCategoryListFlagAction(flag))
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(BlockCategories);
