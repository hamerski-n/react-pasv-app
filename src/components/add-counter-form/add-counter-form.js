import React, {useState} from "react";
import './add-counter-form.css';

function AddCounterForm(props) {
    const [name, setName] = useState();
    const [count, setCount] = useState('');

    const onSubmit = () => {
        props.onSubmit(name, Number(count));
        setName('');
        setCount('');
    };

    return (
        <div>
            <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
            <input type='text' placeholder='Initial value' value={count} onChange={e => setCount(e.target.value)}/>
            <button className='gray' onClick={() => onSubmit(name, count)}> Add counter</button>
            <hr/>
        </div>
    );
}

export default AddCounterForm;