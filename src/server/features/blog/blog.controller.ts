import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './entities/blog.entity';

@Controller('api/blogReducer')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() dto: CreateBlogDto): Promise<Blog> {
    return await this.blogService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: CreateBlogDto): Promise<Blog> {
    return await this.blogService.update(id, dto);
  }

  @Get()
  async getAll(): Promise<Blog[]> {
    return await this.blogService.getAll();
  }

  @Get(':id')
  getById(@Param('id') prodId: string): Promise<Blog> {
    return this.blogService.getById(prodId);
  }
}
