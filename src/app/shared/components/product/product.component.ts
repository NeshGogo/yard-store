import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() ShowDetail = new EventEmitter<string>();

  @Input() product: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    category: {
      id: '',
      name: '',
    },
    description: '',
  }

  constructor() { }

  addProduct(): void {
    this.addedProduct.emit(this.product);
  }

  onShowDetail(): void{
    this.ShowDetail.emit(this.product.id);
  }
}
