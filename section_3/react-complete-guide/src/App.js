import React, { Component } from 'react';
import './App.css';
// Can omit the js in Person
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // Can't use class because it is a js keyword, instead use className
      // In the end, it gets translated into class
      // Typically, you want to wrap everything into one element
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="38"/>
        <Person name="Stephanie" age="22"/>
      </div>
    );

    // This is the same equivalent to the one above
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
