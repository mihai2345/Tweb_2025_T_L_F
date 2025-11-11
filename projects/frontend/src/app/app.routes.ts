import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/start/start.component').then(m => m.StartComponent) },
  { path: 'login', loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) },
  { path: 'signup', loadComponent: () => import('./features/signup/signup.component').then(m => m.SignupComponent) },
  { path: 'reset', loadComponent: () => import('./features/reset/reset.component').then(m => m.ResetComponent) },
  { path: 'user', loadComponent: () => import('./features/user-home/user-home.component').then(m => m.UserHomeComponent) },
  { path: 'admin', loadComponent: () => import('./features/admin-home/admin-home.component').then(m => m.AdminHomeComponent) },
  { path: 'elements/:id', loadComponent: () => import('./features/element-view/element-view.component').then(m => m.ElementViewComponent) },
  { path: 'elements/:id/edit', loadComponent: () => import('./features/element-edit/element-edit.component').then(m => m.ElementEditComponent) },
];
