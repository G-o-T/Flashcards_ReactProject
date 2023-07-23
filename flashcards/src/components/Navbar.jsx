import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink className={({ isActive }) => isActive ? "menu__link menu__link_active" : "menu__link"} to="/dictionary" end>dictionary</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className={({ isActive }) => isActive ? "menu__link menu__link_active" : "menu__link"} to="/flashcards" end>flashcards</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;