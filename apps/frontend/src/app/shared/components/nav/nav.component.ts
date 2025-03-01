import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'], 
})
export class NavComponent {
  
  menuAberto = false;

  constructor(private router: Router) {}

  irParaGerenciar() {
    this.router.navigate(['/auth/login']);
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto; 
  }
}
