import React from 'react';
// import T from 'prop-types';
import { Table } from 'reactstrap';

import { columns, data } from './data';
import { renderHeader, renderData } from './utils';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>{renderHeader(columns)}</tr>
        </thead>
        <tbody>{renderData(data, columns)}</tbody>
      </Table>
    );
  }
}

TableComponent.propTypes = {};

TableComponent.defaultProps = {};

export default TableComponent;
