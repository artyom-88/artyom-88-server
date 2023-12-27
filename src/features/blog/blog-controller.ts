import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth-guard';

import { CreateBlogDTO, UpdateBlogDTO } from './blog-models';
import { Blog } from './blog-schema';
import { BlogService } from './blog-service';

@Controller('api/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') prodId: string): Promise<Blog> {
    return this.blogService.findOne(prodId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateBlogDTO): Promise<Blog> {
    return this.blogService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBlogDTO): Promise<Blog> {
    return this.blogService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Blog> {
    return this.blogService.delete(id);
  }
}
