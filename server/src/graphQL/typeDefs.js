import R from 'ramda';
import { menuTypes } from './Menu';
import { rootTypes } from './root';

export default R.flatten([
  rootTypes,
  menuTypes,
]);
