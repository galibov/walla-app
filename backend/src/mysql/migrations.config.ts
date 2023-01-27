import { DataSource } from 'typeorm';
import { mysqlConfig } from './mysql.config';
import { config } from 'dotenv';

config();

export default new DataSource(mysqlConfig());
