import React from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Collapse } from 'reactstrap';

import { FilterItem } from './components';

import { iconSize } from '../../const';
import { colors } from '../../../../const';
import { getFilters } from './utils';
import './index.scss';

class Filter extends React.Component {
  state = {
    isOpenedFilter: false,
    filters: {},
  };

  switchFilterState = () => {
    const { isOpenedFilter } = this.state;
    this.setState({ isOpenedFilter: !isOpenedFilter });
  };

  render() {
    const {
      props: { columns, data },
      state: { isOpenedFilter },
      switchFilterState,
    } = this;

    return (
      <div>
        <Button className="button-filter" onClick={switchFilterState}>
          <FontAwesomeIcon size={iconSize} icon={faFileAlt} color={colors.table.inactiveIcon} />
        </Button>
        <Collapse className="filter-collapse" isOpen={isOpenedFilter}>
          <div className="inner-collapse">
            {getFilters(columns).map(filterItem => (
              <div className="filter-item" key={filterItem}>
                <p className="description">Where</p>
                <FilterItem data={data} />
              </div>
            ))}

            <Button className="add-filter">
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
