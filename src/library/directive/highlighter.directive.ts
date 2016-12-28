import { ElementRef, Directive, Input, AfterViewInit } from '@angular/core';

declare let Prism: any;

@Directive({
  selector: '[highlighter]'
})

export class HighlighterDirective implements AfterViewInit {
  @Input() language: string;
  @Input() content: string;

  constructor(private eltRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.eltRef.nativeElement.innerHTML = Prism.highlight(this.content, Prism.languages[this.language]);
  }
}
