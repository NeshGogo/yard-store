import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/product.model';
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
  userEmail = '';
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.storeService.user$.subscribe((user) => {
      this.userEmail = user.email;
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
}
