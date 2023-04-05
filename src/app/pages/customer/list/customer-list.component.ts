import { ChangeDetectorRef, Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
    const lastSegment =
      this.activatedRoute.snapshot.url[
        this.activatedRoute.snapshot.url.length - 1
      ];
    const segmentTitle =
      lastSegment.toString().charAt(0).toUpperCase() +
      lastSegment.toString().slice(1);
    this.title = segmentTitle;
    this.items = JSON.parse(localStorage.getItem('customers') || '[]');
  }

  selectCustomer(cliente: Customer) {
    this.select(cliente);
  }

  editCustomer() {
    this.items.forEach((cliente) => {
      if (cliente.selected == true) {
        this.routerList.navigate(['clientes/editar'], { state: { cliente } });
      }
    });
  }

  deleteCustomer() {
    this.delete();
  }

  searchCustomer(pSearchTerm: string) {
    this.search(pSearchTerm);
  }
}
