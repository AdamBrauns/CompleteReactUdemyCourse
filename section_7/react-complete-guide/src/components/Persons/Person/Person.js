import React, { Component, Fragment } from 'react';
import PropType from 'prop-types';

import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
};

Person.PropType = {
  click: PropType.func,
  name: PropType.string,
  age: PropType.number,
  changed: PropType.func
};

export default withClass(Person, classes.Person);
