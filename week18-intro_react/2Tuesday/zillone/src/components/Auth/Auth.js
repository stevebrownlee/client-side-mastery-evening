import React from 'react';
import authRequests from '../../helpers/data/auth';
import googleImage from './google.png';
import './Auth.scss';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests
      .authenticate()
      .then(() => {
        this.props.isAuthenticated();
      })
      .catch(error => console.error('there was an error in login', error));
  };

  render() {
    return (
      <div className="col-xs-8 col-xs-offset-2">
        <button className="btn btn-secondary" onClick={this.authenticateUser}>
          <img src={ googleImage } alt="google button" />
        </button>
      </div>
    );
  }
}

export default Auth;
