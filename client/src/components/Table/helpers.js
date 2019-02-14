import React from 'react';
import { format as formatDate } from 'date-fns';
import { defaultDateFormat } from './const';

export const findColumnsByName = (neededName, columns) => columns.find(({ name }) => name === neededName);

export const renderDateCel = (value, format) => (
  <td key={value}>{formatDate(value, format || defaultDateFormat)}</td>
);
