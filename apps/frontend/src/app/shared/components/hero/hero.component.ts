import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reservas } from '../../cards/data/reserva.data';
import { Router } from '@angular/router';
import { ReservaService } from '../../../core/services/reserva.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnChanges {
  @Input() estadoSelecionado = '';
  @Input() checkinData = '';
  @Input() checkoutData = '';
  @Input() qtdHospedes: {[key: string]: number} = {};

  reservasFiltradas: any[] = [];
  reservas = reservas;

  constructor(private reservaService: ReservaService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['estadoSelecionado']) {
      this.filtrarReservas();
    }
  }

  filtrarReservas() {
    if (this.estadoSelecionado) {
      this.reservasFiltradas = this.reservas.filter(reserva => reserva.estado === this.estadoSelecionado);
    } else {
      this.reservasFiltradas = [...this.reservas];
    }
  }

  adicionarAoCarrinho(reserva: any) {
    const reservaCompleta = {
      ...reserva,
      checkin: this.checkinData,
      checkout: this.checkoutData,
      hospedes: this.qtdHospedes
    };

    this.reservaService.setReserva(reservaCompleta);
    this.router.navigate(['/cart']); 
  }
}
