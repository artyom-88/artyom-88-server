import { Controller, Get, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';

import { ParamsInterceptor } from '../../common/params/params-interceptor';

import { AuthService } from './auth-service';
import { JwtAuthGuard } from './guards/jwt-auth-guard';
import { LocalAuthGuard } from './guards/local-auth-guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @UseInterceptors(ParamsInterceptor)
  async login(@Request() req): Promise<{ authToken: string }> {
    const authToken = await this.authService.login(req.user);
    return { authToken: authToken };
  }

  @UseGuards(JwtAuthGuard)
  @Get('check-token')
  @UseInterceptors(ParamsInterceptor)
  user(@Request() req): Promise<Record<string, unknown>> {
    return req.user;
  }
}
