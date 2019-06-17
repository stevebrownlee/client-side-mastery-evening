import React from 'react';
import './App.scss';

const goats = [
  {name: 'Billy the Kid', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg'},
  {name: 'Wooly', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg'},
  {name: 'Vincent van Goat', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg'},
];

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
        <h1>GOAT YOGA</h1>
        <button class="btn btn-danger">hi</button>
      </div>
    );
  }
}

export default App;