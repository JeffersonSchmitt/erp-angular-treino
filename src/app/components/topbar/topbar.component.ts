import { Component, Input } from '@angular/core';

@Component({
  selector: 'erp-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Input() public titulo: string = '';
}
