import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      joke: ""
    }
  }
  componentDidMount = () => {
    axios.get('https://icanhazdadjoke.com/', {
    headers: {
        Accept: 'application/json'
    }
  }).then(response => {
    console.log('response:', response.data.joke);
      this.setState ({
        joke: response.data.joke
      });      
    })
  }

  render() {
    console.log("Render this:", this.state.joke);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           {this.state.joke} 
        </p>
        <button onClick={this.componentDidMount}>New Joke</button>
      </div>
    );
  }
}

export default App;
