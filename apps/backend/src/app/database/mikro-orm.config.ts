import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { config } from 'dotenv';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Reserva } from './entities/reserva.entity';

config();

const mikroOrmConfig: MikroOrmModuleOptions = {
  driver: PostgreSqlDriver,
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  dbName: process.env.DATABASE_NAME || 'reservas_db',
  entities: [Reserva],
  migrations: {
    path: 'dist/migrations',  
    pathTs: 'src/app/database/migrations',  
    glob: '!(*.d).{ts,js}',  
  },
  debug: true,
  autoLoadEntities: false, 
  allowGlobalContext: true,
};

export default mikroOrmConfig;
