import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {withRouter} from "next/router";

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.blockSidebar = React.createRef();
    }

    openSidebar = () => {
        this.blockSidebar.current.classList.add("sidebar_open");
    }

    render() {
        return (
            <div className="site">
                <Header/>
                <section className="content">
                    {this.props.userName &&
                        <button className="button-open-sidebar" onClick={this.openSidebar}/>
                    }
                    {this.props.userName &&
                        <Sidebar ref={this.blockSidebar} router={this.props.router}/>
                    }
                    <div className="wrapper">
                        { this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userName: state.userInfo.userName
    }
}

export default connect(mapStateToProps, null)(withRouter(Wrapper));