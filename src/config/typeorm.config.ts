import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
// import { Contact } from 'src/entities/add.entity';
// import { TodoEntity } from 'src/entities/todo.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'lhome',
  entities: [join(process.cwd(),'dist/**/*.entity.js')],
  synchronize: true
};
