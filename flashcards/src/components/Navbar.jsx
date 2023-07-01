import React from "react";
import MenuItemsList from "./MenuItemsList";

function Navbar() {

    return (
        <nav className="menu">
            <ul className="menu__list">
                <MenuItemsList />
            </ul>
        </nav>
    )
}

export default Navbar;