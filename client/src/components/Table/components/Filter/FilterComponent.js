import React from 'react';
import T from 'prop-types';
import * as R from 'ramda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, Collapse } from 'reactstrap';

import FilterItem from '../FilterItem';

import { iconsSize } from '../../const';
import { colors } from '../../../../const';
import { getFilters, getSubFilters } from '../../utils';
import './index.scss';

class Filter extends React.Component {
  state = {
    isOpenedFilters: false,
    filters: [
      // {
      //   selectedColumn: String,
      //   selectedValue: String,
      //   format: String || null,
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
          format: null,
        },
      ],
    });
  };

  selectColumns = (value, index) => {
    const { filters } = this.state;

    const reducer = (acc, { selectedColumn, selectedValue }, idx) => {
      if (index !== idx) return [...acc, { selectedColumn, selectedValue }];
      return [
        ...acc,
        {
          selectedColumn: value,
          selectedValue: null,
          format: null,
        },
      ];
    };
    this.setState({ filters: filters.reduce(reducer, []) });
  };

  selectValue = (value, index, format) => {
    const {
      state: { filters },
      props: { filterDataTable },
    } = this;

    const reducer = (acc, { selectedColumn, selectedValue }, idx) => {
      if (index !== idx) return [...acc, { selectedColumn, selectedValue }];
      return [
        ...acc,
        {
          selectedColumn,
          selectedValue: value,
          format,
        },
      ];
    };
    const newFilters = filters.reduce(reducer, []);

    this.setState({ filters: newFilters }, filterDataTable(newFilters));
  };

  removeFilterItem = index => () => {
    const {
      props: { filterDataTable },
      state: { filters },
    } = this;
    const newFilters = R.remove(index, 1, filters);

    this.setState({ filters: newFilters }, filterDataTable(newFilters));
  };

  render() {
    const {
      props: { columns, data },
      state: { isOpenedFilters, filters },
      switchFilterState,
      removeFilterItem,
      selectColumns,
      addNewFilter,
      selectValue,
    } = this;

    return (
      <div>
        <Button className="button-filter" onClick={switchFilterState}>
          <FontAwesomeIcon size={iconsSize.addFilter} icon={faFileAlt} color={colors.table.inactiveIcon} />
        </Button>
        <Collapse className="filter-collapse" isOpen={isOpenedFilters}>
          <div className="inner-collapse">
            {filters.map(({ selectedColumn, selectedValue, format }, index) => (
              <div
                className="filter-item-container"
                // eslint-disable-next-line react/no-array-index-key
                key={`${selectedColumn}-${selectedValue}-${index}`}
              >
                <Button className="remove-filter-item" onClick={removeFilterItem(index)}>
                  <FontAwesomeIcon
                    size={iconsSize.removeFilter}
                    icon={faTimes}
                    color={colors.table.inactiveIcon}
                  />
                </Button>
                <p className="description">Where:</p>
                <FilterItem
                  isColumns
                  isCanSelect
                  index={index}
                  titleFormat={format}
                  data={{ columns }}
                  selectFunc={selectColumns}
                  getSubItems={getFilters}
                  selectedColumn={selectedColumn}
                />
                <FilterItem
                  index={index}
                  titleFormat={format}
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
  filterDataTable: T.func.isRequired,
};

Filter.defaultProps = {
  columns: [],
  data: [],
};

export default Filter;
