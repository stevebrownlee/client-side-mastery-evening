import React from 'react';

import fishData from '../../helpers/data/fishData';

import Fish from '../Fish/Fish';

import './Inventory.scss';

class Inventory extends React.Component {
  state = {
    fishes: [],
  };

  componentDidMount() {
    fishData
      .getRequest()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('error with get request', err));
  }

  render() {
    const fishComponents = this.state.fishes.map(fish => (
      <Fish
        key={fish.id}
        index={fish.id}
        details={fish}
      />
    ));

    return (
      <div className="Inventory col-xs-12">
        <h2>Inventory</h2>
        <ul className="fishes">
          {fishComponents}
        </ul>
      </div>
    );
  }
}

export default Inventory;
