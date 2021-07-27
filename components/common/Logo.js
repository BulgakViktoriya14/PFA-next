import React from 'react';
import logo from '../../images/logo.png';
import Image from 'next/image'

class Logo extends React.Component {
	render() {
		return (
			<div className="logo wrapper-img">
				<Image src={logo} alt="logo" width="250" height="100"/>
			</div>
		)
	}
}

export default Logo;