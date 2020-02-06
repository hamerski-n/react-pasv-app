import React from "react";
import Logo from "../logo";
import Menu from "../menu";

import './header.css';

function Header() {
    return (
        <header>
            <div className="container">
                <Logo/>
                <Menu/>
            </div>
        </header>
    );
}

export default Header;
