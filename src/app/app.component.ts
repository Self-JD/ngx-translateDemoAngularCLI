import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService) {
		translate.addLangs(['en', 'hi']);
	      translate.setDefaultLang('en');

	      let browserLang = translate.getBrowserLang();
	      translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
	  }
}
