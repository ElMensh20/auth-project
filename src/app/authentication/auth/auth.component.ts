import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GlobalService } from 'src/app/_services/global.service';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  constructor(translate:TranslateService,private userService:AuthService,private router: Router,private globalService:GlobalService) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
   }

  ngOnInit() {

  }
}
