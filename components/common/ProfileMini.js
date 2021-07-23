import React from 'react';
import photo from './../../images/profile.png';
import {connect} from "react-redux";
import Link from "next/link";
import Image from "next/image";

class ProfileMini extends React.Component {
	constructor(props) {
		super(props);
	}

	closeSidebar = () => {
		if(document.querySelector(".sidebar").classList.contains("sidebar_open")) {
			document.querySelector(".sidebar").classList.remove("sidebar_open");
		}
	}

	render() {
		return (
			<div className={ this.props.userName ? 'header__profile' : 'header__profile_hidden' }>
				<h3 className="header__name" >
					<Link href="/profile">
						<a onClick={this.closeSidebar}>
							{this.props.userName}
						</a>
					</Link>
				</h3>
				<div className="header__photo wrapper-img">
					<Link href="/profile">
						<a onClick={this.closeSidebar}>
							<Image src={this.props.userAvatar ? this.props.userAvatar : photo} alt="photo"/>
						</a>
					</Link>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userName: state.userInfo.userName,
		userAvatar: state.userInfo.userAvatar
	}
}

export default connect(mapStateToProps, null)(ProfileMini);