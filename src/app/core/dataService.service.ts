import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FruitsInterface } from '../shared/fruits.interface';
import { UserInterface } from '../shared/user.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ message: string; users: UserInterface[] }> {
    return this.http.get<{ message: string; users: UserInterface[] }>(
      'http://localhost:3000/api/login'
    );
  }
}
