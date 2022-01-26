import React from 'react';
import FormChangePassword from "./FormChangePassword";
import close from "../../images/close.svg";
import FormChangeAvatar from "./FormChangeAvatar";
import FormSetNewPassword from "./FormSetNewPassword";
import Image from 'next/image'
import { withRouter } from "next/router";
import BlockCategories from "./BlockCategories";
import BlockReportCards from "./BlockReportCards";

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flagChangePassword: false,
        }

        this.modalWindow = React.createRef();
        this.inputFile = React.createRef();
    }

    closeModalWindow = (e) => {
        let modalWindow = this.modalWindow.current;

        if(e.target.classList.contains("modal-window") || e.target.classList.contains("close")) {
            if(modalWindow.classList.contains("modal-window__change-password")) {
                this.setState({flagChangePassword: false});
            }

            if(modalWindow.classList.contains("modal-window__show-cards")) {
                this.props.clearReportCards();
            }

            if(modalWindow.classList.contains("modal-window__success-check-in")) {
                this.props.history.push("/login")
                return;
            }

            if(modalWindow.classList.contains("modal-window__change-avatar")) {
                this.inputFile.current.classList.remove("upload-file");
            }

            modalWindow.classList.remove("open");
            modalWindow.querySelector(".form").reset();
        }
    }

    openSuccessResult = () => {
        this.setState({flagChangePassword: true});
    }

    closeModalWindowAfterChangePassword = () => {
        this.modalWindow.current.classList.remove("open");
        this.setState({flagChangePassword: false});
    }

    render() {
        return (
            <div className={this.props.nameClass} onClick={this.closeModalWindow} ref={this.modalWindow}>
                <div className="modal-window__block">
                    <div className="modal-window__content">
                        <button className="close">
                            <Image className="close" src={close} alt="icon" width={30} height={30} loading={'lazy'}/>
                        </button>
                        <h4 className="modal-window__title">{this.props.modalTitle}</h4>
                        {this.props.page === "show-cards" &&
                            <BlockReportCards cardsReport={this.props.cardsReport}
                                              idButton={this.props.idButton} flag={this.props.flag}/>
                        }
                        {this.props.page === "page-login" &&
                            <FormSetNewPassword functionCloseWindow={this.closeModalWindowAfterChangePassword}/>
                        }
                        {this.props.page === "profile-password" &&
                            <FormChangePassword functionCloseWindow={this.closeModalWindowAfterChangePassword}
                                                    openSuccessResult={this.openSuccessResult} flagChangePassword={this.state.flagChangePassword}/>
                        }
                        {this.props.page === "profile-avatar" &&
                            <FormChangeAvatar history={this.props.history} ref={this.inputFile} idUser={this.props.idUser}/>
                        }
                        {this.props.page === "check-in" &&
                            <div className="success-result">
                                <p className="success-result__text">You are registered</p>
                                <button className="form__submit" name="submit"
                                        onClick={() => this.props.router.push('/')}>Login to your account</button>
                            </div>
                        }
                        {this.props.page === "profile-category" &&
                            <BlockCategories arrayCategory={this.props.arrayCategory}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ModalWindow);
