import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { CAREER_PAGE_ID, CAREER_PAGE_URL } from 'src/common/common-constants';
import { ParamsInterceptor } from 'src/server/common/params/params-interceptor';

@Controller()
export class CareerController {
  @Get(CAREER_PAGE_URL)
  @Render(CAREER_PAGE_ID)
  @UseInterceptors(ParamsInterceptor)
  careerList() {
    return {};
  }

  @Get('/career/:id')
  @Render('career/[id]')
  @UseInterceptors(ParamsInterceptor)
  careerItem() {
    return {};
  }
}
