import * as R from 'ramda';

const reducer = (acc, { name }) => [...acc, name];

export const getFilters = R.compose(
  R.uniq,
  R.reduce(reducer, []),
);

export const getSubFilters = name => R.compose(
  R.uniq,
  R.reduce(
    (acc, val) => R.append(
      R.pipe(
        R.find(R.propEq('column', name)),
        R.prop('value'),
      )(val),
      acc,
    ),
    [],
  ),
);
