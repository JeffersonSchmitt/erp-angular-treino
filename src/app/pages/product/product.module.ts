import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductAddComponent } from './add/product-add.component';
import { ProductEditComponent } from './edit/product-edit.component';
import { ProductListComponent } from './list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ProductRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ProductRoutingModule,
    ProductListComponent,
    ProductEditComponent,
    ProductAddComponent,
  ],
})
export class ProductModule {}
