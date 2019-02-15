import React from 'react';
import { findColumnsByName, renderRowItem } from './helpers';

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
