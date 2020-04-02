import { Module } from '@nestjs/common';
import { CareerController } from '../controller/career.controller';
import { careerProviders } from '../providers/career.providers';
import { CareerService } from '../service/career.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CareerController],
  providers: [CareerService, ...careerProviders]
})

export class CareerModule {
}
