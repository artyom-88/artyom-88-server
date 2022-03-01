import { Body, Controller, Get, Param, Post, Put, Render } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './entities/blog.entity';

@Controller()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('/blog')
  @Render('blog')
  blogList() {
    return {};
  }

  @Get('/blog/:id')
  @Render('blog/[id]')
  blog() {
    return {};
  }

  @Post('api/blog')
  async create(@Body() dto: CreateBlogDto): Promise<Blog> {
    return await this.blogService.create(dto);
  }

  @Put('api/blog/:id')
  async update(@Param('id') id: string, @Body() dto: CreateBlogDto): Promise<Blog> {
    return await this.blogService.update(id, dto);
  }

  @Get('api/blog')
  async getAll(): Promise<Blog[]> {
    return await this.blogService.getAll();
  }

  @Get('api/blog/:id')
  getById(@Param('id') prodId: string): Promise<Blog> {
    return this.blogService.getById(prodId);
  }
}
