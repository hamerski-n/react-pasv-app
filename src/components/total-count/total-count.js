import React from "react";
import './total-count.css';

function TotalCount(props) {

    return (
        <div className='row align-items-center'>
            <div className='col-2 font-weight-bold'>
                Total count
            </div>
            <div >
                {props.counters.reduce((acc, cur) => acc + cur.count, 0)}
            </div>

            <div className='col-3'>
                <button className='btn btn-secondary' onClick={props.resetTotalCounter}> Reset total count</button>
            </div>
        </div>
    );
}

export default TotalCount;