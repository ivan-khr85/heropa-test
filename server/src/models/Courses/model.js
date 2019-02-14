import mongoose from 'mongoose';

import schema from './schema';


const Courses = mongoose.model('Courses', schema);

export default Courses;
