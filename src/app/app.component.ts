import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { CreateUserDTO } from './models/user.model';
import { StoreService } from './services/store.service';
import { FileService } from './services/file.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  imgUrl = '';
  toggle = true;
  imgUploaded  = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storeService: StoreService,
    private fileService: FileService
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
      .pipe(switchMap(() => this.authService.profile()))
      .subscribe((user) => {
        this.storeService.addUser(user);
      });
  }

  downloadFile(type = 'text') {
    const url =
      type === 'pdf'
        ? 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf'
        : './assets/files/test.txt';
    this.fileService
      .get('test.' + type, url, 'application/' + type)
      .subscribe(() => console.info('was ok'));
  }

  uploadFile(event: Event){
    const element = event?.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(!file){
      return;
    }
    this.fileService.upload(file)
      .subscribe(resp => {
        this.imgUploaded = resp.location
      })
  }
}
