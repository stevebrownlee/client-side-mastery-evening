import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';

import Auth from './components/Auth/Auth';
import App from './components/App/App';
import Navbar from './components/Navbar/Navbar';

import authRequests from './firebaseRequests/auth';
import fbConection from './firebaseRequests/connection';
fbConection();

const FishStore = () => (
  <Router>
    <div>
      <Navbar />
      <Route path="/login" component={Auth} status="login" />
      <Route path="/register" component={Auth} status="register" />
      <Route path="/logout" render={Logout} status="register" />
      <PrivateRoute path="/inventory" component={App} />
    </div>
  </Router>
);

const Logout = () => {
  firebase.auth().signOut();
  return (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  );
};

const isAuthenticated = authRequests.isAuthenticated();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default FishStore;
