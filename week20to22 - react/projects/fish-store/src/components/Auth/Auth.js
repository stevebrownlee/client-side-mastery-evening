import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';

import './Auth.css';

class Auth extends React.Component {
  state = {
    authButton: null,
    otherAction: null,
    submitAction: null,
    user: {
      email: 'zoeames@gmail.com',
      password: '123456',
    },
  };

  loginClickEvent = (e) => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .loginUser(user)
      .then(() => {
        this.props.history.push('/inventory');
      })
      .catch(error => {
        console.error('there was an error in registering', error);
      });
  };

  registerClickEvent = e => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(user)
      .then(() => {
        this.props.history.push('/login');
      })
      .catch(error => {
        console.error('there was an error in registering', error);
      });
  };

  emailChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  };

  passwordChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  };

  componentDidMount () {
    if (this.props.location.pathname === '/login') {
      this.setState({
        authButton: 'Login',
        otherAction: <Link to="/register">Need to Register?</Link>,
        submitAction: this.loginClickEvent,
      });
    } else {
      this.setState({
        authButton: 'Register',
        otherAction: <Link to="/login">Need to Login?</Link>,
        submitAction: this.registerClickEvent,
      });
    }
  }

  render () {
    const { user } = this.state;
    return (
      <div className="Auth">
        <div id="login-form">
          <h1 className="text-center">{this.state.authButton}</h1>
          <form className="form-horizontal col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-2 control-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-2 control-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10 text-center">
                {this.state.otherAction}
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.state.submitAction}
                >
                  {this.state.authButton}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
