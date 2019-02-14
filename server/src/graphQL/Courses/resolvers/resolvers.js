import { Courses } from '../../../models';

export const resolvers = {
  courses: (_, { offset, limit }) => Courses.find({}, null, { offset, limit }),
  singleCourse: (_, { id }) => Courses.findById(id),
};
