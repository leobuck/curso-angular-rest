import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Telefone } from 'src/app/model/telefone';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {
  usuario = new Usuario();

  constructor(
    private router: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    if (id != null) {
      this.usuarioService.getUsuario(Number(id)).subscribe(data => {
        this.usuario = data;
      });
    }
  }

  salvar() {
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.usuarioService.updateUsuario(this.usuario).subscribe(data => {
        this.novo();
      });
    } else {
      this.usuarioService.saveUsuario(this.usuario).subscribe(data => {
        this.novo();
      });
    }
  }

  deletarTelefone(fone: Telefone) {
    if (fone.id !== null && confirm("Deseja excluir o telefone?")) {
      this.usuarioService.deletarTelefone(fone.id).subscribe(data => {
        const index = this.usuario.telefones.indexOf(fone);
        this.usuario.telefones.splice(index, 1);
      });
    }
  }

  novo() {
    this.usuario = new Usuario();
  }

}
