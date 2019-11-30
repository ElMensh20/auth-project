import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './_services/token-interceptor.service';
import { ErroInterseptorService } from './_services/erro-interseptor.service';
import { GlobalService } from './_services/global.service';
import { CookieService } from 'ngx-cookie-service'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErroInterseptorService, 
      multi: true },
      GlobalService,
      CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
