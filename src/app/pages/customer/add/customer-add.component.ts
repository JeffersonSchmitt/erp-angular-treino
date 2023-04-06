import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
export interface FormComponent {
  hasFormChanges: () => boolean;
}
@Component({
  selector: 'app-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent {
  title: string = 'Adicionar cliente';
  customerForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      email: ['', Validators.required],
      cep: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {}

  voltar() {
    if (
      window.confirm('Os dados digitados não serão salvos, deseja continuar?')
    ) {
      this.router.navigate(['clientes/listar']);
    }
  }

  adicionar() {
    let customers = JSON.parse(localStorage.getItem('customers') || '[]');

    const newCustomer = {
      id: customers.length + 1,
      ...this.customerForm.value,
      selected: false,
      deleted: false,
    };
    customers.push(newCustomer);
    console.log(newCustomer);

    localStorage.setItem('customers', JSON.stringify(customers));
    this.router.navigate(['clientes/listar']);
  }
}
