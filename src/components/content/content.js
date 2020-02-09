import React from "react";

import './content.css';
function clickButtonHandler(value) {
    console.log('Clicked!' + value)
}

function inputHandler(e) {
    //let name = e.target.value;
    console.log(e.target.value)
}

function Content() {
    return (
        <main>
            <div className="container">
                <h1>First App</h1>
                <input type='text' onChange={inputHandler}/>
                <button onClick={() => clickButtonHandler(1)}>Add one</button>
                <button onClick={() => clickButtonHandler(2)}>Add two</button>
            </div>
        </main>
    );
}

export default Content;
