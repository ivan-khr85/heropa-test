import React from 'react';
import * as R from 'ramda';
import { format as formatDate } from 'date-fns';
import { defaultDateFormat, getStatusesColors, types } from './const';
import StatusLabel from '../StatusLabel';

const genClassName = index => `${index === 0 ? 'first-column' : ''}`;

export const findColumnsByName = (neededName, columns) => columns.find(({ name }) => name === neededName);

const renderTextCel = (value, index) => (
  <td className={genClassName(index)} key={`${value}-${index}`}>{`${value}`}</td>
);

const renderDateCel = (value, format, index) => (
  <td className={genClassName(index)} key={value}>
    {formatDate(value, format || defaultDateFormat)}
  </td>
);

const renderLabelCel = (label, index) => (
  <StatusLabel key={index} label={label} labelColor={getStatusesColors(label)} />
);

export const renderRowItem = (type, value, format, index) => R.cond([
  [R.equals(types.STRING), () => renderTextCel(value, index)],
  [R.equals(types.LABEL), () => renderLabelCel(value, index)],
  [R.equals(types.DATE), () => renderDateCel(value, format, index)],
  [R.T, () => ''],
])(type);
