import React, {useState} from 'react';
import './app.css';
import Header from "../header";
import Footer from "../footer";
import Counter from "../counter";
import AddCounterForm from "../add-counter-form";
import TotalCount from "../total-count";

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

    const editCounterName = (name,id) => {
        console.log('name in APP='+name);
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, name: name};
            return el;
        });
        setCounters(newCounters);
    };

    return (
        <div>
            <Header menuItems={items}/>
            <br/>
            <TotalCount counters={counters} resetTotalCounter={resetTotalCounter}/>
            <br/>
            <p className="font-weight-bold">Counters</p>
            {
                counters.map(el => <Counter key={el.id}
                                            id={el.id}
                                            name={el.name}
                                            count={el.count}
                                            increment={incrementCounter}
                                            decrement={decrementCounter}
                                            remove={removeCounter}
                                            reset={resetCounter}
                                            editCounterName={editCounterName}
                />)
            }

            <div className="font-weight-bold"> Add new counter</div>

            <AddCounterForm onSubmit={addCounter}/>
            <br/>

            <Footer menuItems={items} menuItems2={items2}/>
        </div>
    );
}

export default App;
