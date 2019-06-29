import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './OrderRow.scss';

class OrderRow extends React.Component {
  static propTypes = {
    deleteOrder: PropTypes.func.isRequired,
    order: PropTypes.shape({
      dateTime: PropTypes.number,
      fishes: PropTypes.object,
      uid: PropTypes.string,
    }),
  }

  deleteOrderEvent = (e) => {
    const { deleteOrder, order } = this.props;
    e.preventDefault();
    deleteOrder(order.id);
  };

  render() {
    const { order } = this.props;
    const numFish = Object.values(order.fishes).reduce((a, b) => a + b);
    return (
      <tr className="OrderRow">
        <th scope="row">{order.id}</th>
        <td>{moment(order.dateTime).format('LLL')}</td>
        <td>{numFish}</td>
        <td><button className="btn btn-danger" onClick={this.deleteOrderEvent}>X</button></td>
      </tr>
    );
  }
}

export default OrderRow;
