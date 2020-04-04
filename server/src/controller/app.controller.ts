import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../service/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth')
  async login(@Request() req) {
    console.log('AppController login');
    console.log(JSON.stringify(req.user, null, 1));
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/user')
  user(@Request() req) {
    console.log('AppController user');
    console.log(JSON.stringify(req.user, null, 1));
    return req.user;
  }
}
