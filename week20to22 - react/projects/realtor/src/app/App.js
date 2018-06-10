import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

class App extends Component {
  render () {
    const cowBell = {
      a: 1 + 2,
      b: 'cat',
    };

    // comment
    const moo = () => {
      const color = `<div class="red">${'hi'}</div`;
      if (color === 'red') {
        console.error('cow', cowBell);
      }
    };
    moo();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
