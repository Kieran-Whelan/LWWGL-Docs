import React from "react";
import CodeSample from "../CodeSample";

const lines = [{name: "<body>"}, {name: "</body>"}];

function Docs () {
    return (
        <div>
            <CodeSample lines={lines}/>
        </div>
    );
}

export default Docs; 