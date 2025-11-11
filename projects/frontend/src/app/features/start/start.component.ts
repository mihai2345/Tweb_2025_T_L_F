import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Pagina de start</h2>
    <nav>
      <a routerLink="/login">Log in</a> |
      <a routerLink="/signup">Sign up</a>
    </nav>
  `
})
export class StartComponent {}


