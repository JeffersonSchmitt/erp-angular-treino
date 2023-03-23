import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  selectedCliente: any;
  public titulo: string = '';

  clientes = [
    {
      id: '1',
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
      selecionado: false,
    },
    {
      id: '2',
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
      selecionado: false,
    },
    {
      id: '3',
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
      selecionado: false,
    },
    {
      id: '4',
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
      selecionado: false,
    },
    {
      id: '5',
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
      selecionado: false,
    },
    {
      id: '6',
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
      selecionado: false,
    },
    {
      id: '7',
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
      selecionado: false,
    },
    {
      id: '8',
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
      selecionado: false,
    },
    {
      id: '9',
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
      selecionado: false,
    },
    {
      id: '10',
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
      selecionado: false,
    },
    {
      id: '11',
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
      selecionado: false,
    },
    {
      id: '12',
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
      selecionado: false,
    },
    {
      id: '13',
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
      selecionado: false,
    },
    {
      id: '14',
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
      selecionado: false,
    },
    {
      id: '15',
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
      selecionado: false,
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const xRotaTitulo = this.route.snapshot.url.join('/');
    this.titulo = xRotaTitulo.charAt(0).toUpperCase() + xRotaTitulo.slice(1);
  }
  selecionarCliente(cliente: any) {
    if (!cliente.selecionado) {
      this.selectedCliente = cliente;
      this.clientes.forEach((p) => (p.selecionado = false));
      cliente.selecionado = true;
    } else {
      cliente.selecionado = false;
    }
  }
}
