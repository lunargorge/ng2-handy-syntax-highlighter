
import { Component } from '@angular/core';

const example = `
import { NgModule } from 'angular2/core';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

@NgModule({
 declarations: [ /*YourComponent*/ ],
 imports:      [ Ng2HandySyntaxHighlighterModule ]
})
export class YourModule {}
`;

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="assets/<your_path>/prism-okaidia.css">
  <script src="assets/<your_path><path>/prism.js"></script>
</head>
<body>
  <!-- body -->
</body>
</html>
`;

const use = `
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

  constructor() {
    //
  }
}
