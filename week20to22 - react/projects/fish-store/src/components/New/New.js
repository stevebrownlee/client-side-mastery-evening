import React from 'react';

import fishRequests from '../../firebaseRequests/fishes';

import Fish from '../Fish/Fish';
import Order from '../Order/Order';

import './New.css';

class New extends React.Component {
  state = {
    fishes: [],
    order: {},
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  componentDidMount () {
    fishRequests
      .getRequest()
      .then(fishes => {
        this.setState({ fishes });
      })
      .catch(err => {
        console.error('error with get request', err);
      });
  }

  render () {
    const fishComponents = this.state.fishes.map(fish => {
      return (
        <Fish
          key={fish.id}
          index={fish.id}
          details={fish}
          addToOrder={this.addToOrder}
        />
      );
    });
    return (
      <div className="New">
        <div className="col-xs-8 inventory-container">
          <h2>Inventory</h2>
          <ul className="fishes">{fishComponents}</ul>
        </div>
        <Order
          className="col-xs-4"
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
      </div>
    );
  }
}

export default New;
