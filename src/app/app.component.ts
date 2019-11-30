import { Component } from '@angular/core';
import { GlobalService } from './_services/global.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  loading:Boolean;

  constructor(translate: TranslateService,globalService:GlobalService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('ar');
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
    this.loading = globalService.getLoaidng();
  }
}
