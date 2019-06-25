import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import orderData from '../../helpers/data/orderData';

import OrderRow from '../OrderRow/OrderRow';

import './Orders.scss';

class Orders extends React.Component {
  state = {
    orders: [],
  };

  getOrders = () => {
    orderData.getRequest(firebase.auth().currentUser.uid)
      .then((orders) => {
        // sorts by number most recent first
        const newOrders = orders.sort((a, b) => b.dateTime - a.dateTime);
        this.setState({ orders: newOrders });
      })
      .catch(err => console.error('error with get request', err));
  }

  componentDidMount() {
    this.getOrders();
  }

  deleteOrder = (orderId) => {
    orderData.deleteRequest(orderId)
      .then(() => this.getOrders())
      .catch(err => console.error('error with delete request', err));
  }

  render() {
    const orderComponents = this.state.orders.map(order => (
      <OrderRow key={order.id} order={order} deleteOrder={this.deleteOrder}/>
    ));

    return (
      <div className="Orders col-xs-12 text-center">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order #</th>
              <th scope="col">Date</th>
              <th scope="col"># Fish</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orderComponents}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
