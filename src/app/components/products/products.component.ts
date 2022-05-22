import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  shopingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
    ) {}

  ngOnInit(): void {
    this.shopingCart = this.storeService.get();
    this.productsService.get().subscribe((products) => {
      this.products = products;
      console.log(products);
    })
  }

  onAddedToShoppingCart(product: Product): void {
    this.storeService.add(product);
    this.total = this.storeService.getTotal();
  }
}
