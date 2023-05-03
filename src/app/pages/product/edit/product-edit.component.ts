import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/types';

@Component({
  selector: 'product-erp-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
  product?: Product;
  title: string = 'Edição de produto';
  products!: Product[];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.product = history.state.product;
    console.log(this.product);

    const segmentTitle =
      this.product!.name.toString().charAt(0).toUpperCase() +
      this.product!.name.toString().slice(1);
    this.title = segmentTitle;

    this.products = JSON.parse(localStorage.getItem('products') || '[]');
    console.log(this.products);
  }

  editar() {
    const index = this.products.findIndex((c) => c.id === this.product?.id);

    if (index !== -1) {
      if (this.product) {
        this.product!.selected = false;
        this.product!.deleted = false;
        Object.assign(this.products[index], this.product);
      }
    }
    localStorage.setItem('products', JSON.stringify(this.products));
    this.router.navigate(['produtos/listar']);
  }

  voltar() {
    if (
      window.confirm('Os dados digitados não serão salvos, deseja continuar?')
    ) {
      this.router.navigate(['produtos/listar']);
    }
  }
}
