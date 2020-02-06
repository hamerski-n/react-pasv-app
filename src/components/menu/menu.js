import React from "react";
import MenuItem from "../menu-item";

import './menu.css';

function Menu() {
    return (
        <nav>
            <ul className='menu'>
                <MenuItem lable = 'MenuItem1'/>
                <MenuItem lable = 'MenuItem2'/>
                <MenuItem lable = 'MenuItem3'/>
            </ul>
        </nav>
    );
}

export default Menu;
