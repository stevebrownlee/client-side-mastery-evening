import React from 'react';
import {
  Route,
  BrowserRouter,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import MyNavbar from '../components/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import Friends from '../components/pages/Friends/Friends';
import Weather from '../components/pages/Weather/Weather';
import Articles from '../components/pages/Articles/Articles';
import Messages from '../components/pages/Messages/Messages';
import Events from '../components/pages/Events/Events';


import './App.scss';
import authRequests from '../helpers/data/authRequests';


const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true ? (<Component { ...props } />) : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }}/>));
  return (
    <Route {...rest} render={props => routeChecker(props)}/>
  );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false ? (<Component {...props} />) : (<Redirect to={{ pathname: '/home', state: { from: props.location } }}/>));
  return (
    <Route {...rest} render={props => routeChecker(props)}/>
  );
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }


  render() {
    const {
      authed,
    } = this.state;

    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
          <div className="appContainer">
            <div className="row">
              <Switch>
                <PrivateRoute path="/" exact component={Home}/>
                <PrivateRoute
                  path="/home"
                  authed={this.state.authed}
                  component={Home}
                />
                <PublicRoute
                  path="/auth"
                  authed={this.state.authed}
                  component={Auth}
                />
                <PrivateRoute
                  path="/friends"
                  authed={this.state.authed}
                  component={Friends}
                />
                <PrivateRoute
                  path="/articles"
                  authed={this.state.authed}
                  component={Articles}
                />
                <PrivateRoute
                  path="/weather"
                  authed={this.state.authed}
                  component={Weather}
                />
                <PrivateRoute
                  path="/events"
                  authed={this.state.authed}
                  component={Events}
                />
                <PrivateRoute
                  path="/messages"
                  authed={this.state.authed}
                  component={Messages}
                />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
