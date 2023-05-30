import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CustomerRoutingModule } from './pages/customer/customer-routing.module';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './pages/product/product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SalesRoutingModule } from './pages/sales/sales-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    CustomerRoutingModule,
    ProductRoutingModule,
    SalesRoutingModule,
    FormsModule,
    PagesModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
