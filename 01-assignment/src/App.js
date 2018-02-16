import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {
  state = {
    username: "Lisza"
  }
  
  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  }
  
  render() {
    return (
      <div className="App">
        <p><UserInput
          change={this.changeUsernameHandler}
          username={this.state.username}/></p>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
