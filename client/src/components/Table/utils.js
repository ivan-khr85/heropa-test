import React from 'react';
import * as R from 'ramda';
import formatDate from 'date-fns/format';
import { findColumnsByName, renderRowItem, compareValues } from './helpers';

export const renderHeader = columns => columns.map(({ name }) => <th key={name}>{name}</th>);

export const renderRow = (row, columns, key) => (
  <tr key={key}>
    {row.map(({ column, value }, index) => {
      const { type = '', format = '' } = findColumnsByName(column, columns) || {};
      return renderRowItem(type, value, format, index);
    })}
  </tr>
);

export const renderData = (data, columns) => data.map((row, index) => renderRow(row, columns, index));

export const getFilters = R.compose(
  R.uniq,
  R.reduce((acc, { name }) => [...acc, { name }], []),
  ({ columns }) => columns,
);

export const getSubFilters = ({ data, columns }, selectedColumn) => {
  const { format } = R.find(R.propEq('name', selectedColumn))(columns);

  return R.pipe(
    R.reduce(
      (acc, val) => R.append(
        R.pipe(
          R.find(R.propEq('column', selectedColumn)),
          R.prop('value'),
          value => ({ name: value, format }),
        )(val),
        acc,
      ),
      [],
    ),
    R.uniq,
  )(data);
};

export const formatFilterValue = (name, format, isCol) => format && !isCol ? formatDate(name, format) : `${name}`;

export const filterData = (data, filters, columns) => {
  const filtersObject = filters.reduce(
    (acc, { selectedColumn, selectedValue }) => ({ ...acc, [selectedColumn]: selectedValue }),
    {},
  );
  const columnTypes = columns.reduce((acc, { name, type }) => ({ ...acc, [name]: type }), {});

  return data.filter(rowArray => rowArray.reduce((acc, { column, value }) => {
    const filterValue = filtersObject[column];

    return filterValue ? acc || compareValues(filterValue, value, columnTypes[column]) : acc;
  }, false));
};
