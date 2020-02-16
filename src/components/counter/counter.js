import React, { useState } from "react";
import './counter.css';

function Counter({countChanges}) {
    const [count, setCount] = useState(0);

    const countChangePlusHandler = () => {
        setCount(count + 1);
        countChanges(1);
    };

    const countChangeMinusHandler = () => {
        setCount(count - 1);
        countChanges(-1);
    };

    return (
        <div>
            <button onClick={countChangeMinusHandler}> - </button>
            {count}
            <button onClick={countChangePlusHandler}> + </button>
        </div>
    );
}

export default Counter;