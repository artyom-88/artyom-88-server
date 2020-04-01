import { Controller, Get, Param } from '@nestjs/common';
import { CareerService } from '../service/career.service';

@Controller('api/career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @Get()
  async getAll() {
    return await this.careerService.getAll();
  }

  @Get(':id')
  getById(@Param('id') prodId: string) {
    return this.careerService.getById(prodId);
  }
}
