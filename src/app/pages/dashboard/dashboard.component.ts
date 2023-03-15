import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/app/shared/types';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  data: string = '8+';
  type: string = 'Vendas realidadas';
  title: string = 'Total de vendas';
  constructor(private route: ActivatedRoute) {}
  public titulo: string = '';
  ngOnInit() {
    const xRotaTitulo = this.route.snapshot.url.join('/');
    this.titulo = xRotaTitulo.charAt(0).toUpperCase() + xRotaTitulo.slice(1);
    console.log(this.route.snapshot.url);
  }
}
