import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCareerDTO, UpdateCareerDTO } from './career-models';
import { Career } from './career-schema';

@Injectable()
export class CareerService {
  constructor(@InjectModel(Career.name) private readonly careerModel: Model<Career>) {}

  // TODO: add filters and pagination support
  async findAll(): Promise<Career[]> {
    return await this.careerModel.find({}).sort({ startDate: 'desc' }).exec();
  }

  async findOne(id: string): Promise<Career> {
    const item = await this.careerModel.findOne({ _id: id }).exec();
    return this.returnIfExists(id, item);
  }

  async create(dto: CreateCareerDTO): Promise<Career> {
    console.log(`CareerService create(${JSON.stringify(dto, null, 1)})`);
    return this.careerModel.create(dto);
  }

  async update(id: string, dto: UpdateCareerDTO): Promise<Career> {
    console.log(`CareerService update(${id}, ${JSON.stringify(dto, null, 1)})`);
    const item = await this.careerModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    return this.returnIfExists(id, item);
  }

  async delete(id: string): Promise<Career> {
    const item = await this.careerModel.findByIdAndRemove(id).exec();
    return this.returnIfExists(id, item);
  }

  private returnIfExists(id: string, item: Career | null): Career {
    if (!item) {
      throw new NotFoundException(`A career item with id: "${id}" is not found`);
    }
    return item;
  }
}
