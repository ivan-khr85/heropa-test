import React, { Component } from 'react';
import T from 'prop-types';
import { TableComponent } from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TableComponent />;
  }
}

Home.propTypes = {};

export default Home;
