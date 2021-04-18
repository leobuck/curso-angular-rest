import { Component } from '@angular/core';
import { LoginService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private loginService: LoginService
  ) {}

  title = 'curso-angular-rest';

  usuario = {login: '', senha: ''};

  public login() {
    this.loginService.login(this.usuario);
  }
}
