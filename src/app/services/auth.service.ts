import { Observable, of, throwError } from 'rxjs';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localStorageAvailable: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.localStorageAvailable = isPlatformBrowser(this.platformId);
  }
  
  private getLocalStorage(): Storage | null {
    if (this.localStorageAvailable) {
      return localStorage;
    }
    return null;
  }

  setToken(token: string): void {
    const localStorage = this.getLocalStorage();
    if (localStorage) {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    const localStorage = this.getLocalStorage();
    return localStorage ? localStorage.getItem('token') : null;
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    const localStorage = this.getLocalStorage();
    if (localStorage) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
