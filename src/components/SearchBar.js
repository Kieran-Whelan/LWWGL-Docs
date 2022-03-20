import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.placeholder = props.placeholder;
    }

    render() {
        return (
            <diV>
                <input type={"text"} placeholder={this.placeholder}></input>
            </diV>
        );
    }
}

export default SearchBar;