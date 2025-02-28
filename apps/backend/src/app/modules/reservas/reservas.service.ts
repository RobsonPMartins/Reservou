import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservasService {
  private reservas: any[] = [];

  salvarReserva(reserva: any) {
    this.reservas.push(reserva);
    console.log('✅ Reserva salva:', reserva);
    return { message: 'Reserva salva com sucesso!', reserva };
  }

  listarReservas() {
    return this.reservas;
  }
}
