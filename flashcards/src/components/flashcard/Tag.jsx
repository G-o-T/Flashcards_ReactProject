import React from "react";

function Tag({...props}) {
    return (
        <button className="tags__item text-orange" title={props.title}>{props.title}</button>
    )
}

export default Tag;