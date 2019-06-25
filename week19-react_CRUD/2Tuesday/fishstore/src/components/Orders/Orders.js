import React from 'react';
import moment from 'moment';
import firebase from 'firebase/app';
import 'firebase/auth';

import orderData from '../../helpers/data/orderData';

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

  render() {
    const orderComponents = this.state.orders.map((order) => {
      const numFish = Object.values(order.fishes).reduce((a, b) => a + b);
      return (
        <tr key={order.id}>
          <th scope="row">{order.id}</th>
          <td>{moment(order.dateTime).format('LLL')}</td>
          <td>{numFish}</td>
          <td><button className="btn btn-danger">X</button></td>
        </tr>
      );
    });

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
