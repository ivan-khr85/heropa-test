import React from 'react';
import { format as formatDate } from 'date-fns';
import { defaultDateFormat, getStatusesColors } from './const';
import StatusLabel from '../StatusLabel';

const genClassName = index => `${index === 0 ? 'first-column' : ''}`;

export const findColumnsByName = (neededName, columns) => columns.find(({ name }) => name === neededName);

export const renderTextCel = (value, index) => (
  <td className={genClassName(index)} key={`${value}-${index}`}>{`${value}`}</td>
);

export const renderDateCel = (value, format, index) => (
  <td className={genClassName(index)} key={value}>
    {formatDate(value, format || defaultDateFormat)}
  </td>
);

export const renderLabel = label => <StatusLabel label={label} labelColor={getStatusesColors(label)} />;
