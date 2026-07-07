import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoblelPizzas } from './doblel-pizzas';

describe('DoblelPizzas', () => {
  let component: DoblelPizzas;
  let fixture: ComponentFixture<DoblelPizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoblelPizzas],
    }).compileComponents();

    fixture = TestBed.createComponent(DoblelPizzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
