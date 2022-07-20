import { Component } from '@angular/core';

import { ChartData, ChartDataset } from 'chart.js'


@Component({
  selector: 'app-graficas-doble',
  templateUrl: './graficas-doble.component.html',
  styles: [
  ]
})
export class GraficasDobleComponent  {

  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];

  proveedoresData: ChartDataset<'bar'>[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];

  productoData: ChartDataset<'bar'>[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];

  proveedoresChartData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: this.proveedoresData
  }

  productoChartData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: this.productoData
  }

}
