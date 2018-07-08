import React from 'react';
import PropTypes from 'prop-types';

import formatPrice from '../../helpers';

import './Order.css';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.array,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  }
  renderOrder = key => {
    const fish = this.props.fishes.find(x => x.id === key);
    const count = this.props.order[key];
    // const isAvailable = fish && fish.status === 'available';
    // const transitionOptions = {
    //   classNames: 'order',
    //   key,
    //   timeout: { enter: 500, exit: 500 },
    // };
    // Make sure the fish is loaded before we continue!
    if (!fish) return null;

    // if (!isAvailable) {
    //   return (
    //     <li key={key}>
    //       Sorry {fish ? fish.name : 'fish'} is no longer available
    //     </li>
    //   );
    // }
    return (
      <li key={key}>
        <span>
          <span>{count}</span>
          lbs {fish.name}
          {formatPrice(count * fish.price)}
          <button onClick={() => this.props.removeFromOrder(key)}>
            &times;
          </button>
        </span>
      </li>
    );
  };
  render () {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes.find(x => x.id === key);
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="Order">
        <h2>Order</h2>
        {orderIds.map(this.renderOrder)}
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
