import React from "react";
import Wrapper from "../components/common/Wrapper";
import FormLoginAndCheckIn from "../components/blocks/FormLoginAndCheckIn";
import ModalWindow from "../components/blocks/ModalWindow";

class Login extends React.Component {
    render() {
        return (
            <Wrapper>
                <ModalWindow history={this.props.history} page={"page-login"} nameClass={"modal-window modal-window__forgot-password"}/>
                <h1 className="title">Login to your account</h1>
                <FormLoginAndCheckIn link="/register" textLink="Create an account" textButton="Login" account={true}/>
            </Wrapper>
        )
    }
}

export default Login;
