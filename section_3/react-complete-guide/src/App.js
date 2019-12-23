import React, { useState } from 'react';
import './App.css';
// Can omit the js in Person
import Person from './Person/Person';

const app = props => {
  // useState returns two items (current state and function that allows us to update it)
  const [ personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 45 },
        { name: 'Stephanie', age: 22 }
      ]
    });

  const [otherState, setOtherState] = useState('');
  
  const switchNameHandler = () => {
    // console.log('Was Clicked!');
    // Don't do this:
    // this.state.persons[0].name = 'Maximilian'

    // This will override otherState, need to set otherState now
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 60 },
        { name: 'Stephanie', age: 78 }
      ],
    });
    setOtherState('Some other value')
  }

  return (
    // Can't use class because it is a js keyword, instead use className
    // In the end, it gets translated into class
    // Typically, you want to wrap everything into one element
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={ switchNameHandler }>Switch Name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>My Hobbies: Racing</Person>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }/>
      <p>{ otherState }</p>
    </div>
  );

  // This is the same equivalent to the one above
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))

}

export default app;