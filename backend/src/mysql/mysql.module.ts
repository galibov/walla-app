import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig } from './mysql.config';
import { ConfigurationModule } from '../configuration/configuration.module';

@Global()
@Module({
  imports: [ConfigurationModule, TypeOrmModule.forRoot(mysqlConfig())],
})
export class MysqlModule {}
