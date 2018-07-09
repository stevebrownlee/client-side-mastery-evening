import React from 'react';
// import { Link } from 'react-router-dom';
import moment from 'moment';

import orderRequests from '../../firebaseRequests/orders';
import fishRequests from '../../firebaseRequests/fishes';

import formatPrice from '../../helpers';

import './SingleOrder.css';

class SingleOrder extends React.Component {
  state = {
    order: {
      uid: '',
      dateTime: 1234,
      fishes: {},
    },
    fishes: [],
  };
  componentDidMount () {
    const firebaseId = this.props.match.params.id;
    orderRequests
      .getSingleRequest(firebaseId)
      .then(order => {
        this.setState({ order });
        fishRequests
          .getRequest()
          .then(fishes => {
            this.setState({ fishes });
          });
      })
      .catch(err => {
        console.error('error with get single request', err);
      });
  }

  modifyOrder (id) {
    const modifiedOrder = { ...this.state.order };
    delete modifiedOrder.fishes[id];
    this.setState({ order: modifiedOrder});
  }

  deleteOrderClick (firebaseId) {
    orderRequests
      .deleteRequest(firebaseId)
      .then(() => {
        this.props.history.push('/orders');
      })
      .catch(err => {
        console.error('error with get delete request', err);
      });
  }

  updateOrderClick (firebaseId) {
    console.error('order to update', firebaseId);
  }

  render () {
    const {order} = this.state;
    const orderNumber = this.props.match.params.id;
    const fishComponents = Object.keys(order.fishes).map((o) => {
      const purchasedFish = this.state.fishes.find((x) => { return x.id === o; });
      const xClickFunction = () => {
        this.modifyOrder(o);
      };
      if (purchasedFish) {
        return (
          <li key={o} className="text-left">
            <div className="col-xs-2 count">
              {order.fishes[o]} lbs
            </div>
            <div className="col-xs-5">
              {purchasedFish.name}
            </div>
            <div className="col-xs-3">
              {formatPrice(order.fishes[o] * purchasedFish.price)}
            </div>
            <div className="col-xs-2">
              <button
                className="btn btn-default"
                onClick={xClickFunction}
              >
                &times;
              </button>
            </div>
          </li>
        );
      }
      return ('');
    });

    const deleteOrder = () => {
      const firebaseId = this.props.match.params.id;
      this.deleteOrderClick(firebaseId);
    };

    const updateOrder = () => {
      const firebaseId = this.props.match.params.id;
      this.updateOrderClick(firebaseId);
    };

    return (
      <div className="SingleOrder col-xs-12 text-center">
        <h2>Order Number: {orderNumber}</h2>
        <h4>Order Date: {moment(order.dateTime).format('LLL')}</h4>
        <div className="row fishes">
          <div className="col-xs-8 col-xs-offset-2">
            <ul>
              {fishComponents}
            </ul>
          </div>
        </div>
        <div>
          <div className="col-xs-6">
            <button
              className="col-xs-12 btn btn-default"
              onClick={updateOrder}
            >Update Order</button>
          </div>
          <div className="col-xs-6">
            <button
              className="col-xs-12 btn btn-danger"
              onClick={deleteOrder}
            >Delete Order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleOrder;
