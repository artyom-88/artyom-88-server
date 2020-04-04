import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {
  }

  async find(username: string): Promise<User | undefined> {
    console.log(`UserService find(${username})`);
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
