import React, { Component } from 'react';
import T from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './index.scss';
import { getPagesCount } from './utils';

class PaginationComponent extends Component {
  shouldComponentUpdate(nextProps) {
    const { currentPage: nextCurrentPage } = nextProps;
    const { currentPage } = this.props;

    return currentPage !== nextCurrentPage;
  }

  render() {
    const {
      currentPage, onPageChange, itemsPerPage, itemsCount,
    } = this.props;

    const pagesCount = getPagesCount(itemsCount, itemsPerPage);

    const firstOrPrevDisabled = currentPage === 1;
    const nextOrLastDisabled = currentPage === pagesCount;

    return (
      <Pagination className="app-pagination-component">
        <PaginationItem disabled={firstOrPrevDisabled}>
          <PaginationLink onClick={() => onPageChange(1)}>First</PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={firstOrPrevDisabled}>
          <PaginationLink onClick={() => onPageChange(currentPage - 1)}>Prev</PaginationLink>
        </PaginationItem>
        <PaginationItem active disabled>
          <PaginationLink>{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={nextOrLastDisabled}>
          <PaginationLink onClick={() => onPageChange(currentPage + 1)}>Next</PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={nextOrLastDisabled}>
          <PaginationLink onClick={() => onPageChange(pagesCount)}>Last</PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}

PaginationComponent.propTypes = {
  currentPage: T.number.isRequired,
  itemsCount: T.number.isRequired,
  onPageChange: T.func.isRequired,
  itemsPerPage: T.number,
};

PaginationComponent.defaultProps = {
  itemsPerPage: 10,
};

export default PaginationComponent;
