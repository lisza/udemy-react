// Functional component

// Ways of creating functions
// normal way  function person() {}
// ES5         var person = function() {}
// ES6 normal  const person = function() {}
// ES6 arrow   const person = () => {}
// arrow functions scope 'this' differently

// props is an argument to our component function that holds all attributes
// given to the <Person name="Lisa" age="36"/> component when used.
// Use props to get access to information passed from outside the component.

// props.children is available to us automatically.
// It refers to the content between the opening and closing tags of
// of the component <Person>Some text that will be props.children</Person>
// where used in the parent component (in 'App' in this case).

import React, { Component } from 'react';
// No need to import { Component } since this is a functional component
// that doesn't use "extend React.Component"
// import Radium from 'radium';
import styles from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }
  // const style = {
  //   // Use radium to write media queries inline
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  // Generate a fake error to try out error ErrorBoundary component
  // const random = Math.random();
  // if (random > 0.7) {
  //   throw new Error('A Fake Error to test erroring!')
  // }
  render() {
    console.log('[Person.js] Inside render()');

    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
