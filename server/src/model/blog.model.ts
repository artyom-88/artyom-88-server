import * as mongoose from 'mongoose';

export const BlogModel = new mongoose.Schema({
  title: { type: String, required: true },
  site: String,
  post: { type: String, required: true },
  description: { type: String, required: true },
  tools: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
});

export interface Blog extends mongoose.Document {
  readonly title: string;
  readonly site: string;
  readonly post: string;
  readonly description: string;
  readonly tools: string;
  readonly startDate: Date;
  readonly endDate: Date;
}
