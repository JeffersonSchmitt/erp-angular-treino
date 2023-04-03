import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/types';

@Component({
  selector: 'app-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent {
  cliente?: Cliente;
  title: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const lastSegment =
      this.route.snapshot.url[this.route.snapshot.url.length - 1];
    const segmentTitle =
      lastSegment.toString().charAt(0).toUpperCase() +
      lastSegment.toString().slice(1);
    this.title = segmentTitle;
  }

  voltar() {
    if (
      window.confirm('Os dados digitados não serão salvos, deseja continuar?')
    ) {
      this.router.navigate(['clientes/listar']);
    }
  }
}
