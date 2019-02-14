import mongoose from 'mongoose';

import schema from './schema';


const Navigation = mongoose.model('Navigation', schema);

export default Navigation;
