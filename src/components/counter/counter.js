import React from "react";
import './counter.css';
import DeleteConfirmationModal from "../delete-confirmation-modal";

function Counter(props) {

    return (
        <div className='card mb-2'>
            <div className='card-body'>
                <div className='row align-items-center'>
                    <div className='col-'>
                        {props.name}
                    </div>
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