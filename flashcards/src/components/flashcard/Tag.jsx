import React from "react";

function Tag({...props}) {
    return (
        <a className="tags__item text-orange" title={props.title}>{props.title}</a>
    )
}

export default Tag;