import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user-schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async find(username: string): Promise<User | undefined> {
    let users;
    try {
      users = await this.userModel.find({ name: username }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user record.');
    }
    if (!users) {
      throw new NotFoundException('Could not find user record.');
    }
    return users[0];
  }
}
