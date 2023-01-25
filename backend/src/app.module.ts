import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
