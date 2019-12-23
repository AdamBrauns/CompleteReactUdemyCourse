import React from 'react';

// Same as the filename
// For the js {} part, it needs to be one line expressions like function calls or calculations 
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>    
            <p>{props.children}</p>
        </div>
    )
}

export default person;