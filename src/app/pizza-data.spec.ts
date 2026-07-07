import { TestBed } from '@angular/core/testing';

import { PizzaData } from './pizza-data';

describe('PizzaData', () => {
  let service: PizzaData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
