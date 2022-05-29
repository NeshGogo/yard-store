import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { CreateProductDTO, Product } from '../models/product.model';
import { Observable, throwError, zip } from 'rxjs';
import { retry, catchError, map, switchMap } from 'rxjs/operators';
import { checkTime } from '../interceptors/time.interceptor';

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
    return this.http
      .get<Product[]>(this._api, { params, context: checkTime() })
      .pipe(
        retry(5),
        map((products) => {
          return products.map((product) => {
            return {
              ...product,
              taxes: product.price * 0.18,
            };
          });
        })
      );
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
    return this.http.get<Product>(`${this._api}/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === HttpStatusCode.NotFound) {
          return throwError('Product not found');
        }
        if (err.status === HttpStatusCode.InternalServerError) {
          return throwError('We have some problems, please try again later.');
        }
        if (err.status === HttpStatusCode.Unauthorized) {
          return throwError('You do not have access');
        }

        return throwError(err.message);
      })
    );
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

  // This method is for example purpose
  readAndUpdate(id: string): Observable<Product> {
    // Using ZIp to execute multiple observable at the same time like Promise.All.
    zip(this.getById(id), this.put(id, { title: 'change' })).subscribe(
      (values) => {
        const read = values[0];
        const update = values[1];
      }
    );

    // usign switchMap to do different thing after one complete;
    return this.getById(id).pipe(
      switchMap((product) => this.put(product.id, { title: 'change' }))
    );
  }
}
