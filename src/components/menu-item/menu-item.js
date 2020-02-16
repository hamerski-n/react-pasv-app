import React from "react";
import './menu-item.css';

function MenuItem (props) {
    //console.log(props);
    return (
        <li>
            <a href= {props.menuItem.link} className='menu-item'> {props.menuItem.text} </a>
        </li>
    );
}

export default MenuItem;