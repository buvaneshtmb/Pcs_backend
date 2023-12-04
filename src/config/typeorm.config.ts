import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { config } from 'dotenv';
config();
// import { Contact } from 'src/entities/add.entity';
// import { TodoEntity } from 'src/entities/todo.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: [join(process.cwd(),'dist/**/*.entity.js')],
  synchronize: true
};

