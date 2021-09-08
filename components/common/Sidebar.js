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
							<Image src={close} alt="close" width={30} height={30} loading={'lazy'}/>
						</button>
						<li className={this.props.router.pathname === "/income" ? "menu-item menu-item_active" : "menu-item"} onClick={this.closeSidebar}>
							<Link href="/income">
								<a className="menu-link">
									Income
								</a>
							</Link>
						</li>
						<li className={this.props.router.pathname  === "/expenses" ? "menu-item menu-item_active" : "menu-item"}>
							<Link href="/expenses">
								<a className="menu-link">
									Expenses
								</a>
							</Link>
						</li>
						<li className={this.props.router.pathname  === "/reports" ? "menu-item menu-item_active" : "menu-item"}>
							<Link href="/reports">
								<a className="menu-link">
									Reports
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
