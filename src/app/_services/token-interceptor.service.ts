import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authService:AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`,
        },
      });
    }
    // request = request.clone({
    //   url: environment.url + request.url,
    // });
    return next.handle(request);
  }
}
