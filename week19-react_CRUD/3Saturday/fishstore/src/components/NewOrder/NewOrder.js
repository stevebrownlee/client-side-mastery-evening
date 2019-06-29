import React from 'react';
import PropTypes from 'prop-types';

import formatPrice from '../../helpers/format';

import './NewOrder.scss';

class NewOrder extends React.Component {
  static propTypes = {
    fishes: PropTypes.array,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
    saveNewOrder: PropTypes.func,
  }

  saveOrder = () => {
    this.props.saveNewOrder();
  }

  renderOrder = (key) => {
    const fish = this.props.fishes.find(x => x.id === key);
    const count = this.props.order[key];
    const xClickFunction = () => {
      this.props.removeFromOrder(key);
    };

    if (!fish) return null;
    return (
      <li key={key} className="text-left">
        <div className="col-2 count">
          {count} lbs
        </div>
        <div className="col-5">
          {fish.name}
        </div>
        <div className="col-3">
          {formatPrice.formatPrice(fish.price)}
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark"
            onClick={xClickFunction}
          >
            X
          </button>
        </div>
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const orderExists = Object.keys(this.props.order).length > 0;
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
      <div className="NewOrder">
        <h2>New Order</h2>
        <ul>{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice.formatPrice(total)}</strong>
        </div>
        <div className="text-center">
          {
            orderExists ? (
              <button
                className="btn btn-outline-dark"
                onClick={this.saveOrder}
              >
                Save Order
              </button>
            ) : (
              <div>Add Inventory to your order </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default NewOrder;
