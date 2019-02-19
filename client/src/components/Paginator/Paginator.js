import React, { Component } from 'react';
import T from 'prop-types';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './paginator.scss';

class Paginator extends Component {
  shouldComponentUpdate(nextProps) {
    const { currentPage: nextCurrentPage, pageCount: nextPageCount } = nextProps;
    const { currentPage, pageCount } = this.psrops;

    return currentPage !== nextCurrentPage || pageCount !== nextPageCount;
  }

  render() {
    const {
      currentPage, pageCount, onPageChange,
    } = this.props;

    const firstOrPrevDisabled = currentPage === 1;
    const nextOrLastDisabled = currentPage === pageCount;

    return (
      <Pagination className="app-pagination-component">
        <PaginationItem disabled={firstOrPrevDisabled}>
          <PaginationLink onClick={() => onPageChange(1)}>
            First
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={firstOrPrevDisabled}>
          <PaginationLink onClick={() => onPageChange(currentPage - 1)}>
            Prev
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active disabled>
          <PaginationLink>
            123
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={nextOrLastDisabled}>
          <PaginationLink onClick={() => onPageChange(currentPage + 1)}>
            Next
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={nextOrLastDisabled}>
          <PaginationLink onClick={() => onPageChange(pageCount)}>
            Last
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}

Paginator.propTypes = {
  currentPage: T.number.isRequired,
  pageCount: T.number.isRequired,
  onPageChange: T.func.isRequired,
};

export default Paginator;
