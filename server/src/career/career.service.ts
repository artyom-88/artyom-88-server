import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCareerDto } from './dto/create-career.dto';
import { Career } from './entities/career.entity';

@Injectable()
export class CareerService {
  constructor(@InjectModel(Career.name) private readonly careerModel: Model<Career>) {
  }

  async create(createCareerDto: CreateCareerDto): Promise<Career> {
    const career = new this.careerModel(createCareerDto);
    return career.save();
  }

  async getAll(): Promise<Career[]> {
    return await this.careerModel.find({}).sort({ startDate: 'desc' }).exec();
  }

  async getById(id: string): Promise<Career> {
    let career;
    try {
      career = await this.careerModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find career record.');
    }
    if (!career) {
      throw new NotFoundException('Could not find career record.');
    }
    return career;
  }
}
