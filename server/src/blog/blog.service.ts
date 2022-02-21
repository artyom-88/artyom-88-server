import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private readonly blogModel: Model<Blog>) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    console.log(`BlogService create(${JSON.stringify(createBlogDto, null, 1)})`);
    // TODO: temporary solution before dates migration
    const date = new Date(createBlogDto.date);
    const blog = new this.blogModel({ ...createBlogDto, date });
    return blog.save();
  }

  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    console.log(`BlogService update(${id}, ${JSON.stringify(updateBlogDto, null, 1)})`);
    // TODO: temporary solution before dates migration
    const date = new Date(updateBlogDto.date);
    const blog = await this.blogModel.findByIdAndUpdate(id, { ...updateBlogDto, date }, { new: true });
    if (!blog) {
      throw new InternalServerErrorException('Could not update blog record.');
    }
    return blog;
  }

  async getAll(): Promise<Blog[]> {
    return await this.blogModel.find({}).sort({ date: 'desc' }).exec();
  }

  async getById(id: string): Promise<Blog> {
    console.log(`BlogService getById(${id})`);
    let blog;
    try {
      blog = await this.blogModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find blog record.');
    }
    if (!blog) {
      throw new NotFoundException('Could not find blog record.');
    }
    return blog;
  }
}
