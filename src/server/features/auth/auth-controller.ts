import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { LOGIN_PAGE_ID, LOGIN_PAGE_URL } from 'src/common/common-constants';
import { ParamsInterceptor } from 'src/server/common/params/params-interceptor';

@Controller()
export class AuthController {
  @Get(LOGIN_PAGE_URL)
  @Render(LOGIN_PAGE_ID)
  @UseInterceptors(ParamsInterceptor)
  login() {
    return {};
  }
}
