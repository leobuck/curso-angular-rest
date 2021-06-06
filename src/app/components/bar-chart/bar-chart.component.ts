import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { UsuarioGrafico } from 'src/app/model/usuarioGrafico';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Salário Usuário' }
  ];

  usuarioGrafico = new UsuarioGrafico();

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.carregarGrafico().subscribe(data => {
      this.usuarioGrafico = data;

      this.barChartLabels = this.usuarioGrafico.nome.split(',');

      let salarioArray = JSON.parse('[' + this.usuarioGrafico.salario + ']');

      this.barChartData = [
        { data: salarioArray, label: 'Salário Usuário' }
      ];
    });
  }
  
}
