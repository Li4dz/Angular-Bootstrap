import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LoginModule } from './app/components/login/login.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(LoginModule)
  .catch(err => console.log(err));
