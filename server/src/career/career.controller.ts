import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { CareerService } from './career.service';
import { Career } from './entities/career.entity';

@Controller('api/career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @Post()
  async create(@Body() dto: CreateCareerDto): Promise<Career> {
    return await this.careerService.create(dto);
  }

  @Get()
  async getAll(): Promise<Career[]> {
    return await this.careerService.getAll();
  }

  @Get(':id')
  getById(@Param('id') prodId: string): Promise<Career> {
    return this.careerService.getById(prodId);
  }
}
