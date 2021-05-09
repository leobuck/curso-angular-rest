import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  usuario = { login: '', senha: '' };

  public login() {
    this.loginService.login(this.usuario);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null && localStorage.getItem('token').toString().trim() != null) {
      this.router.navigate(['home']);
    }
  }

  public recuperar() {
    this.loginService.recuperar(this.usuario.login)
  }

}
