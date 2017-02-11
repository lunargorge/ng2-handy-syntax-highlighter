import { ElementRef, Directive, Input, AfterViewInit } from '@angular/core';

declare let Prism: any;

@Directive({
  selector: '[highlighter]'
})

export class HighlighterDirective implements AfterViewInit {
  @Input() public language: string;
  @Input() public content: string;

  constructor(private eltRef: ElementRef) {
  }

  public ngAfterViewInit() {
    this.eltRef.nativeElement.innerHTML = Prism.highlight(this.content, Prism.languages[this.language]);
  }
}
