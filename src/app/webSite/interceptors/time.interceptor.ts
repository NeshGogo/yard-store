import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// create a type of context to check
const CHECK_TIME = new HttpContextToken<boolean>(() => false);

// return a context with the tipe CHECK_TIME that we build on top;
export const checkTime = () => {
  return new HttpContext().set(CHECK_TIME, true);
};

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // This allow us to check time only in the requests that satisfy the context type CHECK_TIME.
    if (!request.context.get(CHECK_TIME)) {
      return next.handle(request);
    }

    const start = performance.now();
    return next.handle(request).pipe(
      tap(() => {
        const diff = performance.now() - start + 'ms';
        console.info(request.url, diff);
      })
    );
  }
}
