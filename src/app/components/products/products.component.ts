import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  shopingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    category: {
      id: '',
      name: '',
    },
    description: '',
  };

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.shopingCart = this.storeService.get();
    this.productsService.get().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  onAddedToShoppingCart(product: Product): void {
    this.storeService.add(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(): void {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string): void {
    console.log(id);
    this.productsService.getById(id).subscribe((product) => {
      this.productChosen = product;
      this.toggleProductDetail();
    });
  }

  addNewProduct() {
    const product: CreateProductDTO = {
      title: 'New Product',
      description: 'Bla bla bla',
      images: [''],
      categoryId: '1',
      price: 200,
    };
    this.productsService.set(product).subscribe((product) => {
      this.products.unshift(product);
    });
  }

  updateProduct() {
    const change = {
      title: 'change title',
    };
    const { id } = this.productChosen;
    this.productsService.put(id, change)
    .subscribe(product => {
      const index = this.products.findIndex(p => p.id === id);
      this.products[index] = product;
      this.productChosen = product;
    })
  }
}
