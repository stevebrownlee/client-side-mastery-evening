import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  };

  state = {
    isOpen: false,
  };

  render() {
    const { isAuthenticated, logoutClickEvent } = this.props;
    return (
      <div className="my-navbar col">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Zillone</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                { isAuthenticated ? <NavLink onClick={logoutClickEvent}>Logout</NavLink> : '' }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
