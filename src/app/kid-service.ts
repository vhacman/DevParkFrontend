import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kid } from './models/kid.interface';

@Injectable({
  providedIn: 'root'
})
export class KidService {
  private apiUrl = 'http://localhost:3000/api/kids';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Kid[]> {
    return this.http.get<Kid[]>(this.apiUrl);
  }

  getById(id: number): Observable<Kid> {
    return this.http.get<Kid>(`${this.apiUrl}/${id}`);
  }

  create(kid: Kid): Observable<Kid> {
    return this.http.post<Kid>(this.apiUrl, kid);
  }

  update(kid: Kid): Observable<Kid> {
    return this.http.put<Kid>(`${this.apiUrl}/${kid.id}`, kid);
  }

  // Utile per aggiornare solo fame/sete o posizione senza inviare tutto l'oggetto
  patch(id: number, changes: Partial<Kid>): Observable<Kid> {
    return this.http.patch<Kid>(`${this.apiUrl}/${id}`, changes);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}