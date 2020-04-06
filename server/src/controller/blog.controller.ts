import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { BlogService } from '../service/blog.service';

@Controller('api/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {
  }

  @Post()
  async create(@Body() dto: CreateBlogDto) {
    await this.blogService.create(dto);
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
