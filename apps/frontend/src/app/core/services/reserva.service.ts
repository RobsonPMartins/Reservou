import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ReservaService {

    private apiUrl = 'http://localhost:3000/reservas'; 
    private storageKey = 'reservaSelecionada';

    constructor(private http: HttpClient) {}

    setReserva(reserva: any) {
        localStorage.setItem(this.storageKey, JSON.stringify(reserva));
    }

    getReserva(): any {
        const storedReserva = localStorage.getItem(this.storageKey);
        return storedReserva ? JSON.parse(storedReserva) : null;
    }

    clearReserva() {
        localStorage.removeItem(this.storageKey);
    }

    enviarReserva(): Observable<any> {
        const reserva = this.getReserva();
        if (!reserva) {
            throw new Error('Nenhuma reserva selecionada.');
        }
        return this.http.post(this.apiUrl, reserva);
    }

    getReservas(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
