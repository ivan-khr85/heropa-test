import React, { Component } from 'react';
import T from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

class AppLayout extends Component {
  constructor(props) {
    super(props);
  }


  render() {

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
