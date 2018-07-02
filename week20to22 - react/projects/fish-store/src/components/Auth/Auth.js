import React from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';

class Auth extends React.Component {
  render () {
    let authButton = '';
    let otherAction = '';
    if (this.props.location.pathname === '/login') {
      authButton = 'Login';
      otherAction = <Link to='/register'>Need to Register?</Link>;
    } else {
      authButton = 'Register';
      otherAction = <Link to='/login'>Need to Login?</Link>;
    }

    return (
      <div className="Auth">
        <div id="login-form">
          <h1 className="text-center">{authButton}</h1>
          <form className="form-horizontal col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10 text-center">
                {otherAction}
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default col-xs-12" id="signin-btn">{authButton}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
