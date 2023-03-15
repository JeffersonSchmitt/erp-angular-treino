import { Component, Input } from '@angular/core';

@Component({
  selector: 'erp-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent {
  @Input() title: string = '';
  @Input() typeData: string = '';
  @Input() data: string = '';
}
