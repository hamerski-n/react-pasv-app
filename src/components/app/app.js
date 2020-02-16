import React, {useState} from 'react';
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import Counter from "../counter";
import './app.css';

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

function App() {
    const [totalCount, setTotalCount] = useState(0);

    function countChanges(value) {
        setTotalCount(value + totalCount);
    }

    function buttonClicked(name) {
        console.log('CLICKED!' + name)
    }
    return (
        <div className="App">
            <Header menuItems = {items}  />
            <Content bc={buttonClicked}/>
            Total: {totalCount}
            <Counter countChanges = {countChanges}/>
            <hr/>
            <Counter countChanges = {countChanges}/>
            <Footer menuItems = {items} menuItems2 = {items2} />
        </div>
    );
}

export default App;
