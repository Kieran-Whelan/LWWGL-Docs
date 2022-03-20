import React from "react";
import "../App.css";

class CodeSample extends React.Component {
    constructor(props) {
        super(props);
        this.lines = props.lines;
    }

    render() {
        return (
            <div className="CodeSample">
                {
                    this.lines.map(line => (
                        <p>{line.name}</p>
                    ))
                }
            </div>
        );
    }
}

export default CodeSample;