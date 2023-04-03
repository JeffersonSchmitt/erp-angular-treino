import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/types';

@Component({
  selector: 'app-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  selectedCliente: any;
  public title: string = '';

  clientes: Cliente[] = [
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
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
      selecionado: false,
      excluido: false,
    },
  ];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const lastSegment =
      this.route.snapshot.url[this.route.snapshot.url.length - 1];
    const segmentTitle =
      lastSegment.toString().charAt(0).toUpperCase() +
      lastSegment.toString().slice(1);
    this.title = segmentTitle;
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
  editar() {
    this.clientes.forEach((cliente) => {
      if (cliente.selecionado == true) {
        this.router.navigate(['clientes/editar'], { state: { cliente } });
      }
    });
  }
  deletar() {
    const clienteAtualizar = this.clientes.find(
      (cliente) => cliente.selecionado == true
    );
    if (clienteAtualizar) {
      clienteAtualizar.excluido = true;
      const index = this.clientes.findIndex(
        (cliente) => cliente.id === clienteAtualizar.id
      );
      this.clientes.splice(index, 1, clienteAtualizar);
    }
  }
}
