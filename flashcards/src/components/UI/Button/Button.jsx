import React from "react";

function Button({children, disabled, ...props}) {

    return (
        <button disabled={disabled} {...props}>{children}</button>
    )
}

export default Button;