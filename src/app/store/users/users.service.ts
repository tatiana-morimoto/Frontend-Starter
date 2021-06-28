import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {User} from './users.models';

const BASE_URL = `${environment.api.url}`;

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<User> {
    return this.http
      .get<User>(`${BASE_URL}/users/${id}`);
  }
}
