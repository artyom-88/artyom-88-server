import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { BLOG_MODEL } from '../const';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { Blog } from '../model/blog.model';
import { Career } from '../model/career.model';

@Injectable()
export class BlogService {
  constructor(@Inject(BLOG_MODEL) private readonly blogModel: Model<Blog>) {
  }

  async create(dto: CreateBlogDto): Promise<Career> {
    const record = new this.blogModel(dto);
    return record.save();
  }

  async getAll() {
    return await this.blogModel.find({}).exec();
  }

  async getById(id: string) {
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
