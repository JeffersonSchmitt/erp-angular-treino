import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'erp-angular-treino';

  itens: MenuItem[] = [
    { icone: 'fa-solid fa-gauge', titulo: 'Dashboard' },
    { icone: 'fa-solid fa-user', titulo: 'Clientes' },
    { icone: 'fa-solid fa-cart-shopping', titulo: 'Produtos' },
    { icone: 'fa-solid fa-money-bill', titulo: 'Vendas' },
    { icone: 'fa-solid fa-wallet', titulo: 'Pedidos de compra' },
    { icone: 'fa-solid fa-dolly', titulo: 'Estoque' },
    { icone: 'fa-solid fa-cash-register', titulo: 'Caixa' },
    { icone: 'fa-solid fa-square-poll-vertical', titulo: 'Relatórios' },
    { icone: 'fa-solid fa-gear', titulo: 'Configurações' },
    { icone: 'fa-solid fa-right-from-bracket', titulo: 'Sair' },
  ];
}
