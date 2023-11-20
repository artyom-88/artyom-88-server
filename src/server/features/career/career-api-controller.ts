import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateCareerDTO, UpdateCareerDTO } from './career-models';
import { Career } from './career-schema';
import { CareerService } from './career-service';

@Controller('api/career')
export class CareerApiController {
  constructor(private readonly careerService: CareerService) {}

  @Get()
  findAll(): Promise<Career[]> {
    return this.careerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') prodId: string): Promise<Career> {
    return this.careerService.findOne(prodId);
  }

  @Post()
  create(@Body() dto: CreateCareerDTO): Promise<Career> {
    return this.careerService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCareerDTO): Promise<Career> {
    return this.careerService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Career> {
    return this.careerService.delete(id);
  }
}
