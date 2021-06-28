import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from './products.models';

const BASE_URL = `${environment.api.url}`;

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getRecommended(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/recommended`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${BASE_URL}/products`, product);
  }

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${BASE_URL}/products`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${BASE_URL}/products/${id}`);
  }

  searchProduct(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products?q=${query}`);
  }
}
