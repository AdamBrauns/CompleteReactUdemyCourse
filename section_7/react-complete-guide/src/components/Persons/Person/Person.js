import React, { Component, Fragment } from 'react';
import PropType from 'prop-types';

import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
};

Person.prototype = {
  click: PropType.func,
  name: PropType.string,
  age: PropType.number,
  changed: PropType.func
};

export default withClass(Person, classes.Person);
