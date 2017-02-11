
import { Component } from '@angular/core';

let example: string = `
import { NgModule } from 'angular2/core';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

@NgModule({
 bootstrap:    [ /*YourAppComponent*/ ],
 declarations: [ /*YourAppComponent*/ ],
 imports:      [ BrowserModule, Ng2HandySyntaxHighlighterModule ]
})
export class YourAppModule {}
`;

let html: string = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <!-- Load the prismjs theme css in your single page: e.g prism-dark.css -->
  <link rel="stylesheet" href="<path>/prism-okaidia.css">
</head>
<body>
  <!-- body -->
</body>
</html>
`;

let prismjs: string = `
// in index.html
<script src="<path>/prism.js" data-manual></script>

// OR in typescript file (e.g. vendor.browser.ts)
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-<language>';
`;

let use: string = `
  <handy-syntax-highlighter [language]="'typescript'" [content]="'YOUR TYPESCRIPT CODE'"></handy-syntax-highlighter>
`;

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public example: string = example;
  public html: string = html;
  public use: string = use;
  public prismjs: string = prismjs;

  constructor() {
    //
  }
}
