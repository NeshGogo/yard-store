import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  private user = new BehaviorSubject<User | null>(null);
  myCart$ = this.myCart.asObservable();
  user$ = this.user.asObservable();

  constructor() {}

  getTotal(): number {
    return this.shoppingCart.reduce((sum, prod) => sum + prod.price, 0);
  }

  get(): Product[] {
    return this.shoppingCart;
  }

  add(product: Product): void {
    this.shoppingCart.push(product);
    this.myCart.next(this.shoppingCart);
  }

  addUser(user: User | null){
    this.user.next(user);
  }
}
