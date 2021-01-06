import * as mongoose from 'mongoose';

export const UserModel = new mongoose.Schema({
  name: String,
  password: String,
});

export interface User extends mongoose.Document {
  readonly username: string;
  readonly password: string;
}
