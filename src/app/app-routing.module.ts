import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioAddComponent } from './components/usuario-add/usuario-add.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'usuario-add', component: UsuarioAddComponent },
  { path: 'usuario-add/:id', component: UsuarioAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
