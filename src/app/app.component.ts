import { Component } from '@angular/core';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { CreateUserDTO } from './models/user.model';

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
    private userService: UserService
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
    }
    this.userService.create(user)
      .subscribe(user => console.log(user));
  }

  login(){
    this.authService.login('rafael@test.com', '123456')
      .subscribe((response) => {
        console.log(response);
      })
  }
}
