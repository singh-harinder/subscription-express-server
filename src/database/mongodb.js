import mongoose from 'mongoose';
import 'dotenv/config.js';

if (!process.env.DATABASE_URL) {
  throw new Error('Unable to connect to database. Missing URL parameters?');
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDatabase;
