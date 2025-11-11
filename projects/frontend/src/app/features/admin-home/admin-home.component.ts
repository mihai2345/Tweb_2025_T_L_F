import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService, ElementDto } from '../../core/api.service';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Pagina principala Admin/angajat</h2>
    <a routerLink="/">Back</a>
    <ul>
      <li *ngFor="let e of elements">
        <a [routerLink]="['/elements', e.id]">Click pe element: {{ e.title }}</a>
        |
        <a [routerLink]="['/elements', e.id, 'edit']">Editare</a>
      </li>
    </ul>
  `
})
export class AdminHomeComponent {
  private api = inject(ApiService);
  elements: ElementDto[] = [];

  constructor() {
    this.api.elements().subscribe(res => this.elements = res);
  }
}


