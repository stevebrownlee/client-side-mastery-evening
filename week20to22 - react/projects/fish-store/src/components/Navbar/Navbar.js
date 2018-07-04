import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

import './Navbar.css';

class Auth extends React.Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Fish Store</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem componentClass='span'>
              <Link to='/login'>Login Page</Link>
            </NavItem>
            <NavItem componentClass='span'>
              <Link to='/inventory'>Inventory Page</Link>
            </NavItem>
            <NavItem componentClass='span'>
              <Link to='/logout'>Logout</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Auth;
