import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateBlogDTO, UpdateBlogDTO } from './blog-models';
import { Blog } from './blog-schema';
import { BlogService } from './blog-service';

@Controller('api/blog')
export class BlogApiController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') prodId: string): Promise<Blog> {
    return this.blogService.findOne(prodId);
  }

  @Post()
  create(@Body() dto: CreateBlogDTO): Promise<Blog> {
    return this.blogService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBlogDTO): Promise<Blog> {
    return this.blogService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Blog> {
    return this.blogService.delete(id);
  }
}
