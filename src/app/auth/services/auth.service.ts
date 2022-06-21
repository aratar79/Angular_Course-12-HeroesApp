import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor(
    private http: HttpClient
  ) { }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('id', auth.id))
      );
  }
}
// Explicación: usamos el pipe para obtener la respuesta del observable, si nos subscribieramos aquí
// nos daría un error en la subscripción que hecemos en el logon.component. El operador tap nos sirve para
// crear efectos secundarios y el pipe para concatenar funciones..