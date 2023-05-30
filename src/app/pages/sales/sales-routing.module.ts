import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './list/sales-list.component';
import { SalesEditComponent } from './edit/sales-edit.component';
import { SalesAddComponent } from './add/sales-add.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'vendas', redirectTo: 'vendas/adicionar', pathMatch: 'full' },
  { path: 'vendas/listar', component: SalesListComponent },
  { path: 'vendas/editar', component: SalesEditComponent },
  {
    path: 'vendas/adicionar',
    component: SalesAddComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
