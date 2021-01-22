import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Blog extends Document {
  @Prop({ required: true, type: String })
  readonly title: string;

  @Prop({ type: String })
  readonly link: string;

  @Prop({ type: String })
  readonly linkCaption: string;

  @Prop({ required: true, type: Date })
  readonly date: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
