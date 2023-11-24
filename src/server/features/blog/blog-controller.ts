import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { BLOG_PAGE_ID, BLOG_PAGE_URL } from 'src/common/common-constants';
import { ParamsInterceptor } from 'src/server/common/params/params-interceptor';

@Controller()
export class BlogController {
  @Get(BLOG_PAGE_URL)
  @Render(BLOG_PAGE_ID)
  @UseInterceptors(ParamsInterceptor)
  blogList() {
    return {};
  }

  @Get('/blog/:id')
  @Render('blog/[id]')
  @UseInterceptors(ParamsInterceptor)
  blogItem() {
    return {};
  }
}
