import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'apps/frontend/src/app/shared/components/header/header.component';
import { HeroComponent } from 'apps/frontend/src/app/shared/components/hero/hero.component';
import { NavComponent } from 'apps/frontend/src/app/shared/components/nav/nav.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, HeroComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  estadoSelecionado = '';
  checkinData = '';
  checkoutData = '';
  qtdHospedes: { [key: string]: number } = {};

  onEstadoSelecionado(estado: string): void {
    this.estadoSelecionado = estado;
  }

  atualizarDatas(datas: { checkin: string, checkout: string }): void {
    this.checkinData = datas.checkin;
    this.checkoutData = datas.checkout;
  }


  atualizarHospedes(qtd: { [key: string]: number }) {
    this.qtdHospedes = qtd;
  }

}
