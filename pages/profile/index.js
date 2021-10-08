import React from 'react';
import photo from "../../images/profile.png";
import firebase from 'firebase';
import {connect} from "react-redux";
import {withRouter} from "next/router";
import {setUserNameAction} from "../../actions/actionUserName";
import {setUserEmailAction} from "../../actions/actionUserEmail";
import {setUserSumAction} from "../../actions/actionSumUser";
import {setUserIdAction} from "../../actions/actionIdUser";
import {setUserAvatarAction} from "../../actions/actionUserAvatar";
import {setUserIncomeCardsAction} from "../../actions/actionUserIncomeCards";
import {setUserExpensesCardsAction} from "../../actions/actionUserExpensesCards";
import ModalWindow from "../../components/blocks/ModalWindow";
import ButtonProfile from "../../components/buttons/ButtonProfile";
import Wrapper from "../../components/common/Wrapper";
import Link from 'next/link';
import Image from 'next/image';
import FormInfoProfile from "../../components/blocks/FormInfoProfile";
import Loader from "../../components/common/Loader";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            idUser: '',
            loc: props.router.query.loc,
            isLoading: true
        }

        this.containerImage = React.createRef();
    }

    componentDidMount() {
        const db = firebase.database();
        let _this = this;

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                let currentEmail = user.email;
                db.ref('/users').on('value', snap => {
                    let objectUsers = snap.val();
                    for (let key in objectUsers) {
                        if (currentEmail === objectUsers[key].email) {
                            _this.setState({idUser: objectUsers[key].id});
                            _this.props.setUserIdFunction(objectUsers[key].id);
                            _this.props.setUserNameFunction(objectUsers[key].name);
                            _this.props.setUserEmailFunction(objectUsers[key].email);
                            _this.props.setUserSumFunction(objectUsers[key].money);
                            _this.props.setUserIncomeCardsFunction(objectUsers[key].cardsIncome);
                            _this.props.setUserExpensesCardsFunction(objectUsers[key].cardsExpenses);
                            _this.getAvatar(objectUsers[key].id);
                        }
                    }
                })
            }
        })
    }

    getAvatar = (userId) => {
        let _this = this;
        let imageWrapper = this.containerImage.current;
        firebase.storage().ref().child(`avatars/${userId}`).getDownloadURL()
            .then(function (url) {
                if (url) {
                    imageWrapper.innerHTML = `<img src=${url} alt="photo"/>`;
                    _this.props.setUserAvatarFunction(url);
                }
            }).then(() => { _this.setState({isLoading: false}); })
    }

    changeUserInfo = () => {
        this.setState({flag: !this.state.flag});
    }

    saveUserInfo = () => {
        const db = firebase.database();
        this.setState({flag: !this.state.flag});

        db.ref('/users/user' + this.state.idUser).update({
            name: this.props.userName,
            email: this.props.userEmail
        })

        firebase.auth().currentUser.updateEmail(this.props.userEmail);
    }

    logout = () => {
        this.props.setUserNameFunction("");
        this.props.setUserEmailFunction("");
        this.props.setUserSumFunction(0);
        firebase.auth().signOut();
        this.props.router.push('/');
    }

    openModalWindowChangePassword = () => {
        document.querySelector(".modal-window.modal-window__change-password").classList.add("open");
    }

    openModalWindowChangeAvatar = () => {
        document.querySelector(".modal-window.modal-window__change-avatar").classList.add("open");
    }

    handleChange = (e) => {
        switch (e.target.name) {
            case 'name-user':
                this.props.setUserNameFunction(e.target.value);
                break;
            case 'email':
                this.props.setUserEmailFunction(e.target.value);
                break;
            default:
                break;
        }
    }

    deleteProfile = () => {
        let _this = this;
        firebase.auth().currentUser.delete().then(function () {
                firebase.database().ref('users/user' + _this.props.userId).remove()
                    .then(function () {
                        this.props.history.push('/check-in')
                    })
                    .catch(error => console.log(error.message));
            }
        )
    }

    render() {
        return (
            <Wrapper>
                {this.state.isLoading &&
                    <Loader/>
                }

                {this.props.userId &&
                    <div className={`content__logged-in${this.state.isLoading ? ' disabled' : ''}`}>
                        <ModalWindow page={"profile-password"} nameClass={"modal-window modal-window__change-password"}/>
                        <ModalWindow idUser={this.props.userId} page={"profile-avatar"}
                                     nameClass={"modal-window modal-window__change-avatar"} history={this.props.history}/>
                        <h1 className="title">Profile</h1>
                        <div className="profile">
                            <div className="profile__image wrapper-img" ref={this.containerImage}>
                                <Image src={photo} alt="photo"/>
                            </div>
                            <FormInfoProfile handleChange={this.handleChange} flag={this.state.flag}
                                             userName={this.props.userName} userEmail={this.props.userEmail}/>
                        </div>
                        <div className="profile__wrapper-buttons">
                            {this.state.flag &&
                            <ButtonProfile functionOnCLick={this.changeUserInfo}
                                           nameButton={"Change information about yourself"}/>
                            }
                            {!this.state.flag &&
                            <ButtonProfile functionOnCLick={this.saveUserInfo} nameButton={"Save"}/>
                            }
                            <ButtonProfile functionOnCLick={this.openModalWindowChangePassword}
                                           nameButton={"Change password"}/>
                            <ButtonProfile functionOnCLick={this.openModalWindowChangeAvatar} nameButton={"Change avatar"}/>
                            <ButtonProfile functionOnCLick={this.logout} nameButton={"Log out"}/>
                            <ButtonProfile functionOnCLick={this.deleteProfile} nameButton={"Delete profile"}/>
                        </div>
                    </div>
                }

                {!this.props.userId &&
                <div className={`content__unlogged ${this.state.isLoading ? ' disabled' : ''}`}>
                        <h1 className="title">You are not logged in!</h1>
                        <Link href="/login">
                            <a className="button-open-login-page">Sign in</a>
                        </Link>
                    </div>
                }
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userInfo.idUser,
        userName: state.userInfo.userName,
        userEmail: state.userInfo.userEmail,
        userSum: state.userInfo.userSum,
        userAvatar: state.userInfo.userAvatar,
    }
}

function matchDispatchToProps(dispatch) {
    return {
        setUserIdFunction: (userId) => {
            dispatch(setUserIdAction(userId))
        },

        setUserAvatarFunction: (userAvatar) => {
            dispatch(setUserAvatarAction(userAvatar))
        },

        setUserNameFunction: (userName) => {
            dispatch(setUserNameAction(userName))
        },

        setUserEmailFunction: (email) => {
            dispatch(setUserEmailAction(email))
        },

        setUserSumFunction: (sum) => {
            dispatch(setUserSumAction(sum))
        },

        setUserIncomeCardsFunction: (cards) => {
            dispatch(setUserIncomeCardsAction(cards))
        },

        setUserExpensesCardsFunction: (cards) => {
            dispatch(setUserExpensesCardsAction(cards))
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Profile));
