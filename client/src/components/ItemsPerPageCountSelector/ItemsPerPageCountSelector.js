import React from 'react';
import T from 'prop-types';

import { Input, Label } from 'reactstrap';
import { itemsCountList } from './config';
import './itemsCountSelector.scss';

const ItemsPerPageCountSelector = ({
  currentPage,
  itemsCount,
  itemsPerPage,
  onItemsPerPageChanged,
}) => (
  <div className="app-items-count-selector">
    <Input
      value={itemsPerPage}
      type="select"
      onChange={e => onItemsPerPageChanged(e.target.value)}
    >
      {itemsCountList.map(value => <option key={value}>{value}</option>)}
    </Input>
    <Label className="app-counter-label">
      {`Showing page ${currentPage} of ${Math.ceil(itemsCount / itemsPerPage)}`}
    </Label>
  </div>
);

ItemsPerPageCountSelector.defaultProps = {
  itemsCount: 10,
  itemsPerPage: 10,
  currentPage: 1,
};

ItemsPerPageCountSelector.propTypes = {
  itemsCount: T.number,
  itemsPerPage: T.number,
  currentPage: T.number,
  onItemsPerPageChanged: T.func.isRequired,
};

export default ItemsPerPageCountSelector;
