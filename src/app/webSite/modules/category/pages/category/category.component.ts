import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  template: `<app-products
    [products]="products"
    (loadMore)="loadMore()"
    [productId]="productId"
  ></app-products>`,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  productId: string | null = null;
  products: Product[] = [];
  categoryId: string | null = null;
  limit = 10;
  offset = 0;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.categoryId = params.get('id');
          if (this.categoryId) {
            return this.productsService.getByCategory(
              this.categoryId,
              this.limit,
              this.offset
            );
          }
          return [];
        })
      )
      .subscribe((products) => {
        this.products = products;
      });
      this.route.queryParamMap.subscribe((query) => {
        const id = query.get('product');
        if (id) {
          this.productId = id;
        }
      });
  }

  loadMore() {
    if (!this.categoryId) return;
    this.offset = this.limit;
    this.productsService
      .getByCategory(this.categoryId, this.limit, this.offset)
      .subscribe((products) => {
        this.products = this.products.concat(products);
      });
  }
}
