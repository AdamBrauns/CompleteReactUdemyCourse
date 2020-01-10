import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  // acts as componentDidUpdate
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    const timer = setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  // this will run whenever props.persons change. [] runs only the first time
  //}, [props.persons]);
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    };
  });

  // useEffect can be run more than once
  // useEffect();

    const assignedClasses = [];
    let btnClass = ''
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;