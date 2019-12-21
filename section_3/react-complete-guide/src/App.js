import React, { Component } from 'react';
import './App.css';
// Can omit the js in Person
import Person from './Person/Person';

class App extends Component {
  // You can only use this in component that extends Component
  // State will re-render the DOM
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 28 },
      { name: 'Stephanie', age: 22 }
    ]
  }

  render() {
    return (
      // Can't use class because it is a js keyword, instead use className
      // In the end, it gets translated into class
      // Typically, you want to wrap everything into one element
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // This is the same equivalent to the one above
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
