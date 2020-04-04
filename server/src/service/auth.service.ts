import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
  }

  async validateUser(username: string, pwd: string): Promise<any> {
    console.log(`AuthService validateUser(${username}, ${pwd})`);
    const user = await this.userService.find(username);
    console.log(`AuthService user:`);
    console.log(JSON.stringify(user, null, 1));
    if (user && user.password === pwd) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async login(user: any) {
    console.log(`AuthService login:`);
    console.log(JSON.stringify(user, null, 1));
    const payload = { username: user.username, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
