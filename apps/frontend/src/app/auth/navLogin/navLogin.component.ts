import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-login',
  imports: [CommonModule],
  templateUrl: './navLogin.component.html',
  styleUrl: './navLogin.component.css',
})
export class NavLoginComponent {
    menuAberto = false;
  
    constructor(private router: Router) {}
  
    irParaHome() {
      this.router.navigate(['']);
    }
  
    toggleMenu() {
      this.menuAberto = !this.menuAberto; 
    }
}
