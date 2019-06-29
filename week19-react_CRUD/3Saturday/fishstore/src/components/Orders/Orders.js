import React from 'react';

import OrderRow from '../OrderRow/OrderRow';

import './Orders.scss';

class Orders extends React.Component {
  render() {
    const orderComponents = this.props.orders.map(order => (
      <OrderRow key={order.id} order={order} deleteOrder={this.props.deleteOrder}/>
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
