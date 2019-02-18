import { Courses } from '../../../models';

export const coursesMutation = {
  createCourse: (_, data) => Courses.create(data),
};
