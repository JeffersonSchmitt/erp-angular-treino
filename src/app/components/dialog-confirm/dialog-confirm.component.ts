import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'erp-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogConfirmComponent {
  constructor(private el: ElementRef) {}

  show() {
    this.el.nativeElement.querySelector('.modal').classList.add('show');
  }
}
