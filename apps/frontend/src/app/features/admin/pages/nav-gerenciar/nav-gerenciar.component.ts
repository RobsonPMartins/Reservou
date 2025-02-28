import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-gerenciar',
  imports: [CommonModule],
  templateUrl: './nav-gerenciar.component.html',
  styleUrl: './nav-gerenciar.component.css',
})
export class NavGerenciarComponent {

  menuAberto = false;

  constructor(private router: Router) { }

  irParaHome() {
    this.router.navigate(['']);
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

}
