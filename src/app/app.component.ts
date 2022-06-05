import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { CreateUserDTO } from './models/user.model';
import { StoreService } from './services/store.service';
import { FileService } from './services/file.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <button (click)="createUser()">Add user</button>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'my-store';
  imgUrl = '';
  toggle = true;
  imgUploaded = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storeService: StoreService,
    private fileService: FileService,
    private tokenService: TokenService,
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.get();
    if(token){
      this.authService.profile()
      .subscribe();
    }
  }

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

  downloadFile(type = 'text') {
    const url =
      type === 'pdf'
        ? 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf'
        : './assets/files/test.txt';
    this.fileService
      .get('test.' + type, url, 'application/' + type)
      .subscribe(() => console.info('was ok'));
  }

  uploadFile(event: Event) {
    const element = event?.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (!file) {
      return;
    }
    this.fileService.upload(file).subscribe((resp) => {
      this.imgUploaded = resp.location;
    });
  }
}
