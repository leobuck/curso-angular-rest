import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { UsuarioAddComponent } from './components/usuario-add/usuario-add.component';
import { UsuarioReportComponent } from './components/usuario-report/usuario-report.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './service/login.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'usuarios', component: UsuarioComponent, canActivate: [LoginGuard] },
  { path: 'usuario-add', component: UsuarioAddComponent, canActivate: [LoginGuard] },
  { path: 'usuario-add/:id', component: UsuarioAddComponent, canActivate: [LoginGuard] },
  { path: 'usuario-report', component: UsuarioReportComponent, canActivate: [LoginGuard] },
  { path: 'chart', component: BarChartComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
