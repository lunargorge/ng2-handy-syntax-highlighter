
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleComponent } from './example/example.component';
import { ExampleDocComponent } from './example-doc/example-doc.component';

// You should use:
// import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';
import { Ng2HandySyntaxHighlighterModule } from '../../library/index';

// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: ExampleComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [ ExampleComponent, ExampleDocComponent ],
  imports: [
    CommonModule,
    Ng2HandySyntaxHighlighterModule,
    RouterModule.forChild(routes),
  ]
})
export class DemoModule {

}
