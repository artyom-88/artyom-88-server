import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { ParamsInterceptor } from 'src/common/interceptors/params.interceptor';

@Controller()
export class BlogController {
  @Get('/blog')
  @Render('blog')
  @UseInterceptors(ParamsInterceptor)
  blogList() {
    return {};
  }

  @Get('/blog/:id')
  @Render('blog/[id]')
  @UseInterceptors(ParamsInterceptor)
  blogPost() {
    return {};
  }
}
