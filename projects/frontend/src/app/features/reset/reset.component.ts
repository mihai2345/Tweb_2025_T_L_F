import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <h2>Resetare parola</h2>
    <form (ngSubmit)="submit()">
      <input [(ngModel)]="email" name="email" placeholder="Email" />
      <input [(ngModel)]="newPassword" name="newPassword" type="password" placeholder="Parola noua" />
      <button type="submit">Change password</button>
    </form>
    <a routerLink="/login">Back</a>
    <p *ngIf="message" style="color:green">{{ message }}</p>
    <p *ngIf="error" style="color:red">{{ error }}</p>
  `
})
export class ResetComponent {
  private api = inject(ApiService);
  email = '';
  newPassword = '';
  message = '';
  error = '';

  submit() {
    this.message = '';
    this.error = '';
    this.api.reset(this.email, this.newPassword).subscribe({
      next: res => this.message = res,
      error: err => this.error = err?.error || 'Error'
    });
  }
}


