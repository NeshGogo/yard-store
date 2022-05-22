import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Output() addedProduct = new EventEmitter<Product>();

  @Input() product: Product = {
    id: '',
    name: '',
    image: '',
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void {
    this.addedProduct.emit(this.product);
  }
}
