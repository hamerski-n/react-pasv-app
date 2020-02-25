import React, {useState} from "react";
import './counter.css';
import DeleteConfirmationModal from "../delete-confirmation-modal";

function Counter(props) {
    const [name, setName] = useState(props.name);
    const [readOnly, setReadOnly] = useState(true);

    console.log('Counter beginning name'+ name);

    const onEditing = (name) => {
        props.editCounterName(name, props.id);
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
                    <input className='col- border-0' value={props.name} readOnly={readOnly}
                           onChange={e => onEditing(e.target.value)}/>

                    <div className='col-'>
                        <button className='btn btn-outline-secondary' onClick={() => props.decrement(props.id)}> -
                        </button>
                    </div>
                    <div className='col-'>
                        {props.count}
                    </div>
                    <div className='col-'>
                        <button className='btn btn-outline-secondary' onClick={() => props.increment(props.id)}> +
                        </button>
                    </div>
                    <div className='col-'>
                        <button className='btn btn-secondary'
                                onClick={() => props.reset(props.id)}> Reset {props.name} </button>
                    </div>
                    <div className='col-'>
                        <button className='btn btn-secondary'
                                onClick={isEditable}> Edit counter name
                        </button>
                    </div>
                    <div className='col-'>
                        < DeleteConfirmationModal
                            remove={props.remove}
                            id={props.id}
                            name={props.name}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Counter;