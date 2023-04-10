import { CustomerAddComponent } from './add/customer-add.component';
import { CustomerEditComponent } from './edit/customer-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './list/customer-list.component';

const routes: Routes = [
  { path: 'clientes', redirectTo: 'clientes/listar', pathMatch: 'full' },
  { path: 'clientes/listar', component: CustomerListComponent },
  { path: 'clientes/editar', component: CustomerEditComponent },
  {
    path: 'clientes/adicionar',
    component: CustomerAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
