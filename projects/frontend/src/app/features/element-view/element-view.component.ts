import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService, ElementDto } from '../../core/api.service';

@Component({
  selector: 'app-element-view',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Pagina vizualizare element</h2>
    <a routerLink="/user">Back</a>
    <div *ngIf="element">
      <h3>{{ element.title }}</h3>
      <p>{{ element.description }}</p>
    </div>
  `
})
export class ElementViewComponent {
  private route = inject(ActivatedRoute);
  private api = inject(ApiService);
  element?: ElementDto;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.element(id).subscribe(res => this.element = res);
  }
}


