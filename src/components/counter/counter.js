import React from "react";
import './counter.css';

function Counter(props) {

    return (
        <div>
            {props.name}
            <button onClick={() => props.decrement(props.id)}> -</button>
            {props.count}
            <button onClick={() => props.increment(props.id)}> +</button>
            <button className='gray' onClick={() => props.reset(props.id)}> Reset {props.name} </button>
            <button className='gray' onClick={() => props.remove(props.id)}> Delete</button>
            <hr/>
        </div>
    );
}

export default Counter;