import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerController } from '../controller/career.controller';
import { CareerService } from '../service/career.service';
import { CareerModel } from '../model/career.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'career', schema: CareerModel }])],
  controllers: [CareerController],
  providers: [CareerService],
})
export class CareerModule {}
