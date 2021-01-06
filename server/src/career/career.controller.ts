import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { CareerService } from './career.service';

@Controller('api/career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @Post()
  async create(@Body() dto: CreateCareerDto) {
    await this.careerService.create(dto);
  }

  @Get()
  async getAll() {
    return await this.careerService.getAll();
  }

  @Get(':id')
  getById(@Param('id') prodId: string) {
    return this.careerService.getById(prodId);
  }
}
