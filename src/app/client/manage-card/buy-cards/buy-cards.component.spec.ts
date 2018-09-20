import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCardsComponent } from './buy-cards.component';

describe('BuyCardsComponent', () => {
  let component: BuyCardsComponent;
  let fixture: ComponentFixture<BuyCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
