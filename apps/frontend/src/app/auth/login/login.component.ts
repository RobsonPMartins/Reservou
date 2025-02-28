import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { NavLoginComponent } from '../navLogin/navLogin.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, NavLoginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  email = '';
  senha = '';
  erro = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.senha).subscribe({
      next: (res) => {
        if (res && res.token) {
          this.authService.salvarToken(res.token);
          this.router.navigate(['/admin']);
        } else {
          this.erro = 'Erro ao autenticar o usuário';
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.erro = 'Credenciais inválidas';
        } else {
          this.erro = 'Erro ao conectar com o servidor';
        }
      }
    });
  }
}
