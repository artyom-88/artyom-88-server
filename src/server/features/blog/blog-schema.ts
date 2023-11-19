import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import type { IBlog } from 'src/common/types/blog.types';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog extends Document implements IBlog {
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
