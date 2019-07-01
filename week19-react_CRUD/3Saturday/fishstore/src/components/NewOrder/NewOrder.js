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

  state= {
    orderName: '',
  }

  saveOrder = () => {
    this.props.saveNewOrder(this.state.orderName);
    this.setState({ orderName: '' });
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

  nameChange = (e) => {
    // const orderName = this.state.orderName;
    const orderName = e.target.value;
    this.setState({ orderName });
  };

  render() {
    const { orderName } = this.state;
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
        <form className='col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="order-name">Order Name:</label>
            <input
              type="text"
              className="form-control"
              id="order-name"
              placeholder="John's Order"
              value={orderName}
              onChange={this.nameChange}
            />
          </div>
        </form>
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
