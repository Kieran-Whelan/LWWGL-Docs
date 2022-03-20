import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

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
                    <ul>
                        <li>
                            <Link to="/install">Install</Link>
                        </li>
                        <li>
                            <Link to="/docs">Docs</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                        <SearchBar placeholder="Quick Search"/>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;