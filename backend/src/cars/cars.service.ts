import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carsRepository: Repository<Car>,
  ) {}
  async create(car: CreateCarDto) {
    return await this.carsRepository.save(car);
  }
  async findAll() {
    return await this.carsRepository.find();
  }
  async update(car: UpdateCarDto) {
    return await this.carsRepository.save(car);
  }
  async delete(id: string) {
    return await this.carsRepository.delete({ id });
  }
}
