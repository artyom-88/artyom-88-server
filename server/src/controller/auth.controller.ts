import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {
  }

  @Post()
  @HttpCode(200)
  auth(@Body() dto: AuthDto): boolean {
    return this.appService.auth(dto);
  }
}
