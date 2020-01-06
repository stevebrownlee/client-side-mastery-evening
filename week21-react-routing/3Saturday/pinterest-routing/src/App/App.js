import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConnection from '../helpers/data/connection';
import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import NewBoard from '../components/pages/NewBoard/NewBoard';
import SingleBoard from '../components/pages/SingleBoard/SingleBoard';

import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  // props contains Location, Match, and History
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  // props contains Location, Match, and History
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  };

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
        <Router>
            <Switch>
              <PrivateRoute path="/" exact component={Home} authed={authed} />
              <PublicRoute path="/auth" component={Auth} authed={authed} />
              <PrivateRoute path="/board/new" exact component={NewBoard} authed={authed} />
              <PrivateRoute path="/board/:boardId" exact component={SingleBoard} authed={authed} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
