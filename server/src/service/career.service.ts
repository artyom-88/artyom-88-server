import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCareerDto } from '../dto/create-career.dto';
import { Career } from '../model/career.model';

@Injectable()
export class CareerService {
  constructor(@Inject('CAREER_MODEL') private readonly careerModel: Model<Career>) {
  }

  async create(dto: CreateCareerDto): Promise<Career> {
    console.log('api/career create() dto:');
    console.log(JSON.stringify(dto, null, 1));
    const record = new this.careerModel(dto);
    return record.save();
  }

  async getAll() {
    const records = await this.careerModel.find({}).exec();
    console.log('api/career getAll()');
    console.log(JSON.stringify(records, null, 1));
    return records;
  }

  async getById(id: string) {
    console.log(`api/career getById(${id})`);
    let record;
    try {
      record = await this.careerModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find career record.');
    }
    if (!record) {
      throw new NotFoundException('Could not find career record.');
    }
    return record;
  }
}
