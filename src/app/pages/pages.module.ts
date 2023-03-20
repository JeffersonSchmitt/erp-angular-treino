import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsRoutingModule } from '../components/components-routing.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CommonModule,
    ComponentsRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [DashboardComponent],
})
export class PagesModule {}
