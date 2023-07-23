import React from "react";
import { Link } from "react-router-dom";


function Logo() {
    return (
        <Link className="logo" to="/start">
            <p className="logo__letter text-orange">2</p>
            <p className="logo__letter text-white">L</p>
            <p className="logo__letter text-blue">b</p>
            <p className="logo__letter text-magenta">F</p>
        </Link>

    )
}

export default Logo;