import React, { Component } from 'react';
import T from 'prop-types';
import * as R from 'ramda';
import { Container, Row, Col } from 'reactstrap';

import { collapseMenuScreenWidth } from './config';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    const { innerWidth } = window;

    this.state = {
      menuCollapsed: innerWidth <= collapseMenuScreenWidth,
      currentWidth: innerWidth,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { children } = this.props;
    const { children: nextChildren } = nextProps;
    const { menuCollapsed } = this.state;
    const { menuCollapsed: nextMenuCollapsed } = nextState;

    return menuCollapsed !== nextMenuCollapsed || !R.equals(children, nextChildren);
  }

  // !!! menu collapsing logic should be moved to a menu component with using callback
  //============================================================================================

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = ({ target: { innerWidth } }) => {
    const { currentWidth } = this.state;
    const stateUpdates = { currentWidth: innerWidth };

    if (currentWidth > collapseMenuScreenWidth && innerWidth <= collapseMenuScreenWidth) {
      Object.assign(stateUpdates, { menuCollapsed: true });
    }

    if (currentWidth <= collapseMenuScreenWidth && innerWidth > collapseMenuScreenWidth) {
      Object.assign(stateUpdates, { menuCollapsed: false });
    }

    this.setState(stateUpdates);
  };

  //============================================================================================

  render() {
    const {
      props: { children },
      state: { menuCollapsed },
    } = this;

    console.log('menuCollapsed ', menuCollapsed);

    return (
      <Container>
        <Row>
          <Col>


          </Col>
          <Col>
            {children}
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