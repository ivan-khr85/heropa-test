import React from 'react';
import T from 'prop-types';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCogs, faFilter } from '@fortawesome/free-solid-svg-icons';

import { renderHeader, renderData } from './utils';
import './index.scss';
import colors from '../../const/colors';
import { iconSize } from './const';
import { Filter } from './components';

const TableComponent = ({ columns, data }) => (
  <div className="table-component">
    <div className="filter">
      <Button className="button-filter">
        <FontAwesomeIcon size={iconSize} icon={faBars} color={colors.table.inactiveIcon} />
      </Button>
      <Button className="button-filter">
        <FontAwesomeIcon size={iconSize} icon={faCogs} color={colors.table.inactiveIcon} />
      </Button>
      <Button className="button-filter">
        <FontAwesomeIcon size={iconSize} icon={faFilter} color={colors.table.inactiveIcon} />
      </Button>
      <Filter columns={columns} data={data} />
    </div>
    <Table responsive>
      <thead>
        <tr>{renderHeader(columns)}</tr>
      </thead>
      <tbody>{renderData(data, columns)}</tbody>
    </Table>
  </div>
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
