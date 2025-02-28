import { Controller, Post, Get, Body } from '@nestjs/common';
import { ReservasService } from './reservas.service';

@Controller('reservas')


export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  criarReserva(@Body() dadosReserva: any) {
    console.log('📩 Recebendo reserva:', dadosReserva);
    return this.reservasService.salvarReserva(dadosReserva);
  }

  @Get()
  obterReservas() {
    console.log('📤 Enviando reservas para o frontend:', this.reservasService.listarReservas());
    return this.reservasService.listarReservas();
  }
}
