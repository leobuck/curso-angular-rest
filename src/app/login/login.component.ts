import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  usuario = { login: '', senha: '' };

  public login() {
    this.loginService.login(this.usuario);
  }

  ngOnInit(): void {
  }

}
