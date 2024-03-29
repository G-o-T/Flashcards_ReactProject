import React from "react";

function Input(props) {

    return (
        <input type="text" className={props.className} {...props} />
    )

}

export default Input;