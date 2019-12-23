import React from 'react';
import './Person.css';

// Same as the filename
// For the js {} part, it needs to be one line expressions like function calls or calculations 
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>    
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;