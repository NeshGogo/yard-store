import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  shopingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      image: './assets/img/toy.jpg',
      price: 565,
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      image: './assets/img/bike.jpg',
      price: 356,
    },
    {
      id: '3',
      image: './assets/img/album.jpg',
      name: 'Collección de albumnes',
      price: 34,
    },
    {
      id: '4',
      name: 'Mis libros',
      image: './assets/img/books.jpg',
      price: 23,
    },
  ];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.shopingCart = this.storeService.get();
  }

  onAddedToShoppingCart(product: Product): void {
    this.storeService.add(product);
    this.total = this.storeService.getTotal();
  }
}
