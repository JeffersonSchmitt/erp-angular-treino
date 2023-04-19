import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListBase } from 'src/app/shared/listBase';
import { Product } from 'src/app/shared/types';

@Component({
  selector: 'product-erp-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent extends ListBase<Product> {
  public title: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerList: Router
  ) {
    super(activatedRoute, routerList);
  }

  ngOnInit() {
    this.title = 'Todos os ' + this.activatedRoute.snapshot.url[0];
    this.items = JSON.parse(localStorage.getItem('products') || '[]');

    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
  }

  selectProduct(product: Product) {
    this.select(product);
  }

  editProduct() {
    this.items.forEach((product) => {
      if (product.selected == true) {
        this.routerList.navigate(['produtos/editar'], { state: { product } });
      }
    });
  }

  deleteProduct() {
    this.delete('products');
  }

  searchProduct(pSearchTerm: string) {
    this.search(pSearchTerm);
  }
}
