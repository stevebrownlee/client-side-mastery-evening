import React from 'react';
import { Link } from 'react-router-dom';

class Orders extends React.Component {
  render () {
    return (
      <div className="Orders">
        <h2>ORDERS</h2>
        <button><Link to="/new">New Order</Link></button>
      </div>
    );
  }
}

export default Orders;
