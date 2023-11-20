import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CareerModel } from 'src/common/types/common-career-types';

@Schema()
export class Career extends Document<string> implements CareerModel {
  @Prop({ required: true, type: String })
  readonly title: string;

  @Prop({ type: String })
  readonly site: string;

  @Prop({ required: true, type: String })
  readonly post: string;

  @Prop({ required: true, type: String })
  readonly description: string;

  @Prop({ required: true, type: String })
  readonly tools: string;

  @Prop({ required: true, type: Date })
  readonly startDate: Date;

  @Prop({ type: Date })
  readonly endDate?: Date;
}

export const CareerSchema = SchemaFactory.createForClass(Career);
