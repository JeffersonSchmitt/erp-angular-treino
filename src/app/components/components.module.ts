import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports: [SidebarComponent],
})
export class ComponentsModule {}
