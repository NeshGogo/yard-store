import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = `${environment.api}/auth`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.api}/login`, {email, password});
  }

  profile(token: string) {
    return this.http.get<User>(`${this.api}/profile`, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
  }
}
