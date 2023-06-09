import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, Product } from 'src/app/shared/types';

@Component({
  selector: 'erp-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  title: string = 'Adicionar produto';
  productForm!: FormGroup;
  customers!: Customer[];
  suppliers: Customer[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      brand: [''],
      category: [''],
      codeBar: [''],
      cost: [''],
      description: [''],
      imageUrl: [''],
      measuringUnit: [''],
      minQuantity: [''],
      name: [''],
      price: [''],
      quantity: [''],
      supplier: [''],
    });
  }
  ngOnInit() {
    this.customers = JSON.parse(localStorage.getItem('customers') || '[]');
    this.customers.forEach((customer) => {
      if (customer.typeCustomer === 'fornecedor') {
        this.suppliers.push(customer);
      }
    });
  }

  voltar() {
    if (
      window.confirm('Os dados digitados não serão salvos, deseja continuar?')
    ) {
      this.router.navigate(['produtos/listar']);
    }
  }

  adicionar() {
    let products = JSON.parse(localStorage.getItem('products') || '[]');

    const newProduct = {
      id: products.length + 1,
      ...this.productForm.value,
      selected: false,
      deleted: false,
    };
    products.push(newProduct);

    localStorage.setItem('products', JSON.stringify(products));
    this.router.navigate(['produtos/listar']);
  }
}
