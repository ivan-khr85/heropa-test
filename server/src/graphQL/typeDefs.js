import R from 'ramda';
import { coursesTypes } from './Courses';
import { rootTypes } from './root';

export default R.flatten([
  rootTypes,
  coursesTypes,
]);
