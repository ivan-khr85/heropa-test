import React from 'react';
import {
  findColumnsByName, renderDateCel, renderTextCel, renderLabel,
} from './helpers';
import { types } from './const';

export const renderHeader = columns => columns.map(({ name }) => <th key={name}>{name}</th>);

export const renderRow = (row, columns, key) => (
  <tr key={key}>
    {row.map(({ column, value }, index) => {
      const { type = '', format = '' } = findColumnsByName(column, columns) || {};
      if (type === types.LABEL) return renderLabel(value);
      if (type === types.DATE) return renderDateCel(value, format, index);
      return renderTextCel(value, index);
    })}
  </tr>
);

export const renderData = (data, columns) => data.map((row, index) => renderRow(row, columns, index));
