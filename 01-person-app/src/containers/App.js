import React, { Component } from 'react';
// About CSS modules: https://github.com/css-modules/css-modules
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  // The constructor method is optional. When we don't have it,
  // React automatically provides us with props that we can access via
  // this.props. It supers the props for us in the background.
  // If we do use the constructor however, we overwrite this default
  // and we need to include the call
  // to super(props) to make the props available. Inside the constructor,
  // we can call just props, outside of it it's this.props.
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    // this.state = {}
    // Can initialize state inside constructor with this.state, but
    // but outside of it with just state = {} is fine as well (a newer
    // option in createReactApp (?))
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  App

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  // Good practice to call methods that are event handlers "Handler"
  // Using arrow functions here circumvents haing to .bind(this) because its
  // context is by default our component we're in.
  // To use regular function must bind: this.switchNameHandler.bind(this)
  deletePersonHandler = (personIndex) => {
      // Create a copy of yr persons array before manipulating it,
      // otherwise the original will be mutated since arrays are passed
      // by reference: Can use Array.slice(); without arguments to do that.
      // Or: persons = [...this.state.persons];
      // Or: Array.from(this.state.persons);
      const persons = this.state.persons.slice();
      persons.splice(personIndex, 1); // Removes element at that index
      this.setState({ persons: persons })
  }

  nameChangedHandler = (event, personIndex) => {
    // Same as above: don't mutate state, make a copy.
    // Alternative: Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    // Again, work with a copy of the state:
    const persons = [...this.state.persons];
    // Mutate the copy:
    persons[personIndex] = person;
    // setState property to the new array:
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // setState's changes get merged into state by React, so we can
    // selectively set only the property we want to change without
    // worrying about the rest.
    this.setState({ showPersons: !doesShow });
  }

  // render() is the only mandatory method
  render() {
    console.log('[App.js] Inside render()');

    // style is a normal js variable/ object.
    // These styles are scoped to only this component.
    // Also: no pseudo selectors, e.g. :hover, in inline styles.
    // We imported Radium to be able to use pseudo selectors in inline styles
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   // border: '1px solid skyblue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // };

    // Outsource the check for showPersons outside the return()
    // to keep our code with conditional statements cleaner.
    // We can define what persons returns here in regular js,
    // then just output the persons variable down in the return.
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    // Using CSS modules: styles.App refers to an automatically
    // generated App property on the imported styles object. That
    // property will in the end simply hold a value like App__App__ah5_1,
    // a generated class name string.
    return (
        <div className={styles.App}>
          <Cockpit
            appTitle={this.props.title}
            clicked={this.togglePersonsHandler}
            persons={this.state.persons}
            show={this.state.showPersons}
          />
          {persons}
        </div>
    );
    // Compiles to JavaScript and is equivalent to this:
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this work now?')
    // );
  }
}

export default App;
