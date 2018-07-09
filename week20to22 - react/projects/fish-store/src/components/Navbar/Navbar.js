/* eslint no-restricted-globals: ["error", "history"] */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';
import './Navbar.css';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
    runAway: PropTypes.func,
  }

  render () {
    const { authed, runAway } = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      runAway();
    };

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">
              Fish Store
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            {authed ? (
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li className="navbar-form">
                  <button
                    onClick={logoutClickEvent}
                    className="btn btn-danger"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/login">Login Page</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
