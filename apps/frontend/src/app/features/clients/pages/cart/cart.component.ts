import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from 'apps/frontend/src/app/core/services/reserva.service';
import { NavGerenciarComponent } from '../../../admin/pages/nav-gerenciar/nav-gerenciar.component';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-cart',
  standalone: true, 
  imports: [CommonModule, NavGerenciarComponent, DialogModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  reserva: any;
  reservaConfirmada: boolean = false;

  constructor(private reservaService: ReservaService, private router: Router) {}

  ngOnInit() {
    this.reserva = this.reservaService.getReserva();
  }

  finalizarReserva() {
    if (!this.reserva) {
      console.error('Nenhuma reserva para enviar.');
      return;
    }

    this.reservaService.enviarReserva().subscribe({
      next: (response) => {
        console.log('Reserva enviada com sucesso!', response);
        this.reservaService.clearReserva();
        this.reserva = null;
        this.reservaConfirmada = true; // Exibir modal de confirmação
      },
      error: (err) => {
        console.error('Erro ao enviar a reserva', err);
        alert('Erro ao finalizar a reserva. Tente novamente.');
      }
    });
  }

  voltarHome() {
    this.reservaConfirmada = false;
    this.router.navigate(['']); 
  }
}
