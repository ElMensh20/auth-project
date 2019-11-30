import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService,public router: Router) {}
  canActivate(): boolean {
    if (this.isAuthenticated()) {
      this.router.navigate(['sign_in']);
      return false;
    }
    return true;
  }

  isAuthenticated(){
    if(this.authService.getToken()){
      return true;
    }else{
      return false;
    } 
  }
}
