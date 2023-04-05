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
    const lastSegment =
      this.route.snapshot.url[this.route.snapshot.url.length - 1];
    const segmentTitle =
      lastSegment.toString().charAt(0).toUpperCase() +
      lastSegment.toString().slice(1);
    this.title = segmentTitle;
    this.customer = history.state.cliente;
    this.customers = JSON.parse(localStorage.getItem('customers') || '[]');
  }

  editar() {
    const index = this.customers.findIndex((c) => c.id === this.customer?.id);
    // this.customers.forEach((customer) => {
    //   if (customer.id === this.customer?.id) {
    //     customer = this.customer;
    //   }
    //   console.log(customer);
    // });
    if (index !== -1) {
      Object.assign(this.customers[index], this.customer);
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
