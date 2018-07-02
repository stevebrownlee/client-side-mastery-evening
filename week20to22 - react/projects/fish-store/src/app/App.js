import React, { Component } from 'react';
import './App.css';

import fbConection from '../firebaseRequests/connection';
import fishRequests from '../firebaseRequests/fishes';

class App extends Component {
  state = {
    fishes: [],
  };

  componentDidMount () {
    fbConection();
    fishRequests.getRequest().then((fishes) => {
      this.setState({ fishes });
    }).catch((err) => {
      console.error('error with fishes get request', err);
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
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
