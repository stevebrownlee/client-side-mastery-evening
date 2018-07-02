// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// // import StorePicker from './StorePicker';
// import App from './app/App';
// import Auth from './auth/Auth';
// import NotFound from './components/NotFound/NotFound';

// const Router = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path='/' component={App} />
//       <Route path='/inventory' component={App} />
//       <Route path='/order/:orderId' component={App} />
//       <Route path='/login' component={Auth} />
//       <Route path='/register' component={Auth} />
//       <Route component={NotFound} />
//     </Switch>
//   </BrowserRouter>
// );

// export default Router;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Auth from './components/Auth/Auth';
import App from './components/App/App';
import Navbar from './components/Navbar/Navbar';

const FishStore = () => (
  <Router>
    <div>
      <Navbar />
      <Route path='/login' component={Auth} status='login'/>
      <Route path='/register' component={Auth} status='register'/>
      <PrivateRoute path='/protected' component={App} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate (cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout (cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
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

const Protected = () => <h3>Protected</h3>;

export default FishStore;
