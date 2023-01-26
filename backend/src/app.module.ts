import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import {MysqlModule} from "./mysql/mysql.module";
import {ConfigurationModule} from "./configuration/configuration.module";

@Module({
  imports: [ConfigurationModule,MysqlModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
