import { Schema, ObjectId } from 'mongoose';
import { allowedVisibility, allowedStatus } from './const';

/**
 * all values in field visibility, status need to save in separate
 * collection and in Courses should to save only ID
 */

export default new Schema({
  name: String,
  location: String,
  imageID: ObjectId,
  type: String,
  VLUs: String,
  visibility: {
    type: String,
    enum: allowedVisibility,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
  status: {
    type: String,
    enum: allowedStatus,
  },
});
