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
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
// import { DeleteCarDto } from './dto/delete-car.dto';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Post()
  create(@Body() car: CreateCarDto): Promise<CreateCarDto> {
    return this.carsService.create(car);
  }
  @Get()
  findAll(): Promise<CreateCarDto[]> {
    return this.carsService.findAll();
  }
  @Patch()
  update(@Body() car: UpdateCarDto): Promise<UpdateCarDto> {
    return this.carsService.update(car);
  }
  @Delete()
  delete(@Param('id') id: string) {
    return this.carsService.delete(id);
  }
}
