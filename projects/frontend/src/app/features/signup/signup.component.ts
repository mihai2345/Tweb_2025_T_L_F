import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <h2>Formular creare cont</h2>
    <form (ngSubmit)="submit()">
      <input [(ngModel)]="email" name="email" placeholder="Email" />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Parola" />
      <label><input type="checkbox" [(ngModel)]="admin" name="admin" /> Admin</label>
      <button type="submit">Submit</button>
    </form>
    <a routerLink="/">Back</a>
    <p *ngIf="error" style="color:red">{{ error }}</p>
  `
})
export class SignupComponent {
  private api = inject(ApiService);
  private router = inject(Router);
  email = '';
  password = '';
  admin = false;
  error = '';

  submit() {
    this.api.signup(this.email, this.password, this.admin).subscribe({
      next: () => this.router.navigateByUrl('/login'),
      error: err => this.error = err?.error || 'Error'
    });
  }
}


