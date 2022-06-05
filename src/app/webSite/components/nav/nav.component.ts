import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Category } from 'src/app/models/product.model';
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
  userEmail: string | null = null ;
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
    this.storeService.user$.subscribe((user) => {
      this.userEmail = user?.email || null;
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
      .login('rafael@test.com', '123456')
      .pipe(switchMap(() => this.authService.profile()))
      .subscribe((user) => {
        this.storeService.addUser(user);
      });
  }
  
  logout(){
    this.authService.logout();
    this.storeService.addUser(null);
  }
}
