import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productId: string | null = null;
  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor( private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
    this.route.queryParamMap.subscribe((query) => {
      const id = query.get('product');
      if (id) {
        this.productId = id;
      }
    });
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
