import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AuthResponse {
  userId: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

export interface ElementDto {
  id?: string;
  title: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = 'http://localhost:8080/api';

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.base}/auth/login`, { email, password });
  }

  signup(email: string, password: string, admin = false) {
    return this.http.post<AuthResponse>(`${this.base}/auth/signup`, { email, password, admin });
  }

  reset(email: string, newPassword: string) {
    return this.http.post(`${this.base}/auth/reset`, { email, newPassword }, { responseType: 'text' });
  }

  elements() {
    return this.http.get<ElementDto[]>(`${this.base}/elements`);
  }

  element(id: string) {
    return this.http.get<ElementDto>(`${this.base}/elements/${id}`);
  }

  updateElement(id: string, dto: ElementDto) {
    return this.http.put<ElementDto>(`${this.base}/elements/${id}`, dto);
  }
}


