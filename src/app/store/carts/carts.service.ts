import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Cart } from './carts.models';

const BASE_URL = `${environment.api.url}`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'token',
  }),
};

@Injectable()
export class CartsService {
  constructor(private http: HttpClient) {}

  getCarts(userId: string): Observable<Cart> {
    return this.http.get<Cart>(`${BASE_URL}/carts/${userId}`);
  }

  addCart(id: number): Observable<Cart> {
    return this.http.post<Cart>(`${BASE_URL}/carts/${id}`, httpOptions);
  }
}
