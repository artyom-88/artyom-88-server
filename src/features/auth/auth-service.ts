import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import pickBy from 'lodash/pickBy';
import { User } from 'src/features/user/user-schema';

import { UserService } from '../user/user-service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pwd: string): Promise<Partial<User>> {
    const user = await this.userService.find(username);
    if (user && user.password === pwd) {
      return pickBy(user, (v, k) => k !== 'password');
    }
    return null;
  }

  async login(user: { userId: string; username: string }): Promise<string> {
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload);
  }
}
