
import { Component } from '@angular/core';

@Component({
  selector: 'example',
  template: `
    <h3 class="mt-1">The result of the action component</h3>
    <p>
      {{helloworld}}
    </p>

    <!-- This is your full doc-->
    <example-doc></example-doc>
  `,
})

export class ExampleComponent {
  public helloworld: string = 'Hello world !';
}
