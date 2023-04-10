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

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    CustomerRoutingModule,
    ProductRoutingModule,
    FormsModule,
    PagesModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
