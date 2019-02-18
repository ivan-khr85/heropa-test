import { coursesResolvers, coursesMutation } from './Courses';
import { scalarResolvers } from './scalars';

export default {
  ...scalarResolvers,
  Query: {
    ...coursesResolvers,
  },
  Mutation: {
    ...coursesMutation,
  },
};
