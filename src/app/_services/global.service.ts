import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {}
  // User object
  private user:any;
  setUser(user){
    this.user=user
  }
  getUser(){
    return this.user;
  }
  //Loading for progress spinner
  loading=false;
  getLoaidng(){
    return this.loading
  }
  startLoading(){
    this.loading=true;
  }
  endLoading(){
    this.loading=false;
  }
}
