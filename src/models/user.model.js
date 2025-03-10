import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Enter a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: 8,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
