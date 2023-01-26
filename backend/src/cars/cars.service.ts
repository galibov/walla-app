import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import {ICar} from "./car.interface";
import {BadRequestException, NotFoundException} from "@nestjs/common";

export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carsRepository: Repository<Car>,
  ) {}

  async create(car: ICar): Promise<ICar> {
    try {
      const _car = await this.carsRepository.save(car);
      console.log("create: car saved successful")
      return _car;
    } catch (e) {
      console.error("create: error on saving car ", e.message())
      throw BadRequestException
    }
  }

  async findAll(): Promise<ICar[]> {
    try {
      const _cars =  await this.carsRepository.find();
      console.log("findAll: cars list get successful")
      return _cars;
    } catch (e) {
      console.error("findAll: error on get cars list ", e.message())
      throw BadRequestException;
    }
  }

  async update(car: ICar): Promise<ICar> {
    try {
      const _car = this.carsRepository.findOneBy({id: car.id})
      if (!_car) {
        console.error("update: car with id " + car.id + " not found")
        throw NotFoundException;
      } else {
        const _carUpdated = await this.carsRepository.save(car);
        console.log("update: car updated successful")
        return _carUpdated;
      }
    }
    catch (e) {
      console.error("update: error on update car ", e.message())
      throw BadRequestException;
    }
  }

  async delete(id: number) {
    try {
      await this.carsRepository.delete({id});
      console.log("delete: car deleted sucessfull")
    } catch (e) {
      console.error("delete: error on delete car ", e.message())
      throw BadRequestException;
    }
  }
}
