import React from 'react';

import Inventory from '../Inventory/Inventory';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Inventory />
      </div>
    );
  }
}

export default Home;
