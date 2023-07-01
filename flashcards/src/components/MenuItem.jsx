import React from "react";

function MenuItem({title}) {
    return (
        <li className="menu__item">
            <button className="menu__link">{title}</button>
        </li>

    )
}

export default MenuItem;