import React, {useState} from "react";
import './counter.css';

function Counter(props) {

    const {counter, increment, decrement, remove, reset, editCounterName} = props;

    const [name, setName] = useState(counter.name);
    const [readOnly, setReadOnly] = useState(true);

    console.log('Counter beginning name' + name);

    const onEditing = (name) => {
        editCounterName(name, counter.id);
        setName(name);
    };

    const isEditable = () => {
        console.log('readOnlyIS' + readOnly);
        return setReadOnly(false)
    };

    console.log('readOnly' + readOnly);
    return (
        <div className='card mb-2'>
            <div className='card-body'>
                <div className='row align-items-center'>
                    <input className='col- border-0' value={counter.name} readOnly={readOnly}
                           onChange={e => onEditing(e.target.value)}/>

                    <div className='col-'>
                        <button className='btn btn-outline-secondary' onClick={() => decrement(counter.id)}> -
                        </button>
                    </div>
                    <div className='col-'>
                        {counter.count}
                    </div>
                    <div className='col-'>
                        <button className='btn btn-outline-secondary' onClick={() => increment(counter.id)}> +
                        </button>
                    </div>
                    <div className='col-'>
                        <button className='btn btn-secondary'
                                onClick={() => reset(counter.id)}> Reset {counter.name} </button>
                    </div>
                    <div className='col-'>
                        <button className='btn btn-secondary'
                                onClick={isEditable}
                        > Edit counter name
                        </button>
                    </div>
                    <div className='col-'>
                        <button className='btn btn-danger'
                                onClick={() => remove(counter)}
                        > Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Counter;