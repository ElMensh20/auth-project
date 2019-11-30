import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ErroInterseptorService {

  constructor(private authenticationService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
          console.error("Error Event");
        } else {
          console.log(`error status : ${err.status} ${err.statusText}`);
          switch (err.status) {
            case 401:      //login
              this.router.navigateByUrl("/sign_in");
              break;
            case 403:     //forbidden
              this.router.navigateByUrl("/sign_up");
              break;
          }
        }
      } else {
        console.error("some thing else happened");
      }

      // const error = err.error.message || err.statusText;
      return throwError("some thing else happened");
    }))
  }
}
