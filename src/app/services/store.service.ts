import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingCart: Product[] = [];

  constructor() {}

  getTotal(): number {
    return this.shoppingCart.reduce((sum, prod) => sum + prod.price, 0);
  }

  get(): Product[] {
    return this.shoppingCart;
  }

  add(product: Product): void {
    this.shoppingCart.push(product);
  }
}
