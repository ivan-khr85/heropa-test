import R from 'ramda';
import { rootTypes } from './root';
import { menuTypes } from './Menu';

export default R.flatten([
  rootTypes,
  menuTypes,
]);
