import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    const seActive = ({ isActive }) => isActive ? "menu__link menu__link_active" : "menu__link";

    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink className={seActive} to="/dictionary">dictionary</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className={seActive} to="/training">flashcards</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;