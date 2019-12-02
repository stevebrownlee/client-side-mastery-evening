import React from 'react';

import goatData from '../helpers/data/goatData';

import GoatCoral from '../components/GoatCoral/GoatCoral';
import './App.scss';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeAGoat = (goatId) => {
    goatData.freeGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;
    return (
      <div className="App">
        <h1>GOAT YOGA</h1>
        <GoatCoral goats={goats} freeAGoat={this.freeAGoat}/>
      </div>
    );
  }
}

export default App;
