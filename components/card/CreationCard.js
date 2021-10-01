import React from 'react';
import close from "../../images/close.svg";
import FormCreateCard from "../blocks/FormCreateCard";
import Image from "next/image";

class CreationCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errorText: ''
		}

		this.blockCreateCard = React.createRef();
	}

	closePopupCreationCard = () => {
		this.blockCreateCard.current.classList.remove("creation-card_open");
		document.querySelector(".button-open-sidebar").classList.remove("hidden");
	}

	render() {
		return (
			<div className="creation-card" ref={this.blockCreateCard}>
				<button className="close" onClick={this.closePopupCreationCard}>
					<Image src={close} alt="close" width={30} height={30} loading={'lazy'}/>
				</button>
				<h2 className="subtitle">Create card</h2>
				<FormCreateCard type={this.props.type}/>
			</div>
		)
	}
}

export default CreationCard;
