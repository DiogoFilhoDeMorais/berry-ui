import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FruitsInterface } from '../shared/fruits.interface';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}
  //
}
