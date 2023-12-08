import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from './user.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<UserInterface> {
    return this.http.post<UserInterface>('http://localhost:3000/api/login', {
      username,
      password,
    });
  }
}
