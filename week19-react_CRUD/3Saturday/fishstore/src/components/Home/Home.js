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
    orderEditing: {},
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

  makeNew = (orderName) => {
    const { order } = this.state;
    const newOrder = { fishes: { ...order }, name: orderName };
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

  updateExisting = (orderName) => {
    const existing = { ...this.state.orderEditing };
    const updateId = existing.id;
    existing.name = orderName;
    existing.fishes = this.state.order;
    delete existing.id;
    orderRequests
      .putRequest(updateId, existing)
      .then(() => {
        this.setState({ order: {}, orderEditing: {} });
        this.getOrders();
      })
      .catch((err) => {
        console.error('error in order post', err);
      });
  }

  saveNewOrder = (orderName) => {
    if (Object.keys(this.state.orderEditing).length > 0) {
      this.updateExisting(orderName);
    } else {
      this.makeNew(orderName);
    }
  }

  selectOrderToEdit = (orderId) => {
    const selectedOrder = this.state.allOrders.find(x => x.id === orderId);
    this.setState({ orderEditing: selectedOrder, order: selectedOrder.fishes });
  }

  render() {
    const {
      order,
      fishes,
      allOrders,
      orderEditing,
    } = this.state;
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
            <NewOrder
              fishes={fishes}
              order={order}
              removeFromOrder={this.removeFromOrder}
              saveNewOrder={this.saveNewOrder}
              orderEditing={orderEditing}
            />
          </div>
          <div className="col">
            <Orders orders={allOrders} deleteOrder={this.deleteOrder} selectOrderToEdit={this.selectOrderToEdit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
