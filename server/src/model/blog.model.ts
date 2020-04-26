import * as mongoose from 'mongoose';

export const BlogModel = new mongoose.Schema({
  title: { type: String, required: true },
  link: String,
  linkCaption: String,
  date: { type: Date, required: true },
});

export interface Blog extends mongoose.Document {
  readonly title: string;
  readonly link: string;
  readonly linkCaption: string;
  readonly date: Date;
  // deprecated
  readonly year: number;
  readonly month: number;
  readonly day: number;
}
