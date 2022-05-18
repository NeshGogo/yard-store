import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  imgUrl = '';
  toggle = true;
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

  onloaded(url: string){
    console.log('From father', url);
  }

  toggleImage(): void{
    this.toggle = !this.toggle;
  }
}
