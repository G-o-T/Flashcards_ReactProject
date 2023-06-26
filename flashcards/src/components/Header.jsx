import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="header">
            <Logo></Logo>
            <Navbar></Navbar>
        </header>
    )
}

export default Header;