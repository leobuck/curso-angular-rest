import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Usuario } from '../model/usuario';
import { UsuarioRelatorio } from '../model/usuarioRelatorio';

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

  saveUsuario(usuario: Usuario):Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, usuario);
  }

  updateUsuario(usuario: Usuario):Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, usuario);
  }

  deletarTelefone(idFone: number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + "deletarTelefone/" + idFone, {responseType: 'text' as 'json'});
  }

  getUsuariosPorPagina(pagina: number): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + "page/" + pagina);
  }

  consultarUsuarioPorPagina(nome: string, pagina: number): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + "usuariosPorNome/" + nome + "/page/" + pagina);
  }

  getProfissoes(): Observable<any> {
    return this.http.get<any>(AppConstants.getBaseUrlPath + "profissao/");
  }

  downloadRelatorio(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + "relatorio", {responseType: 'text' as 'json'});
  }

  downloadRelatorioParam(relat: UsuarioRelatorio): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl + "relatorio", relat, {responseType: 'text' as 'json'});
  }

  carregarGrafico(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + "grafico");
  }
}
