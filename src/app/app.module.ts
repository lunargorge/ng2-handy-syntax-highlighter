import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { Ng2HandySyntaxHighlighterModule } from '../library/index';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2HandySyntaxHighlighterModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ]
})
export class AppModule {
  constructor() {}

}

