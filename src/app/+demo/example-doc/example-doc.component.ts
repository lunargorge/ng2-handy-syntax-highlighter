
import { Component } from '@angular/core';

// tslint:disable
let demoModuleTs: string = require('!!raw-loader?lang=typescript!./../index.ts');
let exampleComponentTs: string = require('!!raw-loader?lang=typescript!./../example/example.component.ts');
let exampleComponentDocTs: string = require('!!raw-loader?lang=typescript!./../example-doc/example-doc.component.ts');

@Component({
  selector: 'example-doc',
  template: `
    <h3 class="mt-1">Full doc</h3>

    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#demoModuleTs" role="tab">index.ts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#exampleComponentTs" role="tab">example.component.ts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-danger" data-toggle="tab" href="#exampleComponentDocTs" role="tab">example.component-doc.ts</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active" id="demoModuleTs" role="tabpanel">
        <handy-syntax-highlighter [language]="'typescript'" [content]="demoModuleTs"></handy-syntax-highlighter>
      </div>

      <div class="tab-pane" id="exampleComponentTs" role="tabpanel">
        <handy-syntax-highlighter [language]="'typescript'" [content]="exampleComponentTs"></handy-syntax-highlighter>
      </div>

      <div class="tab-pane" id="exampleComponentDocTs" role="tabpanel">
        <handy-syntax-highlighter [language]="'typescript'" [content]="exampleComponentDocTs"></handy-syntax-highlighter>
      </div>

    </div>
  `
})

export class ExampleDocComponent {
  public demoModuleTs: string = demoModuleTs;
  public exampleComponentTs: string = exampleComponentTs;
  public exampleComponentDocTs: string = exampleComponentDocTs;
}
