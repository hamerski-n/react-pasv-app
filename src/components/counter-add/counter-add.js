import React from "react";
import './counter-add.css';

function CounterAdd() {
    const counterAdded = () => {

    };

    return (
        <div>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Initial value'/>
            <button className='gray' onClick={counterAdded}> Add counter </button>
            <hr/>
        </div>
    );
}

export default CounterAdd;