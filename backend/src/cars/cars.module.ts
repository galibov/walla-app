import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsService } from './cars.service';
import { MysqlModule } from '../mysql/mysql.module';

import { Car } from './car.entity';
@Module({
  imports: [MysqlModule, TypeOrmModule.forFeature([Car])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
