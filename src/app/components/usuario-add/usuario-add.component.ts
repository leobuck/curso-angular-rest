import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Telefone } from 'src/app/model/telefone';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      }
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
  
}

@Injectable()
export class FormataData extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string | null {
    return date ? this.validarData(date.day) + this.DELIMITER + this.validarData(date.month) + this.DELIMITER + date.year : '';
  }

  toModel(date: NgbDateStruct): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }

  validarData(valor: number) {
    if (valor.toString() !== '' && valor <= 9) {
      return '0' + valor;
    }
    return valor;
  }

}

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
              { provide: NgbDateAdapter, useClass: FormatDateAdapter }]
})
export class UsuarioAddComponent implements OnInit {
  usuario = new Usuario();
  telefone = new Telefone();

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
    if (fone.id === undefined) {
      const index = this.usuario.telefones.indexOf(fone);
      this.usuario.telefones.splice(index, 1);
      return;
    }
    
    if (fone.id !== null && confirm("Deseja excluir o telefone?")) {
      this.usuarioService.deletarTelefone(fone.id).subscribe(data => {
        const index = this.usuario.telefones.indexOf(fone);
        this.usuario.telefones.splice(index, 1);
      });
    }
  }

  adicionarTelefone() {
    if (this.usuario.telefones === undefined) {
      this.usuario.telefones = new Array<Telefone>();
    }

    this.usuario.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }

  novo() {
    this.usuario = new Usuario();
    this.telefone = new Telefone();
  }

}
