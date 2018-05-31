import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

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

  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"></Header>
        </div>
        <Order></Order>

        <Inventory addFish={this.addFish}></Inventory>
      </div>
    )
  }
}

export default App;