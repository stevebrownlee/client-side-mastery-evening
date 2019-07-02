import React from 'react';
import firebase from 'firebase/app';

import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import NewScat from '../components/NewScat/NewScat';
import EditScat from '../components/EditScat/EditScat';
import SingleScat from '../components/SingleScat/SingleScat';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} />
            <div className='container'>
              <div className='row'>
                <Switch>
                  <PrivateRoute path='/home' component={Home} authed={this.state.authed} />
                  <PrivateRoute path='/new' component={NewScat} authed={this.state.authed} />
                  <PrivateRoute path='/edit/:id' component={EditScat} authed={this.state.authed} />
                  <PrivateRoute path='/scat/:id' component={SingleScat} authed={this.state.authed} />
                  <PublicRoute path='/auth' component={Auth} authed={this.state.authed} />
                  <Redirect from="*" to="/home"/>
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
