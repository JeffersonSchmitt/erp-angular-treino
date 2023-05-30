import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { SalesAddComponent } from './add/sales-add.component';
import { SalesEditComponent } from './edit/sales-edit.component';
import { SalesListComponent } from './list/sales-list.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  declarations: [SalesListComponent, SalesEditComponent, SalesAddComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SalesRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    SalesRoutingModule,
    SalesListComponent,
    SalesEditComponent,
    SalesAddComponent,
  ],
})
export class SalesModule {}
