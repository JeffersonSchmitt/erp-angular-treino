import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { GraphicCardComponent } from './graphic-card/graphic-card.component';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from '../app-routing.module';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    SimpleCardComponent,
    GraphicCardComponent,
    DialogConfirmComponent,
  ],
  imports: [BrowserModule, CommonModule, NgChartsModule, AppRoutingModule],
  providers: [],
  bootstrap: [],
  exports: [
    SidebarComponent,
    TopbarComponent,
    SimpleCardComponent,
    GraphicCardComponent,
    DialogConfirmComponent,
  ],
})
export class ComponentsModule {}
