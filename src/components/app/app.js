import React from 'react';
import Header from "../header";
import Content from "../content";
import Footer from "../footer";

import './app.css';

function App() {
    const items = [{
        text: 'Home',
        link: 'home'
    }, {
        text: 'Products',
        link: 'home'
    }, {
        text: 'Services',
        link: 'serv-page'
    }, {
        text: 'Prices',
        link: 'prices-page'
    },
    ];
    const items2 = [{
        text: 'Menu item1',
        link: 'home'
    }, {
        text: 'Menu item2',
        link: 'home'
    }, {
        text: 'Menu item3',
        link: 'home'
    },
    ];
    return (
        <div className="App">
            <Header menuItems = {items}  />
            <Content/>
            <Footer menuItems = {items} menuItems2 = {items2} />
        </div>
    );
}

export default App;
