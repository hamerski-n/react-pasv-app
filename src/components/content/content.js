import React from "react";
import './content.css';

function Content({bc}) {
    let name = 'Initial';

    const clickButtonHandler = () => {
        bc(name);
        console.log('Clicked!' + name)
    };
    const inputHandler = (e) => {
        name = e.target.value;
        //console.log(e.target.value)
    };

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
