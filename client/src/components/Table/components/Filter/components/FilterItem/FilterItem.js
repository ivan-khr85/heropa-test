import React from 'react';
import T from 'prop-types';
import {
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { getSubFilters } from '../../utils';

import { defaultFilterTitle } from './const';
import './index.scss';

class Filter extends React.Component {
  state = {
    isOpenedFilter: false,
    selectedFilter: null,
    filters: {},
  };

  switchFilterState = () => {
    const { isOpenedFilter } = this.state;
    this.setState({ isOpenedFilter: !isOpenedFilter });
  };

  render() {
    const {
      props: { data, filterItem },
      state: { isOpenedFilter, selectedFilter },
      switchFilterState,
    } = this;

    return (
      <ButtonDropdown isOpen={isOpenedFilter} toggle={switchFilterState} className="filter-item">
        <DropdownToggle caret>{defaultFilterTitle}</DropdownToggle>
        <DropdownMenu>
          {getSubFilters(filterItem)(data).map(subFilter => (
            <DropdownItem key={subFilter}>{`${subFilter}`}</DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

Filter.propTypes = {
  data: T.array,
  filterItem: T.string,
};

Filter.defaultProps = {
  data: [],
};

export default Filter;
