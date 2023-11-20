import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/server/features/auth/guards/jwt-auth-guard';

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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateCareerDTO): Promise<Career> {
    return this.careerService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCareerDTO): Promise<Career> {
    return this.careerService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Career> {
    return this.careerService.delete(id);
  }
}
