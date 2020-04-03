import { Injectable } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  auth(dto: AuthDto): boolean {
    console.log('api/auth');
    console.log(JSON.stringify(dto, null, 1));
    return true;
  }
}
