import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Category } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showMenu = false;
  counter = 0;
  user: User | null = null ;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private categoriesService: CategoriesService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.categoriesService
      .get()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  login() {
    this.authService
      .login('admin@mail.com', 'admin123')
      .pipe(switchMap(() => this.authService.profile()))
      .subscribe();
  }

  logout(){
    this.authService.logout();
  }
}
