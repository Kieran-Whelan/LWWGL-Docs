import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <h1>LWWGL</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/install">Install</Link>
                </li>
                <li>
                    <Link to="/docs">Docs</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;