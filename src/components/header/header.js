import React from "react";
import Logo from "../logo";
import Menu from "../menu";

import './header.css';

function Header(props) {
    return (
        <header>
            <div className="container">
                <Logo/>
                <Menu className='flex' menuItems = {props.menuItems}/>
            </div>
        </header>
    );
}

export default Header;
