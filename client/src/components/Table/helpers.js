import React from 'react';
import * as R from 'ramda';
import formatDate from 'date-fns/format';
import isDateEqual from 'date-fns/is_equal';

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
  [R.equals(types.NUMBER), () => renderTextCel(value, index)],
  [R.equals(types.LABEL), () => renderLabelCel(value, index)],
  [R.equals(types.DATE), () => renderDateCel(value, format, index)],
  [R.T, () => ''],
])(type);

export const compareValues = (first, second, type) => R.cond([
  [R.equals('String'), () => R.equals(first, second)],
  [R.equals('Number'), () => R.equals(Number(first), Number(second))],
  [R.equals('Date'), () => isDateEqual(first, second)],
  [R.T, R.F],
])(type);
