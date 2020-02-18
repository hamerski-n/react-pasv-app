import React, {useState} from 'react';
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import Counter from "../counter";
import './app.css';
import CounterAdd from "../counter-add";
import CounterTotal from "../counter-total";

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
const countersData = [
    {
        counterName: 'Counter1',
        initialValue: 0,
        id: 98
    },
    {
        counterName: 'Counter2',
        initialValue: 1,
        id: 99
    }
];

function App() {

    ////////////////////////////////////////////////////////////////
    //next function addItem (counter)
    ///////////////////////////////////////////////////////////////////
    // const [counters, setCounters] = useState(countersData);
    // const [idx, setIdx] = useState(100);
    const [totalCount, setTotalCount] = useState(countersData[0].initialValue + countersData[1].initialValue);
    const [isReset, setReset] = useState(false);

    function countChanges(value) {
        setTotalCount(value + totalCount);
    }
    function resetTotalCount(value) {
        if (value){
            setReset(true);
        }
    }

    function buttonClicked(name) {
        console.log('CLICKED!' + name)
    }

    function changeReset() {
        setReset(false);
    }

    return (
        <div className="App">
            <Header menuItems={items}/>
            <Content bc={buttonClicked}/>
            <CounterTotal totalCount = {totalCount} setTotalCount={setTotalCount} resetTotalCount={resetTotalCount}/>
            <p>Counters</p>
            <hr/>
            <Counter counterName={countersData[0].counterName}
                     countChanges={countChanges}
                     initialValue={countersData[0].initialValue}
                     isReset={isReset}
                     changeReset={changeReset}
            />
            <Counter counterName={countersData[1].counterName}
                     countChanges={countChanges}
                     initialValue={countersData[1].initialValue}
                     isReset={isReset}
                     changeReset={changeReset}
            />
            <p>Add new counter</p>
            <CounterAdd/>
            <Footer menuItems={items} menuItems2={items2}/>
        </div>
    );
}

export default App;
