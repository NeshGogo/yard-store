import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CreateProductDTO, Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  shopingCart: Product[] = [];
  total: number = 0;
  @Input() products: Product[] = [];
  @Output() loadMore = new EventEmitter();
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
  limit = 10;
  offset = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {}
 

  onAddedToShoppingCart(product: Product): void {
    this.storeService.add(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(): void {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string): void {
    this.productsService.getById(id).subscribe({
      next: (product) => {
        this.productChosen = product;
        this.toggleProductDetail();
      },
      error: alert // this is the commun alert of js.
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
    this.productsService.put(id, change).subscribe((product) => {
      const index = this.products.findIndex((p) => p.id === id);
      this.products[index] = product;
      this.productChosen = product;
    });
  }

  deleteProduct() {
    const { id } = this.productChosen;
    this.productsService.delete(id).subscribe(() => {
      const index = this.products.findIndex((p) => p.id === id);
      this.products.splice(index, 1);
      this.showProductDetail = false;
    });
  }

  load(): void {
    this.loadMore.emit();
  }
}
