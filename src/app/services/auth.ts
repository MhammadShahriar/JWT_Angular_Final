import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7265/api/Auth';

  private tokenKey = 'jwt_token';

  login(credentials: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}


// export class AuthService {

//   private readonly tokenKey = 'token';

//   setToken(token: string): void {
//     localStorage.setItem(this.tokenKey, token);
//   }

//   getToken(): string | null {
//     return localStorage.getItem(this.tokenKey);
//   }

//   logout(): void {
//     localStorage.removeItem(this.tokenKey);
//   }

//   isLoggedIn(): boolean {
//     const token = this.getToken();
//     return !!token;
//   }
// }


