import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';

import type { CreateBlogDTO, UpdateBlogDTO } from './blog-models';
import { Blog } from './blog-schema';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private readonly blogModel: Model<Blog>) {}

  // TODO: add filters and pagination support
  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find({}).sort({ date: 'desc' }).exec();
  }

  async findOne(id: string): Promise<Blog> {
    const item = await this.blogModel.findOne({ _id: id }).exec();
    return this.returnIfExists(id, item);
  }

  async create(dto: CreateBlogDTO): Promise<Blog> {
    console.log(`BlogService create(${JSON.stringify(dto, null, 1)})`);
    return this.blogModel.create(dto);
  }

  async update(id: string, dto: UpdateBlogDTO): Promise<Blog> {
    console.log(`BlogService update(${id}, ${JSON.stringify(dto, null, 1)})`);
    const item = await this.blogModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    return this.returnIfExists(id, item);
  }

  async delete(id: string): Promise<Blog> {
    const word = await this.blogModel.findByIdAndRemove(id).exec();
    return this.returnIfExists(id, word);
  }

  private returnIfExists(id: string, item: Blog | null): Blog {
    if (!item) {
      throw new NotFoundException(`A blog with id: "${id}" is not found`);
    }
    return item;
  }
}
