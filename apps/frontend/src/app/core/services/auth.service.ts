import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://reservou-backend.onrender.com/auth/login';  

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, senha });
  }

  salvarToken(token: string) {
    localStorage.setItem('adminToken', token);
  }

  logout() {
    localStorage.removeItem('adminToken');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('adminToken') !== null;
  }
}
