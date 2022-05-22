import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  shopingCart: Product[] = []
  total: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      image: './assets/img/toy.jpg',
      price: 565
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      image: './assets/img/bike.jpg',
      price: 356
    },
    {
      id: '3',
      image: './assets/img/album.jpg',
      name: 'Collección de albumnes',
      price: 34
    },
    {
      id: '4',
      name: 'Mis libros',
      image: './assets/img/books.jpg',
      price: 23
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddedToShoppingCart(product: Product): void {
    this.shopingCart.push(product);
    this.total = this.shopingCart.reduce((sum, prod) => sum + prod.price, 0);
  }
}
