import { ComponentsModule } from './../../components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './list/customer-list.component';
import { CustomerEditComponent } from './edit/customer-edit.component';
import { CustomerAddComponent } from './add/customer-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent,
    CustomerAddComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CustomerRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CustomerRoutingModule,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerAddComponent,
  ],
})
export class CustomerModule {}
