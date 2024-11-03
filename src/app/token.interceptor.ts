import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const toExclude = "/login";

    if (request.url.search(toExclude) === -1) {
      const jwt = this.authService.getToken();
      if (jwt) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${jwt}` }
        });
      }
    }

    return next.handle(request);
  }
}
