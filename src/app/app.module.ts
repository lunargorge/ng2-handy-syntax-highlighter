import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { Ng2HandySyntaxHighlighterModule } from '../library';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NoContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        Ng2HandySyntaxHighlighterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
