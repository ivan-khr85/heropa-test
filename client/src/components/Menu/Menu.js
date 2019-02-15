import React, { Component } from 'react';
import T from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import { UserSection } from './components';
import './menu.scss';



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
        <UserSection userName="Firstname Lastname" collapsed={collapsed} />


      </Col>
    );
  }
}

Menu.propTypes = {
  collapsed: T.bool.isRequired,

};

export default Menu;
