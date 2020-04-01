import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Career } from '../model/career.model';
import { Model } from 'mongoose';

@Injectable()
export class CareerService {
  constructor(@InjectModel('career') private careerModel: Model<Career>) {}

  async getAll() {
    const records = await this.careerModel.find().exec();
    console.log(JSON.stringify(records, null, 1));
    return records;
  }

  async getById(id: string) {
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
