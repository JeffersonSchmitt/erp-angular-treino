import { PagesModule } from './pages/pages.module';
import { CustomerRoutingModule } from './pages/customer/customer-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPage } from './pages/customer/customer.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { CustomerListComponent } from './pages/customer/list/customer-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'clientes', component: CustomerPage },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomerRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
