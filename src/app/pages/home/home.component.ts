import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.productsService.get(this.limit, this.offset).subscribe((products) => {
      this.products = this.products.concat(products);
    });
  }
 
  loadMore(): void {
    this.offset = this.limit;
    this.fetchData();
  }
}
