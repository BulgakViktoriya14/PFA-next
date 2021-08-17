import React from 'react';
import close from '../../images/close.svg';
import Image from 'next/image';
import Link from 'next/link';
import MoneyAccount from "./MoneyAccount";

class Sidebar extends React.Component {
	closeSidebar = () => {
		this.props.blockSidebar.current.classList.remove("sidebar_open");
	}

	render() {
		return (
			<aside className="sidebar" ref={this.props.blockSidebar}>
				<nav className="menu">
					<ul className="menu-list">
						<button className="close" onClick={this.closeSidebar}>
							<Image src={close} alt="close" width={30} height={30}/>
						</button>
						<li className="menu-item">
							<Link href="/income">
								<a className="menu-link" onClick={this.closeSidebar}>
									Income
								</a>
							</Link>
						</li>
						<li className="menu-item">
							<Link href="/expenses">
								<a className="menu-link" onClick={this.closeSidebar}>
									Expenses
								</a>
							</Link>
						</li>
					</ul>
				</nav>
				<MoneyAccount/>
			</aside>
		)
	}
}

export default React.forwardRef((props, ref) => <Sidebar blockSidebar={ref} {...props}/>);