import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';
import Validation from './Validation/Validation';
import Char from './Validation/Char';

class App extends Component {
  state = {
    username: "Lisza",
    userText: "",
    textLength: 0
  }

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  changeInputHandler = (event) => {
    this.setState({
      userText: event.target.value,
      textLength: event.target.value.length
    });
  }

  removeCharHandler = (charIndex) => {
    const text = this.state.userText.split('');
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({ userText: updatedText });
  }

  render() {
    const charList = this.state.userText.split('')
      .map((char, index) => {
        return <Char
          key={`char-${index}`}
          letter={char}
          remove={this.removeCharHandler.bind(this, index)}
          />
      })

    return (
      <div className="App">
        <div>
          <input
            type="text"
            onChange={this.changeInputHandler}
            value={this.state.userText}
          />
          <p>{this.state.userText}</p>

          <Validation textLength={this.state.userText.length} />

          { charList }
        </div>

        <UserInput
          change={this.changeUsernameHandler}
          username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
