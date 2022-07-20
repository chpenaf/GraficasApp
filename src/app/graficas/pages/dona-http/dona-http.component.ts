import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor( private _gs: GraficasService ) {}

  ngOnInit() {
    // this._gs.getUsuariosRedesSociales()
    //   .subscribe(
    //     data => {
    //       const labels = Object.keys( data );
    //       const values = Object.values( data );

    //       this.doughnutChartData.labels = labels;
    //       this.doughnutChartData.datasets[0].data = values;
    //     }
    //   )
    this._gs.getUsuariosRRSSData()
      .subscribe( ({ labels, values } )  => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets[0].data = values;
      });
  }

  // Doughnut
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#6405F0','#0724E3', '#05A0F0']
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
