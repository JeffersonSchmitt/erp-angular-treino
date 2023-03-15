import { AfterViewInit, Component } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'erp-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.scss'],
})
export class GraphicCardComponent {
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Vendas' },
    { data: [30, 20, 15, 52, 50, 23, 15], label: 'Vendas no cartão' },
    { data: [32, 30, 32, 52, 25, 20, 21], label: 'Vendas no dinheiro' },
  ];
  public lineChartLabels: Array<any> = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
  ];
  public lineChartOptions: any = {
    responsive: false,
    tension: 0.5,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        ticks: { color: 'white', beginAtZero: true },
      },
      x: {
        ticks: { color: 'white', beginAtZero: true },
      },
    },
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
}
