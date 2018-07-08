import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import orderRequests from '../../firebaseRequests/orders';
import authRequests from '../../firebaseRequests/auth';

import './OrderSpa.css';

class OrderSpa extends React.Component {
  state = {
    orders: [],
  };
  componentDidMount () {
    orderRequests
      .getRequest(authRequests.getUid())
      .then(orders => {
        // sorts by number most recent first
        orders = orders.sort((a, b) => b.dateTime - a.dateTime);
        this.setState({ orders });
      })
      .catch(err => {
        console.error('error with get request', err);
      });
  }
  render () {
    const orderComponents = this.state.orders.map((order) => {
      return (
        <div key={order.id} className="text-left">
          <button
            className="col-xs-12 btn btn-default"
          >
            Order Date:{moment(order.dateTime).format('LLL')}
          </button>
        </div>
      );
    });

    return (
      <div className="OrderSpa col-xs-12 text-center">
        <h2>Orders</h2>
        <button className="new-button"><Link to="/new">New Order</Link></button>
        <ul>
          {orderComponents}
        </ul>
      </div>
    );
  }
}

export default OrderSpa;
