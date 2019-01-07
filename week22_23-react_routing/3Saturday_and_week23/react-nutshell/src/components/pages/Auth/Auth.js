import React from 'react';
import authRequests from '../../../helpers/data/authRequests';
import userRequests from '../../../helpers/data/userRequests';
import './Auth.scss';

import googleButton from './images/googlebutton.png';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then((user) => {
      const newUser = {
        uid: user.user.uid,
        userName: user.user.displayName,
        photo: user.user.photoURL,
      };
      userRequests.getUserByUid(newUser.uid).then((fbUser) => {
        if (!fbUser) {
          userRequests.createUser(newUser).then(() => {
            this.props.history.push('/home');
          });
        }
        this.props.history.push('/home');
      });
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>
          <img src={googleButton} alt="google login button"/>
        </button>
      </div>
    );
  }
}

export default Auth;
