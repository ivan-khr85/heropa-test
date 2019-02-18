import React from 'react';
import * as R from 'ramda';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Collapse } from 'reactstrap';

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
    //   const {
    //     props: { columns, data },
    //     state: { filters },
    //   } = this;
    //   // const getFilter = (field, value) => R.find(R.propEq(field, value))(filters);
    //   const getFilterData = (column, value) => filters
    //     .find(({
    //       selectedColumn,
    //       selectedValue,
    //     }) => selectedColumn === `${column}` && selectedValue === `${value}`);
    //   data.filter((rowItem) => {
    //     const reducer = (acc, { column, value }) => {
    //       const { selectedColumn, selectedValue } = getFilterData(column, value);
    //     };
    //     const result = rowItem.reduce(reducer, true);
    //     console.log(result);
    //   });
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
