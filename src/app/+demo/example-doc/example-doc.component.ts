
import { Component } from '@angular/core';

let demoModuleTs: string = require('!!raw-loader?lang=typescript!./../index.ts');
let exampleComponentTs: string = require('!!raw-loader?lang=typescript!./../example/example.component.ts');
let exampleComponentHtml: string = require('!!raw-loader?lang=html!./../example/example.component.html');
let exampleComponentCss: string = require('!!raw-loader?lang=css!./../example/example.component.css');
let exampleComponentDocTs: string = require('!!raw-loader?lang=typescript!./../example-doc/example-doc.component.ts');
let exampleComponentDocHtml: string = require('!!raw-loader?lang=html!./../example-doc/example-doc.component.html');

@Component({
  selector: 'example-doc',
  templateUrl: './example-doc.component.html'
})

export class ExampleDocComponent {
  demoModuleTs: string = demoModuleTs;
  exampleComponentTs: string = exampleComponentTs;
  exampleComponentHtml: string = exampleComponentHtml;
  exampleComponentCss: string = exampleComponentCss;
  exampleComponentDocTs: string = exampleComponentDocTs;
  exampleComponentDocHtml: string = exampleComponentDocHtml;
}
