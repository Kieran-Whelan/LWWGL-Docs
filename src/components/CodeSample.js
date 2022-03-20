import React from "react";

class CodeSample extends React.Component {
    constructor(props) {
        super(props);
        this.lines = props.lines;
    }

    render() {
        return this.lines.map(line => (
            <p>{line.name}</p>
        ));
    }
}

export default CodeSample;