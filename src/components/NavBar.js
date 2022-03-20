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
                    {/* wrote list backwards because of my bad css */}
                    <Links className="Links" />
                    <ThreeDots className="ThreeDots" />
                </div>
            </nav>
        );
    }
}

export default NavBar;