import React from "react";
import "../App.css"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.placeholder = props.placeholder;
    }

    render() {
        return (
            <div>
                <input className="SearchBar" type={"text"} placeholder={this.placeholder}></input>
            </div>
        );
    }
}

export default SearchBar;