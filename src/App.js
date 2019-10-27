import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

  state = {
    username: 'Belinda Bos',
  }

  onInputChanged = (event) => {
    this.setState({
      username: event.target.value,
    })
    console.log(event.target.value,)
  }
 
  render() {
    return (
      <div className="App">
        <h1>Jolanda Keizer</h1>
        <UserInput 
        changed={this.onInputChanged}
        currentName={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
