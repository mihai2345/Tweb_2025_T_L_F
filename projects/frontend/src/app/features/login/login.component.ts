import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <h2>Pagina logare</h2>
    <form (ngSubmit)="submit()">
      <input [(ngModel)]="email" name="email" placeholder="Email" />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Parola" />
      <button type="submit">Log in</button>
    </form>
    <a routerLink="/reset">Reset password</a> |
    <a routerLink="/">Back</a>
    <p *ngIf="error" style="color:red">{{ error }}</p>
  `
})
export class LoginComponent {
  private api = inject(ApiService);
  private router = inject(Router);
  email = 'user@example.com';
  password = 'user';
  error = '';

  submit() {
    this.error = '';
    this.api.login(this.email, this.password).subscribe({
      next: res => {
        if (res.role === 'ADMIN') this.router.navigateByUrl('/admin');
        else this.router.navigateByUrl('/user');
      },
      error: () => this.error = 'Invalid credentials'
    });
  }
}


