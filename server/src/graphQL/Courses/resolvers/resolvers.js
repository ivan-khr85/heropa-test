import { Courses } from '../../../models';

export const coursesResolvers = {
  courses: (_, { offset, limit }) => Courses.find({}, null, { offset, limit }),
  singleCourse: (_, { id }) => Courses.findById(id),
};
