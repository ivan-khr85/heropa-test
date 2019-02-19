import React from 'react';
import T from 'prop-types';

import { Input, Label } from 'reactstrap';
import './itemsCountSelector.scss';
import { getCountsList } from './utils';

class ItemsPerPageCountSelector extends React.Component {
  constructor(props) {
    super(props);
    const { itemsPerPage } = props;
    this.state = {
      initialItemsPerPage: itemsPerPage,
    };
  }

  render() {
    const {
      props: {
        onItemsPerPageChange, itemsPerPage, currentPage, itemsCount,
      },
      state: { initialItemsPerPage },
    } = this;

    return (
      <div className="app-items-count-selector">
        <Input value={itemsPerPage} type="select" onChange={e => onItemsPerPageChange(+e.target.value)}>
          {getCountsList(initialItemsPerPage).map(value => (
            <option key={value}>{value}</option>
          ))}
        </Input>
        <Label className="app-counter-label">
          {`Showing page ${currentPage} of ${Math.ceil(itemsCount / itemsPerPage)}`}
        </Label>
      </div>
    );
  }
}

ItemsPerPageCountSelector.defaultProps = {
  itemsCount: 10,
  itemsPerPage: 10,
  currentPage: 1,
};

ItemsPerPageCountSelector.propTypes = {
  itemsCount: T.number,
  itemsPerPage: T.number,
  currentPage: T.number,
  onItemsPerPageChange: T.func.isRequired,
};

export default ItemsPerPageCountSelector;
