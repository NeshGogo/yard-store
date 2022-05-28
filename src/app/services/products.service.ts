import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CreateProductDTO, Product } from '../models/product.model';
import { Observable, pipe } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _api: string = environment.api + '/products';

  constructor(private http: HttpClient) {}

  get(limit?: number, offset?: number): Observable<Product[]> {
    // This is an other way to send params dynamicly.
    let params = new HttpParams();
    if (limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this._api, { params })
    .pipe(retry(5));
  }

  getByPagination(limit: number, offset: number): Observable<Product[]> {
    // one way to send params
    return this.http.get<Product[]>(this._api, {
      params: {
        limit,
        offset,
      },
    });
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this._api}/${id}`);
  }

  set(dto: CreateProductDTO): Observable<Product> {
    return this.http.post<Product>(this._api, dto);
  }

  put(id: string, dto: Partial<CreateProductDTO>): Observable<Product> {
    return this.http.put<Product>(`${this._api}/${id}`, dto);
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this._api}/${id}`);
  }
}
