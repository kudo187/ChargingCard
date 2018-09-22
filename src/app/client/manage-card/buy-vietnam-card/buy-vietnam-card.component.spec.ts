import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyVietnamCardComponent } from './buy-vietnam-card.component';

describe('BuyVietnamCardComponent', () => {
  let component: BuyVietnamCardComponent;
  let fixture: ComponentFixture<BuyVietnamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyVietnamCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyVietnamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
