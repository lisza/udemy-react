import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }
  
  // Good practice to call methods that are event handlers "Handler"
  // Using arrow functions here circumvents haing to .bind(this) because its
  // context is by default our component we're in.
  // To use regular function must bind: this.switchNameHandler.bind(this)
  switchNameHandler = (newName) => {
    // console.log(this);
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    // Use setState instead!
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  };
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  };
  
  render() {
    // Normal js variable/ object
    // These styles are scoped to only this component
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid skyblue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'MAXXX111')}>Switch Name</button>
        
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'MAXXX222')}
          changed={this.nameChangedHandler}
          >my Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    // Compiles to JavaScript and is equivalent to this:
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this work now?')
    // );
  }
}

export default App;