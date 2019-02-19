import * as R from 'ramda';
import { itemsCountList } from './config';

export const getCountsList = R.pipe(
  R.append(R.__, itemsCountList),
  R.uniq,
  R.sort(R.ascend(a => a)),
);
