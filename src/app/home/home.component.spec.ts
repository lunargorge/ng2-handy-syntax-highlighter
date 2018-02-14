import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { HomeComponent } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HomeComponent
    ]
  }));

  it('should have ...', inject([ HomeComponent ], (home: HomeComponent) => {
    expect(true).toBeTruthy();
  }));


});
