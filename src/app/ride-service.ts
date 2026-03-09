import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ride } from './model/Entities'; // Assicurati che il path sia corretto

@Injectable({
  providedIn: 'root'
})
export class RideService {
  // Sostituisci con l'URL del tuo backend o mock server
  private apiUrl = 'https://localhost:3000/api/rides';

  constructor(private http: HttpClient) {}

  // CREATE - Aggiunge una nuova attrazione
  createRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>(this.apiUrl, ride);
  }

  // READ - Recupera tutte le attrazioni
  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.apiUrl);
  }

  // READ - Recupera una singola attrazione per ID
  getRideById(id: number): Observable<Ride> {
    return this.http.get<Ride>(`${this.apiUrl}/${id}`);
  }

  // UPDATE - Aggiorna un'attrazione esistente
  updateRide(ride: Ride): Observable<Ride> {
    return this.http.put<Ride>(`${this.apiUrl}/${ride.id}`, ride);
  }

  // DELETE - Rimuove un'attrazione
  deleteRide(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}