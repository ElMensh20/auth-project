import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService:CookieService) {}

  getToken(){
    return this.cookieService.get('token')
  }

  setToken(token){
    this.cookieService.set('token',token)
  }

  logOut(){
    
  }

}
