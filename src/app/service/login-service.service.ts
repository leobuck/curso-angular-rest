import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app-constants';

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
}
