import React from "react";
import "../App.css"

class ThreeDots extends React.Component {
    constructor(props) {
        super(props);
        this.className = props.className;
    }

    render() {
        return (
          <span className={this.className}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </span>
        );
    }
}

export default ThreeDots;