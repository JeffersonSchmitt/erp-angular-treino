import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
export interface FormComponent {
  hasFormChanges: () => boolean;
}
@Component({
  selector: 'app-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent {
  public title: string = '';

  ngOnInit() {
    const lastSegment =
      this.route.snapshot.url[this.route.snapshot.url.length - 1];
    const segmentTitle =
      lastSegment.toString().charAt(0).toUpperCase() +
      lastSegment.toString().slice(1);
    this.title = segmentTitle;
  }

  voltar() {
    if (
      window.confirm('Os dados digitados não serão salvos, deseja continuar?')
    ) {
      this.router.navigate(['clientes/listar']);
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) {}
}
