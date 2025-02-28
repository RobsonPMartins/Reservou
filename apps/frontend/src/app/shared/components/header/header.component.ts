import { Component, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  // Estado selecionado
  @Output() estadoSelecionado = new EventEmitter<string>();
  estadosBrasil: string[] = ['São Paulo', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
  selecionarEstadosBrasil = '';

  onEstadoSelecionado(): void {
    this.estadoSelecionado.emit(this.selecionarEstadosBrasil);
  }

  // Check-in e Check-out
  @Output() datasSelecionadas = new EventEmitter<{ checkin: string, checkout: string }>();
  checkinData = '';
  checkoutData = '';

  onDatasSelecionadas(): void {
    this.datasSelecionadas.emit({
      checkin: this.checkinData,
      checkout: this.checkoutData
    });
  }

  // Quantidade de hóspedes
  @Output() hospedesMudaram = new EventEmitter<{ [key: string]: number }>();

  hospedesBrasil: string[] = ['Adultos', 'Criancas', 'Bebes', 'Pets'];
  selecionarHospede = '';
  qtdHospedes: { [key: string]: number } = {};

  constructor() {
    this.hospedesBrasil.forEach(hospede => {
      this.qtdHospedes[hospede] = 0;
    });
  }

  atualizarQuantidadeHospedes(): void {
    this.hospedesMudaram.emit(this.qtdHospedes);
  }

  adicionarHospede(tipo: string) {
    this.qtdHospedes[tipo]++;
    this.atualizarQuantidadeHospedes();
  }

  removerHospede(tipo: string) {
    if (this.qtdHospedes[tipo] > 0) {
      this.qtdHospedes[tipo]--;
      this.atualizarQuantidadeHospedes();
    }
  }
}
