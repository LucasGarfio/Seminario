import { TestBed } from '@angular/core/testing';

import { PizzaCart } from './pizza-cart';

describe('PizzaCart', () => {
  let service: PizzaCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
