import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. Take copy of existing state
    const fishes = {...this.state.fishes};  // uses spread operator to make copy of fishes
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set teh new fishes object to state
    this.setState({ fishes });

  };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"></Header>
        </div>
        <Order></Order>

        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
      </div>
    )
  }
}

export default App;