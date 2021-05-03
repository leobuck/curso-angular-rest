import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
  nome: string;
  p: number = 1;
  total: number;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  deletar(id: number) {
    if (confirm("Deseja excluir o usuário?")) {
      this.usuarioService.deleteUsuario(id).subscribe(data => {
        this.listar();
      });
    }
  }

  listar() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }

  consultar() {
    this.usuarioService.consultarUsuario(this.nome).subscribe(data => {
      this.usuarios = data;
    });
  }

  carregarPagina(pagina) {
    this.usuarioService.getUsuariosPorPagina(pagina-1).subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }
}
