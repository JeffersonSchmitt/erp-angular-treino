import { CustomerRoutingModule } from './pages/customer/customer-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPage } from './pages/customer/customer.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { ProductPage } from './pages/product/product.component';
import { ProductRoutingModule } from './pages/product/product-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'clientes', component: CustomerPage },
  { path: 'produtos', component: ProductPage },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductRoutingModule,
    CustomerRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
