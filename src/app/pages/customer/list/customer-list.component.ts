import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListBase } from 'src/app/shared/listBase';
import { Customer } from 'src/app/shared/types';

@Component({
  selector: 'app-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent extends ListBase<Customer> {
  constructor(
    private activatedRoute: ActivatedRoute,
    private routerList: Router
  ) {
    super(activatedRoute, routerList);
  }

  public title: string = '';

  ngOnInit() {
    this.title = 'Todos os ' + this.activatedRoute.snapshot.url[0];
    this.items = JSON.parse(localStorage.getItem('customers') || '[]');
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
  }

  selectCustomer(customer: Customer) {
    this.select(customer);
  }

  editCustomer() {
    this.items.forEach((customer) => {
      if (customer.selected == true) {
        this.routerList.navigate(['clientes/editar'], { state: { customer } });
      }
    });
  }

  deleteCustomer() {
    this.delete('customers');
  }

  searchCustomer(pSearchTerm: string) {
    this.search(pSearchTerm);
  }
}
