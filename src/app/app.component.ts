import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { CreateUserDTO } from './models/user.model';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  imgUrl = '';
  toggle = true;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storeService: StoreService
  ) {}

  onloaded(url: string) {
    console.log('From father', url);
  }

  toggleImage(): void {
    this.toggle = !this.toggle;
  }

  createUser() {
    const user: CreateUserDTO = {
      name: 'Rafael',
      email: 'rafael@test.com',
      password: '123456',
    };
    this.userService.create(user).subscribe((user) => console.log(user));
  }

  login() {
    this.authService
      .login('rafael@test.com', '123456')
      .pipe(
        switchMap(() => this.authService.profile())
      )
      .subscribe((user) => {
        this.storeService.addUser(user);
      });
  }
}
