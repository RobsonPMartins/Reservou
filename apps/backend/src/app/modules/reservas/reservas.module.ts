import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Reserva } from '../../database/entities/reserva.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Reserva])],
  controllers: [ReservasController],
  providers: [ReservasService],
  exports: [ReservasService],
})
export class ReservasModule {}
