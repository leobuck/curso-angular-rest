import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    
  }

}