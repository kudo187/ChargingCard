import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMobiCardComponent } from './buy-mobi-card.component';

describe('BuyMobiCardComponent', () => {
  let component: BuyMobiCardComponent;
  let fixture: ComponentFixture<BuyMobiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyMobiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMobiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
