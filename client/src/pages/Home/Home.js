import React from 'react';
// import T from 'prop-types';
import { TableComponent } from '../../components';

import { data, columns } from './data';

const Home = () => (
  <TableComponent
    {...{
      data,
      columns,
    }}
  />
);

Home.propTypes = {};

export default Home;
