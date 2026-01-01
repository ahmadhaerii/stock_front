import { Component, Input } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexDataLabels,
} from 'ng-apexcharts';
import { IModal, NiraModalConfig } from 'nira-modal';
import { Subject } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.component.html',
  styleUrls: ['./chart-modal.component.scss'],
})
export class ChartModalComponent implements IModal {
  @Input() closeSubject!: Subject<any>;
  @Input() config!: NiraModalConfig;
  chartOptions!: ChartOptions;
  title = '';

  constructor() {}

  ngOnInit(): void {
    if (this.config.data) {
      this.title = this.config.data.title;
      this.chartOptions = this.config.data.chartData;
    }
  }
  close(message: string = 'false') {
    this.closeSubject.next(message);
  }
}
