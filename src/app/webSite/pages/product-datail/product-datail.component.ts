import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-datail',
  templateUrl: './product-datail.component.html',
  styleUrls: ['./product-datail.component.scss'],
})
export class ProductDatailComponent implements OnInit {
  private productId: string | null = null;
  product: Product | null = null;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.productId = params.get('id');
          if (this.productId) {
            return this.productsService.getById(this.productId);
          }
          return [null];
        })
      )
      .subscribe((product) => {
        this.product = product;
      });
  }

  goBack(){
    this.location.back();
  }
}
