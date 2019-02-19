import React from 'react';
import T from 'prop-types';
import * as R from 'ramda';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCogs, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { Filter } from './components';
import PaginationComponent from '../Pagination';

import {
  renderHeader, renderData, filterData, getItemsOnPage,
} from './utils';
import './index.scss';
import colors from '../../const/colors';
import { iconsSize, defaultPageNumber } from './const';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    const { data, itemsPerPage } = props;

    this.state = {
      itemsPerPage,
      itemsCount: R.length(data),
      currentPage: defaultPageNumber,
      filteredData: data,
    };
  }

  static getDerivedStateFromProps = ({ data }) => ({ itemsCount: R.length(data) });

  filterDataTable = (filters = {}) => () => {
    const { columns, data } = this.props;
    const filteredData = filterData(data, filters, columns);
    this.setState({
      filteredData,
      itemsCount: R.length(filterData),
    });
  };

  onPageChange = pageNumber => this.setState({ currentPage: pageNumber });

  render() {
    const {
      state: {
        filteredData, currentPage, itemsPerPage, itemsCount,
      },
      props: { columns, data },
      filterDataTable,
      onPageChange,
    } = this;

    const preparedData = getItemsOnPage(filteredData, currentPage, itemsPerPage);

    return (
      <div className="table-component">
        <div className="filter">
          <Button className="button-filter">
            <FontAwesomeIcon size={iconsSize.addFilter} icon={faBars} color={colors.table.inactiveIcon} />
          </Button>
          <Button className="button-filter">
            <FontAwesomeIcon size={iconsSize.addFilter} icon={faCogs} color={colors.table.inactiveIcon} />
          </Button>
          <Filter columns={columns} data={data} filterDataTable={filterDataTable} />
          <Button className="button-filter">
            <FontAwesomeIcon size={iconsSize.addFilter} icon={faFileAlt} color={colors.table.inactiveIcon} />
          </Button>
        </div>
        <Table responsive>
          <thead>
            <tr>{renderHeader(columns)}</tr>
          </thead>
          <tbody>{renderData(preparedData, columns)}</tbody>
        </Table>
        <PaginationComponent
          {...{
            currentPage,
            onPageChange,
            itemsPerPage,
            itemsCount,
          }}
        />
      </div>
    );
  }
}

TableComponent.propTypes = {
  itemsPerPage: T.number,
  columns: T.array,
  data: T.array,
};

TableComponent.defaultProps = {
  itemsPerPage: 2,
  columns: [],
  data: [],
};

export default TableComponent;
