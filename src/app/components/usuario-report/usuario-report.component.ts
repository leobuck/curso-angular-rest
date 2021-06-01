import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioRelatorio } from 'src/app/model/usuarioRelatorio';
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
  selector: 'app-usuario-report',
  templateUrl: './usuario-report.component.html',
  styleUrls: ['./usuario-report.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
              { provide: NgbDateAdapter, useClass: FormatDateAdapter }]
})
export class UsuarioReportComponent {
  usuarioRelatorio = new UsuarioRelatorio();

  constructor(
    private router: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  imprimirRelatorio() {
    console.log(this.usuarioRelatorio);
  }
  
}
