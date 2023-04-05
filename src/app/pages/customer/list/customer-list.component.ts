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

  customers: Customer[] = [
    {
      id: 1,
      nome: 'Ana Silva',
      cpfCnpj: '123.456.789-00',
      email: 'ana.silva@email.com',
      cep: '12345-678',
      endereco: 'Rua das Flores',
      cidade: 'São Paulo',
      estado: 'SP',
      telefone: '(11) 1234-5678',
      celular: '(11) 98765-4321',
      descricao: 'Cliente regular',
      selected: false,
      deleted: false,
    },
    {
      id: 2,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 3,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 4,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 5,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 6,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 7,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 8,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 9,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 10,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 11,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 12,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 13,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 14,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
    {
      id: 15,
      nome: 'João Souza',
      cpfCnpj: '987.654.321-00',
      email: 'joao.souza@email.com',
      cep: '54321-876',
      endereco: 'Avenida dos Anjos',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      telefone: '(21) 2345-6789',
      celular: '(21) 87654-3210',
      descricao: 'Novo cliente',
      selected: false,
      deleted: false,
    },
  ];

  ngOnInit() {
    const lastSegment =
      this.activatedRoute.snapshot.url[
        this.activatedRoute.snapshot.url.length - 1
      ];
    const segmentTitle =
      lastSegment.toString().charAt(0).toUpperCase() +
      lastSegment.toString().slice(1);
    this.title = segmentTitle;
    this.items = this.customers;
  }

  selectCustomer(cliente: Customer) {
    this.select(cliente);
  }

  editCustomer() {
    this.customers.forEach((cliente) => {
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
