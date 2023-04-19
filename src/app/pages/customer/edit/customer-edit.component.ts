import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared/types';

@Component({
  selector: 'app-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent {
  customer?: Customer;
  title: string = '';
  customers!: Customer[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.customer = history.state.cliente;
    const segmentTitle =
      this.customer!.name.toString().charAt(0).toUpperCase() +
      this.customer!.name.toString().slice(1);
    this.title = segmentTitle;

    this.customers = JSON.parse(localStorage.getItem('customers') || '[]');
  }

  editar() {
    const index = this.customers.findIndex((c) => c.id === this.customer?.id);
    console.log(this.customer);

    if (index !== -1) {
      if (this.customer) {
        this.customer!.selected = false;
        this.customer!.deleted = false;
        Object.assign(this.customers[index], this.customer);
        console.log(
          'Object.assign',
          Object.assign(this.customers[index], this.customer)
        );
      }
    }
    localStorage.setItem('customers', JSON.stringify(this.customers));
    this.router.navigate(['clientes/listar']);
  }

  voltar() {
    if (
      window.confirm('Os dados digitados não serão salvos, deseja continuar?')
    ) {
      this.router.navigate(['clientes/listar']);
    }
  }
}
