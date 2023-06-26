import React from "react";

function Navbar() {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <button className="menu__link menu__link_active">dictionary</button>
                </li>
                <li className="menu__item">
                    <button className="menu__link">flashcards</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;