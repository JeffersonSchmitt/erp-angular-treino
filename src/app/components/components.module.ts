import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { GraphicCardComponent } from './graphic-card/graphic-card.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    SimpleCardComponent,
    GraphicCardComponent,
  ],
  imports: [BrowserModule, CommonModule, NgChartsModule],
  providers: [],
  bootstrap: [],
  exports: [
    SidebarComponent,
    TopbarComponent,
    SimpleCardComponent,
    GraphicCardComponent,
  ],
})
export class ComponentsModule {}
