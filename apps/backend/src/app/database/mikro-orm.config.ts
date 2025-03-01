import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { config } from 'dotenv';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Reserva } from './entities/reserva.entity';

config();

const mikroOrmConfig: MikroOrmModuleOptions = {
  driver: PostgreSqlDriver,
  clientUrl: process.env.DATABASE_URL,
  dbName: process.env.DATABASE_NAME || 'nome_do_banco',
  entities: [Reserva],
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/app/database/migrations',
    glob: '!(*.d).{ts,js}',
  },
  debug: true,
  autoLoadEntities: false,
  allowGlobalContext: true,
  driverOptions: {
    connection: {
      ssl: { rejectUnauthorized: false },
    },
  },
};


export default mikroOrmConfig;
