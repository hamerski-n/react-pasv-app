import React from "react";
import './counter-total.css';

function CounterTotal({totalCount, setTotalCount, resetTotalCount}) {

    const resetAllCounters = () => {
        setTotalCount(0);
        resetTotalCount(true);
    };

    return (
        <div>
            Total count: {totalCount}
            <button className='gray' onClick={resetAllCounters}> Reset total count</button>
        </div>
    );
}

export default CounterTotal;