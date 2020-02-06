import React from "react";
import './menu-item.css';

function MenuItem ({lable='MenuItem'}) {
    return (
        <li>
            <a href='#top' className='menu-item'> {lable} </a>
        </li>
    );
}

export default MenuItem;
