import React, { Component } from 'react';
import T from 'prop-types';

import './menu.scss';

import { Container, Row, Col } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      props: { collapsed },
    } = this;

    return (
      <Col className={`app-menu-container ${collapsed ? 'app-menu-container-collapsed' : ''}`}>
        <h3>Menu component</h3>
      </Col>
    );
  }
}

Menu.propTypes = {
  collapsed: T.bool.isRequired,

};

export default Menu;
