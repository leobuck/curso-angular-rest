import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private route: Router
  ) { }
  
  title = 'curso-angular-rest';

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['login']);
    }
  }

  public sair() {
    localStorage.clear();
    this.route.navigate(['login']);
  }

  public esconderMenu() {
    if (localStorage.getItem('token') != null && localStorage.getItem('token').toString().trim() != null) {
      return false;
    } else {
      return true;
    }
  }
}
