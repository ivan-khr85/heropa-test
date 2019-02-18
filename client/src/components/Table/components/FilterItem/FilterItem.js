import React from 'react';
import T from 'prop-types';
import {
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import { defaultFilterTitle } from './const';
import './index.scss';
import { formatFilterValue } from '../../utils';

class Filter extends React.Component {
  state = {
    isOpenedFilter: false,
  };

  switchFilterState = () => {
    const { isOpenedFilter } = this.state;
    this.setState({ isOpenedFilter: !isOpenedFilter });
  };

  render() {
    const {
      props: {
        data,
        index,
        isColumns,
        selectFunc,
        getSubItems,
        isCanSelect,
        titleFormat,
        selectedValue,
        selectedColumn,
      },
      state: { isOpenedFilter },
      switchFilterState,
    } = this;

    const filterTitle = isColumns ? selectedColumn : selectedValue;

    return (
      <ButtonDropdown isOpen={isOpenedFilter} toggle={switchFilterState} className="filter-item">
        <DropdownToggle caret>{formatFilterValue(filterTitle || defaultFilterTitle, titleFormat)}</DropdownToggle>
        {isCanSelect ? (
          <DropdownMenu>
            {getSubItems(data, selectedColumn).map(({ name, format }) => (
              <DropdownItem onClick={() => selectFunc(name, index, format)} key={name}>
                {formatFilterValue(name, format)}
              </DropdownItem>
            ))}
          </DropdownMenu>
        ) : null}
      </ButtonDropdown>
    );
  }
}

Filter.propTypes = {
  data: T.object,
  titleFormat: T.string,
  isColumns: T.bool,
  selectedValue: T.oneOfType([T.string, T.number, T.instanceOf(Date)]),
  selectedColumn: T.string,
  index: T.number.isRequired,
  selectFunc: T.func.isRequired,
  isCanSelect: T.bool.isRequired,
  getSubItems: T.func.isRequired,
};

Filter.defaultProps = {
  data: {},
  isColumns: false,
  selectedColumn: '',
  selectedValue: '',
};

export default Filter;
