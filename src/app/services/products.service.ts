import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateProductDTO, Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _api: string = environment.api + '/products';

  constructor(private http: HttpClient) {}

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this._api);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this._api}/${id}`);
  }

  set(dto: CreateProductDTO){
    return this.http.post<Product>(this._api, dto);
  }
}
