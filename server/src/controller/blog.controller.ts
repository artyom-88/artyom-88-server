import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { BlogService } from '../service/blog.service';

@Controller('api/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {
  }

  @Post()
  async create(@Body() dto: CreateBlogDto) {
    return await this.blogService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: CreateBlogDto) {
    return await this.blogService.update(id, dto);
  }

  @Get()
  async getAll() {
    return await this.blogService.getAll();
  }

  @Get(':id')
  getById(@Param('id') prodId: string) {
    return this.blogService.getById(prodId);
  }
}
