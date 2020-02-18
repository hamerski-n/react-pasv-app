import React, {useEffect, useState} from "react";
import './counter.css';

function Counter({countChanges, counterName, initialValue, isReset,changeReset}) {
    const [count, setCount] = useState(initialValue);

    const countChangePlusHandler = () => {
        setCount(count + 1);
        countChanges(1);
    };

    const countChangeMinusHandler = () => {
        setCount(count - 1);
        countChanges(-1);
    };
    const resetCounter = () => {
        setCount(0);
        countChanges(-count);
    };

    useEffect(function resetAllCounters() {
        if (isReset) {
            setCount(0);
            changeReset();
        }
    });

    return (
        <div>
            {counterName}
            <button onClick={countChangeMinusHandler}> -</button>
            {count}
            <button onClick={countChangePlusHandler}> +</button>
            <button className='gray' onClick={resetCounter}> Reset {counterName} </button>
            <button className='gray' onClick={countChangePlusHandler}> Delete</button>
            <hr/>
        </div>
    );
}

export default Counter;