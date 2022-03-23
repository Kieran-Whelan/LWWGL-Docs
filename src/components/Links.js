import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../App.css"

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.className = props.className;
    }

    render() {
        {/* wrote list backwards because of my bad css */}
        return (
            <div className={this.className}>
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
        );
    }
}

export default Links;