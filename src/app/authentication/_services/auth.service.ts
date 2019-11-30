import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 
  signIn(body){
    return this.http.post(environment.url+'login',body)
  }
  signUp(body){
    return this.http.post(environment.url+'user',body);
  }
}
