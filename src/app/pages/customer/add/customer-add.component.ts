import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { SearchCepServiceService } from 'src/app/service/search-cep-service.service';
import { ViaCep } from 'src/app/shared/types';
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
  endereco!: ViaCep;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private searchCepService: SearchCepServiceService
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
      typeCustomer: [''],
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

    localStorage.setItem('customers', JSON.stringify(customers));
    this.router.navigate(['clientes/listar']);
  }

  buscarCep() {
    this.searchCepService
      .searchCep(this.customerForm.get('cep')?.value)
      .pipe(
        switchMap((endereco) => {
          this.endereco = endereco;
          return of(endereco);
        })
      )
      .subscribe(() => {
        this.customerForm.patchValue({
          address: this.endereco.logradouro,
          city: this.endereco.localidade,
          state: this.endereco.uf,
          neighborhood: this.endereco.bairro,
        });
      });
  }
}
