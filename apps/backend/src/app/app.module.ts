import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ReservasModule } from './modules/reservas/reservas.module';
import mikroOrmConfig from './database/mikro-orm.config';
import { AuthModule } from './core/auth/auth.module';


@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    ReservasModule,
    AuthModule,
  ],
})
export class AppModule {}
// module
