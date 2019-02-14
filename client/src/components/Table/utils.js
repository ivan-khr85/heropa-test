import React from 'react';
import { findColumnsByName, renderDateCel } from './helpers';

const renderTextCel = value => <td key={value}>{`${value}`}</td>;

export const renderHeader = columns => columns.map(({ name }) => <th key={name}>{name}</th>);

export const renderRow = (row, columns, key) => (
  <tr key={key}>
    {row.map(({ column, value }) => {
      const { type = '', format = '' } = findColumnsByName(column, columns) || {};

      if (type === Date) return renderDateCel(value, format);
      return renderTextCel(value);
    })}
  </tr>
);

export const renderData = (data, columns) => data.map((row, index) => renderRow(row, columns, index));
