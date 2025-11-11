import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService, ElementDto } from '../../core/api.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Pagina principala user</h2>
    <a routerLink="/">Back</a>
    <ul>
      <li *ngFor="let e of elements">
        <a [routerLink]="['/elements', e.id]">Click pe element: {{ e.title }}</a>
      </li>
    </ul>
  `
})
export class UserHomeComponent {
  private api = inject(ApiService);
  elements: ElementDto[] = [];

  constructor() {
    this.api.elements().subscribe(res => this.elements = res);
  }
}


