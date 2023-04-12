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
import { ProductModule } from './product/product.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductPage } from './product/product.component';
import { DevExtremeModule } from 'devextreme-angular';

@NgModule({
  declarations: [DashboardPage, CustomerPage, ProductPage],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    ComponentsRoutingModule,
    CustomerModule,
    CustomerRoutingModule,
    ProductModule,
    ProductRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CustomerModule,
    CustomerPage,
    CustomerRoutingModule,
    DashboardPage,
    ProductModule,
    ProductPage,
    ProductRoutingModule,
  ],
})
export class PagesModule {}
