import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(environment.url + url);
  }
  post(url, body) {
    return this.http.post(environment.url + url, body);
  }
  put(url, body) {
    return this.http.post(environment.url + url, body);
  }
}
