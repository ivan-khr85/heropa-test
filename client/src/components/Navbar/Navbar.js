import React, { Component } from 'react';
import T from 'prop-types';

import './navbar.scss';

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h3>Navbar component</h3>
    );
  }
}

NavbarComponent.propTypes = {
  menuCollapsed: T.bool.isRequired,
  toggleMenu: T.func.isRequired,

};


export default NavbarComponent;


