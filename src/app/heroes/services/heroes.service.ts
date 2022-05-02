import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this._baseUrl}/heroes/`);
  }
  
  getHeroe(id: string): Observable<Heroe> {
    return this.httpClient.get<Heroe>(`${this._baseUrl}/heroes/${id}`);
  }

  getHeroesSuggestions(termino: string): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this._baseUrl}/heroes?q=${termino}&_limit=6`);
  }
}
