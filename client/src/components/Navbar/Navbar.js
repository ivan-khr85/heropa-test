import React, { Component } from 'react';
import T from 'prop-types';

import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faBell, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

import './navbar.scss';

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(

        <Navbar className="app-navbar">
          <Nav className="ml-auto app-nav" navbar>
            <NavItem><FontAwesomeIcon icon={faGlobeAmericas} /></NavItem>
            <UncontrolledDropdown nav className="app-lang-selector">
              <DropdownToggle nav caret>
                English
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  English
                </DropdownItem>
                <DropdownItem>
                  French
                </DropdownItem>
                <DropdownItem>
                  Spanish
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem><FontAwesomeIcon icon={faBell} /></NavItem>
            <NavItem><FontAwesomeIcon icon={faSignOutAlt} /> Log out</NavItem>
          </Nav>
        </Navbar>
    );
  }
}

NavbarComponent.propTypes = {
  menuCollapsed: T.bool.isRequired,
  toggleMenu: T.func.isRequired,
};

export default NavbarComponent;
