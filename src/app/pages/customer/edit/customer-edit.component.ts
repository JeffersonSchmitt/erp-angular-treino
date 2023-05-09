import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error, map } from 'jquery';
import { of, switchMap } from 'rxjs';
import { SearchCepServiceService } from 'src/app/service/search-cep-service.service';
import { Customer, ViaCep } from 'src/app/shared/types';

@Component({
  selector: 'app-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent {
  customer?: Customer;
  title: string = '';
  customers!: Customer[];
  endereco!: ViaCep;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchCepService: SearchCepServiceService
  ) {}

  ngOnInit() {
    this.customer = history.state.customer;
    const segmentTitle =
      this.customer!.name.toString().charAt(0).toUpperCase() +
      this.customer!.name.toString().slice(1);
    this.title = segmentTitle;

    this.customers = JSON.parse(localStorage.getItem('customers') || '[]');
  }

  editar() {
    const index = this.customers.findIndex((c) => c.id === this.customer?.id);

    if (index !== -1) {
      if (this.customer) {
        this.customer!.selected = false;
        this.customer!.deleted = false;

        Object.assign(this.customers[index], this.customer);
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
  buscarCep(cep: string) {
    debugger;
    if (this.customer?.cep != '') {
      this.searchCepService
        .searchCep(cep)
        .pipe(
          switchMap((endereco) => {
            this.endereco = endereco;
            return of(endereco);
          })
        )
        .subscribe(() => {
          this.customer!.address = this.endereco.logradouro;
          this.customer!.city = this.endereco.localidade;
          this.customer!.state = this.endereco.uf;
          this.customer!.neighborhood = this.endereco.bairro;
        });
    }
  }
}
