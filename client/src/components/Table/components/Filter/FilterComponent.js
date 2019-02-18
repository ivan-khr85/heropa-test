import React from 'react';
import * as R from 'ramda';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Collapse } from 'reactstrap';
import isDateEqual from 'date-fns/is_equal';

import FilterItem from '../FilterItem';

import { iconSize } from '../../const';
import { colors } from '../../../../const';
import { getFilters, getSubFilters, formatFilterValue } from '../../utils';
import './index.scss';

class Filter extends React.Component {
  state = {
    isOpenedFilters: false,
    filters: [
      // {
      //   selectedColumn: String,
      //   selectedValue: String,
      // },
    ],
  };

  switchFilterState = () => {
    const { isOpenedFilters } = this.state;
    this.setState({ isOpenedFilters: !isOpenedFilters });
  };

  addNewFilter = () => {
    const { filters = [] } = this.state;
    this.setState({
      filters: [
        ...filters,
        {
          selectedColumn: '',
          selectedValue: '',
        },
      ],
    });
  };

  filterDataTable = () => {
    const {
      props: { columns, data },
      state: { filters },
    } = this;

    console.log('columns ', columns);
    console.log('data ', data);
    console.log('filters ', filters);

    // this function should be moved into utils

    const compareValues = (first, second, type) => R.cond([
      [R.equals('String'), () => R.equals(first, second)],
      [R.equals('Number'), () => R.equals(Number(first), Number(second))],
      [R.equals('Date'), () => isDateEqual(first, second)],
      [R.T, R.F],
    ])(type);

    const filterData = (data, filters, columns) => {
      const filtersObject = filters.reduce(
        (acc, { selectedColumn, selectedValue }) => ({ ...acc, [selectedColumn]: selectedValue }),
        {},
      );
      const columnTypes = columns.reduce((acc, { name, type }) => ({ ...acc, [name]: type }), {});

      console.log(columnTypes);

      return data.filter(rowArray => rowArray.reduce((accum, { column, value }) => {
        const filterValue = filtersObject[column];

        return filterValue
          ? accum || compareValues(filterValue, value, columnTypes[column])
          : accum;
      }, false));
    };

    console.log(filterData(data, filters, columns));
  };

  selectColumns = (value, index, format) => {
    const { filters } = this.state;

    const reducer = (acc, { selectedColumn, selectedValue }, idx) => {
      if (index !== idx) return [...acc, { selectedColumn, selectedValue }];
      return [
        ...acc,
        {
          selectedColumn: formatFilterValue(value, format),
          selectedValue: null,
        },
      ];
    };
    this.setState({ filters: filters.reduce(reducer, []) });
  };

  selectValue = (value, index, format) => {
    const {
      state: { filters },
      filterDataTable,
    } = this;

    const reducer = (acc, { selectedColumn, selectedValue }, idx) => {
      if (index !== idx) return [...acc, { selectedColumn, selectedValue }];
      return [
        ...acc,
        {
          selectedColumn,
          selectedValue: formatFilterValue(value, format),
        },
      ];
    };
    this.setState({ filters: filters.reduce(reducer, []) }, filterDataTable);
  };

  render() {
    const {
      props: { columns, data },
      state: { isOpenedFilters, filters },
      switchFilterState,
      selectColumns,
      addNewFilter,
      selectValue,
    } = this;

    return (
      <div>
        <Button className="button-filter" onClick={switchFilterState}>
          <FontAwesomeIcon size={iconSize} icon={faFileAlt} color={colors.table.inactiveIcon} />
        </Button>
        <Collapse className="filter-collapse" isOpen={isOpenedFilters}>
          <div className="inner-collapse">
            {filters.map(({ selectedColumn, selectedValue }, index) => (
              <div
                className="filter-item-container"
                // eslint-disable-next-line react/no-array-index-key
                key={`${selectedColumn}-${selectedValue}-${index}`}
              >
                <p className="description">Where:</p>
                <FilterItem
                  isColumns
                  isCanSelect
                  index={index}
                  data={{ columns }}
                  selectFunc={selectColumns}
                  getSubItems={getFilters}
                  selectedColumn={selectedColumn}
                />
                <FilterItem
                  index={index}
                  data={{ data, columns }}
                  selectFunc={selectValue}
                  getSubItems={getSubFilters}
                  selectedValue={selectedValue}
                  isCanSelect={!!selectedColumn}
                  selectedColumn={selectedColumn}
                />
              </div>
            ))}

            <Button className="add-filter" onClick={addNewFilter}>
              <FontAwesomeIcon size="xs" icon={faPlus} color={colors.table.inactiveIcon} />
              <p className="add-filter-text">Add Filter</p>
            </Button>
          </div>
        </Collapse>
      </div>
    );
  }
}

Filter.propTypes = {
  columns: T.array,
  data: T.array,
};

Filter.defaultProps = {
  columns: [],
  data: [],
};

export default Filter;
