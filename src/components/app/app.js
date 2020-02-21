import React, {useState} from 'react';
import Header from "../header";
import Footer from "../footer";
import Counter from "../counter";
import './app.css';
import AddCounterForm from "../add-counter-form";

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
const initialCountersState = [
    {
        id: 98,
        name: 'Counter 1',
        count: 1
    },
    {
        id: 99,
        name: 'Counter 2',
        count: 2
    }
];

function App() {
    const [counters, setCounters] = useState(initialCountersState);
    const [maxId, setMaxId] = useState(100);

    function createCounter(name, count) {
        setMaxId(maxId + 1);
        return {name, count, id: maxId};
    }

    const resetTotalCounter = () => {
        const newCounters = counters.map(el => ({...el, count: 0}));
        setCounters(newCounters);
    };

    const incrementCounter = (id) => {
        const index = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[index].count = newCounters[index].count + 1;
        setCounters(newCounters);
    };

    const decrementCounter = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, count: el.count - 1};
            return el;
        });
        setCounters(newCounters);
    };

    const resetCounter = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, count: 0};
            return el;
        });
        setCounters(newCounters);
    };

    const removeCounter = (id) => {
        const newCounters = counters.filter(el => el.id !== id);
        setCounters(newCounters);
    };

    const addCounter = (name, count) => {
        const newCounter = createCounter(name, count);
        const newCounters = [...counters, newCounter];
        setCounters(newCounters);
    };

    // function buttonClicked(name) {
    //     console.log('CLICKED!' + name)
    // }

    return (
        <div className="App">
            <Header menuItems={items}/>
            {/*<Content bc={buttonClicked}/>*/}
            <br/>
            Total count {counters.reduce((acc, cur) => acc + cur.count, 0)}
            <button className='gray' onClick={resetTotalCounter}> Reset total count</button>
            <br/>
            <p>Counters </p>
            <hr/>
            {
                counters.map(el => <Counter key={el.id}
                                            id={el.id}
                                            name={el.name}
                                            count={el.count}
                                            increment={incrementCounter}
                                            decrement={decrementCounter}
                                            remove={removeCounter}
                                            reset={resetCounter}
                />)
            }
            <br/>
            <p>Add new counter</p>
            <AddCounterForm onSubmit={addCounter}/>
            <br/>

            <Footer menuItems={items} menuItems2={items2}/>
        </div>
    );
}

export default App;
