import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
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
                </ul>
            </div>
        );
    }
}

export default NavBar;