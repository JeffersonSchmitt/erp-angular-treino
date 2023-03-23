import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsRoutingModule } from '../components/components-routing.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardPage } from './dashboard/dashboard.component';
import { CustomerPage } from './customer/customer.component';
import { CustomerRoutingModule } from './customer/customer-routing.module';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [DashboardPage, CustomerPage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CommonModule,
    ComponentsRoutingModule,
    CustomerModule,
    CustomerRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [DashboardPage, CustomerPage, CustomerModule, CustomerRoutingModule],
})
export class PagesModule {}
