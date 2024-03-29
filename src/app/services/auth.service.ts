import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Auth } from '../models/auth.model';
import { TokenService } from './token.service';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = `${environment.api}/auth`;
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.api}/login`, { email, password }).pipe(
      tap((rep) => {
        this.tokenService.set(rep.access_token);
      })
    );
  }

  logout() {
    this.tokenService.remove();
    this.user.next(null);
  }

  profile() {
    return this.http.get<User>(`${this.api}/profile`).pipe(
      tap((user) => {
        this.user.next(user);
      })
    );
  }
}
