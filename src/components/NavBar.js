import React from "react";
import ThreeDots from "./ThreeDots";
import Links from "./Links";
import "../App.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <nav className="Navbar Navbar-container">
                <div className="Navbar-container-left">
                    <h1>{this.title}</h1>
                </div>
                <div className="Navbar-container-right">
                    <Links className="Links" />
                    <button className="Navbar-menu-btn">
                        <ThreeDots className="ThreeDots" />
                    </button>
                </div>
            </nav>
        );
    }
}

export default NavBar;