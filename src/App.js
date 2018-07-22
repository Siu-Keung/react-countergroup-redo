import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from "./CounterGroup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterGroup  counterNum={3}/>
      </div>
    );
  }
}

export default App;
