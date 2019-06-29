import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';
import Inventory from '../Inventory/Inventory';

import fishData from '../../helpers/data/fishData';
import orderRequests from '../../helpers/data/orderData';

import './Home.scss';

class Home extends React.Component {
  state= {
    fishes: [],
    order: {},
    allOrders: [],
  }

  getOrders = () => {
    orderRequests.getRequest(firebase.auth().currentUser.uid)
      .then((orders) => {
        // sorts by number most recent first
        const newOrders = orders.sort((a, b) => b.dateTime - a.dateTime);
        this.setState({ allOrders: newOrders });
      })
      .catch(err => console.error('error with get request', err));
  }

  componentDidMount() {
    fishData
      .getRequest()
      .then((fishes) => {
        this.getOrders();
        this.setState({ fishes });
      })
      .catch(err => console.error('error with get request', err));
  }

  deleteOrder = (orderId) => {
    orderRequests.deleteRequest(orderId)
      .then(() => this.getOrders())
      .catch(err => console.error('error with delete request', err));
  }

  addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
    // console.error('you clicked ADD TO ORDER', key);
  };

  removeFromOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove that item from order
    delete order[key];
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  saveNewOrder = () => {
    const newOrder = { fishes: { ...this.state.order } };
    newOrder.dateTime = Date.now();
    newOrder.uid = firebase.auth().currentUser.uid;
    orderRequests
      .postRequest(newOrder)
      .then(() => {
        this.setState({ order: {} });
        this.getOrders();
      })
      .catch((err) => {
        console.error('error in order post', err);
      });
  }

  render() {
    const { order, fishes, allOrders } = this.state;
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <Inventory fishes={fishes} addToOrder={this.addToOrder}/>
          </div>
          <div className="col">
            <div className="menu">
              <header className="top">
                <h1>
                  Catch
                  <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                  </span>
                  Day
                </h1>
                <h3 className="tagline">
                  <span>Fresh Seafood Market</span>
                </h3>
              </header>
            </div>
            <NewOrder fishes={fishes} order={order} removeFromOrder={this.removeFromOrder} saveNewOrder={this.saveNewOrder}/>
          </div>
          <div className="col">
            <Orders orders={allOrders} deleteOrder={this.deleteOrder}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
