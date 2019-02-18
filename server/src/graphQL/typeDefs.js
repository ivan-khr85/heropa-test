import R from 'ramda';
import { coursesTypes } from './Courses';
import { scalarTypes } from './scalars';
import { rootTypes } from './root';

export default R.flatten([
  rootTypes,
  scalarTypes,
  coursesTypes,
]);
