import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

class CodeSample extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }

    render() {
        return (
            <SyntaxHighlighter language="html" style = {docco}>
                {this.text}
            </SyntaxHighlighter>
        );
    }
}

export default CodeSample;