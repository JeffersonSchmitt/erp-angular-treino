import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent, SimpleCardComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports: [SidebarComponent, TopbarComponent, SimpleCardComponent],
})
export class ComponentsModule {}
