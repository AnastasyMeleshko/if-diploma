import React from "react";
import "./RedButton.css";

function RedButton(props) {

    return (
        <button type={props.type} className={props.className}>{props.buttonText}</button>
    );
}

export default RedButton;
