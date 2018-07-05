/* eslint no-restricted-globals: ["error", "history"] */

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import authRequests from '../../firebaseRequests/auth';
import './Navbar.css';

class Auth extends React.Component {
  render () {
    const { authed, runAway } = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      runAway();
    };

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              Fish Store
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {authed ? (
            <Nav pullRight>
              <NavItem componentClass="span">
                <Link to="/inventory">Inventory Page</Link>
              </NavItem>
              <NavItem componentClass="span">
                <button
                  style={{ border: 'none', background: 'transparent' }}
                  onClick={logoutClickEvent}
                  className="navbar-brand"
                >
                  Logout
                </button>
              </NavItem>

            </Nav>
          ) : (
            <Nav pullRight>
              <NavItem componentClass="span">
                <Link to="/login">Login Page</Link>
              </NavItem>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Auth;
