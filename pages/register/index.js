import React from 'react';
import Wrapper from "../../components/common/Wrapper";
import FormLoginAndCheckIn from "../../components/blocks/FormLoginAndCheckIn";
import ModalWindow from "../../components/blocks/ModalWindow";

class Index extends React.Component {
	render() {
		return (
			<Wrapper>
				<ModalWindow history={this.props.history} page={"check-in"} nameClass={"modal-window modal-window__success-check-in"}/>
				<h1 className="title">Registration</h1>
				<FormLoginAndCheckIn link="/" textLink="Sign in to your account" textButton="Register" account={false}/>
			</Wrapper>
		)
	}
}

export default Index;