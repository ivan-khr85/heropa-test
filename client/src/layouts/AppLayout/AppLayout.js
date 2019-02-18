import React, { Component } from 'react';
import T from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import { collapseMenuScreenWidth } from './config';

import './appLayout.scss';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    const { innerWidth } = window;

    this.state = {
      menuCollapsed: innerWidth <= collapseMenuScreenWidth,
    };
  }

  toggleMenu = menuCollapsed => this.setState({ menuCollapsed });

  render() {
    const {
      props: { children },
      state: { menuCollapsed },
      toggleMenu,
    } = this;

    return (
      <Container fluid className="app-root-container">
        <Row className="app-root-layout">
          <Menu {...{ collapsed: menuCollapsed, collapseMenuScreenWidth, toggleMenu }} />
          <Col className={`app-layout-container ${menuCollapsed ? 'app-layout-container-collapsed' : ''}`}>
            <Row>
              <Navbar {...{ menuCollapsed, toggleMenu }} />
            </Row>

            <Row>
              {children}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

AppLayout.propTypes = {
  children: T.oneOfType([T.element, T.arrayOf(T.element)]).isRequired,
};

export default AppLayout;
