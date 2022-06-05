import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Auth } from '../models/auth.model';
import { TokenService } from './token.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = `${environment.api}/auth`;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.api}/login`, {email, password})
    .pipe(
      tap(rep => {
        this.tokenService.set(rep.access_token);
      })
    );
  }

  logout(){
    this.tokenService.remove();
  }

  profile() {
    return this.http.get<User>(`${this.api}/profile`);
  }
}
