import React from "react";
import Logo from "../UI/Logo/Logo";
import Navbar from "../UI/Navbar/Navbar";

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