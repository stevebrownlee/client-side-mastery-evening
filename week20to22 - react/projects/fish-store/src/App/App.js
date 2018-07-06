import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';
import Orders from '../components/Orders/Orders';
import SingleOrder from '../components/SingleOrder/SingleOrder';
import Inventory from '../components/Inventory/Inventory';
import New from '../components/New/New';
import Navbar from '../components/Navbar/Navbar';

import fbConection from '../firebaseRequests/connection';
fbConection();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/orders" />
        )
      }
    />
  );
};

class App extends Component {
  state = {
    authed: false,
    loading: true,
  };

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
        });
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  runAway = () => {
    this.setState({
      authed: false,
      loading: false,
    });
  }

  render () {
    return this.state.loading === true ? (
      <h1>Loading</h1>
    ) : (
      <BrowserRouter>
        <div>
          <Navbar
            authed={this.state.authed}
            runAway={this.runAway}
          />
          <div className="container">
            <div className="row">
              <Switch>
                <Route path="/" exact component={Home} />
                <PublicRoute
                  authed={this.state.authed}
                  path="/login"
                  component={Login}
                  status="login"
                />
                <PublicRoute
                  authed={this.state.authed}
                  path="/register"
                  component={Register}
                  status="register"
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/orders"
                  component={Orders}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/order/:id"
                  component={SingleOrder}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/inventory"
                  component={Inventory}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/new"
                  component={New}
                />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
