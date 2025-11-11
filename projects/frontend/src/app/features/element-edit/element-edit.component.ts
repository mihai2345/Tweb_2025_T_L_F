import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService, ElementDto } from '../../core/api.service';

@Component({
  selector: 'app-element-edit',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <h2>Pagina editare elemente</h2>
    <a routerLink="/admin">Back</a>
    <form *ngIf="element" (ngSubmit)="save()">
      <input [(ngModel)]="element.title" name="title" placeholder="Titlu" />
      <textarea [(ngModel)]="element.description" name="description" placeholder="Descriere"></textarea>
      <button type="submit">Save</button>
    </form>
  `
})
export class ElementEditComponent {
  private route = inject(ActivatedRoute);
  private api = inject(ApiService);
  element: ElementDto = { title: '', description: '' };
  id = '';

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.api.element(this.id).subscribe(res => this.element = res);
  }

  save() {
    this.api.updateElement(this.id, this.element).subscribe();
  }
}


