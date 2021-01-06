import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { BLOG_MODEL } from '../common/constants';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './entities/blog.model';

@Injectable()
export class BlogService {
  constructor(@Inject(BLOG_MODEL) private readonly blogModel: Model<Blog>) {}

  async create(dto: CreateBlogDto): Promise<Blog> {
    console.log(`BlogService create(${JSON.stringify(dto, null, 1)})`);
    const record = new this.blogModel(dto);
    return record.save();
  }

  async update(id: string, dto: CreateBlogDto): Promise<Blog> {
    console.log(`BlogService update(${id}, ${JSON.stringify(dto, null, 1)})`);
    try {
      await this.blogModel.updateOne({ _id: id }, dto);
    } catch (error) {
      throw new InternalServerErrorException('Could not update blog record.');
    }
    return this.getById(id);
  }

  async getAll() {
    return await this.blogModel.find({}).sort({ date: 'desc' }).exec();
  }

  async getById(id: string) {
    console.log(`BlogService getById(${id})`);
    let record;
    try {
      record = await this.blogModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find blog record.');
    }
    if (!record) {
      throw new NotFoundException('Could not find blog record.');
    }
    return record;
  }
}
