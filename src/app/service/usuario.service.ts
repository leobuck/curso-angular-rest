import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete<any>(AppConstants.baseUrl + id, {responseType: 'text' as 'json'});
  }

  consultarUsuario(nome: string): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + "usuariosPorNome/" + nome);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }
}
