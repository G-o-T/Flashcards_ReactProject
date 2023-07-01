import React from "react";

function Button({children, ...props}) {

    return (
        <button {...props} className="btn">{children}</button>
    )
}

export default Button;