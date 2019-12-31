import React from 'react';
import './Person.css';
import Radium from 'radium'

// Same as the filename
// For the js {} part, it needs to be one line expressions like function calls or calculations 
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>    
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(person);