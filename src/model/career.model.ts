import * as mongoose from 'mongoose';

export const CareerModel = new mongoose.Schema({
  id: String,
  title: { type: String, required: true },
  site: String,
  post: { type: String, required: true },
  description: { type: String, required: true },
  tools: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
});

export interface Career extends mongoose.Document {
  id: string;
  title: string;
  year: number;
  month: number;
  day: number;
  link: string;
  linkCaption: string;
}
