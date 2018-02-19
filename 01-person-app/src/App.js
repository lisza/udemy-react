import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // setState's changes get merged into state by React, so we can
    // selectively set only the property we want to change without
    // worrying about the rest.
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // style is a normal js variable/ object.
    // These styles are scoped to only this component.
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid skyblue',
      padding: '8px',
      cursor: 'pointer'
    };

    // Outsource the check for showPersons outside the return()
    // to keep our code with conditional statements cleaner.
    // We can define what persons returns here in regular js,
    // then just subsitute persons down in the return.
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              key={`person-${index}`}
              name={person.name}
              age={person.age} />
          }) }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

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
