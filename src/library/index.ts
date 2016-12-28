import { NgModule } from '@angular/core';
import { HighlighterDirective } from './directive/highlighter.directive';
import { HandySyntaxHighlighterComponent } from './component/handy-syntax-highlighter.component';

@NgModule({
  declarations: [ HighlighterDirective, HandySyntaxHighlighterComponent ],
  exports: [ HandySyntaxHighlighterComponent ]
})

export class Ng2HandySyntaxHighlighterModule {

}
