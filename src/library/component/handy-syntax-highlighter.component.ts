import { Component, Input } from '@angular/core';

@Component({
  selector: 'handy-syntax-highlighter',
  templateUrl: './handy-syntax-highlighter.component.html'
})

export class HandySyntaxHighlighterComponent {
  @Input() language: string;
  @Input() content: string;
}
