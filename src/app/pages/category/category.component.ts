import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import {switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
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
        tap((params: ParamMap) => {
          this.categoryId = params.get('id');
        }),
        switchMap(() => {
          if (this.categoryId) {
            return this.productsService.getByCategory(this.categoryId, this.limit, this.offset);
          }
          return [];
        })
      )
      .subscribe((products) => {
        this.products = products;
      });
  }
}
