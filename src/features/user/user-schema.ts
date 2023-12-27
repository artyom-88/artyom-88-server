import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ type: String })
  username: string;

  @Prop({ type: String })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
