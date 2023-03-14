import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/shared/types';

@Component({
  selector: 'erp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() menuList: MenuItem[] = [];
}
