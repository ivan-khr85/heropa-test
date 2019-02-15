import React from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import { iconSize } from '../../const';
import { colors } from '../../../../const';
import { getFilters } from './utils';
import './index.scss';

class Filter extends React.Component {
  state = {
    isOpenedFilter: false,
  };

  setFilterState = () => {
    const { isOpenedFilter } = this.state;
    this.setState({ isOpenedFilter: !isOpenedFilter });
  };

  render() {
    const {
      props: { columns, data },
      state: { isOpenedFilter },
      setFilterState,
    } = this;

    console.log(getFilters(columns));

    return (
      <ButtonDropdown className="filter-dropdown" isOpen={isOpenedFilter} toggle={setFilterState}>
        <DropdownToggle>
          <FontAwesomeIcon size={iconSize} icon={faFileAlt} color={colors.table.inactiveIcon} />
        </DropdownToggle>
        <DropdownMenu>
          {getFilters(columns).map(title => (
            <DropdownItem>{title}</DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
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
