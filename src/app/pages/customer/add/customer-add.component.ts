import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent {
  public titulo: string = '';

  ngOnInit() {
    const xRotaTitulo = this.route.snapshot.url.join('/');
    this.titulo = xRotaTitulo.charAt(0).toUpperCase() + xRotaTitulo.slice(1);
  }

  constructor(private route: ActivatedRoute) {}
}
