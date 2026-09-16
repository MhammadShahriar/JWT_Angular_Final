import { Injectable, inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//export class User {}

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7265/api/Auth/users';

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(
      `${this.apiUrl}/users`
    );

  }
}
