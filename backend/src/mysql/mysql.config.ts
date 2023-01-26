import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const mysqlConfig: () => MysqlConnectionOptions = () => {
  return {
    type: 'mysql',
    host: process.env.MYSQL_DB_HOST,
    port: parseInt(process.env.MYSQL_DB_PORT),
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    entities: [__dirname + '/../**/*.entity{.js,.ts}'],
    migrations: [__dirname + '/../migrations/*{.js,.ts}'],
    migrationsTableName: 'migrations',
    migrationsRun: false,
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production',
    charset: 'utf8mb4_general_ci',
    extra: {
      charset: 'utf8mb4_general_ci',
    },
  };
};
