// Functional component that receives props
import React, { Component } from 'react';
import Person from './Person/Person';

// Use one-line arrow function with implicit return,
// use parentheses to make it a multi-liner
class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // Returns true by default, and will stop the update process and keep
  // React from rendering the component.
  // Can be used for performance improvements with a check for if certain
  // relevant props changed, so that a component doens't update for
  // every single prop change always if that change doesn't need a re-render.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate');
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render()');

    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        key={`person-${index}`}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, index)}
      />
    });
  }
}

export default Persons;
