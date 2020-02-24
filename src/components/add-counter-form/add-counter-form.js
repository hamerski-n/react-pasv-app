import React, {useState} from "react";
import './add-counter-form.css';

function AddCounterForm(props) {
    const [name, setName] = useState('');
    const [count, setCount] = useState('');

    const onSubmit = () => {
        props.onSubmit(name, Number(count));
        setName('');
        setCount('');
    };

    return (
        <div className='row'>
            <div className='col'>
                    <input className="input-group input-group-sm mb-3" type='text' placeholder='Name' value={name}
                           onChange={e => setName(e.target.value)}/>
            </div>
            <div className='col- align-content-center'>
                <input className="input-group input-group-sm mb-3" type='text' placeholder='Initial value' value={count}
                       onChange={e => setCount(e.target.value)}/>
            </div>
            <div className='col'>
                <button className='btn btn-primary' onClick={() => onSubmit(name, count)}> Add counter</button>
            </div>
        </div>
    );
}

export default AddCounterForm;