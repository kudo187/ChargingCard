import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyVinaCardComponent } from './buy-vina-card.component';

describe('BuyVinaCardComponent', () => {
  let component: BuyVinaCardComponent;
  let fixture: ComponentFixture<BuyVinaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyVinaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyVinaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
