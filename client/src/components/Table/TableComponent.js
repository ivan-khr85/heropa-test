import React from 'react';
import T from 'prop-types';
import { Table } from 'reactstrap';

import { renderHeader, renderData } from './utils';
import './index.scss';

const TableComponent = ({ columns, data }) => (
  <Table className="table-component">
    <thead>
      <tr>{renderHeader(columns)}</tr>
    </thead>
    <tbody>{renderData(data, columns)}</tbody>
  </Table>
);

TableComponent.propTypes = {
  columns: T.array,
  data: T.array,
};

TableComponent.defaultProps = {
  columns: [],
  data: [],
};

export default TableComponent;
