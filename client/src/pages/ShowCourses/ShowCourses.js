import React from 'react';

import { TableComponent } from '../../components';
import { data, columns } from './data';

const ShowCourses = () => (
  <TableComponent
    {...{
      data,
      columns,
    }}
  />
);

export default ShowCourses;
