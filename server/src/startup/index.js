import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log('Connected to DataBase'))
  .catch(error => console.log(`We have issue with connecting to DATABASE: ${error}`));
