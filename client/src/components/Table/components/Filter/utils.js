import * as R from 'ramda';

const reducer = (acc, { name }) => [...acc, name];

export const getFilters = R.compose(
  R.uniq,
  R.reduce(reducer, []),
);

export const getSubFilters = (name, data) => R.compose(

);

