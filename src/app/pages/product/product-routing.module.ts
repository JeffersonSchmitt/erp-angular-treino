import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './add/product-add.component';
import { ProductEditComponent } from './edit/product-edit.component';
import { ProductListComponent } from './list/product-list.component';

const routes: Routes = [
  { path: 'produtos', redirectTo: 'produtos/listar', pathMatch: 'full' },
  { path: 'produtos/listar', component: ProductListComponent },
  { path: 'produtos/editar', component: ProductEditComponent },
  {
    path: 'produtos/adicionar',
    component: ProductAddComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
