import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app-constants';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(usuario) {
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      let token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem('token', token);

      this.router.navigate(['home']);
    },   
    error => {
      console.error("Erro ao fazer login!");
    });
  }

  isLogged() {
    if (localStorage.getItem('token') != null && localStorage.getItem('token').toString().trim() != null) {
      return true;
    } else {
      return false;
    }
  }

  recuperar(login: string) {
    let usuario = new Usuario();
    usuario.login = login;
    usuario.senha = "";

    return this.http.post(AppConstants.getBaseUrlPath + "recuperar/", usuario).subscribe(data => {
      alert(JSON.parse(JSON.stringify(data)).error);
    },   
    error => {
      alert("Erro ao recuperar login!");
    });
  }
}
