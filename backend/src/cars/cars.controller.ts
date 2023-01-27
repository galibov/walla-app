import {
  Controller,
  Body,
  Get,
  Patch,
  Delete,
  Post,
  Param,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Post()
  create(@Body() car: CarDto): Promise<CarDto> {
    return this.carsService.create(car);
  }
  @Get()
  findAll(): Promise<CarDto[]> {
    return this.carsService.findAll();
  }
  @Patch()
  update(@Body() car: CarDto): Promise<CarDto> {
    return this.carsService.update(car);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.carsService.delete(id);
  }
}
