import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Logo></Logo>
                <Navbar></Navbar>
            </div>
        </header>
    )
}

export default Header;