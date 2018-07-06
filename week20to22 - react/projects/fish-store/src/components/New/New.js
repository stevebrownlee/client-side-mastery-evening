import React from 'react';

import fishRequests from '../../firebaseRequests/fishes';

import Fish from '../Fish/Fish';
import Order from '../Order/Order';

class New extends React.Component {
  state = {
    fishes: [],
    order: {},
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
      return <Fish key={fish.id} index={fish.id} details={fish} />;
    });
    return (
      <div className="New">
        <div className="menu">
          <h2>Inventory</h2>
          <ul className="fishes">{fishComponents}</ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
      </div>
    );
  }
}

export default New;
