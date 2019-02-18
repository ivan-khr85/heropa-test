import React from 'react';
import T from 'prop-types';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCogs, faFilter } from '@fortawesome/free-solid-svg-icons';

import { renderHeader, renderData, filterData } from './utils';
import './index.scss';
import colors from '../../const/colors';
import { iconsSize } from './const';
import { Filter } from './components';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    const { data } = props;

    this.state = {
      filteredData: data,
    };
  }

  filterDataTable = (filters = {}) => () => {
    const { columns, data } = this.props;
    this.setState({ filteredData: filterData(data, filters, columns) });
  };

  render() {
    const {
      state: { filteredData },
      props: { data, columns },
      filterDataTable,
    } = this;

    return (
      <div className="table-component">
        <div className="filter">
          <Button className="button-filter">
            <FontAwesomeIcon size={iconsSize.addFilter} icon={faBars} color={colors.table.inactiveIcon} />
          </Button>
          <Button className="button-filter">
            <FontAwesomeIcon size={iconsSize.addFilter} icon={faCogs} color={colors.table.inactiveIcon} />
          </Button>
          <Button className="button-filter">
            <FontAwesomeIcon size={iconsSize.addFilter} icon={faFilter} color={colors.table.inactiveIcon} />
          </Button>
          <Filter columns={columns} data={data} filterDataTable={filterDataTable} />
        </div>
        <Table responsive>
          <thead>
            <tr>{renderHeader(columns)}</tr>
          </thead>
          <tbody>{renderData(filteredData, columns)}</tbody>
        </Table>
      </div>
    );
  }
}

TableComponent.propTypes = {
  columns: T.array,
  data: T.array,
};

TableComponent.defaultProps = {
  columns: [],
  data: [],
};

export default TableComponent;
