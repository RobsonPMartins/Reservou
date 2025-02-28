import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'apps/frontend/src/app/core/services/reserva.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavGerenciarComponent } from '../nav-gerenciar/nav-gerenciar.component';

@Component({
  selector: 'app-gerenciar',
  imports:[CommonModule ,FormsModule, NavGerenciarComponent],
  templateUrl: './gerenciar.component.html',
  styleUrl: './gerenciar.component.css',
})
export class GerenciarComponent implements OnInit {
  reservas: any[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit() {
    this.carregarReservas();
  }

  carregarReservas() {
    this.reservaService.getReservas().subscribe({
      next: (reservas) => {
        console.log('📥 Recebendo reservas do backend:', reservas);
        this.reservas = reservas;
      },
      error: (err) => console.error('Erro ao buscar reservas:', err),
    });
  }
}
