import React from "react";
import MenuItem from "../menu-item";

import './menu.css';

function Menu(props) {
    return (
        <nav>
            <ul className='menu'>
                {props.menuItems.map(el => <MenuItem key={el.text} menuItem = {el} />)}
            </ul>
        </nav>
    );
}

export default Menu;